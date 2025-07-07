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
    console.log("Criou Item");
    console.log(req.body);
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
    console.log("Criou Cliente");
    console.log(req.body);
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
    console.log("Criou Funcionario");
    console.log(req.body);
    console.log(novoFuncionario)
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
    console.log("Criou Pedido");
    console.log(req.body);
    console.log(novoPedido)
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
    <div style="padding: 15px;margin:5px; background-color: aquamarine; border: 2px solid black;">
      <img src="${item.imagem}">
      <p>Nome: ${item.nome}</p>
      <p>Preço: ${item.preco}</p>
      <form action="http://localhost:3000/pedido" method="POST">
        <input type="hidden" name="nomepedido" value="${item.nome}">
        <input type="hidden" name="imagempedido" value="${item.imagem}">
        <input type="hidden" name="precopedido" value="${item.preco}">
        <button type="submit">Comprar</button>
      </form>
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
    <div style="padding: 15px;margin:5px; background-color: aquamarine; border: 2px solid black;">
      <img src="${pedido.imagem}">
      <p>Nome: ${pedido.nome}</p>
      <p>Preço: ${pedido.preco}</p>
      <form action="http://localhost:3000/pedidoenviado" method="POST">
        <input type="hidden" name="nomepedido" value="${pedido.nome}">
        <button type="submit">Enviar</button>
      </form>
    </div>
  `
  ).join("");
  res.send(PedidoHTML); // envia só o HTML
});


app.post("/teste/:id", async (req, res) => {
  const idparam = req.params.id;
  try {
    console.log("Você enviou: " + idparam);
    res.status(200).send(`Recebi o id: ${idparam}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro no servidor");
  }
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);