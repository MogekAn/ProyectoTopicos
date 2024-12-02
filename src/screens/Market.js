import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';
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
              🔴MERCADO GASTRONÓMICO 🍔 
              <br/>
              ⚡️Descubre la magia nocturna en el 💙 de Aguascalientes‼️
              <br/>
              Ven a 🍿♟️🎲‼️
                                <br/>
                                Lugar y horario: Viernes Y Sabado de 6:00 a 10:30
                                <br/>
                                Bosque urbano FICOTRECE aun costado del velódromo sobre Av heroico colegio militar
                                <hr color='blue'/>
                                <br/>
                                Mas info
                            </Text>
                            {/**Redes para mas info*/}
                            <Icon name="logo-facebook" size={30} color="gray" style={styles.rightIcon} 
                            onPress={() => Linking.openURL("https://www.facebook.com/profile.php?id=100083598896259&locale=es_LA")}/>
                            <Icon name="logo-instagram" size={30} color="gray" style={styles.rightIcon} 
                            onPress={() => Linking.openURL("https://www.instagram.com/Market_nocturno?fbclid=IwY2xjawG6NEtleHRuA2FlbQIxMAABHTA7Yz_hENyMS_UjuHiq0K_Dtb4Tf1q7IahSYtQs3gCfrzpP91aDGYbG4A_aem_hjW0KYQejx5F0xJn4Xoh-A")}/>
                            <Icon name="logo-tiktok" size={30} color="gray" style={styles.rightIcon} 
                            onPress={() => Linking.openURL("https://www.tiktok.com/@marketnocturnoags?is_from_webapp=1&sender_device=pc")}/>
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
