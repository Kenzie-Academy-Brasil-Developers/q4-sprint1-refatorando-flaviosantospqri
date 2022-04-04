import companies from "../models/company.model";
const verifyCompanyExistence = (req, res, next) => {
  const cnpj = req.params.cnpj;

  const company = companies.find((company) => company.cnpj == cnpj);

  if (!company) {
    return res.status(400).json({ message: "Company not registered" });
  }

  req.company = company;

  return next();
};
export default verifyCompanyExistence;
