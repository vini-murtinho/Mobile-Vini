import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProdutoFormScreen from '../screens/ProductFormScreen';
import ProdutoListScreen from '../screens/ProductListScreen';
import ProdutoDetalheScreen from '../screens/ProductDetailScreen';
import CarrinhoScreen from '../screens/CarrinhoScreen';
import PerfilScreen from '../screens/PerfilScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProdutoList" component={ProductListScreen} />
        <Stack.Screen name="ProdutoForm" component={ProductFormScreen} />
        <Stack.Screen name="ProdutoDetalhe" component={ProductDetailScreen} />
        <Stack.Screen name="Carrinho" component={CarrinhoScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
