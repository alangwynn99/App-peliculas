import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { PeliculaDetalle } from '../screens/PeliculaDetalle';
import { SimplePelicula } from '../models/peliculasModels';

export type RootStackParams = {
  Home: undefined,
  PeliculaDetalle: { pelicula: SimplePelicula, imdbID: string }
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Home" component={ Home } />
      <Stack.Screen name="PeliculaDetalle" component={ PeliculaDetalle } />
    </Stack.Navigator>
  );
}