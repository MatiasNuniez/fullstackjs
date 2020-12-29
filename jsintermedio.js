// valores booleanos false y true son valores boleanos al valores que son falsi y truti!"asd"
// o!!"asd"
// esto se llama cohersion
// true + true = 2 porque js trata de verificar que es lo que quiero hacer por ejemplo toma los true como 1
// false = 0 y true = 1, cuando hacemos 1 + "1"
// te toma como que lo que queres hacer es concatenar 2 strings y no sumar
// const persona = {
//     nombre: 'Matias',
//     apellido: 'Nunez',
//     edad: 17
// }

// if (persona.edad > 18) {
//     console.log('Es mayor');
// } else {
//     console.log('No es mayor');
// }

// loops
// for
// while

// let myArray = []

// recibe 3 variables.1 de control que controla cuantas veces hacemos iteraciones en ese loop, la segunda si queremos seguri haciendo iteraciones o no y la tercera es un incremento a esa variable de control


// for (let index = 0; index < myArray.length; index++) {
//     myArray.push(index)
// }

// while necesita la variable de control que este inicializada por fuiera del ciclo

// let myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let control = 0

// while (control < 10) {
//     myArray2.push(control)
//     console.log(myArray2);
//     control = control + 1
// }

// .map espera siempre un
// return .foreach no

// function pares(numeroActual) {
//     return numeroActual % 2 === 0
// }

// let resultado = myArray2.filter(pares)
// resultado

// arrow
// function son funciones anonimas

// let resultado = myArray2.filter((numeroActual) =>
//     numeroActual % 2 === 0
// )

// en js se interpreta todo el js(lo lee) y luego compila el programa(si la funcion esta por debajo de donde se la llama lo que hace js es pasarlo arriba de donde se la llama para poder ejectuarla)
// esto se llama Hoisting con funciones comunes
// con las arrow functions no funciona el hoisting

// const miFuncion2 = () => {
//     return 100
// }

// function miFuncion() {
//     console.log('1 ejecte miFuncion');
//     console.log('2 Ejectute miFuncion');
//     miFuncion2()
// }

// destructuracion ES6(documento donde dice como el lenguaje deber comportarse)

// let myObject = { a: 1, b: 2, c: 'hola', d: function() { console.log('soy una funcion') }, e: true }

// myObject

// let { a, b } = myObject

// let myArray = [1, 2, 'hola', () => console.log('soy una funcion'), true]

// myArray

// let [numUno, numDos, hola, funcion, boolean] = myArray

// la diferencia es que en el map esta especificado ya el nombre de cada uno de los elementos y en el array no esta especificado nada, creamos las variables despues cuando destructuramos

// let { d, ...otros } = myObject //spread operator destructura d y los demas elementos en "otros"

// PROTOTYPES: SON ENLACES O PROPIEDADES DE OBJETOS EN JS

// function myObject() {
//     this.getFullName = function() {
//         return `${this.nombre} ' ' ${this.apellido}`
//     }
//     this.setNombre = function(nombre) {
//         this.nombre = nombre
//     }
//     this.setApellido = function(apellido) {
//         this.apellido = apellido
//     }
// }

// myObject.prototype.nombre = 'vacio'
// myObject.prototype.apellido = 'vacio'

// let object1 = new myObject()

// myObject.prototype.getFullName = function() {
//     return `${this.nombre} ' ' ${this.apellido}`
// }
// myObject.prototype.setNombre = function(nombre) {
//     this.nombre = nombre
// }
// myObject.prototype.setApellido = function(apellido) {
//     this.apellido = apellido
// }