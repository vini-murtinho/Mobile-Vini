import React, { useEffect, useState } from 'react';
import { View, Alert, FlatList, StyleSheet } from 'react-native';
import { Appbar, Card, Button, Text } from 'react-native-paper';
import { getProdutos, deleteProduto } from '../storage/ProductStorage';

export default function ProdutoListScreen({ navigation }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      carregarProdutos();
    });
    return unsubscribe;
  }, [navigation]);

  const carregarProdutos = async () => {
    const data = await getProdutos();
    setProdutos(data);
  };

  const confirmarExclusao = (id) => {
    Alert.alert(
      'Excluir Produto',
      'Tem certeza que deseja excluir este produto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', onPress: () => handleDelete(id) },
      ]
    );
  };

  const handleDelete = async (id) => {
    await deleteProduto(id);
    carregarProdutos();
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Produtos Cadastrados" />
      </Appbar.Header>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title title={item.nome} subtitle={`R$ ${item.preco}`} />
            <Card.Actions>
              <Button onPress={() => navigation.navigate('ProdutoForm', { produto: item })}>
                Editar
              </Button>
              <Button onPress={() => confirmarExclusao(item.id)} textColor="red">
                Excluir
              </Button>
            </Card.Actions>
          </Card>
        )}
      />

      <Button
        mode="contained"
        style={{ margin: 16 }}
        onPress={() => navigation.navigate('ProdutoForm')}
      >
        Novo Produto
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: { margin: 10, padding: 10 },
});
