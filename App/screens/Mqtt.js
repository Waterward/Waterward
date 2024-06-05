import * as Paho from 'paho-mqtt';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('Connecting...');
  useEffect(() => {
    const client = new Paho.Client(process.env.MQTT_BROKER,8884,'esp32')
    
     client.onConnectionLost = (responseObject) => {
      if (responseObject.errorCode !== 0) {
        setConnectionStatus(`Connection lost: ${responseObject.errorMessage}`);
      }
    };
    client.onMessageArrived = (message) => {
      setMessages((prevMessages) => [...prevMessages, message.payloadString]);
    };
    client.connect({
      useSSL: true, // Add useSSL option for secure connection
      userName: process.env.MQTT_USER,
      password: process.env.MQTT_PASSWORD,
      onSuccess: () => {
        setConnectionStatus('Connected');
        client.subscribe('test', {
          onSuccess: () => {
            const message = new Paho.Message('Hello MQTT');
            message.destinationName = 'test';
            client.send(message);
          },
          onFailure: (error) => {
            setConnectionStatus(`Subscription failed: ${error.errorMessage}`);
          }
        });
      },
      onFailure: (error) => {
        setConnectionStatus(`Connection failed: ${error.errorMessage}`);
      }
    });
    return () => {
      if (client.isConnected()) {
        client.disconnect();
      }
    };
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.status}>{connectionStatus}</Text>
      {messages.map((message, index) => (
        <View key={index} style={styles.messageContainer}>
          <Text style={styles.message}>{message}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    padding: 10,
  },
  status: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  messageContainer: {
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  message: {
    fontSize: 16,
  },
});