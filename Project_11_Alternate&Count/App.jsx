import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react';
import Count from './Components/Count';
import React from 'react'

const App = () => {
    const [userData, setUserData] = useState({name:'Dhaval Patel', age:26, Email_Id:'dhaval@google.com'});

    // const [isUppercase, setIsUppercase] = useState(false); // Flag to toggle the case

    const [switchCase, setswitchCase] = useState(1)

//   const updateHandle = () => {
//     if (isUppercase) {
//       setUserData({
//         name: 'Dhaval Patel',
//         age: 26,
//         Email_Id: 'dhaval@google.com',
//       });
//     } elif {
//       setUserData({
//         name: 'Vishal Chauhan',
//         age: 26,
//         Email_Id: 'DHAVAL@GOOGLE.COM',
//       });
//     }
//     else{

//     }
//     setIsUppercase(!isUppercase); // Toggle the flag
//   };

const updateHandle = () =>{
    switch (switchCase){
        case 1: setUserData(
            {name:'Dhaval Patel', age:26, Email_Id:'dhaval@google.com'}
            // break;
        );
        break;
        case 2: setUserData(
            {name:'Vishal Chauhan', age:26, Email_Id:'dhaval@google.com'}
            // break;
        );
        break;
        case 3: setUserData(
            {name:'DHAVAL PATEL', age:26, Email_Id:'dhaval@google.com'}
        );
        case 4: setUserData(
            {name:'VIHSAL CHAUHAN', age:26, Email_Id:'dhaval@google.com'}
        );
    }
}


    // const [count, setcount] = useState(0)

    // const updateHandle =() =>{
    //     setuserData({name:'DHAVAL PATEL', age:26, Email_Id:'DHAVAL@google.com'});
    //     setuserData({name:'Dhaval Patel', age:26, Email_Id:'dhaval@google.com'});
    //     // setuserData('');
    //     // setcount(prev => prev+1);
    // }
  return (
    <View style={{padding:50}}>
      <Text style={{fontSize:20, fontWeight:'bold'}}>Counter & Name Change App</Text>

      <View style={{marginTop:30, gap:20}}>
        <Text style={{fontSize:20}}>Name: {userData.name}</Text>
        <Text style={{fontSize:20}}>Age: {userData.age}</Text>
        <Text style={{fontSize:20}}>Email Id: {userData.Email_Id}</Text>
      </View>

      <View style={{marginTop:50, gap:20}}>
        <Button title='Press Me' onPress={updateHandle} />
      </View>


    {/* another component */}
      <Count />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})