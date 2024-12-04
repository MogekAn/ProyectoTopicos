import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function ContactosScreen() {
  return (
    <View style={styles.container}>
      {/* Sección de texto de contactos */}
      <Text style={styles.title}>Contactos.</Text>
      <Text style={styles.description}>
        En Radar Eventos Aguascalientes, estamos aquí para ayudarte y resolver cualquier duda o inquietud que puedas tener sobre nuestra plataforma, los eventos publicados o cualquier otro tema relacionado. ¡Nos encantaría escucharte!
      </Text>

      {/* Íconos de redes sociales */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{uri: 'https://cdn-icons-png.flaticon.com/512/281/281769.png' }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Texto adicional */}
      <Text style={styles.footerText}>
        No dudes en ponerte en contacto con nosotros si tienes preguntas sobre cómo anunciar un evento, mejorar tu experiencia en la plataforma, o cualquier comentario que nos ayude a seguir mejorando. ¡Estamos aquí para ti!
      </Text>

      {/* Logotipo de Radar Eventos */}
      <View style={styles.logoContainer}>
      <Image
                  source={require('../../assets/images/logo.png')} // Ruta de la imagen
                  alt="Logo"
                  resizeMode="contain"
                  flex={1}
                  height="100px"
                  width="200px"
                  ml="2"
                />
        <Text style={styles.logoText}>RADAR EVENTOS AGS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
  },
  footerText: {
    fontSize: 14,
    color: '#555',
    marginTop: 20,
    textAlign: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
});

export default ContactosScreen;
