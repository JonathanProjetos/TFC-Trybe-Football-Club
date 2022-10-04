import { Goals, ILeaderBoardGoals } from '../../interfaces/ILeaderBoardGoalsHome';

const GoalsFavor = (data:ILeaderBoardGoals) => {
  let total = 0;

  data.teamHome.forEach((goals:Goals) => {
    total += goals.homeTeamGoals;
  });

  return total;
};

export default GoalsFavor;
