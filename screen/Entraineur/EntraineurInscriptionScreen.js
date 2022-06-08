import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome5 } from '@expo/vector-icons';
import Personne from '../../class/CPersonne';

var InscriptionUser = Personne.getInstance();
export default class InscriptionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom:'',
      prenom:'',
      password:'',
      confirmPassword:'',
      categorie : '',
      type:'',
    };
  }

  openMenu = () => {
    this.props.navigation.openDrawer();
  }

  inscrire=()=>{
    var verif='';

    var password = this.state.password;
    var confirmPassword = this.state.confirmPassword;

    if (password == confirmPassword) {
      InscriptionUser.inscription(this.state.nom, this.state.prenom, this.state.password, this.state.confirmPassword, this.state.categorie, this.state.type);
    }
    else{
      alert('Les mot de passe ne correspondent pas')
    }
    verif = InscriptionUser.getVerificationInscription();
    if(verif=='Ok'){
      alert("l'utilisateur à bien été créé")
    }
    else if(verif=='exist'){
      alert("L'utilisateur existe déjà")
    }
    
  }
   /* Rendu de l'écran */
   render(){





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
        <TextInput style={styles.InscriptionText} 
        placeholder="Confirmer le mdp" 
        secureTextEntry={true}
        autoCapitalize='none'
        onChangeText={confirmPassword => this.setState({confirmPassword})}
        />
      </View>

      <View style={styles.textBlock}>
        <Picker style={styles.listeDeroulanteCategorie} selectedValue={this.state.categorie} onValueChange={categorie=>this.setState({categorie})} >
          <Picker.Item label='U6/U7' value='U7' style={styles.textCategorie}/>
          <Picker.Item label='U8/U9' value='U9' style={styles.textCategorie}/>
          <Picker.Item label='U10/U13' value='U13' style={styles.textCategorie}/>
          <Picker.Item label='U15+' value='U15+' style={styles.textCategorie}/>
        </Picker>
      </View>

      <View style={styles.textBlock}>
        <Picker style={styles.blockType} selectedValue={this.state.type} onValueChange={type=>this.setState({type})}>
        <Picker.Item label='joueur' value='joueur' style={styles.textCategorie} />
        <Picker.Item label='entraineur' value='entraineur' style={styles.textCategorie} />
        </Picker>
      </View>

      <View style={styles.blockTextBouton}>
        <TouchableOpacity style={styles.Bouton} onPress={this.inscrire}>
          <Text style={styles.textBouton}>Inscrire l'utilisateur</Text>
        </TouchableOpacity>
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
        justifyContent:'center',
        borderRadius:20,
      },

      blockType: {
        padding:10,
        justifyContent:'center',
        width:200,
        height:50,
        fontSize:20,
        backgroundColor:"#F0F0F0F0",
      },
      
      textCategorie:{
        fontFamily: 'SFMedium',
        textAlign:'center',
        fontSize:18,
      },
      
      listeDeroulanteCategorie:{
        justifyContent:'center',
        backgroundColor:'#F0F0F0F0',
        height:50,
        fontSize:20,
        width:200,
      },
    
      blockTextBouton:{
        marginTop:30,
        alignItems:'center',
        justifyContent:'center'
      },

      Bouton: {
        width:250,
        height:50,
        borderRadius:20,
        backgroundColor:"#39AD6E",
        alignItems:"center",
        justifyContent:"center",
      },
      textBouton:{
        fontFamily:'SFMedium',
        fontSize:20,
      },

    });