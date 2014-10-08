(function() {
	angular
		.module('ss')
		.controller('allPostsCtrl', allPostsCtrl);

	/* @ngInject */
	function allPostsCtrl($scope, $stateParams) {
		// Assign all bindable models:
		$scope.isCommentsOpen = false;
		$scope.toggleComments = toggleComments;
		$scope.viewStyle = $stateParams.viewStyle || 'list';
		

		// Kicks off the controller:
		activate();

		//////////

		/**
		 * Kick off the controller with this function
		 */
		function activate() {
		}

		/**
		 * Show/hide the comments for the text post
		 * (this is scoped for all text posts, but should be scoped for each post)
		 */
		function toggleComments() {
			$scope.isCommentsOpen = !$scope.isCommentsOpen;
		}
	}
})();