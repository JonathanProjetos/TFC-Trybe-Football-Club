import { Router } from 'express';
import UserServices from '../services/UserServices';
import LoginController from '../controllers/UserController';

const loginRouter = Router();
const service = new UserServices();
const UserLogin = new LoginController(service);

loginRouter.post('/', UserLogin.LoginController);

export default loginRouter;
