/*
- Un bucle es la repeticion de un bloque de codigo
- Un bucle puede ser:
  * Determinado: cuando se sabe cuantas veces se va a ejecutar
  * Indeterminado: No se sabe el numero de veces que se va a
    repetir
*/
//Bucle while: es un bucle indeterminado 
/* 
  while(condicion){
    codigo a ejecutar
  }
*/
//cuando la condicion no se cumpla se rompera el bucle

//bucle do while: es un bucle indeterminado
/*
do{
  codigo a ejecutar
}while(condicion)
*/

//bucle for: bucle determinado ya que se define el numero de 
//repeticiones

/*
  for(let i = inicio;i <= limite;i++){
    codigo a ejecutar
  }
*/

/*
for of / for in: abreviaciones para recorrer todo un conjunto
de datos
*/ 
names = ['Jose','Julio','Sandra','Sasha'];

//for of: retorna el valor de cada posicion
for (nombre of names){
  if(nombre === 'Sandra'){
    /*
      continue: se salta la iteracion en la que se ejecuta y 
      continua el bucle
    */
    continue
  }
  console.log(nombre);
}

//for in retorna la posicion de los elementos
for(nombre in names){
  console.log(`el indice es ${nombre}, y el valor es ${names[nombre]}`);
}