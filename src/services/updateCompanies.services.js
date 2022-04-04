import companies from "../models/company.model";

const updateCompaniesService = async (req, res) => {
  let company = req.company;

  let updatedCompany = { ...company, ...req.body };

  let index = companies.indexOf(company);

  companies[index] = updatedCompany;

  return updatedCompany;
};
export default updateCompaniesService;
