import React, { useState } from "react";
import { NativeBaseProvider, Box, Text, VStack, FormControl, Input, Button, Center, Link, HStack, Image } from "native-base";
import { Pressable } from "react-native";


export default function LoginScreen({ onLogin, navigation }) {
  const [nom, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Nom:", nom);
    console.log("Email:", email);
    console.log("Password:", password);
    onLogin();
  };

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <HStack flex={1} w="100%">
          <Box flex={1}>
            <Image
              source={require("../../assets/images/FondoReg.png")}
              alt="Imagen decorativa"
              resizeMode="cover"
              width="100%"
              height="100%"
            />
          </Box>
          <Box flex={1} safeArea p="2" py="8" px="6" mx="auto" justifyContent="center">
            <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb="4" color="blue.500">
              Ingresa a tu cuenta
            </Text>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Nombre</FormControl.Label>
                <Input placeholder="Ingresa tu Nombre" value={nom} onChangeText={text => setNombre(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Correo Electrónico</FormControl.Label>
                <Input placeholder="Ingresa tu correo" value={email} onChangeText={text => setEmail(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Contraseña</FormControl.Label>
                <Input placeholder="Ingresa tu contraseña" value={password} onChangeText={text => setPassword(text)} secureTextEntry />
              </FormControl>
              <Button mt="2" colorScheme="indigo" onPress={handleLogin}>
                Iniciar Sesión
              </Button>
              <HStack mt="6" justifyContent="center">
                <Text>¿Eres nuevo?{" "}</Text>
                <Pressable onPress={() => navigation.navigate("Registro")}>
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
