(function() {
	angular
		.module('ss')
		.directive('ssRadioGroup', radioGroup);

	function radioGroup() {
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: 'views/radio-group.directive.html',
			scope: {
				options: '='
			},
			/* @ngInject */
			controller: function($scope) {
				// Assign bindable models:
				$scope.isToggleOn = false;
				$scope.switchToggle = switchToggle;

				//////////
				
				function switchToggle(option) {
					resetSelections();
					option.selected = !option.selected;
				}

				function resetSelections() {
					_.each($scope.options, function(option) {
						option.selected = false;
					});
				}
			}
		};
	}	
})();