import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, FlatList, Alert } from "react-native";
import * as Notifications from "expo-notifications";
import Navbar from "../NavBar";
import Footer from "../FooterBar";
import { useTheme } from "../Context/ThemeContext";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function CheckoutScreen({ route, navigation }) {
  const { cart } = route.params;
  const { isDarkMode } = useTheme(); 

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permissão Negada", "Ative as notificações para acompanhar seus pedidos.");
      }
    };
    requestPermissions();
  }, []);

  const sendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Pedido Confirmado! 🎉",
        body: "Seu pedido foi realizado com sucesso e está a caminho.",
        sound: true,
      },
      trigger: null,
    });
  };

  const handleFinishOrder = () => {
    if (!address || !paymentMethod) {
      Alert.alert("Erro", "Preencha todos os campos para finalizar o pedido.");
    } else {
      sendNotification();
      Alert.alert(
        "Pedido Realizado!",
        `Seu pedido foi enviado para o endereço: ${address}\nMétodo de Pagamento: ${paymentMethod}`,
        [{ text: "OK", onPress: () => navigation.navigate("Main") }]
      );
    }
  };

  const renderCartItem = ({ item }) => (
    <View
      style={[
        styles.cartItem,
        { borderColor: isDarkMode ? "#444" : "#DDD", backgroundColor: isDarkMode ? "#333" : "#F8F8F8" },
      ]}
    >
      <Text style={[styles.itemText, { color: isDarkMode ? "#FFF" : "#555" }]}>
        {item.quantity}x {item.name}
      </Text>
      <Text style={[styles.itemText, { color: isDarkMode ? "#FFD700" : "#555" }]}>R$ {item.price}</Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "#121212" : "#FFFFFF" }]}>
      <Navbar navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.title, { color: isDarkMode ? "#FFFFFF" : "#C90c0c" }]}>Checkout</Text>

        <Text style={[styles.sectionTitle, { color: isDarkMode ? "#FFF" : "#333" }]}>Itens do Pedido:</Text>
        <View
          style={[
            styles.cartContainer,
            { borderColor: isDarkMode ? "#444" : "#E0E0E0", backgroundColor: isDarkMode ? "#333" : "#F8F8F8" },
          ]}
        >
          <FlatList
            data={cart}
            renderItem={renderCartItem}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={true}
          />
        </View>

        <Text style={[styles.sectionTitle, { color: isDarkMode ? "#FFF" : "#333" }]}>Endereço de Entrega:</Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: isDarkMode ? "#444" : "#FFF",
              borderColor: isDarkMode ? "#666" : "#CCC",
              color: isDarkMode ? "#FFF" : "#333",
            },
          ]}
          placeholder="Digite o endereço completo"
          placeholderTextColor={isDarkMode ? "#AAA" : "#555"}
          value={address}
          onChangeText={setAddress}
        />

        <Text style={[styles.sectionTitle, { color: isDarkMode ? "#FFF" : "#333" }]}>Método de Pagamento:</Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: isDarkMode ? "#444" : "#FFF",
              borderColor: isDarkMode ? "#666" : "#CCC",
              color: isDarkMode ? "#FFF" : "#333",
            },
          ]}
          placeholder="Ex: Cartão de Crédito/Débito, Dinheiro, Pix"
          placeholderTextColor={isDarkMode ? "#AAA" : "#555"}
          value={paymentMethod}
          onChangeText={setPaymentMethod}
        />

        <TouchableOpacity style={styles.finishButton} onPress={handleFinishOrder}>
          <Text style={styles.finishButtonText}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 34,
  },
  content: {
    padding: 20,
    paddingBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
    textDecorationLine: "underline",
    marginTop: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  cartContainer: {
    maxHeight: 190,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  finishButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#C90c0c",
  },
  finishButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
