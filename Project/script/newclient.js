const form = document.getElementById("formCliente");
const inputs = form.querySelectorAll("input");
const btn = document.getElementById("btnSubmit");

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
  localStorage.setItem("usertype", "Client");
};
