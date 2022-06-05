# Descripcion General del Proyecto
## Introduccion
Este proyecto consiste en un e-commerce que muestra los diferentes productos de un TCG (Trading Card Game). 
Cada carta se mostrara con informacion detallada como lo haria una pagina web real para poder mostrar la informacion al usuario y que puede decidir si la quiere adquirir o no. Una vez en el carrito, el usario podra proceder con la adquisicion de las cartas elegidas o eliminarlas y realizar una nueva busqueda.

## Tecnologia
Esta e-commerce consta de las siguientes tecnologias:
- FrontEnd
  - React
- Back-End
  - Ninguna. Todo esta desarrollado en el Front-End
- Base de datos
  - Firebase

## Objetivo
### Curso
El e-commerce se realizo a lo largo del curso para poder demostrar los conocimientos de React. 

### Proyecto
Creadad para proveer un espacio donde se tenga informacion sobre Pokemon TGC para que los interesados puedan buscar sus cartas favorias, ver los detalles, y poder comprar las mismas.

# Herramientas
## Herramientas Usadas
| Nombre | Version | Description |
| ----------- | ----------- | ----------- |
| firebase | ^9.8.1 | Libreria que contiene la funcionalidad de conexion al Firebase. Tambien incluye la funcionalodad sobre la base de datos del mismo.
| react | ^18.0.0 | Libreria que contiene la funcionalidad basica para definie componentes de React. Entre ellos: estados (useState), efectos (useEffect), contextos (useContext).
| react-dom | ^18.0.0 | Libreria que define el DOM de React el cual nos permite definir el root de nuestro cliente.
| react-router-dom | ^6.3.0 | Libreria que proporciona la funcionalidad de navegacion de la aplicacion web.
| react-scripts | 5.0.0 | Permite la ejecucion de los scripts dentro del package.json
| sass | ^1.50.1 | Permite la inclusion de codigo scss para los estilos de la aplicacion web.

## Herramientas Eliminadas de create-react-app
| Nombre | Version | Description |
| ----------- | ----------- | ----------- |
| @testing-library/jest-dom | ^5.16.4 | Libreria de testeo. El proyecto no tiene unit tests.
| @testing-library/react | ^12.1.4 | Libreria de testeo. El proyecto no tiene unit tests.
| @testing-library/user-event | ^13.5.0 | Libreria de testeo. El proyecto no tiene unit tests.
| web-vitals | ^2.1.4 | Libreria usada para medir metricas de Web-Vitals. No se estan midiendo estas metricas en el proyecto.

# Pasos de ejecucion
1. Abrir una ventanda de comando en tu sistema operativo.
1. Crea una carpeta que contendra el proyecto.
    - Ejemplo: mkdir app
1. Navega hacia la nueva carpeta creada
    - cd app
1. Clona el repositorio ecommerce-moranbravo.
    - git clone https://github.com/alex64/ecommerce-moranbravo.git
1. Navega hacia la carpeta ecommerce-moranbravo
    - cd ecommerce-moranbravo
1. Ejecuta npm install para agregar las dependencias.
    - npm install
1. Ejecuta npm start para inicializar la aplicacion web localmente.
    - npm start

# Funcionalodad de Componentes/Metodos
N/A