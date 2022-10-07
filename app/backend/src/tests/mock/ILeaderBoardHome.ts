const obejectResponse = [
  {
		"name": "Santos",
		"totalPoints": 9,
		"totalGames": 3,
		"totalVictories": 3,
		"totalDraws": 0,
		"totalLosses": 0,
		"goalsFavor": 9,
		"goalsOwn": 3,
		"goalsBalance": 6,
		"efficiency": 100
	},
	{
		"name": "Palmeiras",
		"totalPoints": 7,
		"totalGames": 3,
		"totalVictories": 2,
		"totalDraws": 1,
		"totalLosses": 0,
		"goalsFavor": 10,
		"goalsOwn": 5,
		"goalsBalance": 5,
		"efficiency": 77.78
	},
	{
		"name": "Corinthians",
		"totalPoints": 6,
		"totalGames": 2,
		"totalVictories": 2,
		"totalDraws": 0,
		"totalLosses": 0,
		"goalsFavor": 6,
		"goalsOwn": 1,
		"goalsBalance": 5,
		"efficiency": 100
	},
	{
		"name": "Grêmio",
		"totalPoints": 6,
		"totalGames": 2,
		"totalVictories": 2,
		"totalDraws": 0,
		"totalLosses": 0,
		"goalsFavor": 4,
		"goalsOwn": 1,
		"goalsBalance": 3,
		"efficiency": 100
	},
	{
		"name": "Real Brasília",
		"totalPoints": 6,
		"totalGames": 2,
		"totalVictories": 2,
		"totalDraws": 0,
		"totalLosses": 0,
		"goalsFavor": 2,
		"goalsOwn": 0,
		"goalsBalance": 2,
		"efficiency": 100
	},
	{
		"name": "São Paulo",
		"totalPoints": 4,
		"totalGames": 2,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 0,
		"goalsFavor": 4,
		"goalsOwn": 1,
		"goalsBalance": 3,
		"efficiency": 66.67
	},
	{
		"name": "Internacional",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 4,
		"goalsOwn": 6,
		"goalsBalance": -2,
		"efficiency": 44.44
	},
	{
		"name": "Botafogo",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 2,
		"goalsOwn": 4,
		"goalsBalance": -2,
		"efficiency": 44.44
	},
	{
		"name": "Ferroviária",
		"totalPoints": 3,
		"totalGames": 2,
		"totalVictories": 1,
		"totalDraws": 0,
		"totalLosses": 1,
		"goalsFavor": 3,
		"goalsOwn": 2,
		"goalsBalance": 1,
		"efficiency": 50
	},
	{
		"name": "Napoli-SC",
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
		"name": "Cruzeiro",
		"totalPoints": 1,
		"totalGames": 2,
		"totalVictories": 0,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 2,
		"goalsOwn": 3,
		"goalsBalance": -1,
		"efficiency": 16.67
	},
	{
		"name": "Flamengo",
		"totalPoints": 1,
		"totalGames": 2,
		"totalVictories": 0,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 1,
		"goalsOwn": 2,
		"goalsBalance": -1,
		"efficiency": 16.67
	},
	{
		"name": "Minas Brasília",
		"totalPoints": 1,
		"totalGames": 3,
		"totalVictories": 0,
		"totalDraws": 1,
		"totalLosses": 2,
		"goalsFavor": 3,
		"goalsOwn": 6,
		"goalsBalance": -3,
		"efficiency": 11.11
	},
	{
		"name": "Avaí/Kindermann",
		"totalPoints": 1,
		"totalGames": 3,
		"totalVictories": 0,
		"totalDraws": 1,
		"totalLosses": 2,
		"goalsFavor": 3,
		"goalsOwn": 7,
		"goalsBalance": -4,
		"efficiency": 11.11
	},
	{
		"name": "São José-SP",
		"totalPoints": 0,
		"totalGames": 3,
		"totalVictories": 0,
		"totalDraws": 0,
		"totalLosses": 3,
		"goalsFavor": 2,
		"goalsOwn": 5,
		"goalsBalance": -3,
		"efficiency": 0
	},
	{
		"name": "Bahia",
		"totalPoints": 0,
		"totalGames": 3,
		"totalVictories": 0,
		"totalDraws": 0,
		"totalLosses": 3,
		"goalsFavor": 0,
		"goalsOwn": 4,
		"goalsBalance": -4,
		"efficiency": 0
	}
]

