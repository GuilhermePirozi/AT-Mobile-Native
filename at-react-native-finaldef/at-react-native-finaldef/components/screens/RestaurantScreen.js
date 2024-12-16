import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../NavBar';
import Footer from '../FooterBar';
import { useTheme } from '../Context/ThemeContext';

const RestaurantInfo = [
  {
    id: '1',
    name: 'Sobrado da Cidade',
    address: 'R. do Rosário, 34 - Centro, Rio de Janeiro - RJ',
    image: require('../../assets/rest1.jpg'),
    menuExample: { name: 'Pirarucu Amazônico', price: '92,00' },
  },
  {
    id: '2',
    name: 'Rainha forneria',
    address: 'R. Santana, 156 - loja A - Centro, Rio de Janeiro - RJ',
    image: require('../../assets/rest2.jpg'),
    menuExample: { name: 'Pizza Camarão Catupiry', price: '86,00' },
  },
  {
    id: '3',
    name: 'Rio Barcia',
    address: 'R. Riachuelo, 360 - Centro, Rio de Janeiro - RJ',
    image: require('../../assets/rest3.jpg'),
    menuExample: { name: 'Risoto De Frango', price: '39.90' },
  },
  {
    id: '4',
    name: 'Angu do Gomes',
    address: 'R. Sacadura Cabral, 75 - Saúde, Rio de Janeiro - RJ',
    image: require('../../assets/rest4.jpg'),
    menuExample: { name: 'Angu Do Comes', price: '18.90' },
  },
  {
    id: '5',
    name: 'Mosteiro',
    address: 'R. São Bento, 13 - Centro, Rio de Janeiro - RJ',
    image: require('../../assets/rest5.jpg'),
    menuExample: { name: 'Bife De Ancho', price: '112.99' },
  },
  {
    id: '6',
    name: 'Japonês Mestre Kami',
    address: 'Av. Gomes Freire, 625 - Floor 2, Rio de Janeiro - RJ',
    image: require('../../assets/rest6.jpg'),
    menuExample: { name: 'Rolinho Primavera', price: '19.90' },
  },
  {
    id: '7',
    name: 'Cortiço Carioca',
    address: 'R. Joaquim Silva, 105 - Lapa, Rio de Janeiro - RJ',
    image: require('../../assets/rest7.jpg'),
    menuExample: { name: 'Bobó De Camarão', price: '129.90' },
  },
  {
    id: '8',
    name: 'Confeitaria Colombo',
    address: 'R. Gonçalves Dias, 32 - Centro, Rio de Janeiro - RJ',
    image: require('../../assets/rest8.jpg'),
    menuExample: { name: 'Delícia de Nozes', price: '39.90' },
  },
  {
    id: '9',
    name: 'Singular',
    address: 'Praça XV, 202 - Centro, RJR. da Quitanda, 49 - Centro, Rio de Janeiro - RJ',
    image: require('../../assets/rest9.jpg'),
    menuExample: { name: 'Parmê Napoli', price: '48.90' },
  },
  {
    id: '10',
    name: 'Amarelinho da Cinelândia',
    address: 'Praça Floriano, 55 - Cinelândia, Rio de Janeiro - RJ',
    image: require('../../assets/rest10.jpg'),
    menuExample: { name: 'Picanha Gaúcha', price: '130.00' },
  },
];

export default function OrdersScreen() {
  const navigation = useNavigation();
  const { isDarkMode } = useTheme();

  const renderRestaurantItem = ({ item }) => {
    const isLocalImage = typeof item.image === 'number';

    return (
      <TouchableOpacity
        style={styles.restaurantItem}
        onPress={() =>
          navigation.navigate('Detail', { restaurant: item })
        }
      >
        <Image
          source={isLocalImage ? item.image : { uri: item.image }}
          style={styles.restaurantImage}
        />
        <View style={styles.textContainerRest}>
          <Text style={styles.restaurantName}>{item.name}</Text>
          <Text style={styles.restaurantAddress}>{item.address}</Text>
          <Text style={styles.menuExampleRest}>
            {item.menuExample.name} - R$ {item.menuExample.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.containerRest, { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }]}>
      <Navbar navigation={navigation} />
      <View style={styles.contentRest}>
        <Image source={require('../../assets/mapWeb.png')} style={styles.map2} />
        <Text style={[styles.titleRest, { color: isDarkMode ? '#FFFFFF' : '#C90c0c' }]}>Restaurantes Parceiros</Text>
        <FlatList
          data={RestaurantInfo}
          keyExtractor={(item) => item.id}
          renderItem={renderRestaurantItem}
          contentContainerStyle={styles.listContainerRest}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerRest: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 34,
  },
  contentRest: {
    flex: 1,
    padding: 10,
    marginBottom: 61,
  },
  map2: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#C90c0c',
  },
  titleRest: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#C90c0c',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    textDecorationLine: 'underline',
  },
  listContainerRest: {
    paddingBottom: 20,
  },
  restaurantItem: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C90c0c',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  restaurantImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  textContainerRest: {
    flex: 1,
    justifyContent: 'center',
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  restaurantAddress: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  menuExampleRest: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#FFD700',
  },
});
