const objectResultAll = [
  {
		"name": "Palmeiras",
		"totalPoints": 13,
		"totalGames": 5,
		"totalVictories": 4,
		"totalDraws": 1,
		"totalLosses": 0,
		"goalsFavor": 17,
		"goalsOwn": 5,
		"goalsBalance": 12,
		"efficiency": 86.67
	},
	{
		"name": "Corinthians",
		"totalPoints": 12,
		"totalGames": 5,
		"totalVictories": 4,
		"totalDraws": 0,
		"totalLosses": 1,
		"goalsFavor": 12,
		"goalsOwn": 3,
		"goalsBalance": 9,
		"efficiency": 80
	},
	{
		"name": "Santos",
		"totalPoints": 11,
		"totalGames": 5,
		"totalVictories": 3,
		"totalDraws": 2,
		"totalLosses": 0,
		"goalsFavor": 12,
		"goalsOwn": 6,
		"goalsBalance": 6,
		"efficiency": 73.33
	},
	{
		"name": "Grêmio",
		"totalPoints": 10,
		"totalGames": 5,
		"totalVictories": 3,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 9,
		"goalsOwn": 8,
		"goalsBalance": 1,
		"efficiency": 66.67
	},
	{
		"name": "Internacional",
		"totalPoints": 10,
		"totalGames": 5,
		"totalVictories": 3,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 7,
		"goalsOwn": 6,
		"goalsBalance": 1,
		"efficiency": 66.67
	},
	{
		"name": "Real Brasília",
		"totalPoints": 10,
		"totalGames": 5,
		"totalVictories": 3,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 5,
		"goalsOwn": 4,
		"goalsBalance": 1,
		"efficiency": 66.67
	},
	{
		"name": "São Paulo",
		"totalPoints": 8,
		"totalGames": 5,
		"totalVictories": 2,
		"totalDraws": 2,
		"totalLosses": 1,
		"goalsFavor": 9,
		"goalsOwn": 6,
		"goalsBalance": 3,
		"efficiency": 53.33
	},
	{
		"name": "Ferroviária",
		"totalPoints": 7,
		"totalGames": 5,
		"totalVictories": 2,
		"totalDraws": 1,
		"totalLosses": 2,
		"goalsFavor": 7,
		"goalsOwn": 7,
		"goalsBalance": 0,
		"efficiency": 46.67
	},
	{
		"name": "São José-SP",
		"totalPoints": 6,
		"totalGames": 5,
		"totalVictories": 2,
		"totalDraws": 0,
		"totalLosses": 3,
		"goalsFavor": 5,
		"goalsOwn": 6,
		"goalsBalance": -1,
		"efficiency": 40
	},
	{
		"name": "Flamengo",
		"totalPoints": 5,
		"totalGames": 5,
		"totalVictories": 1,
		"totalDraws": 2,
		"totalLosses": 2,
		"goalsFavor": 2,
		"goalsOwn": 5,
		"goalsBalance": -3,
		"efficiency": 33.33
	},
	{
		"name": "Cruzeiro",
		"totalPoints": 4,
		"totalGames": 5,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 3,
		"goalsFavor": 8,
		"goalsOwn": 10,
		"goalsBalance": -2,
		"efficiency": 26.67
	},
	{
		"name": "Avaí/Kindermann",
		"totalPoints": 4,
		"totalGames": 5,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 3,
		"goalsFavor": 4,
		"goalsOwn": 8,
		"goalsBalance": -4,
		"efficiency": 26.67
	},
	{
		"name": "Botafogo",
		"totalPoints": 4,
		"totalGames": 5,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 3,
		"goalsFavor": 3,
		"goalsOwn": 8,
		"goalsBalance": -5,
		"efficiency": 26.67
	},
	{
		"name": "Bahia",
		"totalPoints": 2,
		"totalGames": 5,
		"totalVictories": 0,
		"totalDraws": 2,
		"totalLosses": 3,
		"goalsFavor": 2,
		"goalsOwn": 6,
		"goalsBalance": -4,
		"efficiency": 13.33
	},
	{
		"name": "Minas Brasília",
		"totalPoints": 2,
		"totalGames": 5,
		"totalVictories": 0,
		"totalDraws": 2,
		"totalLosses": 3,
		"goalsFavor": 4,
		"goalsOwn": 9,
		"goalsBalance": -5,
		"efficiency": 13.33
	},
	{
		"name": "Napoli-SC",
		"totalPoints": 2,
		"totalGames": 5,
		"totalVictories": 0,
		"totalDraws": 2,
		"totalLosses": 3,
		"goalsFavor": 3,
		"goalsOwn": 12,
		"goalsBalance": -9,
		"efficiency": 13.33
	}
]

const objectQueryAll = [
  {
		"id": 8,
		"teamName": "Grêmio",
		"teamHome": [
			{
				"homeTeamGoals": 2,
				"awayTeamGoals": 0
			},
			{
				"homeTeamGoals": 2,
				"awayTeamGoals": 1
			}
		],
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
		],
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
		"teamHome": [
			{
				"homeTeamGoals": 2,
				"awayTeamGoals": 2
			},
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 0
			}
		],
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
		"teamHome": [
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 2
			}
		],
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
		"teamHome": [
			{
				"homeTeamGoals": 1,
				"awayTeamGoals": 3
			},
			{
				"homeTeamGoals": 2,
				"awayTeamGoals": 2
			},
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 1
			}
		],
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
		"teamHome": [
			{
				"homeTeamGoals": 1,
				"awayTeamGoals": 0
			},
			{
				"homeTeamGoals": 1,
				"awayTeamGoals": 0
			}
		],
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
		"teamHome": [
			{
				"homeTeamGoals": 3,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 1
			}
		],
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
		"teamHome": [
			{
				"homeTeamGoals": 1,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 2,
				"awayTeamGoals": 3
			},
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 3
			}
		],
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
		"teamHome": [
			{
				"homeTeamGoals": 4,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 4,
				"awayTeamGoals": 2
			},
			{
				"homeTeamGoals": 2,
				"awayTeamGoals": 2
			}
		],
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
		"teamHome": [
			{
				"homeTeamGoals": 3,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 4
			},
			{
				"homeTeamGoals": 1,
				"awayTeamGoals": 1
			}
		],
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
		"teamHome": [
			{
				"homeTeamGoals": 2,
				"awayTeamGoals": 0
			},
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 4
			},
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 0
			}
		],
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
		"teamHome": [
			{
				"homeTeamGoals": 3,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 3,
				"awayTeamGoals": 0
			}
		],
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
		"teamHome": [
			{
				"homeTeamGoals": 1,
				"awayTeamGoals": 2
			},
			{
				"homeTeamGoals": 1,
				"awayTeamGoals": 1
			}
		],
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
		"teamHome": [
			{
				"homeTeamGoals": 3,
				"awayTeamGoals": 0
			},
			{
				"homeTeamGoals": 1,
				"awayTeamGoals": 1
			}
		],
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
		],
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
		"teamHome": [
			{
				"homeTeamGoals": 0,
				"awayTeamGoals": 1
			},
			{
				"homeTeamGoals": 1,
				"awayTeamGoals": 1
			}
		],
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

export { objectQueryAll, objectResultAll }