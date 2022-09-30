import { Request, Response } from 'express';
import MatcheServices from '../services/MatcheServices';
import IController from '../interfaces/IController';

class MatcheControllers implements IController {
  constructor(private service: MatcheServices) { }

  MatcheController = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.service.MatcheService();

    if (!result) throw new Error('404|Team not found');

    return res.status(200).json(result);
  };

  // GetByIdTeamController = async (req: Request, res: Response): Promise<Response> => {
  //   const { id } = req.params;
  //   const result = await this.service.GetByIdTeamServices(Number(id));

  //   if (!result) throw new Error('404|Team not found');

  //   return res.status(200).json(result);
  // };
}

export default MatcheControllers;
