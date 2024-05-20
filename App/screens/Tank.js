// Auth.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Tank = ({ closeModal }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Auth Component</Text>
      <Text>This is a placeholder for the Auth component.</Text>
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
});

export default Tank;
