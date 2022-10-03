import { Goals, ILeaderBoardGoals } from '../interfaces/ILeaderBoardGoals';

const TotalPoints = (data: ILeaderBoardGoals) => {
  let totalHome = 0;

  data.teamHome.forEach((goals: Goals) => {
    if (goals.homeTeamGoals > goals.awayTeamGoals) totalHome += 3;
    if (goals.homeTeamGoals < goals.awayTeamGoals) totalHome += 0;
    if (goals.homeTeamGoals === goals.awayTeamGoals) totalHome += 1;
  });

  return totalHome as number;
};

export default TotalPoints;
