import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import app from "../../app";

const company = {
  name: "Colapesos",
  cnpj: "12123123000110",
  password: "456",
  cep: "36610000",
  address: "Fernando Magri",
  number: 18,
  state: "MG",
  city: "Pequeri",
};

describe("Users Tests", () => {
  it("Should create a User 1", async () => {
    const response = await request(app)
      .post("/api/companies/register")
      .send(company);

    expect(response.statusCode).toBe(201);
  });
});
