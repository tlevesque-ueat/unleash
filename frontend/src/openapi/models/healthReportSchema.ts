/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.22.0-beta.55
 */
import type { FeatureSchema } from './featureSchema';
import type { ProjectStatsSchema } from './projectStatsSchema';

export interface HealthReportSchema {
    version: number;
    name: string;
    description?: string | null;
    members?: number;
    health?: number;
    environments?: string[];
    features?: FeatureSchema[];
    updatedAt?: string | null;
    favorite?: boolean;
    /** Project statistics */
    stats?: ProjectStatsSchema;
    potentiallyStaleCount: number;
    activeCount: number;
    staleCount: number;
}
