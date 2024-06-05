import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Paho from 'paho-mqtt';
import{QTT_BROKER,QTT_USER,MQTT_PASSWORD} from '@env';

const Valve = () => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const mqttClient = new Paho.Client(process.env.MQTT_BROKER,8884,
      'client-id'
      );

    mqttClient.onConnectionLost = (responseObject) => {
      console.error('Connection lost: ' + responseObject.errorMessage);
    };

    mqttClient.connect({
      useSSL: true,
      userName:process.env.MQTT_USER,
      password:process.env.MQTT_PASSWORD,
      onSuccess: () => {
        console.log('Connected to MQTT broker');
        setClient(mqttClient);
        mqttClient.subscribe('waterward/ayham/hub/togglevalve', {
          onSuccess: () => {
            console.log('Subscribed to waterward/ayham/hub/togglevalve topic');
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

  const sendCommand = (command) => {
    if (client && client.isConnected()) {
      const message = new Paho.Message(command.toString());
      message.destinationName = 'waterward/ayham/hub/togglevalve';
      client.send(message);
      console.log('Sent command:', command);
    } else {
      console.error('MQTT client is not connected.');
    }
  };
return (
    <View style={styles.container}>
      <Text style={styles.title}>Motor Control</Text>
      <Button style={styles.button}title="Turn On" onPress={() => sendCommand(0)} />
      <View style={styles.container}></View>
      <Button color = "red" style={styles.button} title="Turn Off" onPress={() => sendCommand(1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom:10,
  },
  button:{
    margin:10,
  },
});
export default Valve;