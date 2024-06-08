import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { app } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import AlertConfiguration from './AlertConfiguration'; // Ensure to import your AlertConfiguration component
import { v4 as uuidv4 } from 'uuid';

const firestore = getFirestore(app);

const AddTank = ({ user }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [diameter, setDiameter] = useState('');
  const [length, setLength] = useState('');
  const [fullDepth, setFullDepth] = useState('');
  const [alerts, setAlerts] = useState({});
  const navigation = useNavigation();

  const handleAddTank = async () => {
    const tankId = Math.floor(Math.random(10));
    const newTank = {
      id: tankId,
      userId: user.uid,
      name,
      type,
      height: height ? parseFloat(height) : null,
      width: width ? parseFloat(width) : null,
      diameter: diameter ? parseFloat(diameter) : null,
      length: length ? parseFloat(length) : null,
      fullDepth: fullDepth ? parseFloat(fullDepth) : null,
      createdAt: serverTimestamp(),
    };

    try {
      const tankRef = await addDoc(collection(firestore, 'tanks'), newTank);

      // Add alerts as subcollection
      const alertsRef = collection(tankRef, 'alerts');
      await Promise.all(Object.entries(alerts).map(([key, value]) =>
        addDoc(alertsRef, { type: key, value })
      ));

      Alert.alert('Success', 'Tank added successfully');
      navigation.navigate('My Tanks');
    } catch (error) {
      console.error('Error adding tank: ', error);
      Alert.alert('Failed to add tank');
    }
  };

  const handleTypeSelection = (selectedType) => {
    setType(selectedType);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Tank Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Tank Name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Select Tank Type:</Text>
      <View style={styles.typeSelectionContainer}>
        <TouchableOpacity onPress={() => handleTypeSelection('Rectangle')} style={styles.typeOption}>
          <Image source={{ uri: 'https://www.calculatorsoup.com/images/tank_rect_003.jpg' }} style={styles.typeImage} />
          <Text style={styles.typeText}>Rectangle</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTypeSelection('Vertical Cylinder')} style={styles.typeOption}>
          <Image source={{ uri: 'https://www.calculatorsoup.com/images/tank_cyl_v_003.jpg' }} style={styles.typeImage} />
          <Text style={styles.typeText}>Vertical Cylinder</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTypeSelection('Horizontal Cylinder')} style={styles.typeOption}>
          <Image source={{ uri: 'https://www.calculatorsoup.com/images/tank_cyl_h_003.jpg' }} style={styles.typeImage} />
          <Text style={styles.typeText}>Horizontal Cylinder</Text>
        </TouchableOpacity>
      </View>

      {type === 'Rectangle' && (
        <>
          <Text style={styles.label}>Height:</Text>
          <TextInput
            style={styles.input}
            placeholder="Height"
            value={height}
            onChangeText={setHeight}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Width:</Text>
          <TextInput
            style={styles.input}
            placeholder="Width"
            value={width}
            onChangeText={setWidth}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Length:</Text>
          <TextInput
            style={styles.input}
            placeholder="Length"
            value={length}
            onChangeText={setLength}
            keyboardType="numeric"
          />
        </>
      )}

      {(type === 'Vertical Cylinder' || type === 'Horizontal Cylinder') && (
        <>
          <Text style={styles.label}>Height:</Text>
          <TextInput
            style={styles.input}
            placeholder="Height"
            value={height}
            onChangeText={setHeight}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Diameter:</Text>
          <TextInput
            style={styles.input}
            placeholder="Diameter"
            value={diameter}
            onChangeText={setDiameter}
            keyboardType="numeric"
          />
        </>
      )}

      <Text style={styles.label}>Full Depth (Optional):</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Depth"
        value={fullDepth}
        onChangeText={setFullDepth}
        keyboardType="numeric"
      />

      <AlertConfiguration initialAlerts={alerts} onAlertsChange={setAlerts} />

      <Button title="Add Tank" onPress={handleAddTank} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  typeSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  typeOption: {
    alignItems: 'center',
  },
  typeImage: {
    width: 100,
    height: 100,
  },
  typeText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default AddTank;

// import 'react-native-get-random-values';
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
// import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import { app, FIREBASE_AUTH } from '../firebaseConfig';
// import { useNavigation } from '@react-navigation/native';
// import AlertConfiguration from './AlertConfiguration'; // Ensure to import your AlertConfiguration component
// import { v4 as uuidv4 } from 'uuid';

