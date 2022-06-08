import { Component } from 'react';
import Login from './CPersonne';
import TcpSocket from 'react-native-tcp-socket';

export default class Seance extends Component {
    constructor(props) {
        super(props);
      }

        creationSeance = async(p_dateSeance= '', p_categorie='', p_zoneDeTir='', p_joueurSelectionne='') => {
            var ConnexionUser = Login.getInstance();
            var information = ConnexionUser.getInformationJoueur();
            var selectEntraineur = information.nom;
            
            var dateSeance = p_dateSeance;
            var categorie = p_categorie;
            var zoneDeTir = p_zoneDeTir;
            var joueurSelectionne = p_joueurSelectionne;

            await fetch('http://192.168.1.26:80/php/mobile_api/connexion_api.php',{
            method:'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                entraineur: selectEntraineur,
                dateSeance: dateSeance,
                categorie: categorie,
                zoneDeTir: zoneDeTir,
                joueurSelectionne : joueurSelectionne,
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

      demarrerLaSeance=(p_idSeance)=>{

        var IDSeance = p_idSeance;

        if(IDSeance == ''){
            alert("Veuillez entrer l'id de la seance");
        }
        else
        {
            const client = TcpSocket.createConnection({port:1439, host:'192.168.54.231'}, () => {
            // Write on the socket
             client.write(IDSeance);

            // Close socket
            client.destroy();
          });
        }
        
      }

};