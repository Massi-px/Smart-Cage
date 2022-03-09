import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert, TextInput, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import DemarrageScreen from './screen/DemarrageScreen';
import LoginScreen from './screen/LoginScreen';
import InscriptionScreen from './screen/InscriptionScreen';
import JoueurScreen from './screen/JoueurScreen';
import EntraineurScreen from './screen/EntraineurScreen';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Navigator screenOptions={{headerShown: false}}>
       <Screen name = "Smart Cage" component = {DemarrageScreen}/>
       <Screen name = "Login" component={LoginScreen}/>
       <Screen name = "Inscription" component={InscriptionScreen}/>
       <Screen name = "JoueurInterface" component={JoueurScreen}/>
       <Screen name = "EntraineurInterface" component={EntraineurScreen}/>
     </Navigator>
   </NavigationContainer>
  );
}