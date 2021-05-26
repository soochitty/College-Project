import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import Home from './src/screens/Home';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signup">
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="My Mess" title = "Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;