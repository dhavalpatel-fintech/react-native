import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React, { useCallback } from 'react';

const App = () => {
  // 1
  const theme1 = useColorScheme() === 'dark';
  const backgroundColor1 = theme1 ? 'black' : 'white';
  const textColor1 = theme1 ? 'white' : 'black';

  // 2
  const theme2 = useColorScheme() === 'light';
  const backgroundColor2 = theme1 ? 'white' : 'black';
  const textColor2 = theme1 ? 'black' : 'white';


  return (
    <SafeAreaView style={styles.bigContainer}>
      {/* box-01 */}
      <View style={[styles.container1, {backgroundColor:backgroundColor1}]}>
        <Text style={{color:textColor1, fontSize:50, fontWeight:'bold'}}>Dhaval</Text>
      </View>

      {/* box-02 */}
      <View style={[styles.container2, {backgroundColor:backgroundColor2}]}>
        <Text style={{color:textColor2, fontSize:50, fontWeight:'bold'}}>Patel</Text>
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  bigContainer:{
    // flex:0.5,
    width:'100%',
    height:'100%',
    backgroundColor:'black',
    padding:20,
    gap:20

  },
  container1:{
    width:'100%',
    height:'100%',
    flex:0.5,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'white'
  },
  container2:{
    width:'100%',
    height:'100%',
    flex:0.5,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'white'
  }
})
