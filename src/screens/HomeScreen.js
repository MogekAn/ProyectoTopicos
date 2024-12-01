import React from "react";
import { VStack, HStack, Box, Button, Text, ScrollView, Center } from "native-base";

function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ margin: 20, padding: 20 }}>
      <Center>
        <Text fontSize="2xl" fontWeight="bold" mb="4">
          Próximos Eventos en Aguascalientes
        </Text>
      </Center>
      {/* Primeros dos eventos en un VStack */}
      <HStack space={4} justifyContent="space-between" mb={6}>
        <Box bg="blue.100" p="4" rounded="lg" shadow={2} flex={1}>
          <Text fontSize="lg" fontWeight="bold">
            Winter Beer Fest
          </Text>
          <img
            src="../..\assets\images\WinterBeerFest.jpg"
            alt="Winter"
            style={{ width: '100%', height: 'auto'}} 
          />
          <hr />
          <Text>Fecha: 07 de diciembre</Text>
          <Text>Horario: De las 14:00 a las 23:30 hrs</Text>
          <Text>Lugar: Av. Francisco I. Madero #347, zona Centro, Quinto Barrio</Text>
          <HStack space={4} justifyContent="center" mt={6}>
            <Button onPress={() => navigation.navigate('')} colorScheme="blue">
              VER EVENTO
            </Button>
          </HStack>
        </Box>

        <Box bg="green.100" p="4" rounded="lg" shadow={2} flex={1}>
          <Text fontSize="lg" fontWeight="bold">
            Feria del Libro
          </Text>

          <hr />
          <Text>Fecha: 20 de diciembre, 2024</Text>
          <Text>Lugar: Centro de Convenciones</Text>
          <HStack space={4} justifyContent="center" mt={6}>
            <Button onPress={() => navigation.navigate('')} colorScheme="blue">
              VER EVENTO
            </Button>
          </HStack>
        </Box>
      </HStack>


      {/* Últimos tres eventos en un HStack */}
      <HStack space={4} justifyContent="space-between" mb={6}>
        <Box bg="purple.100" p="4" rounded="lg" shadow={2} flex={1}>
          <Text fontSize="lg" fontWeight="bold">
            Market Nocturno
          </Text>
          <img src="../..\assets\images\Market.jpg" alt="Market" 
          style={{ width: '100%', height: 'auto'}} />
          <hr />
          <Text>Fecha: Sábados y viernes</Text>
          <Text>Horario: De las 18:00 a las 22:30 hrs</Text>
          <Text>Lugar: Bosque Urbano Ficotrece</Text>
          <HStack space={4} justifyContent="center" mt={6}>
            <Button onPress={() => navigation.navigate('')} colorScheme="blue">
              VER EVENTO
            </Button>
          </HStack>
        </Box>

        <Box bg="yellow.100" p="4" rounded="lg" shadow={2} flex={1}>
          <Text fontSize="lg" fontWeight="bold">
            Feria Nacional de San Marcos 2025
          </Text>
          <img src="../..\assets\images\FNSM25.png" alt="FNSM25" 
          style={{ width: '100%', height: 'auto'}} />
          <hr />
          <Text>Fecha: Del 19 de abril al 11 de Mayo, 2025</Text>
          <HStack space={4} justifyContent="center" mt={6}>
            <Button onPress={() => navigation.navigate('')} colorScheme="blue">
              VER EVENTO
            </Button>
          </HStack>
        </Box>

        <Box bg="red.100" p="4" rounded="lg" shadow={2} flex={1}>
          <Text fontSize="lg" fontWeight="bold">
            Kudai
          </Text>
          <img src="../..\assets\images\kudai.jpg" alt="Kudai"
          style={{ width: '100%', height: 'auto'}} />
          <hr />
          <Text>Fecha: 07 de diciembre</Text>
          <Text>Horario: 20:00 hrs</Text>
          <Text>Lugar: Teatro Dimo</Text>
          <HStack space={4} justifyContent="center" mt={6}>
            <Button onPress={() => navigation.navigate('')} colorScheme="blue">
              VER EVENTO
            </Button>
          </HStack>
        </Box>
      </HStack>

      {/* Botones para cambiar de página */}
      <HStack space={4} justifyContent="center" mt={6}>
        <Button onPress={() => navigation.goBack()} colorScheme="gray">
          Página Anterior
        </Button>
        <Button onPress={() => navigation.navigate('Notification')} colorScheme="blue">
          Página Siguiente
        </Button>
      </HStack>
    </ScrollView>
  );
}

export default HomeScreen;
