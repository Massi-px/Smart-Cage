import React,{useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import TcpSocket from 'react-native-tcp-socket';





const EntraineurDemarrerScreen = (props) => {

const SocketTcp = () =>{
  const client = TcpSocket.createConnection({port:1440, host:'192.168.145.231'}, () => {
    // Write on the socket
    client.write('Hello server!');
  
    // Close socket
    client.destroy();

  });

}
  
  const openMenu = () => {
    props.navigation.openDrawer();
  }


  const [selectIDSeance, setIDSeance] = useState({});

  return(
  <SafeAreaView style={styles.container}>

    <View style = {styles.Header}>
        <View style = {styles.BlockTextAccueil}>
          <Text style = {styles.TextAccueil}>Démarrer la séance</Text>
        </View>
    </View>

    <View style={styles.pageContenu}>
        <View style={styles.blockListeDeroulanteCategorie}>
          <Picker selectedValue={selectIDSeance} onValueChange={selectIDSeance=>setIDSeance({selectIDSeance})} style={styles.listeDeroulanteCategorie}>
            <Picker.Item label='U6/U7' value='U7'/>
          </Picker>
        </View>
      <View>
        <TouchableOpacity onPress={SocketTcp}>
          <Text>Démarrer la séance</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
  );
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
    padding:10,
    backgroundColor:'white',
    width:'100%',
    height:'100%',
    borderRadius:40,
    alignItems:'center',
  },
  blockListeDeroulanteCategorie:{
    
    backgroundColor:'#CCFFCC',
    width:'50%',
    borderRadius:20,
  },
  listeDeroulanteCategorie:{
    width:'100%',
  },
})

export default EntraineurDemarrerScreen;