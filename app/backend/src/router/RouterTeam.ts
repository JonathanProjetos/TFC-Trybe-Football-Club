import { Router } from 'express';
import TeamServices from '../services/TeamsServices';
import TeamController from '../controllers/TeamController';

const teamRouter = Router();
const service = new TeamServices();
const Teams = new TeamController(service);

teamRouter.get('/teams', Teams.TeamController);
teamRouter.get('/teams/:id', Teams.GetByIdTeamController);

export default teamRouter;
