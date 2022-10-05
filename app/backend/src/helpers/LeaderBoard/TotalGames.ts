import ILeaderBoardAll from '../../interfaces/ILeaderBoardAll';

const TotalJogos = (data: ILeaderBoardAll) => {
  const totalHome = data.teamHome.length;
  const totalaway = data.teamAway.length;

  return totalHome + totalaway;
};

export default TotalJogos;
