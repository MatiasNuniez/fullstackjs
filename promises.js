//Ana promesa es otra forma de hacer js asincrono. Es una funcion constructora

const promise = new Promise((resolve, reject) => {
    resolve('Promesa resuleta')
    reject('La promesa fallo')
});

//esto sirve para capturar el error o para capturar el exito de la promesa.
promise.then((respuesta) => console.log(respuesta),
    (razon) => console.log(razon));