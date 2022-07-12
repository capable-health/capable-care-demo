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
 * The IntegrationsacuityAcuityIntegration model module.
 * @module model/IntegrationsacuityAcuityIntegration
 * @version v0.3
 */
export class IntegrationsacuityAcuityIntegration {
  /**
   * Constructs a new <code>IntegrationsacuityAcuityIntegration</code>.
   * @alias module:model/IntegrationsacuityAcuityIntegration
   * @class
   * @param credentialsClientId {String}
   * @param credentialsClientSecret {String}
   */
  constructor(credentialsClientId, credentialsClientSecret) {
    this.credentialsClientId = credentialsClientId;
    this.credentialsClientSecret = credentialsClientSecret;
  }

  /**
   * Constructs a <code>IntegrationsacuityAcuityIntegration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntegrationsacuityAcuityIntegration} obj Optional instance to populate.
   * @return {module:model/IntegrationsacuityAcuityIntegration} The populated <code>IntegrationsacuityAcuityIntegration</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IntegrationsacuityAcuityIntegration();
      if (data.hasOwnProperty("credentials_client_id"))
        obj.credentialsClientId = ApiClient.convertToType(data["credentials_client_id"], "String");
      if (data.hasOwnProperty("credentials_client_secret"))
        obj.credentialsClientSecret = ApiClient.convertToType(
          data["credentials_client_secret"],
          "String"
        );
      if (data.hasOwnProperty("enabled"))
        obj.enabled = ApiClient.convertToType(data["enabled"], "Boolean");
    }
    return obj;
  }
}

/**
 * @member {String} credentialsClientId
 */
IntegrationsacuityAcuityIntegration.prototype.credentialsClientId = undefined;

/**
 * @member {String} credentialsClientSecret
 */
IntegrationsacuityAcuityIntegration.prototype.credentialsClientSecret = undefined;

/**
 * @member {Boolean} enabled
 * @default true
 */
IntegrationsacuityAcuityIntegration.prototype.enabled = true;