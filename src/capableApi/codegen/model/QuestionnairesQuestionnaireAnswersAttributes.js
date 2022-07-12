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
 * The QuestionnairesQuestionnaireAnswersAttributes model module.
 * @module model/QuestionnairesQuestionnaireAnswersAttributes
 * @version v0.3
 */
export class QuestionnairesQuestionnaireAnswersAttributes {
  /**
   * Constructs a new <code>QuestionnairesQuestionnaireAnswersAttributes</code>.
   * @alias module:model/QuestionnairesQuestionnaireAnswersAttributes
   * @class
   * @param title {String}
   * @param position {Number}
   */
  constructor(title, position) {
    this.title = title;
    this.position = position;
  }

  /**
   * Constructs a <code>QuestionnairesQuestionnaireAnswersAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuestionnairesQuestionnaireAnswersAttributes} obj Optional instance to populate.
   * @return {module:model/QuestionnairesQuestionnaireAnswersAttributes} The populated <code>QuestionnairesQuestionnaireAnswersAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new QuestionnairesQuestionnaireAnswersAttributes();
      if (data.hasOwnProperty("title"))
        obj.title = ApiClient.convertToType(data["title"], "String");
      if (data.hasOwnProperty("position"))
        obj.position = ApiClient.convertToType(data["position"], "Number");
      if (data.hasOwnProperty("status"))
        obj.status = ApiClient.convertToType(data["status"], "String");
    }
    return obj;
  }
}

/**
 * @member {String} title
 */
QuestionnairesQuestionnaireAnswersAttributes.prototype.title = undefined;

/**
 * @member {Number} position
 */
QuestionnairesQuestionnaireAnswersAttributes.prototype.position = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
QuestionnairesQuestionnaireAnswersAttributes.StatusEnum = {
  /**
   * value: "active"
   * @const
   */
  active: "active",

  /**
   * value: "archived"
   * @const
   */
  archived: "archived",
};
/**
 * @member {module:model/QuestionnairesQuestionnaireAnswersAttributes.StatusEnum} status
 * @default 'active'
 */
QuestionnairesQuestionnaireAnswersAttributes.prototype.status = "active";