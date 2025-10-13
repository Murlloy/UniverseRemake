
import { StyleSheet, Text, View, ActivityIndicator  } from 'react-native';
import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as NavigationBar from 'expo-navigation-bar';

// Telas
import LoginPage from './src/pages/login/LoginPage';
import Register from './src/pages/register/Register';
import Entry from "./src/pages/apresentation/Entry";
import MenuPage from './src/pages/menu/MenuPage';
import MapCar from './src/pages/map/MapCar';
import VagaSelect from './src/pages/vaga/VagaSelect';
import InfoVaga from './src/pages/infoVaga/InfoVaga';

const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {

    // Esconde a barra de navegação inferior
      NavigationBar.setVisibilityAsync('hidden');
      // Faz reaparecer apenas quando o usuário desliza
      NavigationBar.setBehaviorAsync('overlay-swipe');

  }, []);

  

  return (

    <NavigationContainer style={styles.body}>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Home" component={LoginPage} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Menu" component={MenuPage} />
        <Stack.Screen name="Entrada" component={Entry} />
        <Stack.Screen name="Mapa" component={MapCar} />
        <Stack.Screen name="VagaSelect" component={VagaSelect} />
        <Stack.Screen name="Info" component={InfoVaga} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
