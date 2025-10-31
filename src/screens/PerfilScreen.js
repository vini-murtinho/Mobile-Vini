import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Text } from 'react-native-paper';

// Tela do Usuário/Configurações
export default function PerfilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Perfil/Config" />
      </Appbar.Header>
      <View style={{ padding: 20 }}>
        <Text>Configurações de usuário (simulação)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
