import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from './screen/LoginScreen';
import EntraineurInscriptionScreen from './screen/Entraineur/EntraineurInscriptionScreen';
import JoueurScreen from './screen/Joueur/JoueurScreen';
import EntraineurScreen from './screen/Entraineur/EntraineurScreen';
import JoueurParametreScreen from './screen/Joueur/JoueurParametreScreen';
import JoueurProgressionScreen from './screen/Joueur/JoueurProgressionScreen';
import EntraineurParametreScreen from './screen/Entraineur/EntraineurParametreScreen';
import EntraineurProgressionScreen from './screen/Entraineur/EntraineurProgressionScreen';
import EntraineurSeanceScreen from './screen/Entraineur/EntraineurSeanceScreen';
import EntraineurSetSeanceScreen from './screen/Entraineur/EntraineurSetSeanceScreen';
import EntraineurDemarrerSeance from './screen/Entraineur/EntraineurDemarrerSeance';
import {useFonts} from 'expo-font'
import CustomDrawerEntraineur from './components/CustomDrawerEntraineur';
import CustomDrawerJoueur from './components/CustomDrawerJoueur';


/* création des objets permettant de contenir les naviguateurs*/
const Naviguer = createNativeStackNavigator();

const DrawerJoueur = createDrawerNavigator();
const DrawerEntraineur = createDrawerNavigator();


/*  Fonction permettant de modifier le naviguateur drawer 

drawerContent={props=><DrawerContent {... props}/>} */

/* Fonction créant le menu de navigation drawer avec ses écrans pour les joueurs*/
function MenuDrawerJoueur(){
  return(
    <DrawerJoueur.Navigator drawerContent={props=> <CustomDrawerJoueur {... props}/>} 
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
    <DrawerEntraineur.Navigator drawerContent={props=> <CustomDrawerEntraineur {... props}/>} 
    initialRouteName = 'Accueil' 
    screenOptions={{headerShown: false, drawerLabelStyle: {fontFamily:'SFBold', fontSize:15}}}>
      <DrawerEntraineur.Screen name='Accueil' component={EntraineurScreen}/>
      <DrawerEntraineur.Screen name='Progression' component={EntraineurProgressionScreen}/>
      <DrawerEntraineur.Screen name='Seance' component={EntraineurSeanceScreen}/>
      <DrawerEntraineur.Screen name='Inscription' component={EntraineurInscriptionScreen}/>

    </DrawerEntraineur.Navigator>
  )
}


/*Application mobile :*/
export default function App() {
//Fonction ajoutant les styles de polices voulut dans l'application:
const[loaded] = useFonts({
  SFLight: require('./assets/fonts/SF-Pro-Text-Light.otf'),
  SFMedium: require('./assets/fonts/SF-Pro-Text-Medium.otf'),
  SFBold: require('./assets/fonts/SF-Pro-Text-Bold.otf'),
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
       <Naviguer.Screen name = "Inscription" component={EntraineurInscriptionScreen}/>
       <Naviguer.Screen name = "JoueurParametre" component={JoueurParametreScreen}/>
       <Naviguer.Screen name = "JoueuProgression" component={JoueurProgressionScreen}/>
       <Naviguer.Screen name = "EntraineurParametre" component={EntraineurParametreScreen}/>
       <Naviguer.Screen name = "CreationSeance" component={EntraineurSetSeanceScreen}/>
       <Naviguer.Screen name = "DemarrerSeance" component={EntraineurDemarrerSeance}/>
     </Naviguer.Navigator>
   </NavigationContainer>
/*Fin conteneur de naviguateur */
  );
}
/* Fin application mobile */