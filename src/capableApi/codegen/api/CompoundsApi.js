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

/**
 * Compounds service.
 * @module api/CompoundsApi
 * @version v0.3
 */
export class CompoundsApi {
  /**
    * Constructs a new CompoundsApi. 
    * @alias module:api/CompoundsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the mdiCompoundsGet operation.
   * @callback moduleapi/CompoundsApi~mdiCompoundsGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieve Compounds
   * &lt;h3&gt;   &amp;#128275; Access policy &lt;/h3&gt; &lt;p&gt;You can access this endpoint with the following token types:&lt;/p&gt; &lt;p&gt;&amp;#9989; M2M&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;#9989; Patient&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;#9989; Practitioner&lt;/p&gt; &lt;hr/&gt;&lt;p&gt;   MDI API compounds index wrapper. &lt;/p&gt;
   * @param {module:api/CompoundsApi~mdiCompoundsGetCallback} callback The callback function, accepting three arguments: error, data, response
   */
  mdiCompoundsGet(callback) {
    let postBody = null;

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = null;

    return this.apiClient.callApi(
      "/mdi/compounds",
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
   * Callback function to receive the result of the mdiCompoundsSearchGet operation.
   * @callback moduleapi/CompoundsApi~mdiCompoundsSearchGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Search Compounds
   * &lt;h3&gt;   &amp;#128275; Access policy &lt;/h3&gt; &lt;p&gt;You can access this endpoint with the following token types:&lt;/p&gt; &lt;p&gt;&amp;#9989; M2M&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;#9989; Patient&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;#9989; Practitioner&lt;/p&gt; &lt;hr/&gt;&lt;p&gt;   MDI API compounds search wrapper. It uses the exact same inputs. &lt;/p&gt;
   * @param {String} name
   * @param {module:api/CompoundsApi~mdiCompoundsSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
   */
  mdiCompoundsSearchGet(name, callback) {
    let postBody = null;
    // verify the required parameter 'name' is set
    if (name === undefined || name === null) {
      throw new Error("Missing the required parameter 'name' when calling mdiCompoundsSearchGet");
    }

    let pathParams = {};
    let queryParams = {
      name: name,
    };
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = null;

    return this.apiClient.callApi(
      "/mdi/compounds/search",
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
}
