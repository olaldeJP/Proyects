// Js me permite que algunas cosas se ejecuten mientras ejecutan otras, esto se llama asincronismo.

// para poder combinar comportamientos secuencial y que a su vez haya asincronia se utilizan PROMESA
// una promesa es un objeto que esta llevando algo a cabo


function randInt(){
    return Math.random() *200
}

function tareaQueNoSeCuantoTarda(){

    //resolve y reject son FUNCNIONES que uzamos para saber si salio todo bien
   return new Promise((resolve,reject)=>{
       console.log('ejecutando')
       setTimeout(()=>{
           console.log('me ejecute ')
           resolve(true)
        },randInt())
    })
}

//await indica que hasta que no termine esa instruccion no pasa a la siguiente.
 tareaQueNoSeCuantoTarda()


 async function arrancarElDia(){
    await tareaQueNoSeCuantoTarda()
    await Promise.all([
        tareaQueNoSeCuantoTarda(),
        tareaQueNoSeCuantoTarda(),
        tareaQueNoSeCuantoTarda()
    ])
 }