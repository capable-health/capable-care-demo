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
import { PatientsPatientEthnicities } from "./PatientsPatientEthnicities";
import { PatientsPatientRaces } from "./PatientsPatientRaces";
import { PractitionersidPractitionerAddressesAttributes } from "./PractitionersidPractitionerAddressesAttributes";

/**
 * The PractitionersidPractitioner model module.
 * @module model/PractitionersidPractitioner
 * @version v0.3
 */
export class PractitionersidPractitioner {
  /**
   * Constructs a new <code>PractitionersidPractitioner</code>.
   * @alias module:model/PractitionersidPractitioner
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>PractitionersidPractitioner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PractitionersidPractitioner} obj Optional instance to populate.
   * @return {module:model/PractitionersidPractitioner} The populated <code>PractitionersidPractitioner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PractitionersidPractitioner();
      if (data.hasOwnProperty("first_name"))
        obj.firstName = ApiClient.convertToType(data["first_name"], "String");
      if (data.hasOwnProperty("middle_name"))
        obj.middleName = ApiClient.convertToType(data["middle_name"], "String");
      if (data.hasOwnProperty("last_name"))
        obj.lastName = ApiClient.convertToType(data["last_name"], "String");
      if (data.hasOwnProperty("birth_date"))
        obj.birthDate = ApiClient.convertToType(data["birth_date"], "Date");
      if (data.hasOwnProperty("gender_identity"))
        obj.genderIdentity = ApiClient.convertToType(data["gender_identity"], "String");
      if (data.hasOwnProperty("administrative_gender"))
        obj.administrativeGender = ApiClient.convertToType(data["administrative_gender"], "String");
      if (data.hasOwnProperty("races"))
        obj.races = ApiClient.convertToType(data["races"], [PatientsPatientRaces]);
      if (data.hasOwnProperty("ethnicities"))
        obj.ethnicities = ApiClient.convertToType(data["ethnicities"], [
          PatientsPatientEthnicities,
        ]);
      if (data.hasOwnProperty("identity_id"))
        obj.identityId = ApiClient.convertToType(data["identity_id"], "String");
      if (data.hasOwnProperty("external_id"))
        obj.externalId = ApiClient.convertToType(data["external_id"], "String");
      if (data.hasOwnProperty("organization_ids"))
        obj.organizationIds = ApiClient.convertToType(data["organization_ids"], ["String"]);
      if (data.hasOwnProperty("addresses_attributes"))
        obj.addressesAttributes = ApiClient.convertToType(data["addresses_attributes"], [
          PractitionersidPractitionerAddressesAttributes,
        ]);
      if (data.hasOwnProperty("tag_list"))
        obj.tagList = ApiClient.convertToType(data["tag_list"], ["String"]);
      if (data.hasOwnProperty("metadata"))
        obj.metadata = ApiClient.convertToType(data["metadata"], { String: Object });
    }
    return obj;
  }
}

/**
 * @member {String} firstName
 */
PractitionersidPractitioner.prototype.firstName = undefined;

/**
 * @member {String} middleName
 */
PractitionersidPractitioner.prototype.middleName = undefined;

/**
 * @member {String} lastName
 */
PractitionersidPractitioner.prototype.lastName = undefined;

/**
 * yyyy-mm-dd (ISO 8601)
 * @member {Date} birthDate
 */
PractitionersidPractitioner.prototype.birthDate = undefined;

/**
 * Allowed values for the <code>genderIdentity</code> property.
 * @enum {String}
 * @readonly
 */
PractitionersidPractitioner.GenderIdentityEnum = {
  /**
   * value: "female"
   * @const
   */
  female: "female",

  /**
   * value: "male"
   * @const
   */
  male: "male",

  /**
   * value: "non_binary"
   * @const
   */
  nonBinary: "non_binary",

  /**
   * value: "non_disclose"
   * @const
   */
  nonDisclose: "non_disclose",

  /**
   * value: "other"
   * @const
   */
  other: "other",

  /**
   * value: "transgender_female"
   * @const
   */
  transgenderFemale: "transgender_female",

  /**
   * value: "transgender_male"
   * @const
   */
  transgenderMale: "transgender_male",
};
/**
 * The gender the practitioner identifies with.
 * @member {module:model/PractitionersidPractitioner.GenderIdentityEnum} genderIdentity
 */
PractitionersidPractitioner.prototype.genderIdentity = undefined;

/**
 * Allowed values for the <code>administrativeGender</code> property.
 * @enum {String}
 * @readonly
 */
PractitionersidPractitioner.AdministrativeGenderEnum = {
  /**
   * value: "unknown"
   * @const
   */
  unknown: "unknown",

  /**
   * value: "male"
   * @const
   */
  male: "male",

  /**
   * value: "female"
   * @const
   */
  female: "female",

  /**
   * value: "not_applicable"
   * @const
   */
  notApplicable: "not_applicable",
};
/**
 * The gender of the practitioner to be used for administrative purposes.
 * @member {module:model/PractitionersidPractitioner.AdministrativeGenderEnum} administrativeGender
 */
PractitionersidPractitioner.prototype.administrativeGender = undefined;

/**
 * The practitioner's race as identified by the practitioner.
 * @member {Array.<module:model/PatientsPatientRaces>} races
 */
PractitionersidPractitioner.prototype.races = undefined;

/**
 * The practitioner's ethnicity as identified by the practitioner.
 * @member {Array.<module:model/PatientsPatientEthnicities>} ethnicities
 */
PractitionersidPractitioner.prototype.ethnicities = undefined;

/**
 * Pass an identity_id returned by a submission or a lead to link the previously generated identity to the new user being created.
 * @member {String} identityId
 */
PractitionersidPractitioner.prototype.identityId = undefined;

/**
 * Provide a custom reference to the practitioner.
 * @member {String} externalId
 */
PractitionersidPractitioner.prototype.externalId = undefined;

/**
 * Associate the practitioner with organizations.
 * @member {Array.<String>} organizationIds
 */
PractitionersidPractitioner.prototype.organizationIds = undefined;

/**
 * @member {Array.<module:model/PractitionersidPractitionerAddressesAttributes>} addressesAttributes
 */
PractitionersidPractitioner.prototype.addressesAttributes = undefined;

/**
 * Add an array of strings to help manage your resources
 * @member {Array.<String>} tagList
 */
PractitionersidPractitioner.prototype.tagList = undefined;

/**
 * Any JSON-formatted data you want to associate with this object
 * @member {Object.<String, Object>} metadata
 */
PractitionersidPractitioner.prototype.metadata = undefined;