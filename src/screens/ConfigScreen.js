import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const TermsAndConditionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Términos y Condiciones</Text>
        <Text style={styles.updateDate}>Última actualización: 13/10/2024</Text>

        {/* Secciones */}
        <Text style={styles.content}>
          Bienvenido a Radar Eventos Aguascalientes. Estos Términos y Condiciones regulan el acceso y uso de nuestro sitio web, 
          cuyo objetivo principal es promocionar eventos próximos de cualquier tipo en el estado de Aguascalientes. Al utilizar el sitio web, 
          aceptas los siguientes términos y condiciones. Si no estás de acuerdo con alguno de ellos, te pedimos que no utilices el sitio.
        </Text>

        <Text style={styles.sectionTitle}>1. Aceptación de los Términos</Text>
        <Text style={styles.content}>
          Al acceder a Radar Eventos Aguascalientes, confirmas que has leído, comprendido y aceptado estos Términos y Condiciones. 
          Estos términos podrán ser modificados en cualquier momento sin previo aviso, por lo que te sugerimos revisarlos periódicamente.
        </Text>

        <Text style={styles.sectionTitle}>2. Descripción del Servicio</Text>
        <Text style={styles.content}>
          Radar Eventos Aguascalientes es una plataforma online dedicada a la promoción de eventos que se llevarán a cabo en el estado de Aguascalientes. Proporcionamos a los usuarios información sobre fechas, lugares y detalles de eventos de diversa índole (culturales, deportivos, musicales, etc.). 
          No somos responsables de la organización o ejecución de los eventos, y la información proporcionada puede estar sujeta a cambios por parte de los organizadores.
        </Text>

        <Text style={styles.sectionTitle}>3. Registro de Usuario</Text>
        <Text style={styles.content}>
          Para acceder a ciertas funcionalidades del sitio, es posible que se te pida crear una cuenta proporcionando datos personales. Te comprometes a:
        </Text>
        <Text style={styles.bulletPoint}>• Proporcionar información verídica y actualizada.</Text>
        <Text style={styles.bulletPoint}>• Mantener la confidencialidad de tu cuenta y contraseña.</Text>
        <Text style={styles.bulletPoint}>• Informarnos inmediatamente si detectas algún uso no autorizado de tu cuenta.</Text>

        <Text style={styles.sectionTitle}>4. Condiciones de Uso</Text>
        <Text style={styles.content}>
          Te comprometes a utilizar el sitio de manera adecuada y conforme a la ley. Está prohibido:
        </Text>
        <Text style={styles.bulletPoint}>• Usar el sitio para actividades ilícitas, fraudulentas o malintencionadas.</Text>
        <Text style={styles.bulletPoint}>• Publicar, transmitir o compartir contenido ofensivo, difamatorio o inapropiado.</Text>
        <Text style={styles.bulletPoint}>• Interferir con el funcionamiento del sitio web o intentar obtener acceso no autorizado a los servidores.</Text>

        <Text style={styles.sectionTitle}>5. Contenido de Terceros</Text>
        <Text style={styles.content}>
          Radar Eventos Aguascalientes puede incluir enlaces o contenido proporcionado por terceros (organizadores de eventos, patrocinadores, etc.). 
          No controlamos ni nos responsabilizamos por el contenido, exactitud o actualización de estos sitios o información externa. Al acceder a dichos enlaces, aceptas que es bajo tu propio riesgo.
        </Text>

        <Text style={styles.sectionTitle}>6. Propiedad Intelectual</Text>
        <Text style={styles.content}>
          El contenido publicado en Radar Eventos Aguascalientes, incluyendo logotipos, textos, gráficos, imágenes y software, está protegido por derechos de propiedad intelectual. 
          Está prohibido reproducir, modificar o distribuir este contenido sin nuestro consentimiento previo por escrito.
        </Text>

        <Text style={styles.sectionTitle}>7. Responsabilidad de Radar Eventos Aguascalientes</Text>
        <Text style={styles.content}>
          Nos esforzamos por mantener la información lo más actualizada y precisa posible, pero no garantizamos la exactitud, integridad o actualidad del contenido. Tampoco somos responsables de cancelaciones, cambios en los eventos o la disponibilidad continua del sitio.
        </Text>

        <Text style={styles.sectionTitle}>8. Política de Privacidad</Text>
        <Text style={styles.content}>
          El manejo de tus datos personales está sujeto a nuestra Política de Privacidad, la cual detalla cómo recopilamos, utilizamos y protegemos tu información. 
          Te recomendamos revisarla para comprender mejor nuestras prácticas.
        </Text>

        <Text style={styles.footer}>
          Al utilizar Radar Eventos Aguascalientes, aceptas los términos aquí expuestos. Si en cualquier momento no estás de acuerdo con ellos, debes dejar de usar el sitio web.
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
    marginBottom: 10,
    textAlign: 'center',
    color: '#333333',
  },
  updateDate: {
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333333',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666666',
    textAlign: 'justify',
  },
  bulletPoint: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666666',
    marginLeft: 20,
  },
  footer: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    marginTop: 20,
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

export default TermsAndConditionsScreen;
