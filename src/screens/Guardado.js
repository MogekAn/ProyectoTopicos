import React from 'react';
import { Center, HStack, Button, Text, Image, VStack, useToast, Icon, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { FontAwesome } from '@expo/vector-icons'; // Importa los iconos de FontAwesome

const Guardados = () => {
  const toast = useToast();
  const navigation = useNavigation(); // Obtén el objeto de navegación

  const eventosGuardados = [
    { id: 1, name: 'Winter Beer Fest 2024', category: 'Cultura', image: 'https://cdn-az.allevents.in/events3/banners/462ac12e5e1d7f8faf4f46bbd353a8a07974aeb376cb9969451fd69d92901687-rimg-w1200-h676-dc7291c2-gmir?v=1731749007' },
    { id: 2, name: 'Star-Con Edicion 17', category: 'Anime', image: 'https://cdn-az.allevents.in/events5/banners/2b7153db7ddc3a8f2e055d733d72e97e28e906a3090ffa02e654d649551e11f3-rimg-w1200-h675-dc2c6808-gmir?v=1732158721' },
    { id: 3, name: 'Market Nocturno Ags', category: 'Cultura', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvid-_USxy0e-mOyFTHFxUTDt1WOemXS0OA&s' },
    { id: 4, name: 'GRAN CONCIERTO SINFÓNICO DE NAVIDAD Y AÑO NUEVO 2024', category: 'Teatro', image: 'https://www.showticket.com.mx/uplimage/BANNERSHOWTICKET.png' },
    { id: 5, name: 'R&B Yoga', category: 'Deportes', image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F896375103%2F2330402631463%2F1%2Foriginal.20241111-152617?auto=format%2Ccompress&q=75&sharp=10&s=4145ed1137d72543368fc553f07a0ed3' },
  ];

  return (
    <Center flex={1} px={4} bg="gray.200">
      {/* Barra superior */}
      <HStack w="100%" justifyContent="center" alignItems="center" p={4} bg="white" position="absolute" top={10} left={0} right={0} zIndex={1}>
        <HStack alignItems="center">
          <Icon
            as={FontAwesome}
            name="calendar"
            size="4xl"
            color="blue.500"
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
              w="23%"
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

              <Button
                mt={3}
                colorScheme="blue"
                onPress={() => {
                  if (evento.id === 3) {
                    navigation.navigate('Market', { event: evento }); // Navega a Market
                  } else {
                    navigation.navigate('EventoDetalle', { event: evento }); // Navega a EventoDetalle
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
