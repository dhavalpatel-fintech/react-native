import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Search = ({navigation}) => {
  return (
    <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center', gap:20}}>
      <Text style={{fontSize:25, fontWeight:'bold', textDecorationLine:'underline'}}>Search</Text>
      <Image 
      style={{width:200, height:200}}
      source={{uri:'https://t4.ftcdn.net/jpg/01/19/90/37/360_F_119903790_bY4wF303VjWYx7n2kt0az2nx5705Fzdg.jpg'}}
      />

        {/* <Button
        style={styles.Button}
        title="PerInfo"
        onPress={() =>
        navigation.navigate('PerInfo', {id: 1, name: 'Dhaval'})}
        >
        </Button> */}

      <TouchableOpacity style={styles.Button} onPress={() =>
          navigation.navigate('PerInfo', {id: 1, name: 'Dhaval Patel', emailid:'dhaval@google.com', age: 26, city:'Ahmedabad'})}>
        <Text style={{color:'white', fontWeight:'bold'}}>Click for Personal Information</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    Button:{
        width:220,
        height:30,
        backgroundColor:'#E4405F',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
})