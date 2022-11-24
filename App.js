import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './screens/Login';
import Usuario from './screens/Usuario';
import EditarUsuario from './screens/EditarUsuario';
import Itens from './screens/Itens';
import EditarItem from './screens/EditarItem'
import Lojas from './screens/Lojas';
import EditarLoja from './screens/EditarLoja';
import NovaLoja from './screens/NovaLoja';
import Item from './screens/Item';
import EntradaSaida from './screens/EntradaSaida';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Itens" component={Itens} />
      <Stack.Screen name="EditarItem" component={EditarItem} />
      <Stack.Screen name="Usuario" component={Usuario} />
      <Stack.Screen name="EditarUsuario" component={EditarUsuario} />
      <Stack.Screen name="Lojas" component={Lojas} />
      <Stack.Screen name="EditarLoja" component={EditarLoja} />
      <Stack.Screen name="NovaLoja" component={NovaLoja} />
      <Stack.Screen name="Item" component={Item} />
      <Stack.Screen name="EntradaSaida" component={EntradaSaida} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}