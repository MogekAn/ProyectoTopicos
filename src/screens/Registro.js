import React from "react";
import { NativeBaseProvider, Box, Text, VStack, FormControl, Input, Button, Center } from "native-base";

export default function Registro({ navigation }) {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb="4" color="blue.500">
            Crear una cuenta
          </Text>
          <VStack space={3}>
            <FormControl>
              <FormControl.Label>Nombre</FormControl.Label>
              <Input placeholder="Ingresa tu nombre" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Correo Electrónico</FormControl.Label>
              <Input placeholder="Ingresa tu correo" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Contraseña</FormControl.Label>
              <Input placeholder="Ingresa tu contraseña" secureTextEntry />
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={() => navigation.goBack()}>
              Registrarse
            </Button>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
