import React, { useState } from 'react'; // Importa o React e o hook useState para gerenciar o estado
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; // Importa os componentes necessários do React Native
import InputField from '../components/InputField'; // Importa o componente InputField (campo de entrada de dados)
import CheckboxWithLabel from '../components/CheckboxWithLabel'; // Importa o componente de Checkbox com rótulo
import CustomButton from '../components/CustomButton'; // Importa o componente CustomButton (botão personalizado)

// Tela de Login
const LoginScreen = ({ navigation }) => { // A tela de login, recebendo a navegação como propriedade
  const [remember, setRemember] = useState(false); // Cria o estado 'remember' para controlar o checkbox de "Lembrar login"

  return (
    <View style={styles.container}> {/* Cria o contêiner principal da tela */}
      <TouchableOpacity
        onPress={() => navigation.goBack()} // Ao clicar no ícone de voltar, retorna para a tela anterior
        style={styles.backButton} // Estilo para o botão de voltar
      >
        <Text style={styles.backText}>{'←'}</Text> {/* Exibe o ícone de seta para a esquerda, indicando "voltar" */}
      </TouchableOpacity>

      <Text style={styles.title}>Login</Text> {/* Título da tela */}
      <Text style={styles.subtitle}>Preencha os dados</Text> {/* Subtítulo que instrui o usuário a preencher os dados */}

      <InputField placeholder="Email" keyboardType="email-address" /> {/* Componente de input para o campo de email */}
      <InputField placeholder="Senha" secureTextEntry /> {/* Componente de input para o campo de senha, ocultando os caracteres */}

      <CheckboxWithLabel
        checked={remember}  // Define se o checkbox está marcado, dependendo do estado 'remember'
        onCheckChange={() => setRemember(!remember)} // Alterna o estado 'remember' quando o checkbox é pressionado
        label="Lembrar login" // Rótulo ao lado do checkbox
      />

      <CustomButton title="ENTRAR" onPress={() => {}} /> {/* Componente de botão personalizado para o login */}

      <TouchableOpacity onPress={() => navigation.navigate('Register')}> {/* Link para navegar para a tela de cadastro */}
        <Text style={styles.linkText}>Não tem uma conta? Cadastre-se</Text> {/* Texto de link para a tela de cadastro */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({ // Define os estilos para os componentes
  container: { flex: 1, padding: 20, backgroundColor: 'white' }, // Estilo do contêiner principal (preenchimento e fundo branco)
  title: { fontSize: 26, fontWeight: 'bold', color: 'black' }, // Estilo do título (tamanho de fonte, peso e cor)
  subtitle: { fontSize: 16, color: 'gray', marginBottom: 20 }, // Estilo do subtítulo (tamanho da fonte, cor e margem inferior)
  backButton: { marginBottom: 10 }, // Estilo do botão de voltar (margem inferior)
  backText: { fontSize: 24 }, // Estilo do texto de voltar (tamanho da fonte)
  linkText: { color: 'blue', marginTop: 10, textAlign: 'center' }, // Estilo do texto do link (cor azul, margem superior e centralizado)
});

export default LoginScreen; // Exporta o componente LoginScreen para ser utilizado em outros arquivos
