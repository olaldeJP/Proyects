const logo=document.querySelector(".myLogo");
const botonIzquierdaLibros=document.querySelector(".botonIzquierda");
const imgL=document.querySelector(".imagenLogo");
const botonDerechaLibros=document.querySelector(".botonDerecha");
let contLibros=document.querySelector(".containerLibrosFavoritos");
let contSeries=document.querySelector(".containerSeriesFavoritos");
let contHobbis=document.querySelector(".containerHobbiesFavoritos");

let librosBoolean=false;
let seriesBoolean=false;
let hobbisBoolean=false;

function MostrarHobbis(){
  if(hobbisBoolean==false){
    contHobbis.style.display="flex"
    hobbisBoolean=true;
  }
  else{
    contHobbis.style.display="none"
    hobbisBoolean=false;
  }

}
  function MostrarLibros(){
    if(librosBoolean==false){
      contLibros.style.display="flex"
      librosBoolean=true;
    }
    else{
      contLibros.style.display="none"
      librosBoolean=false;
    }
  }

  function MostraSeries(){
    if(seriesBoolean==false){
      contSeries.style.display="flex"
      seriesBoolean=true;
    }
    else{
      contSeries.style.display="none"
      seriesBoolean=false;
    }
  }


  document.getElementById("toggle-options").addEventListener("click", function() {
    var additionalOptions = document.getElementById("additional-options");
    if (additionalOptions.style.display === "block") {
      additionalOptions.style.display = "none";
    } else {
      additionalOptions.style.display = "block";
    }
  });

  
  

function crearLibros(libro){
    let caja=document.createElement("div");
    caja.className="box";
    let primerH=document.createElement("h2");
    primerH.textContent=libro.name;
    let primerP=document.createElement("p");
    primerP.textContent=libro.author;
    let unaImg=document.createElement("img");
    unaImg.src=libro.image;
    let segundoP=document.createElement("p");
    segundoP.textContent=libro.comment;
    caja.appendChild(primerH);
    caja.appendChild(primerP);
    caja.appendChild(unaImg);
    caja.appendChild(segundoP);
    return caja;
}

function borrarLibros(){
  document.querySelector(".containerFavoritos").removeChild(".box")
}

function MostrarLibro(){
   if(librosBoolean==false){
  for(var i=0 ;i<4;i++){
    document.querySelector(".containerFavoritos").insertBefore(crearLibros(libros[i]),botonDerechaLibros);
    librosBoolean=true;
  }
}else{
  librosBoolean=false;


}
}