// const firestore = getFirestore(app);

// const AddTank = () => {
//   const [name, setName] = useState('');
//   const [type, setType] = useState('');
//   const [height, setHeight] = useState('');
//   const [width, setWidth] = useState('');
//   const [diameter, setDiameter] = useState('');
//   const [length, setLength] = useState('');
//   const [fullDepth, setFullDepth] = useState('');
//   const [alerts, setAlerts] = useState({});
//   const navigation = useNavigation();

//   const handleAddTank = async () => {
//     const user = FIREBASE_AUTH.currentUser;

//     if (!user) {
//       Alert.alert('Error', 'User not logged in');
//       return;
//     }

//     try {
//       const newTank = {
//         id: uuidv4(),
//         userId: user.uid,
//         FID:0,
//         name,
//         type,
//         height: height ? parseFloat(height) : null,
//         width: width ? parseFloat(width) : null,
//         diameter: diameter ? parseFloat(diameter) : null,
//         length: length ? parseFloat(length) : null,
//         fullDepth: fullDepth ? parseFloat(fullDepth) : null,
//         alerts,
//         createdAt: serverTimestamp(),
//       };

//       const TID = await addDoc(collection(firestore, 'tanks'), newTank);
//       Alert.alert('Success', 'Tank added successfully' + "TID = " + TID.id);
//       newTank.FID =TID.id,
//       navigation.navigate('My Tanks');
//     } catch (error) {
//       console.error('Error adding tank: ', error);
//       Alert.alert('Error', 'Failed to add tank');
//     }
//   };

//   const handleTypeSelection = (selectedType) => {
//     setType(selectedType);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.label}>Tank Name:</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Tank Name"
//         value={name}
//         onChangeText={setName}
//       />

//       <Text style={styles.label}>Select Tank Type:</Text>
//       <View style={styles.typeSelectionContainer}>
//         <TouchableOpacity onPress={() => handleTypeSelection('Rectangle')} style={styles.typeOption}>
//           <Image source={{ uri: 'https://www.calculatorsoup.com/images/tank_rect_003.jpg' }} style={styles.typeImage} />
//           <Text style={styles.typeText}>Rectangle</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleTypeSelection('Vertical Cylinder')} style={styles.typeOption}>
//           <Image source={{ uri: 'https://www.calculatorsoup.com/images/tank_cyl_v_003.jpg' }} style={styles.typeImage} />
//           <Text style={styles.typeText}>Vertical Cylinder</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleTypeSelection('Horizontal Cylinder')} style={styles.typeOption}>
//           <Image source={{ uri: 'https://www.calculatorsoup.com/images/tank_cyl_h_003.jpg' }} style={styles.typeImage} />
//           <Text style={styles.typeText}>Horizontal Cylinder</Text>
//         </TouchableOpacity>
//       </View>

//       {type === 'Rectangle' && (
//         <>
//           <Text style={styles.label}>Height:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Height"
//             value={height}
//             onChangeText={setHeight}
//             keyboardType="numeric"
//           />
//           <Text style={styles.label}>Width:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Width"
//             value={width}
//             onChangeText={setWidth}
//             keyboardType="numeric"
//           />
//           <Text style={styles.label}>Length:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Length"
//             value={length}
//             onChangeText={setLength}
//             keyboardType="numeric"
//           />
//         </>
//       )}

//       {(type === 'Vertical Cylinder' || type === 'Horizontal Cylinder') && (
//         <>
//           <Text style={styles.label}>Height:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Height"
//             value={height}
//             onChangeText={setHeight}
//             keyboardType="numeric"
//           />
//           <Text style={styles.label}>Diameter:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Diameter"
//             value={diameter}
//             onChangeText={setDiameter}
//             keyboardType="numeric"
//           />
//         </>
//       )}

//       <Text style={styles.label}>Full Depth (Optional):</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Full Depth"
//         value={fullDepth}
//         onChangeText={setFullDepth}
//         keyboardType="numeric"
//       />

//       <AlertConfiguration initialAlerts={alerts} onAlertsChange={setAlerts} />

