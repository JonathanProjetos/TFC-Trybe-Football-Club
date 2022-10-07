import { ILeaderBoardGoalsHome, Goals } from '../../interfaces/ILeaderBoardGoalsHome';

const GoalsBalance = (data: ILeaderBoardGoalsHome) => {
  let totalHome = 0;
  let totalAway = 0;

  data.teamHome.forEach((goals: Goals) => {
    totalHome += goals.homeTeamGoals;
    totalAway += goals.awayTeamGoals;
  });

  return totalHome - totalAway;
};

export default GoalsBalance;
  