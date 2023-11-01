//ahora lo vamos a ver de forma asincronica(async)
//nose traemos la version de promesas de file system
import fs from 'fs/promises'; 
//crear, agregar, leer , eliminar de forma asincronicas
/*
fs.writeFile('archivo.txt', 'hola Mundo \n');
fs.appendFile('archivo.txt','EEVAAAA \n')
fs.readFile('archivo.txt')
fs.unlink('archivo.txt');
*/

async function main(){
    //crear
     await fs.writeFile('textoAsinc.txt','hola mundo')

    //leer
    const texto=await fs.readFile('textoAsinc.txt','utf-8')
    
    console.log('lo leyo')
    }

    main()
    console.log("termine")