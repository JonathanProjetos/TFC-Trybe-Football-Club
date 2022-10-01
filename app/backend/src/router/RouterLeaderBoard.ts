import { Router } from 'express';
import LeaderBoardServices from '../services/LeaderBoardService';
import LeaderBoardControllers from '../controllers/LeaderBoardController';

const leaderBoardRouter = Router();
const service = new LeaderBoardServices();
const controller = new LeaderBoardControllers(service);

leaderBoardRouter.get('/leaderboard/home', controller.LeaderBoardHome);

export default leaderBoardRouter;
