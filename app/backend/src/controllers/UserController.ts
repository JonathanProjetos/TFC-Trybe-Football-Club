import { Request, Response } from 'express';
import UserServices from '../services/UserServices';
import ILoginController from '../interfaces/ILoginController';

class UserControllers implements ILoginController {
  constructor(private service: UserServices) { }

  LoginController = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;

    const result = await this.service.LoginService({ email, password });
    if(!result) throw new Error('404|User not found')
    return res.status(200).json({token:result});
  }
}

export default UserControllers;
