(function() {
	angular
		.module('ss')
		.factory('settingsService', settingsService);
	
	/* @ngInject */
	function settingsService($q) {
		var service = {
			getNotificationOptions: getNotificationOptions,
			getPrivacyOptions: getPrivacyOptions
		};

		return service;

		//////////

		function getNotificationOptions() {
			var deferred = $q.defer();

			var data = [
				{
					label: "email me when my posts are marked as favorites"
				},
				{
					label: "email me when I'm mentioned"
				},
				{
					label: "email me when I get a reply"
				},
				{
					label: "email me when someone follows me"
				}
			];

			deferred.resolve(data);

			return deferred.promise;
		}

		function getPrivacyOptions() {
			var deferred = $q.defer();

			var data = [
				{
					fieldType: "radio",
					options: [
						"allow anyone to tag me",
						"only allow people I follow to tag me",
						"don't allow anyone to tag me"
					]
				},
				{
					fieldType: "check",
					label: "add a location to my posts"
				},
				{
					fieldType: "check",
					label: "let others find me by my email address"
				},
				{
					fieldType: "check",
					label: "tailor ads based on my information"
				}
			];

			deferred.resolve(data);

			return deferred.promise;
		}
	}
})();