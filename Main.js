import React from "react";
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  ScrollView
} from "react-native";
// import { Font } from 'expo';
import { Button, Card, Overlay } from "react-native-elements";
import * as firebase from "firebase";
import RestaurantCard from "./RestaurantCard";

export default class Main extends React.Component {
  state = { currentUser: null, isVisible: false };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50
        }}
      >
        <ScrollView>
          <Text>Hi {currentUser && currentUser.email}</Text>

          <RestaurantCard />
        </ScrollView>
      </View>
    );
  }
}
