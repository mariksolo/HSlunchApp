import React from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import * as firebase from "firebase";

export default class Main extends React.Component {
  state = { currentUser: null };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }
  render() {
    const { currentUser } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>These are your previous orders.</Text>
      </View>
    );
  }
}