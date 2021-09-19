/*
  funciones
  sintaxis
  function nombre_funcion(parametro1,parametro2){
    codigo

    return valor;
  }

  funcion de flecha
  const nombre_funcion = (parametro1,parametro2) => {
    codigo

    return valor;
  }

  en caso de que la funcion solo haga una linea de codigo usamos
  const nombre_funcion = (parametro,oarametro2) => parametro1+parametro2
*/

const saludar = () => console.log("hola");
saludar()

// si solo recibe un parametro se puede colocar sin parentesis
const saluda_usuario = nombre => {
  console.log("hola " + nombre);
  return 0;
}

saluda_usuario("Jose");

const suma = (num1,num2) => {
  return num1 + num2;
}
console.log(suma(1,5));

//para este caso hace el return de la operacion 
const mult = (num1,num2) => num1*num2;

let resultado = mult(5,8);
console.log(resultado);




