import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  Button
} from "react-native";

export default class SignUp extends React.Component {
  state = { email: "", password: "", errorMessage: null };

  handleSignUp = () => {
    // TODO: Firebase stuff...
    console.log("handleSignUp");
  };

  render() {
    return (
      <View>
        <Text>Sign up!</Text>
        <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        />
      </View>
    );
  }
}
