import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/Home';
import Mqtt from '../App/screens/Mqtt'
import Data from '../App/screens/Data'
import TankVolumeCalculator from './screens/TankVolumeCalculator';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'MQTT') {
              iconName = focused ? 'wifi' : 'wifi-outline';
            } else if (route.name === 'Config') {
              iconName = focused ? 'Data' : 'Data-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: 'lightblue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
  
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MQTT" component={Mqtt} />
      <Tab.Screen name="Data" component={Data} /> 
    </Tab.Navigator>
    </NavigationContainer>
  );
}