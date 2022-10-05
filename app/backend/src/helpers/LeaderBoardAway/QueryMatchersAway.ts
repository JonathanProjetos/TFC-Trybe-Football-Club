import Team from '../../database/models/TeamsModel';
import Matche from '../../database/models/Matches';
import { ILeaderBoardGoalsHome } from '../../interfaces/ILeaderBoardGoalsHome';

const QueryForMatchres = async () => {
  const data = await Team.findAll({
    include: [{
      model: Matche,
      as: 'teamAway',
      where: { inProgress: false },
      attributes: ['awayTeamGoals', 'homeTeamGoals'],
    }],
  });

  return data as unknown as ILeaderBoardGoalsHome[];
};

export default QueryForMatchres;
