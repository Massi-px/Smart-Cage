import { Component } from 'react';

var information = '';
var verification = '';

export default class Personne extends Component {
    constructor(props) {
        super(props);
      }


      static UserConnexion = null;
      /**
   * @returns {Personne}
   */
       static getInstance() {
          if (Personne.UserConnexion == null) {
            Personne.UserConnexion = new Personne();
          }
          return this.UserConnexion;
      }
  
      //ReqûeteSql 
      login = async(p_username='', p_userPassword='') => {
          var username = p_username;
          var userPassword =  p_userPassword;

          //Le await rend la méthode fetch asynchrone
          await fetch('http://192.168.155.127:80/php/mobile_api/connexion_api.php',{
            method:'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                nom: username,
                password: userPassword,
            })
          })
          .then((Response) => Response.json())
          .then((ResponseJson)=>{
              information = ResponseJson;
              console.log(information);
          })
          .catch((error)=>{
              console.error(error);
          })
      }
      
      getInformationJoueur=()=>{
          return(information);
      }

      inscription = async(p_userNom, p_userPrenom, p_userPassword, p_userCategorie, userType) =>{
        var userNom = p_userNom;
        var userPrenom =  p_userPrenom;
        var userPassword = p_userPassword;
        var userCategorie = p_userCategorie;
        var userType = userType;

        await fetch('http://192.168.155.127:80/php/mobile_api/inscription_api.php',{
            method:'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                nom: userNom,
                prenom: userPrenom,
                password: userPassword,
                categorie: userCategorie,
                type: userType,
            })
          })
          .then((Response) => Response.json())
          .then((ResponseJson)=>{
              verification = ResponseJson;
              console.log(verification);
          })
          .catch((error)=>{
              console.error(error);
          })
        }

        getVerificationInscription(){
            return(verification);
        }
        //Le await rend la méthode fetch asynchrone
        

}