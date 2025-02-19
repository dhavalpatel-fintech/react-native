import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const All_Items = ({data}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>

      <FlatList
        contentContainerStyle={{gap: 10}}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={[
              styles.itemContainer,
              {backgroundColor: item.stock < 20 ? '#EA7773' : '#D7F6BFFF'},
            ]}>
            <Text
              style={[
                styles.itemText,
                {color: item.stock < 20 ? 'white' : 'black'},
              ]}>
              {item.name}
            </Text>
            <Text
              style={[
                styles.itemText,
                {color: item.stock < 20 ? 'white' : 'black'},
              ]}>
              {item.stock}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default All_Items;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 20,
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
