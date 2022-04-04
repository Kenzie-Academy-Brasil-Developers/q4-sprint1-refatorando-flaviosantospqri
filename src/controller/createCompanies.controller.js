import createCompaniesService from "../services/createCompanies.services";
const createCompaniesController = async (req, res) => {

  const company = await createCompaniesService(req.body);

  return res
    .status(201)
    .json({ message: "Company successfully created", company });
};
export default createCompaniesController;
