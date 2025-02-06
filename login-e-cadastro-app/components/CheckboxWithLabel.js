import React from 'react'; // Importa o React
import { View, Text } from 'react-native'; // Importa componentes necessários
import { Checkbox } from 'react-native-paper'; // Importa o Checkbox da biblioteca react-native-paper

// Componente CheckboxWithLabel recebe se está marcado ou não e uma função para alterar o estado
const CheckboxWithLabel = ({ checked, onCheckChange, label }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'} // Marca ou desmarca dependendo do estado
        onPress={onCheckChange} // Ação de alternar o estado
      />
      <Text>{label}</Text> {/* Exibe o rótulo ao lado do checkbox */}
    </View>
  );
};

export default CheckboxWithLabel; // Exporta o componente
