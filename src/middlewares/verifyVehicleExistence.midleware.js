import companies from "../models/company.model";
const verifyVehicleExistence = (req, res, next) => {
  let plate = req.params.plate;

  const vehicle = companies.some((company) =>
    company.vehicles.some((vehicle) => vehicle.plate === plate)
  );

  if (!vehicle) {
    return res.status(400).json({ message: "Vehicle not registered" });
  }

  req.vehicle = vehicle;

  return next();
};
export default verifyVehicleExistence;
