console.log('Hola, el archivo se vinculó correctamente');

// 1.  Hacer un programa que reciba 2 números del usuario y los sume.

// Es una secuencia



/*let numero1 = 0;
let numero2 = 0;
let resultado = 0;*/

//variable = asignación
//TODO LO QUE VIENE E PROMPTS O DEL USUARIO VIENE COMO STRING
//Vamos a convertir el texto en número 
// parseInt -> convierte a enteros
//parseFloat -> convierte a decimales

/*numero1 = prompt('Ingrese el primer número');
numero2 = prompt('Ingrese el segundo número');
resultado = parseFloat(numero1) + parseFloat(numero2);

alert('EL resultado de la suma de: ' + numero1 + ' + ' + numero2 + ' es ' + resultado);*/


//2. Hacer un programa que reciba un nombre por parte del usuario, si se recibió nombre por parte del usuario, saludarlo con nombre, si no, sólo decir 'Hola'

// if -> si se cumple una condición haga
// else -> sino se cumple haga otra cosa

/*variable = '' -> False -> No
Variable = 'luisa' -> True -> Si*/

/* SÓLO SE EJECUTA LO DE EL IF CUANDO LA CONDICIÓN SE CUMPLE -> VERDARE */

//False -> '', 0, null, undefined
//true -> 'luisa', 28, -20

/*let nombreUsuario = prompt('Ingrese su nombre');

if(nombreUsuario){
    alert('Hola: ' + nombreUsuario);
    console.log('se cumple la condición');
}else {
    alert('Hola');
    console.log('no se cumple la condición')
}*/


//3. Hacer un programa que pida al usuario un número entero y muestre los valores desde cero hasta el número ingresado.
/*let numero = parseInt(prompt('Ingrese un número entero'));
console.log(numero)
for(let i = 0 ; i<= numero ; i++){
    console.log(i);
}*/


//5. Hacer un programa que muestre los días de la semana.
// alt + 91 o shift + {}
// mala práctica -> let array = [1,2,3,3, 'martes', false]
let diasSemana = ['lunes' , 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

// mostrando el arreglo
console.log(diasSemana);
// mostrando un elemento dentro del arreglo, usando su índice

// el nombreDelArreglo[el index]
/*console.log(diasSemana[0]);
console.log(diasSemana[1]);
console.log(diasSemana[4]);
console.log(diasSemana[3]);
console.log(diasSemana[4]);
console.log(diasSemana[5]);
console.log(diasSemana[6]);*/

// OPCION OPTIMIZADA CON CICLOS
// ForEach -> es un cíclo para recorrer arreglos de datos
// el ciclo termina cuando no hayan más elementos dentro de mi arreglo de datos

// primero va el arreglo y luego el método
//forEach() -> es un método UNICAMENTE PARA ARREGLOS
/*diasSemana.forEach(
    // función flecha-> FUNCIONES -> Acciones que se deben ejecutar
    dia => {
        console.log(dia); 
    }
)*/
