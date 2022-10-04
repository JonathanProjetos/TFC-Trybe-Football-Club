import { Router } from 'express';
import LeaderBoardServices from '../services/LeaderBoardHomeService';
import LeaderBoardControllers from '../controllers/LeaderBoardHomeController';

const leaderBoardRouter = Router();
const service = new LeaderBoardServices();
const controller = new LeaderBoardControllers(service);

leaderBoardRouter.get('/leaderboard/home', controller.LeaderBoardHome);
export default leaderBoardRouter;
