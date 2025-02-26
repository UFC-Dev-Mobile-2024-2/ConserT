
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router";

export default function ProfessionalProfile() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Conteúdo rolável */}
      <ScrollView style={styles.scrollContent}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>{'<'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileIcon}>
            <Text style={styles.iconText}>{'👤'}</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileCard}>
          <View style={styles.profileTop}>
            <Image source={require('../assets/julio.png')} 
              style={styles.avatar}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>Júlio Cavalcante</Text>
              <Text style={styles.rating}>★★★★★</Text>
            </View>
          </View>

          <Text style={styles.location}>Quixadá – CE</Text>
          <Text style={styles.address}><Text style={styles.bold}>Endereço:</Text> Rua José Maria 123</Text>

          <Text style={styles.experience}>
            <Text style={styles.bold}>Experiência:</Text> 8 anos de experiência no setor de reparos eletrônicos. 
            Especialidades: Reparos de smartphones, tablets, notebooks, TVs de LED, LCD e Smart TVs.
          </Text>
          <Text style={styles.formation}>
            <Text style={styles.bold}>Formação:</Text> Curso Técnico em Eletrônica pelo SENAI.
          </Text>

          {/* Ícones de Serviços */}
          <View style={styles.serviceIcons}>
            <View style={styles.serviceItem}>
              <Text>❄️</Text>
              <Text style={styles.serviceText}>Freezers</Text>
            </View>
            <View style={styles.serviceItem}>
              <Text>🌀</Text>
              <Text style={styles.serviceText}>Ventiladores</Text>
            </View>
            <View style={styles.serviceItem}>
              <Text>📱</Text>
              <Text style={styles.serviceText}>Smartphones</Text>
            </View>
          </View>

          {/* Botões de Redes Sociais */}
          <TouchableOpacity style={styles.socialButtonWhatsapp}>
            <Text style={styles.socialButtonText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButtonFacebook}>
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButtonInstagram}>
            <Text style={styles.socialButtonText}>Instagram</Text>
          </TouchableOpacity>



          {/* Botão de contratar */}
          <TouchableOpacity style={styles.hireButton}>
            <Text style={styles.hireButtonText}>Contratar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Barra fixa na parte inferior */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('../assets/home.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/logo_blue.png')} style={styles.headerLogo} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/profile-icon.png')} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>


   <ScrollView style={styles.scrollContent}>
     <View style= {styles.profileCard}>
      <Image source={require('../assets/julio.png')} style={styles.avatar} />
      <Text style= {styles.name}>Julio Cavalcante</Text>
      <Text style={styles.rating}>★★★★★</Text>
      <Text style={styles.location}>Quixadá – CE</Text>
      
      <Text style={styles.address}><Text style={styles.bold}>Endereço:</Text> Rua José Maria 123</Text>
      <Text style={styles.experience}><Text style={styles.bold}>Experiência:</Text> 8 anos de experiência no setor de reparos eletrônicos. Especialidades: Reparos de smartphones, tablets, notebooks, TVs de LED, LCD e Smart TVs.</Text>
      <Text style={styles.formation}><Text style={styles.bold}>Formação:</Text> Curso Técnico em Eletrônica pelo SENAI.</Text>
      
      <View style={styles.serviceIcons}>
       <View style={styles.serviceItem}><MaterialIcons name="ac-unit" size={24} /><Text style={styles.serviceText}>Freezers</Text></View>
       <View style={styles.serviceItem}><MaterialIcons name="toys" size={24} /><Text style={styles.serviceText}>Ventiladores</Text></View>
       <View style={styles.serviceItem}><MaterialIcons name="smartphone" size={24} /><Text style={styles.serviceText}>Smartphones</Text></View>
      </View>

      <TouchableOpacity style={styles.socialButtonWhatsapp}><Text style={styles.socialButtonText}>Whatsapp</Text></TouchableOpacity>
      <TouchableOpacity style={styles.socialButtonFacebook}><Text style={styles.socialButtonText}>Facebook</Text></TouchableOpacity>
      <TouchableOpacity style={styles.socialButtonInstagram}><Text style={styles.socialButtonText}>Instagram</Text></TouchableOpacity>

      <TouchableOpacity style={styles.hireButton}><Text style={styles.hireButtonText}>Contratar</Text></TouchableOpacity>
      <TouchableOpacity style={styles.reviewButton}><Text style={styles.hireButtonText}>Avaliações</Text></TouchableOpacity>
    
    </View>
   </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  scrollContent: {
    flexGrow: 1, 
    paddingTop: 70, 
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
  headerLogo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  backButton: {
    height: 30,
    width: 30,
  },
  profileIcon: {
    height: 50,
    width: 50,
  },
  profileCard: {
    backgroundColor: '#E0E0E0',
    margin: 16,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 20,
    marginVertical: 4,
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  experience: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  formation: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  serviceIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  serviceItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  serviceText: {
    fontSize: 12,
  },
  socialButtonWhatsapp: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 8
    alignItems: 'center',
    width: '80%',
  },
  socialButtonFacebook: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
    width: '80%',
  },
  socialButtonInstagram: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
    width: '80%',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  hireButton: {
    backgroundColor: '#E9501A',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  reviewButton: {
    backgroundColor: '#FFA500',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  hireButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfessionalProfile;