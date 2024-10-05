// no hay espacios entre el document, el punto y el método
// getElementById -> es traer un elemento del HTML por su ID

// SELECCIONAR ELEMENTOS DEL DOM
let nameInput = document.getElementById('nombre');
console.log(nameInput);

// querySelector me trae cualquier tipo de selector-> etiqueta, id, clase
let saludoP = document.querySelector('.mostrarSaludo');
console.log(saludoP);


// FUNCIONES -> SON BLOQUES QUE ENCAPSULAN CÓDIGO, Y EJECUTAN ACCIONES
// ()-> ejecutar la función -> parámetros
function saludarUsuario() {
    //acá va el código que quiero ejecutar
    // acceder al contenido de nuestras etiquetas
    let name = nameInput.value;
    console.log(name);

    let mensaje = '';

    if(name){
        //si se ingresó nombre -> if - si
        mensaje = 'Hola ' + name;
        // textContent -> me permite cambiar el texto dentro de etiquetas
        saludoP.textContent = mensaje;
    }else {
        //sino se ingresó nombre -> else - sino
        mensaje = 'Hola Desconocido';
        saludoP.textContent = mensaje;
    }

}


















  



/*

if(nombreUsuario){
    alert('Hola: ' + nombreUsuario);
    console.log('se cumple la condición');
}else {
    alert('Hola');
    console.log('no se cumple la condición')
}

*/