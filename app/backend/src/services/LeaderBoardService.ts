import Team from '../database/models/TeamsModel';
import ILeaderBoard from '../interfaces/ILeaderBoard';

class LeaderBoardServices {
  private db = Team;

  LeaderBoardHome = async (): Promise<ILeaderBoard[]> => {
    const team = await this.db.findAll();

    const ObjectLeaderBoard = team.map((data) => ({
      name: data.teamName,
      totalPoints: 13,
      totalGames: 5,
      totalVictories: 4,
      totalDraws: 1,
      totalLosses: 0,
      goalsFavor: 17,
      goalsOwn: 5,
      goalsBalance: 12,
      efficiency: 86.67,
    }));

    return ObjectLeaderBoard as ILeaderBoard[];
  };
}
export default LeaderBoardServices;
