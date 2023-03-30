/* EJERCICIO let texto=document.querySelector(".input");
let paises=["Argentina","Colombia","Peru"];
let boton=document.querySelector(".BOT");

boton.addEventListener("click",function (){
    
    console.log(document.querySelector(".input").textContent);
   let v=texto.value;
    if (paises.indexOf(v)== -1){
            console.log(v)
            paises.push(v);
            alert("SE AGREGO");
    }else{
        alert("YA ESTA AGREGADO");
    }
}
) 


function clickk(){
    
    console.log(document.querySelector(".input").textContent);
   let v=texto.value;
    if (paises.indexOf(v)== -1){
            console.log(v)
            paises.push(v);
            alert("SE AGREGO");
    }else{
        alert("YA ESTA AGREGADO");
    }
}*/



let pantalon={
    categoria:"indumentaria",
    color:"azul",
    stock:15
}
let campera={
    categoria:"indumentaria",
    color:"verde",
    stock:5
}
let zapatilla={
    categoria:"indumentaria",
    color:"negro",
    stock:20
}

let arreglo=[pantalon,campera,zapatilla];
let listaCompras=[];
let elbody=document.querySelector("body");
let bot=document.querySelector(".botonp")
function agregarPantalon(){
    if(arreglo[0].stock>0){
    arreglo[0].stock--;
    listaCompras.push(arreglo[0])
    imprimirLista();
   
   }
    else
        {
         alert("NO QUEDA STOCK");       
        }   

}



function agregarCampera(){
    if(arreglo[1].stock>0){
    arreglo[1].stock--;
     listaCompras.push(arreglo[1]);
     imprimirLista();
     
    }
    else
        {
         alert("NO QUEDA STOCK");       
        }   

}
function agregarZapatilla(){
    if(arreglo[2].stock>0){
    arreglo[2].stock--
    listaCompras.push(arreglo[2]);
    imprimirLista();
        }
    else
        {
         alert("NO QUEDA STOCK");       
        }   
    
}


function imprimirLista(){
    let nuevo=document.createElement("p");
    
    listaCompras.forEach(element => {  
        let nuevaC=document.createElement("p");
        nuevaC.textContent=element.categoria;
        elbody.appendChild(nuevaC)
        let nuevaColor=document.createElement("p");
        nuevaColor.textContent=element.color;
        elbody.appendChild(nuevaColor)
        let s=document.createElement("p");
        s.textContent=element.stock;
        elbody.appendChild(s);
    });

  

}

function borrarLista(){
    let nueva=[];
    listaCompras=nueva;
}