//lamadas que se ejecutan cuando algo ocurre, son funciones.
//ejemplo mas conocido settimeout

//-----------------------------------------------------------------------------------------------------------------------

// const example = () => {
//     console.log("hello");
// }

// const exampledelay = () => {
//     setTimeout(example, 3000)
// }

// exampledelay();

//-----------------------------------------------------------------------------------------------------------------------

// function sum(num1, num2) {
//     return num1 + num2
// }

// function res(num1, num2) {
//     return num1 - num2
// }

// function mult(num1, num2) {
//     return num1 * num2
// }

// function multifuncion(num1, num2, operacion) {
//     const resultado = operacion(num1, num2)
//     console.log(resultado);
// }

// multifuncion(5, 4, sum);

//-----------------------------------------------------------------------------------------------------------------------
const btn = document.getElementById('btn');

const ejecutar = (evento) => {
    console.log(evento);
    alert('diste click en el boton');
};

btn.addEventListener('click', ejecutar)