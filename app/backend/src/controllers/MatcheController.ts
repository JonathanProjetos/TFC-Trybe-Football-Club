import { Request, Response } from 'express';
import MatcheServices from '../services/MatcheServices';
import IController from '../interfaces/IController';

class MatcheControllers implements IController {
  constructor(private service: MatcheServices) { }

  MatcheControllerGetAll = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.service.MatcheServiceGetAll();

    if (!result) throw new Error('404|Team not found');

    return res.status(200).json(result);
  };

  MatcheControllerCreate = async (req: Request, res: Response): Promise<Response> => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;

    const result = await this.service.MatcheServiceCreate({
      homeTeam, awayTeam, homeTeamGoals, awayTeamGoals });

    if (!result) throw new Error('404|Matche not found');

    return res.status(201).json(result);
  };
}

export default MatcheControllers;
