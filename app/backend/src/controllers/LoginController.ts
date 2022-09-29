import { Request, Response } from 'express';
import LoginServices from '../services/LoginServices';
import IController from '../interfaces/IController';

class UserControllers implements IController {
  constructor(private service: LoginServices) { }

  LoginController = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;

    const result = await this.service.LoginService({ email, password });

    if (!result) throw new Error('404|User not found');

    return res.status(200).json({ token: result });
  };
}

export default UserControllers;
