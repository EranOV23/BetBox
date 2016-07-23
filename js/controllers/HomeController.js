app.controller('HomeController', 
		['$scope','suggestions', 
		function($scope, suggestions) {
	 	
	 	$scope.posts = suggestions.posts;
	 	
	 	$scope.addSuggestion = function(){

	 		//if input empty, don't submit
	 		if(!$scope.title || $scope.title === "" || !$scope.bet || $scope.bet === "") {
	 			return;
	 		}

	 		//push suggestion posts in suggestions.js
	 		$scope.posts.push({
	 			title: $scope.title,
	 			bet: $scope.bet,
	 			odds: 'Pending...(upvotes makes it faster)',
	 			upvotes: 0,
				comments: [],
				id: $scope.posts.length,

	 		});
	 		
	 		//after submit, clear input
	 		$scope.title = '';
 			$scope.bet = '';


	 	};

	 	//add +1 to suggestion
		$scope.upVote = function(post) {              
		post.upvotes += 1;          
		}; 


}]);
