import TotalPoints from './TotalPointsAway';
import TotalJogos from './TotalGamesAway';
import ILeaderBoardGoalsAway from '../../interfaces/ILeaderBoardGoalsAway';

const EfficiencyAway = (data:ILeaderBoardGoalsAway) => {
  const MutiGamesForThere = TotalJogos(data as ILeaderBoardGoalsAway) * 3;
  const DivTotalPoints = TotalPoints(data as ILeaderBoardGoalsAway) / MutiGamesForThere;
  const total = DivTotalPoints * 100;
  return Number(total.toFixed(2));
};

export default EfficiencyAway;
