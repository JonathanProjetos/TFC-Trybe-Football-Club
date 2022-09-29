import Teams from '../database/models/TeamsModel';

class TeamsServices {
  private db = Teams;

  TeamService = async (): Promise<Teams[]> => {
    const teams = await this.db.findAll();
    console.log('services', teams);

    if (!teams) throw new Error('401|No Teams');

    return teams;
  };

  GetByIdTeamServices = async (id:number):Promise<Teams> => {
    const result = await this.db.findOne({ where: { id }, raw: true });

    if (!result) throw new Error('401|No Teams');

    return result;
  };
}
export default TeamsServices;
