import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useState} from 'react';
import React from 'react';

const Create_Items = ({data, setdata}) => {
  const [itemName, setitemName] = useState('');
  const [stockAmt, setstockAmt] = useState('');
  const [isEdit, setisEdit] = useState(false);
  const [editItemId, seteditItemId] = useState(null);

  // add items in the stock
  const addItemHandler = () =>{
    const newItem = {
        id:Date.now(),
        name:itemName,
        stock:stockAmt,
    }
    setdata([...data, newItem ])
    setitemName('')
    setstockAmt('')
    setisEdit(false)
  }

  // edit items in the stock
  const editItemHandler = (item) =>{
    setitemName(item.name);
    // setstockAmt('');
    setisEdit(true);
    seteditItemId(item.id);
  }

  // update item and the stocks
  const updateItemHandler = () =>{
    setdata(data.map((item) =>(
        item.id === editItemId ? {...item, name: itemName, stock : stockAmt} : item
    )))
  }

  // delete the items from the stocks
  const deleteItemHandler =(id) =>{
    setdata(data.filter((item)=> item.id !== id))
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>
        Modify/ Generate or Edit the Stock Item
      </Text>

      <TextInput
        placeholder="Enter the Item Name..."
        placeholderTextColor="#47535E"
        style={styles.input}
        value={itemName}
        onChangeText={(item) => setitemName(item)}
      />
      <TextInput
        placeholder="Enter the Stock Amount..."
        placeholderTextColor="#47535E"
        style={styles.input}
        value={stockAmt}
        onChangeText={(item) => setstockAmt(item)}
      />

     <Pressable style={styles.button} onPress={()=> isEdit ? updateItemHandler() : addItemHandler()}>
        <Text style={styles.btnText}>{isEdit ? 'EDIT ITEM IN THE STOCK'  : 'ADD ITEM IN THE STOCK'}</Text>
      </Pressable>

      <View>
        <Text style={{fontSize:22, fontWeight:'bold', textAlign:'center', textDecorationLine:'underline'}}>List of Items in the Stock:</Text>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={[
                styles.itemContainer,
                {backgroundColor: item.stock < 20 ? '#EA7773' : '#D7F6BFFF'},
              ]}>
              <Text style={[styles.itemText]}>{item.name}</Text>

              <View style={{flexDirection: 'row', gap: '35'}}>
                <Text style={[styles.itemText]}>{item.stock}</Text>

                <Pressable onPress={() => editItemHandler(item)}>
                  <Text style={[styles.itemText, {color:'black'}]}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteItemHandler(item.id)}>
                  <Text style={[styles.itemText, {color:'black'}]}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Create_Items;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 20,
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
  },
  button: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#CABFEEFF',
    textAlign: 'center',
    borderRadius: 10,
    paddingVertical: 8,
  },
  btnText:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
  },
  itemContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:25,
    paddingVertical:10,
    borderWidth:1,
    borderRadius:10,
    marginTop:10,
},
itemText:{
  fontWeight:'bold',
  fontSize:15,
},
  
});
