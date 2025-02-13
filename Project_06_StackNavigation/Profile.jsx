import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Profile = ({navigation, route}) => {
    const {id, name} = route.params
  return (
    <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center', gap:20}}>
      <Text style={{fontSize:25, fontWeight:'bold'}}>Profile</Text>
      <Button title='Search' onPress={()=>navigation.navigate("Search")}></Button>
      <Text style={{fontSize:30, fontWeight:'bold'}}>id: {id}</Text>
      <Text style={{fontSize:30, fontWeight:'bold'}}>name:{name}</Text>
      
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})