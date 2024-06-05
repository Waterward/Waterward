import React, { useState, useEffect } from 'react';
import {Image, Modal, View, Text, Button,StyleSheet } from 'react-native';
import * as Paho from 'paho-mqtt';
import{ER,MQTT_PASSWORD} from '@env';
const TDS = ({ visible, onClose }) => {
  const [TDSlevel, setTDSLevel] = useState('Loading...');
  const [client, setClient] = useState(null);

  useEffect(() => {
    const mqttClient = new Paho.Client(process.env.MQTT_BROKER,8884,'ent-id');

    mqttClient.onConnectionLost = (responseObject) => {
      console.error('Connection lost: ' + responseObject.errorMessage);
    };

    mqttClient.onMessageArrived = (message) => {
      // Parse the message payload as needed (assuming it's a string)
      const receivedTDSLevel = message.payloadString;
      setTDSLevel(receivedTDSLevel);
    };

    mqttClient.connect({
      useSSL: true,
      userName:process.env.MQTT_USER,
      password:process.env.MQTT_PASSWORD,
      onSuccess: () => {
        console.log('Connected to MQTT broker');
        setClient(mqttClient);
        mqttClient.subscribe('waterward/ayham/hub/conductivity', {
          onSuccess: () => {
            console.log('Subscribed to water/conductivity topic');
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
  
  const tdsRanges = [
    { range: '1 - 300', quality: 'Excellent' },
    { range: '300 - 600', quality: 'Good' },
    { range: '600 - 900', quality: 'Fair' },
    { range: '900 - 1200', quality: 'Poor' },
    { range: '1200 - 10000', quality: 'Unacceptable' },
  ];

  return (
      <View style={styles.container}>
        <Text style={styles.text}>TDS: {TDSlevel}</Text>
        
      <View style={styles.tableContainer}>
        <Text style={styles.tableHeader}>TDS Level Guide</Text>
        {tdsRanges.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.range}</Text>
            <Text style={styles.tableCell}>{item.quality}</Text>
          </View>
        ))}
      </View>
      
      
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
  },
  image:{
    width:50,
    height:50,
    resizeMode:'contain',
  },
   tableContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#000',
  },
  tableHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  tableCell: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 5,
    borderRightWidth: 1,
    borderRightColor: '#000',
  },
  lastCell: {
    borderRightWidth: 0,
  },


})
export default TDS;
