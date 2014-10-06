(function() {
	angular
		.module('ss')
		.controller('headerCtrl', headerCtrl);

	/* @ngInject */
	function headerCtrl($scope) {
		/*jshint validthis: true */
        var vm = this;

		// Assign all bindable models:

		// Kicks off the controller:
		activate();

		//////////

		/**
		 * Kick off the controller with this function
		 */
		function activate() {
		}
	}
})();