import { ILeaderBoardGoals } from '../interfaces/ILeaderBoardGoals';

const TotalJogos = (data:ILeaderBoardGoals) => {
  const total = data.teamHome.length;
  return total;
};

export default TotalJogos;
