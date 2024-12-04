import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function AddressSearchScreen() {
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [colony, setColony] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleSearch = () => {
    console.log('Calle:', street);
    console.log('Número:', number);
    console.log('Colonia:', colony);
    console.log('Código Postal:', postalCode);
  };

  return (
    <View style={styles.container}>
      {/* Sección de formulario */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Calle:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa la calle"
          value={street}
          onChangeText={setStreet}
        />

        <Text style={styles.label}>No.:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa el número"
          value={number}
          onChangeText={setNumber}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Fraccionamiento o colonia:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa la colonia"
          value={colony}
          onChangeText={setColony}
        />

        <Text style={styles.label}>Código postal:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa el código postal"
          value={postalCode}
          onChangeText={setPostalCode}
          keyboardType="numeric"
        />

        <Button title="Buscar" onPress={handleSearch} color="#333" />
      </View>

      {/* Sección del mapa */}
      <View style={styles.mapContainer}>
      <Image
              source={require('../../assets/images/FondoReg.png')} 
              alt="Imagen decorativa"
              resizeMode="cover" // "cover" hace que la imagen ocupe toda el área disponible, manteniendo su proporción
              width="100%" // Asegura que ocupe todo el ancho
              height="100%" // Asegura que ocupe todo el alto
            />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
  },
  formContainer: {
    flex: 1,
    paddingRight: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: '#6200EE',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});


