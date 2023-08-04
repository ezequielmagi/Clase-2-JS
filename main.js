/*
Tipos de datos y estructuras en JavaScript
https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures
*/

// String => cadenas de texto
// Number => números
// Booleanos => True o False
// NaN => No es un número ( '5' "6" )
// Undefinned => Es un valor indefinido
// Null => Nulo

// Arrays => Arreglo o matriz de datos []
// Objetos => se definen con {} cada objeto tiene una clave-valor

/*
    Prompt
    https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
*/

let name = prompt("Ingrese su nombre: ")

console.log("Bienvenido a nuestro local", name)

/*
Control de flujo y manejo de errores
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

/*

let option = prompt(`¿${name} qué desea? Desayuno o Almuerzo?`)

 if(option === 'desayuno'){
     //este seria en caso verdadero
     console.log('Ya le traigo su cafe')
 }else{
     //esto seria en caso falso
     console.log("Ya le traigo su almuerzo")
}

*/

/*
    let age = prompt(`¿${name} qué edad tenés?`)

    if(age >= 18){
        console.log('Eres mayor de edad')
    }else{
        console.log('aún no eres mayor de edad')
    }
*/

/*
    parseInt() convierte (parsea) un string a number en JS 
    para poder ser utilizado en una suma.
*/

// let primerOperando = prompt('Ingrese el primer valor a sumar:')
// let segundoOperando = prompt('Ingrese el segundo valor a sumar:')

// let suma = parseInt(primerOperando) + parseInt(segundoOperando)

// console.log( 'El resultado es: ', suma )