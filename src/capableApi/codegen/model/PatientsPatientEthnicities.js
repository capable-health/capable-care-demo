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
 * The PatientsPatientEthnicities model module.
 * @module model/PatientsPatientEthnicities
 * @version v0.3
 */
export class PatientsPatientEthnicities {
  /**
   * Constructs a new <code>PatientsPatientEthnicities</code>.
   * @alias module:model/PatientsPatientEthnicities
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>PatientsPatientEthnicities</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PatientsPatientEthnicities} obj Optional instance to populate.
   * @return {module:model/PatientsPatientEthnicities} The populated <code>PatientsPatientEthnicities</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PatientsPatientEthnicities();
      if (data.hasOwnProperty("level_2_display"))
        obj.level2Display = ApiClient.convertToType(data["level_2_display"], "String");
      if (data.hasOwnProperty("level_3_display"))
        obj.level3Display = ApiClient.convertToType(data["level_3_display"], "String");
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>level2Display</code> property.
 * @enum {String}
 * @readonly
 */
PatientsPatientEthnicities.Level2DisplayEnum = {
  /**
   * value: "Hispanic or Latino"
   * @const
   */
  hispanicOrLatino: "Hispanic or Latino",
};
/**
 * @member {module:model/PatientsPatientEthnicities.Level2DisplayEnum} level2Display
 */
PatientsPatientEthnicities.prototype.level2Display = undefined;

/**
 * Allowed values for the <code>level3Display</code> property.
 * @enum {String}
 * @readonly
 */
PatientsPatientEthnicities.Level3DisplayEnum = {
  /**
   * value: "Spaniard"
   * @const
   */
  spaniard: "Spaniard",

  /**
   * value: "Mexican"
   * @const
   */
  mexican: "Mexican",

  /**
   * value: "Central American"
   * @const
   */
  centralAmerican: "Central American",

  /**
   * value: "South American"
   * @const
   */
  southAmerican: "South American",

  /**
   * value: "Latin American"
   * @const
   */
  latinAmerican: "Latin American",

  /**
   * value: "Puerto Rican"
   * @const
   */
  puertoRican: "Puerto Rican",

  /**
   * value: "Cuban"
   * @const
   */
  cuban: "Cuban",

  /**
   * value: "Dominican"
   * @const
   */
  dominican: "Dominican",

  /**
   * value: "Andalusian"
   * @const
   */
  andalusian: "Andalusian",

  /**
   * value: "Asturian"
   * @const
   */
  asturian: "Asturian",

  /**
   * value: "Castillian"
   * @const
   */
  castillian: "Castillian",

  /**
   * value: "Catalonian"
   * @const
   */
  catalonian: "Catalonian",

  /**
   * value: "Belearic Islander"
   * @const
   */
  belearicIslander: "Belearic Islander",

  /**
   * value: "Gallego"
   * @const
   */
  gallego: "Gallego",

  /**
   * value: "Valencian"
   * @const
   */
  valencian: "Valencian",

  /**
   * value: "Canarian"
   * @const
   */
  canarian: "Canarian",

  /**
   * value: "Spanish Basque"
   * @const
   */
  spanishBasque: "Spanish Basque",

  /**
   * value: "Mexican American"
   * @const
   */
  mexicanAmerican: "Mexican American",

  /**
   * value: "Mexicano"
   * @const
   */
  mexicano: "Mexicano",

  /**
   * value: "Chicano"
   * @const
   */
  chicano: "Chicano",

  /**
   * value: "La Raza"
   * @const
   */
  laRaza: "La Raza",

  /**
   * value: "Mexican American Indian"
   * @const
   */
  mexicanAmericanIndian: "Mexican American Indian",

  /**
   * value: "Costa Rican"
   * @const
   */
  costaRican: "Costa Rican",

  /**
   * value: "Guatemalan"
   * @const
   */
  guatemalan: "Guatemalan",

  /**
   * value: "Honduran"
   * @const
   */
  honduran: "Honduran",

  /**
   * value: "Nicaraguan"
   * @const
   */
  nicaraguan: "Nicaraguan",

  /**
   * value: "Panamanian"
   * @const
   */
  panamanian: "Panamanian",

  /**
   * value: "Salvadoran"
   * @const
   */
  salvadoran: "Salvadoran",

  /**
   * value: "Central American Indian"
   * @const
   */
  centralAmericanIndian: "Central American Indian",

  /**
   * value: "Canal Zone"
   * @const
   */
  canalZone: "Canal Zone",

  /**
   * value: "Argentinean"
   * @const
   */
  argentinean: "Argentinean",

  /**
   * value: "Bolivian"
   * @const
   */
  bolivian: "Bolivian",

  /**
   * value: "Chilean"
   * @const
   */
  chilean: "Chilean",

  /**
   * value: "Colombian"
   * @const
   */
  colombian: "Colombian",

  /**
   * value: "Ecuadorian"
   * @const
   */
  ecuadorian: "Ecuadorian",

  /**
   * value: "Paraguayan"
   * @const
   */
  paraguayan: "Paraguayan",

  /**
   * value: "Peruvian"
   * @const
   */
  peruvian: "Peruvian",

  /**
   * value: "Uruguayan"
   * @const
   */
  uruguayan: "Uruguayan",

  /**
   * value: "Venezuelan"
   * @const
   */
  venezuelan: "Venezuelan",

  /**
   * value: "South American Indian"
   * @const
   */
  southAmericanIndian: "South American Indian",

  /**
   * value: "Criollo"
   * @const
   */
  criollo: "Criollo",
};
/**
 * @member {module:model/PatientsPatientEthnicities.Level3DisplayEnum} level3Display
 */
PatientsPatientEthnicities.prototype.level3Display = undefined;
