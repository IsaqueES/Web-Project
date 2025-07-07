const form = document.getElementById("formCliente");
const inputs = form.querySelectorAll("input");
const btn = document.getElementById("btnSubmit");

var usernome = localStorage.getItem("nome");
var nomediv = document.getElementById("usernome");

nomediv.innerHTML = `Usuário : ${usernome}`;

function verificarCampos() {
  // Verifica se todos os inputs têm valor (não vazio)
  const todosPreenchidos = Array.from(inputs).every(
    (input) => input.value.trim() !== ""
  );
  btn.style.display = todosPreenchidos ? "inline-block" : "none";
}

inputs.forEach((input) => {
  input.addEventListener("input", verificarCampos);
});

// Roda uma vez ao carregar para caso já tenha algo preenchido
verificarCampos();

var LoginClient = () => {
  const inputnome = document.getElementById("nomecliente").value;
  localStorage.setItem("usertype", "Client");
  localStorage.setItem("nome", inputnome);
};
