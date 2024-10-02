 //Este es un COMENTARIO de una sola línea

 /*
    Este es un comentario en bloque
    comentar varias líneas de código a la vez
 */

// ----------------------------------------------------------------

// MÉTODOS DE INTERACIÓN 
// SALIDA -> envia algo desde el código al navegador
/*
console.log('Hello WORLDDDDDDDDDDD, DESARROLLADORES'); //Desarrolladores
alert('Hola soy un alert'); // Enviar un mensaje al usuario
document.write('mensaje en la interfaz de usuario');
*/

//ENTRADA
//prompt('Instrucciones: Escriba su nombre');//pedir información al usuario
//confirm('Instrucciones: pregunta algo de sí o no');


// ----------------------------------------------------------------------------

// VARIABLES
/*
    Espacio de memoria para guardar datos
    cajitas que guardan información
*/

// DECLARACIÓN DE VARIABLES --------------------------------------------

// tipo de variable - nombre de la variable
// camelCase , defina como a trabajar sus variables desde el princio
// inicialicen sus variables

//NO -> núnerosAntes -> variable

/*
var miVariable; //cambia en el tiempo -> deprecado -> en desuso -> por problemas de rendimiento
let $nombre; // cambia en el tiempo - está limitada al espacio donde se usa
*/

// INICIALIZACIÓN DE VARIABLES ------------------------------------------------
/*
 Darle un dato inicial a mi variable
*/
/*
const miVariable2 = 'LUISA'; //constantes -> no varían en el tiempo

// Asignando valores
miVariable = 5;
$nombre = 'Pepito';
console.log(miVariable);
console.log($nombre);
console.log(miVariable2);
*/

// Cómo NO nombrar variables ------------------------------------------------------

/*
            564654nombre
            @variable
            %variable
            *variable
            +variable
            !variable
            mi variable
            mi-variable
*/

// ------------------------------------------------------------------------
// TIPOS DE DATOS 

// Datos primitivos -> datos básicos

//String -> cadena de datos -> texto -> SIEMPRE van dentro de comillas

/*let nombre = ''; //inicializamos variables que almacenan string
let variable = '';
nombre = 'a'; //puede ser un sólo caracter
variable = '20';
nombre = 'luisa';
let numero1 = '3'
let numero2 = '5'

// Concatenar
console.log('Estoy con catenando texto ' + nombre + '-' + variable);
console.log(numero1+numero2);*/

// Numérico

/*let miNumero = 0; //las variables que almacenarán numeros entonces se inicializan con 0
miNumero = 10;
miNumero = 5.4;
miNumero = 3.3333333333333333333333333333;
miNumero = 123e5;
miNumero = -2;
miNumero = NaN;  //-> no se reconoce como número
numero1 = 5;
numero2 = 10;
console.log(numero1+numero2);*/

// Booleanos
/* Datos que son o verdaderos o falsos */
let miBooleano = false; //-> esa variable almacene un valor falso -> NO
miBooleano = true; // ->esa variable almacene un valor verdadero -> SI

/*
    //Expresiones booleanas
    // Falsy o falsos
    console.log(Boolean(0));
    console.log(Boolean(''));
    console.log(Boolean(undefined));
    console.log(Boolean(null));

    //Truthy o verdaderos
    console.log(Boolean(50));
    console.log(Boolean(-1));
    console.log(Boolean('a'));
    console.log(Boolean('luisa'));
*/

// Datos NO primitivos -> más complejos -> agrupaciones de datos
// Array -> Arreglo de datos -> me reunene varios datos del mismo tipo

/*
 Asigna más de un elemento a una variable
*/

/*
    let miArray = [] //corchetes -> llaves cuadradas -> arreglos de datos
    miArray = ['luisa' ,'mariano', 'sebastián', 'susana'];
    console.log(miArray);
    miArray = [1, 5, 20, 100];
    console.log(miArray);
    miArray = [true, false]
    console.log(miArray);
*/

// Objetos -> (PROGRAMACIÓN ORIENTADA A OBJETOS)
/*
    Almacenar varios tipos e datos
    REPRESENTACIÓN EN CÓDIGO E ASPECTOS DE LA VIDA REAL
*/

let objeto = {} // llaves -> variable de tipo objeto

let luisa = {
    //llave : valor
    edad : 24,
    apellido : 'Castaño',
    esCasada : false,
    profesion : 'Desarrolladora',
    saludar : () => {console.log('Holaaaaaaa, ya loos voy a liberar')}
}

let producto = {
    nombre: 'computador',
    precio: 2000000
}

// acceder a la información  objeto.llave
console.log(luisa.apellido);
console.log(producto.precio);
console.log(luisa);
console.log(luisa.saludar())
