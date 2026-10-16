import {problemas} from "../2-modulos/datos.js";

function esperar(ms){
        return new Promise ((resolve) => {setTimeout( resolve ,ms)})
};

async function cocinar(){
    console.log("echa agua en la olla");
    await esperar(3000);
    console.log("pon la olla en la estufa");
    await esperar(1000);
    console.log("prender estufa")
}

function verificarEdad(edad){
    try{
        return new Promise((resolve, reject)=>{
        if(typeof edad === "number"){
            if(edad >= 18){
                resolve("eres mayor de edad");
            }else{
                reject("no es mayor");
            }
        }else{
            reject("agrega una edad en numero");
        };
    });
    }catch (error){
        console.log("errore:", error)
    }
};

async function cargarProblemas(){
    try{
        await esperar(1500);
        return new Promise((resolve)=>{
            resolve(problemas);
        })
    }catch(error){
        console.log("error:", error);
    }
}


async function main(){
    await cocinar();
    await esperar(2000);
    let array = await cargarProblemas();
    console.log(array);
    try{
        let edadMayor = await  verificarEdad(18);
        console.log(edadMayor);
        let edadMenor = await verificarEdad(15);
        console.log(edadMenor);
    }catch (error){
        console.log("error:", error)
    };
};

main();