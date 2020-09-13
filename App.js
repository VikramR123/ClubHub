import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TabScreen from './screens/TabScreen'
import Login from './login/Login'
import SplashScreen from './login/SplashScreen'


const LoginScreen = () => {
  return (
    //<Login />
    <View>
      <Text> Testing out </Text>
    </View>
  )
}


const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App;
// export default function App() {
//   return (
//     <Login/>
//     //<SplashScreen/>
    
//     //<TabScreen />
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
