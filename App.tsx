import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './src/homepage'; // Ajuste o caminho se necessário
import ProfessionalProfile from './src/ProfessionalProfile';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Profile" component={ProfessionalProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
