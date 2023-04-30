

function ubicacionOK(position){
    console.log(position)
}
function ubicacionERRRO(error){
   console.log(error)
}
const objetoConfig={
    timeout:2000
}

navigator.geolocation.getCurrentPosition(ubicacionOK,ubicacionERRRO,objetoConfig)