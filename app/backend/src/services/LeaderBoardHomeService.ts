import ILeaderBoard from '../interfaces/ILeaderBoard';
import TotalPoints from '../helpers/LeaderBoardHome/TotalPoints';
import TotalJogos from '../helpers/LeaderBoardHome/TotalGames';
import TotalVictory from '../helpers/LeaderBoardHome/TotalVictory';
import TotalDraws from '../helpers/LeaderBoardHome/TotalDraws';
import TotalLosses from '../helpers/LeaderBoardHome/TotalLosses';
import GoalsFavor from '../helpers/LeaderBoardHome/GoalsFavor';
import GoalsOwn from '../helpers/LeaderBoardHome/GoalsOwn';
import GoalsBalance from '../helpers/LeaderBoardHome/GoalsBalance';
import Efficiency from '../helpers/LeaderBoardHome/Efficiency';
import QueryMatchres from '../helpers/LeaderBoardHome/QueryMachters';
import { ILeaderBoardGoals } from '../interfaces/ILeaderBoardGoals';
import OrderData from '../helpers/LeaderBoardHome/OrderData';

class LeaderBoardServices {
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
