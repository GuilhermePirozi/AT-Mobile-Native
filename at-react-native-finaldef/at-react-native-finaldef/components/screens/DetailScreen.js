import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Navbar from '../NavBar';
import Footer from '../FooterBar';
import { useTheme } from '../Context/ThemeContext';

export default function RestaurantDetailsScreen({ route, navigation }) {
  const { restaurant } = route.params;
  const { isDarkMode } = useTheme(); 

  return (
    <View
      style={[
        styles.containerDetail,
        { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' },
      ]}
    >
      <Navbar navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollContentDetail}>
        <Image
          source={restaurant.image}
          style={styles.image6}
        />
        <Text
          style={[
            styles.nameDetail,
            { color: isDarkMode ? '#FFFFFF' : '#C90c0c' },
          ]}
        >
          {restaurant.name}
        </Text>
        <Text
          style={[
            styles.addressDetail,
            { color: isDarkMode ? '#AAAAAA' : '#555' },
          ]}
        >
          {restaurant.address}
        </Text>
        <View
          style={[
            styles.menuContainerDetail,
            { backgroundColor: isDarkMode ? '#333333' : '#F5F5F5' },
          ]}
        >
          <Text
            style={[
              styles.menuTitleDetail,
              { color: isDarkMode ? '#FFFFFF' : '#C90c0c' },
            ]}
          >
            Cardápio
          </Text>
          <View style={styles.menuItemDetail}>
            <Text
              style={[
                styles.menuItemNameDetail,
                { color: isDarkMode ? '#FFFFFF' : '#333' },
              ]}
            >
              {restaurant.menuExample.name}
            </Text>
            <Text
              style={[
                styles.menuItemPriceDetail,
                { color: isDarkMode ? '#FFD700' : '#C90c0c' },
              ]}
            >
              R$ {restaurant.menuExample.price}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonContainerDetail}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={styles.buttonTextDetail}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerDetail: {
    flex: 1,
    marginTop: 34,
  },
  scrollContentDetail: {
    padding: 20,
    paddingBottom: 80,
  },
  image6: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 2,
    marginTop: 20,
    borderColor: '#C90c0c',
  },
  nameDetail: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    textDecorationLine: 'underline',
  },
  addressDetail: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  menuContainerDetail: {
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  menuTitleDetail: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  menuItemDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  menuItemNameDetail: {
    fontSize: 16,
    fontWeight: '600',
  },
  menuItemPriceDetail: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainerDetail: {
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 60,
    alignItems: 'center',
    backgroundColor: '#C90c0c',
  },
  buttonTextDetail: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
});
