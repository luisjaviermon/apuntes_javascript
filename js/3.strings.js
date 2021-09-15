/* 
---Strings
--Metodos (funciones que las cadenas pueden hacer)
* toUpperCase(): devuelve la cadena en mayuscuka
* toLowerCase(): Devuelve la cadena en minusculas
* indexOf(string): devuelve la posicion de la primera 
  coincidenci a la cadena deseada, ecc: devuelve -1
* replace(valor a buscar,valor nuevo): Busca el valor 1 y lo
  remplaza por el valor nuevo
* substring(inicio,[fin]): devuelve una subcadena iniciando 
  en la posicion inicio [y terminando en la posicion fin -1]
* slice(inicio,[fin]): devuelve una subcadena aceptando numeros
  negativos que indican un conteo desde el final de la cadena
* trim(): elimina los espacion al inicio y al final
* startsWith(valor[,inicio]); devuelve un booleano si la cadena
  [iniciando desde inicio] coincide con valor
* endsWith(valor[,longitud]): similar a startsWith, pero 
  considerando cuantos caracters debe tomar
* includes(valor[,inicio]): similar a indexOf, pero su retorno 
  es true o false
* repeat(valor);repite la cadena el numero de veces que se 
  muestre en valor

--Propiedad (son las caracteristicas del objeto String)
* lenght: devuelve la longitud de la cadena
*/

let cadena = "Hola Mundo";

//Propiedades
console.log(cadena.length);

//Metodos
console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());
console.log(cadena.indexOf('Mundo'));
console.log(cadena.replace('Mundo','Youtube'));
console.log(cadena.substring(6,9));
console.log(cadena.slice(6,-1))

let cadena2 = "   hola mundo    ";
console.log(cadena2 + '|');
console.log(cadena2.trim() + '|')

console.log(cadena.startsWith('H'));
console.log(cadena.startsWith('M',5));

console.log(cadena.endsWith('a',4));
console.log(cadena.endsWith('Mundo'));

console.log(cadena.includes('n'));
console.log(cadena.includes('a',5));

console.log(cadena.repeat(3));

/* 
---Template strings
es un formato el cual facilita la incercion para el valor de
las variables sin tener que usar la concatenacion

se requiere el uso de acentos (´´) en lugar de comillas
*/

let nombre = 'Juan';
let apellido = 'Gomez';
let edad = 20;

console.log(`hola ${nombre} ${apellido} y el proximo año tendras ${edad} años`);
