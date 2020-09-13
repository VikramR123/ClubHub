import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image } from 'react-native';
import LoginForm from './LoginForm'

export default function Login() {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo}
          source={require('../assets/ClubHubLogo.png')} />
      </View>
      
      <View style={styles.formContainer}>
        <LoginForm />
      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00cec9',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  logo: {
    width: 200,
    height: 200
  },
  formContainer: {

  },
});
