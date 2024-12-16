import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Navbar from '../NavBar';
import Footer from '../FooterBar';
import { useTheme } from '../Context/ThemeContext';

const itensDrinks = [
  {
    id: '1',
    name: 'Caipirinha',
    description: 'Limão, cachaça, açúcar e gelo.',
    image: require('../../assets/drink1.png'),
    price: '18.90',
  },
  {
    id: '2',
    name: 'Suco Natural de Laranja',
    description: 'Suco fresco feito com laranjas selecionadas.',
    image: require('../../assets/drink2.png'),
    price: '9.90',
  },
  {
    id: '3',
    name: 'Cerveja Artesanal',
    description: 'Cerveja artesanal IPA, com sabor intenso e amargor equilibrado.',
    image: require('../../assets/drink3.png'),
    price: '24.90',
  },
  {
    id: '4',
    name: 'Mojito',
    description: 'Rum, hortelã, açúcar, limão e água com gás.',
    image: require('../../assets/drink4.jpg'),
    price: '21.90',
  },
  {
    id: '5',
    name: 'Coca-Cola',
    description: 'Refrigerante sabor cola, lata 350ml.',
    image: require('../../assets/drink5.jpg'),
    price: '6.90',
  },
  {
    id: '6',
    name: 'Vinho Tinto Seco',
    description: 'Vinho tinto seco, garrafa de 750ml.',
    image: require('../../assets/drink6.jpg'),
    price: '79.90',
  },
  {
    id: '7',
    name: 'Chá Gelado',
    description: 'Chá preto gelado com toque de limão.',
    image: require('../../assets/drink7.jpg'),
    price: '8.90',
  },
  {
    id: '8',
    name: 'Whisky 12 Anos',
    description: 'Whisky escocês envelhecido por 12 anos, dose 50ml.',
    image: require('../../assets/drink8.jpg'),
    price: '32.90',
  },
  {
    id: '9',
    name: 'Água com Gás',
    description: 'Água mineral gaseificada, 500ml.',
    image: require('../../assets/drink9.jpg'),
    price: '4.90',
  },
  {
    id: '10',
    name: 'Gin Tônica',
    description: 'Gin, água tônica e toque de limão.',
    image: require('../../assets/drink10.jpg'),
    price: '22.90',
  },
];

export default function FoodScreen({ navigation, addToCart }) {
  const [quantities, setQuantities] = useState({});
  const { isDarkMode } = useTheme();

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 0;
    if (quantity > 0) {
      addToCart({ ...item, quantity });
      alert(`${quantity}x ${item.name} foi adicionado ao carrinho.`);
    } else {
      alert("Escolha uma quantidade válida.");
    }
  };

  const updateQuantity = (id, change) => {
    setQuantities((prev) => {
      const newQuantity = (prev[id] || 0) + change;
      return { ...prev, [id]: newQuantity > 0 ? newQuantity : 0 };
    });
  };

  const renderFoodItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>R$ {item.price}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => updateQuantity(item.id, -1)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantities[item.id] || 0}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => updateQuantity(item.id, 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddToCart(item)}
        >
          <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }]}>
      <Navbar navigation={navigation} />
      <View style={styles.container2}>
        <Text style={[styles.welcomeText, { color: isDarkMode ? '#FFFFFF' : '#C90c0c' }]}>Nossas Bebidas Disponíveis</Text>
        <FlatList
          data={itensDrinks}
          renderItem={renderFoodItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 34,
  },
  listContainer: {
    padding: 10,
    paddingBottom: 70, 
  },
  card: {
    backgroundColor: '#C90c0c',
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    padding: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: '#FFD700',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityButton: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#C90c0c',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  addButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#C90c0c',
    fontSize: 14,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#C90c0c',
    marginBottom: 15,
    marginTop: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  container2: {
    paddingBottom: 120,
  },
});