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
import { WorkflowsPersonalizationRuleSet } from "./WorkflowsPersonalizationRuleSet";

/**
 * The WorkflowsIdBody model module.
 * @module model/WorkflowsIdBody
 * @version v0.3
 */
export class WorkflowsIdBody {
  /**
   * Constructs a new <code>WorkflowsIdBody</code>.
   * @alias module:model/WorkflowsIdBody
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>WorkflowsIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkflowsIdBody} obj Optional instance to populate.
   * @return {module:model/WorkflowsIdBody} The populated <code>WorkflowsIdBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WorkflowsIdBody();
      if (data.hasOwnProperty("personalization_rule_set"))
        obj.personalizationRuleSet = WorkflowsPersonalizationRuleSet.constructFromObject(
          data["personalization_rule_set"]
        );
    }
    return obj;
  }
}

/**
 * @member {module:model/WorkflowsPersonalizationRuleSet} personalizationRuleSet
 */
WorkflowsIdBody.prototype.personalizationRuleSet = undefined;
