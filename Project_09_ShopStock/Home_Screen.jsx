import { Pressable, StyleSheet, Text, View } from 'react-native'
import All_Items from './All_Items'
import { useState } from 'react'
import React from 'react'
import Create_Items from './Create_Items'

const Home_Screen = () => {

    const [view, setview] = useState(0);
    const [data, setdata] = useState([
        { id:1, name : "Wheat", stock : 5, unit : "Kg" },
        { id:2, name : "Rice", stock : 15, unit : "Kg" },
        { id:3, name : "Maize", stock : 25, unit : "Kg" },
        { id:4, name : "Pulse", stock : 62, unit : "Kg" },
        { id:5, name : "Corn", stock : 35, unit : "Kg" },
        { id:6, name : "Grains", stock : 25, unit : "Kg" },
        { id:7, name : "Sprouts", stock : 15, unit : "Kg" },
      ])
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
      <View style={styles.btnContainer}>
        <Pressable style={[styles.button, view === 0 ? {backgroundColor: 'lightgreen'} : null]} onPress={() => setview(0)}>
            <Text style={[styles.btnText]}>All Items</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 1 ? {backgroundColor: 'pink'} : null]} onPress={() => setview(1)}>
            <Text style={[styles.btnText]}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 2 ? {backgroundColor: 'lightblue'} : null]} onPress={() => setview(2)}>
            <Text style={[styles.btnText]}>Create Stock</Text>
        </Pressable>
      </View>

      {view === 0 && <All_Items data={data} /> }
      {view === 1 && <All_Items data={data.filter((item) => item.stock<20)} /> }
      {view === 2 && <Create_Items data={data} setdata={setdata}/> }
    </View>
  )
}

export default Home_Screen

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        padding:'7%',
        gap:20,
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
    },
    btnContainer:{
        flexDirection:'row',
        gap:25,
    },
    button:{
        borderWidth:2,
        borderRadius:20,
    },
    btnText:{
        padding:10,
    }
})