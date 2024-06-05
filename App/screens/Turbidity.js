import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Button,StyleSheet } from 'react-native';
import * as Paho from 'paho-mqtt';
import{QTT_BROKER,QTT_USER,MQTT_PASSWORD} from '@env';


const Turbidity = ({ visible, onClose }) => {
  const [Turbiditylevel, setTurbidityLevel] = useState('Loading...');
  const [client, setClient] = useState(null);

  useEffect(() => {
    const mqttClient = new Paho.Client(process.env.MQTT_BROKER,8884,'client-id');

    mqttClient.onConnectionLost = (responseObject) => {
      console.error('Connection lost: ' + responseObject.errorMessage);
    };

    mqttClient.onMessageArrived = (message) => {
      // Parse the message payload as needed (assuming it's a string)
      const receivedTurbidityLevel = message.payloadString;
      setTurbidityLevel(receivedTurbidityLevel);
    };

    mqttClient.connect({
      useSSL: true,
      userName:process.env.MQTT_USER,
      password:process.env.MQTT_PASSWORD,
      onSuccess: () => {
        console.log('Connected to MQTT broker');
        setClient(mqttClient);
        mqttClient.subscribe('waterward/ayham/hub/turbidity', {
          onSuccess: () => {
            console.log('Subscribed to water/turbidity topic');
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
        <Text style={styles.text}>Turbidity: {Turbiditylevel}</Text>
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
export default Turbidity;
