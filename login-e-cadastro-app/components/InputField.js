import React from 'react'; // Importa o React
import { TextInput, StyleSheet } from 'react-native'; // Importa o TextInput para campos de entrada de texto

// Componente InputField recebe valor, função de alteração e placeholders
const InputField = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.input} // Aplica o estilo
      value={value} // Valor do campo
      onChangeText={onChangeText} // Função chamada quando o valor do campo muda
      placeholder={placeholder} // Texto exibido quando o campo está vazio
      secureTextEntry={secureTextEntry} // Se for senha, oculta o texto
    />
  );
};

// Estilos para o campo de entrada
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f0f0f0', // Cor de fundo do campo
    padding: 10, // Espaçamento interno
    borderRadius: 10, // Bordas arredondadas
    marginBottom: 10, // Espaçamento inferior
  },
});

export default InputField; // Exporta o componente
