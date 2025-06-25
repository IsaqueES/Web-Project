var saved = localStorage.getItem("saved");
const Submit = async (id) => {
  var input = document.getElementById(id).value;
  localStorage.setItem("saved", input);
  saved = localStorage.getItem("saved");
  console.log(saved);
  window.location.reload();
};

var divname = document.getElementById("divname");
if (saved === null) {
  divname.innerText = "Se voce esta lendo isso é pq nao tem cadastro ainda";
} else {
  divname.innerText = `Olá ${saved}!`;
}
console.log(saved);
