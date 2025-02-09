import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'


const Project02 = () => {
    const theme  = useColorScheme();
    // const isDarkMode = theme == "dark";
    const isDarkMode = theme == "light";

    const background = isDarkMode? "black" : "light";
    const textColor = isDarkMode? "white":"black";
  return (
    <View style={[styles.container, {backgroundColor: background}]}>
      <Text style={[styles.text, {color:textColor}]}>Dark / Light Theme</Text>
    </View>
  )
}

export default Project02

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:30,
        fontWeight:"bold"
    }
})