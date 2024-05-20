import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Button,StyleSheet } from 'react-native';
import * as Paho from 'paho-mqtt';

const PH = ({ visible, onClose }) => {
  const [PHlevel, setPHLevel] = useState('Loading...');
  const [client, setClient] = useState(null);

  useEffect(() => {
    const mqttClient = new Paho.Client('b71bf33e09e94d209920b1d43f2de381.s1.eu.hivemq.cloud', 8884, 'client-id');

    mqttClient.onConnectionLost = (responseObject) => {
      console.error('Connection lost: ' + responseObject.errorMessage);
    };

    mqttClient.onMessageArrived = (message) => {
      // Parse the message payload as needed (assuming it's a string)
      const receivedPHLevel = message.payloadString;
      setPHLevel(receivedPHLevel);
    };

    mqttClient.connect({
      useSSL: true,
      userName: 'ayhamalali',
      password: 'WaterWard2024!',
      onSuccess: () => {
        console.log('Connected to MQTT broker');
        setClient(mqttClient);
        mqttClient.subscribe('waterward/ayham/hub/pH', {
          onSuccess: () => {
            console.log('Subscribed to water/PH topic');
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
        <Text style={styles.text}>PH: {PHlevel}</Text>
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
export default PH;
