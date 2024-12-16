import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';
import Navbar from '../NavBar';
import Footer from '../FooterBar';
import { useTheme } from '../Context/ThemeContext'; 

const ConfigScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme(); 

  const handleSave = () => {
    Alert.alert(
      'Configurações Salvas',
      `Notificações: ${notificationsEnabled ? 'Ativadas' : 'Desativadas'}\nModo Escuro: ${isDarkMode ? 'Ativado' : 'Desativado'}`
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }]}>
      <Navbar navigation={navigation} />
      <View style={styles.content}>
        <Text style={[styles.title, { color: isDarkMode ? '#FFFFFF' : '#C90c0c' }]}>
          Configurações
        </Text>

        <View style={styles.setting}>
          <Text style={[styles.settingText, { color: isDarkMode ? '#FFFFFF' : '#333' }]}>
            Ativar Notificações
          </Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            thumbColor={notificationsEnabled ? '#C90c0c' : '#ccc'}
            trackColor={{ false: '#ddd', true: '#f5acac' }}
          />
        </View>

        <View style={styles.setting}>
          <Text style={[styles.settingText, { color: isDarkMode ? '#FFFFFF' : '#333' }]}>
            Modo Escuro
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme} 
            thumbColor={isDarkMode ? '#C90c0c' : '#ccc'}
            trackColor={{ false: '#ddd', true: '#333' }}
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar Alterações</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    marginTop: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 18,
  },
  saveButton: {
    backgroundColor: '#C90c0c',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    width: '90%',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ConfigScreen;
