import { Goals } from '../../interfaces/ILeaderBoardGoalsHome';
import ILeaderBoardGoalsAway from '../../interfaces/ILeaderBoardGoalsAway';

const TotalVictoryAway = (data: ILeaderBoardGoalsAway) => {
  let total = 0;

  data.teamAway.forEach((goals: Goals) => {
    if (goals.awayTeamGoals > goals.homeTeamGoals) total += 1;
  });
  return total;
};

export default TotalVictoryAway;
