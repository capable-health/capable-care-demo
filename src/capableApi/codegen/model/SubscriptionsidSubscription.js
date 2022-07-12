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
import { SubscriptionsidSubscriptionPrices } from "./SubscriptionsidSubscriptionPrices";

/**
 * The SubscriptionsidSubscription model module.
 * @module model/SubscriptionsidSubscription
 * @version v0.3
 */
export class SubscriptionsidSubscription {
  /**
   * Constructs a new <code>SubscriptionsidSubscription</code>.
   * @alias module:model/SubscriptionsidSubscription
   * @class
   * @param patientId {String} ID of the Patient you want to create a subscription for
   */
  constructor(patientId) {
    this.patientId = patientId;
  }

  /**
   * Constructs a <code>SubscriptionsidSubscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionsidSubscription} obj Optional instance to populate.
   * @return {module:model/SubscriptionsidSubscription} The populated <code>SubscriptionsidSubscription</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SubscriptionsidSubscription();
      if (data.hasOwnProperty("patient_id"))
        obj.patientId = ApiClient.convertToType(data["patient_id"], "String");
      if (data.hasOwnProperty("prices"))
        obj.prices = ApiClient.convertToType(data["prices"], [SubscriptionsidSubscriptionPrices]);
    }
    return obj;
  }
}

/**
 * ID of the Patient you want to create a subscription for
 * @member {String} patientId
 */
SubscriptionsidSubscription.prototype.patientId = undefined;

/**
 * @member {Array.<module:model/SubscriptionsidSubscriptionPrices>} prices
 */
SubscriptionsidSubscription.prototype.prices = undefined;
