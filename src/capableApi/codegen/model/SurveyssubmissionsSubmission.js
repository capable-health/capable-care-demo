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
import { SurveyssubmissionsSubmissionQuestions } from "./SurveyssubmissionsSubmissionQuestions";

/**
 * The SurveyssubmissionsSubmission model module.
 * @module model/SurveyssubmissionsSubmission
 * @version v0.3
 */
export class SurveyssubmissionsSubmission {
  /**
   * Constructs a new <code>SurveyssubmissionsSubmission</code>.
   * @alias module:model/SurveyssubmissionsSubmission
   * @class
   * @param questionnaireId {String} ID of the questionnaire the submission corresponds to
   */
  constructor(questionnaireId) {
    this.questionnaireId = questionnaireId;
  }

  /**
   * Constructs a <code>SurveyssubmissionsSubmission</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SurveyssubmissionsSubmission} obj Optional instance to populate.
   * @return {module:model/SurveyssubmissionsSubmission} The populated <code>SurveyssubmissionsSubmission</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SurveyssubmissionsSubmission();
      if (data.hasOwnProperty("id")) obj.id = ApiClient.convertToType(data["id"], "String");
      if (data.hasOwnProperty("questionnaire_id"))
        obj.questionnaireId = ApiClient.convertToType(data["questionnaire_id"], "String");
      if (data.hasOwnProperty("patient_id"))
        obj.patientId = ApiClient.convertToType(data["patient_id"], "String");
      if (data.hasOwnProperty("external_id"))
        obj.externalId = ApiClient.convertToType(data["external_id"], "String");
      if (data.hasOwnProperty("identity_id"))
        obj.identityId = ApiClient.convertToType(data["identity_id"], "String");
      if (data.hasOwnProperty("identity_external_id"))
        obj.identityExternalId = ApiClient.convertToType(data["identity_external_id"], "String");
      if (data.hasOwnProperty("metadata"))
        obj.metadata = ApiClient.convertToType(data["metadata"], { String: Object });
      if (data.hasOwnProperty("status"))
        obj.status = ApiClient.convertToType(data["status"], "String");
      if (data.hasOwnProperty("questions"))
        obj.questions = ApiClient.convertToType(data["questions"], [
          SurveyssubmissionsSubmissionQuestions,
        ]);
    }
    return obj;
  }
}

/**
 * Specify a submission ID only when you want to update an existing submission
 * @member {String} id
 */
SurveyssubmissionsSubmission.prototype.id = undefined;

/**
 * ID of the questionnaire the submission corresponds to
 * @member {String} questionnaireId
 */
SurveyssubmissionsSubmission.prototype.questionnaireId = undefined;

/**
 * ID of the patient to link the submission to
 * @member {String} patientId
 */
SurveyssubmissionsSubmission.prototype.patientId = undefined;

/**
 * Custom reference for the submission
 * @member {String} externalId
 */
SurveyssubmissionsSubmission.prototype.externalId = undefined;

/**
 * You can pass an identity_id returned by a previous submission or a lead to link a previously generated identity to a new submission.
 * @member {String} identityId
 */
SurveyssubmissionsSubmission.prototype.identityId = undefined;

/**
 * Custom reference to an external identity ID
 * @member {String} identityExternalId
 */
SurveyssubmissionsSubmission.prototype.identityExternalId = undefined;

/**
 * Any JSON-formatted data you want to associate with this object
 * @member {Object.<String, Object>} metadata
 */
SurveyssubmissionsSubmission.prototype.metadata = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
SurveyssubmissionsSubmission.StatusEnum = {
  /**
   * value: "completed"
   * @const
   */
  completed: "completed",
};
/**
 * Indicates that the submission has been completed by the patient and will not be updated again
 * @member {module:model/SurveyssubmissionsSubmission.StatusEnum} status
 */
SurveyssubmissionsSubmission.prototype.status = undefined;

/**
 * @member {Array.<module:model/SurveyssubmissionsSubmissionQuestions>} questions
 */
SurveyssubmissionsSubmission.prototype.questions = undefined;
