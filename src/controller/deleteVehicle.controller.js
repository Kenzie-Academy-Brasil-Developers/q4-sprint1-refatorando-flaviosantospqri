import deleteVehicleService from "../services/deleteVehicle.services";

const deleteVehicleController = async (req, res) => {
  const { company } = await deleteVehicleService(req);

  return res
    .status(200)
    .json({ messagem: "Vehicle deleted", vehicles: company.vehicles });
};
export default deleteVehicleController;
