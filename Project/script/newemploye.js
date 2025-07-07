var LoginEmploye = () => {
  localStorage.setItem("usertype", "Employe");
  window.location.reload();
};
var usertype = localStorage.getItem("usertype");
var motherbox = document.getElementById("motherbox");
if (usertype === "Employe") {
  motherbox.innerHTML = `
  <div class="container mt-5">
  <div class="card shadow-sm p-4">
    <h2 class="mb-4 text-primary">Adicionar Item</h2>
    <form action="http://localhost:3000/item" method="POST">
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="nomeitem"
          name="nomeitem"
          placeholder="Nome do item"
          required
        />
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="imgitem"
          name="imgitem"
          placeholder="URL da imagem"
          required
        />
      </div>
      <div class="mb-3">
        <input
          type="number"
          step="0.01"
          class="form-control"
          id="priceitem"
          name="priceitem"
          placeholder="Preço"
          required
        />
      </div>
      <button type="submit" class="btn btn-success w-100">Cadastrar</button>
    </form>
    </div>
  </div>

  `;
}
if (usertype != "Employe") {
  motherbox.innerHTML = `
  <div class="container mt-5">
    <div class="card shadow-sm p-4">
      <h2 class="mb-4 text-primary">Login Funcionário</h2>
      <form id="formFunc" action="http://localhost:3000/funcionario" method="POST">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="nomefuncionario"
            name="nomefuncionario"
            placeholder="Nome"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="emailfuncionario"
            name="emailfuncionario"
            placeholder="Email"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="senhafuncionario"
            name="senhafuncionario"
            placeholder="Senha"
            required
          />
        </div>
        <button
          onClick="LoginEmploye()"
          type="submit"
          class="btn btn-primary w-100"
          id="submitBtn"
          style="display:none"
        >
          Entrar
        </button>
      </form>
    </div>
  </div>
  `;

  const form = document.getElementById("formFunc");
  const inputs = form.querySelectorAll("input[required]");
  const submitBtn = document.getElementById("submitBtn");

  function checkInputs() {
    const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");
    submitBtn.style.display = allFilled ? "block" : "none";
  }

  inputs.forEach(input => {
    input.addEventListener("input", checkInputs);
  });

  checkInputs(); // checa ao carregar
}
