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
 * The TasksidTask model module.
 * @module model/TasksidTask
 * @version v0.3
 */
export class TasksidTask {
  /**
   * Constructs a new <code>TasksidTask</code>.
   * @alias module:model/TasksidTask
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>TasksidTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TasksidTask} obj Optional instance to populate.
   * @return {module:model/TasksidTask} The populated <code>TasksidTask</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TasksidTask();
      if (data.hasOwnProperty("care_plan_id"))
        obj.carePlanId = ApiClient.convertToType(data["care_plan_id"], "String");
      if (data.hasOwnProperty("name")) obj.name = ApiClient.convertToType(data["name"], "String");
      if (data.hasOwnProperty("description"))
        obj.description = ApiClient.convertToType(data["description"], "String");
      if (data.hasOwnProperty("due_on"))
        obj.dueOn = ApiClient.convertToType(data["due_on"], "Date");
      if (data.hasOwnProperty("achievement_status"))
        obj.achievementStatus = ApiClient.convertToType(data["achievement_status"], "String");
      if (data.hasOwnProperty("tag_list"))
        obj.tagList = ApiClient.convertToType(data["tag_list"], ["String"]);
      if (data.hasOwnProperty("cms_entry_id"))
        obj.cmsEntryId = ApiClient.convertToType(data["cms_entry_id"], "String");
    }
    return obj;
  }
}

/**
 * ID of the care plan to associate the task with
 * @member {String} carePlanId
 */
TasksidTask.prototype.carePlanId = undefined;

/**
 * Name of the task
 * @member {String} name
 */
TasksidTask.prototype.name = undefined;

/**
 * Description of the task
 * @member {String} description
 */
TasksidTask.prototype.description = undefined;

/**
 * Date by which the task should be accomplished
 * @member {Date} dueOn
 */
TasksidTask.prototype.dueOn = undefined;

/**
 * Allowed values for the <code>achievementStatus</code> property.
 * @enum {String}
 * @readonly
 */
TasksidTask.AchievementStatusEnum = {
  /**
   * value: "in_progress"
   * @const
   */
  inProgress: "in_progress",

  /**
   * value: "completed"
   * @const
   */
  completed: "completed",

  /**
   * value: "cancelled"
   * @const
   */
  cancelled: "cancelled",
};
/**
 * @member {module:model/TasksidTask.AchievementStatusEnum} achievementStatus
 */
TasksidTask.prototype.achievementStatus = undefined;

/**
 * Add an array of strings to help manage your resources
 * @member {Array.<String>} tagList
 */
TasksidTask.prototype.tagList = undefined;

/**
 * Add a link to your CMS content
 * @member {String} cmsEntryId
 */
TasksidTask.prototype.cmsEntryId = undefined;
