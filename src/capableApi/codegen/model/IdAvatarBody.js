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
import { PatientsidavatarPatient } from "./PatientsidavatarPatient";

/**
 * The IdAvatarBody model module.
 * @module model/IdAvatarBody
 * @version v0.3
 */
export class IdAvatarBody {
  /**
   * Constructs a new <code>IdAvatarBody</code>.
   * @alias module:model/IdAvatarBody
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>IdAvatarBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdAvatarBody} obj Optional instance to populate.
   * @return {module:model/IdAvatarBody} The populated <code>IdAvatarBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IdAvatarBody();
      if (data.hasOwnProperty("patient"))
        obj.patient = PatientsidavatarPatient.constructFromObject(data["patient"]);
    }
    return obj;
  }
}

/**
 * @member {module:model/PatientsidavatarPatient} patient
 */
IdAvatarBody.prototype.patient = undefined;
