import React, { useState } from 'react';
import { Center, HStack, Button, Text, Image, VStack, Icon, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { FontAwesome } from '@expo/vector-icons'; // Importa los iconos de FontAwesome

const Guardados = () => {
  const [likedEvents, setLikedEvents] = useState([]); // Estado para almacenar los eventos marcados con "me gusta"
  const [eventosGuardados, setEventosGuardados] = useState([ // Estado para almacenar los eventos guardados
    { id: 1, name: 'Winter Beer Fest 2024', category: 'Cultura', image: 'https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/466780242_575990011617597_1296820051847026476_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=Y9BKfd9PAPUQ7kNvgEB4AOJ&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=A70ImpGLgBhTVi1-IClDzDE&oh=00_AYAwYS8cs8gq_5HXVm2OS98Afo8PAldbT5Fd00s9pv77-w&oe=67529497' },
    { id: 2, name: 'Star-Con Edicion 17', category: 'Anime', image: 'https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/468391126_1125923858905644_7957278738722550313_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Esz2OK3Jdi8Q7kNvgGd_Y4S&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=AMVfFDc-ozLxKxGN9dDDnt_&oh=00_AYDnIBh6IvWtE6TJncmL9axVEe5LIOI0fIG7xNPAHeL6lw&oe=6753B2F6' },
    { id: 3, name: 'Market Nocturno Ags', category: 'Cultura', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvid-_USxy0e-mOyFTHFxUTDt1WOemXS0OA&s' },
    { id: 4, name: 'GRAN CONCIERTO SINFÓNICO DE NAVIDAD Y AÑO NUEVO 2024', category: 'Teatro', image: 'https://www.showticket.com.mx/uplimage/BANNERSHOWTICKET.png' },
    { id: 5, name: 'R&B Yoga    ', category: 'Deportes', image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F896375103%2F2330402631463%2F1%2Foriginal.20241111-152617?auto=format%2Ccompress&q=75&sharp=10&s=4145ed1137d72543368fc553f07a0ed3' },
    { id: 6, name: 'KUDAI       ', category: 'Conciertos', image: 'https://cdn.arema.dev/live/eventos/13078.jpg' },
    { id: 7, name: 'Feria Nacional de San Marcos 2025', category: 'Ferias', image: 'https://www.laferiadesanmarcos.com/wp-content/uploads/2024/03/feria-nacional-de-san-marcos-2025.jpg' },
  ]);
  
  const navigation = useNavigation(); // Obtén el objeto de navegación

  const toggleLike = (id) => {
    // Verificamos si el evento ya está en la lista de "me gusta"
    if (likedEvents.includes(id)) {
      // Si está, lo eliminamos de la lista
      setLikedEvents(likedEvents.filter(eventId => eventId !== id));
    } else {
      // Si no está, lo agregamos a la lista
      setLikedEvents([...likedEvents, id]);
    }
  };

  const removeEvent = (id) => {
    // Eliminamos el evento de la lista de eventos guardados
    setEventosGuardados(eventosGuardados.filter(evento => evento.id !== id));
  };

  return (
    <Center flex={1} px={4} bg="gray.200">
      {/* Barra superior */}
      <HStack w="100%" justifyContent="center" alignItems="center" p={4} bg="white" position="absolute" top={10} left={0} right={0} zIndex={1}>
        <HStack alignItems="center">
          <Icon
            as={FontAwesome}
            name="calendar"
            size="4xl"
            color="yellow.500"
            mr={2}
          />
          <Text fontSize="4xl" color="gray.600" fontWeight="bold" textAlign="center">
            GUARDADOS
          </Text>
        </HStack>
      </HStack>

      {/* Lista de eventos guardados */}
      <ScrollView mt={20}>
        <HStack justifyContent="space-between" w="100%" flexWrap="wrap">
          {eventosGuardados.map((evento, index) => (
            <VStack
              key={index}
              w="300px"
              p={4}
              top={20}
              bg="white"
              rounded="lg"
              shadow={1}
              alignItems="center"
              justifyContent="space-between"
              mb={4}
              position="relative"
            >
              {/* Imagen ajustada */}
              <Image
                source={{ uri: evento.image }}
                alt={evento.name}
                height="200px"
                width="100%"
                resizeMode="cover"
                mb={2}
              />
              <Text fontSize="lg" fontWeight="bold" mb={2} textAlign="center">{evento.name}</Text>
              <Text fontSize="sm" color="gray.500" textAlign="center">{evento.category}</Text>

              {/* Iconos fuera del botón */}
              <Icon
                as={FontAwesome}
                name="heart"
                size="lg"
                color={likedEvents.includes(evento.id) ? "red.500" : "blue.500"} // Cambiar color según estado
                position="absolute"
                bottom={10}
                left={4}
                onPress={() => toggleLike(evento.id)} // Manejar el clic
              />
              <Icon
                as={FontAwesome}
                name="trash"
                size="lg"
                color="gray.800"
                position="absolute"
                bottom={10}
                right={4}
                onPress={() => removeEvent(evento.id)} // Función para eliminar el evento
              />

              <Button
                mt={3}
                colorScheme="blue"
                onPress={() => {
                  if (evento.id === 3) {
                    navigation.navigate('Market', { event: evento, likedEvents: likedEvents }); // Pasa likedEvents a Market
                  } else {
                    navigation.navigate('EventoDetalle', { event: evento }); // Navega a EventoDetalle
                  }
                  if (evento.id === 6) {
                    navigation.navigate('Kudai', { event: evento }); // Navega a Kudai
                  }
                  if (evento.id === 7) {
                    navigation.navigate('FNSM', { event: evento });
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

export default Guardados;