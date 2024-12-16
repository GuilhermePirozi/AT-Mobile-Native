import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Navbar from "../NavBar";
import Footer from "../FooterBar";
import { useTheme } from '../Context/ThemeContext';

export default function UserOrdersScreen({ navigation }) {
  
  const { isDarkMode } = useTheme();
  const [orders, setOrders] = useState([
    {
      id: "1",
      date: "2024-06-15",
      items: [
        { name: "Feijoada Completa", quantity: 1 },
        { name: "Pasta Carbonara", quantity: 2 },
      ],
      total: "129.70",
    },
    {
      id: "2",
      date: "2024-06-14",
      items: [
        { name: "Frango Grelhado", quantity: 1 },
        { name: "Sorvete Especial", quantity: 2 },
      ],
      total: "84.70",
    },
    {
      id: "3",
      date: "2024-06-12",
      items: [{ name: "Pizza Margherita", quantity: 1 }],
      total: "39.90",
    },
    {
    id: "4",
    date: "2024-06-10",
    items: [
      { name: "Combo Sushi Party", quantity: 1 },
      { name: "Sorvete Especial", quantity: 1 },
    ],
    total: "119.80",
  },
  {
    id: "5",
    date: "2024-06-09",
    items: [
      { name: "Lasanha à Bolonhesa", quantity: 2 },
      { name: "Refrigerante 2L", quantity: 1 },
    ],
    total: "109.90",
  },
  {
    id: "6",
    date: "2024-06-08",
    items: [
      { name: "Tacos Mexicanos", quantity: 3 },
      { name: "Guacamole Extra", quantity: 1 },
    ],
    total: "89.90",
  },
  {
    id: "7",
    date: "2024-06-07",
    items: [
      { name: "Risoto de Cogumelos", quantity: 1 },
      { name: "Salada Caesar", quantity: 1 },
    ],
    total: "77.80",
  },
  {
    id: "8",
    date: "2024-06-05",
    items: [
      { name: "Filé à Parmegiana", quantity: 1 },
      { name: "Batata Frita", quantity: 1 },
    ],
    total: "89.90",
  },
  ]);

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderCard}>
      <Text style={styles.orderTitle}>Pedido #{item.id}</Text>
      <Text style={styles.orderDate}>Data: {item.date}</Text>
      <View style={styles.itemsContainer}>
        {item.items.map((orderItem, index) => (
          <Text key={index} style={styles.orderItemText}>
            {orderItem.quantity}x {orderItem.name}
          </Text>
        ))}
      </View>
      <Text style={styles.totalText}>Total: R$ {item.total}</Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }]}>
      <Navbar navigation={navigation} />
      <Text style={[styles.title, { color: isDarkMode ? '#FFFFFF' : '#C90c0c' }]}>Meus Pedidos</Text>
      {orders.length > 0 ? (
        <FlatList
          data={orders}
          renderItem={renderOrderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <Text style={styles.emptyText}>Você não possui pedidos ainda.</Text>
      )}
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 34,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#C90c0c",
    textAlign: "center",
    marginVertical: 15,
    textDecorationLine: "underline",
  },
  listContainer: {
    paddingBottom: 80,
  },
  orderCard: {
    backgroundColor: "#C90c0c",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFD700",
  },
  orderDate: {
    fontSize: 14,
    color: "#FFFFFF",
    marginVertical: 5,
  },
  itemsContainer: {
    marginVertical: 5,
  },
  orderItemText: {
    fontSize: 14,
    color: "#FFD700",
    marginVertical: 2,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 10,
  },
  emptyText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginTop: 50,
  },
});
