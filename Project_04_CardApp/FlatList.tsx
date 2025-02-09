import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatList = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card:</Text>

      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text style={{fontWeight:"bold", fontSize:20, color:"white"}}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text style={{fontWeight:"bold", fontSize:20, color:"white"}}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text style={{fontWeight:"bold", fontSize:20, color:"white"}}>Blue</Text>
        </View>
      </View>
    </View>
  )
}

export default FlatList

const styles = StyleSheet.create({
    headingText:{
        fontSize: 30,
        fontWeight: "bold",
        // padding:10,
        paddingHorizontal:10,
        paddingVertical:10
    },
    container:{
        flexDirection: "row",
        flexWrap:"wrap"
    },
    card:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:100,
        height:100,
        borderRadius:5,
        margin:15,
    },
    cardOne:{
       backgroundColor: "#EF5354",
    },
    cardTwo:{
       backgroundColor: "#50DBB4",
    },
    cardThree:{
       backgroundColor: "#5DA3FA",
    }
})