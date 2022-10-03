import { Router } from 'express';
import LeaderBoardServicesAway from '../services/LeaderBoardAwayServices';
import LeaderBoardControllersAway from '../controllers/LeaderBoardAwayController';

const leaderBoardRouter = Router();
const service = new LeaderBoardServicesAway();
const controller = new LeaderBoardControllersAway(service);

leaderBoardRouter.get('/leaderboard/away', controller.LeaderBoardAway);

export default leaderBoardRouter;
