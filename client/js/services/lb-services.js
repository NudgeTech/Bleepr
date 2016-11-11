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

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

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
 * @name lbServices.RoleMapping
 * @header lbServices.RoleMapping
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `RoleMapping` model.
 *
 * **Details**
 *
 * Map principals to roles
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "RoleMapping",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/RoleMappings/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use RoleMapping.role() instead.
            "prototype$__get__role": {
              url: urlBase + "/RoleMappings/:id/role",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#create
             * @methodOf lbServices.RoleMapping
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/RoleMappings",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#createMany
             * @methodOf lbServices.RoleMapping
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
             * This method expects a subset of model properties as request parameters.
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
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/RoleMappings",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#upsert
             * @methodOf lbServices.RoleMapping
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/RoleMappings",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#replaceOrCreate
             * @methodOf lbServices.RoleMapping
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/RoleMappings/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#upsertWithWhere
             * @methodOf lbServices.RoleMapping
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/RoleMappings/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#exists
             * @methodOf lbServices.RoleMapping
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
              url: urlBase + "/RoleMappings/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#findById
             * @methodOf lbServices.RoleMapping
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/RoleMappings/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#replaceById
             * @methodOf lbServices.RoleMapping
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/RoleMappings/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#find
             * @methodOf lbServices.RoleMapping
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
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
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/RoleMappings",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#findOne
             * @methodOf lbServices.RoleMapping
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/RoleMappings/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#updateAll
             * @methodOf lbServices.RoleMapping
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
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/RoleMappings/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#deleteById
             * @methodOf lbServices.RoleMapping
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/RoleMappings/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#count
             * @methodOf lbServices.RoleMapping
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
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
              url: urlBase + "/RoleMappings/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#prototype$updateAttributes
             * @methodOf lbServices.RoleMapping
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/RoleMappings/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#createChangeStream
             * @methodOf lbServices.RoleMapping
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
              url: urlBase + "/RoleMappings/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Role.principals.findById() instead.
            "::findById::Role::principals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Roles/:id/principals/:fk",
              method: "GET",
            },

            // INTERNAL. Use Role.principals.destroyById() instead.
            "::destroyById::Role::principals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Roles/:id/principals/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Role.principals.updateById() instead.
            "::updateById::Role::principals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Roles/:id/principals/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Role.principals() instead.
            "::get::Role::principals": {
              isArray: true,
              url: urlBase + "/Roles/:id/principals",
              method: "GET",
            },

            // INTERNAL. Use Role.principals.create() instead.
            "::create::Role::principals": {
              url: urlBase + "/Roles/:id/principals",
              method: "POST",
            },

            // INTERNAL. Use Role.principals.createMany() instead.
            "::createMany::Role::principals": {
              isArray: true,
              url: urlBase + "/Roles/:id/principals",
              method: "POST",
            },

            // INTERNAL. Use Role.principals.destroyAll() instead.
            "::delete::Role::principals": {
              url: urlBase + "/Roles/:id/principals",
              method: "DELETE",
            },

            // INTERNAL. Use Role.principals.count() instead.
            "::count::Role::principals": {
              url: urlBase + "/Roles/:id/principals/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#patchOrCreate
             * @methodOf lbServices.RoleMapping
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#updateOrCreate
             * @methodOf lbServices.RoleMapping
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#patchOrCreateWithWhere
             * @methodOf lbServices.RoleMapping
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#update
             * @methodOf lbServices.RoleMapping
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
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#destroyById
             * @methodOf lbServices.RoleMapping
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#removeById
             * @methodOf lbServices.RoleMapping
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#patchAttributes
             * @methodOf lbServices.RoleMapping
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.RoleMapping#modelName
        * @propertyOf lbServices.RoleMapping
        * @description
        * The name of the model represented by this $resource,
        * i.e. `RoleMapping`.
        */
        R.modelName = "RoleMapping";


            /**
             * @ngdoc method
             * @name lbServices.RoleMapping#role
             * @methodOf lbServices.RoleMapping
             *
             * @description
             *
             * Fetches belongsTo relation role.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `Role` object.)
             * </em>
             */
        R.role = function() {
          var TargetResource = $injector.get("Role");
          var action = TargetResource["::get::RoleMapping::role"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Role
 * @header lbServices.Role
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Role` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Role",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Roles/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Role.principals.findById() instead.
            "prototype$__findById__principals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Roles/:id/principals/:fk",
              method: "GET",
            },

            // INTERNAL. Use Role.principals.destroyById() instead.
            "prototype$__destroyById__principals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Roles/:id/principals/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Role.principals.updateById() instead.
            "prototype$__updateById__principals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Roles/:id/principals/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Role.principals() instead.
            "prototype$__get__principals": {
              isArray: true,
              url: urlBase + "/Roles/:id/principals",
              method: "GET",
            },

            // INTERNAL. Use Role.principals.create() instead.
            "prototype$__create__principals": {
              url: urlBase + "/Roles/:id/principals",
              method: "POST",
            },

            // INTERNAL. Use Role.principals.destroyAll() instead.
            "prototype$__delete__principals": {
              url: urlBase + "/Roles/:id/principals",
              method: "DELETE",
            },

            // INTERNAL. Use Role.principals.count() instead.
            "prototype$__count__principals": {
              url: urlBase + "/Roles/:id/principals/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Role#create
             * @methodOf lbServices.Role
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Role` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Roles",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Role#createMany
             * @methodOf lbServices.Role
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
             * This method expects a subset of model properties as request parameters.
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
             * This usually means the response is a `Role` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Roles",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Role#upsert
             * @methodOf lbServices.Role
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Role` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Roles",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Role#replaceOrCreate
             * @methodOf lbServices.Role
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Role` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Roles/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Role#upsertWithWhere
             * @methodOf lbServices.Role
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Role` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Roles/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Role#exists
             * @methodOf lbServices.Role
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
              url: urlBase + "/Roles/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Role#findById
             * @methodOf lbServices.Role
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `Role` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Roles/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Role#replaceById
             * @methodOf lbServices.Role
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Role` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Roles/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Role#find
             * @methodOf lbServices.Role
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
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
             * This usually means the response is a `Role` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Roles",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Role#findOne
             * @methodOf lbServices.Role
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `Role` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Roles/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Role#updateAll
             * @methodOf lbServices.Role
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
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Roles/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Role#deleteById
             * @methodOf lbServices.Role
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `Role` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Roles/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Role#count
             * @methodOf lbServices.Role
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
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
              url: urlBase + "/Roles/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Role#prototype$updateAttributes
             * @methodOf lbServices.Role
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Role` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Roles/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Role#createChangeStream
             * @methodOf lbServices.Role
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
              url: urlBase + "/Roles/change-stream",
              method: "POST",
            },

            // INTERNAL. Use RoleMapping.role() instead.
            "::get::RoleMapping::role": {
              url: urlBase + "/RoleMappings/:id/role",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Role#patchOrCreate
             * @methodOf lbServices.Role
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Role` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Role#updateOrCreate
             * @methodOf lbServices.Role
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Role` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Role#patchOrCreateWithWhere
             * @methodOf lbServices.Role
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Role` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Role#update
             * @methodOf lbServices.Role
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
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Role#destroyById
             * @methodOf lbServices.Role
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `Role` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Role#removeById
             * @methodOf lbServices.Role
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `Role` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Role#patchAttributes
             * @methodOf lbServices.Role
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Role` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Role#modelName
        * @propertyOf lbServices.Role
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Role`.
        */
        R.modelName = "Role";

    /**
     * @ngdoc object
     * @name lbServices.Role.principals
     * @header lbServices.Role.principals
     * @object
     * @description
     *
     * The object `Role.principals` groups methods
     * manipulating `RoleMapping` instances related to `Role`.
     *
     * Call {@link lbServices.Role#principals Role.principals()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Role#principals
             * @methodOf lbServices.Role
             *
             * @description
             *
             * Queries principals of Role.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
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
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
        R.principals = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::get::Role::principals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Role.principals#count
             * @methodOf lbServices.Role.principals
             *
             * @description
             *
             * Counts principals of Role.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
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
        R.principals.count = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::count::Role::principals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Role.principals#create
             * @methodOf lbServices.Role.principals
             *
             * @description
             *
             * Creates a new instance in principals of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
        R.principals.create = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::create::Role::principals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Role.principals#createMany
             * @methodOf lbServices.Role.principals
             *
             * @description
             *
             * Creates a new instance in principals of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
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
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
        R.principals.createMany = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::createMany::Role::principals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Role.principals#destroyAll
             * @methodOf lbServices.Role.principals
             *
             * @description
             *
             * Deletes all principals of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
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
        R.principals.destroyAll = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::delete::Role::principals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Role.principals#destroyById
             * @methodOf lbServices.Role.principals
             *
             * @description
             *
             * Delete a related item by id for principals.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for principals
             *
             * @param {function(Object,Object)=} successCb
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
        R.principals.destroyById = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::destroyById::Role::principals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Role.principals#findById
             * @methodOf lbServices.Role.principals
             *
             * @description
             *
             * Find a related item by id for principals.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for principals
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
        R.principals.findById = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::findById::Role::principals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Role.principals#updateById
             * @methodOf lbServices.Role.principals
             *
             * @description
             *
             * Update a related item by id for principals.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for principals
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RoleMapping` object.)
             * </em>
             */
        R.principals.updateById = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::updateById::Role::principals"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Email",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Emails/:id",
          { 'id': '@id' },
          {
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Email#modelName
        * @propertyOf lbServices.Email
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Email`.
        */
        R.modelName = "Email";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.BleeprUser
 * @header lbServices.BleeprUser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `BleeprUser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "BleeprUser",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/bleeprUsers/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#prototype$__findById__accessTokens
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#prototype$__destroyById__accessTokens
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
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
              url: urlBase + "/bleeprUsers/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#prototype$__updateById__accessTokens
             * @methodOf lbServices.BleeprUser
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprUser.bleeprOrganisation() instead.
            "prototype$__get__bleeprOrganisation": {
              url: urlBase + "/bleeprUsers/:id/bleeprOrganisation",
              method: "GET",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.findById() instead.
            "prototype$__findById__bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprGroups/:fk",
              method: "GET",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.destroyById() instead.
            "prototype$__destroyById__bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprGroups/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.updateById() instead.
            "prototype$__updateById__bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprGroups/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.link() instead.
            "prototype$__link__bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprGroups/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.unlink() instead.
            "prototype$__unlink__bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprGroups/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.exists() instead.
            "prototype$__exists__bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprGroups/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.findById() instead.
            "prototype$__findById__bleeprAlerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts/:fk",
              method: "GET",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.destroyById() instead.
            "prototype$__destroyById__bleeprAlerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.updateById() instead.
            "prototype$__updateById__bleeprAlerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.link() instead.
            "prototype$__link__bleeprAlerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.unlink() instead.
            "prototype$__unlink__bleeprAlerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.exists() instead.
            "prototype$__exists__bleeprAlerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts/rel/:fk",
              method: "HEAD",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#prototype$__get__accessTokens
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Queries accessTokens of bleeprUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
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
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/bleeprUsers/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#prototype$__create__accessTokens
             * @methodOf lbServices.BleeprUser
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/bleeprUsers/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#prototype$__delete__accessTokens
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
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
              url: urlBase + "/bleeprUsers/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#prototype$__count__accessTokens
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Counts accessTokens of bleeprUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
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
              url: urlBase + "/bleeprUsers/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups() instead.
            "prototype$__get__bleeprGroups": {
              isArray: true,
              url: urlBase + "/bleeprUsers/:id/bleeprGroups",
              method: "GET",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.create() instead.
            "prototype$__create__bleeprGroups": {
              url: urlBase + "/bleeprUsers/:id/bleeprGroups",
              method: "POST",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.destroyAll() instead.
            "prototype$__delete__bleeprGroups": {
              url: urlBase + "/bleeprUsers/:id/bleeprGroups",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.count() instead.
            "prototype$__count__bleeprGroups": {
              url: urlBase + "/bleeprUsers/:id/bleeprGroups/count",
              method: "GET",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts() instead.
            "prototype$__get__bleeprAlerts": {
              isArray: true,
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts",
              method: "GET",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.create() instead.
            "prototype$__create__bleeprAlerts": {
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts",
              method: "POST",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.destroyAll() instead.
            "prototype$__delete__bleeprAlerts": {
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.count() instead.
            "prototype$__count__bleeprAlerts": {
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#create
             * @methodOf lbServices.BleeprUser
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/bleeprUsers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#createMany
             * @methodOf lbServices.BleeprUser
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
             * This method expects a subset of model properties as request parameters.
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
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/bleeprUsers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#upsert
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/bleeprUsers",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#replaceOrCreate
             * @methodOf lbServices.BleeprUser
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/bleeprUsers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#upsertWithWhere
             * @methodOf lbServices.BleeprUser
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/bleeprUsers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#exists
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
              url: urlBase + "/bleeprUsers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#findById
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/bleeprUsers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#replaceById
             * @methodOf lbServices.BleeprUser
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/bleeprUsers/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#find
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
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
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/bleeprUsers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#findOne
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/bleeprUsers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#updateAll
             * @methodOf lbServices.BleeprUser
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
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/bleeprUsers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#deleteById
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/bleeprUsers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#count
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
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
              url: urlBase + "/bleeprUsers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#prototype$updateAttributes
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/bleeprUsers/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#createChangeStream
             * @methodOf lbServices.BleeprUser
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
              url: urlBase + "/bleeprUsers/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#login
             * @methodOf lbServices.BleeprUser
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
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/bleeprUsers/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#logout
             * @methodOf lbServices.BleeprUser
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
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
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
              url: urlBase + "/bleeprUsers/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#confirm
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Confirm a user registration with email verification token.
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
              url: urlBase + "/bleeprUsers/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#resetPassword
             * @methodOf lbServices.BleeprUser
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
              url: urlBase + "/bleeprUsers/reset",
              method: "POST",
            },

            // INTERNAL. Use BleeprOrganisation.bleeprUsers.findById() instead.
            "::findById::BleeprOrganisation::bleeprUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprOrganisations/:id/bleeprUsers/:fk",
              method: "GET",
            },

            // INTERNAL. Use BleeprOrganisation.bleeprUsers.destroyById() instead.
            "::destroyById::BleeprOrganisation::bleeprUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprOrganisations/:id/bleeprUsers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprOrganisation.bleeprUsers.updateById() instead.
            "::updateById::BleeprOrganisation::bleeprUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprOrganisations/:id/bleeprUsers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprOrganisation.bleeprUsers() instead.
            "::get::BleeprOrganisation::bleeprUsers": {
              isArray: true,
              url: urlBase + "/bleeprOrganisations/:id/bleeprUsers",
              method: "GET",
            },

            // INTERNAL. Use BleeprOrganisation.bleeprUsers.create() instead.
            "::create::BleeprOrganisation::bleeprUsers": {
              url: urlBase + "/bleeprOrganisations/:id/bleeprUsers",
              method: "POST",
            },

            // INTERNAL. Use BleeprOrganisation.bleeprUsers.createMany() instead.
            "::createMany::BleeprOrganisation::bleeprUsers": {
              isArray: true,
              url: urlBase + "/bleeprOrganisations/:id/bleeprUsers",
              method: "POST",
            },

            // INTERNAL. Use BleeprOrganisation.bleeprUsers.destroyAll() instead.
            "::delete::BleeprOrganisation::bleeprUsers": {
              url: urlBase + "/bleeprOrganisations/:id/bleeprUsers",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprOrganisation.bleeprUsers.count() instead.
            "::count::BleeprOrganisation::bleeprUsers": {
              url: urlBase + "/bleeprOrganisations/:id/bleeprUsers/count",
              method: "GET",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers.findById() instead.
            "::findById::BleeprGroup::bleeprUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprGroups/:id/bleeprUsers/:fk",
              method: "GET",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers.destroyById() instead.
            "::destroyById::BleeprGroup::bleeprUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprGroups/:id/bleeprUsers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers.updateById() instead.
            "::updateById::BleeprGroup::bleeprUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprGroups/:id/bleeprUsers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers.link() instead.
            "::link::BleeprGroup::bleeprUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprGroups/:id/bleeprUsers/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers.unlink() instead.
            "::unlink::BleeprGroup::bleeprUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprGroups/:id/bleeprUsers/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers.exists() instead.
            "::exists::BleeprGroup::bleeprUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprGroups/:id/bleeprUsers/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers() instead.
            "::get::BleeprGroup::bleeprUsers": {
              isArray: true,
              url: urlBase + "/bleeprGroups/:id/bleeprUsers",
              method: "GET",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers.create() instead.
            "::create::BleeprGroup::bleeprUsers": {
              url: urlBase + "/bleeprGroups/:id/bleeprUsers",
              method: "POST",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers.createMany() instead.
            "::createMany::BleeprGroup::bleeprUsers": {
              isArray: true,
              url: urlBase + "/bleeprGroups/:id/bleeprUsers",
              method: "POST",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers.destroyAll() instead.
            "::delete::BleeprGroup::bleeprUsers": {
              url: urlBase + "/bleeprGroups/:id/bleeprUsers",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers.count() instead.
            "::count::BleeprGroup::bleeprUsers": {
              url: urlBase + "/bleeprGroups/:id/bleeprUsers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#getCurrent
             * @methodOf lbServices.BleeprUser
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
              url: urlBase + "/bleeprUsers" + '/:id',
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
             * @name lbServices.BleeprUser#patchOrCreate
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#updateOrCreate
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#patchOrCreateWithWhere
             * @methodOf lbServices.BleeprUser
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#update
             * @methodOf lbServices.BleeprUser
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
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#destroyById
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#removeById
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#patchAttributes
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.BleeprUser#getCachedCurrent
         * @methodOf lbServices.BleeprUser
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.BleeprUser#login} or
         * {@link lbServices.BleeprUser#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A BleeprUser instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.BleeprUser#isAuthenticated
         * @methodOf lbServices.BleeprUser
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.BleeprUser#getCurrentId
         * @methodOf lbServices.BleeprUser
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.BleeprUser#modelName
        * @propertyOf lbServices.BleeprUser
        * @description
        * The name of the model represented by this $resource,
        * i.e. `BleeprUser`.
        */
        R.modelName = "BleeprUser";


            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#bleeprOrganisation
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Fetches belongsTo relation bleeprOrganisation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprOrganisation` object.)
             * </em>
             */
        R.bleeprOrganisation = function() {
          var TargetResource = $injector.get("BleeprOrganisation");
          var action = TargetResource["::get::BleeprUser::bleeprOrganisation"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.BleeprUser.bleeprGroups
     * @header lbServices.BleeprUser.bleeprGroups
     * @object
     * @description
     *
     * The object `BleeprUser.bleeprGroups` groups methods
     * manipulating `BleeprGroup` instances related to `BleeprUser`.
     *
     * Call {@link lbServices.BleeprUser#bleeprGroups BleeprUser.bleeprGroups()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#bleeprGroups
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Queries bleeprGroups of bleeprUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
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
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R.bleeprGroups = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::get::BleeprUser::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprGroups#count
             * @methodOf lbServices.BleeprUser.bleeprGroups
             *
             * @description
             *
             * Counts bleeprGroups of bleeprUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprGroups.count = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::count::BleeprUser::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprGroups#create
             * @methodOf lbServices.BleeprUser.bleeprGroups
             *
             * @description
             *
             * Creates a new instance in bleeprGroups of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R.bleeprGroups.create = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::create::BleeprUser::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprGroups#createMany
             * @methodOf lbServices.BleeprUser.bleeprGroups
             *
             * @description
             *
             * Creates a new instance in bleeprGroups of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
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
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R.bleeprGroups.createMany = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::createMany::BleeprUser::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprGroups#destroyAll
             * @methodOf lbServices.BleeprUser.bleeprGroups
             *
             * @description
             *
             * Deletes all bleeprGroups of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprGroups.destroyAll = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::delete::BleeprUser::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprGroups#destroyById
             * @methodOf lbServices.BleeprUser.bleeprGroups
             *
             * @description
             *
             * Delete a related item by id for bleeprGroups.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprGroups
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprGroups.destroyById = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::destroyById::BleeprUser::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprGroups#exists
             * @methodOf lbServices.BleeprUser.bleeprGroups
             *
             * @description
             *
             * Check the existence of bleeprGroups relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprGroups
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R.bleeprGroups.exists = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::exists::BleeprUser::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprGroups#findById
             * @methodOf lbServices.BleeprUser.bleeprGroups
             *
             * @description
             *
             * Find a related item by id for bleeprGroups.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprGroups
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R.bleeprGroups.findById = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::findById::BleeprUser::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprGroups#link
             * @methodOf lbServices.BleeprUser.bleeprGroups
             *
             * @description
             *
             * Add a related item by id for bleeprGroups.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprGroups
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R.bleeprGroups.link = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::link::BleeprUser::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprGroups#unlink
             * @methodOf lbServices.BleeprUser.bleeprGroups
             *
             * @description
             *
             * Remove the bleeprGroups relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprGroups
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprGroups.unlink = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::unlink::BleeprUser::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprGroups#updateById
             * @methodOf lbServices.BleeprUser.bleeprGroups
             *
             * @description
             *
             * Update a related item by id for bleeprGroups.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprGroups
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R.bleeprGroups.updateById = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::updateById::BleeprUser::bleeprGroups"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.BleeprUser.bleeprAlerts
     * @header lbServices.BleeprUser.bleeprAlerts
     * @object
     * @description
     *
     * The object `BleeprUser.bleeprAlerts` groups methods
     * manipulating `BleeprAlert` instances related to `BleeprUser`.
     *
     * Call {@link lbServices.BleeprUser#bleeprAlerts BleeprUser.bleeprAlerts()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.BleeprUser#bleeprAlerts
             * @methodOf lbServices.BleeprUser
             *
             * @description
             *
             * Queries bleeprAlerts of bleeprUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
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
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
        R.bleeprAlerts = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::get::BleeprUser::bleeprAlerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprAlerts#count
             * @methodOf lbServices.BleeprUser.bleeprAlerts
             *
             * @description
             *
             * Counts bleeprAlerts of bleeprUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprAlerts.count = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::count::BleeprUser::bleeprAlerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprAlerts#create
             * @methodOf lbServices.BleeprUser.bleeprAlerts
             *
             * @description
             *
             * Creates a new instance in bleeprAlerts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
        R.bleeprAlerts.create = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::create::BleeprUser::bleeprAlerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprAlerts#createMany
             * @methodOf lbServices.BleeprUser.bleeprAlerts
             *
             * @description
             *
             * Creates a new instance in bleeprAlerts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
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
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
        R.bleeprAlerts.createMany = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::createMany::BleeprUser::bleeprAlerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprAlerts#destroyAll
             * @methodOf lbServices.BleeprUser.bleeprAlerts
             *
             * @description
             *
             * Deletes all bleeprAlerts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprAlerts.destroyAll = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::delete::BleeprUser::bleeprAlerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprAlerts#destroyById
             * @methodOf lbServices.BleeprUser.bleeprAlerts
             *
             * @description
             *
             * Delete a related item by id for bleeprAlerts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprAlerts
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprAlerts.destroyById = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::destroyById::BleeprUser::bleeprAlerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprAlerts#exists
             * @methodOf lbServices.BleeprUser.bleeprAlerts
             *
             * @description
             *
             * Check the existence of bleeprAlerts relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprAlerts
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
        R.bleeprAlerts.exists = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::exists::BleeprUser::bleeprAlerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprAlerts#findById
             * @methodOf lbServices.BleeprUser.bleeprAlerts
             *
             * @description
             *
             * Find a related item by id for bleeprAlerts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprAlerts
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
        R.bleeprAlerts.findById = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::findById::BleeprUser::bleeprAlerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprAlerts#link
             * @methodOf lbServices.BleeprUser.bleeprAlerts
             *
             * @description
             *
             * Add a related item by id for bleeprAlerts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprAlerts
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
        R.bleeprAlerts.link = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::link::BleeprUser::bleeprAlerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprAlerts#unlink
             * @methodOf lbServices.BleeprUser.bleeprAlerts
             *
             * @description
             *
             * Remove the bleeprAlerts relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprAlerts
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprAlerts.unlink = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::unlink::BleeprUser::bleeprAlerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprUser.bleeprAlerts#updateById
             * @methodOf lbServices.BleeprUser.bleeprAlerts
             *
             * @description
             *
             * Update a related item by id for bleeprAlerts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprAlerts
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
        R.bleeprAlerts.updateById = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::updateById::BleeprUser::bleeprAlerts"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.BleeprOrganisation
 * @header lbServices.BleeprOrganisation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `BleeprOrganisation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "BleeprOrganisation",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/bleeprOrganisations/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use BleeprOrganisation.bleeprUsers.findById() instead.
            "prototype$__findById__bleeprUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprOrganisations/:id/bleeprUsers/:fk",
              method: "GET",
            },

            // INTERNAL. Use BleeprOrganisation.bleeprUsers.destroyById() instead.
            "prototype$__destroyById__bleeprUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprOrganisations/:id/bleeprUsers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprOrganisation.bleeprUsers.updateById() instead.
            "prototype$__updateById__bleeprUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprOrganisations/:id/bleeprUsers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprOrganisation.bleeprUsers() instead.
            "prototype$__get__bleeprUsers": {
              isArray: true,
              url: urlBase + "/bleeprOrganisations/:id/bleeprUsers",
              method: "GET",
            },

            // INTERNAL. Use BleeprOrganisation.bleeprUsers.create() instead.
            "prototype$__create__bleeprUsers": {
              url: urlBase + "/bleeprOrganisations/:id/bleeprUsers",
              method: "POST",
            },

            // INTERNAL. Use BleeprOrganisation.bleeprUsers.destroyAll() instead.
            "prototype$__delete__bleeprUsers": {
              url: urlBase + "/bleeprOrganisations/:id/bleeprUsers",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprOrganisation.bleeprUsers.count() instead.
            "prototype$__count__bleeprUsers": {
              url: urlBase + "/bleeprOrganisations/:id/bleeprUsers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#create
             * @methodOf lbServices.BleeprOrganisation
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprOrganisation` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/bleeprOrganisations",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#createMany
             * @methodOf lbServices.BleeprOrganisation
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
             * This method expects a subset of model properties as request parameters.
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
             * This usually means the response is a `BleeprOrganisation` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/bleeprOrganisations",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#upsert
             * @methodOf lbServices.BleeprOrganisation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprOrganisation` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/bleeprOrganisations",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#replaceOrCreate
             * @methodOf lbServices.BleeprOrganisation
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprOrganisation` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/bleeprOrganisations/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#upsertWithWhere
             * @methodOf lbServices.BleeprOrganisation
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprOrganisation` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/bleeprOrganisations/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#exists
             * @methodOf lbServices.BleeprOrganisation
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
              url: urlBase + "/bleeprOrganisations/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#findById
             * @methodOf lbServices.BleeprOrganisation
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprOrganisation` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/bleeprOrganisations/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#replaceById
             * @methodOf lbServices.BleeprOrganisation
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprOrganisation` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/bleeprOrganisations/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#find
             * @methodOf lbServices.BleeprOrganisation
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
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
             * This usually means the response is a `BleeprOrganisation` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/bleeprOrganisations",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#findOne
             * @methodOf lbServices.BleeprOrganisation
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprOrganisation` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/bleeprOrganisations/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#updateAll
             * @methodOf lbServices.BleeprOrganisation
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
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/bleeprOrganisations/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#deleteById
             * @methodOf lbServices.BleeprOrganisation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprOrganisation` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/bleeprOrganisations/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#count
             * @methodOf lbServices.BleeprOrganisation
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
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
              url: urlBase + "/bleeprOrganisations/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#prototype$updateAttributes
             * @methodOf lbServices.BleeprOrganisation
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprOrganisation` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/bleeprOrganisations/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#createChangeStream
             * @methodOf lbServices.BleeprOrganisation
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
              url: urlBase + "/bleeprOrganisations/change-stream",
              method: "POST",
            },

            // INTERNAL. Use BleeprUser.bleeprOrganisation() instead.
            "::get::BleeprUser::bleeprOrganisation": {
              url: urlBase + "/bleeprUsers/:id/bleeprOrganisation",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#patchOrCreate
             * @methodOf lbServices.BleeprOrganisation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprOrganisation` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#updateOrCreate
             * @methodOf lbServices.BleeprOrganisation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprOrganisation` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#patchOrCreateWithWhere
             * @methodOf lbServices.BleeprOrganisation
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprOrganisation` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#update
             * @methodOf lbServices.BleeprOrganisation
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
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#destroyById
             * @methodOf lbServices.BleeprOrganisation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprOrganisation` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#removeById
             * @methodOf lbServices.BleeprOrganisation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprOrganisation` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#patchAttributes
             * @methodOf lbServices.BleeprOrganisation
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprOrganisation` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.BleeprOrganisation#modelName
        * @propertyOf lbServices.BleeprOrganisation
        * @description
        * The name of the model represented by this $resource,
        * i.e. `BleeprOrganisation`.
        */
        R.modelName = "BleeprOrganisation";

    /**
     * @ngdoc object
     * @name lbServices.BleeprOrganisation.bleeprUsers
     * @header lbServices.BleeprOrganisation.bleeprUsers
     * @object
     * @description
     *
     * The object `BleeprOrganisation.bleeprUsers` groups methods
     * manipulating `BleeprUser` instances related to `BleeprOrganisation`.
     *
     * Call {@link lbServices.BleeprOrganisation#bleeprUsers BleeprOrganisation.bleeprUsers()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation#bleeprUsers
             * @methodOf lbServices.BleeprOrganisation
             *
             * @description
             *
             * Queries bleeprUsers of bleeprOrganisation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
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
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
        R.bleeprUsers = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::get::BleeprOrganisation::bleeprUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation.bleeprUsers#count
             * @methodOf lbServices.BleeprOrganisation.bleeprUsers
             *
             * @description
             *
             * Counts bleeprUsers of bleeprOrganisation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprUsers.count = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::count::BleeprOrganisation::bleeprUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation.bleeprUsers#create
             * @methodOf lbServices.BleeprOrganisation.bleeprUsers
             *
             * @description
             *
             * Creates a new instance in bleeprUsers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
        R.bleeprUsers.create = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::create::BleeprOrganisation::bleeprUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation.bleeprUsers#createMany
             * @methodOf lbServices.BleeprOrganisation.bleeprUsers
             *
             * @description
             *
             * Creates a new instance in bleeprUsers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
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
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
        R.bleeprUsers.createMany = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::createMany::BleeprOrganisation::bleeprUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation.bleeprUsers#destroyAll
             * @methodOf lbServices.BleeprOrganisation.bleeprUsers
             *
             * @description
             *
             * Deletes all bleeprUsers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprUsers.destroyAll = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::delete::BleeprOrganisation::bleeprUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation.bleeprUsers#destroyById
             * @methodOf lbServices.BleeprOrganisation.bleeprUsers
             *
             * @description
             *
             * Delete a related item by id for bleeprUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprUsers
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprUsers.destroyById = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::destroyById::BleeprOrganisation::bleeprUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation.bleeprUsers#findById
             * @methodOf lbServices.BleeprOrganisation.bleeprUsers
             *
             * @description
             *
             * Find a related item by id for bleeprUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprUsers
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
        R.bleeprUsers.findById = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::findById::BleeprOrganisation::bleeprUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprOrganisation.bleeprUsers#updateById
             * @methodOf lbServices.BleeprOrganisation.bleeprUsers
             *
             * @description
             *
             * Update a related item by id for bleeprUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprUsers
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
        R.bleeprUsers.updateById = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::updateById::BleeprOrganisation::bleeprUsers"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.BleeprGroup
 * @header lbServices.BleeprGroup
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `BleeprGroup` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "BleeprGroup",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/bleeprGroups/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use BleeprGroup.bleeprUsers.findById() instead.
            "prototype$__findById__bleeprUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprGroups/:id/bleeprUsers/:fk",
              method: "GET",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers.destroyById() instead.
            "prototype$__destroyById__bleeprUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprGroups/:id/bleeprUsers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers.updateById() instead.
            "prototype$__updateById__bleeprUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprGroups/:id/bleeprUsers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers.link() instead.
            "prototype$__link__bleeprUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprGroups/:id/bleeprUsers/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers.unlink() instead.
            "prototype$__unlink__bleeprUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprGroups/:id/bleeprUsers/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers.exists() instead.
            "prototype$__exists__bleeprUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprGroups/:id/bleeprUsers/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use BleeprGroup.bleeprAlerts.findById() instead.
            "prototype$__findById__bleeprAlerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprGroups/:id/bleeprAlerts/:fk",
              method: "GET",
            },

            // INTERNAL. Use BleeprGroup.bleeprAlerts.destroyById() instead.
            "prototype$__destroyById__bleeprAlerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprGroups/:id/bleeprAlerts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprGroup.bleeprAlerts.updateById() instead.
            "prototype$__updateById__bleeprAlerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprGroups/:id/bleeprAlerts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers() instead.
            "prototype$__get__bleeprUsers": {
              isArray: true,
              url: urlBase + "/bleeprGroups/:id/bleeprUsers",
              method: "GET",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers.create() instead.
            "prototype$__create__bleeprUsers": {
              url: urlBase + "/bleeprGroups/:id/bleeprUsers",
              method: "POST",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers.destroyAll() instead.
            "prototype$__delete__bleeprUsers": {
              url: urlBase + "/bleeprGroups/:id/bleeprUsers",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprGroup.bleeprUsers.count() instead.
            "prototype$__count__bleeprUsers": {
              url: urlBase + "/bleeprGroups/:id/bleeprUsers/count",
              method: "GET",
            },

            // INTERNAL. Use BleeprGroup.bleeprAlerts() instead.
            "prototype$__get__bleeprAlerts": {
              isArray: true,
              url: urlBase + "/bleeprGroups/:id/bleeprAlerts",
              method: "GET",
            },

            // INTERNAL. Use BleeprGroup.bleeprAlerts.create() instead.
            "prototype$__create__bleeprAlerts": {
              url: urlBase + "/bleeprGroups/:id/bleeprAlerts",
              method: "POST",
            },

            // INTERNAL. Use BleeprGroup.bleeprAlerts.destroyAll() instead.
            "prototype$__delete__bleeprAlerts": {
              url: urlBase + "/bleeprGroups/:id/bleeprAlerts",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprGroup.bleeprAlerts.count() instead.
            "prototype$__count__bleeprAlerts": {
              url: urlBase + "/bleeprGroups/:id/bleeprAlerts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#create
             * @methodOf lbServices.BleeprGroup
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/bleeprGroups",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#createMany
             * @methodOf lbServices.BleeprGroup
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
             * This method expects a subset of model properties as request parameters.
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
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/bleeprGroups",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#upsert
             * @methodOf lbServices.BleeprGroup
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/bleeprGroups",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#replaceOrCreate
             * @methodOf lbServices.BleeprGroup
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/bleeprGroups/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#upsertWithWhere
             * @methodOf lbServices.BleeprGroup
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/bleeprGroups/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#exists
             * @methodOf lbServices.BleeprGroup
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
              url: urlBase + "/bleeprGroups/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#findById
             * @methodOf lbServices.BleeprGroup
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/bleeprGroups/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#replaceById
             * @methodOf lbServices.BleeprGroup
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/bleeprGroups/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#find
             * @methodOf lbServices.BleeprGroup
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
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
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/bleeprGroups",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#findOne
             * @methodOf lbServices.BleeprGroup
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/bleeprGroups/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#updateAll
             * @methodOf lbServices.BleeprGroup
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
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/bleeprGroups/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#deleteById
             * @methodOf lbServices.BleeprGroup
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/bleeprGroups/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#count
             * @methodOf lbServices.BleeprGroup
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
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
              url: urlBase + "/bleeprGroups/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#prototype$updateAttributes
             * @methodOf lbServices.BleeprGroup
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/bleeprGroups/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#createChangeStream
             * @methodOf lbServices.BleeprGroup
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
              url: urlBase + "/bleeprGroups/change-stream",
              method: "POST",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.findById() instead.
            "::findById::BleeprUser::bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprGroups/:fk",
              method: "GET",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.destroyById() instead.
            "::destroyById::BleeprUser::bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprGroups/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.updateById() instead.
            "::updateById::BleeprUser::bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprGroups/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.link() instead.
            "::link::BleeprUser::bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprGroups/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.unlink() instead.
            "::unlink::BleeprUser::bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprGroups/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.exists() instead.
            "::exists::BleeprUser::bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprGroups/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups() instead.
            "::get::BleeprUser::bleeprGroups": {
              isArray: true,
              url: urlBase + "/bleeprUsers/:id/bleeprGroups",
              method: "GET",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.create() instead.
            "::create::BleeprUser::bleeprGroups": {
              url: urlBase + "/bleeprUsers/:id/bleeprGroups",
              method: "POST",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.createMany() instead.
            "::createMany::BleeprUser::bleeprGroups": {
              isArray: true,
              url: urlBase + "/bleeprUsers/:id/bleeprGroups",
              method: "POST",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.destroyAll() instead.
            "::delete::BleeprUser::bleeprGroups": {
              url: urlBase + "/bleeprUsers/:id/bleeprGroups",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprUser.bleeprGroups.count() instead.
            "::count::BleeprUser::bleeprGroups": {
              url: urlBase + "/bleeprUsers/:id/bleeprGroups/count",
              method: "GET",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups.findById() instead.
            "::findById::BleeprAlert::bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups/:fk",
              method: "GET",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups.destroyById() instead.
            "::destroyById::BleeprAlert::bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups.updateById() instead.
            "::updateById::BleeprAlert::bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups.link() instead.
            "::link::BleeprAlert::bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups.unlink() instead.
            "::unlink::BleeprAlert::bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups.exists() instead.
            "::exists::BleeprAlert::bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups() instead.
            "::get::BleeprAlert::bleeprGroups": {
              isArray: true,
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups",
              method: "GET",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups.create() instead.
            "::create::BleeprAlert::bleeprGroups": {
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups",
              method: "POST",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups.createMany() instead.
            "::createMany::BleeprAlert::bleeprGroups": {
              isArray: true,
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups",
              method: "POST",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups.destroyAll() instead.
            "::delete::BleeprAlert::bleeprGroups": {
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups.count() instead.
            "::count::BleeprAlert::bleeprGroups": {
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#patchOrCreate
             * @methodOf lbServices.BleeprGroup
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#updateOrCreate
             * @methodOf lbServices.BleeprGroup
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#patchOrCreateWithWhere
             * @methodOf lbServices.BleeprGroup
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#update
             * @methodOf lbServices.BleeprGroup
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
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#destroyById
             * @methodOf lbServices.BleeprGroup
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#removeById
             * @methodOf lbServices.BleeprGroup
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#patchAttributes
             * @methodOf lbServices.BleeprGroup
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.BleeprGroup#modelName
        * @propertyOf lbServices.BleeprGroup
        * @description
        * The name of the model represented by this $resource,
        * i.e. `BleeprGroup`.
        */
        R.modelName = "BleeprGroup";

    /**
     * @ngdoc object
     * @name lbServices.BleeprGroup.bleeprUsers
     * @header lbServices.BleeprGroup.bleeprUsers
     * @object
     * @description
     *
     * The object `BleeprGroup.bleeprUsers` groups methods
     * manipulating `BleeprUser` instances related to `BleeprGroup`.
     *
     * Call {@link lbServices.BleeprGroup#bleeprUsers BleeprGroup.bleeprUsers()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#bleeprUsers
             * @methodOf lbServices.BleeprGroup
             *
             * @description
             *
             * Queries bleeprUsers of bleeprGroup.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
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
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
        R.bleeprUsers = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::get::BleeprGroup::bleeprUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup.bleeprUsers#count
             * @methodOf lbServices.BleeprGroup.bleeprUsers
             *
             * @description
             *
             * Counts bleeprUsers of bleeprGroup.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprUsers.count = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::count::BleeprGroup::bleeprUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup.bleeprUsers#create
             * @methodOf lbServices.BleeprGroup.bleeprUsers
             *
             * @description
             *
             * Creates a new instance in bleeprUsers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
        R.bleeprUsers.create = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::create::BleeprGroup::bleeprUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup.bleeprUsers#createMany
             * @methodOf lbServices.BleeprGroup.bleeprUsers
             *
             * @description
             *
             * Creates a new instance in bleeprUsers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
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
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
        R.bleeprUsers.createMany = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::createMany::BleeprGroup::bleeprUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup.bleeprUsers#destroyAll
             * @methodOf lbServices.BleeprGroup.bleeprUsers
             *
             * @description
             *
             * Deletes all bleeprUsers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprUsers.destroyAll = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::delete::BleeprGroup::bleeprUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup.bleeprUsers#destroyById
             * @methodOf lbServices.BleeprGroup.bleeprUsers
             *
             * @description
             *
             * Delete a related item by id for bleeprUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprUsers
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprUsers.destroyById = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::destroyById::BleeprGroup::bleeprUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup.bleeprUsers#exists
             * @methodOf lbServices.BleeprGroup.bleeprUsers
             *
             * @description
             *
             * Check the existence of bleeprUsers relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprUsers
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
        R.bleeprUsers.exists = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::exists::BleeprGroup::bleeprUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup.bleeprUsers#findById
             * @methodOf lbServices.BleeprGroup.bleeprUsers
             *
             * @description
             *
             * Find a related item by id for bleeprUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprUsers
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
        R.bleeprUsers.findById = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::findById::BleeprGroup::bleeprUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup.bleeprUsers#link
             * @methodOf lbServices.BleeprGroup.bleeprUsers
             *
             * @description
             *
             * Add a related item by id for bleeprUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprUsers
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
        R.bleeprUsers.link = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::link::BleeprGroup::bleeprUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup.bleeprUsers#unlink
             * @methodOf lbServices.BleeprGroup.bleeprUsers
             *
             * @description
             *
             * Remove the bleeprUsers relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprUsers
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprUsers.unlink = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::unlink::BleeprGroup::bleeprUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup.bleeprUsers#updateById
             * @methodOf lbServices.BleeprGroup.bleeprUsers
             *
             * @description
             *
             * Update a related item by id for bleeprUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprUsers
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprUser` object.)
             * </em>
             */
        R.bleeprUsers.updateById = function() {
          var TargetResource = $injector.get("BleeprUser");
          var action = TargetResource["::updateById::BleeprGroup::bleeprUsers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.BleeprGroup.bleeprAlerts
     * @header lbServices.BleeprGroup.bleeprAlerts
     * @object
     * @description
     *
     * The object `BleeprGroup.bleeprAlerts` groups methods
     * manipulating `BleeprAlert` instances related to `BleeprGroup`.
     *
     * Call {@link lbServices.BleeprGroup#bleeprAlerts BleeprGroup.bleeprAlerts()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup#bleeprAlerts
             * @methodOf lbServices.BleeprGroup
             *
             * @description
             *
             * Queries bleeprAlerts of bleeprGroup.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
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
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
        R.bleeprAlerts = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::get::BleeprGroup::bleeprAlerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup.bleeprAlerts#count
             * @methodOf lbServices.BleeprGroup.bleeprAlerts
             *
             * @description
             *
             * Counts bleeprAlerts of bleeprGroup.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprAlerts.count = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::count::BleeprGroup::bleeprAlerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup.bleeprAlerts#create
             * @methodOf lbServices.BleeprGroup.bleeprAlerts
             *
             * @description
             *
             * Creates a new instance in bleeprAlerts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
        R.bleeprAlerts.create = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::create::BleeprGroup::bleeprAlerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup.bleeprAlerts#createMany
             * @methodOf lbServices.BleeprGroup.bleeprAlerts
             *
             * @description
             *
             * Creates a new instance in bleeprAlerts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
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
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
        R.bleeprAlerts.createMany = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::createMany::BleeprGroup::bleeprAlerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup.bleeprAlerts#destroyAll
             * @methodOf lbServices.BleeprGroup.bleeprAlerts
             *
             * @description
             *
             * Deletes all bleeprAlerts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprAlerts.destroyAll = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::delete::BleeprGroup::bleeprAlerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup.bleeprAlerts#destroyById
             * @methodOf lbServices.BleeprGroup.bleeprAlerts
             *
             * @description
             *
             * Delete a related item by id for bleeprAlerts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprAlerts
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprAlerts.destroyById = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::destroyById::BleeprGroup::bleeprAlerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup.bleeprAlerts#findById
             * @methodOf lbServices.BleeprGroup.bleeprAlerts
             *
             * @description
             *
             * Find a related item by id for bleeprAlerts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprAlerts
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
        R.bleeprAlerts.findById = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::findById::BleeprGroup::bleeprAlerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprGroup.bleeprAlerts#updateById
             * @methodOf lbServices.BleeprGroup.bleeprAlerts
             *
             * @description
             *
             * Update a related item by id for bleeprAlerts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprAlerts
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
        R.bleeprAlerts.updateById = function() {
          var TargetResource = $injector.get("BleeprAlert");
          var action = TargetResource["::updateById::BleeprGroup::bleeprAlerts"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.BleeprAlert
 * @header lbServices.BleeprAlert
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `BleeprAlert` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "BleeprAlert",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/bleeprAlerts/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use BleeprAlert.bleeprGroups.findById() instead.
            "prototype$__findById__bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups/:fk",
              method: "GET",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups.destroyById() instead.
            "prototype$__destroyById__bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups.updateById() instead.
            "prototype$__updateById__bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups.link() instead.
            "prototype$__link__bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups.unlink() instead.
            "prototype$__unlink__bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups.exists() instead.
            "prototype$__exists__bleeprGroups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups() instead.
            "prototype$__get__bleeprGroups": {
              isArray: true,
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups",
              method: "GET",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups.create() instead.
            "prototype$__create__bleeprGroups": {
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups",
              method: "POST",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups.destroyAll() instead.
            "prototype$__delete__bleeprGroups": {
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprAlert.bleeprGroups.count() instead.
            "prototype$__count__bleeprGroups": {
              url: urlBase + "/bleeprAlerts/:id/bleeprGroups/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#create
             * @methodOf lbServices.BleeprAlert
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/bleeprAlerts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#createMany
             * @methodOf lbServices.BleeprAlert
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
             * This method expects a subset of model properties as request parameters.
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
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/bleeprAlerts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#upsert
             * @methodOf lbServices.BleeprAlert
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/bleeprAlerts",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#replaceOrCreate
             * @methodOf lbServices.BleeprAlert
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/bleeprAlerts/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#upsertWithWhere
             * @methodOf lbServices.BleeprAlert
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/bleeprAlerts/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#exists
             * @methodOf lbServices.BleeprAlert
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
              url: urlBase + "/bleeprAlerts/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#findById
             * @methodOf lbServices.BleeprAlert
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/bleeprAlerts/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#replaceById
             * @methodOf lbServices.BleeprAlert
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/bleeprAlerts/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#find
             * @methodOf lbServices.BleeprAlert
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
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
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/bleeprAlerts",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#findOne
             * @methodOf lbServices.BleeprAlert
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/bleeprAlerts/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#updateAll
             * @methodOf lbServices.BleeprAlert
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
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/bleeprAlerts/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#deleteById
             * @methodOf lbServices.BleeprAlert
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/bleeprAlerts/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#count
             * @methodOf lbServices.BleeprAlert
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
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
              url: urlBase + "/bleeprAlerts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#prototype$updateAttributes
             * @methodOf lbServices.BleeprAlert
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/bleeprAlerts/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#createChangeStream
             * @methodOf lbServices.BleeprAlert
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
              url: urlBase + "/bleeprAlerts/change-stream",
              method: "POST",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.findById() instead.
            "::findById::BleeprUser::bleeprAlerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts/:fk",
              method: "GET",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.destroyById() instead.
            "::destroyById::BleeprUser::bleeprAlerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.updateById() instead.
            "::updateById::BleeprUser::bleeprAlerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.link() instead.
            "::link::BleeprUser::bleeprAlerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.unlink() instead.
            "::unlink::BleeprUser::bleeprAlerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.exists() instead.
            "::exists::BleeprUser::bleeprAlerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts() instead.
            "::get::BleeprUser::bleeprAlerts": {
              isArray: true,
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts",
              method: "GET",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.create() instead.
            "::create::BleeprUser::bleeprAlerts": {
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts",
              method: "POST",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.createMany() instead.
            "::createMany::BleeprUser::bleeprAlerts": {
              isArray: true,
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts",
              method: "POST",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.destroyAll() instead.
            "::delete::BleeprUser::bleeprAlerts": {
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprUser.bleeprAlerts.count() instead.
            "::count::BleeprUser::bleeprAlerts": {
              url: urlBase + "/bleeprUsers/:id/bleeprAlerts/count",
              method: "GET",
            },

            // INTERNAL. Use BleeprGroup.bleeprAlerts.findById() instead.
            "::findById::BleeprGroup::bleeprAlerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprGroups/:id/bleeprAlerts/:fk",
              method: "GET",
            },

            // INTERNAL. Use BleeprGroup.bleeprAlerts.destroyById() instead.
            "::destroyById::BleeprGroup::bleeprAlerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprGroups/:id/bleeprAlerts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprGroup.bleeprAlerts.updateById() instead.
            "::updateById::BleeprGroup::bleeprAlerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/bleeprGroups/:id/bleeprAlerts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BleeprGroup.bleeprAlerts() instead.
            "::get::BleeprGroup::bleeprAlerts": {
              isArray: true,
              url: urlBase + "/bleeprGroups/:id/bleeprAlerts",
              method: "GET",
            },

            // INTERNAL. Use BleeprGroup.bleeprAlerts.create() instead.
            "::create::BleeprGroup::bleeprAlerts": {
              url: urlBase + "/bleeprGroups/:id/bleeprAlerts",
              method: "POST",
            },

            // INTERNAL. Use BleeprGroup.bleeprAlerts.createMany() instead.
            "::createMany::BleeprGroup::bleeprAlerts": {
              isArray: true,
              url: urlBase + "/bleeprGroups/:id/bleeprAlerts",
              method: "POST",
            },

            // INTERNAL. Use BleeprGroup.bleeprAlerts.destroyAll() instead.
            "::delete::BleeprGroup::bleeprAlerts": {
              url: urlBase + "/bleeprGroups/:id/bleeprAlerts",
              method: "DELETE",
            },

            // INTERNAL. Use BleeprGroup.bleeprAlerts.count() instead.
            "::count::BleeprGroup::bleeprAlerts": {
              url: urlBase + "/bleeprGroups/:id/bleeprAlerts/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#patchOrCreate
             * @methodOf lbServices.BleeprAlert
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#updateOrCreate
             * @methodOf lbServices.BleeprAlert
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#patchOrCreateWithWhere
             * @methodOf lbServices.BleeprAlert
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#update
             * @methodOf lbServices.BleeprAlert
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
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#destroyById
             * @methodOf lbServices.BleeprAlert
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#removeById
             * @methodOf lbServices.BleeprAlert
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#patchAttributes
             * @methodOf lbServices.BleeprAlert
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprAlert` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.BleeprAlert#modelName
        * @propertyOf lbServices.BleeprAlert
        * @description
        * The name of the model represented by this $resource,
        * i.e. `BleeprAlert`.
        */
        R.modelName = "BleeprAlert";

    /**
     * @ngdoc object
     * @name lbServices.BleeprAlert.bleeprGroups
     * @header lbServices.BleeprAlert.bleeprGroups
     * @object
     * @description
     *
     * The object `BleeprAlert.bleeprGroups` groups methods
     * manipulating `BleeprGroup` instances related to `BleeprAlert`.
     *
     * Call {@link lbServices.BleeprAlert#bleeprGroups BleeprAlert.bleeprGroups()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert#bleeprGroups
             * @methodOf lbServices.BleeprAlert
             *
             * @description
             *
             * Queries bleeprGroups of bleeprAlert.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
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
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R.bleeprGroups = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::get::BleeprAlert::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert.bleeprGroups#count
             * @methodOf lbServices.BleeprAlert.bleeprGroups
             *
             * @description
             *
             * Counts bleeprGroups of bleeprAlert.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprGroups.count = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::count::BleeprAlert::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert.bleeprGroups#create
             * @methodOf lbServices.BleeprAlert.bleeprGroups
             *
             * @description
             *
             * Creates a new instance in bleeprGroups of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R.bleeprGroups.create = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::create::BleeprAlert::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert.bleeprGroups#createMany
             * @methodOf lbServices.BleeprAlert.bleeprGroups
             *
             * @description
             *
             * Creates a new instance in bleeprGroups of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
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
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R.bleeprGroups.createMany = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::createMany::BleeprAlert::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert.bleeprGroups#destroyAll
             * @methodOf lbServices.BleeprAlert.bleeprGroups
             *
             * @description
             *
             * Deletes all bleeprGroups of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprGroups.destroyAll = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::delete::BleeprAlert::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert.bleeprGroups#destroyById
             * @methodOf lbServices.BleeprAlert.bleeprGroups
             *
             * @description
             *
             * Delete a related item by id for bleeprGroups.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprGroups
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprGroups.destroyById = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::destroyById::BleeprAlert::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert.bleeprGroups#exists
             * @methodOf lbServices.BleeprAlert.bleeprGroups
             *
             * @description
             *
             * Check the existence of bleeprGroups relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprGroups
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R.bleeprGroups.exists = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::exists::BleeprAlert::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert.bleeprGroups#findById
             * @methodOf lbServices.BleeprAlert.bleeprGroups
             *
             * @description
             *
             * Find a related item by id for bleeprGroups.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprGroups
             *
             * @param {function(Object,Object)=} successCb
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
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R.bleeprGroups.findById = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::findById::BleeprAlert::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert.bleeprGroups#link
             * @methodOf lbServices.BleeprAlert.bleeprGroups
             *
             * @description
             *
             * Add a related item by id for bleeprGroups.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprGroups
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R.bleeprGroups.link = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::link::BleeprAlert::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert.bleeprGroups#unlink
             * @methodOf lbServices.BleeprAlert.bleeprGroups
             *
             * @description
             *
             * Remove the bleeprGroups relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprGroups
             *
             * @param {function(Object,Object)=} successCb
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
        R.bleeprGroups.unlink = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::unlink::BleeprAlert::bleeprGroups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BleeprAlert.bleeprGroups#updateById
             * @methodOf lbServices.BleeprAlert.bleeprGroups
             *
             * @description
             *
             * Update a related item by id for bleeprGroups.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bleeprGroups
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BleeprGroup` object.)
             * </em>
             */
        R.bleeprGroups.updateById = function() {
          var TargetResource = $injector.get("BleeprGroup");
          var action = TargetResource["::updateById::BleeprAlert::bleeprGroups"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
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
          if (host && host !== urlBaseHost) {
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
