import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center', gap:20}}>
      <Text style={{fontSize:25, fontWeight:'bold', textDecorationLine:'underline'}}>Profile Page</Text>
      <Image
      style={{width:200, height:200, borderRadius:30}}
      source={{uri:'https://img.freepik.com/premium-vector/hello-we-are-back-welcome-again-we-are-open-welcome-back-social-media-instagram-post_129404-4194.jpg'}}
      />
      <Button style={styles.Button} title='Search'></Button>

      
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    Button:{
        backgroundColor:'lightgreen',
    }
})