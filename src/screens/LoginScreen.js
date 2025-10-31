import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

// Tela de Login
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Simulação de login
  const handleLogin = () => {
    if (email && senha) {
      navigation.replace('Home');
    } else {
      alert('Preencha todos os campos');
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={{ marginBottom: 20 }}>
        Login
      </Text>
      <TextInput label="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput label="Senha" secureTextEntry value={senha} onChangeText={setSenha} style={styles.input} />
      <Button mode="contained" onPress={handleLogin}>
        Entrar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { marginBottom: 15 }
});
