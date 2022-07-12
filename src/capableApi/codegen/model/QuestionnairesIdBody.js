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
import { QuestionnairesidQuestionnaire } from "./QuestionnairesidQuestionnaire";

/**
 * The QuestionnairesIdBody model module.
 * @module model/QuestionnairesIdBody
 * @version v0.3
 */
export class QuestionnairesIdBody {
  /**
   * Constructs a new <code>QuestionnairesIdBody</code>.
   * @alias module:model/QuestionnairesIdBody
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>QuestionnairesIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuestionnairesIdBody} obj Optional instance to populate.
   * @return {module:model/QuestionnairesIdBody} The populated <code>QuestionnairesIdBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new QuestionnairesIdBody();
      if (data.hasOwnProperty("questionnaire"))
        obj.questionnaire = QuestionnairesidQuestionnaire.constructFromObject(
          data["questionnaire"]
        );
    }
    return obj;
  }
}

/**
 * @member {module:model/QuestionnairesidQuestionnaire} questionnaire
 */
QuestionnairesIdBody.prototype.questionnaire = undefined;
