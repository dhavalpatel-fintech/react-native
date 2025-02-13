import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PerInfo = ({navigation, route}) => {
    const {id, name, age, city, emailid} = route.params
  return (
    <View style={styles.container}>
      <Text style={{fontSize:35, fontWeight: 'bold', marginTop:30, textDecorationLine:'underline'}}>Personal Information</Text>
      <Text style={{fontSize:25, fontWeight:'bold', marginTop:50}}>1. Id: {id}</Text>
      <Text style={{fontSize:25, fontWeight:'bold', marginTop:20}}>2. Name:{name}</Text>
      <Text style={{fontSize:25, fontWeight:'bold', marginTop:20}}>3. Age:{age}</Text>
      <Text style={{fontSize:25, fontWeight:'bold', marginTop:20}}>4. City:{city}</Text>
      <Text style={{fontSize:25, fontWeight:'bold', marginTop:20}}>5. Email-Id:{emailid}</Text>
    </View>
  )
}

export default PerInfo

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        // gap:100,
        // justifyContent:'space-around',
        // alignItems: 'center',
        backgroundColor:'white'
      },
})