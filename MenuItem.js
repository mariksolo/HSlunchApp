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

export default class MenuItem extends React.Component {
  state = {
    iconName: "shopping-cart",
    buttonTitle: "Add to Cart",
    restaurantID: this.props.restaurantID,
    itemID: this.props.itemID,
    quantity: this.props.quantity,
  };

  componentDidMount = () => {
    const currentOrders = store.getState().orders;
    
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