/*===================================
METODOS DEL OBJETO LIENZO
======================================*/
var lienzo = {

    //metodo canvas
    canvas: function () {

        /*===================================
        BORRAR CANVAS
        ======================================*/

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        /*===================================
        PLANO 3
        ======================================*/

        ctx.drawImage(datos.plano3, datos.desplazamientoEscenario/5, 0, datos.plano3.naturalWidth, datos.plano3.naturalHeight);
        ctx.drawImage(datos.plano3, datos.desplazamientoEscenario/5+1000, 0, datos.plano3.naturalWidth, datos.plano3.naturalHeight);
        //ctx.drawImage(datos.plano3, datos.desplazamientoEscenario+2000, 0, datos.plano3.naturalWidth, datos.plano3.naturalHeight);

        /*===================================
        PLANO 2
        ======================================*/
        ctx.drawImage(datos.plano2, datos.desplazamientoEscenario/3.5, 0, datos.plano2.naturalWidth, datos.plano2.naturalHeight);
        ctx.drawImage(datos.plano2, datos.desplazamientoEscenario/3.5+1000, 0, datos.plano2.naturalWidth, datos.plano2.naturalHeight);
        

        /*===================================
        PLANO 1
        ======================================*/
        ctx.drawImage(datos.plano1, datos.desplazamientoEscenario/2, 0, datos.plano1.naturalWidth, datos.plano1.naturalHeight);
        ctx.drawImage(datos.plano1, datos.desplazamientoEscenario/2+1000, 0, datos.plano1.naturalWidth, datos.plano1.naturalHeight);


        /*===================================
        DETALLES
        ======================================*/

        for (var i = 0; i < datos.bloquesDetalles.length; i++) {
            //impresion en el canvas
            ctx.drawImage(datos.detalles, datos.bloquesDetalles[i].x+datos.desplazamientoEscenario, datos.bloquesDetalles[i].y, datos.bloquesDetalles[i].ancho,
                datos.bloquesDetalles[i].alto);
        }

        /*===================================
        TRAMPAS
        ======================================*/
        for (var i = 0; i < datos.posTrampas.length; i++) {

            ctx.drawImage(datos.imgTrampas[i], datos.sprite_x, 0, 100, 100, datos.posTrampas[i].x+datos.movTrampas,
                datos.posTrampas[i].y+datos.movTrampas, datos.posTrampas[i].ancho, datos.posTrampas[i].alto);
    
        }


        /*===================================
        BLOQUES
        ======================================*/
         for (var i = 0; i < datos.bloques.length; i++) {

        ctx.drawImage(datos.texturaPlataforma, datos.bloques[i].x+datos.desplazamientoEscenario, datos.bloques[i].y, datos.bloques[i].ancho, datos.bloques[i].alto);

        }

        
        /*===================================
        MONEDAS
        ======================================*/
        for (var i = 0; i < datos.posMonedas.length; i++) {

            ctx.drawImage(datos.imgMonedas[i], datos.sprite_x, 0, 100, 100, datos.posMonedas[i].x,
                datos.posMonedas[i].y, datos.posMonedas[i].ancho, datos.posMonedas[i].alto);

            if(datos.activarMonedaColisionada){

                datos.imgMonedas[datos.monedaColisionada].src = datos.colisionesMonedas.src;

                ctx.drawImage(datos.imgMonedas[datos.monedaColisionada], datos.sprite_x, 0, 100, 100, datos.posicionMonedaColisionadaX,
                    datos.posicionMonedaColisionadaY, datos.posMonedas[i].ancho, datos.posMonedas[i].alto);

                    setTimeout(function(){
                        datos.activarMonedaColisionada = false;
                    },500)

            }    
    
        }

        /*===================================
        ENEMIGOS
        ======================================*/

        for (var i = 0; i < datos.posEnemigos.length; i++) {

            ctx.drawImage(datos.imgEnemigos, datos.posEnemigos[i].x,
                datos.posEnemigos[i].y, datos.posEnemigos[i].ancho, datos.posEnemigos[i].alto);
    
        }

        /*===================================
        BALAS ENEMIGOS
        ======================================*/

        for (var i = 0; i < datos.posBalasEnemigos.length; i++) {

            ctx.drawImage(datos.imgBalasEnemigos, datos.posBalasEnemigos[i].x,
                datos.posBalasEnemigos[i].y, datos.posBalasEnemigos[i].ancho-20, datos.posBalasEnemigos[i].alto-20);
    
        }

        /*===================================
        JUGADOR
        ======================================*/
        ctx.drawImage(datos.imgJugador, datos.sprite_x, 0, 100, 90, datos.jugador_x, datos.jugador_y, datos.jugador_ancho, datos.jugador_alto);

        /*===================================
        DISPARO JUGADOR
        ======================================*/
        if(datos.disparoDer || datos.disparoIzq){

        ctx.drawImage(datos.imgDisparoJugador, datos.sprite_x, 0, 100, 100, datos.disparo_x, datos.disparo_y, datos.disparo_ancho, datos.disparo_alto);
        }
        /*===================================
        PLATAFORMAS
        ======================================*/

        for (var i = 0; i < datos.plataforma.length; i++) {

            ctx.fillStyle = "rgba(255,0,0,0)";//tenia .5 para el color rojo de las plataformas
            ctx.fillRect(datos.plataforma[i].x, datos.plataforma[i].y, datos.plataforma[i].ancho, datos.plataforma[i].alto);
        }


        /*===================================
        PLANO 0
        ======================================*/
        ctx.drawImage(datos.plano0, datos.desplazamientoEscenario/1.5, 0, datos.plano0.naturalWidth, datos.plano0.naturalHeight);
        ctx.drawImage(datos.plano0, datos.desplazamientoEscenario/1.5+1000, 0, datos.plano0.naturalWidth, datos.plano0.naturalHeight);

    }
}