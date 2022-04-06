import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, TouchableOpacity, Image, TextInput, StatusBar} from 'react-native';

/*Création de l'ecran LoginScreen qui consistera à logger/identifier les tulisateurs */


export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          username : '',
          userPassword : '',
        };
      }
      //ReqûeteSql 
      login = () => {
          const {username,userPassword} = this.state;
          fetch('http://192.168.110.4:8080/SERVEURWEB_SMARTCAGE/php/mobile_api/connexion_api.php',{
            method:'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                nom: username,
                password: userPassword,

            })
          })
          .then((Response) => Response.json())
          .then((ResponseJson)=>{
              if(ResponseJson == "entraineur"){
                this.props.navigation.navigate('EntraineurInterface');
              }
              else if(ResponseJson == "joueur"){
                this.props.navigation.navigate('JoueurInterface');
              }
              else{
                alert("Reessayer");
                console.log(ResponseJson);
              }
          })
          .catch((error)=>{
              console.error(error);
          })
      }

      getName= () =>{ 
        const {username} = this.state;
        return(
          username
        )
      }

    /* Rendu de l'écran */
    render(){
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
        onChangeText={username => this.setState({username})}
        />
      </View>
  
      <View style={styles.passwordBlock}>
        <TextInput style={styles.passwordText} 
        placeholder="Mot de passe" 
        secureTextEntry={true}
        autoCapitalize='none'
        onChangeText={userPassword => this.setState({userPassword})}
        />
      </View>
  
      <View>
      <TouchableOpacity style={styles.BoutonConnexion} 
      onPress={this.login}>
          <Text style = {styles.BoutonText}>Connexion</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>   
    );
  };
}
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