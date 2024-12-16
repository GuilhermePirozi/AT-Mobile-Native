import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import Navbar from '../NavBar';
import Footer from '../FooterBar';
import { useTheme } from '../Context/ThemeContext';

const categories = [
  {
    id: '1',
    title: 'Refeições',
    description: 'Cozinha brasileira, japonesa, chinesa e muitas mais',
    image: require('../../assets/foodCatego1.jpg'),
    screen: 'Meals',
  },
  {
    id: '2',
    title: 'Lanches',
    description: 'Hambúrgueres, pizzas e salgados',
    image: require('../../assets/foodCatego2.jpg'),
    screen: 'Snacks1',
  },
  {
    id: '3',
    title: 'Bebidas',
    description: 'Refrigerantes, sucos e bebidas alcoólicas',
    image: require('../../assets/foodCatego3.jpeg'),
    screen: 'Drinks',
  },
  {
    id: '4',
    title: 'Sobremesas',
    description: 'Doces, bolos, sorvetes e outras gostosuras',
    image: require('../../assets/foodCatego4.jpg'),
    screen: 'Desserts',
  },
  {
    id: '5',
    title: 'Petiscos',
    description: 'Pastéis, coxinhas, batatas fritas e outros aperitivos',
    image: require('../../assets/foodCatego5.jpeg'),
    screen: 'Snacks2',
  },
];

const MainScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.cardFood}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Image source={item.image} style={styles.imageFood} />
      <View style={styles.cardContentFood}>
        <Text style={styles.titleFood}>{item.title}</Text>
        <Text style={styles.descriptionFood}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.containerFather, { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }]}>
      <Navbar navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={require('../../assets/imageDefMain2.png')}
          style={styles.image3}
          resizeMode="cover"
        />
        <View style={styles.contentFood}>
          <Text style={[styles.welcomeTextFood, { color: isDarkMode ? '#FFFFFF' : '#C90c0c' }]}>Nossas Opções de Delivery</Text>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listFood}
            scrollEnabled={false}
          />
        </View>
        <View style={styles.contentRestaurant}>
          <Text style={[styles.welcomeTextRestaurant, { color: isDarkMode ? '#FFFFFF' : '#C90c0c' }]}>
            Nossos Restaurantes Parceiros
          </Text>
          <View style={styles.restaurantBox}>
            <Image
              source={require('../../assets/mapWeb.png')}
              style={styles.image4}
            />
            <Text style={styles.restaurantText}>
              Está com fome e quer explorar os melhores pratos da cidade? Nosso
              aplicativo conecta você aos restaurantes parceiros mais incríveis,
              oferecendo opções deliciosas para todos os gostos. Desde os hambúrgueres
              artesanais mais suculentos até as massas mais autênticas, aqui você
              encontra o lugar perfeito para sua próxima refeição.
            </Text>
            <TouchableOpacity
              style={styles.button3}
              onPress={() => navigation.navigate("Restaurant")}
            >
              <Text style={styles.buttonText3}>Conhecer Nossos Parceiros</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentInfo}>
          <Text style={[styles.welcomeTextInfo, { color: isDarkMode ? '#FFFFFF' : '#C90c0c' }]}>Um Pouco sobre Nós!</Text>
          <View style={styles.infoBox}>
            <Image
              source={require('../../assets/InfnetFood_logo.png')}
              style={styles.image5}
            />
            <Text style={styles.infoText}>
              Bem-vindo ao InfNetFood, o portal que combina praticidade e 
              informação para transformar sua experiência com alimentação e entrega online! 
              Nossa missão é conectar você aos melhores restaurantes, mercados e 
              estabelecimentos da sua região, garantindo não apenas uma entrega rápida 
              e eficiente, mas também o acesso a informações detalhadas sobre os alimentos 
              que você consome. Queremos que você tenha escolhas mais conscientes e saudáveis, 
              tudo isso com apenas alguns cliques.
            </Text>
          </View>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerFather: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 34,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 70,
  },
  image3: {
    width: '100%',
    height: 350,
  },
  contentFood: {
    flex: 1,
    padding: 16,
    marginTop: 20,
  },
  welcomeTextFood: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#C90c0c',
    marginBottom: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  listFood: {
    paddingBottom: 20,
  },
  cardFood: {
    flexDirection: 'row',
    backgroundColor: '#C4151c',
    borderRadius: 10,
    marginBottom: 16,
    padding: 15,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  imageFood: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  cardContentFood: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    marginLeft: 15,
  },
  titleFood: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
  },
  descriptionFood: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 5,
  },
  contentRestaurant: {
    flex: 1,
    padding: 16,
  },
  welcomeTextRestaurant: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#C90c0c',
    marginBottom: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  restaurantBox: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
  },
  restaurantText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    textAlign: 'justify',
  },
  button3: {
    width: '85%',
    height: 40,
    backgroundColor: '#C90c0c',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText3: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image4: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  contentInfo: {
    flex: 1,
    padding: 16,
  },
  welcomeTextInfo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#C90c0c',
    marginBottom: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 25,
  },
  infoBox: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    textAlign: 'justify',
  },
  image5: {
    width: '85%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
});

export default MainScreen;
