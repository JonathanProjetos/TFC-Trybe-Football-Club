import { Goals } from '../../interfaces/ILeaderBoardGoalsHome';
import ILeaderBoardAll from '../../interfaces/ILeaderBoardAll';

const GoalsBalance = (data: ILeaderBoardAll) => {
  let totalHome1 = 0;
  let totalAway1 = 0;

  data.teamHome.forEach((goals: Goals) => {
    totalHome1 += goals.homeTeamGoals;
    totalAway1 += goals.awayTeamGoals;
  });

  let totalHome2 = 0;
  let totalAway2 = 0;

  data.teamAway.forEach((goals: Goals) => {
    totalHome2 += goals.homeTeamGoals;
    totalAway2 += goals.awayTeamGoals;
  });

  const result1 = totalHome1 - totalAway1;
  const result2 = totalHome2 - totalAway2;

  return result1 - result2;
};

export default GoalsBalance;
