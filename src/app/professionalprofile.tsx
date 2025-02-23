
import React from 'react';
import { View, ScrollView } from 'react-native';
import { AppBar, Toolbar, IconButton, Typography, Avatar, Button, Card, CardContent, CardActions } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const ProfessionalProfile = () => {
  return (
      <View style={styles.container}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Image source={require('../assets/arrow_back.png')} style={styles.backButton} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Image source={require('../assets/logo_blue.png')} style={styles.headerLogo} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileIcon}>
            <Image source={require('../assets/profile-icon.png')} style={styles.profileIcon} />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollView}>
        <Card sx={styles.card}>
          <Avatar src="../assets/avatar.png" sx={styles.avatar} />
          <CardContent>
            <Typography variant="h6">Júlio Cavalcante</Typography>
            <Typography variant="body2" color="text.secondary">Quixadá - CE</Typography>
            <Typography variant="body2" color="text.secondary">Endereço: Rua José Maria 183</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Experiência: 8 anos de experiência no setor de manutenção. Reparação de eletrônicos, tablets, notebooks,
              TVs de LED, LCD e Smart TVs. Certificado pelo SENAI.
            </Typography>
          </CardContent>
          <CardActions sx={styles.cardActions}>
            <IconButton color="primary"><WhatsAppIcon /></IconButton>
            <IconButton color="primary"><FacebookIcon /></IconButton>
            <IconButton color="primary"><InstagramIcon /></IconButton>
          </CardActions>
        </Card>

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
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('../assets/message.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('../assets/star.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('../assets/pro.png')} style={styles.footerProIcon} />
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flex: 1,
    paddingBottom: 200,
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
  backButton: {
    justifyContent: 'center',
  },
  backText: {
    fontSize: 18,
  },
  profileIcon: {
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 24,
  },
  profileCard: {
    backgroundColor: '#E0E0E0',
    margin: 16,
    borderRadius: 16,
    padding: 16,
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45, 
    marginRight: 16,
  },
  profileInfo: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  rating: {
    fontSize: 23,
    color: '#000',
  },
  location: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  address: {
    fontSize: 18,
    marginTop: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  experience: {
    marginTop: 16,
    fontSize: 16,
  },
  formation: {
    marginTop: 18,
    fontSize: 16,
  },
  serviceIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  serviceItem: {
    alignItems: 'center',
  },
  serviceText: {
    fontSize: 12,
  },

  socialButtonWhatsapp: {
    backgroundColor: '#25D366',
    paddingVertical: 20,
    borderRadius: 30,
    marginTop: 10,
    alignItems: 'center',
  },
  socialButtonFacebook: {
    backgroundColor: '#3b5998',
    paddingVertical: 20,
    marginTop: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  socialButtonInstagram: {
    backgroundColor: '#C13584',
    paddingVertical: 20,
    marginTop: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 26,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 20,
    paddingHorizontal: 40,
    paddingVertical: 25,
    backgroundColor: '#0044CC', 
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginTop: 'auto',
    bottom: 30, 
    borderRadius: 50,
    zIndex: 10,
    width: '85%',
  },
  footerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hireButton: {
    flex: 1,
    backgroundColor: '#E9501A',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    marginTop: 20,
    height: 100,
  },
  hireButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
  },
  footerIcon: {
    width: 25,  // Ajuste se necessário para uma proporção melhor
    height: 25,
    resizeMode: 'contain',
},
  footerProIcon: {
      width: 50, 
      height: 30,
      resizeMode: 'contain',
  },
});
