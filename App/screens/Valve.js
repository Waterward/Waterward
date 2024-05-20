import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Paho from 'paho-mqtt';

const Valve = () => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const mqttClient = new Paho.Client('b71bf33e09e94d209920b1d43f2de381.s1.eu.hivemq.cloud', 8884, 'client-id');

    mqttClient.onConnectionLost = (responseObject) => {
      console.error('Connection lost: ' + responseObject.errorMessage);
    };

    mqttClient.connect({
      useSSL: true,
      userName: 'ayhamalali',
      password: 'WaterWard2024!',
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
      <Button style={styles.button} title="Turn Off" onPress={() => sendCommand(1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button:{
    padding:30,
    margin:20,
  },
});

export default Valve;