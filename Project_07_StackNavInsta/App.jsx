import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Search from './Components/Search';
import PerInfo from './Components/PerInfo';
import {NavigationContainer} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    // <SafeAreaView>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{headerStyle:{backgroundColor:'#E4405F'}}}>
      <Stack.Screen name="Home" component={Home} options={{headerStyle:{backgroundColor:'#E4405F'}}} />
      <Stack.Screen name="Profile" component={Profile} options={{headerStyle:{backgroundColor:'#E4405F'}}} />
      <Stack.Screen name="Search" component={Search} options={{headerStyle:{backgroundColor:'#E4405F'}}} />
      <Stack.Screen name="PerInfo" component={PerInfo} options={{headerShown:true, title:'Personal Information'}} />
      </Stack.Navigator>
    // </SafeAreaView>
    
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
