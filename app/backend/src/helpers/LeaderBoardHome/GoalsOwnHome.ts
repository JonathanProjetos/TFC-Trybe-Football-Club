import { Goals, ILeaderBoardGoals } from '../../interfaces/ILeaderBoardGoalsHome';

const GoalsOwn = (data:ILeaderBoardGoals) => {
  let total = 0;

  data.teamHome.forEach((goals: Goals) => {
    total += goals.awayTeamGoals;
  });

  return total;
};

export default GoalsOwn;
