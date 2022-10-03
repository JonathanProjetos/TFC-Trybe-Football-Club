interface Goals {
  homeTeamGoals: number
  awayTeamGoals: number
}

interface ILeaderBoardGoals {
  id?: number
  teamName: string
  teamHome: []
}

export { Goals, ILeaderBoardGoals };
