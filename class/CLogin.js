import React, { Component, PropTypes } from 'react';


var information = '';

export default class Login extends Component {
    constructor(props) {
        super(props);
      }


      static UserConnexion = null;
      /**
   * @returns {Login}
   */
       static getInstance() {
          if (Login.UserConnexion == null) {
              Login.UserConnexion = new Login();
          }
          return this.UserConnexion;
      }
  
      //ReqûeteSql 
      login = async(p_username='', p_userPassword='') => {
          var username = p_username;
          var userPassword =  p_userPassword;

          //Le await rend la méthode fetch asynchrone
          await fetch('http://192.168.0.21:80/php/mobile_api/connexion_api.php',{
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

}