import { ILeaderBoardGoals, Goals } from '../../interfaces/ILeaderBoardGoalsHome';

const GoalsBalance = (data: ILeaderBoardGoals) => {
  let totalHome = 0;
  let totalAway = 0;

  data.teamHome.forEach((goals: Goals) => {
    totalHome += goals.homeTeamGoals;
    totalAway += goals.awayTeamGoals;
  });

  return totalHome - totalAway;
};

export default GoalsBalance;
