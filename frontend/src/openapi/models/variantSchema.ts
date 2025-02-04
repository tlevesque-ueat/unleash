/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.22.0-beta.55
 */
import type { VariantSchemaPayload } from './variantSchemaPayload';
import type { OverrideSchema } from './overrideSchema';

export interface VariantSchema {
    name: string;
    weight: number;
    weightType?: string;
    stickiness?: string;
    payload?: VariantSchemaPayload;
    overrides?: OverrideSchema[];
}
