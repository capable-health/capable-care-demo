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
 * The WebhookEndpointsidWebhookEndpoint model module.
 * @module model/WebhookEndpointsidWebhookEndpoint
 * @version v0.3
 */
export class WebhookEndpointsidWebhookEndpoint {
  /**
   * Constructs a new <code>WebhookEndpointsidWebhookEndpoint</code>.
   * @alias module:model/WebhookEndpointsidWebhookEndpoint
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>WebhookEndpointsidWebhookEndpoint</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebhookEndpointsidWebhookEndpoint} obj Optional instance to populate.
   * @return {module:model/WebhookEndpointsidWebhookEndpoint} The populated <code>WebhookEndpointsidWebhookEndpoint</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WebhookEndpointsidWebhookEndpoint();
      if (data.hasOwnProperty("name")) obj.name = ApiClient.convertToType(data["name"], "String");
      if (data.hasOwnProperty("target_url"))
        obj.targetUrl = ApiClient.convertToType(data["target_url"], "String");
      if (data.hasOwnProperty("enabled"))
        obj.enabled = ApiClient.convertToType(data["enabled"], "Boolean");
      if (data.hasOwnProperty("subscriptions"))
        obj.subscriptions = ApiClient.convertToType(data["subscriptions"], ["String"]);
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
WebhookEndpointsidWebhookEndpoint.prototype.name = undefined;

/**
 * @member {String} targetUrl
 */
WebhookEndpointsidWebhookEndpoint.prototype.targetUrl = undefined;

/**
 * @member {Boolean} enabled
 */
WebhookEndpointsidWebhookEndpoint.prototype.enabled = undefined;

/**
 * Allowed values for the <code>subscriptions</code> property.
 * @enum {String}
 * @readonly
 */
WebhookEndpointsidWebhookEndpoint.SubscriptionsEnum = {
  /**
   * value: "*"
   * @const
   */
  STAR: "*",
};
/**
 * @member {Array.<module:model/WebhookEndpointsidWebhookEndpoint.SubscriptionsEnum>} subscriptions
 */
WebhookEndpointsidWebhookEndpoint.prototype.subscriptions = undefined;
