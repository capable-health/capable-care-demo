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
 * The IntegrationsStripeBody model module.
 * @module model/IntegrationsStripeBody
 * @version v0.3
 */
export class IntegrationsStripeBody {
  /**
   * Constructs a new <code>IntegrationsStripeBody</code>.
   * @alias module:model/IntegrationsStripeBody
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>IntegrationsStripeBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntegrationsStripeBody} obj Optional instance to populate.
   * @return {module:model/IntegrationsStripeBody} The populated <code>IntegrationsStripeBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IntegrationsStripeBody();
      if (data.hasOwnProperty("stripe_integration"))
        obj.stripeIntegration = ApiClient.convertToType(data["stripe_integration"], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} stripeIntegration
 */
IntegrationsStripeBody.prototype.stripeIntegration = undefined;