import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const ProfessionalProfile = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image source={require('../assets/arrow_back.png')} style={styles.backButton} />
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
});

export default ProfessionalProfile;