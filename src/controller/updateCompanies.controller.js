import companies from "../models/company.model";
import updateCompaniesService from "../services/updateCompanies.services";

const updateCompaniesController = async (req, res) => {
  const { updatedVehicle } = await updateCompaniesService(req);

  return res
    .status(200)
    .json({ message: "Vehicle updated", vehicle: updatedVehicle });
};
export default updateCompaniesController;
