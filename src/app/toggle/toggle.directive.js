(function() {
	angular
		.module('ss')
		.directive('ssToggle', toggle);

	function toggle() {
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: 'views/toggle.directive.html',
			/* @ngInject */
			controller: function($scope) {
				// Assign bindable models:
				$scope.isToggleOn = false;
				$scope.switchToggle = switchToggle;

				//////////
				
				function switchToggle() {
					$scope.isToggleOn = !$scope.isToggleOn;
				}
			}
		};
	}	
})();