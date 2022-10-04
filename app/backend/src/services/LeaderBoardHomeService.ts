import ILeaderBoard from '../interfaces/ILeaderBoard';
import TotalPoints from '../helpers/LeaderBoardHome/TotalPointsHome';
import TotalJogos from '../helpers/LeaderBoardHome/TotalGamesHome';
import TotalVictory from '../helpers/LeaderBoardHome/TotalVictoryHome';
import TotalDraws from '../helpers/LeaderBoardHome/TotalDrawsHome';
import TotalLosses from '../helpers/LeaderBoardHome/TotalLossesHome';
import GoalsFavor from '../helpers/LeaderBoardHome/GoalsFavorHome';
import GoalsOwn from '../helpers/LeaderBoardHome/GoalsOwnHome';
import GoalsBalance from '../helpers/LeaderBoardHome/GoalsBalanceHome';
import Efficiency from '../helpers/LeaderBoardHome/EfficiencyHome';
import QueryMatchres from '../helpers/LeaderBoardHome/QueryMachtersHome';
import { ILeaderBoardGoals } from '../interfaces/ILeaderBoardGoalsHome';
import OrderData from '../helpers/LeaderBoardHome/OrderDataHome';

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
