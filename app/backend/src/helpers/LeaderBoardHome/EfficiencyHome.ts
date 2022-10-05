import TotalPoints from './TotalPointsHome';
import TotalJogos from './TotalGamesHome';
import { ILeaderBoardGoalsHome } from '../../interfaces/ILeaderBoardGoalsHome';

const Efficiency = (data:ILeaderBoardGoalsHome) => {
  const MutiGamesForThere = TotalJogos(data as ILeaderBoardGoalsHome) * 3;
  const DivTotalPoints = TotalPoints(data as ILeaderBoardGoalsHome) / MutiGamesForThere;
  const total = DivTotalPoints * 100;
  return Number(total.toFixed(2));
};

export default Efficiency;
