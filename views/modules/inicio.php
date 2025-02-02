<?php

session_start();

if(!$_SESSION["validar"]){

    header("location:ingreso");

    exit();
}
?>
<!--======================================
INICIO
==========================================-->

<div id="inicio">

    <div id="cerrarSesion"><a href="salir">Cerrar Sesion</a></div>

    <h2 id="saludo">¡Hola <?php echo $_SESSION["primer_nombre"];
                                 echo '<img style="border-radius:100%; margin-left:10px" width="30px"
                                 src="'.$_SESSION["foto"].'">' 
                                ?> Bienvenid@!</h2>


     <!--=====================================
    NIVEL 1
    ======================================-->
    <div id="nivel1" class="niveles">

        <div class="puntaje"><?php echo $_SESSION["puntaje_nivel1"]; ?> pts</div>

        <img src="views/img/intro/checkLevel1.svg">

    <center><button onclick = "inicio.elegirNivel(this)" nivel = "1" id= "<?php echo $_SESSION["id"]; ?>">INGRESAR</button></center>

    <div class="puntajes">
    
    <h2>MEJORES PUNTAJES</h2>

    <ul>

    <?php
        $puntajes_nivel1 = new GestorUsuariosController();
        $puntajes_nivel1 -> puntajesNivelController("puntaje_nivel1");

    ?>

        
    </ul>

        </div>
     </div>

    <!--=====================================
    NIVEL 2
    ======================================-->
    <div id="nivel2" class="niveles">

        <div class="puntaje"><?php echo $_SESSION["puntaje_nivel2"]; ?> pts</div>

        <?php
        if($_SESSION["nivel2"] == "ok"){

            echo '<img src="views/img/intro/checkLevel2.svg">
            <center><button onclick = "inicio.elegirNivel(this)" nivel = "2" id= "'.$_SESSION["id"].'">INGRESAR</button></center>';

        }else{

            echo '<img src="views/img/intro/blockLevel2.svg">';
        }

        ?>

        <div class="puntajes">

        <h2>MEJORES PUNTAJES</h2>

    <ul>

    <?php
        $puntajes_nivel1 = new GestorUsuariosController();
        $puntajes_nivel1 -> puntajesNivelController("puntaje_nivel2");

    ?>

        
    </ul>

        </div>
    </div>

    <!--=====================================
    NIVEL 3
    ======================================-->

    <div id="nivel3" class="niveles">

        <div class="puntaje"><?php echo $_SESSION["puntaje_nivel3"]; ?> pts</div>

        <?php

        if($_SESSION["nivel3"] == "ok"){

            echo '<img src="views/img/intro/checkLevel3.svg">
            <center><button onclick = "inicio.elegirNivel(this)" nivel = "3" id= "'.$_SESSION["id"].'">INGRESAR</button></center>';

        }else{

            echo '<img src="views/img/intro/blockLevel3.svg">';
        }

        ?>

        <div class="puntajes">

        <h2>MEJORES PUNTAJES</h2>

            <ul>

            <?php
                $puntajes_nivel1 = new GestorUsuariosController();
                $puntajes_nivel1 -> puntajesNivelController("puntaje_nivel3");

            ?>

                
            </ul>

        </div>
    </div>
</div>

 <!--=====================================
    CANVAS
======================================-->
<canvas id="lienzo" width="1000px" height="500px"></canvas>

<div id="btnAmpliar" onclick="ampliar()">AMPLIAR JUEGO</div>

<!--=====================================
    TABLERO
======================================-->

<div id="tablero">

        <!--=====================================
        VIDAS
        ======================================-->

        <div id="vidas">

            <p>VIDAS: </p>
            
            <ul>
                <li>
                    <img src="views/img/utileria/vidas.png">
                </li>
                <li>
                    <img src="views/img/utileria/vidas.png">
                </li>
                <li>
                    <img src="views/img/utileria/vidas.png">
                </li>
            
            </ul>
        
        </div>

        <!--=====================================
        ENERGIA
        ======================================-->

        <div id="energia">
            <p>ENERGÍA: </p>

            <meter id="medidaEnergia" value="100" min="0" max="100" high="40"></meter>

            <span>100%</span>

        </div>

        <!--=====================================
        MONEDAS
        ======================================-->

        <div id="monedas">

            <p>MONEDAS: </p>

            <span>0</span>

            <div id="spriteMoneda"></div>
        </div>

        <!--=====================================
        SONIDO
        ======================================-->
        <div id="sonido">

        <p>VOLUMEN: </p>

        <ul>
            <li onclick="juego.bajarVolumen(this)" volumen="0"></li>
            <li onclick="juego.bajarVolumen(this)" volumen="0.3"></li>
            <li onclick="juego.bajarVolumen(this)" volumen="1"></li>
        </ul>

        </div>

        <!--=====================================
        SALIDA
        ======================================-->

        <div id="salida">
            <button onclick="juego.salirDelJuego()">SALIR</button>

        </div>


