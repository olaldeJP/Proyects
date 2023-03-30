


function validar(){
      let check=  document.forms[0][7].checked;
      if (check==true){
        document.forms[0][8].disabled=false
        document.forms[0][9].disabled=false;
     
    }
}

document.forms[0][7].addEventListener("change",function (){
    let check=  document.forms[0][7].checked;
    if (check==true){
      document.forms[0][8].disabled=false
      document.forms[0][9].disabled=false;
   
  }
});


function mostrar(){
    alert("HOLA")
    console.log(document.forms[0][2].value)
}
