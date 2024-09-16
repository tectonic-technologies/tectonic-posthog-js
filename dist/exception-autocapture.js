!(function () {
    'use strict'
    function e(e, n) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
            var t = Object.getOwnPropertySymbols(e)
            n &&
                (t = t.filter(function (n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                })),
                r.push.apply(r, t)
        }
        return r
    }
    function n(n) {
        for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {}
            t % 2
                ? e(Object(o), !0).forEach(function (e) {
                      r(n, e, o[e])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                : e(Object(o)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                  })
        }
        return n
    }
    function r(e, n, r) {
        return (
            n in e
                ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                : (e[n] = r),
            e
        )
    }
    function t(e, n) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e
            })(e) ||
            (function (e, n) {
                var r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
                if (null == r) return
                var t,
                    o,
                    i = [],
                    a = !0,
                    c = !1
                try {
                    for (r = r.call(e); !(a = (t = r.next()).done) && (i.push(t.value), !n || i.length !== n); a = !0);
                } catch (e) {
                    ;(c = !0), (o = e)
                } finally {
                    try {
                        a || null == r.return || r.return()
                    } finally {
                        if (c) throw o
                    }
                }
                return i
            })(e, n) ||
            o(e, n) ||
            (function () {
                throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
            })()
        )
    }
    function o(e, n) {
        if (e) {
            if ('string' == typeof e) return i(e, n)
            var r = Object.prototype.toString.call(e).slice(8, -1)
            return (
                'Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r
                    ? Array.from(e)
                    : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? i(e, n)
                    : void 0
            )
        }
    }
    function i(e, n) {
        ;(null == n || n > e.length) && (n = e.length)
        for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r]
        return t
    }
    function a(e, n) {
        var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
        if (!r) {
            if (Array.isArray(e) || (r = o(e)) || (n && e && 'number' == typeof e.length)) {
                r && (e = r)
                var t = 0,
                    i = function () {}
                return {
                    s: i,
                    n: function () {
                        return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: i,
                }
            }
            throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
        }
        var a,
            c = !0,
            l = !1
        return {
            s: function () {
                r = r.call(e)
            },
            n: function () {
                var e = r.next()
                return (c = e.done), e
            },
            e: function (e) {
                ;(l = !0), (a = e)
            },
            f: function () {
                try {
                    c || null == r.return || r.return()
                } finally {
                    if (l) throw a
                }
            },
        }
    }
    var c = Array.isArray,
        l = Object.prototype.toString,
        u =
            c ||
            function (e) {
                return '[object Array]' === l.call(e)
            },
        f = function (e) {
            return 'function' == typeof e
        },
        s = function (e) {
            return e === Object(e) && !u(e)
        },
        p = function (e) {
            return void 0 === e
        },
        v = function (e) {
            return '[object String]' == l.call(e)
        },
        d = function (e) {
            return v(e) && 0 === e.trim().length
        },
        y = function (e) {
            return null === e
        },
        g = function (e) {
            return '[object Number]' == l.call(e)
        }
    function _(e) {
        return !p(Event) && h(e, Event)
    }
    function h(e, n) {
        try {
            return e instanceof n
        } catch (e) {
            return !1
        }
    }
    function b(e, n) {
        return Object.prototype.toString.call(e) === '[object '.concat(n, ']')
    }
    function x(e) {
        return b(e, 'DOMError')
    }
    var m = /\(error: (.*)\)/,
        O = 50,
        w = '?'
    function $(e, n, r, t) {
        var o = { filename: e, function: n, in_app: !0 }
        return p(r) || (o.lineno = r), p(t) || (o.colno = t), o
    }
    var j =
            /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        E = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        S =
            /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        A = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        T = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i
    var P,
        D = function () {
            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t]
            var o = r
                .sort(function (e, n) {
                    return e[0] - n[0]
                })
                .map(function (e) {
                    return e[1]
                })
            return function (e) {
                for (
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        t = [],
                        i = e.split('\n'),
                        c = r;
                    c < i.length;
                    c++
                ) {
                    var l = i[c]
                    if (!(l.length > 1024)) {
                        var u = m.test(l) ? l.replace(m, '$1') : l
                        if (!u.match(/\S*Error: /)) {
                            var f,
                                s = a(o)
                            try {
                                for (s.s(); !(f = s.n()).done; ) {
                                    var p = (0, f.value)(u)
                                    if (p) {
                                        t.push(p)
                                        break
                                    }
                                }
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                            if (t.length >= O) break
                        }
                    }
                }
                return (function (e) {
                    if (!e.length) return []
                    var r = e.slice(0, O)
                    return (
                        r.reverse(),
                        r.map(function (e) {
                            return n(
                                n({}, e),
                                {},
                                { filename: e.filename || r[r.length - 1].filename, function: e.function || '?' }
                            )
                        })
                    )
                })(t)
            }
        }.apply(void 0, [
            [
                30,
                function (e) {
                    var n = j.exec(e)
                    if (n) {
                        if (n[2] && 0 === n[2].indexOf('eval')) {
                            var r = E.exec(n[2])
                            r && ((n[2] = r[1]), (n[3] = r[2]), (n[4] = r[3]))
                        }
                        var o = t(M(n[1] || w, n[2]), 2),
                            i = o[0]
                        return $(o[1], i, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0)
                    }
                },
            ],
            [
                50,
                function (e) {
                    var n = S.exec(e)
                    if (n) {
                        if (n[3] && n[3].indexOf(' > eval') > -1) {
                            var r = A.exec(n[3])
                            r && ((n[1] = n[1] || 'eval'), (n[3] = r[1]), (n[4] = r[2]), (n[5] = ''))
                        }
                        var o = n[3],
                            i = n[1] || w,
                            a = t(M(i, o), 2)
                        return (i = a[0]), $((o = a[1]), i, n[4] ? +n[4] : void 0, n[5] ? +n[5] : void 0)
                    }
                },
            ],
            [
                40,
                function (e) {
                    var n = T.exec(e)
                    return n ? $(n[2], n[1] || w, +n[3], n[4] ? +n[4] : void 0) : void 0
                },
            ],
        ]),
        M = function (e, n) {
            var r = -1 !== e.indexOf('safari-extension'),
                t = -1 !== e.indexOf('safari-web-extension')
            return r || t
                ? [
                      -1 !== e.indexOf('@') ? e.split('@')[0] : w,
                      r ? 'safari-extension:'.concat(n) : 'safari-web-extension:'.concat(n),
                  ]
                : [e, n]
        }
    !(function (e) {
        ;(e.GZipJS = 'gzip-js'), (e.Base64 = 'base64')
    })(P || (P = {}))
    var R = ['fatal', 'error', 'warning', 'log', 'info', 'debug'],
        N = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
        U = /Minified React error #\d+;/i
    function k(e) {
        var n = e.stacktrace || e.stack || '',
            r = (function (e) {
                if (e) {
                    if (g(e.framesToPop)) return e.framesToPop
                    if (U.test(e.message)) return 1
                }
                return 0
            })(e)
        try {
            return D(n, r)
        } catch (e) {}
        return []
    }
    function I(e) {
        var n = k(e)
        return {
            $exception_type: e.name,
            $exception_message: e.message,
            $exception_stack_trace_raw: JSON.stringify(n),
            $exception_level: 'error',
        }
    }
    function H(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
            r = Object.keys(e)
        if ((r.sort(), !r.length)) return '[object has no keys]'
        for (var t = r.length; t > 0; t--) {
            var o = r.slice(0, t).join(', ')
            if (!(o.length > n)) return t === r.length || o.length <= n ? o : ''.concat(o.slice(0, n), '...')
        }
        return ''
    }
    function G(e) {
        return v(e) && !d(e) && R.indexOf(e) >= 0
    }
    function z(e) {
        var r = t(e, 5),
            o = r[0],
            i = r[1],
            a = r[2],
            c = r[3],
            l = r[4],
            u = {}
        if (p(l) && v(o)) {
            var f = 'Error',
                s = o,
                d = o.match(N)
            d && ((f = d[1]), (s = d[2])), (u = { $exception_type: f, $exception_message: s })
        }
        var y = l || o
        if (
            x(y) ||
            (function (e) {
                return b(e, 'DOMException')
            })(y)
        ) {
            var g = y
            if (
                (function (e) {
                    return 'stack' in e
                })(y)
            )
                u = I(y)
            else {
                var m = g.name || (x(g) ? 'DOMError' : 'DOMException'),
                    O = g.message ? ''.concat(m, ': ').concat(g.message) : m
                ;(u = (function (e) {
                    return { $exception_type: 'Error', $exception_message: e, $exception_level: 'error' }
                })(O)),
                    (u.$exception_type = x(g) ? 'DOMError' : 'DOMException'),
                    (u.$exception_message = u.$exception_message || O)
            }
            'code' in g && (u.$exception_DOMException_code = ''.concat(g.code))
        } else if (
            (function (e) {
                return b(e, 'ErrorEvent')
            })(y) &&
            y.error
        )
            u = I(y.error)
        else if (
            (function (e) {
                switch (Object.prototype.toString.call(e)) {
                    case '[object Error]':
                    case '[object Exception]':
                    case '[object DOMException]':
                        return !0
                    default:
                        return h(e, Error)
                }
            })(y)
        )
            u = I(y)
        else if (
            (function (e) {
                return b(e, 'Object')
            })(y) ||
            _(y)
        ) {
            ;(u = (function (e) {
                return {
                    $exception_type: _(e) ? e.constructor.name : 'Error',
                    $exception_message: 'Non-Error '.concat('exception', ' captured with keys: ', H(e)),
                    $exception_level: G(e.level) ? e.level : 'error',
                }
            })(y)),
                (u.$exception_is_synthetic = !0)
        } else
            (u.$exception_type = u.$exception_type || 'Error'),
                (u.$exception_message = u.$exception_message || y),
                (u.$exception_is_synthetic = !0)
        return n(
            n(
                n(
                    n({}, u),
                    {},
                    {
                        $exception_type: u.$exception_type || 'UnknownErrorType',
                        $exception_message: u.$exception_message || '',
                        $exception_level: G(u.$exception_level) ? u.$exception_level : 'error',
                    },
                    i ? { $exception_source: i } : {}
                ),
                a ? { $exception_lineno: a } : {}
            ),
            c ? { $exception_colno: c } : {}
        )
    }
    function q(e) {
        var r = t(e, 1)[0],
            o = r
        try {
            'reason' in r ? (o = r.reason) : 'detail' in r && 'reason' in r.detail && (o = r.detail.reason)
        } catch (e) {}
        var i,
            a = {}
        return (
            ((a =
                y((i = o)) || (!s(i) && !f(i))
                    ? { $exception_message: 'Non-Error promise rejection captured with value: '.concat(String(o)) }
                    : z([o])).$exception_handled = !1),
            n(
                n({}, a),
                {},
                {
                    $exception_type: (a.$exception_type = 'UnhandledRejection'),
                    $exception_message: (a.$exception_message = a.$exception_message || r.reason || String(o)),
                    $exception_level: G(a.$exception_level) ? a.$exception_level : 'error',
                }
            )
        )
    }
    var C = 'undefined' != typeof window ? window : void 0,
        L = 'undefined' != typeof globalThis ? globalThis : C,
        X = null == L ? void 0 : L.navigator
    null == L || L.document,
        null == L || L.location,
        null == L || L.fetch,
        null != L && L.XMLHttpRequest && 'withCredentials' in new L.XMLHttpRequest() && L.XMLHttpRequest,
        null == L || L.AbortController,
        null == X || X.userAgent
    var B = null != C ? C : {},
        J = '[PostHog.js]',
        W = {
            _log: function (e) {
                if (C && B.POSTHOG_DEBUG && !p(C.console) && C.console) {
                    for (
                        var n = ('__rrweb_original__' in C.console[e]) ? C.console[e].__rrweb_original__ : C.console[e],
                            r = arguments.length,
                            t = new Array(r > 1 ? r - 1 : 0),
                            o = 1;
                        o < r;
                        o++
                    )
                        t[o - 1] = arguments[o]
                    n.apply(void 0, [J].concat(t))
                }
            },
            info: function () {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]
                W._log.apply(W, ['log'].concat(n))
            },
            warn: function () {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]
                W._log.apply(W, ['warn'].concat(n))
            },
            error: function () {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]
                W._log.apply(W, ['error'].concat(n))
            },
            critical: function () {
                for (var e, n = arguments.length, r = new Array(n), t = 0; t < n; t++) r[t] = arguments[t]
                ;(e = console).error.apply(e, [J].concat(r))
            },
            uninitializedWarning: function (e) {
                W.error('You must initialize PostHog before calling '.concat(e))
            },
        },
        F = {
            wrapOnError: function (e) {
                var n = C
                n || W.info('window not available, cannot wrap onerror')
                var r = n.onerror
                return (
                    (n.onerror = function () {
                        for (var n, t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i]
                        var a = z(o)
                        return e(a), null !== (n = null == r ? void 0 : r.apply(void 0, o)) && void 0 !== n && n
                    }),
                    (n.onerror.__POSTHOG_INSTRUMENTED__ = !0),
                    function () {
                        var e
                        null === (e = n.onerror) || void 0 === e || delete e.__POSTHOG_INSTRUMENTED__, (n.onerror = r)
                    }
                )
            },
            wrapUnhandledRejection: function (e) {
                var n = C
                n || W.info('window not available, cannot wrap onUnhandledRejection')
                var r = n.onunhandledrejection
                return (
                    (n.onunhandledrejection = function () {
                        for (var t, o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a]
                        var c = q(i)
                        return e(c), null !== (t = null == r ? void 0 : r.apply(n, i)) && void 0 !== t && t
                    }),
                    (n.onunhandledrejection.__POSTHOG_INSTRUMENTED__ = !0),
                    function () {
                        var e
                        null === (e = n.onunhandledrejection) || void 0 === e || delete e.__POSTHOG_INSTRUMENTED__,
                            (n.onunhandledrejection = r)
                    }
                )
            },
        }
    C && ((C.posthogErrorWrappingFunctions = F), (C.parseErrorAsProperties = z))
})()
//# sourceMappingURL=exception-autocapture.js.map
