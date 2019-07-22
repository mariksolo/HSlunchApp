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
import { Button, Card, Overlay, Icon } from "react-native-elements";
import * as firebase from "firebase";

class MenuItem extends React.Component {
  state = { iconName: "shopping-cart", buttonTitle: "Add to Cart" };
  handlePress = () => {
    this.setState({
      iconName: "done",
      buttonTitle: ""
    });
  };
  render() {
    return (
      <View style = {{
        flexDirection: "row",
        justifyContent: 'space-between'
    }}> 
        <Text>Charburger</Text>
        <Text>$6.15</Text>
        <Button
          title={this.state.buttonTitle}
          icon={<Icon name={this.state.iconName} size={15} color="white" />}
          onPress={this.handlePress}
        />
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
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
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
