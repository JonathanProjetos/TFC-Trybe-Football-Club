import ILeaderBoard from '../interfaces/ILeaderBoard';
import QueryMatchres from '../helpers/LeaderBoardAway/QueryMatchersAway';
import TotalPointsAway from '../helpers/LeaderBoardAway/TotalPointsAway';
import TotalJogosAway from '../helpers/LeaderBoardAway/TotalGamesAway';
import TotalVictoryAway from '../helpers/LeaderBoardAway/TotalVictoryAway';
import TotalDrawsAway from '../helpers/LeaderBoardAway/TotalDrawsAway';
import TotalLossesAway from '../helpers/LeaderBoardAway/TotalLossesAway';
import GoalsFavorAway from '../helpers/LeaderBoardAway/GoalsFavorAway';
import GoalsOwnAway from '../helpers/LeaderBoardAway/GoalsOwnAway';
import GoalsBalanceAway from '../helpers/LeaderBoardAway/GoalsBalanceAway';
import EfficiencyAway from '../helpers/LeaderBoardAway/EfficiencyAway';
import ILeaderBoardGoalsAways from '../interfaces/ILeaderBoardGoalsAway';
import OrderDataAway from '../helpers/LeaderBoardAway/OrderDataAway';

class LeaderBoardService {
  LeaderBoardAway = async ():Promise<ILeaderBoard[]> => {
    const teamAway = await QueryMatchres();

    const ObjectLeaderBoardAway = teamAway.map((data) => ({
      name: data.teamName,
      totalPoints: TotalPointsAway(data as unknown as ILeaderBoardGoalsAways),
      totalGames: TotalJogosAway(data as unknown as ILeaderBoardGoalsAways),
      totalVictories: TotalVictoryAway(data as unknown as ILeaderBoardGoalsAways),
      totalDraws: TotalDrawsAway(data as unknown as ILeaderBoardGoalsAways),
      totalLosses: TotalLossesAway(data as unknown as ILeaderBoardGoalsAways),
      goalsFavor: GoalsFavorAway(data as unknown as ILeaderBoardGoalsAways),
      goalsOwn: GoalsOwnAway(data as unknown as ILeaderBoardGoalsAways),
      goalsBalance: GoalsBalanceAway(data as unknown as ILeaderBoardGoalsAways),
      efficiency: EfficiencyAway(data as unknown as ILeaderBoardGoalsAways),
    }));

    const dataResult = ObjectLeaderBoardAway;

    const result = OrderDataAway(dataResult as ILeaderBoard[]);

    return result as ILeaderBoard[];
  };
}

export default LeaderBoardService;
