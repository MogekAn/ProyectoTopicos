import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Contactos</Text>
        
        <Text style={styles.content}>
        En Radar Eventos Aguascalientes, estamos aquí para ayudarte y resolver cualquier duda o inquietud 
        que puedas tener sobre nuestra plataforma, los eventos publicados o cualquier otro tema relacionado. 
        ¡Nos encantaría escucharte! No dudes en ponerte en contacto con nosotros si tienes preguntas sobre 
        cómo anunciar un evento, mejorar tu experiencia en la plataforma, o cualquier comentario que nos 
        ayude a seguir mejorando. ¡Estamos aquí para ti!
        </Text>
        
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333333',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333333',
  },
  updateDate: {
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666666',
  },
  date: {
    marginTop: 20,
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NotificationScreen;
