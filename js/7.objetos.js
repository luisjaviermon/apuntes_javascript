/*
  Objetos: Estructura de datos que representan propiedades, 
  valores y acciones
*/
//En javascript se declaran los objetos de esta forma
const persona = {
  name: 'Juan',
  age: 23,
  apellidos: ['Juarez','Martinez']
}

//Para acceder a los elemetos (atributos y metodos) usamos 
//nomenclatura de punto
console.log(persona.name);
console.log(persona.apellidos[0]);

//Es posible recorrer el contenido de un objeto 
for (const key in persona){
  //el ciclo for almacena en key el nombre del indice(clave) del
  //atributo
  console.log(`el atributo ${key} contiene: ${persona[key]}`);
} 
//dentro del for se puede usar variable (let) o constante (const)