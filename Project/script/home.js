//LOCALSTORAGE VARS
var usertype = localStorage.getItem("usertype");
var motherdiv = document.getElementById("motherbox");
var usernome = localStorage.getItem("nome");
var nomediv = document.getElementById("usernome");

nomediv.innerHTML = `Usuário : ${usernome}`;

if (usertype === "Client") {
  fetch("/api/clientehtml")
    .then((response) => response.text())
    .then((html) => {
      motherdiv.innerHTML = html;
    });
}
if (usertype === "Employe") {
  fetch("/api/funcionariohtml")
    .then((responsef) => responsef.text())
    .then((htmlf) => {
      motherdiv.innerHTML = htmlf;
    });
}

const Comprou = (item) => {
  alert(`Comprou ${item}`);
};
