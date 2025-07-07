# 🛒 Sistema de Mercado Web

Um sistema completo de gerenciamento para mercados/lojas com interface web responsiva, desenvolvido com Node.js, Express e PostgreSQL.

## 📋 Sobre o Projeto

Este projeto é um sistema web fullstack que permite o gerenciamento completo de um mercado online, com funcionalidades separadas para clientes e funcionários. O sistema permite cadastro de usuários, gerenciamento de produtos, processamento de pedidos e controle administrativo.

## 🔧 Tecnologias Utilizadas

- **Backend:**

  - Node.js
  - Express.js
  - Sequelize ORM
  - PostgreSQL (Supabase)

- **Frontend:**

  - HTML5
  - CSS3
  - JavaScript (ES6+)
  - Bootstrap 5.3.3

- **Ferramentas:**
  - Nodemon (desenvolvimento)
  - ES Modules

## 🚀 Funcionalidades

### 👥 Para Clientes

- ✅ Cadastro e login de clientes
- 🛍️ Visualização de produtos disponíveis
- 🛒 Realização de pedidos
- 📱 Interface responsiva e moderna

### 👨‍💼 Para Funcionários

- ✅ Cadastro e login de funcionários
- 📦 Adição de novos produtos ao estoque
- 👥 Gerenciamento completo de clientes (listar, editar, excluir)
- 📋 Visualização e processamento de pedidos
- 🎯 Painel administrativo completo

### 🔐 Sistema de Autenticação

- Controle de acesso baseado em tipos de usuário
- Armazenamento local de sessões
- Interfaces personalizadas por tipo de usuário

## 📁 Estrutura do Projeto

```
Web-Project-3/
├── Project/
│   ├── data/
│   │   └── database.js          # Configuração do banco e modelos
│   ├── rotes/
│   │   └── routes.js           # Rotas da aplicação
│   ├── script/
│   │   ├── home.js            # Lógica da página principal
│   │   ├── newclient.js       # Funcionalidades do cliente
│   │   └── newemploye.js      # Funcionalidades do funcionário
│   ├── src/
│   │   ├── index.html         # Página principal
│   │   └── login/
│   │       ├── newcliente.html    # Página de cadastro/login cliente
│   │       └── newfuncionario.html # Página de cadastro/login funcionário
│   └── style/
│       └── style.css          # Estilos personalizados
├── Test/                      # Pasta de testes
├── package.json
└── README.md
```

## 🗄️ Modelos de Dados

### Cliente

- `idCliente` (PK, Auto Increment)
- `nome` (String)
- `email` (String)
- `senha` (String)

### Funcionário

- `idFuncionario` (PK, Auto Increment)
- `nome` (String)
- `email` (String)
- `senha` (String)

### Item

- `idItem` (PK, Auto Increment)
- `nome` (String)
- `imagem` (String - URL)
- `preco` (Integer)

### Pedido

- `idPedido` (PK, Auto Increment)
- `nome` (String)
- `imagem` (String - URL)
- `preco` (Integer)

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js (versão 14 ou superior)
- PostgreSQL
- Git

### Passos para instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/Web-Project-3.git
cd Web-Project-3
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o banco de dados:**

   - O projeto está configurado para usar PostgreSQL via Supabase
   - A configuração do banco está em `Project/data/database.js`
   - Para usar seu próprio banco, substitua a string de conexão

4. **Execute o servidor:**

```bash
node Project/rotes/routes.js
```

5. **Acesse a aplicação:**
   - Abra o navegador e acesse: `http://localhost:3000`

## 📡 Rotas da API

### Principais Rotas

- `GET /` - Página inicial
- `GET /logincliente` - Página de login do cliente
- `GET /loginfuncionario` - Página de login do funcionário
- `POST /cliente` - Cadastro de novo cliente
- `POST /funcionario` - Cadastro de novo funcionário
- `POST /item` - Adicionar novo item (funcionário)
- `POST /pedido` - Realizar pedido (cliente)
- `POST /editcliente` - Editar dados do cliente (funcionário)
- `POST /deletecliente` - Remover cliente (funcionário)
- `GET /api/clientehtml` - Buscar produtos para cliente
- `GET /api/funcionariohtml` - Buscar pedidos para funcionário
- `GET /api/clientelist` - Listar clientes para funcionário

## 🎨 Interface do Usuário

- **Design Responsivo:** Interface adaptável para desktop e mobile
- **Bootstrap 5:** Framework CSS para componentes modernos
- **Modais Interativos:** Para edição de dados e exibição de informações
- **Navegação Intuitiva:** Menu claro e funcional
- **Feedback Visual:** Confirmações e alertas para ações do usuário

## 👥 Equipe de Desenvolvimento

- **Isaque Estolano** - Desenvolvedor Back-End
  - Email: isaqueestolanossi04@email.com
- **Luis Henrique** - 2º Desenvolvedor Back-end
  - Email: luis.hsa@email.com
- **Cauã Almeida** - Designer UI
  - Email: cauaalmeidamoura@email.com

## 🔄 Fluxo de Uso

### Cliente

1. Acessa a página de login do cliente
2. Cadastra-se ou faz login
3. Visualiza produtos disponíveis
4. Realiza pedidos dos produtos desejados

### Funcionário

1. Acessa a página de login do funcionário
2. Cadastra-se ou faz login
3. Adiciona novos produtos ao sistema
4. Gerencia clientes (visualizar, editar, excluir)
5. Processa pedidos realizados pelos clientes

## 🚀 Próximas Funcionalidades

- [ ] Sistema de autenticação com JWT
- [ ] Upload de imagens para produtos
- [ ] Relatórios de vendas
- [ ] Sistema de estoque
- [ ] Notificações em tempo real
- [ ] API REST completa

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato com a equipe de desenvolvimento através dos emails listados acima.

---

**Desenvolvido com ❤️ pela equipe Web-Project-3**
