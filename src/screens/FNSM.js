import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa los íconos desde react-native-vector-icons

function FNSM({ route }) {
  const { event } = route.params;

  // Estados para los íconos
  const [isLiked, setIsLiked] = useState(false); // Controla el icono del corazón
  const [isScheduled, setIsScheduled] = useState(false); // Controla el icono del calendario

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.imageContainer}>
          <Image 
            source={require('../../assets/images/FNSM.png')} // Ruta de la imagen en el proyecto
            style={styles.image} 
          />
        </View>
        
        <View style={styles.textContainer}>
          {/* Contenedor para los íconos */}
          <View style={styles.iconRow}>
            {/* Icono de corazón */}
            <Icon 
              name={isLiked ? "heart" : "heart-outline"} 
              size={30} 
              color="red" 
              style={styles.leftIcon} 
              onPress={() => setIsLiked(!isLiked)} // Alterna el estado
            />
            {/* Icono de calendario */}
            <Icon 
              name={isScheduled ? "calendar" : "calendar-outline"} 
              size={30} 
              color="black" 
              style={styles.rightIcon} 
              onPress={() => setIsScheduled(!isScheduled)} // Alterna el estado
            />
          </View>

          {/* Nueva sección con HStack */}
          <View style={styles.hStack}>
            <Image 
              source={{ uri: 'https://www.laferiadesanmarcos.com/wp-content/uploads/2024/03/feria-nacional-de-san-marcos-2025.jpg' }} 
              style={styles.additionalImage} 
            />
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{event.name}</Text>
              <Text style={styles.details}>
                Del 19 de abril al 11 de mayo de 2025  
                <br />
                En Aguascalientes
                <br />
                Próximamente más detalles
                <hr color='blue'/>
                <br />
                Mas info
              </Text>
              {/** Redes para más info */}
              <Icon name="logo-facebook" size={30} color="gray" style={styles.rightIcon} 
                onPress={() => Linking.openURL("https://www.facebook.com/ferianacionaldesanmarcosoficial")} />
              <Icon name="logo-instagram" size={30} color="gray" style={styles.rightIcon} 
                onPress={() => Linking.openURL("https://www.instagram.com/fnsm_oficial/")} />
              <Icon name="logo-tiktok" size={30} color="gray" style={styles.rightIcon} 
                onPress={() => Linking.openURL("https://www.tiktok.com/@fnsm_oficial?is_from_webapp=1&sender_device=pc")} />
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

export default FNSM;
