app.controller('HomeController', ['$scope','$firebaseArray',  	
	function($scope, $firebaseArray) {
	 	var postsRef = firebase.database().ref().child("posts");

	 	$scope.posts = $firebaseArray(postsRef);
	 

	 	$scope.addSuggestion = function(){
	 		//if input empty, don't submit
	 		if(!$scope.title || $scope.title === "" || !$scope.bet || $scope.bet === "") {
	 			return;
	 		}
		

	 		//push suggestion posts into Firebase RealTime database.
	 		$scope.posts.$add({
	 			title: $scope.title,
	 			bet: $scope.bet,
	 			odds: 'Pending...(upvotes makes it faster)',
	 			upvotes: 0,
				comments: [],
				id: $scope.posts.length,
	 		});
	 		
	 		//after submit, clear input
	 		$scope.title='';
 			$scope.bet = '';
	 	};

 		//add +1 to suggestion
		$scope.upVote = function(post) {              
			post.upvotes += 1;          
		}; 
}]);
