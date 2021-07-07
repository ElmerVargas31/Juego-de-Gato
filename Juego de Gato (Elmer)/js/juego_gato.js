//Variables Globales
var tablero=new Array(3); //Crear las 3 columnas
var f=0, c=0;
var punt_X=0; //Puntos de x
var punt_O=0; //Puntos de o
var jugX=true; //Jugador X comienza primero
var cua=0; //Determina los números de los recuadros del tablero

//Crear las 3 filas
for(var i=0; i<3; i++){
    tablero[i]=new Array(3);
}

//Reiniciar tablero, Habilitar Casillas
function funRefrescar(){
    tablero=new Array(3);
    for(i=0; i<3; i++){
        tablero[i]=new Array(3);
    }
    f=0, c=0;
    punt_X=0;
    punt_O=0;
    jugX=true;
    for(var cua=1; cua<=9; cua++){
        document.getElementById("cuadro"+cua).innerHTML="";
        document.getElementById("cuadro"+cua).style.pointerEvents="auto";
    }
    document.puntuacion.puntoX.value=punt_X;
    document.puntuacion.puntoO.value=punt_O;
    document.puntuacion.turno.value="X";
}

//Siguiente Partida
function funSiguiente(){
    tablero=new Array(3);
    for(i=0; i<3; i++){
        tablero[i]=new Array(3);
    }
    f=0, c=0;
    jugX=true;
    for(cua=1; cua<=9; cua++){
        document.getElementById("cuadro"+cua).innerHTML=" ";
        document.getElementById("cuadro"+cua).style.pointerEvents="auto";
    }
    document.puntuacion.puntoX.value=punt_X;
    document.puntuacion.puntoO.value=punt_O;
    document.puntuacion.turno.value="X";
}

//Deshabilitar Tablero
function funBloquear(){
    for(cua=1; cua<=9; cua++){
        document.getElementById("cuadro"+cua).style.pointerEvents="none";
    }
}

