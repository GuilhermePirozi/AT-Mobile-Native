import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Navbar from '../NavBar';
import Footer from '../FooterBar';
import { useTheme } from '../Context/ThemeContext';

const itensSnack2 = [
  {
    id: '1',
    name: 'Batata Frita',
    description: 'Porção de batatas fritas crocantes, servidas com molho à sua escolha.',
    image: require('../../assets/snack21.jpg'),
    price: '19.90',
  },
  {
    id: '2',
    name: 'Pastel de Carne',
    description: 'Pastéis recheados com carne moída temperada, fritos na hora.',
    image: require('../../assets/snack22.jpg'),
    price: '24.90',
  },
  {
    id: '3',
    name: 'Anéis de Cebola',
    description: 'Cebolas empanadas e fritas, crocantes por fora e macias por dentro.',
    image: require('../../assets/snack23.jpg'),
    price: '17.90',
  },
  {
    id: '4',
    name: 'Isca de Peixe',
    description: 'Filés de peixe empanados, acompanhados de molho tártaro.',
    image: require('../../assets/snack24.jpg'),
    price: '29.90',
  },
  {
    id: '5',
    name: 'Frango Frito',
    description: 'Pedaços de frango crocantes e suculentos, servidos com molho barbecue.',
    image: require('../../assets/snack25.jpg'),
    price: '34.90',
  },
  {
    id: '6',
    name: 'Mini Coxinhas',
    description: 'Porção de mini coxinhas de frango, acompanhadas de ketchup e maionese.',
    image: require('../../assets/snack26.jpg'),
    price: '22.90',
  },
  {
    id: '7',
    name: 'Torresmo',
    description: 'Torresmo crocante temperado, ideal para acompanhar uma bebida.',
    image: require('../../assets/snack27.jpg'),
    price: '14.90',
  },
  {
    id: '8',
    name: 'Bolinho de Bacalhau',
    description: 'Bolinho feito com bacalhau desfiado e temperado.',
    image: require('../../assets/snack28.jpg'),
    price: '27.90',
  },
  {
    id: '9',
    name: 'Churros Salgados',
    description: 'Churros salgados recheados com queijo, acompanhados de molho especial.',
    image: require('../../assets/snack29.jpg'),
    price: '18.90',
  },
  {
    id: '10',
    name: 'Queijo Coalho com Mel',
    description: 'Espetinhos de queijo coalho grelhados, servidos com mel.',
    image: require('../../assets/snack210.jpg'),
    price: '25.90',
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
        <Text style={[styles.welcomeText, { color: isDarkMode ? '#FFFFFF' : '#C90c0c' }]}>Nossos Petiscos Disponíveis</Text>
        <FlatList
          data={itensSnack2}
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