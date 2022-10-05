import ILeaderBoardAll from '../../interfaces/ILeaderBoardAll';
import { Goals } from '../../interfaces/ILeaderBoardGoalsHome';

const TotalPoints = (data: ILeaderBoardAll) => {
  let totalAway = 0;
  let totalHome = 0;

  data.teamAway.forEach((goals: Goals) => {
    if (goals.awayTeamGoals > goals.homeTeamGoals) totalAway += 3;
    if (goals.awayTeamGoals < goals.homeTeamGoals) totalAway += 0;
    if (goals.awayTeamGoals === goals.homeTeamGoals) totalAway += 1;
  });

  data.teamHome.forEach((goals: Goals) => {
    if (goals.homeTeamGoals > goals.awayTeamGoals) totalHome += 3;
    if (goals.homeTeamGoals < goals.awayTeamGoals) totalHome += 0;
    if (goals.homeTeamGoals === goals.awayTeamGoals) totalHome += 1;
  });

  return totalAway + totalHome as number;
};

export default TotalPoints;
