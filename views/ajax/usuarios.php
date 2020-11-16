<?php

require_once "../../controllers/usuarios.php";
require_once "../../models/usuarios.php";

class Ajax {

    #REGISTRO DE USUARIOS
    #-------------------------------------------------

    //Propiedades publicas
    public $identificador;
    public $primer_nombre;
    public $foto;

    //Crear un metodo publico, lo que hace es recibir los valores de POST
    public function gestorUsuariosAjax(){

        $datos = array("identificador" => $this->identificador,
                        "primer_nombre" => $this->primer_nombre,
                        "foto" => $this->foto);

        
        $respuesta = GestorUsuariosController:: guardarUsuariosController($datos);              
        echo $respuesta;

    }

    #PASO DE NIVELES
    #--------------------------------------------------------

    public $nivel;
    public $puntaje;
    public $numeroNivel;
    public $id;

    public function gestorPuntajesAjax(){

        $datos = array("nivel" => $this->nivel,
                    "puntaje" => $this->puntaje,
                    "numeroNivel" => $this->numeroNivel,
                    "id" => $this->id);
        
         $respuesta = GestorUsuariosController::guardarPuntajesController($datos);   
         
         echo $respuesta;

    }
    
}

#OBJETOS DEL REGISTRO DE USUARIO
#----------------------------
//para comprobar si viene una variable POST
if(isset($_POST["identificador"])){

    //Se crean objetos
    $a = new Ajax();
    $a -> identificador = $_POST["identificador"];
    $a -> primer_nombre = $_POST["primer_nombre"];
    $a -> foto = $_POST["foto"];
    //Ejecutar el metodo gestorUsuarios
    $a -> gestorUsuariosAjax();

}

#OBJETO PASO DE NIVELES
#--------------------------------------------------------
if(isset($_POST["nivel"])){

    $b = new Ajax();
    $b -> nivel = $_POST["nivel"];
    $b -> puntaje = $_POST["puntaje"];
    $b -> numeroNivel = $_POST["numeroNivel"];
    $b -> id = $_POST["id"];
    $b -> gestorPuntajesAjax();


}