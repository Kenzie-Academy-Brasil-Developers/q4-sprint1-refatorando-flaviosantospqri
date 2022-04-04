import companies from "../models/company.model";
const getvehicles = async (req, res) => {
  const company = companies.find((company) => company.cnpj == req.params.cnpj);
  return res.status(200).json(company.vehicles);
};
export default getvehicles;
