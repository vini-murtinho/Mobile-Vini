import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, TextInput, Button, Snackbar } from 'react-native-paper';
import { saveProduto } from '../storage/ProductStorage';

export default function ProdutoFormScreen({ navigation, route }) {
  const produtoEditar = route.params?.produto;
  const [nome, setNome] = useState(produtoEditar ? produtoEditar.nome : '');
  const [preco, setPreco] = useState(produtoEditar ? String(produtoEditar.preco) : '');
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState('');

  const handleSave = async () => {
    if (!nome.trim()) return setError('O nome é obrigatório!');
    if (parseFloat(preco) <= 0 || isNaN(preco)) return setError('O preço deve ser maior que 0!');

    await saveProduto({ id: produtoEditar?.id, nome, preco });
    setVisible(true);
    setError('');
    setTimeout(() => navigation.navigate('ProdutoList'), 1500);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={produtoEditar ? 'Editar Produto' : 'Novo Produto'} />
      </Appbar.Header>

      <View style={styles.form}>
        <TextInput label="Nome" value={nome} onChangeText={setNome} style={styles.input} />
        <TextInput label="Preço" value={preco} onChangeText={setPreco} keyboardType="numeric" style={styles.input} />
        <Button mode="contained" onPress={handleSave}>Salvar</Button>

        {error ? <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text> : null}

        <Snackbar visible={visible} onDismiss={() => setVisible(false)} duration={2000}>
          Produto salvo com sucesso!
        </Snackbar>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  form: { padding: 20 },
  input: { marginBottom: 15 }
});
