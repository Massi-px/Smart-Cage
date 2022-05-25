import React,{Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import TcpSocket from 'react-native-tcp-socket';
import Information from '../../class/CInformation';

var verifSeance = Information.getInstance();

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
    var IDSeance = this.state.selectIDSeance;
  const client = TcpSocket.createConnection({port:1440, host:'192.168.145.231'}, () => {
    // Write on the socket
    client.write(IDSeance);
  
    // Close socket
    client.destroy();

  });
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
        <View style={styles.choixSeance}>
        <TextInput style={styles.textchoixSeance}
        placeholder="ID de la séance"
        autoCapitalize='none'
        onChangeText={selectIDSeance => this.setState({selectIDSeance})}
        />
        </View>
      <View>
        <TouchableOpacity onPress={this.DemarrerSeance}>
          <Text>Démarrer la séance</Text>
        </TouchableOpacity>
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
  choixSeance:{
    
    backgroundColor:'#CCFFCC',
    width:'50%',
    borderRadius:20,
  },
  textchoixSeance:{
    width:'100%',
  },
})