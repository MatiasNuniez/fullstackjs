const promesa = () => {
    setTimeout(() => {
        console.log('asgdhjhagsjdasd');
    }, 5)
}

async function myAsyncFunction() {
    try {
        const mipromesa = await promesa();
        console.log("valor de la promesa", { mipromesa });
    } catch (error) {
        console.log("error");
    }
}

function normalFunction() {
    const mipromesa1 = promesa()
        .then(resultado => console.log(resultado))
        .catch(razon => console.log(razon))
    console.log("valor de la promesa", { mipromesa1 });
}

//la diferencia es que en una funcion comun se ejecuta sin importar lo demas, y en una asyncrona espera a que se cumpla la funcion de arriba o a la que llama para poder ser ejecutada esa.