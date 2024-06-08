import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from darts import TimeSeries
from darts.models import Prophet
from darts.metrics import mae
from influxdb_client import InfluxDBClient
from influxdb_client.client.write_api import SYNCHRONOUS
from dotenv import load_dotenv
import os
import json

# Load environment variables
load_dotenv()

# Flag to switch between InfluxDB and CSV
USE_CSV = True  # Set this to False when your sensors are set up

if USE_CSV:
    # Read data from CSV for testing
    csv_file_path = '/home/mrt/my_learning/Waterward/Backend/Fake_Water_Consumption_Data_Wider_Range.csv'  # Update this with the actual path to your CSV file
    df = pd.read_csv(csv_file_path)
    
    # Print the columns to inspect them
    print("CSV Columns:", df.columns)
    
    # Combine 'date' and 'time' columns into a single 'dateTime' column
    df['dateTime'] = pd.to_datetime(df['date'] + ' ' + df['time'])
    
    # Set 'dateTime' as the index
    df.set_index('dateTime', inplace=True)
    
    # Drop the original 'date' and 'time' columns
    df.drop(columns=['date', 'time'], inplace=True)
    
    # Rename the 'liters' column to 'value' to match the InfluxDB data format
    df.rename(columns={'liters': 'value'}, inplace=True)
else:
    # InfluxDB credentials
    url = os.getenv('INFLUXDB_URL')
    token = os.getenv('INFLUXDB_TOKEN')
    org = os.getenv('INFLUXDB_ORG')
    bucket = os.getenv('INFLUXDB_BUCKET')

    # Initialize InfluxDB client
    client = InfluxDBClient(url=url, token=token, org=org)
    query_api = client.query_api()

    # Define InfluxDB query
    query = f'''
    from(bucket: "{bucket}")
      |> range(start: -30d)
      |> filter(fn: (r) => r._measurement == "your_measurement")
      |> filter(fn: (r) => r._field == "your_field")
      |> aggregateWindow(every: 1h, fn: mean, createEmpty: false)
      |> yield(name: "mean")
    '''
    
    # Execute query and convert to DataFrame
    tables = query_api.query(org=org, query=query)
    records = [record.values for table in tables for record in table.records]
    df = pd.DataFrame(records)

    # Convert time column to datetime and set as index
    df['time'] = pd.to_datetime(df['_time'])
    df.set_index('time', inplace=True)
    df.rename(columns={'_value': 'value'}, inplace=True)
    df.drop(columns=['result', 'table', '_start', '_stop', '_time', '_field', '_measurement'], inplace=True)

# Ensure the DataFrame is sorted by index
df.sort_index(inplace=True)

# Resample data to hourly intervals
hourly_consumptions = df.resample('h').mean().fillna(0)

# Convert DataFrame to TimeSeries
series = TimeSeries.from_dataframe(hourly_consumptions, value_cols='value')

# Train-test split
train, val = series.split_before(0.8)

# Initialize and fit the model
model = Prophet()
model.fit(train)

# Make predictions
predictions = model.predict(len(val))

# Calculate Mean Absolute Error (MAE)
error = mae(val, predictions)
print(f"Mean Absolute Error: {error}")

# Plot the results
plt.figure(figsize=(10, 6))
series.plot(label='actual')
predictions.plot(label='forecast')
plt.legend()
plt.show()
