import { Component } from 'react';

var listeJoueur;
var verifIDSeance = '';
export default class Information extends Component {
    constructor(props) {
        super(props);
      }

      static Information = null;
      /**
   * @returns {Information}
   */
       static getInstance() {
          if (Information.Information == null) {
            Information.Information = new Information();
          }
          return this.Information;
      }

      requeteListeJoueur = async(p_categorie='') => {
          var userCategorie = p_categorie;
          console.log(userCategorie);
        await fetch('http://192.168.1.26:80/php/mobile_api/listeJoueur.php',{
            method:'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                categorie: userCategorie,
            })
          })
          .then((Response) => Response.json())
          .then((ResponseJson)=>{
            listeJoueur = ResponseJson;
            
          })
          .catch((error)=>{
              console.error(error);
          })
      }

        getListeJoueur(){
          console.log(listeJoueur);
            return(listeJoueur);
        }

        verifIDSeance = async(p_selectIDSeance = '') => {
          var selectIDSeance = p_selectIDSeance;
          console.log(selectIDSeance);
          await fetch('http://192.168.1.26:80/php/mobile_api/IDSeance.php',{
            method:'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                IDSeance: selectIDSeance,
            })
          })
          .then((Response) => Response.json())
          .then((ResponseJson)=>{
            verifIDSeance = ResponseJson;  
          })
          .catch((error)=>{
              console.error(error);
          })

        }

        getIDSeance(){
          console.log(verifIDSeance);
          return(verifIDSeance);
        }


}
