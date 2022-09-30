const ObjectMatches = [
  {
		id: 1,
		homeTeam: 16,
		homeTeamGoals: 1,
		awayTeam: 8,
		awayTeamGoals: 1,
		inProgress: false,
		teamHome: {
			teamName: 'São Paulo'
		},
		teamAway: {
			teamName: 'Grêmio'
		}
	},
	{
		id: 2,
		homeTeam: 9,
		homeTeamGoals: 1,
		awayTeam: 14,
		awayTeamGoals: 1,
		inProgress: false,
		teamHome: {
			teamName: 'Internacional'
		},
		teamAway: {
			teamName: 'Santos'
		}
	},
	{
		id: 3,
		homeTeam: 4,
		homeTeamGoals: 3,
		awayTeam: 11,
		awayTeamGoals: 0,
		inProgress: false,
		teamHome: {
			teamName: 'Corinthians'
		},
		teamAway: {
			teamName: 'Napoli-SC'
		}
	},
]

const ObjectBodyMatches = {
  homeTeam: 16,
  awayTeam: 8, 
  homeTeamGoals: 2,
  awayTeamGoals: 2
}

const ObjectMotchesResult = {
   id: 1,
   homeTeam: 16,
   homeTeamGoals: 2,
   awayTeam: 8,
   awayTeamGoals: 2,
   inProgress: true,
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY2NDU0MzEyMywiZXhwIjoxNjY0NjI5NTIzfQ.vYjJ2Ms7L8Zaqt0DtlWoaE8Rp57bbTX5wFCQctoysaI'

export { ObjectMatches, ObjectBodyMatches, ObjectMotchesResult, token };