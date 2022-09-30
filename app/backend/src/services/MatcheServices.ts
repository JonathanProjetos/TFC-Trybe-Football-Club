import IChangeTeam from '../interfaces/IChangeTeam';
import IMatcherBody from '../interfaces/IMatcherBody';
import Matche from '../database/models/Matches';
// import User from '../database/models/UserModel';
import Team from '../database/models/TeamsModel';
import { validateMatches } from '../middleware/JoiValidate';

class MatcheServices {
  private db = Matche;

  MatcheServiceGetAll = async (): Promise<Matche[]> => {
    const matche = await this.db.findAll(
      {
        include: [{
          model: Team,
          as: 'teamHome',
          attributes: { exclude: ['id'] },
        },
        {
          model: Team,
          as: 'teamAway',
          attributes: { exclude: ['id'] },
        }],
      },
    );
    console.log('services', matche);

    if (!matche) throw new Error('400|No Matches');

    return matche;
  };

  MatcheServiceCreate = async (body: IMatcherBody): Promise<Matche> => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = validateMatches(body);

    if (homeTeam === awayTeam) {
      throw new Error('401|It is not possible to create a match with two equal teams');
    }
    const checkTeam = await Team.findOne({ where: { id: homeTeam } });

    if (!checkTeam) throw new Error('404|There is no team with such id!');

    const result = await this.db.create({
      homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true,
    });

    return result as Matche;
  };

  MatchServiceUpdateInProgress = async (id: number): Promise<void> => {
    await this.db.update({ inProgress: false }, { where: { id } });
  };

  MatchServiceUpdateTeamGoals = async (body: IChangeTeam, id: number): Promise<void> => {
    await this.db.update({
      homeTeamGoals: body.homeTeamGoals,
      awayTeamGoals: body.awayTeamGoals,
    }, { where: { id } });
  };
}
export default MatcheServices;
