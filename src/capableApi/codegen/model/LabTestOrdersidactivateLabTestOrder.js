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
 * The LabTestOrdersidactivateLabTestOrder model module.
 * @module model/LabTestOrdersidactivateLabTestOrder
 * @version v0.3
 */
export class LabTestOrdersidactivateLabTestOrder {
  /**
   * Constructs a new <code>LabTestOrdersidactivateLabTestOrder</code>.
   * @alias module:model/LabTestOrdersidactivateLabTestOrder
   * @class
   * @param activationId {String}
   */
  constructor(activationId) {
    this.activationId = activationId;
  }

  /**
   * Constructs a <code>LabTestOrdersidactivateLabTestOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LabTestOrdersidactivateLabTestOrder} obj Optional instance to populate.
   * @return {module:model/LabTestOrdersidactivateLabTestOrder} The populated <code>LabTestOrdersidactivateLabTestOrder</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LabTestOrdersidactivateLabTestOrder();
      if (data.hasOwnProperty("activation_id"))
        obj.activationId = ApiClient.convertToType(data["activation_id"], "String");
    }
    return obj;
  }
}

/**
 * @member {String} activationId
 */
LabTestOrdersidactivateLabTestOrder.prototype.activationId = undefined;