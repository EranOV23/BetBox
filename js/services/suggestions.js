app.factory('suggestions',[function(){
	var demoSuggestions = {
		posts: [
			{
				id: 0,
				title: 'Min. 45: France - Germany: 2-0',
				bet: 'Germany will win the game',
				odds: '10/1',
				upvotes: 15,
				comments: [
					{
					body: 'no chance',
					userBet: 0,
					}
				],
			},		
			{
				id: 1,
				title: 'Portugal VS Walse',
				bet: 'Ronaldo will score and do his famous jump celebrtion after the goal',
				upvotes: 23,
				odds: '5/1',
				comments: [
					{
					body: '80% that Ronaldo score, and if he score: 100% he do that stupid thing',
					userBet: 50,
					}
				],
			},
			{
				id: 2,
				title: 'From 2010 Luis Suarez bit 3 players, 1 per 2 years, and his last time was 2 years ago',
				bet: 'Luis Suarez will bite in his next game vs Real Madrid',
				upvotes: 9,
				odds: '35/1',
				comments: [
					{
					body: 'LOL :)',
					userBet: 5,
					}
				],
			},

			

		] 
	};
	return demoSuggestions;
}]);