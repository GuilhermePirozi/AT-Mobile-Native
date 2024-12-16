import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Navbar from '../NavBar';
import Footer from '../FooterBar';
import { useTheme } from '../Context/ThemeContext';

const itensSnacks1 = [
  {
    id: '1',
    name: 'Combo Pizza Margherita',
    description: 'Pizza Margherita grande com borda recheada e refrigerante de 1L. Serve até 2 pessoas.',
    image: require('../../assets/snack11.jpg'),
    price: '69.90',
  },
  {
    id: '2',
    name: 'Combo Hambúrguer Artesanal',
    description: 'Dois hambúrgueres artesanais (150g de carne, cheddar, alface e tomate) com porção de batatas fritas e dois refrigerantes.',
    image: require('../../assets/snack12.jpg'),
    price: '59.90',
  },
  {
    id: '3',
    name: 'Combo Sushi Party',
    description: '24 peças de sushi e sashimi variados, acompanhados de shoyu e gengibre. Ideal para compartilhar.',
    image: require('../../assets/snack13.jpg'),
    price: '99.90',
  },
  {
    id: '4',
    name: 'Combo Tacos Mexicanos',
    description: '6 tacos recheados com carne, queijo, alface e pico de gallo, acompanhados de nachos com guacamole.',
    image: require('../../assets/snack14.jpg'),
    price: '49.90',
  },
  {
    id: '5',
    name: 'Combo Mini Hambúrgueres',
    description: '5 mini hambúrgueres artesanais (carne, queijo e molho especial), com porção de batatas fritas.',
    image: require('../../assets/snack15.jpg'),
    price: '39.90',
  },
  {
    id: '6',
    name: 'Combo de Pizzas',
    description: 'Duas pizzas médias (uma Margherita e uma Calabresa) com dois refrigerantes de 500ml.',
    image: require('../../assets/snack16.jpg'),
    price: '89.90',
  },
  {
    id: '7',
    name: 'Combo Hot Roll',
    description: '20 hot rolls crocantes, acompanhados de molho tare e shoyu. Ideal para uma refeição prática.',
    image: require('../../assets/snack17.jpeg'),
    price: '49.90',
  },
  {
    id: '8',
    name: 'Combo Cachorro-Quente Duplo',
    description: 'Dois cachorros-quentes completos (salsicha, molho especial, purê, batata palha e queijo).',
    image: require('../../assets/snack18.jpeg'),
    price: '34.90',
  },
  {
    id: '9',
    name: 'Combo Sushi Lovers',
    description: '16 peças de sushi variados, incluindo nigiris, uramakis e sashimis, acompanhados de shoyu.',
    image: require('../../assets/snack19.jpg'),
    price: '79.90',
  },
  {
    id: '10',
    name: 'Combo Tacos Tex-Mex',
    description: '4 tacos crocantes recheados com carne, queijo e jalapeños, acompanhados de molho ranch.',
    image: require('../../assets/snack110.jpg'),
    price: '44.90',
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
        <Text style={[styles.welcomeText, { color: isDarkMode ? '#FFFFFF' : '#C90c0c' }]}>Nossos Lanches Disponíveis</Text>
        <FlatList
          data={itensSnacks1}
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