import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  "postgresql://postgres.udadouluseqghixmiotg:PWIFICME23%23@aws-0-sa-east-1.pooler.supabase.com:5432/postgres",
  {
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

// Cliente
const Cliente = sequelize.define(
  "Cliente",
  {
    idCliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
  },
  {
    tableName: "Clientes",
  }
);

// Funcionario
const Funcionario = sequelize.define(
  "Funcionario",
  {
    idFuncionario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
  },
  {
    tableName: "Funcionarios",
  }
);

// Item
const Item = sequelize.define(
  "Item",
  {
    idItem: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: DataTypes.STRING,
    imagem: DataTypes.STRING,
    preco: DataTypes.INTEGER,
  },
  {
    tableName: "Itens",
  }
);

// Pedido
const Pedido = sequelize.define(
  "Pedido",
  {
    idPedido: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idItem: { type: DataTypes.INTEGER, allowNull: false },
    idCliente: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "Pedidos",
  }
);

// Relacionamentos
Cliente.hasMany(Pedido, { foreignKey: "idCliente" });
Pedido.belongsTo(Cliente, { foreignKey: "idCliente" });
Item.hasMany(Pedido, { foreignKey: "idItem" });
Pedido.belongsTo(Item, { foreignKey: "idItem" });

let ItemJson;
let ItemHTML;
async function PegarJSON() {
  ItemJson = (await Item.findAll()).map((item) => item.toJSON());
  ItemHTML = ItemJson.map(
    (item) => `
    <div>
      <p>Nome: ${item.nome}</p>
      <p>Nota: ${item.nota}</p>
    </div>
  `
  ).join("\n"); // join para juntar tudo numa string só

  console.log(ItemHTML);
}

PegarJSON();

export { sequelize, Cliente, Funcionario, Item, Pedido, ItemHTML };