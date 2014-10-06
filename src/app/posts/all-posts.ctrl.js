(function() {
	angular
		.module('ss')
		.controller('allPostsCtrl', allPostsCtrl);

	/* @ngInject */
	function allPostsCtrl($scope) {
		// Assign all bindable models:
		$scope.isCommentsOpen = false;
		$scope.toggleComments = toggleComments;
		

		// Kicks off the controller:
		activate();

		//////////

		/**
		 * Kick off the controller with this function
		 */
		function activate() {
		}

		function toggleComments() {
			$scope.isCommentsOpen = !$scope.isCommentsOpen;
		}
	}
})();