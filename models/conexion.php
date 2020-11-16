<?php

class Conexion{

    public function conectar(){

        //Hacer conexion a la base de datos
        $link = new PDO("mysql:host=localhost;dbname=blackninja","root","");
        return  $link;

    }

}