import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const dummy = [
  {
    id: 1,
    name: 'Dhaval Patel',
    Email: 'dhaval@google.com',
    image:
      'https://plus.unsplash.com/premium_photo-1665941065977-993d9105662a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 2,
    name: 'Dhaval Patel',
    Email: 'dhaval@google.com',
    image:
    'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 3,
    name: 'Dhaval Patel',
    Email: 'dhaval@google.com',
    image:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8fHww'
  },
  {
    id: 4,
    name: 'Dhaval Patel',
    Email: 'dhaval@google.com',
    image:
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 5,
    name: 'Dhaval Patel',
    Email: 'dhaval@google.com',
    image:
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww'
  },
  {
    id: 6,
    name: 'Dhaval Patel',
    Email: 'dhaval@google.com',
    image:
    'https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fHww'
  },
  {
    id: 7,
    name: 'Dhaval Patel',
    Email: 'dhaval@google.com',
    image:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww'
  },
  {
    id: 8,
    name: 'Dhaval Patel',
    Email: 'dhaval@google.com',
    image:
    'https://plus.unsplash.com/premium_photo-1661281211518-7bc99840fe64?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 9,
    name: 'Dhaval Patel',
    Email: 'dhaval@google.com',
    image:
    'https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 10,
    name: 'Dhaval Patel',
    Email: 'dhaval@google.com',
    image:
    'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 11,
    name: 'Dhaval Patel',
    Email: 'dhaval@google.com',
    image:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 12,
    name: 'Dhaval Patel',
    Email: 'dhaval@google.com',
    image:
    'https://media.istockphoto.com/id/1398994132/photo/happy-businesswoman-using-a-digital-tablet-young-leading-businesswoman-using-a-wireless.webp?a=1&b=1&s=612x612&w=0&k=20&c=1vy4ur9HIUkOiE6aY1BH4TA-UhkYCKnzZ4jvuhdkdQY='
  },
];

const Project04 = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummy}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image
              style={{
                width: 90,
                height: 90,
                borderRadius: 50,
                borderWidth: 3,
                borderColor: 'lightgrey',
              }}
              source={{
                // uri:'https://media.istockphoto.com/id/1398994132/photo/happy-businesswoman-using-a-digital-tablet-young-leading-businesswoman-using-a-wireless.webp?a=1&b=1&s=612x612&w=0&k=20&c=1vy4ur9HIUkOiE6aY1BH4TA-UhkYCKnzZ4jvuhdkdQY=',
                uri: 'https://plus.unsplash.com/premium_photo-1665941065977-993d9105662a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
              }}
            />
            <View>
              <Text>Dhaval</Text>
              {/* <Text>Email</Text> */}
            </View>
          </View>
        )}

        // ItemSeparatorComponent={<View style={{height:10}}/>}
        // numColumns={3}
        // keyExtractor={item => item.id}
        // columnWrapperStyle={{justifyContent:"space-evenly"}}
        extraData={{}}
        horizontal


      />
    </View>
  );
};

export default Project04;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    // padding: 10,
    borderWidth: 2,
    flexDirection:"row",
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems:"flex-start",
    paddingTop:20,
  },
  card: {
    // width: '25%',
    // height:'25%',
    backgroundColor:"white",
    justifyContent: 'center',
    alignItems: 'center',
  },
});
