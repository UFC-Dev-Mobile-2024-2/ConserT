import React, { useState } from 'react'; // Importa o React e o hook useState
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; // Importa os componentes necessários do React Native
import InputField from '../components/InputField'; // Campo de entrada (input)
import CheckboxWithLabel from '../components/CheckboxWithLabel'; // Componente de checkbox com rótulo
import CustomButton from '../components/CustomButton'; // Botão personalizado

// Tela de Cadastro
const RegisterScreen = ({ navigation }) => { // A tela de cadastro, recebendo a navegação como prop
  const [agree, setAgree] = useState(false); // Estado para controlar o checkbox de "Concordo com os termos"

  return (
    <View style={styles.container}> {/* Cria o contêiner da tela */}
      <TouchableOpacity
        onPress={() => navigation.goBack()} // Ao clicar no ícone de voltar, retorna para a tela anterior
        style={styles.backButton} // Estilo para o botão de voltar
      >
        <Text style={styles.backText}>{'←'}</Text> {/* Exibe o ícone de seta para a esquerda, indicando "voltar" */}
      </TouchableOpacity>

      <Text style={styles.title}>Criar Conta</Text> {/* Título da tela */}
      <Text style={styles.subtitle}>Preencha os dados</Text> {/* Subtítulo instruindo o usuário */}

      <InputField placeholder="Email" keyboardType="email-address" /> {/* Campo de entrada para o email */}
      <InputField placeholder="Senha" secureTextEntry /> {/* Campo de entrada para a senha */}
      <InputField placeholder="Repita a Senha" secureTextEntry /> {/* Campo de entrada para repetir a senha */}

      <CheckboxWithLabel
        checked={agree}  // Define se o checkbox está marcado, dependendo do estado 'agree'
        onCheckChange={() => setAgree(!agree)} // Alterna o estado 'agree' quando o checkbox é pressionado
        label="Concordo com os termos de uso" // Rótulo do checkbox
      />

      <CustomButton title="CRIAR NOVA CONTA" onPress={() => {}} /> {/* Botão para criar a conta */}

      <TouchableOpacity onPress={() => navigation.navigate('Login')}> {/* Link para navegar para a tela de login */}
        <Text style={styles.linkText}>Já tem uma conta? Faça o login</Text> {/* Texto de link para a tela de login */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'white' }, // Estilo do contêiner principal (preenchimento e fundo branco)
  title: { fontSize: 26, fontWeight: 'bold', color: 'black' }, // Estilo do título (tamanho da fonte, peso e cor)
  subtitle: { fontSize: 16, color: 'gray', marginBottom: 20 }, // Estilo do subtítulo (tamanho da fonte, cor e margem inferior)
  backButton: { marginBottom: 10 }, // Estilo do botão de voltar (margem inferior)
  backText: { fontSize: 24 }, // Estilo do texto do ícone de voltar (tamanho da fonte)
  linkText: { color: 'blue', marginTop: 10, textAlign: 'center' }, // Estilo do texto do link (cor azul, margem superior e centralizado)
});

export default RegisterScreen; // Exporta o componente para ser utilizado em outros arquivos
