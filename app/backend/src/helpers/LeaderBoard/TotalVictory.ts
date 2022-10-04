import { Goals, ILeaderBoardGoals } from '../../interfaces/ILeaderBoardGoalsHome';
import ILeaderBoardGoalsAway from '../../interfaces/ILeaderBoardGoalsAway';

const TotalVictoryHome = (data: ILeaderBoardGoals) => {
  let total = 0;

  data.teamHome.forEach((goals: Goals) => {
    if (goals.homeTeamGoals > goals.awayTeamGoals) total += 1;
  });
  return total;
};

const TotalVictoryAway = (data: ILeaderBoardGoalsAway) => {
  let total = 0;

  data.teamAway.forEach((goals: Goals) => {
    if (goals.awayTeamGoals > goals.homeTeamGoals) total += 1;
  });
  return total;
};

const total = TotalVictoryHome(data as ILeaderBoardGoals)
+ TotalVictoryAway(data as ILeaderBoardGoalsAway);

export default total;
