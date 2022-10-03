import { Goals } from '../../interfaces/ILeaderBoardGoals';
import ILeaderBoardGoalsAway from '../../interfaces/ILeaderBoardGoalsAway';

const GoalsOwAway = (data:ILeaderBoardGoalsAway) => {
  let total = 0;

  data.teamAway.forEach((goals: Goals) => {
    total += goals.homeTeamGoals;
  });

  return total;
};

export default GoalsOwAway;
