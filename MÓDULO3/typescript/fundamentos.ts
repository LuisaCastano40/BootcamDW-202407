// FUNDAMENTOS DEL LEGUAJE DE PROGRAMACIÓN TYPESCRIPT
// TODO lo aprendido de JS, nos sirve en TS
// aprender a trabajar con tipos de datos
/*
let variable = 'luisa'; //js
const constante = 123; //js

*/

// -------------------TS ---------------
// Establecer desde el principio, los tipos de datos
// Nosotros tendremos que definir qué dato estaremos almacenando en nuestras variables



// Tipos de datos en typescript
// : -> son para definir el tipo de dato
// = -> asignar un valor

let texto: string = '';
texto = 'luisa';


let numero: number = 0;
numero = 123;

let buleano: boolean = false;
buleano = true;

// Unión de tipos -> nos permite definir una variable con más de un tipo de dato
let variable : string | number; //puede almacenar texto o numero
variable = 'hola';
variable = 123;


// Arreglos de datos o arrays

// Declaración implícita
let arreglo = [1,2,3]; //lo primero que guardó son números, de ahora en adelante, sólo puede almacenar números
arreglo = [6,7,8,20000000];

// Declaración explícita
let arreglo2 : Array<string>;
arreglo2 = ['lu', 'fa','permitir'];

let arreglo3 : boolean[] = [true, false];


//  TIPO DE DATO ANY -> Esa variable pueda recibir cualquier tipo de dato
// Lo recomiendo cuando realmente usted no sepa qué tipo de dato va a llegar
let cualquiera : any;
let arrayCualquiera : any[];

cualquiera = 1;
cualquiera = 'pepito';
cualquiera = true;
// Esto no lo hagan
arrayCualquiera = [1, 'texto', true]



// interfaces -> son representaciones de objetos -> nos permite estructurar la información de nuestros proyecto

// PLANTILLA DE LO QUE YO ESPERO ALMACENAR
interface Producto {
    id : number, //OBLIGATORIA
    imagen : string,//OBLIGATORIA
    precio : number | string, //puede esperar un dato de cualquiera de esos tipos
    codigo : any, //espere cualquier cosa, //OBLIGATORIA
    isDisponible ?: boolean //Puede que le den o no esta información
}

// Yo me puedo crear instancias de mi plantilla
let Producto1 : Producto;
let Producto2 : Producto;
let Producto3 : Producto;
let Producto4 : Producto;

Producto1 = {
    id: 1,
    imagen: 'link',
    precio: 123,
    codigo: 'ADFNV1243'
}

// CLASES EN TYPESCRIPT -> ESTÁ RELACIONADO CON POO
// Estructura importante nos permite definir forma (ATRIBUTOS) y comportamiento (FUNCIONALIDADES) de mis objetos
// Nos permite utilizar los 4 pilares fundamentales de la POO
// NOS PERMITE CONTROLAR EL ACCESO (private) o (protected)

class ProductosComponent {

    // ATRIBUTOS
    // acceder a una url -> privado
    private UrlCrearProductos: string;
    // almacenar los productos que quiero mostrar
     Producto3 : Producto;
     cantidad : number;

    // FUNCIONALIDADES
    // Crear productos
    crearProducto(){
        console.log('creando un producto')
    }
    // Mostrar Productos
    mostrarProductos(){
        console.log('mostrar un producto');
    }
}