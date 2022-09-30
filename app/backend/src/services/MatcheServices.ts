import IMatcherBody from '../interfaces/IMatcherBody';
import Matche from '../database/models/Matches';
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

  MatcheServiceCreate = async (body: IMatcherBody, email: string): Promise<Matche> => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = validateMatches(body);

    await this.db.create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true });
    const result = await this.db.findOne({ where: { email } });
    return result as Matche;
  };
}
export default MatcheServices;
