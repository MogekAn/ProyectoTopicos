import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa los íconos desde react-native-vector-icons

function Kudai({ route }) {
    const { event } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.rowContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/images/AuDimo.png')} // Ruta de la imagen en el proyecto
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
                            source={{ uri: 'https://cdn.arema.dev/live/eventos/13078.jpg' }}
                            style={styles.additionalImage}
                        />
                        <View style={styles.detailsContainer}>
                            <Text style={styles.title}>{event.name}</Text>
                            <Text style={styles.details}>
                                Fecha: 7 de diciembre
                                <br/>
                                Hora: 9:00 pm
                                <br/>
                                Lugar: Auditorio Dimo
                                <hr color='blue'/>
                                <br/>
                                Mas info
                            </Text>
                            {/**Redes para mas info*/}
                            <Icon name="logo-facebook" size={30} color="gray" style={styles.rightIcon} 
                            onPress={() => Linking.openURL("https://www.facebook.com/kudai")}/>
                            <Icon name="logo-instagram" size={30} color="gray" style={styles.rightIcon} 
                            onPress={() => Linking.openURL("https://www.instagram.com/kudaiofficial/")}/>
                            <Icon name="ticket" size={30} color="gray" style={styles.rightIcon} 
                            onPress={() => Linking.openURL("https://arema.mx/evento/13078")}/>
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

export default Kudai;