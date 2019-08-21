import React from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import * as firebase from "firebase";
import { Button, Card, Overlay, Icon } from "react-native-elements";
import store from "./state.js";
import {addToCart, removeFromCart} from './actions.js';


import MenuItem from './MenuItem';
function renderCart(props) {
  return (
    <View>

    </View>
  )
}

export default class Cart extends React.Component {
  state = { currentUser: null, state: null };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    const state = store.getState();
    this.setState({ currentUser, state });
    
  }
  handlePress() {
    console.log(store.getState());
  }
  render() {
    const { currentUser } = this.state;
    const reduxState = store.getState();
    const cart = reduxState.orders.map((order) => {
      console.log("fuck");
      <View>
        <Text>order.restaurantID</Text>
        <Text>order.itemID</Text>
        <Text>order.quantityID</Text>
      </View>

    });
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
        <Text>This is your cart</Text>
        <Button onPress={this.handlePress} title="title"></Button>
        {cart
        }
        {/* <MenuItem restaurantID="Habit" itemID="1" quantity={4}/> */}
      </View>
    );
  }
}