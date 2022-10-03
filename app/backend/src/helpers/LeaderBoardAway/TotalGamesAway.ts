import ILeaderBoardGoalsAway from '../../interfaces/ILeaderBoardGoalsAway';

const TotalJogosAway = (data:ILeaderBoardGoalsAway) => {
  const total = data.teamAway.length;
  return total;
};

export default TotalJogosAway;
