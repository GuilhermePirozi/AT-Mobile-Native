import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
    
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('Main')} 
      >
        <Icon name="home" size={28} color="#FFFFFF" />
        <Text style={styles.footerText}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('Config')} 
      >
        <Icon name="settings" size={28} color="#FFFFFF" />
        <Text style={styles.footerText}>Config</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('User')} 
      >
        <Icon name="person" size={28} color="#FFFFFF" />
        <Text style={styles.footerText}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('Restaurant')} 
      >
        <Icon name="fastfood" size={28} color="#FFFFFF" />
        <Text style={styles.footerText}>Parceiros</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#C90c0c',
    height: 61,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 4,
  },
});

export default Footer;
