(function() {
	angular
		.module('ss')
		.config(configure);

	/* @ngInject */
	function configure($stateProvider, $urlRouterProvider) {
		// For any unmatched url, redirect to /schedule
		$urlRouterProvider.otherwise("/posts/all-posts/list");

		// Setup the states:
		$stateProvider
			// Posts section:
			.state('posts', {
				url: '/posts',
				controller: 'postsCtrl',
				templateUrl: 'views/posts.html'
			})
			.state('posts.allposts', {
				url: '/all-posts/:viewStyle',
				controller: 'allPostsCtrl',
				templateUrl: 'views/all-posts.html'
			})
			.state('posts.photos', {
				url: '/photo-posts',
				controller: 'photoPostsCtrl',
				templateUrl: 'views/photo-posts.html'
			})
			.state('posts.videos', {
				url: '/video-posts',
				controller: 'videoPostsCtrl',
				templateUrl: 'views/video-posts.html'
			})
			// Settings section:
			.state('settings', {
				url: '/settings',
				controller: 'settingsCtrl',
				templateUrl: 'views/settings.html'
			});
	}
})();