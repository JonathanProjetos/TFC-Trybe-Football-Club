import { Request, Response } from 'express';

interface ILoginController {
  Login(req:Request, res: Response): void;
}
export default ILoginController;
