import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, ImageBackground, Image} from 'react-native';

const EntraineurScreen = (props) => {
  return(
  <SafeAreaView>
    <View style={styles.container}>
        <Text>Accueil Screen</Text>
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

export default EntraineurScreen;