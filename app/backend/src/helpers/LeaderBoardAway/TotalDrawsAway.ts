import { Goals } from '../../interfaces/ILeaderBoardGoals';
import ILeaderBoardGoalsAway from '../../interfaces/ILeaderBoardGoalsAway';

const TotalDrawsAway = (data: ILeaderBoardGoalsAway) => {
  let total = 0;

  data.teamAway.forEach((goals: Goals) => {
    if (goals.awayTeamGoals === goals.homeTeamGoals) total += 1;
  });

  return total;
};

export default TotalDrawsAway;
