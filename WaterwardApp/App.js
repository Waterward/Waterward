import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const App = () => {
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    const fetchDistance = async () => {
      try {
        const response = await axios.get('http://localhost:3000/distance');
        setDistance(response.data.distance); // json
      } catch (error) {
        console.error('Error fetching distance:', error.message);
      }
    };

    fetchDistance();

    const intervalId = setInterval(fetchDistance, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>
        Distance: {distance !== null ? `${distance} cm` : 'Loading...'}
      </Text>
    </View>
  );
};

export default App;
