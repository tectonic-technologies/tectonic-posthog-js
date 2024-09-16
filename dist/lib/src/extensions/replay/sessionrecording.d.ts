import { PostHog } from '../../posthog-core'
import { DecideResponse } from '../../types'
import { type eventWithTime } from '@rrweb/types'
export declare const RECORDING_IDLE_ACTIVITY_TIMEOUT_MS: number
export declare const RECORDING_MAX_EVENT_SIZE: number
export declare const RECORDING_BUFFER_TIMEOUT = 2000
export declare const SESSION_RECORDING_BATCH_KEY = 'recordings'
export interface SnapshotBuffer {
    size: number
    data: any[]
    sessionId: string
    windowId: string
}
export declare class SessionRecording {
    private readonly instance
    private _endpoint
    private flushBufferTimer?
    private buffer
    private queuedRRWebEvents
    private mutationRateLimiter?
    private _captureStarted
    private stopRrweb
    private receivedDecide
    private isIdle
    private _linkedFlagSeen
    private _lastActivityTimestamp
    private windowId
    private sessionId
    private _linkedFlag
    private _fullSnapshotTimer?
    private _removePageViewCaptureHook
    private _lastHref?
    _forceAllowLocalhostNetworkCapture: boolean
    private get rrwebRecord()
    get started(): boolean
    private get sessionManager()
    private get fullSnapshotIntervalMillis()
    private get isSampled()
    private get sessionDuration()
    private get isRecordingEnabled()
    private get isConsoleLogCaptureEnabled()
    private get canvasRecording()
    private get networkPayloadCapture()
    private get sampleRate()
    private get minimumDuration()
    /**
     * defaults to buffering mode until a decide response is received
     * once a decide response is received status can be disabled, active or sampled
     */
    private get status()
    constructor(instance: PostHog)
    private _onBeforeUnload
    private _onOffline
    private _onOnline
    private _onVisibilityChange
    startIfEnabledOrStop(): void
    stopRecording(): void
    private makeSamplingDecision
    afterDecideResponse(response: DecideResponse): void
    private _samplingSessionListener
    /**
     * This might be called more than once so needs to be idempotent
     */
    private _setupSampling
    private _persistDecideResponse
    log(message: string, level?: 'log' | 'warn' | 'error'): void
    private _startCapture
    private isInteractiveEvent
    private _updateWindowAndSessionIds
    private _tryRRWebMethod
    private _tryAddCustomEvent
    private _tryTakeFullSnapshot
    private _onScriptLoaded
    private _scheduleFullSnapshot
    private _gatherRRWebPlugins
    onRRwebEmit(rawEvent: eventWithTime): void
    private _pageViewFallBack
    private _processQueuedEvents
    private _maskUrl
    private clearBuffer
    private _flushBuffer
    private _captureSnapshotBuffered
    private _captureSnapshot
    /**
     * this ignores the linked flag config and causes capture to start
     * (if recording would have started had the flag been received i.e. it does not override other config).
     *
     * It is not usual to call this directly,
     * instead call `posthog.startSessionRecording({linked_flag: true})`
     * */
    overrideLinkedFlag(): void
}
