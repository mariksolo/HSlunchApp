import React from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";

export default class Main extends React.Component {
  state = { currentUser: null };
  render() {
    const { currentUser } = this.state;
    return(
      <View>
        <Text>Hi {currentUser && currentUser.email}!</Text>
      </View>
    );
  }
}
