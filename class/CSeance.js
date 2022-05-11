import { Component } from 'react';

export default class Seance extends Component {
    constructor(props) {
        super(props);
      }

        creationSeance = async(p_selectEntraineur='', p_dateSeance= '', p_categorie='', p_zoneDeTir='',) => {
            var selectEntraineur = p_selectEntraineur;
            var dateSeance = p_dateSeance;
            var categorie = p_categorie;
            var zoneDeTir = p_zoneDeTir;

            await fetch('http://192.168.1.26:80/php/mobile_api/connexion_api.php',{
            method:'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                Entraineur: selectEntraineur,
                dateSeance: dateSeance,
                categorie: categorie,
                zoneDeTir: zoneDeTir,
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

    
}