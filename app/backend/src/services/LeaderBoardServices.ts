import QueryAllMathers from '../helpers/LeaderBoard/QueryTeams';
import TotalVictory from '../helpers/LeaderBoard/TotalVictory';
import ILeaderBoard from '../interfaces/ILeaderBoard';
import ILeaderBoardAll from '../interfaces/ILeaderBoardAll';
import TotalPoints from '../helpers/LeaderBoard/TotalPoints';
import TotalLosses from '../helpers/LeaderBoard/TotalLosses';
import TotalJogos from '../helpers/LeaderBoard/TotalGames';
import TotalDraws from '../helpers/LeaderBoard/TotalDraws';
import GoalsFavor from '../helpers/LeaderBoard/GoalFavor';
import GoalsOwn from '../helpers/LeaderBoard/GoalsOwn';
import GoalsBalance from '../helpers/LeaderBoard/GoalsBalances';
import Efficiency from '../helpers/LeaderBoardHome/EfficiencyHome';
import { ILeaderBoardGoalsHome } from '../interfaces/ILeaderBoardGoalsHome';

class LeaderBoardService {
  LeaderBoard = async ():Promise<ILeaderBoard[]> => {
    const allTeams = await QueryAllMathers();

    const ObjectLeaderBoard = allTeams.map((data) => ({
      name: data.teamName,
      totalPoints: TotalPoints(data as unknown as ILeaderBoardAll),
      totalGames: TotalJogos(data as unknown as ILeaderBoardAll),
      totalVictories: TotalVictory(data as unknown as ILeaderBoardAll),
      totalDraws: TotalDraws(data as unknown as ILeaderBoardAll),
      totalLosses: TotalLosses(data as unknown as ILeaderBoardAll),
      goalsFavor: GoalsFavor(data as unknown as ILeaderBoardAll),
      goalsOwn: GoalsOwn(data as unknown as ILeaderBoardAll),
      goalsBalance: GoalsBalance(data as unknown as ILeaderBoardAll),
      efficiency: Efficiency(data as unknown as ILeaderBoardGoalsHome),
    }));

    return ObjectLeaderBoard as ILeaderBoard[];
  };
}

export default LeaderBoardService;
