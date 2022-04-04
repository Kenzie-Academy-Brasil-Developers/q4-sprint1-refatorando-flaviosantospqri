import companies from "../models/company.model";

const retrieveCompaniesController = (_, res) => {
  return res.status(200).json(companies);
};

export default retrieveCompaniesController;
