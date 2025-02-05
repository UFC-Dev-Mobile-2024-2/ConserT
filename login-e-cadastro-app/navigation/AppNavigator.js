import React from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Importando o stack navigator
import { Ionicons } from 'react-native-vector-icons'; // Importando os ícones
import WelcomeScreen from '../screens/WelcomeScreen'; // Tela de boas-vindas
import LoginScreen from '../screens/LoginScreen'; // Tela de login
import RegisterScreen from '../screens/RegisterScreen'; // Tela de cadastro

const Stack = createNativeStackNavigator(); // Criando o stack navigator

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <Ionicons
            name="arrow-back"
            size={30} // Tamanho do ícone
            color="black" // Cor do ícone
            style={{ marginLeft: 10 }}
            onPress={() => navigation.goBack()} // Ação de voltar à tela anterior
          />
        ),
        headerShown: true, // Exibe o cabeçalho
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
