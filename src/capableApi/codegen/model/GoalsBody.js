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
import { GoalsGoal } from "./GoalsGoal";

/**
 * The GoalsBody model module.
 * @module model/GoalsBody
 * @version v0.3
 */
export class GoalsBody {
  /**
   * Constructs a new <code>GoalsBody</code>.
   * @alias module:model/GoalsBody
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>GoalsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoalsBody} obj Optional instance to populate.
   * @return {module:model/GoalsBody} The populated <code>GoalsBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GoalsBody();
      if (data.hasOwnProperty("goal")) obj.goal = GoalsGoal.constructFromObject(data["goal"]);
    }
    return obj;
  }
}

/**
 * @member {module:model/GoalsGoal} goal
 */
GoalsBody.prototype.goal = undefined;
