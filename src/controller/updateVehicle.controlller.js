import updateVehicleService from "../services/updateVehicle.services";
const updateVehicleController = async (req, res) => {
  const updatedVehicle = await updateVehicleService(req);

  return res
    .status(200)
    .json({ message: "Vehicle updated", vehicle: updatedVehicle });
};
export default updateVehicleController;
