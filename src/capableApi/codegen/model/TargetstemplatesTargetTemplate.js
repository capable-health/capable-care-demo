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
 * The TargetstemplatesTargetTemplate model module.
 * @module model/TargetstemplatesTargetTemplate
 * @version v0.3
 */
export class TargetstemplatesTargetTemplate {
  /**
   * Constructs a new <code>TargetstemplatesTargetTemplate</code>.
   * @alias module:model/TargetstemplatesTargetTemplate
   * @class
   * @param name {String} Name of the target template. This will be the default name of targets created using this template.
   * @param observationTypeId {String} ID of the observation type for observations linked to this target template.
   */
  constructor(name, observationTypeId) {
    this.name = name;
    this.observationTypeId = observationTypeId;
  }

  /**
   * Constructs a <code>TargetstemplatesTargetTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TargetstemplatesTargetTemplate} obj Optional instance to populate.
   * @return {module:model/TargetstemplatesTargetTemplate} The populated <code>TargetstemplatesTargetTemplate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TargetstemplatesTargetTemplate();
      if (data.hasOwnProperty("name")) obj.name = ApiClient.convertToType(data["name"], "String");
      if (data.hasOwnProperty("description"))
        obj.description = ApiClient.convertToType(data["description"], "String");
      if (data.hasOwnProperty("value"))
        obj.value = ApiClient.convertToType(data["value"], "String");
      if (data.hasOwnProperty("observation_type_id"))
        obj.observationTypeId = ApiClient.convertToType(data["observation_type_id"], "String");
      if (data.hasOwnProperty("tag_list"))
        obj.tagList = ApiClient.convertToType(data["tag_list"], ["String"]);
    }
    return obj;
  }
}

/**
 * Name of the target template. This will be the default name of targets created using this template.
 * @member {String} name
 */
TargetstemplatesTargetTemplate.prototype.name = undefined;

/**
 * Description of the target template. This will be the default description of targets created using this template.
 * @member {String} description
 */
TargetstemplatesTargetTemplate.prototype.description = undefined;

/**
 * Value of the target template. This will be the default value of targets created using this template.
 * @member {String} value
 */
TargetstemplatesTargetTemplate.prototype.value = undefined;

/**
 * ID of the observation type for observations linked to this target template.
 * @member {String} observationTypeId
 */
TargetstemplatesTargetTemplate.prototype.observationTypeId = undefined;

/**
 * Add an array of strings to help manage your resources
 * @member {Array.<String>} tagList
 */
TargetstemplatesTargetTemplate.prototype.tagList = undefined;
