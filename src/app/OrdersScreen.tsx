import React, { useState, useEffect } from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { useRouter } from "expo-router";

const orders = [
    {
      status: "Galaxy S21",
      description: "Galaxy S21 está apresentando problemas na tela. A parte...",
      color: "#2E7D32",
    },
    {
      status: "IPhone 13",
      description: "Olá amigo, preciso trocar a placa de som do IPhone 13, quanto sairia o serviço por...",
      color: "#2E7D32",
    },
    {
      status: "Zenfone 7",
      description: "Meu Zenfone caiu na água e desde então apresenta erros na tela que...",
      color: "#2E7D32",
    },
  ];
  
  export default function OrdersScreen() {
    // Definindo um estado para controlar o carregamento das fontes
    const [fontsLoaded, setFontsLoaded] = useState(false);
  
  // Usando o hook useRouter para navegação entre telas
    const router = useRouter();

    useEffect(() => {
        const loadFonts = async () => {
          // Carrega as fontes de forma assíncrona
          await Font.loadAsync({
            "Funnel-Display": require("../assets/fonts/Funnel-Display.ttf"), // Fonte personalizada
            "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"), // Fonte personalizada
          });
          setFontsLoaded(true); // Atualiza o estado após as fontes serem carregadas
        };
    
        loadFonts(); // Chama a função que carrega as fontes
      }, []); // O array vazio significa que isso só será executado uma vez, após a montagem do componente
    
      // Se as fontes não foram carregadas, retornamos null para não renderizar nada
      if (!fontsLoaded) {
        return null;
      }
       // JSX para a renderização da tela
  return (
    <View style={styles.container}>  {/* Componente de contêiner principal */}
      <View style={styles.header}>  {/* Cabeçalho da página */}
        {/* Botão de voltar, que navega para a tela anterior */}
        <TouchableOpacity style={styles.menuButton} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>

        {/* Logo do aplicativo com um link para a tela inicial */}
        <TouchableOpacity style={styles.headerLogo} onPress={() => router.push("/homepage")}> 
          <Image source={require("../assets/logo_blue.png")} style={styles.headerLogo} />
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.menuButton}>
          <MaterialIcons name="search" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Título da página */}
      <Text style={styles.title}>Pedidos Concluídos</Text>

      {/* ScrollView*/}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Mapeia a lista de pedidos e cria um card para cada um */}
        {orders.map((order, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              {/* Exibe o status do pedido */}
              <Text style={styles.cardTitle}>{order.status}</Text>
              {/* Indicador de status com a cor definida */}
              <View style={[styles.statusIndicator, { backgroundColor: order.color }]} />
            </View>
            {/* Exibe a descrição do pedido */}
            <Text style={styles.cardDescription}>{order.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// Estilos da página com StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // Preenche a tela inteira
    backgroundColor: "#d8d8d8", // Cor de fundo
  },

  
  header: {
    backgroundColor: "#0039A6", // Cor do cabeçalho
    position: "absolute", // Fixa o cabeçalho na parte superior
    top: 0, left: 0, right: 0, zIndex: 10, // Estabelece a posição
    flexDirection: "row", // Organiza os elementos horizontalmente
    justifyContent: "space-between", // Distribui o espaço entre os botões
    alignItems: "center", // Alinha os itens no centro verticalmente
    height: 60, // Altura do cabeçalho
    paddingHorizontal: 10, // Espaçamento interno
  },


  headerLogo: {
    width: 120, // Largura da logo
  },


  menuButton: {height: 30, // Tamanho dos botões
    width: 30, // Tamanho dos botões
  },

  content: {padding: 16, // Espaçamento para o conteúdo
  },

  title: {
    marginTop: 80, // Espaço superior do título
    fontSize: 20, // Tamanho da fonte
    textAlign: "center", // Alinha o texto ao centro
    marginVertical: 16, // Margem vertical
    color: "#000", // Cor do título
    fontFamily: "Funnel-Display", // Fonte personalizada
    fontWeight: "bold", // Deixa o texto em negrito
  },


  card: {
    backgroundColor: "white", // Cor de fundo do card
    borderRadius: 10, // Bordas arredondadas
    padding: 16, // Espaçamento interno
    marginBottom: 12, // Margem inferior
    shadowColor: "#000", // Cor da sombra
    shadowOpacity: 0.1, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
    elevation: 3, // Elevação para efeito de sombra em Android
  },


  cardHeader: {
    flexDirection: "row", // Organiza os elementos do cabeçalho do card na horizontal
    justifyContent: "space-between", // Espaçamento entre o título e o indicador de status
    alignItems: "center", // Alinha os itens no centro verticalmente
    marginBottom: 8, // Margem inferior
  },


  cardTitle: {
    fontSize: 16, // Tamanho da fonte
    fontFamily: "Funnel-Display", // Fonte personalizada
    fontWeight: "bold", // Deixa o título em negrito
  },


  cardDescription: {
    fontSize: 14, // Tamanho da fonte para a descrição
    color: "#555", // Cor da descrição
    fontFamily: "Sora-Regular", // Fonte para a descrição
  },


  statusIndicator: {
    width: 40, // Largura do indicador de status
    height: 8, // Altura do indicador de status
    borderRadius: 4, // Bordas arredondadas
  },
});
