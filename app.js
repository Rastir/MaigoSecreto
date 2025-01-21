// Aquí inicia el codigo de funcionalidades del amigo secreto, Ya que el Html y css ya están escritos se procede a dividir
//la asignación en partes para entender mejor el codigo y sus funcionalidades.

//1.- declarar variables 
let amigos = [];
let sorteados = [];

//2.- Creamos funciones, se necesita agregar amigos, mostrar los nombres y sortear el nombre

// 2.1.- Agregar amigos
function agregarAmigo(){
    //Esta funcion necesita primero obtener el resultado de donde se está ingresando, en esta caso del recuadro de (amigo)
    let valorAmigo = document.getElementById('amigo');
    let amigo = valorAmigo.value;
    //creamos un "sout" para verificar que se está capturando el click y nombre y todo 
    console.log(amigo); 
    //agregamos el valor obtenido al array "Amigos"
    if (amigo) {
        amigos.push(amigo);
        console.log(amigos);
        valorAmigo.value = '';
        asignarTextoElemento('#listaAmigos',amigos);
    }
}

// 2.2.- Mostramos los nombres en el html 

//Esta funcion va a hacer que se cambien el texto de la pagina
function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = '';
    texto.forEach(texto => {
        let li = document.createElement('li');
        li.textContent = texto;
        elementoHTML.appendChild(li);
    });
}

// 2.3.- Sorteamos amigo secreto 

function sortearAmigo(){
    // Si no tenemos amigos, alertamos que no tenemos amigos a sortear
    if (amigos.length === 0){
        alert('No hay amigos para sortear');
        return;
    }
    // comparamos para cuando ya hayamos tenido a todos los sorteados indicar que ya fueron sorteados todos.
    if (sorteados.length === amigos.length){
        alert('Todos los amigos ya han sido sorteados');
        return;
    }
    // inicializamos el amigo sorteado vacio como buena practica
    let amigoSorteado = '';
    // y comparamos con el operador === entendiendo que son del mismo tipo de variable ya que en js no se declara el tipo de variable
    do {
        /* creamos una variable para almacenar al amigo donde tomamos la funcion random matematica para cualquier iteración de la
        matriz "amigos", sin importar el tipo de matriz siempre podremos utilizar math ya que las posiciones de almacenamiento son
        numericas, entonces se pueden realizar operaciones matematicas*/
        let indice = Math.floor(Math.random() * amigos.length);
        //ahora asignamos esa operación a la variable inicializada antes vacia!
        amigoSorteado = amigos[indice];
        //ahora el bucle do-while se asegura de que el amigo no haya sido sorteado previamente  
    } while (sorteados.includes(amigoSorteado));

    //por ultimo añade el amigo sorteado a la matriz de los que ya han sido sorteados y actualiza esa lista en el html.
    sorteados.push(amigoSorteado);
    let resultadoHTML = document.querySelector('#resultado');
    let li = document.createElement('li');
    li.textContent = amigoSorteado;
    resultadoHTML.appendChild(li);

}