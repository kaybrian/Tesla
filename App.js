import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Caritem from './components/caritem';

export default function App() {
  return (
    <View style={styles.container}>


      <Caritem 
        name={'Model 3'} 
        tagline={'Order Online for'} 
        taglinecta={'Touchless Delivery'}
        image={require('./assets/images/Model3.jpeg')}
      />


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
