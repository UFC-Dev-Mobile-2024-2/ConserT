import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

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

