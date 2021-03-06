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
import { OrganizationsidlogoOrganization } from "./OrganizationsidlogoOrganization";

/**
 * The IdLogoBody model module.
 * @module model/IdLogoBody
 * @version v0.3
 */
export class IdLogoBody {
  /**
   * Constructs a new <code>IdLogoBody</code>.
   * @alias module:model/IdLogoBody
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>IdLogoBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdLogoBody} obj Optional instance to populate.
   * @return {module:model/IdLogoBody} The populated <code>IdLogoBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IdLogoBody();
      if (data.hasOwnProperty("organization"))
        obj.organization = OrganizationsidlogoOrganization.constructFromObject(
          data["organization"]
        );
    }
    return obj;
  }
}

/**
 * @member {module:model/OrganizationsidlogoOrganization} organization
 */
IdLogoBody.prototype.organization = undefined;
