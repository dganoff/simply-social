(function() {
	angular
		.module('ss')
		.controller('headerCtrl', headerCtrl);

	/* @ngInject */
	function headerCtrl($scope, $rootScope) {
		/*jshint validthis: true */
        var vm = this;

		// Assign all bindable models:
		$rootScope.isNewMsgModalOpen = false;
		$scope.openNewMsgModal = openNewMsgModal;

		// Kicks off the controller:
		activate();

		//////////

		/**
		 * Kick off the controller with this function
		 */
		function activate() {
		}

		/**
		 * Open the New Message Modal window that is on the root scope
		 */
		function openNewMsgModal() {
			$rootScope.isNewMsgModalOpen = true;

			// Focus the input field:
			setTimeout(function() {
				document.getElementById("new-msg-modal-input").focus();
			}, 250);
		}
	}
})();