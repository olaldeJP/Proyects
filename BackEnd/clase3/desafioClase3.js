
import fs from 'fs/promises'
/*
const arreglo=[{
    nombre:'Juan',
    apellido:'Olalde'
    
},
{
    nombre:'Jero',
    apellido:'Pacciarelli'    
}]
const arregloJson= JSON.stringify(arreglo)
console.log(arregloJson)
await fs.writeFile('C:/Users/jpola/Proyects/BackEnd/clase3/usuariosJson.json',arregloJson)
const contenido= await fs.readFile('C:/Users/jpola/Proyects/BackEnd/clase3/usuariosJson.json', 'utf8')
const contenidoJSON=JSON.parse(contenido)
    console.log("AA")
    console.log(contenidoJSON[1].nombre)
    */
 
    const juan={
        nombre:'Juan',
        apellido:'Olalde'
    }
    const jero={
        nombre:'Jero',
        apellido:'Pacciarelli'    
    }
const juanJson=JSON.stringify(juan)
const jeroJson=JSON.stringify(jero)
await fs.writeFile('C:/Users/jpola/Proyects/BackEnd/clase3/usuariosJ.json','[')
await fs.appendFile('C:/Users/jpola/Proyects/BackEnd/clase3/usuariosJ.json',juanJson)
await fs.appendFile('C:/Users/jpola/Proyects/BackEnd/clase3/usuariosJ.json',',')
await fs.appendFile('C:/Users/jpola/Proyects/BackEnd/clase3/usuariosJ.json',jeroJson)
await fs.appendFile('C:/Users/jpola/Proyects/BackEnd/clase3/usuariosJ.json',']')

