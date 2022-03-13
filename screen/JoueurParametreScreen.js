import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, ImageBackground, Image} from 'react-native';

const JoueurParametreScreen = (props) => {
  return(
  <SafeAreaView style={styles.container}>
    <View>
        <Text>Joueur Parametre Screen</Text>
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'lightgrey'
  }
})

export default JoueurParametreScreen;