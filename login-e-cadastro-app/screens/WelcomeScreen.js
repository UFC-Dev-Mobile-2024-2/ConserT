import React from 'react'; // Importa o React
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; // Importa os componentes necessários
import CustomButton from '../components/CustomButton'; // Importa o botão personalizado

// Componente da tela de boas-vindas
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.title}>ConserT.</Text> {/* Exibe o título */}
      <Text style={styles.subtitle}>Cadastre-se ou realize o login para continuar</Text> {/* Texto explicativo */}
      
      <CustomButton 
        title="Login" 
        onPress={() => navigation.navigate('Login')} // Navega para a tela de Login
      />
      
      <CustomButton 
        title="Criar Conta" 
        onPress={() => navigation.navigate('Register')} // Navega para a tela de Cadastro
        style={{ marginTop: 10 }} // Adiciona espaçamento ao botão
      />
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' },
  title: { fontSize: 26, fontWeight: 'bold', color: 'white' },
  subtitle: { fontSize: 16, color: 'gray', marginBottom: 20 },
});

export default WelcomeScreen;
