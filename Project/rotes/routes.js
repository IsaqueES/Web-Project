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
app.post("/pedido", async (req, res) => {
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
});
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
//DELETE CLIENTE
app.post("/deletecliente", async (req, res) => {
  const { idCliente } = req.body;
  try {
    await Cliente.destroy({ where: { idCliente } });
    res.redirect("/loginfuncionario");
  } catch (error) {
    res.status(500).send("Erro ao deletar cliente: " + error.message);
  }
});

//EDIT CLIENTE
app.post("/editcliente", async (req, res) => {
  const { idCliente, nome, email, senha } = req.body;
  try {
    // Se a senha estiver vazia, não atualiza a senha
    const updateData = { nome, email };
    if (senha && senha.trim() !== "") {
      updateData.senha = senha;
    }

    await Cliente.update(updateData, { where: { idCliente } });
    res.redirect("/loginfuncionario");
  } catch (error) {
    res.status(500).send("Erro ao editar cliente: " + error.message);
  }
});

//CLIENTESLIST
app.get("/api/clientelist", async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    const clientesHTML = clientes
      .map(
        (cliente) => `
      <div class="mb-3 text-center">
        <div class="border rounded p-2 bg-white">
          <strong>${cliente.nome}</strong>
          <br>
          <small class="text-muted">${cliente.email}</small>
        </div>
        <div class="mt-2 d-flex gap-1">
          <button 
            type="button" 
            class="btn btn-sm btn-outline-primary flex-fill"
            data-bs-toggle="modal"
            data-bs-target="#editModal${cliente.idCliente}"
          >
            Editar
          </button>
          <form action="/deletecliente" method="POST" class="flex-fill">
            <input type="hidden" name="idCliente" value="${cliente.idCliente}">
            <button type="submit" class="btn btn-sm w-100" style="background-color: #f8d7da; color: #721c24; border: none;" onclick="return confirm('Tem certeza que deseja deletar este cliente?')">
              Deletar
            </button>
          </form>
        </div>
      </div>

      <!-- Modal de Edição -->
      <div class="modal fade" id="editModal${cliente.idCliente}" tabindex="-1" aria-labelledby="editModalLabel${cliente.idCliente}" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel${cliente.idCliente}">Editar Cliente</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="/editcliente" method="POST">
              <div class="modal-body">
                <input type="hidden" name="idCliente" value="${cliente.idCliente}">
                <div class="mb-3">
                  <label for="nome${cliente.idCliente}" class="form-label">Nome</label>
                  <input type="text" class="form-control" id="nome${cliente.idCliente}" name="nome" value="${cliente.nome}" required>
                </div>
                <div class="mb-3">
                  <label for="email${cliente.idCliente}" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email${cliente.idCliente}" name="email" value="${cliente.email}" required>
                </div>
                <div class="mb-3">
                  <label for="senha${cliente.idCliente}" class="form-label">Nova Senha (opcional)</label>
                  <input type="password" class="form-control" id="senha${cliente.idCliente}" name="senha" placeholder="Deixe em branco para manter a senha atual">
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" class="btn btn-primary">Salvar Alterações</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `
      )
      .join("");

    res.send(`
      <div class="p-3">
        <h5 class="text-center mb-4"><strong>Clientes</strong></h5>
        ${clientesHTML}
      </div>
    `);
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    res.status(500).send("<p>Erro ao carregar clientes.</p>");
  }
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
