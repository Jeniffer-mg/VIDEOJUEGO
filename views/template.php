<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BLACK NINJA | JUEGO DE PLATAFORMA </title>
    <link rel="icon" href="views/img/intro/favicon.png">
    <link rel="stylesheet" href="views/css/estilo.css" type="text/css" media="">
    <!--<link href = "https://fonts.googleapis.com/css2? family = Patrick + Hand & display = swap" rel = "stylesheet">-->
    <link href = "https://fonts.googleapis.com/css?family=Patrick+Hand" rel = "stylesheet">
    <!--familia de fuentes: 'Patrick Hand', cursiva;-->
    
    <script src="views/js/screenfull.min.js"></script>
    
</head>
<body>

<!--======PANTALLA VERTICAL========-->

    <div id="vertical"></div>

<!--======MARCO========-->
    <div id="marco"></div>

<!--=======CONTENEDOR===========-->
    <div id="contenedor">
        
        <?php

        if(isset($_GET["validar"])){

            switch($_GET["validar"]){
                case "inicio":
                include "modules/inicio.php";
                break;

                case "salir":
                include "modules/salir.php";
                break;
                default:
                include "modules/ingreso.php";
            }

        }else{ 
            include "modules/ingreso.php";
        }
        ?>
    </div>


<!--=======CREDITOS===========-->
    <footer>
        <center>
        <p>Juego desarrollado por Jeniffer Dyanne Medina | <a href="https://
        tutorialesatualcance.com" target= "_blank">www.tutorialesatualcance.com</a></p>
        </center>

    </footer>

    <script src="views/js/variables_y_propiedades.js"></script>
    <script src="views/js/inicio.js"></script>
    <script src="views/js/juego.js"></script>
    <script src="views/js/lienzo.js"></script>
    <script src="views/js/ampliarCanvas.js"></script>
</body>
</html>