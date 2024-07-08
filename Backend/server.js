const { InfluxDB } = require('@influxdata/influxdb-client');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();
app.use(bodyParser.json());

const url = 'http://localhost:8086';
const token = 'YOUR_INFLUXDB_TOKEN';
const org = 'YOUR_ORG';
const bucket = 'YOUR_BUCKET';

const influxDB = new InfluxDB({ url, token });
const queryApi = influxDB.getQueryApi(org);

// Function to query data from InfluxDB
async function queryData() {
  const query = `
    from(bucket: "${bucket}")
      |> range(start: -30d)
      |> filter(fn: (r) => r._measurement == "water_consumption")
      |> filter(fn: (r) => r._field == "liters")
  `;

  const rows = [];
  return new Promise((resolve, reject) => {
    queryApi.queryRows(query, {
      next(row, tableMeta) {
        const o = tableMeta.toObject(row);
        rows.push(o);
      },
      error(error) {
        reject(error);
      },
      complete() {
        resolve(rows);
      },
    });
  });
}

// Endpoint to get predictions
app.get('/predict', async (req, res) => {
  try {
    const data = await queryData();
    const csvData = data.map(d => `${d._time},${d._value}`).join('\n');
    
    // Call Python script
    const pythonProcess = spawn('python3', ['predict.py']);

    let result = '';
    pythonProcess.stdout.on('data', (data) => {
      result += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
      if (code !== 0) {
        res.status(500).send('Error predicting data');
      } else {
        res.json(JSON.parse(result));
      }
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const mqtt = require('mqtt');

// const app = express();
// const port = 3000;

// // MQTT Broker configuration
// const mqttOptions = {
//     host: '680082c8643c49da9b91d1dd81acffc4.s1.eu.hivemq.cloud',
//     port: 8883,
//     protocol: 'mqtts',
//     username: 'Abd5656',
//     password: 'asdfgHJKL8*'
// };

// // Create MQTT client
// const mqttClient = mqtt.connect(mqttOptions);

// // Array to store received MQTT data
// let mqttData = [];

// // Subscribe to MQTT topic
// mqttClient.on('connect', function () {
//     console.log('MQTT connected');
//     mqttClient.subscribe('my/test/topic', function (err) {
//         if (!err) {
//             console.log('Subscribed to MQTT topic');
//         } else {
//             console.error('Error subscribing to MQTT topic:', err);
//         }
//     });
// });

// // Listen for MQTT messages
// mqttClient.on('message', function (topic, message) {
//     // Push received data to the array
//     mqttData.push(message.toString());
//     console.log('Received MQTT data:', message.toString());
// });

// // Setup Express middleware to parse JSON bodies
// app.use(bodyParser.json());

// app.get('/',(req,res)=>{
//     console.log("Hello")

// })
// // Route to get MQTT data
// app.get('/mqtt-data', (req, res) => {
//     res.json(mqttData);
// });

// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
// });

