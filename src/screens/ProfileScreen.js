import React from 'react';
import { Center, HStack, Button, Text, Image, VStack, useToast } from 'native-base';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation


const ProfileScreen = () => {
  const toast = useToast();
  const navigation = useNavigation(); // Obtén el objeto de navegación

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
    }else if (section === "Eventos cercanos") {
      navigation.navigate("Cerca");
    }else if (section === "Editar perfil") {
      navigation.navigate("Perfil");
    }
  };

  return (
    <Center flex={1} px={4} bg="gray.200"> {/* Fondo gris para toda la página */}
      {/* Barra superior */}
      <HStack w="100%" justifyContent="center" alignItems="center" p={4} bg="white" position="absolute" top={10} left={0} right={0} zIndex={1}>
        <Text fontSize="4xl" h="100%" color="gray.600" fontWeight="bold" textAlign="center">
          PERFIL
        </Text>
        <Button
          variant="solid"
          colorScheme="blue"
          onPress={() => toast.show({ title: "Sesión cerrada", status: "warning" })}
          position="absolute"
          right={4}
        >
          Cerrar sesión
        </Button>
      </HStack>



      {/* Opciones horizontales */}
      <HStack justifyContent="space-between" mt={20} w="100%" flexWrap="wrap">
        {[ // Opciones horizontales
          { label: "Guardados", image: require('../../assets/images/Guardados.png') },
          { label: "Favoritos", image: require('../../assets/images/Favoritos.png') },
          { label: "Eventos cercanos", image: require('../../assets/images/Cerca.png') },
          { label: "Editar perfil", image: require('../../assets/images/Perfil.png') },
        ].map((option, index) => (
          <VStack
            key={index}
            w="23%"  
            p={4}
            bg="white"  // Fondo blanco para cada tarjeta
            rounded="lg"
            shadow={1}
            alignItems="center"
            justifyContent="space-between"
          >
            
            <Text fontSize="lg" fontWeight="bold" mb={2} textAlign="center"> {/* Título arriba de la imagen */}
              {option.label}
            </Text>
            <Image source={option.image} alt={option.label} size="lg" mb={2} /> {/* Imagen en el centro */}
            <Button onPress={() => navigateToSection(option.label)}>Entrar</Button> {/* Botón debajo de la imagen */}
          </VStack>
          
        ))}
      </HStack>
    </Center>
  );
};

export default ProfileScreen;
