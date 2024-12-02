import React, { useState } from "react";
import { Pressable } from 'native-base';
import { NativeBaseProvider, Button, Image, HStack } from 'native-base';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Registro from "./src/screens/Registro";
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import SettingScreen from './src/screens/SettingScreen';
import NotificationScreen from './src/screens/NotificationsScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from "./src/screens/ProfileScreen";
import ConfigScreen from "./src/screens/ConfigScreen";
import Competencias from "./src/screens/Competencias";
import DirectorioScreen from "./src/screens/DirectorioScreen";
import Market from "./src/screens/Market";
import Guardado from "./src/screens/Guardado";
import Favorito from "./src/screens/Favorito";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Cambia el estado a "autenticado" después de iniciar sesión
  };

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {isLoggedIn ? (
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
                    name="person-circle-outline"
                    size={30}
                    color="black"
                    onPress={() => navigation.navigate('Perfil')}
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
              name="Perfil" 
              component={ProfileScreen} 
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
              name="Guardado" 
              component={Guardado} 
              options={{
                tabBarButton: () => null, // Oculta el botón de la barra inferior
              }}
            />
            <Tab.Screen 
              name="Favorito" 
              component={Favorito} 
              options={{
                tabBarButton: () => null, // Oculta el botón de la barra inferior
              }}
            />
            <Tab.Screen name="Sobre Nosotros" component={Competencias} />
            <Tab.Screen name="Contacto" component={NotificationScreen} />
            <Tab.Screen name="Políticas de Privacidad" component={SettingScreen} />
            <Tab.Screen name="Términos y Condiciones" component={ConfigScreen} />
          </Tab.Navigator>
        ) : (
          <LoginScreen onLogin={handleLogin} /> // Muestra la pantalla de Login si no está autenticado
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
