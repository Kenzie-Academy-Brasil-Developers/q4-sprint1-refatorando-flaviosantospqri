import { beforeEach, describe, expect, it, jest } from "@jest/globals";

import verifyDuplicateCnpj from "../../middlewares/verifyDuplicateCnpj.midleware";
import companies from "../../models/company.model";

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

companies.push(company);

const mockReq = {};
const mockRes = {};
const nextFn = jest.fn();

describe("Verify company exists midleware ", () => {
  beforeEach(() => {
    mockRes.json = jest.fn().mockReturnValue(mockRes);
    mockRes.status = jest.fn().mockReturnValue(mockRes);
  });
  it("status = 400: | Json = CNPJ already registered ", async () => {
    mockReq.body = {
      cnpj: "12123123000110",
    };
    verifyDuplicateCnpj(mockReq, mockRes, nextFn);

    const expectedStatusCode = 400;
    const expectedMenssage = { message: "CNPJ already registered" };

    expect(mockRes.status).toBeCalledWith(expectedStatusCode);
    expect(mockRes.json).toBeCalledWith(expectedMenssage);
  });
});
