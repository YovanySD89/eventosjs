/*

let infoLibros = [
    {titulo: "El quijote", autor:"Miguel C"},
    {titulo: "Desarrollo", autor:"constantino"}
]

function libros(autoR){
    return autoR.titulo === 'El quijote'
}

const array = infoLibros.find ( autoR => libros(autoR))
console.log(array)

let inforlibro =[
    {titulo:"La mancha", autor:"La mancha"},
    {titulo:"Java", autor:"Cisco"}
]

function netbook(autor,array) {
    return array.find( libro => autor === libro.autor) // metodo find
    //           metodo   busca dentro de (autor) que tenga el mimso nombre libro.autor (objeto)
}

console.log(netbook("Cisco", inforlibro))   // funciones de busqueda en este ejemplo vemos que tenemos los parametros mas la funtion de busqueda y la impresion.


*/


//JAVA SCRIPT DOM !!!


// class: se pueden agregar a todoslos elementos (.)
// id: solo se una para indentificar elemento solo se puede usar una vez  (#)
console.log('Hola desde JS')

//let titutlo = document.getElementById('titulo') // realiza la impresion e busqueda del id asignado con el nombre
//console.log(titutlo)

let subtittulo = document.getElementsByClassName('rojo')

console.log(document.getElementsByTagName('h1')) // devolvera un arreglo

console.log(document.querySelector('h2')) // devolvera primer elemento que encontro

console.log(document.querySelectorAll('h2'))// devolvera si o si un arreglo con todos los elementos que encontro

// #####  CREAR ELEMENTOS ##### //

let etiquetaDiv = document.createElement('div')
let texto = document.createTextNode('Elemento creado con JS')

//agregar class

etiquetaDiv.className = 'color-div';

//estamos indicando que el cuerpo del html es padre con su respectivo hijo 
//document.querySelector('body').appendChild(etiquetaDiv)

/*document.getElementById('container').appendChild(etiquetaDiv)
//mostrando subhijo
etiquetaDiv.appendChild(texto)
*/

/* #### Eventos del DOM ###*/

/*
document.getElementById("btn").addEventListener("click", function( event ){
    console.log('soy un click')
    console.log(event)
    event.target.innerHTML = 'Clicked!' // elimina lo que tenia y me arroja otro resultado
});
*/
function clicked ( event ){
    console.log('click desde la funcion')
    alert('Hola como estas ?')
    console.log(event)
}

//Evento eventListener JS

const boton1 = document.getElementById('boton1');
Element.addEventListener("click", event =>{
    console.log('Hiciste clic!');
});