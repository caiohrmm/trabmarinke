const express = require("express");
const sequelize = require("./database/config");
const csvRoutes = require("./routes/csvRoutes");

const app = express();
const DEFAULT_PORT = 5000;

// Defina uma porta aleatória para o ambiente de teste
const PORT = process.env.NODE_ENV === "test" ? 0 : DEFAULT_PORT; // Se for teste, a porta será aleatória

app.use(express.json());

// Rotas
app.use("/api/csv", csvRoutes);

// Função para inicializar a conexão e o servidor
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados bem-sucedida.");

    // Cria a tabela se ela não existir
    await sequelize.sync({ force: true });

    // Retorna o servidor sem iniciar imediatamente
    return app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
  }
};

// Se não for ambiente de teste, inicialize o servidor automaticamente
if (process.env.NODE_ENV !== "test") {
  startServer();
}

// Exporta o app e a função de inicialização
module.exports = { app, startServer };
