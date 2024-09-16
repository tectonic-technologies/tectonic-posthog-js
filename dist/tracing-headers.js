!(function () {
    'use strict'
    function t() {
        t = function () {
            return r
        }
        var r = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            u = o.toStringTag || '@@toStringTag'
        function c(t, r, e) {
            return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r]
        }
        try {
            c({}, '')
        } catch (t) {
            c = function (t, r, e) {
                return (t[r] = e)
            }
        }
        function f(t, r, e, n) {
            var o = r && r.prototype instanceof s ? r : s,
                i = Object.create(o.prototype),
                a = new _(n || [])
            return (
                (i._invoke = (function (t, r, e) {
                    var n = 'suspendedStart'
                    return function (o, i) {
                        if ('executing' === n) throw new Error('Generator is already running')
                        if ('completed' === n) {
                            if ('throw' === o) throw i
                            return S()
                        }
                        for (e.method = o, e.arg = i; ; ) {
                            var a = e.delegate
                            if (a) {
                                var u = x(a, e)
                                if (u) {
                                    if (u === l) continue
                                    return u
                                }
                            }
                            if ('next' === e.method) e.sent = e._sent = e.arg
                            else if ('throw' === e.method) {
                                if ('suspendedStart' === n) throw ((n = 'completed'), e.arg)
                                e.dispatchException(e.arg)
                            } else 'return' === e.method && e.abrupt('return', e.arg)
                            n = 'executing'
                            var c = h(t, r, e)
                            if ('normal' === c.type) {
                                if (((n = e.done ? 'completed' : 'suspendedYield'), c.arg === l)) continue
                                return { value: c.arg, done: e.done }
                            }
                            'throw' === c.type && ((n = 'completed'), (e.method = 'throw'), (e.arg = c.arg))
                        }
                    }
                })(t, e, a)),
                i
            )
        }
        function h(t, r, e) {
            try {
                return { type: 'normal', arg: t.call(r, e) }
            } catch (t) {
                return { type: 'throw', arg: t }
            }
        }
        r.wrap = f
        var l = {}
        function s() {}
        function p() {}
        function d() {}
        var v = {}
        c(v, i, function () {
            return this
        })
        var y = Object.getPrototypeOf,
            g = y && y(y(O([])))
        g && g !== e && n.call(g, i) && (v = g)
        var w = (d.prototype = s.prototype = Object.create(v))
        function m(t) {
            ;['next', 'throw', 'return'].forEach(function (r) {
                c(t, r, function (t) {
                    return this._invoke(r, t)
                })
            })
        }
        function L(t, r) {
            function e(o, i, a, u) {
                var c = h(t[o], t, i)
                if ('throw' !== c.type) {
                    var f = c.arg,
                        l = f.value
                    return l && 'object' == typeof l && n.call(l, '__await')
                        ? r.resolve(l.__await).then(
                              function (t) {
                                  e('next', t, a, u)
                              },
                              function (t) {
                                  e('throw', t, a, u)
                              }
                          )
                        : r.resolve(l).then(
                              function (t) {
                                  ;(f.value = t), a(f)
                              },
                              function (t) {
                                  return e('throw', t, a, u)
                              }
                          )
                }
                u(c.arg)
            }
            var o
            this._invoke = function (t, n) {
                function i() {
                    return new r(function (r, o) {
                        e(t, n, r, o)
                    })
                }
                return (o = o ? o.then(i, i) : i())
            }
        }
        function x(t, r) {
            var e = t.iterator[r.method]
            if (void 0 === e) {
                if (((r.delegate = null), 'throw' === r.method)) {
                    if (t.iterator.return && ((r.method = 'return'), (r.arg = void 0), x(t, r), 'throw' === r.method))
                        return l
                    ;(r.method = 'throw'), (r.arg = new TypeError("The iterator does not provide a 'throw' method"))
                }
                return l
            }
            var n = h(e, t.iterator, r.arg)
            if ('throw' === n.type) return (r.method = 'throw'), (r.arg = n.arg), (r.delegate = null), l
            var o = n.arg
            return o
                ? o.done
                    ? ((r[t.resultName] = o.value),
                      (r.next = t.nextLoc),
                      'return' !== r.method && ((r.method = 'next'), (r.arg = void 0)),
                      (r.delegate = null),
                      l)
                    : o
                : ((r.method = 'throw'),
                  (r.arg = new TypeError('iterator result is not an object')),
                  (r.delegate = null),
                  l)
        }
        function b(t) {
            var r = { tryLoc: t[0] }
            1 in t && (r.catchLoc = t[1]),
                2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
                this.tryEntries.push(r)
        }
        function E(t) {
            var r = t.completion || {}
            ;(r.type = 'normal'), delete r.arg, (t.completion = r)
        }
        function _(t) {
            ;(this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(b, this), this.reset(!0)
        }
        function O(t) {
            if (t) {
                var r = t[i]
                if (r) return r.call(t)
                if ('function' == typeof t.next) return t
                if (!isNaN(t.length)) {
                    var e = -1,
                        o = function r() {
                            for (; ++e < t.length; ) if (n.call(t, e)) return (r.value = t[e]), (r.done = !1), r
                            return (r.value = void 0), (r.done = !0), r
                        }
                    return (o.next = o)
                }
            }
            return { next: S }
        }
        function S() {
            return { value: void 0, done: !0 }
        }
        return (
            (p.prototype = d),
            c(w, 'constructor', d),
            c(d, 'constructor', p),
            (p.displayName = c(d, u, 'GeneratorFunction')),
            (r.isGeneratorFunction = function (t) {
                var r = 'function' == typeof t && t.constructor
                return !!r && (r === p || 'GeneratorFunction' === (r.displayName || r.name))
            }),
            (r.mark = function (t) {
                return (
                    Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, d)
                        : ((t.__proto__ = d), c(t, u, 'GeneratorFunction')),
                    (t.prototype = Object.create(w)),
                    t
                )
            }),
            (r.awrap = function (t) {
                return { __await: t }
            }),
            m(L.prototype),
            c(L.prototype, a, function () {
                return this
            }),
            (r.AsyncIterator = L),
            (r.async = function (t, e, n, o, i) {
                void 0 === i && (i = Promise)
                var a = new L(f(t, e, n, o), i)
                return r.isGeneratorFunction(e)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next()
                      })
            }),
            m(w),
            c(w, u, 'Generator'),
            c(w, i, function () {
                return this
            }),
            c(w, 'toString', function () {
                return '[object Generator]'
            }),
            (r.keys = function (t) {
                var r = []
                for (var e in t) r.push(e)
                return (
                    r.reverse(),
                    function e() {
                        for (; r.length; ) {
                            var n = r.pop()
                            if (n in t) return (e.value = n), (e.done = !1), e
                        }
                        return (e.done = !0), e
                    }
                )
            }),
            (r.values = O),
            (_.prototype = {
                constructor: _,
                reset: function (t) {
                    if (
                        ((this.prev = 0),
                        (this.next = 0),
                        (this.sent = this._sent = void 0),
                        (this.done = !1),
                        (this.delegate = null),
                        (this.method = 'next'),
                        (this.arg = void 0),
                        this.tryEntries.forEach(E),
                        !t)
                    )
                        for (var r in this)
                            't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0)
                },
                stop: function () {
                    this.done = !0
                    var t = this.tryEntries[0].completion
                    if ('throw' === t.type) throw t.arg
                    return this.rval
                },
                dispatchException: function (t) {
                    if (this.done) throw t
                    var r = this
                    function e(e, n) {
                        return (
                            (a.type = 'throw'),
                            (a.arg = t),
                            (r.next = e),
                            n && ((r.method = 'next'), (r.arg = void 0)),
                            !!n
                        )
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o],
                            a = i.completion
                        if ('root' === i.tryLoc) return e('end')
                        if (i.tryLoc <= this.prev) {
                            var u = n.call(i, 'catchLoc'),
                                c = n.call(i, 'finallyLoc')
                            if (u && c) {
                                if (this.prev < i.catchLoc) return e(i.catchLoc, !0)
                                if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                            } else if (u) {
                                if (this.prev < i.catchLoc) return e(i.catchLoc, !0)
                            } else {
                                if (!c) throw new Error('try statement without catch or finally')
                                if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function (t, r) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e]
                        if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                            var i = o
                            break
                        }
                    }
                    i && ('break' === t || 'continue' === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null)
                    var a = i ? i.completion : {}
                    return (
                        (a.type = t),
                        (a.arg = r),
                        i ? ((this.method = 'next'), (this.next = i.finallyLoc), l) : this.complete(a)
                    )
                },
                complete: function (t, r) {
                    if ('throw' === t.type) throw t.arg
                    return (
                        'break' === t.type || 'continue' === t.type
                            ? (this.next = t.arg)
                            : 'return' === t.type
                            ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                            : 'normal' === t.type && r && (this.next = r),
                        l
                    )
                },
                finish: function (t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var e = this.tryEntries[r]
                        if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), E(e), l
                    }
                },
                catch: function (t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var e = this.tryEntries[r]
                        if (e.tryLoc === t) {
                            var n = e.completion
                            if ('throw' === n.type) {
                                var o = n.arg
                                E(e)
                            }
                            return o
                        }
                    }
                    throw new Error('illegal catch attempt')
                },
                delegateYield: function (t, r, e) {
                    return (
                        (this.delegate = { iterator: O(t), resultName: r, nextLoc: e }),
                        'next' === this.method && (this.arg = void 0),
                        l
                    )
                },
            }),
            r
        )
    }
    function r(t, r, e, n, o, i, a) {
        try {
            var u = t[i](a),
                c = u.value
        } catch (t) {
            return void e(t)
        }
        u.done ? r(c) : Promise.resolve(c).then(n, o)
    }
    function e(t, r, e) {
        try {
            if (!(r in t)) return function () {}
            var n = t[r],
                o = e(n)
            return (
                'function' == typeof o &&
                    ((o.prototype = o.prototype || {}),
                    Object.defineProperties(o, { __posthog_wrapped__: { enumerable: !1, value: !0 } })),
                (t[r] = o),
                function () {
                    t[r] = n
                }
            )
        } catch (t) {
            return function () {}
        }
    }
    var n = 'undefined' != typeof window ? window : void 0,
        o = 'undefined' != typeof globalThis ? globalThis : n,
        i = null == o ? void 0 : o.navigator
    null == o || o.document,
        null == o || o.location,
        null == o || o.fetch,
        null != o && o.XMLHttpRequest && 'withCredentials' in new o.XMLHttpRequest() && o.XMLHttpRequest,
        null == o || o.AbortController,
        null == i || i.userAgent
    var a = null != n ? n : {},
        u = function (t, r) {
            var e = t.checkAndGetSessionAndWindowId(!0),
                n = e.sessionId,
                o = e.windowId
            r.headers.set('X-POSTHOG-SESSION-ID', n), r.headers.set('X-POSTHOG-WINDOW-ID', o)
        }
    a &&
        (a.postHogTracingHeadersPatchFns = {
            _patchFetch: function (o) {
                return e(n, 'fetch', function (e) {
                    return (function () {
                        var n,
                            i =
                                ((n = t().mark(function r(n, i) {
                                    var a
                                    return t().wrap(function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (a = new Request(n, i)), u(o, a), t.abrupt('return', e(a))
                                                case 3:
                                                case 'end':
                                                    return t.stop()
                                            }
                                    }, r)
                                })),
                                function () {
                                    var t = this,
                                        e = arguments
                                    return new Promise(function (o, i) {
                                        var a = n.apply(t, e)
                                        function u(t) {
                                            r(a, o, i, u, c, 'next', t)
                                        }
                                        function c(t) {
                                            r(a, o, i, u, c, 'throw', t)
                                        }
                                        u(void 0)
                                    })
                                })
                        return function (t, r) {
                            return i.apply(this, arguments)
                        }
                    })()
                })
            },
            _patchXHR: function (t) {
                return e(n.XMLHttpRequest.prototype, 'open', function (r) {
                    return function (e, n) {
                        var o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            i = arguments.length > 3 ? arguments[3] : void 0,
                            a = arguments.length > 4 ? arguments[4] : void 0,
                            c = new Request(n)
                        return u(t, c), r.call(this, e, c.url, o, i, a)
                    }
                })
            },
        })
})()
//# sourceMappingURL=tracing-headers.js.map
