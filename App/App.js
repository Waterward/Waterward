import React from 'react';
import { Button,View, Text, Image, FlatList, Dimensions} from 'react-native';
const logo = require('/home/mrt/my_learning/Waterward/App/assets/WLogo.png')


const App = () => {
  // Define your data containing the information for each item
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
    { key: '10', title: 'Add WaterWard Hub', imageUri: 'https://cdn0.iconfinder.com/data/icons/smarthome-line/32/05-512.png'},
    // Add more items as needed
  ];

  // Render each item in the FlatList
  const renderItem = ({ item }) => (
   <View style={{ padding:10,borderRadius:10,borderWidth:2, borderBlockColor:'black',flex:1,margin: 8, alignItems: 'center' }}>
      <Text>{item.title}</Text>
      <Image resizeMode='contain' style={{ width: 100, height: 100 }} source={{ uri: item.imageUri }} />
    </View>
    );

  return (
    <View style={{flex:1,padding:20}}>
      <Text style={{fontSize:30,fontWeight:'bold',color:'lightblue'}}>WaterWard</Text>
      <Text style={{fontSize:13,fontWeight:'bold'}}>Welcome Abdallah </Text>
      <FlatList
      scrollEnabled={true}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      numColumns={2} // Set the number of columns for the grid
      />
      <Button title='Call Doctor Izzden' />
    </View>
  );
};

export default App;


