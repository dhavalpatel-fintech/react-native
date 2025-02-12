import { SafeAreaView, StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{width:150, height:45, backgroundColor:'black', borderBottomLeftRadius:20, borderBottomRightRadius:20}}></View>
      <Text style={{fontSize:50, fontWeight:'bold'}}>Sequoia</Text>
      <Image 
      style={{height:400, width:300, borderWidth:10, borderRadius:20, }}
      source={{uri:'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-trees-with-bright-blue-sky-free-image.jpeg?w=600&quality=80'}}
      />

      <Text style={{width:"80%", fontSize:18, fontWeight:400}}>The Sequoia is a massive tree species native to California, known for its towering height and incredible longevity. The Giant Sequoia and Coast Redwood are among the tallest living organisms.</Text>

      <Button title='Submit'></Button>

      <View style={{width:150, backgroundColor:'black', height:5, borderRadius:10, marginTop:20}}></View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:"center",
    gap:20,
    borderWidth:15,
    borderRadius:50,
  }
})