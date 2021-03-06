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
import { IntegrationsstripeStripeIntegration } from "./IntegrationsstripeStripeIntegration";

/**
 * The IntegrationsStripeBody1 model module.
 * @module model/IntegrationsStripeBody1
 * @version v0.3
 */
export class IntegrationsStripeBody1 {
  /**
   * Constructs a new <code>IntegrationsStripeBody1</code>.
   * @alias module:model/IntegrationsStripeBody1
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>IntegrationsStripeBody1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntegrationsStripeBody1} obj Optional instance to populate.
   * @return {module:model/IntegrationsStripeBody1} The populated <code>IntegrationsStripeBody1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IntegrationsStripeBody1();
      if (data.hasOwnProperty("stripe_integration"))
        obj.stripeIntegration = IntegrationsstripeStripeIntegration.constructFromObject(
          data["stripe_integration"]
        );
    }
    return obj;
  }
}

/**
 * @member {module:model/IntegrationsstripeStripeIntegration} stripeIntegration
 */
IntegrationsStripeBody1.prototype.stripeIntegration = undefined;
