var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i]
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
                }
                return t
            }
        return __assign.apply(this, arguments)
    }
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value)
                  })
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value))
                } catch (e) {
                    reject(e)
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value))
                } catch (e) {
                    reject(e)
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
    }
var __generator =
    (this && this.__generator) ||
    function (thisArg, body) {
        var _ = {
                label: 0,
                sent: function () {
                    if (t[0] & 1) throw t[1]
                    return t[1]
                },
                trys: [],
                ops: [],
            },
            f,
            y,
            t,
            g
        return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === 'function' &&
                (g[Symbol.iterator] = function () {
                    return this
                }),
            g
        )
        function verb(n) {
            return function (v) {
                return step([n, v])
            }
        }
        function step(op) {
            if (f) throw new TypeError('Generator is already executing.')
            while ((g && ((g = 0), op[0] && (_ = 0)), _))
                try {
                    if (
                        ((f = 1),
                        y &&
                            (t =
                                op[0] & 2
                                    ? y['return']
                                    : op[0]
                                    ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                                    : y.next) &&
                            !(t = t.call(y, op[1])).done)
                    )
                        return t
                    if (((y = 0), t)) op = [op[0] & 2, t.value]
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op
                            break
                        case 4:
                            _.label++
                            return { value: op[1], done: false }
                        case 5:
                            _.label++
                            y = op[1]
                            op = [0]
                            continue
                        case 7:
                            op = _.ops.pop()
                            _.trys.pop()
                            continue
                        default:
                            if (
                                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                                (op[0] === 6 || op[0] === 2)
                            ) {
                                _ = 0
                                continue
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1]
                                break
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1]
                                t = op
                                break
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2]
                                _.ops.push(op)
                                break
                            }
                            if (t[2]) _.ops.pop()
                            _.trys.pop()
                            continue
                    }
                    op = body.call(thisArg, _)
                } catch (e) {
                    op = [6, e]
                    y = 0
                } finally {
                    f = t = 0
                }
            if (op[0] & 5) throw op[1]
            return { value: op[0] ? op[1] : void 0, done: true }
        }
    }
