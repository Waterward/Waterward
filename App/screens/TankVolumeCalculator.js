import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';

const TankVolumeCalculator = () => {
  const [tankType, setTankType] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [diameter, setDiameter] = useState('');
  const [fillHeight, setFillHeight] = useState('');
  const [volume, setVolume] = useState(null);
  const [waterLevel, setWaterLevel] = useState('');

  const calculateVolume = () => {
    // Convert input values to numbers
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    const d = parseFloat(diameter);
    const f = parseFloat(fillHeight);

    // Check if all inputs are valid numbers
    if (tankType === 'Rectangular' && !isNaN(l) && !isNaN(w) && !isNaN(h)) {
      // Calculate volume of a rectangular tank
      const tankVolume = l * w * h;
      setVolume(tankVolume);
      setWaterLevel(getWaterLevel(tankVolume));
    } else if (tankType === 'Horizontal Cylinder' && !isNaN(d) && !isNaN(length) && !isNaN(f)) {
      // Calculate volume of a horizontal cylinder tank
      const radius = d / 2;
      let tankVolume;

      if (f < radius) {
        // Calculate fill volume using the circular segment method
        const theta = 2 * Math.acos(f / radius);
        const segmentArea = (1 / 2) * Math.pow(radius, 2) * (theta - Math.sin(theta));
        tankVolume = segmentArea * length;
      } else {
        // Calculate fill volume using the rectangular segment method
        const a = Math.sqrt(Math.pow(radius, 2) - Math.pow(radius - f, 2));
        const segmentArea = a * (d - f);
        tankVolume = segmentArea * length;
      }

      setVolume(tankVolume);
      setWaterLevel(getWaterLevel(tankVolume));
    } else if (tankType === 'Vertical Cylinder' && !isNaN(d) && !isNaN(height) && !isNaN(f)) {
      // Calculate volume of a vertical cylinder tank
      const radius = d / 2;
      const tankVolume = Math.PI * Math.pow(radius, 2) * f;
      setVolume(tankVolume);
      setWaterLevel(getWaterLevel(tankVolume));
    } else {
      // If any input is not a valid number, show error
      setVolume(null);
      setWaterLevel('');
      alert('Please enter valid dimensions.');
    }
  };

  const getWaterLevel = (volume) => {
    // Define thresholds for water levels
    const emptyThreshold = 0.1; // 10% of tank volume
    const lowThreshold = 0.3; // 30% of tank volume
    const mediumThreshold = 0.6; // 60% of tank volume

    // Determine water level based on volume
    if (volume < emptyThreshold) {
      return 'Empty';
    } else if (volume < lowThreshold) {
      return 'Low';
    } else if (volume < mediumThreshold) {
      return 'Medium';
    } else {
      return 'High';
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 10 }}>Select Tank Type:</Text>
      <View style={{ flexDirection: 'column', marginBottom: 20 }}>
        <View style={{ marginRight: 10 }}>
          <Button title="Rectangular" onPress={() => setTankType('Rectangular')} />
          <Image source={{ uri: 'https://www.calculatorsoup.com/images/tank_rect_003.jpg' }} style={{ width: 100, height: 100,justifyContent: 'center' }} />
        </View>
        <View style={{ marginRight: 10 }}>
          <Button title="Vertical Cylinder" onPress={() => setTankType('Vertical Cylinder')} />
          <Image source={{ uri: 'https://www.calculatorsoup.com/images/tank_cyl_v_003.jpg' }} style={{ width: 100, height: 100 }} />
        </View>
        <View>
          <Button title="Horizontal Cylinder" onPress={() => setTankType('Horizontal Cylinder')} />
          <Image source={{ uri: 'https://www.calculatorsoup.com/images/tank_cyl_h_003.jpg' }} style={{ width: 100, height: 100 }} />
        </View>
      </View>
      {tankType === 'Rectangular' && (
        <>
          <TextInput
            placeholder="Length"
            value={length}
            onChangeText={(text) => setLength(text)}
            keyboardType="numeric"
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <TextInput
            placeholder="Width"
            value={width}
            onChangeText={(text) => setWidth(text)}
            keyboardType="numeric"
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <TextInput
            placeholder="Height"
            value={height}
            onChangeText={(text) => setHeight(text)}
            keyboardType="numeric"
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
        </>
      )}
      {tankType === 'Horizontal Cylinder' && (
        <>
          <TextInput
            placeholder="Diameter"
            value={diameter}
            onChangeText={(text) => setDiameter(text)}
            keyboardType="numeric"
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <TextInput
            placeholder="Length"
            value={length}
            onChangeText={(text) => setLength(text)}
            keyboardType="numeric"
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <TextInput
            placeholder="Fill Height"
            value={fillHeight}
            onChangeText={(text) => setFillHeight(text)}
            keyboardType="numeric"
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
        </>
      )}
      {tankType === 'Vertical Cylinder' && (
        <>
          <TextInput
            placeholder="Diameter"
            value={diameter}
            onChangeText={(text) => setDiameter(text)}
            keyboardType="numeric"
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <TextInput
            placeholder="Height"
            value={height}
            onChangeText={(text) => setHeight(text)}
            keyboardType="numeric"
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <TextInput
            placeholder="Fill Height"
            value={fillHeight}
            onChangeText={(text) => setFillHeight(text)}
            keyboardType="numeric"
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
        </>
      )}
      <Button title="Calculate Volume" onPress={calculateVolume} />
      {volume !== null && (
        <View style={{ marginTop: 20 }}>
          <Text>Tank Volume: {volume.toFixed(2)} cubic units</Text>
          <Text>Water Level: {waterLevel}</Text>
        </View>
      )}
    </View>
  );
};

export default TankVolumeCalculator;

