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
 * The IntegrationsimawareImawareIntegration model module.
 * @module model/IntegrationsimawareImawareIntegration
 * @version v0.3
 */
export class IntegrationsimawareImawareIntegration {
  /**
   * Constructs a new <code>IntegrationsimawareImawareIntegration</code>.
   * @alias module:model/IntegrationsimawareImawareIntegration
   * @class
   * @param credentialsClientId {String}
   * @param credentialsClientSecret {String}
   * @param apiUrl {String}
   * @param tokenScope {String}
   */
  constructor(credentialsClientId, credentialsClientSecret, apiUrl, tokenScope) {
    this.credentialsClientId = credentialsClientId;
    this.credentialsClientSecret = credentialsClientSecret;
    this.apiUrl = apiUrl;
    this.tokenScope = tokenScope;
  }

  /**
   * Constructs a <code>IntegrationsimawareImawareIntegration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntegrationsimawareImawareIntegration} obj Optional instance to populate.
   * @return {module:model/IntegrationsimawareImawareIntegration} The populated <code>IntegrationsimawareImawareIntegration</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IntegrationsimawareImawareIntegration();
      if (data.hasOwnProperty("credentials_client_id"))
        obj.credentialsClientId = ApiClient.convertToType(data["credentials_client_id"], "String");
      if (data.hasOwnProperty("credentials_client_secret"))
        obj.credentialsClientSecret = ApiClient.convertToType(
          data["credentials_client_secret"],
          "String"
        );
      if (data.hasOwnProperty("api_url"))
        obj.apiUrl = ApiClient.convertToType(data["api_url"], "String");
      if (data.hasOwnProperty("token_scope"))
        obj.tokenScope = ApiClient.convertToType(data["token_scope"], "String");
      if (data.hasOwnProperty("enabled"))
        obj.enabled = ApiClient.convertToType(data["enabled"], "Boolean");
    }
    return obj;
  }
}

/**
 * @member {String} credentialsClientId
 */
IntegrationsimawareImawareIntegration.prototype.credentialsClientId = undefined;

/**
 * @member {String} credentialsClientSecret
 */
IntegrationsimawareImawareIntegration.prototype.credentialsClientSecret = undefined;

/**
 * @member {String} apiUrl
 */
IntegrationsimawareImawareIntegration.prototype.apiUrl = undefined;

/**
 * @member {String} tokenScope
 */
IntegrationsimawareImawareIntegration.prototype.tokenScope = undefined;

/**
 * @member {Boolean} enabled
 * @default true
 */
IntegrationsimawareImawareIntegration.prototype.enabled = true;
