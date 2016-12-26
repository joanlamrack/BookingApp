// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'home.html'
  })

  .state('about', {
    url: '/about',
    templateUrl: 'about.html'
  })

  .state('help', {
    url: '/help',
    templateUrl: 'help.html'
  })

  .state('history', {
    url: '/history',
    templateUrl: 'history.html'
  })

  .state('advanced', {
    url: '/advanced',
    templateUrl: 'advanced.html'
  })

  .state('kartini', {
    url: '/kartini',
    templateUrl: 'balai_kartini.html'
  })

  .state('sidang', {
    url: '/sidang',
    templateUrl: 'balai_sidang.html'
  })

  .state('wconvention', {
    url: '/wconvention',
    templateUrl: 'wconvention.html'
  })

  .state('balairung', {
    url: '/balairung',
    templateUrl: 'balairung.html'
  })

  .state('raffles', {
    url: '/raffles',
    templateUrl: 'raffles.html'
  })

  .state('success', {
    url: '/success',
    templateUrl: 'success.html'
  })

  .state('booking', {
    url: '/booking',
    templateUrl: 'booking.html'
  })

  .state('book', {
    url: '/book',
    templateUrl: 'book.html'
  });

  $urlRouterProvider.otherwise('/');  
});

app.controller('MainCtrl', function($scope) {
 
});

app.controller('shiftCtrl', ['$scope', '$state', '$timeout',
                                function($scope, $state, $timeout) {

    $timeout(function() {
      $state.go('index');
      }, 3000);

    }])