import { ILeaderBoardGoalsHome } from '../../interfaces/ILeaderBoardGoalsHome';

const TotalJogos = (data:ILeaderBoardGoalsHome) => {
  const total = data.teamHome.length;
  return total;
};

export default TotalJogos;
