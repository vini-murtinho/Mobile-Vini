import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

// Tela Home com navegação para outras telas
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <View style={styles.buttons}>
        <Button mode="contained" onPress={() => navigation.navigate('ProdutoForm')} style={styles.btn}>
          Produtos
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate('Carrinho')} style={styles.btn}>
          Carrinho/Pedidos
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate('Perfil')} style={styles.btn}>
          Perfil/Config
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate('ProdutoList')}>
           Produtos
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  buttons: { flex: 1, justifyContent: 'center', padding: 20 },
  btn: { marginBottom: 15 }
});
