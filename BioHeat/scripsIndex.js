const botonH=document.querySelector(".botonHamburguesa");
const li=document.querySelectorAll(".liC");
const ulBox=document.querySelector(".ulBox");
const circuloCompra=document.querySelector(".circulo");
const cardCompras=document.querySelectorAll(".card")
const botonCompra=document.querySelectorAll("#agregarProducto");
let mostrar=false;


function cambiarMenuHamburguesa(){
       
    if (mostrar == false){
        ulBox.style="animation: desplegarMenuHamburguesa 1s forwards;"
        botonH.style="background-color: red;border:solid 2px black;"
        botonH.textContent="X"
        mostrar=true
     }else{
        ulBox.style="animation: guardarMenuHamburguesa 1s forwards; "
        console.log(ulBox.style.display);
        console.log(ulBox.style.opacity);
        console.log("3");               
        botonH.textContent="V"
        botonH.style="border: solid 2px  orange;background-color: rgb(51, 92, 51)";
        mostrar=false;

}
}


function aumentarcarro(event){
    console.log(event.style)
    circuloCompra.textContent++
    

}


botonH.addEventListener("click",cambiarMenuHamburguesa);
