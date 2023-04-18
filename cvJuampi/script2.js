let botonH=document.querySelector(".botonH")
let ulBox=document.querySelector(".ulBox");
let li=document.querySelectorAll(".liC");

let mostrar=false;
li.style="opacity:0"
ulBox.style="opacity:0"
ulBox.style="height:0px"

botonH.addEventListener("click",function(){
    if(mostrar==false){
        ulBox.style="animation-name:mostrarCajaUL"
        ulBox.style.height="230px"
        ulBox.style.opacity="1"
        botonH.textContent="X"
        li.forEach(function(element){
            element.style="animation-name:mostrarLI"
           
        })
        mostrar=true
       
    }else{
        mostrar=false
        botonH.textContent="V"
        li.forEach(function(element){
            element.style="animation-name:ocultarLI"
            
        })
        ulBox.style="animation-name:ocultarCajaUL"
        ulBox.style.height="0px"
        ulBox.style.opacity="0"
     
        
    }



})
