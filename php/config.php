<?php 
        /*
           Attention ! le host => l'adresse de la base de données et non du site !!
        
           Pour ceux qui doivent spécifier le port ex : 
           $bdd = new PDO("mysql:host=CHANGER_HOST_ICI;dbname=CHANGER_DB_NAME;charset=utf8;port=3306", "CHANGER_LOGIN", "CHANGER_PASS");
           
         */

    try 
    {
        $bdd = new PDO("mysql:host=192.168.43.171:8080;dbname=projet;charset=utf8", "root", "smart");
        $retour["success"]= true;
        $retour["message"]="Connexion  la base de donnée réussie";
    }
    catch(PDOException $e)
    {
        $retour["success"]= false;
        $retour["message"]="Connexion  la base de donnée impossible";
    }
?>

