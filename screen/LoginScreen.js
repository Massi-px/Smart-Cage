import { StyleSheet, Text, View, SafeAreaView, Alert, TouchableOpacity, Image, TextInput, StatusBar} from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import axios from "axios";

/*Création de l'ecran LoginScreen qui consistera à logger/identifier les tulisateurs */



const LoginScreen = (props) => {  


  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");

    const authenticate = async() => {
  
      axios.post("http://192.168.43.171:8080/SERVEURWEB_SMARTCAGE/php/connexion-verif_massi.php",
      JSON.stringify({
        nom: nom,
        password: password,
      })
      )
      .then((response) =>{
        console.log(response);
      })
      .catch((err)=>{
        console.log(err);
      });
    };
    const verif= () =>{
      if(authenticate().nom == setNom && authenticate().password == setPassword){
        login = true;
      }
  
      if (login = true) {props.navigation.push("JoueurInterface");}
      else{ Alert = "Rééssayer";}
    }
 


//La fonction goToEntraineur sert à passer à l'Ecran EntrâineurScreen
  const goToEntraineur = () => 
    props.navigation.push('EntraineurInterface');
  
//La fonction constante goToJoueur sert à passer à l'Ecran JoueurScreen
  const goToJoueur = () => {
    props.navigation.push('JoueurInterface');
  }

  return(
  <SafeAreaView style={styles.container}>
    <View style={styles.Logo}>
      <Image
        source={require('../assets/image/logo1.png')}
      />
    </View>
    <View style={styles.usernameBlock}>
      <TextInput style={styles.usernameText} 
      placeholder="Nom d'utilisateur" 
      autoCapitalize='none'
      onChangeText={setNom}
      />
    </View>

    <View style={styles.passwordBlock}>
      <TextInput style={styles.passwordText} 
      placeholder="Mot de passe" 
      secureTextEntry={true}
      autoCapitalize='none'
      onChangeText={setPassword}
      />
    </View>

    <View>
    <TouchableOpacity style={styles.BoutonConnexion} 
    onPress={verif}>
        <Text style = {styles.BoutonText}>Connexion</Text>
        </TouchableOpacity>
    </View>
  </SafeAreaView>   
  );
};
/*Fin Ecran LoginScreen */

//Fonction styles contenur le design en CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor:'#013E23'
  },

  Logo: {
    top:80,
  },

  usernameBlock: {
    marginTop:200,
    alignItems:'center',
    justifyContent:'center'
  },

  usernameText: {
    padding:10,
    justifyContent:'center',
    width:200,
    height:50,
    fontSize:20,
    borderRadius:20,
    backgroundColor:"#FFF",
    fontFamily: 'SFMedium',
    textAlign:'center'
  },

  passwordBlock: {
    top:20,
  },

  passwordText: {
    fontFamily: 'SFMedium',
    padding:10,
    justifyContent:'center',
    width:200,
    height:50,
    fontSize:20,
    borderRadius:20,
    backgroundColor:"#FFF",
    textAlign:'center'
  },

  BoutonConnexion: {
    top:100,
    width:200,
    height:50,
    borderRadius:20,
    backgroundColor:"#39AD69",
    alignItems:"center",
    justifyContent:"center"

  },

  BoutonText: {
    fontSize: 20,
    fontFamily: 'SFMedium',
  }

})

export default LoginScreen;