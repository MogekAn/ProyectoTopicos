import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function AddressSearchScreen() {
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [colony, setColony] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [location, setLocation] = useState(null);

  const handleSearch = () => {
    console.log('Calle:', street);
    console.log('Número:', number);
    console.log('Colonia:', colony);
    console.log('Código Postal:', postalCode);

    // Aquí puedes configurar una ubicación de ejemplo
    setLocation({
      coords: {
        latitude: 21.1619, // Latitud de ejemplo: Aguascalientes
        longitude: -101.6228, // Longitud de ejemplo
      },
    });
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
        {location && (
          <WebView
            style={styles.map}
            originWhitelist={['*']}
            source={{
              uri: `https://www.google.com/maps?q=${location.coords.latitude},${location.coords.longitude}&z=15`,
            }}
          />
        )}
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
  locationContainer: {
    width: '120%',
    height: '60%',
    
  },
  map: {
      width: '100%',
      height: '5%',
  },
});
