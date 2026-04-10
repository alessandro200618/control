import React, { JSX } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  navigation: any;
};

export default function LoginScreen({ navigation }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.title}>Control</Text>

        <TextInput
          placeholder="E-mail"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={() => { /* ação de login */ }}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.linkText}>Não tem uma conta? Criar uma conta</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.aboutButton}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Text style={styles.aboutText}>Sobre o Aplicativo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  center: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15
  },
  button: {
    backgroundColor: '#1E88E5',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 12
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  linkText: {
    marginTop: 15,
    textAlign: 'center',
    color: '#1E88E5'
  },
  aboutButton: {
    marginBottom: 20,
    alignItems: 'center'
  },
  aboutText: {
    color: '#999',
    fontSize: 14
  }
});