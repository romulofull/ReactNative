import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar'; 
import HouseDetails from './HouseDetails';
import Formulario from './Formulario';

const house = {
  area: 220,
  barrio: "La Garzota",
  precio: 220000,
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <HouseDetails house={house} />
       <Formulario /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', 
  },
});
