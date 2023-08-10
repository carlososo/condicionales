var edadCarlos = 38;
var luzSemaforo = true;

// if(edadCarlos >= 18 &&  edadCarlos <=30){
//   console.log("Puede entrar");
// }else{
//   console.log("No Puede entrar");
// }


// if(edadCarlos >= 18 || edadCarlos <= 30){
//   console.log("Puedes entrar")
// }else{
//   console.log("No puedes entrar")
// }

//dos maneras de manipular strings y son 
//toUpperCase() mayusculas y toLowerCase() minusculas

if(luzSemaforo == "verde"){
  console.log("Puede avanzar");
} else if( luzSemaforo == "amarillo"){
  console.log("Comience a frenar");
} else if( luzSemaforo == "rojo"){
  console.log("Pare!")
}else{
  console.log("No es un Valor valido")
}

