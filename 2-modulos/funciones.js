export function filtrarProblemasPorDificultad(problemas, dificultad){
    return problemas.filter((problema)=> problema.dificultad === dificultad);
};

export default function agregarProblemas(array,nombre,dificulad){
    let posicion = array.length + 1;
    return array.push({id: posicion, titulo: nombre, dificultad: dificulad});
}