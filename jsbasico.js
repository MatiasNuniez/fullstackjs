let persona = {
    nombre : "matias",
    apellido : "Nunez",
    dni : 40790916,
    email : "matiasnuniez192@gmail.com"
}
persona.nombre
persona.apellido
persona.dni
persona.email

// importante en js es window que tiene todas las propiedades de la ventana en la que estamos 
//document 

// Funciones

//Arrays 
const myArray = [1,2,3, 'hola', 28, {a:1}]
console.log(myArray);

//iteradores

var iterador = miArray[Symbol.iterator](); //sirve para recorrer mi array
 
iterador.next().value //el iterador sirve para devolver el siguiente elemento en la lista(de a 1)

//LOS OBJETOS NO SON ITERABLES !!

