import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HouseDetails = ({ house }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Casa en Venta</Text>
      <View style={styles.gallery}>
        <Image source={require('./assets/imagenes/foto1.jpg')} style={styles.image} />
        <Image source={require('./assets/imagenes/foto2.jpg')} style={styles.image} />
      </View> 
       <View style={styles.details}>
        <Text style={styles.detailText}><Text style={styles.bold}>Metros Cuadrados:</Text> {house.area}</Text>
        <Text style={styles.detailText}><Text style={styles.bold}>Barrio:</Text> {house.barrio}</Text>
        <Text style={styles.detailText}><Text style={styles.bold}>Precio:</Text> ${house.precio}</Text>
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  gallery: {
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 150,
    margin: 5,
  },
  details: {
    marginTop: 10,
  },
  detailText: {
    fontSize: 18,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default HouseDetails;
