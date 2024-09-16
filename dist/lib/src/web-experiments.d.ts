import { PostHog } from './posthog-core'
import { DecideResponse } from './types'
import { WebExperimentsCallback, WebExperimentUrlMatchType } from './web-experiments-types'
export declare const webExperimentUrlValidationMap: Record<
    WebExperimentUrlMatchType,
    (conditionsUrl: string, location: Location) => boolean
>
export declare class WebExperiments {
    instance: PostHog
    private _featureFlags?
    private _flagToExperiments?
    constructor(instance: PostHog)
    applyFeatureFlagChanges(flags: string[]): void
    afterDecideResponse(response: DecideResponse): void
    loadIfEnabled(): void
    getWebExperimentsAndEvaluateDisplayLogic: (forceReload?: boolean) => void
    getWebExperiments(callback: WebExperimentsCallback, forceReload: boolean): void
    private static matchesTestVariant
    private static matchUrlConditions
    static getWindowLocation(): Location | undefined
    private static matchUTMConditions
    private static logInfo
    private static applyTransforms
}
