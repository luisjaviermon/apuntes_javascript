/*
  Clases y objetos
*/

class Persona{
  constructor(nombre,apellidos, edad){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.datos = `Hola, me llamo ${this.nombre} ${this.apellidos} y tengo ${this.edad} años`;
  }

  saludar(){
    return this.datos;
  }

  despedir(){
    return "adios";
  }

}

const persona1 = new Persona("Luis","Morales",25);

//Formas de llamar atributos y metodos
console.log(persona1.nombre);
console.log(persona1['apellidos']);
console.log(persona1.saludar());
console.log(persona1['despedir']());