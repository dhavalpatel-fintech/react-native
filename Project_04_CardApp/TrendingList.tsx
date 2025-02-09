import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TrendingPlace = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Place:</Text>

      {/* New York */}
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.pexels.com/photos/4451517/pexels-photo-4451517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>
            New York City - United States of America
          </Text>
          <Text style={styles.cardDescription}>
            New York is a bustling metropolis, known for its iconic landmarks,
            diverse culture, fast-paced lifestyle, and endless opportunities.
          </Text>
          <Text style={styles.cardFooter}>10 miles from New Jersey</Text>
        </View>
      </View>

      {/* London */}
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>
            London City - United States of America
          </Text>
          <Text style={styles.cardDescription}>
            London, the capital of the United Kingdom, is a vibrant,
            multicultural city known for its history, landmarks, and global
            influence.
          </Text>
          <Text style={styles.cardFooter}>10 miles from Heathrow Airport</Text>
        </View>
      </View>

      {/* Hong-Kong */}
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.pexels.com/photos/3327505/pexels-photo-3327505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hong-Kong City - SAR of China</Text>
          <Text style={styles.cardDescription}>
            Hong Kong, a Special Administrative Region of China, is a vibrant,
            bustling city known for its skyscrapers, harbor, and culture.
          </Text>
          <Text style={styles.cardFooter}>10 miles from Macau</Text>
        </View>
      </View>

      {/* Mumbai */}
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.pexels.com/photos/22397911/pexels-photo-22397911/free-photo-of-the-taj-mahal-palace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Mumbai City - India</Text>
          <Text style={styles.cardDescription}>
            Mumbai, India’s financial hub, is a bustling city known for its
            entertainment industry, culture, historic landmarks, and vibrant
            street life, located on the Arabian Sea coast.
          </Text>
          <Text style={styles.cardFooter}>50 miles from SiddhiVinayak Temple</Text>
        </View>
      </View>
    </View>
  );
};

export default TrendingPlace;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  card: {
    width: 380,
    height: 380,
    margin: 15,
    borderRadius: 10,
  },
  cardElevated: {
    // borderWidth:2,
    borderColor: 'lightgray',
    // elevation:2
  },
  cardImage: {
    height: 250,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // borderBottomRightRadius:30
  },
  cardBody: {
    borderWidth: 2,
    borderColor: 'lightgray',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexGrow: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 10,
    textAlign: 'center',
  },
  cardDescription: {
    fontStyle: 'italic',
    padding: 10,
    textAlign: 'justify',
    color: '#192A56',
    fontWeight: 'bold',
  },
  cardFooter: {
    textAlign: 'right',
    paddingRight: 20,
    // paddingTop:10,
    color: '#2B2B52',
    fontStyle: 'italic',
  },
});
