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
 * The LabTestOrdersLabTestOrder model module.
 * @module model/LabTestOrdersLabTestOrder
 * @version v0.3
 */
export class LabTestOrdersLabTestOrder {
  /**
   * Constructs a new <code>LabTestOrdersLabTestOrder</code>.
   * @alias module:model/LabTestOrdersLabTestOrder
   * @class
   * @param patientId {String}
   * @param productIds {Array.<String>}
   */
  constructor(patientId, productIds) {
    this.patientId = patientId;
    this.productIds = productIds;
  }

  /**
   * Constructs a <code>LabTestOrdersLabTestOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LabTestOrdersLabTestOrder} obj Optional instance to populate.
   * @return {module:model/LabTestOrdersLabTestOrder} The populated <code>LabTestOrdersLabTestOrder</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LabTestOrdersLabTestOrder();
      if (data.hasOwnProperty("place_order"))
        obj.placeOrder = ApiClient.convertToType(data["place_order"], "Boolean");
      if (data.hasOwnProperty("patient_id"))
        obj.patientId = ApiClient.convertToType(data["patient_id"], "String");
      if (data.hasOwnProperty("product_ids"))
        obj.productIds = ApiClient.convertToType(data["product_ids"], ["String"]);
    }
    return obj;
  }
}

/**
 * @member {Boolean} placeOrder
 * @default false
 */
LabTestOrdersLabTestOrder.prototype.placeOrder = false;

/**
 * @member {String} patientId
 */
LabTestOrdersLabTestOrder.prototype.patientId = undefined;

/**
 * @member {Array.<String>} productIds
 */
LabTestOrdersLabTestOrder.prototype.productIds = undefined;
