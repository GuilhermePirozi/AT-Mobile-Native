import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/screens/HomeScreen";
import LoginScreen from "./components/screens/LoginScreen";
import MainScreen from "./components/screens/MainScreen";
import UserScreen from "./components/screens/UserScreen";
import ConfigScreen from "./components/screens/ConfigScreen";
import RestaurantScreen from "./components/screens/RestaurantScreen";
import DetailScreen from "./components/screens/DetailScreen";
import MealsScreen from "./components/screens/MealsScreen";
import Snacks1Screen from "./components/screens/Snacks1Screen";
import DrinksScreen from "./components/screens/DrinksScreen";
import DessertsScreen from "./components/screens/DessertsScreen";
import Snacks2Screen from "./components/screens/Snacks2Screen";
import CartScreen from "./components/screens/CartSCreen"; 
import OrdersScreen from './components/screens/OrdersScreen'
import CheckoutScreen from './components/screens/CheckoutScreen'
import { ThemeProvider } from './components/Context/ThemeContext';

const Stack = createStackNavigator();

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
  setCart((prevCart) => {
    const existingItemIndex = prevCart.findIndex(
      (cartItem) => cartItem.id === item.id && cartItem.name === item.name
    );

    if (existingItemIndex > -1) {
      const updatedCart = [...prevCart];
      updatedCart[existingItemIndex].quantity += item.quantity;
      return updatedCart;
    } else {
      return [...prevCart, { ...item, quantity: item.quantity || 1 }];
    }
  });
};

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  const updateCartQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="User"
            component={UserScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Config"
            component={ConfigScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Restaurant"
            component={RestaurantScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Meals"
            options={{ headerShown: false }}
          >
            {(props) => <MealsScreen {...props} addToCart={addToCart} />}
          </Stack.Screen>
          <Stack.Screen
            name="Snacks1"
            options={{ headerShown: false }}
          >
            {(props) => <Snacks1Screen {...props} addToCart={addToCart} />}
          </Stack.Screen>
          <Stack.Screen
            name="Drinks"
            options={{ headerShown: false }}
          >
            {(props) => <DrinksScreen {...props} addToCart={addToCart} />}
          </Stack.Screen>
          <Stack.Screen
            name="Desserts"
            options={{ headerShown: false }}
          >
            {(props) => <DessertsScreen {...props} addToCart={addToCart} />}
          </Stack.Screen>
          <Stack.Screen
            name="Snacks2"
            options={{ headerShown: false }}
          >
            {(props) => <Snacks2Screen {...props} addToCart={addToCart} />}
          </Stack.Screen>
          <Stack.Screen
            name="Cart"
            options={{ headerShown: false }}
          >
            {(props) => (
              <CartScreen
                {...props}
                cart={cart}
                removeFromCart={removeFromCart}
                updateCartQuantity={updateCartQuantity}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Orders"
            component={OrdersScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Checkout"
            component={CheckoutScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
