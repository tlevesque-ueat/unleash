/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.22.0-beta.55
 */
import type { RoleSchema } from './roleSchema';

export interface TokenUserSchema {
    id: number;
    name: string;
    email: string;
    token: string;
    createdBy: string | null;
    role: RoleSchema;
}
