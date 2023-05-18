
/* VARIABLES */

const li=document.querySelectorAll(".liC");
const ulBox=document.querySelector(".ulBox");
const circuloCompra=document.querySelector(".carroBoton");
const cardCompras=document.querySelectorAll(".card")
const botonCompra=document.querySelectorAll("#agregarProducto");
const botResta=document.querySelectorAll(".botonRestar")
let mostrar=false;
let arregloCompra=[0,0,0]


 /*SCRIPTS PARTE DEL MENU HAMBURGUESA */
 /*
function cambiarMenuHamburguesa(){ 
   if (mostrar == false){
        ulBox.style="animation: desplegarMenuHamburguesa 1s forwards;"
        botonH.style="background-color: red;border:solid 2px black;"
        botonH.textContent="X"
        mostrar=true
      }else{
        ulBox.style="animation: guardarMenuHamburguesa 1s forwards; "
        botonH.textContent="V"
        botonH.style="border: solid 2px  orange;background-color: rgb(51, 92, 51)";
        mostrar=false;

      }

}*/




/*SCRIPS SECCION COMPRA */



function restarProducto(event){
   circuloCompra.textContent--
   
   const comparar=event.parentElement.children[0].textContent
   switch (comparar) {
      case "Saco de 10kg":
         arregloCompra[0]--
         if(arregloCompra[0]==0){
            event.style.opacity=0
            botResta[0].disabled=true
         }
       
         break;
      case "Saco de 3kg":
         arregloCompra[1]--
         if(arregloCompra[1]==0){
            event.style="opacity:0"
            botResta[1].disabled=true
         }
         break;
      case "Saco de 100kg":
         arregloCompra[2]--
         if(arregloCompra[2]==0){
            event.style="opacity:0"
            botResta[2].disabled=true
         }
      
         
         break
         
      default:
        
         alert("ERROR");
   }
if(circuloCompra.textContent=="0"){
      circuloCompra.style="opacity:0"
   }
}

function aumentarcarro(event){
   
   if(circuloCompra.textContent=="" ||  circuloCompra.textContent=="0"){
      circuloCompra.style="opacity:1"
   }

    circuloCompra.textContent++
   switch (event.parentElement.children[5]) {
      case botResta[0]:
         botResta[0].style="opacity:1"
         botResta[0].textContent="-";
         botResta[0].disabled=false
         arregloCompra[0]++
         break;
      case botResta[1]:
         botResta[1].style="opacity:1"
         botResta[1].textContent="-";
         botResta[1].disabled=false
         arregloCompra[1]++
         break;
      case botResta[2]:
         botResta[2].style="opacity:1"
         botResta[2].textContent="-";
         botResta[2].disabled=false
         arregloCompra[2]++
         break
      default:
         alert("ERROR");
   }


}


