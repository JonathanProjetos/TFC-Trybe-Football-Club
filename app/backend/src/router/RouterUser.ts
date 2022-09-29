import { Router } from 'express';
import UserServices from '../services/UserServices';
import UserController from '../controllers/UserController';
import validToken from '../middleware/ValidToken';

const userRouter = Router();
const service = new UserServices();
const User = new UserController(service);

userRouter.get('/', validToken.Token, User.UserController);

export default userRouter;
