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

class MenuItem extends React.Component {
  state = {
    iconName: "shopping-cart",
    buttonTitle: "Add to Cart",
    restaurantID: this.props.restaurantID,
    itemID: this.props.itemID,
    quantity: 1
  };

  componentDidMount = () => {
    const currentOrders = store.getState().orders;
    // console.log('--------')
    // console.log(currentOrders);
    // for (order in currentOrders) {
    //   console.log(order);
    // }
    // console.log('--------------')
  }
  handlePress = () => {
    
    if (this.state.buttonTitle != "") {
      store.dispatch(
        addToCart(
          this.state.restaurantID,
          this.state.itemID,
          this.state.quantity
        )
      );
      this.setState({
        iconName: "done",
        buttonTitle: ""
      });
    } else {
      store.dispatch(
        removeFromCart(this.state.restaurantID, this.state.itemID)
      );
      this.setState({
        iconName: "shopping-cart",
        buttonTitle: "Add to Cart"
      });
    }
  };
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <View
          style={{
            flexDirection: "column"
          }}
        >
          <View
            style={{
              flexDirection: "row"
            }}
          >
            <Text>Charburger</Text>
            <Text>$6.15</Text>
            <Button
              title={this.state.buttonTitle}
              icon={<Icon name={this.state.iconName} size={15} color="white" />}
              onPress={this.handlePress}
            />
          </View>
          <View
            style={{
              flexDirection: "row"
            }}
          >
            <InputSpinner
              max={10}
              min={1}
              value={this.state.quantity}
              colorMax={"#f04048"}
              colorMin={"#40c5f4"}
              onChange={num => {
                this.setState({
                  quantity: num
                })
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
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
            <MenuItem restaurantID="Habit" itemID="1" />
            <MenuItem restaurantID="Habit" itemID="2" />
            <MenuItem restaurantID="Habit" itemID="3" />
            <MenuItem restaurantID="Habit" itemID="4" />
            <MenuItem restaurantID="Habit" itemID="5" />
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
