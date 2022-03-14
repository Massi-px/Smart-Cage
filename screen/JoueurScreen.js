import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Dimensions, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


const JoueurScreen = (props) => {
  
  const goToJoueurParametre = () => {
    props.navigation.push('JoueurParametre');
  }

  const openDrawer =() =>{
    props.navigation.openDrawer;
  }
  
  return(
  <SafeAreaView style={styles.container}>
    <View style = {styles.Header}>
        <View style={styles.BlockHamburgerMenu}>
          <TouchableOpacity onPress={openDrawer}>
            <FontAwesome5 name="bars" size={24} color='lightgrey' />
            
          </TouchableOpacity>
        </View>
        <View style = {styles.BlockTextAccueil}>
          <Text style = {styles.TextAccueil}>Accueil</Text>
        </View>
        <View style={styles.parametre}>
          <TouchableOpacity onPress={goToJoueurParametre}>
          <Image source={require('../assets/image/settingslogo.png')}/>
          </TouchableOpacity>
        </View>
    </View>
    <View style={styles.pageContenu}>
    </View>
  </SafeAreaView>
  );
};

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
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
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
  },

})

export default JoueurScreen;