import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Header from './components/Header';

const Stack = createStackNavigator();

const App = () => {

  const [user, setUser] = useState();

  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login"
        component={Login}
        options={{
          headerTitle: () => <Header name="Bug Ninza" />,
          headerStyle: {
            height:150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#00e4d0',
            shadowColor: '#000',
            elevation: 25
          }
        }} />
        <Stack.Screen name="Signup"
        component={Signup}
        options={{
          headerTitle: () => <Header name="Bug Ninza" />,
          headerStyle: {
            height:150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#00e4d0',
            shadowColor: '#000',
            elevation: 25
          }
        }} />
        <Stack.Screen name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header name="Home" />,
          headerStyle: {
            height:150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#00e4d0',
            shadowColor: '#000',
            elevation: 25
          }
        }} />
          </Stack.Navigator>
    );
  }

}
export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}



