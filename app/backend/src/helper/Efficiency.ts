import TotalPoints from './TotalPoints';
import TotalJogos from './TotalGames';
import { ILeaderBoardGoals } from '../interfaces/ILeaderBoardGoals';

const Efficiency = (data:ILeaderBoardGoals) => {
  const MutiGamesForThere = TotalJogos(data as ILeaderBoardGoals) * 3;
  const DivTotalPoints = TotalPoints(data as ILeaderBoardGoals) / MutiGamesForThere;
  const total = DivTotalPoints * 100;
  return Number(total.toFixed(2));
};

export default Efficiency;