//Colocar símbolos X y O
function funCuadro1(){
    if(jugX==true){
        document.getElementById("cuadro1").innerHTML=("<img src='img/letraX.png'>");
        tablero[0][0]="X";
        jugX=false;
        document.puntuacion.turno.value="O";
        document.getElementById("cuadro1").style.pointerEvents="none";
    }else{
        document.getElementById("cuadro1").innerHTML=("<img src='img/letraO.png'>");
        tablero[0][0]="O";
        jugX=true;
        document.puntuacion.turno.value="X";
        document.getElementById("cuadro1").style.pointerEvents="none";
    }
    funGanador()
}
function funCuadro2(){
    if(jugX==true){
        document.getElementById("cuadro2").innerHTML=("<img src='img/letraX.png'>");
        tablero[0][1]="X";
        jugX=false;
        document.puntuacion.turno.value="O";
        document.getElementById("cuadro2").style.pointerEvents="none"; 
    }else{
        document.getElementById("cuadro2").innerHTML=("<img src='img/letraO.png'>");
        tablero[0][1]="O";
        jugX=true;
        document.puntuacion.turno.value="X";
        document.getElementById("cuadro2").style.pointerEvents="none";
    }
    funGanador()
}
function funCuadro3(){
    if(jugX==true){
        document.getElementById("cuadro3").innerHTML=("<img src='img/letraX.png'>");
        tablero[0][2]="X";
        jugX=false;
        document.puntuacion.turno.value="O";
        document.getElementById("cuadro3").style.pointerEvents="none";
    }else{
        document.getElementById("cuadro3").innerHTML=("<img src='img/letraO.png'>");
        tablero[0][2]="O";
        jugX=true;
        document.puntuacion.turno.value="X";
        document.getElementById("cuadro3").style.pointerEvents="none";
    }
    funGanador()
}
function funCuadro4(){
    if(jugX==true){
        document.getElementById("cuadro4").innerHTML=("<img src='img/letraX.png'>");
        tablero[1][0]="X";
        jugX=false;
        document.puntuacion.turno.value="O";
        document.getElementById("cuadro4").style.pointerEvents="none"; 
    }else{
        document.getElementById("cuadro4").innerHTML=("<img src='img/letraO.png'>");
        tablero[1][0]="O";
        jugX=true;
        document.puntuacion.turno.value="X";
        document.getElementById("cuadro4").style.pointerEvents="none";
    }
    funGanador()
}
function funCuadro5(){
    if(jugX==true){
        document.getElementById("cuadro5").innerHTML=("<img src='img/letraX.png'>");
        tablero[1][1]="X";
        jugX=false;
        document.puntuacion.turno.value="O";
        document.getElementById("cuadro5").style.pointerEvents="none";
    }else{
        document.getElementById("cuadro5").innerHTML=("<img src='img/letraO.png'>");
        tablero[1][1]="O";
        jugX=true;
        document.puntuacion.turno.value="X";
        document.getElementById("cuadro5").style.pointerEvents="none";
    }
    funGanador()
}
function funCuadro6(){
    if(jugX==true){
        document.getElementById("cuadro6").innerHTML=("<img src='img/letraX.png'>");
        tablero[1][2]="X";
        jugX=false;
        document.puntuacion.turno.value="O";
        document.getElementById("cuadro6").style.pointerEvents="none";
    }else{
        document.getElementById("cuadro6").innerHTML=("<img src='img/letraO.png'>");
        tablero[1][2]="O";
        jugX=true;
        document.puntuacion.turno.value="X";
        document.getElementById("cuadro6").style.pointerEvents="none";
    }
    funGanador()
}
function funCuadro7(){
    if(jugX==true){
        document.getElementById("cuadro7").innerHTML=("<img src='img/letraX.png'>");
        tablero[2][0]="X";
        jugX=false;
        document.puntuacion.turno.value="O";
        document.getElementById("cuadro7").style.pointerEvents="none"; 
    }else{
        document.getElementById("cuadro7").innerHTML=("<img src='img/letraO.png'>");
        tablero[2][0]="O";
        jugX=true;
        document.puntuacion.turno.value="X";
        document.getElementById("cuadro7").style.pointerEvents="none";
    }
    funGanador()
}
function funCuadro8(){
    if(jugX==true){
        document.getElementById("cuadro8").innerHTML=("<img src='img/letraX.png'>");
        tablero[2][1]="X";
        jugX=false;
        document.puntuacion.turno.value="O";
        document.getElementById("cuadro8").style.pointerEvents="none"; 
    }else{
        document.getElementById("cuadro8").innerHTML=("<img src='img/letraO.png'>"); 
        tablero[2][1]="O";
        jugX=true;
        document.puntuacion.turno.value="X";
        document.getElementById("cuadro8").style.pointerEvents="none";
    }
    funGanador()
}
function funCuadro9(){
    if(jugX==true){
        document.getElementById("cuadro9").innerHTML=("<img src='img/letraX.png'>");
        tablero[2][2]="X";
        jugX=false;
        document.puntuacion.turno.value="O";
        document.getElementById("cuadro9").style.pointerEvents="none";  
    }else{
        document.getElementById("cuadro9").innerHTML=("<img src='img/letraO.png'>");
        tablero[2][2]="O";
        jugX=true;
        document.puntuacion.turno.value="X";
        document.getElementById("cuadro9").style.pointerEvents="none";
    }
    funGanador()
}

//Verificar ganadores X y O
function funGanador(){
    if((tablero[0][0]=="X" && tablero[0][1]=="X" && tablero[0][2]=="X") || (tablero[1][0]=="X" && tablero[1][1]=="X" && tablero[1][2]=="X") || (tablero[2][0]=="X" && tablero[2][1]=="X" && tablero[2][2]=="X") || (tablero[0][0]=="X" && tablero[1][1]=="X" && tablero[2][2]=="X") || (tablero[0][2]=="X" && tablero[1][1]=="X" && tablero[2][0]=="X") || (tablero[0][0]=="X" && tablero[1][0]=="X" && tablero[2][0]=="X") || (tablero[0][1]=="X" && tablero[1][1]=="X" && tablero[2][1]=="X") || (tablero[0][2]=="X" && tablero[1][2]=="X" && tablero[2][2]=="X")){
        punt_X++;
        document.puntuacion.puntoX.value=punt_X;
        funBloquear();
    }else if((tablero[0][0]=="O" && tablero[0][1]=="O" && tablero[0][2]=="O") || (tablero[1][0]=="O" && tablero[1][1]=="O" && tablero[1][2]=="O") || (tablero[2][0]=="O" && tablero[2][1]=="O" && tablero[2][2]=="O") || (tablero[0][0]=="O" && tablero[1][1]=="O" && tablero[2][2]=="O") || (tablero[0][2]=="O" && tablero[1][1]=="O" && tablero[2][0]=="O") || (tablero[0][0]=="O" && tablero[1][0]=="O" && tablero[2][0]=="O") || (tablero[0][1]=="O" && tablero[1][1]=="O" && tablero[2][1]=="O") || (tablero[0][2]=="O" && tablero[1][2]=="O" && tablero[2][2]=="O")){
        punt_O++;
        document.puntuacion.puntoO.value=punt_O;
        funBloquear();
    }
}