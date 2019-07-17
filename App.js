import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import firebase from 'expo-firebase-app';
//import 'expo-firebase-database';firebase.database()
//import firebase from 'react-native-firebase';

import * as firebase from "firebase";
import "firebase/firestore";

// import the different screens
import Loading from "./Loading";
import SignUp from "./SignUp";
import Login from "./Login";
import Main from "./Main";

//import { SwitchNavigator } from "react-navigation";
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});



class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Text>Open up App.js to start working on your app!</Text>
       </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Main
  }
});

const AuthNavigator = createStackNavigator({
  LoginScreen: Login,
  SignUpScreen: SignUp,
  

})

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: Loading,
    App: AppNavigator,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  }));