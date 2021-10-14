import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import OpenPopup from './components/common/Smart/OpenPopup';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <OpenPopup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top: StatusBar.currentHeight + 20,
    paddingHorizontal: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
