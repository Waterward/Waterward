import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Modal, Button } from 'react-native';
import { getFirestore, collection, query, onSnapshot } from 'firebase/firestore';
import { app } from '../firebaseConfig';
import * as Paho from 'paho-mqtt';
import WaterLevel from './WaterLevel';
import Temperature from './Temperature'; 
import PH from './PH';
import TDS from './TDS';
import Turbidity from './Turbidity';
import WaterFlow from './WaterFlow';
import Valve from './Valve';
import Motor from './Motor';
import AddTank from './AddTank';
import Hub from './Hub';

const firestore = getFirestore(app);

const data = [
  { key: '1', title: 'Water Level', imageUri: 'https://senix.com/wp-content/uploads/liquid-level-sensing-150x150-2.jpg' },
  { key: '2', title: 'Temperature', imageUri: 'https://static.vecteezy.com/system/resources/previews/000/583/654/non_2x/cold-weather-thermometer-icon-vector.jpg' },
  { key: '3', title: 'PH', imageUri: 'https://static.thenounproject.com/png/3215400-200.png' },
  { key: '4', title: 'TDS (Total Dissolved Solids)', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT793CV9UmXrieExeS51hNoVaCZTyodZnnzbixV-sHZyg&s' },
  { key: '5', title: 'Turbidity', imageUri: 'https://www.shutterstock.com/image-vector/turbidity-sensor-icon-vector-illustration-600nw-2409562981.jpg' },
  { key: '6', title: 'Water Flow', imageUri: 'https://as2.ftcdn.net/v2/jpg/05/99/88/65/1000_F_599886547_4EkCK47sLeDT7c3Byrzk9aRLdnOWW1S2.jpg' },
  { key: '7', title: 'Control Tank Valve', imageUri: 'https://i.pinimg.com/564x/3e/e8/8c/3ee88cdde71f6c4248663bc0ac4c105c.jpg' },
  { key: '8', title: 'Control Tank Motor', imageUri: 'https://cdn-icons-png.freepik.com/512/3799/3799458.png' },
  { key: '9', title: 'Add Tank', imageUri: 'https://static.thenounproject.com/png/1595245-200.png' },
  { key: '10', title: 'Add WaterWard Hub', imageUri: 'https://cdn0.iconfinder.com/data/icons/smarthome-line/32/05-512.png' },
];

const renderComponent = (title, tankId) => {
  switch (title) {
    case 'Water Level':
      return <WaterLevel tankId={tankId} />;
    case 'Temperature':
      return <Temperature tankId={tankId} />;
    case 'PH':
      return <PH tankId={tankId} />;
    case 'TDS (Total Dissolved Solids)':
      return <TDS tankId={tankId} />;
    case 'Turbidity':
      return <Turbidity tankId={tankId} />;
    case 'Water Flow':
      return <WaterFlow tankId={tankId} />;
    case 'Control Tank Valve':
      return <Valve tankId={tankId} />;
    case 'Control Tank Motor':
      return <Motor tankId={tankId} />;
    case 'Add Tank':
      return <AddTank />;
    case 'Add WaterWard Hub':
      return <Hub />;
    default:
      return <Text>No Component Found</Text>;
  }
};

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [tanks, setTanks] = useState([]);
  const [selectedTank, setSelectedTank] = useState(null);
  const [client, setClient] = useState(null);

  useEffect(() => {
    const q = query(collection(firestore, 'tanks'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tankData = [];
      querySnapshot.forEach((doc) => {
        tankData.push({ ...doc.data(), id: doc.id });
      });
      setTanks(tankData);
      if (tankData.length > 0 && !selectedTank) {
        setSelectedTank(tankData[0].id); // Select the first tank by default
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const mqttClient = new Paho.Client(process.env.MQTT_BROKER,8884, 'clientId');
    mqttClient.connect({
      onSuccess: () => {
        setClient(mqttClient);
      },
      onFailure: (err) => {
        console.error('Connection failed: ', err);
      },
    });
    return () => {
      if (client) {
        client.disconnect();
      }
    };
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const handleTankSelection = (tankId) => {
    setSelectedTank(tankId);
    if (client && client.isConnected()) {
      const message = new Paho.Message(tankId);
      message.destinationName = 'config/tankId';
      client.send(message);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => openModal(item)}>
      <Text>{item.title}</Text>
      <Image resizeMode='contain' style={styles.image} source={{ uri: item.imageUri }} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tankSelector}>
        {tanks.map((tank) => (
          <TouchableOpacity
            key={tank.id}
            style={[
              styles.tankButton,
              tank.id === selectedTank && styles.selectedTankButton
            ]}
            onPress={() => handleTankSelection(tank.id)}
          >
            <Text style={styles.tankButtonText}>{tank.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        scrollEnabled={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        numColumns={2}
      />
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>{selectedItem.title}</Text>
              <Image resizeMode='contain' style={styles.modalImage} source={{ uri: selectedItem.imageUri }} />
              {renderComponent(selectedItem.title, selectedTank)}
              <Button title="Close" onPress={closeModal} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  tankSelector: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
  },
  tankButton: {
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedTankButton: {
    backgroundColor: 'lightblue',
  },
  tankButtonText: {
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
    flex: 1,
    margin: 8,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalImage: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
});

export default Home;
