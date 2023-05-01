
/*SCRIP para video */ 
let video=document.querySelector(".elVideo")
let duracion=document.querySelector(".duracion");

const mostrarTiempo=()=>{
    
    let m=((document.querySelector(".elVideo").duration - document.querySelector(".elVideo").currentTime).toFixed(0)/60).toFixed(0)
    let s=(document.querySelector(".elVideo").duration - document.querySelector(".elVideo").currentTime).toFixed(0)%59
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


