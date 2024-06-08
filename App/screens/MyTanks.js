import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Alert } from 'react-native';
import { collection, query, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import withUser from '../withUser'; // Ensure this HOC is properly configured
import { FIREBASE_FIRESTORE } from '../firebaseConfig'; // Adjust the path as necessary

const MyTanks = ({ user }) => {
  const [tanks, setTanks] = useState([]);
  const [selectedTank, setSelectedTank] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const q = query(collection(FIREBASE_FIRESTORE, 'tanks'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tankData = [];
      querySnapshot.forEach((doc) => {
        tankData.push({ ...doc.data(), id: doc.id });
      });
      const userTanks = tankData.filter(tank => tank.userId === user.uid);
      setTanks(userTanks);
      if (userTanks.length > 0 && !selectedTank) {
        setSelectedTank(userTanks[0].id); // Select the first tank by default
      }
    });
    return () => unsubscribe();
  }, [user.uid, selectedTank]);

  const handleDeleteTank = async (tankId) => {
    console.log("Deleting tank with ID: ", tankId);
    try {
      const tankRef = doc(FIREBASE_FIRESTORE, 'tanks', tankId);
      await deleteDoc(tankRef);
      Alert.alert('Success', 'Tank deleted successfully');
    } catch (error) {
      console.error('Error deleting tank: ', error);
      Alert.alert('Error', 'Failed to delete tank');
    }
  };

  const renderTank = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>Type: {item.type}</Text>
      <Text>Height: {item.height}</Text>
      <Text>Width: {item.width}</Text>
      <Text>Diameter: {item.diameter}</Text>
      <Text>Length: {item.length}</Text>
      <Text>Full Depth: {item.fullDepth}</Text>
      <Button title="Delete" onPress={() => handleDeleteTank(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tanks}
        renderItem={renderTank}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default (MyTanks); // Ensure `withUser` HOC provides `user` prop correctly
