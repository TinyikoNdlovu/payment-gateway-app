import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";


import Signup from './pages/Signup';

import Header from './components/Header';

const Stack = createStackNavigator();

const App = () => {

  const [user, setUser] = useState();

  if (!user) {
    return (
      <Stack.Navigator>
        
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



