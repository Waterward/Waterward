import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/Home';
import Mqtt from './screens/Mqtt';
import Data from './screens/Data';
import AddTank from './screens/AddTank';
import MyTanks from './screens/MyTanks';
import withUser from './withUser';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';
import Auth from './screens/Auth';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeWithUser = withUser(Home);
const MqttWithUser = withUser(Mqtt);
const DataWithUser = withUser(Data);
const AddTankWithUser = withUser(AddTank);
const MyTanksWithUser = withUser(MyTanks);

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'MQTT') {
          iconName = focused ? 'wifi' : 'wifi-outline';
        } else if (route.name === 'Config') {
          iconName = focused ? 'analytics' : 'analytics-outline';
        } else if (route.name === 'Add Tank') {
          iconName = focused ? 'add-circle' : 'add-circle-outline';
        } else if (route.name === 'My Tanks') {
          iconName = focused ? 'water' : 'water-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      headerShown: false,
      tabBarActiveTintColor: 'lightblue',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={HomeWithUser} />
    <Tab.Screen name="MQTT" component={MqttWithUser} />
    <Tab.Screen name="Config" component={DataWithUser} />
    <Tab.Screen name="Add Tank" component={AddTankWithUser} />
    <Tab.Screen name="My Tanks" component={MyTanksWithUser} />
  </Tab.Navigator>
);

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  if (isLoading) {
    return null; // Optionally show a loading screen here
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <>
            <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        
          </>
        ) : (
          <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}




// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// import Home from './screens/Home';
// import Mqtt from '../App/screens/Mqtt'
// import Data from '../App/screens/Data'
// import TankVolumeCalculator from './screens/TankVolumeCalculator';
// import Login from './screens/Login';

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//     <Tab.Navigator screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'MQTT') {
//               iconName = focused ? 'wifi' : 'wifi-outline';
//             } else if (route.name === 'Config') {
//               iconName = focused ? 'Data' : 'Data-outline';
//             }

//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           headerShown: false,
//           tabBarActiveTintColor: 'lightblue',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="MQTT" component={Mqtt} />
//       {/* <Tab.Screen name="Login" component={Login} />  */}
//     </Tab.Navigator>
//     </NavigationContainer>
//   );
// }