</div>

<!--=====================================
GAMEOVER
======================================-->

<div id="gameover">
    <h1>GAME OVER</h1>
</div>

<!--=====================================
FINAL
======================================-->

<div id="final">

        <center>
            <div>
                <img src="views/img/intro/F-compartir.jpg" width="150px">
            </div>
        </center>

        <h1>¡LO LOGRASTE!<br>
        <span id="puntajeFinal">0</span>pts
        </h1>

        <ul>
            <li>
                <h3>MONEDAS</h3>
                <div id="spriteMonedaFinal"></div>
                <h4 id="finalMonedas">
                    <span>100</span>pts
                </h4>
            </li>

            <li>
                <h3>ENERGÍA</h3>
                <meter id="medidaEnergiaFinal" value="100" min="0" max="100" high="40" style="margin-top:40px"></meter>
                <span id="totalEnergia">100%</span>
                <h4 style="margin-top:20px" id="puntosEnergia">
                    <span>100</span>pts
                </h4>
            </li>

            <li>
                <h3>VIDAS</h3>
                    <ol>
                        <li><img src="views/img/utileria/vidas.png"></li>
                        <li><img src="views/img/utileria/vidas.png"></li>
                        <li><img src="views/img/utileria/vidas.png"></li>
                    </ol>
                <h4 id="finalVidas"><span>100</span>pts</h4>
            </li>
        </ul>
</div>

<!--=====================================
PRELOAD
======================================-->
<div id = "carga">
<div id = "preload">

    <span>0%</span>
    <br>
    <!--Etiqueta meter permite hacer mediciones-->
    <meter value="0" min="0" max="100" high="90"></meter>

</div>
</div>

<!--=====================================
SONIDOS
======================================-->
<audio src="views/mp3/background01.mp3" id="sBackground01" type="audio/mpeg" muted></audio>
<audio src="views/mp3/background02.mp3" id="sBackground02" type="audio/mpeg" muted></audio>
<audio src="views/mp3/background03.mp3" id="sBackground03" type="audio/mpeg" muted></audio>
<audio src="views/mp3/colisionBalasEnemigo.mp3" id="sColisionBalasEnemigo" type="audio/mpeg" muted></audio>
<audio src="views/mp3/colisionTrampas-Enemigos.mp3" id="scolisionTrampasEnemigos" type="audio/mpeg" muted></audio>
<audio src="views/mp3/energia.mp3" id="sEnergia" type="audio/mpeg" muted></audio>
<audio src="views/mp3/disparoEnemigo.mp3" id="sDisparoEnemigo" type="audio/mpeg" muted></audio>
<audio src="views/mp3/disparoJugador.mp3" id="sDisparoJugador" type="audio/mpeg" muted></audio>
<audio src="views/mp3/monedas.mp3" id="sMonedas" type="audio/mpeg" muted></audio>
<audio src="views/mp3/saltoJugador.mp3" id="sSaltoJugador" type="audio/mpeg" muted></audio>
<audio src="views/mp3/perder.mp3" id="sPerder" type="audio/mpeg" muted></audio>
<audio src="views/mp3/perderVida.mp3" id="sPerderVida" type="audio/mpeg" muted></audio>
<audio src="views/mp3/ganar.mp3" id="sGanar" type="audio/mpeg" muted></audio>
<audio src="views/mp3/monedero.mp3" id="sMonedero" type="audio/mpeg" muted></audio>
<audio src="views/mp3/puntos.mp3" id="sPuntos" type="audio/mpeg" muted></audio>

