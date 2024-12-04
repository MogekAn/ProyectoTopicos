import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Linking, Pressable, Image } from 'react-native'; // Importar Image
import Icon from 'react-native-vector-icons/Ionicons';

function Market({ route }) {
  const { event } = route.params;

  // Estado para alternar iconos
  const [fav, setFav] = useState(false); // Usar setFav para alternar el estado
  const [agendar, setAgendar] = useState(false); // Usar setAgendar para alternar el estado

  const handleMapPress = () => {
    Linking.openURL('https://maps.app.goo.gl/xL16mFkroQRGU1LQ6'); // Redirige al enlace del mapa
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/Market.png')}
            style={styles.image}
          />
        </View>

        <View style={styles.textContainer}>
          {/* Contenedor para los íconos */}
          <View style={styles.iconRow}>
            {/* Iconos con funcionalidad de alternar */}
            <Icon
              name={fav ? "heart" : "heart-outline"}
              size={30} color="red" style={styles.leftIcon}
              onPress={() => setFav(!fav)} // Alterna el estado con setFav
            />
            <Icon
              name={agendar ? "calendar-sharp" : "calendar-outline"}
              size={30} color="black" style={styles.rightIcon}
              onPress={() => setAgendar(!agendar)} // Alterna el estado con setAgendar
            />
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
                🔴 MERCADO GASTRONÓMICO 🍔
                {"\n"}
                ⚡️ Descubre la magia nocturna en el 💙 de Aguascalientes‼️
                {"\n"}
                Ven a 🍿♟️🎲 ‼
                {"\n"}
                📅 Viernes Y Sabado 
                {"\n"} 
                ⌚ De 6:00pm a 10:30pm
                {"\n"}
                📍 Bosque urbano FICOTRECE a un costado del velódromo sobre Av heroico colegio militar
              </Text>

              {/* Línea azul y leyenda "Más info" */}
              <View style={styles.infoContainer}>
                <View style={styles.line} />
                <Text style={styles.infoText}>Más info</Text>
              </View>

              {/* Redes para más info */}
              <View style={styles.socialIconsRow}>
                <Icon
                  name="logo-facebook"
                  size={30}
                  color="gray"
                  style={styles.socialIcon}
                  onPress={() => Linking.openURL("https://www.facebook.com/profile.php?id=100083598896259&locale=es_LA")}
                />
                <Icon
                  name="logo-instagram"
                  size={30}
                  color="gray"
                  style={styles.socialIcon}
                  onPress={() => Linking.openURL("https://www.instagram.com/Market_nocturno?fbclid=IwY2xjawG6NEtleHRuA2FlbQIxMAABHTA7Yz_hENyMS_UjuHiq0K_Dtb4Tf1q7IahSYtQs3gCfrzpP91aDGYbG4A_aem_hjW0KYQejx5F0xJn4Xoh-A")}
                />
                <Icon
                  name="logo-tiktok"
                  size={30}
                  color="gray"
                  style={styles.socialIcon}
                  onPress={() => Linking.openURL("https://www.tiktok.com/@marketnocturnoags?is_from_webapp=1&sender_device=pc")}
                />
              </View>

              {/* Botón Ver en mapa */}
              <Pressable style={styles.mapButton} onPress={handleMapPress}>
                <Text style={styles.mapButtonText}>Ver en mapa</Text>
              </Pressable>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
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
    marginBottom: 10,
  },
  hStack: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  additionalImage: {
    width: 200,
    height: 250,
    borderRadius: 10,
    marginRight: 20,
  },
  detailsContainer: {
    flex: 1,
  },
  details: {
    fontSize: 16,
    lineHeight: 22,
  },
  infoContainer: {
    marginTop: 15,
    alignItems: 'flex-start', // Alinea a la izquierda
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#a9a9a9', // Gris claro
    marginBottom: 5,
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: 'blue',
    marginTop: 5, // Espacio entre el texto y la línea
  },
  socialIconsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  mapButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  mapButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Market;
