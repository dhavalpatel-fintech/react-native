import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openwebsite(websitelink: string) {
    Linking.openURL(websitelink);
  }
  return (
    <View>
        {/* card-01 */}
      <Text style={styles.headingText}>Blog Card:</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in the Technology:</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.cardDescription}>
            Fintech (short for financial technology) refers to the use of
            technology to provide innovative solutions for financial services.
            It covers a wide range of applications, including digital payments,
            online banking, blockchain, cryptocurrency, lending platforms,
            insurance tech (insurtech), and robo-advisors. Fintech aims to
            improve and automate financial processes, making them more
            accessible, efficient, and cost-effective for individuals and
            businesses. It has revolutionized how people manage money, make
            transactions, and access financial services globally.
          </Text>
        </View>
        <View style={styles.footerContainer}>
            {/* 1>> Read Me */}
          <TouchableOpacity onPress={()=>openwebsite('https://fintechmagazine.com/top10/top-10-fintech-blogs-with-insights-innovations')}>
            <Text style={styles.socialLink}>Read More</Text>
          </TouchableOpacity>
          {/* 2>> Follow Me*/}
          <TouchableOpacity onPress={()=>openwebsite('https://www.twipla.com/en/glossary/f/follow-url')}>
            <Text style={styles.socialLink}>Follow for more</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* card-02 */}
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in the Finance:</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.cardDescription}>
            Fintech (short for financial technology) refers to the use of
            technology to provide innovative solutions for financial services.
            It covers a wide range of applications, including digital payments,
            online banking, blockchain, cryptocurrency, lending platforms,
            insurance tech (insurtech), and robo-advisors. Fintech aims to
            improve and automate financial processes, making them more
            accessible, efficient, and cost-effective for individuals and
            businesses. It has revolutionized how people manage money, make
            transactions, and access financial services globally.
          </Text>
        </View>
        <View style={styles.footerContainer}>
            {/* 1>> Read Me */}
          <TouchableOpacity onPress={()=>openwebsite('https://fintechmagazine.com/top10/top-10-fintech-blogs-with-insights-innovations')}>
            <Text style={styles.socialLink}>Read More</Text>
          </TouchableOpacity>
          {/* 2>> Follow Me*/}
          <TouchableOpacity onPress={()=>openwebsite('https://www.twipla.com/en/glossary/f/follow-url')}>
            <Text style={styles.socialLink}>Follow for more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

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
    height: 415,
    margin: 15,
    borderRadius: 5,
    borderWidth:1,
    backgroundColor:"#EAF0F1"
  },
  elevatedCard: {
    borderColor: 'lightgray',
    // elevation:2
  },
  headerText: {
    fontSize:20,
    textAlign:"center",
    fontWeight:'bold',
    // fontStyle:"italic",
  },
  headingContainer: {
    height:30,
    margin:5,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  cardImage: {
    height: 250,
    width: '100%',
    borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    borderBottomRightRadius:30
  },
  cardDescription: {
    fontStyle: 'italic',
    padding: 10,
    textAlign: 'justify',
    color: '#192A56',
    fontWeight: 'bold',
  },
  bodyContainer:{
    padding:5,
    margin:5,
  },
  footerContainer:{
    padding:0,
    flexDirection:"row",
    justifyContent:"space-evenly",
  },
  socialLink:{
    paddingHorizontal:10,
    paddingVertical:3,
    fontWeight:"bold",
    fontStyle:"italic",
    textDecorationLine:"underline",
    // backgroundColor:"white",
  }
});
