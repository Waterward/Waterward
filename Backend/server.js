const express = require('express');
const bodyParser = require('body-parser');
const mqtt = require('mqtt');

const app = express();
const port = 3000;

// MQTT Broker configuration
const mqttOptions = {
    host: '680082c8643c49da9b91d1dd81acffc4.s1.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'Abd5656',
    password: 'asdfgHJKL8*'
};

// Create MQTT client
const mqttClient = mqtt.connect(mqttOptions);

// Array to store received MQTT data
let mqttData = [];

// Subscribe to MQTT topic
mqttClient.on('connect', function () {
    console.log('MQTT connected');
    mqttClient.subscribe('my/test/topic', function (err) {
        if (!err) {
            console.log('Subscribed to MQTT topic');
        } else {
            console.error('Error subscribing to MQTT topic:', err);
        }
    });
});

// Listen for MQTT messages
mqttClient.on('message', function (topic, message) {
    // Push received data to the array
    mqttData.push(message.toString());
    console.log('Received MQTT data:', message.toString());
});

// Setup Express middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    console.log("Hello")

})
// Route to get MQTT data
app.get('/mqtt-data', (req, res) => {
    res.json(mqttData);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

