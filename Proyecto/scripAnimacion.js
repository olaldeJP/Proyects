/*SCRIPS para la aparicion del a computadora */
const primeraAnimacion=document.querySelectorAll(".primerMovimiento")
const segundaAnimacion=document.querySelectorAll(".segundoMovimiento")

/*function realizarPrimeraAnimacion(){*/
    primeraAnimacion[0].style="animation: aparecerExterior 2s"
    primeraAnimacion[1].style="animation: aparecerExterior 2s"


/*function realizarSegundaAnimacion(){*/
    segundaAnimacion[0].style="animation: aparecerInterior 2.5s"
    segundaAnimacion[1].style="animation: aparecerInterior 2.5s"
    
    primeraAnimacion[0].style.opacity="1"
    primeraAnimacion[1].style.opacity="1"
    segundaAnimacion[0].style.opacity="1"
    segundaAnimacion[1].style.opacity="1"
/*
realizarPrimeraAnimacion()
realizarSegundaAnimacion()

*/