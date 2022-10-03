import ILeaderBoard from '../interfaces/ILeaderBoard';
import QueryMatchres from '../helpers/LeaderBoardAway/QueryMatchers';

class LeaderBoardService {
  LeaderBoardAway = async ():Promise<ILeaderBoard[]> => {
    const team = await QueryMatchres();

    const ObjectLeaderBoardAway = team.map((data) => ({
      name: data.teamName,
      totalPoints: TotalPointsAway(data as ILeaderBoardGoals),
      totalGames: TotalJogosAway(data as ILeaderBoardGoals),
      totalVictories: TotalVictoryAway(data as ILeaderBoardGoals),
      totalDraws: TotalDrawsAway(data as ILeaderBoardGoals),
      totalLosses: TotalLossesAway(data as ILeaderBoardGoals),
      goalsFavor: GoalsFavorAway(data as ILeaderBoardGoals),
      goalsOwn: GoalsOwnAway(data as ILeaderBoardGoals),
      goalsBalance: GoalsBalanceAway(data as ILeaderBoardGoals),
      efficiency: EfficiencyAway(data as ILeaderBoardGoals),
    }));
    return team as [];
  };
}

export default LeaderBoardService;
