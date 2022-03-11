import { StyleSheet, Text, View, SafeAreaView, Alert, TouchableOpacity, Image, TextInput} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from "axios";

const LoginScreen = (props) => {
  
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmit, setIsSubmit] = useState(false);

  const usernameHandler = (text) => {
    setNom(text);
  }

  const goToEntraineur = () => {
    props.navigation.push('EntraineurInterface');
  }

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
      onChangeText={usernameHandler}
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
    <TouchableOpacity style={styles.BoutonConnexion} onPress={goToJoueur}>
        <Text style = {styles.BoutonText}>Connexion</Text>
        </TouchableOpacity>
    </View>
  </SafeAreaView>   
  );
};

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
    borderRadius:10,
    backgroundColor:"#FFF",
    fontFamily: 'SFLight',
    textAlign:'center'
  },

  passwordBlock: {
    top:20,
  },

  passwordText: {
    fontFamily: 'SFLight',
    padding:10,
    justifyContent:'center',
    width:200,
    height:50,
    fontSize:20,
    borderRadius:10,
    backgroundColor:"#FFF",
    textAlign:'center'
  },

  BoutonConnexion: {
    top:100,
    width:200,
    height:50,
    borderRadius:10,
    backgroundColor:"#39AD69",
    alignItems:"center",
    justifyContent:"center"

  },

  BoutonText: {
    fontSize: 20,
    fontFamily: 'SFLight',
  }

})

export default LoginScreen;