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
import { GoalstemplatesGoalTemplate } from "./GoalstemplatesGoalTemplate";

/**
 * The GoalsTemplatesBody model module.
 * @module model/GoalsTemplatesBody
 * @version v0.3
 */
export class GoalsTemplatesBody {
  /**
   * Constructs a new <code>GoalsTemplatesBody</code>.
   * @alias module:model/GoalsTemplatesBody
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>GoalsTemplatesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoalsTemplatesBody} obj Optional instance to populate.
   * @return {module:model/GoalsTemplatesBody} The populated <code>GoalsTemplatesBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GoalsTemplatesBody();
      if (data.hasOwnProperty("goal_template"))
        obj.goalTemplate = GoalstemplatesGoalTemplate.constructFromObject(data["goal_template"]);
    }
    return obj;
  }
}

/**
 * @member {module:model/GoalstemplatesGoalTemplate} goalTemplate
 */
GoalsTemplatesBody.prototype.goalTemplate = undefined;
