🚗 Sistema de Gerenciamento de Estacionamento
Sistema completo para gestão de estacionamento desenvolvido com Node.js, Express, MySQL e Sequelize.

📋 Índice
Funcionalidades

Tecnologias

Pré-requisitos

Instalação

Configuração do Banco de Dados

Estrutura do Projeto

API Endpoints

Executando o Projeto

🚀 Funcionalidades
✅ Cadastro de Proprietários de veículos

✅ Cadastro de Veículos com placa, ano e mensalidade

✅ Relacionamento entre Veículos e Proprietários

✅ API RESTful completa (CRUD)

✅ Validação de dados (CPF, placa, ano)

✅ Constraints de banco de dados

🛠️ Tecnologias
Backend: Node.js + Express.js

Banco de Dados: MySQL + Sequelize (ORM)

Middleware: Body-parser, CORS

Validação: Express Validator

Desenvolvimento: Nodemon

📦 Pré-requisitos
Node.js (v14 ou superior)

MySQL (v5.7 ou superior)

npm ou yarn

🔧 Instalação
Clone o repositório:

bash
git clone https://github.com/MarcosVVSantos/projeto-estacionamento.git
cd projeto-estacionamento
Instale as dependências:

bash
npm install
🗄️ Configuração do Banco de Dados
Crie um banco MySQL chamado estacionamento:

sql
CREATE DATABASE estacionamento;
Configure a conexão no arquivo db.js:

javascript
const sequelize = new Sequelize('estacionamento', 'root', 'sua_senha', {
    host: "localhost",
    port: "3306",
    dialect: 'mysql'
});
📁 Estrutura do Projeto
text
projeto-estacionamento/
├── controllers/           # Controladores das rotas
│   ├── ProprietarioControlls.js
│   └── VeiculoControlls.js
├── models/               # Modelos do Sequelize
│   ├── Proprietario.js
│   ├── Veiculo.js
│   └── db.js            # Configuração do banco
├── index.js             # Arquivo principal
├── package.json
└── README.md
🌐 API Endpoints
👥 Proprietários
GET /proprietario - Lista todos os proprietários

GET /proprietario/:id - Busca proprietário por ID

POST /proprietario - Cria novo proprietário

PUT /proprietario/:id - Atualiza proprietário

DELETE /proprietario/:id - Remove proprietário

🚗 Veículos
GET /veiculo - Lista todos os veículos

GET /veiculo/:id - Busca veículo por ID

POST /veiculo - Cria novo veículo

PUT /veiculo/:id - Atualiza veículo

DELETE /veiculo/:id - Remove veículo

🚀 Executando o Projeto
Desenvolvimento (com nodemon):
bash
npm run dev
Produção:
bash
npm start
O servidor estará rodando em:
text
http://localhost:8081
📊 Exemplos de Requisições
Criar Proprietário:
bash
curl -X POST http://localhost:8081/proprietario \
  -H "Content-Type: application/json" \
  -d '{"nome": "João Silva", "cpf": "12345678901"}'
Criar Veículo:
bash
curl -X POST http://localhost:8081/veiculo \
  -H "Content-Type: application/json" \
  -d '{
    "placa": "ABC1234",
    "ano": 2023,
    "mensalidade": 250.00,
    "fk_proprietario": 1
  }'
⚠️ Importante
As tabelas são criadas automaticamente pelo Sequelize

O sistema usa force: true que recria as tabelas (apenas para desenvolvimento)

Em produção, recomenda-se usar migrações do Sequelize

🔒 Validações Implementadas
CPF: Exatamente 11 caracteres, único

Placa: Formato brasileiro (ABC1234 ou ABC1D23)

Ano: Entre 1900 e ano atual + 1

Mensalidade: Valor positivo

📞 Suporte
Para dúvidas ou issues, abra uma ticket no GitHub Issues

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Desenvolvido por Marcos Vinicius 🚀
