import deleteCompaniesService from "../services/deleteCompanies.services";

const deleteCompanyController = async (req, res) => {
  let companies = await deleteCompaniesService(req);

  return res.status(200).json({ messagem: "Company deleted", companies });
};
export default deleteCompanyController;
