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
import { QuestionnairesQuestionnaire } from "./QuestionnairesQuestionnaire";

/**
 * The QuestionnairesBody model module.
 * @module model/QuestionnairesBody
 * @version v0.3
 */
export class QuestionnairesBody {
  /**
   * Constructs a new <code>QuestionnairesBody</code>.
   * @alias module:model/QuestionnairesBody
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>QuestionnairesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuestionnairesBody} obj Optional instance to populate.
   * @return {module:model/QuestionnairesBody} The populated <code>QuestionnairesBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new QuestionnairesBody();
      if (data.hasOwnProperty("questionnaire"))
        obj.questionnaire = QuestionnairesQuestionnaire.constructFromObject(data["questionnaire"]);
    }
    return obj;
  }
}

/**
 * @member {module:model/QuestionnairesQuestionnaire} questionnaire
 */
QuestionnairesBody.prototype.questionnaire = undefined;