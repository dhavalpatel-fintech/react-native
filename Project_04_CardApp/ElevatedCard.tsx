import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card:</Text>

      <ScrollView horizontal={true} style={[styles.container]}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{fontWeight:"bold", fontSize:20, color:"black"}}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{fontWeight:"bold", fontSize:20, color:"black"}}>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{fontWeight:"bold", fontSize:20, color:"black"}}>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{fontWeight:"bold", fontSize:20, color:"black"}}>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{fontWeight:"bold", fontSize:20, color:"black"}}>from</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{fontWeight:"bold", fontSize:20, color:"black"}}>left</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{fontWeight:"bold", fontSize:20, color:"black"}}>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{fontWeight:"bold", fontSize:20, color:"black"}}>right</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{fontWeight:"bold", fontSize:20, color:"black"}}>&</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{fontWeight:"bold", fontSize:20, color:"black"}}> more...</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText:{
        fontSize: 30,
        fontWeight: "bold",
        // padding:10,
        paddingHorizontal:10,
        paddingVertical:10
    },
    container:{
        padding:10,
        flex:1,
        flexDirection:"row",
        gap:10,
    },
    card:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:100,
        height:100,
        borderRadius:5,
        margin:10
    },
    cardElevated:{
        backgroundColor:'#CAD5E9',
        elevation:10,
        shadowOffset:{
            width:100,
            height:100
        },
        shadowColor:"#000000",
        shadowOpacity:0.5,
        shadowRadius:5
    }
})