const li=document.querySelectorAll(".liC");
const ulBox=document.querySelector(".ulBox")
const botonH=document.querySelector(".botonHamburguesa")
let mostrar=false;



botonH.addEventListener("click",function(){
       
        if (mostrar == false){
            ulBox.style="display:flex"
            botonH.style="background-color: red;border:solid 2px black;"
            botonH.textContent="X"
            mostrar=true
         }else{
            ulBox.style="display:none "
            botonH.textContent="V"
            botonH.style="border: solid 2px  orange;background-color: rgb(51, 92, 51)"
         
            mostrar=false;
        }


})
