const deleteVehicleService = async (req, res) => {
  let plate = req.params.plate;
  let company = req.company;

  company.vehicles = company.vehicles.filter(
    (vehicle) => vehicle.plate !== plate
  );

  return req;
};
export default deleteVehicleService;
