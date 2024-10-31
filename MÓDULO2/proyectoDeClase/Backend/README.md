<!-- Centrar el título -->
<h1 align="center">BackEnd con Node.js - Proyecto de Clase</h1>

<!-- Subtítulo -->
<p align="center"><em>BOOTCAMP DE DESARROLLO WEB - MÓDULO 2</em></p>

<!-- Separador -->
<hr>

<!-- Contenido de cada sección -->

---

## Tabla de Contenidos
1. [Instalaciones Necesarias](#instalaciones-necesarias)
2. [Dependencias](#dependencias)
3. [Introducción](#introducción)
4. [Guía de Desarrollo](#guía-de-desarrollo)
   - [Configuración de Express](#1-configuración-de-express)
   - [Conexión a MongoDB Atlas](#2-conexión-a-mongodb-atlas)
   - [Modelo Vista-Controlador (MVC)](#3-modelo-vista-controlador-mvc)
5. [Autenticación con JWT](#4-autenticación-con-jwt)
6. [Recursos Adicionales](#recursos-adicionales)

---

## Instalaciones Necesarias

Para comenzar con este proyecto, asegúrate de tener las siguientes herramientas:

- **[Node.js (versión LTS)](https://nodejs.org/en)**  
- **[Postman](https://www.postman.com/downloads/)** - Herramienta para probar las APIs.  
- **[Cuenta de MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database)** - Base de datos en la nube.

---

## Dependencias

| Dependencia     | Descripción |
|-----------------|-------------|
| [Express](https://www.npmjs.com/package/express) | Framework para construir aplicaciones web y APIs. |
| [Dotenv](https://www.npmjs.com/package/dotenv) | Manejo de variables de entorno. |
| [Mongoose](https://www.npmjs.com/package/mongoose) | Modelado de datos para MongoDB en Node.js. |
| [Cors](https://www.npmjs.com/package/cors) | Middleware para habilitar CORS en el servidor. |
| [Nodemon](https://www.npmjs.com/package/nodemon) | Herramienta para reiniciar automáticamente el servidor. |
| [Bcryptjs](https://www.npmjs.com/package/bcryptjs) | Librería para encriptar contraseñas. |
| [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) | Implementación de autenticación con JWT. |

---

## Guía de Desarrollo

A continuación, se muestra un paso a paso para configurar el backend utilizando Node.js, Express y MongoDB:

---

### 1. Configuración de Express

1. Instala Express en el proyecto.
2. Configura el archivo principal para importar Express y crear una instancia de la aplicación.
3. Define los middlewares básicos, como el parser de JSON.
4. Configura el servidor para que escuche en el puerto especificado.
5. Revisa la documentación oficial de Express para explorar funcionalidades adicionales.

---

### 2. Conexión a MongoDB Atlas

1. Crea una cuenta en MongoDB Atlas y configura un nuevo cluster.
2. Obtén la URI de conexión de MongoDB Atlas.
3. Instala las dependencias necesarias para manejar la conexión a MongoDB y las variables de entorno.
4. Crea un archivo `.env` para almacenar la URI de conexión de MongoDB.
5. En el archivo principal del proyecto, importa las dependencias, carga las variables de entorno y configura la conexión a MongoDB.
6. Verifica que la conexión a MongoDB Atlas sea exitosa.

---

### 3. Modelo Vista-Controlador (MVC)

Esta estructura organiza el proyecto en tres componentes principales:

1. **Modelos**: Define los esquemas de datos utilizando Mongoose para modelar la estructura de los documentos de MongoDB.
2. **Controladores**: Crea funciones para manejar la lógica de la aplicación, que reciben y procesan las solicitudes HTTP.
3. **Rutas**: Define los endpoints de la API y asigna cada uno de ellos a su controlador correspondiente en el archivo de rutas.

---

### 4. Autenticación con JWT

1. Instala las dependencias necesarias para manejar JWT y encriptar contraseñas.
2. Crea una función para generar tokens de autenticación que se firmarán con una clave secreta.
3. Define un middleware de autenticación para verificar los tokens en las rutas protegidas.
4. En las rutas que requieren autenticación, aplica el middleware para verificar el acceso antes de procesar la solicitud.
5. Revisa la documentación de JWT para explorar más opciones de configuración y seguridad.

---

## Recursos Adicionales

- **Documentación oficial de Node.js**: [Node.js Docs](https://nodejs.org/docs/latest/api/)
- **Documentación oficial de Express**: [Express Docs](https://expressjs.com/en/5x/api.html)
- **Documentación oficial de MongoDB Atlas**: [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- **Documentación oficial de Mongoose**: [MongoDB Atlas Docs](https://mongoosejs.com/docs/index.html)
- **JWT**: [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)



<!-- ## Videos de las Sesiones
<ul>
  <li><a href="https://www.youtube.com/watch?v=7Ptx16Rnm7c&list=PLpD_vYWjZt11y0RdptTt9JkIafhOc-evL&index=46" target="_blank">Repaso angular e inicialización proyecto 2 en Node.js</a> 🎥</li>

  <li><a href="https://www.youtube.com/watch?v=dgEgeGHcrOE&list=PLpD_vYWjZt11y0RdptTt9JkIafhOc-evL&index=47" target="_blank">Diferencia entre dependencies y dev Dependencies, y repaso servidor con express</a> 🎥</li>

  <li><a href="https://www.youtube.com/watch?v=I7vxuCHxln8&list=PLpD_vYWjZt11y0RdptTt9JkIafhOc-evL&index=48" target="_blank">Repaso conexion base de datos y Modales con Angular</a> 🎥</li>

  <li><a href="https://www.youtube.com/watch?v=kUS3uzeUBoc&list=PLpD_vYWjZt11y0RdptTt9JkIafhOc-evL&index=49" target="_blank">Modelo usuario y discriminador para modelo administrador</a> 🎥</li>

  <li><a href="https://www.youtube.com/watch?v=0uEVZb-8SnM&list=PLpD_vYWjZt11y0RdptTt9JkIafhOc-evL&index=51" target="_blank">Concepto APIs RESTFUL y repaso controladores y rutas</a> 🎥</li>

  <li><a href="https://www.youtube.com/watch?v=4RJJbzeoJys&list=PLpD_vYWjZt11y0RdptTt9JkIafhOc-evL&index=52" target="_blank">Comunicación entre componentes con Angular y lógica de los controladores para peticiones (PARTE I)</a> 🎥</li>

  <li><a href="https://www.youtube.com/watch?v=Tpixae2tKBI&list=PLpD_vYWjZt11y0RdptTt9JkIafhOc-evL&index=53" target="_blank">Lógica de los controladores para peticiones (PARTE II)</a> 🎥</li>

  <li><a href="https://www.youtube.com/watch?v=OW-M7S0Pogw&list=PLpD_vYWjZt11y0RdptTt9JkIafhOc-evL&index=54" target="_blank">Modelos con referencia a otros modelos de mongoose</a> 🎥</li>

  <li><a href="https://www.youtube.com/watch?v=LbzQDz-IY3w&list=PLpD_vYWjZt11y0RdptTt9JkIafhOc-evL&index=55" target="_blank">Introducción a autenticación con JASONWEBTOKEN  y código para generar y verificar tokens (Inicio del tema JWT)</a> 🎥</li>

  <li><a href="https://www.youtube.com/watch?v=oxG6OUr45iA&list=PLpD_vYWjZt11y0RdptTt9JkIafhOc-evL&index=56" target="_blank">Encriptar contraseñas y servicio para lógica de inicio de sesión</a> 🎥</li>

  <li><a href="https://www.youtube.com/watch?v=5JaHBXg0jrw&list=PLpD_vYWjZt11y0RdptTt9JkIafhOc-evL&index=57" target="_blank">Prueba de validación de credenciales y generación de token, middleware de autenticación</a> 🎥</li>

  <li><a href="https://www.youtube.com/watch?v=nGBsgjVxaw8&list=PLpD_vYWjZt11y0RdptTt9JkIafhOc-evL&index=58" target="_blank">Verificación de Token y validación rol administrador (Fin del tema JWT)</a> 🎥</li>
</ul> -->

<!-- Separador -->
<hr>

<!-- Subtítulo de Autor -->
<h2 align="center">Autor</h2>

Realizado por: 
[Luisa Fernanda Castaño Vanegas](https://www.linkedin.com/in/luisacastanovanegas/). © 2024.
<br>

<!-- Mensaje de Estrellita -->
<p>Si te gustó el contenido del repositorio, ¡apóyanos dando una ⭐ al proyecto!</p>