//1.1 1. Formulario de contacto - Local Storage
// Crear un formulario de contacto con los siguientes campos:
// Nombre
// Correo
// Mensaje
// Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardandolos todos)

function pintaUsuario(e) {
  e.preventDefault();

  let users = JSON.parse(localStorage.getItem("user")) || [];
  console.log(users);

  let nom = document.querySelector("#nombre").value;
  let email = document.querySelector("#email").value;
  let msj = document.querySelector("#mensaje").value;
  // usuarios.push({ nom, email, msj });

  let usuario = {
    username: nom,
    mail: email,
    texto: msj,
  };

  users.push(usuario);
  localStorage.setItem("user", JSON.stringify(users));
}

document.querySelector("#btn").addEventListener("click", pintaUsuario);
//1.2 Mostrar los datos de los contactos guardados en el DOM

let usuarioMostrar = JSON.parse(localStorage.getItem("user"));
console.log(usuarioMostrar);
let listarUsuario = document.querySelector("#parrafo");

// for (let i = 0; i < usuarioMostrar.length; i++) {
//   listarUsuario.innerHTML += `${usuarioMostrar[i].username}, ${usuarioMostrar[i].mail}, ${usuarioMostrar[i].texto}`;
// }

for (usuario of usuarioMostrar) {
  listarUsuario.innerHTML += `${usuario.username}, ${usuario.mail}, ${usuario.texto}`;
}
// 1.3 Usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave

////////////////////////////////////////////////////////

let borrado = document.querySelector("#delete");
borrado.addEventListener("click", borrar);

function borrar() {
  localStorage.clear();
  console.clear();
  listarUsuario.remove();
}

/////////
//Crea un  botón para borrar un contacto en concreto de Local Storage.

let borradoUno = document.querySelector("#delete-uno");
borradoUno.addEventListener("click", borrarSelectivo);

function borrarSelectivo() {
  let newUsers = [];
  const valor = 3;
  for (let i = 0; i < usuarioMostrar.length; i++) {
    if (i !== valor) {
      newUsers.push(usuarioMostrar[i]);
    }
  }
  localStorage.setItem("user", JSON.stringify(newUsers));
}
