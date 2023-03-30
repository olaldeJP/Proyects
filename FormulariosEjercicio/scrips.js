
let arraysUssers=[]
let validar=(evento)=>{
    
        if((evento.value =="") && (evento.required==false)){
            let parrafo=document.createElement("p");
            parrafo.textContent="invalid"
            parrafo.style.color="red"
            document.querySelector(".labelName").appendChild(parrafo);
            evento.required=true
           
        }
}
const buscar=(usser)=>{

    for (let i=0;i<arraysUssers.length;i++){
        if((usser.email == arraysUssers[i].email) && (usser.password == arraysUssers[i].password)){
            let check=document.querySelectorAll(".checkBox");
            switch (arraysUssers[i].level){
            case "level1":
                check[0].disabled=false
                check[1].disabled=false
            break
            case "level2":
                check[2].disabled=false
                check[3].disabled=false
            break
            case "level2":
                check[4].disabled=false
                check[5].disabled=false
            break
            
        }
        return true
    }
    return false
}
}

const chequear=(valores)=>{

 
   
    if  (valores[0].value==""){
        valores[0].required=true;
        document.querySelector(".errorTextEmail").style.display="contents"
   
    }else{
        if(valores[1].value==""){
            valores[1].required=true;
            document.querySelector(".errorTextPassword").style.display="contents"
    }
    }
}
const enviar=()=>{
           
    valores=document.forms[0].elements;
    if ( (valores[0].value!="") && (valores[1].value!="")) {
            let usser={
                email:valores[0].value,
                password:valores[1].value,
            }
            if(buscar(usser)){
                alert("You Are Connected")

            }else{
                alert("This Usser Doesnt Exist")
            }
        }else{chequear(valores)}
}

let usserCreate=(valores)=>{
    
    let usser={
        email:valores[0].value,
        password:valores[1].value,
        level:valores[2].value
    }
    return usser;
}
let sendCreateAccount=(event)=>{
    event.preventDefault()
    let valores=document.forms[1].elements;
    arraysUssers.push(usserCreate(valores))
   
};
const checkInputs=(event)=>{
  //  event.target.required=true
    
 
 }

// document.querySelector(".submidCA").addEventListener("submit",sendCreateAccount())

///// REINICIAR POR ERROR:



