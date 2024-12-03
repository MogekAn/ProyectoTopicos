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

      {/* Primeros dos eventos */}
      <HStack space={4} justifyContent="space-between" mb={6}>
        <Box bg="blue.100" p="4" rounded="lg" shadow={2} flex={1}>
          <Text fontSize="lg" fontWeight="bold">Winter Beer Fest</Text>
          <img
            src="https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/466780242_575990011617597_1296820051847026476_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=Y9BKfd9PAPUQ7kNvgEB4AOJ&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=A70ImpGLgBhTVi1-IClDzDE&oh=00_AYAwYS8cs8gq_5HXVm2OS98Afo8PAldbT5Fd00s9pv77-w&oe=67529497"
            alt="Winter"
            style={{ width: "100%", height: "auto" }}
          />
          <hr />
          <Text>
            📅 07 de diciembre
          {"\n"} 
          ⌚ De las 14:00 a las 23:30 hrs
          {"\n"}
          📍 Av. Francisco I. Madero #347, zona Centro, Quinto Barrio</Text>
          <HStack space={4} justifyContent="center" mt={6}>
            <Button colorScheme="blue">
              VER EVENTO
            </Button>
          </HStack>
        </Box>

        <Box bg="green.100" p="4" rounded="lg" shadow={2} flex={1}>
          <Text fontSize="lg" fontWeight="bold">GRAN CONCIERTO SINFÓNICO DE NAVIDAD</Text>
          <img
            src="https://www.showticket.com.mx/uplimage/BANNERSHOWTICKET.png"
            alt="ConciertoNavidad"
            style={{ width: "100%", height: "auto" }}
          />
          <hr />
          <Text>
            📅 Sábado 21 de Diciembre 2024
            {"\n"}
          ⌚ 8:00 P.M.
          {"\n"}
          📍 TEATRO AGUASCALIENTES </Text>
          <HStack space={4} justifyContent="center" mt={6}>
            <Button colorScheme="blue">VER EVENTO</Button>
          </HStack>
        </Box>
      </HStack>

      {/* Últimos tres eventos */}
      <HStack space={4} justifyContent="space-between" mb={6}>
        <Box bg="purple.100" p="4" rounded="lg" shadow={2} flex={1}>
          <Text fontSize="lg" fontWeight="bold">Market Nocturno</Text>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvid-_USxy0e-mOyFTHFxUTDt1WOemXS0OA&s"
            alt="Market"
            style={{ width: "100%", height: "auto" }}
          />
          <hr />
          <Text>📅 Viernes Y Sabado 
                {"\n"} 
                ⌚ De 6:00pm a 10:30pm
                {"\n"}
                📍 Bosque urbano FICOTRECE a un costado del velódromo sobre Av heroico colegio militar
                </Text>
          <HStack space={4} justifyContent="center" mt={6}>
          <Button 
            onPress={() => navigation.navigate('Market', { event: { name: 'Market Nocturno' } })} 
            colorScheme="blue"
          >
              VER EVENTO
            </Button>
          </HStack>
        </Box>

        <Box bg="yellow.100" p="4" rounded="lg" shadow={2} flex={1}>
          <Text fontSize="lg" fontWeight="bold">Feria Nacional de San Marcos 2025</Text>
          <img
            src="https://www.laferiadesanmarcos.com/wp-content/uploads/2024/03/feria-nacional-de-san-marcos-2025.jpg"
            alt="FNSM25"
          />
          <hr />
          <Text>📅 Del 19 de abril al 11 de Mayo, 2025
          {"\n"}
          🔜 Próximamente más detalles
          </Text>
          <HStack space={4} justifyContent="center" mt={6}>
          <Button 
            onPress={() => navigation.navigate('FNSM', { event: { name: 'Feria Nacional de San Marcos 2025' } })} 
            colorScheme="blue"
          >
              VER EVENTO
            </Button>
          </HStack>
        </Box>

        <Box bg="red.100" p="4" rounded="lg" shadow={2} flex={1}>
          <Text fontSize="lg" fontWeight="bold">Kudai</Text>
          <img
            src="https://cdn.arema.dev/live/eventos/13078.jpg"
            alt="Kudai"
            style={{ width: "100%", height: "auto" }}
          />
          <hr />
          <Text>
            📅 7 de diciembre
                {"\n"}
            ⌚ 9:00 pm
                {"\n"}
            📍 Auditorio Dimo</Text>
          <HStack space={4} justifyContent="center" mt={6}>
          <Button 
            onPress={() => navigation.navigate('Kudai', { event: { name: 'Kudai' } })} 
            colorScheme="blue"
          >
              VER EVENTO
            </Button>
          </HStack>
        </Box>
      </HStack>
    </ScrollView>
  );
}

export default HomeScreen;
