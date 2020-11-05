import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, Button,Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/header';
import HomeScreen from './screens/home';
import MapScreen from './screens/map';
import CallScreen from './screens/call';


const Stack = createStackNavigator();




export default function App() {
  const place = 'teste';
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Call" component={CallScreen} />
      </Stack.Navigator>

     
    </NavigationContainer>
  
    
   
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  textMain:{
    alignItems: 'center',

  },
  tinyButton:{
    paddingBottom:20,
    padding: 20,
  },

  tinyIcon: {
   
    width: 75,
    height: 75,
  },
  sosIcon: {
    width: 75,
    height: 75,
  }
});
