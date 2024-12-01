import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa los íconos desde react-native-vector-icons

function Market({ route }) {
  const { event } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.imageContainer}>
          <Image 
            source={require('../../assets/images/Market.png')} // Ruta de la imagen en el proyecto
            style={styles.image} 
          />
        </View>
        
        <View style={styles.textContainer}>
          {/* Contenedor para los íconos */}
          <View style={styles.iconRow}>
            <Icon name="heart-outline" size={30} color="red" style={styles.leftIcon} />
            <Icon name="calendar-outline" size={30} color="black" style={styles.rightIcon} />
          </View>

          {/* Nueva sección con HStack */}
          <View style={styles.hStack}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvid-_USxy0e-mOyFTHFxUTDt1WOemXS0OA&s' }} 
              style={styles.additionalImage} 
            />
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{event.name}</Text>
              <Text style={styles.details}>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que también ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenían pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 20,
  },
  imageContainer: {
    width: '40%', 
    height: 500,
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Separa los íconos en los extremos
    alignItems: 'center',
    marginBottom: 10, // Espacio debajo de los íconos
  },
  leftIcon: {
    marginLeft: 10,
  },
  rightIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, // Espacio entre el título y el contenido
  },
  hStack: {
    flexDirection: 'row', // Alinea los elementos horizontalmente
    alignItems: 'center', // Centra verticalmente la imagen
    marginVertical: 10,
  },
  additionalImage: {
    width: 200, 
    height: 250,
    borderRadius: 10,
    marginRight: 20, // Espacio entre la imagen y el texto
  },
  detailsContainer: {
    flex: 1, // Hace que el contenedor ocupe el espacio restante
  },
  details: {
    fontSize: 16,
    lineHeight: 22, // Mejora la legibilidad del texto
  },
});

export default Market;
