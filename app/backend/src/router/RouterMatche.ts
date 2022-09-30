import { Router } from 'express';
import MatcheServices from '../services/MatcheServices';
import MetcheController from '../controllers/MatcheController';
import validToken from '../middleware/ValidToken';

const matcheRouter = Router();
const service = new MatcheServices();
const Matche = new MetcheController(service);

matcheRouter.get('/matches', Matche.MatcheControllerGetAll);
matcheRouter.post('/matches', validToken.Token, Matche.MatcheControllerCreate);
matcheRouter.patch('/matches/:id/finish', validToken.Token, Matche.MatchControllerUpdateInProgress);

export default matcheRouter;
