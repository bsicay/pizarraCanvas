var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var ancho = cuadrito.width;
var x = 100;
var y = 100;

dibujarLinea('#FAA', 1, 1, 1, ancho-1, papel); //BORDE DEL CANVAS
dibujarLinea('#FAA', 1, ancho-1, ancho-1, ancho-1, papel);
dibujarLinea('#FAA', ancho-1, ancho-1, ancho-1, 1, papel); 
dibujarLinea('#FAA', ancho-1, 1, 1, 1, papel);
dibujarLinea("red", x-1, y-1, x+1, y+1, papel) //COMIENZO DEL TRAZO CON FLECHAS



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath(); //Empieza el lienzo. El lienzo es el contexto del canvas
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke(); //Dibuja el camino
    lienzo.closePath(); //cierra el trazo, o "levanta el lapiz"
}


function dibujarTeclado(evento){
    console.log(evento)
    var colorcito = "green";
    var movimiento = 10; 
    switch(evento.keyCode){
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        default:
            console.log("Otra tecla");
    }
}