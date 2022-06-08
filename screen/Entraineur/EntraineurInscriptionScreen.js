import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome5 } from '@expo/vector-icons';
import Login from '../../class/CLogin';

export default class InscriptionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom:'',
      prenom:'',
      password:'',
      categorie : '',
      type:'',
    };
  }

  openMenu = () => {
    this.props.navigation.openDrawer();
  }

   /* Rendu de l'écran */
   render(){

    var ConnexionUser = Login.getInstance();
    var information = ConnexionUser.getInformationJoueur();

    return(
      <SafeAreaView style={styles.container}>
    
        <View style = {styles.Header}>
            <View style={styles.BlockHamburgerMenu}>
              <TouchableOpacity onPress={this.openMenu}>
                <FontAwesome5 name="bars" size={24} color='lightgrey' />
                
              </TouchableOpacity>
            </View>
            <View style = {styles.BlockTextAccueil}>
              <Text style = {styles.TextAccueil}>Inscription</Text>
            </View>
        </View>
        <View style={styles.pageContenu}>
          <View style={styles.blockTextPage}>
            <Text style ={styles.textPage}>Inscription d'un nouvel utilisateur :</Text>
          </View>
          <View style={styles.usernameBlock}>
          <TextInput style={styles.InscriptionText}
        placeholder="Nom"
        autoCapitalize='none'
        onChangeText={nom => this.setState({nom})}/>
          </View>

          <View style={styles.textBlock}>
        <TextInput style={styles.InscriptionText} 
        placeholder="Prenom" 
        autoCapitalize='none'
        onChangeText={prenom => this.setState({prenom})}
        />
      </View>

      <View style={styles.textBlock}>
        <TextInput style={styles.InscriptionText} 
        placeholder="Mot de passe" 
        secureTextEntry={true}
        autoCapitalize='none'
        onChangeText={password => this.setState({password})}
        />
      </View>

      <View style={styles.textBlock}>
        <Picker style={styles.blockCategorie} selectedValue={this.state.categorie} onValueChange={categorie=>this.setState({categorie})}>
        <Picker.Item label='joueur' value='joueur' style={styles.textCategorie} />
        <Picker.Item label='entraineur' value='entraineur' style={styles.textCategorie} />
        </Picker>
      </View>

    </View>
    
  </SafeAreaView>
  );
  };
};
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

      pageContenu:{
        backgroundColor:'white',
        width:'100%',
        height:'100%',
        borderRadius:40,
      },

      blockTextPage: {
          padding:30,
      },

      textPage: {
        fontFamily: 'SFBold',
        fontSize: 20,
      },

      usernameBlock: {
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'
      },

      InscriptionText: {
        padding:10,
        justifyContent:'center',
        width:200,
        height:50,
        fontSize:20,
        borderRadius:20,
        backgroundColor:"#F0F0F0F0",
        fontFamily: 'SFMedium',
        textAlign:'center'
      },

      textBlock: {
        marginTop:20,
        alignItems:'center',
      },

      blockCategorie: {
        padding:10,
        justifyContent:'center',
        width:200,
        height:50,
        fontSize:20,
        borderRadius:20,
        backgroundColor:"#F0F0F0F0",
      },
      
      textCategorie:{
        fontFamily: 'SFMedium',
        textAlign:'center',
        fontSize:18,
      },



    });