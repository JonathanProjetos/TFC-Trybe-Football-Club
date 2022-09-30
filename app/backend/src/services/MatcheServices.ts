import Matche from '../database/models/Matches';
import Team from '../database/models/TeamsModel';

class MatcheServices {
  private db = Matche;

  MatcheService = async (): Promise<Matche[]> => {
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

    if (!matche) throw new Error('401|No Mache');

    return matche;
  };

  // GetByIdTeamServices = async (id:number):Promise<Teams> => {
  //   const result = await this.db.findOne({ where: { id }, raw: true });

  //   if (!result) throw new Error('401|No Teams');

  //   return result;
  // };
}
export default MatcheServices;
