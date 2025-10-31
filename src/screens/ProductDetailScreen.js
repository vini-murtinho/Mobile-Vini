import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Card, Button, Text } from 'react-native-paper';

// Tela de Detalhe do Produto
export default function ProdutoDetalheScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Detalhe Produto" />
      </Appbar.Header>
      <Card style={{ margin: 20, padding: 20 }}>
        <Text variant="titleLarge">Produto Exemplo</Text>
        <Text variant="bodyMedium">Preço: R$ 99,99</Text>
        <Text variant="bodyMedium">Descrição: Um produto de exemplo</Text>
        <Button mode="contained" style={{ marginTop: 20 }}>
          Adicionar ao Carrinho
        </Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
