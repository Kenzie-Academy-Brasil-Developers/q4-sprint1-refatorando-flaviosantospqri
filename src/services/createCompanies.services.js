import companies from "../models/company.model";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";

const createCompaniesService = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.password, 10);
  let company = {
    ...req,
    id: uuidv4(),
    vehicles: [],
    password: hashedPassword,
  };

  companies.push(company);

  return company;
};
export default createCompaniesService;
