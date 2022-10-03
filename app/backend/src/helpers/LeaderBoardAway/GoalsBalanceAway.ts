import { Goals } from '../../interfaces/ILeaderBoardGoals';
import ILeaderBoardGoalsAway from '../../interfaces/ILeaderBoardGoalsAway';

const GoalsBalanceAway = (data: ILeaderBoardGoalsAway) => {
  let totalHome = 0;
  let totalAway = 0;

  data.teamAway.forEach((goals: Goals) => {
    totalHome += goals.homeTeamGoals;
    totalAway += goals.awayTeamGoals;
  });

  return totalAway - totalHome;
};

export default GoalsBalanceAway;
