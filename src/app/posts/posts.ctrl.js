(function() {
	angular
		.module('ss')
		.controller('postsCtrl', postsCtrl);

	/* @ngInject */
	function postsCtrl($scope) {
		// Assign all bindable models:
		$scope.viewStyle = "list";
		$scope.changeViewStyle = changeViewStyle;

		// Kicks off the controller:
		activate();

		//////////

		/**
		 * Kick off the controller with this function
		 */
		function activate() {
		}

		function changeViewStyle(style) {
			$scope.viewStyle = style;
		}
	}
})();