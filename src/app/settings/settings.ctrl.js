(function() {
	angular
		.module('ss')
		.controller('settingsCtrl', settingsCtrl);

	/* @ngInject */
	function settingsCtrl($scope, settingsService) {
		// Assign all bindable models:
		$scope.notificationOptions = null;
		$scope.privacyOptions = null;
		$scope.selectCheckbox = selectCheckbox;

		// Kicks off the controller:
		activate();

		//////////

		/**
		 * Kick off the controller with this function
		 */
		function activate() {
			getNotificationOptions();
			getPrivacyOptions();
		}

		/**
		 * Retrieve the list of notification options
		 */
		function getNotificationOptions() {
			settingsService.getNotificationOptions()
				.then(function(data) {
					$scope.notificationOptions = data;
				});
		}

		/**
		 * Retrieve the list of privacy options
		 */
		function getPrivacyOptions() {
			settingsService.getPrivacyOptions()
				.then(function(data) {
					$scope.privacyOptions = data;
				});
		}

		function selectCheckbox(option) {
			option.selected = !option.selected;
		}
	}
})();