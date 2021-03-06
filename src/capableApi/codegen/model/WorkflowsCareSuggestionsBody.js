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
import { WorkflowscareSuggestionsWorkflow } from "./WorkflowscareSuggestionsWorkflow";

/**
 * The WorkflowsCareSuggestionsBody model module.
 * @module model/WorkflowsCareSuggestionsBody
 * @version v0.3
 */
export class WorkflowsCareSuggestionsBody {
  /**
   * Constructs a new <code>WorkflowsCareSuggestionsBody</code>.
   * @alias module:model/WorkflowsCareSuggestionsBody
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>WorkflowsCareSuggestionsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkflowsCareSuggestionsBody} obj Optional instance to populate.
   * @return {module:model/WorkflowsCareSuggestionsBody} The populated <code>WorkflowsCareSuggestionsBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WorkflowsCareSuggestionsBody();
      if (data.hasOwnProperty("workflow"))
        obj.workflow = WorkflowscareSuggestionsWorkflow.constructFromObject(data["workflow"]);
    }
    return obj;
  }
}

/**
 * @member {module:model/WorkflowscareSuggestionsWorkflow} workflow
 */
WorkflowsCareSuggestionsBody.prototype.workflow = undefined;
