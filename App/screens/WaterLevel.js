import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
import * as Paho from 'paho-mqtt';
import { MQTT_BROKER, MQTT_USER, MQTT_PASSWORD } from '@env';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../firebaseConfig';

const firestore = getFirestore(app);

const WaterLevel = ({ tankId, visible, onClose }) => {
  const [waterLevel, setWaterLevel] = useState('Loading...');
  const [client, setClient] = useState(null);
  const [tankConfig, setTankConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTankConfig = async () => {
      try {
        const tankDoc = await getDoc(doc(firestore, 'tanks', tankId));
        if (tankDoc.exists()) {
          setTankConfig(tankDoc.data());
        } else {
          setError('Tank configuration not found.');
        }
      } catch (err) {
        setError('Failed to fetch tank configuration.');
      } finally {
        setLoading(false);
      }
    };

    fetchTankConfig();
  }, [tankId]);

  useEffect(() => {
    const mqttClient = new Paho.Client(MQTT_BROKER, 8884, 'client-id');

    mqttClient.onConnectionLost = (responseObject) => {
      console.error('Connection lost: ' + responseObject.errorMessage);
    };

    mqttClient.onMessageArrived = (message) => {
      const receivedWaterLevel = message.payloadString;
      setWaterLevel(receivedWaterLevel);
    };

    mqttClient.connect({
      useSSL: true,
      userName: MQTT_USER,
      password: MQTT_PASSWORD,
      onSuccess: () => {
        console.log('Connected to MQTT broker');
        setClient(mqttClient);
        mqttClient.subscribe(`tanks/${tankId}/waterLevel`, {
          onSuccess: () => {
            console.log(`Subscribed to tanks/${tankId}/waterLevel topic`);
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
  }, [tankId]);

  const calculateWaterVolume = () => {
    if (!tankConfig || waterLevel === 'Loading...') return null;
    const { diameter } = tankConfig;
    const radius = diameter / 2;
    const volume = Math.PI * Math.pow(radius, 2) * parseFloat(waterLevel) * 1000; // Convert cubic meters to liters
    return volume;
  };

  const calculateWaterHeightPercentage = () => {
    if (!tankConfig || waterLevel === 'Loading...') return null;
    const { height } = tankConfig;
    const percentage = (parseFloat(waterLevel) / height) * 100;
    return percentage;
  };

  const calculateEstimatedDaysUntilEmpty = () => {
    if (!tankConfig || waterLevel === 'Loading...') return null;
    const { dailyUsage } = tankConfig;
    const volume = calculateWaterVolume();
    if (dailyUsage && volume) {
      return volume / dailyUsage;
    }
    return null;
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const waterVolume = calculateWaterVolume();
  const waterHeightPercentage = calculateWaterHeightPercentage();
  const estimatedDaysUntilEmpty = calculateEstimatedDaysUntilEmpty();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tankConfig.name}</Text>
      <Text style={styles.label}>Water Level: {waterLevel}</Text>
      <Text style={styles.label}>Water Volume: {waterVolume ? `${waterVolume.toFixed(2)} liters` : 'N/A'}</Text>
      <Text style={styles.label}>Water Height: {waterHeightPercentage ? `${waterHeightPercentage.toFixed(2)}%` : 'N/A'}</Text>
      <Text style={styles.label}>Estimated Days Until Empty: {estimatedDaysUntilEmpty ? `${estimatedDaysUntilEmpty.toFixed(2)} days` : 'N/A'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default WaterLevel;
