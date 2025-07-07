import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Item, Cliente, Funcionario, Pedido } from "../data/database.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "..", "Project")));

//Home
app.get("/", async (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "Project", "src", "index.html")
  );
});

//Login Cliente
app.get("/logincliente", async (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "..",
      "..",
      "Project",
      "src",
      "login",
      "newcliente.html"
    )
  );
});

//Login Funcionário
app.get("/loginfuncionario", async (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "..",
      "..",
      "Project",
      "src",
      "login",
      "newfuncionario.html"
    )
  );
});

//Adicionando ITEM
app.post("/item", async (req, res) => {
  try {
    const novoItem = await Item.create({
      nome: req.body.nomeitem,
      imagem: req.body.imgitem,
      preco: req.body.priceitem,
    });
  } catch (error) {
    console.log(error);
  }
  res.redirect("/");
});

//Adicionando CLIENTE
app.post("/cliente", async (req, res) => {
  try {
    const novoCliente = await Cliente.create({
      nome: req.body.nomecliente,
      email: req.body.emailcliente,
      senha: req.body.senhacliente,
    });
    
  } catch (error) {
    console.log(error);
  }
  res.redirect("/");
});

//Adionando Funcionário
app.post("/funcionario", async (req, res) => {
  try {
    const novoFuncionario = await Funcionario.create({
      nome: req.body.nomefuncionario,
      email: req.body.emailfuncionario,
      senha: req.body.senhafuncionario,
    });
  } catch (error) {
    console.log(error);
  }
  res.redirect("/");
});

//ADICIONANDO PEDIDO 
app.post("/pedido",async (req,res)=>{
  try {
    const novoPedido = await Pedido.create({
      nome: req.body.nomepedido,
      imagem: req.body.imagempedido,
      preco: req.body.precopedido,
    });
  } catch (error) {
    console.log(error);
  }
  res.redirect("/");
})
//ENVIANDO HTML CLIENTES
app.get("/api/clientehtml", async (req, res) => {
  const ItemJson = (await Item.findAll()).map((item) => item.toJSON());
  const ItemHTML = ItemJson.map(
    (item) => `
    <div class="card m-2" style="width: 18rem;">
  <img src="${item.imagem}" class="card-img-top" alt="${item.nome}">
  <div class="card-body">
    <h5 class="card-title">${item.nome}</h5>
    <p class="card-text">Preço: R$ ${item.preco}</p>
    <form action="http://localhost:3000/pedido" method="POST">
      <input type="hidden" name="nomepedido" value="${item.nome}">
      <input type="hidden" name="imagempedido" value="${item.imagem}">
      <input type="hidden" name="precopedido" value="${item.preco}">
      <button type="submit" class="btn btn-success w-100">Comprar</button>
    </form>
  </div>
</div>

  `
  ).join("");

  res.send(ItemHTML); // envia só o HTML
});

//ENVIANDO HTML FUNCIONARIOS
app.get("/api/funcionariohtml", async (req, res) => {
  const PedidoJSON = (await Pedido.findAll()).map((pedido) => pedido.toJSON());

  const PedidoHTML = PedidoJSON.map(
    (pedido) => `
      <div class="col-md-4 mb-4 d-flex">
        <div class="card flex-fill">
          <img src="${pedido.imagem}" class="card-img-top" alt="${pedido.nome}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${pedido.nome}</h5>
            <p class="card-text">Preço: R$ ${pedido.preco}</p>
            <form action="http://localhost:3000/pedidoenviado" method="POST" class="mt-auto">
              <input type="hidden" name="nomepedido" value="${pedido.nome}">
              <button type="submit" class="btn btn-primary w-100">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    `
  ).join("");
  // Envolve todos os cards dentro de uma única row
  res.send(`<div class="row">${PedidoHTML}</div>`);
});



app.post("/pedidoenviado", async (req, res) => {
  const nomepedido = req.body.nomepedido;
  try {
    await Pedido.destroy({ where: { nome: nomepedido } });
    res.redirect("/");
  } catch (error) {
    res.status(500).send("Erro ao deletar pedido");
  }
});



app.post("/teste/:id", async (req, res) => {
  const idparam = req.params.id;
  try {
    res.status(200).send(`Recebi o id: ${idparam}`);
  } catch (error) {
    res.status(500).send("Erro no servidor");
  }
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);