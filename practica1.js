/* Ejercicio de arreglos java script*/

//mostrar los numero impares en un arreglo

function numeroimpares(){
    for (i = 1; i < 10; i++){
        if (i % 2 !== 0){
            console.log("NumerosImpares",i)
        }
    }
}

numeroimpares();

//tabla de  multiplicar

function multiplicacion(){
    valor = 5;
    for (i = 1; i <= 11; i++){
        multi = i * valor
        console.log(multi)
    }
}
multiplicacion()


function multiplicacion(valor){ // al inicio de la funcion se agrega una variable el cual permite que por medio del usuario pueda ingresar un dato numerico cualquiera.
    for (i = 1; i <= 11; i++){
       let multi = i * valor
        console.log(multi)
    }
}
multiplicacion(3) //Aqui es donde cambiamos el valor de forma 


// recibir un array de numero ordenar y mostrarlos

let valores = [1, 3, 6, 7, 9, 2, 8, 4, 10, 5, 1]
function comparar(a,b){ return a - b}
//a y b son los parametros
//si devuelves -1. A se va a situar en un indice menor a B
//si devuelve 0, no se genera cambios
//si devuelve 1, B se situara en un indice menor a A
//a = 0 y B = 1 en array el conteo inicializa con 0
valores.sort(comparar) //sort ordena los numero y compara si se tiene un numero repetido este lo muestra al margen correspondiente

let valore = [100, 5, 5, 8, 3, 7, 8]
function compara(a,b) { return a - b}




//Fizzbuzz se tratra de hacer que los multiplos de 3 de palabra Buzz, 5 palabra FizzBuzz y multtiplos de ambo como 15 Fizz
/*for (let i = 1; i < 101; i++){
    if (i % 15 == 0) console.log("Fizz");
    else if (i % 3 == 0)console.log("Buzz")
    else if (i % 5 == 0) console.log("FizzBuzz")
    else console.log(i)
}*/

// Dado un arreglo de diferentes palabras, order alfabeticamente y mostrar en consola en orden

function Burbuja(){
    let lista = ['naranja', 'fresa', 'sandia', 'uvas', 'cerezas', 'manzanas'];
    //lista 
    let n, i , k, aux; //declaracion de variables
    n = lista.length; //ordenamiento y lectura de los valores ingresados.
    console.log(lista) // muestra la lista desordenada
    // Algoritmo  de burbuja
    for ( k = 1; k < n; k++){  // k  es el valor que realizar la comparacion y devolvera de manera ordebanda por alfabetico las palabras
        for ( i = 0; i < (n - k); i++){
            if ( lista[i] > lista[i + 1] ){
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux
                 }
        }
    }
    console.log(lista);
};

Burbuja()


//String Template

let nombre = 'Yovany';

console.log('hola' + '\n mundo'); //con comillas simples se puede concatenar un resulta y si se agrega \n salto de liena
console.log('Hola' + '\n señor' + nombre) //para declaracion de variable basta con cocatenar y agregar la variable a mostrar

console.log(`hola 
mundo`); // acento grave (alt + 96) misma funsion de las comillas simples solo que sin agregar \n para salto de linea

let nom = 'Yovany';
console.log(`Buen dia 
Señor ${nom}`); // misma funcion pero para agregar una variable debe inicializar $ agregando {variable} e inclusive operaciones.

console.log(`Buen dia 
Señor ${10+10}`);

//Objetos en java script

//let  puede mantener ambas y cambiar propiedades
//const sirve para definir arreglos y objetos aun asi la const no cambia solo propiedades del objeto

const perro = {  // se decla un objeto el cual puede tener sub propiedades tal como se ve en el ejemplo
    nombre: 'laica',
    raza: 'Aleman',
    edad: '23',
    ladrar: function(){ // la funcion es la acción que debera realizar o se manda a llamar dentro del objeto
        console.log('woof woof!!')
    }
}

perro.nombre = 'norton' // con la declaracion de const se puede cambiar la propiedad mas no el objeto
console.log(perro) //propiedades
perro.ladrar() // para llamar la funcion debemos poner el objeto y la funcion declarada agregando () (metodos)

//Objeto literal

const gato = {
    name: 'nina',
    raza: 'gata',
    edad: '2',
    vacuna: {
        rabia: true,
    },
    maulla: function(){
        console.log('miau miau')
    }
}

gato.name = 'ninota'
/*gato['raza'] = 'fina'*/ // una opcion de poder cambiar la propiedad
console.log(gato.vacuna.rabia)
gato.maulla()

/*###########  Ejercicio clase 10 de Diciembre 2022  ################*/

const personal = {
    minombre: 'Yovany',
    miapellido: 'Santiago Damazo',
    miedad: '32',
    saludo: 'Buen dia Sr.',
    despedida: function(){
        console.log('Hasta luego Sr.')
    }
}

console.log(personal.saludo  + personal.minombre)
personal.despedida()

/*####OPCION 2###*/

const mipersona = {
    minombre: 'Yovany',
    miapellido: 'Santiago Damazo',
    miedad: '32',
    saludo: 'Buen dia Sr.',
    despedida: function(){
        console.log(`Hasta pronto Sr ${mipersona.minombre} ${mipersona.miapellido}`)
    }
}

console.log(mipersona.saludo  + mipersona.minombre)
mipersona.despedida()


/* JS CLASES */

class Rectangulo {
    constructor(alto, ancho){ //parametros que recibe para la funcion de la clase
        this.alto = alto // contexto donde se esta ejecuntando
        this.ancho = ancho
    }
    get area (){ // tiene funcion como una propiedad mas 
        return this.calcularArea()
    }
    calcularArea(){ //funcion privada
        return this.alto * this.ancho
    }
}

let figura = new Rectangulo(60, 90) //valores integrados dentro de una variable que contiene la clase Rectangulo
console.log(figura.area) //peticion mediante del get que es una propiedad ya que si fuera funcion se tendria que agregar ()

/* ### EJERCICIO 02 ### */

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
    get saludo (){
        return this.saludar()
    }
    saludar(){
        return this.nombre + this.apellido
    }
}

let accion = new Persona('Yovany', 'Santiago')
console.log(`Buen dia `  +  accion.saludo)

/* ### EJERCICIO 02 OPCION-02 ### */

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
    get saludo (){
        return this.saludar()
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre} y mi apellido es: ${this.apellido} `)
    }
}

let person = new Persona('Yovany', 'Santiago')
person.saludo

/* #### Interacion de los objetos ### */

//objet.keys devuelve claves o llaves de una array

let persona = {
    nombre: 'Yovany',
    edad: 32,
    nacionalidad: 'Mexicana'
}

let llaves = Object.keys(persona)
console.log(llaves)

llaves.forEach(function(e){  //forEach retorna para devolver los valores que se tienen en las claves o llaves del array
    console.log(persona[e])
})

// for ('' in '' ) procesa la misma devolucion de las llaves declaradas esto para simplificarlo aun menor desarrollo de codigo

for(indice in persona){
    console.log(persona[indice]) // si queremos que nos muestre los datos de cada llave debemos integrar variable declarada['variable del for']
}

/* ###  Desestructuración de objetos ### */

let perro = {
    nombre: 'firulais',
    edad: 10,
    vacunas: {
        rabia: true
    },
    raza: 'Cocket spaniel'
}

perro.nombre