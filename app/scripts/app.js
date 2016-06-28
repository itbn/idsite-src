'use strict';

(function(){

  angular
  .module('stormpathIdpApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/forgot.html',
        controller: 'ForgotCtrl'
      })
      .when('/forgot/:retry?', {
        templateUrl: 'views/forgot.html',
        controller: 'ForgotCtrl'
      })
      .when('/reset', {
        templateUrl: 'views/reset.html',
        controller: 'ResetCtrl'
      })
      .when('/verify', {
        templateUrl: 'views/verify.html',
        controller: 'VerifyCtrl'
      })
      .when('/unverified', {
        templateUrl: 'views/unverified.html',
        controller: 'UnverifiedCtrl'
      })

      .when('/contact-us', {
        templateUrl: 'views/contact.html',
        controller: ''
      })
      .when('/terms-and-conditions', {
        templateUrl: 'views/terms-and-conditions.html',
        controller: ''
      })
      .when('/privacy-policy', {
        templateUrl: 'views/privacy-policy.html',
        controller: ''
      })
      .when('/browser', {
        templateUrl: 'views/browser.html',
        controller: ''
      })

      .otherwise({
        redirectTo: '/'
      });
  });
})(window);
