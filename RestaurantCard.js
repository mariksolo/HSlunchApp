import React from "react";
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  ScrollView,
  Picker,
  Col,
  Row
} from "react-native";

import { Button, Card, Overlay, Icon } from "react-native-elements";

import { default as uuid } from "uuid";
import store from "./state.js";
import { addToCart, removeFromCart } from "./actions.js";

// import Spinner from "react-native-number-spinner";
import InputSpinner from "react-native-input-spinner";

import MenuItem from './MenuItem';
export default class RestaurantCard extends React.Component {
  state = { currentUser: null, isVisible: false };
  handlePress = () => {
    this.setState({
      isVisible: true
    });
  };
  render() {
    const { currentUser } = this.state;

    return (
      <View>
        <Overlay
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
        >
          <View
            style={{
              flex: 1,
              alignContent: "center"
            }}
          >
            <Text>Menu</Text>
            <MenuItem restaurantID="Habit" itemID="1" quantity={1}/>
            <MenuItem restaurantID="Habit" itemID="2" quantity={1}/>
            <MenuItem restaurantID="Habit" itemID="3" quantity={1}/>
            <MenuItem restaurantID="Habit" itemID="4" quantity={1}/>
            <MenuItem restaurantID="Habit" itemID="5" quantity={1}/>
          </View>
        </Overlay>

        <Card
          image={require("./assets/the-wonderful-cheeseburgers.jpg")}
          style={{
            padding: 10
          }}
        >
          <Text>The Habit Burgers</Text>
          <Text>$ - Burgers - Fast Food</Text>
          <Text>Rating</Text>
          <Button title="Menu" onPress={this.handlePress} />
        </Card>
      </View>
    );
  }
}
