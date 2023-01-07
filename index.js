

function encabezado(){
    let encabezado = document.createElement('h1')
    let texto = document.createTextNode('soy un encabezado')
    encabezado.appendChild(texto)
    encabezado.id = 'encabezado'
    encabezado
    document.querySelector('Body').appendChild(encabezado)
    console.log(document.getElementById('encabezado').classList)
}

function parrafo(){
    let parrafo = document.createElement('p')
    let texto = document.createTextNode('soy un parrafo')
    parrafo.appendChild(texto)
    parrafo.id = 'parrafo'
    document.querySelector('Body').appendChild(parrafo)
    console.log(document.getElementById('parrafo').classList)
}

function encabezado1(){
    //let contenedor = document.getElementById('contenedor')
    let contenedor = document.querySelector('body') // indicamo que olvide todo y solo agregue esto
    contenedor.innerHTML += `<h1>Encabezado 2.0</h1>` // para complementarlo dentro de la misma web solo se agrega +
}