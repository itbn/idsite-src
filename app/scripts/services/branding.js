angular.module('stormpathIdpApp')
.service('loadBrandingService', ['$http', '$location', function ($http, $location) {

    return {
      getBaseUrl : function () {
        return $location.port();
        //return $location.host();
      },
      getStyleSheetPath : function () {
        var currentUrl = this.getBaseUrl()
        return $http.get('https://mws.stage.kroll.com/api/v1/vendor/webpage-attributes?url=' + currentUrl)
      }
    }

}])
