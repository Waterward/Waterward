import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#FFFFFF',
  backgroundGradientTo: '#FFFFFF',
  color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`, // Blue color for lines
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Black color for labels
  propsForDots: {
    r: "5",
    strokeWidth: "2",
    stroke: "#00aaff" // Light blue stroke for dots
  }
};

// Simulated fake data for testing
const generateFakeData = (length, max) => Array.from({ length }, (_, i) => ({ value: Math.random() * max }));

const fakeData = {
  waterLevel: {
    hourly: generateFakeData(24, 100),
    daily: generateFakeData(7, 100),
    weekly: generateFakeData(7, 100),
    monthly: generateFakeData(30, 100)
  },
  temperature: {
    hourly: generateFakeData(24, 35),
    daily: generateFakeData(7, 35),
    weekly: generateFakeData(7, 35),
    monthly: generateFakeData(30, 35)
  },
  ph: {
    hourly: generateFakeData(24, 14),
    daily: generateFakeData(7, 14),
    weekly: generateFakeData(7, 14),
    monthly: generateFakeData(30, 14)
  },
  tds: {
    hourly: generateFakeData(24, 500),
    daily: generateFakeData(7, 500),
    weekly: generateFakeData(7, 500),
    monthly: generateFakeData(30, 500)
  },
  turbidity: {
    hourly: generateFakeData(24, 100),
    daily: generateFakeData(7, 100),
    weekly: generateFakeData(7, 100),
    monthly: generateFakeData(30, 100)
  },
  waterFlow: {
    hourly: generateFakeData(24, 20),
    daily: generateFakeData(7, 20),
    weekly: generateFakeData(7, 20),
    monthly: generateFakeData(30, 20)
  }
};

const Data = () => {
  const [sensorData, setSensorData] = useState({});
  const [selectedPeriod, setSelectedPeriod] = useState('monthly'); // Default to monthly

  useEffect(() => {
    // Simulate fetching data by setting fake data
    setSensorData(fakeData);
  }, []);

  const renderChart = (data, label) => (
    <View style={styles.chartContainer} key={label}>
      <Text style={styles.chartLabel}>{label}</Text>
      <View style={styles.yAxisLabelContainer}>
        <Text style={styles.yAxisLabel}>Value</Text>
        <LineChart
          data={{
            labels: data.map((_, index) => (index % 5 === 0 ? index.toString() : '')), // Only show every 5th label for better spacing
            datasets: [
              {
                data: data.map(item => item.value)
              }
            ]
          }}
          width={screenWidth - 80} // Adjust width to fit padding and y-axis label
          height={220}
          chartConfig={chartConfig}
          style={styles.chart}
        />
      </View>
      <Text style={styles.xAxisLabel}>Time</Text>
    </View>
  );

  const renderButtons = () => (
    <View style={styles.buttonContainer}>
      {['hourly', 'daily', 'weekly', 'monthly'].map((period) => (
        <TouchableOpacity
          key={period}
          style={[styles.button, selectedPeriod === period && styles.selectedButton]}
          onPress={() => setSelectedPeriod(period)}
        >
          <Text style={styles.buttonText}>{period.charAt(0).toUpperCase() + period.slice(1)}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderButtons()}
      {Object.keys(sensorData).map(sensor => (
        renderChart(sensorData[sensor][selectedPeriod], sensor)
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20
  },
  button: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5
  },
  selectedButton: {
    backgroundColor: '#005BB5'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  chartContainer: {
    marginVertical: 10,
    alignItems: 'center' // Center align for y-axis label
  },
  chartLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#007AFF' // Blue color for chart labels
  },
  yAxisLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  yAxisLabel: {
    transform: [{ rotate: '270deg' }],
    position: 'absolute',
    left: -40,
    color: '#007AFF', // Blue color for y-axis label
    fontSize: 12
  },
  xAxisLabel: {
    paddingTop:10,
    color: '#007AFF', // Blue color for x-axis label
    fontSize: 12
  },
  chart: {
    borderRadius: 16
  }
});

export default Data;
