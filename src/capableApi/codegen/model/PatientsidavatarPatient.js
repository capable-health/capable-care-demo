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
 * The PatientsidavatarPatient model module.
 * @module model/PatientsidavatarPatient
 * @version v0.3
 */
export class PatientsidavatarPatient {
  /**
   * Constructs a new <code>PatientsidavatarPatient</code>.
   * @alias module:model/PatientsidavatarPatient
   * @class
   * @param avatar {Blob} File that will be uploaded as an attachment and assoicated as the Avatar
   */
  constructor(avatar) {
    this.avatar = avatar;
  }

  /**
   * Constructs a <code>PatientsidavatarPatient</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PatientsidavatarPatient} obj Optional instance to populate.
   * @return {module:model/PatientsidavatarPatient} The populated <code>PatientsidavatarPatient</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PatientsidavatarPatient();
      if (data.hasOwnProperty("avatar"))
        obj.avatar = ApiClient.convertToType(data["avatar"], "Blob");
    }
    return obj;
  }
}

/**
 * File that will be uploaded as an attachment and assoicated as the Avatar
 * @member {Blob} avatar
 */
PatientsidavatarPatient.prototype.avatar = undefined;
