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
import {useFonts} from 'expo-font'
const {Navigator, Screen} = createNativeStackNavigator();

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
     <Navigator screenOptions={{headerShown: false}}>
       <Screen name = "Login" component={LoginScreen}/>
       <Screen name = "JoueurInterface" component={JoueurScreen}/>
       <Screen name = "EntraineurInterface" component={EntraineurScreen}/>
       <Screen name = "Inscription" component={InscriptionScreen}/>
       <Screen name = "JoueurParametre" component={JoueurParametreScreen}/>
     </Navigator>
   </NavigationContainer>
  );
}