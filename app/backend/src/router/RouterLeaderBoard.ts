import { Router } from 'express';
import LeaderBoardServices from '../services/LeaderBoardServices';
import LeaderBoardControllers from '../controllers/LeaderBoardController';

const leaderBoardRouter = Router();
const service = new LeaderBoardServices();
const controller = new LeaderBoardControllers(service);

leaderBoardRouter.get('/leaderboard', controller.LeaderBoard);
export default leaderBoardRouter;
