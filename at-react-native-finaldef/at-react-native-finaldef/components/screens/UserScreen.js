import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import Navbar from '../NavBar';
import Footer from '../FooterBar';
import { useTheme } from '../Context/ThemeContext';

const UserScreen = ({ navigation }) => {
  const [name, setName] = useState('Guilherme Pirozi');
  const [email, setEmail] = useState('Guilherme.Pirozzi@gmail.com.br');
  const { isDarkMode } = useTheme();

  const handleSave = () => {
    Alert.alert('Sucesso', 'Informações salvas com sucesso!');
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }]}>
      <Navbar navigation={navigation} />

      <View style={styles.content}>
        <Image
          source={require('../../assets/usuplacedef.png')}
          style={styles.userImage}
        />

        <View style={styles.form}>
          <Text style={[styles.label, { color: isDarkMode ? '#FFFFFF' : '#333' }]}>Nome:</Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: isDarkMode ? '#333333' : '#FFFFFF',
                color: isDarkMode ? '#FFFFFF' : '#000',
                borderColor: isDarkMode ? '#555555' : '#ccc',
              },
            ]}
            placeholder="Digite seu nome"
            placeholderTextColor={isDarkMode ? '#AAAAAA' : '#888888'}
            value={name}
            onChangeText={setName}
          />

          <Text style={[styles.label, { color: isDarkMode ? '#FFFFFF' : '#333' }]}>E-mail:</Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: isDarkMode ? '#333333' : '#FFFFFF',
                color: isDarkMode ? '#FFFFFF' : '#000',
                borderColor: isDarkMode ? '#555555' : '#ccc',
              },
            ]}
            placeholder="Digite seu e-mail"
            placeholderTextColor={isDarkMode ? '#AAAAAA' : '#888888'}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TouchableOpacity  style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Salvar Alterações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOrders} onPress={() => navigation.navigate('Orders')}>
            <Text style={styles.buttonTextOrders}>Seus Pedidos</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 34,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 110,
  },
  userImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginVertical: 20,
  },
  form: {
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    width: '100%',
  },
  saveButton: {
    paddingVertical: 12,
    backgroundColor: '#C90c0c',
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextOrders: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonOrders: {
    backgroundColor: '#C90c0c',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
});

export default UserScreen;
