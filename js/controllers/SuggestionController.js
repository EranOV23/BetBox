app.controller('SuggestionController', ['$scope','$routeParams','$firebaseArray',
	function($scope,$routeParams, $firebaseArray){
		var postsRef = firebase.database().ref().child("posts");

			// Put individual post ID in an object
			$scope.post = $firebaseArray(postsRef);


			$scope.addComment = function(){

				//if input empty, don't submit??
				if (!$scope.body || $scope.body === '' || !$scope.mybet || $scope.mybet === '') {
					return;
				}

				//push suggestion posts in suggestions.js
				$scope.post.comments.push({
					body: $scope.body,
					userBet: $scope.mybet,
				});
				
				//after submit, clear input
				$scope.body ='';
				$scope.mybet = '';
			};

			//add +1 to suggestion
			$scope.userBet = function() {              
			comment.userBet += 1;          
		}; 

	}]);
