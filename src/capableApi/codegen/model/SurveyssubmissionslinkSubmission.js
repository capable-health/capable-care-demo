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
 * The SurveyssubmissionslinkSubmission model module.
 * @module model/SurveyssubmissionslinkSubmission
 * @version v0.3
 */
export class SurveyssubmissionslinkSubmission {
  /**
   * Constructs a new <code>SurveyssubmissionslinkSubmission</code>.
   * @alias module:model/SurveyssubmissionslinkSubmission
   * @class
   * @param id {String} ID of the submission to link to the patient
   * @param patientId {String} ID of the patient to link the submission to
   */
  constructor(id, patientId) {
    this.id = id;
    this.patientId = patientId;
  }

  /**
   * Constructs a <code>SurveyssubmissionslinkSubmission</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SurveyssubmissionslinkSubmission} obj Optional instance to populate.
   * @return {module:model/SurveyssubmissionslinkSubmission} The populated <code>SurveyssubmissionslinkSubmission</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SurveyssubmissionslinkSubmission();
      if (data.hasOwnProperty("id")) obj.id = ApiClient.convertToType(data["id"], "String");
      if (data.hasOwnProperty("patient_id"))
        obj.patientId = ApiClient.convertToType(data["patient_id"], "String");
    }
    return obj;
  }
}

/**
 * ID of the submission to link to the patient
 * @member {String} id
 */
SurveyssubmissionslinkSubmission.prototype.id = undefined;

/**
 * ID of the patient to link the submission to
 * @member {String} patientId
 */
SurveyssubmissionslinkSubmission.prototype.patientId = undefined;
