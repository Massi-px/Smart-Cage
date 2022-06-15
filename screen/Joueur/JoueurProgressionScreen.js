import React, { useState } from 'react'; 
import { StyleSheet, Text, View, SafeAreaView, Button, Dimensions, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import {LineChart,BarChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart} from "react-native-chart-kit";
import Information from '../../class/CInformation';
import Personne from '../../class/CPersonne';

var informationJoueur = Information.getInstance();
var nomJoueur = Personne.getInstance();



const JoueurProgressionScreen = (props) => {



  const goToJoueurParametre = () => {
    props.navigation.push('JoueurParametre');
  }

  const openMenu = () => {
    props.navigation.openDrawer();
  }

  const progressionUser=()=>{
    var nom;
    nom = nomJoueur.getInformationJoueur()

    informationJoueur.progessionJoueur(nom.nom)


  }
  
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [1,2,3],
    }
  ],
  legend: ["Score Joueur"], // optional
  
};



const chartConfig = {

      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      barPercentage: 1,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }

}

  return(
  <SafeAreaView style={styles.container}>

    <View style = {styles.Header}>
        <View style={styles.BlockHamburgerMenu}>
          <TouchableOpacity onPress={openMenu}>
            <FontAwesome5 name="bars" size={24} color='lightgrey' />
          </TouchableOpacity>
        </View>
        <View style = {styles.BlockTextAccueil}>
          <Text style = {styles.TextAccueil}>Progression</Text>
        </View>
    </View>
    <View style={styles.pageContenu}>
    <View>
      <TouchableOpacity onPress={progressionUser}>
      <Text>Bezier Line Chart</Text>
      </TouchableOpacity>
    </View>
    <View>
      <LineChart
      data={data}
      width={Dimensions.get("window").width - 40}
      height={220}
      chartConfig={chartConfig}
      style={{
        padding:10,
        borderRadius: 16,
        
      }}
      />
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
    backgroundColor:'white',
    width:'100%',
    height:'100%',
    borderRadius:40,
  },

  graphique:{
    alignItems:'center',
    justifyContent:'center',
    
  }

})

export default JoueurProgressionScreen;