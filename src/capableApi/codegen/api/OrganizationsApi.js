/*
 * Capable Health API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0.3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.33
 *
 * Do not edit the class manually.
 *
 */
import { ApiClient } from "../ApiClient";
import { OrganizationsBody } from "../model/OrganizationsBody";
import { OrganizationsIdBody } from "../model/OrganizationsIdBody";
import { OrganizationsidlogoOrganization } from "../model/OrganizationsidlogoOrganization";

/**
 * Organizations service.
 * @module api/OrganizationsApi
 * @version v0.3
 */
export class OrganizationsApi {
  /**
    * Constructs a new OrganizationsApi. 
    * @alias module:api/OrganizationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the organizationsGet operation.
   * @callback moduleapi/OrganizationsApi~organizationsGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * List all Organizations
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page Page number (default to <.>)
   * @param {Number} opts.size Page size (default to <.>)
   * @param {Array.<module:model/String>} opts.sortBy Sort results
   * @param {Array.<String>} opts.byId Filter by IDs
   * @param {module:api/OrganizationsApi~organizationsGetCallback} callback The callback function, accepting three arguments: error, data, response
   */
  organizationsGet(opts, callback) {
    opts = opts || {};
    let postBody = null;

    let pathParams = {};
    let queryParams = {
      page: opts["page"],
      size: opts["size"],
      sort_by: this.apiClient.buildCollectionParam(opts["sortBy"], "csv"),
      by_id: this.apiClient.buildCollectionParam(opts["byId"], "csv"),
    };
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = null;

    return this.apiClient.callApi(
      "/organizations",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    );
  }
  /**
   * Callback function to receive the result of the organizationsIdGet operation.
   * @callback moduleapi/OrganizationsApi~organizationsIdGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieve an Organization
   * &lt;h3&gt;   &amp;#128275; Access policy &lt;/h3&gt; &lt;p&gt;You can access this endpoint with the following token types:&lt;/p&gt; &lt;p&gt;&amp;#10060; &lt;s&gt;M2M&lt;/s&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;#10060; &lt;s&gt;Patient&lt;/s&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;#10060; &lt;s&gt;Practitioner&lt;/s&gt;&lt;/p&gt;
   * @param {String} id
   * @param {module:api/OrganizationsApi~organizationsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
   */
  organizationsIdGet(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling organizationsIdGet");
    }

    let pathParams = {
      id: id,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = null;

    return this.apiClient.callApi(
      "/organizations/{id}",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    );
  }
  /**
   * Callback function to receive the result of the organizationsIdLogoPatch operation.
   * @callback moduleapi/OrganizationsApi~organizationsIdLogoPatchCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Update an Organization&#x27;s logo
   * &lt;h3&gt;   &amp;#128275; Access policy &lt;/h3&gt; &lt;p&gt;You can access this endpoint with the following token types:&lt;/p&gt; &lt;p&gt;&amp;#9989; M2M&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;#10060; &lt;s&gt;Patient&lt;/s&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;#9989; Practitioner&lt;/p&gt;
   * @param {String} id
   * @param {Object} opts Optional parameters
   * @param {module:model/OrganizationsidlogoOrganization} opts.organization
   * @param {module:api/OrganizationsApi~organizationsIdLogoPatchCallback} callback The callback function, accepting three arguments: error, data, response
   */
  organizationsIdLogoPatch(id, opts, callback) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling organizationsIdLogoPatch");
    }

    let pathParams = {
      id: id,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {
      organization: opts["organization"],
    };

    let authNames = [];
    let contentTypes = ["multipart/form-data"];
    let accepts = ["application/json"];
    let returnType = null;

    return this.apiClient.callApi(
      "/organizations/{id}/logo",
      "PATCH",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    );
  }
  /**
   * Callback function to receive the result of the organizationsIdPatch operation.
   * @callback moduleapi/OrganizationsApi~organizationsIdPatchCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Update an Organization
   * @param {String} id
   * @param {Object} opts Optional parameters
   * @param {module:model/OrganizationsIdBody} opts.body
   * @param {module:api/OrganizationsApi~organizationsIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
   */
  organizationsIdPatch(id, opts, callback) {
    opts = opts || {};
    let postBody = opts["body"];
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling organizationsIdPatch");
    }

    let pathParams = {
      id: id,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = null;

    return this.apiClient.callApi(
      "/organizations/{id}",
      "PATCH",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    );
  }
  /**
   * Callback function to receive the result of the organizationsPost operation.
   * @callback moduleapi/OrganizationsApi~organizationsPostCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create an Organization
   * @param {Object} opts Optional parameters
   * @param {module:model/OrganizationsBody} opts.body
   * @param {module:api/OrganizationsApi~organizationsPostCallback} callback The callback function, accepting three arguments: error, data, response
   */
  organizationsPost(opts, callback) {
    opts = opts || {};
    let postBody = opts["body"];

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = null;

    return this.apiClient.callApi(
      "/organizations",
      "POST",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    );
  }
}