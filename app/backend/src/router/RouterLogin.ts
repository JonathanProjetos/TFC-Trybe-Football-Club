import { Router } from 'express';
import LoginServices from '../services/LoginServices';
import LoginController from '../controllers/LoginController';

const loginRouter = Router();
const service = new LoginServices();
const UserLogin = new LoginController(service);

loginRouter.post('/', UserLogin.LoginController);

export default loginRouter;
