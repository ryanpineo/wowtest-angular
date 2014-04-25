/**
 * Adapted from https://github.com/angular-app/angular-app/blob/master/client/vendor/mongolab/mongolab-resource.js
 */
(function () {
  'use strict';

  angular.module('djangoResource', [])

  .factory('djangoResource', ['DJANGO_CONFIG', '$http', function(DJANGO_CONFIG,  $http) {

    function DjangoResourceFactory(resourceName, urlPrefix) {

      var url = DJANGO_CONFIG.baseUrl + (urlPrefix ? urlPrefix : '') + resourceName + '/';
      var defaultParams = {};

      var thenFactoryMethod = function (httpPromise, successcb, errorcb, isArray) {
        var scb = successcb || angular.noop;
        var ecb = errorcb || angular.noop;

        return httpPromise.then(function (response) {
          var result;
          if (isArray) {
            result = [];
            for (var i = 0; i < response.data.length; i++) {
              result.push(new Resource(response.data[i]));
            }
          } else {
            result = new Resource(response.data);
          }
          scb(result, response.status, response.headers, response.config);
          return result;
        }, function (response) {
          ecb(undefined, response.status, response.headers, response.config);
          return undefined;
        });
      };

      var Resource = function (data) {
        angular.extend(this, data);
      };

      Resource.all = function (cb, errorcb) {
        return Resource.query({}, cb, errorcb);
      };

      Resource.query = function (params, successcb, errorcb) {
        var httpPromise = $http.get(url, {params:angular.extend({}, defaultParams, params)});
        return thenFactoryMethod(httpPromise, successcb, errorcb, true);
      };

      Resource.getBySlug = function (slug, successcb, errorcb) {
        var httpPromise = $http.get(url + slug + '/', {params:defaultParams});
        return thenFactoryMethod(httpPromise, successcb, errorcb);
      };


      //instance methods

      Resource.prototype.$save = function (successcb, errorcb) {
        var httpPromise = $http.post(url, this, {params:defaultParams});
        return thenFactoryMethod(httpPromise, successcb, errorcb);
      };

      Resource.prototype.$update = function (successcb, errorcb) {
        var httpPromise = $http.put(url + '/' + this.slug, this, {params:defaultParams});
        return thenFactoryMethod(httpPromise, successcb, errorcb);
      };

      Resource.prototype.$remove = function (successcb, errorcb) {
        var httpPromise = $http['delete'](url + '/' + this.slug, {params:defaultParams});
        return thenFactoryMethod(httpPromise, successcb, errorcb);
      };

      Resource.prototype.$saveOrUpdate = function (savecb, updatecb, errorSavecb, errorUpdatecb) {
        if (this.slug) {
          return this.$update(updatecb, errorUpdatecb);
        } else {
          return this.$save(savecb, errorSavecb);
        }
      };

      return Resource;
    }
    return DjangoResourceFactory;
  }]);

}());
