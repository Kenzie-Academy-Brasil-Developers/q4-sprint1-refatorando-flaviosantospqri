import authenticateCompany from "./authenticateCompany.midleware";
import verifyVehicleExistence from "./verifyVehicleExistence.midleware";
import verifyDuplicateCnpj from "./verifyDuplicateCnpj.midleware";
import verifyDuplicateVehiclePlate from "./verifyDuplicateVehiclePlate.midleware";
import verifyCompanyExistence from "./verifyCompanyExistence.midleware";
import validate from "./validade.midlewares";

export default (authenticateCompany,
verifyVehicleExistence,
verifyDuplicateCnpj,
verifyDuplicateVehiclePlate,
verifyCompanyExistence,
validate);
