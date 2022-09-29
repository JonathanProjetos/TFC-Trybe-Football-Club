import Teams from '../database/models/TeamsModel';

class TeamsServices {
  private db = Teams;

  TeamService = async (): Promise<Teams[]> => {
    const teams = await this.db.findAll();
    console.log('services', teams);

    if (!teams) throw new Error('401|No Teams');

    return teams;
  };
}
export default TeamsServices;
