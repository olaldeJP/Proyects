
/*SCRIP para video */ 
let video=document.querySelector(".elVideo")
let duracion=document.querySelector(".duracion");

/*Funcion que , por medio del calculo matematico DuracionDelVideo - TiempoActual, muestra el tiempo faltante para que termine */

const mostrarTiempo=()=>{
    
   duracion.textContent= (video.duration - video.currentTime).toFixed(0)+"S";
    
    }
/* La funcino mostrartiempo() muestra segundo a segundo lo que falta para que termine el video,ademas de los dos eventos de los botones Play y Pause */ 
document.querySelector(".botonPlay").addEventListener("click",function(){
    video.play();
    setInterval(mostrarTiempo,1000);
})

document.querySelector(".botonPause").addEventListener("click",function(){
    video.pause();
    clearInterval(mostrarTiempo())
  
})


