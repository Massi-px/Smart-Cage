import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, ImageBackground, Image} from 'react-native';


const EntraineurScreen = (props) => {
  return(
  <SafeAreaView style={styles.container}>
    <View>
        <Text>Accueil Screen</Text>
    </View>
  </SafeAreaView>
  );
};

//Fonction styles contenur le design en CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: '#013E23'
  }
})

export default EntraineurScreen;