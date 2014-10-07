(function() {
	angular
		.module('ss')
		.controller('settingsCtrl', settingsCtrl);

	/* @ngInject */
	function settingsCtrl($scope, settingsService) {
		// Assign all bindable models:
		$scope.notifications = null;

		// Kicks off the controller:
		activate();

		//////////

		/**
		 * Kick off the controller with this function
		 */
		function activate() {
			getNotificationOptions();
		}

		function getNotificationOptions() {
			settingsService.getNotificationOptions()
				.then(function(data) {
					$scope.notifications = data;
				});
		}
	}
})();