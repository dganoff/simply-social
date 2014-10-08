(function() {
	angular
		.module('ss')
		.controller('modalNewMsgCtrl', modalNewMsgCtrl);

	/* @ngInject */
	function modalNewMsgCtrl($scope, $rootScope) {
		/*jshint validthis: true */
        var vm = this;

		// Assign all bindable models:
		vm.closeModal = closeModal;

		// Kicks off the controller:
		activate();

		//////////

		/**
		 * Kick off the controller with this function
		 */
		function activate() {
		}

		/**
		 * Close the modal window
		 */
		function closeModal() {
			$rootScope.isNewMsgModalOpen = false;
		}
	}
})();