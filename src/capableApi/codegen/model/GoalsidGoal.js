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
import { GoalsidGoalTargetsAttributes } from "./GoalsidGoalTargetsAttributes";

/**
 * The GoalsidGoal model module.
 * @module model/GoalsidGoal
 * @version v0.3
 */
export class GoalsidGoal {
  /**
   * Constructs a new <code>GoalsidGoal</code>.
   * @alias module:model/GoalsidGoal
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>GoalsidGoal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoalsidGoal} obj Optional instance to populate.
   * @return {module:model/GoalsidGoal} The populated <code>GoalsidGoal</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GoalsidGoal();
      if (data.hasOwnProperty("name")) obj.name = ApiClient.convertToType(data["name"], "String");
      if (data.hasOwnProperty("description"))
        obj.description = ApiClient.convertToType(data["description"], "String");
      if (data.hasOwnProperty("start_on"))
        obj.startOn = ApiClient.convertToType(data["start_on"], "Date");
      if (data.hasOwnProperty("due_on"))
        obj.dueOn = ApiClient.convertToType(data["due_on"], "Date");
      if (data.hasOwnProperty("cron_expression"))
        obj.cronExpression = ApiClient.convertToType(data["cron_expression"], "String");
      if (data.hasOwnProperty("achievement_status"))
        obj.achievementStatus = ApiClient.convertToType(data["achievement_status"], "String");
      if (data.hasOwnProperty("targets_attributes"))
        obj.targetsAttributes = ApiClient.convertToType(data["targets_attributes"], [
          GoalsidGoalTargetsAttributes,
        ]);
      if (data.hasOwnProperty("tag_list"))
        obj.tagList = ApiClient.convertToType(data["tag_list"], ["String"]);
      if (data.hasOwnProperty("cms_entry_id"))
        obj.cmsEntryId = ApiClient.convertToType(data["cms_entry_id"], "String");
    }
    return obj;
  }
}

/**
 * Name of the goal
 * @member {String} name
 */
GoalsidGoal.prototype.name = undefined;

/**
 * Description of the goal
 * @member {String} description
 */
GoalsidGoal.prototype.description = undefined;

/**
 * Start date of the goal
 * @member {Date} startOn
 */
GoalsidGoal.prototype.startOn = undefined;

/**
 * Date by which the goal should be reached
 * @member {Date} dueOn
 */
GoalsidGoal.prototype.dueOn = undefined;

/**
 * Cron expression defining the goal's frequency of recurrence
 * @member {String} cronExpression
 */
GoalsidGoal.prototype.cronExpression = undefined;

/**
 * Allowed values for the <code>achievementStatus</code> property.
 * @enum {String}
 * @readonly
 */
GoalsidGoal.AchievementStatusEnum = {
  /**
   * value: "in_progress"
   * @const
   */
  inProgress: "in_progress",

  /**
   * value: "improving"
   * @const
   */
  improving: "improving",

  /**
   * value: "worsening"
   * @const
   */
  worsening: "worsening",

  /**
   * value: "no_change"
   * @const
   */
  noChange: "no_change",

  /**
   * value: "achieved"
   * @const
   */
  achieved: "achieved",

  /**
   * value: "sustaining"
   * @const
   */
  sustaining: "sustaining",

  /**
   * value: "not_achieved"
   * @const
   */
  notAchieved: "not_achieved",

  /**
   * value: "no_progress"
   * @const
   */
  noProgress: "no_progress",

  /**
   * value: "not_attainable"
   * @const
   */
  notAttainable: "not_attainable",
};
/**
 * @member {module:model/GoalsidGoal.AchievementStatusEnum} achievementStatus
 */
GoalsidGoal.prototype.achievementStatus = undefined;

/**
 * @member {Array.<module:model/GoalsidGoalTargetsAttributes>} targetsAttributes
 */
GoalsidGoal.prototype.targetsAttributes = undefined;

/**
 * Add an array of strings to help manage your resources
 * @member {Array.<String>} tagList
 */
GoalsidGoal.prototype.tagList = undefined;

/**
 * Add a link to your CMS content
 * @member {String} cmsEntryId
 */
GoalsidGoal.prototype.cmsEntryId = undefined;
