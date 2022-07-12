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
 * The IntegrationsfreshpaintFreshpaintIntegration1 model module.
 * @module model/IntegrationsfreshpaintFreshpaintIntegration1
 * @version v0.3
 */
export class IntegrationsfreshpaintFreshpaintIntegration1 {
  /**
   * Constructs a new <code>IntegrationsfreshpaintFreshpaintIntegration1</code>.
   * @alias module:model/IntegrationsfreshpaintFreshpaintIntegration1
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>IntegrationsfreshpaintFreshpaintIntegration1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntegrationsfreshpaintFreshpaintIntegration1} obj Optional instance to populate.
   * @return {module:model/IntegrationsfreshpaintFreshpaintIntegration1} The populated <code>IntegrationsfreshpaintFreshpaintIntegration1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IntegrationsfreshpaintFreshpaintIntegration1();
      if (data.hasOwnProperty("credentials_client_token"))
        obj.credentialsClientToken = ApiClient.convertToType(
          data["credentials_client_token"],
          "String"
        );
      if (data.hasOwnProperty("enabled"))
        obj.enabled = ApiClient.convertToType(data["enabled"], "Boolean");
    }
    return obj;
  }
}

/**
 * @member {String} credentialsClientToken
 */
IntegrationsfreshpaintFreshpaintIntegration1.prototype.credentialsClientToken = undefined;

/**
 * @member {Boolean} enabled
 */
IntegrationsfreshpaintFreshpaintIntegration1.prototype.enabled = undefined;