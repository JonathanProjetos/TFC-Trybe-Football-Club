import { Request, Response } from 'express';
import IController from '../interfaces/IController';
import LeaderBoardServices from '../services/LeaderBoardServices';

class LeaderBoardController implements IController {
  constructor(private services: LeaderBoardServices) { }

  LeaderBoard = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.services.LeaderBoard();
    return res.status(200).json(result);
  };
}

export default LeaderBoardController;
