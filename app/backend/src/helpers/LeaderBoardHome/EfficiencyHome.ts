import TotalPoints from './TotalPointsHome';
import TotalJogos from './TotalGamesHome';
import { ILeaderBoardGoals } from '../../interfaces/ILeaderBoardGoalsHome';

const Efficiency = (data:ILeaderBoardGoals) => {
  const MutiGamesForThere = TotalJogos(data as ILeaderBoardGoals) * 3;
  const DivTotalPoints = TotalPoints(data as ILeaderBoardGoals) / MutiGamesForThere;
  const total = DivTotalPoints * 100;
  return Number(total.toFixed(2));
};

export default Efficiency;
