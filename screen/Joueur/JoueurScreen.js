import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Dimensions, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Login from '../class/CLogin';

export default class JoueurScreen extends Component {
  
  constructor(props) {
    super(props);
  }
  goToJoueurParametre = () => {this.props.navigation.push('JoueurParametre');}
  
  openMenu = () => {this.props.navigation.openDrawer();}

  render = () =>{
    const {goBack} = this.props.navigation;

    var ConnexionUser = Login.getInstance();
    var information = ConnexionUser.getInformationJoueur();

    const getNom = () =>{
      return(information.nom)
    }

    const getPrenom = () =>{
      return(information.prenom)
    }

    const getCategorie = ()=>{
      return(information.categorie)
    }

    return(
  <SafeAreaView style={styles.container}>

    <View style = {styles.Header}>
        <View style={styles.BlockHamburgerMenu}>
          <TouchableOpacity onPress={this.openMenu}>
            <FontAwesome5 name="bars" size={24} color='lightgrey' />
            
          </TouchableOpacity>
        </View>
        <View style = {styles.BlockTextAccueil}>
          <Text style = {styles.TextAccueil}>Accueil</Text>
        </View>
        <View style={styles.parametre}>
          <TouchableOpacity onPress={this.goToJoueurParametre}>
          <Image source={require('../assets/image/settingslogo.png')}/>
          </TouchableOpacity>
        </View>
    </View>
    <View style={styles.pageContenu}>
    <View style={styles.blockTextProfil}>
      <Text style={styles.textNom}>{getNom()}</Text>
      <Text style={styles.textPrenom}>{getPrenom()}</Text>
      <Text style={styles.textCategorie}>{getCategorie()}</Text>

    </View>
    </View>
  </SafeAreaView>
  );
 };
}

//Fonction styles contenur le design en CSS
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#013E23',
    padding: 10,
    paddingBottom:86.5,
  },

  Header: {
    marginTop:30,
    marginBottom:10,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center'
  },

  BlockHamburgerMenu:{
    left: -80,
    },

 BlockTextAccueil: {
  alignItems:'center',
  },

  TextAccueil:{
    fontFamily: 'SFMedium',
    fontSize:20,
    color:'lightgrey',
    flexDirection: 'row'
  },
  parametre:{
    right:-80,
  },
  pageContenu:{
    backgroundColor:'white',
    width:'100%',
    height:'100%',
    borderRadius:40,
    fontSize:20,
  },

  blockTextProfil:{
    padding:20,
  },

  textNom:{
    fontFamily: 'SFBold',
    fontSize:25,
  },

  textPrenom:{
    paddingTop:10,
    fontFamily: 'SFBold',
    fontSize:25,
  },

  textCategorie:{
    paddingTop:10,
    fontFamily: 'SFBold',
    fontSize:25,
  },
})