import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, ImageBackground, Image} from 'react-native';

const EntraineurParametreScreen = (props) => {
  return(
  <SafeAreaView style={styles.container}>
    <View>
        <Text>Entraineur Parametre Screen</Text>
    </View>
  </SafeAreaView>
  );
};

//Fonction styles contenur le design en CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'lightgrey'
  }
})

export default EntraineurParametreScreen;