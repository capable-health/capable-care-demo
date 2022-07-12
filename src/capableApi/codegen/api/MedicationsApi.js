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
 * Medications service.
 * @module api/MedicationsApi
 * @version v0.3
 */
export class MedicationsApi {
  /**
    * Constructs a new MedicationsApi. 
    * @alias module:api/MedicationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the mdiMedicationsGet operation.
   * @callback moduleapi/MedicationsApi~mdiMedicationsGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieve Medications
   * &lt;h3&gt;   &amp;#128275; Access policy &lt;/h3&gt; &lt;p&gt;You can access this endpoint with the following token types:&lt;/p&gt; &lt;p&gt;&amp;#9989; M2M&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;#9989; Patient&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;#9989; Practitioner&lt;/p&gt;
   * @param {module:api/MedicationsApi~mdiMedicationsGetCallback} callback The callback function, accepting three arguments: error, data, response
   */
  mdiMedicationsGet(callback) {
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
      "/mdi/medications",
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
   * Callback function to receive the result of the mdiMedicationsSearchGet operation.
   * @callback moduleapi/MedicationsApi~mdiMedicationsSearchGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Search Medications
   * &lt;h3&gt;   &amp;#128275; Access policy &lt;/h3&gt; &lt;p&gt;You can access this endpoint with the following token types:&lt;/p&gt; &lt;p&gt;&amp;#9989; M2M&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;#9989; Patient&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;#9989; Practitioner&lt;/p&gt; &lt;hr/&gt;&lt;p&gt;   MDI API medications search wrapper. It uses the exact same inputs. &lt;/p&gt;
   * @param {String} name
   * @param {module:api/MedicationsApi~mdiMedicationsSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
   */
  mdiMedicationsSearchGet(name, callback) {
    let postBody = null;
    // verify the required parameter 'name' is set
    if (name === undefined || name === null) {
      throw new Error("Missing the required parameter 'name' when calling mdiMedicationsSearchGet");
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
      "/mdi/medications/search",
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
   * Callback function to receive the result of the mdiMedicationsSelectGet operation.
   * @callback moduleapi/MedicationsApi~mdiMedicationsSelectGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieve a Medication
   * &lt;h3&gt;   &amp;#128275; Access policy &lt;/h3&gt; &lt;p&gt;You can access this endpoint with the following token types:&lt;/p&gt; &lt;p&gt;&amp;#9989; M2M&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;#9989; Patient&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;#9989; Practitioner&lt;/p&gt; &lt;hr/&gt;&lt;p&gt;   MDI API medications select wrapper. It uses the exact same inputs. &lt;/p&gt;
   * @param {String} name
   * @param {String} strength
   * @param {module:api/MedicationsApi~mdiMedicationsSelectGetCallback} callback The callback function, accepting three arguments: error, data, response
   */
  mdiMedicationsSelectGet(name, strength, callback) {
    let postBody = null;
    // verify the required parameter 'name' is set
    if (name === undefined || name === null) {
      throw new Error("Missing the required parameter 'name' when calling mdiMedicationsSelectGet");
    }
    // verify the required parameter 'strength' is set
    if (strength === undefined || strength === null) {
      throw new Error(
        "Missing the required parameter 'strength' when calling mdiMedicationsSelectGet"
      );
    }

    let pathParams = {};
    let queryParams = {
      name: name,
      strength: strength,
    };
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = null;

    return this.apiClient.callApi(
      "/mdi/medications/select",
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
