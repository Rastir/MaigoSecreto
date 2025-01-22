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
    //segun la documentación el metodo trim() sirve para limpiar espacios en blanco y darle formato, pero no se si sea la manera correcta
    let amigo = valorAmigo.value.trim();
    //creamos un "sout" para verificar que se está capturando el click y nombre y todo 
    console.log(amigo); 
    //agregamos el valor obtenido al array "Amigos"
    if (amigo) {
        amigos.push(amigo);
        console.log(amigos);
        valorAmigo.value = '';
        actualizarListaAmigos();
    } else {
        alert('No se pueden agregar nombre en blanco');
    }
}

// 2.2.- Mostramos los nombres en el html 

function actualizarListaAmigos(){
    // obtenemos el elemento HTML de donde se va a enseñar la lista de los amigos
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    //recorremos la matriz y creamos un elemento "<li>" de acuerdo a las instrucciones
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        /* aqui tuve que investigar como añadir el "li" que se crea y la documentación dice que el nodo appendChild inserta un nuevo nodo dentro
         de la estructura DOM y es la segunda parte del proceso central uno-dos, osea crear y añadir para construir paginas we a base de programación.
         En resumen agreha un nodo al final de la lista de un elemto hijo de su "clase" padre. osea muestra un elemento*/
         listaAmigos.appendChild(li);
    }
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
    // seleccionamos un amigo aleatorio que no haya sido sorteado antes
    while (true){
        let indice = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indice];
        // agregamos la condición de salida, si no ha sido sorteado, se rompe el bucle
        if(!sorteados.includes(amigoSorteado)){
            break;
        }
    }
    
    //por ultimo añade el amigo sorteado a la matriz de los que ya han sido sorteados y actualiza esa lista en el html.
    sorteados.push(amigoSorteado);
    let resultadoHTML = document.querySelector('#resultado');
    let li = document.createElement('li');
    li.textContent = amigoSorteado;
    resultadoHTML.appendChild(li);
}

/* Como extra correjimos agregamos un boton nuevo en el html para darle la posibilidad de iniciar un sorteo nuevo
    esto se hace copiando y pegando la clase boton del html y cambiando el nombre a button-reiniciar una vez hecho esto
    se agrega una variable en el css y se juegan con los valores para dejar de redondear el boton para que así se ve más
    fluido y tenga lindo diseño o que no se vea chueco a esto tambien tenemos que añadir la funcionalidad que vimos en 
    el curso pasado de valores iniciales y con eso empezamos de nuevo y ya !*/

function reiniciarJuego(){

    //regresamos las matrices a valor zero
    amigos = [];
    sorteados = [];
     //limpiamos la caja donde se ingeesan los nombre en caso de que haya algo
     document.getElementById('amigo').value = '';
     //borramos los listados que se muestran en pantalla y el sorteo
     document.getElementById('listaAmigos').innerHTML = '';
     document.getElementById('resultado').innerHTML = '';
     alert('Iniciando nuevo sorteo');
}