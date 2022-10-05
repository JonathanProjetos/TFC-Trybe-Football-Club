interface Goals {
  homeTeamGoals: number
  awayTeamGoals: number
}

interface ILeaderBoardGoalsHome {
  id?: number
  teamName: string
  teamHome: []
}

export { Goals, ILeaderBoardGoalsHome };
