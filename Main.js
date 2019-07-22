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
import RestaurantCard from './RestaurantCard';

export default class Main extends React.Component {
  state = { currentUser: null, isVisible: false };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }
//   handlePress = () => {
//     this.state.isVisible = true;
//     this.setState({
//       isVisible: true
//     })
//     console.log("in handlePress");
// }
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
        {/* <Overlay isVisible={this.state.isVisible}>
          <Text>Hello from Overlay!</Text>
        </Overlay> */}

        
        
        <ScrollView>
          <Text>Hi {currentUser && currentUser.email}</Text>
          {/* <Card image={require("./assets/the-wonderful-cheeseburgers.jpg")}
            style={{
              padding: 10,
              
            }}>
            <Text>The Habit Burgers</Text>
            <Text>$ - Burgers - Fast Food</Text>
            <Text>Rating</Text>
            <Button title="Menu" onPress={this.handlePress}/>
          </Card> */}
          <RestaurantCard />
        </ScrollView>
      </View>
    );
  }
}
