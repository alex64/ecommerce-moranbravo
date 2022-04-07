//React "viejo"
//1 - Tener la variable react en scope
    //Pre-cargaste la libreria react
import React from "react"; 
//Obtener cosas que esten exportadas de "react" (paquete instalado en node_modules) cuando no le pones las indicacion de la carpeta
// -> ./react busca el contenido de la carpeta react en la ubicacion local
//React hace una aplicacion "logica", sin UI

//Cada variable puede ser local o global (export)
//2 - Tejer pa variable reactDom en scope
import ReactDom from "react-dom";
//Hace aplicacion en el DOM
//react-native, seria para una aplicacion movil
//electron

//3 - Tener la variable App en scope. App es la variable que tiene todo el codigo de la aplicacion.
function App() {
    return "Hola Mundo";
}


//4 - Hacer el render de la App en DOM
//ReactDom.render(App(), document.getElementById('root'));
ReactDom.render(<App/>, document.getElementById('root'));