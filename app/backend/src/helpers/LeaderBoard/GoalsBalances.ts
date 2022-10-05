import { Goals } from '../../interfaces/ILeaderBoardGoalsHome';
import ILeaderBoardAll from '../../interfaces/ILeaderBoardAll';

const GoalsBalance = (data: ILeaderBoardAll) => {
  let totalHome = 0;
  let totalAway = 0;

  data.teamHome.forEach((goals: Goals) => {
    totalHome += goals.homeTeamGoals;
    totalAway += goals.awayTeamGoals;
  });

  return totalHome - totalAway;
};

export default GoalsBalance;
