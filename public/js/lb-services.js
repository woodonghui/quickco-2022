// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "http://api.mengtron.com/api";
  // var urlBase = "/api";
  var authHeader = 'Authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }
  // need to use the urlBase as the base to handle multiple
  // loopback servers behind a proxy/gateway where the host
  // would be the same.
  var urlBaseHost = getHost(urlBase) ? urlBase : location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "User",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#create
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createMany
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Users",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Users/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsertWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Users/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#exists
             * @methodOf lbServices.User
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Users/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#find
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findOne
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#updateAll
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#deleteById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#count
             * @methodOf lbServices.User
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$patchAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Users/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createChangeStream
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Users/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#login
             * @methodOf lbServices.User
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    'Bearer ' + accessToken.token, accessToken.userId, accessToken.user, accessToken.role);
                  // LoopBackAuth.rememberMe =
                  //   response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/users/login",
              method: "POST",
            },

            "whoami": {
              url: urlBase + "/whoami",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#logout
             * @methodOf lbServices.User
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string=}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$verify
             * @methodOf lbServices.User
             *
             * @description
             *
             * Trigger user's identity verification with configured verifyOptions
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `verifyOptions` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$verify": {
              url: urlBase + "/Users/:id/verify",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#confirm
             * @methodOf lbServices.User
             *
             * @description
             *
             * Confirm a user registration with identity verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Users/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#resetPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Users/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#changePassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Change a user's password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `oldPassword` – `{string}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "changePassword": {
              url: urlBase + "/Users/change-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#setPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset user's password via a password-reset token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "setPassword": {
              url: urlBase + "/Users/reset-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getCurrent
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.User#upsert
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.User#updateOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreateWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.User#update
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.User#destroyById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#removeById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$updateAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.User#modelName
        * @propertyOf lbServices.User
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User`.
        */
        R.modelName = "User";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Worker
 * @header lbServices.Worker
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Worker` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Worker",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Workers/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Worker#create
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Worker` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Workers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Worker#createMany
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Worker` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Workers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Worker#patchOrCreate
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Worker` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Workers",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Worker#replaceOrCreate
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Worker` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Workers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Worker#upsertWithWhere
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Worker` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Workers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Worker#exists
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Workers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Worker#findById
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Worker` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Workers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Worker#replaceById
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Worker` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Workers/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Worker#find
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Worker` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Workers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Worker#findOne
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Worker` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Workers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Worker#updateAll
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Workers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Worker#deleteById
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Worker` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Workers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Worker#count
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Workers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Worker#prototype$patchAttributes
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Worker id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Worker` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Workers/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Worker#createChangeStream
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Workers/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Worker#upsert
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Worker` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Worker#updateOrCreate
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Worker` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Worker#patchOrCreateWithWhere
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Worker` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Worker#update
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Worker#destroyById
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Worker` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Worker#removeById
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Worker` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Worker#prototype$updateAttributes
             * @methodOf lbServices.Worker
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Worker id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Worker` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Worker#modelName
        * @propertyOf lbServices.Worker
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Worker`.
        */
        R.modelName = "Worker";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Supplier
 * @header lbServices.Supplier
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Supplier` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Supplier",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/suppliers/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Supplier.products.findById() instead.
            "prototype$__findById__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/suppliers/:id/products/:fk",
              method: "GET",
            },

            // INTERNAL. Use Supplier.products.destroyById() instead.
            "prototype$__destroyById__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/suppliers/:id/products/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Supplier.products.updateById() instead.
            "prototype$__updateById__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/suppliers/:id/products/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Supplier.products() instead.
            "prototype$__get__products": {
              isArray: true,
              url: urlBase + "/suppliers/:id/products",
              method: "GET",
            },

            // INTERNAL. Use Supplier.products.create() instead.
            "prototype$__create__products": {
              url: urlBase + "/suppliers/:id/products",
              method: "POST",
            },

            // INTERNAL. Use Supplier.products.destroyAll() instead.
            "prototype$__delete__products": {
              url: urlBase + "/suppliers/:id/products",
              method: "DELETE",
            },

            // INTERNAL. Use Supplier.products.count() instead.
            "prototype$__count__products": {
              url: urlBase + "/suppliers/:id/products/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Supplier#create
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Supplier` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/suppliers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Supplier#createMany
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Supplier` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/suppliers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Supplier#patchOrCreate
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Supplier` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/suppliers",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Supplier#replaceOrCreate
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Supplier` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/suppliers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Supplier#upsertWithWhere
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Supplier` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/suppliers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Supplier#exists
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/suppliers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Supplier#findById
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Supplier` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/suppliers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Supplier#replaceById
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Supplier` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/suppliers/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Supplier#find
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Supplier` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/suppliers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Supplier#findOne
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Supplier` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/suppliers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Supplier#updateAll
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/suppliers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Supplier#deleteById
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Supplier` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/suppliers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Supplier#count
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/suppliers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Supplier#prototype$patchAttributes
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Supplier id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Supplier` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/suppliers/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Supplier#createChangeStream
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/suppliers/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Product.supplier() instead.
            "::get::Product::supplier": {
              url: urlBase + "/products/:id/supplier",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Supplier#upsert
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Supplier` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Supplier#updateOrCreate
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Supplier` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Supplier#patchOrCreateWithWhere
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Supplier` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Supplier#update
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Supplier#destroyById
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Supplier` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Supplier#removeById
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Supplier` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Supplier#prototype$updateAttributes
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Supplier id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Supplier` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Supplier#modelName
        * @propertyOf lbServices.Supplier
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Supplier`.
        */
        R.modelName = "Supplier";

    /**
     * @ngdoc object
     * @name lbServices.Supplier.products
     * @header lbServices.Supplier.products
     * @object
     * @description
     *
     * The object `Supplier.products` groups methods
     * manipulating `Product` instances related to `Supplier`.
     *
     * Call {@link lbServices.Supplier#products Supplier.products()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Supplier#products
             * @methodOf lbServices.Supplier
             *
             * @description
             *
             * Queries products of Supplier.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Supplier id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::Supplier::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Supplier.products#count
             * @methodOf lbServices.Supplier.products
             *
             * @description
             *
             * Counts products of Supplier.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Supplier id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.products.count = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::count::Supplier::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Supplier.products#create
             * @methodOf lbServices.Supplier.products
             *
             * @description
             *
             * Creates a new instance in products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Supplier id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.create = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::create::Supplier::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Supplier.products#createMany
             * @methodOf lbServices.Supplier.products
             *
             * @description
             *
             * Creates a new instance in products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Supplier id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.createMany = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::createMany::Supplier::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Supplier.products#destroyAll
             * @methodOf lbServices.Supplier.products
             *
             * @description
             *
             * Deletes all products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Supplier id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.products.destroyAll = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::delete::Supplier::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Supplier.products#destroyById
             * @methodOf lbServices.Supplier.products
             *
             * @description
             *
             * Delete a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Supplier id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.products.destroyById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::destroyById::Supplier::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Supplier.products#findById
             * @methodOf lbServices.Supplier.products
             *
             * @description
             *
             * Find a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Supplier id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.findById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::findById::Supplier::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Supplier.products#updateById
             * @methodOf lbServices.Supplier.products
             *
             * @description
             *
             * Update a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Supplier id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.updateById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::updateById::Supplier::products"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Product
 * @header lbServices.Product
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Product` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Product",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/products/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Product.supplier() instead.
            "prototype$__get__supplier": {
              url: urlBase + "/products/:id/supplier",
              method: "GET",
            },

            // INTERNAL. Use Product.costRecords.findById() instead.
            "prototype$__findById__costRecords": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/cost-records/:fk",
              method: "GET",
            },

            // INTERNAL. Use Product.costRecords.destroyById() instead.
            "prototype$__destroyById__costRecords": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/cost-records/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.costRecords.updateById() instead.
            "prototype$__updateById__costRecords": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/cost-records/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.costRecords() instead.
            "prototype$__get__costRecords": {
              isArray: true,
              url: urlBase + "/products/:id/cost-records",
              method: "GET",
            },

            // INTERNAL. Use Product.costRecords.create() instead.
            "prototype$__create__costRecords": {
              url: urlBase + "/products/:id/cost-records",
              method: "POST",
            },

            // INTERNAL. Use Product.costRecords.destroyAll() instead.
            "prototype$__delete__costRecords": {
              url: urlBase + "/products/:id/cost-records",
              method: "DELETE",
            },

            // INTERNAL. Use Product.costRecords.count() instead.
            "prototype$__count__costRecords": {
              url: urlBase + "/products/:id/cost-records/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#create
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/products",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#createMany
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/products",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#patchOrCreate
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/products",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#replaceOrCreate
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/products/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#upsertWithWhere
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/products/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#exists
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/products/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#findById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/products/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#replaceById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/products/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#find
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/products",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#findOne
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/products/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#updateAll
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/products/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#deleteById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/products/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#count
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/products/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#prototype$patchAttributes
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/products/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#createChangeStream
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/products/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Supplier.products.findById() instead.
            "::findById::Supplier::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/suppliers/:id/products/:fk",
              method: "GET",
            },

            // INTERNAL. Use Supplier.products.destroyById() instead.
            "::destroyById::Supplier::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/suppliers/:id/products/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Supplier.products.updateById() instead.
            "::updateById::Supplier::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/suppliers/:id/products/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Supplier.products() instead.
            "::get::Supplier::products": {
              isArray: true,
              url: urlBase + "/suppliers/:id/products",
              method: "GET",
            },

            // INTERNAL. Use Supplier.products.create() instead.
            "::create::Supplier::products": {
              url: urlBase + "/suppliers/:id/products",
              method: "POST",
            },

            // INTERNAL. Use Supplier.products.createMany() instead.
            "::createMany::Supplier::products": {
              isArray: true,
              url: urlBase + "/suppliers/:id/products",
              method: "POST",
            },

            // INTERNAL. Use Supplier.products.destroyAll() instead.
            "::delete::Supplier::products": {
              url: urlBase + "/suppliers/:id/products",
              method: "DELETE",
            },

            // INTERNAL. Use Supplier.products.count() instead.
            "::count::Supplier::products": {
              url: urlBase + "/suppliers/:id/products/count",
              method: "GET",
            },

            // INTERNAL. Use CostRecord.product() instead.
            "::get::CostRecord::product": {
              url: urlBase + "/cost-records/:id/product",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Product#upsert
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Product#updateOrCreate
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Product#patchOrCreateWithWhere
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Product#update
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Product#destroyById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Product#removeById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Product#prototype$updateAttributes
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Product#modelName
        * @propertyOf lbServices.Product
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Product`.
        */
        R.modelName = "Product";


            /**
             * @ngdoc method
             * @name lbServices.Product#supplier
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Fetches belongsTo relation supplier.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Supplier` object.)
             * </em>
             */
        R.supplier = function() {
          var TargetResource = $injector.get("Supplier");
          var action = TargetResource["::get::Product::supplier"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Product.costRecords
     * @header lbServices.Product.costRecords
     * @object
     * @description
     *
     * The object `Product.costRecords` groups methods
     * manipulating `CostRecord` instances related to `Product`.
     *
     * Call {@link lbServices.Product#costRecords Product.costRecords()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Product#costRecords
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Queries costRecords of Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
        R.costRecords = function() {
          var TargetResource = $injector.get("CostRecord");
          var action = TargetResource["::get::Product::costRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.costRecords#count
             * @methodOf lbServices.Product.costRecords
             *
             * @description
             *
             * Counts costRecords of Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.costRecords.count = function() {
          var TargetResource = $injector.get("CostRecord");
          var action = TargetResource["::count::Product::costRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.costRecords#create
             * @methodOf lbServices.Product.costRecords
             *
             * @description
             *
             * Creates a new instance in costRecords of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
        R.costRecords.create = function() {
          var TargetResource = $injector.get("CostRecord");
          var action = TargetResource["::create::Product::costRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.costRecords#createMany
             * @methodOf lbServices.Product.costRecords
             *
             * @description
             *
             * Creates a new instance in costRecords of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
        R.costRecords.createMany = function() {
          var TargetResource = $injector.get("CostRecord");
          var action = TargetResource["::createMany::Product::costRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.costRecords#destroyAll
             * @methodOf lbServices.Product.costRecords
             *
             * @description
             *
             * Deletes all costRecords of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.costRecords.destroyAll = function() {
          var TargetResource = $injector.get("CostRecord");
          var action = TargetResource["::delete::Product::costRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.costRecords#destroyById
             * @methodOf lbServices.Product.costRecords
             *
             * @description
             *
             * Delete a related item by id for costRecords.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for costRecords
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.costRecords.destroyById = function() {
          var TargetResource = $injector.get("CostRecord");
          var action = TargetResource["::destroyById::Product::costRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.costRecords#findById
             * @methodOf lbServices.Product.costRecords
             *
             * @description
             *
             * Find a related item by id for costRecords.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for costRecords
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
        R.costRecords.findById = function() {
          var TargetResource = $injector.get("CostRecord");
          var action = TargetResource["::findById::Product::costRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.costRecords#updateById
             * @methodOf lbServices.Product.costRecords
             *
             * @description
             *
             * Update a related item by id for costRecords.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `fk` – `{*}` - Foreign key for costRecords
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
        R.costRecords.updateById = function() {
          var TargetResource = $injector.get("CostRecord");
          var action = TargetResource["::updateById::Product::costRecords"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Outlet
 * @header lbServices.Outlet
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Outlet` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Outlet",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/outlets/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Outlet.saleRecords.findById() instead.
            "prototype$__findById__saleRecords": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/outlets/:id/saleRecords/:fk",
              method: "GET",
            },

            // INTERNAL. Use Outlet.saleRecords.destroyById() instead.
            "prototype$__destroyById__saleRecords": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/outlets/:id/saleRecords/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Outlet.saleRecords.updateById() instead.
            "prototype$__updateById__saleRecords": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/outlets/:id/saleRecords/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Outlet.saleRecords() instead.
            "prototype$__get__saleRecords": {
              isArray: true,
              url: urlBase + "/outlets/:id/saleRecords",
              method: "GET",
            },

            // INTERNAL. Use Outlet.saleRecords.create() instead.
            "prototype$__create__saleRecords": {
              url: urlBase + "/outlets/:id/saleRecords",
              method: "POST",
            },

            // INTERNAL. Use Outlet.saleRecords.destroyAll() instead.
            "prototype$__delete__saleRecords": {
              url: urlBase + "/outlets/:id/saleRecords",
              method: "DELETE",
            },

            // INTERNAL. Use Outlet.saleRecords.count() instead.
            "prototype$__count__saleRecords": {
              url: urlBase + "/outlets/:id/saleRecords/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Outlet#create
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Outlet` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/outlets",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Outlet#createMany
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Outlet` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/outlets",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Outlet#patchOrCreate
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Outlet` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/outlets",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Outlet#replaceOrCreate
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Outlet` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/outlets/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Outlet#upsertWithWhere
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Outlet` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/outlets/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Outlet#exists
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/outlets/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Outlet#findById
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Outlet` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/outlets/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Outlet#replaceById
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Outlet` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/outlets/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Outlet#find
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Outlet` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/outlets",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Outlet#findOne
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Outlet` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/outlets/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Outlet#updateAll
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/outlets/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Outlet#deleteById
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Outlet` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/outlets/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Outlet#count
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/outlets/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Outlet#prototype$patchAttributes
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Outlet id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Outlet` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/outlets/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Outlet#createChangeStream
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/outlets/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Outlet#upsert
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Outlet` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Outlet#updateOrCreate
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Outlet` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Outlet#patchOrCreateWithWhere
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Outlet` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Outlet#update
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Outlet#destroyById
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Outlet` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Outlet#removeById
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Outlet` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Outlet#prototype$updateAttributes
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Outlet id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Outlet` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Outlet#modelName
        * @propertyOf lbServices.Outlet
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Outlet`.
        */
        R.modelName = "Outlet";

    /**
     * @ngdoc object
     * @name lbServices.Outlet.saleRecords
     * @header lbServices.Outlet.saleRecords
     * @object
     * @description
     *
     * The object `Outlet.saleRecords` groups methods
     * manipulating `SaleRecord` instances related to `Outlet`.
     *
     * Call {@link lbServices.Outlet#saleRecords Outlet.saleRecords()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Outlet#saleRecords
             * @methodOf lbServices.Outlet
             *
             * @description
             *
             * Queries saleRecords of Outlet.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Outlet id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
        R.saleRecords = function() {
          var TargetResource = $injector.get("SaleRecord");
          var action = TargetResource["::get::Outlet::saleRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Outlet.saleRecords#count
             * @methodOf lbServices.Outlet.saleRecords
             *
             * @description
             *
             * Counts saleRecords of Outlet.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Outlet id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.saleRecords.count = function() {
          var TargetResource = $injector.get("SaleRecord");
          var action = TargetResource["::count::Outlet::saleRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Outlet.saleRecords#create
             * @methodOf lbServices.Outlet.saleRecords
             *
             * @description
             *
             * Creates a new instance in saleRecords of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Outlet id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
        R.saleRecords.create = function() {
          var TargetResource = $injector.get("SaleRecord");
          var action = TargetResource["::create::Outlet::saleRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Outlet.saleRecords#createMany
             * @methodOf lbServices.Outlet.saleRecords
             *
             * @description
             *
             * Creates a new instance in saleRecords of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Outlet id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
        R.saleRecords.createMany = function() {
          var TargetResource = $injector.get("SaleRecord");
          var action = TargetResource["::createMany::Outlet::saleRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Outlet.saleRecords#destroyAll
             * @methodOf lbServices.Outlet.saleRecords
             *
             * @description
             *
             * Deletes all saleRecords of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Outlet id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.saleRecords.destroyAll = function() {
          var TargetResource = $injector.get("SaleRecord");
          var action = TargetResource["::delete::Outlet::saleRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Outlet.saleRecords#destroyById
             * @methodOf lbServices.Outlet.saleRecords
             *
             * @description
             *
             * Delete a related item by id for saleRecords.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Outlet id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for saleRecords
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.saleRecords.destroyById = function() {
          var TargetResource = $injector.get("SaleRecord");
          var action = TargetResource["::destroyById::Outlet::saleRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Outlet.saleRecords#findById
             * @methodOf lbServices.Outlet.saleRecords
             *
             * @description
             *
             * Find a related item by id for saleRecords.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Outlet id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for saleRecords
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
        R.saleRecords.findById = function() {
          var TargetResource = $injector.get("SaleRecord");
          var action = TargetResource["::findById::Outlet::saleRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Outlet.saleRecords#updateById
             * @methodOf lbServices.Outlet.saleRecords
             *
             * @description
             *
             * Update a related item by id for saleRecords.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Outlet id
             *
             *  - `fk` – `{*}` - Foreign key for saleRecords
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
        R.saleRecords.updateById = function() {
          var TargetResource = $injector.get("SaleRecord");
          var action = TargetResource["::updateById::Outlet::saleRecords"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


/**
 * @ngdoc object
 * @name lbServices.OperationCost
 * @header lbServices.OperationCost
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `OperationCost` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
 module.factory(
  "OperationCost",
  [
    'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
    function(LoopBackResource, LoopBackAuth, $injector, $q) {
      var R = LoopBackResource(
      urlBase + "/operation-costs/:id",
        { 'id': '@id' },
        {

          // INTERNAL. Use OperationCost.saleRecords.findById() instead.
          "prototype$__findById__saleRecords": {
            params: {
              'fk': '@fk',
            },
            url: urlBase + "/operation-costs/:id/saleRecords/:fk",
            method: "GET",
          },

          // INTERNAL. Use OperationCost.saleRecords.destroyById() instead.
          "prototype$__destroyById__saleRecords": {
            params: {
              'fk': '@fk',
            },
            url: urlBase + "/operation-costs/:id/saleRecords/:fk",
            method: "DELETE",
          },

          // INTERNAL. Use OperationCost.saleRecords.updateById() instead.
          "prototype$__updateById__saleRecords": {
            params: {
              'fk': '@fk',
            },
            url: urlBase + "/operation-costs/:id/saleRecords/:fk",
            method: "PUT",
          },

          // INTERNAL. Use OperationCost.saleRecords() instead.
          "prototype$__get__saleRecords": {
            isArray: true,
            url: urlBase + "/operation-costs/:id/saleRecords",
            method: "GET",
          },

          // INTERNAL. Use OperationCost.saleRecords.create() instead.
          "prototype$__create__saleRecords": {
            url: urlBase + "/operation-costs/:id/saleRecords",
            method: "POST",
          },

          // INTERNAL. Use OperationCost.saleRecords.destroyAll() instead.
          "prototype$__delete__saleRecords": {
            url: urlBase + "/operation-costs/:id/saleRecords",
            method: "DELETE",
          },

          // INTERNAL. Use OperationCost.saleRecords.count() instead.
          "prototype$__count__saleRecords": {
            url: urlBase + "/operation-costs/:id/saleRecords/count",
            method: "GET",
          },

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#create
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `OperationCost` object.)
           * </em>
           */
          "create": {
            url: urlBase + "/operation-costs",
            method: "POST",
          },

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#createMany
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `OperationCost` object.)
           * </em>
           */
          "createMany": {
            isArray: true,
            url: urlBase + "/operation-costs",
            method: "POST",
          },

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#patchOrCreate
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Patch an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `OperationCost` object.)
           * </em>
           */
          "patchOrCreate": {
            url: urlBase + "/operation-costs",
            method: "PATCH",
          },

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#replaceOrCreate
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Replace an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `OperationCost` object.)
           * </em>
           */
          "replaceOrCreate": {
            url: urlBase + "/operation-costs/replaceOrCreate",
            method: "POST",
          },

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#upsertWithWhere
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source based on the where criteria.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - An object of model property name/value pairs
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `OperationCost` object.)
           * </em>
           */
          "upsertWithWhere": {
            url: urlBase + "/operation-costs/upsertWithWhere",
            method: "POST",
          },

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#exists
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` -
           */
          "exists": {
            url: urlBase + "/operation-costs/:id/exists",
            method: "GET",
          },

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#findById
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Find a model instance by {{id}} from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `OperationCost` object.)
           * </em>
           */
          "findById": {
            url: urlBase + "/operation-costs/:id",
            method: "GET",
          },

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#replaceById
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Replace attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `OperationCost` object.)
           * </em>
           */
          "replaceById": {
            url: urlBase + "/operation-costs/:id/replace",
            method: "POST",
          },

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#find
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `OperationCost` object.)
           * </em>
           */
          "find": {
            isArray: true,
            url: urlBase + "/operation-costs",
            method: "GET",
          },

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#findOne
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `OperationCost` object.)
           * </em>
           */
          "findOne": {
            url: urlBase + "/operation-costs/findOne",
            method: "GET",
          },

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#updateAll
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Update instances of the model matched by {{where}} from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - An object of model property name/value pairs
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Information related to the outcome of the operation
           */
          "updateAll": {
            url: urlBase + "/operation-costs/update",
            method: "POST",
          },

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#deleteById
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Delete a model instance by {{id}} from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `OperationCost` object.)
           * </em>
           */
          "deleteById": {
            url: urlBase + "/operation-costs/:id",
            method: "DELETE",
          },

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#count
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` -
           */
          "count": {
            url: urlBase + "/operation-costs/count",
            method: "GET",
          },

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#prototype$patchAttributes
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Patch attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - OperationCost id
           *
           *  - `options` – `{object=}` -
           *
           *  - `data` – `{object=}` - An object of model property name/value pairs
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `OperationCost` object.)
           * </em>
           */
          "prototype$patchAttributes": {
            url: urlBase + "/operation-costs/:id",
            method: "PATCH",
          },

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#createChangeStream
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Create a change stream.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `changes` – `{ReadableStream=}` -
           */
          "createChangeStream": {
            url: urlBase + "/operation-costs/change-stream",
            method: "POST",
          },
        }
      );



          /**
           * @ngdoc method
           * @name lbServices.OperationCost#upsert
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Patch an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `OperationCost` object.)
           * </em>
           */
      R["upsert"] = R["patchOrCreate"];

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#updateOrCreate
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Patch an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `OperationCost` object.)
           * </em>
           */
      R["updateOrCreate"] = R["patchOrCreate"];

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#patchOrCreateWithWhere
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source based on the where criteria.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - An object of model property name/value pairs
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `OperationCost` object.)
           * </em>
           */
      R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#update
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Update instances of the model matched by {{where}} from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - An object of model property name/value pairs
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Information related to the outcome of the operation
           */
      R["update"] = R["updateAll"];

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#destroyById
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Delete a model instance by {{id}} from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `OperationCost` object.)
           * </em>
           */
      R["destroyById"] = R["deleteById"];

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#removeById
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Delete a model instance by {{id}} from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `OperationCost` object.)
           * </em>
           */
      R["removeById"] = R["deleteById"];

          /**
           * @ngdoc method
           * @name lbServices.OperationCost#prototype$updateAttributes
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Patch attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - OperationCost id
           *
           *  - `options` – `{object=}` -
           *
           *  - `data` – `{object=}` - An object of model property name/value pairs
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `OperationCost` object.)
           * </em>
           */
      R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


      /**
      * @ngdoc property
      * @name lbServices.OperationCost#modelName
      * @propertyOf lbServices.OperationCost
      * @description
      * The name of the model represented by this $resource,
      * i.e. `OperationCost`.
      */
      R.modelName = "OperationCost";

  /**
   * @ngdoc object
   * @name lbServices.OperationCost.saleRecords
   * @header lbServices.OperationCost.saleRecords
   * @object
   * @description
   *
   * The object `OperationCost.saleRecords` groups methods
   * manipulating `SaleRecord` instances related to `OperationCost`.
   *
   * Call {@link lbServices.OperationCost#saleRecords OperationCost.saleRecords()}
   * to query all related instances.
   */


          /**
           * @ngdoc method
           * @name lbServices.OperationCost#saleRecords
           * @methodOf lbServices.OperationCost
           *
           * @description
           *
           * Queries saleRecords of OperationCost.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - OperationCost id
           *
           *  - `options` – `{object=}` -
           *
           *  - `filter` – `{object=}` -
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `SaleRecord` object.)
           * </em>
           */
      R.saleRecords = function() {
        var TargetResource = $injector.get("SaleRecord");
        var action = TargetResource["::get::OperationCost::saleRecords"];
        return action.apply(R, arguments);
      };

          /**
           * @ngdoc method
           * @name lbServices.OperationCost.saleRecords#count
           * @methodOf lbServices.OperationCost.saleRecords
           *
           * @description
           *
           * Counts saleRecords of OperationCost.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - OperationCost id
           *
           *  - `options` – `{object=}` -
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` -
           */
      R.saleRecords.count = function() {
        var TargetResource = $injector.get("SaleRecord");
        var action = TargetResource["::count::OperationCost::saleRecords"];
        return action.apply(R, arguments);
      };

          /**
           * @ngdoc method
           * @name lbServices.OperationCost.saleRecords#create
           * @methodOf lbServices.OperationCost.saleRecords
           *
           * @description
           *
           * Creates a new instance in saleRecords of this model.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - OperationCost id
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` -
           *
           *  - `data` – `{object=}` -
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `SaleRecord` object.)
           * </em>
           */
      R.saleRecords.create = function() {
        var TargetResource = $injector.get("SaleRecord");
        var action = TargetResource["::create::OperationCost::saleRecords"];
        return action.apply(R, arguments);
      };

          /**
           * @ngdoc method
           * @name lbServices.OperationCost.saleRecords#createMany
           * @methodOf lbServices.OperationCost.saleRecords
           *
           * @description
           *
           * Creates a new instance in saleRecords of this model.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - OperationCost id
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` -
           *
           *  - `data` – `{object=}` -
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `SaleRecord` object.)
           * </em>
           */
      R.saleRecords.createMany = function() {
        var TargetResource = $injector.get("SaleRecord");
        var action = TargetResource["::createMany::OperationCost::saleRecords"];
        return action.apply(R, arguments);
      };

          /**
           * @ngdoc method
           * @name lbServices.OperationCost.saleRecords#destroyAll
           * @methodOf lbServices.OperationCost.saleRecords
           *
           * @description
           *
           * Deletes all saleRecords of this model.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - OperationCost id
           *
           *  - `options` – `{object=}` -
           *
           *  - `where` – `{object=}` -
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
      R.saleRecords.destroyAll = function() {
        var TargetResource = $injector.get("SaleRecord");
        var action = TargetResource["::delete::OperationCost::saleRecords"];
        return action.apply(R, arguments);
      };

          /**
           * @ngdoc method
           * @name lbServices.OperationCost.saleRecords#destroyById
           * @methodOf lbServices.OperationCost.saleRecords
           *
           * @description
           *
           * Delete a related item by id for saleRecords.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - OperationCost id
           *
           *  - `options` – `{object=}` -
           *
           *  - `fk` – `{*}` - Foreign key for saleRecords
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
      R.saleRecords.destroyById = function() {
        var TargetResource = $injector.get("SaleRecord");
        var action = TargetResource["::destroyById::OperationCost::saleRecords"];
        return action.apply(R, arguments);
      };

          /**
           * @ngdoc method
           * @name lbServices.OperationCost.saleRecords#findById
           * @methodOf lbServices.OperationCost.saleRecords
           *
           * @description
           *
           * Find a related item by id for saleRecords.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - OperationCost id
           *
           *  - `options` – `{object=}` -
           *
           *  - `fk` – `{*}` - Foreign key for saleRecords
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `SaleRecord` object.)
           * </em>
           */
      R.saleRecords.findById = function() {
        var TargetResource = $injector.get("SaleRecord");
        var action = TargetResource["::findById::OperationCost::saleRecords"];
        return action.apply(R, arguments);
      };

          /**
           * @ngdoc method
           * @name lbServices.OperationCost.saleRecords#updateById
           * @methodOf lbServices.OperationCost.saleRecords
           *
           * @description
           *
           * Update a related item by id for saleRecords.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - OperationCost id
           *
           *  - `fk` – `{*}` - Foreign key for saleRecords
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` -
           *
           *  - `data` – `{object=}` -
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `SaleRecord` object.)
           * </em>
           */
      R.saleRecords.updateById = function() {
        var TargetResource = $injector.get("SaleRecord");
        var action = TargetResource["::updateById::OperationCost::saleRecords"];
        return action.apply(R, arguments);
      };


      return R;
    }]);


/**
 * @ngdoc object
 * @name lbServices.SaleRecord
 * @header lbServices.SaleRecord
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SaleRecord` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "SaleRecord",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/sale-records/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use SaleRecord.costRecords.findById() instead.
            "prototype$__findById__costRecords": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/sale-records/:id/cost-records/:fk",
              method: "GET",
            },

            // INTERNAL. Use SaleRecord.costRecords.destroyById() instead.
            "prototype$__destroyById__costRecords": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/sale-records/:id/cost-records/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SaleRecord.costRecords.updateById() instead.
            "prototype$__updateById__costRecords": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/sale-records/:id/cost-records/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SaleRecord.costRecords() instead.
            "prototype$__get__costRecords": {
              isArray: true,
              url: urlBase + "/sale-records/:id/cost-records",
              method: "GET",
            },

            // INTERNAL. Use SaleRecord.costRecords.create() instead.
            "prototype$__create__costRecords": {
              url: urlBase + "/sale-records/:id/cost-records",
              method: "POST",
            },

            // INTERNAL. Use SaleRecord.costRecords.destroyAll() instead.
            "prototype$__delete__costRecords": {
              url: urlBase + "/sale-records/:id/costRecords",
              method: "DELETE",
            },

            // INTERNAL. Use SaleRecord.costRecords.count() instead.
            "prototype$__count__costRecords": {
              url: urlBase + "/sale-records/:id/cost-records/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#create
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/sale-records",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#createMany
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/sale-records",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#patchOrCreate
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/sale-records",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#replaceOrCreate
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/sale-records/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#upsertWithWhere
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/sale-records/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#exists
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/sale-records/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#findById
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/sale-records/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#replaceById
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/sale-records/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#find
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/sale-records",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#findOne
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/sale-records/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#updateAll
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/sale-records/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#deleteById
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/sale-records/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#count
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/sale-records/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#prototype$patchAttributes
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - SaleRecord id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/sale-records/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#createChangeStream
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/sale-records/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Outlet.saleRecords.findById() instead.
            "::findById::Outlet::saleRecords": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/outlets/:id/sale-records/:fk",
              method: "GET",
            },

            // INTERNAL. Use Outlet.saleRecords.destroyById() instead.
            "::destroyById::Outlet::saleRecords": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/outlets/:id/sale-records/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Outlet.saleRecords.updateById() instead.
            "::updateById::Outlet::saleRecords": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/outlets/:id/sale-records/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Outlet.saleRecords() instead.
            "::get::Outlet::saleRecords": {
              isArray: true,
              url: urlBase + "/outlets/:id/sale-records",
              method: "GET",
            },

            // INTERNAL. Use Outlet.saleRecords.create() instead.
            "::create::Outlet::saleRecords": {
              url: urlBase + "/outlets/:id/sale-records",
              method: "POST",
            },

            // INTERNAL. Use Outlet.saleRecords.createMany() instead.
            "::createMany::Outlet::saleRecords": {
              isArray: true,
              url: urlBase + "/outlets/:id/sale-records",
              method: "POST",
            },

            // INTERNAL. Use Outlet.saleRecords.destroyAll() instead.
            "::delete::Outlet::saleRecords": {
              url: urlBase + "/outlets/:id/sale-records",
              method: "DELETE",
            },

            // INTERNAL. Use Outlet.saleRecords.count() instead.
            "::count::Outlet::saleRecords": {
              url: urlBase + "/outlets/:id/sale-records/count",
              method: "GET",
            },

            // INTERNAL. Use CostRecord.saleRecord() instead.
            "::get::CostRecord::saleRecord": {
              url: urlBase + "/cost-records/:id/sale-records",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#upsert
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#updateOrCreate
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#patchOrCreateWithWhere
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#update
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#destroyById
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#removeById
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#prototype$updateAttributes
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - SaleRecord id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.SaleRecord#modelName
        * @propertyOf lbServices.SaleRecord
        * @description
        * The name of the model represented by this $resource,
        * i.e. `SaleRecord`.
        */
        R.modelName = "SaleRecord";

    /**
     * @ngdoc object
     * @name lbServices.SaleRecord.costRecords
     * @header lbServices.SaleRecord.costRecords
     * @object
     * @description
     *
     * The object `SaleRecord.costRecords` groups methods
     * manipulating `CostRecord` instances related to `SaleRecord`.
     *
     * Call {@link lbServices.SaleRecord#costRecords SaleRecord.costRecords()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.SaleRecord#costRecords
             * @methodOf lbServices.SaleRecord
             *
             * @description
             *
             * Queries costRecords of SaleRecord.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - SaleRecord id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
        R.costRecords = function() {
          var TargetResource = $injector.get("CostRecord");
          var action = TargetResource["::get::SaleRecord::costRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord.costRecords#count
             * @methodOf lbServices.SaleRecord.costRecords
             *
             * @description
             *
             * Counts costRecords of SaleRecord.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - SaleRecord id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.costRecords.count = function() {
          var TargetResource = $injector.get("CostRecord");
          var action = TargetResource["::count::SaleRecord::costRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord.costRecords#create
             * @methodOf lbServices.SaleRecord.costRecords
             *
             * @description
             *
             * Creates a new instance in costRecords of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - SaleRecord id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
        R.costRecords.create = function() {
          var TargetResource = $injector.get("CostRecord");
          var action = TargetResource["::create::SaleRecord::costRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord.costRecords#createMany
             * @methodOf lbServices.SaleRecord.costRecords
             *
             * @description
             *
             * Creates a new instance in costRecords of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - SaleRecord id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
        R.costRecords.createMany = function() {
          var TargetResource = $injector.get("CostRecord");
          var action = TargetResource["::createMany::SaleRecord::costRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord.costRecords#destroyAll
             * @methodOf lbServices.SaleRecord.costRecords
             *
             * @description
             *
             * Deletes all costRecords of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - SaleRecord id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.costRecords.destroyAll = function() {
          var TargetResource = $injector.get("CostRecord");
          var action = TargetResource["::delete::SaleRecord::costRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord.costRecords#destroyById
             * @methodOf lbServices.SaleRecord.costRecords
             *
             * @description
             *
             * Delete a related item by id for costRecords.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - SaleRecord id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for costRecords
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.costRecords.destroyById = function() {
          var TargetResource = $injector.get("CostRecord");
          var action = TargetResource["::destroyById::SaleRecord::costRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord.costRecords#findById
             * @methodOf lbServices.SaleRecord.costRecords
             *
             * @description
             *
             * Find a related item by id for costRecords.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - SaleRecord id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for costRecords
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
        R.costRecords.findById = function() {
          var TargetResource = $injector.get("CostRecord");
          var action = TargetResource["::findById::SaleRecord::costRecords"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SaleRecord.costRecords#updateById
             * @methodOf lbServices.SaleRecord.costRecords
             *
             * @description
             *
             * Update a related item by id for costRecords.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - SaleRecord id
             *
             *  - `fk` – `{*}` - Foreign key for costRecords
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
        R.costRecords.updateById = function() {
          var TargetResource = $injector.get("CostRecord");
          var action = TargetResource["::updateById::SaleRecord::costRecords"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.CostRecord
 * @header lbServices.CostRecord
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CostRecord` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "CostRecord",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/cost-records/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use CostRecord.saleRecord() instead.
            "prototype$__get__saleRecord": {
              url: urlBase + "/cost-records/:id/saleRecord",
              method: "GET",
            },

            // INTERNAL. Use CostRecord.product() instead.
            "prototype$__get__product": {
              url: urlBase + "/cost-records/:id/product",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#create
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/cost-records",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#createMany
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/cost-records",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#patchOrCreate
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/cost-records",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#replaceOrCreate
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/cost-records/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#upsertWithWhere
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/cost-records/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#exists
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/cost-records/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#findById
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/cost-records/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#replaceById
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/cost-records/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#find
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/cost-records",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#findOne
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/cost-records/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#updateAll
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/cost-records/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#deleteById
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/cost-records/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#count
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/cost-records/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#prototype$patchAttributes
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CostRecord id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/cost-records/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#createChangeStream
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/cost-records/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Product.costRecords.findById() instead.
            "::findById::Product::costRecords": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/cost-records/:fk",
              method: "GET",
            },

            // INTERNAL. Use Product.costRecords.destroyById() instead.
            "::destroyById::Product::costRecords": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/cost-records/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.costRecords.updateById() instead.
            "::updateById::Product::costRecords": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/cost-records/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.costRecords() instead.
            "::get::Product::costRecords": {
              isArray: true,
              url: urlBase + "/products/:id/cost-records",
              method: "GET",
            },

            // INTERNAL. Use Product.costRecords.create() instead.
            "::create::Product::costRecords": {
              url: urlBase + "/products/:id/cost-records",
              method: "POST",
            },

            // INTERNAL. Use Product.costRecords.createMany() instead.
            "::createMany::Product::costRecords": {
              isArray: true,
              url: urlBase + "/products/:id/cost-records",
              method: "POST",
            },

            // INTERNAL. Use Product.costRecords.destroyAll() instead.
            "::delete::Product::costRecords": {
              url: urlBase + "/products/:id/cost-records",
              method: "DELETE",
            },

            // INTERNAL. Use Product.costRecords.count() instead.
            "::count::Product::costRecords": {
              url: urlBase + "/products/:id/cost-records/count",
              method: "GET",
            },

            // INTERNAL. Use SaleRecord.costRecords.findById() instead.
            "::findById::SaleRecord::costRecords": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/sale-records/:id/cost-records/:fk",
              method: "GET",
            },

            // INTERNAL. Use SaleRecord.costRecords.destroyById() instead.
            "::destroyById::SaleRecord::costRecords": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/sale-records/:id/cost-records/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SaleRecord.costRecords.updateById() instead.
            "::updateById::SaleRecord::costRecords": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/sale-records/:id/cost-records/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SaleRecord.costRecords() instead.
            "::get::SaleRecord::costRecords": {
              isArray: true,
              url: urlBase + "/sale-records/:id/cost-records",
              method: "GET",
            },

            // INTERNAL. Use SaleRecord.costRecords.create() instead.
            "::create::SaleRecord::costRecords": {
              url: urlBase + "/sale-records/:id/cost-records",
              method: "POST",
            },

            // INTERNAL. Use SaleRecord.costRecords.createMany() instead.
            "::createMany::SaleRecord::costRecords": {
              isArray: true,
              url: urlBase + "/sale-records/:id/cost-records",
              method: "POST",
            },

            // INTERNAL. Use SaleRecord.costRecords.destroyAll() instead.
            "::delete::SaleRecord::costRecords": {
              url: urlBase + "/sale-records/:id/cost-records",
              method: "DELETE",
            },

            // INTERNAL. Use SaleRecord.costRecords.count() instead.
            "::count::SaleRecord::costRecords": {
              url: urlBase + "/sale-records/:id/cost-records/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.CostRecord#upsert
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#updateOrCreate
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#patchOrCreateWithWhere
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#update
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#destroyById
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#removeById
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#prototype$updateAttributes
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CostRecord id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CostRecord` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.CostRecord#modelName
        * @propertyOf lbServices.CostRecord
        * @description
        * The name of the model represented by this $resource,
        * i.e. `CostRecord`.
        */
        R.modelName = "CostRecord";


            /**
             * @ngdoc method
             * @name lbServices.CostRecord#saleRecord
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Fetches belongsTo relation saleRecord.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CostRecord id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SaleRecord` object.)
             * </em>
             */
        R.saleRecord = function() {
          var TargetResource = $injector.get("SaleRecord");
          var action = TargetResource["::get::CostRecord::saleRecord"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CostRecord#product
             * @methodOf lbServices.CostRecord
             *
             * @description
             *
             * Fetches belongsTo relation product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CostRecord id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.product = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::CostRecord::product"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Setting
 * @header lbServices.Setting
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Setting` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Setting",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Settings/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Setting#create
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Setting` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Settings",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Setting#createMany
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Setting` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Settings",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Setting#patchOrCreate
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Setting` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Settings",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Setting#replaceOrCreate
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Setting` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Settings/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Setting#upsertWithWhere
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Setting` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Settings/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Setting#exists
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Settings/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Setting#findById
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Setting` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Settings/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Setting#replaceById
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Setting` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Settings/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Setting#find
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Setting` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Settings",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Setting#findOne
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Setting` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Settings/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Setting#updateAll
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Settings/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Setting#deleteById
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Setting` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Settings/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Setting#count
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Settings/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Setting#prototype$patchAttributes
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Setting id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Setting` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Settings/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Setting#createChangeStream
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Settings/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Setting#upsert
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Setting` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Setting#updateOrCreate
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Setting` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Setting#patchOrCreateWithWhere
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Setting` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Setting#update
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Setting#destroyById
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Setting` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Setting#removeById
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Setting` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Setting#prototype$updateAttributes
             * @methodOf lbServices.Setting
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Setting id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Setting` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Setting#modelName
        * @propertyOf lbServices.Setting
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Setting`.
        */
        R.modelName = "Setting";



        return R;
      }]);


/**
 * @ngdoc object
 * @name lbServices.WorkLog
 * @header lbServices.WorkLog
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `WorkLog` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "WorkLog",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/work-logs/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#create
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WorkLog` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/work-logs",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#createMany
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WorkLog` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/work-logs",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#patchOrCreate
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WorkLog` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/work-logs",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#replaceOrCreate
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WorkLog` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/work-logs/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#upsertWithWhere
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WorkLog` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/work-logs/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#exists
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/work-logs/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#findById
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WorkLog` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/work-logs/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#replaceById
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WorkLog` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/work-logs/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#find
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WorkLog` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/work-logs",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#findOne
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WorkLog` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/work-logs/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#updateAll
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/work-logs/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#deleteById
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WorkLog` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/work-logs/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#count
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/work-logs/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#prototype$patchAttributes
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - WorkLog id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WorkLog` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/work-logs/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#createChangeStream
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/work-logs/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.WorkLog#upsert
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WorkLog` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#updateOrCreate
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WorkLog` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#patchOrCreateWithWhere
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WorkLog` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#update
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#destroyById
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WorkLog` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#removeById
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WorkLog` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.WorkLog#prototype$updateAttributes
             * @methodOf lbServices.WorkLog
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - WorkLog id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WorkLog` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.WorkLog#modelName
        * @propertyOf lbServices.WorkLog
        * @description
        * The name of the model represented by this $resource,
        * i.e. `WorkLog`.
        */
        R.modelName = "WorkLog";



        return R;
      }]);





/**
 * @ngdoc object
 * @name lbServices.Employee
 * @header lbServices.Employee
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Employee` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Employee",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/employees/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Employee#create
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/employees",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#createMany
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/employees",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#patchOrCreate
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/employees",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#replaceOrCreate
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/employees/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#upsertWithWhere
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/employees/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#exists
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/employees/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#findById
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/employees/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#replaceById
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/employees/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#find
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/employees",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#findOne
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/employees/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#updateAll
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/employees/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#deleteById
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/employees/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#count
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/employees/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$patchAttributes
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Employee id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/employees/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#createChangeStream
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/employees/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Employee#upsert
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Employee#updateOrCreate
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Employee#patchOrCreateWithWhere
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Employee#update
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Employee#destroyById
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Employee#removeById
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$updateAttributes
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Employee id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Employee#modelName
        * @propertyOf lbServices.Employee
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Employee`.
        */
        R.modelName = "Employee";



        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe', 'userRole'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
      this.userRole = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData, userRole) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
      this.userRole = userRole;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
      this.userRole = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && config.url.indexOf(urlBaseHost) === -1) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
