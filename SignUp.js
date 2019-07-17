import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TextInput
} from "react-native";

export default class SignUp extends React.Component {
  state = { email: "", password: "", errorMessage: null };

  handleSignUp = () => {
    // TODO: Firebase stuff...
    console.log("handleSignUp");
  };

  render() {
    return (
      <view>
        <text>Sign up!</text>
        <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </view>
    );
  }
}
