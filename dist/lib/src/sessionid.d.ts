import { PostHogPersistence } from './posthog-persistence'
import { PostHogConfig, SessionIdChangedCallback } from './types'
export declare class SessionIdManager {
    private readonly _sessionIdGenerator
    private readonly _windowIdGenerator
    private config
    private persistence
    private _windowId
    private _sessionId
    private readonly _window_id_storage_key
    private readonly _primary_window_exists_storage_key
    private _sessionStartTimestamp
    private _sessionActivityTimestamp
    private readonly _sessionTimeoutMs
    private _sessionIdChangedHandlers
    constructor(
        config: Partial<PostHogConfig>,
        persistence: PostHogPersistence,
        sessionIdGenerator?: () => string,
        windowIdGenerator?: () => string
    )
    onSessionId(callback: SessionIdChangedCallback): () => void
    private _canUseSessionStorage
    private _setWindowId
    private _getWindowId
    private _setSessionId
    private _getSessionId
    resetSessionId(): void
    private _listenToReloadWindow
    checkAndGetSessionAndWindowId(
        readOnly?: boolean,
        _timestamp?: number | null
    ): {
        sessionId: string
        windowId: string
        sessionStartTimestamp: number
    }
}
