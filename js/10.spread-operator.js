/*
  spread operator
  expande el contenido de un array
*/

let numeros = [1,2,3,4,5];
//console.log(...numeros);

//utilizado para enviar elementos a una funcion
const add_numbers = (a,b,c) => {
  console.log(a+b+c);
}
//mandara que hay valores undefined
add_numbers(numeros);
//usando el spread operator se ajusta el array al numero de
//elementos iniciando desde la posicion 0
add_numbers(...numeros);

//podemos usarlo para añadir elementos a un array
let users = ['usuario 1','usuario 2','usuario 3'];
let new_users = ['usuario 4','usuario 5'];
//introduciomos el contenido new_users a users
console.log(users);
users.push(...new_users);
console.log(users);

//podemos copiar arrays
let nuevos = [...numeros];
console.log(nuevos);

//concatenar arrays
let arr_concat = numeros.concat(nuevos);
console.log(arr_concat);

arr_concat = [...numeros,...nuevos];
console.log(arr_concat);

//podemos denotar un numero indefinido de parametros (parametros
//Rest)
const rest_params = (...numeros) =>{
  console.log(numeros);
}
rest_params(1,2,3,4,5,6);
rest_params(1,2);

//podemos usar la libreria math con funciones que necesiten un 
//numero grande de parametros 
console.log(Math.max(...numeros));
console.log(Math.min(...numeros));

//podemos eliminar los elementos repetidos de un array
let numbers = [1,1,1,1,3,5,45,87,9,3];
//creamos una instancia del objeto Set y lo convertimos a array
//con el spread operator

numbers = [...new Set(numbers)];
console.log(numbers);
