import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";


export default class Login extends React.Component {
    state = { email: '', password: '', errorMessage: null }  
    handleLogin = () => {
        // TODO: Firebase stuff...
        console.log('handleLogin')
      }

    render() {
        return (
            <View>
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
        )
    }
}