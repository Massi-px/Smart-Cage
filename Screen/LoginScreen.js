import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, ImageBackground, Image} from 'react-native';

const LoginScreen = (props) => {
  return(
  <SafeAreaView style={styles.container}>
    <View >
      <Text>LoginScreen</Text>
    </View>
  </SafeAreaView>   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'lightgrey'
  },

  name: {
    
  }
})

export default LoginScreen;