import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function Market({ route }) {
  const { event } = route.params;

  const [fav, setFav] = useState(false);
  const [agendar, setAgendar] = useState(false);

  const handleMapPress = () => {
    Linking.openURL('https://maps.app.goo.gl/xL16mFkroQRGU1LQ6');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.rowContainer}>
        {/* Contenedor de la imagen y el botón */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/Market.png')}
            style={styles.image}
          />
          <Pressable style={styles.mapButton} onPress={handleMapPress}>
            <Text style={styles.mapButtonText}>Ver en mapa</Text>
          </Pressable>
        </View>

        {/* Contenedor del texto */}
        <View style={styles.textContainer}>
          <View style={styles.hStack}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvid-_USxy0e-mOyFTHFxUTDt1WOemXS0OA&s' }}
              style={styles.additionalImage}
            />
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{event.name}</Text>
              <Text style={styles.details}>
                🔴 MERCADO GASTRONÓMICO 🍔
                {"\n"}⚡️ Descubre la magia nocturna en el 💙 de Aguascalientes‼️
                {"\n"}Ven a 🍿♟️🎲 ‼
                {"\n"}📅 Viernes y Sábado
                {"\n"}⌚ De 6:00pm a 10:30pm
                {"\n"}📍 Bosque urbano FICOTRECE
              </Text>

              {/* Línea azul y leyenda "Más info" */}
              <View style={styles.infoContainer}>
                <View style={styles.line} />
                <Text style={styles.infoText}>Más info</Text>
              </View>

              {/* Redes sociales */}
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
                  onPress={() => Linking.openURL("https://www.instagram.com/Market_nocturno")}
                />
                <Icon
                  name="logo-tiktok"
                  size={30}
                  color="gray"
                  style={styles.socialIcon}
                  onPress={() => Linking.openURL("https://www.tiktok.com/@marketnocturnoags")}
                />
              </View>
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
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 20,
  },
  imageContainer: {
    width: '40%',
    alignItems: 'center', // Centra el botón horizontalmente
  },
  image: {
    width: '100%',
    height: 600, // Ajusta la altura
    borderRadius: 10,
    marginBottom: 10, // Espacio entre la imagen y el botón
  },
  mapButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  mapButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
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
    alignItems: 'flex-start',
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#a9a9a9',
    marginBottom: 5,
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: 'blue',
    marginTop: 5,
  },
  socialIconsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
});

export default Market;
