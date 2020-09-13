import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Animated, Easing } from 'react-native';
import { Transition } from 'react-native-reanimated';
import TabScreen from '../screens/TabScreen'

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Username or Email" placeholderTextColor="gray" returnKeyType="next" onSubmitEditing={() => this.passwordInput.focus()} keyboardType="email-address" autoCapitalize="none" autoCorrect={false} style={styles.input} />

                <TextInput placeholder="Password" placeholderTextColor="gray" returnKeyType="go" secureTextEntry style={styles.input} ref={(input) => this.passwordInput = input} />

                <TouchableOpacity onClick={() => alert("Something")} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <Button 
                    title="Register Here"
                />
            </View>
        );
    }
}



const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 10,
    color: "#FFF",
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#22a6b3",
    paddingVertical: 15
  },
  buttonText: {
      textAlign: "center",
      fontWeight: "bold"
  }
});
