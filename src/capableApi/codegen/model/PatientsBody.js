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
import { PatientsPatient } from "./PatientsPatient";

/**
 * The PatientsBody model module.
 * @module model/PatientsBody
 * @version v0.3
 */
export class PatientsBody {
  /**
   * Constructs a new <code>PatientsBody</code>.
   * @alias module:model/PatientsBody
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>PatientsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PatientsBody} obj Optional instance to populate.
   * @return {module:model/PatientsBody} The populated <code>PatientsBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PatientsBody();
      if (data.hasOwnProperty("patient"))
        obj.patient = PatientsPatient.constructFromObject(data["patient"]);
    }
    return obj;
  }
}

/**
 * @member {module:model/PatientsPatient} patient
 */
PatientsBody.prototype.patient = undefined;
