
document.addEventListener("mousedown", dibujarMousePrimero);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var beginX = 0;
var beginY = 0;
var mouseClick = false;
var colorcito = "green";


function dibujarMousePrimero(evento){
    console.log(evento)
    beginX = evento.clientX;
    beginY = evento.clientY;
     mouseClick = true;
}

document.addEventListener("mousemove", dibujarMouseSegundo);

function dibujarMouseSegundo(evento){
    if(mouseClick == true){
        console.log(evento)
        dibujarLinea(colorcito, beginX, beginY, evento.clientX, evento.clientY, papel)
        beginX = evento.clientX;
        beginY = evento.clientY;
        
    }
}

document.addEventListener("mouseup", dibujarMouseTercero);

function dibujarMouseTercero(evento){
    console.log(evento)
    if(mouseClick == true){
        dibujarLinea(colorcito, beginX, beginY, evento.clientX, evento.clientY, papel)
        beginX = 0;
        beginY = 0;
        mouseClick = false;
    }
}


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath(); //Empieza el lienzo. El lienzo es el contexto del canvas
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke(); //Dibuja el camino
    lienzo.closePath(); //cierra el trazo, o "levanta el lapiz"
}