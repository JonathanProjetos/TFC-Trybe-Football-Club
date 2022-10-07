const objectResponseAway = [
  {
		"name": "Palmeiras",
		"totalPoints": 6,
		"totalGames": 2,
		"totalVictories": 2,
		"totalDraws": 0,
		"totalLosses": 0,
		"goalsFavor": 7,
		"goalsOwn": 0,
		"goalsBalance": 7,
		"efficiency": 100
	},
	{
		"name": "Corinthians",
		"totalPoints": 6,
		"totalGames": 3,
		"totalVictories": 2,
		"totalDraws": 0,
		"totalLosses": 1,
		"goalsFavor": 6,
		"goalsOwn": 2,
		"goalsBalance": 4,
		"efficiency": 66.67
	},
	{
		"name": "Internacional",
		"totalPoints": 6,
		"totalGames": 2,
		"totalVictories": 2,
		"totalDraws": 0,
		"totalLosses": 0,
		"goalsFavor": 3,
		"goalsOwn": 0,
		"goalsBalance": 3,
		"efficiency": 100
	},
	{
		"name": "São José-SP",
		"totalPoints": 6,
		"totalGames": 2,
		"totalVictories": 2,
		"totalDraws": 0,
		"totalLosses": 0,
		"goalsFavor": 3,
		"goalsOwn": 1,
		"goalsBalance": 2,
		"efficiency": 100
	},
	{
		"name": "São Paulo",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 5,
		"goalsOwn": 5,
		"goalsBalance": 0,
		"efficiency": 44.44
	},
	{
		"name": "Ferroviária",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 4,
		"goalsOwn": 5,
		"goalsBalance": -1,
		"efficiency": 44.44
	},
	{
		"name": "Real Brasília",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 3,
		"goalsOwn": 4,
		"goalsBalance": -1,
		"efficiency": 44.44
	},
	{
		"name": "Grêmio",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 5,
		"goalsOwn": 7,
		"goalsBalance": -2,
		"efficiency": 44.44
	},
	{
		"name": "Flamengo",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 1,
		"goalsOwn": 3,
		"goalsBalance": -2,
		"efficiency": 44.44
	},
	{
		"name": "Avaí/Kindermann",
		"totalPoints": 3,
		"totalGames": 2,
		"totalVictories": 1,
		"totalDraws": 0,
		"totalLosses": 1,
		"goalsFavor": 1,
		"goalsOwn": 1,
		"goalsBalance": 0,
		"efficiency": 50
	},
	{
		"name": "Cruzeiro",
		"totalPoints": 3,
		"totalGames": 3,
		"totalVictories": 1,
		"totalDraws": 0,
		"totalLosses": 2,
		"goalsFavor": 6,
		"goalsOwn": 7,
		"goalsBalance": -1,
		"efficiency": 33.33
	},
	{
		"name": "Santos",
		"totalPoints": 2,
		"totalGames": 2,
		"totalVictories": 0,
		"totalDraws": 2,
		"totalLosses": 0,
		"goalsFavor": 3,
		"goalsOwn": 3,
		"goalsBalance": 0,
		"efficiency": 33.33
	},
	{
		"name": "Bahia",
		"totalPoints": 2,
		"totalGames": 2,
		"totalVictories": 0,
		"totalDraws": 2,
		"totalLosses": 0,
		"goalsFavor": 2,
		"goalsOwn": 2,
		"goalsBalance": 0,
		"efficiency": 33.33
	},
	{
		"name": "Minas Brasília",
		"totalPoints": 1,
		"totalGames": 2,
		"totalVictories": 0,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 1,
		"goalsOwn": 3,
		"goalsBalance": -2,
		"efficiency": 16.67
	},
	{
		"name": "Botafogo",
		"totalPoints": 0,
		"totalGames": 2,
		"totalVictories": 0,
		"totalDraws": 0,
		"totalLosses": 2,
		"goalsFavor": 1,
		"goalsOwn": 4,
		"goalsBalance": -3,
		"efficiency": 0
	},
	{
		"name": "Napoli-SC",
		"totalPoints": 0,
		"totalGames": 3,
		"totalVictories": 0,
		"totalDraws": 0,
		"totalLosses": 3,
		"goalsFavor": 1,
		"goalsOwn": 10,
		"goalsBalance": -9,
		"efficiency": 0
	}
]

