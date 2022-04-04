import LoginCompaniesService from "../services/loginCompanies.services";
const LoginCompaniesController = async (req, res) => {
  const { token, company } = await LoginCompaniesService(req.body);

  return res.status(200).json({ token, company });
};
export default LoginCompaniesController;
