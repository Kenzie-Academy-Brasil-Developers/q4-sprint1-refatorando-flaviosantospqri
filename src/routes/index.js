import { Router } from "express";
import companySchema from "../shapes/companySchema.shape";
import verifyDuplicateCnpj from "../middlewares/verifyDuplicateCnpj.midleware";
import validate from "../middlewares/validade.midlewares";
import createCompaniesController from "../controller/createCompanies.controller";
import retrieveCompaniesController from "../controller/getCompanies.controller";
import LoginCompaniesController from "../controller/loginCompanies.controller";
import updateCompaniesController from "../controller/updateCompanies.controller";
import authenticateCompany from "../middlewares/authenticateCompany.midleware";
import verifyDuplicateVehiclePlate from "../middlewares/verifyDuplicateVehiclePlate.midleware";
import vehicleSchema from "../shapes/vehicleSchema.shape";
import verifyCompanyExistence from "../middlewares/verifyCompanyExistence.midleware";
import createVehicleController from "../controller/createVehicle.controller";
import getvehicles from "../controller/getVehicles.controller";
import verifyVehicleExistence from "../middlewares/verifyVehicleExistence.midleware";
import updateVehicleController from "../controller/updateVehicle.controlller";
import deleteVehicleController from "../controller/deleteVehicle.controller";
import deleteCompanyController from "../controller/deleteCompany.controller";

const router = Router();

router.post(
  "/companies/register",
  validate(companySchema),
  verifyDuplicateCnpj,
  createCompaniesController
);

router.post("/companies/login", LoginCompaniesController);

router.get("/companies", retrieveCompaniesController);

router.put(
  "/companies/:cnpj",
  authenticateCompany,
  verifyCompanyExistence,
  updateCompaniesController
);
router.delete(
  "/companies/:cnpj",
  authenticateCompany,
  verifyCompanyExistence,
  deleteCompanyController
);
router.post(
  "/companies/:cnpj/vehicles",
  authenticateCompany,
  verifyCompanyExistence,
  verifyDuplicateVehiclePlate,
  validate(vehicleSchema),
  createVehicleController
);
router.get(
  "/companies/:cnpj/vehicles",
  authenticateCompany,
  verifyCompanyExistence,
  getvehicles
);

router.put(
  "/companies/:cnpj/vehicles/:plate",
  authenticateCompany,
  verifyCompanyExistence,
  verifyVehicleExistence,
  updateVehicleController
);

router.delete(
  "/companies/:cnpj/vehicles/:plate",
  authenticateCompany,
  verifyCompanyExistence,
  verifyVehicleExistence,
  deleteVehicleController
);

export default router;
