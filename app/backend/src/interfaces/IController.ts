import { Request, Response } from 'express';

interface IController {
  LoginController?(req:Request, res: Response): void;
  UserController?(req:Request, res: Response): void;
  TeamController?(req:Request, res: Response): void;
  GetByIdTeamController?(req:Request, res: Response):void
}
export default IController;
