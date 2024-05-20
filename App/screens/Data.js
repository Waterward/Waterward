import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';

const fetchInfluxDBData = async () => {
  const query = 'YOUR_INFLUXDB_QUERY_HERE'; // Example: 'SELECT * FROM your_measurement LIMIT 10'
  const url = 'YOUR_INFLUXDB_URL_HERE'; // Example: 'http://localhost:8086/query'
  const params = {
    q: query,
    db: 'YOUR_DATABASE_NAME',
  };

  try {
    const response = await axios.get(url, { params });
    const data = response.data;
    return data.results[0].series[0].values;
  } catch (error) {
    console.error('Error fetching data from InfluxDB', error);
    throw error;
  }
};
const parseInfluxDBData = (data) => {
    return data.map(entry => ({
      x: new Date(entry[0]), // Assuming the first value is the timestamp
      y: entry[1], // Assuming the second value is the measurement
    }));
  };

const ChartComponent = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInfluxDBData();
      const parsedData = parseInfluxDBData(data);
      setChartData(parsedData);
    };

    fetchData();
  }, []);

  return (
    <View>
      {chartData.length > 0 ? (
        <LineChart
          data={{
            labels: chartData.map(d => d.x.toDateString()),
            datasets: [
              {
                data: chartData.map(d => d.y),
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      ) : (
        <Text>Loading data...</Text>
      )}
    </View>
  );
};

export default ChartComponent;
  