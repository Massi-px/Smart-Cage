import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert, TextInput, Image} from 'react-native';
import { NavigationContainer, createNativeStackNavigator } from '@react-navigation/native';

const DemarrageScreen = (props)=>{
  const goToLogin = () => {
    props.navigation.push('Login');
  }

    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.Logo}>
          <Image
            source={require('../assets/logo2.png')}
          />
  
        </View>
      <View>
      <TouchableOpacity style={styles.BoutonConnexion} onPress={goToLogin}>
        <Text>Connexion</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#013E23',
      alignItems: 'center',
    },
  
    Logo: {
      top:60,
    },
  
    Title: {
      marginTop:100,
      fontSize:25,
      fontFamily: 'serif',
      textAlign:'left',
      color:"#FFF"
    },
  
    BoutonConnexion: {
      top:200,
      width:200,
      height:50,
      borderRadius:10,
      backgroundColor:"#39AD69",
      alignItems:"center",
      justifyContent:"center"

    },
  
    BoutonInscription: {
      flexDirection: "row",
      top: 30,
    },
  });

  export default DemarrageScreen;