import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao InfnetFood!</Text>
      <Image
        source={require('../../assets/InfnetFood_logo.png')}
        style={styles.image2}
      />
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Realizar Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C90c0c",
    marginTop: 34,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: "#FFFFFF",
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    width: "70%",
  },
  buttonText: {
    color: "#C90C0C",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  image2: {
    width: 180,
    height: 180,
    aspectRatio: 1, 
    marginBottom: 70,
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: '#FFFFFF', 
  },
});

export default HomeScreen;
