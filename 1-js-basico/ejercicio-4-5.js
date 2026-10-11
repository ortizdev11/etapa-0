const estudiantes = [
  { nombre: "Ana", nota: 4.5 },
  { nombre: "Luis", nota: 3.2 },
  { nombre: "Sofía", nota: 2.8 },
  { nombre: "Pedro", nota: 4.0 },
];

const aprobado = estudiantes.filter((estudiante)=> estudiante.nota >= 3.0);

const nombres = aprobado.map((estudiante)=> estudiante.nombre);