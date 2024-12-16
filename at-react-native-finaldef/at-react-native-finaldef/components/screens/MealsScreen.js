import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Navbar from '../NavBar';
import Footer from '../FooterBar';
import { useTheme } from '../Context/ThemeContext';

const itensMeals = [
  {
    id: '1',
    name: 'Feijoada Completa',
    description: 'Feijão preto, carnes variadas, arroz, farofa e couve.',
    image: require('../../assets/meals1.jpg'),
    price: '59.90',
  },
  {
    id: '2',
    name: 'Pasta Carbonara',
    description: 'Espaguete, bacon, ovos e queijo parmesão.',
    image: require('../../assets/meals2.jpg'),
    price: '34.90',
  },
  {
    id: '3',
    name: 'Frango Grelhado',
    description: 'Peito de frango, legumes salteados e arroz integral.',
    image: require('../../assets/meals3.jpg'),
    price: '44.90',
  },
  {
    id: '4',
    name: 'Picanha na Chapa',
    description: 'Picanha grelhada, arroz, farofa e batata frita.',
    image: require('../../assets/meals4.jpg'),
    price: '69.90',
  },
  {
    id: '5',
    name: 'Moqueca de Peixe',
    description: 'Peixe cozido no leite de coco com azeite de dendê, acompanhado de arroz e pirão.',
    image: require('../../assets/meals5.jpg'),
    price: '74.90',
  },
  {
    id: '6',
    name: 'Strogonoff de Carne',
    description: 'Tiras de carne com creme de leite, ketchup, mostarda e cogumelos, servido com arroz e batata palha.',
    image: require('../../assets/meals6.jpg'),
    price: '39.90',
  },
  {
    id: '7',
    name: 'Lasanha à Bolonhesa',
    description: 'Camadas de massa, carne moída, molho de tomate e queijo gratinado.',
    image: require('../../assets/meals7.jpg'),
    price: '49.90',
  },
  {
    id: '8',
    name: 'Risoto de Cogumelos',
    description: 'Arroz arbóreo cremoso com cogumelos frescos e queijo parmesão.',
    image: require('../../assets/meals8.png'),
    price: '54.90',
  },
  {
    id: '9',
    name: 'Filé à Parmegiana',
    description: 'Filé empanado com molho de tomate e queijo gratinado, servido com arroz e batatas fritas.',
    image: require('../../assets/meals9.jpg'),
    price: '64.90',
  },
  {
    id: '10',
    name: 'Bacalhau à Brás',
    description: 'Bacalhau desfiado com cebola, batata palha e ovos mexidos.',
    image: require('../../assets/meals10.jpg'),
    price: '79.90',
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
        <Text style={[styles.welcomeText, { color: isDarkMode ? '#FFFFFF' : '#C90c0c' }]}>Nossas Refeições Disponíveis</Text>
        <FlatList
          data={itensMeals}
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