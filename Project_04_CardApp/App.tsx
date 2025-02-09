import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatList from './Components/FlatList';
import ElevatedCards from './Components/ElevatedCards';
import TrendingPlace from './Components/TrendingPlace';
import ActionCard from './Components/ActionCard';
import ContactCard from './Components/ContactCard';

const CardApp = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: 'lightblue',
            borderWidth: 1,
            borderRadius: 2,
          }}>
          CardApp
        </Text>

        {/* inserting the flatlist in the file */}
        <FlatList />

        {/* inserting the elevated cards file */}
        <ElevatedCards/>

        {/* inserting the TrendingPlace in gthe file  */}
        <TrendingPlace/>

        {/* inserting the action card in the file */}
        <ActionCard/>


        {/* inserting the contact card */}
        <ContactCard/>

      </ScrollView>
    </SafeAreaView>
  );
};

export default CardApp;

const styles = StyleSheet.create({});
