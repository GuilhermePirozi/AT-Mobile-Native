import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validEmail = 'Guilherme.Pirozzi@gmail.com.br';
  const validPassword = '123456';

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    } else if (email === validEmail && password === validPassword) {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      navigation.navigate('Main');
    } else {
      Alert.alert('Erro', 'Email ou senha inválidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/InfnetFood_logo.png')}
        style={styles.image1}
      />
      <Text style={styles.title}>Faça seu Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button1} onPress={handleLogin}>
        <Text style={styles.buttonText1}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    marginTop: 34,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 42,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    borderRadius: 10,
    paddingHorizontal: 12,
    width: '85%',
  },
  button1: {
    width: '85%',
    height: 40,
    backgroundColor: '#C90c0c',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText1: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image1: {
    width: 160,
    height: 160,
    aspectRatio: 1, 
    marginBottom: 80,
    marginTop: 180,
    borderRadius: 20,
  },
});

export default LoginScreen;
