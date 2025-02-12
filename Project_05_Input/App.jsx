import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react';
import React from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [submittedText, setsubmittedText] = useState('');

  // functions

  const handleSubmit = ()=>{
    setsubmittedText(text);
    setText('');
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Duniya, How are you??</Text>
      <TextInput style={styles.input}
      placeholder='Enter your name here....'
      value={text}
      onChangeText={(text)=>setText(text)}
      />

      <Button title='Submit' onPress={handleSubmit}></Button>

      <View style={styles.result}>
        {submittedText ? (<Text style={{fontSize:20,}}>Result:{submittedText}</Text>) : null};
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    gap:20,
    backgroundColor:'lightgreen',
  },
  text:{
    fontSize:25,
    fontWeight:'bold',
  },
  input:{
    width:200,
    fontSize:30,
    borderWidth:2,
    borderRadius:20,
  },
  result:{
    width:200,
    height:100,
    borderWidth:1,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
  }
})