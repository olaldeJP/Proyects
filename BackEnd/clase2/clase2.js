u={ us:'maria' , ps:'123'}
//para recorrer los objetos

/*for(const nombreP in u) {console.log(nombreP)} // imprime us y ps
for(const nombreP in u) {console.log(u[nombreP])} // imprime maria y 123


for(const nombreP of Object.keys(u)) {console.log(nombreP)}
for(const nombreP of Object.values(u)) {console.log(nombreP)}
 */
const arr=[1,2,3,4,5,6]
const persona={
    nombre:'pepe' , 
    edad:35
    }

//...arr --> 1,2,3,4,5,6 para enviar como parametros de funciones 

const np={
    //operador de despliegue :
    ...persona, //extrae los atributos de persona, y las agrega al nuevo objeto
    direccion:'en casa',
    edad:40
} 
const personas=[
    {dni:3, nombre:'aa',edad:1 , pais:'asd'},
    {dni:2, nombre:'aa',edad:2 , pais:'asd'},
    {dni:1, nombre:'aa',edad:3 , pais:'asd'}
    ]
    const array1 = [5, 12, 8, 130, 44];

    const isLargeNumber = (element) => element > 10;
    // console.log(personas.findIndex())
//console.log(np)
//const pe= persona.findIndex(p => p.dni ===dni )


//array.Flat --> aplana los arreglos dentro de los arreglos
const array2= [1,2,3,[1,2,3,[1,2,3]],4]
/*console.log(array2)
console.log(array2.flat())
console.log(array2.flat(2))*/

//Dinamic Import

const barrio= 
[   
    //torre1 
    [
    //dpto1
        {porp:'yo',piso:1},
     //dpto2
        {porp:'yo',piso:2}

    ],
    //torre2
    [
           //dpto1
           {porp:'yo',piso:1},
           //dpto2
              {porp:'yo',piso:2}
      
    ],
    //torre3
    [
               //dpto1
        {porp:'yo'},
        //dpto2
        {porp:'yo'}
   
    ]
]/*
console.log(barrio)
console.log(barrio[0][1])
console.log(barrio.flat(2))
*/
