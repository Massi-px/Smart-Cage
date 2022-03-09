<?php
session_start();
 require_once 'config.php'; // On inclu la connexion à la bdd
 $json = file_get_contents('php://input');
 $obj = json_decode($json, true);

 $nom = $obj['nom'];
 $password = $obj['password'];

 $query = "SELECT * FROM utilisateurs WHERE nom = '{$nom}'";
 
 $query_output = mysqli_query($conn, $querry);
 $count = mysqli_num_rows($query_output);