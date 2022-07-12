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
import { PatientsPatientAddressesAttributes } from "./PatientsPatientAddressesAttributes";
import { PatientsPatientEthnicities } from "./PatientsPatientEthnicities";
import { PatientsPatientPhonesAttributes } from "./PatientsPatientPhonesAttributes";
import { PatientsPatientRaces } from "./PatientsPatientRaces";

/**
 * The PatientsinvitePatient model module.
 * @module model/PatientsinvitePatient
 * @version v0.3
 */
export class PatientsinvitePatient {
  /**
   * Constructs a new <code>PatientsinvitePatient</code>.
   * @alias module:model/PatientsinvitePatient
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>PatientsinvitePatient</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PatientsinvitePatient} obj Optional instance to populate.
   * @return {module:model/PatientsinvitePatient} The populated <code>PatientsinvitePatient</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PatientsinvitePatient();
      if (data.hasOwnProperty("confirmation_url"))
        obj.confirmationUrl = ApiClient.convertToType(data["confirmation_url"], "String");
      if (data.hasOwnProperty("passwordless_login_url"))
        obj.passwordlessLoginUrl = ApiClient.convertToType(
          data["passwordless_login_url"],
          "String"
        );
      if (data.hasOwnProperty("relationship_type"))
        obj.relationshipType = ApiClient.convertToType(data["relationship_type"], "String");
      if (data.hasOwnProperty("email"))
        obj.email = ApiClient.convertToType(data["email"], "String");
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
      if (data.hasOwnProperty("organization_ids"))
        obj.organizationIds = ApiClient.convertToType(data["organization_ids"], ["String"]);
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
      if (data.hasOwnProperty("identity_external_id"))
        obj.identityExternalId = ApiClient.convertToType(data["identity_external_id"], "String");
      if (data.hasOwnProperty("addresses_attributes"))
        obj.addressesAttributes = ApiClient.convertToType(data["addresses_attributes"], [
          PatientsPatientAddressesAttributes,
        ]);
      if (data.hasOwnProperty("phones_attributes"))
        obj.phonesAttributes = ApiClient.convertToType(data["phones_attributes"], [
          PatientsPatientPhonesAttributes,
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
 * The confirmation URL that gets injected in the invitation email
 * @member {String} confirmationUrl
 */
PatientsinvitePatient.prototype.confirmationUrl = undefined;

/**
 * The passwordless login URL that gets injected in the welcome SMS
 * @member {String} passwordlessLoginUrl
 */
PatientsinvitePatient.prototype.passwordlessLoginUrl = undefined;

/**
 * Allowed values for the <code>relationshipType</code> property.
 * @enum {String}
 * @readonly
 */
PatientsinvitePatient.RelationshipTypeEnum = {
  /**
   * value: "Emergency Contact"
   * @const
   */
  emergencyContact: "Emergency Contact",

  /**
   * value: "Employer"
   * @const
   */
  employer: "Employer",

  /**
   * value: "Federal Agency"
   * @const
   */
  federalAgency: "Federal Agency",

  /**
   * value: "Insurance Company"
   * @const
   */
  insuranceCompany: "Insurance Company",

  /**
   * value: "Next-of-Kin"
   * @const
   */
  nextOfKin: "Next-of-Kin",

  /**
   * value: "Other"
   * @const
   */
  other: "Other",

  /**
   * value: "State Agency"
   * @const
   */
  stateAgency: "State Agency",

  /**
   * value: "Unknown"
   * @const
   */
  unknown: "Unknown",

  /**
   * value: "family member"
   * @const
   */
  familyMember: "family member",

  /**
   * value: "child"
   * @const
   */
  child: "child",

  /**
   * value: "adopted child"
   * @const
   */
  adoptedChild: "adopted child",

  /**
   * value: "adopted daughter"
   * @const
   */
  adoptedDaughter: "adopted daughter",

  /**
   * value: "adopted son"
   * @const
   */
  adoptedSon: "adopted son",

  /**
   * value: "foster child"
   * @const
   */
  fosterChild: "foster child",

  /**
   * value: "foster daughter"
   * @const
   */
  fosterDaughter: "foster daughter",

  /**
   * value: "foster son"
   * @const
   */
  fosterSon: "foster son",

  /**
   * value: "daughter"
   * @const
   */
  daughter: "daughter",

  /**
   * value: "natural daughter"
   * @const
   */
  naturalDaughter: "natural daughter",

  /**
   * value: "stepdaughter"
   * @const
   */
  stepdaughter: "stepdaughter",

  /**
   * value: "natural child"
   * @const
   */
  naturalChild: "natural child",

  /**
   * value: "natural son"
   * @const
   */
  naturalSon: "natural son",

  /**
   * value: "son"
   * @const
   */
  son: "son",

  /**
   * value: "stepson"
   * @const
   */
  stepson: "stepson",

  /**
   * value: "step child"
   * @const
   */
  stepChild: "step child",

  /**
   * value: "extended family member"
   * @const
   */
  extendedFamilyMember: "extended family member",

  /**
   * value: "aunt"
   * @const
   */
  aunt: "aunt",

  /**
   * value: "maternal aunt"
   * @const
   */
  maternalAunt: "maternal aunt",

  /**
   * value: "paternal aunt"
   * @const
   */
  paternalAunt: "paternal aunt",

  /**
   * value: "cousin"
   * @const
   */
  cousin: "cousin",

  /**
   * value: "maternal cousin"
   * @const
   */
  maternalCousin: "maternal cousin",

  /**
   * value: "paternal cousin"
   * @const
   */
  paternalCousin: "paternal cousin",

  /**
   * value: "great grandparent"
   * @const
   */
  greatGrandparent: "great grandparent",

  /**
   * value: "great grandfather"
   * @const
   */
  greatGrandfather: "great grandfather",

  /**
   * value: "maternal great-grandfather"
   * @const
   */
  maternalGreatGrandfather: "maternal great-grandfather",

  /**
   * value: "paternal great-grandfather"
   * @const
   */
  paternalGreatGrandfather: "paternal great-grandfather",

  /**
   * value: "great grandmother"
   * @const
   */
  greatGrandmother: "great grandmother",

  /**
   * value: "maternal great-grandmother"
   * @const
   */
  maternalGreatGrandmother: "maternal great-grandmother",

  /**
   * value: "paternal great-grandmother"
   * @const
   */
  paternalGreatGrandmother: "paternal great-grandmother",

  /**
   * value: "maternal great-grandparent"
   * @const
   */
  maternalGreatGrandparent: "maternal great-grandparent",

  /**
   * value: "paternal great-grandparent"
   * @const
   */
  paternalGreatGrandparent: "paternal great-grandparent",

  /**
   * value: "grandchild"
   * @const
   */
  grandchild: "grandchild",

  /**
   * value: "granddaughter"
   * @const
   */
  granddaughter: "granddaughter",

  /**
   * value: "grandson"
   * @const
   */
  grandson: "grandson",

  /**
   * value: "grandparent"
   * @const
   */
  grandparent: "grandparent",

  /**
   * value: "grandfather"
   * @const
   */
  grandfather: "grandfather",

  /**
   * value: "maternal grandfather"
   * @const
   */
  maternalGrandfather: "maternal grandfather",

  /**
   * value: "paternal grandfather"
   * @const
   */
  paternalGrandfather: "paternal grandfather",

  /**
   * value: "grandmother"
   * @const
   */
  grandmother: "grandmother",

  /**
   * value: "maternal grandmother"
   * @const
   */
  maternalGrandmother: "maternal grandmother",

  /**
   * value: "paternal grandmother"
   * @const
   */
  paternalGrandmother: "paternal grandmother",

  /**
   * value: "maternal grandparent"
   * @const
   */
  maternalGrandparent: "maternal grandparent",

  /**
   * value: "paternal grandparent"
   * @const
   */
  paternalGrandparent: "paternal grandparent",

  /**
   * value: "inlaw"
   * @const
   */
  inlaw: "inlaw",

  /**
   * value: "child-in-law"
   * @const
   */
  childInLaw: "child-in-law",

  /**
   * value: "daughter in-law"
   * @const
   */
  daughterInLaw: "daughter in-law",

  /**
   * value: "son in-law"
   * @const
   */
  sonInLaw: "son in-law",

  /**
   * value: "parent in-law"
   * @const
   */
  parentInLaw: "parent in-law",

  /**
   * value: "father-in-law"
   * @const
   */
  fatherInLaw: "father-in-law",

  /**
   * value: "mother-in-law"
   * @const
   */
  motherInLaw: "mother-in-law",

  /**
   * value: "sibling in-law"
   * @const
   */
  siblingInLaw: "sibling in-law",

  /**
   * value: "brother-in-law"
   * @const
   */
  brotherInLaw: "brother-in-law",

  /**
   * value: "sister-in-law"
   * @const
   */
  sisterInLaw: "sister-in-law",

  /**
   * value: "niece/nephew"
   * @const
   */
  niecenephew: "niece/nephew",

  /**
   * value: "nephew"
   * @const
   */
  nephew: "nephew",

  /**
   * value: "niece"
   * @const
   */
  niece: "niece",

  /**
   * value: "uncle"
   * @const
   */
  uncle: "uncle",

  /**
   * value: "maternal uncle"
   * @const
   */
  maternalUncle: "maternal uncle",

  /**
   * value: "paternal uncle"
   * @const
   */
  paternalUncle: "paternal uncle",

  /**
   * value: "parent"
   * @const
   */
  parent: "parent",

  /**
   * value: "adoptive parent"
   * @const
   */
  adoptiveParent: "adoptive parent",

  /**
   * value: "adoptive father"
   * @const
   */
  adoptiveFather: "adoptive father",

  /**
   * value: "adoptive mother"
   * @const
   */
  adoptiveMother: "adoptive mother",

  /**
   * value: "father"
   * @const
   */
  father: "father",

  /**
   * value: "foster father"
   * @const
   */
  fosterFather: "foster father",

  /**
   * value: "natural father"
   * @const
   */
  naturalFather: "natural father",

  /**
   * value: "natural father of fetus"
   * @const
   */
  naturalFatherOfFetus: "natural father of fetus",

  /**
   * value: "stepfather"
   * @const
   */
  stepfather: "stepfather",

  /**
   * value: "mother"
   * @const
   */
  mother: "mother",

  /**
   * value: "gestational mother"
   * @const
   */
  gestationalMother: "gestational mother",

  /**
   * value: "foster mother"
   * @const
   */
  fosterMother: "foster mother",

  /**
   * value: "natural mother"
   * @const
   */
  naturalMother: "natural mother",

  /**
   * value: "natural mother of fetus"
   * @const
   */
  naturalMotherOfFetus: "natural mother of fetus",

  /**
   * value: "stepmother"
   * @const
   */
  stepmother: "stepmother",

  /**
   * value: "natural parent"
   * @const
   */
  naturalParent: "natural parent",

  /**
   * value: "foster parent"
   * @const
   */
  fosterParent: "foster parent",

  /**
   * value: "step parent"
   * @const
   */
  stepParent: "step parent",

  /**
   * value: "sibling"
   * @const
   */
  sibling: "sibling",

  /**
   * value: "brother"
   * @const
   */
  brother: "brother",

  /**
   * value: "half-brother"
   * @const
   */
  halfBrother: "half-brother",

  /**
   * value: "natural brother"
   * @const
   */
  naturalBrother: "natural brother",

  /**
   * value: "twin brother"
   * @const
   */
  twinBrother: "twin brother",

  /**
   * value: "fraternal twin brother"
   * @const
   */
  fraternalTwinBrother: "fraternal twin brother",

  /**
   * value: "identical twin brother"
   * @const
   */
  identicalTwinBrother: "identical twin brother",

  /**
   * value: "stepbrother"
   * @const
   */
  stepbrother: "stepbrother",

  /**
   * value: "half-sibling"
   * @const
   */
  halfSibling: "half-sibling",

  /**
   * value: "half-sister"
   * @const
   */
  halfSister: "half-sister",

  /**
   * value: "natural sibling"
   * @const
   */
  naturalSibling: "natural sibling",

  /**
   * value: "natural sister"
   * @const
   */
  naturalSister: "natural sister",

  /**
   * value: "twin sister"
   * @const
   */
  twinSister: "twin sister",

  /**
   * value: "fraternal twin sister"
   * @const
   */
  fraternalTwinSister: "fraternal twin sister",

  /**
   * value: "identical twin sister"
   * @const
   */
  identicalTwinSister: "identical twin sister",

  /**
   * value: "twin"
   * @const
   */
  twin: "twin",

  /**
   * value: "fraternal twin"
   * @const
   */
  fraternalTwin: "fraternal twin",

  /**
   * value: "identical twin"
   * @const
   */
  identicalTwin: "identical twin",

  /**
   * value: "sister"
   * @const
   */
  sister: "sister",

  /**
   * value: "stepsister"
   * @const
   */
  stepsister: "stepsister",

  /**
   * value: "step sibling"
   * @const
   */
  stepSibling: "step sibling",

  /**
   * value: "significant other"
   * @const
   */
  significantOther: "significant other",

  /**
   * value: "domestic partner"
   * @const
   */
  domesticPartner: "domestic partner",

  /**
   * value: "former spouse"
   * @const
   */
  formerSpouse: "former spouse",

  /**
   * value: "spouse"
   * @const
   */
  spouse: "spouse",

  /**
   * value: "husband"
   * @const
   */
  husband: "husband",

  /**
   * value: "wife"
   * @const
   */
  wife: "wife",

  /**
   * value: "unrelated friend"
   * @const
   */
  unrelatedFriend: "unrelated friend",

  /**
   * value: "neighbor"
   * @const
   */
  neighbor: "neighbor",

  /**
   * value: "self"
   * @const
   */
  self: "self",

  /**
   * value: "Roommate"
   * @const
   */
  roommate: "Roommate",
};
/**
 * If the patient wants to be related to the patient he invites (Only available when a Patient invites another Patient)
 * @member {module:model/PatientsinvitePatient.RelationshipTypeEnum} relationshipType
 */
PatientsinvitePatient.prototype.relationshipType = undefined;

/**
 * @member {String} email
 */
PatientsinvitePatient.prototype.email = undefined;

/**
 * @member {String} firstName
 */
PatientsinvitePatient.prototype.firstName = undefined;

/**
 * @member {String} middleName
 */
PatientsinvitePatient.prototype.middleName = undefined;

/**
 * @member {String} lastName
 */
PatientsinvitePatient.prototype.lastName = undefined;

/**
 * yyyy-mm-dd (ISO 8601)
 * @member {Date} birthDate
 */
PatientsinvitePatient.prototype.birthDate = undefined;

/**
 * Allowed values for the <code>genderIdentity</code> property.
 * @enum {String}
 * @readonly
 */
PatientsinvitePatient.GenderIdentityEnum = {
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
 * The gender the patient identifies with. The Patient's gender identity is used as guidance(e.g. for staff) about how to interact with the patient.
 * @member {module:model/PatientsinvitePatient.GenderIdentityEnum} genderIdentity
 */
PatientsinvitePatient.prototype.genderIdentity = undefined;

/**
 * Allowed values for the <code>administrativeGender</code> property.
 * @enum {String}
 * @readonly
 */
PatientsinvitePatient.AdministrativeGenderEnum = {
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
 * The gender of the patient to be used for administrative purposes.
 * @member {module:model/PatientsinvitePatient.AdministrativeGenderEnum} administrativeGender
 */
PatientsinvitePatient.prototype.administrativeGender = undefined;

/**
 * @member {Array.<String>} organizationIds
 */
PatientsinvitePatient.prototype.organizationIds = undefined;

/**
 * @member {Array.<module:model/PatientsPatientRaces>} races
 */
PatientsinvitePatient.prototype.races = undefined;

/**
 * The patient's ethnicity as identified by the patient.
 * @member {Array.<module:model/PatientsPatientEthnicities>} ethnicities
 */
PatientsinvitePatient.prototype.ethnicities = undefined;

/**
 * Pass an identity_id returned by a submission or a lead to link the previously generated identity to the new user being created.
 * @member {String} identityId
 */
PatientsinvitePatient.prototype.identityId = undefined;

/**
 * Provide a custom reference to the patient.
 * @member {String} externalId
 */
PatientsinvitePatient.prototype.externalId = undefined;

/**
 * Provide a custom identity reference for the patient.
 * @member {String} identityExternalId
 */
PatientsinvitePatient.prototype.identityExternalId = undefined;

/**
 * @member {Array.<module:model/PatientsPatientAddressesAttributes>} addressesAttributes
 */
PatientsinvitePatient.prototype.addressesAttributes = undefined;

/**
 * @member {Array.<module:model/PatientsPatientPhonesAttributes>} phonesAttributes
 */
PatientsinvitePatient.prototype.phonesAttributes = undefined;

/**
 * Add an array of strings to help manage your resources
 * @member {Array.<String>} tagList
 */
PatientsinvitePatient.prototype.tagList = undefined;

/**
 * Any JSON-formatted data you want to associate with this object
 * @member {Object.<String, Object>} metadata
 */
PatientsinvitePatient.prototype.metadata = undefined;
