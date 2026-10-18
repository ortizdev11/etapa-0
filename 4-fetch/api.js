export async function obtenerUsuarios(){
    try{
        const repuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!repuesta.ok){
            throw new Error("error http:" + repuesta.status);
        }

        const usuarios = await repuesta.json();

        for(const usuario of usuarios){
            console.log(`nombre: ${usuario.name} y su correo es: ${usuario.email}`)
        }
    }catch(error){
        console.log("error:", error);
    }
}

// se hace un metodo post de una api :)

try{
    const envio = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "ortiz",
            email:"ortiz@gmail.com"
        }),
    });
    if(!envio.ok){
        throw new Error("error http:" + envio.status);
    }
    console.log(envio.status);
}catch(error){
    console.log("error:", error);
}

async function obtenerTodosPendientes(){
    try{
        const env = await fetch("https://jsonplaceholder.typicode.com/todos");
        if(!env.ok){
            throw new Error("error http:"+ env.status);
        };
        const usuari = await env.json();

        let array = usuari.filter((usuario)=> !usuario.completed && usuario.userId === 1);
        console.log(array);
    }catch(error){
        console.log("error:", error);
    };
};

obtenerTodosPendientes();