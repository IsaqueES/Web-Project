//LOCALSTORAGE VARS
var usertype = localStorage.getItem("usertype");
var motherdiv = document.getElementById("motherbox");

fetch("/api/itemhtml")
  .then((response) => response.text())
  .then((html) => {
    motherdiv.innerHTML = html;
  });

if (usertype === "Client") {
  motherdiv.innerHTML = ``;
}
if (usertype === "Employe") {
  motherdiv.innerHTML = `
          <h1>Your {usertype} is Employe</h1>
          `;
}

const Comprou = (item) => {
  alert(`Comprou ${item}`);
};
