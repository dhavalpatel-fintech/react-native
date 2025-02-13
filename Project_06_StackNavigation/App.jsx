import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Search from './Components/Search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

// Function to define the stack navigator
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'
    screenOptions={{headerStyle:{backgroundColor:'lightblue'}}}>
      <Stack.Screen 
      name="Home" 
      component={Home} 
      options={{title:"Home Screen", headerStyle:{backgroundColor:'lightgreen'}}}
      />
      <Stack.Screen 
      name="Profile" 
      component={Profile} 
      // options={{headerShown:false}}
      />
      <Stack.Screen 
      name="Search" 
      component={Search} 
      // options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return ( // Missing return statement added
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
