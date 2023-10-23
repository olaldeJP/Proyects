
function notNull(value){
if(value === null  )throw new Error (' La capacidad debe ser meyor a 0')
       return value
}

class Evento {


    
  constructor ({id,nombre,precio,capacidad} )
  
     {
            this.idMaster++;
            this.id = id;
            this.nombre=nombre;
            this.precio=precio;
            this.capacidad=capacidad;
            this.fecha=new Date().toLocaleDateString();
            this.participantes=[];
        }

getNombre(){
   return this.nombre;
}

getPrecio(){
    return this.precio
}
getCapacidad(){
    return  this.capacidad;
}
getParticipantes(){
    return [...this.participantes]
}
agregarParticipante(idUsuario){
    if(this.participantes.includes(idUsuario)) throw new Error('ID usuario repetido')
        this.participantes.push(idUsuario)
}

}


class ticketManager{
    #eventos
    constructor(){
        this.#eventos=[]
    }
    agregarEvento(){

    }
    agregarUsuario(idEvento,idUsuario){
        const evento=this.#eventos.find(e=> e.id ===idEvento)
        if(!evento) throw Error('el evento con id ${idEvento} no exixte')
        evento.agregarParticipante(idUsuario)
        }

        get 
}
const datosEvento={
    id:1 ,
    nombre,
    precio:5,
    lugar:'mi casa',
    capacidad:0


}

console.log(typeof(datosEvento.nombre))

/*
const evento=new Evento(datosEvento)
console.log(evento)
console.log(evento.getNombre())*/