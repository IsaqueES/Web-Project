import express from "express";
import { Item } from "../data/database.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("../../Project")); // pasta com HTML/JS/CSS

app.post("/item", async (req, res) => {
  const novoitem = await Item.create({
    nome: req.body.nome,
    quantidade: 10,
    preco: 99,
  });
  console.log(req.body);
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
