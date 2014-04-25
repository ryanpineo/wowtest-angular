(function () {
  'use strict';

  describe('django resource', function() {
    beforeEach(module('djangoResource'));

    var $httpBackend, djangoResource, Users;
    var DJANGO_CONFIG = {
      baseUrl: 'http://test.com/'
    };
    beforeEach(module(function($provide) {
      $provide.constant('DJANGO_CONFIG', DJANGO_CONFIG);
    }));

    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get('$httpBackend');
      djangoResource = $injector.get('djangoResource');
      Users = djangoResource('users');
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('can exist', function() {
      expect(djangoResource).toBeDefined();
    });


    describe('all', function() {
      it('should query the base url', function() {
        $httpBackend.expectGET(DJANGO_CONFIG.baseUrl + 'users/').respond(200, '');
        Users.all();
        $httpBackend.flush();
      });
    });

    describe('getBySlug', function() {
      it('should query with the slug', function() {
        $httpBackend.expectGET(DJANGO_CONFIG.baseUrl + 'users/john/').respond(200, '');
        Users.getBySlug('john');
        $httpBackend.flush();
      });
    });

  });

}());
