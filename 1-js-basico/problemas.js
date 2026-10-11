const problemas = [
  { id: 1, titulo: "Suma de dos números", dificultad: "facil" },
  { id: 2, titulo: "Palíndromos", dificultad: "media" },
  { id: 3, titulo: "Fibonacci", dificultad: "media" },
  { id: 4, titulo: "Ordenar una lista", dificultad: "dificil" },
];

for ( const problema of problemas){
    console.log(`${problema.id}. ${problema.titulo} su dificultad es: ${problema.dificultad}`);
};

function filtrarPorDificultad(lista, dificultad){
    return lista.filter((problema)=> problema.dificultad === dificultad);
};

const dificultadMedia = filtrarPorDificultad(problemas, "media");
console.log(dificultadMedia);

function agregarProblema(lista, titulo, dificultad){
    let posicion = lista.length + 1 
    if(titulo !== "" && dificultad !== ""){
        lista.push({
            id: posicion,
            titulo: titulo,
            dificultad: dificultad
    });
    }else{
        console.log("agregale un titulo y una dificultad");
    }
};

agregarProblema(problemas, "orti", "dificil");
console.log(problemas);