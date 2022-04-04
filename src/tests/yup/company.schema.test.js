import { describe, expect, it, jest } from "@jest/globals";
import request from "supertest";
import app from "../../app";

const company = {
  name: "Colapesos",
  password: "456",
  cep: "36610000",
  address: "Fernando Magri",
  number: 18,
  state: "MG",
  city: "Pequeri",
};
const response = { error: "Campo de cnpj obrigátorio" };

describe("Company schema test", () => {
  it("Should not be able to create a company without values", async () => {
    const result = await request(app)
      .post("/api/companies/register")
      .send(company);
    expect(result.statusCode).toBe(400);
    expect(result.body).toStrictEqual(response);
  });
});
