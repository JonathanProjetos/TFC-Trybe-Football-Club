import { Goals, ILeaderBoardGoals } from '../interfaces/ILeaderBoardGoals';

const TotalDraws = (data: ILeaderBoardGoals) => {
  let total = 0;

  data.teamHome.forEach((goals: Goals) => {
    if (goals.homeTeamGoals === goals.awayTeamGoals) total += 1;
  });

  return total;
};

export default TotalDraws;
