import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

function SobreNosotros() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Sección de texto */}
        <View style={styles.textSection}>
          <Text style={styles.title}>Sobre nosotros.</Text>
          <Text style={styles.text}>
            Radar Eventos Aguascalientes es una plataforma dedicada a la promoción de eventos de todo tipo dentro del estado de Aguascalientes. Nuestro objetivo es conectar a las personas con las experiencias más emocionantes y variadas que la ciudad tiene para ofrecer, desde conciertos, ferias, exposiciones y eventos deportivos, hasta conferencias, festivales y actividades culturales.
          </Text>
          <Text style={styles.text}>
            Creemos que Aguascalientes es un lugar vibrante y lleno de vida, con algo para todos. Por ello, trabajamos constantemente para proporcionar información actualizada y precisa sobre los próximos eventos, facilitando a nuestros usuarios encontrar lo que más les interesa, todo en un solo lugar.
          </Text>
          <Text style={styles.text}>
            <Text style={styles.boldText}>Misión:</Text> Ser el principal punto de referencia para cualquier persona que quiera estar al tanto de los eventos más importantes en Aguascalientes, promoviendo el acceso a la cultura, el entretenimiento y el conocimiento.
          </Text>
          <Text style={styles.text}>
            <Text style={styles.boldText}>Visión:</Text> Consolidarnos como la plataforma líder en difusión de eventos en Aguascalientes, fomentando la participación ciudadana y contribuyendo al crecimiento de la escena cultural y social del estado.
          </Text>
          <Text style={styles.text}>
            En Radar Eventos Aguascalientes, nos apasiona promover todo lo que nuestra región tiene para ofrecer, creando una comunidad en la que las personas puedan descubrir nuevas experiencias y conectar con los eventos que les apasionan.
          </Text>
        </View>

        {/* Sección de imagen */}
        <View style={styles.imageSection}>
          <Image
            source={{ uri: '/assets/images/radar.png' }} // Sustituir por la URL o la ruta local del logo
            style={styles.logo}
          />
          <Text style={styles.logoText}>RADAR EVENTOS AGS</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textSection: {
    flex: 2,
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
  },
  boldText: {
    fontWeight: 'bold',
  },
  imageSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
  },
});

export default SobreNosotros;
