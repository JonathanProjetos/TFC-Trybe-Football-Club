import { Goals } from '../../interfaces/ILeaderBoardGoalsHome';
import ILeaderBoardAll from '../../interfaces/ILeaderBoardAll';

const GoalsOwn = (data:ILeaderBoardAll) => {
  let total = 0;

  data.teamHome.forEach((goals: Goals) => {
    total += goals.awayTeamGoals;
  });

  data.teamAway.forEach((goals: Goals) => {
    total += goals.homeTeamGoals;
  });

  return total;
};

export default GoalsOwn;
