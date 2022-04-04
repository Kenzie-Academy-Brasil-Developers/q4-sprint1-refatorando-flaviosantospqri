const updateVehicleService = (req, res) => {
  let company = req.company;
  let vehicle = req.vehicle;

  let updatedVehicle = { ...vehicle, ...req.body };

  let index = company.vehicles.indexOf(vehicle);

  company.vehicles[index] = updatedVehicle;

  return updatedVehicle;
};
export default updateVehicleService;
