/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.22.0-beta.55
 */
import type { PlaygroundFeatureSchemaVariantPayloadType } from './playgroundFeatureSchemaVariantPayloadType';

/**
 * An optional payload attached to the variant.
 */
export type PlaygroundFeatureSchemaVariantPayload = {
    /** The format of the payload. */
    type: PlaygroundFeatureSchemaVariantPayloadType;
    /** The payload value stringified. */
    value: string;
};
