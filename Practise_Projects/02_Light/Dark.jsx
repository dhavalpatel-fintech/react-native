import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

const App = () => {

  const theme = useColorScheme();
  // 1
  const isDarkMode1 = theme === 'light';

  const background1 = isDarkMode1 ? 'black' : 'white';
  const textColor1 = isDarkMode1 ? 'white' : 'black';
  // 2
  const isDarkMode2 = theme === 'dark';

  const background2 = isDarkMode2 ? 'black' : 'white';
  const textColor2 = isDarkMode2 ? 'white' : 'black';

  return (
    <SafeAreaView style={[styles.container, ]}>
      <View style={{width:150, height:45, backgroundColor:'black', borderBottomLeftRadius:20, borderBottomRightRadius:20}}></View>

      {/* 1 */}
      <View style={[styles.box1, {backgroundColor:background1}]}>
        <Text style={{color:textColor1, fontSize:50, fontWeight:'bold'}}>React-Native</Text>
      </View>

      {/* 2 */}
      <View style={[styles.box2, {backgroundColor:background2}]}>
      <Text style={{color:textColor2, fontSize:50, fontWeight:'bold'}}>React-Js</Text>
      </View>
    </SafeAreaView>
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
    // padding:10,
    gap:8, 
    backgroundColor:'lightblue',
    borderWidth:20,
    borderRadius:30
  },
  box1:{
    width:'100%',
    // height:'80%',
    flex:0.5,
    borderWidth:1,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'100%'
    

  },
  box2:{
    width:'100%',
    // height:'80%',
    flex:0.5,
    borderWidth:1,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'100%'
  },

})