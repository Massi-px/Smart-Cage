import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from './screen/LoginScreen';
import InscriptionScreen from './screen/InscriptionScreen';
import JoueurScreen from './screen/JoueurScreen';
import EntraineurScreen from './screen/EntraineurScreen';
import JoueurParametreScreen from './screen/JoueurParametreScreen';
import JoueurProgressionScreen from './screen/JoueurProgressionScreen';
import {useFonts} from 'expo-font'
import CustomDrawer from './components/CustomDrawer';

/* création des objets permettant de contenir les naviguateurs*/
const Naviguer = createNativeStackNavigator();

const DrawerJoueur = createDrawerNavigator();
const DrawerEntraineur = createDrawerNavigator();


/*  Fonction permettant de modifier le naviguateur drawer 

drawerContent={props=><DrawerContent {... props}/>} */

/* Fonction créant le menu de navigation drawer avec ses écrans pour les joueurs*/
function MenuDrawerJoueur(){
  return(
    <DrawerJoueur.Navigator drawerContent={props=> <CustomDrawer {... props}/>} 
    initialRouteName = 'Accueil' 
    screenOptions={{headerShown: false, drawerLabelStyle: {fontFamily:'SFBold', fontSize:15}}}>
      <DrawerJoueur.Screen name='Accueil' component={JoueurScreen}/>
      <DrawerJoueur.Screen name='Progression' component={JoueurProgressionScreen}/>
    </DrawerJoueur.Navigator>
  )
}
//Fin fonction MenuDrawerJoueur

function MenuDrawerEntraineur(){
  return(
    <DrawerEntraineur.Navigator 
    drawerContent={props=> <CustomDrawer {... props}/>} 
    initialRouteName='Accueil' 
    screenOptions={{headerShown: false}}>
      <DrawerEntraineur.Screen name='Accueil' component={EntraineurScreen}/>
    </DrawerEntraineur.Navigator>
  )
}


/*Application mobile :*/
export default function App() {
//Fonction ajoutant les styles de polices voulut dans l'application:
const[loaded] = useFonts({
  SFLight: require('./assets/fonts/SF-Pro-Text-Light.otf'),
  SFMedium: require('./assets/fonts/SF-Pro-Text-Medium.otf'),
  SFBold: require('./assets/fonts/SF-Pro-Text-Bold.otf')
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
     <Naviguer.Navigator screenOptions={{headerShown: false}} initialRouteName= "Login">
       <Naviguer.Screen name = "Login" component={LoginScreen}/>
       <Naviguer.Screen name = "JoueurInterface" component={MenuDrawerJoueur}/>
       <Naviguer.Screen name = "EntraineurInterface" component={MenuDrawerEntraineur}/>
       <Naviguer.Screen name = "Inscription" component={InscriptionScreen}/>
       <Naviguer.Screen name = "JoueurParametre" component={JoueurParametreScreen}/>
       <Naviguer.Screen name = "JoueuProgression" component={JoueurProgressionScreen}/>
     </Naviguer.Navigator>
   </NavigationContainer>
/*Fin conteneur de naviguateur */
  );
}
/* Fin application mobile */