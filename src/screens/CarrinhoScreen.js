import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Text } from 'react-native-paper';

// Tela do Carrinho/Pedidos
export default function CarrinhoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Carrinho/Pedidos" />
      </Appbar.Header>
      <View style={{ padding: 20 }}>
        <Text>Seu carrinho está vazio (simulação)</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 }
});
