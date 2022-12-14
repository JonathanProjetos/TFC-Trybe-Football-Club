import { Goals, ILeaderBoardGoalsHome } from '../../interfaces/ILeaderBoardGoalsHome';

const TotalLosses = (data: ILeaderBoardGoalsHome) => {
  let total = 0;

  data.teamHome.forEach((goals: Goals) => {
    if (goals.homeTeamGoals < goals.awayTeamGoals) total += 1;
  });

  return total;
};

export default TotalLosses;
