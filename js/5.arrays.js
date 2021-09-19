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

/*
  Array.from(iterable): convierte en array cualquier iterable
*/
let palabra = "Hola mundo";
let nuevo = Array.from(palabra);
console.log(nuevo)

//callback es una funcion que se pasa como argumento
/*
  sort([callback]): ordena alfabeticamente (unicode) o en base 
  al algoritmo definido en el callback
*/
nuevo = ['b','z','x','a'];
console.log(nuevo);
console.log(nuevo.sort());

nuevo = [1,100,266,15];
console.log(nuevo.sort((e1,e2) => e1-e2));
/*
  para el caso de la funcion callback debe de cumplir con retorna
  r un valor numerico
  si callback(a,b) retorna un valor < 0, enconces a va primero
  [b,a] -> [a,b]
  si callback(a,b) retorna un valor > 0, enconces b va primero
  [a,b] -> [b,a]
  si callback(a,b) retorna un valor = 0, enconces los valores no 
  sufren cambios
*/

//foreach(val_actual[, index]) - ejecuta la funcion indicada 
//console.log(nuevo.forEach((val_actual) => console.log(val_actual)));

console.log(nuevo.forEach(
  (val_actual,index) => {
    console.log(val_actual + " en la posicion " + index);
  }
)
);

/*
  .some(callback) - comprueba si algun elemento cumple con la 
  condicion
  .every(callback) - comprueba si todos los elementos cumplen 
  con la condicion
*/

console.log(nuevo.some(numero => numero -100 > 0));
console.log(nuevo.every(
    (numero) => {
      return numero == 100;
    }
  )
);

/*
  map(callback) - transforma todos los elementos del array y 
  retorna un nuevo array
*/
  console.log(nuevo.map(
    (val) => {
      return val*2;
    }
  ));

/*
  filter(callback) - filtra todos los elementos que cumplan con 
  la condicion
*/
console.log(nuevo.filter(valor => valor%5 == 0));

/*
  reduce(callback) - aplica la funcion a cada par de elementos
  para terminar con uno solo
*/
console.log(nuevo);
//((1/15)/100)/266
console.log(nuevo.reduce(
  (a,b) => {
    return a/b;
  }
));

//se pueden inicializar las variables dentro de un callback para
//algunos casos

const arr_usuarios = [
  {name: 'user1', online: true},
  {name: 'user2', online: false},
  {name: 'user3', online: true}
];

let conectados = arr_usuarios.reduce(
  (cont,user) => {
    if(user.online) cont++;
    return cont;
  }
,0);

console.log(`hay ${conectados} usuarios conectados`);
//para la documentacion de array esta en 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array