//       <Button title="Add Tank" onPress={handleAddTank} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginVertical: 10,
//   },
//   typeSelectionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 20,
//   },
//   typeOption: {
//     alignItems: 'center',
//   },
//   typeImage: {
//     width: 100,
//     height: 100,
//   },
//   typeText: {
//     marginTop: 5,
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   button: {
//     backgroundColor: '#AEE5FD',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 10,
//     marginVertical: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
// });

// export default AddTank;

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { app } from '../firebaseConfig';
// import { useNavigation } from '@react-navigation/native';
// import AlertConfiguration from './AlertConfiguration'; // Ensure to import your AlertConfiguration component

// const firestore = getFirestore(app);

// const AddTank = () => {
//   const [name, setName] = useState('');
//   const [type, setType] = useState('');
//   const [height, setHeight] = useState('');
//   const [width, setWidth] = useState('');
//   const [diameter, setDiameter] = useState('');
//   const [length, setLength] = useState('');
//   const [fullDepth, setFullDepth] = useState('');
//   const [alerts, setAlerts] = useState({});
//   const navigation = useNavigation();

//   const handleAddTank = async () => {
//     try {
//       const newTank = {
//         name,
//         type,
//         height,
//         width,
//         diameter,
//         length,
//         fullDepth,
//         alerts,
//       };
//       await addDoc(collection(firestore, 'tanks'), newTank);
//       alert('Tank added successfully');
//       navigation.navigate('My Tanks');
//     } catch (error) {
//       console.error('Error adding tank: ', error);
//       alert('Failed to add tank');
//     }
//   };

//   const handleTypeSelection = (selectedType) => {
//     setType(selectedType);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.label}>Tank Name:</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Tank Name"
//         value={name}
//         onChangeText={setName}
//       />

//       <Text style={styles.label}>Select Tank Type:</Text>
//       <View style={styles.typeSelectionContainer}>
//         <TouchableOpacity onPress={() => handleTypeSelection('Rectangle')} style={styles.typeOption}>
//           <Image source={{ uri: 'https://www.calculatorsoup.com/images/tank_rect_003.jpg' }} style={styles.typeImage} />
//           <Text style={styles.typeText}>Rectangle</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleTypeSelection('Vertical Cylinder')} style={styles.typeOption}>
//           <Image source={{ uri: 'https://www.calculatorsoup.com/images/tank_cyl_v_003.jpg' }} style={styles.typeImage} />
//           <Text style={styles.typeText}>Vertical Cylinder</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleTypeSelection('Horizontal Cylinder')} style={styles.typeOption}>
//           <Image source={{ uri: 'https://www.calculatorsoup.com/images/tank_cyl_h_003.jpg' }} style={styles.typeImage} />
//           <Text style={styles.typeText}>Horizontal Cylinder</Text>
//         </TouchableOpacity>
//       </View>

//       {type === 'Rectangle' && (
//         <>
//           <Text style={styles.label}>Height:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Height"
//             value={height}
//             onChangeText={setHeight}
//             keyboardType="numeric"
//           />
//           <Text style={styles.label}>Width:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Width"
//             value={width}
//             onChangeText={setWidth}
//             keyboardType="numeric"
//           />
//           <Text style={styles.label}>Length:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Length"
//             value={length}
//             onChangeText={setLength}
//             keyboardType="numeric"
//           />
//         </>
//       )}

//       {(type === 'Vertical Cylinder' || type === 'Horizontal Cylinder') && (
//         <>
//           <Text style={styles.label}>Height:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Height"
//             value={height}
//             onChangeText={setHeight}
//             keyboardType="numeric"
//           />
//           <Text style={styles.label}>Diameter:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Diameter"
//             value={diameter}
//             onChangeText={setDiameter}
//             keyboardType="numeric"
//           />
//         </>
//       )}

//       <Text style={styles.label}>Full Depth (Optional):</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Full Depth"
//         value={fullDepth}
//         onChangeText={setFullDepth}
//         keyboardType="numeric"
//       />

//       <AlertConfiguration initialAlerts={alerts} onAlertsChange={setAlerts} />

//       <Button title="Add Tank" onPress={handleAddTank} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor:'white',
//     flexGrow: 1,
//     padding: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginVertical: 10,
//   },
//   typeSelectionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 20,
//   },
//   typeOption: {
//     alignItems: 'center',
//   },
//   typeImage: {
//     width: 100,
//     height: 100,
//   },
//   typeText: {
//     marginTop: 5,
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
// });

// export default AddTank;
