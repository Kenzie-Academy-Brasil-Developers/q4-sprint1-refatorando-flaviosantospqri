import companies from "../models/company.model";
import config from "../configs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const LoginCompaniesService = async (req, res) => {
  const { cnpj, password } = req;

  let company = companies.find((company) => company.cnpj === cnpj);

  const match = await bcrypt.compare(password, company.password);
  console.log(match);
  if (!company) {
    return res.status(401).json({ message: "Company not found" });
  }
  if (!match) {
    return res.status(401).json({ message: "User and password missmatch." });
  }

  let token = jwt.sign({ cnpj: cnpj }, config.secret, {
    expiresIn: config.expiresIn,
  });

  return { company, token };
};
export default LoginCompaniesService;
