import { v4 as uuidv4 } from "uuid";
import companies from "../models/company.model";

const createVehicleService = async (req, res) => {
  console.log(`teste ${req.params.cnpj}`);
  let newVehicle = {
    ...req.body,
    id: uuidv4(),
    acquisition_date: new Date(),
  };

  const company = companies.find((company) => company.cnpj == req.params.cnpj);

  company.vehicles.push(newVehicle);

  return company;
};
export default createVehicleService;
