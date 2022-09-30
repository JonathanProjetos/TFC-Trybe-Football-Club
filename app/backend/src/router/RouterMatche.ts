import { Router } from 'express';
import MatcheServices from '../services/MatcheServices';
import MetcheController from '../controllers/MatcheController';

const matcheRouter = Router();
const service = new MatcheServices();
const Matche = new MetcheController(service);

matcheRouter.get('/matches', Matche.MatcheControllerGetAll);
// teamRouter.get('/teams/:id', Matche.MatcheController);

export default matcheRouter;
