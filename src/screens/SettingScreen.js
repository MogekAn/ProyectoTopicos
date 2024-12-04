import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const PrivacyPolicyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Políticas de Privacidad</Text>
        <Text style={styles.updateDate}>Última actualización: 13/10/2024</Text>
        <Text style={styles.content}>
          En Radar Eventos Aguascalientes, tu privacidad es muy importante para nosotros. Por ello, hemos desarrollado esta Política de Privacidad para explicar cómo recopilamos, usamos y protegemos tu información personal.
        </Text>
        <Text style={styles.subTitle}>1. Recopilación de Información:</Text>
        <Text style={styles.content}>
          Cuando accedes a nuestra plataforma, podemos recopilar información personal como tu nombre, correo electrónico y datos de contacto para proporcionarte una mejor experiencia.
        </Text>
        <Text style={styles.subTitle}>2. Uso de la Información:</Text>
        <Text style={styles.content}>
          Utilizamos tu información únicamente para los fines descritos, como la personalización de servicios, envío de notificaciones sobre eventos y mejoras en la plataforma.
        </Text>
        <Text style={styles.subTitle}>3. Compartición de Información:</Text>
        <Text style={styles.content}>
          No compartimos tu información personal con terceros sin tu consentimiento, salvo que sea requerido por la ley.
        </Text>
        <Text style={styles.subTitle}>4. Seguridad de la Información:</Text>
        <Text style={styles.content}>
          Implementamos medidas de seguridad para proteger tus datos contra accesos no autorizados.
        </Text>
        <Text style={styles.subTitle}>5. Cookies y Tecnologías Similares:</Text>
        <Text style={styles.content}>
          Utilizamos cookies para mejorar tu experiencia en nuestra plataforma. Puedes desactivar las cookies en tu navegador, aunque algunas funciones podrían verse afectadas.
        </Text>
        <Text style={styles.subTitle}>6. Derechos del Usuario:</Text>
        <Text style={styles.content}>
          Tienes derecho a acceder, corregir o eliminar tu información personal. Para ejercer estos derechos, contáctanos en los medios proporcionados.
        </Text>
        <Text style={styles.subTitle}>7. Cambios en la Política:</Text>
        <Text style={styles.content}>
          Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Te notificaremos sobre los cambios importantes.
        </Text>
        <Text style={styles.content}>
          Si tienes preguntas o inquietudes sobre nuestra Política de Privacidad, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.
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

export default PrivacyPolicyScreen;
