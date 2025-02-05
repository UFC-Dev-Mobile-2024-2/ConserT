import React from 'react'; // Importa o React
import { NavigationContainer } from '@react-navigation/native'; // Importa o container de navegação
import AppNavigator from './navigation/AppNavigator'; // Importa o AppNavigator

const App = () => {
  return (
    <NavigationContainer> {/* Container de navegação */}
      <AppNavigator /> {/* Navegação entre telas */}
    </NavigationContainer>
  );
};

export default App; // Exporta o componente App
