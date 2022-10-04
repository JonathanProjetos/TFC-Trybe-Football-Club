import ILeaderBoardGoalsAway from '../../interfaces/ILeaderBoardGoalsAway';
import { Goals } from '../../interfaces/ILeaderBoardGoalsHome';

const TotalPointsAway = (data: ILeaderBoardGoalsAway) => {
  let totalAway = 0;

  data.teamAway.forEach((goals: Goals) => {
    if (goals.awayTeamGoals > goals.homeTeamGoals) totalAway += 3;
    if (goals.awayTeamGoals < goals.homeTeamGoals) totalAway += 0;
    if (goals.awayTeamGoals === goals.homeTeamGoals) totalAway += 1;
  });

  return totalAway as number;
};

export default TotalPointsAway;
