// ACÁ VAMOS A CONFIGURAR LOS MÉTODOS NECESARIOS PARA GENERAR Y VERIFICAR NUESTRO
// TOKEN E AUTENTICACIÓN

// 1. Instalar la librería -> npm i jsonwebtoken
// 2. crearnos una clave secreta

// ---------------------------------------------------------------------------

// Importar módulos y dependencias que necesitemos
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const key = process.env.SECRET_KEY;
