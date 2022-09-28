import { Request, Response } from 'express';
import UserServices from '../services/UserServices';
import ILoginController from '../interfaces/ILoginController';

class UserControllers implements ILoginController {
  constructor(private service: UserServices) { }

  Login(req: Request, res: Response): Response {
    const { username, password } = req.body;
    const result = this.service.Login({ username, password });
    return res.status(200).json(result);
  }
}

export default UserControllers;
