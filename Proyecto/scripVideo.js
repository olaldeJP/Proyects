
let video=document.querySelector(".elVideo")
let duracion=document.querySelector(".duracion");

const mostrarTiempo=()=>{

    duracion.textContent= (video.duration - video.currentTime).toFixed(0)+"S";
    
    }
/* La funcino mostrartiempo() muestra segundo a segundo lo que falta para que termine el video,ademas de los dos eventos de los botones Play y Pause, estuve haciendo diferentes formas para mostrarlo con minutos y segundos pero no tuve mucho tiempo para probarlo y que funcione correctamente, intentare hacerlo para la fecha final, ademas, el cleanInterval tampoco me estaria funcionando , no estoy seguro porque */ 

document.querySelector(".botonPlay").addEventListener("click",function(){
    video.play();
    setInterval(mostrarTiempo,1000);
})

document.querySelector(".botonPause").addEventListener("click",function(){
    video.pause();
    clearInterval(mostrarTiempo())
  
})


