import Team from '../database/models/TeamsModel';
import ILeaderBoard from '../interfaces/ILeaderBoard';
import TotalPoints from '../helper/TotalPoints';
import TotalJogos from '../helper/TotalGames';
import TotalVictory from '../helper/TotalVictory';
import TotalDraws from '../helper/TotalDraws';
import TotalLosses from '../helper/TotalLosses';
import GoalsFavor from '../helper/GoalsFavor';
import GoalsOwn from '../helper/GoalsOwn';
import GoalsBalance from '../helper/GoalsBalance';
import Efficiency from '../helper/Efficiency';
import QueryMatchres from '../helper/QueryMachters';
import { ILeaderBoardGoals } from '../interfaces/ILeaderBoardGoals';
import OrderData from '../helper/OrderData';

class LeaderBoardServices {
  private db = Team;

  LeaderBoardHome = async (): Promise<ILeaderBoard[]> => {
    const team = await QueryMatchres();

    const ObjectLeaderBoard = team.map((data) => ({
      name: data.teamName,
      totalPoints: TotalPoints(data as ILeaderBoardGoals),
      totalGames: TotalJogos(data as ILeaderBoardGoals),
      totalVictories: TotalVictory(data as ILeaderBoardGoals),
      totalDraws: TotalDraws(data as ILeaderBoardGoals),
      totalLosses: TotalLosses(data as ILeaderBoardGoals),
      goalsFavor: GoalsFavor(data as ILeaderBoardGoals),
      goalsOwn: GoalsOwn(data as ILeaderBoardGoals),
      goalsBalance: GoalsBalance(data as ILeaderBoardGoals),
      efficiency: Efficiency(data as ILeaderBoardGoals),
    }));

    const dataResult = ObjectLeaderBoard;

    const result = OrderData(dataResult as ILeaderBoard[]);

    return result as ILeaderBoard[];
  };
}
export default LeaderBoardServices;
