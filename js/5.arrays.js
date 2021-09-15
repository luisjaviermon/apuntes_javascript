/*
  - Los arrays son una estructura de datos que nos permite 
  almacenar varios datos y agruparlos
  - Pueden almacenar cualquier tipo de dato permitido en js
  - El array puede almacenar varios tipos de datos diferentes 
  dentro de si, pero no es muy recomendable
  - Un array se comporta de manera muy similar a una lista
*/
//array vacio
let array_1 = [];
//array con elementos
let array_2 = ['hola ','mundo ','como ','estas?'];

//si se almacenan objetos dentro de un array se puede acceder
//a sus metodos de este

console.log(`La palabra '${array_2[2]}'tiene ${array_2[2].length} letras`);

//Para saber si una variable es un array se usa Array.isArray(var)
console.log(Array.isArray(array_2));

/*
para añadir elementos usamos estos metodos
- .push(elemento1,elemnto2,..):Añade al inicio el 
  o los elementos

- .unshift(elemento1,elemnto2,..): añade los elemento al inicio
  del array

retornan ambos el tamaño nuevo del arreglo
*/

/* 
- Para eliminar elementos usamos 
  * .pop():elimina el elemento al final del array
  * .shift(): elimina el primer elemento de la lista
*/

//para la documentacion de array esta en 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array