import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const theme = useColorScheme();
  console.log("Current Theme:", theme);

  // box-01
  const isDarkMode1 = theme === 'dark';
  const bcg1 = isDarkMode1 ? "black" : "white";
  const txtcolor1 = isDarkMode1 ? "white" : "black";

  // box-02
  const isDarkMode2 = theme === 'light';
  const bcg2 = isDarkMode2 ? "black" : "white";
  const txtcolor2 = isDarkMode2 ? "white" : "black";

  return (
    <SafeAreaView style={[styles.wholeContainer, { backgroundColor:'lightblue' }]}>
      {/* box-01 */}
      <View style={[styles.container, { backgroundColor: bcg1 }]}>
        <Text style={[styles.title, { color: txtcolor1 }]}>Box-01</Text>
      </View>

      {/* box-02 */}
      <View style={[styles.container, { backgroundColor: bcg2 }]}>
        <Text style={[styles.title, { color: txtcolor2 }]}>Box-02</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  wholeContainer: {
    width: '100%',
    height: '100%',
    padding: 10,
    gap: 10,
    borderWidth: 5,
    borderColor: 'green',
  },
  container: {
    flex: 1, // Instead of 1/2
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});
