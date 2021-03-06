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
import { CarePlanstemplatesidCarePlanTemplate } from "./CarePlanstemplatesidCarePlanTemplate";

/**
 * The TemplatesIdBody model module.
 * @module model/TemplatesIdBody
 * @version v0.3
 */
export class TemplatesIdBody {
  /**
   * Constructs a new <code>TemplatesIdBody</code>.
   * @alias module:model/TemplatesIdBody
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>TemplatesIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplatesIdBody} obj Optional instance to populate.
   * @return {module:model/TemplatesIdBody} The populated <code>TemplatesIdBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TemplatesIdBody();
      if (data.hasOwnProperty("care_plan_template"))
        obj.carePlanTemplate = CarePlanstemplatesidCarePlanTemplate.constructFromObject(
          data["care_plan_template"]
        );
    }
    return obj;
  }
}

/**
 * @member {module:model/CarePlanstemplatesidCarePlanTemplate} carePlanTemplate
 */
TemplatesIdBody.prototype.carePlanTemplate = undefined;
