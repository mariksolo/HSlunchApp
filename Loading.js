import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

import * as firebase from "firebase";
// import "firebase/auth";

export default class Loading extends React.Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? 'App' : 'Auth')
        })
      }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}
