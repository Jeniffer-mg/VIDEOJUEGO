/*==========================================
VARIABLES DE LA LINEA DE TIEMPO
==============================================*/
var frame = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame;

var animacion;

/*==========================================
VARIABLES DEL CANVAS
==============================================*/
var canvas;
var ctx;


/*==========================================
PROPIEDADES DEL OBJETO DATOS
==============================================*/

var datos = {
    id : 0,
    nivel: null,
    plano3: null,
    plano2: null,
    plano1: null,
    plano0: null,
    texturaPlataforma: null,
    bloques: [],
    imgJugador: null,
    jugador_x: 70,
    jugador_y: 200,
    jugador_ancho: 40,
    jugador_alto: 40,
    detalles: null,
    bloquesDetalles:[],
    izquierda: false,
    derecha: false,
    movimiento: 0,
    desplazamientoEscenario: 0,
    velocidad: 10,
    limiteEscenario: -1995,
    movimientoJugador: 0, 
    plataforma: [],
    gravedad: 0,
    limiteGravedad: 20,
    peso: .5,
    salto: false,
    alturaSalto: -10,
    sprite_x: 0,
    cicloSprite: 0,
    reset: false,
    imgMonedas:[],
    posMonedas: [],
    imgTrampas: [],
    posTrampas: [],
    movTrampas: 0,
    cambioMovTrampas: false,
    imgEnemigos: null,
    posEnemigos: [],
    imgBalasEnemigos: null,
    posBalasEnemigos: [],
    movBalasEnemigos: 0,
    velocidadBalasEnemigos: 5,
    cicloBalasEnemigos: 0,
    cambioBalasEnemigos: false,
    disparo: false,
    imgDisparoJugador: null,
    disparo_x: 0,
    disparo_y: 0,
    disparo_ancho: 15,
    disparo_alto: 15,
    validarDisparo: false,
    disparoDer: false,
    disparoIzq: false,
    movDisparoJugador: 0,
    velocidadDisparoJugador: 5,
    direccionJugador: null,
    contadorMonedas: 0,
    activarMonedaColisionada: false,
    monedaColisionada: 0,
    posicionMonedaColisionadaX: 0,
    posicionMonedaColisionadaY: 0,
    energia: 100,
    vidas: 3,
    puntaje: 0,
    incrementoPuntaje: 0,
    /*==========================================
    SONIDO
    ==============================================*/
    sBackground01: null,
    sBackground02: null,
    sBackground03: null,
    sColisionBalasEnemigo: null,
    scolisionTrampasEnemigos: null,
    sEnergia: null,
    sDisparoEnemigo: null,
    sDisparoJugador: null,
    sMonedas: null,
    sSaltoJugador: null,
    sPerder: null,
    sPerderVida: null,
    sGanar: null,
    sMonedero: null,
    sPuntos: null, 
    listaSonidos: [],

/*==========================================
PRECARGA DE IMAGENES
==============================================*/

colision_trampa: null,
jump_left: null,
jump_right: null,
run_left: null,
run_right: null,
stop_left: null,
stop_right: null,
colisionesBalas: null,
colisionesBalasEnemigos: null,
colisionesMonedas: null,
colisionesTrampas: null,
monedas: null,
trampas: null,
balasEnemigos: null





}