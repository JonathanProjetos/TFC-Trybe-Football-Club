import { Router } from 'express';
import UserServices from '../services/LoginServices';
import LoginController from '../controllers/LoginController';

const loginRouter = Router();
const service = new UserServices();
const UserLogin = new LoginController(service);

loginRouter.post('/', UserLogin.LoginController);

export default loginRouter;
