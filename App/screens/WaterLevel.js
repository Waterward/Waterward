import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Button,StyleSheet } from 'react-native';
import * as Paho from 'paho-mqtt';
import{MQTT_BROKER,MQTT_USER,MQTT_PASSWORD} from '@env';


const WaterLevel = ({ visible, onClose }) => {
  const [waterLevel, setWaterLevel] = useState('Loading...');// states
  const [client, setClient] = useState(null);//states
//useEffect is a Hook
// A Hook is a funcation that lets you hook into react state and Lifecycle features for functional components
  useEffect(() => {
    const mqttClient = new Paho.Client(process.env.MQTT_BROKER, 8884,'client-id');

    mqttClient.onConnectionLost = (responseObject) => {
      console.error('Connection lost: ' + responseObject.errorMessage);
    };

    mqttClient.onMessageArrived = (message) => {
      // Parse the message payload as needed (assuming it's a string)
      const receivedWaterLevel = message.payloadString;
      setWaterLevel(receivedWaterLevel);
    };

    mqttClient.connect({
      useSSL: true,
      userName:process.env.MQTT_USER,
      password:process.env.MQTT_PASSWORD,
      onSuccess: () => {
        console.log('Connected to MQTT broker');
        setClient(mqttClient);
        mqttClient.subscribe('waterward/ayham/hub/level', {
          onSuccess: () => {
            console.log('Subscribed to water/level topic');
          },
          onFailure: (error) => {
            console.error('Subscription failed: ', error.errorMessage);
          }
        });
      },
      onFailure: (error) => {
        console.error('Connection failed: ', error.errorMessage);
      }
    });

    return () => {
      if (client && client.isConnected()) {
        client.disconnect();
      }
    };
  }, []);

  return (
      <View style={styles.container}>
         <Text style={styles.text}>Water Level: {waterLevel}</Text> 
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    padding:40,
  },
  text:{
    fontSize:20,
    fontStyle:"italic",
    fontWeight:"bold"
  }


})
export default WaterLevel;
