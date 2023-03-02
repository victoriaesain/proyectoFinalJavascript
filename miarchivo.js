//el programa debe calcular el promedio de cada alumno, y mostrar si aprobo la materia o se la lleva a diciembre
//la materia se aprueba si el promedio de las 4 notas que obtuvo a lo largo del anio, es => 7, de lo contrario
//la materia no estara aprobada y debera rendir un examen en diciembre

const cantidadAlumnos = parseFloat(
  prompt("Ingrese la cantidad de alumnos de su clase: ")
);

for (let i = 1; i <= cantidadAlumnos; i++) {
  let alumno = prompt("Ingresa el apellido del alumno/a: ");
  obtenerInfoNotas();
  if (PROMEDIO >= 7) {
    console.log(alumno + ": " + "aprobado");
  } else {
    console.log(alumno + ": " + "desaprobado");
  }
}

function obtenerInfoNotas() {
  let nota1 = parseFloat(prompt("Ingresa la nota del primer examen: "));
  let nota2 = parseFloat(prompt("Ingresa la nota del segundo examen: "));
  let nota3 = parseFloat(prompt("Ingresa la nota del tercer examen: "));
  let nota4 = parseFloat(prompt("Ingresa la nota del cuarto examen: "));

  const SUMA = nota1 + nota2 + nota3 + nota4;
  PROMEDIO = SUMA / 4;

  return PROMEDIO;
}
