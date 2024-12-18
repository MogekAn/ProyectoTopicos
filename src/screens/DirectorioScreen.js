import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Text, VStack, HStack, Button, Box, Pressable } from 'native-base';

function DirectorioScreen({ navigation }) {
  const [orderBy, setOrderBy] = useState('Reciente');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState(null); // Estado para la letra seleccionada

  const categorias = ['Conciertos', 'Anime', 'Teatro', 'Deportes', 'Cultura', 'Ferias', 'Tecnología'];
  const eventos = [
    { id: 1, name: 'Winter Beer Fest 2024', category: 'Cultura', image: 'https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/466780242_575990011617597_1296820051847026476_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=Y9BKfd9PAPUQ7kNvgEB4AOJ&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=A70ImpGLgBhTVi1-IClDzDE&oh=00_AYAwYS8cs8gq_5HXVm2OS98Afo8PAldbT5Fd00s9pv77-w&oe=67529497' },
    { id: 2, name: 'Star-Con Edicion 17', category: 'Anime', image: 'https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/468391126_1125923858905644_7957278738722550313_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Esz2OK3Jdi8Q7kNvgGd_Y4S&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=AMVfFDc-ozLxKxGN9dDDnt_&oh=00_AYDnIBh6IvWtE6TJncmL9axVEe5LIOI0fIG7xNPAHeL6lw&oe=6753B2F6' },
    { id: 3, name: 'Market Nocturno Ags', category: 'Cultura', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvid-_USxy0e-mOyFTHFxUTDt1WOemXS0OA&s' },
    { id: 4, name: 'GRAN CONCIERTO SINFÓNICO DE NAVIDAD Y AÑO NUEVO 2024', category: 'Teatro', image: 'https://www.showticket.com.mx/uplimage/BANNERSHOWTICKET.png' },
    { id: 5, name: 'R&B Yoga    ', category: 'Deportes', image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F896375103%2F2330402631463%2F1%2Foriginal.20241111-152617?auto=format%2Ccompress&q=75&sharp=10&s=4145ed1137d72543368fc553f07a0ed3' },
    { id: 6, name: 'KUDAI       ', category: 'Conciertos', image: 'https://cdn.arema.dev/live/eventos/13078.jpg' },
    { id: 7, name: 'Feria Nacional de San Marcos 2025', category: 'Ferias', image: 'https://www.laferiadesanmarcos.com/wp-content/uploads/2024/03/feria-nacional-de-san-marcos-2025.jpg' },
    { id: 8, name: 'Navi-Cole Con', category: 'Tecnología', image: 'https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/463043521_875570204679657_6895066698598910254_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=75d36f&_nc_ohc=3GJ3pwJqofUQ7kNvgFyaBPZ&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=A9ndHQ5NP8BErb2JCRMjy5e&oh=00_AYCcmVDh-u4DicN2ETTzRh-Gs_XB97VHPomT4g83hM6R7w&oe=67539981' },
    { id: 9, name: 'TOUR BAHIDORA 2025', category: 'Cultura', image: 'https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/463975041_856592253312733_5315332014649743437_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=75d36f&_nc_ohc=gcVtrnGfE0gQ7kNvgEHL67G&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=Ahmg5MCRZ3qPcu2vlnO2ILs&oh=00_AYAs3kDAmIUwNN-9j3_V70-3j-rwX_LwwbvFDTZCz0QEoA&oe=6753C70B' },
    { id: 10, name: 'Before She Dies', category: 'Conciertos', image: 'https://cdn.wegow.com/media/events/emo-n-shit/emo-n-shit-1729807613.250751.1242x2208.png' },
  ];

  // Filtrar eventos según la categoría y la letra seleccionada
  const filteredEventos = eventos.filter((e) => {
    const matchesCategory = selectedCategory === 'Todas' || !selectedCategory || e.category === selectedCategory;
    const matchesLetter = !selectedLetter || e.name.toUpperCase().startsWith(selectedLetter);
    return matchesCategory && matchesLetter;
  });

  return (
    <ScrollView style={styles.container}>
      <VStack space={1} alignItems="" mt={4} bg="gray.300">
        <Text fontSize="3xl" bold>
          Directorio de Eventos
        </Text>
        <Text textAlign="" px={1}>
          En esta sección podrás filtrar tus eventos en categorías, géneros, por la letra inicial del nombre, los más populares, los más vistos, los recomendados y así :)
        </Text>
      </VStack>

      {/* Botones del alfabeto */}
      <HStack space={2} justifyContent="center" flexWrap="wrap" mt={4}>
        {['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')].map((char) => (
          <Button
            key={char}
            size="sm"
            variant={selectedLetter === char ? 'solid' : 'outline'}
            onPress={() => {
              if (char === '#') {
                setSelectedLetter(null); // Restablecer letra cuando se presiona '#'
              } else {
                setSelectedLetter(char === selectedLetter ? null : char); // Seleccionar o deseleccionar la letra
              }
            }}
          >
            {char}
          </Button>
        ))}
      </HStack>

      {/* Sección principal */}
      <HStack space={4} mt={4}>
        {/* Categorías */}
        <VStack space={4} flex={1}>
          <Text fontSize="lg" bold>
            Categoría
          </Text>
          <Button
            variant={selectedCategory === null ? 'solid' : 'outline'}
            onPress={() => setSelectedCategory(null)}
          >
            Todas
          </Button>
          {categorias.map((categoria) => (
            <Button
              key={categoria}
              variant={selectedCategory === categoria ? 'solid' : 'outline'}
              onPress={() => setSelectedCategory(categoria)}
            >
              {categoria}
            </Button>
          ))}
        </VStack>

        {/* Resultados */}
        <VStack space={4} mt={4} flex={3}>
          <Text fontSize="lg" bold>
            Resultados: {filteredEventos.length}
          </Text>

          {/* Mostrar los eventos filtrados */}
          <HStack space={4} flexWrap="wrap">
            {filteredEventos.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => {
                  // Si el evento es "Market Nocturno Ags", navega a la pantalla 'Market'
                  if (item.name === 'Market Nocturno Ags') {
                    navigation.navigate('Market', { event: item });
                  } else if (item.name === 'KUDAI       ') {
                    navigation.navigate('Kudai', { event: item });
                  } else if (item.name === 'Feria Nacional de San Marcos 2025') {
                    navigation.navigate('FNSM', { event: item });
                  }else {
                    navigation.navigate('EventoDetalle', { event: item });
                  }
                }}
              >
                <Box bg="gray.200" p={4} rounded="md" mb={4}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.eventImage}
                  />
                  <Text fontSize="lg" bold>
                    {item.name}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {item.category}
                  </Text>
                </Box>
              </Pressable>
            ))}
          </HStack>
        </VStack>
      </HStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  eventImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
});

export default DirectorioScreen;
