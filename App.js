import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import DemarrageScreen from './Screen/DemarrageScreen';
import LoginScreen from './Screen/LoginScreen';
import InscriptionScreen from './Screen/InscriptionScreen';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Navigator screenOptions={{headerShown: false}}>
       <Screen name = "Smart Cage" component = {DemarrageScreen}/>
       <Screen name = "Login" component={LoginScreen}/>
       <Screen name ="Inscription" component={InscriptionScreen}/>
     </Navigator>
   </NavigationContainer>
  );
}