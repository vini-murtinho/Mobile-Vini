import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@produtos';

export async function getProdutos() {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export async function saveProduto(produto) {
  const produtos = await getProdutos();
  const id = produto.id || Date.now();
  const novos = produto.id
    ? produtos.map(p => (p.id === produto.id ? { ...produto, id } : p))
    : [...produtos, { ...produto, id }];
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novos));
}

export async function deleteProduto(id) {
  const produtos = await getProdutos();
  const filtrados = produtos.filter(p => p.id !== id);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(filtrados));
}
