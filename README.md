# ⛔ Project Full Details

**Note**: Please don’t edit the document without confirmation from Ayham and the rest of the team

## 🏷️ Name

Waterward

## 📢 Slogan

Smart Water Management System

## 🎯 Goals

- Water tank level indicator
- Multiple tanks support wirelessly (using RF (Radio Frequency) modules)
- Smart control for tank motor (based on tank level)
- Cross platform application to control the system, monitor the tanks and data analysis and view notifications/predictions
- AI powered predictions and advices (to predict what stakeholders can and can't do with the current amount of water they have and advice them to do and don't)
- Optionally (yet to be decided): Control water flow for specific regions to cut water on based on specific configuration (from application)
- Optionally (yet to be decided): Control the water flow of the tank itself (such as remotely stop the water flow from specific tank)

## ⚙️ Project Components

- Tank sensor
    - Ultrasonic sensor (to measure water level)
    - RF Module (to communicate with the Hub)
    - Arduino Nano (direct electricity powered) (the project mind)
    - Optionally a screen (LCD/OLED) to display some data such as level
- Hub
    - RF Module (to receive data from tanks)
    - ESP32 (communicate with a router for Internet access, DB server for application)
    - Optionally external storage (for more DB and AI dataset)
    - Optionally a screen (LCD/OLED) to display some data without app access
- Application (Web/Mobile)
    - Dashboard (overview of tanks and latest notification, possibly global water related news section)
    - Account Settings
    - Register/Login (Suggested method: Register with any account, scan sensor QR and Hub QR to register the devices on the app)
    - Tanks pages
        - Overview & Settings for each tank
    - Support form page (Optional)

## 🛠️ Process Flow

1. Each tank has a sensor, it checks the water level every X minutes (suggested: 1min, can be configured) and quality every X hour (suggested: 1 hour,  can be configured), then it sends the data through the RF module to the Hub
2. In the main place such as the house, the Hub is installed that collects the data from each tank’s sensor, then update the DB with the new data
3. Application connects to the DB server that is on the Hub that is connected on the Router OR external server (in the mean time it will be on external server for the graduation project, later it may change and have subscriptions. This is mainly because in order to make it go through the router a static IP must be presented always and a port must be opened but sadly with every router restart the IP gets changed and the app won’t be able to reconnect until reconfigured, or it we may allow the hub to have an external SIM card for Internet)

## ⭐ Main Features

- Check water level for each tank
- Check water quality for each tank
- Connect multiple tanks to a single Hub/app
- Control each tank motor based on water level
- (TBD: To be decided) Remotely control the water flow for each tank
- (TBD) Remotely control the water flow for specific regions (such as: bathroom 1, bathroom 2 and the garden)
- Predict (using AI) upcoming possible usage to notify stakeholders/control water flow
- Send notifications to the stakeholders for predictions, news, general advices, specific advices
- Send notifications to the stakeholders for specific events such as:
    - Stealing/theft (someone stealing water from a tank, if water level goes down by X per minute then an alert it sent for possible theft)
    - Water Leakage, same as stealing condition but different values (or based on continuous water flow)
    - Government/External tank filling reached the end or not
- Configure as much as possible from controls such as:
    - Notification behavior (when and for what to send notifications)
    - Control (block/allow) the water flow based on conditions
    - Tank specifics (height, max water volume)
    - Every X minutes to update water level for each tank
    - Every X minutes to update water quality for each tank

## 🌟 Secondary Features

- Secure system (application, hardware, wave signals)
- High Performance
- Availability
- Reliable system, e.g. no inaccurate readings
- Scalability (allows adding more tanks, more Hubs for each account)

## 👥 Targeted Audience

As of now, we are targeting Homes, but the project can work on mostly any kind of liquid and and kind of audience with possibly some extra tweaks.

## 💵 Targeted Budget

We plan to make the project as low cost as possible in order to even make our project more challenging with other similar projects however, based on our research there is no such competitor within Jordan that have the features we provide however, globally there are different products and they all vary from features, prices and limitations

## 📅 Targeted Timeline

We plan to finish the project as hardware and software in the first phase (GP1) so that in GP2 we only work on finalizing the project and adding possible suggestions from the supervisor if possible and within the scope

- **2023 December**: Finish the hardware prototype with minimal application connections
    - Finish 3D model design & printing of the cases for the sensors and the Hub
    - Finish the sensor prototype
    - Finish the Hub prototype
    - Finish the research on existing AI dataset for individual average water usage to implement later on
    - Application minimal dashboard
    - Application register devices (hub/sensors)
- **2024 January**: Finish the application main features and AI training
    - Login/Register
    - Main pages
        - Dashboard
        - Tanks page
        - Tank dashboard page
        - Tank settings page
        - Support page
    - DB Connection
- **2024 February**: Finish connecting the hardware with the application with possibly the finished prototype
    - Possibly fully working application prototype
    - Possibly fully working hardware prototype
    - Fully working connecting between application and hardware
    - Design improvements overall evaluation

## 👥 Team Member Roles

The whole team should work together in all stages and should know preferably everything in each stage/component of the project however, each team member should focus more than others on specific parts of their specialization:

- Ayham: **IoT**
    - Team Lead
    - Hardware (Hub, sensors, 3D prints)
    - Software (Programming the application and connections)
    - Quality Control
- Rama: **Security**
    - Application Security (login/register methods, API security, DB statements/calls, Secure Architecture Design, etc.)
    - Hardware Security (Safe wave signals, )
    - Pentesting the application
    - Security Documentation of the software and hardware
    - Network Security
- Heba: **Artificial Intelligence & Data Analysis**
    - Finding the best suitable dataset for the project (individual’s average water usage, water usage advices)
    - Training the AI with the dataset
    - Analyzing the data coming from the tanks for calculating the average individual usage, overall home weekly average usage, etc.
    - Help Integrating the AI with the project code
- Abdullah: **Software Engineering, IoT and Programming**
    - Preparing the software engineering documents and guiding the team through what’s needed to be done for each team member in project assignments/deliverable
        - System Design
        - Project Management Model
        - Documentation
        - Requirements Analysis
        - etc.
    - IoT Collaboration
        - Hardware prototype
    - Software Collaboration
        - Application prototype
    
    ## 🙏 Thank you!
