import Team from '../../database/models/TeamsModel';
import Matche from '../../database/models/Matches';

const QueryAllMathers = async () => {
  const data = await Team.findAll({
    include: [{
      model: Matche,
      as: 'teamHome',
      where: { inProgress: false },
      attributes: ['homeTeamGoals', 'awayTeamGoals'],
    }, {
      model: Matche,
      as: 'teamAway',
      where: { inProgress: false },
      attributes: ['awayTeamGoals', 'homeTeamGoals'],
    }],
  });

  return data;
};

export default QueryAllMathers;
