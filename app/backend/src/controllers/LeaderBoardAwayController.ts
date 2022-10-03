import { Request, Response } from 'express';
import IController from '../interfaces/IController';
import LeaderBoardServices from '../services/LeaderBoardAwayServices';

class LeaderBoardController implements IController {
  constructor(private services: LeaderBoardServices) { }

  LeaderBoardAway = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.services.LeaderBoardAway();
    return res.status(200).json(result);
  };
}

export default LeaderBoardController;
