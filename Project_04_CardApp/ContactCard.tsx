import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

// rnfs

export default function ContactCard() {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?V=4',
      // imageUrl:
      //   'https://images.pexels.com/photos/26692095/pexels-photo-26692095/free-photo-of-a-businesswoman-sitting-at-the-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I Love To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?V=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?V=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
    {
      uid: 5,
      name: 'Arun Babbar',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?V=4',
      // imageUrl:
      //   'https://images.pexels.com/photos/26692095/pexels-photo-26692095/free-photo-of-a-businesswoman-sitting-at-the-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: 6,
      name: 'Kripal Pathak',
      status: 'I Love To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?V=4',
    },
    {
      uid: 7,
      name: 'Soumya Menon',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?V=4',
    },
    {
      uid: 8,
      name: 'Anirudh Jha',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List:</Text>
      <ScrollView style={styles.container} scrollEnabled={true}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image style={styles.userImage} source={{uri:imageUrl}} />
            <View>
                <Text style={[styles.userName]}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
      },
  container: {
    padding:15,
  },
  userCard: {
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    marginBottom:5,
    padding:10,
    backgroundColor:'#EAF0F1',
    borderRadius:20,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius:60/2,
    borderWidth: 2,
    marginRight:15,
  },
  userName: {
     textDecorationLine:"underline",
     fontWeight:"bold",
     color:"#000000",
    //  color:"#FFFFFF",
     fontSize:18,
  },
  userStatus: {
    fontWeight:400,
    fontStyle:"italic",
     //  color:"#000000",
    //  color:"#FFFFFF",
  },
});
