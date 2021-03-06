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
 * Payments service.
 * @module api/PaymentsApi
 * @version v0.3
 */
export class PaymentsApi {
  /**
    * Constructs a new PaymentsApi. 
    * @alias module:api/PaymentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the paymentsGet operation.
   * @callback moduleapi/PaymentsApi~paymentsGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Stripe Customer(Patient) Payments
   * &lt;h3&gt;   &amp;#128275; Access policy &lt;/h3&gt; &lt;p&gt;You can access this endpoint with the following token types:&lt;/p&gt; &lt;p&gt;&amp;#9989; M2M&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;#10060; &lt;s&gt;Patient&lt;/s&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;#9989; Practitioner&lt;/p&gt;
   * @param {Object} opts Optional parameters
   * @param {Number} opts.size Page size (default to <.>)
   * @param {String} opts.endingBefore Filter by records ending before this ID
   * @param {String} opts.startingAfter Filter by records starting after this ID
   * @param {module:api/PaymentsApi~paymentsGetCallback} callback The callback function, accepting three arguments: error, data, response
   */
  paymentsGet(opts, callback) {
    opts = opts || {};
    let postBody = null;

    let pathParams = {};
    let queryParams = {
      size: opts["size"],
      ending_before: opts["endingBefore"],
      starting_after: opts["startingAfter"],
    };
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = null;

    return this.apiClient.callApi(
      "/payments",
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
