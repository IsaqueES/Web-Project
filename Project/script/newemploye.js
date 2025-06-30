var LoginEmploye = () => {
  localStorage.setItem("usertype", "Employe");
  window.location.reload();
};
var usertype = localStorage.getItem("usertype");
var motherbox = document.getElementById("motherbox");
if (usertype === "Employe") {
  motherbox.innerHTML = `
  <div class="addbox" id="additem">
      <h1>Add Item</h1>
      <form action="http://localhost:3000/item" method="POST">
        <input
          type="text"
          id="nomeitem"
          name="nomeitem"
          placeholder="Item"
          required
        />
        <input
          type="text"
          id="amountitem"
          name="amountitem"
          placeholder="Amount"
          required
        />
        <input
          type="text"
          id="priceitem"
          name="priceitem"
          placeholder="Price"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  `;
}
if (usertype === "Client") {
  motherbox.innerHTML = `
  <div class="addbox" id="addfuncionario">
      <h1>Login Employe</h1>
      <form action="http://localhost:3000/funcionario" method="POST">
        <input
          type="text"
          id="nomefuncionario"
          name="nomefuncionario"
          placeholder="Nome"
          required
        />

        <input
          type="text"
          id="emailfuncionario"
          name="emailfuncionario"
          placeholder="Email"
          required
        />
        <input
          type="text"
          id="senhafuncionario"
          name="senhafuncionario"
          placeholder="Password"
          required
        />
        <button type="submit" onclick="LoginEmploye()">Submit</button>
      </form>
    </div>
  `;
}
