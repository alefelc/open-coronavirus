/**
 * coronavirus-server
 * coronavirus-server
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { InstallationFields } from './installationFields';


export interface InstallationFilter { 
    offset?: number;
    limit?: number;
    skip?: number;
    order?: Array<string>;
    fields?: InstallationFields;
}
