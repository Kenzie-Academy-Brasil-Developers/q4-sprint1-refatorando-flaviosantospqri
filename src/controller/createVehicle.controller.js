import createVehicleService from "../services/createVehicle.services";
import companies from "../models/company.model";
const createVehicleController = async (req, res) => {
  const newVehicle = await createVehicleService(req);

  const company = companies.find((company) => company.cnpj == req.params.cnpj);

  res.status(201).json({
    message: `Vehicle ${newVehicle.model} from year ${newVehicle.year} was acquired to the ${company.name}'s fleet`,
    vehicle: newVehicle,
  });
};
export default createVehicleController;
