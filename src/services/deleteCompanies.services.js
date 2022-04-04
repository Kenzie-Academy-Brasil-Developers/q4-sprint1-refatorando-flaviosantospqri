import companies from "../models/company.model";

const deleteCompaniesService = async (req, res) => {
  let cnpj = req.params.cnpj;

  let difCompanies = companies.filter((company) => company.cnpj !== cnpj);

  companies = difCompanies;

  return companies;
};
export default deleteCompaniesService;
