import { Request, Response } from 'express';
import IGetUserAuthInfoRequest from '../interfaces/IGetUserAuthInfoRequest';
import UserServices from '../services/UserServices';
import IController from '../interfaces/IController';

class UserControllers implements IController {
  constructor(private service: UserServices) { }

  UserController = async (req: Request, res: Response): Promise<Response> => {
    const { email } = (req as IGetUserAuthInfoRequest).user;
    console.log(email);
    const result = await this.service.UserService(email);

    if (!result) throw new Error('404|User not found');

    return res.status(200).json(result);
  };
}

export default UserControllers;
