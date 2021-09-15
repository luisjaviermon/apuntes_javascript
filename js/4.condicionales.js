/*
---Condicionales
el flujo de un programa va desde el inicio del documento hacia
abajo

los condicionales pueden ser:
* simples: comprueban solo una condicion
* compuestos: comprueban su condicion y su caso contrario
* multiples: comprueban varios casos
*/
let variable = 5;

//condicional simple
//aplica solo si solo se hace una cosa
if (variable == 5) console.log('es mayor a 5'); 
if (variable > 0){
  variable = 0;
  console.log(variable);
}

//condicional compuesto
if (variable == 10){
  console.log('algo esta mal');
}else{
  console.log('variable es: ' + variable);
}

/*para colocar un if para en caso de que no se cumpla se usa
un if-else*/
if (variable == 10){
  console.log('algo esta mal');
}else if(variable == 0){
  console.log('variable es: ' + variable);
}
/*
para el uso de AND y OR es de esta manera
* AND: &&
* OR: ||
*/

//para el caso de un switch
let comida = 'sandwich';
switch(comida){
  case 'sopa':
    console.log('sopa');
    break;//siempre poner break al final del case
  case 'sandwich':
    console.log('sandwich');
    break;
  default:
    console.log('no conozco');
}

//para el operador ternario 
//sintaxis basica: condicion?sentencia:sentencia ecc
(comida == 'sandwich')?(
  console.log('nooo'), //para las sentencias no colocar ;
  comida = 'pollo',
  console.log(comida)
):(
  console.log('siiii'),
  console.log(comida)
);