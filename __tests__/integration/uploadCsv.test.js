const request = require("supertest");
const path = require("path");
const { app, startServer } = require("../../app");
const Person = require("../../database/models/Person"); // Importe o modelo real
jest.mock("../../database/models/Person"); // Mock do modelo Person

let server;

beforeAll(async () => {
  server = await startServer(); // Inicia o servidor com a porta aleatória
});

afterAll(async () => {
  await server.close(); // Fecha o servidor após os testes
});

describe("Teste de Integração - Upload de CSV", () => {
  it("deve fazer upload de um CSV válido e salvar os dados", async () => {
    const mockFilePath = path.join(__dirname, "../mocks/sample.csv");

    // Limpa o mock de bulkCreate antes de cada teste
    Person.bulkCreate.mockClear();
    Person.bulkCreate.mockResolvedValueOnce([]); // Responde como se o insert tivesse sido bem-sucedido

    const response = await request(server) // Usa o servidor iniciado com a porta aleatória
      .post("/api/csv/upload")
      .attach("file", mockFilePath); // Envia o arquivo como multipart/form-data

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Dados inseridos com sucesso!");
    expect(Person.bulkCreate).toHaveBeenCalledTimes(1);

    const registrosInseridos = [
      {
        name: "caio henrique rodrigues martins",
        age: "19",
        email: "268312@unifio.edu.br",
      },
      { name: "luis felipe viol", age: "21", email: "268359@unifio.edu.br" },
      {
        name: "luis vinicius auersvald",
        age: "21",
        email: "268596@unifio.edu.br",
      },
      { name: "tiago almeida gomes", age: "21", email: "267699@unifio.edu.br" },
    ];

    expect(Person.bulkCreate).toHaveBeenCalledWith(registrosInseridos);
  });

  it("deve retornar erro ao enviar um arquivo sem registros válidos", async () => {
    const invalidFilePath = path.join(__dirname, "../mocks/invalid.csv");

    // Limpa o mock de bulkCreate antes de cada teste
    Person.bulkCreate.mockClear();

    const response = await request(server) // Usa o servidor iniciado com a porta aleatória
      .post("/api/csv/upload")
      .attach("file", invalidFilePath);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe(
      "Nenhum dado válido encontrado no arquivo CSV."
    );
    expect(Person.bulkCreate).not.toHaveBeenCalled(); // Verifica se bulkCreate não foi chamado
  });

  it("deve retornar erro se o arquivo CSV não for enviado", async () => {
    // Limpa o mock de bulkCreate antes de cada teste
    Person.bulkCreate.mockClear();

    const response = await request(server) // Usa o servidor iniciado com a porta aleatória
      .post("/api/csv/upload");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Arquivo CSV é obrigatório!");
    expect(Person.bulkCreate).not.toHaveBeenCalled(); // Verifica se bulkCreate não foi chamado
  });
});
