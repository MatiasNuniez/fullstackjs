//se refiere a pila de llamadas que son todas las llamadas a las funciones que suceden en orden.

const getName = () => 'Matias';

const getLastName = () => 'Nunez';

function getFullName() {
    const nombre = getName()
    const apellido = getLastName()
    return `${nombre} ${apellido}`
}

const nombrecompleto = getFullName()

console.log('Nombre completo ', nombrecompleto)