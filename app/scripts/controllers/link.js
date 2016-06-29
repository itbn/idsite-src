'use strict';

angular.module('stormpathIdpApp')
.controller('linkElement', ['$rootScope', 'loadBrandingService', '$http', '$scope', function($rootScope, loadBrandingService, $http, $scope) {
    console.log("Inside Link Controller");

    var self = this;

    self.styles = {
      url : null,
      faviconUrl : null
    }

    self.injectStyles = function (data) {
      if (data.responseObject &&  data.responseObject.url && data.responseObject.faviconUrl) {
        self.styles = data.responseObject
      } else {
        self.injectDefault()
      }
    }

    self.injectDefault = function (data) {
      self.styles.url = "styles/Kroll/main.css";
      self.styles.faviconUrl = "images/Kroll/kroll_favicon.ico";
    }

    self.getData = function () {
      loadBrandingService.getStyleSheetPath()
        .then(self.injectStyles, self.injectDefault)
    }

}])
