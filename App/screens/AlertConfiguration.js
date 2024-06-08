import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';

const AlertConfiguration = ({ initialAlerts, onAlertsChange }) => {
  const [alerts, setAlerts] = useState({
    empty: { value: '', enabled: false },
    filling: { value: '', enabled: false },
    full: { value: '', enabled: false },
    draining: { value: '', enabled: false },
    leaking: { value: '', enabled: false },
    flooding: { value: '', enabled: false }
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState(null);

  const handleAlertChange = (value) => {
    const updatedAlerts = { 
      ...alerts, 
      [selectedAlert]: { ...alerts[selectedAlert], value } 
    };
    setAlerts(updatedAlerts);
    onAlertsChange(updatedAlerts);
  };

  const handleCheckboxChange = (enabled) => {
    const updatedAlerts = { 
      ...alerts, 
      [selectedAlert]: { ...alerts[selectedAlert], enabled } 
    };
    setAlerts(updatedAlerts);
    onAlertsChange(updatedAlerts);
  };

  const openModal = (alertType) => {
    setSelectedAlert(alertType);
    setModalVisible(true);
  };

  const alertIcons = {
    empty: 'alert-circle-outline',
    filling: 'water-outline',
    full: { name: 'water-check', iconSet: MaterialCommunityIcons },
    draining: { name: 'water-minus', iconSet: MaterialCommunityIcons },
    leaking: { name: 'pipe-leak', iconSet: MaterialCommunityIcons },
    flooding: { name: 'flood', iconSet: MaterialIcons }
  };

  const renderAlertIcon = (alertType) => {
    const IconComponent = alertIcons[alertType].iconSet || Ionicons;
    const iconName = alertIcons[alertType].name || alertIcons[alertType];

    return (
      <TouchableOpacity style={styles.iconContainer} onPress={() => openModal(alertType)} key={alertType}>
        <IconComponent name={iconName} size={32} color="black" />
        <Text style={styles.iconLabel}>{alertType.charAt(0).toUpperCase() + alertType.slice(1)}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Set Alerts:</Text>
      <View style={styles.iconsRow}>
        {Object.keys(alertIcons).map(renderAlertIcon)}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Set {selectedAlert} Alert:</Text>
            <TextInput
              style={styles.input}
              placeholder="Alert Value"
              value={alerts[selectedAlert]?.value}
              onChangeText={handleAlertChange}
              keyboardType="numeric"
            />
            <CheckBox
              title="Enable Alert"
              checked={alerts[selectedAlert]?.enabled}
              onPress={() => handleCheckboxChange(!alerts[selectedAlert]?.enabled)}
            />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 12,
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#fff',
  },
});

export default AlertConfiguration;
