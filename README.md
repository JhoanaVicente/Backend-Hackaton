# Backend-Hackaton
Crear un Backend con Nodejs - React - Mongodb  
## Primeros Pasos Backend SETUP 
Primero bajamos **Nodemon**, que es un desarrollo programa de utilidad que puede monitorear cualquier cambio en su fuente de directorio y reiniciar automáticamente su servidor o aplicaciones. Desarrollado por remy, esta herramienta de programación es genial para facilitar la recarga del servidor y no tener que hacerlo manualmente nunca más. y tambien nos descargamos **Morgan**, que es un paquete de logging para Node. js. Jest es un framework de testing lanzado por primera vez en 2014  
## Conectando MongoDB  
Has de tener **MongoDB** instalado en el ordenador para poder importarlo:  
npm i mongoose  

## Creamos un Token  
Instalamos **jsonwebtoken**  

## Validar Token  
Instalamos **npm i cookie-parser**  

## Task Crud  
Hemos comprobado con efectividad y con ayuda de ThunderClient los CRUD'S requeridos para el frontend.  

## Validación de datos con backend  
Instalamos **ZOD** para comprobar los datos en determinadas formas para validar. Se utiliza con typescript pero tambien con Java. Es un modulo que puede ser usado en frontend y backend.  

## Configuracion del cliente  
Comenzamos con **React** para crear el frontend:  
Terminal: **ctrl+c** para parar la terminal  
npm create vite / framework: React / nombre del proyecto / variante: JavaScript.  
Luego de haberlo creado entras ahi con:  
cd **nombreDelProyecto** / npm install / npm run dev ( tanto para las terminales en Frontend y Backend)  

Para crear una simulación de enrutado y páginas vamos a **REACT ROUTER** y lo instalamos (Recuerda siempre estar en la terminal adecuada: **terminal frontend: ctrl + c / npm i react-router-dom / npm run dev)**  ### Me recuerda mucho estas paginas a las Rutas de Svelte.  

## Registro de Usuario  
React Hook Form nos ofrece la capacidad de desarrollar nuestros formularios de manera no controlada, independizando todo cambio que pueda producirse en cada uno de los elementos del formulario, evitando con ello renders innecesarios, haciendo uso de hooks y con una sencillez total.  
npm install react-hook-form.  
Tambien instalamos una biblioteca de **fetch** npm i axios  
Configuramos CORS con npm i cors en el backend para que no haya problemas despues.  
