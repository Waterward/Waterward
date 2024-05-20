// Home.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Modal, Button } from 'react-native';
import Auth from './Auth';
import Motor from './Motor';
import TankVolumeCalculator from './TankVolumeCalculator';
import Turbidity from './Turbidity';
import WaterFlow from './WaterFlow';
import Data from './Data';
import Hub from './Hub';
import Tank from './Tank';
import TDS from './TDS';
import Valve from './Valve';
import WaterLevel from './WaterLevel';
import Temperature from './Temperature'; 
import PH from './PH';
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
const renderComponent = (title) => {
  switch (title) {
    case 'Water Level':
      return <WaterLevel />;
    case 'Temperature':
      return <Temperature />;
    case 'PH':
      return <PH/>;
    case 'TDS (Total Dissolved Solids)':
      return <TDS />;
    case 'Turbidity':
      return <Turbidity />;
    case 'Water Flow':
      return <WaterFlow />;
    case 'Control Tank Valve':
      return <Valve />;
    case 'Control Tank Motor':
      return <Motor />;
    case 'Add Tank':
      return <Tank />;
    case 'Add WaterWard Hub':
      return <Hub />;
    default:
      return <Text>No Component Found</Text>;
  }
};
const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => openModal(item)}>
      <Text>{item.title}</Text>
      <Image resizeMode='contain' style={styles.image} source={{ uri: item.imageUri }} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>WaterWard</Text>
      <Text style={styles.subHeader}>Welcome Abdallah</Text>
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
              {renderComponent(selectedItem.title)}
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
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'lightblue',
  },
  subHeader: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 10,
    borderRadius:20,
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



// import { StyleSheet, Text,View,FlatList,Button,Image } from 'react-native'
// import React from 'react'


//  const data = [
//     { key: '1', title: 'Water Level', imageUri: 'https://senix.com/wp-content/uploads/liquid-level-sensing-150x150-2.jpg' },
//     { key: '2', title: 'Temperature', imageUri: 'https://static.vecteezy.com/system/resources/previews/000/583/654/non_2x/cold-weather-thermometer-icon-vector.jpg' },
//     { key: '3', title: 'PH', imageUri: 'https://static.thenounproject.com/png/3215400-200.png' },
//     { key: '4', title: 'TDS (Total Dissolved Solids)', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT793CV9UmXrieExeS51hNoVaCZTyodZnnzbixV-sHZyg&s' },
//     { key: '5', title: 'Turbidity', imageUri: 'https://www.shutterstock.com/image-vector/turbidity-sensor-icon-vector-illustration-600nw-2409562981.jpg' },
//     { key: '6', title: 'Water Flow', imageUri: 'https://as2.ftcdn.net/v2/jpg/05/99/88/65/1000_F_599886547_4EkCK47sLeDT7c3Byrzk9aRLdnOWW1S2.jpg' },
//     { key: '7', title: 'Control Tank Valve', imageUri: 'https://i.pinimg.com/564x/3e/e8/8c/3ee88cdde71f6c4248663bc0ac4c105c.jpg' },
//     { key: '8', title: 'Control Tank Motor', imageUri: 'https://cdn-icons-png.freepik.com/512/3799/3799458.png' },
//     { key: '9', title: 'Add Tank', imageUri: 'https://static.thenounproject.com/png/1595245-200.png' },
//     { key: '10', title: 'Add WaterWard Hub', imageUri: 'https://cdn0.iconfinder.com/data/icons/smarthome-line/32/05-512.png'},
//     // Add more items as needed
//   ];

//   // Render each item in the FlatList
//   const renderItem = ({ item }) => (
//    <View style={{ padding:10,borderRadius:10,borderWidth:2, borderBlockColor:'black',flex:1,margin: 8, alignItems: 'center' }}>
//       <Text>{item.title}</Text>
//       <Image resizeMode='contain' style={{ width: 100, height: 100 }} source={{ uri: item.imageUri }} />
//     </View>
//     );


// export default function Home() {
//   return (
//     <View style={styles.container}>
//       <Text style={{fontSize:30,fontWeight:'bold',color:'lightblue'}}>WaterWard</Text>
//       <Text style={{fontSize:13,fontWeight:'bold'}}>Welcome Abdallah </Text>
//       <FlatList
//       scrollEnabled={true}
//       data={data}
//       renderItem={renderItem}
//       keyExtractor={item => item.key}
//       numColumns={2} // Set the number of columns for the grid
//       />
//       <Button title='Call Doctor Izzden' />
//     </View>)
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:"white",
//         padding:10,
//     },
// })