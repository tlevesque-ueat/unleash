/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.22.0-beta.55
 */
import type { ChangeRequestEventSchemaPayload } from './changeRequestEventSchemaPayload';
import type { ChangeRequestEventSchemaCreatedBy } from './changeRequestEventSchemaCreatedBy';

export interface ChangeRequestEventSchema {
    id: number;
    action: string;
    conflict?: string;
    payload: ChangeRequestEventSchemaPayload;
    updatedBy?: string;
    createdBy?: ChangeRequestEventSchemaCreatedBy;
    createdAt?: string;
}
