import angular from 'angular';

export const appRouteConfig = ($routeProvider) => {
	$routeProvider
		.when('/home', {
			template: require('./modules/home/home.html'),
			controller: 'HomeController'
		})
		.when('/search/:text', {
			template: require('./modules/search/search.html'),
			controller: 'SearchController'
		})
        .when('/show/:id', {
			template: require('./modules/show/show.html'),
			controller: 'ShowController'
		})
		.otherwise({
			redirectTo: '/home'
		});
};