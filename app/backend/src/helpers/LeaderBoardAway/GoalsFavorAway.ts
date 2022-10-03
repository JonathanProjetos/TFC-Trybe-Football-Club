import { Goals } from '../../interfaces/ILeaderBoardGoals';
import ILeaderBoardGoalsAway from '../../interfaces/ILeaderBoardGoalsAway';

const GoalsFavorAway = (data:ILeaderBoardGoalsAway) => {
  let total = 0;

  data.teamAway.forEach((goals:Goals) => {
    total += goals.awayTeamGoals;
  });

  return total;
};

export default GoalsFavorAway;
