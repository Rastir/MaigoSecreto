// Aquí inicia el codigo de funcionalidades del amigo secreto, Ya que el Html y css ya están escritos se procede a dividir
//la asignación en partes para entender mejor el codigo y sus funcionalidades.

//1.- declarar variables 
let amigos = [];
let sorteados = [];

//2.- Creamos funciones, se necesita agregar amigos, mostrar los nombres y sortear el nombre

// 2.1.- Agregar amigos
function agregarAmigo() {
    //Esta funcion necesita primero obtener el resultado de donde se está ingresando, en esta caso del recuadro de (amigo)
    let valorAmigo = document.getElementById('amigo');
    //segun la documentación el metodo trim() sirve para limpiar espacios en blanco y darle formato, pero no se si sea la manera correcta
    let amigo = valorAmigo.value.trim();
    //agregamos el valor obtenido al array "Amigos" donde cada que se agrege un nombre lo añade al vector de amigos
    if (amigo) {
        amigos.push(amigo);
        valorAmigo.value = '';
        actualizarListaAmigos();
    } else {
        //de lo contrario en caso de que esté en blanco o sean puros espacios arrojar error
        alert('No se pueden agregar nombre en blanco');
    }
}

// 2.2.- Mostramos los nombres en el html 

function actualizarListaAmigos() {
    // obtenemos el elemento HTML de donde se va a enseñar la lista de los amigos
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML =amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

// 2.3.- Sorteamos amigo secreto 

function sortearAmigo() {
    // Si no tenemos amigos, alertamos que no tenemos amigos a sortear
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }
    // comparamos para cuando ya hayamos tenido a todos los sorteados indicar que ya fueron sorteados todos.
    if (sorteados.length === amigos.length) {
        alert('Todos los amigos ya han sido sorteados');
        return;
    }
    //así mismo comparamos que el amigo que no está sorteando no sea el mismo en el sorteado
    let disponibles = amigos.filter(amigo => !sorteados.includes(amigo));
    let indice;
    let amigoSorteado;
    //declaramos variables y realizamos operación matematica para sorteo al azar
    do {
        indice = Math.floor(Math.random() * disponibles.length);
        amigoSorteado = disponibles[indice];
        //siempre y cuando sea la misma cantidad de amigos ingresados la misma a sortear
    } while (amigoSorteado === amigos[sorteados.length]);

    sorteados.push(amigoSorteado);
    actualizarResultados();
}

    //Mostramos amigo sorteado con su descipción
function actualizarResultados(){
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = sorteados.map((sorteado, i) => `<li>${amigos[i]} ha sorteado a ${sorteado}</li>`).join('');
}
/* Como extra correjimos agregamos un boton nuevo en el html para darle la posibilidad de iniciar un sorteo nuevo
    esto se hace copiando y pegando la clase boton del html y cambiando el nombre a button-reiniciar una vez hecho esto
    se agrega una variable en el css y se juegan con los valores para dejar de redondear el boton para que así se ve más
    fluido y tenga lindo diseño o que no se vea chueco a esto tambien tenemos que añadir la funcionalidad que vimos en 
    el curso pasado de valores iniciales y con eso empezamos de nuevo y ya !*/

function reiniciarJuego() {

    //regresamos los vectores a valor nulo
    amigos = [];
    sorteados = [];
    //limpiamos la caja donde se ingeesan los nombre en caso de que haya algo
    document.getElementById('amigo').value = '';
    //borramos los listados que se muestran en pantalla y el sorteo
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    alert('Iniciando nuevo sorteo');
}