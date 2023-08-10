// const pregunta1 = prompt ("Hace calor?")
// const pregunta2 = prompt ("es de dia?")
// const pregunta3 = prompt ("vas a la playa?")
// const pregunta4 = prompt ("vas a meterte al mar?")
// const pregunta5 = prompt ("Sabes nadar?")

console.log("Hola a todos".slice(2))
var contadorDePuntos = 0


if(pregunta1 === "si".trim().toLowerCase() ){
  contadorDePuntos = contadorDePuntos + 1
}

if(pregunta2 === "si".trim().toLowerCase() ){
  contadorDePuntos = contadorDePuntos + 1
}
if(pregunta3 === "si".trim().toLowerCase() ){
  contadorDePuntos = contadorDePuntos + 1
}
if(pregunta4 === "si".trim().toLowerCase() ){
  contadorDePuntos = contadorDePuntos + 1
}
if(pregunta5 === "si".trim().toLowerCase() ){
  contadorDePuntos = contadorDePuntos + 1
}


console.log(contadorDePuntos)

if(contadorDePuntos == 5){
  document.write("<img src='https://media.gq.com.mx/photos/5e07c0743800150008dc9aff/master/w_6081,h_4012,c_limit/trajes-de-bano-para-hombres-como-usarlos-segun-tu-tipo-de-cuerpo.jpg'></img>")
}else if(contadorDePuntos == 4 && pregunta5 !== "si".trim().toLowerCase() ){
  document.write("Usa lentes de Sol")
}