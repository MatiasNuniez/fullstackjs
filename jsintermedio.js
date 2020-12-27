//valores booleanos false y true son valores boleanos al valores que son falsi y truti !"asd" o !!"asd" esto se llama cohersion
//true + true = 2 porque js trata de verificar que es lo que quiero hacer por ejemplo toma los true como 1
//false = 0 y true = 1 , cuando hacemos 1 + "1" te toma como que lo que queres hacer es concatenar 2 strings y no sumar
// const persona = {
//     nombre:'Matias',
//     apellido:'Nunez',
//     edad:17
// }

// if (persona.edad > 18){
//     console.log('Es mayor');
// }else{
//     console.log('No es mayor');
// }

//loops for while 

// let myArray = []

// recibe 3 variables. 1 de control que controla cuantas veces hacemos iteraciones en ese loop, la segunda si queremos seguri haciendo iteraciones o no y la tercera es un incremento a esa variable de control


// for (let index = 0; index < myArray.length; index++) {
//     myArray.push(index)
// }

//while necesita la variable de control que este inicializada por fuiera del ciclo

let myArray2 = []
let control = 0

while (control < 10) {
    myArray2.push(control)
    console.log(myArray2);
    control = control + 1
}