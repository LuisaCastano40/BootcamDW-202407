// /*console.log('Hola Desarrolladores');

// // Para usar node -> deben trabajar desde la terminal
// // PARA EJECUTAR UN CÓDIGO -> node nombreDelArchivo.js

// // ----------------------------------FUNCIONES EN JAVASCRIPT ---------------------------------
//     /*
//         FUNCIONES  SEGÚN DECLARACIÓN
//      1. Funciones declarativas
//      2. Funciones flecha
//      3. Funciones Anónimas
//      4. Funciones Asincrónicas -(proxima semana) -> trabajar APIS

//         FUNCIONES QUE REORNAN O NO UN VALOR
//         PARÁMETROS DE LAS FUNCIONES
//     */

// // funciones declarativas ----------------------------------------------------------------------

// /*
//     tipos de variables
//     let->  cambia en el tiempo
//     const -> no cambia en el tiempo

//     tipo de variable - nombreDelaVariable
// */

// // DEFINIÓN -> Bloques que agrupan código que debe ser ejecutado
// function nombreFuncion(){
//     console.log('Hola, soy una función declarativa');
// }

// // INVOCAR LA FUNCIÓN
// nombreFuncion();


// function numerosPrimos(){
//     // lógica para mostrar lo que necesita
//     // incluir concionales
//     // ciclos -> for, while, do while, foreach
// }

// numerosPrimos();

// // ----------------------------------------------------

// //  Funciones flecha -> Estándares a la hora de programar -> ES6 -> ECMASCCRIPT 6 -> 2015
// // Busca una sintaxis más eficiente para escribir funciones

// // Asigna un nombre y guarda la función en una variable
// /*
//     () => {}
// */

// const funcionFlecha = () => {
//     console.log('Hola Sóy una función flecha');
// }

// // INVOCAR LA FUNCIÓN
// funcionFlecha();


// // Funciones anónimas ----------------------------------------------------------------------------
// // Son funciones que se usan DENTRO de otras funciones, y que no se necesitan reutilizar

// /*
//     function(){}
// */

// // Funciones incorporadas
// setTimeout(function(){
//     console.log('Soy un mensaje depsués de 2 segundos');
// }, 2000);


// ----------------------------------------- EJEMPLO PRÁCTICO -----------------------

//Escriba una función que le permita sumar dos números ingresados como parámetros

// SI RETORNA

// Los parámetros de las funciones, son info o datos que se ingresan en los PARÉNTESIS, y son necesarios para la función

// numero1 y numero2 Son PARAMETROS Que recibe la función
function suma(numero1, numero2){
    console.log('Acá me estoy ejecutando');
    return 'retornar saludo'
}
// invocar la función
suma(5, 8); //-> es como si se combirtiera en una variable que guarda información después de que se ejecutó
// console a la función
console.log('Acá estoy mostrando el retorno ' + suma(2,6));

// ----------------------------------------------------------------------------
//NO RETORNA
// Tengo una función que sólo quiero que se ejecute PERO que no guarde nada
const suma2 = (num1, num2) => {
    console.log('Acá me estoy ejecutando suma2');
    num1 + num2;
}
// invocar la función
suma2(2,8);
// Vamos a ver qué retorna
console.log('Acá estoy mostrando lo que retorna suma2 ' + suma2(2,8));