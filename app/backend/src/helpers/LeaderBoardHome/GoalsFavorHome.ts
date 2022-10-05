import { Goals, ILeaderBoardGoalsHome } from '../../interfaces/ILeaderBoardGoalsHome';

const GoalsFavor = (data:ILeaderBoardGoalsHome) => {
  let total = 0;

  data.teamHome.forEach((goals:Goals) => {
    total += goals.homeTeamGoals;
  });

  return total;
};

export default GoalsFavor;
