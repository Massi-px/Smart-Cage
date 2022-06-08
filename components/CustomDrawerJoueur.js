import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Personne from '../class/CPersonne';

const CustomDrawerJoueur=(props)=>{

    var ConnexionUser = Personne.getInstance();
    var information = ConnexionUser.getInformationJoueur();
    const getNom = () =>{
        return(information.nom)
      }
    const getType = ()=>{
        return(information.type)
      }

    const getCategorie = ()=>{
        return(information.categorie)
    }

    return(
        <View style={styles.container}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:"#FEF5E7"}}>
            <ImageBackground source={require('../assets/image/menu-bg.jpg')} style={styles.drawerBackGround}>
                <Image source={require('../assets/image/joueur-profile.png')} style={styles.imageProfile}/>
                <Text style={styles.textNom}>{getNom()}</Text>
                <Text style={styles.textType}>{getType()}</Text>
                <Text style={styles.textCategorie}>{getCategorie()}</Text>
            </ImageBackground>
            <View style={styles.listScreen}>
            <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
      },
    
    drawerBackGround:{
        padding:20,
    },

    imageProfile:{
        height:80,
        width:80,
        borderRadius:40,
        marginBottom:10,
    },

    textNom:{
        fontSize:18,
        fontFamily:'SFMedium'
    },

    textType:{
        fontFamily:'SFMedium'
    },

    textCategorie:{
        fontFamily:'SFMedium'
    },

    listScreen:{
        backgroundColor:"#FFF",
        flex:1,
        paddingTop:10
    }
})
export default CustomDrawerJoueur