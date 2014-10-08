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
				
				/**
				 * Toggle the radio option and deselect other radio options
				 * @param  {object} option The radio option
				 * @param {boolean} option.selected
				 */
				function switchToggle(option) {
					resetSelections();
					option.selected = !option.selected;
				}

				/**
				 * Clear the radio group selections
				 */
				function resetSelections() {
					_.each($scope.options, function(option) {
						option.selected = false;
					});
				}
			}
		};
	}	
})();