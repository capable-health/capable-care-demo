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
import { CarePlanstemplatesCarePlanTemplate } from "./CarePlanstemplatesCarePlanTemplate";

/**
 * The CarePlansTemplatesBody model module.
 * @module model/CarePlansTemplatesBody
 * @version v0.3
 */
export class CarePlansTemplatesBody {
  /**
   * Constructs a new <code>CarePlansTemplatesBody</code>.
   * @alias module:model/CarePlansTemplatesBody
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>CarePlansTemplatesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CarePlansTemplatesBody} obj Optional instance to populate.
   * @return {module:model/CarePlansTemplatesBody} The populated <code>CarePlansTemplatesBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CarePlansTemplatesBody();
      if (data.hasOwnProperty("care_plan_template"))
        obj.carePlanTemplate = CarePlanstemplatesCarePlanTemplate.constructFromObject(
          data["care_plan_template"]
        );
    }
    return obj;
  }
}

/**
 * @member {module:model/CarePlanstemplatesCarePlanTemplate} carePlanTemplate
 */
CarePlansTemplatesBody.prototype.carePlanTemplate = undefined;
