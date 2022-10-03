import Team from '../../database/models/TeamsModel';
import Matche from '../../database/models/Matches';
import { ILeaderBoardGoals } from '../../interfaces/ILeaderBoardGoals';

const QueryMatchres = async () => {
  const data = await Team.findAll({
    include: [{
      model: Matche,
      as: 'teamHome',
      where: { inProgress: false },
      attributes: ['homeTeamGoals', 'awayTeamGoals'],
    }],
  });

  return data as unknown as ILeaderBoardGoals[];
};

export default QueryMatchres;
