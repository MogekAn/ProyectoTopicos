import React from 'react';
import { Center, HStack, Button, Text, Image, VStack, useToast, Icon, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { FontAwesome } from '@expo/vector-icons'; // Importa los iconos de FontAwesome


const Favorito = () => {
  const toast = useToast();
  const navigation = useNavigation(); // Obtén el objeto de navegación

  const eventosFavoritos = [
    { id: 1, name: 'Winter Beer Fest 2024', category: 'Cultura', image: 'https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/466780242_575990011617597_1296820051847026476_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=Y9BKfd9PAPUQ7kNvgEB4AOJ&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=A70ImpGLgBhTVi1-IClDzDE&oh=00_AYAwYS8cs8gq_5HXVm2OS98Afo8PAldbT5Fd00s9pv77-w&oe=67529497' },
    { id: 2, name: 'Star-Con Edicion 17', category: 'Anime', image: 'https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/468391126_1125923858905644_7957278738722550313_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Esz2OK3Jdi8Q7kNvgGd_Y4S&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=AMVfFDc-ozLxKxGN9dDDnt_&oh=00_AYDnIBh6IvWtE6TJncmL9axVEe5LIOI0fIG7xNPAHeL6lw&oe=6753B2F6' },
    { id: 3, name: 'Market Nocturno Ags', category: 'Cultura', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvid-_USxy0e-mOyFTHFxUTDt1WOemXS0OA&s' },
    { id: 4, name: 'GRAN CONCIERTO SINFÓNICO DE NAVIDAD Y AÑO NUEVO 2024', category: 'Teatro', image: 'https://www.showticket.com.mx/uplimage/BANNERSHOWTICKET.png' },
    { id: 7, name: 'Feria Nacional de San Marcos 2025', category: 'Ferias', image: 'https://www.laferiadesanmarcos.com/wp-content/uploads/2024/03/feria-nacional-de-san-marcos-2025.jpg' },
    ];

  return (
    <Center flex={1} px={4} bg="gray.200"> {/* Fondo gris para toda la página */}
      {/* Barra superior */}
      <HStack w="100%" justifyContent="center" alignItems="center" p={4} bg="white" position="absolute" top={10} left={0} right={0} zIndex={1}>
        <HStack alignItems="center">
          <Icon
            as={FontAwesome}
            name="heart"
            size="4xl" // Tamaño igual que el texto
            color="red.500"
            mr={2} // Espacio entre el ícono y el texto
          />
          <Text fontSize="4xl" color="gray.600" fontWeight="bold" textAlign="center">
            FAVORITOS
          </Text>
        </HStack>
      </HStack>

      {/* Lista de eventos favoritos */}
      <ScrollView mt={20}> {/* Agregar ScrollView para permitir desplazamiento */}
        <HStack justifyContent="space-between" w="100%" flexWrap="wrap">
          {eventosFavoritos.map((evento, index) => (
            <VStack
              key={index}
              w="23%"  // Aumenta el tamaño de los VStacks
              p={4}
              top={20}
              bg="white"  // Fondo blanco para cada tarjeta
              rounded="lg"
              shadow={1}
              alignItems="center"
              justifyContent="space-between"
              mb={4}
              position="relative" // Necesario para posicionar los iconos en las esquinas
            >
              {/* Imagen ajustada para asegurar visibilidad */}
              <Image 
                source={{ uri: evento.image }} 
                alt={evento.name} 
                height="200px"  // Valor fijo para asegurar visibilidad
                width="100%"    // Asegura que ocupe todo el ancho disponible
                resizeMode="cover" 
                mb={2} 
              />
              <Text fontSize="lg" fontWeight="bold" mb={2} textAlign="center">{evento.name}</Text>
              <Text fontSize="sm" color="gray.500" textAlign="center">{evento.category}</Text>

              {/* Iconos fuera del botón */}
              <Icon
                as={FontAwesome}
                name="calendar"
                size="lg"
                color="blue.500"
                position="absolute"
                bottom={10}
                left={4}
              />
              <Icon
                as={FontAwesome}
                name="trash"
                size="lg"
                color="gray.800"
                position="absolute"
                bottom={10}
                right={4}
              />

              <Button
                mt={3}
                colorScheme="blue"
                onPress={() => {
                  if (evento.id === 3) {
                    navigation.navigate('Market', { event: evento }); // Navega a la pantalla "Market" para el evento Market Nocturno Ags
                  } else {
                    navigation.navigate('EventoDetalle', { event: evento }); // Navega a la pantalla de detalle para otros eventos
                  } if (evento.id === 7) {
                    navigation.navigate('FNSM', { event: evento }); // Navega a la pantalla "Feria Nacional de San Marcos 2025" para el evento Market Nocturno Ags
                  }
                }}
              >
                Ver Evento
              </Button>
            </VStack>
          ))}
        </HStack>
      </ScrollView>
    </Center>
  );
};

export default Favorito;
