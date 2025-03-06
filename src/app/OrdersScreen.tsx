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
  