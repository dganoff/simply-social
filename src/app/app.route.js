(function() {
	angular
		.module('ss')
		.config(configure);

	/* @ngInject */
	function configure($stateProvider, $urlRouterProvider) {
		// For any unmatched url, redirect to /schedule
		$urlRouterProvider.otherwise("/posts");

		// Setup the states:
		$stateProvider
			// Posts section:
			.state('posts', {
				url: '/posts',
				controller: 'postsCtrl',
				templateUrl: 'views/posts.html'
			})
			.state('posts.allposts', {
				url: '/all-posts',
				controller: 'allPostsCtrl',
				templateUrl: 'views/all-posts.html'
			})
			// Settings section:
			.state('settings', {
				url: '/settings',
				controller: 'settingsCtrl',
				templateUrl: 'views/settings.html'
			});
	}
})();