const objectTeamMatchers  = [
  {
		"id": 16,
		"teamName": "São Paulo",
		"teamHome": [
			{
				"homeTeamGoals": 1,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 3,
				"awayTeamGoals": 0
			}
		]
	},
	{
		"id": 9,
		"teamName": "Internacional",
		"teamHome": [
			{
				"homeTeamGoals": 1,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 4
			},
			{
				"homeTeamGoals": 3,
				"awayTeamGoals": 1
			}
		]
	},
	{
		"id": 4,
		"teamName": "Corinthians",
		"teamHome": [
			{
				"homeTeamGoals": 3,
				"awayTeamGoals": 0
			},
			{
				"homeTeamGoals": 3,
				"awayTeamGoals": 1
			}
		]
	},
	{
		"id": 3,
		"teamName": "Botafogo",
		"teamHome": [
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 0
			},
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 4
			},
			{
				"homeTeamGoals": 2,
				"awayTeamGoals": 0
			}
		]
	},
	{
		"id": 7,
		"teamName": "Flamengo",
		"teamHome": [
			{
				"homeTeamGoals": 1,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 1
			}
		]
	},
	{
		"id": 5,
		"teamName": "Cruzeiro",
		"teamHome": [
			{
				"homeTeamGoals": 1,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 1,
				"awayTeamGoals": 2
			}
		]
	},
	{
		"id": 12,
		"teamName": "Palmeiras",
		"teamHome": [
			{
				"homeTeamGoals": 2,
				"awayTeamGoals": 2
			},
			{
				"homeTeamGoals": 4,
				"awayTeamGoals": 2
			},
			{
				"homeTeamGoals": 4,
				"awayTeamGoals": 1
			}
		]
	},
	{
		"id": 15,
		"teamName": "São José-SP",
		"teamHome": [
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 2,
				"awayTeamGoals": 3
			},
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 1
			}
		]
	},
	{
		"id": 1,
		"teamName": "Avaí/Kindermann",
		"teamHome": [
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 3
			},
			{
				"homeTeamGoals": 2,
				"awayTeamGoals": 3
			},
			{
				"homeTeamGoals": 1,
				"awayTeamGoals": 1
			}
		]
	},
	{
		"id": 2,
		"teamName": "Bahia",
		"teamHome": [
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 2
			},
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 1
			}
		]
	},
	{
		"id": 13,
		"teamName": "Real Brasília",
		"teamHome": [
			{
				"homeTeamGoals": 1,
				"awayTeamGoals": 0
			},
			{
				"homeTeamGoals": 1,
				"awayTeamGoals": 0
			}
		]
	},
	{
		"id": 6,
		"teamName": "Ferroviária",
		"teamHome": [
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 3,
				"awayTeamGoals": 1
			}
		]
	},
	{
		"id": 8,
		"teamName": "Grêmio",
		"teamHome": [
			{
				"homeTeamGoals": 2,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 2,
				"awayTeamGoals": 0
			}
		]
	},
	{
		"id": 14,
		"teamName": "Santos",
		"teamHome": [
			{
				"homeTeamGoals": 2,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 5,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 2,
				"awayTeamGoals": 1
			}
		]
	},
	{
		"id": 10,
		"teamName": "Minas Brasília",
		"teamHome": [
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 2,
				"awayTeamGoals": 2
			},
			{
				"homeTeamGoals": 1,
				"awayTeamGoals": 3
			}
		]
	},
	{
		"id": 11,
		"teamName": "Napoli-SC",
		"teamHome": [
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 0
			},
			{
				"homeTeamGoals": 2,
				"awayTeamGoals": 2
			}
		]
	}
]


export { obejectResponse, objectTeamMatchers };