const objectQueryAway = [
  {
		"id": 8,
		"teamName": "Grêmio",
		"teamAway": [
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 1
			},
			{
				"awayTeamGoals": 3,
				"homeTeamGoals": 2
			},
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 4
			}
		]
	},
	{
		"id": 14,
		"teamName": "Santos",
		"teamAway": [
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 1
			},
			{
				"awayTeamGoals": 2,
				"homeTeamGoals": 2
			}
		]
	},
	{
		"id": 11,
		"teamName": "Napoli-SC",
		"teamAway": [
			{
				"awayTeamGoals": 0,
				"homeTeamGoals": 3
			},
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 5
			},
			{
				"awayTeamGoals": 0,
				"homeTeamGoals": 2
			}
		]
	},
	{
		"id": 2,
		"teamName": "Bahia",
		"teamAway": [
			{
				"awayTeamGoals": 0,
				"homeTeamGoals": 0
			},
			{
				"awayTeamGoals": 2,
				"homeTeamGoals": 2
			}
		]
	},
	{
		"id": 10,
		"teamName": "Minas Brasília",
		"teamAway": [
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 1
			},
			{
				"awayTeamGoals": 0,
				"homeTeamGoals": 2
			}
		]
	},
	{
		"id": 13,
		"teamName": "Real Brasília",
		"teamAway": [
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 1
			},
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 3
			},
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 0
			}
		]
	},
	{
		"id": 6,
		"teamName": "Ferroviária",
		"teamAway": [
			{
				"awayTeamGoals": 2,
				"homeTeamGoals": 2
			},
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 0
			},
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 3
			}
		]
	},
	{
		"id": 1,
		"teamName": "Avaí/Kindermann",
		"teamAway": [
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 0
			},
			{
				"awayTeamGoals": 0,
				"homeTeamGoals": 1
			}
		]
	},
	{
		"id": 12,
		"teamName": "Palmeiras",
		"teamAway": [
			{
				"awayTeamGoals": 3,
				"homeTeamGoals": 0
			},
			{
				"awayTeamGoals": 4,
				"homeTeamGoals": 0
			}
		]
	},
	{
		"id": 9,
		"teamName": "Internacional",
		"teamAway": [
			{
				"awayTeamGoals": 2,
				"homeTeamGoals": 0
			},
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 0
			}
		]
	},
	{
		"id": 3,
		"teamName": "Botafogo",
		"teamAway": [
			{
				"awayTeamGoals": 0,
				"homeTeamGoals": 1
			},
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 3
			}
		]
	},
	{
		"id": 4,
		"teamName": "Corinthians",
		"teamAway": [
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 0
			},
			{
				"awayTeamGoals": 4,
				"homeTeamGoals": 0
			},
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 2
			}
		]
	},
	{
		"id": 5,
		"teamName": "Cruzeiro",
		"teamAway": [
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 2
			},
			{
				"awayTeamGoals": 2,
				"homeTeamGoals": 4
			},
			{
				"awayTeamGoals": 3,
				"homeTeamGoals": 1
			}
		]
	},
	{
		"id": 16,
		"teamName": "São Paulo",
		"teamAway": [
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 2
			},
			{
				"awayTeamGoals": 3,
				"homeTeamGoals": 2
			},
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 1
			}
		]
	},
	{
		"id": 15,
		"teamName": "São José-SP",
		"teamAway": [
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 0
			},
			{
				"awayTeamGoals": 2,
				"homeTeamGoals": 1
			}
		]
	},
	{
		"id": 7,
		"teamName": "Flamengo",
		"teamAway": [
			{
				"awayTeamGoals": 0,
				"homeTeamGoals": 0
			},
			{
				"awayTeamGoals": 0,
				"homeTeamGoals": 3
			},
			{
				"awayTeamGoals": 1,
				"homeTeamGoals": 0
			}
		]
	}
]

export { objectQueryAway, objectResponseAway }