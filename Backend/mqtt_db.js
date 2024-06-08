const mqtt = require('mqtt');
const { InfluxDB, Point } = require('@influxdata/influxdb-client');
require("dotenv").config();

const options = {
    host: process.env.MQTT_BROKER,
    port: 8883,
    protocol: 'mqtts',
    username: process.env.MQTT_USER,
    password: process.env.MQTT_PASSWORD 
};

const INFLUXDB_URL = process.env.INFLUXDB_URL;
const INFLUXDB_TOKEN = process.env.INFLUXDB_TOKEN;
const INFLUXDB_ORG = process.env.INFLUXDB_ORG;
const INFLUXDB_BUCKET = process.env.INFLUXDB_BUCKET;

const influxDB = new InfluxDB({ url: INFLUXDB_URL, token: INFLUXDB_TOKEN });
const writeApi = influxDB.getWriteApi(INFLUXDB_ORG, INFLUXDB_BUCKET, 'ns');

const client = mqtt.connect(options);

client.on('connect', function () {
    console.log('Connected to MQTT broker');
    const topics = [
        'waterward/ayham/hub/temperature',
        'waterward/ayham/hub/level',
        'waterward/ayham/hub/turbidity',
        'waterward/ayham/hub/conductivity',
        'waterward/ayham/hub/waterflow',
        'waterward/ayham/hub/pH'
    ];
    client.subscribe(topics, (err) => {
        if (!err) {
            console.log('Subscribed to topics:', topics);
        } else {
            console.error('Failed to subscribe:', err);
        }
    });
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    console.log('Received message:', topic, message.toString());

    const value = parseFloat(message.toString());

    if (isNaN(value)) {
        console.error('Invalid value received:', value);
        return;
    }

    const field = topic.split('/').pop();

    const point = new Point('sensor_data').floatField(field, value);
    try {
        writeApi.writePoint(point);
        console.log(`Data written to InfluxDB for ${field}`);
    } catch (err) {
        console.error(`Error writing data to InfluxDB for ${field}`, err);
    }
});

process.on('SIGINT', () => {
    console.log('Disconnecting from MQTT broker...');
    client.end();
    writeApi.close().then(() => {
        console.log('InfluxDB write API closed');
        process.exit();
    }).catch(err => {
        console.error('Error closing InfluxDB write API', err);
        process.exit(1);
    });
});

module.exports = client;
