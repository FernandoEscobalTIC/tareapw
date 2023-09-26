# Tarea de Programación Web

## Instrucciones de uso

1. Clona este repositorio en tu máquina local.

2. Tira el siguiente comando posicionando la consola en la carpeta raíz del proyecto: 
- `npm install express prisma jsonwebtoken bcrypt`

3. Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables de entorno:
- Puerto dónde correrá el proyecto:
- `PORT = 3000`
- Si utilizas otro manejador de base de datos, deberás consultar la documentación de prisma
- `DATABASE_URL="mysql://root:@localhost:3306/baseparatarea?schema=public"`
- Es preferible cambiar la SECRET_KEY con una linea de alfanumericos aleatorios de 256 bits
- `SECRET_KEY="your-256-bit-secret"`

4. Ejecuta la aplicación usando `npm index.js`.

5. La aplicación estará disponible en http://localhost:3000 (A no ser que hayas cambiado las variables de entorno).