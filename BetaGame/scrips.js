
const table = document.querySelector('.table');
const rows = table.querySelectorAll('.row');
let cantidad=document.querySelector(".cantidad");


const matriz = [];
let total;
let posX;
let posY;
let posYMalo;
let posXMalo;


//Reinicia el mapa y las variables
function reiniciar(){
  for(let i=0;i<10;i++){
    matriz[i].forEach((element)=>{
    element.style="blackgraund-color:white";
    })
  }
  total=0;
}
//Funcion que carga los bordes de la matriz
function cargarBordes(){

    for(let i=0;i<10;i++){
        matriz[0][i].style="background-color:red"
        matriz[9][i].style="background-color:red"
    }
    for(let j=1;j<9;j++){
        matriz[j][0].style="background-color:red"
        matriz[j][9].style="background-color:red"
    }
      //Agrega el bloque azul (personaje) a la matriz junto con el bloque amarillo
        posX=Math.floor(Math.random() * 8)+1 ;
        posY=Math.floor(Math.random() * 8)+1 ;
        posXMalo=Math.floor(Math.random() * 8)+1 ;
        posYMalo=Math.floor(Math.random() * 8)+1 ;
        matriz[posY][posX].style="background-color:blue"
        matriz[posYMalo][posXMalo].style="background-color:yellow"
        console.log(posX);
        console.log(posY);
}

 // Carga la matriz con los divs del html, evento click del Boton Cargar Mapa
$(".botonCrearMapa").click(()=>{
  


  document.querySelector(".botonCrearMapa").disabled="true"
  let nombre=document.forms[0].elements[1].value;
  document.forms[0].elements[1].value=" "
  document.forms[0].elements[1].disabled="true"
  reloj();
  rows.forEach((row) => {
  const cells = row.querySelectorAll('.cell');
  const rowArray = [];
  cells.forEach((cell) => {
      rowArray.push(cell);
  });

  matriz.push(rowArray);
  });
  console.log(matriz)
  cargarBordes()
})



function moverPersonaje(event) {

    // Obtiene el código de la tecla presionada
  
  
   
      const codigoTecla = event.keyCode;
     
    // Verifica si se presionó una tecla de dirección
   
      // Ejecuta el código correspondiente a la tecla presionada
    
      console.log(codigoTecla)
      switch (codigoTecla) {
        case (65 || 37):
          // Código para la tecla de dirección izquierda
         
            {
            if(posX>1){
              if(posYMalo ==(posY) && posXMalo==(posX-1)){
               
                posXMalo=Math.floor(Math.random() * 8)+1 ;
                posYMalo=Math.floor(Math.random() * 8)+1 ;
                matriz[posYMalo][posXMalo].style="background-color:yellow"
                cantidad.textContent++
              }
              matriz[posY][posX].style="background-color:white"
              posX--;
              matriz[posY][posX].style="background-color:blue"
          }
        }
          break;
        case (87 || 13):
          // Código para la tecla de dirección arriba
          
         {  if(posY>1){
          if(posYMalo ==(posY-1) && posXMalo==posX){
            cantidad.textContent++
            posXMalo=Math.floor(Math.random() * 8)+1 ;
            posYMalo=Math.floor(Math.random() * 8)+1 ;
            matriz[posYMalo][posXMalo].style="background-color:yellow"
           
          }
              matriz[posY][posX].style="background-color:white"
              posY--;
              matriz[posY][posX].style="background-color:blue"
          
        }
          break;}
        case (68 || 39):
  
          // Código para la tecla de dirección derecha
        {     
        if(posX<8){
          if(posYMalo ==(posY) && posXMalo==(posX+1)){
            cantidad.textContent++
            posXMalo=Math.floor(Math.random() * 8)+1 ;
            posYMalo=Math.floor(Math.random() * 8)+1 ;
            matriz[posYMalo][posXMalo].style="background-color:yellow"
           
          }
              matriz[posY][posX].style="background-color:white"
              posX++;
              matriz[posY][posX].style="background-color:blue"
          }
        }
          break;
        case (83 || 40):
          // Código para la tecla de dirección abajo
          if(posY<8){ 
            if(posYMalo ==(posY+1) && posXMalo==posX){
            cantidad.textContent++
            posXMalo=Math.floor(Math.random() * 8)+1 ;
            posYMalo=Math.floor(Math.random() * 8)+1 ;
            matriz[posYMalo][posXMalo].style="background-color:yellow"
           
          }
          {   
              matriz[posY][posX].style="background-color:white"
              posY++;
              matriz[posY][posX].style="background-color:blue"
          }
        }
          break;
      }
}
  



const timerDiv = document.getElementById("timer");

let secondsLeft;
// funcion para poner el timer en 60 y bajarlo hasta 0
 function reloj(element) {
  secondsLeft = 60;
  const countdown = setInterval(function() {
    secondsLeft--;
    timerDiv.innerText = secondsLeft + " segundos restantes";
    if (secondsLeft === 0) {
      clearInterval(countdown);
      alert("Tu Puntuacion Final fue de "+cantidad.textContent);
      document.forms[0].elements[0].disabled=false
      document.forms[0].elements[1].disabled=false;
      cantidad.textContent="0";
      reiniciar()
    }
  }, 1000);
};

