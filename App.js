import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,Text  } from 'react-native';
import CarList from './components/carslist/index';
import Header from './components/header/index';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      
      <CarList />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
