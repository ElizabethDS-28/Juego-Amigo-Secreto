let amigos = []

function AgregarAmigos() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo.trim() ==="") {
    alert("Debes de agregar un nombre");
  } else {
    console.log(nombreAmigo);
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value="";
    mostrarListaAmgo();
  }
}

console.log(amigos);


function mostrarListaAmgo(){
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for(let index = 0; index<amigos.length; index++){
    const elemento = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = elemento;
    listaAmigos.appendChild(listaHTML);
  }
}

function sortAmigo(){
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
}
