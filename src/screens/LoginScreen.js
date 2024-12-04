import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { NativeBaseProvider, Box, Text, VStack, FormControl, Input, Button, Center, Link, HStack, Image } from 'native-base';
import { Pressable, View, StyleSheet, SafeAreaView } from 'react-native';



export default function LoginScreen({ onLogin}) {

  const navigation = useNavigation(); // Obtén el objeto de navegación
  
  const [nom, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   // Componente del encabezado
   const AppHeader = () => {
    return (
      <SafeAreaView>
        <View style={styles.header}>
          <Image
           source={require('../../assets/images/logo.png')} 
           alt="Logo"
                    resizeMode="contain"
                    flex={1}
                    height="100px"
                    width="200px"
                    
            style={styles.image}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  const handleLogin = () => {
    console.log("Nom:", nom);
    console.log("Email:", email);
    console.log("Password:", password);
    onLogin(); // Llama a la función pasada por props para cambiar el estado de autenticación
  };

  return (
    
    <NativeBaseProvider>
        {/* Header */}
        <AppHeader />
      <Center flex={1} px="3">
        <HStack flex={1} w="100%">
          {/* Sección izquierda: Imagen */}
          <Box flex={1}>
            <Image
              source={require('../../assets/images/FondoReg.png')} 
              alt="Imagen decorativa"
              resizeMode="cover" // "cover" hace que la imagen ocupe toda el área disponible, manteniendo su proporción
              width="100%" // Asegura que ocupe todo el ancho
              height="100%" // Asegura que ocupe todo el alto
            />
          </Box>


          {/* Sección derecha: Formulario */}
          <Box flex={1} safeArea p="2" py="8" px="6" mx="auto" justifyContent="center">
            <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb="4" color="blue.500">
              Ingresa a tu cuenta
            </Text>

            <VStack space={3} mt="5">
            <FormControl>
                <FormControl.Label>Nombre</FormControl.Label>
                <Input
                  placeholder="Ingresa tu Nombre"
                  value={nom}
                  onChangeText={text => setNombre(text)}
                  keyboardType="name"
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Correo Electrónico</FormControl.Label>
                <Input
                  placeholder="Ingresa tu correo"
                  value={email}
                  onChangeText={text => setEmail(text)}
                  keyboardType="email-address"
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Contraseña</FormControl.Label>
                <Input
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChangeText={text => setPassword(text)}
                  secureTextEntry
                />
               
              </FormControl>
              <Button mt="2" colorScheme="indigo" onPress={handleLogin}>
                Iniciar Sesión
              </Button>

              <HStack mt="6" justifyContent="center">
                <Text>¿Eres nuevo?{" "}</Text>
                <Pressable  onPress={() => navigation.navigate('Registro')}>
                  <Text color="indigo.500" fontWeight="medium" fontSize="sm">
                   Regístrate
                  </Text>
                </Pressable>
              </HStack>
            </VStack>
          </Box>
        </HStack>
      </Center>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
   
    backgroundColor: '#6200EE',
    padding: 16,
  },
  image: {
    width: 50, // Ajusta según el tamaño deseado
    height: 50, // Ajusta según el tamaño deseado
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 10,
  },
});

