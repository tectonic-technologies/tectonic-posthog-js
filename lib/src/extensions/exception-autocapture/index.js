import { window } from '../../utils/globals'
import { logger } from '../../utils/logger'
import { EXCEPTION_CAPTURE_ENABLED_SERVER_SIDE } from '../../constants'
import Config from '../../config'
var LOGGER_PREFIX = '[Exception Autocapture]'
var ExceptionObserver = /** @class */ (function () {
    function ExceptionObserver(instance) {
        var _this = this
        var _a
        this.originalOnUnhandledRejectionHandler = undefined
        this.startCapturing = function () {
            if (!window || !_this.isEnabled || _this.hasHandlers || _this.isCapturing) {
                return
            }
            var wrapOnError = window.posthogErrorWrappingFunctions.wrapOnError
            var wrapUnhandledRejection = window.posthogErrorWrappingFunctions.wrapUnhandledRejection
            if (!wrapOnError || !wrapUnhandledRejection) {
                logger.error(LOGGER_PREFIX + ' failed to load error wrapping functions - cannot start')
                return
            }
            try {
                _this.unwrapOnError = wrapOnError(_this.captureException.bind(_this))
                _this.unwrapUnhandledRejection = wrapUnhandledRejection(_this.captureException.bind(_this))
            } catch (e) {
                logger.error(LOGGER_PREFIX + ' failed to start', e)
                _this.stopCapturing()
            }
        }
        this.instance = instance
        this.remoteEnabled = !!((_a = this.instance.persistence) === null || _a === void 0
            ? void 0
            : _a.props[EXCEPTION_CAPTURE_ENABLED_SERVER_SIDE])
        this.startIfEnabled()
    }
    Object.defineProperty(ExceptionObserver.prototype, 'isEnabled', {
        get: function () {
            var _a
            return (_a = this.remoteEnabled) !== null && _a !== void 0 ? _a : false
        },
        enumerable: false,
        configurable: true,
    })
    Object.defineProperty(ExceptionObserver.prototype, 'isCapturing', {
        get: function () {
            var _a
            return !!((_a = window === null || window === void 0 ? void 0 : window.onerror) === null || _a === void 0
                ? void 0
                : _a.__POSTHOG_INSTRUMENTED__)
        },
        enumerable: false,
        configurable: true,
    })
    Object.defineProperty(ExceptionObserver.prototype, 'hasHandlers', {
        get: function () {
            return this.originalOnUnhandledRejectionHandler || this.unwrapOnError
        },
        enumerable: false,
        configurable: true,
    })
    ExceptionObserver.prototype.startIfEnabled = function () {
        if (this.isEnabled && !this.isCapturing) {
            logger.info(LOGGER_PREFIX + ' enabled, starting...')
            this.loadScript(this.startCapturing)
        }
    }
    ExceptionObserver.prototype.loadScript = function (cb) {
        if (this.hasHandlers) {
            // already loaded
            cb()
        }
        this.instance.requestRouter.loadScript(
            '/static/exception-autocapture.js?v='.concat(Config.LIB_VERSION),
            function (err) {
                if (err) {
                    return logger.error(LOGGER_PREFIX + ' failed to load script', err)
                }
                cb()
            }
        )
    }
    ExceptionObserver.prototype.stopCapturing = function () {
        var _a, _b
        ;(_a = this.unwrapOnError) === null || _a === void 0 ? void 0 : _a.call(this)
        ;(_b = this.unwrapUnhandledRejection) === null || _b === void 0 ? void 0 : _b.call(this)
    }
    ExceptionObserver.prototype.afterDecideResponse = function (response) {
        var _a
        var autocaptureExceptionsResponse = response.autocaptureExceptions
        // store this in-memory in case persistence is disabled
        this.remoteEnabled = !!autocaptureExceptionsResponse || false
        if (this.instance.persistence) {
            this.instance.persistence.register(
                ((_a = {}), (_a[EXCEPTION_CAPTURE_ENABLED_SERVER_SIDE] = this.remoteEnabled), _a)
            )
        }
        this.startIfEnabled()
    }
    ExceptionObserver.prototype.captureException = function (errorProperties) {
        var posthogHost = this.instance.requestRouter.endpointFor('ui')
        errorProperties.$exception_personURL = ''
            .concat(posthogHost, '/project/')
            .concat(this.instance.config.token, '/person/')
            .concat(this.instance.get_distinct_id())
        this.instance.exceptions.sendExceptionEvent(errorProperties)
    }
    return ExceptionObserver
})()
export { ExceptionObserver }
//# sourceMappingURL=index.js.map
