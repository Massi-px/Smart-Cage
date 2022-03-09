import * as React from 'react';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, TouchableOpacity, Image, TextInput} from 'react-native';
import { useEffect, useState } from 'react/cjs/react.production.min';
import axios from "axios";

const LoginScreen = (props) => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmit, setIsSubmit] = useState(false);

  const usernameHandler = (text) => {
    setUsername(text);
  } 

  useEffect(()=> {
    const authenticate = async() => {
      axios.post();
    }
  }

  )

  const goToEntraineur = () => {
    props.navigation.push('EntraineurInterface');
  }

  const goToJoueur = () => {
    props.navigation.push('JoueurInterface');
  }

  return(
  <SafeAreaView style={styles.container}>
    <View style={styles.usernameBlock}>
      <TextInput style={styles.usernameText} 
      placeholder="Nom d'utilisateur" 
      autoCapitalize='none'
      onChangeText={usernameHandler}
      />
    </View>

    <View style={styles.passwordBlock}>
      <TextInput style={styles.passwordText} placeholder="Mot de passe" secureTextEntry={true} autoCapitalize='none'/>
    </View>

    <View>
    <TouchableOpacity style={styles.BoutonConnexion} onPress={() => setIsSubmit(true)}>
        <Text>Connexion</Text>
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

  usernameBlock: {
    marginTop:350,
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
    textAlign:'center'
  },

  passwordBlock: {
    top:20,
  },

  passwordText: {
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

})

export default LoginScreen;