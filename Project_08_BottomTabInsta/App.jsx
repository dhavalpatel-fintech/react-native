import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Search from './Components/Search';
import PerInfo from './Components/PerInfo';
// fontawesome icon
// import HOME from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';

// stack navigation
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import { SafeAreaView } from 'react-native-safe-area-context';

// tab navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

// function

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName='Home'
    screenOptions={{tabBarActiveTintColor:'#E4405F', tabBarInactiveTintColor:'black', 
      tabBarLabelStyle:{fontSize:15},
      tabBarStyle:{height:60},
    }}>
      <Tab.Screen name="Home" component={Home} 
      options={{tabBarIcon:({size, color})=>(
        <AntDesign name="home" size={30} color={color} />
      )}}/>
      <Tab.Screen name="Profile" component={Profile} 
      options={{tabBarIcon:({size, color})=>(
        <Feather name="user" size={30} color={color} />
      )}}
      />
      <Tab.Screen name="Search" component={Search} 
      options={{tabBarIcon:({size, color})=>(
        <Octicons name="search" size={30} color={color} />
      )}}/>
      <Tab.Screen name="PerInfo" component={PerInfo} 
      options={{tabBarIcon:({size, color})=>(
        <Entypo name="user" size={30} color={color}/>
      )}}/>
    </Tab.Navigator>
  );
}


// const StackNavigator = () => {
//   return (
//     // <SafeAreaView>
//       <Stack.Navigator initialRouteName="Home"
//       screenOptions={{headerStyle:{backgroundColor:'#E4405F'}}}>
//       <Stack.Screen name="Home" component={Home} options={{headerStyle:{backgroundColor:'#E4405F'}}} />
//       <Stack.Screen name="Profile" component={Profile} options={{headerStyle:{backgroundColor:'#E4405F'}}} />
//       <Stack.Screen name="Search" component={Search} options={{headerStyle:{backgroundColor:'#E4405F'}}} />
//       <Stack.Screen name="PerInfo" component={PerInfo} options={{headerShown:true, title:'Personal Information'}} />
//       </Stack.Navigator>
//     // </SafeAreaView>
    
//   );
// };

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
