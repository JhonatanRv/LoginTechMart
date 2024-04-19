import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Button from '../components/Button'; // Importando o componente Button

const ButtonCircular = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </View>
    </TouchableOpacity>
  );
};

const Home = () => {
  const handleButtonPress = () => {
    // Lógica para lidar com o pressionamento do botão aqui
    console.log('Botão pressionado!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/logo.png')} // Caminho da logo
          style={styles.logo}
        />
        <Text style={styles.headerText}>Bem-vindo à TechMart!</Text>
      </View>
      <View style={styles.bottomContainer}>
        {/* Botão circular */}
        <ButtonCircular onPress={handleButtonPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc', // Fundo cinza
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    backgroundColor: '#fff', // Fundo branco do cabeçalho
    borderRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#e88035', // Cor de fundo azul do botão
    borderRadius: 50, // Raio para tornar o botão circular
    elevation: 5,
  },
  button: {
    width: 80, // Tamanho maior para o botão
    height: 80, // Tamanho maior para o botão
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 36, // Tamanho maior para o símbolo
    fontWeight: 'bold',
    color: '#fff', // Cor do texto do botão
  },
});

export default Home;
