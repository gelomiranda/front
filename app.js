angular.module('app', ['components','ngRoute'])
 
.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/client.html'
        })
        .when('/email-link', {
            templateUrl : 'views/admin/email-link.html'
        })
        .when('/loan-category', {
            templateUrl : 'views/admin/loan-category.html'
        })
        .when('/new-category', {
            templateUrl : 'views/admin/new-category.html'
        })
        .when('/client', {
            templateUrl : 'views/admin/client.html'
        })
        .when('/client/:id', {
            templateUrl : 'views/client/loan_detail.html'
        })
        .when('/item/:name', {
            templateUrl : 'views/single.html',
            controller  : 'ShopController'
        });

})

.controller('BeerCounter', function($scope, $locale) {
  $scope.beers = [0, 1, 2, 3, 4, 5, 6];
  if ($locale.id == 'en-us') {
    $scope.beerForms = {
      0: 'no beers',
      one: '{} beer',
      other: '{} beers'
    };
  } else {
    $scope.beerForms = {
      0: 'žiadne pivo',
      one: '{} pivo',
      few: '{} pivá',
      other: '{} pív'
    };
  }
})

.directive('myLeftnav', function() {
  return {
    templateUrl: 'views/left-nav.html'
  };
});