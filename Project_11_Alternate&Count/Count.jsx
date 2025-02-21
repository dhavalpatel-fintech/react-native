import {StyleSheet, Text, View, Button} from 'react-native';
import { useState } from 'react';
import React from 'react';

const Count = () => {
        const [count, setcount] = useState(0)
    
  return (
    <View
      style={{
        marginTop: 20,
        gap: 20,
        borderWidth: 2,
        padding: 10,
        backgroundColor: 'lightblue',
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
        Count: {count}
      </Text>

      <Button
        title="Increase Count"
        onPress={() => {
          setcount(count + 1);
        }}
      />
    </View>
  );
};

export default Count;

const styles = StyleSheet.create({});
