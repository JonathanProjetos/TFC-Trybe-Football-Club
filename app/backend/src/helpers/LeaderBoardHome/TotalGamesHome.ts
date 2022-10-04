import { ILeaderBoardGoals } from '../../interfaces/ILeaderBoardGoalsHome';

const TotalJogos = (data:ILeaderBoardGoals) => {
  const total = data.teamHome.length;
  return total;
};

export default TotalJogos;
