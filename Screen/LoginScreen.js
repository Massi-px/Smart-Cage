import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, TouchableOpacity, Image, TextInput} from 'react-native';

const LoginScreen = (props) => {

  const [usernametext, onChangeUsernameText] = React.useState(null);
  const [passwordtext, onChangePasswordText] = React.useState(null);

  const goToEntraineurScreen = () => {
    props.navigation.push('Login');
  }

  const goToJoueurScreen = () => {
    props.navigation.push('Login');
  }

  return(
  <SafeAreaView style={styles.container}>
    <View style={styles.usernameBlock}>
      <TextInput 
              style={styles.usernameText}
              onChangeText={onChangeUsernameText}
              value={usernametext}
              placeholder="Nom d'utilisateur"
      />
    </View>
    <View style={styles.passwordBlock}>
      <TextInput 
              style={styles.passwordText}
              onChangeText={onChangePasswordText}
              value={passwordtext}
              placeholder="Mot de passe"
      />
    </View>
    <View>

    </View>
  </SafeAreaView>   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor:'#013E23'
  },

  usernameBlock: {
    marginTop:250,
    alignItems:'center',
    justifyContent:'center'
  },

  usernameText: {
    padding:10,
    justifyContent:'center',
    width:200,
    height:50,
    fontSize:20,
    borderRadius:10,
    backgroundColor:"#39AD69",
    textAlign:'center'
  },

  passwordBlock: {
    top:20,
  },

  passwordText: {
    padding:10,
    justifyContent:'center',
    width:200,
    height:50,
    fontSize:20,
    borderRadius:10,
    backgroundColor:"#39AD69",
    textAlign:'center'
  }

})

export default LoginScreen;