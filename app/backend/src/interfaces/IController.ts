import { Request, Response } from 'express';

interface IController {
  LoginController(req:Request, res: Response): void;
}
export default IController;
