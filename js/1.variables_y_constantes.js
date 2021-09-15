/*
- Javascript es un lenguaje de programacion 
*/

/*
---sintaxis basica
* Es case sensitive (HolaMundo != holamundo)
* Es de tipado debil o dinamico (puede cambiar el tipo de dato que 
  almacena de una variable)
* Se finaliza cada sentencia con un ; (de prefencia)
* Los bloques se definen con {}

---variable, constantes y scoope o ambito
* Para declarar una variable se utiliza "let" o "var"
* Las variables se pueden declarar e inicializar
* Una constante se declara con "const"
* El scoope es la zona donde se encuentra definida la constante
  o la variable
*/

let numero;
let numero2 = 6;
//Para una constante se debe inicializar desde que se declara
const PI = 3.14159265;
//modificacion de una variable
numero = 15;

/* 
---tipos de datos primitivos
* Numeros: los enteros y flotantes estan dentro del mismo tipo,
  tambien aplica para los signados
  let numero = 15;
* Strings (cadenas): Podemos declarar con "" o ''
  let cadena = 'hola';
  let cadena = "hola";
* Boolean: puede ser true o false
* Undefined: aquellas variables que no se les ha asignado valor
  alguno
* null: es usado para definir que no existe un valor o no 
  interesa el valor a devolver
* symbol
*/

let hola = 'hola mundo';
let es_variable = true;
let palabra = 'una palabra';
console.log(PI);