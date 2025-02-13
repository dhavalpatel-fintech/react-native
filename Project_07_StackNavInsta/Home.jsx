import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={[styles.container, {width: '100%', height: '100%', gap: 20}]}>
      <Text style={{textAlign:'justify', marginTop:70, width:350, fontSize:15, fontWeight:'bold', fontStyle:'italic'}}>
        Instagram is a popular social media platform for sharing photos, videos,
        and stories. It features reels, messaging, and shopping, connecting
        users worldwide through visual content and engagement with followers.
      </Text>
      <Text style={{fontSize: 25, fontWeight: 'bold', marginTop:30, textDecorationLine:'underline'}}>Instagram</Text>
      <Image
        style={styles.Image}
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/042/148/632/non_2x/instagram-logo-instagram-social-media-icon-free-png.png',
        }}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter username or emailId"
      />
      <TextInput style={styles.textInput} placeholder="Enter Password" />
      <Button
        style={styles.Button}
        title="Profile"
        onPress={() =>
          navigation.navigate('Profile', {id: 1, name: 'Dhaval'})
        }></Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    // gap:100,
    // justifyContent:'space-around',
    alignItems: 'center',
    backgroundColor:'white'
  },
  Image: {
    width: 100,
    height: 100,
    justifyContent: 'center',
  },
  textInput: {
    width: 200,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
  },
  Button: {
    width: '30%',
    backgroundColor:'#B92B27',
  },
});
