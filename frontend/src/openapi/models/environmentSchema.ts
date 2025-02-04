/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.22.0-beta.55
 */

/**
 * A definition of the project environment
 */
export interface EnvironmentSchema {
    /** The name of the environment */
    name: string;
    /** The type of the environment */
    type: string;
    /** `true` if the environment is enabled for the project, otherwise `false`. */
    enabled: boolean;
    protected?: boolean;
    /** The sort order of the environment in the environments list */
    sortOrder?: number;
    /** The number of projects with this environment */
    projectCount?: number | null;
    /** The number of API tokens for the project environment */
    apiTokenCount?: number | null;
    /** The number of enabled toggles for the project environment */
    enabledToggleCount?: number | null;
}
