import { Component } from 'react';

var listeJoueur = '';
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
        await fetch('http://192.168.224.127:80/php/mobile_api/listeJoueur.php',{
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
              console.log(listeJoueur);
          })
          .catch((error)=>{
              console.error(error);
          })
      }

        getListeCategorie(){
            return(listeJoueur);
        }


}
