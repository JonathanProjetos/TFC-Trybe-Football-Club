import { Goals } from '../../interfaces/ILeaderBoardGoalsHome';
import ILeaderBoardAll from '../../interfaces/ILeaderBoardAll';

const GoalsFavor = (data:ILeaderBoardAll) => {
  let total = 0;

  data.teamAway.forEach((goals:Goals) => {
    total += goals.awayTeamGoals;
  });

  data.teamHome.forEach((goals:Goals) => {
    total += goals.homeTeamGoals;
  });

  return total;
};

export default GoalsFavor;
