import { Request, Response } from 'express';

interface ILoginController {
  LoginController(req:Request, res: Response): void;
}
export default ILoginController;
