import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Dimensions, ImageBackground, Image} from 'react-native';

const { width, height } = Dimensions.get('window');

const JoueurScreen = (props) => {
  return(
  <SafeAreaView style={styles.container}>
    <View style = {styles.Header}>
        <View style = {styles.BlockTextAccueil}>
          <Text style = {styles.TextAccueil}>Accueil</Text>
        </View>
    </View>
    <View style={styles.pageContenu}></View>

  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#013E23'
  },

  Header: {
    justifyContent:'center'
  },

 BlockTextAccueil: {
    marginTop:40,
    alignItems:'center',
  },

  TextAccueil:{
    fontFamily: 'SFMedium',
    fontSize:20,
    color:'lightgrey'
  },

  pageContenu:{
  
    justifyContent:'flex-start',
    marginLeft:10,
    backgroundColor:'white',
    top:10,
    width:340,
    height:670,
    borderRadius:10,
  }
})

export default JoueurScreen;