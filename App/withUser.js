import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';

const withUser = (WrappedComponent) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      console.log('Setting up onAuthStateChanged listener');
      const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (currentUser) => {
        if (currentUser) {
          console.log('User is logged in:', currentUser);
          setUser(currentUser);
        } else {
          console.log('User is not logged in');
          setUser(null);
        }
      });

      return () => {
        console.log('Cleaning up onAuthStateChanged listener');
        unsubscribe();
      };
    }, []);

    const handleLogout = () => {
      signOut(FIREBASE_AUTH)
        .then(() => {
          setUser(null);
        })
        .catch((error) => {
          console.error('Error logging out:', error);
        });
    };

    if (!user) {
      return <Text>Loading...</Text>;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.AppName}>WaterWard</Text>
        <View style={styles.header}>
          <Text style={styles.username}>Hello, {user.displayName || user.email}</Text>
          <Button color={'lightblue'} title="Logout" onPress={handleLogout} />
        </View>
        <WrappedComponent {...props} user={user} />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AppName: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'lightblue',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default withUser;
