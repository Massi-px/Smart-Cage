import React,{Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';
import Seance from '../../class/CSeance';


var startSeance = new Seance();

export default class EntraineurDemarrerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectIDSeance : '',
    };
  }
  

  DemarrerSeance = () =>{

  /*var verification;
  verifSeance.verifIDSeance(this.state.selectIDSeance);

  verification = verifSeance.getIDSeance();
    console.log({verification});

  if(verification == 'ok'){*/
  startSeance.demarrerLaSeance(this.state.selectIDSeance);
}
  /*
 }
 else{
   alert("Erreur la séance n'existe pas")
 }


}*/
   
  openMenu = () => {
    props.navigation.openDrawer();
  }



render(){
  return(
  <SafeAreaView style={styles.container}>

    <View style = {styles.Header}>
        <View style = {styles.BlockTextAccueil}>
          <Text style = {styles.TextAccueil}>Démarrer la séance</Text>
        </View>
    </View>

    <View style={styles.pageContenu}>
      <View>
        <Text style={styles.textIDSeance}>Veuillez entrer l'id de la séance </Text>
      </View>
        <View style={styles.choixSeance}>
        <TextInput style={styles.textchoixSeance}
        placeholder=" ID de la séance"
        autoCapitalize='none'
        onChangeText={selectIDSeance => this.setState({selectIDSeance})}
        />
        </View>
      <View>
        <TouchableOpacity onPress={this.DemarrerSeance} style={styles.BoutonDemarrerSeance}>
          <Text style={styles.textBouton}>Lancer la séance</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.Bouton}>
          <Text style={styles.textBouton}>Information de la Seance</Text>
        </TouchableOpacity>
      </View>
      <View>
        
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
  pageContenu:{
    padding:10,
    backgroundColor:'white',
    width:'100%',
    height:'100%',
    borderRadius:40,
    alignItems:'center',
  },
  textIDSeance:{
    fontFamily: 'SFBold',
    fontSize:20,
  },
  choixSeance:{
    marginTop:30,
    backgroundColor:'#CCFFCC',
    width:'70%',
    borderRadius:20,
  },
  textchoixSeance:{
    width:'100%',
    fontSize:20,
  },
  BoutonDemarrerSeance: {
    top:50,
    width:200,
    height:50,
    borderRadius:20,
    backgroundColor:"#39AD6E",
    alignItems:"center",
    justifyContent:"center",
  },

  Bouton: {
    top:70,
    width:200,
    height:50,
    borderRadius:20,
    backgroundColor:"#39AD6E",
    alignItems:"center",
    justifyContent:"center",
  },
  textBouton:{
    fontFamily:'SFMedium',
    fontSize:15,
  },

})