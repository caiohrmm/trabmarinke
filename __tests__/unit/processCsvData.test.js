const { processCsvRow } = require("../../utils/processCsvRow"); // Função para processar linhas CSV

describe("Teste Unitário - Processamento de Linha CSV", () => {
  it("deve processar uma linha válida corretamente", () => {
    const row = {
      name: " caio henrique rodrigues martins ",
      age: " 19 ",
      email: " 268312@unifio.edu.br ",
    };

    const result = processCsvRow(row);

    expect(result).toEqual({
      name: "caio henrique rodrigues martins",
      age: "19",
      email: "268312@unifio.edu.br",
    });
  });

  it("deve retornar null para uma linha inválida", () => {
    const row = {
      name: "caio henrique rodrigues martins",
      email: "268312@unifio.edu.br", // Campo 'age' está faltando
    };

    const result = processCsvRow(row);
    expect(result).toBeNull();
  });
});
