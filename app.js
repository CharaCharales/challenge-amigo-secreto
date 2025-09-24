let listaAmigos = [];

function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function tituloInicial()
{
    asignarTextoElemento('h2', 'Digite el nombre de sus amigos');
}

function actualizarLista()
{
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = "";
    for(let i = 0; i < listaAmigos.length; i++)
    {
        let li = document.createElement('li');
        li.textContent = listaAmigos[i];
        listaHTML.appendChild(li);
    }
    return;
}

function agregarAmigo()
{
    let nombreAmigo = document.getElementById('amigo').value;
    if(nombreAmigo === "")
    {
        asignarTextoElemento('h2', 'Por favor, inserte un nombre');
    }
    else
    {
        tituloInicial();
        listaAmigos.push(nombreAmigo);
        actualizarLista();
        console.log(listaAmigos);
    }
    limpiarCaja();
    return;
}

function sortearAmigo()
{
    if (listaAmigos.length <= 1)
    {
        asignarTextoElemento('h2', `No hay nombres ${(listaAmigos.length ===1) ? 'suficientes para sortear' : 'para sortear'}`);
    }
    else
    {
        let indiceRandom = Math.floor(Math.random() * listaAmigos.length);
        let amigoSecreto = listaAmigos[indiceRandom];
        let resultadoDelSorteo = document.getElementById('resultado');
        document.querySelector('#resultado').innerHTML = "El amigo secreto es: " + amigoSecreto;
    }
    tituloInicial();
    return;
}

function limpiarCaja()
{
    document.querySelector('#amigo').value = "";
}

function limpiarLista()
{
    listaAmigos = [];
    document.querySelector('#listaAmigos').innerHTML = "";
}