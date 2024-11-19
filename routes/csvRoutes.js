const express = require("express");
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");
const Person = require("../database/models/Person");

const router = express.Router();

// Configuração do Multer para upload de arquivos
const upload = multer({ dest: "uploads/" });

// Rota para fazer upload de um arquivo CSV e salvar os dados
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Arquivo CSV é obrigatório!" });
    }

    const records = [];
    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", (row) => {
        // Verifica se os campos necessários estão presentes e válidos
        if (row.name && row.age && row.email) {
          records.push({
            name: row.name,
            age: parseInt(row.age, 10), // Converte 'age' para número
            email: row.email,
          });
        } else {
          console.warn("Registro inválido encontrado e ignorado:", row);
        }
      })
      .on("end", async () => {
        if (records.length === 0) {
          // Nenhum dado válido foi encontrado no CSV
          fs.unlinkSync(req.file.path);
          return res
            .status(400)
            .json({ error: "Nenhum dado válido encontrado no arquivo CSV." });
        }

        try {
          // Insere os registros no banco de dados
          await Person.bulkCreate(records);

          // Remove o arquivo após o processamento
          fs.unlinkSync(req.file.path);

          res
            .status(201)
            .json({ message: "Dados inseridos com sucesso!", records });
        } catch (dbError) {
          console.error("Erro ao salvar no banco de dados:", dbError);
          res
            .status(500)
            .json({ error: "Erro ao salvar os dados no banco de dados." });
        }
      });
  } catch (error) {
    console.error("Erro ao processar o arquivo CSV:", error);
    res.status(500).json({ error: "Erro ao processar o arquivo CSV." });
  }
});

module.exports = router;
