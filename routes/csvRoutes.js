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
    const uniqueRecords = new Set();

    fs.createReadStream(req.file.path)
      .pipe(
        csv({
          mapHeaders: ({ header }) => header.trim(), // Normaliza os cabeçalhos
        })
      )
      .on("data", (row) => {
        console.log("Linha lida do CSV:", row);

        try {
          // Normaliza os valores
          const name = row["name"]?.trim();
          const age = row["age"]?.trim();
          const email = row["email"]?.trim();

          if (name && age && email) {
            const recordKey = `${name}|${age}|${email}`;
            if (!uniqueRecords.has(recordKey)) {
              records.push({ name, age, email });
              uniqueRecords.add(recordKey);
            } else {
              console.warn("Registro duplicado ignorado:", row);
            }
          } else {
            console.warn("Registro inválido encontrado e ignorado:", row);
          }
        } catch (err) {
          console.warn("Erro ao processar registro:", row, err);
        }
      })
      .on("end", async () => {
        if (records.length === 0) {
          fs.unlinkSync(req.file.path);
          return res
            .status(400)
            .json({ error: "Nenhum dado válido encontrado no arquivo CSV." });
        }

        try {
          await Person.bulkCreate(records);
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

module.exports = router;
