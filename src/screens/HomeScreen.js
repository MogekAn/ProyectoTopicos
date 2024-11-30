import React from "react";
import { VStack, HStack, Box, Button, Text, ScrollView, Center } from "native-base";

function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Center>
        <Text fontSize="2xl" fontWeight="bold" mb="4">
          Próximos Eventos en Aguascalientes
        </Text>
      </Center>
      {/* Primeros dos eventos en un VStack */}
      <VStack space={4} mb={6}>
        <Box bg="blue.100" p="4" rounded="lg" shadow={2}>
          <Text fontSize="lg" fontWeight="bold">
            Concierto de Rock
          </Text>
          <Text>Fecha: 15 de diciembre, 2024</Text>
          <Text>Lugar: Foro de las Estrellas</Text>
        </Box>
        <Box bg="green.100" p="4" rounded="lg" shadow={2}>
          <Text fontSize="lg" fontWeight="bold">
            Feria del Libro
          </Text>
          <Text>Fecha: 20 de diciembre, 2024</Text>
          <Text>Lugar: Centro de Convenciones</Text>
        </Box>
      </VStack>

      {/* Últimos tres eventos en un HStack */}
      <HStack space={4} justifyContent="space-between" mb={6}>
        <Box bg="purple.100" p="4" rounded="lg" shadow={2} flex={1}>
          <Text fontSize="lg" fontWeight="bold">
            Expo Anime
          </Text>
          <Text>Fecha: 5 de enero, 2025</Text>
          <Text>Lugar: Auditorio Morelos</Text>
        </Box>
        <Box bg="yellow.100" p="4" rounded="lg" shadow={2} flex={1}>
          <Text fontSize="lg" fontWeight="bold">
            Concierto de Jazz
          </Text>
          <Text>Fecha: 10 de enero, 2025</Text>
          <Text>Lugar: Teatro Aguascalientes</Text>
        </Box>
        <Box bg="red.100" p="4" rounded="lg" shadow={2} flex={1}>
          <Text fontSize="lg" fontWeight="bold">
            Carrera Atlética
          </Text>
          <Text>Fecha: 14 de enero, 2025</Text>
          <Text>Lugar: Parque Rodolfo Landeros</Text>
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
