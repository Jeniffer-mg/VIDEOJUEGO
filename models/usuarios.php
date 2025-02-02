<?php

require_once "conexion.php";

class GestorUsuariosModel{

    #SELECCIONAR USUARIO
    #----------------------------------------------
    static public function seleccionarUsuariosModel($datosModel){
        
        $stmt = Conexion::conectar()->prepare("SELECT id, primer_nombre, foto, nivel1, puntaje_nivel1,
        nivel2, puntaje_nivel2, nivel3, puntaje_nivel3  FROM usuarios WHERE identificador = :identificador");

        $stmt->bindParam(":identificador", $datosModel["identificador"], PDO::PARAM_INT);

        $stmt -> execute();

        return $stmt -> fetch();

        $stmt -> close();
    }

    #GUARDAR USUARIOS
    #---------------------------------------------
    static public function guardarUsuariosModel($datosModel){

        //Hacer una declaracion a la base de datos
        $stmt = Conexion::conectar()->prepare("INSERT INTO usuarios(identificador,
        primer_nombre, foto, nivel1) VALUES (:identificador, :primer_nombre, :foto, :nivel1)");

        //Enlazar parametros PDO
        $stmt->bindParam(":identificador", $datosModel["identificador"], PDO::PARAM_INT);
        $stmt->bindParam(":primer_nombre", $datosModel["primer_nombre"], PDO::PARAM_STR);
        $stmt->bindParam(":foto", $datosModel["foto"], PDO::PARAM_STR);
        $stmt->bindParam(":nivel1", $datosModel["nivel1"], PDO::PARAM_STR);

        if($stmt->execute()){

            return "ok";

        }else{
            return "error";
        }
        $stmt->close();

    }

    #SELECCIONAR PUNTAJES
    #-----------------------------------------------------
    static public function puntajesNivelModel($datos){

        //Conexion a la base de datos, sentencia sql
        $stmt = Conexion::conectar()->prepare("SELECT primer_nombre, foto, $datos FROM usuarios ORDER BY $datos
        DESC LIMIT 3");

        $stmt -> execute();

        return $stmt -> fetchAll();

        $stmt -> close();

    }

    #GUARDAR PUNTAJES
    #--------------------------------------------------
    static public function guardarPuntajesModel($datosModel, $tabla){

        $numero_nivel = $datosModel["numero_nivel"];
        $puntaje_nivel = $datosModel["puntaje_nivel"];

        //Conexion a la base de datos
        $stmt = Conexion::conectar()->prepare("UPDATE $tabla SET $numero_nivel = :nivel, $puntaje_nivel = :puntaje WHERE id = :id");

        //Enlazar parametros
        $stmt -> bindParam(":nivel", $datosModel["nivel"], PDO::PARAM_STR);
        $stmt -> bindParam(":puntaje", $datosModel["puntaje"], PDO::PARAM_STR);
        $stmt -> bindParam(":id", $datosModel["id"], PDO::PARAM_INT);

        if($stmt->execute()){

            return "ok";
        }
        else{

            return "error";
        }

        $stmt->close();

    }

    #SELECCIOANR PUNTAJE
    #-------------------------------------------
    static public function seleccionarPuntajeModel($datosModel, $tabla){

       $stmt = Conexion::conectar()->prepare("SELECT nivel1, puntaje_nivel1, nivel2, puntaje_nivel2, nivel3, puntaje_nivel3 FROM $tabla WHERE id= :id");

       $stmt -> bindParam(":id", $datosModel["id"], PDO::PARAM_INT);

       $stmt -> execute();

       return $stmt -> fetch();

       $stmt -> close();
        
    }


}