import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/Home';
import Mqtt from '../App/screens/Mqtt'
import TankVolumeCalculator from './screens/TankVolumeCalculator';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{
      headerShown:false,
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MQTT" component={Mqtt} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}