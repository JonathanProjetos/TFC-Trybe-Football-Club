import { Goals } from '../../interfaces/ILeaderBoardGoalsHome';
import ILeaderBoardAll from '../../interfaces/ILeaderBoardAll';

const TotalDraws = (data: ILeaderBoardAll) => {
  let total = 0;

  data.teamAway.forEach((goals: Goals) => {
    if (goals.awayTeamGoals === goals.homeTeamGoals) total += 1;
  });

  data.teamHome.forEach((goals: Goals) => {
    if (goals.homeTeamGoals === goals.awayTeamGoals) total += 1;
  });

  return total;
};

export default TotalDraws;
