
let posicionesTabla=document.getElementsByTagName("td");
let auxiliar;
let comprobar=false;
let tableroLog;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



function chequearTablero(tableroLog){
  let fullMapa=0;
  for(let j=15;j>=0;j--){
    if(tableroLog[j]=="black"){
      fullMapa++;
    }
  }
  if(fullMapa==16){
     let colores=["blue","red","green","darkgoldenrod","brown","aqua","blueviolet","greenyellow","blue","red","green","darkgoldenrod","brown","aqua","blueviolet","greenyellow"]
     tableroLog=shuffle(colores);
    document.querySelector(".boton").disabled=false
    alert("YOU FINISH")
      for(let j=15;j>=0;j--){
        posicionesTabla[j].style.backgroundColor=""
      }
  }
}

function chequear(unTd,pos,tableroLog){
  if(unTd.style.backgroundColor==""){
        unTd.style.backgroundColor=tableroLog[pos]
       
        if(comprobar==false){
            auxiliar=pos;
            comprobar=true;
        }else{
        
        if(tableroLog[auxiliar]==tableroLog[pos]) {
          
          tableroLog[pos]="black"
          tableroLog[auxiliar]="black"
          posicionesTabla[auxiliar].style.backgroundColor="black"
          posicionesTabla[pos].style.backgroundColor="black"
        }else{
          posicionesTabla[auxiliar].style.backgroundColor=""
          posicionesTabla[pos].style.backgroundColor=""
        }
        comprobar=false
        }
      }
  chequearTablero(tableroLog)
}



function start(){
    
     let colores=["blue","red","green","darkgoldenrod","brown","aqua","blueviolet","greenyellow","blue","red","green","darkgoldenrod","brown","aqua","blueviolet","greenyellow"]
     tableroLog=shuffle(colores);
     document.querySelector(".boton").disabled=true
    alert("LETS GO!")
    for(let j=15;j>=0;j--){
        posicionesTabla[j].addEventListener("click",function(){
        chequear(this,j,tableroLog);
        
        })
    }

}

