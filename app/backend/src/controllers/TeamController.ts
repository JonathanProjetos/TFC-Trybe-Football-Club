import { Request, Response } from 'express';
import TeamServices from '../services/TeamsServices';
import IController from '../interfaces/IController';

class TeamControllers implements IController {
  constructor(private service: TeamServices) { }

  TeamController = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.service.TeamService();

    if (!result) throw new Error('404|Team not found');

    return res.status(200).json(result);
  };

  GetByIdTeamController = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const result = await this.service.GetByIdTeamServices(Number(id));

    if (!result) throw new Error('404|Team not found');

    return res.status(200).json(result);
  };
}

export default TeamControllers;
