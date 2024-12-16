import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.navbar}>

      <TouchableOpacity onPress={() => navigation.navigate('User')}>
        <Image
          source={require('../assets/usuplacedef.png')} 
          style={styles.userIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Text style={styles.appName}>InfnetFood</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#C90c0c',
    paddingVertical: 10,
    paddingHorizontal: 16,
    height: 60,
  },
  userIcon: {
    width: 36,
    height: 36,
    borderRadius: 25,
  },
  appName: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Navbar;
