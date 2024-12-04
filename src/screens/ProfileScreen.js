import React, { useState, useEffect } from 'react';
import { Center, HStack, Button, Text, VStack, Image, useToast } from 'native-base';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import API from './services/api';

const ProfileScreen = () => {
  const [userName, setUserName] = useState('Sin Sesión'); // Estado para el nombre del usuario con valor predeterminado
  const toast = useToast();
  const navigation = useNavigation(); // Obtén el objeto de navegación

  useEffect(() => {
    // Llamada a la API para obtener el usuario actual
    API.get('/users/me') // Supongamos que este endpoint devuelve los datos del usuario autenticado
      .then(response => {
        const name = response.data?.name || "Sin Sesión"; // Si no hay nombre, usa "Sin Sesión"
        setUserName(name); // Guarda el nombre del usuario en el estado
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setUserName("Sin Sesión"); // Asigna "Sin Sesión" si ocurre un error
        toast.show({
          title: "No se encontró una sesión activa",
          status: "warning",
          duration: 2000,
          isClosable: true,
        });
      });
  }, []);

  const navigateToSection = (section) => {
    toast.show({
      title: `Navegando a ${section}`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });

    // Navegar a las pantallas correctas
    if (section === "Guardados") {
      navigation.navigate("Guardado");
    } else if (section === "Favoritos") {
      navigation.navigate("Favorito");
    } else if (section === "Eventos cercanos") {
      navigation.navigate("Cerca");
    } else if (section === "Editar perfil") {
      navigation.navigate("Perfil");
    }
  };

  return (
    <Center flex={1} px={4} bg="gray.200"> {/* Fondo gris para toda la página */}
      {/* Barra superior */}
      <HStack w="100%" justifyContent="space-between" alignItems="center" p={4} bg="white" position="absolute" top={10} left={0} right={0} zIndex={1}>
        {/* Nombre del usuario */}
        <Text fontSize="lg" color="gray.600" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="4xl" color="gray.600" fontWeight="bold" textAlign="center">
          PERFIL
        </Text>
        <Button
          variant="solid"
          colorScheme="blue"
          onPress={() => toast.show({ title: "Sesión cerrada", status: "warning" })}
        >
          Cerrar sesión
        </Button>
      </HStack>

      {/* Opciones horizontales */}
      <HStack justifyContent="space-between" mt={20} w="100%" flexWrap="wrap">
        {[
          { label: "Guardados", image: require('../../assets/images/Guardados.png') },
          { label: "Favoritos", image: require('../../assets/images/Favoritos.png') },
          { label: "Eventos cercanos", image: require('../../assets/images/Cerca.png') },
          { label: "Editar perfil", image: require('../../assets/images/Perfil.png') },
        ].map((option, index) => (
          <VStack
            key={index}
            w="23%"
            p={4}
            bg="white"
            rounded="lg"
            shadow={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize="lg" fontWeight="bold" mb={2} textAlign="center">
              {option.label}
            </Text>
            <Image source={option.image} alt={option.label} size="lg" mb={2} />
            <Button onPress={() => navigateToSection(option.label)}>Entrar</Button>
          </VStack>
        ))}
      </HStack>
    </Center>
  );
};

export default ProfileScreen;
