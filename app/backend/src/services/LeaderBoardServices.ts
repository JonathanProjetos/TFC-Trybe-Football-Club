import QueryAllMathers from '../helpers/LeaderBoard/QueryTeams';
import TotalVictory from '../helpers/LeaderBoard/TotalVictory';
import ILeaderBoard from '../interfaces/ILeaderBoard';

class LeaderBoardService {
  LeaderBoard = async ():Promise<ILeaderBoard[]> => {
    const allTeams = await QueryAllMathers();

    // const ObjectLeaderBoard = allTeams.map((data) => ({
    //   name: data.teamName,
    //   totalPoints: TotalPoints(data),
    //   totalGames: TotalJogos(data),
    //   totalVictories: TotalVictory(data),
    //   totalDraws: TotalDraws(data),
    //   totalLosses: TotalLosses(data),
    //   goalsFavor: GoalsFavor(data),
    //   goalsOwn: GoalsOwn(data),
    //   goalsBalance: GoalsBalance(data),
    //   efficiency: Efficiency(data),
    // }));

    return allTeams as [];
  };
}

export default LeaderBoardService;
