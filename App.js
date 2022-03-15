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
import { DrawerContent } from './constants/DrawerContent';

/* création des objets permettant de contenir les naviguateurs*/
const Naviguer = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
/*  Fonction permettant de modifier le naviguateur drawer 

drawerContent={props=><DrawerContent {... props}/>} */

/* Fonction créant le menu de navigation drawer avec ses écrans*/
function MenuDrawer(){
  return(
    <Drawer.Navigator initialRouteName='Accueil' screenOptions={{headerShown: false}}>
      <Drawer.Screen name='Accueil' component={JoueurScreen}/>
      <Drawer.Screen name='Progression' component={JoueurProgressionScreen}/>
    </Drawer.Navigator>
  )
}
//Fin fonction Menudrawer

//Application mobile :
export default function App() {

//Fonction ajoutant les styles de polices voulut dans l'application:
const[loaded] = useFonts({
  SFLight: require('./assets/fonts/SF-Pro-Text-Light.otf'),
  SFMedium: require('./assets/fonts/SF-Pro-Text-Medium.otf'),
});
if (!loaded) {
  return null;
}
//Fin fonction

  return (

/*Conteneur de naviguateur permettant de stocker différents naviguateurs dans différentes fonctions :*/

//MenuDrawer est un naviguateur drawer déclaré en haut de la page :

//Naviguer est un naviguateur de type Stack permettant de passé d'un écran à un autre dans l'application.
   <NavigationContainer>
     <Naviguer.Navigator screenOptions={{headerShown: false}}>
       <Naviguer.Screen name = "Login" component={LoginScreen}/>
       <Naviguer.Screen name = "JoueurInterface" component={MenuDrawer}/>
       <Naviguer.Screen name = "EntraineurInterface" component={EntraineurScreen}/>
       <Naviguer.Screen name = "Inscription" component={InscriptionScreen}/>
       <Naviguer.Screen name = "JoueurParametre" component={JoueurParametreScreen}/>
       <Naviguer.Screen name = "JoueuProgression" component={JoueurProgressionScreen}/>
     </Naviguer.Navigator>
   </NavigationContainer>
/*Fin conteneur de naviguateur */
  );
}