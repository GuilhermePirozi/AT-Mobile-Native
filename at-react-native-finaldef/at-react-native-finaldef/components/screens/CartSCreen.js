import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";
import Navbar from "../NavBar";
import Footer from "../FooterBar";
import { useTheme } from '../Context/ThemeContext'; 

export default function CartScreen({ cart, removeFromCart, updateCartQuantity, navigation,}) {
  
  const { isDarkMode } = useTheme();
  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>R$ {item.price}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => updateCartQuantity(item.id, item.quantity - 1)}
          >
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityTextNumber}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => updateCartQuantity(item.id, item.quantity + 1)}
          >
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() =>
            Alert.alert(
              "Remover Item",
              `Deseja remover "${item.name}" do carrinho?`,
              [
                { text: "Cancelar", style: "cancel" },
                { text: "Remover", onPress: () => removeFromCart(item.id) },
              ]
            )
          }
        >
          <Text style={styles.removeButtonText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const total = cart.reduce(
    (sum, item) => sum + item.quantity * parseFloat(item.price),
    0
  );

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }]}>
      <Navbar navigation={navigation} />
      <Text style={[styles.title, { color: isDarkMode ? '#FFFFFF' : '#C90c0c' }]}>Carrinho de Compras</Text>
      {cart.length > 0 ? (
        <>
          <FlatList
            data={cart}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: R$ {total.toFixed(2)}</Text>

            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => navigation.navigate("Checkout", { cart })}
            >
              <Text style={styles.checkoutButtonText}>Fechar Pedido</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text style={styles.emptyCartText}>Seu carrinho está vazio.</Text>
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
  cartItem: {
    backgroundColor: "#C90c0c",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  itemPrice: {
    fontSize: 14,
    color: "#FFD700",
    marginTop: 5,
  },
  actionsContainer: {
    alignItems: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  quantityButton: {
    backgroundColor: "#FFD700",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  quantityText: {
    color: "#C90c0c",
    fontWeight: "bold",
    fontSize: 18,
  },
  quantityTextNumber: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  removeButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "#C90c0c",
    fontWeight: "bold",
  },
  listContainer: {
    paddingBottom: 20,
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "#FFF8E1",
    marginTop: 10,
    elevation: 3,
    paddingBottom: 70,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#C90c0c",
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  checkoutButtonText: {
    color: "#C90c0c",
    fontWeight: "bold",
    fontSize: 18,
  },
  emptyCartText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginTop: 50,
  },
});