import { WebExperiments } from './web-experiments'
import { RequestRouter } from './utils/request-router'
describe('Web Experimentation', function () {
    var webExperiment
    var posthog
    var persistence
    var experimentsResponse
    var signupButtonWebExperimentWithFeatureFlag = {
        id: 3,
        name: 'Signup button test',
        feature_flag_key: 'signup-button-test',
        variants: {
            Signup: {
                transforms: [
                    {
                        selector: '#set-user-properties',
                        text: 'Sign me up',
                        html: 'Sign me up',
                    },
                ],
            },
            'Send-it': {
                transforms: [
                    {
                        selector: '#set-user-properties',
                        text: 'Send it',
                        html: 'Send it',
                    },
                ],
            },
            'css-transform': {
                transforms: [
                    {
                        selector: '#set-user-properties',
                        className: 'primary',
                    },
                ],
            },
            'innerhtml-transform': {
                transforms: [
                    {
                        selector: '#set-user-properties',
                        html: '<h1>hello world</h1>',
                    },
                ],
            },
            control: {
                transforms: [
                    {
                        selector: '#set-user-properties',
                        text: 'Sign up',
                        html: 'Sign up',
                    },
                ],
            },
        },
    }
    var buttonWebExperimentWithUrlConditions = {
        id: 3,
        name: 'Signup button test',
        variants: {
            Signup: {
                conditions: {
                    url: 'https://example.com/Signup',
                    urlMatchType: 'exact',
                },
                transforms: [
                    {
                        selector: '#set-user-properties',
                        text: 'Sign me up',
                        html: 'Sign me up',
                    },
                ],
            },
            'Send-it': {
                conditions: { url: 'regex-url', urlMatchType: 'regex' },
                transforms: [
                    {
                        selector: '#set-user-properties',
                        text: 'Send it',
                        html: 'Send it',
                    },
                ],
            },
            control: {
                conditions: { url: 'checkout', urlMatchType: 'icontains' },
                transforms: [
                    {
                        selector: '#set-user-properties',
                        text: 'Sign up',
                        html: 'Sign up',
                    },
                ],
            },
        },
    }
    beforeEach(function () {
        persistence = { props: {}, register: jest.fn() }
        posthog = makePostHog({
            config: {
                disable_web_experiments: false,
                api_host: 'https://test.com',
                token: 'testtoken',
                autocapture: true,
                region: 'us-east-1',
            },
            persistence: persistence,
            get_property: jest.fn(),
            _send_request: jest.fn().mockImplementation(function (_a) {
                var callback = _a.callback
                return callback({ statusCode: 200, json: experimentsResponse })
            }),
            consent: {
                isOptedOut: function () {
                    return true
                },
            },
        })
        posthog.requestRouter = new RequestRouter(posthog)
        webExperiment = new WebExperiments(posthog)
    })
    function createTestDocument() {
        // eslint-disable-next-line no-restricted-globals
        var elTarget = document.createElement('img')
        elTarget.id = 'primary_button'
        // eslint-disable-next-line no-restricted-globals
        var elParent = document.createElement('span')
        elParent.innerText = 'unassigned'
        elParent.className = 'unassigned'
        elParent.appendChild(elTarget)
        // eslint-disable-next-line no-restricted-globals
        document.querySelectorAll = function () {
            return [elParent]
        }
        return elParent
    }
    function testUrlMatch(testLocation, expectedText) {
        experimentsResponse = {
            experiments: [buttonWebExperimentWithUrlConditions],
        }
        var webExperiment = new WebExperiments(posthog)
        var elParent = createTestDocument()
        WebExperiments.getWindowLocation = function () {
            // eslint-disable-next-line compat/compat
            return new URL(testLocation)
        }
        webExperiment.getWebExperimentsAndEvaluateDisplayLogic(false)
        expect(elParent.innerText).toEqual(expectedText)
    }
    function assertElementChanged(variant, expectedProperty, value) {
        var elParent = createTestDocument()
        webExperiment = new WebExperiments(posthog)
        webExperiment.afterDecideResponse({
            featureFlags: {
                'signup-button-test': variant,
            },
        })
        switch (expectedProperty) {
            case 'className':
                expect(elParent.className).toEqual(value)
                break
            case 'innerText':
                expect(elParent.innerText).toEqual(value)
                break
            case 'innerHTML':
                expect(elParent.innerHTML).toEqual(value)
                break
        }
    }
    describe('url match conditions', function () {
        it('exact location match', function () {
            var testLocation = 'https://example.com/Signup'
            var expectedText = 'Sign me up'
            testUrlMatch(testLocation, expectedText)
        })
        it('regex location match', function () {
            var testLocation = 'https://regex-url.com/test'
            var expectedText = 'Send it'
            testUrlMatch(testLocation, expectedText)
        })
        it('icontains location match', function () {
            var testLocation = 'https://example.com/checkout'
            var expectedText = 'Sign up'
            testUrlMatch(testLocation, expectedText)
        })
    })
    describe('utm match conditions', function () {
        it('can disqualify on utm terms', function () {
            var buttonWebExperimentWithUTMConditions = buttonWebExperimentWithUrlConditions
            buttonWebExperimentWithUTMConditions.variants['Signup'].conditions = {
                utm: {
                    utm_campaign: 'marketing',
                    utm_medium: 'desktop',
                },
            }
            var testLocation = 'https://example.com/landing-page?utm_campaign=marketing&utm_medium=mobile'
            var expectedText = 'unassigned'
            testUrlMatch(testLocation, expectedText)
        })
    })
    describe('with feature flags', function () {
        it('experiments are disabled by default', function () {
            return __awaiter(void 0, void 0, void 0, function () {
                var expResponse, disabledPostHog
                return __generator(this, function (_a) {
                    expResponse = {
                        experiments: [signupButtonWebExperimentWithFeatureFlag],
                    }
                    disabledPostHog = makePostHog({
                        config: {
                            api_host: 'https://test.com',
                            token: 'testtoken',
                            autocapture: true,
                            region: 'us-east-1',
                        },
                        persistence: persistence,
                        get_property: jest.fn(),
                        _send_request: jest.fn().mockImplementation(function (_a) {
                            var callback = _a.callback
                            return callback({ statusCode: 200, json: expResponse })
                        }),
                        consent: {
                            isOptedOut: function () {
                                return true
                            },
                        },
                    })
                    posthog.requestRouter = new RequestRouter(disabledPostHog)
                    webExperiment = new WebExperiments(disabledPostHog)
                    assertElementChanged('control', 'innerText', 'unassigned')
                    return [2 /*return*/]
                })
            })
        })
        it('can set text of Span Element', function () {
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    experimentsResponse = {
                        experiments: [signupButtonWebExperimentWithFeatureFlag],
                    }
                    assertElementChanged('control', 'innerText', 'Sign up')
                    return [2 /*return*/]
                })
            })
        })
        it('can set className of Span Element', function () {
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    experimentsResponse = {
                        experiments: [signupButtonWebExperimentWithFeatureFlag],
                    }
                    assertElementChanged('css-transform', 'className', 'primary')
                    return [2 /*return*/]
                })
            })
        })
        it('can set innerHtml of Span Element', function () {
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    experimentsResponse = {
                        experiments: [signupButtonWebExperimentWithFeatureFlag],
                    }
                    assertElementChanged('innerhtml-transform', 'innerHTML', '<h1>hello world</h1>')
                    return [2 /*return*/]
                })
            })
        })
    })
    function makePostHog(ph) {
        return __assign(
            {
                get_distinct_id: function () {
                    return 'distinctid'
                },
            },
            ph
        )
    }
})
//# sourceMappingURL=web-experiments.test.js.map
