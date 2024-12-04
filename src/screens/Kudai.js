import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function Kudai({ route }) {
  const { event } = route.params;

  // Estados para los íconos
  const [isLiked, setIsLiked] = useState(false); // Controla el icono del corazón
  const [isScheduled, setIsScheduled] = useState(false); // Controla el icono del calendario

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/AuDimo.png')}
            style={styles.image}
          />
        </View>

        <View style={styles.textContainer}>
          {/* Contenedor para los íconos */}
          <View style={styles.iconRow}>
            <Icon
              name={isLiked ? "heart" : "heart-outline"}
              size={30}
              color="red"
              style={styles.leftIcon}
              onPress={() => setIsLiked(!isLiked)}
            />
            <Icon
              name={isScheduled ? "calendar-sharp" : "calendar-outline"}
              size={30}
              color="black"
              style={styles.rightIcon}
              onPress={() => setIsScheduled(!isScheduled)}
            />
          </View>

          {/* Nueva sección con HStack */}
          <View style={styles.hStack}>
            <Image
              source={{ uri: 'https://cdn.arema.dev/live/eventos/13078.jpg' }}
              style={styles.additionalImage}
            />
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{event.name}</Text>
              <Text style={styles.details}>
                📅 7 de diciembre
                {"\n"}
                ⌚ 9:00 pm
                {"\n"}
                📍 Lugar: Auditorio Dimo
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
                  onPress={() => Linking.openURL("https://www.facebook.com/kudai")}
                />
                <Icon
                  name="logo-instagram"
                  size={30}
                  color="gray"
                  style={styles.socialIcon}
                  onPress={() => Linking.openURL("https://www.instagram.com/kudaiofficial/")}
                />
                <Icon
                  name="ticket"
                  size={30}
                  color="gray"
                  style={styles.socialIcon}
                  onPress={() => Linking.openURL("https://arema.mx/evento/13078")}
                />
              </View>

              {/* Botón de "Ver en mapa" */}
              <Pressable
                style={styles.mapButton}
                onPress={() => Linking.openURL("https://maps.app.goo.gl/nzjpycaRdZMXVaeo9")}
              >
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
  mapButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  mapButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Kudai;
