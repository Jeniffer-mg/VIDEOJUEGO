/*=================================
METODOS DEL OBJETO INICIO
==================================*/

var inicio = {

    /*=====METODO DE INGRESO A LA APLICACION =========*/
    iniciar: function () {
        var identificador = "22222222";
        var primer_nombre = "julio";
        var foto = "views/img/intro/julio.png";

        //AJAX: Asynchronous JavaScript And XML

        var xhr = new XMLHttpRequest();
        var url = "views/ajax/usuarios.php";
        xhr.open("POST", url, true);
        //Metodo
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //De esta forma se envian las variables POST a traves de ajax 
        xhr.send("identificador=" + identificador + "& primer_nombre=" + primer_nombre + "& foto=" + foto);

        //Para verificar si recibio esa respuesta
        xhr.onreadystatechange = function () {

            if ((xhr.readyState == 4) && (xhr.status == 200)) {

                if (xhr.responseText == "ok") {

                    window.location = "inicio";
                }
            }
        }


    },

    /*============================================
    ELEGIR NIVEL
    ==============================================*/
    elegirNivel: function (event) {

        ampliar();

        datos.nivel = event.getAttribute("nivel");
        datos.id = event.getAttribute("id");
        //console.log("datos.id", datos.id);
        

        //if(screenfull.enabled){
           // screenfull.request(document.querySelector("#contenedor"));
        //}

        /*============================================
        SONIDOS
        ==============================================*/

        datos.sBackground01 = document.querySelector("#sBackground01");
        datos.sBackground02 = document.querySelector("#sBackground02");
        datos.sBackground03 = document.querySelector("#sBackground03");
        datos.sColisionBalasEnemigo = document.querySelector("#sColisionBalasEnemigo");
        datos.scolisionTrampasEnemigos = document.querySelector("#scolisionTrampasEnemigos");
        datos.sDisparoEnemigo = document.querySelector("#sDisparoEnemigo");
        datos.sDisparoJugador = document.querySelector("#sDisparoJugador");
        datos.sEnergia = document.querySelector("#sEnergia");
        datos.sMonedas = document.querySelector("#sMonedas");
        datos.sSaltoJugador = document.querySelector("#sSaltoJugador");
        datos.sPerderVida = document.querySelector("#sPerderVida");
        datos.sPerder = document.querySelector("#sPerder");
        datos.sGanar = document.querySelector("#sGanar");
        datos.sMonedero = document.querySelector("#sMonedero");
        datos.sPuntos = document.querySelector("#sPuntos");

        datos.listaSonidos = document.querySelectorAll("audio");

        for(var i = 0; i < datos.listaSonidos.length; i++){

            datos.listaSonidos[i].play();

            setTimeout(function(){

                for(var i = 0; i < datos.listaSonidos.length; i++){
                datos.listaSonidos[i].pause();
                datos.listaSonidos[i].muted = false;
            }
                
            },100)

        }


        inicio.inicioNiveles(datos.nivel);
    },


    /*OTRO METODO*/
    /*============================================
    INICIO DE NIVELES
    ==============================================*/

    inicioNiveles: function (nivel) {

        document.querySelector("#inicio").parentNode.removeChild(document.querySelector("#inicio"));

        canvas = document.querySelector("#lienzo");
        ctx = canvas.getContext("2d");

        document.querySelector("#carga").style.display = "block";

    /*============================================
    CARGA DE IMAGENES
    ==============================================*/    
        datos.colision_trampa = new Image();
        datos.jump_left = new Image();
        datos.jump_right = new Image();
        datos.run_left = new Image();
        datos.run_right = new Image();
        datos.stop_left = new Image();
        datos.stop_right = new Image();
        datos.colisionesBalas = new Image();
        datos.colisionesBalasEnemigos = new Image();
        datos.colisionesMonedas = new Image();
        datos.colisionesTrampas = new Image();
        datos.monedas = new Image();
        datos.trampas = new Image();
        datos.balasEnemigos = new Image();

        datos.colision_trampa.src = "views/img/jugador/colision_trampa.png";
        datos.jump_left.src = "views/img/jugador/jump_left.png";
        datos.jump_right.src = "views/img/jugador/jump_right.png";
        datos.run_left.src = "views/img/jugador/run_left.png";
        datos.run_right.src = "views/img/jugador/run_right.png";
        datos.stop_left.src = "views/img/jugador/stop_left.png";
        datos.stop_right.src = "views/img/jugador/stop_right.png";
        datos.colisionesBalas.src = "views/img/utileria/colisionesBalas.png";
        datos.colisionesBalasEnemigos.src = "views/img/utileria/colisionesBalasEnemigos.png";
        datos.colisionesMonedas.src = "views/img/utileria/colisionesMonedas.png";
        datos.colisionesTrampas.src = "views/img/utileria/colisionesTrampas.png";
        datos.monedas.src = "views/img/utileria/monedas.png";
        datos.trampas.src = "views/img/utileria/trampas.png";
        datos.balasEnemigos.src = "views/img/utileria/balasEnemigos.png";


        /*============================================
        PLANO 3
        ==============================================*/
        datos.plano3 = new Image();
        datos.plano3.src = "views/img/nivel" + nivel + "/plano3.png";
        //datos.plano3.onload = function () {
        
        //}

        /*============================================
        PLANO 2
        ==============================================*/
        datos.plano2 = new Image();
        datos.plano2.src = "views/img/nivel" + nivel + "/plano2.png";
        //datos.plano2.onload = function () {
        
        //}

        /*============================================
        PLANO 1
        ==============================================*/
        datos.plano1 = new Image();
        datos.plano1.src = "views/img/nivel" + nivel + "/plano1.png";
        //datos.plano1.onload = function () {
        
        //}

        /*============================================
        DETALLES
        ==============================================*/
        datos.detalles = new Image();
        datos.detalles.src = "views/img/nivel" + nivel + "/detalles.png";


        if (nivel == 1) {

            var xhr_detalles = new XMLHttpRequest();
            xhr_detalles.open("GET", "views/js/json/bloquesDetallesNivel1.json", true);

        }

        if (nivel == 2) {

            var xhr_detalles = new XMLHttpRequest();
            xhr_detalles.open("GET", "views/js/json/bloquesDetallesNivel2.json", true);
        }

        if (nivel == 3) {

            var xhr_detalles = new XMLHttpRequest();
            xhr_detalles.open("GET", "views/js/json/bloquesDetallesNivel3.json", true);

        }

        //Se hace el envio
        xhr_detalles.send();
        xhr_detalles.onreadystatechange = function () {

            if ((xhr_detalles.readyState == 4) && (xhr_detalles.status == 200)) {

                //El metodo JASON.parse() analiza una cadena de texto como JSON, transformando
                //opcionalmente el valor producido por el analisis
                datos.bloquesDetalles = JSON.parse(xhr_detalles.responseText)
            }
        }


        /******************************* */
        //datos.detalles.onload = function () {

        
        //}

        /*=========================================
        BLOQUES
        =======================================*/

        datos.texturaPlataforma = new Image();
        datos.texturaPlataforma.src = "views/img/nivel" + nivel + "/texturaPlataforma.jpg";

        if (nivel == 1) {

            //carguen los archivos json
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "views/js/json/bloquesNivel1.json", true);

        }

        if (nivel == 2) {

            var xhr = new XMLHttpRequest();
            xhr.open("GET", "views/js/json/bloquesNivel2.json", true);

        }

        if (nivel == 3) {

            var xhr = new XMLHttpRequest();
            xhr.open("GET", "views/js/json/bloquesNivel3.json", true);
        }

        //Se hace el envio
        xhr.send();
        xhr.onreadystatechange = function () {

            if ((xhr.readyState == 4) && (xhr.status == 200)) {

                //El metodo JASON.parse() analiza una cadena de texto como JSON, transformando
                //opcionalmente el valor producido por el analisis
                datos.bloques = JSON.parse(xhr.responseText)
            }
        }

        //datos.texturaPlataforma.onload = function () {

       

        //}

        /*============================================
        PLATAFORMAS
        ==============================================*/


        if (nivel == 1) {

            var xhr_plataforma = new XMLHttpRequest();
            xhr_plataforma.open("GET", "views/js/json/plataformasNivel1.json", true);

        }

        if (nivel == 2) {

            var xhr_plataforma = new XMLHttpRequest();
            xhr_plataforma.open("GET", "views/js/json/plataformasNivel2.json", true);
        }

        if (nivel == 3) {

            var xhr_plataforma = new XMLHttpRequest();
            xhr_plataforma.open("GET", "views/js/json/plataformasNivel3.json", true);

        }

        //Se hace el envio
        xhr_plataforma.send();
        xhr_plataforma.onreadystatechange = function () {

            if ((xhr_plataforma.readyState == 4) && (xhr_plataforma.status == 200)) {

                //El metodo JASON.parse() analiza una cadena de texto como JSON, transformando
                //opcionalmente el valor producido por el analisis
                datos.plataforma = JSON.parse(xhr_plataforma.responseText)
            }
        }

        /*============================================
        MONEDAS
        ==============================================*/


        if (nivel == 1) {

            var xhr_monedas = new XMLHttpRequest();
            xhr_monedas.open("GET", "views/js/json/monedasNivel1.json", true);

        }

        if (nivel == 2) {

            var xhr_monedas = new XMLHttpRequest();
            xhr_monedas.open("GET", "views/js/json/monedasNivel2.json", true);
        }

        if (nivel == 3) {

            var xhr_monedas = new XMLHttpRequest();
            xhr_monedas.open("GET", "views/js/json/monedasNivel3.json", true);

        }

        //Se hace el envio
        xhr_monedas.send();
        xhr_monedas.onreadystatechange = function () {

            if ((xhr_monedas.readyState == 4) && (xhr_monedas.status == 200)) {

                //El metodo JASON.parse() analiza una cadena de texto como JSON, transformando
                //opcionalmente el valor producido por el analisis
                datos.posMonedas = JSON.parse(xhr_monedas.responseText)

                for(var i = 0; i < datos.posMonedas.length; i++){

                    datos.imgMonedas[i] = new Image();
                    datos.imgMonedas[i].src = "views/img/utileria/monedas.png";
                }
            }
        }

        /*============================================
        TRAMPAS
        ==============================================*/


        if (nivel == 1) {

            var xhr_trampas = new XMLHttpRequest();
            xhr_trampas.open("GET", "views/js/json/trampasNivel1.json", true);

        }

        if (nivel == 2) {

            var xhr_trampas = new XMLHttpRequest();
            xhr_trampas.open("GET", "views/js/json/trampasNivel2.json", true);
        }

        if (nivel == 3) {

            var xhr_trampas = new XMLHttpRequest();
            xhr_trampas.open("GET", "views/js/json/trampasNivel3.json", true);

        }

        //Se hace el envio
        xhr_trampas.send();
        xhr_trampas.onreadystatechange = function () {

            if ((xhr_trampas.readyState == 4) && (xhr_trampas.status == 200)) {

                //El metodo JASON.parse() analiza una cadena de texto como JSON, transformando
                //opcionalmente el valor producido por el analisis
                datos.posTrampas = JSON.parse(xhr_trampas.responseText)

                for(var i = 0; i < datos.posTrampas.length; i++){

                    datos.imgTrampas[i] = new Image();
                    datos.imgTrampas[i].src = "views/img/utileria/trampas.png";
                }
            }
        }

        /*=========================================
        ENEMIGOS
        =======================================*/

        datos.imgEnemigos = new Image();
        datos.imgEnemigos.src = "views/img/utileria/enemigos.png";
        datos.imgBalasEnemigos = new Image();
        datos.imgBalasEnemigos.src = "views/img/utileria/balasEnemigos.png";

        for(var i = 1; i <= 3; i++){

            if (nivel == i) {

                //carguen los archivos json
                var xhr_enemigos = new XMLHttpRequest();
                xhr_enemigos.open("GET", "views/js/json/enemigosNivel"+i+".json", true);
    
            }

        }
        //Se hace el envio
        xhr_enemigos.send();
        xhr_enemigos.onreadystatechange = function () {

            if ((xhr_enemigos.readyState == 4) && (xhr_enemigos.status == 200)) {

                //El metodo JASON.parse() analiza una cadena de texto como JSON, transformando
                //opcionalmente el valor producido por el analisis
                datos.posEnemigos = JSON.parse(xhr_enemigos.responseText)
                datos.posBalasEnemigos = JSON.parse(xhr_enemigos.responseText)
            }
        }


        /*============================================
        JUGADOR
        ==============================================*/

        datos.imgJugador = new Image();
        datos.imgJugador.src = "views/img/jugador/stop_right.png";
        //datos.imgJugador.onload = function () {

       
        //}

        /*============================================
        DISPARO JUGADOR
        ==============================================*/

        datos.imgDisparoJugador = new Image();
        datos.imgDisparoJugador.src = "views/img/utileria/balasJugador.png";

        /*============================================
       PLANO 0
       ==============================================*/
        datos.plano0 = new Image();
        datos.plano0.src = "views/img/nivel" + nivel + "/plano0.png";
        //datos.plano0.onload = function () {
        
        //}

       /*============================================
       PRELOAD--crean variables locales-- se meten las imagenes que se cargan solo una vez
       ==============================================*/

        var cargarArchivos = [datos.plano0, datos.texturaPlataforma, datos.detalles, datos.plano1, datos.plano2, datos.plano3, datos.imgJugador,
            datos.imgEnemigos, datos.imgBalasEnemigos, datos.imgDisparoJugador,  datos.colision_trampa,
            datos.jump_left, datos.jump_right, datos.run_left, datos.run_right,
            datos.stop_left, datos.stop_right, datos.colisionesBalas, datos.colisionesBalasEnemigos,
            datos.colisionesMonedas, datos.colisionesTrampas, datos.monedas, datos.trampas, datos.balasEnemigos];

        var numeroArchivos = 0;
        var porcentaje = 0;

        for (var i = 0; i < cargarArchivos.length; i++) {

            cargarArchivos[i].addEventListener("load", precarga)
        }

        function precarga(e) {

            //Sea mas lento
            //setIInterval(function(){

            numeroArchivos++;
            porcentaje = 100 / cargarArchivos.length;

            document.querySelector("#carga span").innerHTML = Math.ceil(porcentaje * numeroArchivos) + "%";
            document.querySelector("#carga meter").value = Math.ceil(porcentaje * numeroArchivos);

            if (numeroArchivos == cargarArchivos.length) {

                document.querySelector("#lienzo").style.display = "block";
                document.querySelector("#btnAmpliar").style.display = "block";

                document.querySelector("#tablero").style.display = "block";

                document.querySelector("#carga").style.opacity = 0;

                setTimeout(function () {
                    document.querySelector("#carga").style.display = "none";
                }, 10);

                juego.teclado();
                juego.tiempo();
            }
            //},1000)
        }


    }
}