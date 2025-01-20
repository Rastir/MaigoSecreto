// Aquí inicia el codigo de funcionalidades del amigo secreto, Ya que el Html y css ya están escritos se procede a dividir
//la asignación en partes para entender mejor el codigo y sus funcionalidades.

//1.- declarar variables 
let amigos = [];


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

// 2.3.- Sorteamos amigo secreto (pendiente Martes 21 de enero 2025)

//Esta funcion va a asignar los cambios de texto
