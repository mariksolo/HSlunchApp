import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import firebase from 'expo-firebase-app';
//import 'expo-firebase-database';firebase.database()
//import firebase from 'react-native-firebase';

import * as firebase from 'firebase';
import 'firebase/firestore';




// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDkG9poCkpPyXXDTM_YjRgY6j1Nf6t1jEQ",
  authDomain: "lunchapp-59882.firebaseapp.com",
  databaseURL: "https://lunchapp-59882.firebaseio.com",
  projectId: "lunchapp-59882",
  storageBucket: "",
  messagingSenderId: "478034506469",
  appId: "1:478034506469:web:aaef94b1312298ca"
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
