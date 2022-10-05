import { Goals } from '../../interfaces/ILeaderBoardGoalsHome';
import ILeaderBoardAll from '../../interfaces/ILeaderBoardAll';

const TotalLosses = (data: ILeaderBoardAll) => {
  let total = 0;

  data.teamHome.forEach((goals: Goals) => {
    if (goals.homeTeamGoals < goals.awayTeamGoals) total += 1;
  });

  data.teamAway.forEach((goals: Goals) => {
    if (goals.awayTeamGoals < goals.homeTeamGoals) total += 1;
  });

  return total;
};

export default TotalLosses;
