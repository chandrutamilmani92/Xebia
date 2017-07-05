angular.module('dashBoard', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('dashBoard').config(function($stateProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'dashBoard/partial/home/home.html'
    });
    /* Add New States Above */

});

