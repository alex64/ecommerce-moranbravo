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
## Formulario
El usuario puede agregar su nombre, telefono, y correo al pedido.
En caso de no hacerlo, se usaran los valores que vienen por default (mostrados en el placeholder).
Para evitar que los hijos del componente se creen cada vez que se hace un cambio en los inputs, se esta usando memo para los componentes hijos y el useCallback para el metodo que se usa para eliminar.
- Los elementos en el carrito solo se volveran a crear en caso de que se borren elementos del carrito.

## Control de Stock
El control de stock se maneja directamente en el Front-End en base a los elementos del carrito el cual solo afectara para la compra actual. Una vez que se registre la compra, el stock se reestablecera a como esta definida en la base de datos.
- En CartContext, se genero un metodo llamado stockInCart, el cual nos regresa la cantidad de un item en el carrito.
- En ItemDetail, revisamos la cantidad de stock disponible de un item se le resta a la cantidad que hay en el carrito para actualizar el stock disponible para esa compra.
    - Si no hay stock disponible, no aparecera el componente de ItemCount y solo habra una etiquta mencionando que no hay stock disponble.
- Una vez completada la compra o cuando el item es eliminado del carrito, el stock volvera a estar disponble.

## Wish List
La Wish List se meneja de manera similar al carrito (usando un contexto). La funcionalidad es:
- Si navegamos a la wish list vacia, nos mostrara un mensaje y un boton para navegar al Landing.
- En cada producto (ItemDetail), tenemos la posibilidad de agregarlo a la la Wish List mediante un boton.
    - Una vez agregado, se mostrara un mensaje que indique la accion.
    - Si se trata de agregar un producto que ya este en la wish list, se mostrara un mensaje que indique esto.
- En la wish list con elementos podemos:
    - Agregar al carrito
        - Al agregar, aparecera un mensaje que diga que fue agregado y se mostrar un boton para navegar al carrito.
            - Ya en el carrito, se vera que se agrego un solo producto.
            - Si se agrega otra vez el elemento al carrito, aumentara la cantidad del mismo producto.
        - En caso de que no haya stock del producto, aparecera un mensaje y solo permitira eliminarlo.
    - Borrar el elemento de la wish list

# Deploy
https://beamish-pegasus-6efb37.netlify.app/