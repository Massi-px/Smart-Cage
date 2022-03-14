import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert, TextInput, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createAppContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from './screen/LoginScreen';
import InscriptionScreen from './screen/InscriptionScreen';
import JoueurScreen from './screen/JoueurScreen';
import EntraineurScreen from './screen/EntraineurScreen';
import JoueurParametreScreen from './screen/JoueurParametreScreen';
import JoueurProgressionScreen from './screen/JoueurProgressionScreen';
import { Dimensions } from 'react-native';
import {useFonts} from 'expo-font'


const Naviguer = createNativeStackNavigator();



export default function App() {

const[loaded] = useFonts({
  SFLight: require('./assets/fonts/SF-Pro-Text-Light.otf'),
  SFMedium: require('./assets/fonts/SF-Pro-Text-Medium.otf'),
});

if (!loaded) {
  return null;
}
  return (
   <NavigationContainer>
     <Naviguer.Navigator screenOptions={{headerShown: false}}>
       <Naviguer.Screen name = "Login" component={LoginScreen}/>
       <Naviguer.Screen name = "JoueurInterface" component={JoueurScreen}/>
       <Naviguer.Screen name = "EntraineurInterface" component={EntraineurScreen}/>
       <Naviguer.Screen name = "Inscription" component={InscriptionScreen}/>
       <Naviguer.Screen name = "JoueurParametre" component={JoueurParametreScreen}/>
       <Naviguer.Screen name = "JoueuProgression" component={JoueurProgressionScreen}/>
     </Naviguer.Navigator>
   </NavigationContainer>
  );
}