import React, { Component, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import { FontAwesome5 } from "@expo/vector-icons";
import { LogBox } from "react-native";
import Seance from '../../class/CSeance';
import Information from '../../class/CInformation';
import Login from '../../class/CPersonne';
import MultiSelect from 'react-native-multiple-select';


var nouvelleSeance = new Seance();

var InformationInstance = Information.getInstance();

var listeJoueur=[{item:'',id:'',},];

export default class EntraineurSetSeanceScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selectListJoueur:[],
          dateSeance: '',
          categorie:'U7',
          zoneDeTir:'',
       };
      }

    openMenu = () => {this.props.navigation.openDrawer();}
    
created() {
    LogBox.ignoreLogs([
      'DatePickerIOS has been merged with DatePickerAndroid and will be removed in a future release.',
      'StatusBarIOS has been merged with StatusBar and will be removed in a future release.',
      'DatePickerAndroid has been merged with DatePickerIOS and will be removed in a future release.',
      'Please update the following components: %s, DatePicker',
    ]); 
  }

  creationSeance = () => {
    nouvelleSeance.creationSeance(this.state.dateSeance, this.state.categorie, this.state.zoneDeTir, this.state.joueurSelectionne);
  }

  listeJoueur = async() => {
    var categoriePlayerList=[];
    await InformationInstance.requeteListeJoueur(this.state.categorie);
    categoriePlayerList=InformationInstance.getListeJoueur();

    listeJoueur = categoriePlayerList;
    console.log(listeJoueur);
  }

  onSelectedItemsChange = selectListJoueur => {
    this.setState({selectListJoueur});
  }

  render(){

    var ConnexionUser = Login.getInstance();

    var information = ConnexionUser.getInformationJoueur();
    const getNom = () => {return(information.nom)};
    const {selectListJoueur} = this.state;

  return(
  <SafeAreaView style={styles.container}>
    <View style = {styles.Header}>
        <View style = {styles.BlockTextAccueil}>
          <Text style = {styles.TextAccueil}>Créer la séance</Text>
        </View>
    </View>
    <View style={styles.pageContenu}>
        <View style={styles.blockCreationSeance}>

          <View style={styles.blockSeance}>

            <Text style={styles.textCreationSeance}>Nom de l'entraineur : </Text>
            <Text style={styles.textNomEntraineur} >{getNom()}</Text>

          </View>
          <View style={styles.blockSeance}>
            <Text style={styles.textCreationSeance}>Date de la séance : </Text>

            <DatePicker
              style={{width: '40%',}}
              date={this.state.dateSeance}
              mode="date"
              placeholder="DD/MM/YYYY"
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                position: 'relative',
                marginLeft: 32,
                borderRadius:15,
              }

          // ... You can check the source to find the other keys.
        }}
              onDateChange={dateSeance => {this.setState({dateSeance})}}
              />
          </View>

          <View style={styles.blockSeance}>
            <Text style={styles.textCreationSeance}>Categorie : </Text>
            <View style={styles.blockListeDeroulanteCategorie}>
              <Picker selectedValue={this.state.categorie} onValueChange={categorie=>this.setState({categorie})} style={styles.listeDeroulanteCategorie}>
                <Picker.Item label='U6/U7' value='U7'/>
                <Picker.Item label='U8/U9' value='U9'/>
                <Picker.Item label='U10/U13' value='U13'/>
                <Picker.Item label='U15+' value='U15+'/>
              </Picker>
            </View>
          </View>

          <View style={styles.blockSeance}>
              <Text style={styles.textCreationSeance}> Liste des joueurs :</Text>
            <View style={styles.blockSeanceTest}>
              <TouchableOpacity onPress={this.listeJoueur}>
                <Text>Test</Text>
              </TouchableOpacity>
              <View>
              <MultiSelect
              hideTags
              items={listeJoueur}
              uniqueKey="nom"
              ref={(component) => { this.multiSelect = component }}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={selectListJoueur}
              selectText="Selection des joueurs"
              searchInputPlaceholderText="Search Items..."
              altFontFamily="SFLight"
              tagRemoveIconColor="#CCC"
              tagBorderColor="#CCC"
              tagTextColor="#CCC"
              selectedItemTextColor="#CCC"
              selectedItemIconColor="#CCC"
              itemTextColor="#000"
              displayKey="nom"
              searchInputStyle={{ color: '#CCC' }}
              submitButtonColor="#013E23"
              submitButtonText="Submit"
              />
              </View>
            </View>
            </View>

        </View>
    </View>
  </SafeAreaView>
  );
 };



}

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
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
 BlockTextAccueil: {
  alignItems:'center',
  },

  TextAccueil:{
    fontFamily: 'SFMedium',
    fontSize:20,
    color:'lightgrey',
    flexDirection: 'row',
  },

  pageContenu:{
    backgroundColor:'white',
    width:'100%',
    height:'100%',
    borderRadius:40,
  },

  blockCreationSeance:{
    padding:10,
  },

  textCreationSeance:{
    fontFamily: 'SFBold',
    fontSize:20,
    
  },

  blockSeance:{
    flexDirection:'row',
    padding:10,
  },

  textNomEntraineur:{
    fontFamily: 'SFMedium',
    fontSize:20,
    textAlign: "center",
    justifyContent: "center",
  },

  blockListeDeroulanteCategorie:{
    padding:5,
    backgroundColor:'#CCFFCC',
    width:'50%',
    borderRadius:20,
  },
  listeDeroulanteCategorie:{
    width:'100%',
  },

  blockSeanceTest:{
    top:25,
    right:200,
    height:40,
    width:300
  },

  blockSeance2:{
    flexDirection:'row',
    padding:30,
  },

})