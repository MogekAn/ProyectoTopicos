import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importa los íconos de Gmail

const NotificationScreen = ({ navigation }) => {
  const handleSendEmail = () => {
    const mailtoUrl = 'mailto:tony.vuela@gmail.com';
    Linking.openURL(mailtoUrl); // Abre el cliente de correo con el correo ya escrito
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Contactos</Text>
        
        <Text style={styles.content}>
          En Radar Eventos Aguascalientes, estamos aquí para ayudarte y resolver cualquier duda o inquietud 
          que puedas tener sobre nuestra plataforma, los eventos publicados o cualquier otro tema relacionado. 
        </Text>
        <Text style={styles.content}>
          ¡Nos encantaría escucharte! 
        </Text>
        <Text style={styles.content}>
          No dudes en ponerte en contacto con nosotros si tienes preguntas sobre 
          cómo anunciar un evento, mejorar tu experiencia en la plataforma, o cualquier comentario que nos 
          ayude a seguir mejorando. 
        </Text>
        <Text style={styles.content}>
          ¡Estamos aquí para ti!
        </Text>

        {/* Icono de Gmail para enviar un correo */}
        <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
          <MaterialCommunityIcons name="gmail" size={40} color="white" />
          <Text style={styles.buttonText}>Enviar un correo</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center', // Asegura que el contenido se centre
    alignItems: 'center', // Alinea el contenido en el centro horizontalmente
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center', // Alinea los elementos dentro del ScrollView
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333333',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666666',
    textAlign: 'center', // Alinea el texto al centro
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NotificationScreen;
