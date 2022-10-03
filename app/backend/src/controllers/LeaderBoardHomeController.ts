import { Request, Response } from 'express';
import IController from '../interfaces/IController';
import LeaderBoardServices from '../services/LeaderBoardHomeService';

class LeaderBoardController implements IController {
  constructor(private services: LeaderBoardServices) { }

  LeaderBoardHome = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.services.LeaderBoardHome();
    return res.status(200).json(result);
  };
}

export default LeaderBoardController;
