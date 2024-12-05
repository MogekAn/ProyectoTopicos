import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Linking } from 'react-native';
import { Text, VStack, HStack, Button, Pressable } from 'native-base';

function AddressSearchScreen() {
  const [selectedZone, setSelectedZone] = useState(null);
  
  // Mapa de zonas a imágenes
  const zoneImages = {
    Norte: require('../../assets/images/Norte.jpeg'),
    Sur: require('../../assets/images/Sur.jpeg'),
    Este: require('../../assets/images/FNSM.png'),
    Oeste: require('../../assets/images/FNSM.png'),
  };

  const zones = ['Norte', 'Sur', 'Este', 'Oeste']; // Las zonas disponibles

  return (
    <ScrollView style={styles.container}>
      <VStack space={1} alignItems="center" mt={4} bg="gray.300">
        <Text fontSize="3xl" bold>
          Eventos Cercanos
        </Text>
        <Text textAlign="center" px={1}>
          En esta sección podrás filtrar tus eventos en categorías, géneros, por la letra inicial del nombre, los más populares, los más vistos, los recomendados y así :)
        </Text>
      </VStack>

      <HStack space={4} mt={4} alignItems="center">
        {/* Zonas de la ciudad */}
        <VStack space={4} flex={1}>
          <Text fontSize="lg" bold>
            Zona de la ciudad
          </Text>

          <Button
            variant={selectedZone === null ? 'solid' : 'outline'}
            onPress={() => setSelectedZone(null)}
          >
            Centro
          </Button>

          {zones.map((zone) => (
            <Button
              key={zone}
              variant={selectedZone === zone ? 'solid' : 'outline'}
              onPress={() => setSelectedZone(zone)}
            >
              {zone}
            </Button>
          ))}
        </VStack>

        {/* Imagen de la zona seleccionada */}
        <VStack style={styles.imageContainer}>
          <Image
            source={selectedZone ? zoneImages[selectedZone] : require('../../assets/images/Centro.jpeg')}
            style={styles.image}
          />
          
        </VStack>

      </HStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  eventImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  imageContainer: {
    width: '40%',
    height: 'auto',
    marginRight: 20,
    alignItems: 'center', // Centra el botón horizontalmente
  },
  image: {
    width: '100%',
    height: 600, // Ajustar tamaño de la imagen según sea necesario
    borderRadius: 10,
    marginBottom: 10, // Espacio entre la imagen y el botón
  },
  mapButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginTop: 10,
  },
  mapButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default AddressSearchScreen;
