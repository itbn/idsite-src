'use strict';

angular.module('stormpathIdpApp')
  .controller('ResetCtrl', function ($scope,Stormpath,$location, $http, $routeParams) {

    $scope.status = 'loading';

    $scope.fields = {};

    var verification;

    Stormpath.init.then(function initSuccess(){
      Stormpath.verifyPasswordToken(function(err,pwTokenVerification){
        if(err){
          if(err.status===404){
            $location.path('/forgot/retry');
          }else{
            $scope.status='failed';
            $scope.error = err.userMessage || err;
          }
        }else{
          $scope.status='verified';
          verification = pwTokenVerification;
        }
      });
    });
    $scope.submit = function(){
      var errorCount = Object.keys($scope.fields).filter(function(f){
        var field = $scope.fields[f];
        return field.validate();
      }).length;
      if(errorCount>0){
        return;
      }
      var newPassword = $scope.fields.password.value;
      $scope.submitting = true;
      Stormpath.setNewPassword(verification,newPassword,function(err){
        $scope.submitting = false;
        if(err){
          $scope.unknownError = String(err.userMessage || err.developerMessage || err);
        }else{
          $scope.status = 'success';
          $scope.updateMWS();
        }
      });
    };
    
    $scope.updateMWS = function(){
      
      return;
      
      $http({
        method: 'POST',
        url: 'https://mws.stage.kroll.com/api/v1/passwordUpdate',
        data: {
          'jwt': $routeParams.jwt,
          'password': $scope.fields.password.value
        }
      }).then(function successCallback(response) {
          console.info("good");
          console.info(response);
        }, function errorCallback(response) {
          console.info("bad");
          console.info(response);
        });
    };
    
  });
