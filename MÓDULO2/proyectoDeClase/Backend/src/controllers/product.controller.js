// los CONTROLLERS - CONTROLADORES -> Gestionan la lógica de las peticiones
// La lógica para GET, POST, PUT, DELETE (lEER, CREAR, ACTUALIZAR, ELIMINAR)
// 1. importar el modelo de datos que manipularemos

import { productModel } from '../models/product.model.js';

// petición POST -> para crear productos
// función flecha
export const postProduct = async (request, response) => {

    // LÓGICA DE LA PETICIÓN POST
    return response.json({"mensajito": "FUNCIONA LA PETICIÓN POST"});
}

// petición GET -> para mostrar productos
export const getProduct = async (request, response) => {

    // LÓGICA DE LA PETICIÓN GET
    return response.json({"mensajito": "FUNCIONA LA PETICIÓN GET"});
}

// petición PUT -> para actualizar productos
// actualizar un producto en particular -> actualizar por ID
export const putProductById = async (request, response) => {

    // LÓGICA DE LA PETICIÓN PUT
    return response.json({"mensajito": "FUNCIONA LA PETICIÓN PUT"});
}

// petición DELETE -> para eliminar productos
// eliminamos un producto en particular -> eliminar por ID
export const deleteProductById = async (request, response) => {

    // LÓGICA DE LA PETICIÓN DELETE
    return response.json({"mensajito": "FUNCIONA LA PETICIÓN DELETE"});
}

