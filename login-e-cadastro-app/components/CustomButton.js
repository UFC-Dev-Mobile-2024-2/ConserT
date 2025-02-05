import React from 'react'; // Importa o React
import { TouchableOpacity, Text, StyleSheet } from 'react-native'; // Importa os componentes necessários

// Componente CustomButton recebe título, ação de pressionar (onPress) e estilo adicional
const CustomButton = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}> {/* Aplica o estilo e ação */}
      <Text style={styles.buttonText}>{title}</Text> {/* Exibe o título do botão */}
    </TouchableOpacity>
  );
};

// Estilos do botão
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF4500', // Cor do fundo do botão
    padding: 15, // Espaçamento interno
    borderRadius: 20, // Bordas arredondadas
    alignItems: 'center', // Centraliza o conteúdo no botão
  },
  buttonText: {
    color: 'white', // Cor do texto do botão
    fontWeight: 'bold', // Deixa o texto em negrito
    fontSize: 16, // Define o tamanho do texto
  },
});

export default CustomButton; // Exporta o componente
