/*Scrips del juego */

const imagenes=document.querySelectorAll(".imgJuego")


 function mover(evento){
    evento.dataTransfer.setData("text", evento.target.id);
    evento.dataTransfer.setData("URL",evento.target.src)
 }

 function habilitarDrop(evento){
   evento.preventDefault();    
}

 function soltar(evento){
/*Variables con la informacion de la imagen arrastrada y del divBox */
    const idImg = evento.dataTransfer.getData("text");
    const srcImg= evento.dataTransfer.getData("URL");
    const imgBox=document.createElement("img")
    const divBox= document.getElementById(evento.target.id)

/*Ponemos el P dentro del div y la imagen arrastrada anteriormente en display:none para que quede la imagen acomodada en el div y desaparezca la imagen  */
    document.getElementById(idImg).style.display="none"
    divBox.childNodes[0].style="display:none"

/* Seteamos los atributos de la img y la agregamos al divBox */

    imgBox.setAttribute("id",idImg)
    imgBox.setAttribute("src",srcImg)
    imgBox.classList.add("imgJuego")
    divBox.appendChild(imgBox)


/*Agrege unos if que se encargar de comprobar si las imagenes estan ordenadas o no y que muestre un pequeño P debajo */
    const divsDrop  = document.querySelectorAll(".divsDrop")

       if((divsDrop[0].children[1]!=undefined) && (divsDrop[1].children[1]!=undefined) && (divsDrop[2].children[1]!=undefined)){

            if ((divsDrop[0].children[1].id=="img1") && (divsDrop[1].children[1].id=="img2") && (divsDrop[2].children[1].id=="img3"))
                {
                    document.getElementById("sectionImg").innerHTML=`
                    <p style="color: lightgreen;"> FELICIDADES! GANASTE EL JUEGO </p>
                    `;
                }else{
                          document.getElementById("sectionImg").innerHTML=`
                        <p style="color: lightcoral;"> INCORRECTO, VUELVE A INTENTARLO</p>
                        `;
                    }

       }

 }


 function reiniciar(){
    document.querySelector(".juego").innerHTML=`
    <section class="sectionJuego">
        <div id="divBox1" class="divsDrop" ondrop="soltar(event)" ondragover="habilitarDrop(event)"><p class="pBox">Arrastre y suelte la imágene aquí</p></div>
        <div id="divBox2" class="divsDrop" ondrop="soltar(event)" ondragover="habilitarDrop(event)"><p class="pBox">Arrastre y suelte la imágene aquí</p></div>
        <div id="divBox3" class="divsDrop" ondrop="soltar(event)" ondragover="habilitarDrop(event)"><p class="pBox">Arrastre y suelte la imágene aquí</p></div>
    </section>
    <section id="sectionImg" class="sectionJuego">
    <img id="img2"class="imgJuego" src="Imagen/Rompe2.png" alt="Imagen-Juego" ondragstart="mover(event)">
    <img id="img1"class="imgJuego" src="Imagen/Rompe1.png" alt="Imagen-Juego" ondragstart="mover(event)">
    <img id="img3"class="imgJuego" src="Imagen/Rompe3.png" alt="Imagen-Juego" ondragstart="mover(event)">
    </section> 
    `;
 }