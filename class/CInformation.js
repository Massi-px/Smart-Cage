import { Component } from 'react';

var listeEntraineur = '';
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

      requeteListeEntraineur = async() => {
          
        await fetch('http://192.168.106.127:80/php/mobile_api/liste_entraineur.php',{
          method:'get',
          dataType: 'json',
          header:{
              'Accept': 'application/json',
              'Content-type': 'application/json'
          },
        })
            .then((Response) => Response.json())
            .then(ResponseJson=>{
              console.log(ResponseJson);
              listeEntraineur = ResponseJson[0].nom;
            })
        }

        getListeEntraineur(){
            return(listeEntraineur);
        }


}
