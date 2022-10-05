import { Goals, ILeaderBoardGoalsHome } from '../../interfaces/ILeaderBoardGoalsHome';

const GoalsOwn = (data:ILeaderBoardGoalsHome) => {
  let total = 0;

  data.teamHome.forEach((goals: Goals) => {
    total += goals.awayTeamGoals;
  });

  return total;
};

export default GoalsOwn;
