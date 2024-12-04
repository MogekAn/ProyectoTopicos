import React from "react";
import { Pressable } from 'native-base';
import { NativeBaseProvider, Button, Image, HStack } from 'native-base';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import SettingScreen from './src/screens/SettingScreen';
import ConfigScreen from "./src/screens/ConfigScreen";
import Competencias from "./src/screens/Competencias";
import DirectorioScreen from "./src/screens/DirectorioScreen";
import Market from "./src/screens/Market";
import Kudai from "./src/screens/Kudai";
import FNSM from "./src/screens/FNSM";
import AddressSearchScreen from "./src/screens/EventoCerca";
import ContactosScreen from "./src/screens/ContactosScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route, navigation }) => ({
            headerLeft: () => (
              <Pressable onPress={() => navigation.navigate('Inicio')}>
                <Image
                  source={require('./assets/images/logo.png')} // Ruta de la imagen
                  alt="Logo"
                  resizeMode="contain"
                  flex={1}
                  height="100px"
                  width="200px"
                  ml="2"
                />
              </Pressable>
            ),
            headerRight: () => (
              <HStack space={3} alignItems="center">
                <Button
                  onPress={() => navigation.navigate('Directorio')}
                  size="lg"
                  variant="solid"
                  colorScheme="blue"
                  _text={{ fontSize: "md", fontWeight: "bold" }}
                >
                  Directorio de Eventos
                </Button>
                <Ionicons
                  name="compass-outline" // Cambiado a brújula
                  size={30}
                  color="black"
                  onPress={() => navigation.navigate('Cerca')}
                  style={{ marginRight: 10 }}
                />

              </HStack>
            ),
            headerTitle: "", // Elimina el texto del título
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Sobre Nosotros') {
                iconName = focused ? 'information-circle' : 'information-circle-outline';
              } else if (route.name === 'Contacto') {
                iconName = focused ? 'call' : 'call-outline';
              } else if (route.name === 'Políticas de Privacidad') {
                iconName = focused ? 'document-lock' : 'document-lock-outline';
              } else if (route.name === 'Términos y Condiciones') {
                iconName = focused ? 'list' : 'list-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen 
            name="Inicio" 
            component={HomeScreen} 
            options={{
              tabBarButton: () => null, // Oculta el botón de la barra inferior
            }}
          />
          <Tab.Screen 
            name="Directorio" 
            component={DirectorioScreen} 
            options={{
              tabBarButton: () => null, // Oculta el botón de la barra inferior
            }}
          />
          <Tab.Screen 
            name="Market" 
            component={Market} 
            options={{
              tabBarButton: () => null, // Oculta el botón de la barra inferior
            }}
          />
          <Tab.Screen 
            name="Kudai" 
            component={Kudai} 
            options={{
              tabBarButton: () => null, // Oculta el botón de la barra inferior
            }}
          />
          <Tab.Screen 
            name="FNSM" 
            component={FNSM} 
            options={{
              tabBarButton: () => null, // Oculta el botón de la barra inferior
            }}
          />
          <Tab.Screen 
            name="Cerca" 
            component={AddressSearchScreen} 
            options={{
              tabBarButton: () => null, // Oculta el botón de la barra inferior
            }}
          />
          
          <Tab.Screen name="Sobre Nosotros" component={Competencias} />
          <Tab.Screen name="Contacto" component={ContactosScreen} />
          <Tab.Screen name="Políticas de Privacidad" component={SettingScreen} />
          <Tab.Screen name="Términos y Condiciones" component={ConfigScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
