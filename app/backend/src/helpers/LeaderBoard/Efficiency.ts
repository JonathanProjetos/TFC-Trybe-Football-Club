import TotalPointsHome from '../LeaderBoardHome/TotalPointsHome';
import TotalJogosHome from '../LeaderBoardHome/TotalGamesHome';
import TotalJogosAway from '../LeaderBoardAway/TotalGamesAway';
import TotalPointsAway from '../LeaderBoardAway/TotalPointsAway';
import { ILeaderBoardGoalsHome } from '../../interfaces/ILeaderBoardGoalsHome';
import ILeaderBoardGoalsAway from '../../interfaces/ILeaderBoardGoalsAway';

const Efficiency = (data: ILeaderBoardGoalsHome | ILeaderBoardGoalsAway) => {
  const MutiGamesForThereHome = TotalJogosHome(data as ILeaderBoardGoalsHome) * 3;
  const MutiGamesForThereAway = TotalJogosAway(data as ILeaderBoardGoalsAway) * 3;

  const ResultJogos = MutiGamesForThereHome + MutiGamesForThereAway;

  const DivPointsHome = TotalPointsHome(data as ILeaderBoardGoalsHome);
  const DivPointsAway = TotalPointsAway(data as ILeaderBoardGoalsAway);

  const resultPoint = DivPointsHome + DivPointsAway;

  const DivTotalPoints = resultPoint / ResultJogos;

  const total = DivTotalPoints * 100;

  return Number(total.toFixed(2));
};

export default Efficiency;
