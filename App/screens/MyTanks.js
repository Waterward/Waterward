import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_FIRESTORE } from '../firebaseConfig';
import { Ionicons } from '@expo/vector-icons';
import withUser from '../withUser';

const firestore = FIREBASE_FIRESTORE;

const MyTanks = ({ user }) => {
  const [tanks, setTanks] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchTanks = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'tanks'));
        const userTanks = querySnapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter(tank => tank.userId === user.uid);
        setTanks(userTanks);
      } catch (error) {
        console.error('Error fetching tanks: ', error);
      }
    };

    fetchTanks();
  }, [user.uid]);

  const handleDeleteTank = async (tankId) => {
    console.log("Deleting tank with ID: ", tankId);
    try {
      await deleteDoc(collection(firestore, 'tanks', tankId));
      setTanks(tanks.filter(tank => tank.id !== tankId));
      Alert.alert('Success', 'Tank deleted successfully');
    } catch (error) {
      console.error('Error deleting tank: ', error);
      Alert.alert('Error', 'Failed to delete tank');
    }
  };

  const handleEditTank = (tank) => {
    navigation.navigate('Edit Tank', { tank });
  };

  const renderItem = ({ item }) => (
    <View style={styles.tankContainer}>
      <Text style={styles.tankName}>{item.name}</Text>
      <Text>Type: {item.type}</Text>
      <Text>Height: {item.height}</Text>
      <Text>Width: {item.width}</Text>
      <Text>Diameter: {item.diameter}</Text>
      <Text>Length: {item.length}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleEditTank(item)}>
          <Ionicons name="pencil" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDeleteTank(item.id)}>
          <Ionicons name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tanks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  tankContainer: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 2,
  },
  tankName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    marginHorizontal: 10,
  },
});

export default MyTanks;

// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
// import { getFirestore, collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
// import { app } from '../firebaseConfig';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// const firestore = getFirestore(app);

// const MyTanks = ({ user }) => {
//   const [tanks, setTanks] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     if (!user) {
//       Alert.alert('Error', 'User not logged in');
//       return;
//     }

//     const fetchTanks = async () => {
//       try {
//         const tanksQuery = query(collection(firestore, 'tanks'), where('userId', '==', user.uid));
//         const querySnapshot = await getDocs(tanksQuery);
//         const fetchedTanks = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setTanks(fetchedTanks);
//       } catch (error) {
//         console.error('Error fetching tanks: ', error);
//         Alert.alert('Error', 'Failed to fetch tanks');
//       }
//     };

//     fetchTanks();
//   }, [user]);

//   const handleDeleteTank = async (tankId) => {
//     console.log("deleting of the ID : " + tankId)
//     try {
//       await deleteDoc(doc(firestore, 'tanks', tankId));
//       setTanks(tanks.filter(tank => tank.id !== tankId));
//       Alert.alert('Success', 'Tank deleted successfully');
//     } catch (error) {
//       console.error('Error deleting tank: ', error);
//       Alert.alert('Error', 'Failed to delete tank');
//     }
//   };

//   const renderTankItem = ({ item }) => (
//     <View style={styles.card}>
//       <Image
//         source={
//           item.type === 'Rectangular'
//             ? { uri: 'https://www.calculatorsoup.com/images/tank_rect_003.jpg' }
//             : item.type === 'Vertical Cylinder'
//             ? { uri: 'https://www.calculatorsoup.com/images/tank_cyl_v_003.jpg' }
//             : { uri: 'https://www.calculatorsoup.com/images/tank_cyl_h_003.jpg' }
//         }
//         style={styles.tankImage}
//       />
//       <Text style={styles.tankName}>{item.name}</Text>
//       <Text style={styles.tankDetails}>Type: {item.type}</Text>
//       <Text style={styles.tankDetails}>Height: {item.height}</Text>
//       <Text style={styles.tankDetails}>Width: {item.width}</Text>
//       <Text style={styles.tankDetails}>Diameter: {item.diameter}</Text>
//       <Text style={styles.tankDetails}>Length: {item.length}</Text>
//       <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteTank(item.id)}>
//         <Ionicons name="trash" size={24} color="red" />
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={tanks}
//         renderItem={renderTankItem}
//         keyExtractor={item => item.id}
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   list: {
//     paddingBottom: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 20,
//     elevation: 2,
//   },
//   tankImage: {
//     width: '100%',
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 10,
//   },
//   tankName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   tankDetails: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   deleteButton: {
//     marginTop: 10,
//     alignSelf: 'flex-end',
//   },
// });

// export default MyTanks;
