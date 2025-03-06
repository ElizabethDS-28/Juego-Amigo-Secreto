
let amigos = []

 console.log (amigos);

 function agregarAmigos() {
    const agregaAmigos = document.getElementById ("amigo").value;
    if(amigos == "") { 
        alert("Por favor ingresa un nombre");
    return; 
    }

    if (amigos.includes(amigos)) {
        alert("Este nombre ya fue aññadido")
        return;
    }
       
    else { amigos.push("listaAmigos");
        let listaAmigos= document.getElementById("amigos");
        console.log(agregaAmigos);
     } 
     document.getElementById("amigo").value = "";

     amigos.push(nombre)
     actualizarLista()
     input.value = "";
 }

function agregarNombres() {

   let = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    array.forEach(amigo => {
    }); lista.innerHTML += `<Li>${agregarAmigos}</li>`;
}
  agregarNombres()

function listaAmigos () {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    console.log(listaAmigos)

    // Recorrer el arreglo amigos e iterar sobre cada nombre
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li> para cada amigo
        let li = document.createElement("li");
        li.textContent = amigos[i];  // Asignar el nombre del amigo al elemento <li>
        
        // Agregar el <li> a la lista HTML
        lista.appendChild(li);
    }
}

// Llamar a la función para mostrar los amigos (esto lo harías al cargar la página o al agregar nuevos amigos)
mostrarAmigos();

function sortearAmigos () {
    if (amigos.length == 0) {
        alert("No hay participantes en la lista");
        return;
        }
     }

let indiceAleatorio = Math.floor(Math.random * amigos.length);

let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;

// Llamar a la función para hacer el sorteo
sortearAmigo();
