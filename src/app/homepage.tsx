import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ImageSourcePropType  } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Banner } from "../components/horizontal";
import ProfileCard from "../components/cards/ProfileCard";

const HomePage = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const menuButtonRef = useRef(null);
  const [profissional1, setProfissional1] = useState<any>(null);
  const [profissional2, setProfissional2] = useState<any>(null);
  const [profissional3, setProfissional3] = useState<any>(null);
  const [profissional4, setProfissional4] = useState<any>(null);
  const imageMap: { [key: string]: ImageSourcePropType } = {
    "julio.png": require('../assets/julio.png'),
    "raimundo.jpg": require('../assets/raimundo.jpg'),
    "romero.png": require('../assets/romero.png'),
    "peter.png": require('../assets/peter.png'),
  };



  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  


  useEffect(() => {
    fetch('http://192.168.0.14:5000/profissionais')
      .then((response) => response.json())
      .then((data) => {
        setProfissional1(data[0]);
        setProfissional2(data[1]);
        setProfissional3(data[2]);
        setProfissional4(data[3]);
      })
      .catch((error) => console.error('Erro ao buscar dados da API:', error));
  }, []);
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity ref={menuButtonRef} style={styles.menuButton} onPress={toggleDropdown}>
          <MaterialIcons name="menu" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerLogo}>
          <Link href="/homepage">
            <Image source={require('../assets/logo_blue.png')} style={styles.headerLogo} />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Link href="/perfil">
            <MaterialIcons name="person" size={30} color="white" />
          </Link>
        </TouchableOpacity>
      </View>

      {/* Dropdown Menu */}
      {isDropdownVisible && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity style={styles.dropdownItem}>
            <Link href='/closedorder'>
              <Text style={styles.dropdownText}>Pedidos Concluídos</Text>
            </Link>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>Sair</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Botões de Pesquisa e Local */}
        <View style={styles.searchBarContainer}>
          <TouchableOpacity style={[styles.button, styles.searchButton]}>
            <MaterialIcons name="search" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.locationButton]}>
            <MaterialIcons name="location-on" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Banner de Categorias */}
        <View style={styles.section}>
          <Banner />
        </View>

        {/* Profile Cards */}
        <View style={styles.cardsContainer}>
          {profissional1 ? (
            <ProfileCard
              key={profissional1.id}
              name={profissional1.nome}
              image={imageMap[profissional1.foto] || require('../assets/julio.png')}
              rating={5}
            />
          ) : (
            <p>Carregando profissional 1...</p>
          )}

          {profissional2 ? (
            <ProfileCard
              key={profissional2.id}
              name={profissional2.nome}
              image={imageMap[profissional1.foto] || require('../assets/raimundo.jpg')}
              rating={4}
            />
          ) : (
            <p>Carregando profissional 2...</p>
          )}
          {profissional3 ? (
            <ProfileCard
              key={profissional3.id}
              name={profissional3.nome}
              image={imageMap[profissional1.foto] || require('../assets/romero.png')}
              rating={2}
            />
          ) : (
            <p>Carregando profissional 3...</p>
          )}
          {profissional4 ? (
            <ProfileCard
              key={profissional4.id}
              name={profissional4.nome}
              image={imageMap[profissional1.foto] || require('../assets/peter.png')}
              rating={5}
            />
          ) : (
            <p>Carregando profissional 4...</p>
          )}
        </View>
      </ScrollView>
      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Link href="/homepage">
            <Image source={require("../assets/home.png")} style={styles.footerIcon} />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Link href="/orderscreen">
            <Image source={require("../assets/message.png")} style={styles.footerIcon} />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Link href="/avaliacaoservico">
            <Image source={require("../assets/star.png")} style={styles.footerIcon} />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Link href="/telapro">
            <Image source={require("../assets/pro.png")} style={styles.footerProIcon} />
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: '#e9501a',
  },
  menuButton: {
    height: 30,
    width: 30,
  },
  profileIcon: {
    height: 50,
    width: 50,
  },
  headerLogo: {
    width: 120,
  },
  section: {
    paddingHorizontal: 0,
    paddingTop: 10,
  },
  cardsContainer: {
    display: 'flex',
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 60,
    backgroundColor: '#fff',
    width: 150,
    borderRadius: 8,
    elevation: 5,
    zIndex: 20,
  },
  dropdownItem: {
    paddingVertical: 8,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10, // Reduzido para diminuir a distância
    paddingTop: 100, // Ajuste o topo para distanciar os campos
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 50,
    height: 50,
    width: 120,
  },
  searchButton: {
    backgroundColor: '#E9501A',
  },
  locationButton: {
    backgroundColor: '#0037AD',
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    gap: 20,
    paddingHorizontal: 40,
    paddingVertical: 25,
    backgroundColor: "#E9501A",
    borderTopWidth: 1,
    borderColor: "#ddd",
    marginTop: "auto",
    bottom: 30,
    borderRadius: 50,
    zIndex: 10,
    width: "85%",
  },
  footerButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footerIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  footerProIcon: {
    width: 50,
    height: 30,
    resizeMode: "contain",
  },
});

export default HomePage;
