import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center', gap:20}}>
      <Text style={{fontSize:25, fontWeight:'bold'}}>Home</Text>
      <Button title='Profile' onPress={()=>navigation.navigate("Profile",{id:1, name:'Dhaval'})}></Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})