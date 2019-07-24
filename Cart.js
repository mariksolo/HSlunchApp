import React from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import * as firebase from "firebase";
import { Button, Card, Overlay, Icon } from "react-native-elements";
import store from "./state.js";
import {addToCart, removeFromCart} from './actions.js';



export default class Cart extends React.Component {
  state = { currentUser: null };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
    
  }
  handlePress() {
    console.log(store.getState());
  }
  render() {
    const { currentUser } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
        <Text>This is your cart</Text>
        <Button onPress={this.handlePress} title="title"></Button>
      </View>
    );
  }
}