//manera sincronica para manipular arhchivos (crud : create , read, update, delete)
// Utilizamos la libreria de fs(file system) de nodeJS, para traer una libreria usamos la funcion require ,antes de ES6, ahora se usan modulos
 // const fs=require('fs');(vieja funcion)


//create - crear

//npm init -y (crea el package.json) que lo necesitamos para escribir una conf del proyecto y le agregamos el type, 2 opciones, module es la nueva sintacsis

//nueva forma en modulo para traer la nueva libreria
import fs from 'fs'; 
//5 funciones principales:

//crea el archivo, y el parametro de lo que se quiera escribir,  ademas si ya existe,lo actualiza
fs.writeFileSync('archivo.txt', 'hola Mundo \n');
fs.writeFileSync('archivo.txt', '!!!!hola Mundo!!!\n');

//agrega al final del archivo
const date=new Date().toISOString()
fs.appendFileSync('archivo.txt','EEVAAAA \n'+date+'\n')


// read(leer un archivo)
const texto= fs.readFileSync('archivo.txt')
console.log(texto)
//los imprimer en binario, hay que indicarle la estrategia de codificacion para leer los caracteres
const texto2= fs.readFileSync('archivo.txt','binary')
console.log(texto2)
//por defecto escribe en utf-8,
const texto3= fs.readFileSync('archivo.txt','utf-8')
console.log(texto3);

//Delete(borrado)

// borra el archivo completo
fs.unlinkSync('archivo.txt');
//exite una version mas nueva de borrar, pero no esta en todos lso dispositivos
//fs.rm()


//ahora lo vamos a ver de forma asincronica(async)