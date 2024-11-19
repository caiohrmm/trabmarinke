const express = require("express");
const sequelize = require("./database/config");
const csvRoutes = require("./routes/csvRoutes");

const app = express();
const PORT = 5000;

app.use(express.json());

// Rotas
app.use("/api/csv", csvRoutes);

// Inicializa o servidor e sincroniza o banco de dados
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados bem-sucedida.");

    // Cria a tabela se ela não existir
    await sequelize.sync({ force: true });

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
  }
})();
