!(function () {
    'use strict'
    function e(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
                (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
        }
        return n
    }
    function t(t) {
        for (var n = 1; n < arguments.length; n++) {
            var r = null != arguments[n] ? arguments[n] : {}
            n % 2
                ? e(Object(r), !0).forEach(function (e) {
                      l(t, e, r[e])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : e(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                  })
        }
        return t
    }
    function n() {
        n = function () {
            return e
        }
        var e = {},
            t = Object.prototype,
            r = t.hasOwnProperty,
            i = 'function' == typeof Symbol ? Symbol : {},
            o = i.iterator || '@@iterator',
            a = i.asyncIterator || '@@asyncIterator',
            s = i.toStringTag || '@@toStringTag'
        function u(e, t, n) {
            return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t]
        }
        try {
            u({}, '')
        } catch (e) {
            u = function (e, t, n) {
                return (e[t] = n)
            }
        }
        function l(e, t, n, r) {
            var i = t && t.prototype instanceof f ? t : f,
                o = Object.create(i.prototype),
                a = new I(r || [])
            return (
                (o._invoke = (function (e, t, n) {
                    var r = 'suspendedStart'
                    return function (i, o) {
                        if ('executing' === r) throw new Error('Generator is already running')
                        if ('completed' === r) {
                            if ('throw' === i) throw o
                            return x()
                        }
                        for (n.method = i, n.arg = o; ; ) {
                            var a = n.delegate
                            if (a) {
                                var s = k(a, n)
                                if (s) {
                                    if (s === d) continue
                                    return s
                                }
                            }
                            if ('next' === n.method) n.sent = n._sent = n.arg
                            else if ('throw' === n.method) {
                                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg)
                                n.dispatchException(n.arg)
                            } else 'return' === n.method && n.abrupt('return', n.arg)
                            r = 'executing'
                            var u = c(e, t, n)
                            if ('normal' === u.type) {
                                if (((r = n.done ? 'completed' : 'suspendedYield'), u.arg === d)) continue
                                return { value: u.arg, done: n.done }
                            }
                            'throw' === u.type && ((r = 'completed'), (n.method = 'throw'), (n.arg = u.arg))
                        }
                    }
                })(e, n, a)),
                o
            )
        }
        function c(e, t, n) {
            try {
                return { type: 'normal', arg: e.call(t, n) }
            } catch (e) {
                return { type: 'throw', arg: e }
            }
        }
        e.wrap = l
        var d = {}
        function f() {}
        function p() {}
        function h() {}
        var v = {}
        u(v, o, function () {
            return this
        })
        var g = Object.getPrototypeOf,
            m = g && g(g(S([])))
        m && m !== t && r.call(m, o) && (v = m)
        var _ = (h.prototype = f.prototype = Object.create(v))
        function y(e) {
            ;['next', 'throw', 'return'].forEach(function (t) {
                u(e, t, function (e) {
                    return this._invoke(t, e)
                })
            })
        }
        function b(e, t) {
            function n(i, o, a, s) {
                var u = c(e[i], e, o)
                if ('throw' !== u.type) {
                    var l = u.arg,
                        d = l.value
                    return d && 'object' == typeof d && r.call(d, '__await')
                        ? t.resolve(d.__await).then(
                              function (e) {
                                  n('next', e, a, s)
                              },
                              function (e) {
                                  n('throw', e, a, s)
                              }
                          )
                        : t.resolve(d).then(
                              function (e) {
                                  ;(l.value = e), a(l)
                              },
                              function (e) {
                                  return n('throw', e, a, s)
                              }
                          )
                }
                s(u.arg)
            }
            var i
            this._invoke = function (e, r) {
                function o() {
                    return new t(function (t, i) {
                        n(e, r, t, i)
                    })
                }
                return (i = i ? i.then(o, o) : o())
            }
        }
        function k(e, t) {
            var n = e.iterator[t.method]
            if (void 0 === n) {
                if (((t.delegate = null), 'throw' === t.method)) {
                    if (e.iterator.return && ((t.method = 'return'), (t.arg = void 0), k(e, t), 'throw' === t.method))
                        return d
                    ;(t.method = 'throw'), (t.arg = new TypeError("The iterator does not provide a 'throw' method"))
                }
                return d
            }
            var r = c(n, e.iterator, t.arg)
            if ('throw' === r.type) return (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), d
            var i = r.arg
            return i
                ? i.done
                    ? ((t[e.resultName] = i.value),
                      (t.next = e.nextLoc),
                      'return' !== t.method && ((t.method = 'next'), (t.arg = void 0)),
                      (t.delegate = null),
                      d)
                    : i
                : ((t.method = 'throw'),
                  (t.arg = new TypeError('iterator result is not an object')),
                  (t.delegate = null),
                  d)
        }
        function w(e) {
            var t = { tryLoc: e[0] }
            1 in e && (t.catchLoc = e[1]),
                2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                this.tryEntries.push(t)
        }
        function C(e) {
            var t = e.completion || {}
            ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function I(e) {
            ;(this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(w, this), this.reset(!0)
        }
        function S(e) {
            if (e) {
                var t = e[o]
                if (t) return t.call(e)
                if ('function' == typeof e.next) return e
                if (!isNaN(e.length)) {
                    var n = -1,
                        i = function t() {
                            for (; ++n < e.length; ) if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t
                            return (t.value = void 0), (t.done = !0), t
                        }
                    return (i.next = i)
                }
            }
            return { next: x }
        }
        function x() {
            return { value: void 0, done: !0 }
        }
        return (
            (p.prototype = h),
            u(_, 'constructor', h),
            u(h, 'constructor', p),
            (p.displayName = u(h, s, 'GeneratorFunction')),
            (e.isGeneratorFunction = function (e) {
                var t = 'function' == typeof e && e.constructor
                return !!t && (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            }),
            (e.mark = function (e) {
                return (
                    Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, h)
                        : ((e.__proto__ = h), u(e, s, 'GeneratorFunction')),
                    (e.prototype = Object.create(_)),
                    e
                )
            }),
            (e.awrap = function (e) {
                return { __await: e }
            }),
            y(b.prototype),
            u(b.prototype, a, function () {
                return this
            }),
            (e.AsyncIterator = b),
            (e.async = function (t, n, r, i, o) {
                void 0 === o && (o = Promise)
                var a = new b(l(t, n, r, i), o)
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (e) {
                          return e.done ? e.value : a.next()
                      })
            }),
            y(_),
            u(_, s, 'Generator'),
            u(_, o, function () {
                return this
            }),
            u(_, 'toString', function () {
                return '[object Generator]'
            }),
            (e.keys = function (e) {
                var t = []
                for (var n in e) t.push(n)
                return (
                    t.reverse(),
                    function n() {
                        for (; t.length; ) {
                            var r = t.pop()
                            if (r in e) return (n.value = r), (n.done = !1), n
                        }
                        return (n.done = !0), n
                    }
                )
            }),
            (e.values = S),
            (I.prototype = {
                constructor: I,
                reset: function (e) {
                    if (
                        ((this.prev = 0),
                        (this.next = 0),
                        (this.sent = this._sent = void 0),
                        (this.done = !1),
                        (this.delegate = null),
                        (this.method = 'next'),
                        (this.arg = void 0),
                        this.tryEntries.forEach(C),
                        !e)
                    )
                        for (var t in this)
                            't' === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                },
                stop: function () {
                    this.done = !0
                    var e = this.tryEntries[0].completion
                    if ('throw' === e.type) throw e.arg
                    return this.rval
                },
                dispatchException: function (e) {
                    if (this.done) throw e
                    var t = this
                    function n(n, r) {
                        return (
                            (a.type = 'throw'),
                            (a.arg = e),
                            (t.next = n),
                            r && ((t.method = 'next'), (t.arg = void 0)),
                            !!r
                        )
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var o = this.tryEntries[i],
                            a = o.completion
                        if ('root' === o.tryLoc) return n('end')
                        if (o.tryLoc <= this.prev) {
                            var s = r.call(o, 'catchLoc'),
                                u = r.call(o, 'finallyLoc')
                            if (s && u) {
                                if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                            } else if (s) {
                                if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                            } else {
                                if (!u) throw new Error('try statement without catch or finally')
                                if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n]
                        if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                            var o = i
                            break
                        }
                    }
                    o && ('break' === e || 'continue' === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null)
                    var a = o ? o.completion : {}
                    return (
                        (a.type = e),
                        (a.arg = t),
                        o ? ((this.method = 'next'), (this.next = o.finallyLoc), d) : this.complete(a)
                    )
                },
                complete: function (e, t) {
                    if ('throw' === e.type) throw e.arg
                    return (
                        'break' === e.type || 'continue' === e.type
                            ? (this.next = e.arg)
                            : 'return' === e.type
                            ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                            : 'normal' === e.type && t && (this.next = t),
                        d
                    )
                },
                finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t]
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), C(n), d
                    }
                },
                catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t]
                        if (n.tryLoc === e) {
                            var r = n.completion
                            if ('throw' === r.type) {
                                var i = r.arg
                                C(n)
                            }
                            return i
                        }
                    }
                    throw new Error('illegal catch attempt')
                },
                delegateYield: function (e, t, n) {
                    return (
                        (this.delegate = { iterator: S(e), resultName: t, nextLoc: n }),
                        'next' === this.method && (this.arg = void 0),
                        d
                    )
                },
            }),
            e
        )
    }
    function r(e) {
        return (
            (r =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e
                      }
                    : function (e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e
                      }),
            r(e)
        )
    }
    function i(e, t, n, r, i, o, a) {
        try {
            var s = e[o](a),
                u = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(u) : Promise.resolve(u).then(r, i)
    }
    function o(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (r, o) {
                var a = e.apply(t, n)
                function s(e) {
                    i(a, r, o, s, u, 'next', e)
                }
                function u(e) {
                    i(a, r, o, s, u, 'throw', e)
                }
                s(void 0)
            })
        }
    }
    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
        }
    }
    function u(e, t, n) {
        return t && s(e.prototype, t), n && s(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e
    }
    function l(e, t, n) {
        return (
            t in e
                ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                : (e[t] = n),
            e
        )
    }
    function c(e, t) {
        if (null == e) return {}
        var n,
            r,
            i = (function (e, t) {
                if (null == e) return {}
                var n,
                    r,
                    i = {},
                    o = Object.keys(e)
                for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n])
                return i
            })(e, t)
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            for (r = 0; r < o.length; r++)
                (n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]))
        }
        return i
    }
    function d(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
                var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
                if (null == n) return
                var r,
                    i,
                    o = [],
                    a = !0,
                    s = !1
                try {
                    for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0);
                } catch (e) {
                    ;(s = !0), (i = e)
                } finally {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s) throw i
                    }
                }
                return o
            })(e, t) ||
            p(e, t) ||
            (function () {
                throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
            })()
        )
    }
    function f(e) {
        return (
            (function (e) {
                if (Array.isArray(e)) return h(e)
            })(e) ||
            (function (e) {
                if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
                    return Array.from(e)
            })(e) ||
            p(e) ||
            (function () {
                throw new TypeError(
                    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
            })()
        )
    }
    function p(e, t) {
        if (e) {
            if ('string' == typeof e) return h(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                    ? Array.from(e)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? h(e, t)
                    : void 0
            )
        }
    }
    function h(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
    }
    function v(e, t) {
        var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
        if (!n) {
            if (Array.isArray(e) || (n = p(e)) || (t && e && 'number' == typeof e.length)) {
                n && (e = n)
                var r = 0,
                    i = function () {}
                return {
                    s: i,
                    n: function () {
                        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
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
        var o,
            a = !0,
            s = !1
        return {
            s: function () {
                n = n.call(e)
            },
            n: function () {
                var e = n.next()
                return (a = e.done), e
            },
            e: function (e) {
                ;(s = !0), (o = e)
            },
            f: function () {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            },
        }
    }
    var g
    function m(e) {
        var t = null == e ? void 0 : e.host
        return Boolean((null == t ? void 0 : t.shadowRoot) === e)
    }
    function _(e) {
        return '[object ShadowRoot]' === Object.prototype.toString.call(e)
    }
    function y(e) {
        try {
            var t = e.rules || e.cssRules
            return t
                ? ((n = Array.from(t).map(b).join('')).includes(' background-clip: text;') &&
                      !n.includes(' -webkit-background-clip: text;') &&
                      (n = n.replace(
                          ' background-clip: text;',
                          ' -webkit-background-clip: text; background-clip: text;'
                      )),
                  n)
                : null
        } catch (e) {
            return null
        }
        var n
    }
    function b(e) {
        var t, n, r
        if (
            (function (e) {
                return 'styleSheet' in e
            })(e)
        )
            try {
                t =
                    y(e.styleSheet) ||
                    (function (e) {
                        var t = e.cssText
                        if (t.split('"').length < 3) return t
                        var n = ['@import', 'url('.concat(JSON.stringify(e.href), ')')]
                        return (
                            '' === e.layerName
                                ? n.push('layer')
                                : e.layerName && n.push('layer('.concat(e.layerName, ')')),
                            e.supportsText && n.push('supports('.concat(e.supportsText, ')')),
                            e.media.length && n.push(e.media.mediaText),
                            n.join(' ') + ';'
                        )
                    })(e)
            } catch (e) {}
        else if (
            (function (e) {
                return 'selectorText' in e
            })(e) &&
            e.selectorText.includes(':')
        )
            return (n = e.cssText), (r = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm), n.replace(r, '$1\\$2')
        return t || e.cssText
    }
    !(function (e) {
        ;(e[(e.Document = 0)] = 'Document'),
            (e[(e.DocumentType = 1)] = 'DocumentType'),
            (e[(e.Element = 2)] = 'Element'),
            (e[(e.Text = 3)] = 'Text'),
            (e[(e.CDATA = 4)] = 'CDATA'),
            (e[(e.Comment = 5)] = 'Comment')
    })(g || (g = {}))
    var k = (function () {
        function e() {
            a(this, e), (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap())
        }
        return (
            u(e, [
                {
                    key: 'getId',
                    value: function (e) {
                        var t
                        if (!e) return -1
                        var n = null === (t = this.getMeta(e)) || void 0 === t ? void 0 : t.id
                        return null != n ? n : -1
                    },
                },
                {
                    key: 'getNode',
                    value: function (e) {
                        return this.idNodeMap.get(e) || null
                    },
                },
                {
                    key: 'getIds',
                    value: function () {
                        return Array.from(this.idNodeMap.keys())
                    },
                },
                {
                    key: 'getMeta',
                    value: function (e) {
                        return this.nodeMetaMap.get(e) || null
                    },
                },
                {
                    key: 'removeNodeFromMap',
                    value: function (e) {
                        var t = this,
                            n = this.getId(e)
                        this.idNodeMap.delete(n),
                            e.childNodes &&
                                e.childNodes.forEach(function (e) {
                                    return t.removeNodeFromMap(e)
                                })
                    },
                },
                {
                    key: 'has',
                    value: function (e) {
                        return this.idNodeMap.has(e)
                    },
                },
                {
                    key: 'hasNode',
                    value: function (e) {
                        return this.nodeMetaMap.has(e)
                    },
                },
                {
                    key: 'add',
                    value: function (e, t) {
                        var n = t.id
                        this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
                    },
                },
                {
                    key: 'replace',
                    value: function (e, t) {
                        var n = this.getNode(e)
                        if (n) {
                            var r = this.nodeMetaMap.get(n)
                            r && this.nodeMetaMap.set(t, r)
                        }
                        this.idNodeMap.set(e, t)
                    },
                },
                {
                    key: 'reset',
                    value: function () {
                        ;(this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap())
                    },
                },
            ]),
            e
        )
    })()
    function w(e) {
        var t = e.element,
            n = e.maskInputOptions,
            r = e.tagName,
            i = e.type,
            o = e.value,
            a = e.maskInputFn,
            s = o || '',
            u = i && C(i)
        return (n[r.toLowerCase()] || (u && n[u])) && (s = a ? a(s, t) : '*'.repeat(s.length)), s
    }
    function C(e) {
        return e.toLowerCase()
    }
    var I = '__rrweb_original__'
    function S(e) {
        var t = e.type
        return e.hasAttribute('data-rr-is-password') ? 'password' : t ? C(t) : null
    }
    function x(e, t) {
        var n, r
        try {
            r = new URL(e, null != t ? t : window.location.href)
        } catch (e) {
            return null
        }
        var i = r.pathname.match(/\.([0-9a-z]+)(?:$)/i)
        return null !== (n = null == i ? void 0 : i[1]) && void 0 !== n ? n : null
    }
    var E,
        T,
        A = 1,
        M = new RegExp('[^a-z0-9-_:]'),
        R = -2
    function F() {
        return A++
    }
    var O = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        N = /^(?:[a-z+]+:)?\/\//i,
        L = /^www\..*/i,
        P = /^(data:)([^,]*),(.*)/i
    function D(e, t) {
        return (e || '').replace(O, function (e, n, r, i, o, a) {
            var s,
                u = r || o || a,
                l = n || i || ''
            if (!u) return e
            if (N.test(u) || L.test(u)) return 'url('.concat(l).concat(u).concat(l, ')')
            if (P.test(u)) return 'url('.concat(l).concat(u).concat(l, ')')
            if ('/' === u[0])
                return 'url('
                    .concat(l)
                    .concat(
                        ((s = t),
                        (s.indexOf('//') > -1 ? s.split('/').slice(0, 3).join('/') : s.split('/')[0]).split('?')[0] + u)
                    )
                    .concat(l, ')')
            var c = t.split('/'),
                d = u.split('/')
            c.pop()
            var f,
                p = v(d)
            try {
                for (p.s(); !(f = p.n()).done; ) {
                    var h = f.value
                    '.' !== h && ('..' === h ? c.pop() : c.push(h))
                }
            } catch (e) {
                p.e(e)
            } finally {
                p.f()
            }
            return 'url('.concat(l).concat(c.join('/')).concat(l, ')')
        })
    }
    var q = /^[^ \t\n\r\u000c]+/,
        B = /^[, \t\n\r\u000c]+/
    function H(e, t) {
        if (!t || '' === t.trim()) return t
        var n = e.createElement('a')
        return (n.href = t), n.href
    }
    function $(e) {
        return Boolean('svg' === e.tagName || e.ownerSVGElement)
    }
    function W() {
        var e = document.createElement('a')
        return (e.href = ''), e.href
    }
    function V(e, t, n, r) {
        return r
            ? 'src' === n || ('href' === n && ('use' !== t || '#' !== r[0])) || ('xlink:href' === n && '#' !== r[0])
                ? H(e, r)
                : 'background' !== n || ('table' !== t && 'td' !== t && 'th' !== t)
                ? 'srcset' === n
                    ? (function (e, t) {
                          if ('' === t.trim()) return t
                          var n = 0
                          function r(e) {
                              var r,
                                  i = e.exec(t.substring(n))
                              return i ? ((r = i[0]), (n += r.length), r) : ''
                          }
                          for (var i = []; r(B), !(n >= t.length); ) {
                              var o = r(q)
                              if (',' === o.slice(-1)) (o = H(e, o.substring(0, o.length - 1))), i.push(o)
                              else {
                                  var a = ''
                                  o = H(e, o)
                                  for (var s = !1; ; ) {
                                      var u = t.charAt(n)
                                      if ('' === u) {
                                          i.push((o + a).trim())
                                          break
                                      }
                                      if (s) ')' === u && (s = !1)
                                      else {
                                          if (',' === u) {
                                              ;(n += 1), i.push((o + a).trim())
                                              break
                                          }
                                          '(' === u && (s = !0)
                                      }
                                      ;(a += u), (n += 1)
                                  }
                              }
                          }
                          return i.join(', ')
                      })(e, r)
                    : 'style' === n
                    ? D(r, W())
                    : 'object' === t && 'data' === n
                    ? H(e, r)
                    : r
                : H(e, r)
            : r
    }
    function U(e, t, n) {
        return ('video' === e || 'audio' === e) && 'autoplay' === t
    }
    function j(e, t, n) {
        if (!e) return !1
        if (e.nodeType !== e.ELEMENT_NODE) return !!n && j(e.parentNode, t, n)
        for (var r = e.classList.length; r--; ) {
            var i = e.classList[r]
            if (t.test(i)) return !0
        }
        return !!n && j(e.parentNode, t, n)
    }
    function G(e, t, n, r) {
        try {
            var i = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
            if (null === i) return !1
            if ('string' == typeof t) {
                if (r) {
                    if (i.closest('.'.concat(t))) return !0
                } else if (i.classList.contains(t)) return !0
            } else if (j(i, t, r)) return !0
            if (n)
                if (r) {
                    if (i.closest(n)) return !0
                } else if (i.matches(n)) return !0
        } catch (e) {}
        return !1
    }
    function Z(e, t) {
        var n = t.doc,
            r = t.mirror,
            i = t.blockClass,
            o = t.blockSelector,
            a = t.needsMask,
            s = t.inlineStylesheet,
            u = t.maskInputOptions,
            l = void 0 === u ? {} : u,
            c = t.maskTextFn,
            d = t.maskInputFn,
            f = t.dataURLOptions,
            p = void 0 === f ? {} : f,
            h = t.inlineImages,
            v = t.recordCanvas,
            m = t.keepIframeSrcFn,
            _ = t.newlyAddedElement,
            b = void 0 !== _ && _,
            k = (function (e, t) {
                if (!t.hasNode(e)) return
                var n = t.getId(e)
                return 1 === n ? void 0 : n
            })(n, r)
        switch (e.nodeType) {
            case e.DOCUMENT_NODE:
                return 'CSS1Compat' !== e.compatMode
                    ? { type: g.Document, childNodes: [], compatMode: e.compatMode }
                    : { type: g.Document, childNodes: [] }
            case e.DOCUMENT_TYPE_NODE:
                return { type: g.DocumentType, name: e.name, publicId: e.publicId, systemId: e.systemId, rootId: k }
            case e.ELEMENT_NODE:
                return (function (e, t) {
                    for (
                        var n,
                            r = t.doc,
                            i = t.blockClass,
                            o = t.blockSelector,
                            a = t.inlineStylesheet,
                            s = t.maskInputOptions,
                            u = void 0 === s ? {} : s,
                            l = t.maskInputFn,
                            c = t.dataURLOptions,
                            d = void 0 === c ? {} : c,
                            f = t.inlineImages,
                            p = t.recordCanvas,
                            h = t.keepIframeSrcFn,
                            v = t.newlyAddedElement,
                            m = void 0 !== v && v,
                            _ = t.rootId,
                            b = (function (e, t, n) {
                                try {
                                    if ('string' == typeof t) {
                                        if (e.classList.contains(t)) return !0
                                    } else
                                        for (var r = e.classList.length; r--; ) {
                                            var i = e.classList[r]
                                            if (t.test(i)) return !0
                                        }
                                    if (n) return e.matches(n)
                                } catch (e) {}
                                return !1
                            })(e, i, o),
                            k = (function (e) {
                                if (e instanceof HTMLFormElement) return 'form'
                                var t = C(e.tagName)
                                return M.test(t) ? 'div' : t
                            })(e),
                            x = {},
                            A = e.attributes.length,
                            R = 0;
                        R < A;
                        R++
                    ) {
                        var F = e.attributes[R]
                        U(k, F.name, F.value) || (x[F.name] = V(r, k, C(F.name), F.value))
                    }
                    if ('link' === k && a) {
                        var O = e.href,
                            N = Array.from(r.styleSheets).find(function (e) {
                                return e.href === O
                            })
                        if (!N && O.includes('.css')) {
                            var L = window.location.origin + '/' + O.replace(window.location.href, '')
                            N = Array.from(r.styleSheets).find(function (e) {
                                return e.href === L
                            })
                        }
                        var P = null
                        N && (P = y(N)), P && (delete x.rel, delete x.href, (x._cssText = D(P, N.href)))
                    }
                    if ('style' === k && e.sheet && !(e.innerText || e.textContent || '').trim().length) {
                        var q = y(e.sheet)
                        q && (x._cssText = D(q, W()))
                    }
                    if ('input' === k || 'textarea' === k || 'select' === k) {
                        var B = e.value,
                            H = e.checked
                        'radio' !== x.type && 'checkbox' !== x.type && 'submit' !== x.type && 'button' !== x.type && B
                            ? (x.value = w({
                                  element: e,
                                  type: S(e),
                                  tagName: k,
                                  value: B,
                                  maskInputOptions: u,
                                  maskInputFn: l,
                              }))
                            : H && (x.checked = H)
                    }
                    'option' === k && (e.selected && !u.select ? (x.selected = !0) : delete x.selected)
                    if ('canvas' === k && p)
                        if ('2d' === e.__context)
                            (function (e) {
                                var t = e.getContext('2d')
                                if (!t) return !0
                                for (var n = 0; n < e.width; n += 50)
                                    for (var r = 0; r < e.height; r += 50) {
                                        var i = t.getImageData,
                                            o = I in i ? i[I] : i
                                        if (
                                            new Uint32Array(
                                                o.call(
                                                    t,
                                                    n,
                                                    r,
                                                    Math.min(50, e.width - n),
                                                    Math.min(50, e.height - r)
                                                ).data.buffer
                                            ).some(function (e) {
                                                return 0 !== e
                                            })
                                        )
                                            return !1
                                    }
                                return !0
                            })(e) || (x.rr_dataURL = e.toDataURL(d.type, d.quality))
                        else if (!('__context' in e)) {
                            var j = e.toDataURL(d.type, d.quality),
                                G = document.createElement('canvas')
                            ;(G.width = e.width),
                                (G.height = e.height),
                                j !== G.toDataURL(d.type, d.quality) && (x.rr_dataURL = j)
                        }
                    if ('img' === k && f) {
                        E || ((E = r.createElement('canvas')), (T = E.getContext('2d')))
                        var Z = e,
                            z = Z.crossOrigin
                        Z.crossOrigin = 'anonymous'
                        var Q = function e() {
                            Z.removeEventListener('load', e)
                            try {
                                ;(E.width = Z.naturalWidth),
                                    (E.height = Z.naturalHeight),
                                    T.drawImage(Z, 0, 0),
                                    (x.rr_dataURL = E.toDataURL(d.type, d.quality))
                            } catch (e) {
                                console.warn('Cannot inline img src='.concat(Z.currentSrc, '! Error: ').concat(e))
                            }
                            z ? (x.crossOrigin = z) : Z.removeAttribute('crossorigin')
                        }
                        Z.complete && 0 !== Z.naturalWidth ? Q() : Z.addEventListener('load', Q)
                    }
                    if ('audio' === k || 'video' === k) {
                        var K = x
                        ;(K.rr_mediaState = e.paused ? 'paused' : 'played'),
                            (K.rr_mediaCurrentTime = e.currentTime),
                            (K.rr_mediaPlaybackRate = e.playbackRate),
                            (K.rr_mediaMuted = e.muted),
                            (K.rr_mediaLoop = e.loop),
                            (K.rr_mediaVolume = e.volume)
                    }
                    m ||
                        (e.scrollLeft && (x.rr_scrollLeft = e.scrollLeft),
                        e.scrollTop && (x.rr_scrollTop = e.scrollTop))
                    if (b) {
                        var Y = e.getBoundingClientRect(),
                            J = Y.width,
                            X = Y.height
                        x = { class: x.class, rr_width: ''.concat(J, 'px'), rr_height: ''.concat(X, 'px') }
                    }
                    'iframe' !== k || h(x.src) || (e.contentDocument || (x.rr_src = x.src), delete x.src)
                    try {
                        customElements.get(k) && (n = !0)
                    } catch (e) {}
                    return {
                        type: g.Element,
                        tagName: k,
                        attributes: x,
                        childNodes: [],
                        isSVG: $(e) || void 0,
                        needBlock: b,
                        rootId: _,
                        isCustom: n,
                    }
                })(e, {
                    doc: n,
                    blockClass: i,
                    blockSelector: o,
                    inlineStylesheet: s,
                    maskInputOptions: l,
                    maskInputFn: d,
                    dataURLOptions: p,
                    inlineImages: h,
                    recordCanvas: v,
                    keepIframeSrcFn: m,
                    newlyAddedElement: b,
                    rootId: k,
                })
            case e.TEXT_NODE:
                return (function (e, t) {
                    var n,
                        r = t.needsMask,
                        i = t.maskTextFn,
                        o = t.rootId,
                        a = e.parentNode && e.parentNode.tagName,
                        s = e.textContent,
                        u = 'STYLE' === a || void 0,
                        l = 'SCRIPT' === a || void 0
                    if (u && s) {
                        try {
                            e.nextSibling ||
                                e.previousSibling ||
                                ((null === (n = e.parentNode.sheet) || void 0 === n ? void 0 : n.cssRules) &&
                                    (s = y(e.parentNode.sheet)))
                        } catch (t) {
                            console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(t), e)
                        }
                        s = D(s, W())
                    }
                    l && (s = 'SCRIPT_PLACEHOLDER')
                    !u && !l && s && r && (s = i ? i(s, e.parentElement) : s.replace(/[\S]/g, '*'))
                    return { type: g.Text, textContent: s || '', isStyle: u, rootId: o }
                })(e, { needsMask: a, maskTextFn: c, rootId: k })
            case e.CDATA_SECTION_NODE:
                return { type: g.CDATA, textContent: '', rootId: k }
            case e.COMMENT_NODE:
                return { type: g.Comment, textContent: e.textContent || '', rootId: k }
            default:
                return !1
        }
    }
    function z(e) {
        return null == e ? '' : e.toLowerCase()
    }
    function Q(e, t) {
        var n = t.doc,
            r = t.mirror,
            i = t.blockClass,
            o = t.blockSelector,
            a = t.maskTextClass,
            s = t.maskTextSelector,
            u = t.skipChild,
            l = void 0 !== u && u,
            c = t.inlineStylesheet,
            d = void 0 === c || c,
            f = t.maskInputOptions,
            p = void 0 === f ? {} : f,
            h = t.maskTextFn,
            v = t.maskInputFn,
            y = t.slimDOMOptions,
            b = t.dataURLOptions,
            k = void 0 === b ? {} : b,
            w = t.inlineImages,
            C = void 0 !== w && w,
            I = t.recordCanvas,
            S = void 0 !== I && I,
            E = t.onSerialize,
            T = t.onIframeLoad,
            A = t.iframeLoadTimeout,
            M = void 0 === A ? 5e3 : A,
            O = t.onStylesheetLoad,
            N = t.stylesheetLoadTimeout,
            L = void 0 === N ? 5e3 : N,
            P = t.keepIframeSrcFn,
            D =
                void 0 === P
                    ? function () {
                          return !1
                      }
                    : P,
            q = t.newlyAddedElement,
            B = void 0 !== q && q,
            H = t.needsMask,
            $ = t.preserveWhiteSpace,
            W = void 0 === $ || $
        !H && e.childNodes && (H = G(e, a, s, void 0 === H))
        var V,
            U = Z(e, {
                doc: n,
                mirror: r,
                blockClass: i,
                blockSelector: o,
                needsMask: H,
                inlineStylesheet: d,
                maskInputOptions: p,
                maskTextFn: h,
                maskInputFn: v,
                dataURLOptions: k,
                inlineImages: C,
                recordCanvas: S,
                keepIframeSrcFn: D,
                newlyAddedElement: B,
            })
        if (!U) return console.warn(e, 'not serialized'), null
        V = r.hasNode(e)
            ? r.getId(e)
            : !(function (e, t) {
                  if (t.comment && e.type === g.Comment) return !0
                  if (e.type === g.Element) {
                      if (
                          t.script &&
                          ('script' === e.tagName ||
                              ('link' === e.tagName &&
                                  ('preload' === e.attributes.rel || 'modulepreload' === e.attributes.rel) &&
                                  'script' === e.attributes.as) ||
                              ('link' === e.tagName &&
                                  'prefetch' === e.attributes.rel &&
                                  'string' == typeof e.attributes.href &&
                                  'js' === x(e.attributes.href)))
                      )
                          return !0
                      if (
                          t.headFavicon &&
                          (('link' === e.tagName && 'shortcut icon' === e.attributes.rel) ||
                              ('meta' === e.tagName &&
                                  (z(e.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                                      'application-name' === z(e.attributes.name) ||
                                      'icon' === z(e.attributes.rel) ||
                                      'apple-touch-icon' === z(e.attributes.rel) ||
                                      'shortcut icon' === z(e.attributes.rel))))
                      )
                          return !0
                      if ('meta' === e.tagName) {
                          if (t.headMetaDescKeywords && z(e.attributes.name).match(/^description|keywords$/)) return !0
                          if (
                              t.headMetaSocial &&
                              (z(e.attributes.property).match(/^(og|twitter|fb):/) ||
                                  z(e.attributes.name).match(/^(og|twitter):/) ||
                                  'pinterest' === z(e.attributes.name))
                          )
                              return !0
                          if (
                              t.headMetaRobots &&
                              ('robots' === z(e.attributes.name) ||
                                  'googlebot' === z(e.attributes.name) ||
                                  'bingbot' === z(e.attributes.name))
                          )
                              return !0
                          if (t.headMetaHttpEquiv && void 0 !== e.attributes['http-equiv']) return !0
                          if (
                              t.headMetaAuthorship &&
                              ('author' === z(e.attributes.name) ||
                                  'generator' === z(e.attributes.name) ||
                                  'framework' === z(e.attributes.name) ||
                                  'publisher' === z(e.attributes.name) ||
                                  'progid' === z(e.attributes.name) ||
                                  z(e.attributes.property).match(/^article:/) ||
                                  z(e.attributes.property).match(/^product:/))
                          )
                              return !0
                          if (
                              t.headMetaVerification &&
                              ('google-site-verification' === z(e.attributes.name) ||
                                  'yandex-verification' === z(e.attributes.name) ||
                                  'csrf-token' === z(e.attributes.name) ||
                                  'p:domain_verify' === z(e.attributes.name) ||
                                  'verify-v1' === z(e.attributes.name) ||
                                  'verification' === z(e.attributes.name) ||
                                  'shopify-checkout-api-token' === z(e.attributes.name))
                          )
                              return !0
                      }
                  }
                  return !1
              })(U, y) &&
              (W || U.type !== g.Text || U.isStyle || U.textContent.replace(/^\s+|\s+$/gm, '').length)
            ? F()
            : R
        var j = Object.assign(U, { id: V })
        if ((r.add(e, j), V === R)) return null
        E && E(e)
        var K = !l
        if (j.type === g.Element) {
            ;(K = K && !j.needBlock), delete j.needBlock
            var Y = e.shadowRoot
            Y && _(Y) && (j.isShadowHost = !0)
        }
        if ((j.type === g.Document || j.type === g.Element) && K) {
            y.headWhitespace && j.type === g.Element && 'head' === j.tagName && (W = !1)
            var J = {
                doc: n,
                mirror: r,
                blockClass: i,
                blockSelector: o,
                needsMask: H,
                maskTextClass: a,
                maskTextSelector: s,
                skipChild: l,
                inlineStylesheet: d,
                maskInputOptions: p,
                maskTextFn: h,
                maskInputFn: v,
                slimDOMOptions: y,
                dataURLOptions: k,
                inlineImages: C,
                recordCanvas: S,
                preserveWhiteSpace: W,
                onSerialize: E,
                onIframeLoad: T,
                iframeLoadTimeout: M,
                onStylesheetLoad: O,
                stylesheetLoadTimeout: L,
                keepIframeSrcFn: D,
            }
            if (j.type === g.Element && 'textarea' === j.tagName && void 0 !== j.attributes.value);
            else
                for (var X = 0, ee = Array.from(e.childNodes); X < ee.length; X++) {
                    var te = Q(ee[X], J)
                    te && j.childNodes.push(te)
                }
            if (
                (function (e) {
                    return e.nodeType === e.ELEMENT_NODE
                })(e) &&
                e.shadowRoot
            )
                for (var ne = 0, re = Array.from(e.shadowRoot.childNodes); ne < re.length; ne++) {
                    var ie = Q(re[ne], J)
                    ie && (_(e.shadowRoot) && (ie.isShadow = !0), j.childNodes.push(ie))
                }
        }
        return (
            e.parentNode && m(e.parentNode) && _(e.parentNode) && (j.isShadow = !0),
            j.type === g.Element &&
                'iframe' === j.tagName &&
                (function (e, t, n) {
                    var r = e.contentWindow
                    if (r) {
                        var i,
                            o = !1
                        try {
                            i = r.document.readyState
                        } catch (e) {
                            return
                        }
                        if ('complete' === i) {
                            var a = 'about:blank'
                            if (r.location.href !== a || e.src === a || '' === e.src)
                                return setTimeout(t, 0), e.addEventListener('load', t)
                            e.addEventListener('load', t)
                        } else {
                            var s = setTimeout(function () {
                                o || (t(), (o = !0))
                            }, n)
                            e.addEventListener('load', function () {
                                clearTimeout(s), (o = !0), t()
                            })
                        }
                    }
                })(
                    e,
                    function () {
                        var t = e.contentDocument
                        if (t && T) {
                            var n = Q(t, {
                                doc: t,
                                mirror: r,
                                blockClass: i,
                                blockSelector: o,
                                needsMask: H,
                                maskTextClass: a,
                                maskTextSelector: s,
                                skipChild: !1,
                                inlineStylesheet: d,
                                maskInputOptions: p,
                                maskTextFn: h,
                                maskInputFn: v,
                                slimDOMOptions: y,
                                dataURLOptions: k,
                                inlineImages: C,
                                recordCanvas: S,
                                preserveWhiteSpace: W,
                                onSerialize: E,
                                onIframeLoad: T,
                                iframeLoadTimeout: M,
                                onStylesheetLoad: O,
                                stylesheetLoadTimeout: L,
                                keepIframeSrcFn: D,
                            })
                            n && T(e, n)
                        }
                    },
                    M
                ),
            j.type === g.Element &&
                'link' === j.tagName &&
                'string' == typeof j.attributes.rel &&
                ('stylesheet' === j.attributes.rel ||
                    ('preload' === j.attributes.rel &&
                        'string' == typeof j.attributes.href &&
                        'css' === x(j.attributes.href))) &&
                (function (e, t, n) {
                    var r,
                        i = !1
                    try {
                        r = e.sheet
                    } catch (e) {
                        return
                    }
                    if (!r) {
                        var o = setTimeout(function () {
                            i || (t(), (i = !0))
                        }, n)
                        e.addEventListener('load', function () {
                            clearTimeout(o), (i = !0), t()
                        })
                    }
                })(
                    e,
                    function () {
                        if (O) {
                            var t = Q(e, {
                                doc: n,
                                mirror: r,
                                blockClass: i,
                                blockSelector: o,
                                needsMask: H,
                                maskTextClass: a,
                                maskTextSelector: s,
                                skipChild: !1,
                                inlineStylesheet: d,
                                maskInputOptions: p,
                                maskTextFn: h,
                                maskInputFn: v,
                                slimDOMOptions: y,
                                dataURLOptions: k,
                                inlineImages: C,
                                recordCanvas: S,
                                preserveWhiteSpace: W,
                                onSerialize: E,
                                onIframeLoad: T,
                                iframeLoadTimeout: M,
                                onStylesheetLoad: O,
                                stylesheetLoadTimeout: L,
                                keepIframeSrcFn: D,
                            })
                            t && O(e, t)
                        }
                    },
                    L
                ),
            j
        )
    }
    function K(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document,
            r = { capture: !0, passive: !0 }
        return (
            n.addEventListener(e, t, r),
            function () {
                return n.removeEventListener(e, t, r)
            }
        )
    }
    var Y =
            'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.',
        J = {
            map: {},
            getId: function () {
                return console.error(Y), -1
            },
            getNode: function () {
                return console.error(Y), null
            },
            removeNodeFromMap: function () {
                console.error(Y)
            },
            has: function () {
                return console.error(Y), !1
            },
            reset: function () {
                console.error(Y)
            },
        }
    function X(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = null,
            i = 0
        return function () {
            for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s]
            var u = Date.now()
            i || !1 !== n.leading || (i = u)
            var l = t - (u - i),
                c = this
            l <= 0 || l > t
                ? (r && (clearTimeout(r), (r = null)), (i = u), e.apply(c, a))
                : r ||
                  !1 === n.trailing ||
                  (r = setTimeout(function () {
                      ;(i = !1 === n.leading ? 0 : Date.now()), (r = null), e.apply(c, a)
                  }, l))
        }
    }
    function ee(e, t, n, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window,
            o = i.Object.getOwnPropertyDescriptor(e, t)
        return (
            i.Object.defineProperty(
                e,
                t,
                r
                    ? n
                    : {
                          set: function (e) {
                              var t = this
                              setTimeout(function () {
                                  n.set.call(t, e)
                              }, 0),
                                  o && o.set && o.set.call(this, e)
                          },
                      }
            ),
            function () {
                return ee(e, t, o || {}, !0)
            }
        )
    }
    function te(e, t, n) {
        try {
            if (!(t in e)) return function () {}
            var r = e[t],
                i = n(r)
            return (
                'function' == typeof i &&
                    ((i.prototype = i.prototype || {}),
                    Object.defineProperties(i, { __rrweb_original__: { enumerable: !1, value: r } })),
                (e[t] = i),
                function () {
                    e[t] = r
                }
            )
        } catch (e) {
            return function () {}
        }
    }
    'undefined' != typeof window &&
        window.Proxy &&
        window.Reflect &&
        (J = new Proxy(J, {
            get: function (e, t, n) {
                return 'map' === t && console.error(Y), Reflect.get(e, t, n)
            },
        }))
    var ne = Date.now
    function re(e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s = e.document
        return {
            left: s.scrollingElement
                ? s.scrollingElement.scrollLeft
                : void 0 !== e.pageXOffset
                ? e.pageXOffset
                : (null == s ? void 0 : s.documentElement.scrollLeft) ||
                  (null ===
                      (n = null === (t = null == s ? void 0 : s.body) || void 0 === t ? void 0 : t.parentElement) ||
                  void 0 === n
                      ? void 0
                      : n.scrollLeft) ||
                  (null === (r = null == s ? void 0 : s.body) || void 0 === r ? void 0 : r.scrollLeft) ||
                  0,
            top: s.scrollingElement
                ? s.scrollingElement.scrollTop
                : void 0 !== e.pageYOffset
                ? e.pageYOffset
                : (null == s ? void 0 : s.documentElement.scrollTop) ||
                  (null ===
                      (o = null === (i = null == s ? void 0 : s.body) || void 0 === i ? void 0 : i.parentElement) ||
                  void 0 === o
                      ? void 0
                      : o.scrollTop) ||
                  (null === (a = null == s ? void 0 : s.body) || void 0 === a ? void 0 : a.scrollTop) ||
                  0,
        }
    }
    function ie() {
        return (
            window.innerHeight ||
            (document.documentElement && document.documentElement.clientHeight) ||
            (document.body && document.body.clientHeight)
        )
    }
    function oe() {
        return (
            window.innerWidth ||
            (document.documentElement && document.documentElement.clientWidth) ||
            (document.body && document.body.clientWidth)
        )
    }
    function ae(e) {
        return e ? (e.nodeType === e.ELEMENT_NODE ? e : e.parentElement) : null
    }
    function se(e, t, n, r) {
        if (!e) return !1
        var i = ae(e)
        if (!i) return !1
        try {
            if ('string' == typeof t) {
                if (i.classList.contains(t)) return !0
                if (r && null !== i.closest('.' + t)) return !0
            } else if (j(i, t, r)) return !0
        } catch (e) {}
        if (n) {
            if (i.matches(n)) return !0
            if (r && null !== i.closest(n)) return !0
        }
        return !1
    }
    function ue(e, t) {
        return t.getId(e) === R
    }
    function le(e, t) {
        if (m(e)) return !1
        var n = t.getId(e)
        return (
            !t.has(n) ||
            ((!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || le(e.parentNode, t)))
        )
    }
    function ce(e) {
        return Boolean(e.changedTouches)
    }
    function de(e, t) {
        return Boolean('IFRAME' === e.nodeName && t.getMeta(e))
    }
    function fe(e, t) {
        return Boolean(
            'LINK' === e.nodeName &&
                e.nodeType === e.ELEMENT_NODE &&
                e.getAttribute &&
                'stylesheet' === e.getAttribute('rel') &&
                t.getMeta(e)
        )
    }
    function pe(e) {
        return Boolean(null == e ? void 0 : e.shadowRoot)
    }
    ;/[1-9][0-9]{12}/.test(Date.now().toString()) ||
        (ne = function () {
            return new Date().getTime()
        })
    var he = (function () {
        function e() {
            a(this, e), (this.id = 1), (this.styleIDMap = new WeakMap()), (this.idStyleMap = new Map())
        }
        return (
            u(e, [
                {
                    key: 'getId',
                    value: function (e) {
                        var t
                        return null !== (t = this.styleIDMap.get(e)) && void 0 !== t ? t : -1
                    },
                },
                {
                    key: 'has',
                    value: function (e) {
                        return this.styleIDMap.has(e)
                    },
                },
                {
                    key: 'add',
                    value: function (e, t) {
                        return this.has(e)
                            ? this.getId(e)
                            : ((n = void 0 === t ? this.id++ : t),
                              this.styleIDMap.set(e, n),
                              this.idStyleMap.set(n, e),
                              n)
                        var n
                    },
                },
                {
                    key: 'getStyle',
                    value: function (e) {
                        return this.idStyleMap.get(e) || null
                    },
                },
                {
                    key: 'reset',
                    value: function () {
                        ;(this.styleIDMap = new WeakMap()), (this.idStyleMap = new Map()), (this.id = 1)
                    },
                },
                {
                    key: 'generateId',
                    value: function () {
                        return this.id++
                    },
                },
            ]),
            e
        )
    })()
    function ve(e) {
        var t,
            n,
            r = null
        return (
            (null === (n = null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)) || void 0 === n
                ? void 0
                : n.nodeType) === Node.DOCUMENT_FRAGMENT_NODE &&
                e.getRootNode().host &&
                (r = e.getRootNode().host),
            r
        )
    }
    function ge(e) {
        var t = e.ownerDocument
        if (!t) return !1
        var n = (function (e) {
            for (var t, n = e; (t = ve(n)); ) n = t
            return n
        })(e)
        return t.contains(n)
    }
    function me(e) {
        var t = e.ownerDocument
        return !!t && (t.contains(e) || ge(e))
    }
    var _e = (function (e) {
            return (
                (e[(e.DomContentLoaded = 0)] = 'DomContentLoaded'),
                (e[(e.Load = 1)] = 'Load'),
                (e[(e.FullSnapshot = 2)] = 'FullSnapshot'),
                (e[(e.IncrementalSnapshot = 3)] = 'IncrementalSnapshot'),
                (e[(e.Meta = 4)] = 'Meta'),
                (e[(e.Custom = 5)] = 'Custom'),
                (e[(e.Plugin = 6)] = 'Plugin'),
                e
            )
        })(_e || {}),
        ye = (function (e) {
            return (
                (e[(e.Mutation = 0)] = 'Mutation'),
                (e[(e.MouseMove = 1)] = 'MouseMove'),
                (e[(e.MouseInteraction = 2)] = 'MouseInteraction'),
                (e[(e.Scroll = 3)] = 'Scroll'),
                (e[(e.ViewportResize = 4)] = 'ViewportResize'),
                (e[(e.Input = 5)] = 'Input'),
                (e[(e.TouchMove = 6)] = 'TouchMove'),
                (e[(e.MediaInteraction = 7)] = 'MediaInteraction'),
                (e[(e.StyleSheetRule = 8)] = 'StyleSheetRule'),
                (e[(e.CanvasMutation = 9)] = 'CanvasMutation'),
                (e[(e.Font = 10)] = 'Font'),
                (e[(e.Log = 11)] = 'Log'),
                (e[(e.Drag = 12)] = 'Drag'),
                (e[(e.StyleDeclaration = 13)] = 'StyleDeclaration'),
                (e[(e.Selection = 14)] = 'Selection'),
                (e[(e.AdoptedStyleSheet = 15)] = 'AdoptedStyleSheet'),
                (e[(e.CustomElement = 16)] = 'CustomElement'),
                e
            )
        })(ye || {}),
        be = (function (e) {
            return (
                (e[(e.MouseUp = 0)] = 'MouseUp'),
                (e[(e.MouseDown = 1)] = 'MouseDown'),
                (e[(e.Click = 2)] = 'Click'),
                (e[(e.ContextMenu = 3)] = 'ContextMenu'),
                (e[(e.DblClick = 4)] = 'DblClick'),
                (e[(e.Focus = 5)] = 'Focus'),
                (e[(e.Blur = 6)] = 'Blur'),
                (e[(e.TouchStart = 7)] = 'TouchStart'),
                (e[(e.TouchMove_Departed = 8)] = 'TouchMove_Departed'),
                (e[(e.TouchEnd = 9)] = 'TouchEnd'),
                (e[(e.TouchCancel = 10)] = 'TouchCancel'),
                e
            )
        })(be || {}),
        ke = (function (e) {
            return (e[(e.Mouse = 0)] = 'Mouse'), (e[(e.Pen = 1)] = 'Pen'), (e[(e.Touch = 2)] = 'Touch'), e
        })(ke || {}),
        we = (function (e) {
            return (e[(e['2D'] = 0)] = '2D'), (e[(e.WebGL = 1)] = 'WebGL'), (e[(e.WebGL2 = 2)] = 'WebGL2'), e
        })(we || {})
    function Ce(e) {
        return '__ln' in e
    }
    var Ie,
        Se = (function () {
            function e() {
                a(this, e), (this.length = 0), (this.head = null), (this.tail = null)
            }
            return (
                u(e, [
                    {
                        key: 'get',
                        value: function (e) {
                            if (e >= this.length) throw new Error('Position outside of list range')
                            for (var t = this.head, n = 0; n < e; n++) t = (null == t ? void 0 : t.next) || null
                            return t
                        },
                    },
                    {
                        key: 'addNode',
                        value: function (e) {
                            var t = { value: e, previous: null, next: null }
                            if (((e.__ln = t), e.previousSibling && Ce(e.previousSibling))) {
                                var n = e.previousSibling.__ln.next
                                ;(t.next = n),
                                    (t.previous = e.previousSibling.__ln),
                                    (e.previousSibling.__ln.next = t),
                                    n && (n.previous = t)
                            } else if (e.nextSibling && Ce(e.nextSibling) && e.nextSibling.__ln.previous) {
                                var r = e.nextSibling.__ln.previous
                                ;(t.previous = r),
                                    (t.next = e.nextSibling.__ln),
                                    (e.nextSibling.__ln.previous = t),
                                    r && (r.next = t)
                            } else this.head && (this.head.previous = t), (t.next = this.head), (this.head = t)
                            null === t.next && (this.tail = t), this.length++
                        },
                    },
                    {
                        key: 'removeNode',
                        value: function (e) {
                            var t = e.__ln
                            this.head &&
                                (t.previous
                                    ? ((t.previous.next = t.next),
                                      t.next ? (t.next.previous = t.previous) : (this.tail = t.previous))
                                    : ((this.head = t.next),
                                      this.head ? (this.head.previous = null) : (this.tail = null)),
                                e.__ln && delete e.__ln,
                                this.length--)
                        },
                    },
                ]),
                e
            )
        })(),
        xe = function (e, t) {
            return ''.concat(e, '@').concat(t)
        },
        Ee = (function () {
            function e() {
                var t = this
                a(this, e),
                    (this.frozen = !1),
                    (this.locked = !1),
                    (this.texts = []),
                    (this.attributes = []),
                    (this.attributeMap = new WeakMap()),
                    (this.removes = []),
                    (this.mapRemoves = []),
                    (this.movedMap = {}),
                    (this.addedSet = new Set()),
                    (this.movedSet = new Set()),
                    (this.droppedSet = new Set()),
                    (this.processMutations = function (e) {
                        e.forEach(t.processMutation), t.emit()
                    }),
                    (this.emit = function () {
                        if (!t.frozen && !t.locked) {
                            for (
                                var e = [],
                                    n = new Set(),
                                    r = new Se(),
                                    i = function (e) {
                                        for (var n = e, r = R; r === R; )
                                            r = (n = n && n.nextSibling) && t.mirror.getId(n)
                                        return r
                                    },
                                    o = function (o) {
                                        if (o.parentNode && me(o) && 'TEXTAREA' !== o.parentNode.tagName) {
                                            var a = m(o.parentNode)
                                                    ? t.mirror.getId(ve(o))
                                                    : t.mirror.getId(o.parentNode),
                                                s = i(o)
                                            if (-1 === a || -1 === s) return r.addNode(o)
                                            var u = Q(o, {
                                                doc: t.doc,
                                                mirror: t.mirror,
                                                blockClass: t.blockClass,
                                                blockSelector: t.blockSelector,
                                                maskTextClass: t.maskTextClass,
                                                maskTextSelector: t.maskTextSelector,
                                                skipChild: !0,
                                                newlyAddedElement: !0,
                                                inlineStylesheet: t.inlineStylesheet,
                                                maskInputOptions: t.maskInputOptions,
                                                maskTextFn: t.maskTextFn,
                                                maskInputFn: t.maskInputFn,
                                                slimDOMOptions: t.slimDOMOptions,
                                                dataURLOptions: t.dataURLOptions,
                                                recordCanvas: t.recordCanvas,
                                                inlineImages: t.inlineImages,
                                                onSerialize: function (e) {
                                                    de(e, t.mirror) && t.iframeManager.addIframe(e),
                                                        fe(e, t.mirror) && t.stylesheetManager.trackLinkElement(e),
                                                        pe(o) && t.shadowDomManager.addShadowRoot(o.shadowRoot, t.doc)
                                                },
                                                onIframeLoad: function (e, n) {
                                                    t.iframeManager.attachIframe(e, n),
                                                        t.shadowDomManager.observeAttachShadow(e)
                                                },
                                                onStylesheetLoad: function (e, n) {
                                                    t.stylesheetManager.attachLinkElement(e, n)
                                                },
                                            })
                                            u && (e.push({ parentId: a, nextId: s, node: u }), n.add(u.id))
                                        }
                                    };
                                t.mapRemoves.length;

                            )
                                t.mirror.removeNodeFromMap(t.mapRemoves.shift())
                            var a,
                                s = v(t.movedSet)
                            try {
                                for (s.s(); !(a = s.n()).done; ) {
                                    var u = a.value
                                    ;(Ae(t.removes, u, t.mirror) && !t.movedSet.has(u.parentNode)) || o(u)
                                }
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                            var l,
                                c = v(t.addedSet)
                            try {
                                for (c.s(); !(l = c.n()).done; ) {
                                    var d = l.value
                                    Re(t.droppedSet, d) || Ae(t.removes, d, t.mirror)
                                        ? Re(t.movedSet, d)
                                            ? o(d)
                                            : t.droppedSet.add(d)
                                        : o(d)
                                }
                            } catch (e) {
                                c.e(e)
                            } finally {
                                c.f()
                            }
                            for (var f = null; r.length; ) {
                                var p = null
                                if (f) {
                                    var h = t.mirror.getId(f.value.parentNode),
                                        g = i(f.value)
                                    ;-1 !== h && -1 !== g && (p = f)
                                }
                                if (!p)
                                    for (var _ = r.tail; _; ) {
                                        var y = _
                                        if (((_ = _.previous), y)) {
                                            var b = t.mirror.getId(y.value.parentNode)
                                            if (-1 === i(y.value)) continue
                                            if (-1 !== b) {
                                                p = y
                                                break
                                            }
                                            var k = y.value
                                            if (k.parentNode && k.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                                var w = k.parentNode.host
                                                if (-1 !== t.mirror.getId(w)) {
                                                    p = y
                                                    break
                                                }
                                            }
                                        }
                                    }
                                if (!p) {
                                    for (; r.head; ) r.removeNode(r.head.value)
                                    break
                                }
                                ;(f = p.previous), r.removeNode(p.value), o(p.value)
                            }
                            var C = {
                                texts: t.texts
                                    .map(function (e) {
                                        var n = e.node
                                        return (
                                            n.parentNode &&
                                                'TEXTAREA' === n.parentNode.tagName &&
                                                t.genTextAreaValueMutation(n.parentNode),
                                            { id: t.mirror.getId(n), value: e.value }
                                        )
                                    })
                                    .filter(function (e) {
                                        return !n.has(e.id)
                                    })
                                    .filter(function (e) {
                                        return t.mirror.has(e.id)
                                    }),
                                attributes: t.attributes
                                    .map(function (e) {
                                        var n = e.attributes
                                        if ('string' == typeof n.style) {
                                            var r = JSON.stringify(e.styleDiff),
                                                i = JSON.stringify(e._unchangedStyles)
                                            r.length < n.style.length &&
                                                (r + i).split('var(').length === n.style.split('var(').length &&
                                                (n.style = e.styleDiff)
                                        }
                                        return { id: t.mirror.getId(e.node), attributes: n }
                                    })
                                    .filter(function (e) {
                                        return !n.has(e.id)
                                    })
                                    .filter(function (e) {
                                        return t.mirror.has(e.id)
                                    }),
                                removes: t.removes,
                                adds: e,
                            }
                            ;(C.texts.length || C.attributes.length || C.removes.length || C.adds.length) &&
                                ((t.texts = []),
                                (t.attributes = []),
                                (t.attributeMap = new WeakMap()),
                                (t.removes = []),
                                (t.addedSet = new Set()),
                                (t.movedSet = new Set()),
                                (t.droppedSet = new Set()),
                                (t.movedMap = {}),
                                t.mutationCb(C))
                        }
                    }),
                    (this.genTextAreaValueMutation = function (e) {
                        var n = t.attributeMap.get(e)
                        n ||
                            ((n = { node: e, attributes: {}, styleDiff: {}, _unchangedStyles: {} }),
                            t.attributes.push(n),
                            t.attributeMap.set(e, n)),
                            (n.attributes.value = Array.from(e.childNodes, function (e) {
                                return e.textContent || ''
                            }).join(''))
                    }),
                    (this.processMutation = function (e) {
                        if (!ue(e.target, t.mirror))
                            switch (e.type) {
                                case 'characterData':
                                    var n = e.target.textContent
                                    se(e.target, t.blockClass, t.blockSelector, !1) ||
                                        n === e.oldValue ||
                                        t.texts.push({
                                            value:
                                                G(e.target, t.maskTextClass, t.maskTextSelector, !0) && n
                                                    ? t.maskTextFn
                                                        ? t.maskTextFn(n, ae(e.target))
                                                        : n.replace(/[\S]/g, '*')
                                                    : n,
                                            node: e.target,
                                        })
                                    break
                                case 'attributes':
                                    var r = e.target,
                                        i = e.attributeName,
                                        o = e.target.getAttribute(i)
                                    if ('value' === i) {
                                        var a = S(r)
                                        o = w({
                                            element: r,
                                            maskInputOptions: t.maskInputOptions,
                                            tagName: r.tagName,
                                            type: a,
                                            value: o,
                                            maskInputFn: t.maskInputFn,
                                        })
                                    }
                                    if (se(e.target, t.blockClass, t.blockSelector, !1) || o === e.oldValue) return
                                    var s = t.attributeMap.get(e.target)
                                    if ('IFRAME' === r.tagName && 'src' === i && !t.keepIframeSrcFn(o)) {
                                        if (r.contentDocument) return
                                        i = 'rr_src'
                                    }
                                    if (
                                        (s ||
                                            ((s = {
                                                node: e.target,
                                                attributes: {},
                                                styleDiff: {},
                                                _unchangedStyles: {},
                                            }),
                                            t.attributes.push(s),
                                            t.attributeMap.set(e.target, s)),
                                        'type' === i &&
                                            'INPUT' === r.tagName &&
                                            'password' === (e.oldValue || '').toLowerCase() &&
                                            r.setAttribute('data-rr-is-password', 'true'),
                                        !U(r.tagName, i) &&
                                            ((s.attributes[i] = V(t.doc, C(r.tagName), C(i), o)), 'style' === i))
                                    ) {
                                        if (!t.unattachedDoc)
                                            try {
                                                t.unattachedDoc = document.implementation.createHTMLDocument()
                                            } catch (e) {
                                                t.unattachedDoc = t.doc
                                            }
                                        var u = t.unattachedDoc.createElement('span')
                                        e.oldValue && u.setAttribute('style', e.oldValue)
                                        for (var l = 0, c = Array.from(r.style); l < c.length; l++) {
                                            var d = c[l],
                                                f = r.style.getPropertyValue(d),
                                                p = r.style.getPropertyPriority(d)
                                            f !== u.style.getPropertyValue(d) || p !== u.style.getPropertyPriority(d)
                                                ? (s.styleDiff[d] = '' === p ? f : [f, p])
                                                : (s._unchangedStyles[d] = [f, p])
                                        }
                                        for (var h = 0, v = Array.from(u.style); h < v.length; h++) {
                                            var g = v[h]
                                            '' === r.style.getPropertyValue(g) && (s.styleDiff[g] = !1)
                                        }
                                    }
                                    break
                                case 'childList':
                                    if (se(e.target, t.blockClass, t.blockSelector, !0)) return
                                    if ('TEXTAREA' === e.target.tagName)
                                        return void t.genTextAreaValueMutation(e.target)
                                    e.addedNodes.forEach(function (n) {
                                        return t.genAdds(n, e.target)
                                    }),
                                        e.removedNodes.forEach(function (n) {
                                            var r = t.mirror.getId(n),
                                                i = m(e.target)
                                                    ? t.mirror.getId(e.target.host)
                                                    : t.mirror.getId(e.target)
                                            se(e.target, t.blockClass, t.blockSelector, !1) ||
                                                ue(n, t.mirror) ||
                                                !(function (e, t) {
                                                    return -1 !== t.getId(e)
                                                })(n, t.mirror) ||
                                                (t.addedSet.has(n)
                                                    ? (Te(t.addedSet, n), t.droppedSet.add(n))
                                                    : (t.addedSet.has(e.target) && -1 === r) ||
                                                      le(e.target, t.mirror) ||
                                                      (t.movedSet.has(n) && t.movedMap[xe(r, i)]
                                                          ? Te(t.movedSet, n)
                                                          : t.removes.push({
                                                                parentId: i,
                                                                id: r,
                                                                isShadow: !(!m(e.target) || !_(e.target)) || void 0,
                                                            })),
                                                t.mapRemoves.push(n))
                                        })
                            }
                    }),
                    (this.genAdds = function (e, n) {
                        if (!t.processedNodeManager.inOtherBuffer(e, t) && !t.addedSet.has(e) && !t.movedSet.has(e)) {
                            if (t.mirror.hasNode(e)) {
                                if (ue(e, t.mirror)) return
                                t.movedSet.add(e)
                                var r = null
                                n && t.mirror.hasNode(n) && (r = t.mirror.getId(n)),
                                    r && -1 !== r && (t.movedMap[xe(t.mirror.getId(e), r)] = !0)
                            } else t.addedSet.add(e), t.droppedSet.delete(e)
                            se(e, t.blockClass, t.blockSelector, !1) ||
                                (e.childNodes.forEach(function (e) {
                                    return t.genAdds(e)
                                }),
                                pe(e) &&
                                    e.shadowRoot.childNodes.forEach(function (n) {
                                        t.processedNodeManager.add(n, t), t.genAdds(n, e)
                                    }))
                        }
                    })
            }
            return (
                u(e, [
                    {
                        key: 'init',
                        value: function (e) {
                            var t = this
                            ;[
                                'mutationCb',
                                'blockClass',
                                'blockSelector',
                                'maskTextClass',
                                'maskTextSelector',
                                'inlineStylesheet',
                                'maskInputOptions',
                                'maskTextFn',
                                'maskInputFn',
                                'keepIframeSrcFn',
                                'recordCanvas',
                                'inlineImages',
                                'slimDOMOptions',
                                'dataURLOptions',
                                'doc',
                                'mirror',
                                'iframeManager',
                                'stylesheetManager',
                                'shadowDomManager',
                                'canvasManager',
                                'processedNodeManager',
                            ].forEach(function (n) {
                                t[n] = e[n]
                            })
                        },
                    },
                    {
                        key: 'freeze',
                        value: function () {
                            ;(this.frozen = !0), this.canvasManager.freeze()
                        },
                    },
                    {
                        key: 'unfreeze',
                        value: function () {
                            ;(this.frozen = !1), this.canvasManager.unfreeze(), this.emit()
                        },
                    },
                    {
                        key: 'isFrozen',
                        value: function () {
                            return this.frozen
                        },
                    },
                    {
                        key: 'lock',
                        value: function () {
                            ;(this.locked = !0), this.canvasManager.lock()
                        },
                    },
                    {
                        key: 'unlock',
                        value: function () {
                            ;(this.locked = !1), this.canvasManager.unlock(), this.emit()
                        },
                    },
                    {
                        key: 'reset',
                        value: function () {
                            this.shadowDomManager.reset(), this.canvasManager.reset()
                        },
                    },
                ]),
                e
            )
        })()
    function Te(e, t) {
        e.delete(t),
            t.childNodes.forEach(function (t) {
                return Te(e, t)
            })
    }
    function Ae(e, t, n) {
        return 0 !== e.length && Me(e, t, n)
    }
    function Me(e, t, n) {
        var r = t.parentNode
        if (!r) return !1
        var i = n.getId(r)
        return (
            !!e.some(function (e) {
                return e.id === i
            }) || Me(e, r, n)
        )
    }
    function Re(e, t) {
        return 0 !== e.size && Fe(e, t)
    }
    function Fe(e, t) {
        var n = t.parentNode
        return !!n && (!!e.has(n) || Fe(e, n))
    }
    function Oe(e) {
        Ie = e
    }
    function Ne() {
        Ie = void 0
    }
    var Le = function (e) {
            if (!Ie) return e
            return function () {
                try {
                    return e.apply(void 0, arguments)
                } catch (e) {
                    if (Ie && !0 === Ie(e)) return
                    throw e
                }
            }
        },
        Pe = []
    function De(e) {
        try {
            if ('composedPath' in e) {
                var t = e.composedPath()
                if (t.length) return t[0]
            } else if ('path' in e && e.path.length) return e.path[0]
        } catch (e) {}
        return e && e.target
    }
    function qe(e, t) {
        var n,
            r,
            i = new Ee()
        Pe.push(i), i.init(e)
        var o = window.MutationObserver || window.__rrMutationObserver,
            a =
                null ===
                    (r =
                        null === (n = null === window || void 0 === window ? void 0 : window.Zone) || void 0 === n
                            ? void 0
                            : n.__symbol__) || void 0 === r
                    ? void 0
                    : r.call(n, 'MutationObserver')
        a && window[a] && (o = window[a])
        var s = new o(Le(i.processMutations.bind(i)))
        return (
            s.observe(t, {
                attributes: !0,
                attributeOldValue: !0,
                characterData: !0,
                characterDataOldValue: !0,
                childList: !0,
                subtree: !0,
            }),
            s
        )
    }
    function Be(e) {
        var t = e.mouseInteractionCb,
            n = e.doc,
            r = e.mirror,
            i = e.blockClass,
            o = e.blockSelector,
            a = e.sampling
        if (!1 === a.mouseInteraction) return function () {}
        var s = !0 === a.mouseInteraction || void 0 === a.mouseInteraction ? {} : a.mouseInteraction,
            u = [],
            l = null
        return (
            Object.keys(be)
                .filter(function (e) {
                    return Number.isNaN(Number(e)) && !e.endsWith('_Departed') && !1 !== s[e]
                })
                .forEach(function (e) {
                    var a = C(e),
                        s = (function (e) {
                            return function (n) {
                                var a = De(n)
                                if (!se(a, i, o, !0)) {
                                    var s = null,
                                        u = e
                                    if ('pointerType' in n) {
                                        switch (n.pointerType) {
                                            case 'mouse':
                                                s = ke.Mouse
                                                break
                                            case 'touch':
                                                s = ke.Touch
                                                break
                                            case 'pen':
                                                s = ke.Pen
                                        }
                                        s === ke.Touch
                                            ? be[e] === be.MouseDown
                                                ? (u = 'TouchStart')
                                                : be[e] === be.MouseUp && (u = 'TouchEnd')
                                            : ke.Pen
                                    } else ce(n) && (s = ke.Touch)
                                    null !== s
                                        ? ((l = s),
                                          ((u.startsWith('Touch') && s === ke.Touch) ||
                                              (u.startsWith('Mouse') && s === ke.Mouse)) &&
                                              (s = null))
                                        : be[e] === be.Click && ((s = l), (l = null))
                                    var c = ce(n) ? n.changedTouches[0] : n
                                    if (c) {
                                        var d = r.getId(a),
                                            f = c.clientX,
                                            p = c.clientY
                                        Le(t)(
                                            Object.assign(
                                                { type: be[u], id: d, x: f, y: p },
                                                null !== s && { pointerType: s }
                                            )
                                        )
                                    }
                                }
                            }
                        })(e)
                    if (window.PointerEvent)
                        switch (be[e]) {
                            case be.MouseDown:
                            case be.MouseUp:
                                a = a.replace('mouse', 'pointer')
                                break
                            case be.TouchStart:
                            case be.TouchEnd:
                                return
                        }
                    u.push(K(a, s, n))
                }),
            Le(function () {
                u.forEach(function (e) {
                    return e()
                })
            })
        )
    }
    function He(e) {
        var t = e.scrollCb,
            n = e.doc,
            r = e.mirror,
            i = e.blockClass,
            o = e.blockSelector,
            a = e.sampling
        return K(
            'scroll',
            Le(
                X(
                    Le(function (e) {
                        var a = De(e)
                        if (a && !se(a, i, o, !0)) {
                            var s = r.getId(a)
                            if (a === n && n.defaultView) {
                                var u = re(n.defaultView)
                                t({ id: s, x: u.left, y: u.top })
                            } else t({ id: s, x: a.scrollLeft, y: a.scrollTop })
                        }
                    }),
                    a.scroll || 100
                )
            ),
            n
        )
    }
    var $e = ['INPUT', 'TEXTAREA', 'SELECT'],
        We = new WeakMap()
    function Ve(e) {
        return (function (e, t) {
            if (
                (Ze('CSSGroupingRule') && e.parentRule instanceof CSSGroupingRule) ||
                (Ze('CSSMediaRule') && e.parentRule instanceof CSSMediaRule) ||
                (Ze('CSSSupportsRule') && e.parentRule instanceof CSSSupportsRule) ||
                (Ze('CSSConditionRule') && e.parentRule instanceof CSSConditionRule)
            ) {
                var n = Array.from(e.parentRule.cssRules).indexOf(e)
                t.unshift(n)
            } else if (e.parentStyleSheet) {
                var r = Array.from(e.parentStyleSheet.cssRules).indexOf(e)
                t.unshift(r)
            }
            return t
        })(e, [])
    }
    function Ue(e, t, n) {
        var r, i
        return e ? (e.ownerNode ? (r = t.getId(e.ownerNode)) : (i = n.getId(e)), { styleId: i, id: r }) : {}
    }
    function je(e, t) {
        var n,
            r,
            i,
            o = e.mirror,
            a = e.stylesheetManager,
            s = null
        s = '#document' === t.nodeName ? o.getId(t) : o.getId(t.host)
        var u =
                '#document' === t.nodeName
                    ? null === (n = t.defaultView) || void 0 === n
                        ? void 0
                        : n.Document
                    : null === (i = null === (r = t.ownerDocument) || void 0 === r ? void 0 : r.defaultView) ||
                      void 0 === i
                    ? void 0
                    : i.ShadowRoot,
            l = (null == u ? void 0 : u.prototype)
                ? Object.getOwnPropertyDescriptor(null == u ? void 0 : u.prototype, 'adoptedStyleSheets')
                : void 0
        return null !== s && -1 !== s && u && l
            ? (Object.defineProperty(t, 'adoptedStyleSheets', {
                  configurable: l.configurable,
                  enumerable: l.enumerable,
                  get: function () {
                      var e
                      return null === (e = l.get) || void 0 === e ? void 0 : e.call(this)
                  },
                  set: function (e) {
                      var t,
                          n = null === (t = l.set) || void 0 === t ? void 0 : t.call(this, e)
                      if (null !== s && -1 !== s)
                          try {
                              a.adoptStyleSheets(e, s)
                          } catch (e) {}
                      return n
                  },
              }),
              Le(function () {
                  Object.defineProperty(t, 'adoptedStyleSheets', {
                      configurable: l.configurable,
                      enumerable: l.enumerable,
                      get: l.get,
                      set: l.set,
                  })
              }))
            : function () {}
    }
    function Ge(e) {
        var t,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = e.doc.defaultView
        if (!r) return function () {}
        !(function (e, t) {
            var n = e.mutationCb,
                r = e.mousemoveCb,
                i = e.mouseInteractionCb,
                o = e.scrollCb,
                a = e.viewportResizeCb,
                s = e.inputCb,
                u = e.mediaInteractionCb,
                l = e.styleSheetRuleCb,
                c = e.styleDeclarationCb,
                d = e.canvasMutationCb,
                f = e.fontCb,
                p = e.selectionCb,
                h = e.customElementCb
            ;(e.mutationCb = function () {
                t.mutation && t.mutation.apply(t, arguments), n.apply(void 0, arguments)
            }),
                (e.mousemoveCb = function () {
                    t.mousemove && t.mousemove.apply(t, arguments), r.apply(void 0, arguments)
                }),
                (e.mouseInteractionCb = function () {
                    t.mouseInteraction && t.mouseInteraction.apply(t, arguments), i.apply(void 0, arguments)
                }),
                (e.scrollCb = function () {
                    t.scroll && t.scroll.apply(t, arguments), o.apply(void 0, arguments)
                }),
                (e.viewportResizeCb = function () {
                    t.viewportResize && t.viewportResize.apply(t, arguments), a.apply(void 0, arguments)
                }),
                (e.inputCb = function () {
                    t.input && t.input.apply(t, arguments), s.apply(void 0, arguments)
                }),
                (e.mediaInteractionCb = function () {
                    t.mediaInteaction && t.mediaInteaction.apply(t, arguments), u.apply(void 0, arguments)
                }),
                (e.styleSheetRuleCb = function () {
                    t.styleSheetRule && t.styleSheetRule.apply(t, arguments), l.apply(void 0, arguments)
                }),
                (e.styleDeclarationCb = function () {
                    t.styleDeclaration && t.styleDeclaration.apply(t, arguments), c.apply(void 0, arguments)
                }),
                (e.canvasMutationCb = function () {
                    t.canvasMutation && t.canvasMutation.apply(t, arguments), d.apply(void 0, arguments)
                }),
                (e.fontCb = function () {
                    t.font && t.font.apply(t, arguments), f.apply(void 0, arguments)
                }),
                (e.selectionCb = function () {
                    t.selection && t.selection.apply(t, arguments), p.apply(void 0, arguments)
                }),
                (e.customElementCb = function () {
                    t.customElement && t.customElement.apply(t, arguments), h.apply(void 0, arguments)
                })
        })(e, n),
            e.recordDOM && (t = qe(e, e.doc))
        var i = (function (e) {
                var t = e.mousemoveCb,
                    n = e.sampling,
                    r = e.doc,
                    i = e.mirror
                if (!1 === n.mousemove) return function () {}
                var o,
                    a = 'number' == typeof n.mousemove ? n.mousemove : 50,
                    s = 'number' == typeof n.mousemoveCallback ? n.mousemoveCallback : 500,
                    u = [],
                    l = X(
                        Le(function (e) {
                            var n = Date.now() - o
                            t(
                                u.map(function (e) {
                                    return (e.timeOffset -= n), e
                                }),
                                e
                            ),
                                (u = []),
                                (o = null)
                        }),
                        s
                    ),
                    c = Le(
                        X(
                            Le(function (e) {
                                var t = De(e),
                                    n = ce(e) ? e.changedTouches[0] : e,
                                    r = n.clientX,
                                    a = n.clientY
                                o || (o = ne()),
                                    u.push({ x: r, y: a, id: i.getId(t), timeOffset: ne() - o }),
                                    l(
                                        'undefined' != typeof DragEvent && e instanceof DragEvent
                                            ? ye.Drag
                                            : e instanceof MouseEvent
                                            ? ye.MouseMove
                                            : ye.TouchMove
                                    )
                            }),
                            a,
                            { trailing: !1 }
                        )
                    ),
                    d = [K('mousemove', c, r), K('touchmove', c, r), K('drag', c, r)]
                return Le(function () {
                    d.forEach(function (e) {
                        return e()
                    })
                })
            })(e),
            o = Be(e),
            a = He(e),
            s = (function (e, t) {
                var n = e.viewportResizeCb,
                    r = t.win,
                    i = -1,
                    o = -1
                return K(
                    'resize',
                    Le(
                        X(
                            Le(function () {
                                var e = ie(),
                                    t = oe()
                                ;(i === e && o === t) || (n({ width: Number(t), height: Number(e) }), (i = e), (o = t))
                            }),
                            200
                        )
                    ),
                    r
                )
            })(e, { win: r }),
            u = (function (e) {
                var t = e.inputCb,
                    n = e.doc,
                    r = e.mirror,
                    i = e.blockClass,
                    o = e.blockSelector,
                    a = e.ignoreClass,
                    s = e.ignoreSelector,
                    u = e.maskInputOptions,
                    l = e.maskInputFn,
                    c = e.sampling,
                    d = e.userTriggeredOnInput
                function p(e) {
                    var t = De(e),
                        r = e.isTrusted,
                        c = t && t.tagName
                    if (
                        (t && 'OPTION' === c && (t = t.parentElement),
                        t &&
                            c &&
                            !($e.indexOf(c) < 0) &&
                            !se(t, i, o, !0) &&
                            !(t.classList.contains(a) || (s && t.matches(s))))
                    ) {
                        var f = t.value,
                            p = !1,
                            v = S(t) || ''
                        'radio' === v || 'checkbox' === v
                            ? (p = t.checked)
                            : (u[c.toLowerCase()] || u[v]) &&
                              (f = w({
                                  element: t,
                                  maskInputOptions: u,
                                  tagName: c,
                                  type: v,
                                  value: f,
                                  maskInputFn: l,
                              })),
                            h(t, d ? { text: f, isChecked: p, userTriggered: r } : { text: f, isChecked: p })
                        var g = t.name
                        'radio' === v &&
                            g &&
                            p &&
                            n.querySelectorAll('input[type="radio"][name="'.concat(g, '"]')).forEach(function (e) {
                                if (e !== t) {
                                    var n = e.value
                                    h(e, d ? { text: n, isChecked: !p, userTriggered: !1 } : { text: n, isChecked: !p })
                                }
                            })
                    }
                }
                function h(e, n) {
                    var i = We.get(e)
                    if (!i || i.text !== n.text || i.isChecked !== n.isChecked) {
                        We.set(e, n)
                        var o = r.getId(e)
                        Le(t)(Object.assign(Object.assign({}, n), { id: o }))
                    }
                }
                var v = ('last' === c.input ? ['change'] : ['input', 'change']).map(function (e) {
                        return K(e, Le(p), n)
                    }),
                    g = n.defaultView
                if (!g)
                    return function () {
                        v.forEach(function (e) {
                            return e()
                        })
                    }
                var m = g.Object.getOwnPropertyDescriptor(g.HTMLInputElement.prototype, 'value'),
                    _ = [
                        [g.HTMLInputElement.prototype, 'value'],
                        [g.HTMLInputElement.prototype, 'checked'],
                        [g.HTMLSelectElement.prototype, 'value'],
                        [g.HTMLTextAreaElement.prototype, 'value'],
                        [g.HTMLSelectElement.prototype, 'selectedIndex'],
                        [g.HTMLOptionElement.prototype, 'selected'],
                    ]
                return (
                    m &&
                        m.set &&
                        v.push.apply(
                            v,
                            f(
                                _.map(function (e) {
                                    return ee(
                                        e[0],
                                        e[1],
                                        {
                                            set: function () {
                                                Le(p)({ target: this, isTrusted: !1 })
                                            },
                                        },
                                        !1,
                                        g
                                    )
                                })
                            )
                        ),
                    Le(function () {
                        v.forEach(function (e) {
                            return e()
                        })
                    })
                )
            })(e),
            l = (function (e) {
                var t = e.mediaInteractionCb,
                    n = e.blockClass,
                    r = e.blockSelector,
                    i = e.mirror,
                    o = e.sampling,
                    a = e.doc,
                    s = Le(function (e) {
                        return X(
                            Le(function (o) {
                                var a = De(o)
                                if (a && !se(a, n, r, !0)) {
                                    var s = a.currentTime,
                                        u = a.volume,
                                        l = a.muted,
                                        c = a.playbackRate,
                                        d = a.loop
                                    t({
                                        type: e,
                                        id: i.getId(a),
                                        currentTime: s,
                                        volume: u,
                                        muted: l,
                                        playbackRate: c,
                                        loop: d,
                                    })
                                }
                            }),
                            o.media || 500
                        )
                    }),
                    u = [
                        K('play', s(0), a),
                        K('pause', s(1), a),
                        K('seeked', s(2), a),
                        K('volumechange', s(3), a),
                        K('ratechange', s(4), a),
                    ]
                return Le(function () {
                    u.forEach(function (e) {
                        return e()
                    })
                })
            })(e),
            c = function () {},
            p = function () {},
            h = function () {},
            g = function () {}
        e.recordDOM &&
            ((c = (function (e, t) {
                var n = e.styleSheetRuleCb,
                    r = e.mirror,
                    i = e.stylesheetManager,
                    o = t.win
                if (!o.CSSStyleSheet || !o.CSSStyleSheet.prototype) return function () {}
                var a = o.CSSStyleSheet.prototype.insertRule
                o.CSSStyleSheet.prototype.insertRule = new Proxy(a, {
                    apply: Le(function (e, t, o) {
                        var a = d(o, 2),
                            s = a[0],
                            u = a[1],
                            l = Ue(t, r, i.styleMirror),
                            c = l.id,
                            f = l.styleId
                        return (
                            ((c && -1 !== c) || (f && -1 !== f)) &&
                                n({ id: c, styleId: f, adds: [{ rule: s, index: u }] }),
                            e.apply(t, o)
                        )
                    }),
                })
                var s,
                    u,
                    l = o.CSSStyleSheet.prototype.deleteRule
                ;(o.CSSStyleSheet.prototype.deleteRule = new Proxy(l, {
                    apply: Le(function (e, t, o) {
                        var a = d(o, 1)[0],
                            s = Ue(t, r, i.styleMirror),
                            u = s.id,
                            l = s.styleId
                        return (
                            ((u && -1 !== u) || (l && -1 !== l)) && n({ id: u, styleId: l, removes: [{ index: a }] }),
                            e.apply(t, o)
                        )
                    }),
                })),
                    o.CSSStyleSheet.prototype.replace &&
                        ((s = o.CSSStyleSheet.prototype.replace),
                        (o.CSSStyleSheet.prototype.replace = new Proxy(s, {
                            apply: Le(function (e, t, o) {
                                var a = d(o, 1)[0],
                                    s = Ue(t, r, i.styleMirror),
                                    u = s.id,
                                    l = s.styleId
                                return (
                                    ((u && -1 !== u) || (l && -1 !== l)) && n({ id: u, styleId: l, replace: a }),
                                    e.apply(t, o)
                                )
                            }),
                        }))),
                    o.CSSStyleSheet.prototype.replaceSync &&
                        ((u = o.CSSStyleSheet.prototype.replaceSync),
                        (o.CSSStyleSheet.prototype.replaceSync = new Proxy(u, {
                            apply: Le(function (e, t, o) {
                                var a = d(o, 1)[0],
                                    s = Ue(t, r, i.styleMirror),
                                    u = s.id,
                                    l = s.styleId
                                return (
                                    ((u && -1 !== u) || (l && -1 !== l)) && n({ id: u, styleId: l, replaceSync: a }),
                                    e.apply(t, o)
                                )
                            }),
                        })))
                var c = {}
                ze('CSSGroupingRule')
                    ? (c.CSSGroupingRule = o.CSSGroupingRule)
                    : (ze('CSSMediaRule') && (c.CSSMediaRule = o.CSSMediaRule),
                      ze('CSSConditionRule') && (c.CSSConditionRule = o.CSSConditionRule),
                      ze('CSSSupportsRule') && (c.CSSSupportsRule = o.CSSSupportsRule))
                var p = {}
                return (
                    Object.entries(c).forEach(function (e) {
                        var t = d(e, 2),
                            o = t[0],
                            a = t[1]
                        ;(p[o] = { insertRule: a.prototype.insertRule, deleteRule: a.prototype.deleteRule }),
                            (a.prototype.insertRule = new Proxy(p[o].insertRule, {
                                apply: Le(function (e, t, o) {
                                    var a = d(o, 2),
                                        s = a[0],
                                        u = a[1],
                                        l = Ue(t.parentStyleSheet, r, i.styleMirror),
                                        c = l.id,
                                        p = l.styleId
                                    return (
                                        ((c && -1 !== c) || (p && -1 !== p)) &&
                                            n({
                                                id: c,
                                                styleId: p,
                                                adds: [{ rule: s, index: [].concat(f(Ve(t)), [u || 0]) }],
                                            }),
                                        e.apply(t, o)
                                    )
                                }),
                            })),
                            (a.prototype.deleteRule = new Proxy(p[o].deleteRule, {
                                apply: Le(function (e, t, o) {
                                    var a = d(o, 1)[0],
                                        s = Ue(t.parentStyleSheet, r, i.styleMirror),
                                        u = s.id,
                                        l = s.styleId
                                    return (
                                        ((u && -1 !== u) || (l && -1 !== l)) &&
                                            n({ id: u, styleId: l, removes: [{ index: [].concat(f(Ve(t)), [a]) }] }),
                                        e.apply(t, o)
                                    )
                                }),
                            }))
                    }),
                    Le(function () {
                        ;(o.CSSStyleSheet.prototype.insertRule = a),
                            (o.CSSStyleSheet.prototype.deleteRule = l),
                            s && (o.CSSStyleSheet.prototype.replace = s),
                            u && (o.CSSStyleSheet.prototype.replaceSync = u),
                            Object.entries(c).forEach(function (e) {
                                var t = d(e, 2),
                                    n = t[0],
                                    r = t[1]
                                ;(r.prototype.insertRule = p[n].insertRule), (r.prototype.deleteRule = p[n].deleteRule)
                            })
                    })
                )
            })(e, { win: r })),
            (p = je(e, e.doc)),
            (h = (function (e, t) {
                var n = e.styleDeclarationCb,
                    r = e.mirror,
                    i = e.ignoreCSSAttributes,
                    o = e.stylesheetManager,
                    a = t.win,
                    s = a.CSSStyleDeclaration.prototype.setProperty
                a.CSSStyleDeclaration.prototype.setProperty = new Proxy(s, {
                    apply: Le(function (e, t, a) {
                        var u,
                            l = d(a, 3),
                            c = l[0],
                            f = l[1],
                            p = l[2]
                        if (i.has(c)) return s.apply(t, [c, f, p])
                        var h = Ue(
                                null === (u = t.parentRule) || void 0 === u ? void 0 : u.parentStyleSheet,
                                r,
                                o.styleMirror
                            ),
                            v = h.id,
                            g = h.styleId
                        return (
                            ((v && -1 !== v) || (g && -1 !== g)) &&
                                n({
                                    id: v,
                                    styleId: g,
                                    set: { property: c, value: f, priority: p },
                                    index: Ve(t.parentRule),
                                }),
                            e.apply(t, a)
                        )
                    }),
                })
                var u = a.CSSStyleDeclaration.prototype.removeProperty
                return (
                    (a.CSSStyleDeclaration.prototype.removeProperty = new Proxy(u, {
                        apply: Le(function (e, t, a) {
                            var s,
                                l = d(a, 1)[0]
                            if (i.has(l)) return u.apply(t, [l])
                            var c = Ue(
                                    null === (s = t.parentRule) || void 0 === s ? void 0 : s.parentStyleSheet,
                                    r,
                                    o.styleMirror
                                ),
                                f = c.id,
                                p = c.styleId
                            return (
                                ((f && -1 !== f) || (p && -1 !== p)) &&
                                    n({ id: f, styleId: p, remove: { property: l }, index: Ve(t.parentRule) }),
                                e.apply(t, a)
                            )
                        }),
                    })),
                    Le(function () {
                        ;(a.CSSStyleDeclaration.prototype.setProperty = s),
                            (a.CSSStyleDeclaration.prototype.removeProperty = u)
                    })
                )
            })(e, { win: r })),
            e.collectFonts &&
                (g = (function (e) {
                    var t = e.fontCb,
                        n = e.doc,
                        r = n.defaultView
                    if (!r) return function () {}
                    var i = [],
                        o = new WeakMap(),
                        a = r.FontFace
                    r.FontFace = function (e, t, n) {
                        var r = new a(e, t, n)
                        return (
                            o.set(r, {
                                family: e,
                                buffer: 'string' != typeof t,
                                descriptors: n,
                                fontSource: 'string' == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t))),
                            }),
                            r
                        )
                    }
                    var s = te(n.fonts, 'add', function (e) {
                        return function (n) {
                            return (
                                setTimeout(
                                    Le(function () {
                                        var e = o.get(n)
                                        e && (t(e), o.delete(n))
                                    }),
                                    0
                                ),
                                e.apply(this, [n])
                            )
                        }
                    })
                    return (
                        i.push(function () {
                            r.FontFace = a
                        }),
                        i.push(s),
                        Le(function () {
                            i.forEach(function (e) {
                                return e()
                            })
                        })
                    )
                })(e)))
        var m,
            _ = (function (e) {
                var t = e.doc,
                    n = e.mirror,
                    r = e.blockClass,
                    i = e.blockSelector,
                    o = e.selectionCb,
                    a = !0,
                    s = Le(function () {
                        var e = t.getSelection()
                        if (!(!e || (a && (null == e ? void 0 : e.isCollapsed)))) {
                            a = e.isCollapsed || !1
                            for (var s = [], u = e.rangeCount || 0, l = 0; l < u; l++) {
                                var c = e.getRangeAt(l),
                                    d = c.startContainer,
                                    f = c.startOffset,
                                    p = c.endContainer,
                                    h = c.endOffset
                                se(d, r, i, !0) ||
                                    se(p, r, i, !0) ||
                                    s.push({ start: n.getId(d), startOffset: f, end: n.getId(p), endOffset: h })
                            }
                            o({ ranges: s })
                        }
                    })
                return s(), K('selectionchange', s)
            })(e),
            y = (function (e) {
                var t = e.doc,
                    n = e.customElementCb,
                    r = t.defaultView
                return r && r.customElements
                    ? te(r.customElements, 'define', function (e) {
                          return function (t, r, i) {
                              try {
                                  n({ define: { name: t } })
                              } catch (e) {
                                  console.warn('Custom element callback failed for '.concat(t))
                              }
                              return e.apply(this, [t, r, i])
                          }
                      })
                    : function () {}
            })(e),
            b = [],
            k = v(e.plugins)
        try {
            for (k.s(); !(m = k.n()).done; ) {
                var C = m.value
                b.push(C.observer(C.callback, r, C.options))
            }
        } catch (e) {
            k.e(e)
        } finally {
            k.f()
        }
        return Le(function () {
            Pe.forEach(function (e) {
                return e.reset()
            }),
                null == t || t.disconnect(),
                i(),
                o(),
                a(),
                s(),
                u(),
                l(),
                c(),
                p(),
                h(),
                g(),
                _(),
                y(),
                b.forEach(function (e) {
                    return e()
                })
        })
    }
    function Ze(e) {
        return void 0 !== window[e]
    }
    function ze(e) {
        return Boolean(
            void 0 !== window[e] &&
                window[e].prototype &&
                'insertRule' in window[e].prototype &&
                'deleteRule' in window[e].prototype
        )
    }
    var Qe = (function () {
            function e(t) {
                a(this, e),
                    (this.generateIdFn = t),
                    (this.iframeIdToRemoteIdMap = new WeakMap()),
                    (this.iframeRemoteIdToIdMap = new WeakMap())
            }
            return (
                u(e, [
                    {
                        key: 'getId',
                        value: function (e, t, n, r) {
                            var i = n || this.getIdToRemoteIdMap(e),
                                o = r || this.getRemoteIdToIdMap(e),
                                a = i.get(t)
                            return a || ((a = this.generateIdFn()), i.set(t, a), o.set(a, t)), a
                        },
                    },
                    {
                        key: 'getIds',
                        value: function (e, t) {
                            var n = this,
                                r = this.getIdToRemoteIdMap(e),
                                i = this.getRemoteIdToIdMap(e)
                            return t.map(function (t) {
                                return n.getId(e, t, r, i)
                            })
                        },
                    },
                    {
                        key: 'getRemoteId',
                        value: function (e, t, n) {
                            var r = n || this.getRemoteIdToIdMap(e)
                            if ('number' != typeof t) return t
                            var i = r.get(t)
                            return i || -1
                        },
                    },
                    {
                        key: 'getRemoteIds',
                        value: function (e, t) {
                            var n = this,
                                r = this.getRemoteIdToIdMap(e)
                            return t.map(function (t) {
                                return n.getRemoteId(e, t, r)
                            })
                        },
                    },
                    {
                        key: 'reset',
                        value: function (e) {
                            if (!e)
                                return (
                                    (this.iframeIdToRemoteIdMap = new WeakMap()),
                                    void (this.iframeRemoteIdToIdMap = new WeakMap())
                                )
                            this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e)
                        },
                    },
                    {
                        key: 'getIdToRemoteIdMap',
                        value: function (e) {
                            var t = this.iframeIdToRemoteIdMap.get(e)
                            return t || ((t = new Map()), this.iframeIdToRemoteIdMap.set(e, t)), t
                        },
                    },
                    {
                        key: 'getRemoteIdToIdMap',
                        value: function (e) {
                            var t = this.iframeRemoteIdToIdMap.get(e)
                            return t || ((t = new Map()), this.iframeRemoteIdToIdMap.set(e, t)), t
                        },
                    },
                ]),
                e
            )
        })(),
        Ke = (function () {
            function e(t) {
                a(this, e),
                    (this.iframes = new WeakMap()),
                    (this.crossOriginIframeMap = new WeakMap()),
                    (this.crossOriginIframeMirror = new Qe(F)),
                    (this.crossOriginIframeRootIdMap = new WeakMap()),
                    (this.mutationCb = t.mutationCb),
                    (this.wrappedEmit = t.wrappedEmit),
                    (this.stylesheetManager = t.stylesheetManager),
                    (this.recordCrossOriginIframes = t.recordCrossOriginIframes),
                    (this.crossOriginIframeStyleMirror = new Qe(
                        this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)
                    )),
                    (this.mirror = t.mirror),
                    this.recordCrossOriginIframes && window.addEventListener('message', this.handleMessage.bind(this))
            }
            return (
                u(e, [
                    {
                        key: 'addIframe',
                        value: function (e) {
                            this.iframes.set(e, !0),
                                e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
                        },
                    },
                    {
                        key: 'addLoadListener',
                        value: function (e) {
                            this.loadListener = e
                        },
                    },
                    {
                        key: 'attachIframe',
                        value: function (e, t) {
                            var n
                            this.mutationCb({
                                adds: [{ parentId: this.mirror.getId(e), nextId: null, node: t }],
                                removes: [],
                                texts: [],
                                attributes: [],
                                isAttachIframe: !0,
                            }),
                                null === (n = this.loadListener) || void 0 === n || n.call(this, e),
                                e.contentDocument &&
                                    e.contentDocument.adoptedStyleSheets &&
                                    e.contentDocument.adoptedStyleSheets.length > 0 &&
                                    this.stylesheetManager.adoptStyleSheets(
                                        e.contentDocument.adoptedStyleSheets,
                                        this.mirror.getId(e.contentDocument)
                                    )
                        },
                    },
                    {
                        key: 'handleMessage',
                        value: function (e) {
                            var t = e
                            if ('rrweb' === t.data.type && t.origin === t.data.origin && e.source) {
                                var n = this.crossOriginIframeMap.get(e.source)
                                if (n) {
                                    var r = this.transformCrossOriginEvent(n, t.data.event)
                                    r && this.wrappedEmit(r, t.data.isCheckout)
                                }
                            }
                        },
                    },
                    {
                        key: 'transformCrossOriginEvent',
                        value: function (e, t) {
                            var n,
                                r = this
                            switch (t.type) {
                                case _e.FullSnapshot:
                                    this.crossOriginIframeMirror.reset(e),
                                        this.crossOriginIframeStyleMirror.reset(e),
                                        this.replaceIdOnNode(t.data.node, e)
                                    var i = t.data.node.id
                                    return (
                                        this.crossOriginIframeRootIdMap.set(e, i),
                                        this.patchRootIdOnNode(t.data.node, i),
                                        {
                                            timestamp: t.timestamp,
                                            type: _e.IncrementalSnapshot,
                                            data: {
                                                source: ye.Mutation,
                                                adds: [
                                                    { parentId: this.mirror.getId(e), nextId: null, node: t.data.node },
                                                ],
                                                removes: [],
                                                texts: [],
                                                attributes: [],
                                                isAttachIframe: !0,
                                            },
                                        }
                                    )
                                case _e.Meta:
                                case _e.Load:
                                case _e.DomContentLoaded:
                                    return !1
                                case _e.Plugin:
                                    return t
                                case _e.Custom:
                                    return (
                                        this.replaceIds(t.data.payload, e, ['id', 'parentId', 'previousId', 'nextId']),
                                        t
                                    )
                                case _e.IncrementalSnapshot:
                                    switch (t.data.source) {
                                        case ye.Mutation:
                                            return (
                                                t.data.adds.forEach(function (t) {
                                                    r.replaceIds(t, e, ['parentId', 'nextId', 'previousId']),
                                                        r.replaceIdOnNode(t.node, e)
                                                    var n = r.crossOriginIframeRootIdMap.get(e)
                                                    n && r.patchRootIdOnNode(t.node, n)
                                                }),
                                                t.data.removes.forEach(function (t) {
                                                    r.replaceIds(t, e, ['parentId', 'id'])
                                                }),
                                                t.data.attributes.forEach(function (t) {
                                                    r.replaceIds(t, e, ['id'])
                                                }),
                                                t.data.texts.forEach(function (t) {
                                                    r.replaceIds(t, e, ['id'])
                                                }),
                                                t
                                            )
                                        case ye.Drag:
                                        case ye.TouchMove:
                                        case ye.MouseMove:
                                            return (
                                                t.data.positions.forEach(function (t) {
                                                    r.replaceIds(t, e, ['id'])
                                                }),
                                                t
                                            )
                                        case ye.ViewportResize:
                                            return !1
                                        case ye.MediaInteraction:
                                        case ye.MouseInteraction:
                                        case ye.Scroll:
                                        case ye.CanvasMutation:
                                        case ye.Input:
                                            return this.replaceIds(t.data, e, ['id']), t
                                        case ye.StyleSheetRule:
                                        case ye.StyleDeclaration:
                                            return (
                                                this.replaceIds(t.data, e, ['id']),
                                                this.replaceStyleIds(t.data, e, ['styleId']),
                                                t
                                            )
                                        case ye.Font:
                                            return t
                                        case ye.Selection:
                                            return (
                                                t.data.ranges.forEach(function (t) {
                                                    r.replaceIds(t, e, ['start', 'end'])
                                                }),
                                                t
                                            )
                                        case ye.AdoptedStyleSheet:
                                            return (
                                                this.replaceIds(t.data, e, ['id']),
                                                this.replaceStyleIds(t.data, e, ['styleIds']),
                                                null === (n = t.data.styles) ||
                                                    void 0 === n ||
                                                    n.forEach(function (t) {
                                                        r.replaceStyleIds(t, e, ['styleId'])
                                                    }),
                                                t
                                            )
                                    }
                            }
                            return !1
                        },
                    },
                    {
                        key: 'replace',
                        value: function (e, t, n, r) {
                            var i,
                                o = v(r)
                            try {
                                for (o.s(); !(i = o.n()).done; ) {
                                    var a = i.value
                                    ;(Array.isArray(t[a]) || 'number' == typeof t[a]) &&
                                        (Array.isArray(t[a]) ? (t[a] = e.getIds(n, t[a])) : (t[a] = e.getId(n, t[a])))
                                }
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                            return t
                        },
                    },
                    {
                        key: 'replaceIds',
                        value: function (e, t, n) {
                            return this.replace(this.crossOriginIframeMirror, e, t, n)
                        },
                    },
                    {
                        key: 'replaceStyleIds',
                        value: function (e, t, n) {
                            return this.replace(this.crossOriginIframeStyleMirror, e, t, n)
                        },
                    },
                    {
                        key: 'replaceIdOnNode',
                        value: function (e, t) {
                            var n = this
                            this.replaceIds(e, t, ['id', 'rootId']),
                                'childNodes' in e &&
                                    e.childNodes.forEach(function (e) {
                                        n.replaceIdOnNode(e, t)
                                    })
                        },
                    },
                    {
                        key: 'patchRootIdOnNode',
                        value: function (e, t) {
                            var n = this
                            e.type === g.Document || e.rootId || (e.rootId = t),
                                'childNodes' in e &&
                                    e.childNodes.forEach(function (e) {
                                        n.patchRootIdOnNode(e, t)
                                    })
                        },
                    },
                ]),
                e
            )
        })(),
        Ye = (function () {
            function e(t) {
                a(this, e),
                    (this.shadowDoms = new WeakSet()),
                    (this.restoreHandlers = []),
                    (this.mutationCb = t.mutationCb),
                    (this.scrollCb = t.scrollCb),
                    (this.bypassOptions = t.bypassOptions),
                    (this.mirror = t.mirror),
                    this.init()
            }
            return (
                u(e, [
                    {
                        key: 'init',
                        value: function () {
                            this.reset(), this.patchAttachShadow(Element, document)
                        },
                    },
                    {
                        key: 'addShadowRoot',
                        value: function (e, t) {
                            var n = this
                            if (_(e) && !this.shadowDoms.has(e)) {
                                this.shadowDoms.add(e)
                                var r = qe(
                                    Object.assign(Object.assign({}, this.bypassOptions), {
                                        doc: t,
                                        mutationCb: this.mutationCb,
                                        mirror: this.mirror,
                                        shadowDomManager: this,
                                    }),
                                    e
                                )
                                this.restoreHandlers.push(function () {
                                    return r.disconnect()
                                }),
                                    this.restoreHandlers.push(
                                        He(
                                            Object.assign(Object.assign({}, this.bypassOptions), {
                                                scrollCb: this.scrollCb,
                                                doc: e,
                                                mirror: this.mirror,
                                            })
                                        )
                                    ),
                                    setTimeout(function () {
                                        e.adoptedStyleSheets &&
                                            e.adoptedStyleSheets.length > 0 &&
                                            n.bypassOptions.stylesheetManager.adoptStyleSheets(
                                                e.adoptedStyleSheets,
                                                n.mirror.getId(e.host)
                                            ),
                                            n.restoreHandlers.push(
                                                je(
                                                    {
                                                        mirror: n.mirror,
                                                        stylesheetManager: n.bypassOptions.stylesheetManager,
                                                    },
                                                    e
                                                )
                                            )
                                    }, 0)
                            }
                        },
                    },
                    {
                        key: 'observeAttachShadow',
                        value: function (e) {
                            e.contentWindow &&
                                e.contentDocument &&
                                this.patchAttachShadow(e.contentWindow.Element, e.contentDocument)
                        },
                    },
                    {
                        key: 'patchAttachShadow',
                        value: function (e, t) {
                            var n = this
                            this.restoreHandlers.push(
                                te(e.prototype, 'attachShadow', function (e) {
                                    return function (r) {
                                        var i = e.call(this, r)
                                        return this.shadowRoot && me(this) && n.addShadowRoot(this.shadowRoot, t), i
                                    }
                                })
                            )
                        },
                    },
                    {
                        key: 'reset',
                        value: function () {
                            this.restoreHandlers.forEach(function (e) {
                                try {
                                    e()
                                } catch (e) {}
                            }),
                                (this.restoreHandlers = []),
                                (this.shadowDoms = new WeakSet())
                        },
                    },
                ]),
                e
            )
        })()
    function Je(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function a(e) {
                try {
                    u(r.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                try {
                    u(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function u(e) {
                var t
                e.done
                    ? i(e.value)
                    : ((t = e.value),
                      t instanceof n
                          ? t
                          : new n(function (e) {
                                e(t)
                            })).then(a, s)
            }
            u((r = r.apply(e, t || [])).next())
        })
    }
    for (
        var Xe = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            et = 'undefined' == typeof Uint8Array ? [] : new Uint8Array(256),
            tt = 0;
        tt < 64;
        tt++
    )
        et[Xe.charCodeAt(tt)] = tt
    var nt = new Map()
    var rt = function (e, t, n) {
        if (e && (at(e, t) || 'object' === r(e))) {
            var i = (function (e, t) {
                    var n = nt.get(e)
                    return n || ((n = new Map()), nt.set(e, n)), n.has(t) || n.set(t, []), n.get(t)
                })(n, e.constructor.name),
                o = i.indexOf(e)
            return -1 === o && ((o = i.length), i.push(e)), o
        }
    }
    function it(e, t, n) {
        if (e instanceof Array)
            return e.map(function (e) {
                return it(e, t, n)
            })
        if (null === e) return e
        if (
            e instanceof Float32Array ||
            e instanceof Float64Array ||
            e instanceof Int32Array ||
            e instanceof Uint32Array ||
            e instanceof Uint8Array ||
            e instanceof Uint16Array ||
            e instanceof Int16Array ||
            e instanceof Int8Array ||
            e instanceof Uint8ClampedArray
        )
            return { rr_type: e.constructor.name, args: [Object.values(e)] }
        if (e instanceof ArrayBuffer) {
            var i = e.constructor.name,
                o = (function (e) {
                    var t,
                        n = new Uint8Array(e),
                        r = n.length,
                        i = ''
                    for (t = 0; t < r; t += 3)
                        (i += Xe[n[t] >> 2]),
                            (i += Xe[((3 & n[t]) << 4) | (n[t + 1] >> 4)]),
                            (i += Xe[((15 & n[t + 1]) << 2) | (n[t + 2] >> 6)]),
                            (i += Xe[63 & n[t + 2]])
                    return (
                        r % 3 == 2
                            ? (i = i.substring(0, i.length - 1) + '=')
                            : r % 3 == 1 && (i = i.substring(0, i.length - 2) + '=='),
                        i
                    )
                })(e)
            return { rr_type: i, base64: o }
        }
        if (e instanceof DataView)
            return { rr_type: e.constructor.name, args: [it(e.buffer, t, n), e.byteOffset, e.byteLength] }
        if (e instanceof HTMLImageElement) return { rr_type: e.constructor.name, src: e.src }
        if (e instanceof HTMLCanvasElement) {
            return { rr_type: 'HTMLImageElement', src: e.toDataURL() }
        }
        return e instanceof ImageData
            ? { rr_type: e.constructor.name, args: [it(e.data, t, n), e.width, e.height] }
            : at(e, t) || 'object' === r(e)
            ? { rr_type: e.constructor.name, index: rt(e, t, n) }
            : e
    }
    var ot = function (e, t, n) {
            return e.map(function (e) {
                return it(e, t, n)
            })
        },
        at = function (e, t) {
            var n = [
                'WebGLActiveInfo',
                'WebGLBuffer',
                'WebGLFramebuffer',
                'WebGLProgram',
                'WebGLRenderbuffer',
                'WebGLShader',
                'WebGLShaderPrecisionFormat',
                'WebGLTexture',
                'WebGLUniformLocation',
                'WebGLVertexArrayObject',
                'WebGLVertexArrayObjectOES',
            ].filter(function (e) {
                return 'function' == typeof t[e]
            })
            return Boolean(
                n.find(function (n) {
                    return e instanceof t[n]
                })
            )
        }
    function st(e, t, n, i) {
        var o = []
        try {
            var a = te(e.HTMLCanvasElement.prototype, 'getContext', function (e) {
                return function (o) {
                    for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
                        s[u - 1] = arguments[u]
                    if (!se(this, t, n, !0)) {
                        var l = (function (e) {
                            return 'experimental-webgl' === e ? 'webgl' : e
                        })(o)
                        if (('__context' in this || (this.__context = l), i && ['webgl', 'webgl2'].includes(l)))
                            if (s[0] && 'object' === r(s[0])) {
                                var c = s[0]
                                c.preserveDrawingBuffer || (c.preserveDrawingBuffer = !0)
                            } else s.splice(0, 1, { preserveDrawingBuffer: !0 })
                    }
                    return e.apply(this, [o].concat(s))
                }
            })
            o.push(a)
        } catch (e) {
            console.error('failed to patch HTMLCanvasElement.prototype.getContext')
        }
        return function () {
            o.forEach(function (e) {
                return e()
            })
        }
    }
    function ut(e, t, n, r, i, o, a) {
        var s,
            u = [],
            l = v(Object.getOwnPropertyNames(e))
        try {
            var c = function () {
                var o = s.value
                if (['isContextLost', 'canvas', 'drawingBufferWidth', 'drawingBufferHeight'].includes(o))
                    return 'continue'
                try {
                    if ('function' != typeof e[o]) return 'continue'
                    var l = te(e, o, function (e) {
                        return function () {
                            for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) u[l] = arguments[l]
                            var c = e.apply(this, u)
                            if ((rt(c, a, this), 'tagName' in this.canvas && !se(this.canvas, r, i, !0))) {
                                var d = ot(u, a, this),
                                    f = { type: t, property: o, args: d }
                                n(this.canvas, f)
                            }
                            return c
                        }
                    })
                    u.push(l)
                } catch (r) {
                    var c = ee(e, o, {
                        set: function (e) {
                            n(this.canvas, { type: t, property: o, args: [e], setter: !0 })
                        },
                    })
                    u.push(c)
                }
            }
            for (l.s(); !(s = l.n()).done; ) c()
        } catch (e) {
            l.e(e)
        } finally {
            l.f()
        }
        return u
    }
    function lt(e, t, n) {
        var r = void 0 === t ? null : t,
            i = (function (e, t) {
                var n = atob(e)
                if (t) {
                    for (var r = new Uint8Array(n.length), i = 0, o = n.length; i < o; ++i) r[i] = n.charCodeAt(i)
                    return String.fromCharCode.apply(null, new Uint16Array(r.buffer))
                }
                return n
            })(e, void 0 !== n && n),
            o = i.indexOf('\n', 10) + 1,
            a = i.substring(o) + (r ? '//# sourceMappingURL=' + r : ''),
            s = new Blob([a], { type: 'application/javascript' })
        return URL.createObjectURL(s)
    }
    var ct,
        dt,
        ft,
        pt,
        ht,
        vt,
        gt,
        mt =
            ((ct =
                'Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9CgogICAgLyoKICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlciAxLjAuMSA8aHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlcj4KICAgICAqIENvcHlyaWdodCAoYykgMjAyMSBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+CiAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZQogICAgICovCiAgICB2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7CiAgICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguCiAgICB2YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykgewogICAgICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7CiAgICB9CiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGFycmF5YnVmZmVyKSB7CiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLCBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9ICcnOwogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykgewogICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTsKICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107CiAgICAgICAgfQogICAgICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgJz09JzsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGJhc2U2NDsKICAgIH07CgogICAgY29uc3QgbGFzdEJsb2JNYXAgPSBuZXcgTWFwKCk7DQogICAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gbmV3IE1hcCgpOw0KICAgIGZ1bmN0aW9uIGdldFRyYW5zcGFyZW50QmxvYkZvcih3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucykgew0KICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgew0KICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt3aWR0aH0tJHtoZWlnaHR9YDsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50QmxvYk1hcC5oYXMoaWQpKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNwYXJlbnRCbG9iTWFwLmdldChpZCk7DQogICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsNCiAgICAgICAgICAgICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0geWllbGQgYmxvYi5hcnJheUJ1ZmZlcigpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7DQogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTY0Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgcmV0dXJuICcnOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9DQogICAgY29uc3Qgd29ya2VyID0gc2VsZjsNCiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgYml0bWFwLCB3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucyB9ID0gZS5kYXRhOw0KICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKTsNCiAgICAgICAgICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCcyZCcpOw0KICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwKTsNCiAgICAgICAgICAgICAgICBiaXRtYXAuY2xvc2UoKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBibG9iLnR5cGU7DQogICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB5aWVsZCBibG9iLmFycmF5QnVmZmVyKCk7DQogICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsNCiAgICAgICAgICAgICAgICBpZiAoIWxhc3RCbG9iTWFwLmhhcyhpZCkgJiYgKHlpZWxkIHRyYW5zcGFyZW50QmFzZTY0KSA9PT0gYmFzZTY0KSB7DQogICAgICAgICAgICAgICAgICAgIGxhc3RCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7DQogICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgaWQsDQogICAgICAgICAgICAgICAgICAgIHR5cGUsDQogICAgICAgICAgICAgICAgICAgIGJhc2U2NCwNCiAgICAgICAgICAgICAgICAgICAgd2lkdGgsDQogICAgICAgICAgICAgICAgICAgIGhlaWdodCwNCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSk7DQogICAgfTsKCn0pKCk7Cgo='),
            (dt = null),
            (ft = !1),
            function (e) {
                return (pt = pt || lt(ct, dt, ft)), new Worker(pt, e)
            }),
        _t = (function () {
            function e(t) {
                var n = this
                a(this, e),
                    (this.pendingCanvasMutations = new Map()),
                    (this.rafStamps = { latestId: 0, invokeId: null }),
                    (this.frozen = !1),
                    (this.locked = !1),
                    (this.processMutation = function (e, t) {
                        ;(!(n.rafStamps.invokeId && n.rafStamps.latestId !== n.rafStamps.invokeId) &&
                            n.rafStamps.invokeId) ||
                            (n.rafStamps.invokeId = n.rafStamps.latestId),
                            n.pendingCanvasMutations.has(e) || n.pendingCanvasMutations.set(e, []),
                            n.pendingCanvasMutations.get(e).push(t)
                    })
                var r = t.sampling,
                    i = void 0 === r ? 'all' : r,
                    o = t.win,
                    s = t.blockClass,
                    u = t.blockSelector,
                    l = t.recordCanvas,
                    c = t.dataURLOptions
                ;(this.mutationCb = t.mutationCb),
                    (this.mirror = t.mirror),
                    l && 'all' === i && this.initCanvasMutationObserver(o, s, u),
                    l && 'number' == typeof i && this.initCanvasFPSObserver(i, o, s, u, { dataURLOptions: c })
            }
            return (
                u(e, [
                    {
                        key: 'reset',
                        value: function () {
                            this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
                        },
                    },
                    {
                        key: 'freeze',
                        value: function () {
                            this.frozen = !0
                        },
                    },
                    {
                        key: 'unfreeze',
                        value: function () {
                            this.frozen = !1
                        },
                    },
                    {
                        key: 'lock',
                        value: function () {
                            this.locked = !0
                        },
                    },
                    {
                        key: 'unlock',
                        value: function () {
                            this.locked = !1
                        },
                    },
                    {
                        key: 'initCanvasFPSObserver',
                        value: function (e, t, r, i, o) {
                            var a = this,
                                s = st(t, r, i, !0),
                                u = new Map(),
                                l = new mt()
                            l.onmessage = function (e) {
                                var t = e.data.id
                                if ((u.set(t, !1), 'base64' in e.data)) {
                                    var n = e.data,
                                        r = n.base64,
                                        i = n.type,
                                        o = n.width,
                                        s = n.height
                                    a.mutationCb({
                                        id: t,
                                        type: we['2D'],
                                        commands: [
                                            { property: 'clearRect', args: [0, 0, o, s] },
                                            {
                                                property: 'drawImage',
                                                args: [
                                                    {
                                                        rr_type: 'ImageBitmap',
                                                        args: [
                                                            {
                                                                rr_type: 'Blob',
                                                                data: [{ rr_type: 'ArrayBuffer', base64: r }],
                                                                type: i,
                                                            },
                                                        ],
                                                    },
                                                    0,
                                                    0,
                                                ],
                                            },
                                        ],
                                    })
                                }
                            }
                            var c,
                                d = 1e3 / e,
                                f = 0
                            ;(c = requestAnimationFrame(function e(s) {
                                var p
                                f && s - f < d
                                    ? (c = requestAnimationFrame(e))
                                    : ((f = s),
                                      ((p = []),
                                      (function e(t) {
                                          t.querySelectorAll('canvas').forEach(function (e) {
                                              se(e, r, i, !0) || p.push(e)
                                          }),
                                              t.querySelectorAll('*').forEach(function (t) {
                                                  t.shadowRoot && e(t.shadowRoot)
                                              })
                                      })(t.document),
                                      p).forEach(function (e) {
                                          return Je(
                                              a,
                                              void 0,
                                              void 0,
                                              n().mark(function t() {
                                                  var r, i, a, s, c, d
                                                  return n().wrap(
                                                      function (t) {
                                                          for (;;)
                                                              switch ((t.prev = t.next)) {
                                                                  case 0:
                                                                      if (((i = this.mirror.getId(e)), !u.get(i))) {
                                                                          t.next = 3
                                                                          break
                                                                      }
                                                                      return t.abrupt('return')
                                                                  case 3:
                                                                      if (0 !== e.width && 0 !== e.height) {
                                                                          t.next = 5
                                                                          break
                                                                      }
                                                                      return t.abrupt('return')
                                                                  case 5:
                                                                      return (
                                                                          u.set(i, !0),
                                                                          ['webgl', 'webgl2'].includes(e.__context) &&
                                                                              ((a = e.getContext(e.__context)),
                                                                              !1 ===
                                                                                  (null ===
                                                                                      (r =
                                                                                          null == a
                                                                                              ? void 0
                                                                                              : a.getContextAttributes()) ||
                                                                                  void 0 === r
                                                                                      ? void 0
                                                                                      : r.preserveDrawingBuffer) &&
                                                                                  a.clear(a.COLOR_BUFFER_BIT)),
                                                                          (s = e.clientWidth || e.width),
                                                                          (c = e.clientHeight || e.height),
                                                                          (t.next = 11),
                                                                          createImageBitmap(e, {
                                                                              resizeWidth: s,
                                                                              resizeHeight: c,
                                                                          })
                                                                      )
                                                                  case 11:
                                                                      ;(d = t.sent),
                                                                          l.postMessage(
                                                                              {
                                                                                  id: i,
                                                                                  bitmap: d,
                                                                                  width: s,
                                                                                  height: c,
                                                                                  dataURLOptions: o.dataURLOptions,
                                                                              },
                                                                              [d]
                                                                          )
                                                                  case 13:
                                                                  case 'end':
                                                                      return t.stop()
                                                              }
                                                      },
                                                      t,
                                                      this
                                                  )
                                              })
                                          )
                                      }),
                                      (c = requestAnimationFrame(e)))
                            })),
                                (this.resetObservers = function () {
                                    s(), cancelAnimationFrame(c)
                                })
                        },
                    },
                    {
                        key: 'initCanvasMutationObserver',
                        value: function (e, t, n) {
                            this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher()
                            var r = st(e, t, n, !1),
                                i = (function (e, t, n, r) {
                                    var i,
                                        o = [],
                                        a = v(Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype))
                                    try {
                                        var s = function () {
                                            var a = i.value
                                            try {
                                                if ('function' != typeof t.CanvasRenderingContext2D.prototype[a])
                                                    return 'continue'
                                                var s = te(t.CanvasRenderingContext2D.prototype, a, function (i) {
                                                    return function () {
                                                        for (
                                                            var o = this, s = arguments.length, u = new Array(s), l = 0;
                                                            l < s;
                                                            l++
                                                        )
                                                            u[l] = arguments[l]
                                                        return (
                                                            se(this.canvas, n, r, !0) ||
                                                                setTimeout(function () {
                                                                    var n = ot(u, t, o)
                                                                    e(o.canvas, {
                                                                        type: we['2D'],
                                                                        property: a,
                                                                        args: n,
                                                                    })
                                                                }, 0),
                                                            i.apply(this, u)
                                                        )
                                                    }
                                                })
                                                o.push(s)
                                            } catch (n) {
                                                var u = ee(t.CanvasRenderingContext2D.prototype, a, {
                                                    set: function (t) {
                                                        e(this.canvas, {
                                                            type: we['2D'],
                                                            property: a,
                                                            args: [t],
                                                            setter: !0,
                                                        })
                                                    },
                                                })
                                                o.push(u)
                                            }
                                        }
                                        for (a.s(); !(i = a.n()).done; ) s()
                                    } catch (e) {
                                        a.e(e)
                                    } finally {
                                        a.f()
                                    }
                                    return function () {
                                        o.forEach(function (e) {
                                            return e()
                                        })
                                    }
                                })(this.processMutation.bind(this), e, t, n),
                                o = (function (e, t, n, r, i) {
                                    var o = []
                                    return (
                                        o.push.apply(
                                            o,
                                            f(ut(t.WebGLRenderingContext.prototype, we.WebGL, e, n, r, 0, t))
                                        ),
                                        void 0 !== t.WebGL2RenderingContext &&
                                            o.push.apply(
                                                o,
                                                f(ut(t.WebGL2RenderingContext.prototype, we.WebGL2, e, n, r, 0, t))
                                            ),
                                        function () {
                                            o.forEach(function (e) {
                                                return e()
                                            })
                                        }
                                    )
                                })(this.processMutation.bind(this), e, t, n, this.mirror)
                            this.resetObservers = function () {
                                r(), i(), o()
                            }
                        },
                    },
                    {
                        key: 'startPendingCanvasMutationFlusher',
                        value: function () {
                            var e = this
                            requestAnimationFrame(function () {
                                return e.flushPendingCanvasMutations()
                            })
                        },
                    },
                    {
                        key: 'startRAFTimestamping',
                        value: function () {
                            var e = this
                            requestAnimationFrame(function t(n) {
                                ;(e.rafStamps.latestId = n), requestAnimationFrame(t)
                            })
                        },
                    },
                    {
                        key: 'flushPendingCanvasMutations',
                        value: function () {
                            var e = this
                            this.pendingCanvasMutations.forEach(function (t, n) {
                                var r = e.mirror.getId(n)
                                e.flushPendingCanvasMutationFor(n, r)
                            }),
                                requestAnimationFrame(function () {
                                    return e.flushPendingCanvasMutations()
                                })
                        },
                    },
                    {
                        key: 'flushPendingCanvasMutationFor',
                        value: function (e, t) {
                            if (!this.frozen && !this.locked) {
                                var n = this.pendingCanvasMutations.get(e)
                                if (n && -1 !== t) {
                                    var r = n.map(function (e) {
                                            var t =
                                                /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
                                                (function (e, t) {
                                                    var n = {}
                                                    for (var r in e)
                                                        Object.prototype.hasOwnProperty.call(e, r) &&
                                                            t.indexOf(r) < 0 &&
                                                            (n[r] = e[r])
                                                    if (
                                                        null != e &&
                                                        'function' == typeof Object.getOwnPropertySymbols
                                                    ) {
                                                        var i = 0
                                                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                                                            t.indexOf(r[i]) < 0 &&
                                                                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                                                                (n[r[i]] = e[r[i]])
                                                    }
                                                    return n
                                                })(e, ['type'])
                                            return t
                                        }),
                                        i = n[0].type
                                    this.mutationCb({ id: t, type: i, commands: r }),
                                        this.pendingCanvasMutations.delete(e)
                                }
                            }
                        },
                    },
                ]),
                e
            )
        })(),
        yt = (function () {
            function e(t) {
                a(this, e),
                    (this.trackedLinkElements = new WeakSet()),
                    (this.styleMirror = new he()),
                    (this.mutationCb = t.mutationCb),
                    (this.adoptedStyleSheetCb = t.adoptedStyleSheetCb)
            }
            return (
                u(e, [
                    {
                        key: 'attachLinkElement',
                        value: function (e, t) {
                            '_cssText' in t.attributes &&
                                this.mutationCb({
                                    adds: [],
                                    removes: [],
                                    texts: [],
                                    attributes: [{ id: t.id, attributes: t.attributes }],
                                }),
                                this.trackLinkElement(e)
                        },
                    },
                    {
                        key: 'trackLinkElement',
                        value: function (e) {
                            this.trackedLinkElements.has(e) ||
                                (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e))
                        },
                    },
                    {
                        key: 'adoptStyleSheets',
                        value: function (e, t) {
                            if (0 !== e.length) {
                                var n,
                                    r = { id: t, styleIds: [] },
                                    i = [],
                                    o = v(e)
                                try {
                                    for (o.s(); !(n = o.n()).done; ) {
                                        var a = n.value,
                                            s = void 0
                                        this.styleMirror.has(a)
                                            ? (s = this.styleMirror.getId(a))
                                            : ((s = this.styleMirror.add(a)),
                                              i.push({
                                                  styleId: s,
                                                  rules: Array.from(a.rules || CSSRule, function (e, t) {
                                                      return { rule: b(e), index: t }
                                                  }),
                                              })),
                                            r.styleIds.push(s)
                                    }
                                } catch (e) {
                                    o.e(e)
                                } finally {
                                    o.f()
                                }
                                i.length > 0 && (r.styles = i), this.adoptedStyleSheetCb(r)
                            }
                        },
                    },
                    {
                        key: 'reset',
                        value: function () {
                            this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet())
                        },
                    },
                    { key: 'trackStylesheetInLinkElement', value: function (e) {} },
                ]),
                e
            )
        })(),
        bt = (function () {
            function e() {
                a(this, e), (this.nodeMap = new WeakMap()), (this.loop = !0), this.periodicallyClear()
            }
            return (
                u(e, [
                    {
                        key: 'periodicallyClear',
                        value: function () {
                            var e = this
                            requestAnimationFrame(function () {
                                e.clear(), e.loop && e.periodicallyClear()
                            })
                        },
                    },
                    {
                        key: 'inOtherBuffer',
                        value: function (e, t) {
                            var n = this.nodeMap.get(e)
                            return (
                                n &&
                                Array.from(n).some(function (e) {
                                    return e !== t
                                })
                            )
                        },
                    },
                    {
                        key: 'add',
                        value: function (e, t) {
                            this.nodeMap.set(e, (this.nodeMap.get(e) || new Set()).add(t))
                        },
                    },
                    {
                        key: 'clear',
                        value: function () {
                            this.nodeMap = new WeakMap()
                        },
                    },
                    {
                        key: 'destroy',
                        value: function () {
                            this.loop = !1
                        },
                    },
                ]),
                e
            )
        })()
    function kt(e) {
        return Object.assign(Object.assign({}, e), { timestamp: ne() })
    }
    var wt = !1,
        Ct = new k()
    function It() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.emit,
            n = e.checkoutEveryNms,
            r = e.checkoutEveryNth,
            i = e.blockClass,
            o = void 0 === i ? 'rr-block' : i,
            a = e.blockSelector,
            s = void 0 === a ? null : a,
            u = e.ignoreClass,
            l = void 0 === u ? 'rr-ignore' : u,
            c = e.ignoreSelector,
            d = void 0 === c ? null : c,
            f = e.maskTextClass,
            p = void 0 === f ? 'rr-mask' : f,
            h = e.maskTextSelector,
            g = void 0 === h ? null : h,
            m = e.inlineStylesheet,
            _ = void 0 === m || m,
            y = e.maskAllInputs,
            b = e.maskInputOptions,
            w = e.slimDOMOptions,
            C = e.maskInputFn,
            I = e.maskTextFn,
            S = e.hooks,
            x = e.packFn,
            E = e.sampling,
            T = void 0 === E ? {} : E,
            A = e.dataURLOptions,
            M = void 0 === A ? {} : A,
            R = e.mousemoveWait,
            F = e.recordDOM,
            O = void 0 === F || F,
            N = e.recordCanvas,
            L = void 0 !== N && N,
            P = e.recordCrossOriginIframes,
            D = void 0 !== P && P,
            q = e.recordAfter,
            B = void 0 === q ? ('DOMContentLoaded' === e.recordAfter ? e.recordAfter : 'load') : q,
            H = e.userTriggeredOnInput,
            $ = void 0 !== H && H,
            W = e.collectFonts,
            V = void 0 !== W && W,
            U = e.inlineImages,
            j = void 0 !== U && U,
            G = e.plugins,
            Z = e.keepIframeSrcFn,
            z =
                void 0 === Z
                    ? function () {
                          return !1
                      }
                    : Z,
            Y = e.ignoreCSSAttributes,
            J = void 0 === Y ? new Set([]) : Y
        Oe(e.errorHandler)
        var X = !D || window.parent === window,
            ee = !1
        if (!X)
            try {
                window.parent.document && (ee = !1)
            } catch (e) {
                ee = !0
            }
        if (X && !t) throw new Error('emit function is required')
        void 0 !== R && void 0 === T.mousemove && (T.mousemove = R), Ct.reset()
        var te,
            ne =
                !0 === y
                    ? {
                          color: !0,
                          date: !0,
                          'datetime-local': !0,
                          email: !0,
                          month: !0,
                          number: !0,
                          range: !0,
                          search: !0,
                          tel: !0,
                          text: !0,
                          time: !0,
                          url: !0,
                          week: !0,
                          textarea: !0,
                          select: !0,
                          password: !0,
                      }
                    : void 0 !== b
                    ? b
                    : { password: !0 },
            ae =
                !0 === w || 'all' === w
                    ? {
                          script: !0,
                          comment: !0,
                          headFavicon: !0,
                          headWhitespace: !0,
                          headMetaSocial: !0,
                          headMetaRobots: !0,
                          headMetaHttpEquiv: !0,
                          headMetaVerification: !0,
                          headMetaAuthorship: 'all' === w,
                          headMetaDescKeywords: 'all' === w,
                      }
                    : w || {}
        !(function () {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window
            'NodeList' in t &&
                !t.NodeList.prototype.forEach &&
                (t.NodeList.prototype.forEach = Array.prototype.forEach),
                'DOMTokenList' in t &&
                    !t.DOMTokenList.prototype.forEach &&
                    (t.DOMTokenList.prototype.forEach = Array.prototype.forEach),
                Node.prototype.contains ||
                    (Node.prototype.contains = function () {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
                        var i = n[0]
                        if (!(0 in n)) throw new TypeError('1 argument is required')
                        do {
                            if (e === i) return !0
                        } while ((i = i && i.parentNode))
                        return !1
                    })
        })()
        var se = 0,
            ue = function (e) {
                var t,
                    n = v(G || [])
                try {
                    for (n.s(); !(t = n.n()).done; ) {
                        var r = t.value
                        r.eventProcessor && (e = r.eventProcessor(e))
                    }
                } catch (e) {
                    n.e(e)
                } finally {
                    n.f()
                }
                return x && !ee && (e = x(e)), e
            }
        ht = function (e, i) {
            var o
            if (
                (!(null === (o = Pe[0]) || void 0 === o ? void 0 : o.isFrozen()) ||
                    e.type === _e.FullSnapshot ||
                    (e.type === _e.IncrementalSnapshot && e.data.source === ye.Mutation) ||
                    Pe.forEach(function (e) {
                        return e.unfreeze()
                    }),
                X)
            )
                null == t || t(ue(e), i)
            else if (ee) {
                var a = { type: 'rrweb', event: ue(e), origin: window.location.origin, isCheckout: i }
                window.parent.postMessage(a, '*')
            }
            if (e.type === _e.FullSnapshot) (te = e), (se = 0)
            else if (e.type === _e.IncrementalSnapshot) {
                if (e.data.source === ye.Mutation && e.data.isAttachIframe) return
                se++
                var s = r && se >= r,
                    u = n && e.timestamp - te.timestamp > n
                ;(s || u) && vt(!0)
            }
        }
        var le,
            ce = function (e) {
                ht(kt({ type: _e.IncrementalSnapshot, data: Object.assign({ source: ye.Mutation }, e) }))
            },
            he = function (e) {
                return ht(kt({ type: _e.IncrementalSnapshot, data: Object.assign({ source: ye.Scroll }, e) }))
            },
            ve = function (e) {
                return ht(kt({ type: _e.IncrementalSnapshot, data: Object.assign({ source: ye.CanvasMutation }, e) }))
            },
            ge = new yt({
                mutationCb: ce,
                adoptedStyleSheetCb: function (e) {
                    return ht(
                        kt({ type: _e.IncrementalSnapshot, data: Object.assign({ source: ye.AdoptedStyleSheet }, e) })
                    )
                },
            }),
            me = new Ke({
                mirror: Ct,
                mutationCb: ce,
                stylesheetManager: ge,
                recordCrossOriginIframes: D,
                wrappedEmit: ht,
            }),
            be = v(G || [])
        try {
            for (be.s(); !(le = be.n()).done; ) {
                var ke = le.value
                ke.getMirror &&
                    ke.getMirror({
                        nodeMirror: Ct,
                        crossOriginIframeMirror: me.crossOriginIframeMirror,
                        crossOriginIframeStyleMirror: me.crossOriginIframeStyleMirror,
                    })
            }
        } catch (e) {
            be.e(e)
        } finally {
            be.f()
        }
        var we = new bt()
        gt = new _t({
            recordCanvas: L,
            mutationCb: ve,
            win: window,
            blockClass: o,
            blockSelector: s,
            mirror: Ct,
            sampling: T.canvas,
            dataURLOptions: M,
        })
        var Ce = new Ye({
            mutationCb: ce,
            scrollCb: he,
            bypassOptions: {
                blockClass: o,
                blockSelector: s,
                maskTextClass: p,
                maskTextSelector: g,
                inlineStylesheet: _,
                maskInputOptions: ne,
                dataURLOptions: M,
                maskTextFn: I,
                maskInputFn: C,
                recordCanvas: L,
                inlineImages: j,
                sampling: T,
                slimDOMOptions: ae,
                iframeManager: me,
                stylesheetManager: ge,
                canvasManager: gt,
                keepIframeSrcFn: z,
                processedNodeManager: we,
            },
            mirror: Ct,
        })
        vt = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            if (O) {
                ht(kt({ type: _e.Meta, data: { href: window.location.href, width: oe(), height: ie() } }), e),
                    ge.reset(),
                    Ce.init(),
                    Pe.forEach(function (e) {
                        return e.lock()
                    })
                var t = (function (e, t) {
                    var n = t || {},
                        r = n.mirror,
                        i = void 0 === r ? new k() : r,
                        o = n.blockClass,
                        a = void 0 === o ? 'rr-block' : o,
                        s = n.blockSelector,
                        u = void 0 === s ? null : s,
                        l = n.maskTextClass,
                        c = void 0 === l ? 'rr-mask' : l,
                        d = n.maskTextSelector,
                        f = void 0 === d ? null : d,
                        p = n.inlineStylesheet,
                        h = void 0 === p || p,
                        v = n.inlineImages,
                        g = void 0 !== v && v,
                        m = n.recordCanvas,
                        _ = void 0 !== m && m,
                        y = n.maskAllInputs,
                        b = void 0 !== y && y,
                        w = n.maskTextFn,
                        C = n.maskInputFn,
                        I = n.slimDOM,
                        S = void 0 !== I && I,
                        x = n.dataURLOptions,
                        E = n.preserveWhiteSpace,
                        T = n.onSerialize,
                        A = n.onIframeLoad,
                        M = n.iframeLoadTimeout,
                        R = n.onStylesheetLoad,
                        F = n.stylesheetLoadTimeout,
                        O = n.keepIframeSrcFn
                    return Q(e, {
                        doc: e,
                        mirror: i,
                        blockClass: a,
                        blockSelector: u,
                        maskTextClass: c,
                        maskTextSelector: f,
                        skipChild: !1,
                        inlineStylesheet: h,
                        maskInputOptions:
                            !0 === b
                                ? {
                                      color: !0,
                                      date: !0,
                                      'datetime-local': !0,
                                      email: !0,
                                      month: !0,
                                      number: !0,
                                      range: !0,
                                      search: !0,
                                      tel: !0,
                                      text: !0,
                                      time: !0,
                                      url: !0,
                                      week: !0,
                                      textarea: !0,
                                      select: !0,
                                      password: !0,
                                  }
                                : !1 === b
                                ? { password: !0 }
                                : b,
                        maskTextFn: w,
                        maskInputFn: C,
                        slimDOMOptions:
                            !0 === S || 'all' === S
                                ? {
                                      script: !0,
                                      comment: !0,
                                      headFavicon: !0,
                                      headWhitespace: !0,
                                      headMetaDescKeywords: 'all' === S,
                                      headMetaSocial: !0,
                                      headMetaRobots: !0,
                                      headMetaHttpEquiv: !0,
                                      headMetaAuthorship: !0,
                                      headMetaVerification: !0,
                                  }
                                : !1 === S
                                ? {}
                                : S,
                        dataURLOptions: x,
                        inlineImages: g,
                        recordCanvas: _,
                        preserveWhiteSpace: E,
                        onSerialize: T,
                        onIframeLoad: A,
                        iframeLoadTimeout: M,
                        onStylesheetLoad: R,
                        stylesheetLoadTimeout: F,
                        keepIframeSrcFn:
                            void 0 === O
                                ? function () {
                                      return !1
                                  }
                                : O,
                        newlyAddedElement: !1,
                    })
                })(document, {
                    mirror: Ct,
                    blockClass: o,
                    blockSelector: s,
                    maskTextClass: p,
                    maskTextSelector: g,
                    inlineStylesheet: _,
                    maskAllInputs: ne,
                    maskTextFn: I,
                    slimDOM: ae,
                    dataURLOptions: M,
                    recordCanvas: L,
                    inlineImages: j,
                    onSerialize: function (e) {
                        de(e, Ct) && me.addIframe(e),
                            fe(e, Ct) && ge.trackLinkElement(e),
                            pe(e) && Ce.addShadowRoot(e.shadowRoot, document)
                    },
                    onIframeLoad: function (e, t) {
                        me.attachIframe(e, t), Ce.observeAttachShadow(e)
                    },
                    onStylesheetLoad: function (e, t) {
                        ge.attachLinkElement(e, t)
                    },
                    keepIframeSrcFn: z,
                })
                if (!t) return console.warn('Failed to snapshot the document')
                ht(kt({ type: _e.FullSnapshot, data: { node: t, initialOffset: re(window) } }), e),
                    Pe.forEach(function (e) {
                        return e.unlock()
                    }),
                    document.adoptedStyleSheets &&
                        document.adoptedStyleSheets.length > 0 &&
                        ge.adoptStyleSheets(document.adoptedStyleSheets, Ct.getId(document))
            }
        }
        try {
            var Ie = [],
                Se = function (e) {
                    var t
                    return Le(Ge)(
                        {
                            mutationCb: ce,
                            mousemoveCb: function (e, t) {
                                return ht(kt({ type: _e.IncrementalSnapshot, data: { source: t, positions: e } }))
                            },
                            mouseInteractionCb: function (e) {
                                return ht(
                                    kt({
                                        type: _e.IncrementalSnapshot,
                                        data: Object.assign({ source: ye.MouseInteraction }, e),
                                    })
                                )
                            },
                            scrollCb: he,
                            viewportResizeCb: function (e) {
                                return ht(
                                    kt({
                                        type: _e.IncrementalSnapshot,
                                        data: Object.assign({ source: ye.ViewportResize }, e),
                                    })
                                )
                            },
                            inputCb: function (e) {
                                return ht(
                                    kt({ type: _e.IncrementalSnapshot, data: Object.assign({ source: ye.Input }, e) })
                                )
                            },
                            mediaInteractionCb: function (e) {
                                return ht(
                                    kt({
                                        type: _e.IncrementalSnapshot,
                                        data: Object.assign({ source: ye.MediaInteraction }, e),
                                    })
                                )
                            },
                            styleSheetRuleCb: function (e) {
                                return ht(
                                    kt({
                                        type: _e.IncrementalSnapshot,
                                        data: Object.assign({ source: ye.StyleSheetRule }, e),
                                    })
                                )
                            },
                            styleDeclarationCb: function (e) {
                                return ht(
                                    kt({
                                        type: _e.IncrementalSnapshot,
                                        data: Object.assign({ source: ye.StyleDeclaration }, e),
                                    })
                                )
                            },
                            canvasMutationCb: ve,
                            fontCb: function (e) {
                                return ht(
                                    kt({ type: _e.IncrementalSnapshot, data: Object.assign({ source: ye.Font }, e) })
                                )
                            },
                            selectionCb: function (e) {
                                ht(
                                    kt({
                                        type: _e.IncrementalSnapshot,
                                        data: Object.assign({ source: ye.Selection }, e),
                                    })
                                )
                            },
                            customElementCb: function (e) {
                                ht(
                                    kt({
                                        type: _e.IncrementalSnapshot,
                                        data: Object.assign({ source: ye.CustomElement }, e),
                                    })
                                )
                            },
                            blockClass: o,
                            ignoreClass: l,
                            ignoreSelector: d,
                            maskTextClass: p,
                            maskTextSelector: g,
                            maskInputOptions: ne,
                            inlineStylesheet: _,
                            sampling: T,
                            recordDOM: O,
                            recordCanvas: L,
                            inlineImages: j,
                            userTriggeredOnInput: $,
                            collectFonts: V,
                            doc: e,
                            maskInputFn: C,
                            maskTextFn: I,
                            keepIframeSrcFn: z,
                            blockSelector: s,
                            slimDOMOptions: ae,
                            dataURLOptions: M,
                            mirror: Ct,
                            iframeManager: me,
                            stylesheetManager: ge,
                            shadowDomManager: Ce,
                            processedNodeManager: we,
                            canvasManager: gt,
                            ignoreCSSAttributes: J,
                            plugins:
                                (null ===
                                    (t =
                                        null == G
                                            ? void 0
                                            : G.filter(function (e) {
                                                  return e.observer
                                              })) || void 0 === t
                                    ? void 0
                                    : t.map(function (e) {
                                          return {
                                              observer: e.observer,
                                              options: e.options,
                                              callback: function (t) {
                                                  return ht(
                                                      kt({ type: _e.Plugin, data: { plugin: e.name, payload: t } })
                                                  )
                                              },
                                          }
                                      })) || [],
                        },
                        S
                    )
                }
            me.addLoadListener(function (e) {
                try {
                    Ie.push(Se(e.contentDocument))
                } catch (e) {
                    console.warn(e)
                }
            })
            var xe = function () {
                vt(), Ie.push(Se(document)), (wt = !0)
            }
            return (
                'interactive' === document.readyState || 'complete' === document.readyState
                    ? xe()
                    : (Ie.push(
                          K('DOMContentLoaded', function () {
                              ht(kt({ type: _e.DomContentLoaded, data: {} })), 'DOMContentLoaded' === B && xe()
                          })
                      ),
                      Ie.push(
                          K(
                              'load',
                              function () {
                                  ht(kt({ type: _e.Load, data: {} })), 'load' === B && xe()
                              },
                              window
                          )
                      )),
                function () {
                    Ie.forEach(function (e) {
                        return e()
                    }),
                        we.destroy(),
                        (wt = !1),
                        Ne()
                }
            )
        } catch (e) {
            console.warn(e)
        }
    }
    ;(It.addCustomEvent = function (e, t) {
        if (!wt) throw new Error('please add custom event after start recording')
        ht(kt({ type: _e.Custom, data: { tag: e, payload: t } }))
    }),
        (It.freezePage = function () {
            Pe.forEach(function (e) {
                return e.freeze()
            })
        }),
        (It.takeFullSnapshot = function (e) {
            if (!wt) throw new Error('please take full snapshot after start recording')
            vt(e)
        }),
        (It.mirror = Ct)
    var St = (function () {
            function e(t) {
                a(this, e),
                    (this.fileName = t.fileName || ''),
                    (this.functionName = t.functionName || ''),
                    (this.lineNumber = t.lineNumber),
                    (this.columnNumber = t.columnNumber)
            }
            return (
                u(e, [
                    {
                        key: 'toString',
                        value: function () {
                            var e = this.lineNumber || '',
                                t = this.columnNumber || ''
                            return this.functionName
                                ? ''
                                      .concat(this.functionName, ' (')
                                      .concat(this.fileName, ':')
                                      .concat(e, ':')
                                      .concat(t, ')')
                                : ''.concat(this.fileName, ':').concat(e, ':').concat(t)
                        },
                    },
                ]),
                e
            )
        })(),
        xt = /(^|@)\S+:\d+/,
        Et = /^\s*at .*(\S+:\d+|\(native\))/m,
        Tt = /^(eval@)?(\[native code])?$/,
        At = {
            parse: function (e) {
                return e
                    ? void 0 !== e.stacktrace || void 0 !== e['opera#sourceloc']
                        ? this.parseOpera(e)
                        : e.stack && e.stack.match(Et)
                        ? this.parseV8OrIE(e)
                        : e.stack
                        ? this.parseFFOrSafari(e)
                        : (console.warn('[console-record-plugin]: Failed to parse error object:', e), [])
                    : []
            },
            extractLocation: function (e) {
                if (-1 === e.indexOf(':')) return [e]
                var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ''))
                if (!t) throw new Error('Cannot parse given url: '.concat(e))
                return [t[1], t[2] || void 0, t[3] || void 0]
            },
            parseV8OrIE: function (e) {
                return e.stack
                    .split('\n')
                    .filter(function (e) {
                        return !!e.match(Et)
                    }, this)
                    .map(function (e) {
                        e.indexOf('(eval ') > -1 &&
                            (e = e.replace(/eval code/g, 'eval').replace(/(\(eval at [^()]*)|(\),.*$)/g, ''))
                        var t = e.replace(/^\s+/, '').replace(/\(eval code/g, '('),
                            n = t.match(/ (\((.+):(\d+):(\d+)\)$)/),
                            r = (t = n ? t.replace(n[0], '') : t).split(/\s+/).slice(1),
                            i = this.extractLocation(n ? n[1] : r.pop()),
                            o = r.join(' ') || void 0,
                            a = ['eval', '<anonymous>'].indexOf(i[0]) > -1 ? void 0 : i[0]
                        return new St({ functionName: o, fileName: a, lineNumber: i[1], columnNumber: i[2] })
                    }, this)
            },
            parseFFOrSafari: function (e) {
                return e.stack
                    .split('\n')
                    .filter(function (e) {
                        return !e.match(Tt)
                    }, this)
                    .map(function (e) {
                        if (
                            (e.indexOf(' > eval') > -1 &&
                                (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ':$1')),
                            -1 === e.indexOf('@') && -1 === e.indexOf(':'))
                        )
                            return new St({ functionName: e })
                        var t = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                            n = e.match(t),
                            r = n && n[1] ? n[1] : void 0,
                            i = this.extractLocation(e.replace(t, ''))
                        return new St({ functionName: r, fileName: i[0], lineNumber: i[1], columnNumber: i[2] })
                    }, this)
            },
            parseOpera: function (e) {
                return !e.stacktrace ||
                    (e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length)
                    ? this.parseOpera9(e)
                    : e.stack
                    ? this.parseOpera11(e)
                    : this.parseOpera10(e)
            },
            parseOpera9: function (e) {
                for (
                    var t = /Line (\d+).*script (?:in )?(\S+)/i, n = e.message.split('\n'), r = [], i = 2, o = n.length;
                    i < o;
                    i += 2
                ) {
                    var a = t.exec(n[i])
                    a && r.push(new St({ fileName: a[2], lineNumber: parseFloat(a[1]) }))
                }
                return r
            },
            parseOpera10: function (e) {
                for (
                    var t = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                        n = e.stacktrace.split('\n'),
                        r = [],
                        i = 0,
                        o = n.length;
                    i < o;
                    i += 2
                ) {
                    var a = t.exec(n[i])
                    a && r.push(new St({ functionName: a[3] || void 0, fileName: a[2], lineNumber: parseFloat(a[1]) }))
                }
                return r
            },
            parseOpera11: function (e) {
                return e.stack
                    .split('\n')
                    .filter(function (e) {
                        return !!e.match(xt) && !e.match(/^Error created at/)
                    }, this)
                    .map(function (e) {
                        var t = e.split('@'),
                            n = this.extractLocation(t.pop()),
                            r =
                                (t.shift() || '')
                                    .replace(/<anonymous function(: (\w+))?>/, '$2')
                                    .replace(/\([^)]*\)/g, '') || void 0
                        return new St({ functionName: r, fileName: n[0], lineNumber: n[1], columnNumber: n[2] })
                    }, this)
            },
        }
    function Mt(e) {
        if (!e || !e.outerHTML) return ''
        for (var t = ''; e.parentElement; ) {
            var n = e.localName
            if (!n) break
            n = n.toLowerCase()
            var r = e.parentElement,
                i = []
            if (r.children && r.children.length > 0)
                for (var o = 0; o < r.children.length; o++) {
                    var a = r.children[o]
                    a.localName && a.localName.toLowerCase && a.localName.toLowerCase() === n && i.push(a)
                }
            i.length > 1 && (n += ':eq('.concat(i.indexOf(e), ')')), (t = n + (t ? '>' + t : '')), (e = r)
        }
        return t
    }
    function Rt(e) {
        return '[object Object]' === Object.prototype.toString.call(e)
    }
    function Ft(e, t) {
        if (0 === t) return !0
        for (var n = 0, r = Object.keys(e); n < r.length; n++) {
            var i = r[n]
            if (Rt(e[i]) && Ft(e[i], t - 1)) return !0
        }
        return !1
    }
    function Ot(e, t) {
        var n = { numOfKeysLimit: 50, depthOfLimit: 4 }
        Object.assign(n, t)
        var r = [],
            i = []
        return JSON.stringify(e, function (e, t) {
            if (r.length > 0) {
                var o = r.indexOf(this)
                ~o ? r.splice(o + 1) : r.push(this),
                    ~o ? i.splice(o, 1 / 0, e) : i.push(e),
                    ~r.indexOf(t) &&
                        (t = r[0] === t ? '[Circular ~]' : '[Circular ~.' + i.slice(0, r.indexOf(t)).join('.') + ']')
            } else r.push(t)
            if (null === t) return t
            if (void 0 === t) return 'undefined'
            if (
                (function (e) {
                    if (Rt(e) && Object.keys(e).length > n.numOfKeysLimit) return !0
                    if ('function' == typeof e) return !0
                    if (Rt(e) && Ft(e, n.depthOfLimit)) return !0
                    return !1
                })(t)
            )
                return (function (e) {
                    var t = e.toString()
                    n.stringLengthLimit &&
                        t.length > n.stringLengthLimit &&
                        (t = ''.concat(t.slice(0, n.stringLengthLimit), '...'))
                    return t
                })(t)
            if ('bigint' == typeof t) return t.toString() + 'n'
            if (t instanceof Event) {
                var a = {}
                for (var s in t) {
                    var u = t[s]
                    Array.isArray(u) ? (a[s] = Mt(u.length ? u[0] : null)) : (a[s] = u)
                }
                return a
            }
            return t instanceof Node
                ? t instanceof HTMLElement
                    ? t
                        ? t.outerHTML
                        : ''
                    : t.nodeName
                : t instanceof Error
                ? t.stack
                    ? t.stack + '\nEnd of stack for Error object'
                    : t.name + ': ' + t.message
                : t
        })
    }
    var Nt = {
        level: [
            'assert',
            'clear',
            'count',
            'countReset',
            'debug',
            'dir',
            'dirxml',
            'error',
            'group',
            'groupCollapsed',
            'groupEnd',
            'info',
            'log',
            'table',
            'time',
            'timeEnd',
            'timeLog',
            'trace',
            'warn',
        ],
        lengthThreshold: 1e3,
        logger: 'console',
    }
    function Lt(e, t, n) {
        var r,
            i = n ? Object.assign({}, Nt, n) : Nt,
            o = i.logger
        if (!o) return function () {}
        r = 'string' == typeof o ? t[o] : o
        var a = 0,
            s = !1,
            u = []
        if (i.level.includes('error')) {
            var l = function (t) {
                var n = t.message,
                    r = t.error,
                    o = At.parse(r).map(function (e) {
                        return e.toString()
                    }),
                    a = [Ot(n, i.stringifyOptions)]
                e({ level: 'error', trace: o, payload: a })
            }
            t.addEventListener('error', l),
                u.push(function () {
                    t.removeEventListener('error', l)
                })
            var c = function (t) {
                var n, r
                t.reason instanceof Error
                    ? ((n = t.reason),
                      (r = [Ot('Uncaught (in promise) '.concat(n.name, ': ').concat(n.message), i.stringifyOptions)]))
                    : ((n = new Error()),
                      (r = [Ot('Uncaught (in promise)', i.stringifyOptions), Ot(t.reason, i.stringifyOptions)]))
                var o = At.parse(n).map(function (e) {
                    return e.toString()
                })
                e({ level: 'error', trace: o, payload: r })
            }
            t.addEventListener('unhandledrejection', c),
                u.push(function () {
                    t.removeEventListener('unhandledrejection', c)
                })
        }
        var d,
            f = v(i.level)
        try {
            for (f.s(); !(d = f.n()).done; ) {
                var p = d.value
                u.push(h(r, p))
            }
        } catch (e) {
            f.e(e)
        } finally {
            f.f()
        }
        return function () {
            u.forEach(function (e) {
                return e()
            })
        }
        function h(t, n) {
            var r = this
            return t[n]
                ? te(t, n, function (t) {
                      return function () {
                          for (var o = arguments.length, u = new Array(o), l = 0; l < o; l++) u[l] = arguments[l]
                          if ((t.apply(r, u), !s)) {
                              s = !0
                              try {
                                  var c = At.parse(new Error())
                                          .map(function (e) {
                                              return e.toString()
                                          })
                                          .splice(1),
                                      d = u.map(function (e) {
                                          return Ot(e, i.stringifyOptions)
                                      })
                                  ++a < i.lengthThreshold
                                      ? e({ level: n, trace: c, payload: d })
                                      : a === i.lengthThreshold &&
                                        e({
                                            level: 'warn',
                                            trace: [],
                                            payload: [Ot('The number of log records reached the threshold.')],
                                        })
                              } catch (e) {
                                  t.apply(void 0, ['rrweb logger error:', e].concat(u))
                              } finally {
                                  s = !1
                              }
                          }
                      }
                  })
                : function () {}
        }
    }
    var Pt = Array.isArray,
        Dt = Object.prototype,
        qt = Dt.hasOwnProperty,
        Bt = Dt.toString,
        Ht =
            Pt ||
            function (e) {
                return '[object Array]' === Bt.call(e)
            },
        $t = function (e) {
            return 'function' == typeof e
        },
        Wt = function (e) {
            return e === Object(e) && !Ht(e)
        },
        Vt = function (e) {
            if (Wt(e)) {
                for (var t in e) if (qt.call(e, t)) return !1
                return !0
            }
            return !1
        },
        Ut = function (e) {
            return void 0 === e
        },
        jt = function (e) {
            return '[object String]' == Bt.call(e)
        },
        Gt = function (e) {
            return jt(e) && 0 === e.trim().length
        },
        Zt = function (e) {
            return null === e
        },
        zt = function (e) {
            return Ut(e) || Zt(e)
        },
        Qt = function (e) {
            return '[object Number]' == Bt.call(e)
        },
        Kt = function (e) {
            return '[object Boolean]' === Bt.call(e)
        },
        Yt = function (e) {
            return e instanceof Document
        },
        Jt = function (e) {
            return e instanceof FormData
        },
        Xt = { DEBUG: !1, LIB_VERSION: '1.161.3' },
        en = 'undefined' != typeof window ? window : void 0,
        tn = 'undefined' != typeof globalThis ? globalThis : en,
        nn = Array.prototype,
        rn = nn.forEach,
        on = nn.indexOf,
        an = null == tn ? void 0 : tn.navigator,
        sn = null == tn ? void 0 : tn.document,
        un = null == tn ? void 0 : tn.location,
        ln = null == tn ? void 0 : tn.fetch,
        cn =
            null != tn && tn.XMLHttpRequest && 'withCredentials' in new tn.XMLHttpRequest()
                ? tn.XMLHttpRequest
                : void 0,
        dn = null == tn ? void 0 : tn.AbortController,
        fn = null == an ? void 0 : an.userAgent,
        pn = null != en ? en : {},
        hn = '[PostHog.js]',
        vn = {
            _log: function (e) {
                if (en && (Xt.DEBUG || pn.POSTHOG_DEBUG) && !Ut(en.console) && en.console) {
                    for (
                        var t =
                                ('__rrweb_original__' in en.console[e])
                                    ? en.console[e].__rrweb_original__
                                    : en.console[e],
                            n = arguments.length,
                            r = new Array(n > 1 ? n - 1 : 0),
                            i = 1;
                        i < n;
                        i++
                    )
                        r[i - 1] = arguments[i]
                    t.apply(void 0, [hn].concat(r))
                }
            },
            info: function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                vn._log.apply(vn, ['log'].concat(t))
            },
            warn: function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                vn._log.apply(vn, ['warn'].concat(t))
            },
            error: function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                vn._log.apply(vn, ['error'].concat(t))
            },
            critical: function () {
                for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
                ;(e = console).error.apply(e, [hn].concat(n))
            },
            uninitializedWarning: function (e) {
                vn.error('You must initialize PostHog before calling '.concat(e))
            },
        },
        gn = {},
        mn = function (e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
        }
    function _n(e, t, n) {
        if (Ht(e))
            if (rn && e.forEach === rn) e.forEach(t, n)
            else if ('length' in e && e.length === +e.length)
                for (var r = 0, i = e.length; r < i; r++) if (r in e && t.call(n, e[r], r) === gn) return
    }
    function yn(e, t, n) {
        if (!zt(e)) {
            if (Ht(e)) return _n(e, t, n)
            if (Jt(e)) {
                var r,
                    i = v(e.entries())
                try {
                    for (i.s(); !(r = i.n()).done; ) {
                        var o = r.value
                        if (t.call(n, o[1], o[0]) === gn) return
                    }
                } catch (e) {
                    i.e(e)
                } finally {
                    i.f()
                }
            } else for (var a in e) if (qt.call(e, a) && t.call(n, e[a], a) === gn) return
        }
    }
    var bn = function (e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]
        return (
            _n(n, function (t) {
                for (var n in t) void 0 !== t[n] && (e[n] = t[n])
            }),
            e
        )
    }
    function kn(e, t) {
        return -1 !== e.indexOf(t)
    }
    function wn(e) {
        for (var t = Object.keys(e), n = t.length, r = new Array(n); n--; ) r[n] = [t[n], e[t[n]]]
        return r
    }
    var Cn = function () {
            return (
                (Date.now =
                    Date.now ||
                    function () {
                        return +new Date()
                    }),
                Date.now()
            )
        },
        In = function (e) {
            try {
                return e()
            } catch (e) {
                return
            }
        },
        Sn = function (e) {
            return function () {
                try {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
                    return e.apply(this, n)
                } catch (e) {
                    vn.critical(
                        'Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A.'
                    ),
                        vn.critical(e)
                }
            }
        },
        xn = function (e) {
            var t = {}
            return (
                yn(e, function (e, n) {
                    jt(e) && e.length > 0 && (t[n] = e)
                }),
                t
            )
        },
        En = function (e) {
            return e.replace(/^\$/, '')
        }
    function Tn(e, t) {
        return (
            (n = e),
            (r = function (e) {
                return jt(e) && !Zt(t) ? e.slice(0, t) : e
            }),
            (i = new Set()),
            (function e(t, n) {
                return t !== Object(t)
                    ? r
                        ? r(t, n)
                        : t
                    : i.has(t)
                    ? void 0
                    : (i.add(t),
                      Ht(t)
                          ? ((o = []),
                            _n(t, function (t) {
                                o.push(e(t))
                            }))
                          : ((o = {}),
                            yn(t, function (t, n) {
                                i.has(t) || (o[n] = e(t, n))
                            })),
                      o)
                var o
            })(n)
        )
        var n, r, i
    }
    var An = function (e) {
            var t,
                n,
                r,
                i,
                o = ''
            for (t = n = 0, r = (e = (e + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n')).length, i = 0; i < r; i++) {
                var a = e.charCodeAt(i),
                    s = null
                a < 128
                    ? n++
                    : (s =
                          a > 127 && a < 2048
                              ? String.fromCharCode((a >> 6) | 192, (63 & a) | 128)
                              : String.fromCharCode((a >> 12) | 224, ((a >> 6) & 63) | 128, (63 & a) | 128)),
                    Zt(s) || (n > t && (o += e.substring(t, n)), (o += s), (t = n = i + 1))
            }
            return n > t && (o += e.substring(t, e.length)), o
        },
        Mn = (function () {
            function e(t) {
                return t && ((t.preventDefault = e.preventDefault), (t.stopPropagation = e.stopPropagation)), t
            }
            return (
                (e.preventDefault = function () {
                    this.returnValue = !1
                }),
                (e.stopPropagation = function () {
                    this.cancelBubble = !0
                }),
                function (t, n, r, i, o) {
                    if (t)
                        if (t.addEventListener && !i) t.addEventListener(n, r, !!o)
                        else {
                            var a = 'on' + n,
                                s = t[a]
                            t[a] = (function (t, n, r) {
                                return function (i) {
                                    if ((i = i || e(null == en ? void 0 : en.event))) {
                                        var o,
                                            a = !0
                                        $t(r) && (o = r(i))
                                        var s = n.call(t, i)
                                        return (!1 !== o && !1 !== s) || (a = !1), a
                                    }
                                }
                            })(t, r, s)
                        }
                    else vn.error('No valid element provided to register_event')
                }
            )
        })()
    function Rn(e, t) {
        for (var n = 0; n < e.length; n++) if (t(e[n])) return e[n]
    }
    var Fn = ['localhost', '127.0.0.1'],
        On = function (e) {
            var t = null == sn ? void 0 : sn.createElement('a')
            return Ut(t) ? null : ((t.href = e), t)
        },
        Nn = function (e, t) {
            return (
                !!(function (e) {
                    try {
                        new RegExp(e)
                    } catch (e) {
                        return !1
                    }
                    return !0
                })(t) && new RegExp(t).test(e)
            )
        },
        Ln = function (e) {
            var t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '&',
                i = []
            return (
                yn(e, function (e, r) {
                    Ut(e) ||
                        Ut(r) ||
                        'undefined' === r ||
                        ((t = encodeURIComponent(
                            (function (e) {
                                return e instanceof File
                            })(e)
                                ? e.name
                                : e.toString()
                        )),
                        (n = encodeURIComponent(r)),
                        (i[i.length] = n + '=' + t))
                }),
                i.join(r)
            )
        },
        Pn = function (e, t) {
            for (var n, r = ((e.split('#')[0] || '').split('?')[1] || '').split('&'), i = 0; i < r.length; i++) {
                var o = r[i].split('=')
                if (o[0] === t) {
                    n = o
                    break
                }
            }
            if (!Ht(n) || n.length < 2) return ''
            var a = n[1]
            try {
                a = decodeURIComponent(a)
            } catch (e) {
                vn.error('Skipping decoding for malformed query param: ' + a)
            }
            return a.replace(/\+/g, ' ')
        },
        Dn = function (e, t) {
            var n = e.match(new RegExp(t + '=([^&]*)'))
            return n ? n[1] : null
        }
    function qn(e) {
        return e ? mn(e).split(/\s+/) : []
    }
    function Bn(e) {
        var t = null == en ? void 0 : en.location.href
        return !!(
            t &&
            e &&
            e.some(function (e) {
                return t.match(e)
            })
        )
    }
    function Hn(e) {
        var t = ''
        switch (r(e.className)) {
            case 'string':
                t = e.className
                break
            case 'object':
                t =
                    (e.className && 'baseVal' in e.className ? e.className.baseVal : null) ||
                    e.getAttribute('class') ||
                    ''
                break
            default:
                t = ''
        }
        return qn(t)
    }
    function $n(e) {
        return zt(e)
            ? null
            : mn(e)
                  .split(/(\s+)/)
                  .filter(function (e) {
                      return ir(e)
                  })
                  .join('')
                  .replace(/[\r\n]/g, ' ')
                  .replace(/[ ]+/g, ' ')
                  .substring(0, 255)
    }
    function Wn(e) {
        var t = ''
        return (
            Kn(e) &&
                !Yn(e) &&
                e.childNodes &&
                e.childNodes.length &&
                yn(e.childNodes, function (e) {
                    var n
                    jn(e) && e.textContent && (t += null !== (n = $n(e.textContent)) && void 0 !== n ? n : '')
                }),
            mn(t)
        )
    }
    function Vn(e) {
        return !!e && 1 === e.nodeType
    }
    function Un(e, t) {
        return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
    }
    function jn(e) {
        return !!e && 3 === e.nodeType
    }
    function Gn(e) {
        return !!e && 11 === e.nodeType
    }
    var Zn = ['a', 'button', 'form', 'input', 'select', 'textarea', 'label']
    function zn(e) {
        var t = e.parentNode
        return !(!t || !Vn(t)) && t
    }
    function Qn(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0,
            o = arguments.length > 4 ? arguments[4] : void 0
        if (!en || !e || Un(e, 'html') || !Vn(e)) return !1
        if (null != n && n.url_allowlist && !Bn(n.url_allowlist)) return !1
        if (null != n && n.url_ignorelist && Bn(n.url_ignorelist)) return !1
        if (null != n && n.dom_event_allowlist) {
            var a = n.dom_event_allowlist
            if (
                a &&
                !a.some(function (e) {
                    return t.type === e
                })
            )
                return !1
        }
        for (var s = !1, u = [e], l = !0, c = e; c.parentNode && !Un(c, 'body'); )
            if (Gn(c.parentNode)) u.push(c.parentNode.host), (c = c.parentNode.host)
            else {
                if (!(l = zn(c))) break
                if (i || Zn.indexOf(l.tagName.toLowerCase()) > -1) s = !0
                else {
                    var d = en.getComputedStyle(l)
                    d && 'pointer' === d.getPropertyValue('cursor') && (s = !0)
                }
                u.push(l), (c = l)
            }
        if (
            !(function (e, t) {
                var n = null == t ? void 0 : t.element_allowlist
                if (Ut(n)) return !0
                var i,
                    o = v(e)
                try {
                    var a = function () {
                        var e = i.value
                        if (
                            n.some(function (t) {
                                return e.tagName.toLowerCase() === t
                            })
                        )
                            return { v: !0 }
                    }
                    for (o.s(); !(i = o.n()).done; ) {
                        var s = a()
                        if ('object' === r(s)) return s.v
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
                return !1
            })(u, n)
        )
            return !1
        if (
            !(function (e, t) {
                var n = null == t ? void 0 : t.css_selector_allowlist
                if (Ut(n)) return !0
                var i,
                    o = v(e)
                try {
                    var a = function () {
                        var e = i.value
                        if (
                            n.some(function (t) {
                                return e.matches(t)
                            })
                        )
                            return { v: !0 }
                    }
                    for (o.s(); !(i = o.n()).done; ) {
                        var s = a()
                        if ('object' === r(s)) return s.v
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
                return !1
            })(u, n)
        )
            return !1
        var f = en.getComputedStyle(e)
        if (f && 'pointer' === f.getPropertyValue('cursor') && 'click' === t.type) return !0
        var p = e.tagName.toLowerCase()
        switch (p) {
            case 'html':
                return !1
            case 'form':
                return (o || ['submit']).indexOf(t.type) >= 0
            case 'input':
            case 'select':
            case 'textarea':
                return (o || ['change', 'click']).indexOf(t.type) >= 0
            default:
                return s
                    ? (o || ['click']).indexOf(t.type) >= 0
                    : (o || ['click']).indexOf(t.type) >= 0 &&
                          (Zn.indexOf(p) > -1 || 'true' === e.getAttribute('contenteditable'))
        }
    }
    function Kn(e) {
        for (var t = e; t.parentNode && !Un(t, 'body'); t = t.parentNode) {
            var n = Hn(t)
            if (kn(n, 'ph-sensitive') || kn(n, 'ph-no-capture')) return !1
        }
        if (kn(Hn(e), 'ph-include')) return !0
        var r = e.type || ''
        if (jt(r))
            switch (r.toLowerCase()) {
                case 'hidden':
                case 'password':
                    return !1
            }
        var i = e.name || e.id || ''
        if (jt(i)) {
            if (
                /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(
                    i.replace(/[^a-zA-Z0-9]/g, '')
                )
            )
                return !1
        }
        return !0
    }
    function Yn(e) {
        return !!(
            (Un(e, 'input') && !['button', 'checkbox', 'submit', 'reset'].includes(e.type)) ||
            Un(e, 'select') ||
            Un(e, 'textarea') ||
            'true' === e.getAttribute('contenteditable')
        )
    }
    var Jn =
            '(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})',
        Xn = new RegExp('^(?:'.concat(Jn, ')$')),
        er = new RegExp(Jn),
        tr = '\\d{3}-?\\d{2}-?\\d{4}',
        nr = new RegExp('^('.concat(tr, ')$')),
        rr = new RegExp('('.concat(tr, ')'))
    function ir(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
        if (zt(e)) return !1
        if (jt(e)) {
            if (((e = mn(e)), (t ? Xn : er).test((e || '').replace(/[- ]/g, '')))) return !1
            if ((t ? nr : rr).test(e)) return !1
        }
        return !0
    }
    function or(e) {
        var t = Wn(e)
        return ir((t = ''.concat(t, ' ').concat(ar(e)).trim())) ? t : ''
    }
    function ar(e) {
        var t = ''
        return (
            e &&
                e.childNodes &&
                e.childNodes.length &&
                yn(e.childNodes, function (e) {
                    var n
                    if (e && 'span' === (null === (n = e.tagName) || void 0 === n ? void 0 : n.toLowerCase()))
                        try {
                            var r = Wn(e)
                            ;(t = ''.concat(t, ' ').concat(r).trim()),
                                e.childNodes && e.childNodes.length && (t = ''.concat(t, ' ').concat(ar(e)).trim())
                        } catch (e) {
                            vn.error(e)
                        }
                }),
            t
        )
    }
    function sr(e) {
        return (function (e) {
            var n = e.map(function (e) {
                var n,
                    r,
                    i = ''
                if ((e.tag_name && (i += e.tag_name), e.attr_class)) {
                    e.attr_class.sort()
                    var o,
                        a = v(e.attr_class)
                    try {
                        for (a.s(); !(o = a.n()).done; ) {
                            var s = o.value
                            i += '.'.concat(s.replace(/"/g, ''))
                        }
                    } catch (e) {
                        a.e(e)
                    } finally {
                        a.f()
                    }
                }
                var u = t(
                        t(
                            t(
                                t({}, e.text ? { text: e.text } : {}),
                                {},
                                {
                                    'nth-child': null !== (n = e.nth_child) && void 0 !== n ? n : 0,
                                    'nth-of-type': null !== (r = e.nth_of_type) && void 0 !== r ? r : 0,
                                },
                                e.href ? { href: e.href } : {}
                            ),
                            e.attr_id ? { attr_id: e.attr_id } : {}
                        ),
                        e.attributes
                    ),
                    l = {}
                return (
                    wn(u)
                        .sort(function (e, t) {
                            var n = d(e, 1)[0],
                                r = d(t, 1)[0]
                            return n.localeCompare(r)
                        })
                        .forEach(function (e) {
                            var t = d(e, 2),
                                n = t[0],
                                r = t[1]
                            return (l[ur(n.toString())] = ur(r.toString()))
                        }),
                    (i += ':'),
                    (i += wn(u)
                        .map(function (e) {
                            var t = d(e, 2),
                                n = t[0],
                                r = t[1]
                            return ''.concat(n, '="').concat(r, '"')
                        })
                        .join(''))
                )
            })
            return n.join(';')
        })(
            (function (e) {
                return e.map(function (e) {
                    var t,
                        n,
                        r = {
                            text: null === (t = e.$el_text) || void 0 === t ? void 0 : t.slice(0, 400),
                            tag_name: e.tag_name,
                            href: null === (n = e.attr__href) || void 0 === n ? void 0 : n.slice(0, 2048),
                            attr_class: lr(e),
                            attr_id: e.attr__id,
                            nth_child: e.nth_child,
                            nth_of_type: e.nth_of_type,
                            attributes: {},
                        }
                    return (
                        wn(e)
                            .filter(function (e) {
                                return 0 === d(e, 1)[0].indexOf('attr__')
                            })
                            .forEach(function (e) {
                                var t = d(e, 2),
                                    n = t[0],
                                    i = t[1]
                                return (r.attributes[n] = i)
                            }),
                        r
                    )
                })
            })(e)
        )
    }
    function ur(e) {
        return e.replace(/"|\\"/g, '\\"')
    }
    function lr(e) {
        var t = e.attr__class
        return t ? (Ht(t) ? t : qn(t)) : void 0
    }
    var cr = '[SessionRecording]',
        dr = 'redacted',
        fr = {
            initiatorTypes: [
                'audio',
                'beacon',
                'body',
                'css',
                'early-hint',
                'embed',
                'fetch',
                'frame',
                'iframe',
                'icon',
                'image',
                'img',
                'input',
                'link',
                'navigation',
                'object',
                'ping',
                'script',
                'track',
                'video',
                'xmlhttprequest',
            ],
            maskRequestFn: function (e) {
                return e
            },
            recordHeaders: !1,
            recordBody: !1,
            recordInitialRequests: !1,
            recordPerformance: !1,
            performanceEntryTypeToObserve: ['first-input', 'navigation', 'paint', 'resource'],
            payloadSizeLimitBytes: 1e6,
            payloadHostDenyList: ['.lr-ingest.io', '.ingest.sentry.io'],
        },
        pr = [
            'authorization',
            'x-forwarded-for',
            'authorization',
            'cookie',
            'set-cookie',
            'x-api-key',
            'x-real-ip',
            'remote-addr',
            'forwarded',
            'proxy-authorization',
            'x-csrf-token',
            'x-csrftoken',
            'x-xsrf-token',
        ],
        hr = [
            'password',
            'secret',
            'passwd',
            'api_key',
            'apikey',
            'auth',
            'credentials',
            'mysql_pwd',
            'privatekey',
            'private_key',
            'token',
        ],
        vr = ['/s/', '/e/', '/i/']
    function gr(e, t, n, r) {
        if (zt(e)) return e
        var i =
            (null == t ? void 0 : t['content-length']) ||
            (function (e) {
                return new Blob([e]).size
            })(e)
        return (
            jt(i) && (i = parseInt(i)),
            i > n ? cr + ' '.concat(r, ' body too large to record (').concat(i, ' bytes)') : e
        )
    }
    function mr(e, t) {
        if (zt(e)) return e
        var n = e
        return (
            ir(n, !1) || (n = cr + ' ' + t + ' body ' + dr),
            yn(hr, function (e) {
                var r, i
                null !== (r = n) &&
                    void 0 !== r &&
                    r.length &&
                    -1 !== (null === (i = n) || void 0 === i ? void 0 : i.indexOf(e)) &&
                    (n = cr + ' ' + t + ' body ' + dr + ' as might contain: ' + e)
            }),
            n
        )
    }
    var _r = function (e, n) {
        var r,
            i,
            o,
            a = {
                payloadSizeLimitBytes: fr.payloadSizeLimitBytes,
                performanceEntryTypeToObserve: f(fr.performanceEntryTypeToObserve),
                payloadHostDenyList: [].concat(f(n.payloadHostDenyList || []), f(fr.payloadHostDenyList)),
            },
            s = !1 !== e.session_recording.recordHeaders && n.recordHeaders,
            u = !1 !== e.session_recording.recordBody && n.recordBody,
            l = !1 !== e.capture_performance && n.recordPerformance,
            c =
                ((r = a),
                (o = Math.min(1e6, null !== (i = r.payloadSizeLimitBytes) && void 0 !== i ? i : 1e6)),
                function (e) {
                    return (
                        null != e &&
                            e.requestBody &&
                            (e.requestBody = gr(e.requestBody, e.requestHeaders, o, 'Request')),
                        null != e &&
                            e.responseBody &&
                            (e.responseBody = gr(e.responseBody, e.responseHeaders, o, 'Response')),
                        e
                    )
                }),
            d = function (e) {
                return c(
                    (function (e) {
                        var t = On(e.name)
                        if (
                            !(
                                t &&
                                t.pathname &&
                                vr.some(function (e) {
                                    return 0 === t.pathname.indexOf(e)
                                })
                            )
                        )
                            return e
                    })(
                        ((n = (t = e).requestHeaders),
                        zt(n) ||
                            yn(Object.keys(null != n ? n : {}), function (e) {
                                pr.includes(e.toLowerCase()) && (n[e] = dr)
                            }),
                        t)
                    )
                )
                var t, n
            },
            p = $t(e.session_recording.maskNetworkRequestFn)
        return (
            p &&
                $t(e.session_recording.maskCapturedNetworkRequestFn) &&
                vn.warn(
                    'Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored.'
                ),
            p &&
                (e.session_recording.maskCapturedNetworkRequestFn = function (n) {
                    var r = e.session_recording.maskNetworkRequestFn({ url: n.name })
                    return t(t({}, n), {}, { name: null == r ? void 0 : r.url })
                }),
            (a.maskRequestFn = $t(e.session_recording.maskCapturedNetworkRequestFn)
                ? function (t) {
                      var n,
                          r,
                          i,
                          o = d(t)
                      return o &&
                          null !==
                              (n =
                                  null === (r = (i = e.session_recording).maskCapturedNetworkRequestFn) || void 0 === r
                                      ? void 0
                                      : r.call(i, o)) &&
                          void 0 !== n
                          ? n
                          : void 0
                  }
                : function (e) {
                      return (function (e) {
                          if (!Ut(e))
                              return (
                                  (e.requestBody = mr(e.requestBody, 'Request')),
                                  (e.responseBody = mr(e.responseBody, 'Response')),
                                  e
                              )
                      })(d(e))
                  }),
            t(t(t({}, fr), a), {}, { recordHeaders: s, recordBody: u, recordPerformance: l, recordInitialRequests: l })
        )
    }
    function yr(e, t, n) {
        try {
            if (!(t in e)) return function () {}
            var r = e[t],
                i = n(r)
            return (
                $t(i) &&
                    ((i.prototype = i.prototype || {}),
                    Object.defineProperties(i, { __posthog_wrapped__: { enumerable: !1, value: !0 } })),
                (e[t] = i),
                function () {
                    e[t] = r
                }
            )
        } catch (e) {
            return function () {}
        }
    }
    function br(e, t) {
        var n,
            r = (function (e) {
                try {
                    return 'string' == typeof e
                        ? new URL(e).hostname
                        : 'url' in e
                        ? new URL(e.url).hostname
                        : e.hostname
                } catch (e) {
                    return null
                }
            })(e),
            i = { hostname: r, isHostDenied: !1 }
        if (null === (n = t.payloadHostDenyList) || void 0 === n || !n.length || null == r || !r.trim().length) return i
        var o,
            a = v(t.payloadHostDenyList)
        try {
            for (a.s(); !(o = a.n()).done; ) {
                var s = o.value
                if (r.endsWith(s)) return { hostname: r, isHostDenied: !0 }
            }
        } catch (e) {
            a.e(e)
        } finally {
            a.f()
        }
        return i
    }
    var kr = function (e) {
            return 'navigation' === e.entryType
        },
        wr = function (e) {
            return 'resource' === e.entryType
        }
    function Cr(e, t) {
        for (var n = e.length - 1; n >= 0; n -= 1) if (t(e[n])) return e[n]
    }
    function Ir(e, t, n) {
        if (n.recordInitialRequests) {
            var r = t.performance.getEntries().filter(function (e) {
                return kr(e) || (wr(e) && n.initiatorTypes.includes(e.initiatorType))
            })
            e({
                requests: r.flatMap(function (e) {
                    return Rr({ entry: e, method: void 0, status: void 0, networkRequest: {}, isInitial: !0 })
                }),
                isInitial: !0,
            })
        }
        var i = new t.PerformanceObserver(function (t) {
                var r = t.getEntries().filter(function (e) {
                    return (
                        kr(e) ||
                        (wr(e) &&
                            n.initiatorTypes.includes(e.initiatorType) &&
                            (function (e) {
                                return (
                                    (!n.recordBody && !n.recordHeaders) ||
                                    ('xmlhttprequest' !== e.initiatorType && 'fetch' !== e.initiatorType)
                                )
                            })(e))
                    )
                })
                e({
                    requests: r.flatMap(function (e) {
                        return Rr({ entry: e, method: void 0, status: void 0, networkRequest: {} })
                    }),
                })
            }),
            o = PerformanceObserver.supportedEntryTypes.filter(function (e) {
                return n.performanceEntryTypeToObserve.includes(e)
            })
        return (
            i.observe({ entryTypes: o }),
            function () {
                i.disconnect()
            }
        )
    }
    function Sr(e, t) {
        return !!t && (Kt(t) || t[e])
    }
    function xr(e) {
        var t = e.type,
            n = e.recordBody,
            r = e.headers
        function i(e) {
            var t = Object.keys(r).find(function (e) {
                    return 'content-type' === e.toLowerCase()
                }),
                n = t && r[t]
            return e.some(function (e) {
                return null == n ? void 0 : n.includes(e)
            })
        }
        if (!n) return !1
        if (Kt(n)) return !0
        if (Ht(n)) return i(n)
        var o = n[t]
        return Kt(o) ? o : i(o)
    }
    function Er(e, t, n, r, i) {
        return Tr.apply(this, arguments)
    }
    function Tr() {
        return (
            (Tr = o(
                n().mark(function e(t, r, i, o, a) {
                    var s,
                        u,
                        l,
                        c = arguments
                    return n().wrap(function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    if (!((s = c.length > 5 && void 0 !== c[5] ? c[5] : 0) > 10)) {
                                        e.next = 4
                                        break
                                    }
                                    return (
                                        vn.warn('Failed to get performance entry for request', {
                                            url: i,
                                            initiatorType: r,
                                        }),
                                        e.abrupt('return', null)
                                    )
                                case 4:
                                    if (
                                        ((u = t.performance.getEntriesByName(i)),
                                        (l = Cr(u, function (e) {
                                            return (
                                                wr(e) &&
                                                e.initiatorType === r &&
                                                (Ut(o) || e.startTime >= o) &&
                                                (Ut(a) || e.startTime <= a)
                                            )
                                        })))
                                    ) {
                                        e.next = 10
                                        break
                                    }
                                    return (
                                        (e.next = 9),
                                        new Promise(function (e) {
                                            return setTimeout(e, 50 * s)
                                        })
                                    )
                                case 9:
                                    return e.abrupt('return', Er(t, r, i, o, a, s + 1))
                                case 10:
                                    return e.abrupt('return', l)
                                case 11:
                                case 'end':
                                    return e.stop()
                            }
                    }, e)
                })
            )),
            Tr.apply(this, arguments)
        )
    }
    function Ar(e) {
        var t = e.body,
            n = e.options,
            r = e.url
        if (zt(t)) return null
        var i = br(r, n),
            o = i.hostname
        if (i.isHostDenied) return o + ' is in deny list'
        if (jt(t)) return t
        if (Yt(t)) return t.textContent
        if (Jt(t)) return Ln(t)
        if (Wt(t))
            try {
                return JSON.stringify(t)
            } catch (e) {
                return '[SessionReplay] Failed to stringify response object'
            }
        return '[SessionReplay] Cannot read body of type ' + toString.call(t)
    }
    var Mr = function (e) {
        return !Zt(e) && ('navigation' === e.entryType || 'resource' === e.entryType)
    }
    function Rr(e) {
        var n = e.entry,
            r = e.method,
            i = e.status,
            o = e.networkRequest,
            a = e.isInitial,
            s = e.start,
            u = e.end,
            l = e.url
        ;(s = n ? n.startTime : s), (u = n ? n.responseEnd : u)
        var c = Math.floor(Date.now() - performance.now()),
            d = Math.floor(c + (s || 0)),
            f = [
                t(
                    t({}, n ? n.toJSON() : { name: l }),
                    {},
                    {
                        startTime: Ut(s) ? void 0 : Math.round(s),
                        endTime: Ut(u) ? void 0 : Math.round(u),
                        timeOrigin: c,
                        timestamp: d,
                        method: r,
                        initiatorType: n ? n.initiatorType : void 0,
                        status: i,
                        requestHeaders: o.requestHeaders,
                        requestBody: o.requestBody,
                        responseHeaders: o.responseHeaders,
                        responseBody: o.responseBody,
                        isInitial: a,
                    }
                ),
            ]
        if (Mr(n)) {
            var p,
                h = v(n.serverTiming || [])
            try {
                for (h.s(); !(p = h.n()).done; ) {
                    var g = p.value
                    f.push({
                        timeOrigin: c,
                        timestamp: d,
                        startTime: Math.round(n.startTime),
                        name: g.name,
                        duration: g.duration,
                        entryType: 'serverTiming',
                    })
                }
            } catch (e) {
                h.e(e)
            } finally {
                h.f()
            }
        }
        return f
    }
    var Fr = ['video/', 'audio/']
    function Or(e) {
        var t,
            n = e.r,
            r = e.options,
            i = e.url
        if ('chunked' === n.headers.get('Transfer-Encoding')) return 'Chunked Transfer-Encoding is not supported'
        var o = null === (t = n.headers.get('Content-Type')) || void 0 === t ? void 0 : t.toLowerCase(),
            a = Fr.some(function (e) {
                return null == o ? void 0 : o.startsWith(e)
            })
        if (o && a) return 'Content-Type '.concat(o, ' is not supported')
        var s = br(i, r),
            u = s.hostname
        return s.isHostDenied ? u + ' is in deny list' : null
    }
    function Nr(e) {
        return new Promise(function (t, n) {
            var r = setTimeout(function () {
                return t('[SessionReplay] Timeout while trying to read body')
            }, 500)
            try {
                e.clone()
                    .text()
                    .then(
                        function (e) {
                            return t(e)
                        },
                        function (e) {
                            return n(e)
                        }
                    )
                    .finally(function () {
                        return clearTimeout(r)
                    })
            } catch (e) {
                clearTimeout(r), t('[SessionReplay] Failed to read body')
            }
        })
    }
    function Lr(e) {
        return Pr.apply(this, arguments)
    }
    function Pr() {
        return (
            (Pr = o(
                n().mark(function e(t) {
                    var r, i, o, a, s
                    return n().wrap(function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    if (
                                        ((r = t.r),
                                        (i = t.options),
                                        (o = t.url),
                                        (a = br(o, i)),
                                        (s = a.hostname),
                                        !a.isHostDenied)
                                    ) {
                                        e.next = 4
                                        break
                                    }
                                    return e.abrupt('return', Promise.resolve(s + ' is in deny list'))
                                case 4:
                                    return e.abrupt('return', Nr(r))
                                case 5:
                                case 'end':
                                    return e.stop()
                            }
                    }, e)
                })
            )),
            Pr.apply(this, arguments)
        )
    }
    function Dr(e) {
        return qr.apply(this, arguments)
    }
    function qr() {
        return (
            (qr = o(
                n().mark(function e(t) {
                    var r, i, o, a
                    return n().wrap(function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    if (
                                        ((r = t.r),
                                        (i = t.options),
                                        (o = t.url),
                                        (a = Or({ r: r, options: i, url: o })),
                                        Zt(a))
                                    ) {
                                        e.next = 4
                                        break
                                    }
                                    return e.abrupt('return', Promise.resolve(a))
                                case 4:
                                    return e.abrupt('return', Nr(r))
                                case 5:
                                case 'end':
                                    return e.stop()
                            }
                    }, e)
                })
            )),
            qr.apply(this, arguments)
        )
    }
    var Br = null
    function Hr(e, r, i) {
        if (!('performance' in r)) return function () {}
        if (Br) return vn.warn('Network observer already initialised, doing nothing'), function () {}
        var a = i ? Object.assign({}, fr, i) : fr,
            s = function (n) {
                var r = []
                n.requests.forEach(function (e) {
                    var t = a.maskRequestFn(e)
                    t && r.push(t)
                }),
                    r.length > 0 && e(t(t({}, n), {}, { requests: r }))
            },
            u = Ir(s, r, a),
            l = function () {},
            c = function () {}
        return (
            (a.recordHeaders || a.recordBody) &&
                ((l = (function (e, t, n) {
                    if (!n.initiatorTypes.includes('xmlhttprequest')) return function () {}
                    var r = Sr('request', n.recordHeaders),
                        i = Sr('response', n.recordHeaders),
                        o = yr(t.XMLHttpRequest.prototype, 'open', function (o) {
                            return function (a, s) {
                                var u,
                                    l,
                                    c = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                                    d = arguments.length > 3 ? arguments[3] : void 0,
                                    f = arguments.length > 4 ? arguments[4] : void 0,
                                    p = this,
                                    h = new Request(s),
                                    v = {},
                                    g = {},
                                    m = p.setRequestHeader.bind(p)
                                ;(p.setRequestHeader = function (e, t) {
                                    return (g[e] = t), m(e, t)
                                }),
                                    r && (v.requestHeaders = g)
                                var _ = p.send.bind(p)
                                ;(p.send = function (e) {
                                    return (
                                        xr({ type: 'request', headers: g, url: s, recordBody: n.recordBody }) &&
                                            (v.requestBody = Ar({ body: e, options: n, url: s })),
                                        (u = t.performance.now()),
                                        _(e)
                                    )
                                }),
                                    p.addEventListener('readystatechange', function () {
                                        if (p.readyState === p.DONE) {
                                            l = t.performance.now()
                                            var r = {}
                                            p
                                                .getAllResponseHeaders()
                                                .trim()
                                                .split(/[\r\n]+/)
                                                .forEach(function (e) {
                                                    var t = e.split(': '),
                                                        n = t.shift(),
                                                        i = t.join(': ')
                                                    n && (r[n] = i)
                                                }),
                                                i && (v.responseHeaders = r),
                                                xr({
                                                    type: 'response',
                                                    headers: r,
                                                    url: s,
                                                    recordBody: n.recordBody,
                                                }) && (v.responseBody = Ar({ body: p.response, options: n, url: s })),
                                                Er(t, 'xmlhttprequest', h.url, u, l)
                                                    .then(function (t) {
                                                        var n = Rr({
                                                            entry: t,
                                                            method: h.method,
                                                            status: null == p ? void 0 : p.status,
                                                            networkRequest: v,
                                                            start: u,
                                                            end: l,
                                                            url: s.toString(),
                                                        })
                                                        e({ requests: n })
                                                    })
                                                    .catch(function () {})
                                        }
                                    }),
                                    o.call(p, a, s, c, d, f)
                            }
                        })
                    return function () {
                        o()
                    }
                })(s, r, a)),
                (c = (function (e, t, r) {
                    if (!r.initiatorTypes.includes('fetch')) return function () {}
                    var i = Sr('request', r.recordHeaders),
                        a = Sr('response', r.recordHeaders),
                        s = yr(t, 'fetch', function (s) {
                            return (function () {
                                var u = o(
                                    n().mark(function o(u, l) {
                                        var c, d, f, p, h, v, g
                                        return n().wrap(
                                            function (n) {
                                                for (;;)
                                                    switch ((n.prev = n.next)) {
                                                        case 0:
                                                            if (
                                                                ((c = new Request(u, l)),
                                                                (f = {}),
                                                                (n.prev = 2),
                                                                (v = {}),
                                                                c.headers.forEach(function (e, t) {
                                                                    v[t] = e
                                                                }),
                                                                i && (f.requestHeaders = v),
                                                                !xr({
                                                                    type: 'request',
                                                                    headers: v,
                                                                    url: u,
                                                                    recordBody: r.recordBody,
                                                                }))
                                                            ) {
                                                                n.next = 10
                                                                break
                                                            }
                                                            return (n.next = 9), Lr({ r: c, options: r, url: u })
                                                        case 9:
                                                            f.requestBody = n.sent
                                                        case 10:
                                                            return (p = t.performance.now()), (n.next = 13), s(c)
                                                        case 13:
                                                            if (
                                                                ((d = n.sent),
                                                                (h = t.performance.now()),
                                                                (g = {}),
                                                                d.headers.forEach(function (e, t) {
                                                                    g[t] = e
                                                                }),
                                                                a && (f.responseHeaders = g),
                                                                !xr({
                                                                    type: 'response',
                                                                    headers: g,
                                                                    url: u,
                                                                    recordBody: r.recordBody,
                                                                }))
                                                            ) {
                                                                n.next = 22
                                                                break
                                                            }
                                                            return (n.next = 21), Dr({ r: d, options: r, url: u })
                                                        case 21:
                                                            f.responseBody = n.sent
                                                        case 22:
                                                            return n.abrupt('return', d)
                                                        case 23:
                                                            return (
                                                                (n.prev = 23),
                                                                Er(t, 'fetch', c.url, p, h)
                                                                    .then(function (t) {
                                                                        var n,
                                                                            r = Rr({
                                                                                entry: t,
                                                                                method: c.method,
                                                                                status:
                                                                                    null === (n = d) || void 0 === n
                                                                                        ? void 0
                                                                                        : n.status,
                                                                                networkRequest: f,
                                                                                start: p,
                                                                                end: h,
                                                                                url: c.url,
                                                                            })
                                                                        e({ requests: r })
                                                                    })
                                                                    .catch(function () {}),
                                                                n.finish(23)
                                                            )
                                                        case 26:
                                                        case 'end':
                                                            return n.stop()
                                                    }
                                            },
                                            o,
                                            null,
                                            [[2, , 23, 26]]
                                        )
                                    })
                                )
                                return function (e, t) {
                                    return u.apply(this, arguments)
                                }
                            })()
                        })
                    return function () {
                        s()
                    }
                })(s, r, a))),
            (Br = function () {
                u(), l(), c()
            })
        )
    }
    var $r, Wr, Vr
    en &&
        ((en.rrweb = { record: It, version: 'v2', rrwebVersion: '2.0.0-alpha.13' }),
        (en.rrwebConsoleRecord = {
            getRecordConsolePlugin: function (e) {
                return { name: 'rrweb/console@1', observer: Lt, options: e }
            },
        }),
        (en.getRecordNetworkPlugin = function (e) {
            return { name: 'rrweb/network@1', observer: Hr, options: e }
        })),
        (function (e) {
            ;(e.Popover = 'popover'), (e.API = 'api'), (e.Widget = 'widget')
        })($r || ($r = {})),
        (function (e) {
            ;(e.Open = 'open'),
                (e.MultipleChoice = 'multiple_choice'),
                (e.SingleChoice = 'single_choice'),
                (e.Rating = 'rating'),
                (e.Link = 'link')
        })(Wr || (Wr = {})),
        (function (e) {
            ;(e.NextQuestion = 'next_question'),
                (e.End = 'end'),
                (e.ResponseBased = 'response_based'),
                (e.SpecificQuestion = 'specific_question')
        })(Vr || (Vr = {}))
    var Ur,
        jr,
        Gr,
        Zr,
        zr,
        Qr,
        Kr,
        Yr,
        Jr = {},
        Xr = [],
        ei = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        ti = Array.isArray
    function ni(e, t) {
        for (var n in t) e[n] = t[n]
        return e
    }
    function ri(e) {
        var t = e.parentNode
        t && t.removeChild(e)
    }
    function ii(e, t, n) {
        var r,
            i,
            o,
            a = {}
        for (o in t) 'key' == o ? (r = t[o]) : 'ref' == o ? (i = t[o]) : (a[o] = t[o])
        if (
            (arguments.length > 2 && (a.children = arguments.length > 3 ? Ur.call(arguments, 2) : n),
            'function' == typeof e && null != e.defaultProps)
        )
            for (o in e.defaultProps) void 0 === a[o] && (a[o] = e.defaultProps[o])
        return oi(e, a, r, i, null)
    }
    function oi(e, t, n, r, i) {
        var o = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: null == i ? ++Gr : i,
            __i: -1,
            __u: 0,
        }
        return null == i && null != jr.vnode && jr.vnode(o), o
    }
    function ai(e) {
        return e.children
    }
    function si(e, t) {
        ;(this.props = e), (this.context = t)
    }
    function ui(e, t) {
        if (null == t) return e.__ ? ui(e.__, e.__i + 1) : null
        for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e
        return 'function' == typeof e.type ? ui(e) : null
    }
    function li(e) {
        var t, n
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e
                    break
                }
            return li(e)
        }
    }
    function ci(e) {
        ;((!e.__d && (e.__d = !0) && Zr.push(e) && !di.__r++) || zr !== jr.debounceRendering) &&
            ((zr = jr.debounceRendering) || Qr)(di)
    }
    function di() {
        var e, t, n, r, i, o, a, s, u
        for (Zr.sort(Kr); (e = Zr.shift()); )
            e.__d &&
                ((t = Zr.length),
                (r = void 0),
                (o = (i = (n = e).__v).__e),
                (s = []),
                (u = []),
                (a = n.__P) &&
                    (((r = ni({}, i)).__v = i.__v + 1),
                    jr.vnode && jr.vnode(r),
                    yi(
                        a,
                        r,
                        i,
                        n.__n,
                        void 0 !== a.ownerSVGElement,
                        32 & i.__u ? [o] : null,
                        s,
                        null == o ? ui(i) : o,
                        !!(32 & i.__u),
                        u
                    ),
                    (r.__.__k[r.__i] = r),
                    bi(s, r, u),
                    r.__e != o && li(r)),
                Zr.length > t && Zr.sort(Kr))
        di.__r = 0
    }
    function fi(e, t, n, r, i, o, a, s, u, l, c) {
        var d,
            f,
            p,
            h,
            v,
            g = (r && r.__k) || Xr,
            m = t.length
        for (
            n.__d = u,
                (function (e, t, n) {
                    var r,
                        i,
                        o,
                        a,
                        s,
                        u = t.length,
                        l = n.length,
                        c = l,
                        d = 0
                    for (e.__k = [], r = 0; r < u; r++)
                        null !=
                        (i = e.__k[r] =
                            null == (i = t[r]) || 'boolean' == typeof i || 'function' == typeof i
                                ? null
                                : 'string' == typeof i ||
                                  'number' == typeof i ||
                                  'bigint' == typeof i ||
                                  i.constructor == String
                                ? oi(null, i, null, null, i)
                                : ti(i)
                                ? oi(ai, { children: i }, null, null, null)
                                : void 0 === i.constructor && i.__b > 0
                                ? oi(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
                                : i)
                            ? ((i.__ = e),
                              (i.__b = e.__b + 1),
                              (s = hi(i, n, (a = r + d), c)),
                              (i.__i = s),
                              (o = null),
                              -1 !== s && (c--, (o = n[s]) && (o.__u |= 131072)),
                              null == o || null === o.__v
                                  ? (-1 == s && d--, 'function' != typeof i.type && (i.__u |= 65536))
                                  : s !== a &&
                                    (s === a + 1
                                        ? d++
                                        : s > a
                                        ? c > u - a
                                            ? (d += s - a)
                                            : d--
                                        : (d = s < a && s == a - 1 ? s - a : 0),
                                    s !== r + d && (i.__u |= 65536)))
                            : (o = n[r]) &&
                              null == o.key &&
                              o.__e &&
                              (o.__e == e.__d && (e.__d = ui(o)), wi(o, o, !1), (n[r] = null), c--)
                    if (c)
                        for (r = 0; r < l; r++)
                            null != (o = n[r]) && 0 == (131072 & o.__u) && (o.__e == e.__d && (e.__d = ui(o)), wi(o, o))
                })(n, t, g),
                u = n.__d,
                d = 0;
            d < m;
            d++
        )
            null != (p = n.__k[d]) &&
                'boolean' != typeof p &&
                'function' != typeof p &&
                ((f = -1 === p.__i ? Jr : g[p.__i] || Jr),
                (p.__i = d),
                yi(e, p, f, i, o, a, s, u, l, c),
                (h = p.__e),
                p.ref && f.ref != p.ref && (f.ref && ki(f.ref, null, p), c.push(p.ref, p.__c || h, p)),
                null == v && null != h && (v = h),
                65536 & p.__u || f.__k === p.__k
                    ? (u = pi(p, u, e))
                    : 'function' == typeof p.type && void 0 !== p.__d
                    ? (u = p.__d)
                    : h && (u = h.nextSibling),
                (p.__d = void 0),
                (p.__u &= -196609))
        ;(n.__d = u), (n.__e = v)
    }
    function pi(e, t, n) {
        var r, i
        if ('function' == typeof e.type) {
            for (r = e.__k, i = 0; r && i < r.length; i++) r[i] && ((r[i].__ = e), (t = pi(r[i], t, n)))
            return t
        }
        return e.__e != t && (n.insertBefore(e.__e, t || null), (t = e.__e)), t && t.nextSibling
    }
    function hi(e, t, n, r) {
        var i = e.key,
            o = e.type,
            a = n - 1,
            s = n + 1,
            u = t[n]
        if (null === u || (u && i == u.key && o === u.type)) return n
        if (r > (null != u && 0 == (131072 & u.__u) ? 1 : 0))
            for (; a >= 0 || s < t.length; ) {
                if (a >= 0) {
                    if ((u = t[a]) && 0 == (131072 & u.__u) && i == u.key && o === u.type) return a
                    a--
                }
                if (s < t.length) {
                    if ((u = t[s]) && 0 == (131072 & u.__u) && i == u.key && o === u.type) return s
                    s++
                }
            }
        return -1
    }
    function vi(e, t, n) {
        '-' === t[0]
            ? e.setProperty(t, null == n ? '' : n)
            : (e[t] = null == n ? '' : 'number' != typeof n || ei.test(t) ? n : n + 'px')
    }
    function gi(e, t, n, r, i) {
        var o
        e: if ('style' === t)
            if ('string' == typeof n) e.style.cssText = n
            else {
                if (('string' == typeof r && (e.style.cssText = r = ''), r))
                    for (t in r) (n && t in n) || vi(e.style, t, '')
                if (n) for (t in n) (r && n[t] === r[t]) || vi(e.style, t, n[t])
            }
        else if ('o' === t[0] && 'n' === t[1])
            (o = t !== (t = t.replace(/(PointerCapture)$|Capture$/, '$1'))),
                (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
                e.l || (e.l = {}),
                (e.l[t + o] = n),
                n
                    ? r
                        ? (n.u = r.u)
                        : ((n.u = Date.now()), e.addEventListener(t, o ? _i : mi, o))
                    : e.removeEventListener(t, o ? _i : mi, o)
        else {
            if (i) t = t.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's')
            else if (
                'width' !== t &&
                'height' !== t &&
                'href' !== t &&
                'list' !== t &&
                'form' !== t &&
                'tabIndex' !== t &&
                'download' !== t &&
                'rowSpan' !== t &&
                'colSpan' !== t &&
                'role' !== t &&
                t in e
            )
                try {
                    e[t] = null == n ? '' : n
                    break e
                } catch (e) {}
            'function' == typeof n ||
                (null == n || (!1 === n && '-' !== t[4]) ? e.removeAttribute(t) : e.setAttribute(t, n))
        }
    }
    function mi(e) {
        var t = this.l[e.type + !1]
        if (e.t) {
            if (e.t <= t.u) return
        } else e.t = Date.now()
        return t(jr.event ? jr.event(e) : e)
    }
    function _i(e) {
        return this.l[e.type + !0](jr.event ? jr.event(e) : e)
    }
    function yi(e, t, n, r, i, o, a, s, u, l) {
        var c,
            d,
            f,
            p,
            h,
            v,
            g,
            m,
            _,
            y,
            b,
            k,
            w,
            C,
            I,
            S = t.type
        if (void 0 !== t.constructor) return null
        128 & n.__u && ((u = !!(32 & n.__u)), (o = [(s = t.__e = n.__e)])), (c = jr.__b) && c(t)
        e: if ('function' == typeof S)
            try {
                if (
                    ((m = t.props),
                    (_ = (c = S.contextType) && r[c.__c]),
                    (y = c ? (_ ? _.props.value : c.__) : r),
                    n.__c
                        ? (g = (d = t.__c = n.__c).__ = d.__E)
                        : ('prototype' in S && S.prototype.render
                              ? (t.__c = d = new S(m, y))
                              : ((t.__c = d = new si(m, y)), (d.constructor = S), (d.render = Ci)),
                          _ && _.sub(d),
                          (d.props = m),
                          d.state || (d.state = {}),
                          (d.context = y),
                          (d.__n = r),
                          (f = d.__d = !0),
                          (d.__h = []),
                          (d._sb = [])),
                    null == d.__s && (d.__s = d.state),
                    null != S.getDerivedStateFromProps &&
                        (d.__s == d.state && (d.__s = ni({}, d.__s)), ni(d.__s, S.getDerivedStateFromProps(m, d.__s))),
                    (p = d.props),
                    (h = d.state),
                    (d.__v = t),
                    f)
                )
                    null == S.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(),
                        null != d.componentDidMount && d.__h.push(d.componentDidMount)
                else {
                    if (
                        (null == S.getDerivedStateFromProps &&
                            m !== p &&
                            null != d.componentWillReceiveProps &&
                            d.componentWillReceiveProps(m, y),
                        !d.__e &&
                            ((null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(m, d.__s, y)) ||
                                t.__v === n.__v))
                    ) {
                        for (
                            t.__v !== n.__v && ((d.props = m), (d.state = d.__s), (d.__d = !1)),
                                t.__e = n.__e,
                                t.__k = n.__k,
                                t.__k.forEach(function (e) {
                                    e && (e.__ = t)
                                }),
                                b = 0;
                            b < d._sb.length;
                            b++
                        )
                            d.__h.push(d._sb[b])
                        ;(d._sb = []), d.__h.length && a.push(d)
                        break e
                    }
                    null != d.componentWillUpdate && d.componentWillUpdate(m, d.__s, y),
                        null != d.componentDidUpdate &&
                            d.__h.push(function () {
                                d.componentDidUpdate(p, h, v)
                            })
                }
                if (
                    ((d.context = y),
                    (d.props = m),
                    (d.__P = e),
                    (d.__e = !1),
                    (k = jr.__r),
                    (w = 0),
                    'prototype' in S && S.prototype.render)
                ) {
                    for (
                        d.state = d.__s, d.__d = !1, k && k(t), c = d.render(d.props, d.state, d.context), C = 0;
                        C < d._sb.length;
                        C++
                    )
                        d.__h.push(d._sb[C])
                    d._sb = []
                } else
                    do {
                        ;(d.__d = !1), k && k(t), (c = d.render(d.props, d.state, d.context)), (d.state = d.__s)
                    } while (d.__d && ++w < 25)
                ;(d.state = d.__s),
                    null != d.getChildContext && (r = ni(ni({}, r), d.getChildContext())),
                    f || null == d.getSnapshotBeforeUpdate || (v = d.getSnapshotBeforeUpdate(p, h)),
                    fi(
                        e,
                        ti((I = null != c && c.type === ai && null == c.key ? c.props.children : c)) ? I : [I],
                        t,
                        n,
                        r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l
                    ),
                    (d.base = t.__e),
                    (t.__u &= -161),
                    d.__h.length && a.push(d),
                    g && (d.__E = d.__ = null)
            } catch (e) {
                ;(t.__v = null),
                    u || null != o
                        ? ((t.__e = s), (t.__u |= u ? 160 : 32), (o[o.indexOf(s)] = null))
                        : ((t.__e = n.__e), (t.__k = n.__k)),
                    jr.__e(e, t, n)
            }
        else
            null == o && t.__v === n.__v
                ? ((t.__k = n.__k), (t.__e = n.__e))
                : (t.__e = (function (e, t, n, r, i, o, a, s, u) {
                      var l,
                          c,
                          d,
                          f,
                          p,
                          h,
                          v,
                          g = n.props,
                          m = t.props,
                          _ = t.type
                      if (('svg' === _ && (i = !0), null != o))
                          for (l = 0; l < o.length; l++)
                              if (
                                  (p = o[l]) &&
                                  'setAttribute' in p == !!_ &&
                                  (_ ? p.localName === _ : 3 === p.nodeType)
                              ) {
                                  ;(e = p), (o[l] = null)
                                  break
                              }
                      if (null == e) {
                          if (null === _) return document.createTextNode(m)
                          ;(e = i
                              ? document.createElementNS('http://www.w3.org/2000/svg', _)
                              : document.createElement(_, m.is && m)),
                              (o = null),
                              (s = !1)
                      }
                      if (null === _) g === m || (s && e.data === m) || (e.data = m)
                      else {
                          if (((o = o && Ur.call(e.childNodes)), (g = n.props || Jr), !s && null != o))
                              for (g = {}, l = 0; l < e.attributes.length; l++) g[(p = e.attributes[l]).name] = p.value
                          for (l in g)
                              (p = g[l]),
                                  'children' == l ||
                                      ('dangerouslySetInnerHTML' == l
                                          ? (d = p)
                                          : 'key' === l || l in m || gi(e, l, null, p, i))
                          for (l in m)
                              (p = m[l]),
                                  'children' == l
                                      ? (f = p)
                                      : 'dangerouslySetInnerHTML' == l
                                      ? (c = p)
                                      : 'value' == l
                                      ? (h = p)
                                      : 'checked' == l
                                      ? (v = p)
                                      : 'key' === l ||
                                        (s && 'function' != typeof p) ||
                                        g[l] === p ||
                                        gi(e, l, p, g[l], i)
                          if (c)
                              s ||
                                  (d && (c.__html === d.__html || c.__html === e.innerHTML)) ||
                                  (e.innerHTML = c.__html),
                                  (t.__k = [])
                          else if (
                              (d && (e.innerHTML = ''),
                              fi(
                                  e,
                                  ti(f) ? f : [f],
                                  t,
                                  n,
                                  r,
                                  i && 'foreignObject' !== _,
                                  o,
                                  a,
                                  o ? o[0] : n.__k && ui(n, 0),
                                  s,
                                  u
                              ),
                              null != o)
                          )
                              for (l = o.length; l--; ) null != o[l] && ri(o[l])
                          s ||
                              ((l = 'value'),
                              void 0 !== h &&
                                  (h !== e[l] || ('progress' === _ && !h) || ('option' === _ && h !== g[l])) &&
                                  gi(e, l, h, g[l], !1),
                              (l = 'checked'),
                              void 0 !== v && v !== e[l] && gi(e, l, v, g[l], !1))
                      }
                      return e
                  })(n.__e, t, n, r, i, o, a, u, l))
        ;(c = jr.diffed) && c(t)
    }
    function bi(e, t, n) {
        t.__d = void 0
        for (var r = 0; r < n.length; r++) ki(n[r], n[++r], n[++r])
        jr.__c && jr.__c(t, e),
            e.some(function (t) {
                try {
                    ;(e = t.__h),
                        (t.__h = []),
                        e.some(function (e) {
                            e.call(t)
                        })
                } catch (e) {
                    jr.__e(e, t.__v)
                }
            })
    }
    function ki(e, t, n) {
        try {
            'function' == typeof e ? e(t) : (e.current = t)
        } catch (e) {
            jr.__e(e, n)
        }
    }
    function wi(e, t, n) {
        var r, i
        if (
            (jr.unmount && jr.unmount(e),
            (r = e.ref) && ((r.current && r.current !== e.__e) || ki(r, null, t)),
            null != (r = e.__c))
        ) {
            if (r.componentWillUnmount)
                try {
                    r.componentWillUnmount()
                } catch (e) {
                    jr.__e(e, t)
                }
            ;(r.base = r.__P = null), (e.__c = void 0)
        }
        if ((r = e.__k)) for (i = 0; i < r.length; i++) r[i] && wi(r[i], t, n || 'function' != typeof e.type)
        n || null == e.__e || ri(e.__e), (e.__ = e.__e = e.__d = void 0)
    }
    function Ci(e, t, n) {
        return this.constructor(e, n)
    }
    function Ii(e, t, n) {
        var r, i, o, a
        jr.__ && jr.__(e, t),
            (i = (r = 'function' == typeof n) ? null : (n && n.__k) || t.__k),
            (o = []),
            (a = []),
            yi(
                t,
                (e = ((!r && n) || t).__k = ii(ai, null, [e])),
                i || Jr,
                Jr,
                void 0 !== t.ownerSVGElement,
                !r && n ? [n] : i ? null : t.firstChild ? Ur.call(t.childNodes) : null,
                o,
                !r && n ? n : i ? i.__e : t.firstChild,
                r,
                a
            ),
            bi(o, e, a)
    }
    function Si(e, t, n) {
        var r,
            i,
            o,
            a,
            s = ni({}, e.props)
        for (o in (e.type && e.type.defaultProps && (a = e.type.defaultProps), t))
            'key' == o ? (r = t[o]) : 'ref' == o ? (i = t[o]) : (s[o] = void 0 === t[o] && void 0 !== a ? a[o] : t[o])
        return (
            arguments.length > 2 && (s.children = arguments.length > 3 ? Ur.call(arguments, 2) : n),
            oi(e.type, s, r || e.key, i || e.ref, null)
        )
    }
    ;(Ur = Xr.slice),
        (jr = {
            __e: function (e, t, n, r) {
                for (var i, o, a; (t = t.__); )
                    if ((i = t.__c) && !i.__)
                        try {
                            if (
                                ((o = i.constructor) &&
                                    null != o.getDerivedStateFromError &&
                                    (i.setState(o.getDerivedStateFromError(e)), (a = i.__d)),
                                null != i.componentDidCatch && (i.componentDidCatch(e, r || {}), (a = i.__d)),
                                a)
                            )
                                return (i.__E = i)
                        } catch (t) {
                            e = t
                        }
                throw e
            },
        }),
        (Gr = 0),
        (si.prototype.setState = function (e, t) {
            var n
            ;(n = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = ni({}, this.state))),
                'function' == typeof e && (e = e(ni({}, n), this.props)),
                e && ni(n, e),
                null != e && this.__v && (t && this._sb.push(t), ci(this))
        }),
        (si.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), ci(this))
        }),
        (si.prototype.render = ai),
        (Zr = []),
        (Qr = 'function' == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
        (Kr = function (e, t) {
            return e.__v.__b - t.__v.__b
        }),
        (di.__r = 0),
        (Yr = 0)
    var xi = en,
        Ei = sn,
        Ti = function (e) {
            return '\n          .survey-form, .thank-you-message {\n              position: fixed;\n              margin: 0px;\n              bottom: 0px;\n              color: black;\n              font-weight: normal;\n              font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n              text-align: left;\n              max-width: '
                .concat(
                    parseInt((null == e ? void 0 : e.maxWidth) || '300'),
                    'px;\n              width: 100%;\n              z-index: '
                )
                .concat(parseInt((null == e ? void 0 : e.zIndex) || '99999'), ';\n              border: 1.5px solid ')
                .concat(
                    (null == e ? void 0 : e.borderColor) || '#c9c6c6',
                    ';\n              border-bottom: 0px;\n              '
                )
                .concat(
                    {
                        left: 'left: 30px;',
                        right: 'right: 30px;',
                        center: '\n            left: 50%;\n            transform: translateX(-50%);\n          ',
                    }[(null == e ? void 0 : e.position) || 'right'] || 'right: 30px;',
                    '\n              flex-direction: column;\n              background: '
                )
                .concat(
                    (null == e ? void 0 : e.backgroundColor) || '#eeeded',
                    ';\n              border-top-left-radius: 10px;\n              border-top-right-radius: 10px;\n              box-shadow: -6px 0 16px -8px rgb(0 0 0 / 8%), -9px 0 28px 0 rgb(0 0 0 / 5%), -12px 0 48px 16px rgb(0 0 0 / 3%);\n          }\n          \n          .survey-box, .thank-you-message-container {\n              padding: 20px 25px 10px;\n              display: flex;\n              flex-direction: column;\n              border-radius: 10px;\n          }\n\n          .thank-you-message {\n              text-align: center;\n          }\n\n          .form-submit[disabled] {\n              opacity: 0.6;\n              filter: grayscale(50%);\n              cursor: not-allowed;\n          }\n          .survey-form textarea {\n              color: #2d2d2d;\n              font-size: 14px;\n              font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n              background: white;\n              color: black;\n              outline: none;\n              padding-left: 10px;\n              padding-right: 10px;\n              padding-top: 10px;\n              border-radius: 6px;\n              border-color: '
                )
                .concat(
                    (null == e ? void 0 : e.borderColor) || '#c9c6c6',
                    ';\n              margin-top: 14px;\n              width: 100%;\n              box-sizing: border-box;\n          }\n          .survey-box:has(.survey-question:empty):not(:has(.survey-question-description)) textarea {\n              margin-top: 0;\n          }\n          .form-submit {\n              box-sizing: border-box;\n              margin: 0;\n              font-family: inherit;\n              overflow: visible;\n              text-transform: none;\n              position: relative;\n              display: inline-block;\n              font-weight: 700;\n              white-space: nowrap;\n              text-align: center;\n              border: 1.5px solid transparent;\n              cursor: pointer;\n              user-select: none;\n              touch-action: manipulation;\n              padding: 12px;\n              font-size: 14px;\n              border-radius: 6px;\n              outline: 0;\n              background: '
                )
                .concat(
                    (null == e ? void 0 : e.submitButtonColor) || 'black',
                    ' !important;\n              text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);\n              box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);\n              width: 100%;\n          }\n          .form-cancel {\n              display: flex;\n              float: right;\n              border: none;\n              background: none;\n              cursor: pointer;\n          }\n          .cancel-btn-wrapper {\n              position: absolute;\n              width: 35px;\n              height: 35px;\n              border-radius: 100%;\n              top: 0;\n              right: 0;\n              transform: translate(50%, -50%);\n              background: white;\n              border: 1.5px solid '
                )
                .concat(
                    (null == e ? void 0 : e.borderColor) || '#c9c6c6',
                    ';\n              display: flex;\n              justify-content: center;\n              align-items: center;\n          }\n          .bolded { font-weight: 600; }\n          .buttons {\n              display: flex;\n              justify-content: center;\n          }\n          .footer-branding {\n              font-size: 11px;\n              margin-top: 10px;\n              text-align: center;\n              display: flex;\n              justify-content: center;\n              gap: 4px;\n              align-items: center;\n              font-weight: 500;\n              background: '
                )
                .concat(
                    (null == e ? void 0 : e.backgroundColor) || '#eeeded',
                    ';\n              text-decoration: none;\n              backgroundColor: '
                )
                .concat((null == e ? void 0 : e.backgroundColor) || '#eeeded', ';\n              color: ')
                .concat(
                    Mi((null == e ? void 0 : e.backgroundColor) || '#eeeded'),
                    ';\n          }\n          .survey-question {\n              font-weight: 500;\n              font-size: 14px;\n              background: '
                )
                .concat(
                    (null == e ? void 0 : e.backgroundColor) || '#eeeded',
                    ';\n          }\n          .question-textarea-wrapper {\n              display: flex;\n              flex-direction: column;\n          }\n          .survey-question-description {\n              font-size: 13px;\n              padding-top: 5px;\n              background: '
                )
                .concat(
                    (null == e ? void 0 : e.backgroundColor) || '#eeeded',
                    ';\n          }\n          .ratings-number {\n              font-size: 16px;\n              font-weight: 600;\n              padding: 8px 0px;\n              border: none;\n          }\n          .ratings-number:hover {\n              cursor: pointer;\n          }\n          .rating-options {\n              margin-top: 14px;\n          }\n          .rating-options-number {\n              display: grid;\n              border-radius: 6px;\n              overflow: hidden;\n              border: 1.5px solid '
                )
                .concat(
                    (null == e ? void 0 : e.borderColor) || '#c9c6c6',
                    ';\n          }\n          .rating-options-number > .ratings-number {\n              border-right: 1px solid '
                )
                .concat(
                    (null == e ? void 0 : e.borderColor) || '#c9c6c6',
                    ';\n          }\n          .rating-options-number > .ratings-number:last-of-type {\n              border-right: 0px;\n          }\n          .rating-options-number .rating-active {\n              background: '
                )
                .concat(
                    (null == e ? void 0 : e.ratingButtonActiveColor) || 'black',
                    ';\n          }\n          .rating-options-emoji {\n              display: flex;\n              justify-content: space-between;\n          }\n          .ratings-emoji {\n              font-size: 16px;\n              background-color: transparent;\n              border: none;\n              padding: 0px;\n          }\n          .ratings-emoji:hover {\n              cursor: pointer;\n          }\n          .ratings-emoji.rating-active svg {\n              fill: '
                )
                .concat(
                    (null == e ? void 0 : e.ratingButtonActiveColor) || 'black',
                    ";\n          }\n          .emoji-svg {\n              fill: '#939393';\n          }\n          .rating-text {\n              display: flex;\n              flex-direction: row;\n              font-size: 11px;\n              justify-content: space-between;\n              margin-top: 6px;\n              background: "
                )
                .concat(
                    (null == e ? void 0 : e.backgroundColor) || '#eeeded',
                    ';\n              opacity: .60;\n          }\n          .multiple-choice-options {\n              margin-top: 13px;\n              font-size: 14px;\n          }\n          .survey-box:has(.survey-question:empty):not(:has(.survey-question-description)) .multiple-choice-options {\n              margin-top: 0;\n          }\n          .multiple-choice-options .choice-option {\n              display: flex;\n              align-items: center;\n              gap: 4px;\n              font-size: 13px;\n              cursor: pointer;\n              margin-bottom: 5px;\n              position: relative;\n          }\n          .multiple-choice-options > .choice-option:last-of-type {\n              margin-bottom: 0px;\n          }\n          .multiple-choice-options input {\n              cursor: pointer;\n              position: absolute;\n              opacity: 0;\n          }\n          .choice-check {\n              position: absolute;\n              right: 10px;\n              background: white;\n          }\n          .choice-check svg {\n              display: none;\n          }\n          .multiple-choice-options .choice-option:hover .choice-check svg {\n              display: inline-block;\n              opacity: .25;\n          }\n          .multiple-choice-options input:checked + label + .choice-check svg {\n              display: inline-block;\n              opacity: 100% !important;\n          }\n          .multiple-choice-options input:checked + label {\n              font-weight: bold;\n              border: 1.5px solid rgba(0,0,0);\n          }\n          .multiple-choice-options input:checked + label input {\n              font-weight: bold;\n          }\n          .multiple-choice-options label {\n              width: 100%;\n              cursor: pointer;\n              padding: 10px;\n              border: 1.5px solid rgba(0,0,0,.25);\n              border-radius: 4px;\n              background: white;\n          }\n          .multiple-choice-options .choice-option-open label {\n              padding-right: 30px;\n              display: flex;\n              flex-wrap: wrap;\n              gap: 8px;\n              max-width: 100%;\n          }\n          .multiple-choice-options .choice-option-open label span {\n              width: 100%;\n          }\n          .multiple-choice-options .choice-option-open input:disabled + label {\n              opacity: 0.6;\n          }\n          .multiple-choice-options .choice-option-open label input {\n              position: relative;\n              opacity: 1;\n              flex-grow: 1;\n              border: 0;\n              outline: 0;\n          }\n          .thank-you-message-body {\n              margin-top: 6px;\n              font-size: 14px;\n              background: '
                )
                .concat(
                    (null == e ? void 0 : e.backgroundColor) || '#eeeded',
                    ';\n          }\n          .thank-you-message-header {\n              margin: 10px 0px 0px;\n              background: '
                )
                .concat(
                    (null == e ? void 0 : e.backgroundColor) || '#eeeded',
                    ';\n          }\n          .thank-you-message-container .form-submit {\n              margin-top: 20px;\n              margin-bottom: 10px;\n          }\n          .thank-you-message-countdown {\n              margin-left: 6px;\n          }\n          .bottom-section {\n              margin-top: 14px;\n          }\n          '
                )
        }
    function Ai(e) {
        if ('#' === e[0]) {
            var t = e.replace(/^#/, '')
            return (
                'rgb(' +
                parseInt(t.slice(0, 2), 16) +
                ',' +
                parseInt(t.slice(2, 4), 16) +
                ',' +
                parseInt(t.slice(4, 6), 16) +
                ')'
            )
        }
        return 'rgb(255, 255, 255)'
    }
    function Mi() {
        var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fi
        '#' === t[0] && (e = Ai(t)), t.startsWith('rgb') && (e = t)
        var n = {
            aliceblue: '#f0f8ff',
            antiquewhite: '#faebd7',
            aqua: '#00ffff',
            aquamarine: '#7fffd4',
            azure: '#f0ffff',
            beige: '#f5f5dc',
            bisque: '#ffe4c4',
            black: '#000000',
            blanchedalmond: '#ffebcd',
            blue: '#0000ff',
            blueviolet: '#8a2be2',
            brown: '#a52a2a',
            burlywood: '#deb887',
            cadetblue: '#5f9ea0',
            chartreuse: '#7fff00',
            chocolate: '#d2691e',
            coral: '#ff7f50',
            cornflowerblue: '#6495ed',
            cornsilk: '#fff8dc',
            crimson: '#dc143c',
            cyan: '#00ffff',
            darkblue: '#00008b',
            darkcyan: '#008b8b',
            darkgoldenrod: '#b8860b',
            darkgray: '#a9a9a9',
            darkgreen: '#006400',
            darkkhaki: '#bdb76b',
            darkmagenta: '#8b008b',
            darkolivegreen: '#556b2f',
            darkorange: '#ff8c00',
            darkorchid: '#9932cc',
            darkred: '#8b0000',
            darksalmon: '#e9967a',
            darkseagreen: '#8fbc8f',
            darkslateblue: '#483d8b',
            darkslategray: '#2f4f4f',
            darkturquoise: '#00ced1',
            darkviolet: '#9400d3',
            deeppink: '#ff1493',
            deepskyblue: '#00bfff',
            dimgray: '#696969',
            dodgerblue: '#1e90ff',
            firebrick: '#b22222',
            floralwhite: '#fffaf0',
            forestgreen: '#228b22',
            fuchsia: '#ff00ff',
            gainsboro: '#dcdcdc',
            ghostwhite: '#f8f8ff',
            gold: '#ffd700',
            goldenrod: '#daa520',
            gray: '#808080',
            green: '#008000',
            greenyellow: '#adff2f',
            honeydew: '#f0fff0',
            hotpink: '#ff69b4',
            'indianred ': '#cd5c5c',
            indigo: '#4b0082',
            ivory: '#fffff0',
            khaki: '#f0e68c',
            lavender: '#e6e6fa',
            lavenderblush: '#fff0f5',
            lawngreen: '#7cfc00',
            lemonchiffon: '#fffacd',
            lightblue: '#add8e6',
            lightcoral: '#f08080',
            lightcyan: '#e0ffff',
            lightgoldenrodyellow: '#fafad2',
            lightgrey: '#d3d3d3',
            lightgreen: '#90ee90',
            lightpink: '#ffb6c1',
            lightsalmon: '#ffa07a',
            lightseagreen: '#20b2aa',
            lightskyblue: '#87cefa',
            lightslategray: '#778899',
            lightsteelblue: '#b0c4de',
            lightyellow: '#ffffe0',
            lime: '#00ff00',
            limegreen: '#32cd32',
            linen: '#faf0e6',
            magenta: '#ff00ff',
            maroon: '#800000',
            mediumaquamarine: '#66cdaa',
            mediumblue: '#0000cd',
            mediumorchid: '#ba55d3',
            mediumpurple: '#9370d8',
            mediumseagreen: '#3cb371',
            mediumslateblue: '#7b68ee',
            mediumspringgreen: '#00fa9a',
            mediumturquoise: '#48d1cc',
            mediumvioletred: '#c71585',
            midnightblue: '#191970',
            mintcream: '#f5fffa',
            mistyrose: '#ffe4e1',
            moccasin: '#ffe4b5',
            navajowhite: '#ffdead',
            navy: '#000080',
            oldlace: '#fdf5e6',
            olive: '#808000',
            olivedrab: '#6b8e23',
            orange: '#ffa500',
            orangered: '#ff4500',
            orchid: '#da70d6',
            palegoldenrod: '#eee8aa',
            palegreen: '#98fb98',
            paleturquoise: '#afeeee',
            palevioletred: '#d87093',
            papayawhip: '#ffefd5',
            peachpuff: '#ffdab9',
            peru: '#cd853f',
            pink: '#ffc0cb',
            plum: '#dda0dd',
            powderblue: '#b0e0e6',
            purple: '#800080',
            red: '#ff0000',
            rosybrown: '#bc8f8f',
            royalblue: '#4169e1',
            saddlebrown: '#8b4513',
            salmon: '#fa8072',
            sandybrown: '#f4a460',
            seagreen: '#2e8b57',
            seashell: '#fff5ee',
            sienna: '#a0522d',
            silver: '#c0c0c0',
            skyblue: '#87ceeb',
            slateblue: '#6a5acd',
            slategray: '#708090',
            snow: '#fffafa',
            springgreen: '#00ff7f',
            steelblue: '#4682b4',
            tan: '#d2b48c',
            teal: '#008080',
            thistle: '#d8bfd8',
            tomato: '#ff6347',
            turquoise: '#40e0d0',
            violet: '#ee82ee',
            wheat: '#f5deb3',
            white: '#ffffff',
            whitesmoke: '#f5f5f5',
            yellow: '#ffff00',
            yellowgreen: '#9acd32',
        }[t.toLowerCase()]
        if ((n && (e = Ai(n)), !e)) return 'black'
        var r = e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)
        if (r) {
            var i = parseInt(r[1]),
                o = parseInt(r[2]),
                a = parseInt(r[3])
            return Math.sqrt(i * i * 0.299 + o * o * 0.587 + a * a * 0.114) > 127.5 ? 'black' : 'white'
        }
        return 'black'
    }
    var Ri = {
            backgroundColor: '#eeeded',
            submitButtonColor: 'black',
            submitButtonTextColor: 'white',
            ratingButtonColor: 'white',
            ratingButtonActiveColor: 'black',
            borderColor: '#c9c6c6',
            placeholder: 'Start typing...',
            whiteLabel: !1,
            displayThankYouMessage: !0,
            thankYouMessageHeader: 'Thank you for your feedback!',
            position: 'right',
        },
        Fi = '#eeeded',
        Oi = function () {
            var e,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 ? arguments[2] : void 0
            i &&
                (localStorage.setItem(Bi(r), 'true'),
                i.capture(
                    'survey sent',
                    t(
                        t(
                            {
                                $survey_name: r.name,
                                $survey_id: r.id,
                                $survey_iteration: r.current_iteration,
                                $survey_iteration_start_date: r.current_iteration_start_date,
                                $survey_questions: r.questions.map(function (e) {
                                    return e.question
                                }),
                                sessionRecordingUrl:
                                    null === (e = i.get_session_replay_url) || void 0 === e ? void 0 : e.call(i),
                            },
                            n
                        ),
                        {},
                        { $set: l({}, Hi(r, 'responded'), !0) }
                    )
                ),
                xi.dispatchEvent(new Event('PHSurveySent')))
        },
        Ni = function (e, t, n) {
            var r
            !n &&
                t &&
                (t.capture('survey dismissed', {
                    $survey_name: e.name,
                    $survey_id: e.id,
                    $survey_iteration: e.current_iteration,
                    $survey_iteration_start_date: e.current_iteration_start_date,
                    sessionRecordingUrl: null === (r = t.get_session_replay_url) || void 0 === r ? void 0 : r.call(t),
                    $set: l({}, Hi(e, 'dismissed'), !0),
                }),
                localStorage.setItem(Bi(e), 'true'),
                xi.dispatchEvent(new Event('PHSurveyClosed')))
        },
        Li = function (e) {
            return e
                .map(function (e) {
                    return { sort: Math.floor(10 * Math.random()), value: e }
                })
                .sort(function (e, t) {
                    return e.sort - t.sort
                })
                .map(function (e) {
                    return e.value
                })
        },
        Pi = function (e, t) {
            return e.length === t.length &&
                e.every(function (e, n) {
                    return e === t[n]
                })
                ? t.reverse()
                : t
        },
        Di = function (e) {
            return (
                e.questions.forEach(function (e, t) {
                    e.originalQuestionIndex = t
                }),
                e.appearance && e.appearance.shuffleQuestions ? Pi(e.questions, Li(e.questions)) : e.questions
            )
        },
        qi = function (e) {
            var t, n
            return !(
                null === (t = e.conditions) ||
                void 0 === t ||
                null === (n = t.events) ||
                void 0 === n ||
                !n.repeatedActivation ||
                !(function (e) {
                    var t, n, r, i, o, a
                    return (
                        null !=
                            (null === (t = e.conditions) ||
                            void 0 === t ||
                            null === (n = t.events) ||
                            void 0 === n ||
                            null === (r = n.values) ||
                            void 0 === r
                                ? void 0
                                : r.length) &&
                        (null === (i = e.conditions) ||
                        void 0 === i ||
                        null === (o = i.events) ||
                        void 0 === o ||
                        null === (a = o.values) ||
                        void 0 === a
                            ? void 0
                            : a.length) > 0
                    )
                })(e)
            )
        },
        Bi = function (e) {
            var t = 'seenSurvey_'.concat(e.id)
            return (
                e.current_iteration &&
                    e.current_iteration > 0 &&
                    (t = 'seenSurvey_'.concat(e.id, '_').concat(e.current_iteration)),
                t
            )
        },
        Hi = function (e, t) {
            var n = '$survey_'.concat(t, '/').concat(e.id)
            return (
                e.current_iteration &&
                    e.current_iteration > 0 &&
                    (n = '$survey_'.concat(t, '/').concat(e.id, '/').concat(e.current_iteration)),
                n
            )
        },
        $i = (function (e, t) {
            var n = {
                __c: (t = '__cC' + Yr++),
                __: e,
                Consumer: function (e, t) {
                    return e.children(t)
                },
                Provider: function (e) {
                    var n, r
                    return (
                        this.getChildContext ||
                            ((n = []),
                            ((r = {})[t] = this),
                            (this.getChildContext = function () {
                                return r
                            }),
                            (this.shouldComponentUpdate = function (e) {
                                this.props.value !== e.value &&
                                    n.some(function (e) {
                                        ;(e.__e = !0), ci(e)
                                    })
                            }),
                            (this.sub = function (e) {
                                n.push(e)
                                var t = e.componentWillUnmount
                                e.componentWillUnmount = function () {
                                    n.splice(n.indexOf(e), 1), t && t.call(e)
                                }
                            })),
                        e.children
                    )
                },
            }
            return (n.Provider.__ = n.Consumer.contextType = n)
        })({ isPreviewMode: !1, previewPageIndex: 0, handleCloseSurveyPopup: function () {}, isPopup: !0 }),
        Wi = function (e) {
            var t = e.component,
                n = e.children,
                r = e.renderAsHtml,
                i = e.style
            return Si(t, r ? { dangerouslySetInnerHTML: { __html: n }, style: i } : { children: n, style: i })
        },
        Vi = sn
    var Ui,
        ji,
        Gi,
        Zi,
        zi = 0,
        Qi = [],
        Ki = [],
        Yi = jr.__b,
        Ji = jr.__r,
        Xi = jr.diffed,
        eo = jr.__c,
        to = jr.unmount
    function no(e, t) {
        jr.__h && jr.__h(ji, e, zi || t), (zi = 0)
        var n = ji.__H || (ji.__H = { __: [], __h: [] })
        return e >= n.__.length && n.__.push({ __V: Ki }), n.__[e]
    }
    function ro(e) {
        return (
            (zi = 1),
            (function (e, t, n) {
                var r = no(Ui++, 2)
                if (
                    ((r.t = e),
                    !r.__c &&
                        ((r.__ = [
                            n ? n(t) : vo(void 0, t),
                            function (e) {
                                var t = r.__N ? r.__N[0] : r.__[0],
                                    n = r.t(t, e)
                                t !== n && ((r.__N = [n, r.__[1]]), r.__c.setState({}))
                            },
                        ]),
                        (r.__c = ji),
                        !ji.u))
                ) {
                    var i = function (e, t, n) {
                        if (!r.__c.__H) return !0
                        var i = r.__c.__H.__.filter(function (e) {
                            return e.__c
                        })
                        if (
                            i.every(function (e) {
                                return !e.__N
                            })
                        )
                            return !o || o.call(this, e, t, n)
                        var a = !1
                        return (
                            i.forEach(function (e) {
                                if (e.__N) {
                                    var t = e.__[0]
                                    ;(e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (a = !0)
                                }
                            }),
                            !(!a && r.__c.props === e) && (!o || o.call(this, e, t, n))
                        )
                    }
                    ji.u = !0
                    var o = ji.shouldComponentUpdate,
                        a = ji.componentWillUpdate
                    ;(ji.componentWillUpdate = function (e, t, n) {
                        if (this.__e) {
                            var r = o
                            ;(o = void 0), i(e, t, n), (o = r)
                        }
                        a && a.call(this, e, t, n)
                    }),
                        (ji.shouldComponentUpdate = i)
                }
                return r.__N || r.__
            })(vo, e)
        )
    }
    function io(e, t) {
        var n = no(Ui++, 3)
        !jr.__s && ho(n.__H, t) && ((n.__ = e), (n.i = t), ji.__H.__h.push(n))
    }
    function oo(e) {
        return (
            (zi = 5),
            ao(function () {
                return { current: e }
            }, [])
        )
    }
    function ao(e, t) {
        var n = no(Ui++, 7)
        return ho(n.__H, t) ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V) : n.__
    }
    function so(e) {
        var t = ji.context[e.__c],
            n = no(Ui++, 9)
        return (n.c = e), t ? (null == n.__ && ((n.__ = !0), t.sub(ji)), t.props.value) : e.__
    }
    function uo() {
        for (var e; (e = Qi.shift()); )
            if (e.__P && e.__H)
                try {
                    e.__H.__h.forEach(fo), e.__H.__h.forEach(po), (e.__H.__h = [])
                } catch (t) {
                    ;(e.__H.__h = []), jr.__e(t, e.__v)
                }
    }
    ;(jr.__b = function (e) {
        ;(ji = null), Yi && Yi(e)
    }),
        (jr.__r = function (e) {
            Ji && Ji(e), (Ui = 0)
            var t = (ji = e.__c).__H
            t &&
                (Gi === ji
                    ? ((t.__h = []),
                      (ji.__h = []),
                      t.__.forEach(function (e) {
                          e.__N && (e.__ = e.__N), (e.__V = Ki), (e.__N = e.i = void 0)
                      }))
                    : (t.__h.forEach(fo), t.__h.forEach(po), (t.__h = []), (Ui = 0))),
                (Gi = ji)
        }),
        (jr.diffed = function (e) {
            Xi && Xi(e)
            var t = e.__c
            t &&
                t.__H &&
                (t.__H.__h.length &&
                    ((1 !== Qi.push(t) && Zi === jr.requestAnimationFrame) ||
                        ((Zi = jr.requestAnimationFrame) || co)(uo)),
                t.__H.__.forEach(function (e) {
                    e.i && (e.__H = e.i), e.__V !== Ki && (e.__ = e.__V), (e.i = void 0), (e.__V = Ki)
                })),
                (Gi = ji = null)
        }),
        (jr.__c = function (e, t) {
            t.some(function (e) {
                try {
                    e.__h.forEach(fo),
                        (e.__h = e.__h.filter(function (e) {
                            return !e.__ || po(e)
                        }))
                } catch (n) {
                    t.some(function (e) {
                        e.__h && (e.__h = [])
                    }),
                        (t = []),
                        jr.__e(n, e.__v)
                }
            }),
                eo && eo(e, t)
        }),
        (jr.unmount = function (e) {
            to && to(e)
            var t,
                n = e.__c
            n &&
                n.__H &&
                (n.__H.__.forEach(function (e) {
                    try {
                        fo(e)
                    } catch (e) {
                        t = e
                    }
                }),
                (n.__H = void 0),
                t && jr.__e(t, n.__v))
        })
    var lo = 'function' == typeof requestAnimationFrame
    function co(e) {
        var t,
            n = function () {
                clearTimeout(r), lo && cancelAnimationFrame(t), setTimeout(e)
            },
            r = setTimeout(n, 100)
        lo && (t = requestAnimationFrame(n))
    }
    function fo(e) {
        var t = ji,
            n = e.__c
        'function' == typeof n && ((e.__c = void 0), n()), (ji = t)
    }
    function po(e) {
        var t = ji
        ;(e.__c = e.__()), (ji = t)
    }
    function ho(e, t) {
        return (
            !e ||
            e.length !== t.length ||
            t.some(function (t, n) {
                return t !== e[n]
            })
        )
    }
    function vo(e, t) {
        return 'function' == typeof t ? t(e) : t
    }
    var go = 0
    function mo(e, t, n, r, i, o) {
        var a,
            s,
            u = {}
        for (s in t) 'ref' == s ? (a = t[s]) : (u[s] = t[s])
        var l = {
            type: e,
            props: u,
            key: n,
            ref: a,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: --go,
            __i: -1,
            __u: 0,
            __source: i,
            __self: o,
        }
        if ('function' == typeof e && (a = e.defaultProps)) for (s in a) void 0 === u[s] && (u[s] = a[s])
        return jr.vnode && jr.vnode(l), l
    }
    var _o = mo('svg', {
            className: 'emoji-svg',
            xmlns: 'http://www.w3.org/2000/svg',
            height: '48',
            viewBox: '0 -960 960 960',
            width: '48',
            children: mo('path', {
                d: 'M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm146 272q66 0 121.5-35.5T682-393h-52q-23 40-63 61.5T480.5-310q-46.5 0-87-21T331-393h-53q26 61 81 96.5T480-261Zm0 181q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z',
            }),
        }),
        yo = mo('svg', {
            className: 'emoji-svg',
            xmlns: 'http://www.w3.org/2000/svg',
            height: '48',
            viewBox: '0 -960 960 960',
            width: '48',
            children: mo('path', {
                d: 'M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm20 194h253v-49H354v49ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z',
            }),
        }),
        bo = mo('svg', {
            className: 'emoji-svg',
            xmlns: 'http://www.w3.org/2000/svg',
            height: '48',
            viewBox: '0 -960 960 960',
            width: '48',
            children: mo('path', {
                d: 'M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm146.174 116Q413-417 358.5-379.5T278-280h53q22-42 62.173-65t87.5-23Q528-368 567.5-344.5T630-280h52q-25-63-79.826-100-54.826-37-122-37ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z',
            }),
        }),
        ko = mo('svg', {
            className: 'emoji-svg',
            xmlns: 'http://www.w3.org/2000/svg',
            height: '48',
            viewBox: '0 -960 960 960',
            width: '48',
            children: mo('path', {
                d: 'M480-417q-67 0-121.5 37.5T278-280h404q-25-63-80-100t-122-37Zm-183-72 50-45 45 45 31-36-45-45 45-45-31-36-45 45-50-45-31 36 45 45-45 45 31 36Zm272 0 44-45 51 45 31-36-45-45 45-45-31-36-51 45-44-45-31 36 44 45-44 45 31 36ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142 0 241-99t99-241q0-142-99-241t-241-99q-142 0-241 99t-99 241q0 142 99 241t241 99Z',
            }),
        }),
        wo = mo('svg', {
            className: 'emoji-svg',
            xmlns: 'http://www.w3.org/2000/svg',
            height: '48',
            viewBox: '0 -960 960 960',
            width: '48',
            children: mo('path', {
                d: 'M479.504-261Q537-261 585.5-287q48.5-26 78.5-72.4 6-11.6-.75-22.6-6.75-11-20.25-11H316.918Q303-393 296.5-382t-.5 22.6q30 46.4 78.5 72.4 48.5 26 105.004 26ZM347-578l27 27q7.636 8 17.818 8Q402-543 410-551q8-8 8-18t-8-18l-42-42q-8.8-9-20.9-9-12.1 0-21.1 9l-42 42q-8 7.636-8 17.818Q276-559 284-551q8 8 18 8t18-8l27-27Zm267 0 27 27q7.714 8 18 8t18-8q8-7.636 8-17.818Q685-579 677-587l-42-42q-8.8-9-20.9-9-12.1 0-21.1 9l-42 42q-8 7.714-8 18t8 18q7.636 8 17.818 8Q579-543 587-551l27-27ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z',
            }),
        }),
        Co = mo('svg', {
            width: '12',
            height: '12',
            viewBox: '0 0 12 12',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: mo('path', {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M0.164752 0.164752C0.384422 -0.0549175 0.740578 -0.0549175 0.960248 0.164752L6 5.20451L11.0398 0.164752C11.2594 -0.0549175 11.6156 -0.0549175 11.8352 0.164752C12.0549 0.384422 12.0549 0.740578 11.8352 0.960248L6.79549 6L11.8352 11.0398C12.0549 11.2594 12.0549 11.6156 11.8352 11.8352C11.6156 12.0549 11.2594 12.0549 11.0398 11.8352L6 6.79549L0.960248 11.8352C0.740578 12.0549 0.384422 12.0549 0.164752 11.8352C-0.0549175 11.6156 -0.0549175 11.2594 0.164752 11.0398L5.20451 6L0.164752 0.960248C-0.0549175 0.740578 -0.0549175 0.384422 0.164752 0.164752Z',
                fill: 'black',
            }),
        }),
        Io = mo('svg', {
            width: '77',
            height: '14',
            viewBox: '0 0 77 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
                mo('g', {
                    'clip-path': 'url(#clip0_2415_6911)',
                    children: [
                        mo('mask', {
                            id: 'mask0_2415_6911',
                            style: { maskType: 'luminance' },
                            maskUnits: 'userSpaceOnUse',
                            x: '0',
                            y: '0',
                            width: '77',
                            height: '14',
                            children: mo('path', { d: 'M0.5 0H76.5V14H0.5V0Z', fill: 'white' }),
                        }),
                        mo('g', {
                            mask: 'url(#mask0_2415_6911)',
                            children: [
                                mo('path', {
                                    d: 'M5.77226 8.02931C5.59388 8.37329 5.08474 8.37329 4.90634 8.02931L4.4797 7.20672C4.41155 7.07535 4.41155 6.9207 4.4797 6.78933L4.90634 5.96669C5.08474 5.62276 5.59388 5.62276 5.77226 5.96669L6.19893 6.78933C6.26709 6.9207 6.26709 7.07535 6.19893 7.20672L5.77226 8.02931ZM5.77226 12.6946C5.59388 13.0386 5.08474 13.0386 4.90634 12.6946L4.4797 11.872C4.41155 11.7406 4.41155 11.586 4.4797 11.4546L4.90634 10.632C5.08474 10.288 5.59388 10.288 5.77226 10.632L6.19893 11.4546C6.26709 11.586 6.26709 11.7406 6.19893 11.872L5.77226 12.6946Z',
                                    fill: '#1D4AFF',
                                }),
                                mo('path', {
                                    d: 'M0.5 10.9238C0.5 10.508 1.02142 10.2998 1.32637 10.5938L3.54508 12.7327C3.85003 13.0267 3.63405 13.5294 3.20279 13.5294H0.984076C0.716728 13.5294 0.5 13.3205 0.5 13.0627V10.9238ZM0.5 8.67083C0.5 8.79459 0.551001 8.91331 0.641783 9.00081L5.19753 13.3927C5.28831 13.4802 5.41144 13.5294 5.53982 13.5294H8.0421C8.47337 13.5294 8.68936 13.0267 8.3844 12.7327L1.32637 5.92856C1.02142 5.63456 0.5 5.84278 0.5 6.25854V8.67083ZM0.5 4.00556C0.5 4.12932 0.551001 4.24802 0.641783 4.33554L10.0368 13.3927C10.1276 13.4802 10.2508 13.5294 10.3791 13.5294H12.8814C13.3127 13.5294 13.5287 13.0267 13.2237 12.7327L1.32637 1.26329C1.02142 0.969312 0.5 1.17752 0.5 1.59327V4.00556ZM5.33931 4.00556C5.33931 4.12932 5.39033 4.24802 5.4811 4.33554L14.1916 12.7327C14.4965 13.0267 15.0179 12.8185 15.0179 12.4028V9.99047C15.0179 9.86671 14.9669 9.74799 14.8762 9.66049L6.16568 1.26329C5.86071 0.969307 5.33931 1.17752 5.33931 1.59327V4.00556ZM11.005 1.26329C10.7 0.969307 10.1786 1.17752 10.1786 1.59327V4.00556C10.1786 4.12932 10.2296 4.24802 10.3204 4.33554L14.1916 8.06748C14.4965 8.36148 15.0179 8.15325 15.0179 7.7375V5.3252C15.0179 5.20144 14.9669 5.08272 14.8762 4.99522L11.005 1.26329Z',
                                    fill: '#F9BD2B',
                                }),
                                mo('path', {
                                    d: 'M21.0852 10.981L16.5288 6.58843C16.2238 6.29443 15.7024 6.50266 15.7024 6.91841V13.0627C15.7024 13.3205 15.9191 13.5294 16.1865 13.5294H23.2446C23.5119 13.5294 23.7287 13.3205 23.7287 13.0627V12.5032C23.7287 12.2455 23.511 12.0396 23.2459 12.0063C22.4323 11.9042 21.6713 11.546 21.0852 10.981ZM18.0252 12.0365C17.5978 12.0365 17.251 11.7021 17.251 11.2901C17.251 10.878 17.5978 10.5436 18.0252 10.5436C18.4527 10.5436 18.7996 10.878 18.7996 11.2901C18.7996 11.7021 18.4527 12.0365 18.0252 12.0365Z',
                                    fill: 'currentColor',
                                }),
                                mo('path', {
                                    d: 'M0.5 13.0627C0.5 13.3205 0.716728 13.5294 0.984076 13.5294H3.20279C3.63405 13.5294 3.85003 13.0267 3.54508 12.7327L1.32637 10.5938C1.02142 10.2998 0.5 10.508 0.5 10.9238V13.0627ZM5.33931 5.13191L1.32637 1.26329C1.02142 0.969306 0.5 1.17752 0.5 1.59327V4.00556C0.5 4.12932 0.551001 4.24802 0.641783 4.33554L5.33931 8.86412V5.13191ZM1.32637 5.92855C1.02142 5.63455 0.5 5.84278 0.5 6.25853V8.67083C0.5 8.79459 0.551001 8.91331 0.641783 9.00081L5.33931 13.5294V9.79717L1.32637 5.92855Z',
                                    fill: '#1D4AFF',
                                }),
                                mo('path', {
                                    d: 'M10.1787 5.3252C10.1787 5.20144 10.1277 5.08272 10.0369 4.99522L6.16572 1.26329C5.8608 0.969306 5.33936 1.17752 5.33936 1.59327V4.00556C5.33936 4.12932 5.39037 4.24802 5.48114 4.33554L10.1787 8.86412V5.3252ZM5.33936 13.5294H8.04214C8.47341 13.5294 8.6894 13.0267 8.38443 12.7327L5.33936 9.79717V13.5294ZM5.33936 5.13191V8.67083C5.33936 8.79459 5.39037 8.91331 5.48114 9.00081L10.1787 13.5294V9.99047C10.1787 9.86671 10.1277 9.74803 10.0369 9.66049L5.33936 5.13191Z',
                                    fill: '#F54E00',
                                }),
                                mo('path', {
                                    d: 'M29.375 11.6667H31.3636V8.48772H33.0249C34.8499 8.48772 36.0204 7.4443 36.0204 5.83052C36.0204 4.21681 34.8499 3.17334 33.0249 3.17334H29.375V11.6667ZM31.3636 6.84972V4.81136H32.8236C33.5787 4.81136 34.0318 5.19958 34.0318 5.83052C34.0318 6.4615 33.5787 6.84972 32.8236 6.84972H31.3636ZM39.618 11.7637C41.5563 11.7637 42.9659 10.429 42.9659 8.60905C42.9659 6.78905 41.5563 5.45438 39.618 5.45438C37.6546 5.45438 36.2701 6.78905 36.2701 8.60905C36.2701 10.429 37.6546 11.7637 39.618 11.7637ZM38.1077 8.60905C38.1077 7.63838 38.7118 6.97105 39.618 6.97105C40.5116 6.97105 41.1157 7.63838 41.1157 8.60905C41.1157 9.57972 40.5116 10.2471 39.618 10.2471C38.7118 10.2471 38.1077 9.57972 38.1077 8.60905ZM46.1482 11.7637C47.6333 11.7637 48.6402 10.8658 48.6402 9.81025C48.6402 7.33505 45.2294 8.13585 45.2294 7.16518C45.2294 6.8983 45.5189 6.72843 45.9342 6.72843C46.3622 6.72843 46.8782 6.98318 47.0418 7.54132L48.527 6.94678C48.2375 6.06105 47.1677 5.45438 45.8713 5.45438C44.4743 5.45438 43.6058 6.25518 43.6058 7.21372C43.6058 9.53118 46.9663 8.88812 46.9663 9.84665C46.9663 10.1864 46.6391 10.417 46.1482 10.417C45.4434 10.417 44.9525 9.94376 44.8015 9.3735L43.3164 9.93158C43.6436 10.8537 44.6001 11.7637 46.1482 11.7637ZM53.4241 11.606L53.2982 10.0651C53.0843 10.1743 52.8074 10.2106 52.5808 10.2106C52.1278 10.2106 51.8257 9.89523 51.8257 9.34918V7.03172H53.3612V5.55145H51.8257V3.78001H49.9755V5.55145H48.9687V7.03172H49.9755V9.57972C49.9755 11.06 51.0202 11.7637 52.3921 11.7637C52.7696 11.7637 53.122 11.7031 53.4241 11.606ZM59.8749 3.17334V6.47358H56.376V3.17334H54.3874V11.6667H56.376V8.11158H59.8749V11.6667H61.8761V3.17334H59.8749ZM66.2899 11.7637C68.2281 11.7637 69.6378 10.429 69.6378 8.60905C69.6378 6.78905 68.2281 5.45438 66.2899 5.45438C64.3265 5.45438 62.942 6.78905 62.942 8.60905C62.942 10.429 64.3265 11.7637 66.2899 11.7637ZM64.7796 8.60905C64.7796 7.63838 65.3837 6.97105 66.2899 6.97105C67.1835 6.97105 67.7876 7.63838 67.7876 8.60905C67.7876 9.57972 67.1835 10.2471 66.2899 10.2471C65.3837 10.2471 64.7796 9.57972 64.7796 8.60905ZM73.2088 11.4725C73.901 11.4725 74.5177 11.242 74.845 10.8416V11.424C74.845 12.1034 74.2786 12.5767 73.4102 12.5767C72.7935 12.5767 72.2523 12.2854 72.1642 11.788L70.4776 12.0428C70.7042 13.1955 71.925 13.972 73.4102 13.972C75.361 13.972 76.6574 12.8679 76.6574 11.2298V5.55145H74.8324V6.07318C74.4926 5.69705 73.9136 5.45438 73.171 5.45438C71.409 5.45438 70.3014 6.61918 70.3014 8.46345C70.3014 10.3077 71.409 11.4725 73.2088 11.4725ZM72.1012 8.46345C72.1012 7.55345 72.655 6.97105 73.5109 6.97105C74.3793 6.97105 74.9331 7.55345 74.9331 8.46345C74.9331 9.37345 74.3793 9.95585 73.5109 9.95585C72.655 9.95585 72.1012 9.37345 72.1012 8.46345Z',
                                    fill: 'currentColor',
                                }),
                            ],
                        }),
                    ],
                }),
                mo('defs', {
                    children: mo('clipPath', {
                        id: 'clip0_2415_6911',
                        children: mo('rect', { width: '76', height: '14', fill: 'white', transform: 'translate(0.5)' }),
                    }),
                }),
            ],
        }),
        So = mo('svg', {
            width: '16',
            height: '12',
            viewBox: '0 0 16 12',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: mo('path', {
                d: 'M5.30769 10.6923L4.77736 11.2226C4.91801 11.3633 5.10878 11.4423 5.30769 11.4423C5.5066 11.4423 5.69737 11.3633 5.83802 11.2226L5.30769 10.6923ZM15.5303 1.53033C15.8232 1.23744 15.8232 0.762563 15.5303 0.46967C15.2374 0.176777 14.7626 0.176777 14.4697 0.46967L15.5303 1.53033ZM1.53033 5.85429C1.23744 5.56139 0.762563 5.56139 0.46967 5.85429C0.176777 6.14718 0.176777 6.62205 0.46967 6.91495L1.53033 5.85429ZM5.83802 11.2226L15.5303 1.53033L14.4697 0.46967L4.77736 10.162L5.83802 11.2226ZM0.46967 6.91495L4.77736 11.2226L5.83802 10.162L1.53033 5.85429L0.46967 6.91495Z',
                fill: 'currentColor',
            }),
        })
    function xo() {
        return mo('a', {
            href: 'https://posthog.com',
            target: '_blank',
            rel: 'noopener',
            className: 'footer-branding',
            children: ['Survey by ', Io],
        })
    }
    function Eo(e) {
        var t = e.text,
            n = e.submitDisabled,
            r = e.appearance,
            i = e.onSubmit,
            o = e.link,
            a = so($i),
            s = a.isPreviewMode,
            u = a.isPopup,
            l = r.submitButtonTextColor || Mi(r.submitButtonColor || Ri.submitButtonColor)
        return mo('div', {
            className: 'bottom-section',
            children: [
                mo('div', {
                    className: 'buttons',
                    children: mo('button', {
                        className: 'form-submit',
                        disabled: n && !s,
                        type: 'button',
                        style: u ? { color: l } : {},
                        onClick: function () {
                            s || (o && (null == en || en.open(o)), i())
                        },
                        children: t,
                    }),
                }),
                !r.whiteLabel && mo(xo, {}),
            ],
        })
    }
    function To(e) {
        var t = e.question,
            n = e.description,
            r = e.descriptionContentType,
            i = e.backgroundColor,
            o = e.forceDisableHtml
        return mo('div', {
            style: so($i).isPopup ? { backgroundColor: i || Ri.backgroundColor } : {},
            children: [
                mo('div', { className: 'survey-question', children: t }),
                n &&
                    Wi({
                        component: ii('div', { className: 'survey-question-description' }),
                        children: n,
                        renderAsHtml: !o && 'text' !== r,
                    }),
            ],
        })
    }
    function Ao(e) {
        return mo('div', {
            className: 'cancel-btn-wrapper',
            children: mo('button', {
                className: 'form-cancel',
                onClick: e.onClick,
                disabled: so($i).isPreviewMode,
                children: Co,
            }),
        })
    }
    function Mo(e) {
        var n = e.header,
            r = e.description,
            i = e.contentType,
            o = e.forceDisableHtml,
            a = e.appearance,
            s = e.onClose,
            u = e.styleOverrides,
            l = Mi(a.backgroundColor || Ri.backgroundColor),
            c = so($i).isPopup
        return mo(ai, {
            children: mo('div', {
                className: 'thank-you-message',
                style: t({}, u),
                children: mo('div', {
                    className: 'thank-you-message-container',
                    children: [
                        c &&
                            mo(Ao, {
                                onClick: function () {
                                    return s()
                                },
                            }),
                        mo('h3', { className: 'thank-you-message-header', style: { color: l }, children: n }),
                        r &&
                            Wi({
                                component: ii('div', { className: 'thank-you-message-body' }),
                                children: r,
                                renderAsHtml: !o && 'text' !== i,
                                style: { color: l },
                            }),
                        c &&
                            mo(Eo, {
                                text: a.thankYouMessageCloseButtonText || 'Close',
                                submitDisabled: !1,
                                appearance: a,
                                onSubmit: function () {
                                    return s()
                                },
                            }),
                    ],
                }),
            }),
        })
    }
    function Ro(e) {
        var t,
            n = oo(null),
            r = d(ro(null !== (t = e.defaultTextColor) && void 0 !== t ? t : 'black'), 2),
            i = r[0],
            o = r[1]
        return (
            io(
                function () {
                    if (n.current) {
                        var e = (function (e) {
                            var t = xi.getComputedStyle(e).backgroundColor
                            if ('rgba(0, 0, 0, 0)' === t) return 'black'
                            var n = t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)
                            if (!n) return 'black'
                            var r = parseInt(n[1]),
                                i = parseInt(n[2]),
                                o = parseInt(n[3])
                            return Math.sqrt(r * r * 0.299 + i * i * 0.587 + o * o * 0.114) > 127.5 ? 'black' : 'white'
                        })(n.current)
                        o(e)
                    }
                },
                [e.appearance, e.forceUpdate]
            ),
            { ref: n, textColor: i }
        )
    }
    function Fo(e) {
        var t = e.question,
            n = e.forceDisableHtml,
            r = e.appearance,
            i = e.onSubmit,
            o = oo(null),
            a = d(ro(''), 2),
            s = a[0],
            u = a[1]
        return mo('div', {
            ref: o,
            children: [
                mo(To, {
                    question: t.question,
                    description: t.description,
                    descriptionContentType: t.descriptionContentType,
                    backgroundColor: r.backgroundColor,
                    forceDisableHtml: n,
                }),
                mo('textarea', {
                    rows: 4,
                    placeholder: null == r ? void 0 : r.placeholder,
                    onInput: function (e) {
                        return u(e.currentTarget.value)
                    },
                }),
                mo(Eo, {
                    text: t.buttonText || 'Submit',
                    submitDisabled: !s && !t.optional,
                    appearance: r,
                    onSubmit: function () {
                        return i(s)
                    },
                }),
            ],
        })
    }
    function Oo(e) {
        var t = e.question,
            n = e.forceDisableHtml,
            r = e.appearance,
            i = e.onSubmit
        return mo(ai, {
            children: [
                mo(To, {
                    question: t.question,
                    description: t.description,
                    descriptionContentType: t.descriptionContentType,
                    forceDisableHtml: n,
                }),
                mo(Eo, {
                    text: t.buttonText || 'Submit',
                    submitDisabled: !1,
                    link: t.link,
                    appearance: r,
                    onSubmit: function () {
                        return i('link clicked')
                    },
                }),
            ],
        })
    }
    function No(e) {
        var t = e.question,
            n = e.forceDisableHtml,
            r = e.displayQuestionIndex,
            i = e.appearance,
            o = e.onSubmit,
            a = t.scale,
            s = 10 === t.scale ? 0 : 1,
            u = d(ro(null), 2),
            l = u[0],
            c = u[1]
        return mo(ai, {
            children: [
                mo(To, {
                    question: t.question,
                    description: t.description,
                    descriptionContentType: t.descriptionContentType,
                    forceDisableHtml: n,
                    backgroundColor: i.backgroundColor,
                }),
                mo('div', {
                    className: 'rating-section',
                    children: [
                        mo('div', {
                            className: 'rating-options',
                            children: [
                                'emoji' === t.display &&
                                    mo('div', {
                                        className: 'rating-options-emoji',
                                        children: (3 === t.scale ? Do : qo).map(function (e, t) {
                                            var n = t + 1 === l
                                            return mo(
                                                'button',
                                                {
                                                    className: 'ratings-emoji question-'
                                                        .concat(r, '-rating-')
                                                        .concat(t, ' ')
                                                        .concat(n ? 'rating-active' : null),
                                                    value: t + 1,
                                                    type: 'button',
                                                    onClick: function () {
                                                        c(t + 1)
                                                    },
                                                    style: {
                                                        fill: n ? i.ratingButtonActiveColor : i.ratingButtonColor,
                                                        borderColor: i.borderColor,
                                                    },
                                                    children: e,
                                                },
                                                t
                                            )
                                        }),
                                    }),
                                'number' === t.display &&
                                    mo('div', {
                                        className: 'rating-options-number',
                                        style: {
                                            gridTemplateColumns: 'repeat('.concat(a - s + 1, ', minmax(0, 1fr))'),
                                        },
                                        children: Wo(t.scale).map(function (e, t) {
                                            return mo(
                                                Lo,
                                                {
                                                    displayQuestionIndex: r,
                                                    active: l === e,
                                                    appearance: i,
                                                    num: e,
                                                    setActiveNumber: function (e) {
                                                        c(e)
                                                    },
                                                },
                                                t
                                            )
                                        }),
                                    }),
                            ],
                        }),
                        mo('div', {
                            className: 'rating-text',
                            children: [
                                mo('div', { children: t.lowerBoundLabel }),
                                mo('div', { children: t.upperBoundLabel }),
                            ],
                        }),
                    ],
                }),
                mo(Eo, {
                    text: t.buttonText || (null == i ? void 0 : i.submitButtonText) || 'Submit',
                    submitDisabled: Zt(l) && !t.optional,
                    appearance: i,
                    onSubmit: function () {
                        return o(l)
                    },
                }),
            ],
        })
    }
    function Lo(e) {
        var t = e.num,
            n = e.active,
            r = e.displayQuestionIndex,
            i = e.appearance,
            o = e.setActiveNumber,
            a = Ro({ appearance: i, defaultTextColor: 'black', forceUpdate: n }),
            s = a.textColor
        return mo('button', {
            ref: a.ref,
            className: 'ratings-number question-'
                .concat(r, '-rating-')
                .concat(t, ' ')
                .concat(n ? 'rating-active' : null),
            type: 'button',
            onClick: function () {
                o(t)
            },
            style: {
                color: s,
                backgroundColor: n ? i.ratingButtonActiveColor : i.ratingButtonColor,
                borderColor: i.borderColor,
            },
            children: t,
        })
    }
    function Po(e) {
        var t = e.question,
            n = e.forceDisableHtml,
            r = e.displayQuestionIndex,
            i = e.appearance,
            o = e.onSubmit,
            a = oo(null),
            s = ao(
                function () {
                    return (function (e) {
                        if (!e.shuffleOptions) return e.choices
                        var t = e.choices,
                            n = ''
                        e.hasOpenChoice && (n = t.pop())
                        var r = Pi(t, Li(t))
                        return e.hasOpenChoice && (e.choices.push(n), r.push(n)), r
                    })(t)
                },
                [t]
            ),
            u = d(ro(t.type === Wr.MultipleChoice ? [] : null), 2),
            l = u[0],
            c = u[1],
            p = d(ro(!1), 2),
            h = p[0],
            v = p[1],
            g = d(ro(''), 2),
            m = g[0],
            _ = g[1],
            y = t.type === Wr.SingleChoice ? 'radio' : 'checkbox'
        return mo('div', {
            ref: a,
            children: [
                mo(To, {
                    question: t.question,
                    description: t.description,
                    descriptionContentType: t.descriptionContentType,
                    forceDisableHtml: n,
                    backgroundColor: i.backgroundColor,
                }),
                mo('div', {
                    className: 'multiple-choice-options',
                    children: s.map(function (e, n) {
                        var i = 'choice-option',
                            o = e,
                            a = e
                        return (
                            t.hasOpenChoice && n === t.choices.length - 1 && (i += ' choice-option-open'),
                            mo('div', {
                                className: i,
                                children: [
                                    mo('input', {
                                        type: y,
                                        id: 'surveyQuestion'.concat(r, 'Choice').concat(n),
                                        name: 'question'.concat(r),
                                        value: o,
                                        disabled: !o,
                                        onInput: function () {
                                            return t.hasOpenChoice && n === t.choices.length - 1
                                                ? v(!h)
                                                : t.type === Wr.SingleChoice
                                                ? c(o)
                                                : t.type === Wr.MultipleChoice && Ht(l)
                                                ? l.includes(o)
                                                    ? c(
                                                          l.filter(function (e) {
                                                              return e !== o
                                                          })
                                                      )
                                                    : c([].concat(f(l), [o]))
                                                : void 0
                                        },
                                    }),
                                    mo('label', {
                                        htmlFor: 'surveyQuestion'.concat(r, 'Choice').concat(n),
                                        style: { color: 'black' },
                                        children:
                                            t.hasOpenChoice && n === t.choices.length - 1
                                                ? mo(ai, {
                                                      children: [
                                                          mo('span', { children: [a, ':'] }),
                                                          mo('input', {
                                                              type: 'text',
                                                              id: 'surveyQuestion'
                                                                  .concat(r, 'Choice')
                                                                  .concat(n, 'Open'),
                                                              name: 'question'.concat(r),
                                                              onInput: function (e) {
                                                                  var n = e.currentTarget.value
                                                                  return t.type === Wr.SingleChoice
                                                                      ? c(n)
                                                                      : t.type === Wr.MultipleChoice && Ht(l)
                                                                      ? _(n)
                                                                      : void 0
                                                              },
                                                          }),
                                                      ],
                                                  })
                                                : a,
                                    }),
                                    mo('span', { className: 'choice-check', style: { color: 'black' }, children: So }),
                                ],
                            })
                        )
                    }),
                }),
                mo(Eo, {
                    text: t.buttonText || 'Submit',
                    submitDisabled:
                        (Zt(l) ||
                            (Ht(l) && !h && 0 === l.length) ||
                            (Ht(l) && h && !m && 0 === l.length && !t.optional)) &&
                        !t.optional,
                    appearance: i,
                    onSubmit: function () {
                        h && t.type === Wr.MultipleChoice ? Ht(l) && o([].concat(f(l), [m])) : o(l)
                    },
                }),
            ],
        })
    }
    var Do = [bo, yo, _o],
        qo = [ko, bo, yo, _o, wo],
        Bo = [1, 2, 3, 4, 5],
        Ho = [1, 2, 3, 4, 5, 6, 7],
        $o = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    function Wo(e) {
        switch (e) {
            case 5:
            default:
                return Bo
            case 7:
                return Ho
            case 10:
                return $o
        }
    }
    var Vo = en,
        Uo = sn,
        jo = (function () {
            function e(t) {
                var n = this
                a(this, e),
                    l(this, 'canShowNextEventBasedSurvey', function () {
                        var e,
                            t = Uo.querySelectorAll('div[class^=PostHogSurvey]')
                        return (
                            !(t.length > 0) ||
                            1 ===
                                (null === (e = t[t.length - 1].shadowRoot) || void 0 === e
                                    ? void 0
                                    : e.childElementCount)
                        )
                    }),
                    l(this, 'handlePopoverSurvey', function (e) {
                        var t,
                            r = null === (t = e.conditions) || void 0 === t ? void 0 : t.seenSurveyWaitPeriodInDays,
                            i = localStorage.getItem('lastSeenSurveyDate')
                        if (r && i) {
                            var o = new Date(),
                                a = Math.abs(o.getTime() - new Date(i).getTime())
                            if (Math.ceil(a / 864e5) < r) return
                        }
                        var s = (function (e) {
                            return !!localStorage.getItem(Bi(e)) && !qi(e)
                        })(e)
                        if (!s) {
                            n.addSurveyToFocus(e.id)
                            var u = (function (e, t, n) {
                                var r = Ei.createElement('div')
                                r.className = 'PostHogSurvey'.concat(t)
                                var i = r.attachShadow({ mode: 'open' })
                                if (e) {
                                    var o = Object.assign(Ei.createElement('style'), { innerText: e })
                                    i.appendChild(o)
                                }
                                return (n || Ei.body).appendChild(r), i
                            })(Ti(null == e ? void 0 : e.appearance), e.id)
                            Ii(
                                mo(
                                    Go,
                                    {
                                        posthog: n.posthog,
                                        survey: e,
                                        removeSurveyFromFocus: n.removeSurveyFromFocus,
                                        isPopup: !0,
                                    },
                                    'popover-survey'
                                ),
                                u
                            )
                        }
                    }),
                    l(this, 'handleWidget', function (e) {
                        var t = (function (e) {
                                var t,
                                    n = Vi.createElement('div')
                                n.className = 'PostHogWidget'.concat(e.id)
                                var r,
                                    i = n.attachShadow({ mode: 'open' }),
                                    o =
                                        ((r = null === (t = e.appearance) || void 0 === t ? void 0 : t.widgetColor),
                                        '\n        .ph-survey-widget-tab {\n            position: fixed;\n            top: 50%;\n            right: 0;\n            background: '.concat(
                                            r || '#e0a045',
                                            ';\n            color: white;\n            transform: rotate(-90deg) translate(0, -100%);\n            transform-origin: right top;\n            min-width: 40px;\n            padding: 8px 12px;\n            font-weight: 500;\n            border-radius: 3px 3px 0 0;\n            text-align: center;\n            cursor: pointer;\n            z-index: 9999999;\n        }\n        .ph-survey-widget-tab:hover {\n            padding-bottom: 13px;\n        }\n        .ph-survey-widget-button {\n            position: fixed;\n        }\n    '
                                        ))
                                return (
                                    i.append(Object.assign(Vi.createElement('style'), { innerText: o })),
                                    Vi.body.appendChild(n),
                                    i
                                )
                            })(e),
                            r = Ti(e.appearance)
                        t.appendChild(Object.assign(Uo.createElement('style'), { innerText: r })),
                            Ii(
                                mo(
                                    zo,
                                    { posthog: n.posthog, survey: e, removeSurveyFromFocus: n.removeSurveyFromFocus },
                                    'feedback-survey'
                                ),
                                t
                            )
                    }),
                    l(this, 'handleWidgetSelector', function (e) {
                        var t,
                            r =
                                (null === (t = e.appearance) || void 0 === t ? void 0 : t.widgetSelector) &&
                                Uo.querySelector(e.appearance.widgetSelector)
                        if (r)
                            if (0 === Uo.querySelectorAll('.PostHogWidget'.concat(e.id)).length) n.handleWidget(e)
                            else if (
                                1 === Uo.querySelectorAll('.PostHogWidget'.concat(e.id)).length &&
                                !r.getAttribute('PHWidgetSurveyClickListener')
                            ) {
                                var i,
                                    o,
                                    a =
                                        null === (i = Uo.querySelector('.PostHogWidget'.concat(e.id))) ||
                                        void 0 === i ||
                                        null === (o = i.shadowRoot) ||
                                        void 0 === o
                                            ? void 0
                                            : o.querySelector('.survey-form')
                                r.addEventListener('click', function () {
                                    a &&
                                        ((a.style.display = 'none' === a.style.display ? 'block' : 'none'),
                                        a.addEventListener('PHSurveyClosed', function () {
                                            n.removeSurveyFromFocus(e.id), (a.style.display = 'none')
                                        }))
                                }),
                                    r.setAttribute('PHWidgetSurveyClickListener', 'true')
                            }
                    }),
                    l(this, 'canRenderSurvey', function (e) {
                        var t = { visible: !1 }
                        return e.end_date
                            ? ((t.disabledReason = 'survey was completed on '.concat(e.end_date)), t)
                            : e.type != $r.Popover
                            ? ((t.disabledReason = 'Only Popover survey types can be rendered'), t)
                            : !e.linked_flag_key || n.posthog.featureFlags.isFeatureEnabled(e.linked_flag_key)
                            ? !e.targeting_flag_key || n.posthog.featureFlags.isFeatureEnabled(e.targeting_flag_key)
                                ? !e.internal_targeting_flag_key ||
                                  n.posthog.featureFlags.isFeatureEnabled(e.internal_targeting_flag_key)
                                    ? ((t.visible = !0), t)
                                    : ((t.disabledReason = 'internal targeting feature flag '.concat(
                                          e.internal_targeting_flag_key,
                                          ' is false'
                                      )),
                                      t)
                                : ((t.disabledReason = 'targeting feature flag '.concat(
                                      e.targeting_flag_key,
                                      ' is false'
                                  )),
                                  t)
                            : ((t.disabledReason = 'linked feature flag '.concat(e.linked_flag_key, ' is false')), t)
                    }),
                    l(this, 'renderSurvey', function (e, t) {
                        Ii(
                            mo(
                                Go,
                                {
                                    posthog: n.posthog,
                                    survey: e,
                                    removeSurveyFromFocus: n.removeSurveyFromFocus,
                                    isPopup: !1,
                                },
                                'popover-survey'
                            ),
                            t
                        )
                    }),
                    l(this, 'callSurveysAndEvaluateDisplayLogic', function () {
                        var e,
                            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                        null === (e = n.posthog) ||
                            void 0 === e ||
                            e.getActiveMatchingSurveys(function (e) {
                                var t = e.filter(function (e) {
                                    return 'api' !== e.type
                                })
                                n.sortSurveysByAppearanceDelay(t).forEach(function (e) {
                                    if (Zt(n.surveyInFocus)) {
                                        var t, r, i
                                        if (e.type === $r.Widget)
                                            'tab' ===
                                                (null === (t = e.appearance) || void 0 === t ? void 0 : t.widgetType) &&
                                                0 === Uo.querySelectorAll('.PostHogWidget'.concat(e.id)).length &&
                                                n.handleWidget(e),
                                                'selector' ===
                                                    (null === (r = e.appearance) || void 0 === r
                                                        ? void 0
                                                        : r.widgetType) &&
                                                    null !== (i = e.appearance) &&
                                                    void 0 !== i &&
                                                    i.widgetSelector &&
                                                    n.handleWidgetSelector(e)
                                        e.type === $r.Popover &&
                                            n.canShowNextEventBasedSurvey() &&
                                            n.handlePopoverSurvey(e)
                                    }
                                })
                            }, t)
                    }),
                    l(this, 'addSurveyToFocus', function (e) {
                        Zt(n.surveyInFocus) ||
                            vn.error(
                                'Survey '
                                    .concat(f(n.surveyInFocus), ' already in focus. Cannot add survey ')
                                    .concat(e, '.')
                            ),
                            (n.surveyInFocus = e)
                    }),
                    l(this, 'removeSurveyFromFocus', function (e) {
                        n.surveyInFocus !== e &&
                            vn.error('Survey '.concat(e, ' is not in focus. Cannot remove survey ').concat(e, '.')),
                            (n.surveyInFocus = null)
                    }),
                    (this.posthog = t),
                    (this.surveyInFocus = null)
            }
            return (
                u(e, [
                    {
                        key: 'sortSurveysByAppearanceDelay',
                        value: function (e) {
                            return e.sort(function (e, t) {
                                var n, r
                                return (
                                    ((null === (n = e.appearance) || void 0 === n
                                        ? void 0
                                        : n.surveyPopupDelaySeconds) || 0) -
                                    ((null === (r = t.appearance) || void 0 === r
                                        ? void 0
                                        : r.surveyPopupDelaySeconds) || 0)
                                )
                            })
                        },
                    },
                    {
                        key: 'getTestAPI',
                        value: function () {
                            return {
                                addSurveyToFocus: this.addSurveyToFocus,
                                removeSurveyFromFocus: this.removeSurveyFromFocus,
                                surveyInFocus: this.surveyInFocus,
                                canShowNextEventBasedSurvey: this.canShowNextEventBasedSurvey,
                                handleWidget: this.handleWidget,
                                handlePopoverSurvey: this.handlePopoverSurvey,
                                handleWidgetSelector: this.handleWidgetSelector,
                                sortSurveysByAppearanceDelay: this.sortSurveysByAppearanceDelay,
                            }
                        },
                    },
                ]),
                e
            )
        })()
    function Go(e) {
        var n,
            r,
            i,
            o,
            a,
            s,
            u = e.survey,
            l = e.forceDisableHtml,
            c = e.posthog,
            f = e.style,
            p = e.previewPageIndex,
            h = e.removeSurveyFromFocus,
            v = e.isPopup,
            g = Number.isInteger(p),
            m =
                null !== (n = u.appearance) && void 0 !== n && n.surveyPopupDelaySeconds
                    ? 1e3 * u.appearance.surveyPopupDelaySeconds
                    : 0,
            _ = (function (e, t, n, r, i) {
                var o = d(ro(r || 0 === n), 2),
                    a = o[0],
                    s = o[1],
                    u = d(ro(!1), 2),
                    l = u[0],
                    c = u[1]
                return (
                    io(function () {
                        if (!r && t) {
                            var o,
                                a = function () {
                                    i(e.id), s(!1)
                                },
                                u = function () {
                                    var t, n
                                    null !== (t = e.appearance) && void 0 !== t && t.displayThankYouMessage
                                        ? (c(!0),
                                          i(e.id),
                                          null !== (n = e.appearance) &&
                                              void 0 !== n &&
                                              n.autoDisappear &&
                                              setTimeout(function () {
                                                  s(!1)
                                              }, 5e3))
                                        : (i(e.id), s(!1))
                                },
                                l = function () {
                                    var n
                                    s(!0),
                                        Vo.dispatchEvent(new Event('PHSurveyShown')),
                                        t.capture('survey shown', {
                                            $survey_name: e.name,
                                            $survey_id: e.id,
                                            $survey_iteration: e.current_iteration,
                                            $survey_iteration_start_date: e.current_iteration_start_date,
                                            sessionRecordingUrl:
                                                null === (n = t.get_session_replay_url) || void 0 === n
                                                    ? void 0
                                                    : n.call(t),
                                        }),
                                        localStorage.setItem('lastSeenSurveyDate', new Date().toISOString())
                                }
                            return (
                                Vo.addEventListener('PHSurveyClosed', a),
                                Vo.addEventListener('PHSurveySent', u),
                                n > 0
                                    ? ((o = setTimeout(function () {
                                          l()
                                      }, n)),
                                      function () {
                                          clearTimeout(o),
                                              Vo.removeEventListener('PHSurveyClosed', a),
                                              Vo.removeEventListener('PHSurveySent', u)
                                      })
                                    : (l(),
                                      function () {
                                          Vo.removeEventListener('PHSurveyClosed', a),
                                              Vo.removeEventListener('PHSurveySent', u)
                                      })
                            )
                        }
                    }, []),
                    { isPopupVisible: a, isSurveySent: l, setIsPopupVisible: s }
                )
            })(u, c, m, g, h),
            y = _.isPopupVisible,
            b = _.isSurveySent,
            k = _.setIsPopupVisible,
            w = b || p === u.questions.length,
            C =
                null !== (r = f) && void 0 !== r && r.left && Qt(null === (i = f) || void 0 === i ? void 0 : i.left)
                    ? { left: f.left - 40 }
                    : {}
        return (
            g && (((f = f || {}).left = 'unset'), (f.right = 'unset'), (f.transform = 'unset')),
            y
                ? mo($i.Provider, {
                      value: {
                          isPreviewMode: g,
                          previewPageIndex: p,
                          handleCloseSurveyPopup: function () {
                              return Ni(u, c, g)
                          },
                          isPopup: v || !1,
                      },
                      children: w
                          ? mo(Mo, {
                                header:
                                    (null === (o = u.appearance) || void 0 === o ? void 0 : o.thankYouMessageHeader) ||
                                    'Thank you!',
                                description:
                                    (null === (a = u.appearance) || void 0 === a
                                        ? void 0
                                        : a.thankYouMessageDescription) || '',
                                forceDisableHtml: !!l,
                                contentType:
                                    null === (s = u.appearance) || void 0 === s
                                        ? void 0
                                        : s.thankYouMessageDescriptionContentType,
                                appearance: u.appearance || Ri,
                                styleOverrides: t(t({}, f), C),
                                onClose: function () {
                                    return k(!1)
                                },
                            })
                          : mo(Zo, { survey: u, forceDisableHtml: !!l, posthog: c, styleOverrides: f }),
                  })
                : mo(ai, {})
        )
    }
    function Zo(e) {
        var n,
            r,
            i = e.survey,
            o = e.forceDisableHtml,
            a = e.posthog,
            s = e.styleOverrides,
            u = Mi((null === (n = i.appearance) || void 0 === n ? void 0 : n.backgroundColor) || Ri.backgroundColor),
            c = d(ro({}), 2),
            f = c[0],
            p = c[1],
            h = so($i),
            v = h.isPreviewMode,
            g = h.previewPageIndex,
            m = h.handleCloseSurveyPopup,
            _ = h.isPopup,
            y = d(ro(g || 0), 2),
            b = y[0],
            k = y[1],
            w = ao(
                function () {
                    return Di(i)
                },
                [i]
            )
        io(
            function () {
                k(null != g ? g : 0)
            },
            [g]
        )
        return mo('form', {
            className: 'survey-form',
            style: _
                ? t({ color: u, borderColor: null === (r = i.appearance) || void 0 === r ? void 0 : r.borderColor }, s)
                : {},
            children: w.map(function (e, n) {
                var r,
                    s = e.originalQuestionIndex
                return (
                    (v ? b === s : b === n) &&
                    mo('div', {
                        className: 'survey-box',
                        style: _
                            ? {
                                  backgroundColor:
                                      (null === (r = i.appearance) || void 0 === r ? void 0 : r.backgroundColor) ||
                                      Ri.backgroundColor,
                              }
                            : {},
                        children: [
                            _ &&
                                mo(Ao, {
                                    onClick: function () {
                                        return m()
                                    },
                                }),
                            Qo({
                                question: e,
                                forceDisableHtml: o,
                                displayQuestionIndex: n,
                                appearance: i.appearance || Ri,
                                onSubmit: function (e) {
                                    return (function (e) {
                                        var n = e.res,
                                            r = e.originalQuestionIndex,
                                            o = e.displayQuestionIndex
                                        if (a) {
                                            var s = 0 === r ? '$survey_response' : '$survey_response_'.concat(r)
                                            if ((p(t(t({}, f), {}, l({}, s, n))), a.getNextSurveyStep)) {
                                                var u = a.getNextSurveyStep(i, o, n)
                                                u === Vr.End ? Oi(t(t({}, f), {}, l({}, s, n)), i, a) : k(u)
                                            } else
                                                o === i.questions.length - 1
                                                    ? Oi(t(t({}, f), {}, l({}, s, n)), i, a)
                                                    : k(o + 1)
                                        }
                                    })({ res: e, originalQuestionIndex: s, displayQuestionIndex: n })
                                },
                            }),
                        ],
                    })
                )
            }),
        })
    }
    function zo(e) {
        var t,
            n,
            r = e.survey,
            i = e.forceDisableHtml,
            o = e.posthog,
            a = e.readOnly,
            s = e.removeSurveyFromFocus,
            u = d(ro(!1), 2),
            l = u[0],
            c = u[1],
            f = d(ro({}), 2),
            p = f[0],
            h = f[1],
            v = oo(null)
        return (
            io(function () {
                var e, t
                if (!a && o) {
                    if ('tab' === (null === (e = r.appearance) || void 0 === e ? void 0 : e.widgetType) && v.current) {
                        var n,
                            i = v.current.getBoundingClientRect(),
                            s = {
                                top: '50%',
                                left: parseInt(''.concat(i.right - 360)),
                                bottom: 'auto',
                                borderRadius: 10,
                                borderBottom: '1.5px solid '.concat(
                                    (null === (n = r.appearance) || void 0 === n ? void 0 : n.borderColor) || '#c9c6c6'
                                ),
                            }
                        h(s)
                    }
                    if ('selector' === (null === (t = r.appearance) || void 0 === t ? void 0 : t.widgetType)) {
                        var u = Uo.querySelector(r.appearance.widgetSelector || '')
                        null == u ||
                            u.addEventListener('click', function () {
                                c(!l)
                            }),
                            null == u || u.setAttribute('PHWidgetSurveyClickListener', 'true')
                    }
                }
            }, []),
            mo(ai, {
                children: [
                    'tab' === (null === (t = r.appearance) || void 0 === t ? void 0 : t.widgetType) &&
                        mo('div', {
                            className: 'ph-survey-widget-tab',
                            ref: v,
                            onClick: function () {
                                return !a && c(!l)
                            },
                            style: { color: Mi(r.appearance.widgetColor) },
                            children: [
                                mo('div', { className: 'ph-survey-widget-tab-icon' }),
                                (null === (n = r.appearance) || void 0 === n ? void 0 : n.widgetLabel) || '',
                            ],
                        }),
                    l &&
                        mo(
                            Go,
                            {
                                posthog: o,
                                survey: r,
                                forceDisableHtml: i,
                                style: p,
                                removeSurveyFromFocus: s,
                                isPopup: !0,
                            },
                            'feedback-widget-survey'
                        ),
                ],
            })
        )
    }
    var Qo = function (e) {
        var n,
            r,
            i = e.question,
            o = e.forceDisableHtml,
            a = e.displayQuestionIndex,
            s = e.appearance,
            u = e.onSubmit,
            c =
                (l((n = {}), Wr.Open, Fo),
                l(n, Wr.Link, Oo),
                l(n, Wr.Rating, No),
                l(n, Wr.SingleChoice, Po),
                l(n, Wr.MultipleChoice, Po),
                n),
            d = { question: i, forceDisableHtml: o, appearance: s, onSubmit: u },
            f =
                (l((r = {}), Wr.Open, {}),
                l(r, Wr.Link, {}),
                l(r, Wr.Rating, { displayQuestionIndex: a }),
                l(r, Wr.SingleChoice, { displayQuestionIndex: a }),
                l(r, Wr.MultipleChoice, { displayQuestionIndex: a }),
                r),
            p = c[i.type],
            h = t(t({}, d), f[i.type])
        return mo(p, t({}, h))
    }
    function Ko(e) {
        return !Ut(Event) && Yo(e, Event)
    }
    function Yo(e, t) {
        try {
            return e instanceof t
        } catch (e) {
            return !1
        }
    }
    function Jo(e, t) {
        return Object.prototype.toString.call(e) === '[object '.concat(t, ']')
    }
    function Xo(e) {
        return Jo(e, 'DOMError')
    }
    en &&
        ((en.__PosthogExtensions__ = en.__PosthogExtensions__ || {}),
        (en.__PosthogExtensions__.canActivateRepeatedly = qi),
        (en.extendPostHogWithSurveys = function (e) {
            if (Uo && Vo) {
                var t = new jo(e)
                return (
                    t.callSurveysAndEvaluateDisplayLogic(!0),
                    setInterval(function () {
                        t.callSurveysAndEvaluateDisplayLogic(!1)
                    }, 1e3),
                    t
                )
            }
        }))
    var ea = /\(error: (.*)\)/,
        ta = 50,
        na = '?'
    function ra(e, t, n, r) {
        var i = { filename: e, function: t, in_app: !0 }
        return Ut(n) || (i.lineno = n), Ut(r) || (i.colno = r), i
    }
    var ia =
            /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        oa = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        aa =
            /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        sa = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        ua = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i
    var la,
        ca = function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]
            var i = n
                .sort(function (e, t) {
                    return e[0] - t[0]
                })
                .map(function (e) {
                    return e[1]
                })
            return function (e) {
                for (
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = [],
                        o = e.split('\n'),
                        a = n;
                    a < o.length;
                    a++
                ) {
                    var s = o[a]
                    if (!(s.length > 1024)) {
                        var u = ea.test(s) ? s.replace(ea, '$1') : s
                        if (!u.match(/\S*Error: /)) {
                            var l,
                                c = v(i)
                            try {
                                for (c.s(); !(l = c.n()).done; ) {
                                    var d = (0, l.value)(u)
                                    if (d) {
                                        r.push(d)
                                        break
                                    }
                                }
                            } catch (e) {
                                c.e(e)
                            } finally {
                                c.f()
                            }
                            if (r.length >= ta) break
                        }
                    }
                }
                return (function (e) {
                    if (!e.length) return []
                    var n = e.slice(0, ta)
                    return (
                        n.reverse(),
                        n.map(function (e) {
                            return t(
                                t({}, e),
                                {},
                                { filename: e.filename || n[n.length - 1].filename, function: e.function || '?' }
                            )
                        })
                    )
                })(r)
            }
        }.apply(void 0, [
            [
                30,
                function (e) {
                    var t = ia.exec(e)
                    if (t) {
                        if (t[2] && 0 === t[2].indexOf('eval')) {
                            var n = oa.exec(t[2])
                            n && ((t[2] = n[1]), (t[3] = n[2]), (t[4] = n[3]))
                        }
                        var r = d(da(t[1] || na, t[2]), 2),
                            i = r[0]
                        return ra(r[1], i, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0)
                    }
                },
            ],
            [
                50,
                function (e) {
                    var t = aa.exec(e)
                    if (t) {
                        if (t[3] && t[3].indexOf(' > eval') > -1) {
                            var n = sa.exec(t[3])
                            n && ((t[1] = t[1] || 'eval'), (t[3] = n[1]), (t[4] = n[2]), (t[5] = ''))
                        }
                        var r = t[3],
                            i = t[1] || na,
                            o = d(da(i, r), 2)
                        return (i = o[0]), ra((r = o[1]), i, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
                    }
                },
            ],
            [
                40,
                function (e) {
                    var t = ua.exec(e)
                    return t ? ra(t[2], t[1] || na, +t[3], t[4] ? +t[4] : void 0) : void 0
                },
            ],
        ]),
        da = function (e, t) {
            var n = -1 !== e.indexOf('safari-extension'),
                r = -1 !== e.indexOf('safari-web-extension')
            return n || r
                ? [
                      -1 !== e.indexOf('@') ? e.split('@')[0] : na,
                      n ? 'safari-extension:'.concat(t) : 'safari-web-extension:'.concat(t),
                  ]
                : [e, t]
        }
    !(function (e) {
        ;(e.GZipJS = 'gzip-js'), (e.Base64 = 'base64')
    })(la || (la = {}))
    var fa = ['fatal', 'error', 'warning', 'log', 'info', 'debug'],
        pa = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
        ha = /Minified React error #\d+;/i
    function va(e) {
        var t = e.stacktrace || e.stack || '',
            n = (function (e) {
                if (e) {
                    if (Qt(e.framesToPop)) return e.framesToPop
                    if (ha.test(e.message)) return 1
                }
                return 0
            })(e)
        try {
            return ca(t, n)
        } catch (e) {}
        return []
    }
    function ga(e) {
        var t = va(e)
        return {
            $exception_type: e.name,
            $exception_message: e.message,
            $exception_stack_trace_raw: JSON.stringify(t),
            $exception_level: 'error',
        }
    }
    function ma(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
            n = Object.keys(e)
        if ((n.sort(), !n.length)) return '[object has no keys]'
        for (var r = n.length; r > 0; r--) {
            var i = n.slice(0, r).join(', ')
            if (!(i.length > t)) return r === n.length || i.length <= t ? i : ''.concat(i.slice(0, t), '...')
        }
        return ''
    }
    function _a(e) {
        return jt(e) && !Gt(e) && fa.indexOf(e) >= 0
    }
    function ya(e) {
        var n = d(e, 5),
            r = n[0],
            i = n[1],
            o = n[2],
            a = n[3],
            s = n[4],
            u = {}
        if (Ut(s) && jt(r)) {
            var l = 'Error',
                c = r,
                f = r.match(pa)
            f && ((l = f[1]), (c = f[2])), (u = { $exception_type: l, $exception_message: c })
        }
        var p = s || r
        if (
            Xo(p) ||
            (function (e) {
                return Jo(e, 'DOMException')
            })(p)
        ) {
            var h = p
            if (
                (function (e) {
                    return 'stack' in e
                })(p)
            )
                u = ga(p)
            else {
                var v = h.name || (Xo(h) ? 'DOMError' : 'DOMException'),
                    g = h.message ? ''.concat(v, ': ').concat(h.message) : v
                ;(u = (function (e) {
                    return { $exception_type: 'Error', $exception_message: e, $exception_level: 'error' }
                })(g)),
                    (u.$exception_type = Xo(h) ? 'DOMError' : 'DOMException'),
                    (u.$exception_message = u.$exception_message || g)
            }
            'code' in h && (u.$exception_DOMException_code = ''.concat(h.code))
        } else if (
            (function (e) {
                return Jo(e, 'ErrorEvent')
            })(p) &&
            p.error
        )
            u = ga(p.error)
        else if (
            (function (e) {
                switch (Object.prototype.toString.call(e)) {
                    case '[object Error]':
                    case '[object Exception]':
                    case '[object DOMException]':
                        return !0
                    default:
                        return Yo(e, Error)
                }
            })(p)
        )
            u = ga(p)
        else if (
            (function (e) {
                return Jo(e, 'Object')
            })(p) ||
            Ko(p)
        ) {
            ;(u = (function (e) {
                return {
                    $exception_type: Ko(e) ? e.constructor.name : 'Error',
                    $exception_message: 'Non-Error '.concat('exception', ' captured with keys: ', ma(e)),
                    $exception_level: _a(e.level) ? e.level : 'error',
                }
            })(p)),
                (u.$exception_is_synthetic = !0)
        } else
            (u.$exception_type = u.$exception_type || 'Error'),
                (u.$exception_message = u.$exception_message || p),
                (u.$exception_is_synthetic = !0)
        return t(
            t(
                t(
                    t({}, u),
                    {},
                    {
                        $exception_type: u.$exception_type || 'UnknownErrorType',
                        $exception_message: u.$exception_message || '',
                        $exception_level: _a(u.$exception_level) ? u.$exception_level : 'error',
                    },
                    i ? { $exception_source: i } : {}
                ),
                o ? { $exception_lineno: o } : {}
            ),
            a ? { $exception_colno: a } : {}
        )
    }
    function ba(e) {
        var n = d(e, 1)[0],
            r = n
        try {
            'reason' in n ? (r = n.reason) : 'detail' in n && 'reason' in n.detail && (r = n.detail.reason)
        } catch (e) {}
        var i,
            o = {}
        return (
            ((o =
                Zt((i = r)) || (!Wt(i) && !$t(i))
                    ? { $exception_message: 'Non-Error promise rejection captured with value: '.concat(String(r)) }
                    : ya([r])).$exception_handled = !1),
            t(
                t({}, o),
                {},
                {
                    $exception_type: (o.$exception_type = 'UnhandledRejection'),
                    $exception_message: (o.$exception_message = o.$exception_message || n.reason || String(r)),
                    $exception_level: _a(o.$exception_level) ? o.$exception_level : 'error',
                }
            )
        )
    }
    var ka = {
        wrapOnError: function (e) {
            var t = en
            t || vn.info('window not available, cannot wrap onerror')
            var n = t.onerror
            return (
                (t.onerror = function () {
                    for (var t, r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
                    var a = ya(i)
                    return e(a), null !== (t = null == n ? void 0 : n.apply(void 0, i)) && void 0 !== t && t
                }),
                (t.onerror.__POSTHOG_INSTRUMENTED__ = !0),
                function () {
                    var e
                    null === (e = t.onerror) || void 0 === e || delete e.__POSTHOG_INSTRUMENTED__, (t.onerror = n)
                }
            )
        },
        wrapUnhandledRejection: function (e) {
            var t = en
            t || vn.info('window not available, cannot wrap onUnhandledRejection')
            var n = t.onunhandledrejection
            return (
                (t.onunhandledrejection = function () {
                    for (var r, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a]
                    var s = ba(o)
                    return e(s), null !== (r = null == n ? void 0 : n.apply(t, o)) && void 0 !== r && r
                }),
                (t.onunhandledrejection.__POSTHOG_INSTRUMENTED__ = !0),
                function () {
                    var e
                    null === (e = t.onunhandledrejection) || void 0 === e || delete e.__POSTHOG_INSTRUMENTED__,
                        (t.onunhandledrejection = n)
                }
            )
        },
    }
    en && ((en.posthogErrorWrappingFunctions = ka), (en.parseErrorAsProperties = ya))
    var wa = function (e, t) {
        var n = e.checkAndGetSessionAndWindowId(!0),
            r = n.sessionId,
            i = n.windowId
        t.headers.set('X-POSTHOG-SESSION-ID', r), t.headers.set('X-POSTHOG-WINDOW-ID', i)
    }
    pn &&
        (pn.postHogTracingHeadersPatchFns = {
            _patchFetch: function (e) {
                return yr(en, 'fetch', function (t) {
                    return (function () {
                        var r = o(
                            n().mark(function r(i, o) {
                                var a
                                return n().wrap(function (n) {
                                    for (;;)
                                        switch ((n.prev = n.next)) {
                                            case 0:
                                                return (a = new Request(i, o)), wa(e, a), n.abrupt('return', t(a))
                                            case 3:
                                            case 'end':
                                                return n.stop()
                                        }
                                }, r)
                            })
                        )
                        return function (e, t) {
                            return r.apply(this, arguments)
                        }
                    })()
                })
            },
            _patchXHR: function (e) {
                return yr(en.XMLHttpRequest.prototype, 'open', function (t) {
                    return function (n, r) {
                        var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            o = arguments.length > 3 ? arguments[3] : void 0,
                            a = arguments.length > 4 ? arguments[4] : void 0,
                            s = new Request(r)
                        return wa(e, s), t.call(this, n, s.url, i, o, a)
                    }
                })
            },
        })
    var Ca,
        Ia,
        Sa,
        xa = -1,
        Ea = function (e) {
            addEventListener(
                'pageshow',
                function (t) {
                    t.persisted && ((xa = t.timeStamp), e(t))
                },
                !0
            )
        },
        Ta = function () {
            var e = self.performance && performance.getEntriesByType && performance.getEntriesByType('navigation')[0]
            if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
        },
        Aa = function () {
            var e = Ta()
            return (e && e.activationStart) || 0
        },
        Ma = function (e, t) {
            var n = Ta(),
                r = 'navigate'
            return (
                xa >= 0
                    ? (r = 'back-forward-cache')
                    : n &&
                      (document.prerendering || Aa() > 0
                          ? (r = 'prerender')
                          : document.wasDiscarded
                          ? (r = 'restore')
                          : n.type && (r = n.type.replace(/_/g, '-'))),
                {
                    name: e,
                    value: void 0 === t ? -1 : t,
                    rating: 'good',
                    delta: 0,
                    entries: [],
                    id: 'v4-'.concat(Date.now(), '-').concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                    navigationType: r,
                }
            )
        },
        Ra = function (e, t, n) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    var r = new PerformanceObserver(function (e) {
                        Promise.resolve().then(function () {
                            t(e.getEntries())
                        })
                    })
                    return r.observe(Object.assign({ type: e, buffered: !0 }, n || {})), r
                }
            } catch (e) {}
        },
        Fa = function (e, t, n, r) {
            var i, o
            return function (a) {
                t.value >= 0 &&
                    (a || r) &&
                    ((o = t.value - (i || 0)) || void 0 === i) &&
                    ((i = t.value),
                    (t.delta = o),
                    (t.rating = (function (e, t) {
                        return e > t[1] ? 'poor' : e > t[0] ? 'needs-improvement' : 'good'
                    })(t.value, n)),
                    e(t))
            }
        },
        Oa = function (e) {
            requestAnimationFrame(function () {
                return requestAnimationFrame(function () {
                    return e()
                })
            })
        },
        Na = function (e) {
            document.addEventListener('visibilitychange', function () {
                'hidden' === document.visibilityState && e()
            })
        },
        La = function (e) {
            var t = !1
            return function () {
                t || (e(), (t = !0))
            }
        },
        Pa = -1,
        Da = function () {
            return 'hidden' !== document.visibilityState || document.prerendering ? 1 / 0 : 0
        },
        qa = function (e) {
            'hidden' === document.visibilityState &&
                Pa > -1 &&
                ((Pa = 'visibilitychange' === e.type ? e.timeStamp : 0), Ha())
        },
        Ba = function () {
            addEventListener('visibilitychange', qa, !0), addEventListener('prerenderingchange', qa, !0)
        },
        Ha = function () {
            removeEventListener('visibilitychange', qa, !0), removeEventListener('prerenderingchange', qa, !0)
        },
        $a = function () {
            return (
                Pa < 0 &&
                    ((Pa = Da()),
                    Ba(),
                    Ea(function () {
                        setTimeout(function () {
                            ;(Pa = Da()), Ba()
                        }, 0)
                    })),
                {
                    get firstHiddenTime() {
                        return Pa
                    },
                }
            )
        },
        Wa = function (e) {
            document.prerendering
                ? addEventListener(
                      'prerenderingchange',
                      function () {
                          return e()
                      },
                      !0
                  )
                : e()
        },
        Va = [1800, 3e3],
        Ua = function (e, t) {
            ;(t = t || {}),
                Wa(function () {
                    var n,
                        r = $a(),
                        i = Ma('FCP'),
                        o = Ra('paint', function (e) {
                            e.forEach(function (e) {
                                'first-contentful-paint' === e.name &&
                                    (o.disconnect(),
                                    e.startTime < r.firstHiddenTime &&
                                        ((i.value = Math.max(e.startTime - Aa(), 0)), i.entries.push(e), n(!0)))
                            })
                        })
                    o &&
                        ((n = Fa(e, i, Va, t.reportAllChanges)),
                        Ea(function (r) {
                            ;(i = Ma('FCP')),
                                (n = Fa(e, i, Va, t.reportAllChanges)),
                                Oa(function () {
                                    ;(i.value = performance.now() - r.timeStamp), n(!0)
                                })
                        }))
                })
        },
        ja = [0.1, 0.25],
        Ga = [2500, 4e3],
        Za = {},
        za = function () {
            var e = self.performance && performance.getEntriesByType && performance.getEntriesByType('navigation')[0]
            if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
        },
        Qa = function (e) {
            if ('loading' === document.readyState) return 'loading'
            var t = za()
            if (t) {
                if (e < t.domInteractive) return 'loading'
                if (0 === t.domContentLoadedEventStart || e < t.domContentLoadedEventStart) return 'dom-interactive'
                if (0 === t.domComplete || e < t.domComplete) return 'dom-content-loaded'
            }
            return 'complete'
        },
        Ka = function (e) {
            var t = e.nodeName
            return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, '')
        },
        Ya = function (e, t) {
            var n = ''
            try {
                for (; e && 9 !== e.nodeType; ) {
                    var r = e,
                        i = r.id
                            ? '#' + r.id
                            : Ka(r) +
                              (r.classList &&
                              r.classList.value &&
                              r.classList.value.trim() &&
                              r.classList.value.trim().length
                                  ? '.' + r.classList.value.trim().replace(/\s+/g, '.')
                                  : '')
                    if (n.length + i.length > (t || 100) - 1) return n || i
                    if (((n = n ? i + '>' + n : i), r.id)) break
                    e = r.parentNode
                }
            } catch (e) {}
            return n
        },
        Ja = -1,
        Xa = function (e, t) {
            var n = za(),
                r = 'navigate'
            return (
                Ja >= 0
                    ? (r = 'back-forward-cache')
                    : n &&
                      (document.prerendering ||
                      (function () {
                          var e = za()
                          return (e && e.activationStart) || 0
                      })() > 0
                          ? (r = 'prerender')
                          : document.wasDiscarded
                          ? (r = 'restore')
                          : n.type && (r = n.type.replace(/_/g, '-'))),
                {
                    name: e,
                    value: void 0 === t ? -1 : t,
                    rating: 'good',
                    delta: 0,
                    entries: [],
                    id: 'v4-'.concat(Date.now(), '-').concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                    navigationType: r,
                }
            )
        },
        es = function (e, t, n) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    var r = new PerformanceObserver(function (e) {
                        Promise.resolve().then(function () {
                            t(e.getEntries())
                        })
                    })
                    return r.observe(Object.assign({ type: e, buffered: !0 }, n || {})), r
                }
            } catch (e) {}
        },
        ts = function (e, t, n, r) {
            var i, o
            return function (a) {
                t.value >= 0 &&
                    (a || r) &&
                    ((o = t.value - (i || 0)) || void 0 === i) &&
                    ((i = t.value),
                    (t.delta = o),
                    (t.rating = (function (e, t) {
                        return e > t[1] ? 'poor' : e > t[0] ? 'needs-improvement' : 'good'
                    })(t.value, n)),
                    e(t))
            }
        },
        ns = function (e) {
            document.addEventListener('visibilitychange', function () {
                'hidden' === document.visibilityState && e()
            })
        },
        rs = 0,
        is = 1 / 0,
        os = 0,
        as = function (e) {
            e.forEach(function (e) {
                e.interactionId &&
                    ((is = Math.min(is, e.interactionId)),
                    (os = Math.max(os, e.interactionId)),
                    (rs = os ? (os - is) / 7 + 1 : 0))
            })
        },
        ss = function () {
            'interactionCount' in performance ||
                Ca ||
                (Ca = es('event', as, { type: 'event', buffered: !0, durationThreshold: 0 }))
        },
        us = [],
        ls = new Map(),
        cs = 0,
        ds = function () {
            return (Ca ? rs : performance.interactionCount || 0) - cs
        },
        fs = [],
        ps = function (e) {
            if (
                (fs.forEach(function (t) {
                    return t(e)
                }),
                e.interactionId || 'first-input' === e.entryType)
            ) {
                var t = us[us.length - 1],
                    n = ls.get(e.interactionId)
                if (n || us.length < 10 || e.duration > t.latency) {
                    if (n)
                        e.duration > n.latency
                            ? ((n.entries = [e]), (n.latency = e.duration))
                            : e.duration === n.latency && e.startTime === n.entries[0].startTime && n.entries.push(e)
                    else {
                        var r = { id: e.interactionId, latency: e.duration, entries: [e] }
                        ls.set(r.id, r), us.push(r)
                    }
                    us.sort(function (e, t) {
                        return t.latency - e.latency
                    }),
                        us.length > 10 &&
                            us.splice(10).forEach(function (e) {
                                return ls.delete(e.id)
                            })
                }
            }
        },
        hs = function (e) {
            var t = self.requestIdleCallback || self.setTimeout,
                n = -1
            return (
                (e = (function (e) {
                    var t = !1
                    return function () {
                        t || (e(), (t = !0))
                    }
                })(e)),
                'hidden' === document.visibilityState ? e() : ((n = t(e)), ns(e)),
                n
            )
        },
        vs = [200, 500],
        gs = function (e, t) {
            'PerformanceEventTiming' in self &&
                'interactionId' in PerformanceEventTiming.prototype &&
                ((t = t || {}),
                (function (e) {
                    document.prerendering
                        ? addEventListener(
                              'prerenderingchange',
                              function () {
                                  return e()
                              },
                              !0
                          )
                        : e()
                })(function () {
                    var n
                    ss()
                    var r,
                        i = Xa('INP'),
                        o = function (e) {
                            hs(function () {
                                e.forEach(ps)
                                var t,
                                    n = ((t = Math.min(us.length - 1, Math.floor(ds() / 50))), us[t])
                                n && n.latency !== i.value && ((i.value = n.latency), (i.entries = n.entries), r())
                            })
                        },
                        a = es('event', o, {
                            durationThreshold: null !== (n = t.durationThreshold) && void 0 !== n ? n : 40,
                        })
                    ;(r = ts(e, i, vs, t.reportAllChanges)),
                        a &&
                            (a.observe({ type: 'first-input', buffered: !0 }),
                            ns(function () {
                                o(a.takeRecords()), r(!0)
                            }),
                            (function (e) {
                                addEventListener(
                                    'pageshow',
                                    function (t) {
                                        t.persisted && ((Ja = t.timeStamp), e(t))
                                    },
                                    !0
                                )
                            })(function () {
                                ;(cs = 0),
                                    (us.length = 0),
                                    ls.clear(),
                                    (i = Xa('INP')),
                                    (r = ts(e, i, vs, t.reportAllChanges))
                            }))
                }))
        },
        ms = [],
        _s = [],
        ys = new WeakMap(),
        bs = new Map(),
        ks = -1,
        ws = function (e) {
            ;(ms = ms.concat(e)), Cs()
        },
        Cs = function () {
            ks < 0 && (ks = hs(Is))
        },
        Is = function () {
            bs.size > 10 &&
                bs.forEach(function (e, t) {
                    ls.has(t) || bs.delete(t)
                })
            var e = us.map(function (e) {
                    return ys.get(e.entries[0])
                }),
                t = _s.length - 50
            _s = _s.filter(function (n, r) {
                return r >= t || e.includes(n)
            })
            for (var n = new Set(), r = 0; r < _s.length; r++) {
                var i = _s[r]
                Ss(i.startTime, i.processingEnd).forEach(function (e) {
                    n.add(e)
                })
            }
            for (var o = 0; o < 50; o++) {
                var a = ms[ms.length - 1 - o]
                if (!a || a.startTime < Sa) break
                n.add(a)
            }
            ;(ms = Array.from(n)), (ks = -1)
        }
    fs.push(
        function (e) {
            e.interactionId && e.target && !bs.has(e.interactionId) && bs.set(e.interactionId, e.target)
        },
        function (e) {
            var t,
                n = e.startTime + e.duration
            Sa = Math.max(Sa, e.processingEnd)
            for (var r = _s.length - 1; r >= 0; r--) {
                var i = _s[r]
                if (Math.abs(n - i.renderTime) <= 8) {
                    ;((t = i).startTime = Math.min(e.startTime, t.startTime)),
                        (t.processingStart = Math.min(e.processingStart, t.processingStart)),
                        (t.processingEnd = Math.max(e.processingEnd, t.processingEnd)),
                        t.entries.push(e)
                    break
                }
            }
            t ||
                ((t = {
                    startTime: e.startTime,
                    processingStart: e.processingStart,
                    processingEnd: e.processingEnd,
                    renderTime: n,
                    entries: [e],
                }),
                _s.push(t)),
                (e.interactionId || 'first-input' === e.entryType) && ys.set(e, t),
                Cs()
        }
    )
    var Ss = function (e, t) {
            for (var n, r = [], i = 0; (n = ms[i]); i++)
                if (!(n.startTime + n.duration < e)) {
                    if (n.startTime > t) break
                    r.push(n)
                }
            return r
        },
        xs = {
            onLCP: function (e, t) {
                ;(t = t || {}),
                    Wa(function () {
                        var n,
                            r = $a(),
                            i = Ma('LCP'),
                            o = function (e) {
                                t.reportAllChanges || (e = e.slice(-1)),
                                    e.forEach(function (e) {
                                        e.startTime < r.firstHiddenTime &&
                                            ((i.value = Math.max(e.startTime - Aa(), 0)), (i.entries = [e]), n())
                                    })
                            },
                            a = Ra('largest-contentful-paint', o)
                        if (a) {
                            n = Fa(e, i, Ga, t.reportAllChanges)
                            var s = La(function () {
                                Za[i.id] || (o(a.takeRecords()), a.disconnect(), (Za[i.id] = !0), n(!0))
                            })
                            ;['keydown', 'click'].forEach(function (e) {
                                addEventListener(
                                    e,
                                    function () {
                                        return (function (e) {
                                            var t = self.requestIdleCallback || self.setTimeout,
                                                n = -1
                                            return (
                                                (e = La(e)),
                                                'hidden' === document.visibilityState ? e() : ((n = t(e)), Na(e)),
                                                n
                                            )
                                        })(s)
                                    },
                                    !0
                                )
                            }),
                                Na(s),
                                Ea(function (r) {
                                    ;(i = Ma('LCP')),
                                        (n = Fa(e, i, Ga, t.reportAllChanges)),
                                        Oa(function () {
                                            ;(i.value = performance.now() - r.timeStamp), (Za[i.id] = !0), n(!0)
                                        })
                                })
                        }
                    })
            },
            onCLS: function (e, t) {
                ;(t = t || {}),
                    Ua(
                        La(function () {
                            var n,
                                r = Ma('CLS', 0),
                                i = 0,
                                o = [],
                                a = function (e) {
                                    e.forEach(function (e) {
                                        if (!e.hadRecentInput) {
                                            var t = o[0],
                                                n = o[o.length - 1]
                                            i && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3
                                                ? ((i += e.value), o.push(e))
                                                : ((i = e.value), (o = [e]))
                                        }
                                    }),
                                        i > r.value && ((r.value = i), (r.entries = o), n())
                                },
                                s = Ra('layout-shift', a)
                            s &&
                                ((n = Fa(e, r, ja, t.reportAllChanges)),
                                Na(function () {
                                    a(s.takeRecords()), n(!0)
                                }),
                                Ea(function () {
                                    ;(i = 0),
                                        (r = Ma('CLS', 0)),
                                        (n = Fa(e, r, ja, t.reportAllChanges)),
                                        Oa(function () {
                                            return n()
                                        })
                                }),
                                setTimeout(n, 0))
                        })
                    )
            },
            onFCP: Ua,
            onINP: function (e, t) {
                Ia || (Ia = es('long-animation-frame', ws)),
                    gs(function (t) {
                        var n = (function (e) {
                            var t = e.entries[0],
                                n = ys.get(t),
                                r = t.processingStart,
                                i = n.processingEnd,
                                o = n.entries.sort(function (e, t) {
                                    return e.processingStart - t.processingStart
                                }),
                                a = Ss(t.startTime, i),
                                s = e.entries.find(function (e) {
                                    return e.target
                                }),
                                u = (s && s.target) || bs.get(t.interactionId),
                                l = [t.startTime + t.duration, i].concat(
                                    a.map(function (e) {
                                        return e.startTime + e.duration
                                    })
                                ),
                                c = Math.max.apply(Math, l),
                                d = {
                                    interactionTarget: Ya(u),
                                    interactionTargetElement: u,
                                    interactionType: t.name.startsWith('key') ? 'keyboard' : 'pointer',
                                    interactionTime: t.startTime,
                                    nextPaintTime: c,
                                    processedEventEntries: o,
                                    longAnimationFrameEntries: a,
                                    inputDelay: r - t.startTime,
                                    processingDuration: i - r,
                                    presentationDelay: Math.max(c - i, 0),
                                    loadState: Qa(t.startTime),
                                }
                            return Object.assign(e, { attribution: d })
                        })(t)
                        e(n)
                    }, t)
            },
        }
    ;(pn.__PosthogExtensions__ = pn.__PosthogExtensions__ || {}),
        (pn.__PosthogExtensions__.postHogWebVitalsCallbacks = xs),
        (pn.postHogWebVitalsCallbacks = xs)
    var Es = '$people_distinct_id',
        Ts = '__alias',
        As = '__timers',
        Ms = '$autocapture_disabled_server_side',
        Rs = '$heatmaps_enabled_server_side',
        Fs = '$exception_capture_enabled_server_side',
        Os = '$exception_capture_endpoint_suffix',
        Ns = '$web_vitals_enabled_server_side',
        Ls = '$web_vitals_allowed_metrics',
        Ps = '$session_recording_enabled_server_side',
        Ds = '$console_log_recording_enabled_server_side',
        qs = '$session_recording_network_payload_capture',
        Bs = '$session_recording_canvas_recording',
        Hs = '$replay_sample_rate',
        $s = '$replay_minimum_duration',
        Ws = '$sesid',
        Vs = '$session_is_sampled',
        Us = '$enabled_feature_flags',
        js = '$early_access_features',
        Gs = '$stored_person_properties',
        Zs = '$stored_group_properties',
        zs = '$surveys',
        Qs = '$surveys_activated',
        Ks = '$flag_call_reported',
        Ys = '$user_state',
        Js = '$client_session_props',
        Xs = '$capture_rate_limit',
        eu = '$initial_campaign_params',
        tu = '$initial_referrer_info',
        nu = '$initial_person_info',
        ru = '$epp',
        iu = '__POSTHOG_TOOLBAR__',
        ou = [Es, Ts, '__cmpns', As, Ps, Rs, Ws, Us, Ys, js, Zs, Gs, zs, Ks, Js, Xs, eu, tu, ru],
        au = '$active_feature_flags',
        su = '$override_feature_flags',
        uu = '$feature_flag_payloads',
        lu = function (e) {
            var t,
                n = {},
                r = v(wn(e || {}))
            try {
                for (r.s(); !(t = r.n()).done; ) {
                    var i = d(t.value, 2),
                        o = i[0],
                        a = i[1]
                    a && (n[o] = a)
                }
            } catch (e) {
                r.e(e)
            } finally {
                r.f()
            }
            return n
        },
        cu = (function () {
            function e(t) {
                a(this, e),
                    (this.instance = t),
                    (this._override_warning = !1),
                    (this.featureFlagEventHandlers = []),
                    (this.reloadFeatureFlagsQueued = !1),
                    (this.reloadFeatureFlagsInAction = !1)
            }
            return (
                u(e, [
                    {
                        key: 'getFlags',
                        value: function () {
                            return Object.keys(this.getFlagVariants())
                        },
                    },
                    {
                        key: 'getFlagVariants',
                        value: function () {
                            var e = this.instance.get_property(Us),
                                t = this.instance.get_property(su)
                            if (!t) return e || {}
                            for (var n = bn({}, e), r = Object.keys(t), i = 0; i < r.length; i++) n[r[i]] = t[r[i]]
                            return (
                                this._override_warning ||
                                    (vn.warn(' Overriding feature flags!', {
                                        enabledFlags: e,
                                        overriddenFlags: t,
                                        finalFlags: n,
                                    }),
                                    (this._override_warning = !0)),
                                n
                            )
                        },
                    },
                    {
                        key: 'getFlagPayloads',
                        value: function () {
                            return this.instance.get_property(uu) || {}
                        },
                    },
                    {
                        key: 'reloadFeatureFlags',
                        value: function () {
                            this.reloadFeatureFlagsQueued ||
                                ((this.reloadFeatureFlagsQueued = !0), this._startReloadTimer())
                        },
                    },
                    {
                        key: 'setAnonymousDistinctId',
                        value: function (e) {
                            this.$anon_distinct_id = e
                        },
                    },
                    {
                        key: 'setReloadingPaused',
                        value: function (e) {
                            this.reloadFeatureFlagsInAction = e
                        },
                    },
                    {
                        key: 'resetRequestQueue',
                        value: function () {
                            this.reloadFeatureFlagsQueued = !1
                        },
                    },
                    {
                        key: '_startReloadTimer',
                        value: function () {
                            var e = this
                            this.reloadFeatureFlagsQueued &&
                                !this.reloadFeatureFlagsInAction &&
                                setTimeout(function () {
                                    !e.reloadFeatureFlagsInAction &&
                                        e.reloadFeatureFlagsQueued &&
                                        ((e.reloadFeatureFlagsQueued = !1), e._reloadFeatureFlagsRequest())
                                }, 5)
                        },
                    },
                    {
                        key: '_reloadFeatureFlagsRequest',
                        value: function () {
                            var e = this
                            if (!this.instance.config.advanced_disable_feature_flags) {
                                this.setReloadingPaused(!0)
                                var t = this.instance.config.token,
                                    n = this.instance.get_property(Gs),
                                    r = this.instance.get_property(Zs),
                                    i = {
                                        token: t,
                                        distinct_id: this.instance.get_distinct_id(),
                                        groups: this.instance.getGroups(),
                                        $anon_distinct_id: this.$anon_distinct_id,
                                        person_properties: n,
                                        group_properties: r,
                                        disable_flags: this.instance.config.advanced_disable_feature_flags || void 0,
                                    }
                                this.instance._send_request({
                                    method: 'POST',
                                    url: this.instance.requestRouter.endpointFor('api', '/decide/?v=3'),
                                    data: i,
                                    compression: this.instance.config.disable_compression ? void 0 : la.Base64,
                                    timeout: this.instance.config.feature_flag_request_timeout_ms,
                                    callback: function (t) {
                                        var n
                                        e.setReloadingPaused(!1)
                                        var r = !0
                                        200 === t.statusCode && ((e.$anon_distinct_id = void 0), (r = !1)),
                                            e.receivedFeatureFlags(null !== (n = t.json) && void 0 !== n ? n : {}, r),
                                            e._startReloadTimer()
                                    },
                                })
                            }
                        },
                    },
                    {
                        key: 'getFeatureFlag',
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            if (this.instance.decideEndpointWasHit || (this.getFlags() && this.getFlags().length > 0)) {
                                var n,
                                    r = this.getFlagVariants()[e],
                                    i = ''.concat(r),
                                    o = this.instance.get_property(Ks) || {}
                                if (t.send_event || !('send_event' in t))
                                    if (!(e in o) || !o[e].includes(i))
                                        Ht(o[e]) ? o[e].push(i) : (o[e] = [i]),
                                            null === (n = this.instance.persistence) ||
                                                void 0 === n ||
                                                n.register(l({}, Ks, o)),
                                            this.instance.capture('$feature_flag_called', {
                                                $feature_flag: e,
                                                $feature_flag_response: r,
                                            })
                                return r
                            }
                            vn.warn('getFeatureFlag for key "' + e + '" failed. Feature flags didn\'t load in time.')
                        },
                    },
                    {
                        key: 'getFeatureFlagPayload',
                        value: function (e) {
                            return this.getFlagPayloads()[e]
                        },
                    },
                    {
                        key: 'isFeatureEnabled',
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            if (this.instance.decideEndpointWasHit || (this.getFlags() && this.getFlags().length > 0))
                                return !!this.getFeatureFlag(e, t)
                            vn.warn('isFeatureEnabled for key "' + e + '" failed. Feature flags didn\'t load in time.')
                        },
                    },
                    {
                        key: 'addFeatureFlagsHandler',
                        value: function (e) {
                            this.featureFlagEventHandlers.push(e)
                        },
                    },
                    {
                        key: 'removeFeatureFlagsHandler',
                        value: function (e) {
                            this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(function (t) {
                                return t !== e
                            })
                        },
                    },
                    {
                        key: 'receivedFeatureFlags',
                        value: function (e, n) {
                            if (this.instance.persistence) {
                                this.instance.decideEndpointWasHit = !0
                                var r = this.getFlagVariants(),
                                    i = this.getFlagPayloads()
                                !(function (e, n) {
                                    var r,
                                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                        a = e.featureFlags,
                                        s = e.featureFlagPayloads
                                    if (a)
                                        if (Ht(a)) {
                                            var u,
                                                c = {}
                                            if (a) for (var d = 0; d < a.length; d++) c[a[d]] = !0
                                            n && n.register((l((u = {}), au, a), l(u, Us, c), u))
                                        } else {
                                            var f = a,
                                                p = s
                                            e.errorsWhileComputingFlags && ((f = t(t({}, i), f)), (p = t(t({}, o), p))),
                                                n &&
                                                    n.register(
                                                        (l((r = {}), au, Object.keys(lu(f))),
                                                        l(r, Us, f || {}),
                                                        l(r, uu, p || {}),
                                                        r)
                                                    )
                                        }
                                })(e, this.instance.persistence, r, i),
                                    this._fireFeatureFlagsCallbacks(n)
                            }
                        },
                    },
                    {
                        key: 'override',
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                            if (!this.instance.__loaded || !this.instance.persistence)
                                return vn.uninitializedWarning('posthog.feature_flags.override')
                            if (((this._override_warning = t), !1 === e)) this.instance.persistence.unregister(su)
                            else if (Ht(e)) {
                                for (var n = {}, r = 0; r < e.length; r++) n[e[r]] = !0
                                this.instance.persistence.register(l({}, su, n))
                            } else this.instance.persistence.register(l({}, su, e))
                        },
                    },
                    {
                        key: 'onFeatureFlags',
                        value: function (e) {
                            var t = this
                            if ((this.addFeatureFlagsHandler(e), this.instance.decideEndpointWasHit)) {
                                var n = this._prepareFeatureFlagsForCallbacks(),
                                    r = n.flags,
                                    i = n.flagVariants
                                e(r, i)
                            }
                            return function () {
                                return t.removeFeatureFlagsHandler(e)
                            }
                        },
                    },
                    {
                        key: 'updateEarlyAccessFeatureEnrollment',
                        value: function (e, n) {
                            var r,
                                i,
                                o = l({}, '$feature_enrollment/'.concat(e), n)
                            this.instance.capture('$feature_enrollment_update', {
                                $feature_flag: e,
                                $feature_enrollment: n,
                                $set: o,
                            }),
                                this.setPersonPropertiesForFlags(o, !1)
                            var a = t(t({}, this.getFlagVariants()), {}, l({}, e, n))
                            null === (r = this.instance.persistence) ||
                                void 0 === r ||
                                r.register((l((i = {}), au, Object.keys(lu(a))), l(i, Us, a), i)),
                                this._fireFeatureFlagsCallbacks()
                        },
                    },
                    {
                        key: 'getEarlyAccessFeatures',
                        value: function (e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = this.instance.get_property(js)
                            if (r && !n) return e(r)
                            this.instance._send_request({
                                transport: 'XHR',
                                url: this.instance.requestRouter.endpointFor(
                                    'api',
                                    '/api/early_access_features/?token='.concat(this.instance.config.token)
                                ),
                                method: 'GET',
                                callback: function (n) {
                                    var r
                                    if (n.json) {
                                        var i = n.json.earlyAccessFeatures
                                        return (
                                            null === (r = t.instance.persistence) ||
                                                void 0 === r ||
                                                r.register(l({}, js, i)),
                                            e(i)
                                        )
                                    }
                                },
                            })
                        },
                    },
                    {
                        key: '_prepareFeatureFlagsForCallbacks',
                        value: function () {
                            var e = this.getFlags(),
                                t = this.getFlagVariants()
                            return {
                                flags: e.filter(function (e) {
                                    return t[e]
                                }),
                                flagVariants: Object.keys(t)
                                    .filter(function (e) {
                                        return t[e]
                                    })
                                    .reduce(function (e, n) {
                                        return (e[n] = t[n]), e
                                    }, {}),
                            }
                        },
                    },
                    {
                        key: '_fireFeatureFlagsCallbacks',
                        value: function (e) {
                            var t = this._prepareFeatureFlagsForCallbacks(),
                                n = t.flags,
                                r = t.flagVariants
                            this.featureFlagEventHandlers.forEach(function (t) {
                                return t(n, r, { errorsLoading: e })
                            })
                        },
                    },
                    {
                        key: 'setPersonPropertiesForFlags',
                        value: function (e) {
                            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                r = this.instance.get_property(Gs) || {}
                            this.instance.register(l({}, Gs, t(t({}, r), e))), n && this.instance.reloadFeatureFlags()
                        },
                    },
                    {
                        key: 'resetPersonPropertiesForFlags',
                        value: function () {
                            this.instance.unregister(Gs)
                        },
                    },
                    {
                        key: 'setGroupPropertiesForFlags',
                        value: function (e) {
                            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                r = this.instance.get_property(Zs) || {}
                            0 !== Object.keys(r).length &&
                                Object.keys(r).forEach(function (n) {
                                    ;(r[n] = t(t({}, r[n]), e[n])), delete e[n]
                                }),
                                this.instance.register(l({}, Zs, t(t({}, r), e))),
                                n && this.instance.reloadFeatureFlags()
                        },
                    },
                    {
                        key: 'resetGroupPropertiesForFlags',
                        value: function (e) {
                            if (e) {
                                var n = this.instance.get_property(Zs) || {}
                                this.instance.register(l({}, Zs, t(t({}, n), {}, l({}, e, {}))))
                            } else this.instance.unregister(Zs)
                        },
                    },
                ]),
                e
            )
        })()
    Math.trunc ||
        (Math.trunc = function (e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e)
        }),
        Number.isInteger ||
            (Number.isInteger = function (e) {
                return Qt(e) && isFinite(e) && Math.floor(e) === e
            })
    var du = '0123456789abcdef',
        fu = (function () {
            function e(t) {
                if ((a(this, e), (this.bytes = t), 16 !== t.length)) throw new TypeError('not 128-bit length')
            }
            return (
                u(
                    e,
                    [
                        {
                            key: 'toString',
                            value: function () {
                                for (var e = '', t = 0; t < this.bytes.length; t++)
                                    (e = e + du.charAt(this.bytes[t] >>> 4) + du.charAt(15 & this.bytes[t])),
                                        (3 !== t && 5 !== t && 7 !== t && 9 !== t) || (e += '-')
                                if (36 !== e.length) throw new Error('Invalid UUIDv7 was generated')
                                return e
                            },
                        },
                        {
                            key: 'clone',
                            value: function () {
                                return new e(this.bytes.slice(0))
                            },
                        },
                        {
                            key: 'equals',
                            value: function (e) {
                                return 0 === this.compareTo(e)
                            },
                        },
                        {
                            key: 'compareTo',
                            value: function (e) {
                                for (var t = 0; t < 16; t++) {
                                    var n = this.bytes[t] - e.bytes[t]
                                    if (0 !== n) return Math.sign(n)
                                }
                                return 0
                            },
                        },
                    ],
                    [
                        {
                            key: 'fromFieldsV7',
                            value: function (t, n, r, i) {
                                if (
                                    !Number.isInteger(t) ||
                                    !Number.isInteger(n) ||
                                    !Number.isInteger(r) ||
                                    !Number.isInteger(i) ||
                                    t < 0 ||
                                    n < 0 ||
                                    r < 0 ||
                                    i < 0 ||
                                    t > 0xffffffffffff ||
                                    n > 4095 ||
                                    r > 1073741823 ||
                                    i > 4294967295
                                )
                                    throw new RangeError('invalid field value')
                                var o = new Uint8Array(16)
                                return (
                                    (o[0] = t / Math.pow(2, 40)),
                                    (o[1] = t / Math.pow(2, 32)),
                                    (o[2] = t / Math.pow(2, 24)),
                                    (o[3] = t / Math.pow(2, 16)),
                                    (o[4] = t / Math.pow(2, 8)),
                                    (o[5] = t),
                                    (o[6] = 112 | (n >>> 8)),
                                    (o[7] = n),
                                    (o[8] = 128 | (r >>> 24)),
                                    (o[9] = r >>> 16),
                                    (o[10] = r >>> 8),
                                    (o[11] = r),
                                    (o[12] = i >>> 24),
                                    (o[13] = i >>> 16),
                                    (o[14] = i >>> 8),
                                    (o[15] = i),
                                    new e(o)
                                )
                            },
                        },
                    ]
                ),
                e
            )
        })(),
        pu = (function () {
            function e() {
                a(this, e), l(this, 'timestamp', 0), l(this, 'counter', 0), l(this, 'random', new gu())
            }
            return (
                u(e, [
                    {
                        key: 'generate',
                        value: function () {
                            var e = this.generateOrAbort()
                            if (Ut(e)) {
                                this.timestamp = 0
                                var t = this.generateOrAbort()
                                if (Ut(t)) throw new Error('Could not generate UUID after timestamp reset')
                                return t
                            }
                            return e
                        },
                    },
                    {
                        key: 'generateOrAbort',
                        value: function () {
                            var e = Date.now()
                            if (e > this.timestamp) (this.timestamp = e), this.resetCounter()
                            else {
                                if (!(e + 1e4 > this.timestamp)) return
                                this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter())
                            }
                            return fu.fromFieldsV7(
                                this.timestamp,
                                Math.trunc(this.counter / Math.pow(2, 30)),
                                this.counter & (Math.pow(2, 30) - 1),
                                this.random.nextUint32()
                            )
                        },
                    },
                    {
                        key: 'resetCounter',
                        value: function () {
                            this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32())
                        },
                    },
                ]),
                e
            )
        })(),
        hu = function (e) {
            if ('undefined' != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG)
                throw new Error('no cryptographically strong RNG available')
            for (var t = 0; t < e.length; t++)
                e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random())
            return e
        }
    en &&
        !Ut(en.crypto) &&
        crypto.getRandomValues &&
        (hu = function (e) {
            return crypto.getRandomValues(e)
        })
    var vu,
        gu = (function () {
            function e() {
                a(this, e), l(this, 'buffer', new Uint32Array(8)), l(this, 'cursor', 1 / 0)
            }
            return (
                u(e, [
                    {
                        key: 'nextUint32',
                        value: function () {
                            return (
                                this.cursor >= this.buffer.length && (hu(this.buffer), (this.cursor = 0)),
                                this.buffer[this.cursor++]
                            )
                        },
                    },
                ]),
                e
            )
        })(),
        mu = function () {
            return _u().toString()
        },
        _u = function () {
            return (vu || (vu = new pu())).generate()
        },
        yu = 'Thu, 01 Jan 1970 00:00:00 GMT',
        bu = ''
    var ku = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i
    function wu(e, t) {
        if (t) {
            var n = (function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sn
                if (bu) return bu
                if (!t) return ''
                if (['localhost', '127.0.0.1'].includes(e)) return ''
                for (
                    var n = e.split('.'),
                        r = Math.min(n.length, 8),
                        i = 'dmn_chk_' + mu(),
                        o = new RegExp('(^|;)\\s*' + i + '=1');
                    !bu && r--;

                ) {
                    var a = n.slice(r).join('.'),
                        s = i + '=1;domain=.' + a
                    ;(t.cookie = s), o.test(t.cookie) && ((t.cookie = s + ';expires=' + yu), (bu = a))
                }
                return bu
            })(e)
            if (!n) {
                var r = (function (e) {
                    var t = e.match(ku)
                    return t ? t[0] : ''
                })(e)
                r !== n && vn.info('Warning: cookie subdomain discovery mismatch', r, n), (n = r)
            }
            return n ? '; domain=.' + n : ''
        }
        return ''
    }
    var Cu,
        Iu = {
            is_supported: function () {
                return !!sn
            },
            error: function (e) {
                vn.error('cookieStore error: ' + e)
            },
            get: function (e) {
                if (sn) {
                    try {
                        for (
                            var t = e + '=',
                                n = sn.cookie.split(';').filter(function (e) {
                                    return e.length
                                }),
                                r = 0;
                            r < n.length;
                            r++
                        ) {
                            for (var i = n[r]; ' ' == i.charAt(0); ) i = i.substring(1, i.length)
                            if (0 === i.indexOf(t)) return decodeURIComponent(i.substring(t.length, i.length))
                        }
                    } catch (e) {}
                    return null
                }
            },
            parse: function (e) {
                var t
                try {
                    t = JSON.parse(Iu.get(e)) || {}
                } catch (e) {}
                return t
            },
            set: function (e, t, n, r, i) {
                if (sn)
                    try {
                        var o = '',
                            a = '',
                            s = wu(sn.location.hostname, r)
                        if (n) {
                            var u = new Date()
                            u.setTime(u.getTime() + 24 * n * 60 * 60 * 1e3), (o = '; expires=' + u.toUTCString())
                        }
                        i && (a = '; secure')
                        var l = e + '=' + encodeURIComponent(JSON.stringify(t)) + o + '; SameSite=Lax; path=/' + s + a
                        return (
                            l.length > 3686.4 && vn.warn('cookieStore warning: large cookie, len=' + l.length),
                            (sn.cookie = l),
                            l
                        )
                    } catch (e) {
                        return
                    }
            },
            remove: function (e, t) {
                try {
                    Iu.set(e, '', -1, t)
                } catch (e) {
                    return
                }
            },
        },
        Su = null,
        xu = {
            is_supported: function () {
                if (!Zt(Su)) return Su
                var e = !0
                if (Ut(en)) e = !1
                else
                    try {
                        var t = '__mplssupport__'
                        xu.set(t, 'xyz'), '"xyz"' !== xu.get(t) && (e = !1), xu.remove(t)
                    } catch (t) {
                        e = !1
                    }
                return e || vn.error('localStorage unsupported; falling back to cookie store'), (Su = e), e
            },
            error: function (e) {
                vn.error('localStorage error: ' + e)
            },
            get: function (e) {
                try {
                    return null == en ? void 0 : en.localStorage.getItem(e)
                } catch (e) {
                    xu.error(e)
                }
                return null
            },
            parse: function (e) {
                try {
                    return JSON.parse(xu.get(e)) || {}
                } catch (e) {}
                return null
            },
            set: function (e, t) {
                try {
                    null == en || en.localStorage.setItem(e, JSON.stringify(t))
                } catch (e) {
                    xu.error(e)
                }
            },
            remove: function (e) {
                try {
                    null == en || en.localStorage.removeItem(e)
                } catch (e) {
                    xu.error(e)
                }
            },
        },
        Eu = ['distinct_id', Ws, Vs, ru],
        Tu = t(
            t({}, xu),
            {},
            {
                parse: function (e) {
                    try {
                        var t = {}
                        try {
                            t = Iu.parse(e) || {}
                        } catch (e) {}
                        var n = bn(t, JSON.parse(xu.get(e) || '{}'))
                        return xu.set(e, n), n
                    } catch (e) {}
                    return null
                },
                set: function (e, t, n, r, i, o) {
                    try {
                        xu.set(e, t, void 0, void 0, o)
                        var a = {}
                        Eu.forEach(function (e) {
                            t[e] && (a[e] = t[e])
                        }),
                            Object.keys(a).length && Iu.set(e, a, n, r, i, o)
                    } catch (e) {
                        xu.error(e)
                    }
                },
                remove: function (e, t) {
                    try {
                        null == en || en.localStorage.removeItem(e), Iu.remove(e, t)
                    } catch (e) {
                        xu.error(e)
                    }
                },
            }
        ),
        Au = {},
        Mu = {
            is_supported: function () {
                return !0
            },
            error: function (e) {
                vn.error('memoryStorage error: ' + e)
            },
            get: function (e) {
                return Au[e] || null
            },
            parse: function (e) {
                return Au[e] || null
            },
            set: function (e, t) {
                Au[e] = t
            },
            remove: function (e) {
                delete Au[e]
            },
        },
        Ru = null,
        Fu = {
            is_supported: function () {
                if (!Zt(Ru)) return Ru
                if (((Ru = !0), Ut(en))) Ru = !1
                else
                    try {
                        var e = '__support__'
                        Fu.set(e, 'xyz'), '"xyz"' !== Fu.get(e) && (Ru = !1), Fu.remove(e)
                    } catch (e) {
                        Ru = !1
                    }
                return Ru
            },
            error: function (e) {
                vn.error('sessionStorage error: ', e)
            },
            get: function (e) {
                try {
                    return null == en ? void 0 : en.sessionStorage.getItem(e)
                } catch (e) {
                    Fu.error(e)
                }
                return null
            },
            parse: function (e) {
                try {
                    return JSON.parse(Fu.get(e)) || null
                } catch (e) {}
                return null
            },
            set: function (e, t) {
                try {
                    null == en || en.sessionStorage.setItem(e, JSON.stringify(t))
                } catch (e) {
                    Fu.error(e)
                }
            },
            remove: function (e) {
                try {
                    null == en || en.sessionStorage.removeItem(e)
                } catch (e) {
                    Fu.error(e)
                }
            },
        },
        Ou = 'Mobile',
        Nu = 'iOS',
        Lu = 'Android',
        Pu = 'Tablet',
        Du = Lu + ' ' + Pu,
        qu = 'iPad',
        Bu = 'Apple',
        Hu = Bu + ' Watch',
        $u = 'Safari',
        Wu = 'BlackBerry',
        Vu = 'Samsung',
        Uu = Vu + 'Browser',
        ju = Vu + ' Internet',
        Gu = 'Chrome',
        Zu = Gu + ' OS',
        zu = Gu + ' ' + Nu,
        Qu = 'Internet Explorer',
        Ku = Qu + ' ' + Ou,
        Yu = 'Opera',
        Ju = Yu + ' Mini',
        Xu = 'Edge',
        el = 'Microsoft ' + Xu,
        tl = 'Firefox',
        nl = tl + ' ' + Nu,
        rl = 'Nintendo',
        il = 'PlayStation',
        ol = 'Xbox',
        al = Lu + ' ' + Ou,
        sl = Ou + ' ' + $u,
        ul = 'Windows',
        ll = ul + ' Phone',
        cl = 'Nokia',
        dl = 'Ouya',
        fl = 'Generic',
        pl = fl + ' ' + Ou.toLowerCase(),
        hl = fl + ' ' + Pu.toLowerCase(),
        vl = 'Konqueror',
        gl = '(\\d+(\\.\\d+)?)',
        ml = new RegExp('Version/' + gl),
        _l = new RegExp(ol, 'i'),
        yl = new RegExp(il + ' \\w+', 'i'),
        bl = new RegExp(rl + ' \\w+', 'i'),
        kl = new RegExp(Wu + '|PlayBook|BB10', 'i'),
        wl = {
            'NT3.51': 'NT 3.11',
            'NT4.0': 'NT 4.0',
            '5.0': '2000',
            5.1: 'XP',
            5.2: 'XP',
            '6.0': 'Vista',
            6.1: '7',
            6.2: '8',
            6.3: '8.1',
            6.4: '10',
            '10.0': '10',
        }
    var Cl = function (e, t) {
            return (
                (t && kn(t, Bu)) ||
                (function (e) {
                    return kn(e, $u) && !kn(e, Gu) && !kn(e, Lu)
                })(e)
            )
        },
        Il = function (e, t) {
            return (
                (t = t || ''),
                kn(e, ' OPR/') && kn(e, 'Mini')
                    ? Ju
                    : kn(e, ' OPR/')
                    ? Yu
                    : kl.test(e)
                    ? Wu
                    : kn(e, 'IE' + Ou) || kn(e, 'WPDesktop')
                    ? Ku
                    : kn(e, Uu)
                    ? ju
                    : kn(e, Xu) || kn(e, 'Edg/')
                    ? el
                    : kn(e, 'FBIOS')
                    ? 'Facebook ' + Ou
                    : kn(e, 'UCWEB') || kn(e, 'UCBrowser')
                    ? 'UC Browser'
                    : kn(e, 'CriOS')
                    ? zu
                    : kn(e, 'CrMo')
                    ? Gu
                    : kn(e, Lu) && kn(e, $u)
                    ? al
                    : kn(e, Gu)
                    ? Gu
                    : kn(e, 'FxiOS')
                    ? nl
                    : kn(e.toLowerCase(), vl.toLowerCase())
                    ? vl
                    : Cl(e, t)
                    ? kn(e, Ou)
                        ? sl
                        : $u
                    : kn(e, tl)
                    ? tl
                    : kn(e, 'MSIE') || kn(e, 'Trident/')
                    ? Qu
                    : kn(e, 'Gecko')
                    ? tl
                    : ''
            )
        },
        Sl =
            (l((Cu = {}), Ku, [new RegExp('rv:' + gl)]),
            l(Cu, el, [new RegExp(Xu + '?\\/' + gl)]),
            l(Cu, Gu, [new RegExp('(' + Gu + '|CrMo)\\/' + gl)]),
            l(Cu, zu, [new RegExp('CriOS\\/' + gl)]),
            l(Cu, 'UC Browser', [new RegExp('(UCBrowser|UCWEB)\\/' + gl)]),
            l(Cu, $u, [ml]),
            l(Cu, sl, [ml]),
            l(Cu, Yu, [new RegExp('(Opera|OPR)\\/' + gl)]),
            l(Cu, tl, [new RegExp(tl + '\\/' + gl)]),
            l(Cu, nl, [new RegExp('FxiOS\\/' + gl)]),
            l(Cu, vl, [new RegExp('Konqueror[:/]?' + gl, 'i')]),
            l(Cu, Wu, [new RegExp(Wu + ' ' + gl), ml]),
            l(Cu, al, [new RegExp('android\\s' + gl, 'i')]),
            l(Cu, ju, [new RegExp(Uu + '\\/' + gl)]),
            l(Cu, Qu, [new RegExp('(rv:|MSIE )' + gl)]),
            l(Cu, 'Mozilla', [new RegExp('rv:' + gl)]),
            Cu),
        xl = [
            [
                new RegExp(ol + '; ' + ol + ' (.*?)[);]', 'i'),
                function (e) {
                    return [ol, (e && e[1]) || '']
                },
            ],
            [new RegExp(rl, 'i'), [rl, '']],
            [new RegExp(il, 'i'), [il, '']],
            [kl, [Wu, '']],
            [
                new RegExp(ul, 'i'),
                function (e, t) {
                    if (/Phone/.test(t) || /WPDesktop/.test(t)) return [ll, '']
                    if (new RegExp(Ou).test(t) && !/IEMobile\b/.test(t)) return [ul + ' ' + Ou, '']
                    var n = /Windows NT ([0-9.]+)/i.exec(t)
                    if (n && n[1]) {
                        var r = n[1],
                            i = wl[r] || ''
                        return /arm/i.test(t) && (i = 'RT'), [ul, i]
                    }
                    return [ul, '']
                },
            ],
            [
                /((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,
                function (e) {
                    if (e && e[3]) {
                        var t = [e[3], e[4], e[5] || '0']
                        return [Nu, t.join('.')]
                    }
                    return [Nu, '']
                },
            ],
            [
                /(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,
                function (e) {
                    var t = ''
                    return e && e.length >= 3 && (t = Ut(e[2]) ? e[3] : e[2]), ['watchOS', t]
                },
            ],
            [
                new RegExp('(' + Lu + ' (\\d+)\\.(\\d+)\\.?(\\d+)?|' + Lu + ')', 'i'),
                function (e) {
                    if (e && e[2]) {
                        var t = [e[2], e[3], e[4] || '0']
                        return [Lu, t.join('.')]
                    }
                    return [Lu, '']
                },
            ],
            [
                /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,
                function (e) {
                    var t = ['Mac OS X', '']
                    if (e && e[1]) {
                        var n = [e[1], e[2], e[3] || '0']
                        t[1] = n.join('.')
                    }
                    return t
                },
            ],
            [/Mac/i, ['Mac OS X', '']],
            [/CrOS/, [Zu, '']],
            [/Linux|debian/i, ['Linux', '']],
        ],
        El = function (e) {
            return bl.test(e)
                ? rl
                : yl.test(e)
                ? il
                : _l.test(e)
                ? ol
                : new RegExp(dl, 'i').test(e)
                ? dl
                : new RegExp('(' + ll + '|WPDesktop)', 'i').test(e)
                ? ll
                : /iPad/.test(e)
                ? qu
                : /iPod/.test(e)
                ? 'iPod Touch'
                : /iPhone/.test(e)
                ? 'iPhone'
                : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)
                ? Hu
                : kl.test(e)
                ? Wu
                : /(kobo)\s(ereader|touch)/i.test(e)
                ? 'Kobo'
                : new RegExp(cl, 'i').test(e)
                ? cl
                : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e)
                ? 'Kindle Fire'
                : /(Android|ZTE)/i.test(e)
                ? !new RegExp(Ou).test(e) ||
                  /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)
                    ? (/pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e)) ||
                      /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) ||
                      (/lmy47v/i.test(e) && !/QTAQZ3/i.test(e))
                        ? Lu
                        : Du
                    : Lu
                : new RegExp('(pda|' + Ou + ')', 'i').test(e)
                ? pl
                : new RegExp(Pu, 'i').test(e) && !new RegExp(Pu + ' pc', 'i').test(e)
                ? hl
                : ''
        },
        Tl = 'https?://(.*)',
        Al = [
            'utm_source',
            'utm_medium',
            'utm_campaign',
            'utm_content',
            'utm_term',
            'gclid',
            'gad_source',
            'gclsrc',
            'dclid',
            'gbraid',
            'wbraid',
            'fbclid',
            'msclkid',
            'twclid',
            'li_fat_id',
            'mc_cid',
            'igshid',
            'ttclid',
            'rdt_cid',
        ],
        Ml = {
            campaignParams: function (e) {
                return sn ? this._campaignParamsFromUrl(sn.URL, e) : {}
            },
            _campaignParamsFromUrl: function (e, t) {
                var n = Al.concat(t || []),
                    r = {}
                return (
                    yn(n, function (t) {
                        var n = Pn(e, t)
                        n && (r[t] = n)
                    }),
                    r
                )
            },
            _searchEngine: function (e) {
                return e
                    ? 0 === e.search(Tl + 'google.([^/?]*)')
                        ? 'google'
                        : 0 === e.search(Tl + 'bing.com')
                        ? 'bing'
                        : 0 === e.search(Tl + 'yahoo.com')
                        ? 'yahoo'
                        : 0 === e.search(Tl + 'duckduckgo.com')
                        ? 'duckduckgo'
                        : null
                    : null
            },
            _searchInfoFromReferrer: function (e) {
                var t = Ml._searchEngine(e),
                    n = 'yahoo' != t ? 'q' : 'p',
                    r = {}
                if (!Zt(t)) {
                    r.$search_engine = t
                    var i = sn ? Pn(sn.referrer, n) : ''
                    i.length && (r.ph_keyword = i)
                }
                return r
            },
            searchInfo: function () {
                var e = null == sn ? void 0 : sn.referrer
                return e ? this._searchInfoFromReferrer(e) : {}
            },
            browser: Il,
            browserVersion: function (e, t) {
                var n = Il(e, t),
                    r = Sl[n]
                if (Ut(r)) return null
                for (var i = 0; i < r.length; i++) {
                    var o = r[i],
                        a = e.match(o)
                    if (a) return parseFloat(a[a.length - 2])
                }
                return null
            },
            browserLanguage: function () {
                return navigator.language || navigator.userLanguage
            },
            os: function (e) {
                for (var t = 0; t < xl.length; t++) {
                    var n = d(xl[t], 2),
                        r = n[0],
                        i = n[1],
                        o = r.exec(e),
                        a = o && ($t(i) ? i(o, e) : i)
                    if (a) return a
                }
                return ['', '']
            },
            device: El,
            deviceType: function (e) {
                var t = El(e)
                return t === qu || t === Du || 'Kobo' === t || 'Kindle Fire' === t || t === hl
                    ? Pu
                    : t === rl || t === ol || t === il || t === dl
                    ? 'Console'
                    : t === Hu
                    ? 'Wearable'
                    : t
                    ? Ou
                    : 'Desktop'
            },
            referrer: function () {
                return (null == sn ? void 0 : sn.referrer) || '$direct'
            },
            referringDomain: function () {
                var e
                return (
                    (null != sn && sn.referrer && (null === (e = On(sn.referrer)) || void 0 === e ? void 0 : e.host)) ||
                    '$direct'
                )
            },
            referrerInfo: function () {
                return { $referrer: this.referrer(), $referring_domain: this.referringDomain() }
            },
            initialPersonInfo: function () {
                return { r: this.referrer(), u: null == un ? void 0 : un.href }
            },
            initialPersonPropsFromInfo: function (e) {
                var t,
                    n = e.r,
                    r = e.u,
                    i = {
                        $initial_referrer: n,
                        $initial_referring_domain:
                            null == n
                                ? void 0
                                : '$direct' == n
                                ? '$direct'
                                : null === (t = On(n)) || void 0 === t
                                ? void 0
                                : t.host,
                    }
                if (r) {
                    i.$initial_current_url = r
                    var o = On(r)
                    ;(i.$initial_host = null == o ? void 0 : o.host),
                        (i.$initial_pathname = null == o ? void 0 : o.pathname),
                        yn(this._campaignParamsFromUrl(r), function (e, t) {
                            i['$initial_' + En(t)] = e
                        })
                }
                n &&
                    yn(this._searchInfoFromReferrer(n), function (e, t) {
                        i['$initial_' + En(t)] = e
                    })
                return i
            },
            properties: function () {
                if (!fn) return {}
                var e = d(Ml.os(fn), 2),
                    t = e[0],
                    n = e[1]
                return bn(
                    xn({
                        $os: t,
                        $os_version: n,
                        $browser: Ml.browser(fn, navigator.vendor),
                        $device: Ml.device(fn),
                        $device_type: Ml.deviceType(fn),
                    }),
                    {
                        $current_url: null == un ? void 0 : un.href,
                        $host: null == un ? void 0 : un.host,
                        $pathname: null == un ? void 0 : un.pathname,
                        $raw_user_agent: fn.length > 1e3 ? fn.substring(0, 997) + '...' : fn,
                        $browser_version: Ml.browserVersion(fn, navigator.vendor),
                        $browser_language: Ml.browserLanguage(),
                        $screen_height: null == en ? void 0 : en.screen.height,
                        $screen_width: null == en ? void 0 : en.screen.width,
                        $viewport_height: null == en ? void 0 : en.innerHeight,
                        $viewport_width: null == en ? void 0 : en.innerWidth,
                        $lib: 'web',
                        $lib_version: Xt.LIB_VERSION,
                        $insert_id:
                            Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                        $time: Cn() / 1e3,
                    }
                )
            },
            people_properties: function () {
                if (!fn) return {}
                var e = d(Ml.os(fn), 2),
                    t = e[0],
                    n = e[1]
                return bn(xn({ $os: t, $os_version: n, $browser: Ml.browser(fn, navigator.vendor) }), {
                    $browser_version: Ml.browserVersion(fn, navigator.vendor),
                })
            },
        },
        Rl = ['cookie', 'localstorage', 'localstorage+cookie', 'sessionstorage', 'memory'],
        Fl = (function () {
            function e(n) {
                a(this, e),
                    (this.config = n),
                    (this.props = {}),
                    (this.campaign_params_saved = !1),
                    (this.name = (function (e) {
                        var t = ''
                        return (
                            e.token && (t = e.token.replace(/\+/g, 'PL').replace(/\//g, 'SL').replace(/=/g, 'EQ')),
                            e.persistence_name ? 'ph_' + e.persistence_name : 'ph_' + t + '_posthog'
                        )
                    })(n)),
                    (this.storage = this.buildStorage(n)),
                    this.load(),
                    n.debug && vn.info('Persistence loaded', n.persistence, t({}, this.props)),
                    this.update_config(n, n),
                    this.save()
            }
            return (
                u(e, [
                    {
                        key: 'buildStorage',
                        value: function (e) {
                            ;-1 === Rl.indexOf(e.persistence.toLowerCase()) &&
                                (vn.critical(
                                    'Unknown persistence type ' +
                                        e.persistence +
                                        '; falling back to localStorage+cookie'
                                ),
                                (e.persistence = 'localStorage+cookie'))
                            var t = e.persistence.toLowerCase()
                            return 'localstorage' === t && xu.is_supported()
                                ? xu
                                : 'localstorage+cookie' === t && Tu.is_supported()
                                ? Tu
                                : 'sessionstorage' === t && Fu.is_supported()
                                ? Fu
                                : 'memory' === t
                                ? Mu
                                : 'cookie' === t
                                ? Iu
                                : Tu.is_supported()
                                ? Tu
                                : Iu
                        },
                    },
                    {
                        key: 'properties',
                        value: function () {
                            var e = {}
                            return (
                                yn(this.props, function (t, n) {
                                    if (n === Us && Wt(t))
                                        for (var r = Object.keys(t), i = 0; i < r.length; i++)
                                            e['$feature/'.concat(r[i])] = t[r[i]]
                                    else
                                        (a = n),
                                            (s = !1),
                                            (Zt((o = ou))
                                                ? s
                                                : on && o.indexOf === on
                                                ? -1 != o.indexOf(a)
                                                : (yn(o, function (e) {
                                                      if (s || (s = e === a)) return gn
                                                  }),
                                                  s)) || (e[n] = t)
                                    var o, a, s
                                }),
                                e
                            )
                        },
                    },
                    {
                        key: 'load',
                        value: function () {
                            if (!this.disabled) {
                                var e = this.storage.parse(this.name)
                                e && (this.props = bn({}, e))
                            }
                        },
                    },
                    {
                        key: 'save',
                        value: function () {
                            this.disabled ||
                                this.storage.set(
                                    this.name,
                                    this.props,
                                    this.expire_days,
                                    this.cross_subdomain,
                                    this.secure,
                                    this.config.debug
                                )
                        },
                    },
                    {
                        key: 'remove',
                        value: function () {
                            this.storage.remove(this.name, !1), this.storage.remove(this.name, !0)
                        },
                    },
                    {
                        key: 'clear',
                        value: function () {
                            this.remove(), (this.props = {})
                        },
                    },
                    {
                        key: 'register_once',
                        value: function (e, t, n) {
                            var r = this
                            if (Wt(e)) {
                                Ut(t) && (t = 'None'), (this.expire_days = Ut(n) ? this.default_expiry : n)
                                var i = !1
                                if (
                                    (yn(e, function (e, n) {
                                        ;(r.props.hasOwnProperty(n) && r.props[n] !== t) || ((r.props[n] = e), (i = !0))
                                    }),
                                    i)
                                )
                                    return this.save(), !0
                            }
                            return !1
                        },
                    },
                    {
                        key: 'register',
                        value: function (e, t) {
                            var n = this
                            if (Wt(e)) {
                                this.expire_days = Ut(t) ? this.default_expiry : t
                                var r = !1
                                if (
                                    (yn(e, function (t, i) {
                                        e.hasOwnProperty(i) && n.props[i] !== t && ((n.props[i] = t), (r = !0))
                                    }),
                                    r)
                                )
                                    return this.save(), !0
                            }
                            return !1
                        },
                    },
                    {
                        key: 'unregister',
                        value: function (e) {
                            e in this.props && (delete this.props[e], this.save())
                        },
                    },
                    {
                        key: 'update_campaign_params',
                        value: function () {
                            this.campaign_params_saved ||
                                (this.register(Ml.campaignParams(this.config.custom_campaign_params)),
                                (this.campaign_params_saved = !0))
                        },
                    },
                    {
                        key: 'update_search_keyword',
                        value: function () {
                            this.register(Ml.searchInfo())
                        },
                    },
                    {
                        key: 'update_referrer_info',
                        value: function () {
                            this.register_once(Ml.referrerInfo(), void 0)
                        },
                    },
                    {
                        key: 'set_initial_person_info',
                        value: function () {
                            this.props[eu] ||
                                this.props[tu] ||
                                this.register_once(l({}, nu, Ml.initialPersonInfo()), void 0)
                        },
                    },
                    {
                        key: 'get_referrer_info',
                        value: function () {
                            return xn({
                                $referrer: this.props.$referrer,
                                $referring_domain: this.props.$referring_domain,
                            })
                        },
                    },
                    {
                        key: 'get_initial_props',
                        value: function () {
                            var e = this,
                                t = {}
                            yn([tu, eu], function (n) {
                                var r = e.props[n]
                                r &&
                                    yn(r, function (e, n) {
                                        t['$initial_' + En(n)] = e
                                    })
                            })
                            var n = this.props[nu]
                            if (n) {
                                var r = Ml.initialPersonPropsFromInfo(n)
                                bn(t, r)
                            }
                            return t
                        },
                    },
                    {
                        key: 'safe_merge',
                        value: function (e) {
                            return (
                                yn(this.props, function (t, n) {
                                    n in e || (e[n] = t)
                                }),
                                e
                            )
                        },
                    },
                    {
                        key: 'update_config',
                        value: function (e, t) {
                            if (
                                ((this.default_expiry = this.expire_days = e.cookie_expiration),
                                this.set_disabled(e.disable_persistence),
                                this.set_cross_subdomain(e.cross_subdomain_cookie),
                                this.set_secure(e.secure_cookie),
                                e.persistence !== t.persistence)
                            ) {
                                var n = this.buildStorage(e),
                                    r = this.props
                                this.clear(), (this.storage = n), (this.props = r), this.save()
                            }
                        },
                    },
                    {
                        key: 'set_disabled',
                        value: function (e) {
                            ;(this.disabled = e), this.disabled ? this.remove() : this.save()
                        },
                    },
                    {
                        key: 'set_cross_subdomain',
                        value: function (e) {
                            e !== this.cross_subdomain && ((this.cross_subdomain = e), this.remove(), this.save())
                        },
                    },
                    {
                        key: 'get_cross_subdomain',
                        value: function () {
                            return !!this.cross_subdomain
                        },
                    },
                    {
                        key: 'set_secure',
                        value: function (e) {
                            e !== this.secure && ((this.secure = e), this.remove(), this.save())
                        },
                    },
                    {
                        key: 'set_event_timer',
                        value: function (e, t) {
                            var n = this.props[As] || {}
                            ;(n[e] = t), (this.props[As] = n), this.save()
                        },
                    },
                    {
                        key: 'remove_event_timer',
                        value: function (e) {
                            var t = (this.props[As] || {})[e]
                            return Ut(t) || (delete this.props[As][e], this.save()), t
                        },
                    },
                    {
                        key: 'get_property',
                        value: function (e) {
                            return this.props[e]
                        },
                    },
                    {
                        key: 'set_property',
                        value: function (e, t) {
                            ;(this.props[e] = t), this.save()
                        },
                    },
                ]),
                e
            )
        })()
    function Ol(e) {
        return JSON.stringify(
            e,
            ((t = []),
            function (e, n) {
                if (Wt(n)) {
                    for (; t.length > 0 && t.at(-1) !== this; ) t.pop()
                    return t.includes(n) ? '[Circular]' : (t.push(n), n)
                }
                return n
            })
        ).length
        var t
    }
    var Nl = 2,
        Ll = 4
    function Pl(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8
        if (e.size >= t && e.data.length > 1) {
            var n = Math.floor(e.data.length / 2),
                r = e.data.slice(0, n),
                i = e.data.slice(n)
            return [
                Pl({ size: Ol(r), data: r, sessionId: e.sessionId, windowId: e.windowId }),
                Pl({ size: Ol(i), data: i, sessionId: e.sessionId, windowId: e.windowId }),
            ].flatMap(function (e) {
                return e
            })
        }
        return [e]
    }
    var Dl,
        ql = (function (e) {
            return (
                (e[(e.DomContentLoaded = 0)] = 'DomContentLoaded'),
                (e[(e.Load = 1)] = 'Load'),
                (e[(e.FullSnapshot = 2)] = 'FullSnapshot'),
                (e[(e.IncrementalSnapshot = 3)] = 'IncrementalSnapshot'),
                (e[(e.Meta = 4)] = 'Meta'),
                (e[(e.Custom = 5)] = 'Custom'),
                (e[(e.Plugin = 6)] = 'Plugin'),
                e
            )
        })(ql || {}),
        Bl = (function (e) {
            return (
                (e[(e.Mutation = 0)] = 'Mutation'),
                (e[(e.MouseMove = 1)] = 'MouseMove'),
                (e[(e.MouseInteraction = 2)] = 'MouseInteraction'),
                (e[(e.Scroll = 3)] = 'Scroll'),
                (e[(e.ViewportResize = 4)] = 'ViewportResize'),
                (e[(e.Input = 5)] = 'Input'),
                (e[(e.TouchMove = 6)] = 'TouchMove'),
                (e[(e.MediaInteraction = 7)] = 'MediaInteraction'),
                (e[(e.StyleSheetRule = 8)] = 'StyleSheetRule'),
                (e[(e.CanvasMutation = 9)] = 'CanvasMutation'),
                (e[(e.Font = 10)] = 'Font'),
                (e[(e.Log = 11)] = 'Log'),
                (e[(e.Drag = 12)] = 'Drag'),
                (e[(e.StyleDeclaration = 13)] = 'StyleDeclaration'),
                (e[(e.Selection = 14)] = 'Selection'),
                (e[(e.AdoptedStyleSheet = 15)] = 'AdoptedStyleSheet'),
                (e[(e.CustomElement = 16)] = 'CustomElement'),
                e
            )
        })(Bl || {}),
        Hl = u(function e(t) {
            var n,
                r,
                i = this,
                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            a(this, e),
                l(this, 'bucketSize', 100),
                l(this, 'refillRate', 10),
                l(this, 'mutationBuckets', {}),
                l(this, 'loggedTracker', {}),
                l(this, 'refillBuckets', function () {
                    Object.keys(i.mutationBuckets).forEach(function (e) {
                        ;(i.mutationBuckets[e] = i.mutationBuckets[e] + i.refillRate),
                            i.mutationBuckets[e] >= i.bucketSize && delete i.mutationBuckets[e]
                    })
                }),
                l(this, 'getNodeOrRelevantParent', function (e) {
                    var t = i.rrweb.mirror.getNode(e)
                    if ('svg' !== (null == t ? void 0 : t.nodeName) && t instanceof Element) {
                        var n = t.closest('svg')
                        if (n) return [i.rrweb.mirror.getId(n), n]
                    }
                    return [e, t]
                }),
                l(this, 'numberOfChanges', function (e) {
                    var t, n, r, i, o, a, s, u
                    return (
                        (null !== (t = null === (n = e.removes) || void 0 === n ? void 0 : n.length) && void 0 !== t
                            ? t
                            : 0) +
                        (null !== (r = null === (i = e.attributes) || void 0 === i ? void 0 : i.length) && void 0 !== r
                            ? r
                            : 0) +
                        (null !== (o = null === (a = e.texts) || void 0 === a ? void 0 : a.length) && void 0 !== o
                            ? o
                            : 0) +
                        (null !== (s = null === (u = e.adds) || void 0 === u ? void 0 : u.length) && void 0 !== s
                            ? s
                            : 0)
                    )
                }),
                l(this, 'throttleMutations', function (e) {
                    if (3 !== e.type || 0 !== e.data.source) return e
                    var t = e.data,
                        n = i.numberOfChanges(t)
                    t.attributes &&
                        (t.attributes = t.attributes.filter(function (e) {
                            var t,
                                n,
                                r,
                                o = d(i.getNodeOrRelevantParent(e.id), 2),
                                a = o[0],
                                s = o[1]
                            if (0 === i.mutationBuckets[a]) return !1
                            ;((i.mutationBuckets[a] =
                                null !== (t = i.mutationBuckets[a]) && void 0 !== t ? t : i.bucketSize),
                            (i.mutationBuckets[a] = Math.max(i.mutationBuckets[a] - 1, 0)),
                            0 === i.mutationBuckets[a]) &&
                                (i.loggedTracker[a] ||
                                    ((i.loggedTracker[a] = !0),
                                    null === (n = (r = i.options).onBlockedNode) || void 0 === n || n.call(r, a, s)))
                            return e
                        }))
                    var r = i.numberOfChanges(t)
                    return 0 !== r || n === r ? e : void 0
                }),
                (this.rrweb = t),
                (this.options = o),
                (this.refillRate = null !== (n = this.options.refillRate) && void 0 !== n ? n : this.refillRate),
                (this.bucketSize = null !== (r = this.options.bucketSize) && void 0 !== r ? r : this.bucketSize),
                setInterval(function () {
                    i.refillBuckets()
                }, 1e3)
        }),
        $l = 3e5,
        Wl = [
            Bl.MouseMove,
            Bl.MouseInteraction,
            Bl.Scroll,
            Bl.ViewportResize,
            Bl.Input,
            Bl.TouchMove,
            Bl.MediaInteraction,
            Bl.Drag,
        ],
        Vl = function (e) {
            return { rrwebMethod: e, enqueuedAt: Date.now(), attempt: 1 }
        },
        Ul = '[SessionRecording]',
        jl = (function () {
            function e(t) {
                var n = this
                if (
                    (a(this, e),
                    l(this, 'queuedRRWebEvents', []),
                    l(this, 'isIdle', !1),
                    l(this, '_linkedFlagSeen', !1),
                    l(this, '_lastActivityTimestamp', Date.now()),
                    l(this, '_linkedFlag', null),
                    l(this, '_removePageViewCaptureHook', void 0),
                    l(this, '_forceAllowLocalhostNetworkCapture', !1),
                    l(this, '_onBeforeUnload', function () {
                        n._flushBuffer()
                    }),
                    l(this, '_onOffline', function () {
                        n._tryAddCustomEvent('browser offline', {})
                    }),
                    l(this, '_onOnline', function () {
                        n._tryAddCustomEvent('browser online', {})
                    }),
                    l(this, '_onVisibilityChange', function () {
                        if (null != sn && sn.visibilityState) {
                            var e = 'window ' + sn.visibilityState
                            n._tryAddCustomEvent(e, {})
                        }
                    }),
                    l(this, '_samplingSessionListener', null),
                    (this.instance = t),
                    (this._captureStarted = !1),
                    (this._endpoint = '/s/'),
                    (this.stopRrweb = void 0),
                    (this.receivedDecide = !1),
                    !this.instance.sessionManager)
                )
                    throw (
                        (vn.error(Ul + ' started without valid sessionManager'),
                        new Error(Ul + ' started without valid sessionManager. This is a bug.'))
                    )
                var r = this.sessionManager.checkAndGetSessionAndWindowId(),
                    i = r.sessionId,
                    o = r.windowId
                ;(this.sessionId = i), (this.windowId = o), (this.buffer = this.clearBuffer()), this._setupSampling()
            }
            return (
                u(e, [
                    {
                        key: 'rrwebRecord',
                        get: function () {
                            var e
                            return null == pn || null === (e = pn.rrweb) || void 0 === e ? void 0 : e.record
                        },
                    },
                    {
                        key: 'started',
                        get: function () {
                            return this._captureStarted
                        },
                    },
                    {
                        key: 'sessionManager',
                        get: function () {
                            if (!this.instance.sessionManager)
                                throw new Error(Ul + ' must be started with a valid sessionManager.')
                            return this.instance.sessionManager
                        },
                    },
                    {
                        key: 'fullSnapshotIntervalMillis',
                        get: function () {
                            var e
                            return (
                                (null === (e = this.instance.config.session_recording) || void 0 === e
                                    ? void 0
                                    : e.full_snapshot_interval_millis) || $l
                            )
                        },
                    },
                    {
                        key: 'isSampled',
                        get: function () {
                            var e = this.instance.get_property(Vs)
                            return Kt(e) ? e : null
                        },
                    },
                    {
                        key: 'sessionDuration',
                        get: function () {
                            var e,
                                t,
                                n =
                                    null === (e = this.buffer) || void 0 === e
                                        ? void 0
                                        : e.data[
                                              (null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) - 1
                                          ],
                                r = this.sessionManager.checkAndGetSessionAndWindowId(!0).sessionStartTimestamp
                            return n ? n.timestamp - r : null
                        },
                    },
                    {
                        key: 'isRecordingEnabled',
                        get: function () {
                            var e = !!this.instance.get_property(Ps),
                                t = !this.instance.config.disable_session_recording
                            return en && e && t
                        },
                    },
                    {
                        key: 'isConsoleLogCaptureEnabled',
                        get: function () {
                            var e = !!this.instance.get_property(Ds),
                                t = this.instance.config.enable_recording_console_log
                            return null != t ? t : e
                        },
                    },
                    {
                        key: 'canvasRecording',
                        get: function () {
                            var e = this.instance.get_property(Bs)
                            return e && e.fps && e.quality
                                ? { enabled: e.enabled, fps: e.fps, quality: e.quality }
                                : void 0
                        },
                    },
                    {
                        key: 'networkPayloadCapture',
                        get: function () {
                            var e,
                                t,
                                n = this.instance.get_property(qs),
                                r = {
                                    recordHeaders:
                                        null === (e = this.instance.config.session_recording) || void 0 === e
                                            ? void 0
                                            : e.recordHeaders,
                                    recordBody:
                                        null === (t = this.instance.config.session_recording) || void 0 === t
                                            ? void 0
                                            : t.recordBody,
                                },
                                i = (null == r ? void 0 : r.recordHeaders) || (null == n ? void 0 : n.recordHeaders),
                                o = (null == r ? void 0 : r.recordBody) || (null == n ? void 0 : n.recordBody),
                                a = Wt(this.instance.config.capture_performance)
                                    ? this.instance.config.capture_performance.network_timing
                                    : this.instance.config.capture_performance,
                                s = !!(Kt(a) ? a : null == n ? void 0 : n.capturePerformance)
                            return i || o || s ? { recordHeaders: i, recordBody: o, recordPerformance: s } : void 0
                        },
                    },
                    {
                        key: 'sampleRate',
                        get: function () {
                            var e = this.instance.get_property(Hs)
                            return Qt(e) ? e : null
                        },
                    },
                    {
                        key: 'minimumDuration',
                        get: function () {
                            var e = this.instance.get_property($s)
                            return Qt(e) ? e : null
                        },
                    },
                    {
                        key: 'status',
                        get: function () {
                            return this.receivedDecide
                                ? this.isRecordingEnabled
                                    ? zt(this._linkedFlag) || this._linkedFlagSeen
                                        ? Kt(this.isSampled)
                                            ? this.isSampled
                                                ? 'sampled'
                                                : 'disabled'
                                            : 'active'
                                        : 'buffering'
                                    : 'disabled'
                                : 'buffering'
                        },
                    },
                    {
                        key: 'startIfEnabledOrStop',
                        value: function () {
                            var e = this
                            this.isRecordingEnabled
                                ? (this._startCapture(),
                                  null == en || en.addEventListener('beforeunload', this._onBeforeUnload),
                                  null == en || en.addEventListener('offline', this._onOffline),
                                  null == en || en.addEventListener('online', this._onOnline),
                                  null == en || en.addEventListener('visibilitychange', this._onVisibilityChange),
                                  zt(this._removePageViewCaptureHook) &&
                                      (this._removePageViewCaptureHook = this.instance._addCaptureHook(function (t) {
                                          try {
                                              if ('$pageview' === t) {
                                                  var n = en ? e._maskUrl(en.location.href) : ''
                                                  if (!n) return
                                                  e._tryAddCustomEvent('$pageview', { href: n })
                                              }
                                          } catch (e) {
                                              vn.error('Could not add $pageview to rrweb session', e)
                                          }
                                      })),
                                  vn.info(Ul + ' started'))
                                : this.stopRecording()
                        },
                    },
                    {
                        key: 'stopRecording',
                        value: function () {
                            var e
                            this._captureStarted &&
                                this.stopRrweb &&
                                (this.stopRrweb(),
                                (this.stopRrweb = void 0),
                                (this._captureStarted = !1),
                                null == en || en.removeEventListener('beforeunload', this._onBeforeUnload),
                                null == en || en.removeEventListener('offline', this._onOffline),
                                null == en || en.removeEventListener('online', this._onOnline),
                                null == en || en.removeEventListener('visibilitychange', this._onVisibilityChange),
                                this.clearBuffer(),
                                clearInterval(this._fullSnapshotTimer),
                                null === (e = this._removePageViewCaptureHook) || void 0 === e || e.call(this),
                                (this._removePageViewCaptureHook = void 0),
                                vn.info(Ul + ' stopped'))
                        },
                    },
                    {
                        key: 'makeSamplingDecision',
                        value: function (e) {
                            var t,
                                n = this.sessionId !== e,
                                r = this.sampleRate
                            if (Qt(r)) {
                                var i,
                                    o = this.isSampled,
                                    a = n || !Kt(o)
                                if (a) i = Math.random() < r
                                else i = o
                                !i &&
                                    a &&
                                    vn.warn(
                                        Ul +
                                            ' Sample rate ('
                                                .concat(r, ') has determined that this sessionId (')
                                                .concat(e, ') will not be sent to the server.')
                                    ),
                                    this._tryAddCustomEvent('samplingDecisionMade', { sampleRate: r }),
                                    null === (t = this.instance.persistence) || void 0 === t || t.register(l({}, Vs, i))
                            } else {
                                var s
                                null === (s = this.instance.persistence) || void 0 === s || s.register(l({}, Vs, null))
                            }
                        },
                    },
                    {
                        key: 'afterDecideResponse',
                        value: function (e) {
                            var t,
                                n,
                                r,
                                i = this
                            ;(this._persistDecideResponse(e),
                            (this._linkedFlag =
                                (null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.linkedFlag) || null),
                            null !== (n = e.sessionRecording) && void 0 !== n && n.endpoint) &&
                                (this._endpoint =
                                    null === (r = e.sessionRecording) || void 0 === r ? void 0 : r.endpoint)
                            if ((this._setupSampling(), !zt(this._linkedFlag) && !this._linkedFlagSeen)) {
                                var o = jt(this._linkedFlag) ? this._linkedFlag : this._linkedFlag.flag,
                                    a = jt(this._linkedFlag) ? null : this._linkedFlag.variant
                                this.instance.onFeatureFlags(function (e, t) {
                                    var n = Wt(t) && o in t,
                                        r = a ? t[o] === a : n
                                    if (r) {
                                        var s = { linkedFlag: o, linkedVariant: a },
                                            u = 'linked flag matched'
                                        vn.info(Ul + ' ' + u, s), i._tryAddCustomEvent(u, s)
                                    }
                                    i._linkedFlagSeen = r
                                })
                            }
                            ;(this.receivedDecide = !0), this.startIfEnabledOrStop()
                        },
                    },
                    {
                        key: '_setupSampling',
                        value: function () {
                            var e = this
                            Qt(this.sampleRate) &&
                                Zt(this._samplingSessionListener) &&
                                (this._samplingSessionListener = this.sessionManager.onSessionId(function (t) {
                                    e.makeSamplingDecision(t)
                                }))
                        },
                    },
                    {
                        key: '_persistDecideResponse',
                        value: function (e) {
                            if (this.instance.persistence) {
                                var n = this.instance.persistence,
                                    r = function () {
                                        var r,
                                            i,
                                            o,
                                            a,
                                            s,
                                            u,
                                            c,
                                            d,
                                            f =
                                                null === (r = e.sessionRecording) || void 0 === r
                                                    ? void 0
                                                    : r.sampleRate,
                                            p = zt(f) ? null : parseFloat(f),
                                            h =
                                                null === (i = e.sessionRecording) || void 0 === i
                                                    ? void 0
                                                    : i.minimumDurationMilliseconds
                                        n.register(
                                            (l((d = {}), Ps, !!e.sessionRecording),
                                            l(
                                                d,
                                                Ds,
                                                null === (o = e.sessionRecording) || void 0 === o
                                                    ? void 0
                                                    : o.consoleLogRecordingEnabled
                                            ),
                                            l(
                                                d,
                                                qs,
                                                t(
                                                    { capturePerformance: e.capturePerformance },
                                                    null === (a = e.sessionRecording) || void 0 === a
                                                        ? void 0
                                                        : a.networkPayloadCapture
                                                )
                                            ),
                                            l(d, Bs, {
                                                enabled:
                                                    null === (s = e.sessionRecording) || void 0 === s
                                                        ? void 0
                                                        : s.recordCanvas,
                                                fps:
                                                    null === (u = e.sessionRecording) || void 0 === u
                                                        ? void 0
                                                        : u.canvasFps,
                                                quality:
                                                    null === (c = e.sessionRecording) || void 0 === c
                                                        ? void 0
                                                        : c.canvasQuality,
                                            }),
                                            l(d, Hs, p),
                                            l(d, $s, Ut(h) ? null : h),
                                            d)
                                        )
                                    }
                                r(), this.sessionManager.onSessionId(r)
                            }
                        },
                    },
                    {
                        key: 'log',
                        value: function (e) {
                            var t,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'log'
                            null === (t = this.instance.sessionRecording) ||
                                void 0 === t ||
                                t.onRRwebEmit({
                                    type: 6,
                                    data: {
                                        plugin: 'rrweb/console@1',
                                        payload: { level: n, trace: [], payload: [JSON.stringify(e)] },
                                    },
                                    timestamp: Cn(),
                                })
                        },
                    },
                    {
                        key: '_startCapture',
                        value: function () {
                            var e = this
                            Ut(Object.assign) ||
                                this._captureStarted ||
                                this.instance.config.disable_session_recording ||
                                this.instance.consent.isOptedOut() ||
                                ((this._captureStarted = !0),
                                this.sessionManager.checkAndGetSessionAndWindowId(),
                                this.rrwebRecord
                                    ? this._onScriptLoaded()
                                    : this.instance.requestRouter.loadScript(
                                          '/static/recorder.js?v='.concat(Xt.LIB_VERSION),
                                          function (t) {
                                              if (t) return vn.error(Ul + ' could not load recorder.js', t)
                                              e._onScriptLoaded()
                                          }
                                      ))
                        },
                    },
                    {
                        key: 'isInteractiveEvent',
                        value: function (e) {
                            var t
                            return (
                                3 === e.type &&
                                -1 !== Wl.indexOf(null === (t = e.data) || void 0 === t ? void 0 : t.source)
                            )
                        },
                    },
                    {
                        key: '_updateWindowAndSessionIds',
                        value: function (e) {
                            var t = this.isInteractiveEvent(e)
                            t ||
                                this.isIdle ||
                                (e.timestamp - this._lastActivityTimestamp > 3e5 &&
                                    ((this.isIdle = !0), clearInterval(this._fullSnapshotTimer), this._flushBuffer()))
                            var n = !1
                            if (
                                (t &&
                                    ((this._lastActivityTimestamp = e.timestamp),
                                    this.isIdle &&
                                        ((this.isIdle = !1),
                                        this._tryAddCustomEvent('sessionNoLongerIdle', {
                                            reason: 'user activity',
                                            type: e.type,
                                        }),
                                        (n = !0))),
                                !this.isIdle)
                            ) {
                                var r = this.sessionManager.checkAndGetSessionAndWindowId(!t, e.timestamp),
                                    i = r.windowId,
                                    o = r.sessionId,
                                    a = this.sessionId !== o,
                                    s = this.windowId !== i
                                ;(this.windowId = i),
                                    (this.sessionId = o),
                                    (n ||
                                        (-1 === [Nl, Ll].indexOf(e.type) && (s || a || Ut(this._fullSnapshotTimer)))) &&
                                        this._tryTakeFullSnapshot()
                            }
                        },
                    },
                    {
                        key: '_tryRRWebMethod',
                        value: function (e) {
                            try {
                                return e.rrwebMethod(), !0
                            } catch (t) {
                                return (
                                    this.queuedRRWebEvents.length < 10
                                        ? this.queuedRRWebEvents.push({
                                              enqueuedAt: e.enqueuedAt || Date.now(),
                                              attempt: e.attempt++,
                                              rrwebMethod: e.rrwebMethod,
                                          })
                                        : vn.warn(Ul + ' could not emit queued rrweb event.', t, e),
                                    !1
                                )
                            }
                        },
                    },
                    {
                        key: '_tryAddCustomEvent',
                        value: function (e, t) {
                            var n = this
                            return this._tryRRWebMethod(
                                Vl(function () {
                                    return n.rrwebRecord.addCustomEvent(e, t)
                                })
                            )
                        },
                    },
                    {
                        key: '_tryTakeFullSnapshot',
                        value: function () {
                            var e = this
                            return this._tryRRWebMethod(
                                Vl(function () {
                                    return e.rrwebRecord.takeFullSnapshot()
                                })
                            )
                        },
                    },
                    {
                        key: '_onScriptLoaded',
                        value: function () {
                            for (
                                var e,
                                    n = this,
                                    r = {
                                        blockClass: 'ph-no-capture',
                                        blockSelector: void 0,
                                        ignoreClass: 'ph-ignore-input',
                                        maskTextClass: 'ph-mask',
                                        maskTextSelector: void 0,
                                        maskTextFn: void 0,
                                        maskAllInputs: !0,
                                        maskInputOptions: { password: !0 },
                                        maskInputFn: void 0,
                                        slimDOMOptions: {},
                                        collectFonts: !1,
                                        inlineStylesheet: !0,
                                        recordCrossOriginIframes: !1,
                                    },
                                    i = this.instance.config.session_recording,
                                    o = 0,
                                    a = Object.entries(i || {});
                                o < a.length;
                                o++
                            ) {
                                var s = d(a[o], 2),
                                    u = s[0],
                                    l = s[1]
                                u in r &&
                                    ('maskInputOptions' === u
                                        ? (r.maskInputOptions = t({ password: !0 }, l))
                                        : (r[u] = l))
                            }
                            if (
                                (this.canvasRecording &&
                                    this.canvasRecording.enabled &&
                                    ((r.recordCanvas = !0),
                                    (r.sampling = { canvas: this.canvasRecording.fps }),
                                    (r.dataURLOptions = { type: 'image/webp', quality: this.canvasRecording.quality })),
                                this.rrwebRecord)
                            ) {
                                this.mutationRateLimiter =
                                    null !== (e = this.mutationRateLimiter) && void 0 !== e
                                        ? e
                                        : new Hl(this.rrwebRecord, {
                                              onBlockedNode: function (e, t) {
                                                  var r = "Too many mutations on node '".concat(
                                                      e,
                                                      "'. Rate limiting. This could be due to SVG animations or something similar"
                                                  )
                                                  vn.info(r, { node: t }), n.log(Ul + ' ' + r, 'warn')
                                              },
                                          })
                                var c = this._gatherRRWebPlugins()
                                ;(this.stopRrweb = this.rrwebRecord(
                                    t(
                                        {
                                            emit: function (e) {
                                                n.onRRwebEmit(e)
                                            },
                                            plugins: c,
                                        },
                                        r
                                    )
                                )),
                                    (this._lastActivityTimestamp = Date.now()),
                                    (this.isIdle = !1),
                                    this._tryAddCustomEvent('$session_options', {
                                        sessionRecordingOptions: r,
                                        activePlugins: c.map(function (e) {
                                            return null == e ? void 0 : e.name
                                        }),
                                    }),
                                    this._tryAddCustomEvent('$posthog_config', { config: this.instance.config })
                            } else
                                vn.error(
                                    Ul +
                                        'onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.'
                                )
                        },
                    },
                    {
                        key: '_scheduleFullSnapshot',
                        value: function () {
                            var e = this
                            if ((this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), !this.isIdle)) {
                                var t = this.fullSnapshotIntervalMillis
                                t &&
                                    (this._fullSnapshotTimer = setInterval(function () {
                                        e._tryTakeFullSnapshot()
                                    }, t))
                            }
                        },
                    },
                    {
                        key: '_gatherRRWebPlugins',
                        value: function () {
                            var e = []
                            ;(pn.rrwebConsoleRecord &&
                                this.isConsoleLogCaptureEnabled &&
                                e.push(pn.rrwebConsoleRecord.getRecordConsolePlugin()),
                            this.networkPayloadCapture && $t(pn.getRecordNetworkPlugin)) &&
                                (!Fn.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture
                                    ? e.push(
                                          pn.getRecordNetworkPlugin(
                                              _r(this.instance.config, this.networkPayloadCapture)
                                          )
                                      )
                                    : vn.info(Ul + ' NetworkCapture not started because we are on localhost.'))
                            return e
                        },
                    },
                    {
                        key: 'onRRwebEmit',
                        value: function (e) {
                            if ((this._processQueuedEvents(), e && Wt(e))) {
                                if (e.type === ql.Meta) {
                                    var t = this._maskUrl(e.data.href)
                                    if (((this._lastHref = t), !t)) return
                                    e.data.href = t
                                } else this._pageViewFallBack()
                                e.type === ql.FullSnapshot && this._scheduleFullSnapshot()
                                var n = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e) : e
                                if (n) {
                                    var r = (function (e) {
                                            var t = e
                                            if (
                                                t &&
                                                Wt(t) &&
                                                6 === t.type &&
                                                Wt(t.data) &&
                                                'rrweb/console@1' === t.data.plugin
                                            ) {
                                                t.data.payload.payload.length > 10 &&
                                                    ((t.data.payload.payload = t.data.payload.payload.slice(0, 10)),
                                                    t.data.payload.payload.push('...[truncated]'))
                                                for (var n = [], r = 0; r < t.data.payload.payload.length; r++)
                                                    t.data.payload.payload[r] && t.data.payload.payload[r].length > 2e3
                                                        ? n.push(
                                                              t.data.payload.payload[r].slice(0, 2e3) + '...[truncated]'
                                                          )
                                                        : n.push(t.data.payload.payload[r])
                                                return (t.data.payload.payload = n), e
                                            }
                                            return e
                                        })(n),
                                        i = Ol(r)
                                    if ((this._updateWindowAndSessionIds(r), !this.isIdle || r.type === ql.Custom)) {
                                        var o = {
                                            $snapshot_bytes: i,
                                            $snapshot_data: r,
                                            $session_id: this.sessionId,
                                            $window_id: this.windowId,
                                        }
                                        'disabled' !== this.status
                                            ? this._captureSnapshotBuffered(o)
                                            : this.clearBuffer()
                                    }
                                }
                            }
                        },
                    },
                    {
                        key: '_pageViewFallBack',
                        value: function () {
                            if (!this.instance.config.capture_pageview && en) {
                                var e = this._maskUrl(en.location.href)
                                this._lastHref !== e &&
                                    (this._tryAddCustomEvent('$url_changed', { href: e }), (this._lastHref = e))
                            }
                        },
                    },
                    {
                        key: '_processQueuedEvents',
                        value: function () {
                            var e = this
                            if (this.queuedRRWebEvents.length) {
                                var t = f(this.queuedRRWebEvents)
                                ;(this.queuedRRWebEvents = []),
                                    t.forEach(function (t) {
                                        Date.now() - t.enqueuedAt <= 2e3 && e._tryRRWebMethod(t)
                                    })
                            }
                        },
                    },
                    {
                        key: '_maskUrl',
                        value: function (e) {
                            var t = this.instance.config.session_recording
                            if (t.maskNetworkRequestFn) {
                                var n,
                                    r = { url: e }
                                return null === (n = r = t.maskNetworkRequestFn(r)) || void 0 === n ? void 0 : n.url
                            }
                            return e
                        },
                    },
                    {
                        key: 'clearBuffer',
                        value: function () {
                            return (
                                (this.buffer = {
                                    size: 0,
                                    data: [],
                                    sessionId: this.sessionId,
                                    windowId: this.windowId,
                                }),
                                this.buffer
                            )
                        },
                    },
                    {
                        key: '_flushBuffer',
                        value: function () {
                            var e = this
                            this.flushBufferTimer &&
                                (clearTimeout(this.flushBufferTimer), (this.flushBufferTimer = void 0))
                            var t = this.minimumDuration,
                                n = this.sessionDuration,
                                r = Qt(n) && n >= 0,
                                i = Qt(t) && r && n < t
                            if ('buffering' === this.status || i)
                                return (
                                    (this.flushBufferTimer = setTimeout(function () {
                                        e._flushBuffer()
                                    }, 2e3)),
                                    this.buffer
                                )
                            this.buffer.data.length > 0 &&
                                Pl(this.buffer).forEach(function (t) {
                                    e._captureSnapshot({
                                        $snapshot_bytes: t.size,
                                        $snapshot_data: t.data,
                                        $session_id: t.sessionId,
                                        $window_id: t.windowId,
                                    })
                                })
                            return this.clearBuffer()
                        },
                    },
                    {
                        key: '_captureSnapshotBuffered',
                        value: function (e) {
                            var t,
                                n = this,
                                r = 2 + ((null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) || 0)
                            !this.isIdle &&
                                (this.buffer.size + e.$snapshot_bytes + r > 943718.4 ||
                                    this.buffer.sessionId !== this.sessionId) &&
                                (this.buffer = this._flushBuffer()),
                                (this.buffer.size += e.$snapshot_bytes),
                                this.buffer.data.push(e.$snapshot_data),
                                this.flushBufferTimer ||
                                    this.isIdle ||
                                    (this.flushBufferTimer = setTimeout(function () {
                                        n._flushBuffer()
                                    }, 2e3))
                        },
                    },
                    {
                        key: '_captureSnapshot',
                        value: function (e) {
                            this.instance.capture('$snapshot', e, {
                                _url: this.instance.requestRouter.endpointFor('api', this._endpoint),
                                _noTruncate: !0,
                                _batchKey: 'recordings',
                                skip_client_rate_limiting: !0,
                            })
                        },
                    },
                    {
                        key: 'overrideLinkedFlag',
                        value: function () {
                            this._linkedFlagSeen = !0
                        },
                    },
                ]),
                e
            )
        })(),
        Gl = (function () {
            function e(t) {
                a(this, e),
                    (this.instance = t),
                    (this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags())
            }
            return (
                u(e, [
                    {
                        key: 'call',
                        value: function () {
                            var e = this,
                                t = {
                                    token: this.instance.config.token,
                                    distinct_id: this.instance.get_distinct_id(),
                                    groups: this.instance.getGroups(),
                                    person_properties: this.instance.get_property(Gs),
                                    group_properties: this.instance.get_property(Zs),
                                    disable_flags:
                                        this.instance.config.advanced_disable_feature_flags ||
                                        this.instance.config.advanced_disable_feature_flags_on_first_load ||
                                        void 0,
                                }
                            this.instance._send_request({
                                method: 'POST',
                                url: this.instance.requestRouter.endpointFor('api', '/decide/?v=3'),
                                data: t,
                                compression: this.instance.config.disable_compression ? void 0 : la.Base64,
                                timeout: this.instance.config.feature_flag_request_timeout_ms,
                                callback: function (t) {
                                    return e.parseDecideResponse(t.json)
                                },
                            })
                        },
                    },
                    {
                        key: 'parseDecideResponse',
                        value: function (e) {
                            var t = this
                            this.instance.featureFlags.setReloadingPaused(!1),
                                this.instance.featureFlags._startReloadTimer()
                            var n = !e
                            if (
                                (this.instance.config.advanced_disable_feature_flags_on_first_load ||
                                    this.instance.config.advanced_disable_feature_flags ||
                                    this.instance.featureFlags.receivedFeatureFlags(null != e ? e : {}, n),
                                n)
                            )
                                vn.error('Failed to fetch feature flags from PostHog.')
                            else {
                                if (!sn || !sn.body)
                                    return (
                                        vn.info('document not ready yet, trying again in 500 milliseconds...'),
                                        void setTimeout(function () {
                                            t.parseDecideResponse(e)
                                        }, 500)
                                    )
                                if ((this.instance._afterDecideResponse(e), e.siteApps))
                                    if (this.instance.config.opt_in_site_apps) {
                                        var r,
                                            i = v(e.siteApps)
                                        try {
                                            var o = function () {
                                                var e = r.value,
                                                    n = e.id,
                                                    i = e.url,
                                                    o = t.instance.requestRouter.endpointFor('api', i)
                                                ;(pn['__$$ph_site_app_'.concat(n)] = t.instance),
                                                    t.instance.requestRouter.loadScript(o, function (e) {
                                                        if (e)
                                                            return vn.error(
                                                                'Error while initializing PostHog app with config id '.concat(
                                                                    n
                                                                ),
                                                                e
                                                            )
                                                    })
                                            }
                                            for (i.s(); !(r = i.n()).done; ) o()
                                        } catch (e) {
                                            i.e(e)
                                        } finally {
                                            i.f()
                                        }
                                    } else
                                        e.siteApps.length > 0 &&
                                            vn.error(
                                                'PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.'
                                            )
                            }
                        },
                    },
                ]),
                e
            )
        })(),
        Zl = null != en && en.location ? Dn(en.location.hash, '__posthog') || Dn(location.hash, 'state') : null,
        zl = '_postHogToolbarParams'
    !(function (e) {
        ;(e[(e.UNINITIALIZED = 0)] = 'UNINITIALIZED'), (e[(e.LOADING = 1)] = 'LOADING'), (e[(e.LOADED = 2)] = 'LOADED')
    })(Dl || (Dl = {}))
    var Ql = (function () {
            function e(t) {
                a(this, e), (this.instance = t)
            }
            return (
                u(e, [
                    {
                        key: 'setToolbarState',
                        value: function (e) {
                            pn.ph_toolbar_state = e
                        },
                    },
                    {
                        key: 'getToolbarState',
                        value: function () {
                            var e
                            return null !== (e = pn.ph_toolbar_state) && void 0 !== e ? e : Dl.UNINITIALIZED
                        },
                    },
                    {
                        key: 'maybeLoadToolbar',
                        value: function () {
                            var e,
                                t,
                                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0
                            if (!en || !sn) return !1
                            ;(n = null !== (e = n) && void 0 !== e ? e : en.location),
                                (i = null !== (t = i) && void 0 !== t ? t : en.history)
                            try {
                                if (!r) {
                                    try {
                                        en.localStorage.setItem('test', 'test'), en.localStorage.removeItem('test')
                                    } catch (e) {
                                        return !1
                                    }
                                    r = null == en ? void 0 : en.localStorage
                                }
                                var o,
                                    a = Zl || Dn(n.hash, '__posthog') || Dn(n.hash, 'state'),
                                    s = a
                                        ? In(function () {
                                              return JSON.parse(atob(decodeURIComponent(a)))
                                          }) ||
                                          In(function () {
                                              return JSON.parse(decodeURIComponent(a))
                                          })
                                        : null
                                return (
                                    s && 'ph_authorize' === s.action
                                        ? (((o = s).source = 'url'),
                                          o &&
                                              Object.keys(o).length > 0 &&
                                              (s.desiredHash
                                                  ? (n.hash = s.desiredHash)
                                                  : i
                                                  ? i.replaceState(i.state, '', n.pathname + n.search)
                                                  : (n.hash = '')))
                                        : (((o = JSON.parse(r.getItem(zl) || '{}')).source = 'localstorage'),
                                          delete o.userIntent),
                                    !(!o.token || this.instance.config.token !== o.token) && (this.loadToolbar(o), !0)
                                )
                            } catch (e) {
                                return !1
                            }
                        },
                    },
                    {
                        key: '_callLoadToolbar',
                        value: function (e) {
                            ;(pn.ph_load_toolbar || pn.ph_load_editor)(e, this.instance)
                        },
                    },
                    {
                        key: 'loadToolbar',
                        value: function (e) {
                            var n = this,
                                r = !(null == sn || !sn.getElementById(iu))
                            if (!en || r) return !1
                            var i =
                                    'custom' === this.instance.requestRouter.region &&
                                    this.instance.config.advanced_disable_toolbar_metrics,
                                o = t(
                                    t({ token: this.instance.config.token }, e),
                                    {},
                                    { apiURL: this.instance.requestRouter.endpointFor('ui') },
                                    i ? { instrument: !1 } : {}
                                )
                            if (
                                (en.localStorage.setItem(zl, JSON.stringify(t(t({}, o), {}, { source: void 0 }))),
                                this.getToolbarState() === Dl.LOADED)
                            )
                                this._callLoadToolbar(o)
                            else if (this.getToolbarState() === Dl.UNINITIALIZED) {
                                this.setToolbarState(Dl.LOADING)
                                var a = 3e5,
                                    s = Math.floor(Date.now() / a) * a
                                this.instance.requestRouter.loadScript('/static/toolbar.js?t='.concat(s), function (e) {
                                    if (e)
                                        return (
                                            vn.error('Failed to load toolbar', e),
                                            void n.setToolbarState(Dl.UNINITIALIZED)
                                        )
                                    n.setToolbarState(Dl.LOADED), n._callLoadToolbar(o)
                                }),
                                    Mn(en, 'turbolinks:load', function () {
                                        n.setToolbarState(Dl.UNINITIALIZED), n.loadToolbar(o)
                                    })
                            }
                            return !0
                        },
                    },
                    {
                        key: '_loadEditor',
                        value: function (e) {
                            return this.loadToolbar(e)
                        },
                    },
                    {
                        key: 'maybeLoadEditor',
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0
                            return this.maybeLoadToolbar(e, t, n)
                        },
                    },
                ]),
                e
            )
        })(),
        Kl = (function () {
            function e(t) {
                a(this, e),
                    l(this, 'isPaused', !0),
                    l(this, 'queue', []),
                    l(this, 'flushTimeoutMs', 3e3),
                    (this.sendRequest = t)
            }
            return (
                u(e, [
                    {
                        key: 'enqueue',
                        value: function (e) {
                            this.queue.push(e), this.flushTimeout || this.setFlushTimeout()
                        },
                    },
                    {
                        key: 'unload',
                        value: function () {
                            var e = this
                            this.clearFlushTimeout()
                            var n = this.queue.length > 0 ? this.formatQueue() : {},
                                r = Object.values(n),
                                i = [].concat(
                                    f(
                                        r.filter(function (e) {
                                            return 0 === e.url.indexOf('/e')
                                        })
                                    ),
                                    f(
                                        r.filter(function (e) {
                                            return 0 !== e.url.indexOf('/e')
                                        })
                                    )
                                )
                            i.map(function (n) {
                                e.sendRequest(t(t({}, n), {}, { transport: 'sendBeacon' }))
                            })
                        },
                    },
                    {
                        key: 'enable',
                        value: function () {
                            ;(this.isPaused = !1), this.setFlushTimeout()
                        },
                    },
                    {
                        key: 'setFlushTimeout',
                        value: function () {
                            var e = this
                            this.isPaused ||
                                (this.flushTimeout = setTimeout(function () {
                                    if ((e.clearFlushTimeout(), e.queue.length > 0)) {
                                        var t = e.formatQueue(),
                                            n = function (n) {
                                                var r = t[n],
                                                    i = new Date().getTime()
                                                r.data &&
                                                    Ht(r.data) &&
                                                    yn(r.data, function (e) {
                                                        ;(e.offset = Math.abs(e.timestamp - i)), delete e.timestamp
                                                    }),
                                                    e.sendRequest(r)
                                            }
                                        for (var r in t) n(r)
                                    }
                                }, this.flushTimeoutMs))
                        },
                    },
                    {
                        key: 'clearFlushTimeout',
                        value: function () {
                            clearTimeout(this.flushTimeout), (this.flushTimeout = void 0)
                        },
                    },
                    {
                        key: 'formatQueue',
                        value: function () {
                            var e = {}
                            return (
                                yn(this.queue, function (n) {
                                    var r,
                                        i = n,
                                        o = (i ? i.batchKey : null) || i.url
                                    Ut(e[o]) && (e[o] = t(t({}, i), {}, { data: [] })),
                                        null === (r = e[o].data) || void 0 === r || r.push(i.data)
                                }),
                                (this.queue = []),
                                e
                            )
                        },
                    },
                ]),
                e
            )
        })(),
        Yl = Uint8Array,
        Jl = Uint16Array,
        Xl = Uint32Array,
        ec = new Yl([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        tc = new Yl([
            0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0,
        ]),
        nc = new Yl([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        rc = function (e, t) {
            for (var n = new Jl(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1]
            var i = new Xl(n[30])
            for (r = 1; r < 30; ++r) for (var o = n[r]; o < n[r + 1]; ++o) i[o] = ((o - n[r]) << 5) | r
            return [n, i]
        },
        ic = rc(ec, 2),
        oc = ic[0],
        ac = ic[1]
    ;(oc[28] = 258), (ac[258] = 28)
    for (var sc = rc(tc, 0)[1], uc = new Jl(32768), lc = 0; lc < 32768; ++lc) {
        var cc = ((43690 & lc) >>> 1) | ((21845 & lc) << 1)
        ;(cc = ((61680 & (cc = ((52428 & cc) >>> 2) | ((13107 & cc) << 2))) >>> 4) | ((3855 & cc) << 4)),
            (uc[lc] = (((65280 & cc) >>> 8) | ((255 & cc) << 8)) >>> 1)
    }
    var dc = function (e, t, n) {
            for (var r = e.length, i = 0, o = new Jl(t); i < r; ++i) ++o[e[i] - 1]
            var a,
                s = new Jl(t)
            for (i = 0; i < t; ++i) s[i] = (s[i - 1] + o[i - 1]) << 1
            if (n) {
                a = new Jl(1 << t)
                var u = 15 - t
                for (i = 0; i < r; ++i)
                    if (e[i])
                        for (
                            var l = (i << 4) | e[i], c = t - e[i], d = s[e[i] - 1]++ << c, f = d | ((1 << c) - 1);
                            d <= f;
                            ++d
                        )
                            a[uc[d] >>> u] = l
            } else for (a = new Jl(r), i = 0; i < r; ++i) a[i] = uc[s[e[i] - 1]++] >>> (15 - e[i])
            return a
        },
        fc = new Yl(288)
    for (lc = 0; lc < 144; ++lc) fc[lc] = 8
    for (lc = 144; lc < 256; ++lc) fc[lc] = 9
    for (lc = 256; lc < 280; ++lc) fc[lc] = 7
    for (lc = 280; lc < 288; ++lc) fc[lc] = 8
    var pc = new Yl(32)
    for (lc = 0; lc < 32; ++lc) pc[lc] = 5
    var hc = dc(fc, 9, 0),
        vc = dc(pc, 5, 0),
        gc = function (e) {
            return ((e / 8) >> 0) + (7 & e && 1)
        },
        mc = function (e, t, n) {
            ;(null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length)
            var r = new (e instanceof Jl ? Jl : e instanceof Xl ? Xl : Yl)(n - t)
            return r.set(e.subarray(t, n)), r
        },
        _c = function (e, t, n) {
            n <<= 7 & t
            var r = (t / 8) >> 0
            ;(e[r] |= n), (e[r + 1] |= n >>> 8)
        },
        yc = function (e, t, n) {
            n <<= 7 & t
            var r = (t / 8) >> 0
            ;(e[r] |= n), (e[r + 1] |= n >>> 8), (e[r + 2] |= n >>> 16)
        },
        bc = function (e, t) {
            for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({ s: r, f: e[r] })
            var i = n.length,
                o = n.slice()
            if (!i) return [new Yl(0), 0]
            if (1 == i) {
                var a = new Yl(n[0].s + 1)
                return (a[n[0].s] = 1), [a, 1]
            }
            n.sort(function (e, t) {
                return e.f - t.f
            }),
                n.push({ s: -1, f: 25001 })
            var s = n[0],
                u = n[1],
                l = 0,
                c = 1,
                d = 2
            for (n[0] = { s: -1, f: s.f + u.f, l: s, r: u }; c != i - 1; )
                (s = n[n[l].f < n[d].f ? l++ : d++]),
                    (u = n[l != c && n[l].f < n[d].f ? l++ : d++]),
                    (n[c++] = { s: -1, f: s.f + u.f, l: s, r: u })
            var f = o[0].s
            for (r = 1; r < i; ++r) o[r].s > f && (f = o[r].s)
            var p = new Jl(f + 1),
                h = kc(n[c - 1], p, 0)
            if (h > t) {
                r = 0
                var v = 0,
                    g = h - t,
                    m = 1 << g
                for (
                    o.sort(function (e, t) {
                        return p[t.s] - p[e.s] || e.f - t.f
                    });
                    r < i;
                    ++r
                ) {
                    var _ = o[r].s
                    if (!(p[_] > t)) break
                    ;(v += m - (1 << (h - p[_]))), (p[_] = t)
                }
                for (v >>>= g; v > 0; ) {
                    var y = o[r].s
                    p[y] < t ? (v -= 1 << (t - p[y]++ - 1)) : ++r
                }
                for (; r >= 0 && v; --r) {
                    var b = o[r].s
                    p[b] == t && (--p[b], ++v)
                }
                h = t
            }
            return [new Yl(p), h]
        },
        kc = function e(t, n, r) {
            return -1 == t.s ? Math.max(e(t.l, n, r + 1), e(t.r, n, r + 1)) : (n[t.s] = r)
        },
        wc = function (e) {
            for (var t = e.length; t && !e[--t]; );
            for (
                var n = new Jl(++t),
                    r = 0,
                    i = e[0],
                    o = 1,
                    a = function (e) {
                        n[r++] = e
                    },
                    s = 1;
                s <= t;
                ++s
            )
                if (e[s] == i && s != t) ++o
                else {
                    if (!i && o > 2) {
                        for (; o > 138; o -= 138) a(32754)
                        o > 2 && (a(o > 10 ? ((o - 11) << 5) | 28690 : ((o - 3) << 5) | 12305), (o = 0))
                    } else if (o > 3) {
                        for (a(i), --o; o > 6; o -= 6) a(8304)
                        o > 2 && (a(((o - 3) << 5) | 8208), (o = 0))
                    }
                    for (; o--; ) a(i)
                    ;(o = 1), (i = e[s])
                }
            return [n.subarray(0, r), t]
        },
        Cc = function (e, t) {
            for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r]
            return n
        },
        Ic = function (e, t, n) {
            var r = n.length,
                i = gc(t + 2)
            ;(e[i] = 255 & r), (e[i + 1] = r >>> 8), (e[i + 2] = 255 ^ e[i]), (e[i + 3] = 255 ^ e[i + 1])
            for (var o = 0; o < r; ++o) e[i + o + 4] = n[o]
            return 8 * (i + 4 + r)
        },
        Sc = function (e, t, n, r, i, o, a, s, u, l, c) {
            _c(t, c++, n), ++i[256]
            for (
                var d = bc(i, 15),
                    f = d[0],
                    p = d[1],
                    h = bc(o, 15),
                    v = h[0],
                    g = h[1],
                    m = wc(f),
                    _ = m[0],
                    y = m[1],
                    b = wc(v),
                    k = b[0],
                    w = b[1],
                    C = new Jl(19),
                    I = 0;
                I < _.length;
                ++I
            )
                C[31 & _[I]]++
            for (I = 0; I < k.length; ++I) C[31 & k[I]]++
            for (var S = bc(C, 7), x = S[0], E = S[1], T = 19; T > 4 && !x[nc[T - 1]]; --T);
            var A,
                M,
                R,
                F,
                O = (l + 5) << 3,
                N = Cc(i, fc) + Cc(o, pc) + a,
                L = Cc(i, f) + Cc(o, v) + a + 14 + 3 * T + Cc(C, x) + (2 * C[16] + 3 * C[17] + 7 * C[18])
            if (O <= N && O <= L) return Ic(t, c, e.subarray(u, u + l))
            if ((_c(t, c, 1 + (L < N)), (c += 2), L < N)) {
                ;(A = dc(f, p, 0)), (M = f), (R = dc(v, g, 0)), (F = v)
                var P = dc(x, E, 0)
                _c(t, c, y - 257), _c(t, c + 5, w - 1), _c(t, c + 10, T - 4), (c += 14)
                for (I = 0; I < T; ++I) _c(t, c + 3 * I, x[nc[I]])
                c += 3 * T
                for (var D = [_, k], q = 0; q < 2; ++q) {
                    var B = D[q]
                    for (I = 0; I < B.length; ++I) {
                        var H = 31 & B[I]
                        _c(t, c, P[H]), (c += x[H]), H > 15 && (_c(t, c, (B[I] >>> 5) & 127), (c += B[I] >>> 12))
                    }
                }
            } else (A = hc), (M = fc), (R = vc), (F = pc)
            for (I = 0; I < s; ++I)
                if (r[I] > 255) {
                    H = (r[I] >>> 18) & 31
                    yc(t, c, A[H + 257]), (c += M[H + 257]), H > 7 && (_c(t, c, (r[I] >>> 23) & 31), (c += ec[H]))
                    var $ = 31 & r[I]
                    yc(t, c, R[$]), (c += F[$]), $ > 3 && (yc(t, c, (r[I] >>> 5) & 8191), (c += tc[$]))
                } else yc(t, c, A[r[I]]), (c += M[r[I]])
            return yc(t, c, A[256]), c + M[256]
        },
        xc = new Xl([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        Ec = new Yl(0),
        Tc = (function () {
            for (var e = new Xl(256), t = 0; t < 256; ++t) {
                for (var n = t, r = 9; --r; ) n = (1 & n && 3988292384) ^ (n >>> 1)
                e[t] = n
            }
            return e
        })(),
        Ac = function (e, t, n, r, i) {
            return (function (e, t, n, r, i, o) {
                var a = e.length,
                    s = new Yl(r + a + 5 * (1 + Math.floor(a / 7e3)) + i),
                    u = s.subarray(r, s.length - i),
                    l = 0
                if (!t || a < 8)
                    for (var c = 0; c <= a; c += 65535) {
                        var d = c + 65535
                        d < a ? (l = Ic(u, l, e.subarray(c, d))) : ((u[c] = o), (l = Ic(u, l, e.subarray(c, a))))
                    }
                else {
                    for (
                        var f = xc[t - 1],
                            p = f >>> 13,
                            h = 8191 & f,
                            v = (1 << n) - 1,
                            g = new Jl(32768),
                            m = new Jl(v + 1),
                            _ = Math.ceil(n / 3),
                            y = 2 * _,
                            b = function (t) {
                                return (e[t] ^ (e[t + 1] << _) ^ (e[t + 2] << y)) & v
                            },
                            k = new Xl(25e3),
                            w = new Jl(288),
                            C = new Jl(32),
                            I = 0,
                            S = 0,
                            x = ((c = 0), 0),
                            E = 0,
                            T = 0;
                        c < a;
                        ++c
                    ) {
                        var A = b(c),
                            M = 32767 & c,
                            R = m[A]
                        if (((g[M] = R), (m[A] = M), E <= c)) {
                            var F = a - c
                            if ((I > 7e3 || x > 24576) && F > 423) {
                                ;(l = Sc(e, u, 0, k, w, C, S, x, T, c - T, l)), (x = I = S = 0), (T = c)
                                for (var O = 0; O < 286; ++O) w[O] = 0
                                for (O = 0; O < 30; ++O) C[O] = 0
                            }
                            var N = 2,
                                L = 0,
                                P = h,
                                D = (M - R) & 32767
                            if (F > 2 && A == b(c - D))
                                for (
                                    var q = Math.min(p, F) - 1, B = Math.min(32767, c), H = Math.min(258, F);
                                    D <= B && --P && M != R;

                                ) {
                                    if (e[c + N] == e[c + N - D]) {
                                        for (var $ = 0; $ < H && e[c + $] == e[c + $ - D]; ++$);
                                        if ($ > N) {
                                            if (((N = $), (L = D), $ > q)) break
                                            var W = Math.min(D, $ - 2),
                                                V = 0
                                            for (O = 0; O < W; ++O) {
                                                var U = (c - D + O + 32768) & 32767,
                                                    j = (U - g[U] + 32768) & 32767
                                                j > V && ((V = j), (R = U))
                                            }
                                        }
                                    }
                                    D += ((M = R) - (R = g[M]) + 32768) & 32767
                                }
                            if (L) {
                                k[x++] = 268435456 | (ac[N] << 18) | sc[L]
                                var G = 31 & ac[N],
                                    Z = 31 & sc[L]
                                ;(S += ec[G] + tc[Z]), ++w[257 + G], ++C[Z], (E = c + N), ++I
                            } else (k[x++] = e[c]), ++w[e[c]]
                        }
                    }
                    ;(l = Sc(e, u, o, k, w, C, S, x, T, c - T, l)), o || (l = Ic(u, l, Ec))
                }
                return mc(s, 0, r + gc(l) + i)
            })(
                e,
                null == t.level ? 6 : t.level,
                null == t.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem,
                n,
                r,
                !i
            )
        },
        Mc = function (e, t, n) {
            for (; n; ++t) (e[t] = n), (n >>>= 8)
        }
    function Rc(e, t) {
        void 0 === t && (t = {})
        var n = (function () {
                var e = 4294967295
                return {
                    p: function (t) {
                        for (var n = e, r = 0; r < t.length; ++r) n = Tc[(255 & n) ^ t[r]] ^ (n >>> 8)
                        e = n
                    },
                    d: function () {
                        return 4294967295 ^ e
                    },
                }
            })(),
            r = e.length
        n.p(e)
        var i = Ac(
                e,
                t,
                (function (e) {
                    return 10 + ((e.filename && e.filename.length + 1) || 0)
                })(t),
                8
            ),
            o = i.length
        return (
            (function (e, t) {
                var n = t.filename
                if (
                    ((e[0] = 31),
                    (e[1] = 139),
                    (e[2] = 8),
                    (e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0),
                    (e[9] = 3),
                    0 != t.mtime && Mc(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)),
                    n)
                ) {
                    e[3] = 8
                    for (var r = 0; r <= n.length; ++r) e[r + 10] = n.charCodeAt(r)
                }
            })(i, t),
            Mc(i, o - 8, n.d()),
            Mc(i, o - 4, r),
            i
        )
    }
    var Fc = !!cn || !!ln,
        Oc = 'text/plain',
        Nc = function (e, n) {
            var r = d(e.split('?'), 2),
                i = r[0],
                o = r[1],
                a = t({}, n)
            null == o ||
                o.split('&').forEach(function (e) {
                    var t = d(e.split('='), 1)[0]
                    delete a[t]
                })
            var s = Ln(a)
            return (s = s ? (o ? o + '&' : '') + s : o), ''.concat(i, '?').concat(s)
        },
        Lc = function (e) {
            return 'data=' + encodeURIComponent('string' == typeof e ? e : JSON.stringify(e))
        },
        Pc = function (e) {
            var t = e.data,
                n = e.compression
            if (t) {
                if (n === la.GZipJS) {
                    var r = Rc(
                        (function (e, t) {
                            var n = e.length
                            if (!t && 'undefined' != typeof TextEncoder) return new TextEncoder().encode(e)
                            for (
                                var r = new Yl(e.length + (e.length >>> 1)),
                                    i = 0,
                                    o = function (e) {
                                        r[i++] = e
                                    },
                                    a = 0;
                                a < n;
                                ++a
                            ) {
                                if (i + 5 > r.length) {
                                    var s = new Yl(i + 8 + ((n - a) << 1))
                                    s.set(r), (r = s)
                                }
                                var u = e.charCodeAt(a)
                                u < 128 || t
                                    ? o(u)
                                    : u < 2048
                                    ? (o(192 | (u >>> 6)), o(128 | (63 & u)))
                                    : u > 55295 && u < 57344
                                    ? (o(240 | ((u = (65536 + (1047552 & u)) | (1023 & e.charCodeAt(++a))) >>> 18)),
                                      o(128 | ((u >>> 12) & 63)),
                                      o(128 | ((u >>> 6) & 63)),
                                      o(128 | (63 & u)))
                                    : (o(224 | (u >>> 12)), o(128 | ((u >>> 6) & 63)), o(128 | (63 & u)))
                            }
                            return mc(r, 0, i)
                        })(JSON.stringify(t)),
                        { mtime: 0 }
                    )
                    return { contentType: Oc, body: new Blob([r], { type: Oc }) }
                }
                if (n === la.Base64) {
                    var i = (function (e) {
                        var t,
                            n,
                            r,
                            i,
                            o,
                            a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                            s = 0,
                            u = 0,
                            l = '',
                            c = []
                        if (!e) return e
                        e = An(e)
                        do {
                            ;(t =
                                ((o = (e.charCodeAt(s++) << 16) | (e.charCodeAt(s++) << 8) | e.charCodeAt(s++)) >> 18) &
                                63),
                                (n = (o >> 12) & 63),
                                (r = (o >> 6) & 63),
                                (i = 63 & o),
                                (c[u++] = a.charAt(t) + a.charAt(n) + a.charAt(r) + a.charAt(i))
                        } while (s < e.length)
                        switch (((l = c.join('')), e.length % 3)) {
                            case 1:
                                l = l.slice(0, -2) + '=='
                                break
                            case 2:
                                l = l.slice(0, -1) + '='
                        }
                        return l
                    })(JSON.stringify(t))
                    return { contentType: 'application/x-www-form-urlencoded', body: Lc(i) }
                }
                return { contentType: 'application/json', body: JSON.stringify(t) }
            }
        },
        Dc = []
    cn &&
        Dc.push({
            transport: 'XHR',
            method: function (e) {
                var t,
                    n = new cn()
                n.open(e.method || 'GET', e.url, !0)
                var r = null !== (t = Pc(e)) && void 0 !== t ? t : {},
                    i = r.contentType,
                    o = r.body
                yn(e.headers, function (e, t) {
                    n.setRequestHeader(t, e)
                }),
                    i && n.setRequestHeader('Content-Type', i),
                    e.timeout && (n.timeout = e.timeout),
                    (n.withCredentials = !0),
                    (n.onreadystatechange = function () {
                        if (4 === n.readyState) {
                            var t,
                                r = { statusCode: n.status, text: n.responseText }
                            if (200 === n.status)
                                try {
                                    r.json = JSON.parse(n.responseText)
                                } catch (e) {}
                            null === (t = e.callback) || void 0 === t || t.call(e, r)
                        }
                    }),
                    n.send(o)
            },
        }),
        ln &&
            Dc.push({
                transport: 'fetch',
                method: function (e) {
                    var t,
                        n,
                        r = null !== (t = Pc(e)) && void 0 !== t ? t : {},
                        i = r.contentType,
                        o = r.body,
                        a = new Headers()
                    yn(e.headers, function (e, t) {
                        a.append(t, e)
                    }),
                        i && a.append('Content-Type', i)
                    var s = e.url,
                        u = null
                    if (dn) {
                        var l = new dn()
                        u = {
                            signal: l.signal,
                            timeout: setTimeout(function () {
                                return l.abort()
                            }, e.timeout),
                        }
                    }
                    ln(s, {
                        method: (null == e ? void 0 : e.method) || 'GET',
                        headers: a,
                        keepalive: 'POST' === e.method,
                        body: o,
                        signal: null === (n = u) || void 0 === n ? void 0 : n.signal,
                    })
                        .then(function (t) {
                            return t.text().then(function (n) {
                                var r,
                                    i = { statusCode: t.status, text: n }
                                if (200 === t.status)
                                    try {
                                        i.json = JSON.parse(n)
                                    } catch (e) {
                                        vn.error(e)
                                    }
                                null === (r = e.callback) || void 0 === r || r.call(e, i)
                            })
                        })
                        .catch(function (t) {
                            var n
                            vn.error(t),
                                null === (n = e.callback) || void 0 === n || n.call(e, { statusCode: 0, text: t })
                        })
                        .finally(function () {
                            return u ? clearTimeout(u.timeout) : null
                        })
                },
            }),
        null != an &&
            an.sendBeacon &&
            Dc.push({
                transport: 'sendBeacon',
                method: function (e) {
                    var t = Nc(e.url, { beacon: '1' })
                    try {
                        var n,
                            r = null !== (n = Pc(e)) && void 0 !== n ? n : {},
                            i = r.contentType,
                            o = r.body,
                            a = 'string' == typeof o ? new Blob([o], { type: i }) : o
                        an.sendBeacon(t, a)
                    } catch (e) {}
                },
            })
    var qc = ['retriesPerformedSoFar']
    var Bc,
        Hc = (function () {
            function e(t) {
                var n = this
                a(this, e),
                    l(this, 'isPolling', !1),
                    l(this, 'pollIntervalMs', 3e3),
                    l(this, 'queue', []),
                    (this.instance = t),
                    (this.queue = []),
                    (this.areWeOnline = !0),
                    !Ut(en) &&
                        'onLine' in en.navigator &&
                        ((this.areWeOnline = en.navigator.onLine),
                        en.addEventListener('online', function () {
                            ;(n.areWeOnline = !0), n.flush()
                        }),
                        en.addEventListener('offline', function () {
                            n.areWeOnline = !1
                        }))
            }
            return (
                u(e, [
                    {
                        key: 'retriableRequest',
                        value: function (e) {
                            var n = this,
                                r = e.retriesPerformedSoFar,
                                i = c(e, qc)
                            Qt(r) && r > 0 && (i.url = Nc(i.url, { retry_count: r })),
                                this.instance._send_request(
                                    t(
                                        t({}, i),
                                        {},
                                        {
                                            callback: function (e) {
                                                var o
                                                200 !== e.statusCode &&
                                                (e.statusCode < 400 || e.statusCode >= 500) &&
                                                (null != r ? r : 0) < 10
                                                    ? n.enqueue(t({ retriesPerformedSoFar: r }, i))
                                                    : null === (o = i.callback) || void 0 === o || o.call(i, e)
                                            },
                                        }
                                    )
                                )
                        },
                    },
                    {
                        key: 'enqueue',
                        value: function (e) {
                            var t = e.retriesPerformedSoFar || 0
                            e.retriesPerformedSoFar = t + 1
                            var n = (function (e) {
                                    var t = 3e3 * Math.pow(2, e),
                                        n = t / 2,
                                        r = Math.min(18e5, t),
                                        i = (Math.random() - 0.5) * (r - n)
                                    return Math.ceil(r + i)
                                })(t),
                                r = Date.now() + n
                            this.queue.push({ retryAt: r, requestOptions: e })
                            var i = 'Enqueued failed request for retry in '.concat(n)
                            navigator.onLine || (i += ' (Browser is offline)'),
                                vn.warn(i),
                                this.isPolling || ((this.isPolling = !0), this.poll())
                        },
                    },
                    {
                        key: 'poll',
                        value: function () {
                            var e = this
                            this.poller && clearTimeout(this.poller),
                                (this.poller = setTimeout(function () {
                                    e.areWeOnline && e.queue.length > 0 && e.flush(), e.poll()
                                }, this.pollIntervalMs))
                        },
                    },
                    {
                        key: 'flush',
                        value: function () {
                            var e = Date.now(),
                                t = [],
                                n = this.queue.filter(function (n) {
                                    return n.retryAt < e || (t.push(n), !1)
                                })
                            if (((this.queue = t), n.length > 0)) {
                                var r,
                                    i = v(n)
                                try {
                                    for (i.s(); !(r = i.n()).done; ) {
                                        var o = r.value.requestOptions
                                        this.retriableRequest(o)
                                    }
                                } catch (e) {
                                    i.e(e)
                                } finally {
                                    i.f()
                                }
                            }
                        },
                    },
                    {
                        key: 'unload',
                        value: function () {
                            this.poller && (clearTimeout(this.poller), (this.poller = void 0))
                            var e,
                                n = v(this.queue)
                            try {
                                for (n.s(); !(e = n.n()).done; ) {
                                    var r = e.value.requestOptions
                                    try {
                                        this.instance._send_request(t(t({}, r), {}, { transport: 'sendBeacon' }))
                                    } catch (e) {
                                        vn.error(e)
                                    }
                                }
                            } catch (e) {
                                n.e(e)
                            } finally {
                                n.f()
                            }
                            this.queue = []
                        },
                    },
                ]),
                e
            )
        })(),
        $c = 1800,
        Wc = (function () {
            function e(t, n, r, i) {
                var o
                a(this, e),
                    l(this, '_sessionIdChangedHandlers', []),
                    (this.config = t),
                    (this.persistence = n),
                    (this._windowId = void 0),
                    (this._sessionId = void 0),
                    (this._sessionStartTimestamp = null),
                    (this._sessionActivityTimestamp = null),
                    (this._sessionIdGenerator = r || mu),
                    (this._windowIdGenerator = i || mu)
                var s = t.persistence_name || t.token,
                    u = t.session_idle_timeout_seconds || $c
                if (
                    (Qt(u)
                        ? u > $c
                            ? vn.warn(
                                  'session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.'
                              )
                            : u < 60 &&
                              vn.warn(
                                  'session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead.'
                              )
                        : (vn.warn('session_idle_timeout_seconds must be a number. Defaulting to 30 minutes.'),
                          (u = $c)),
                    (this._sessionTimeoutMs = 1e3 * Math.min(Math.max(u, 60), $c)),
                    (this._window_id_storage_key = 'ph_' + s + '_window_id'),
                    (this._primary_window_exists_storage_key = 'ph_' + s + '_primary_window_exists'),
                    this._canUseSessionStorage())
                ) {
                    var c = Fu.parse(this._window_id_storage_key),
                        d = Fu.parse(this._primary_window_exists_storage_key)
                    c && !d ? (this._windowId = c) : Fu.remove(this._window_id_storage_key),
                        Fu.set(this._primary_window_exists_storage_key, !0)
                }
                if (null !== (o = this.config.bootstrap) && void 0 !== o && o.sessionID)
                    try {
                        var f = (function (e) {
                            var t = e.replace(/-/g, '')
                            if (32 !== t.length) throw new Error('Not a valid UUID')
                            if ('7' !== t[12]) throw new Error('Not a UUIDv7')
                            return parseInt(t.substring(0, 12), 16)
                        })(this.config.bootstrap.sessionID)
                        this._setSessionId(this.config.bootstrap.sessionID, new Date().getTime(), f)
                    } catch (e) {
                        vn.error('Invalid sessionID in bootstrap', e)
                    }
                this._listenToReloadWindow()
            }
            return (
                u(e, [
                    {
                        key: 'onSessionId',
                        value: function (e) {
                            var t = this
                            return (
                                Ut(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []),
                                this._sessionIdChangedHandlers.push(e),
                                this._sessionId && e(this._sessionId, this._windowId),
                                function () {
                                    t._sessionIdChangedHandlers = t._sessionIdChangedHandlers.filter(function (t) {
                                        return t !== e
                                    })
                                }
                            )
                        },
                    },
                    {
                        key: '_canUseSessionStorage',
                        value: function () {
                            return (
                                'memory' !== this.config.persistence && !this.persistence.disabled && Fu.is_supported()
                            )
                        },
                    },
                    {
                        key: '_setWindowId',
                        value: function (e) {
                            e !== this._windowId &&
                                ((this._windowId = e),
                                this._canUseSessionStorage() && Fu.set(this._window_id_storage_key, e))
                        },
                    },
                    {
                        key: '_getWindowId',
                        value: function () {
                            return this._windowId
                                ? this._windowId
                                : this._canUseSessionStorage()
                                ? Fu.parse(this._window_id_storage_key)
                                : null
                        },
                    },
                    {
                        key: '_setSessionId',
                        value: function (e, t, n) {
                            ;(e === this._sessionId &&
                                t === this._sessionActivityTimestamp &&
                                n === this._sessionStartTimestamp) ||
                                ((this._sessionStartTimestamp = n),
                                (this._sessionActivityTimestamp = t),
                                (this._sessionId = e),
                                this.persistence.register(l({}, Ws, [t, e, n])))
                        },
                    },
                    {
                        key: '_getSessionId',
                        value: function () {
                            if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp)
                                return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp]
                            var e = this.persistence.props[Ws]
                            return Ht(e) && 2 === e.length && e.push(e[0]), e || [0, null, 0]
                        },
                    },
                    {
                        key: 'resetSessionId',
                        value: function () {
                            this._setSessionId(null, null, null)
                        },
                    },
                    {
                        key: '_listenToReloadWindow',
                        value: function () {
                            var e = this
                            null == en ||
                                en.addEventListener('beforeunload', function () {
                                    e._canUseSessionStorage() && Fu.remove(e._primary_window_exists_storage_key)
                                })
                        },
                    },
                    {
                        key: 'checkAndGetSessionAndWindowId',
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t =
                                    (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) ||
                                    new Date().getTime(),
                                n = d(this._getSessionId(), 3),
                                r = n[0],
                                i = n[1],
                                o = n[2],
                                a = this._getWindowId(),
                                s = o && o > 0 && Math.abs(t - o) > 864e5,
                                u = !1,
                                l = !i,
                                c = !e && Math.abs(t - r) > this._sessionTimeoutMs
                            l || c || s
                                ? ((i = this._sessionIdGenerator()),
                                  (a = this._windowIdGenerator()),
                                  vn.info('[SessionId] new session ID generated', {
                                      sessionId: i,
                                      windowId: a,
                                      changeReason: { noSessionId: l, activityTimeout: c, sessionPastMaximumLength: s },
                                  }),
                                  (o = t),
                                  (u = !0))
                                : a || ((a = this._windowIdGenerator()), (u = !0))
                            var f = 0 === r || !e || s ? t : r,
                                p = 0 === o ? new Date().getTime() : o
                            return (
                                this._setWindowId(a),
                                this._setSessionId(i, f, p),
                                u &&
                                    this._sessionIdChangedHandlers.forEach(function (e) {
                                        return e(i, a)
                                    }),
                                { sessionId: i, windowId: a, sessionStartTimestamp: p }
                            )
                        },
                    },
                ]),
                e
            )
        })()
    !(function (e) {
        ;(e.US = 'us'), (e.EU = 'eu'), (e.CUSTOM = 'custom')
    })(Bc || (Bc = {}))
    var Vc = 'i.posthog.com',
        Uc = (function () {
            function e(t) {
                a(this, e), l(this, '_regionCache', {}), (this.instance = t)
            }
            return (
                u(e, [
                    {
                        key: 'apiHost',
                        get: function () {
                            var e = this.instance.config.api_host.trim().replace(/\/$/, '')
                            return 'https://app.posthog.com' === e ? 'https://us.i.posthog.com' : e
                        },
                    },
                    {
                        key: 'uiHost',
                        get: function () {
                            var e,
                                t =
                                    null === (e = this.instance.config.ui_host) || void 0 === e
                                        ? void 0
                                        : e.replace(/\/$/, '')
                            return (
                                t || (t = this.apiHost.replace('.'.concat(Vc), '.posthog.com')),
                                'https://app.posthog.com' === t ? 'https://us.posthog.com' : t
                            )
                        },
                    },
                    {
                        key: 'region',
                        get: function () {
                            return (
                                this._regionCache[this.apiHost] ||
                                    (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)
                                        ? (this._regionCache[this.apiHost] = Bc.US)
                                        : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)
                                        ? (this._regionCache[this.apiHost] = Bc.EU)
                                        : (this._regionCache[this.apiHost] = Bc.CUSTOM)),
                                this._regionCache[this.apiHost]
                            )
                        },
                    },
                    {
                        key: 'endpointFor',
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ''
                            if ((t && (t = '/' === t[0] ? t : '/'.concat(t)), 'ui' === e)) return this.uiHost + t
                            if (this.region === Bc.CUSTOM) return this.apiHost + t
                            var n = Vc + t
                            switch (e) {
                                case 'assets':
                                    return 'https://'.concat(this.region, '-assets.').concat(n)
                                case 'api':
                                    return 'https://'.concat(this.region, '.').concat(n)
                            }
                        },
                    },
                    {
                        key: 'loadScript',
                        value: function (e, t) {
                            if (this.instance.config.disable_external_dependency_loading)
                                return (
                                    vn.warn(
                                        ''.concat(e, ' was requested but loading of external scripts is disabled.')
                                    ),
                                    t('Loading of external scripts is disabled')
                                )
                            var n = '/' === e[0] ? this.endpointFor('assets', e) : e,
                                r = function () {
                                    if (!sn) return t('document not found')
                                    var e = sn.createElement('script')
                                    ;(e.type = 'text/javascript'),
                                        (e.src = n),
                                        (e.onload = function (e) {
                                            return t(void 0, e)
                                        }),
                                        (e.onerror = function (e) {
                                            return t(e)
                                        })
                                    var r,
                                        i = sn.querySelectorAll('body > script')
                                    i.length > 0
                                        ? null === (r = i[0].parentNode) || void 0 === r || r.insertBefore(e, i[0])
                                        : sn.body.appendChild(e)
                                }
                            null != sn && sn.body ? r() : null == sn || sn.addEventListener('DOMContentLoaded', r)
                        },
                    },
                ]),
                e
            )
        })(),
        jc = 'posthog-js'
    function Gc(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.organization,
            r = t.projectId,
            i = t.prefix,
            o = t.severityAllowList,
            a = void 0 === o ? ['error'] : o
        return function (t) {
            var o, s, u, l, c
            if (!('*' === a || a.includes(t.level)) || !e.__loaded) return t
            t.tags || (t.tags = {})
            var d = e.requestRouter.endpointFor(
                'ui',
                '/project/'.concat(e.config.token, '/person/').concat(e.get_distinct_id())
            )
            ;(t.tags['PostHog Person URL'] = d),
                e.sessionRecordingStarted() &&
                    (t.tags['PostHog Recording URL'] = e.get_session_replay_url({ withTimestamp: !0 }))
            var f = (null === (o = t.exception) || void 0 === o ? void 0 : o.values) || [],
                p = {
                    $exception_message: (null === (s = f[0]) || void 0 === s ? void 0 : s.value) || t.message,
                    $exception_type: null === (u = f[0]) || void 0 === u ? void 0 : u.type,
                    $exception_personURL: d,
                    $exception_level: t.level,
                    $sentry_event_id: t.event_id,
                    $sentry_exception: t.exception,
                    $sentry_exception_message: (null === (l = f[0]) || void 0 === l ? void 0 : l.value) || t.message,
                    $sentry_exception_type: null === (c = f[0]) || void 0 === c ? void 0 : c.type,
                    $sentry_tags: t.tags,
                    $level: t.level,
                }
            return (
                n &&
                    r &&
                    (p.$sentry_url =
                        (i || 'https://sentry.io/organizations/') +
                        n +
                        '/issues/?project=' +
                        r +
                        '&query=' +
                        t.event_id),
                e.exceptions.sendExceptionEvent(p),
                t
            )
        }
    }
    var Zc = u(function e(t, n, r, i, o) {
        a(this, e),
            (this.name = jc),
            (this.setupOnce = function (e) {
                e(Gc(t, { organization: n, projectId: r, prefix: i, severityAllowList: o }))
            })
    })
    function zc(e, t) {
        var n = e.config.segment
        if (!n) return t()
        !(function (e, t) {
            var n = e.config.segment
            if (!n) return t()
            var r = function (n) {
                    var r = function () {
                        return n.anonymousId() || mu()
                    }
                    ;(e.config.get_device_id = r),
                        n.id() &&
                            (e.register({ distinct_id: n.id(), $device_id: r() }),
                            e.persistence.set_property(Ys, 'identified')),
                        t()
                },
                i = n.user()
            'then' in i && $t(i.then)
                ? i.then(function (e) {
                      return r(e)
                  })
                : r(i)
        })(e, function () {
            n.register(
                (function (e) {
                    ;(Promise && Promise.resolve) ||
                        vn.warn('This browser does not have Promise support, and can not use the segment integration')
                    var t = function (t, n) {
                        var r
                        if (!n) return t
                        t.event.userId ||
                            t.event.anonymousId === e.get_distinct_id() ||
                            (vn.info('Segment integration does not have a userId set, resetting PostHog'), e.reset()),
                            t.event.userId &&
                                t.event.userId !== e.get_distinct_id() &&
                                (vn.info('Segment integration has a userId set, identifying with PostHog'),
                                e.identify(t.event.userId))
                        var i = e._calculate_event_properties(
                            n,
                            null !== (r = t.event.properties) && void 0 !== r ? r : {},
                            new Date()
                        )
                        return (t.event.properties = Object.assign({}, i, t.event.properties)), t
                    }
                    return {
                        name: 'PostHog JS',
                        type: 'enrichment',
                        version: '1.0.0',
                        isLoaded: function () {
                            return !0
                        },
                        load: function () {
                            return Promise.resolve()
                        },
                        track: function (e) {
                            return t(e, e.event.event)
                        },
                        page: function (e) {
                            return t(e, '$pageview')
                        },
                        identify: function (e) {
                            return t(e, '$identify')
                        },
                        screen: function (e) {
                            return t(e, '$screen')
                        },
                    }
                })(e)
            ).then(function () {
                t()
            })
        })
    }
    var Qc = (function () {
        function e(t) {
            a(this, e), (this._instance = t)
        }
        return (
            u(e, [
                {
                    key: 'doPageView',
                    value: function (e) {
                        var t,
                            n = this._previousPageViewProperties(e)
                        return (
                            (this._currentPath =
                                null !== (t = null == en ? void 0 : en.location.pathname) && void 0 !== t ? t : ''),
                            this._instance.scrollManager.resetContext(),
                            (this._prevPageviewTimestamp = e),
                            n
                        )
                    },
                },
                {
                    key: 'doPageLeave',
                    value: function (e) {
                        return this._previousPageViewProperties(e)
                    },
                },
                {
                    key: '_previousPageViewProperties',
                    value: function (e) {
                        var t = this._currentPath,
                            n = this._prevPageviewTimestamp,
                            r = this._instance.scrollManager.getContext()
                        if (!n) return {}
                        var i = {}
                        if (r) {
                            var o = r.maxScrollHeight,
                                a = r.lastScrollY,
                                s = r.maxScrollY,
                                u = r.maxContentHeight,
                                l = r.lastContentY,
                                c = r.maxContentY
                            if (!(Ut(o) || Ut(a) || Ut(s) || Ut(u) || Ut(l) || Ut(c)))
                                (o = Math.ceil(o)),
                                    (a = Math.ceil(a)),
                                    (s = Math.ceil(s)),
                                    (u = Math.ceil(u)),
                                    (l = Math.ceil(l)),
                                    (c = Math.ceil(c)),
                                    (i = {
                                        $prev_pageview_last_scroll: a,
                                        $prev_pageview_last_scroll_percentage: o <= 1 ? 1 : Kc(a / o, 0, 1),
                                        $prev_pageview_max_scroll: s,
                                        $prev_pageview_max_scroll_percentage: o <= 1 ? 1 : Kc(s / o, 0, 1),
                                        $prev_pageview_last_content: l,
                                        $prev_pageview_last_content_percentage: u <= 1 ? 1 : Kc(l / u, 0, 1),
                                        $prev_pageview_max_content: c,
                                        $prev_pageview_max_content_percentage: u <= 1 ? 1 : Kc(c / u, 0, 1),
                                    })
                        }
                        return (
                            t && (i.$prev_pageview_pathname = t),
                            n && (i.$prev_pageview_duration = (e.getTime() - n.getTime()) / 1e3),
                            i
                        )
                    },
                },
            ]),
            e
        )
    })()
    function Kc(e, t, n) {
        return Math.max(t, Math.min(e, n))
    }
    var Yc = (function () {
            function e() {
                a(this, e), l(this, 'events', {}), (this.events = {})
            }
            return (
                u(e, [
                    {
                        key: 'on',
                        value: function (e, t) {
                            var n = this
                            return (
                                this.events[e] || (this.events[e] = []),
                                this.events[e].push(t),
                                function () {
                                    n.events[e] = n.events[e].filter(function (e) {
                                        return e !== t
                                    })
                                }
                            )
                        },
                    },
                    {
                        key: 'emit',
                        value: function (e, t) {
                            var n,
                                r = v(this.events[e] || [])
                            try {
                                for (r.s(); !(n = r.n()).done; ) {
                                    ;(0, n.value)(t)
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            var i,
                                o = v(this.events['*'] || [])
                            try {
                                for (o.s(); !(i = o.n()).done; ) {
                                    ;(0, i.value)(e, t)
                                }
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                        },
                    },
                ]),
                e
            )
        })(),
        Jc = (function () {
            function e(t) {
                var n = this
                a(this, e),
                    l(this, '_debugEventEmitter', new Yc()),
                    l(this, 'checkStep', function (e, t) {
                        return n.checkStepEvent(e, t) && n.checkStepUrl(e, t) && n.checkStepElement(e, t)
                    }),
                    l(this, 'checkStepEvent', function (e, t) {
                        return (
                            null == t || !t.event || (null == e ? void 0 : e.event) === (null == t ? void 0 : t.event)
                        )
                    }),
                    (this.instance = t),
                    (this.actionEvents = new Set()),
                    (this.actionRegistry = new Set())
            }
            return (
                u(
                    e,
                    [
                        {
                            key: 'init',
                            value: function () {
                                var e,
                                    t = this
                                if (!Ut(null === (e = this.instance) || void 0 === e ? void 0 : e._addCaptureHook)) {
                                    var n
                                    null === (n = this.instance) ||
                                        void 0 === n ||
                                        n._addCaptureHook(function (e, n) {
                                            t.on(e, n)
                                        })
                                }
                            },
                        },
                        {
                            key: 'register',
                            value: function (e) {
                                var t,
                                    n,
                                    r = this
                                if (
                                    !Ut(null === (t = this.instance) || void 0 === t ? void 0 : t._addCaptureHook) &&
                                    (e.forEach(function (e) {
                                        var t, n
                                        null === (t = r.actionRegistry) || void 0 === t || t.add(e),
                                            null === (n = e.steps) ||
                                                void 0 === n ||
                                                n.forEach(function (e) {
                                                    var t
                                                    null === (t = r.actionEvents) ||
                                                        void 0 === t ||
                                                        t.add((null == e ? void 0 : e.event) || '')
                                                })
                                    }),
                                    null !== (n = this.instance) && void 0 !== n && n.autocapture)
                                ) {
                                    var i,
                                        o = new Set()
                                    e.forEach(function (e) {
                                        var t
                                        null === (t = e.steps) ||
                                            void 0 === t ||
                                            t.forEach(function (e) {
                                                null != e && e.selector && o.add(null == e ? void 0 : e.selector)
                                            })
                                    }),
                                        null === (i = this.instance) ||
                                            void 0 === i ||
                                            i.autocapture.setElementSelectors(o)
                                }
                            },
                        },
                        {
                            key: 'on',
                            value: function (e, t) {
                                var n,
                                    r = this
                                null != t &&
                                    0 != e.length &&
                                    (this.actionEvents.has(e) || this.actionEvents.has(null == t ? void 0 : t.event)) &&
                                    this.actionRegistry &&
                                    (null === (n = this.actionRegistry) || void 0 === n ? void 0 : n.size) > 0 &&
                                    this.actionRegistry.forEach(function (e) {
                                        r.checkAction(t, e) && r._debugEventEmitter.emit('actionCaptured', e.name)
                                    })
                            },
                        },
                        {
                            key: '_addActionHook',
                            value: function (e) {
                                this.onAction('actionCaptured', function (t) {
                                    return e(t)
                                })
                            },
                        },
                        {
                            key: 'checkAction',
                            value: function (e, t) {
                                if (null == (null == t ? void 0 : t.steps)) return !1
                                var n,
                                    r = v(t.steps)
                                try {
                                    for (r.s(); !(n = r.n()).done; ) {
                                        var i = n.value
                                        if (this.checkStep(e, i)) return !0
                                    }
                                } catch (e) {
                                    r.e(e)
                                } finally {
                                    r.f()
                                }
                                return !1
                            },
                        },
                        {
                            key: 'onAction',
                            value: function (e, t) {
                                return this._debugEventEmitter.on(e, t)
                            },
                        },
                        {
                            key: 'checkStepUrl',
                            value: function (t, n) {
                                if (null != n && n.url) {
                                    var r,
                                        i =
                                            null == t || null === (r = t.properties) || void 0 === r
                                                ? void 0
                                                : r.$current_url
                                    if (!i || 'string' != typeof i) return !1
                                    if (
                                        !e.matchString(
                                            i,
                                            null == n ? void 0 : n.url,
                                            (null == n ? void 0 : n.url_matching) || 'contains'
                                        )
                                    )
                                        return !1
                                }
                                return !0
                            },
                        },
                        {
                            key: 'checkStepElement',
                            value: function (t, n) {
                                if (
                                    ((null != n && n.href) || (null != n && n.tag_name) || (null != n && n.text)) &&
                                    !this.getElementsList(t).some(function (t) {
                                        return (
                                            !(
                                                null != n &&
                                                n.href &&
                                                !e.matchString(
                                                    t.href || '',
                                                    null == n ? void 0 : n.href,
                                                    (null == n ? void 0 : n.href_matching) || 'exact'
                                                )
                                            ) &&
                                            (null == n ||
                                                !n.tag_name ||
                                                t.tag_name === (null == n ? void 0 : n.tag_name)) &&
                                            !(
                                                null != n &&
                                                n.text &&
                                                !e.matchString(
                                                    t.text || '',
                                                    null == n ? void 0 : n.text,
                                                    (null == n ? void 0 : n.text_matching) || 'exact'
                                                ) &&
                                                !e.matchString(
                                                    t.$el_text || '',
                                                    null == n ? void 0 : n.text,
                                                    (null == n ? void 0 : n.text_matching) || 'exact'
                                                )
                                            )
                                        )
                                    })
                                )
                                    return !1
                                if (null != n && n.selector) {
                                    var r,
                                        i =
                                            null == t || null === (r = t.properties) || void 0 === r
                                                ? void 0
                                                : r.$element_selectors
                                    if (!i) return !1
                                    if (!i.includes(null == n ? void 0 : n.selector)) return !1
                                }
                                return !0
                            },
                        },
                        {
                            key: 'getElementsList',
                            value: function (e) {
                                return null == (null == e ? void 0 : e.properties.$elements)
                                    ? []
                                    : null == e
                                    ? void 0
                                    : e.properties.$elements
                            },
                        },
                    ],
                    [
                        {
                            key: 'matchString',
                            value: function (t, n, r) {
                                switch (r) {
                                    case 'regex':
                                        return !!en && Nn(t, n)
                                    case 'exact':
                                        return n === t
                                    case 'contains':
                                        var i = e.escapeStringRegexp(n).replace(/_/g, '.').replace(/%/g, '.*')
                                        return Nn(t, i)
                                    default:
                                        return !1
                                }
                            },
                        },
                        {
                            key: 'escapeStringRegexp',
                            value: function (e) {
                                return e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d')
                            },
                        },
                    ]
                ),
                e
            )
        })(),
        Xc = (function () {
            function e(t) {
                a(this, e), (this.instance = t), (this.eventToSurveys = new Map()), (this.actionToSurveys = new Map())
            }
            return (
                u(e, [
                    {
                        key: 'register',
                        value: function (e) {
                            var t
                            Ut(null === (t = this.instance) || void 0 === t ? void 0 : t._addCaptureHook) ||
                                (this.setupEventBasedSurveys(e), this.setupActionBasedSurveys(e))
                        },
                    },
                    {
                        key: 'setupActionBasedSurveys',
                        value: function (e) {
                            var t = this,
                                n = e.filter(function (e) {
                                    var t, n, r, i
                                    return (
                                        (null === (t = e.conditions) || void 0 === t ? void 0 : t.actions) &&
                                        (null === (n = e.conditions) ||
                                        void 0 === n ||
                                        null === (r = n.actions) ||
                                        void 0 === r ||
                                        null === (i = r.values) ||
                                        void 0 === i
                                            ? void 0
                                            : i.length) > 0
                                    )
                                })
                            if (0 !== n.length) {
                                if (null == this.actionMatcher) {
                                    ;(this.actionMatcher = new Jc(this.instance)), this.actionMatcher.init()
                                    this.actionMatcher._addActionHook(function (e) {
                                        t.onAction(e)
                                    })
                                }
                                n.forEach(function (e) {
                                    var n, r, i, o, a, s, u, l, c, d
                                    e.conditions &&
                                        null !== (n = e.conditions) &&
                                        void 0 !== n &&
                                        n.actions &&
                                        null !== (r = e.conditions) &&
                                        void 0 !== r &&
                                        null !== (i = r.actions) &&
                                        void 0 !== i &&
                                        i.values &&
                                        (null === (o = e.conditions) ||
                                        void 0 === o ||
                                        null === (a = o.actions) ||
                                        void 0 === a ||
                                        null === (s = a.values) ||
                                        void 0 === s
                                            ? void 0
                                            : s.length) > 0 &&
                                        (null === (u = t.actionMatcher) ||
                                            void 0 === u ||
                                            u.register(e.conditions.actions.values),
                                        null === (l = e.conditions) ||
                                            void 0 === l ||
                                            null === (c = l.actions) ||
                                            void 0 === c ||
                                            null === (d = c.values) ||
                                            void 0 === d ||
                                            d.forEach(function (n) {
                                                if (n && n.name) {
                                                    var r = t.actionToSurveys.get(n.name)
                                                    r && r.push(e.id), t.actionToSurveys.set(n.name, r || [e.id])
                                                }
                                            }))
                                })
                            }
                        },
                    },
                    {
                        key: 'setupEventBasedSurveys',
                        value: function (e) {
                            var t,
                                n = this
                            if (
                                0 !==
                                e.filter(function (e) {
                                    var t, n, r, i
                                    return (
                                        (null === (t = e.conditions) || void 0 === t ? void 0 : t.events) &&
                                        (null === (n = e.conditions) ||
                                        void 0 === n ||
                                        null === (r = n.events) ||
                                        void 0 === r ||
                                        null === (i = r.values) ||
                                        void 0 === i
                                            ? void 0
                                            : i.length) > 0
                                    )
                                }).length
                            ) {
                                null === (t = this.instance) ||
                                    void 0 === t ||
                                    t._addCaptureHook(function (e, t) {
                                        n.onEvent(e, t)
                                    }),
                                    e.forEach(function (e) {
                                        var t, r, i
                                        null === (t = e.conditions) ||
                                            void 0 === t ||
                                            null === (r = t.events) ||
                                            void 0 === r ||
                                            null === (i = r.values) ||
                                            void 0 === i ||
                                            i.forEach(function (t) {
                                                if (t && t.name) {
                                                    var r = n.eventToSurveys.get(t.name)
                                                    r && r.push(e.id), n.eventToSurveys.set(t.name, r || [e.id])
                                                }
                                            })
                                    })
                            }
                        },
                    },
                    {
                        key: 'onEvent',
                        value: function (t, n) {
                            var r,
                                i,
                                o =
                                    (null === (r = this.instance) ||
                                    void 0 === r ||
                                    null === (i = r.persistence) ||
                                    void 0 === i
                                        ? void 0
                                        : i.props[Qs]) || []
                            if (e.SURVEY_SHOWN_EVENT_NAME == t && n && o.length > 0) {
                                var a,
                                    s = null == n || null === (a = n.properties) || void 0 === a ? void 0 : a.$survey_id
                                if (s) {
                                    var u = o.indexOf(s)
                                    u >= 0 && (o.splice(u, 1), this._updateActivatedSurveys(o))
                                }
                            } else
                                this.eventToSurveys.has(t) &&
                                    this._updateActivatedSurveys(o.concat(this.eventToSurveys.get(t) || []))
                        },
                    },
                    {
                        key: 'onAction',
                        value: function (e) {
                            var t,
                                n,
                                r =
                                    (null === (t = this.instance) ||
                                    void 0 === t ||
                                    null === (n = t.persistence) ||
                                    void 0 === n
                                        ? void 0
                                        : n.props[Qs]) || []
                            this.actionToSurveys.has(e) &&
                                this._updateActivatedSurveys(r.concat(this.actionToSurveys.get(e) || []))
                        },
                    },
                    {
                        key: '_updateActivatedSurveys',
                        value: function (e) {
                            var t, n
                            null === (t = this.instance) ||
                                void 0 === t ||
                                null === (n = t.persistence) ||
                                void 0 === n ||
                                n.register(l({}, Qs, f(new Set(e))))
                        },
                    },
                    {
                        key: 'getSurveys',
                        value: function () {
                            var e,
                                t,
                                n =
                                    null === (e = this.instance) ||
                                    void 0 === e ||
                                    null === (t = e.persistence) ||
                                    void 0 === t
                                        ? void 0
                                        : t.props[Qs]
                            return n || []
                        },
                    },
                    {
                        key: 'getEventToSurveys',
                        value: function () {
                            return this.eventToSurveys
                        },
                    },
                    {
                        key: '_getActionMatcher',
                        value: function () {
                            return this.actionMatcher
                        },
                    },
                ]),
                e
            )
        })()
    l(Xc, 'SURVEY_SHOWN_EVENT_NAME', 'survey shown')
    var ed = '[Surveys]',
        td = {
            icontains: function (e) {
                return !!en && en.location.href.toLowerCase().indexOf(e.toLowerCase()) > -1
            },
            not_icontains: function (e) {
                return !!en && -1 === en.location.href.toLowerCase().indexOf(e.toLowerCase())
            },
            regex: function (e) {
                return !!en && Nn(en.location.href, e)
            },
            not_regex: function (e) {
                return !!en && !Nn(en.location.href, e)
            },
            exact: function (e) {
                return (null == en ? void 0 : en.location.href) === e
            },
            is_not: function (e) {
                return (null == en ? void 0 : en.location.href) !== e
            },
        }
    var nd = (function () {
            function e(t) {
                a(this, e), (this.instance = t), (this._surveyEventReceiver = null)
            }
            return (
                u(e, [
                    {
                        key: 'afterDecideResponse',
                        value: function (e) {
                            ;(this._decideServerResponse = !!e.surveys), this.loadIfEnabled()
                        },
                    },
                    {
                        key: 'loadIfEnabled',
                        value: function () {
                            var e = this,
                                t = null == pn ? void 0 : pn.extendPostHogWithSurveys
                            this.instance.config.disable_surveys ||
                                !this._decideServerResponse ||
                                t ||
                                (null == this._surveyEventReceiver &&
                                    (this._surveyEventReceiver = new Xc(this.instance)),
                                this.instance.requestRouter.loadScript('/static/surveys.js', function (t) {
                                    if (t) return vn.error(ed, 'Could not load surveys script', t)
                                    e._surveyManager = pn.extendPostHogWithSurveys(e.instance)
                                }))
                        },
                    },
                    {
                        key: 'getSurveys',
                        value: function (e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                            if (this.instance.config.disable_surveys) return e([])
                            null == this._surveyEventReceiver && (this._surveyEventReceiver = new Xc(this.instance))
                            var r = this.instance.get_property(zs)
                            if (r && !n) return e(r)
                            this.instance._send_request({
                                url: this.instance.requestRouter.endpointFor(
                                    'api',
                                    '/api/surveys/?token='.concat(this.instance.config.token)
                                ),
                                method: 'GET',
                                transport: 'XHR',
                                callback: function (n) {
                                    var r
                                    if (200 !== n.statusCode || !n.json) return e([])
                                    var i,
                                        o = n.json.surveys || [],
                                        a = o.filter(function (e) {
                                            var t, n, r, i, o, a, s, u, l, c, d, f
                                            return (
                                                ((null === (t = e.conditions) || void 0 === t ? void 0 : t.events) &&
                                                    (null === (n = e.conditions) ||
                                                    void 0 === n ||
                                                    null === (r = n.events) ||
                                                    void 0 === r
                                                        ? void 0
                                                        : r.values) &&
                                                    (null === (i = e.conditions) ||
                                                    void 0 === i ||
                                                    null === (o = i.events) ||
                                                    void 0 === o ||
                                                    null === (a = o.values) ||
                                                    void 0 === a
                                                        ? void 0
                                                        : a.length) > 0) ||
                                                ((null === (s = e.conditions) || void 0 === s ? void 0 : s.actions) &&
                                                    (null === (u = e.conditions) ||
                                                    void 0 === u ||
                                                    null === (l = u.actions) ||
                                                    void 0 === l
                                                        ? void 0
                                                        : l.values) &&
                                                    (null === (c = e.conditions) ||
                                                    void 0 === c ||
                                                    null === (d = c.actions) ||
                                                    void 0 === d ||
                                                    null === (f = d.values) ||
                                                    void 0 === f
                                                        ? void 0
                                                        : f.length) > 0)
                                            )
                                        })
                                    a.length > 0 &&
                                        (null === (i = t._surveyEventReceiver) || void 0 === i || i.register(a))
                                    return (
                                        null === (r = t.instance.persistence) ||
                                            void 0 === r ||
                                            r.register(l({}, zs, o)),
                                        e(o)
                                    )
                                },
                            })
                        },
                    },
                    {
                        key: 'getActiveMatchingSurveys',
                        value: function (e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                            this.getSurveys(function (n) {
                                var r,
                                    i = n
                                        .filter(function (e) {
                                            return !(!e.start_date || e.end_date)
                                        })
                                        .filter(function (e) {
                                            var t, n, r, i
                                            if (!e.conditions) return !0
                                            var o =
                                                    null === (t = e.conditions) ||
                                                    void 0 === t ||
                                                    !t.url ||
                                                    td[
                                                        null !==
                                                            (n =
                                                                null === (r = e.conditions) || void 0 === r
                                                                    ? void 0
                                                                    : r.urlMatchType) && void 0 !== n
                                                            ? n
                                                            : 'icontains'
                                                    ](e.conditions.url),
                                                a =
                                                    null === (i = e.conditions) ||
                                                    void 0 === i ||
                                                    !i.selector ||
                                                    (null == sn ? void 0 : sn.querySelector(e.conditions.selector))
                                            return o && a
                                        }),
                                    o = null === (r = t._surveyEventReceiver) || void 0 === r ? void 0 : r.getSurveys(),
                                    a = i.filter(function (e) {
                                        var n, r, i, a, s, u, l, c, d, f
                                        if (
                                            !e.linked_flag_key &&
                                            !e.targeting_flag_key &&
                                            !e.internal_targeting_flag_key
                                        )
                                            return !0
                                        var p =
                                                !e.linked_flag_key ||
                                                t.instance.featureFlags.isFeatureEnabled(e.linked_flag_key),
                                            h =
                                                !e.targeting_flag_key ||
                                                t.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key),
                                            v =
                                                (null === (n = e.conditions) || void 0 === n ? void 0 : n.events) &&
                                                (null === (r = e.conditions) ||
                                                void 0 === r ||
                                                null === (i = r.events) ||
                                                void 0 === i
                                                    ? void 0
                                                    : i.values) &&
                                                (null === (a = e.conditions) ||
                                                void 0 === a ||
                                                null === (s = a.events) ||
                                                void 0 === s
                                                    ? void 0
                                                    : s.values.length) > 0,
                                            g =
                                                (null === (u = e.conditions) || void 0 === u ? void 0 : u.actions) &&
                                                (null === (l = e.conditions) ||
                                                void 0 === l ||
                                                null === (c = l.actions) ||
                                                void 0 === c
                                                    ? void 0
                                                    : c.values) &&
                                                (null === (d = e.conditions) ||
                                                void 0 === d ||
                                                null === (f = d.actions) ||
                                                void 0 === f
                                                    ? void 0
                                                    : f.values.length) > 0,
                                            m = (!v && !g) || (null == o ? void 0 : o.includes(e.id)),
                                            _ = t._canActivateRepeatedly(e),
                                            y =
                                                !(e.internal_targeting_flag_key && !_) ||
                                                t.instance.featureFlags.isFeatureEnabled(e.internal_targeting_flag_key)
                                        return p && h && y && m
                                    })
                                return e(a)
                            }, n)
                        },
                    },
                    {
                        key: 'getNextSurveyStep',
                        value: function (e, t, n) {
                            var r,
                                i = e.questions[t],
                                o = t + 1
                            if (null === (r = i.branching) || void 0 === r || !r.type)
                                return t === e.questions.length - 1 ? Vr.End : o
                            if (i.branching.type === Vr.End) return Vr.End
                            if (i.branching.type === Vr.SpecificQuestion) {
                                if (Number.isInteger(i.branching.index)) return i.branching.index
                            } else if (i.branching.type === Vr.ResponseBased) {
                                if (i.type === Wr.SingleChoice) {
                                    var a,
                                        s,
                                        u = i.choices.indexOf(''.concat(n))
                                    if (
                                        null !== (a = i.branching) &&
                                        void 0 !== a &&
                                        null !== (s = a.responseValues) &&
                                        void 0 !== s &&
                                        s.hasOwnProperty(u)
                                    ) {
                                        var l = i.branching.responseValues[u]
                                        return Number.isInteger(l) ? l : l === Vr.End ? Vr.End : o
                                    }
                                } else if (i.type === Wr.Rating) {
                                    var c, d
                                    if ('number' != typeof n || !Number.isInteger(n))
                                        throw new Error('The response type must be an integer')
                                    var f = (function (e, t) {
                                        if (3 === t) {
                                            if (e < 1 || e > 3) throw new Error('The response must be in range 1-3')
                                            return 1 === e ? 'negative' : 2 === e ? 'neutral' : 'positive'
                                        }
                                        if (5 === t) {
                                            if (e < 1 || e > 5) throw new Error('The response must be in range 1-5')
                                            return e <= 2 ? 'negative' : 3 === e ? 'neutral' : 'positive'
                                        }
                                        if (10 === t) {
                                            if (e < 0 || e > 10) throw new Error('The response must be in range 0-10')
                                            return e <= 6 ? 'detractors' : e <= 8 ? 'passives' : 'promoters'
                                        }
                                        throw new Error('The scale must be one of: 3, 5, 10')
                                    })(n, i.scale)
                                    if (
                                        null !== (c = i.branching) &&
                                        void 0 !== c &&
                                        null !== (d = c.responseValues) &&
                                        void 0 !== d &&
                                        d.hasOwnProperty(f)
                                    ) {
                                        var p = i.branching.responseValues[f]
                                        return Number.isInteger(p) ? p : p === Vr.End ? Vr.End : o
                                    }
                                }
                                return o
                            }
                            return (
                                vn.warn(ed, 'Falling back to next question index due to unexpected branching type'), o
                            )
                        },
                    },
                    {
                        key: '_canActivateRepeatedly',
                        value: function (e) {
                            var t
                            return zt(
                                null === (t = pn.__PosthogExtensions__) || void 0 === t
                                    ? void 0
                                    : t.canActivateRepeatedly
                            )
                                ? (vn.warn(ed, 'canActivateRepeatedly is not defined, must init before calling'), !1)
                                : pn.__PosthogExtensions__.canActivateRepeatedly(e)
                        },
                    },
                    {
                        key: 'canRenderSurvey',
                        value: function (e) {
                            var t = this
                            zt(this._surveyManager)
                                ? vn.warn(ed, 'canActivateRepeatedly is not defined, must init before calling')
                                : this.getSurveys(function (n) {
                                      var r = n.filter(function (t) {
                                          return t.id === e
                                      })[0]
                                      t._surveyManager.canRenderSurvey(r)
                                  })
                        },
                    },
                    {
                        key: 'renderSurvey',
                        value: function (e, t) {
                            var n = this
                            zt(this._surveyManager)
                                ? vn.warn(ed, 'canActivateRepeatedly is not defined, must init before calling')
                                : this.getSurveys(function (r) {
                                      var i = r.filter(function (t) {
                                          return t.id === e
                                      })[0]
                                      n._surveyManager.renderSurvey(i, null == sn ? void 0 : sn.querySelector(t))
                                  })
                        },
                    },
                ]),
                e
            )
        })(),
        rd = (function () {
            function e(t) {
                var n,
                    r,
                    i = this
                a(this, e),
                    l(this, 'serverLimits', {}),
                    l(this, 'lastEventRateLimited', !1),
                    l(this, 'checkForLimiting', function (e) {
                        var t = e.text
                        if (t && t.length)
                            try {
                                ;(JSON.parse(t).quota_limited || []).forEach(function (e) {
                                    vn.info('[RateLimiter] '.concat(e || 'events', ' is quota limited.')),
                                        (i.serverLimits[e] = new Date().getTime() + 6e4)
                                })
                            } catch (e) {
                                return void vn.warn(
                                    '[RateLimiter] could not rate limit - continuing. Error: "'.concat(
                                        null == e ? void 0 : e.message,
                                        '"'
                                    ),
                                    { text: t }
                                )
                            }
                    }),
                    (this.instance = t),
                    (this.captureEventsPerSecond =
                        (null === (n = t.config.rate_limiting) || void 0 === n ? void 0 : n.events_per_second) || 10),
                    (this.captureEventsBurstLimit = Math.max(
                        (null === (r = t.config.rate_limiting) || void 0 === r ? void 0 : r.events_burst_limit) ||
                            10 * this.captureEventsPerSecond,
                        this.captureEventsPerSecond
                    )),
                    (this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited)
            }
            return (
                u(e, [
                    {
                        key: 'clientRateLimitContext',
                        value: function () {
                            var e,
                                t,
                                n,
                                r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                i = new Date().getTime(),
                                o =
                                    null !==
                                        (e =
                                            null === (t = this.instance.persistence) || void 0 === t
                                                ? void 0
                                                : t.get_property(Xs)) && void 0 !== e
                                        ? e
                                        : { tokens: this.captureEventsBurstLimit, last: i }
                            ;(o.tokens += ((i - o.last) / 1e3) * this.captureEventsPerSecond),
                                (o.last = i),
                                o.tokens > this.captureEventsBurstLimit && (o.tokens = this.captureEventsBurstLimit)
                            var a = o.tokens < 1
                            return (
                                a || r || (o.tokens = Math.max(0, o.tokens - 1)),
                                !a ||
                                    this.lastEventRateLimited ||
                                    r ||
                                    this.instance.capture(
                                        '$$client_ingestion_warning',
                                        {
                                            $$client_ingestion_warning_message:
                                                'posthog-js client rate limited. Config is set to '
                                                    .concat(this.captureEventsPerSecond, ' events per second and ')
                                                    .concat(this.captureEventsBurstLimit, ' events burst limit.'),
                                        },
                                        { skip_client_rate_limiting: !0 }
                                    ),
                                (this.lastEventRateLimited = a),
                                null === (n = this.instance.persistence) || void 0 === n || n.set_property(Xs, o),
                                { isRateLimited: a, remainingTokens: o.tokens }
                            )
                        },
                    },
                    {
                        key: 'isServerRateLimited',
                        value: function (e) {
                            var t = this.serverLimits[e || 'events'] || !1
                            return !1 !== t && new Date().getTime() < t
                        },
                    },
                ]),
                e
            )
        })(),
        id = function () {
            return t(
                { initialPathName: (null == un ? void 0 : un.pathname) || '', referringDomain: Ml.referringDomain() },
                Ml.campaignParams()
            )
        },
        od = (function () {
            function e(t, n, r) {
                var i = this
                a(this, e),
                    l(this, '_onSessionIdCallback', function (e) {
                        var t = i._getStoredProps()
                        if (!t || t.sessionId !== e) {
                            var n = { sessionId: e, props: i._sessionSourceParamGenerator() }
                            i._persistence.register(l({}, Js, n))
                        }
                    }),
                    (this._sessionIdManager = t),
                    (this._persistence = n),
                    (this._sessionSourceParamGenerator = r || id),
                    this._sessionIdManager.onSessionId(this._onSessionIdCallback)
            }
            return (
                u(e, [
                    {
                        key: '_getStoredProps',
                        value: function () {
                            return this._persistence.props[Js]
                        },
                    },
                    {
                        key: 'getSessionProps',
                        value: function () {
                            var e,
                                t = null === (e = this._getStoredProps()) || void 0 === e ? void 0 : e.props
                            return t
                                ? {
                                      $client_session_initial_referring_host: t.referringDomain,
                                      $client_session_initial_pathname: t.initialPathName,
                                      $client_session_initial_utm_source: t.utm_source,
                                      $client_session_initial_utm_campaign: t.utm_campaign,
                                      $client_session_initial_utm_medium: t.utm_medium,
                                      $client_session_initial_utm_content: t.utm_content,
                                      $client_session_initial_utm_term: t.utm_term,
                                  }
                                : {}
                        },
                    },
                ]),
                e
            )
        })(),
        ad = [
            'ahrefsbot',
            'ahrefssiteaudit',
            'applebot',
            'baiduspider',
            'bingbot',
            'bingpreview',
            'bot.htm',
            'bot.php',
            'crawler',
            'deepscan',
            'duckduckbot',
            'facebookexternal',
            'facebookcatalog',
            'gptbot',
            'http://yandex.com/bots',
            'hubspot',
            'ia_archiver',
            'linkedinbot',
            'mj12bot',
            'msnbot',
            'nessus',
            'petalbot',
            'pinterest',
            'prerender',
            'rogerbot',
            'screaming frog',
            'semrushbot',
            'sitebulb',
            'slurp',
            'turnitin',
            'twitterbot',
            'vercelbot',
            'yahoo! slurp',
            'yandexbot',
            'headlesschrome',
            'cypress',
            'Google-HotelAdsVerifier',
            'adsbot-google',
            'apis-google',
            'duplexweb-google',
            'feedfetcher-google',
            'google favicon',
            'google web preview',
            'google-read-aloud',
            'googlebot',
            'googleweblight',
            'mediapartners-google',
            'storebot-google',
            'Bytespider;',
        ],
        sd = function (e, t) {
            if (!e) return !1
            var n = e.toLowerCase()
            return ad.concat(t || []).some(function (e) {
                var t = e.toLowerCase()
                return -1 !== n.indexOf(t)
            })
        },
        ud = (function () {
            function e() {
                a(this, e), (this.clicks = [])
            }
            return (
                u(e, [
                    {
                        key: 'isRageClick',
                        value: function (e, t, n) {
                            var r = this.clicks[this.clicks.length - 1]
                            if (r && Math.abs(e - r.x) + Math.abs(t - r.y) < 30 && n - r.timestamp < 1e3) {
                                if ((this.clicks.push({ x: e, y: t, timestamp: n }), 3 === this.clicks.length))
                                    return !0
                            } else this.clicks = [{ x: e, y: t, timestamp: n }]
                            return !1
                        },
                    },
                ]),
                e
            )
        })()
    function ld(e) {
        var t
        return e.id === iu || !(null === (t = e.closest) || void 0 === t || !t.call(e, '#' + iu))
    }
    var cd = (function () {
            function e(t) {
                var n,
                    r = this
                a(this, e),
                    l(this, 'rageclicks', new ud()),
                    l(this, '_enabledServerSide', !1),
                    l(this, '_initialized', !1),
                    l(this, '_flushInterval', null),
                    (this.instance = t),
                    (this._enabledServerSide = !(
                        null === (n = this.instance.persistence) ||
                        void 0 === n ||
                        !n.props[Rs]
                    )),
                    null == en ||
                        en.addEventListener('beforeunload', function () {
                            r.flush()
                        })
            }
            return (
                u(e, [
                    {
                        key: 'flushIntervalMilliseconds',
                        get: function () {
                            var e = 5e3
                            return (
                                Wt(this.instance.config.capture_heatmaps) &&
                                    this.instance.config.capture_heatmaps.flush_interval_milliseconds &&
                                    (e = this.instance.config.capture_heatmaps.flush_interval_milliseconds),
                                e
                            )
                        },
                    },
                    {
                        key: 'isEnabled',
                        get: function () {
                            return Ut(this.instance.config.capture_heatmaps)
                                ? Ut(this.instance.config.enable_heatmaps)
                                    ? this._enabledServerSide
                                    : this.instance.config.enable_heatmaps
                                : !1 !== this.instance.config.capture_heatmaps
                        },
                    },
                    {
                        key: 'startIfEnabled',
                        value: function () {
                            if (this.isEnabled) {
                                if (this._initialized) return
                                vn.info('[heatmaps] starting...'),
                                    this._setupListeners(),
                                    (this._flushInterval = setInterval(
                                        this.flush.bind(this),
                                        this.flushIntervalMilliseconds
                                    ))
                            } else {
                                var e
                                clearInterval(null !== (e = this._flushInterval) && void 0 !== e ? e : void 0),
                                    this.getAndClearBuffer()
                            }
                        },
                    },
                    {
                        key: 'afterDecideResponse',
                        value: function (e) {
                            var t = !!e.heatmaps
                            this.instance.persistence && this.instance.persistence.register(l({}, Rs, t)),
                                (this._enabledServerSide = t),
                                this.startIfEnabled()
                        },
                    },
                    {
                        key: 'getAndClearBuffer',
                        value: function () {
                            var e = this.buffer
                            return (this.buffer = void 0), e
                        },
                    },
                    {
                        key: '_setupListeners',
                        value: function () {
                            var e = this
                            en &&
                                sn &&
                                (Mn(
                                    sn,
                                    'click',
                                    function (t) {
                                        return e._onClick(t || (null == en ? void 0 : en.event))
                                    },
                                    !1,
                                    !0
                                ),
                                Mn(
                                    sn,
                                    'mousemove',
                                    function (t) {
                                        return e._onMouseMove(t || (null == en ? void 0 : en.event))
                                    },
                                    !1,
                                    !0
                                ),
                                (this._initialized = !0))
                        },
                    },
                    {
                        key: '_getProperties',
                        value: function (e, t) {
                            var n = this.instance.scrollManager.scrollY(),
                                r = this.instance.scrollManager.scrollX(),
                                i = this.instance.scrollManager.scrollElement(),
                                o = (function (e, t, n) {
                                    for (var r = e; r && !Un(r, 'body'); ) {
                                        if (r === n) return !1
                                        if (kn(t, null == en ? void 0 : en.getComputedStyle(r).position)) return !0
                                        r = zn(r)
                                    }
                                    return !1
                                })(e.target, ['fixed', 'sticky'], i)
                            return { x: e.clientX + (o ? 0 : r), y: e.clientY + (o ? 0 : n), target_fixed: o, type: t }
                        },
                    },
                    {
                        key: '_onClick',
                        value: function (e) {
                            var n
                            if (!ld(e.target)) {
                                var r = this._getProperties(e, 'click')
                                null !== (n = this.rageclicks) &&
                                    void 0 !== n &&
                                    n.isRageClick(e.clientX, e.clientY, new Date().getTime()) &&
                                    this._capture(t(t({}, r), {}, { type: 'rageclick' })),
                                    this._capture(r)
                            }
                        },
                    },
                    {
                        key: '_onMouseMove',
                        value: function (e) {
                            var t = this
                            ld(e.target) ||
                                (clearTimeout(this._mouseMoveTimeout),
                                (this._mouseMoveTimeout = setTimeout(function () {
                                    t._capture(t._getProperties(e, 'mousemove'))
                                }, 500)))
                        },
                    },
                    {
                        key: '_capture',
                        value: function (e) {
                            if (en) {
                                var t = en.location.href
                                ;(this.buffer = this.buffer || {}),
                                    this.buffer[t] || (this.buffer[t] = []),
                                    this.buffer[t].push(e)
                            }
                        },
                    },
                    {
                        key: 'flush',
                        value: function () {
                            this.buffer &&
                                !Vt(this.buffer) &&
                                this.instance.capture('$$heatmap', { $heatmap_data: this.getAndClearBuffer() })
                        },
                    },
                ]),
                e
            )
        })(),
        dd = (function () {
            function e(t) {
                var n = this
                a(this, e),
                    l(this, '_updateScrollData', function () {
                        var e, t, r, i
                        n.context || (n.context = {})
                        var o = n.scrollElement(),
                            a = n.scrollY(),
                            s = o ? Math.max(0, o.scrollHeight - o.clientHeight) : 0,
                            u = a + ((null == o ? void 0 : o.clientHeight) || 0),
                            l = (null == o ? void 0 : o.scrollHeight) || 0
                        ;(n.context.lastScrollY = Math.ceil(a)),
                            (n.context.maxScrollY = Math.max(
                                a,
                                null !== (e = n.context.maxScrollY) && void 0 !== e ? e : 0
                            )),
                            (n.context.maxScrollHeight = Math.max(
                                s,
                                null !== (t = n.context.maxScrollHeight) && void 0 !== t ? t : 0
                            )),
                            (n.context.lastContentY = u),
                            (n.context.maxContentY = Math.max(
                                u,
                                null !== (r = n.context.maxContentY) && void 0 !== r ? r : 0
                            )),
                            (n.context.maxContentHeight = Math.max(
                                l,
                                null !== (i = n.context.maxContentHeight) && void 0 !== i ? i : 0
                            ))
                    }),
                    (this.instance = t)
            }
            return (
                u(e, [
                    {
                        key: 'getContext',
                        value: function () {
                            return this.context
                        },
                    },
                    {
                        key: 'resetContext',
                        value: function () {
                            var e = this.context
                            return setTimeout(this._updateScrollData, 0), e
                        },
                    },
                    {
                        key: 'startMeasuringScrollPosition',
                        value: function () {
                            null == en || en.addEventListener('scroll', this._updateScrollData, !0),
                                null == en || en.addEventListener('scrollend', this._updateScrollData, !0),
                                null == en || en.addEventListener('resize', this._updateScrollData)
                        },
                    },
                    {
                        key: 'scrollElement',
                        value: function () {
                            if (!this.instance.config.scroll_root_selector)
                                return null == en ? void 0 : en.document.documentElement
                            var e,
                                t = v(
                                    Ht(this.instance.config.scroll_root_selector)
                                        ? this.instance.config.scroll_root_selector
                                        : [this.instance.config.scroll_root_selector]
                                )
                            try {
                                for (t.s(); !(e = t.n()).done; ) {
                                    var n = e.value,
                                        r = null == en ? void 0 : en.document.querySelector(n)
                                    if (r) return r
                                }
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                        },
                    },
                    {
                        key: 'scrollY',
                        value: function () {
                            if (this.instance.config.scroll_root_selector) {
                                var e = this.scrollElement()
                                return (e && e.scrollTop) || 0
                            }
                            return (en && (en.scrollY || en.pageYOffset || en.document.documentElement.scrollTop)) || 0
                        },
                    },
                    {
                        key: 'scrollX',
                        value: function () {
                            if (this.instance.config.scroll_root_selector) {
                                var e = this.scrollElement()
                                return (e && e.scrollLeft) || 0
                            }
                            return (en && (en.scrollX || en.pageXOffset || en.document.documentElement.scrollLeft)) || 0
                        },
                    },
                ]),
                e
            )
        })(),
        fd = '$copy_autocapture'
    function pd(e, t) {
        return t.length > e ? t.slice(0, e) + '...' : t
    }
    var hd,
        vd = (function () {
            function e(t) {
                a(this, e),
                    l(this, '_initialized', !1),
                    l(this, '_isDisabledServerSide', null),
                    l(this, 'rageclicks', new ud()),
                    l(this, '_elementsChainAsString', !1),
                    (this.instance = t),
                    (this._elementSelectors = null)
            }
            return (
                u(e, [
                    {
                        key: 'config',
                        get: function () {
                            var e,
                                t,
                                n = Wt(this.instance.config.autocapture) ? this.instance.config.autocapture : {}
                            return (
                                (n.url_allowlist =
                                    null === (e = n.url_allowlist) || void 0 === e
                                        ? void 0
                                        : e.map(function (e) {
                                              return new RegExp(e)
                                          })),
                                (n.url_ignorelist =
                                    null === (t = n.url_ignorelist) || void 0 === t
                                        ? void 0
                                        : t.map(function (e) {
                                              return new RegExp(e)
                                          })),
                                n
                            )
                        },
                    },
                    {
                        key: '_addDomEventHandlers',
                        value: function () {
                            var e = this
                            if (this.isBrowserSupported()) {
                                if (en && sn) {
                                    var t = function (t) {
                                            t = t || (null == en ? void 0 : en.event)
                                            try {
                                                e._captureEvent(t)
                                            } catch (e) {
                                                vn.error('Failed to capture event', e)
                                            }
                                        },
                                        n = function (t) {
                                            ;(t = t || (null == en ? void 0 : en.event)), e._captureEvent(t, fd)
                                        }
                                    Mn(sn, 'submit', t, !1, !0),
                                        Mn(sn, 'change', t, !1, !0),
                                        Mn(sn, 'click', t, !1, !0),
                                        this.config.capture_copied_text &&
                                            (Mn(sn, 'copy', n, !1, !0), Mn(sn, 'cut', n, !1, !0))
                                }
                            } else vn.info('Disabling Automatic Event Collection because this browser is not supported')
                        },
                    },
                    {
                        key: 'startIfEnabled',
                        value: function () {
                            this.isEnabled &&
                                !this._initialized &&
                                (this._addDomEventHandlers(), (this._initialized = !0))
                        },
                    },
                    {
                        key: 'afterDecideResponse',
                        value: function (e) {
                            e.elementsChainAsString && (this._elementsChainAsString = e.elementsChainAsString),
                                this.instance.persistence &&
                                    this.instance.persistence.register(l({}, Ms, !!e.autocapture_opt_out)),
                                (this._isDisabledServerSide = !!e.autocapture_opt_out),
                                this.startIfEnabled()
                        },
                    },
                    {
                        key: 'setElementSelectors',
                        value: function (e) {
                            this._elementSelectors = e
                        },
                    },
                    {
                        key: 'getElementSelectors',
                        value: function (e) {
                            var t,
                                n = []
                            return (
                                null === (t = this._elementSelectors) ||
                                    void 0 === t ||
                                    t.forEach(function (t) {
                                        var r = null == sn ? void 0 : sn.querySelectorAll(t)
                                        null == r ||
                                            r.forEach(function (r) {
                                                e === r && n.push(t)
                                            })
                                    }),
                                n
                            )
                        },
                    },
                    {
                        key: 'isEnabled',
                        get: function () {
                            var e,
                                t,
                                n = null === (e = this.instance.persistence) || void 0 === e ? void 0 : e.props[Ms],
                                r = this._isDisabledServerSide
                            if (Zt(r) && !Kt(n) && !this.instance.config.advanced_disable_decide) return !1
                            var i = null !== (t = this._isDisabledServerSide) && void 0 !== t ? t : !!n
                            return !!this.instance.config.autocapture && !i
                        },
                    },
                    {
                        key: '_previousElementSibling',
                        value: function (e) {
                            if (e.previousElementSibling) return e.previousElementSibling
                            var t = e
                            do {
                                t = t.previousSibling
                            } while (t && !Vn(t))
                            return t
                        },
                    },
                    {
                        key: '_getAugmentPropertiesFromElement',
                        value: function (e) {
                            if (!Kn(e)) return {}
                            var t = {}
                            return (
                                yn(e.attributes, function (e) {
                                    if (e.name && 0 === e.name.indexOf('data-ph-capture-attribute')) {
                                        var n = e.name.replace('data-ph-capture-attribute-', ''),
                                            r = e.value
                                        n && r && ir(r) && (t[n] = r)
                                    }
                                }),
                                t
                            )
                        },
                    },
                    {
                        key: '_getPropertiesFromElement',
                        value: function (e, t, n) {
                            var r,
                                i = e.tagName.toLowerCase(),
                                o = { tag_name: i }
                            Zn.indexOf(i) > -1 &&
                                !n &&
                                ('a' === i.toLowerCase() || 'button' === i.toLowerCase()
                                    ? (o.$el_text = pd(1024, or(e)))
                                    : (o.$el_text = pd(1024, Wn(e))))
                            var a = Hn(e)
                            a.length > 0 &&
                                (o.classes = a.filter(function (e) {
                                    return '' !== e
                                }))
                            var s = null === (r = this.config) || void 0 === r ? void 0 : r.element_attribute_ignorelist
                            yn(e.attributes, function (n) {
                                var r
                                if (
                                    (!Yn(e) || -1 !== ['name', 'id', 'class', 'aria-label'].indexOf(n.name)) &&
                                    (null == s || !s.includes(n.name)) &&
                                    !t &&
                                    ir(n.value) &&
                                    ((r = n.name),
                                    !jt(r) || ('_ngcontent' !== r.substring(0, 10) && '_nghost' !== r.substring(0, 7)))
                                ) {
                                    var i = n.value
                                    'class' === n.name && (i = qn(i).join(' ')), (o['attr__' + n.name] = pd(1024, i))
                                }
                            })
                            for (var u = 1, l = 1, c = e; (c = this._previousElementSibling(c)); )
                                u++, c.tagName === e.tagName && l++
                            return (o.nth_child = u), (o.nth_of_type = l), o
                        },
                    },
                    {
                        key: '_getDefaultProperties',
                        value: function (e) {
                            return { $event_type: e, $ce_version: 1 }
                        },
                    },
                    {
                        key: '_getEventTarget',
                        value: function (e) {
                            return Ut(e.target)
                                ? e.srcElement || null
                                : null !== (t = e.target) && void 0 !== t && t.shadowRoot
                                ? e.composedPath()[0] || null
                                : e.target || null
                            var t
                        },
                    },
                    {
                        key: '_captureEvent',
                        value: function (e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '$autocapture'
                            if (this.isEnabled) {
                                var r,
                                    i = this._getEventTarget(e)
                                if (
                                    (jn(i) && (i = i.parentNode || null),
                                    '$autocapture' === n && 'click' === e.type && e instanceof MouseEvent)
                                )
                                    this.instance.config.rageclick &&
                                        null !== (r = this.rageclicks) &&
                                        void 0 !== r &&
                                        r.isRageClick(e.clientX, e.clientY, new Date().getTime()) &&
                                        this._captureEvent(e, '$rageclick')
                                var o = n === fd
                                if (i && Qn(i, e, this.config, o, o ? ['copy', 'cut'] : void 0)) {
                                    for (var a, s, u = [i], l = i; l.parentNode && !Un(l, 'body'); )
                                        Gn(l.parentNode)
                                            ? (u.push(l.parentNode.host), (l = l.parentNode.host))
                                            : (u.push(l.parentNode), (l = l.parentNode))
                                    var c,
                                        d,
                                        f = [],
                                        p = {},
                                        h = !1
                                    if (
                                        (yn(u, function (e) {
                                            var n = Kn(e)
                                            'a' === e.tagName.toLowerCase() &&
                                                ((c = e.getAttribute('href')), (c = n && ir(c) && c)),
                                                kn(Hn(e), 'ph-no-capture') && (h = !0),
                                                f.push(
                                                    t._getPropertiesFromElement(
                                                        e,
                                                        t.instance.config.mask_all_element_attributes,
                                                        t.instance.config.mask_all_text
                                                    )
                                                )
                                            var r = t._getAugmentPropertiesFromElement(e)
                                            bn(p, r)
                                        }),
                                        this.instance.config.mask_all_text ||
                                            ('a' === i.tagName.toLowerCase() || 'button' === i.tagName.toLowerCase()
                                                ? (f[0].$el_text = or(i))
                                                : (f[0].$el_text = Wn(i))),
                                        c)
                                    ) {
                                        var v, g
                                        f[0].attr__href = c
                                        var m = null === (v = On(c)) || void 0 === v ? void 0 : v.host,
                                            _ =
                                                null == en || null === (g = en.location) || void 0 === g
                                                    ? void 0
                                                    : g.host
                                        m && _ && m !== _ && (d = c)
                                    }
                                    if (h) return !1
                                    var y = bn(
                                            this._getDefaultProperties(e.type),
                                            this._elementsChainAsString ? { $elements_chain: sr(f) } : { $elements: f },
                                            null !== (a = f[0]) && void 0 !== a && a.$el_text
                                                ? {
                                                      $el_text:
                                                          null === (s = f[0]) || void 0 === s ? void 0 : s.$el_text,
                                                  }
                                                : {},
                                            d && 'click' === e.type ? { $external_click_url: d } : {},
                                            p
                                        ),
                                        b = this.getElementSelectors(i)
                                    if ((b && b.length > 0 && (y.$element_selectors = b), n === fd)) {
                                        var k,
                                            w = $n(
                                                null == en || null === (k = en.getSelection()) || void 0 === k
                                                    ? void 0
                                                    : k.toString()
                                            ),
                                            C = e.type || 'clipboard'
                                        if (!w) return !1
                                        ;(y.$selected_content = w), (y.$copy_type = C)
                                    }
                                    return this.instance.capture(n, y), !0
                                }
                            }
                        },
                    },
                    {
                        key: 'isBrowserSupported',
                        value: function () {
                            return $t(null == sn ? void 0 : sn.querySelectorAll)
                        },
                    },
                ]),
                e
            )
        })(),
        gd = (function () {
            function e(t) {
                var n = this
                a(this, e),
                    l(this, '_restoreXHRPatch', void 0),
                    l(this, '_restoreFetchPatch', void 0),
                    l(this, '_startCapturing', function () {
                        Ut(n._restoreXHRPatch) && pn.postHogTracingHeadersPatchFns._patchXHR(n.instance.sessionManager),
                            Ut(n._restoreFetchPatch) &&
                                pn.postHogTracingHeadersPatchFns._patchFetch(n.instance.sessionManager)
                    }),
                    (this.instance = t)
            }
            return (
                u(e, [
                    {
                        key: '_loadScript',
                        value: function (e) {
                            pn.postHogTracingHeadersPatchFns && e(),
                                this.instance.requestRouter.loadScript(
                                    '/static/tracing-headers.js?v='.concat(Xt.LIB_VERSION),
                                    function (t) {
                                        if (t) return vn.error('[TRACING-HEADERS] failed to load script', t)
                                        e()
                                    }
                                )
                        },
                    },
                    {
                        key: 'startIfEnabledOrStop',
                        value: function () {
                            var e, t
                            this.instance.config.__add_tracing_headers
                                ? this._loadScript(this._startCapturing)
                                : (null === (e = this._restoreXHRPatch) || void 0 === e || e.call(this),
                                  null === (t = this._restoreFetchPatch) || void 0 === t || t.call(this),
                                  (this._restoreXHRPatch = void 0),
                                  (this._restoreFetchPatch = void 0))
                        },
                    },
                ]),
                e
            )
        })()
    !(function (e) {
        ;(e[(e.PENDING = -1)] = 'PENDING'), (e[(e.DENIED = 0)] = 'DENIED'), (e[(e.GRANTED = 1)] = 'GRANTED')
    })(hd || (hd = {}))
    var md = (function () {
            function e(t) {
                a(this, e), (this.instance = t)
            }
            return (
                u(e, [
                    {
                        key: 'config',
                        get: function () {
                            return this.instance.config
                        },
                    },
                    {
                        key: 'consent',
                        get: function () {
                            return this.getDnt() ? hd.DENIED : this.storedConsent
                        },
                    },
                    {
                        key: 'isOptedOut',
                        value: function () {
                            return (
                                this.consent === hd.DENIED ||
                                (this.consent === hd.PENDING && this.config.opt_out_capturing_by_default)
                            )
                        },
                    },
                    {
                        key: 'isOptedIn',
                        value: function () {
                            return !this.isOptedOut()
                        },
                    },
                    {
                        key: 'optInOut',
                        value: function (e) {
                            this.storage.set(
                                this.storageKey,
                                e ? 1 : 0,
                                this.config.cookie_expiration,
                                this.config.cross_subdomain_cookie,
                                this.config.secure_cookie
                            )
                        },
                    },
                    {
                        key: 'reset',
                        value: function () {
                            this.storage.remove(this.storageKey, this.config.cross_subdomain_cookie)
                        },
                    },
                    {
                        key: 'storageKey',
                        get: function () {
                            var e = this.instance.config,
                                t = e.token
                            return (e.opt_out_capturing_cookie_prefix || '__ph_opt_in_out_') + t
                        },
                    },
                    {
                        key: 'storedConsent',
                        get: function () {
                            var e = this.storage.get(this.storageKey)
                            return '1' === e ? hd.GRANTED : '0' === e ? hd.DENIED : hd.PENDING
                        },
                    },
                    {
                        key: 'storage',
                        get: function () {
                            if (!this._storage) {
                                var e = this.config.opt_out_capturing_persistence_type
                                this._storage = 'localStorage' === e ? xu : Iu
                                var t = 'localStorage' === e ? Iu : xu
                                t.get(this.storageKey) &&
                                    (this._storage.get(this.storageKey) ||
                                        this.optInOut('1' === t.get(this.storageKey)),
                                    t.remove(this.storageKey, this.config.cross_subdomain_cookie))
                            }
                            return this._storage
                        },
                    },
                    {
                        key: 'getDnt',
                        value: function () {
                            return (
                                !!this.config.respect_dnt &&
                                !!Rn(
                                    [
                                        null == an ? void 0 : an.doNotTrack,
                                        null == an ? void 0 : an.msDoNotTrack,
                                        pn.doNotTrack,
                                    ],
                                    function (e) {
                                        return kn([!0, 1, '1', 'yes'], e)
                                    }
                                )
                            )
                        },
                    },
                ]),
                e
            )
        })(),
        _d = '[Exception Autocapture]',
        yd = (function () {
            function e(t) {
                var n,
                    r = this
                a(this, e),
                    l(this, 'originalOnUnhandledRejectionHandler', void 0),
                    l(this, 'startCapturing', function () {
                        if (en && r.isEnabled && !r.hasHandlers && !r.isCapturing) {
                            var e = en.posthogErrorWrappingFunctions.wrapOnError,
                                t = en.posthogErrorWrappingFunctions.wrapUnhandledRejection
                            if (e && t)
                                try {
                                    ;(r.unwrapOnError = e(r.captureException.bind(r))),
                                        (r.unwrapUnhandledRejection = t(r.captureException.bind(r)))
                                } catch (e) {
                                    vn.error(_d + ' failed to start', e), r.stopCapturing()
                                }
                            else vn.error(_d + ' failed to load error wrapping functions - cannot start')
                        }
                    }),
                    (this.instance = t),
                    (this.remoteEnabled = !(null === (n = this.instance.persistence) || void 0 === n || !n.props[Fs])),
                    this.startIfEnabled()
            }
            return (
                u(e, [
                    {
                        key: 'isEnabled',
                        get: function () {
                            var e
                            return null !== (e = this.remoteEnabled) && void 0 !== e && e
                        },
                    },
                    {
                        key: 'isCapturing',
                        get: function () {
                            var e
                            return !(
                                null == en ||
                                null === (e = en.onerror) ||
                                void 0 === e ||
                                !e.__POSTHOG_INSTRUMENTED__
                            )
                        },
                    },
                    {
                        key: 'hasHandlers',
                        get: function () {
                            return this.originalOnUnhandledRejectionHandler || this.unwrapOnError
                        },
                    },
                    {
                        key: 'startIfEnabled',
                        value: function () {
                            this.isEnabled &&
                                !this.isCapturing &&
                                (vn.info(_d + ' enabled, starting...'), this.loadScript(this.startCapturing))
                        },
                    },
                    {
                        key: 'loadScript',
                        value: function (e) {
                            this.hasHandlers && e(),
                                this.instance.requestRouter.loadScript(
                                    '/static/exception-autocapture.js?v='.concat(Xt.LIB_VERSION),
                                    function (t) {
                                        if (t) return vn.error(_d + ' failed to load script', t)
                                        e()
                                    }
                                )
                        },
                    },
                    {
                        key: 'stopCapturing',
                        value: function () {
                            var e, t
                            null === (e = this.unwrapOnError) || void 0 === e || e.call(this),
                                null === (t = this.unwrapUnhandledRejection) || void 0 === t || t.call(this)
                        },
                    },
                    {
                        key: 'afterDecideResponse',
                        value: function (e) {
                            var t = e.autocaptureExceptions
                            ;(this.remoteEnabled = !!t || !1),
                                this.instance.persistence &&
                                    this.instance.persistence.register(l({}, Fs, this.remoteEnabled)),
                                this.startIfEnabled()
                        },
                    },
                    {
                        key: 'captureException',
                        value: function (e) {
                            var t = this.instance.requestRouter.endpointFor('ui')
                            ;(e.$exception_personURL = ''
                                .concat(t, '/project/')
                                .concat(this.instance.config.token, '/person/')
                                .concat(this.instance.get_distinct_id())),
                                this.instance.exceptions.sendExceptionEvent(e)
                        },
                    },
                ]),
                e
            )
        })(),
        bd = 9e5,
        kd = '[Web Vitals]',
        wd = (function () {
            function e(n) {
                var r,
                    i = this
                a(this, e),
                    l(this, '_enabledServerSide', !1),
                    l(this, '_initialized', !1),
                    l(this, 'buffer', { url: void 0, metrics: [], firstMetricTimestamp: void 0 }),
                    l(this, '_flushToCapture', function () {
                        clearTimeout(i._delayedFlushTimer),
                            0 !== i.buffer.metrics.length &&
                                (i.instance.capture(
                                    '$web_vitals',
                                    i.buffer.metrics.reduce(function (e, n) {
                                        var r
                                        return t(
                                            t({}, e),
                                            {},
                                            (l((r = {}), '$web_vitals_'.concat(n.name, '_event'), t({}, n)),
                                            l(r, '$web_vitals_'.concat(n.name, '_value'), n.value),
                                            r)
                                        )
                                    }, {})
                                ),
                                (i.buffer = { url: void 0, metrics: [], firstMetricTimestamp: void 0 }))
                    }),
                    l(this, '_addToBuffer', function (e) {
                        var n,
                            r =
                                null === (n = i.instance.sessionManager) || void 0 === n
                                    ? void 0
                                    : n.checkAndGetSessionAndWindowId(!0)
                        if (Ut(r)) vn.error(kd + 'Could not read session ID. Dropping metrics!')
                        else {
                            i.buffer = i.buffer || { url: void 0, metrics: [], firstMetricTimestamp: void 0 }
                            var o = i._currentURL()
                            if (!Ut(o))
                                if (zt(null == e ? void 0 : e.name) || zt(null == e ? void 0 : e.value))
                                    vn.error(kd + 'Invalid metric received', e)
                                else if (i._maxAllowedValue && e.value >= i._maxAllowedValue)
                                    vn.error(kd + 'Ignoring metric with value >= ' + i._maxAllowedValue, e)
                                else
                                    i.buffer.url !== o &&
                                        (i._flushToCapture(),
                                        (i._delayedFlushTimer = setTimeout(i._flushToCapture, 8e3))),
                                        Ut(i.buffer.url) && (i.buffer.url = o),
                                        (i.buffer.firstMetricTimestamp = Ut(i.buffer.firstMetricTimestamp)
                                            ? Date.now()
                                            : i.buffer.firstMetricTimestamp),
                                        i.buffer.metrics.push(
                                            t(
                                                t({}, e),
                                                {},
                                                {
                                                    $current_url: o,
                                                    $session_id: r.sessionId,
                                                    $window_id: r.windowId,
                                                    timestamp: Date.now(),
                                                }
                                            )
                                        ),
                                        i.buffer.metrics.length === i.allowedMetrics.length && i._flushToCapture()
                        }
                    }),
                    l(this, '_startCapturing', function () {
                        var e,
                            t,
                            n,
                            r,
                            o = pn.__PosthogExtensions__
                        if (!Ut(o)) {
                            var a = o.postHogWebVitalsCallbacks
                            ;(e = a.onLCP), (t = a.onCLS), (n = a.onFCP), (r = a.onINP)
                        }
                        e && t && n && r
                            ? (i.allowedMetrics.indexOf('LCP') > -1 && e(i._addToBuffer.bind(i)),
                              i.allowedMetrics.indexOf('CLS') > -1 && t(i._addToBuffer.bind(i)),
                              i.allowedMetrics.indexOf('FCP') > -1 && n(i._addToBuffer.bind(i)),
                              i.allowedMetrics.indexOf('INP') > -1 && r(i._addToBuffer.bind(i)),
                              (i._initialized = !0))
                            : vn.error(kd + 'web vitals callbacks not loaded - not starting')
                    }),
                    (this.instance = n),
                    (this._enabledServerSide = !(
                        null === (r = this.instance.persistence) ||
                        void 0 === r ||
                        !r.props[Ns]
                    )),
                    this.startIfEnabled()
            }
            return (
                u(e, [
                    {
                        key: 'allowedMetrics',
                        get: function () {
                            var e,
                                t,
                                n = Wt(this.instance.config.capture_performance)
                                    ? null === (e = this.instance.config.capture_performance) || void 0 === e
                                        ? void 0
                                        : e.web_vitals_allowed_metrics
                                    : void 0
                            return Ut(n)
                                ? (null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.props[Ls]) || [
                                      'CLS',
                                      'FCP',
                                      'INP',
                                      'LCP',
                                  ]
                                : n
                        },
                    },
                    {
                        key: '_maxAllowedValue',
                        get: function () {
                            var e =
                                Wt(this.instance.config.capture_performance) &&
                                Qt(this.instance.config.capture_performance.__web_vitals_max_value)
                                    ? this.instance.config.capture_performance.__web_vitals_max_value
                                    : bd
                            return 0 < e && e <= 6e4 ? bd : e
                        },
                    },
                    {
                        key: 'isEnabled',
                        get: function () {
                            var e = Wt(this.instance.config.capture_performance)
                                ? this.instance.config.capture_performance.web_vitals
                                : void 0
                            return Kt(e) ? e : this._enabledServerSide
                        },
                    },
                    {
                        key: 'startIfEnabled',
                        value: function () {
                            this.isEnabled &&
                                !this._initialized &&
                                (vn.info(kd + ' enabled, starting...'), this.loadScript(this._startCapturing))
                        },
                    },
                    {
                        key: 'afterDecideResponse',
                        value: function (e) {
                            var t = Wt(e.capturePerformance) && !!e.capturePerformance.web_vitals,
                                n = Wt(e.capturePerformance) ? e.capturePerformance.web_vitals_allowed_metrics : void 0
                            this.instance.persistence &&
                                (this.instance.persistence.register(l({}, Ns, t)),
                                this.instance.persistence.register(l({}, Ls, n))),
                                (this._enabledServerSide = t),
                                this.startIfEnabled()
                        },
                    },
                    {
                        key: 'loadScript',
                        value: function (e) {
                            var t
                            null !== (t = pn.__PosthogExtensions__) &&
                                void 0 !== t &&
                                t.postHogWebVitalsCallbacks &&
                                e(),
                                this.instance.requestRouter.loadScript(
                                    '/static/web-vitals.js?v='.concat(Xt.LIB_VERSION),
                                    function (t) {
                                        t ? vn.error(kd + ' failed to load script', t) : e()
                                    }
                                )
                        },
                    },
                    {
                        key: '_currentURL',
                        value: function () {
                            var e = en ? en.location.href : void 0
                            return e || vn.error(kd + 'Could not determine current URL'), e
                        },
                    },
                ]),
                e
            )
        })(),
        Cd = {
            icontains: function (e, t) {
                return !!en && t.href.toLowerCase().indexOf(e.toLowerCase()) > -1
            },
            not_icontains: function (e, t) {
                return !!en && -1 === t.href.toLowerCase().indexOf(e.toLowerCase())
            },
            regex: function (e, t) {
                return !!en && Nn(t.href, e)
            },
            not_regex: function (e, t) {
                return !!en && !Nn(t.href, e)
            },
            exact: function (e, t) {
                return t.href === e
            },
            is_not: function (e, t) {
                return t.href !== e
            },
        },
        Id = (function () {
            function e(t) {
                var n = this
                a(this, e),
                    l(this, 'getWebExperimentsAndEvaluateDisplayLogic', function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                        n.getWebExperiments(function (t) {
                            e.logInfo('retrieved web experiments from the server'),
                                (n._flagToExperiments = new Map()),
                                t.forEach(function (t) {
                                    if (t.feature_flag_key && n._featureFlags && n._featureFlags[t.feature_flag_key]) {
                                        var r
                                        if (n._flagToExperiments)
                                            e.logInfo(
                                                'setting flag key ',
                                                t.feature_flag_key,
                                                ' to web experiment ',
                                                t
                                            ),
                                                null === (r = n._flagToExperiments) ||
                                                    void 0 === r ||
                                                    r.set(t.feature_flag_key, t)
                                        var i = n._featureFlags[t.feature_flag_key]
                                        i && t.variants[i] && e.applyTransforms(t.name, i, t.variants[i].transforms)
                                    } else if (t.variants)
                                        for (var o in t.variants) {
                                            var a = t.variants[o]
                                            e.matchesTestVariant(a) && e.applyTransforms(t.name, o, a.transforms)
                                        }
                                })
                        }, t)
                    }),
                    (this.instance = t)
                this.instance.onFeatureFlags &&
                    this.instance.onFeatureFlags(function (e) {
                        n.applyFeatureFlagChanges(e)
                    }),
                    (this._flagToExperiments = new Map())
            }
            return (
                u(
                    e,
                    [
                        {
                            key: 'applyFeatureFlagChanges',
                            value: function (t) {
                                var n = this
                                e.logInfo('applying feature flags', t),
                                    zt(this._flagToExperiments) ||
                                        this.instance.config.disable_web_experiments ||
                                        t.forEach(function (t) {
                                            var r
                                            if (
                                                n._flagToExperiments &&
                                                null !== (r = n._flagToExperiments) &&
                                                void 0 !== r &&
                                                r.has(t)
                                            ) {
                                                var i,
                                                    o = n.instance.getFeatureFlag(t),
                                                    a =
                                                        null === (i = n._flagToExperiments) || void 0 === i
                                                            ? void 0
                                                            : i.get(t)
                                                o &&
                                                    null != a &&
                                                    a.variants[o] &&
                                                    e.applyTransforms(a.name, o, a.variants[o].transforms)
                                            }
                                        })
                            },
                        },
                        {
                            key: 'afterDecideResponse',
                            value: function (e) {
                                ;(this._featureFlags = e.featureFlags), this.loadIfEnabled()
                            },
                        },
                        {
                            key: 'loadIfEnabled',
                            value: function () {
                                this.instance.config.disable_web_experiments ||
                                    this.getWebExperimentsAndEvaluateDisplayLogic()
                            },
                        },
                        {
                            key: 'getWebExperiments',
                            value: function (e, t) {
                                if (this.instance.config.disable_web_experiments) return e([])
                                var n = this.instance.get_property('$web_experiments')
                                if (n && !t) return e(n)
                                this.instance._send_request({
                                    url: this.instance.requestRouter.endpointFor(
                                        'api',
                                        '/api/web_experiments/?token='.concat(this.instance.config.token)
                                    ),
                                    method: 'GET',
                                    transport: 'XHR',
                                    callback: function (t) {
                                        if (200 !== t.statusCode || !t.json) return e([])
                                        var n = t.json.experiments || []
                                        return e(n)
                                    },
                                })
                            },
                        },
                    ],
                    [
                        {
                            key: 'matchesTestVariant',
                            value: function (t) {
                                return !zt(t.conditions) && e.matchUrlConditions(t) && e.matchUTMConditions(t)
                            },
                        },
                        {
                            key: 'matchUrlConditions',
                            value: function (t) {
                                var n
                                if (
                                    zt(t.conditions) ||
                                    zt(null === (n = t.conditions) || void 0 === n ? void 0 : n.url)
                                )
                                    return !0
                                var r,
                                    i,
                                    o,
                                    a = e.getWindowLocation()
                                return (
                                    !!a &&
                                    (null === (r = t.conditions) ||
                                        void 0 === r ||
                                        !r.url ||
                                        Cd[
                                            null !==
                                                (i =
                                                    null === (o = t.conditions) || void 0 === o
                                                        ? void 0
                                                        : o.urlMatchType) && void 0 !== i
                                                ? i
                                                : 'icontains'
                                        ](t.conditions.url, a))
                                )
                            },
                        },
                        {
                            key: 'getWindowLocation',
                            value: function () {
                                return null == en ? void 0 : en.location
                            },
                        },
                        {
                            key: 'matchUTMConditions',
                            value: function (e) {
                                var t
                                if (
                                    zt(e.conditions) ||
                                    zt(null === (t = e.conditions) || void 0 === t ? void 0 : t.utm)
                                )
                                    return !0
                                var n = Ml.campaignParams()
                                if (n.utm_source) {
                                    var r,
                                        i,
                                        o,
                                        a,
                                        s,
                                        u,
                                        l,
                                        c,
                                        d,
                                        f,
                                        p,
                                        h,
                                        v,
                                        g,
                                        m,
                                        _,
                                        y =
                                            null === (r = e.conditions) ||
                                            void 0 === r ||
                                            null === (i = r.utm) ||
                                            void 0 === i ||
                                            !i.utm_campaign ||
                                            (null === (o = e.conditions) ||
                                            void 0 === o ||
                                            null === (a = o.utm) ||
                                            void 0 === a
                                                ? void 0
                                                : a.utm_campaign) == n.utm_campaign,
                                        b =
                                            null === (s = e.conditions) ||
                                            void 0 === s ||
                                            null === (u = s.utm) ||
                                            void 0 === u ||
                                            !u.utm_source ||
                                            (null === (l = e.conditions) ||
                                            void 0 === l ||
                                            null === (c = l.utm) ||
                                            void 0 === c
                                                ? void 0
                                                : c.utm_source) == n.utm_source,
                                        k =
                                            null === (d = e.conditions) ||
                                            void 0 === d ||
                                            null === (f = d.utm) ||
                                            void 0 === f ||
                                            !f.utm_medium ||
                                            (null === (p = e.conditions) ||
                                            void 0 === p ||
                                            null === (h = p.utm) ||
                                            void 0 === h
                                                ? void 0
                                                : h.utm_medium) == n.utm_medium,
                                        w =
                                            null === (v = e.conditions) ||
                                            void 0 === v ||
                                            null === (g = v.utm) ||
                                            void 0 === g ||
                                            !g.utm_term ||
                                            (null === (m = e.conditions) ||
                                            void 0 === m ||
                                            null === (_ = m.utm) ||
                                            void 0 === _
                                                ? void 0
                                                : _.utm_term) == n.utm_term
                                    return y && k && w && b
                                }
                                return !1
                            },
                        },
                        {
                            key: 'logInfo',
                            value: function (e) {
                                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                                    n[r - 1] = arguments[r]
                                vn.info('[WebExperiments] '.concat(e), n)
                            },
                        },
                        {
                            key: 'applyTransforms',
                            value: function (t, n, r) {
                                r.forEach(function (r) {
                                    if (r.selector) {
                                        var i
                                        e.logInfo(
                                            'applying transform of variant '
                                                .concat(n, ' for experiment ')
                                                .concat(t, ' '),
                                            r
                                        )
                                        var o =
                                            null === (i = document) || void 0 === i
                                                ? void 0
                                                : i.querySelectorAll(r.selector)
                                        null == o ||
                                            o.forEach(function (e) {
                                                var t = e
                                                r.attributes &&
                                                    r.attributes.forEach(function (e) {
                                                        switch (e.name) {
                                                            case 'text':
                                                                t.innerText = e.value
                                                                break
                                                            case 'html':
                                                                t.innerHTML = e.value
                                                                break
                                                            case 'cssClass':
                                                                t.className = e.value
                                                                break
                                                            default:
                                                                t.setAttribute(e.name, e.value)
                                                        }
                                                    }),
                                                    r.text && (t.innerText = r.text),
                                                    r.html && (t.innerHTML = r.html),
                                                    r.className && (t.className = r.className)
                                            })
                                    }
                                })
                            },
                        },
                    ]
                ),
                e
            )
        })(),
        Sd = '/e/',
        xd = (function () {
            function e(t) {
                var n
                a(this, e),
                    (this.instance = t),
                    (this._endpointSuffix =
                        (null === (n = this.instance.persistence) || void 0 === n ? void 0 : n.props[Os]) || Sd)
            }
            return (
                u(e, [
                    {
                        key: 'endpoint',
                        get: function () {
                            return this.instance.requestRouter.endpointFor('api', this._endpointSuffix)
                        },
                    },
                    {
                        key: 'afterDecideResponse',
                        value: function (e) {
                            var t = e.autocaptureExceptions
                            ;(this._endpointSuffix = (Wt(t) && t.endpoint) || Sd),
                                this.instance.persistence &&
                                    this.instance.persistence.register(l({}, Os, this._endpointSuffix))
                        },
                    },
                    {
                        key: 'sendExceptionEvent',
                        value: function (e) {
                            this.instance.capture('$exception', e, {
                                _noTruncate: !0,
                                _batchKey: 'exceptionEvent',
                                _url: this.endpoint,
                            })
                        },
                    },
                ]),
                e
            )
        })(),
        Ed = {},
        Td = function () {},
        Ad = 'posthog',
        Md =
            !Fc &&
            -1 === (null == fn ? void 0 : fn.indexOf('MSIE')) &&
            -1 === (null == fn ? void 0 : fn.indexOf('Mozilla')),
        Rd = function () {
            var e, t, n
            return {
                api_host: 'https://us.i.posthog.com',
                ui_host: null,
                token: '',
                autocapture: !0,
                rageclick: !0,
                cross_subdomain_cookie:
                    ((t = null == sn ? void 0 : sn.location),
                    (n = null == t ? void 0 : t.hostname),
                    !!jt(n) && 'herokuapp.com' !== n.split('.').slice(-2).join('.')),
                persistence: 'localStorage+cookie',
                persistence_name: '',
                loaded: Td,
                store_google: !0,
                custom_campaign_params: [],
                custom_blocked_useragents: [],
                save_referrer: !0,
                capture_pageview: !0,
                capture_pageleave: 'if_capture_pageview',
                debug:
                    (un && jt(null == un ? void 0 : un.search) && -1 !== un.search.indexOf('__posthog_debug=true')) ||
                    !1,
                verbose: !1,
                cookie_expiration: 365,
                upgrade: !1,
                disable_session_recording: !1,
                disable_persistence: !1,
                disable_web_experiments: !0,
                disable_surveys: !1,
                enable_recording_console_log: void 0,
                secure_cookie:
                    'https:' === (null == en || null === (e = en.location) || void 0 === e ? void 0 : e.protocol),
                ip: !0,
                opt_out_capturing_by_default: !1,
                opt_out_persistence_by_default: !1,
                opt_out_useragent_filter: !1,
                opt_out_capturing_persistence_type: 'localStorage',
                opt_out_capturing_cookie_prefix: null,
                opt_in_site_apps: !1,
                property_denylist: [],
                respect_dnt: !1,
                sanitize_properties: null,
                request_headers: {},
                inapp_protocol: '//',
                inapp_link_new_window: !1,
                request_batching: !0,
                properties_string_max_length: 65535,
                session_recording: {},
                mask_all_element_attributes: !1,
                mask_all_text: !1,
                advanced_disable_decide: !1,
                advanced_disable_feature_flags: !1,
                advanced_disable_feature_flags_on_first_load: !1,
                advanced_disable_toolbar_metrics: !1,
                feature_flag_request_timeout_ms: 3e3,
                on_request_error: function (e) {
                    var t = 'Bad HTTP status: ' + e.statusCode + ' ' + e.text
                    vn.error(t)
                },
                get_device_id: function (e) {
                    return e
                },
                _onCapture: Td,
                capture_performance: void 0,
                name: 'posthog',
                bootstrap: {},
                disable_compression: !1,
                session_idle_timeout_seconds: 1800,
                person_profiles: 'always',
                __add_tracing_headers: !1,
            }
        },
        Fd = function (e) {
            var t = {}
            Ut(e.process_person) || (t.person_profiles = e.process_person),
                Ut(e.xhr_headers) || (t.request_headers = e.xhr_headers),
                Ut(e.cookie_name) || (t.persistence_name = e.cookie_name),
                Ut(e.disable_cookie) || (t.disable_persistence = e.disable_cookie)
            var n = bn({}, t, e)
            return (
                Ht(e.property_blacklist) &&
                    (Ut(e.property_denylist)
                        ? (n.property_denylist = e.property_blacklist)
                        : Ht(e.property_denylist)
                        ? (n.property_denylist = [].concat(f(e.property_blacklist), f(e.property_denylist)))
                        : vn.error('Invalid value for property_denylist config: ' + e.property_denylist)),
                n
            )
        },
        Od = (function () {
            function e() {
                a(this, e), l(this, '__forceAllowLocalhost', !1)
            }
            return (
                u(e, [
                    {
                        key: '_forceAllowLocalhost',
                        get: function () {
                            return this.__forceAllowLocalhost
                        },
                        set: function (e) {
                            vn.error(
                                'WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`'
                            ),
                                (this.__forceAllowLocalhost = e)
                        },
                    },
                ]),
                e
            )
        })(),
        Nd = (function () {
            function e() {
                var t = this
                a(this, e),
                    l(this, 'webPerformance', new Od()),
                    l(this, 'version', Xt.LIB_VERSION),
                    l(this, '_internalEventEmitter', new Yc()),
                    (this.config = Rd()),
                    (this.decideEndpointWasHit = !1),
                    (this.SentryIntegration = Zc),
                    (this.sentryIntegration = function (e) {
                        return (function (e, t) {
                            var n = Gc(e, t)
                            return {
                                name: jc,
                                processEvent: function (e) {
                                    return n(e)
                                },
                            }
                        })(t, e)
                    }),
                    (this.__request_queue = []),
                    (this.__loaded = !1),
                    (this.analyticsDefaultEndpoint = '/e/'),
                    (this._initialPageviewCaptured = !1),
                    (this.featureFlags = new cu(this)),
                    (this.toolbar = new Ql(this)),
                    (this.scrollManager = new dd(this)),
                    (this.pageViewManager = new Qc(this)),
                    (this.surveys = new nd(this)),
                    (this.experiments = new Id(this)),
                    (this.exceptions = new xd(this)),
                    (this.rateLimiter = new rd(this)),
                    (this.requestRouter = new Uc(this)),
                    (this.consent = new md(this)),
                    (this.people = {
                        set: function (e, n, r) {
                            var i = jt(e) ? l({}, e, n) : e
                            t.setPersonProperties(i), null == r || r({})
                        },
                        set_once: function (e, n, r) {
                            var i = jt(e) ? l({}, e, n) : e
                            t.setPersonProperties(void 0, i), null == r || r({})
                        },
                    }),
                    this.on('eventCaptured', function (e) {
                        return vn.info('send', e)
                    })
            }
            return (
                u(e, [
                    {
                        key: 'init',
                        value: function (t, n, r) {
                            if (r && r !== Ad) {
                                var i,
                                    o = null !== (i = Ed[r]) && void 0 !== i ? i : new e()
                                return o._init(t, n, r), (Ed[r] = o), (Ed[Ad][r] = o), o
                            }
                            return this._init(t, n, r)
                        },
                    },
                    {
                        key: '_init',
                        value: function (e) {
                            var n,
                                r,
                                i = this,
                                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                a = arguments.length > 2 ? arguments[2] : void 0
                            if (Ut(e) || Gt(e))
                                return (
                                    vn.critical(
                                        'PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()'
                                    ),
                                    this
                                )
                            if (this.__loaded)
                                return vn.warn('You have already initialized PostHog! Re-initializing is a no-op'), this
                            ;(this.__loaded = !0),
                                (this.config = {}),
                                (this._triggered_notifs = []),
                                this.set_config(bn({}, Rd(), Fd(o), { name: a, token: e })),
                                this.config.on_xhr_error &&
                                    vn.error('[posthog] on_xhr_error is deprecated. Use on_request_error instead'),
                                (this.compression = o.disable_compression ? void 0 : la.Base64),
                                (this.persistence = new Fl(this.config)),
                                (this.sessionPersistence =
                                    'sessionStorage' === this.config.persistence
                                        ? this.persistence
                                        : new Fl(t(t({}, this.config), {}, { persistence: 'sessionStorage' })))
                            var s = t({}, this.persistence.props),
                                u = t({}, this.sessionPersistence.props)
                            if (
                                ((this._requestQueue = new Kl(function (e) {
                                    return i._send_retriable_request(e)
                                })),
                                (this._retryQueue = new Hc(this)),
                                (this.__request_queue = []),
                                (this.sessionManager = new Wc(this.config, this.persistence)),
                                (this.sessionPropsManager = new od(this.sessionManager, this.persistence)),
                                new gd(this).startIfEnabledOrStop(),
                                (this.sessionRecording = new jl(this)),
                                this.sessionRecording.startIfEnabledOrStop(),
                                this.config.disable_scroll_properties ||
                                    this.scrollManager.startMeasuringScrollPosition(),
                                (this.autocapture = new vd(this)),
                                this.autocapture.startIfEnabled(),
                                this.surveys.loadIfEnabled(),
                                (this.heatmaps = new cd(this)),
                                this.heatmaps.startIfEnabled(),
                                (this.webVitalsAutocapture = new wd(this)),
                                (this.exceptionObserver = new yd(this)),
                                this.exceptionObserver.startIfEnabled(),
                                (Xt.DEBUG = Xt.DEBUG || this.config.debug),
                                Xt.DEBUG &&
                                    vn.info('Starting in debug mode', {
                                        this: this,
                                        config: o,
                                        thisC: t({}, this.config),
                                        p: s,
                                        s: u,
                                    }),
                                this._sync_opt_out_with_persistence(),
                                void 0 !== (null === (n = o.bootstrap) || void 0 === n ? void 0 : n.distinctID))
                            ) {
                                var l,
                                    c,
                                    d = this.config.get_device_id(mu()),
                                    f =
                                        null !== (l = o.bootstrap) && void 0 !== l && l.isIdentifiedID
                                            ? d
                                            : o.bootstrap.distinctID
                                this.persistence.set_property(
                                    Ys,
                                    null !== (c = o.bootstrap) && void 0 !== c && c.isIdentifiedID
                                        ? 'identified'
                                        : 'anonymous'
                                ),
                                    this.register({ distinct_id: o.bootstrap.distinctID, $device_id: f })
                            }
                            if (this._hasBootstrappedFeatureFlags()) {
                                var p,
                                    h,
                                    v = Object.keys(
                                        (null === (p = o.bootstrap) || void 0 === p ? void 0 : p.featureFlags) || {}
                                    )
                                        .filter(function (e) {
                                            var t, n
                                            return !(
                                                null === (t = o.bootstrap) ||
                                                void 0 === t ||
                                                null === (n = t.featureFlags) ||
                                                void 0 === n ||
                                                !n[e]
                                            )
                                        })
                                        .reduce(function (e, t) {
                                            var n, r
                                            return (
                                                (e[t] =
                                                    (null === (n = o.bootstrap) ||
                                                    void 0 === n ||
                                                    null === (r = n.featureFlags) ||
                                                    void 0 === r
                                                        ? void 0
                                                        : r[t]) || !1),
                                                e
                                            )
                                        }, {}),
                                    g = Object.keys(
                                        (null === (h = o.bootstrap) || void 0 === h ? void 0 : h.featureFlagPayloads) ||
                                            {}
                                    )
                                        .filter(function (e) {
                                            return v[e]
                                        })
                                        .reduce(function (e, t) {
                                            var n, r, i, a
                                            null !== (n = o.bootstrap) &&
                                                void 0 !== n &&
                                                null !== (r = n.featureFlagPayloads) &&
                                                void 0 !== r &&
                                                r[t] &&
                                                (e[t] =
                                                    null === (i = o.bootstrap) ||
                                                    void 0 === i ||
                                                    null === (a = i.featureFlagPayloads) ||
                                                    void 0 === a
                                                        ? void 0
                                                        : a[t])
                                            return e
                                        }, {})
                                this.featureFlags.receivedFeatureFlags({ featureFlags: v, featureFlagPayloads: g })
                            }
                            if (!this.get_distinct_id()) {
                                var m = this.config.get_device_id(mu())
                                this.register_once({ distinct_id: m, $device_id: m }, ''),
                                    this.persistence.set_property(Ys, 'anonymous')
                            }
                            return (
                                null == en ||
                                    null === (r = en.addEventListener) ||
                                    void 0 === r ||
                                    r.call(
                                        en,
                                        'onpagehide' in self ? 'pagehide' : 'unload',
                                        this._handle_unload.bind(this)
                                    ),
                                this.toolbar.maybeLoadToolbar(),
                                o.segment
                                    ? zc(this, function () {
                                          return i._loaded()
                                      })
                                    : this._loaded(),
                                $t(this.config._onCapture) &&
                                    this.on('eventCaptured', function (e) {
                                        return i.config._onCapture(e.event, e)
                                    }),
                                this
                            )
                        },
                    },
                    {
                        key: '_afterDecideResponse',
                        value: function (e) {
                            var t, n, r, i, o, a, s, u, l
                            ;(this.compression = void 0),
                                e.supportedCompression &&
                                    !this.config.disable_compression &&
                                    (this.compression = kn(e.supportedCompression, la.GZipJS)
                                        ? la.GZipJS
                                        : kn(e.supportedCompression, la.Base64)
                                        ? la.Base64
                                        : void 0),
                                null !== (t = e.analytics) &&
                                    void 0 !== t &&
                                    t.endpoint &&
                                    (this.analyticsDefaultEndpoint = e.analytics.endpoint),
                                null === (n = this.sessionRecording) || void 0 === n || n.afterDecideResponse(e),
                                null === (r = this.autocapture) || void 0 === r || r.afterDecideResponse(e),
                                null === (i = this.heatmaps) || void 0 === i || i.afterDecideResponse(e),
                                null === (o = this.experiments) || void 0 === o || o.afterDecideResponse(e),
                                null === (a = this.surveys) || void 0 === a || a.afterDecideResponse(e),
                                null === (s = this.webVitalsAutocapture) || void 0 === s || s.afterDecideResponse(e),
                                null === (u = this.exceptions) || void 0 === u || u.afterDecideResponse(e),
                                null === (l = this.exceptionObserver) || void 0 === l || l.afterDecideResponse(e)
                        },
                    },
                    {
                        key: '_loaded',
                        value: function () {
                            var e = this,
                                t = this.config.advanced_disable_decide
                            t || this.featureFlags.setReloadingPaused(!0)
                            try {
                                this.config.loaded(this)
                            } catch (e) {
                                vn.critical('`loaded` function failed', e)
                            }
                            this._start_queue_if_opted_in(),
                                this.config.capture_pageview &&
                                    setTimeout(function () {
                                        e.consent.isOptedIn() && e._captureInitialPageview()
                                    }, 1),
                                t || (new Gl(this).call(), this.featureFlags.resetRequestQueue())
                        },
                    },
                    {
                        key: '_start_queue_if_opted_in',
                        value: function () {
                            var e
                            this.has_opted_out_capturing() ||
                                (this.config.request_batching &&
                                    (null === (e = this._requestQueue) || void 0 === e || e.enable()))
                        },
                    },
                    {
                        key: '_dom_loaded',
                        value: function () {
                            var e = this
                            this.has_opted_out_capturing() ||
                                _n(this.__request_queue, function (t) {
                                    return e._send_retriable_request(t)
                                }),
                                (this.__request_queue = []),
                                this._start_queue_if_opted_in()
                        },
                    },
                    {
                        key: '_handle_unload',
                        value: function () {
                            var e, t
                            this.config.request_batching
                                ? (this._shouldCapturePageleave() && this.capture('$pageleave'),
                                  null === (e = this._requestQueue) || void 0 === e || e.unload(),
                                  null === (t = this._retryQueue) || void 0 === t || t.unload())
                                : this._shouldCapturePageleave() &&
                                  this.capture('$pageleave', null, { transport: 'sendBeacon' })
                        },
                    },
                    {
                        key: '_send_request',
                        value: function (e) {
                            var n = this
                            this.__loaded &&
                                (Md
                                    ? this.__request_queue.push(e)
                                    : this.rateLimiter.isServerRateLimited(e.batchKey) ||
                                      ((e.transport = e.transport || this.config.api_transport),
                                      (e.url = Nc(e.url, { ip: this.config.ip ? 1 : 0 })),
                                      (e.headers = t({}, this.config.request_headers)),
                                      (e.compression =
                                          'best-available' === e.compression ? this.compression : e.compression),
                                      (function (e) {
                                          var n,
                                              r,
                                              i,
                                              o = t({}, e)
                                          ;(o.timeout = o.timeout || 6e4),
                                              (o.url = Nc(o.url, {
                                                  _: new Date().getTime().toString(),
                                                  ver: Xt.LIB_VERSION,
                                                  compression: o.compression,
                                              }))
                                          var a = null !== (n = o.transport) && void 0 !== n ? n : 'XHR',
                                              s =
                                                  null !==
                                                      (r =
                                                          null ===
                                                              (i = Rn(Dc, function (e) {
                                                                  return e.transport === a
                                                              })) || void 0 === i
                                                              ? void 0
                                                              : i.method) && void 0 !== r
                                                      ? r
                                                      : Dc[0].method
                                          if (!s) throw new Error('No available transport method')
                                          s(o)
                                      })(
                                          t(
                                              t({}, e),
                                              {},
                                              {
                                                  callback: function (t) {
                                                      var r, i, o
                                                      ;(n.rateLimiter.checkForLimiting(t), t.statusCode >= 400) &&
                                                          (null === (i = (o = n.config).on_request_error) ||
                                                              void 0 === i ||
                                                              i.call(o, t))
                                                      null === (r = e.callback) || void 0 === r || r.call(e, t)
                                                  },
                                              }
                                          )
                                      )))
                        },
                    },
                    {
                        key: '_send_retriable_request',
                        value: function (e) {
                            this._retryQueue ? this._retryQueue.retriableRequest(e) : this._send_request(e)
                        },
                    },
                    {
                        key: '_execute_array',
                        value: function (e) {
                            var t,
                                n = this,
                                r = [],
                                i = [],
                                o = []
                            _n(e, function (e) {
                                e &&
                                    ((t = e[0]),
                                    Ht(t)
                                        ? o.push(e)
                                        : $t(e)
                                        ? e.call(n)
                                        : Ht(e) && 'alias' === t
                                        ? r.push(e)
                                        : Ht(e) && -1 !== t.indexOf('capture') && $t(n[t])
                                        ? o.push(e)
                                        : i.push(e))
                            })
                            var a = function (e, t) {
                                _n(
                                    e,
                                    function (e) {
                                        if (Ht(e[0])) {
                                            var n = t
                                            yn(e, function (e) {
                                                n = n[e[0]].apply(n, e.slice(1))
                                            })
                                        } else this[e[0]].apply(this, e.slice(1))
                                    },
                                    t
                                )
                            }
                            a(r, this), a(i, this), a(o, this)
                        },
                    },
                    {
                        key: '_hasBootstrappedFeatureFlags',
                        value: function () {
                            var e, t
                            return (
                                ((null === (e = this.config.bootstrap) || void 0 === e ? void 0 : e.featureFlags) &&
                                    Object.keys(
                                        null === (t = this.config.bootstrap) || void 0 === t ? void 0 : t.featureFlags
                                    ).length > 0) ||
                                !1
                            )
                        },
                    },
                    {
                        key: 'push',
                        value: function (e) {
                            this._execute_array([e])
                        },
                    },
                    {
                        key: 'capture',
                        value: function (e, n, r) {
                            var i
                            if (this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue) {
                                if (!this.consent.isOptedOut())
                                    if (!Ut(e) && jt(e)) {
                                        if (this.config.opt_out_useragent_filter || !this._is_bot()) {
                                            var o =
                                                null != r && r.skip_client_rate_limiting
                                                    ? void 0
                                                    : this.rateLimiter.clientRateLimitContext()
                                            if (null == o || !o.isRateLimited) {
                                                this.sessionPersistence.update_search_keyword(),
                                                    this.config.store_google &&
                                                        this.sessionPersistence.update_campaign_params(),
                                                    this.config.save_referrer &&
                                                        this.sessionPersistence.update_referrer_info(),
                                                    (this.config.store_google || this.config.save_referrer) &&
                                                        this.persistence.set_initial_person_info()
                                                var a = new Date(),
                                                    s = (null == r ? void 0 : r.timestamp) || a,
                                                    u = {
                                                        uuid: mu(),
                                                        event: e,
                                                        properties: this._calculate_event_properties(e, n || {}, s),
                                                    }
                                                o &&
                                                    (u.properties.$lib_rate_limit_remaining_tokens = o.remainingTokens),
                                                    (null == r ? void 0 : r.$set) &&
                                                        (u.$set = null == r ? void 0 : r.$set)
                                                var l = this._calculate_set_once_properties(
                                                    null == r ? void 0 : r.$set_once
                                                )
                                                l && (u.$set_once = l),
                                                    ((u = Tn(
                                                        u,
                                                        null != r && r._noTruncate
                                                            ? null
                                                            : this.config.properties_string_max_length
                                                    )).timestamp = s),
                                                    Ut(null == r ? void 0 : r.timestamp) ||
                                                        ((u.properties.$event_time_override_provided = !0),
                                                        (u.properties.$event_time_override_system_time = a))
                                                var c = t(t({}, u.properties.$set), u.$set)
                                                Vt(c) || this.setPersonPropertiesForFlags(c),
                                                    this._internalEventEmitter.emit('eventCaptured', u)
                                                var d = {
                                                    method: 'POST',
                                                    url:
                                                        null !== (i = null == r ? void 0 : r._url) && void 0 !== i
                                                            ? i
                                                            : this.requestRouter.endpointFor(
                                                                  'api',
                                                                  this.analyticsDefaultEndpoint
                                                              ),
                                                    data: u,
                                                    compression: la.Base64,
                                                    batchKey: null == r ? void 0 : r._batchKey,
                                                }
                                                return (
                                                    !this.config.request_batching ||
                                                    (r && (null == r || !r._batchKey)) ||
                                                    (null != r && r.send_instantly)
                                                        ? this._send_retriable_request(d)
                                                        : this._requestQueue.enqueue(d),
                                                    u
                                                )
                                            }
                                            vn.critical('This capture call is ignored due to client rate limiting.')
                                        }
                                    } else vn.error('No event name provided to posthog.capture')
                            } else vn.uninitializedWarning('posthog.capture')
                        },
                    },
                    {
                        key: '_addCaptureHook',
                        value: function (e) {
                            return this.on('eventCaptured', function (t) {
                                return e(t.event, t)
                            })
                        },
                    },
                    {
                        key: '_calculate_event_properties',
                        value: function (e, n, r) {
                            if (((r = r || new Date()), !this.persistence || !this.sessionPersistence)) return n
                            var i = this.persistence.remove_event_timer(e),
                                o = t({}, n)
                            if (((o.token = this.config.token), '$snapshot' === e)) {
                                var a = t(t({}, this.persistence.properties()), this.sessionPersistence.properties())
                                return (
                                    (o.distinct_id = a.distinct_id),
                                    ((!jt(o.distinct_id) && !Qt(o.distinct_id)) || Gt(o.distinct_id)) &&
                                        vn.error(
                                            'Invalid distinct_id for replay event. This indicates a bug in your implementation'
                                        ),
                                    o
                                )
                            }
                            var s = Ml.properties()
                            if (this.sessionManager) {
                                var u = this.sessionManager.checkAndGetSessionAndWindowId(),
                                    l = u.sessionId,
                                    c = u.windowId
                                ;(o.$session_id = l), (o.$window_id = c)
                            }
                            if (
                                (this.requestRouter.region === Bc.CUSTOM &&
                                    (o.$lib_custom_api_host = this.config.api_host),
                                this.sessionPropsManager &&
                                    this.config.__preview_send_client_session_params &&
                                    ('$pageview' === e || '$pageleave' === e || '$autocapture' === e))
                            ) {
                                var d = this.sessionPropsManager.getSessionProps()
                                o = bn(o, d)
                            }
                            if (!this.config.disable_scroll_properties) {
                                var f = {}
                                '$pageview' === e
                                    ? (f = this.pageViewManager.doPageView(r))
                                    : '$pageleave' === e && (f = this.pageViewManager.doPageLeave(r)),
                                    (o = bn(o, f))
                            }
                            if (('$pageview' === e && sn && (o.title = sn.title), !Ut(i))) {
                                var p = r.getTime() - i
                                o.$duration = parseFloat((p / 1e3).toFixed(3))
                            }
                            fn &&
                                this.config.opt_out_useragent_filter &&
                                (o.$browser_type = this._is_bot() ? 'bot' : 'browser'),
                                ((o = bn(
                                    {},
                                    s,
                                    this.persistence.properties(),
                                    this.sessionPersistence.properties(),
                                    o
                                )).$is_identified = this._isIdentified()),
                                Ht(this.config.property_denylist)
                                    ? yn(this.config.property_denylist, function (e) {
                                          delete o[e]
                                      })
                                    : vn.error(
                                          'Invalid value for property_denylist config: ' +
                                              this.config.property_denylist +
                                              ' or property_blacklist config: ' +
                                              this.config.property_blacklist
                                      )
                            var h = this.config.sanitize_properties
                            return h && (o = h(o, e)), (o.$process_person_profile = this._hasPersonProcessing()), o
                        },
                    },
                    {
                        key: '_calculate_set_once_properties',
                        value: function (e) {
                            if (!this.persistence || !this._hasPersonProcessing()) return e
                            var t = bn({}, this.persistence.get_initial_props(), e || {})
                            return Vt(t) ? void 0 : t
                        },
                    },
                    {
                        key: 'register',
                        value: function (e, t) {
                            var n
                            null === (n = this.persistence) || void 0 === n || n.register(e, t)
                        },
                    },
                    {
                        key: 'register_once',
                        value: function (e, t, n) {
                            var r
                            null === (r = this.persistence) || void 0 === r || r.register_once(e, t, n)
                        },
                    },
                    {
                        key: 'register_for_session',
                        value: function (e) {
                            var t
                            null === (t = this.sessionPersistence) || void 0 === t || t.register(e)
                        },
                    },
                    {
                        key: 'unregister',
                        value: function (e) {
                            var t
                            null === (t = this.persistence) || void 0 === t || t.unregister(e)
                        },
                    },
                    {
                        key: 'unregister_for_session',
                        value: function (e) {
                            var t
                            null === (t = this.sessionPersistence) || void 0 === t || t.unregister(e)
                        },
                    },
                    {
                        key: '_register_single',
                        value: function (e, t) {
                            this.register(l({}, e, t))
                        },
                    },
                    {
                        key: 'getFeatureFlag',
                        value: function (e, t) {
                            return this.featureFlags.getFeatureFlag(e, t)
                        },
                    },
                    {
                        key: 'getFeatureFlagPayload',
                        value: function (e) {
                            var t = this.featureFlags.getFeatureFlagPayload(e)
                            try {
                                return JSON.parse(t)
                            } catch (e) {
                                return t
                            }
                        },
                    },
                    {
                        key: 'isFeatureEnabled',
                        value: function (e, t) {
                            return this.featureFlags.isFeatureEnabled(e, t)
                        },
                    },
                    {
                        key: 'reloadFeatureFlags',
                        value: function () {
                            this.featureFlags.reloadFeatureFlags()
                        },
                    },
                    {
                        key: 'updateEarlyAccessFeatureEnrollment',
                        value: function (e, t) {
                            this.featureFlags.updateEarlyAccessFeatureEnrollment(e, t)
                        },
                    },
                    {
                        key: 'getEarlyAccessFeatures',
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                            return this.featureFlags.getEarlyAccessFeatures(e, t)
                        },
                    },
                    {
                        key: 'on',
                        value: function (e, t) {
                            return this._internalEventEmitter.on(e, t)
                        },
                    },
                    {
                        key: 'onFeatureFlags',
                        value: function (e) {
                            return this.featureFlags.onFeatureFlags(e)
                        },
                    },
                    {
                        key: 'onSessionId',
                        value: function (e) {
                            var t, n
                            return null !==
                                (t = null === (n = this.sessionManager) || void 0 === n ? void 0 : n.onSessionId(e)) &&
                                void 0 !== t
                                ? t
                                : function () {}
                        },
                    },
                    {
                        key: 'getSurveys',
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                            this.surveys.getSurveys(e, t)
                        },
                    },
                    {
                        key: 'getActiveMatchingSurveys',
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                            this.surveys.getActiveMatchingSurveys(e, t)
                        },
                    },
                    {
                        key: 'renderSurvey',
                        value: function (e, t) {
                            this.surveys.renderSurvey(e, t)
                        },
                    },
                    {
                        key: 'canRenderSurvey',
                        value: function (e) {
                            this.surveys.canRenderSurvey(e)
                        },
                    },
                    {
                        key: 'getNextSurveyStep',
                        value: function (e, t, n) {
                            return this.surveys.getNextSurveyStep(e, t, n)
                        },
                    },
                    {
                        key: 'identify',
                        value: function (e, t, n) {
                            if (!this.__loaded || !this.persistence) return vn.uninitializedWarning('posthog.identify')
                            if (
                                (Qt(e) &&
                                    ((e = e.toString()),
                                    vn.warn(
                                        'The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.'
                                    )),
                                e)
                            ) {
                                if (['distinct_id', 'distinctid'].includes(e.toLowerCase()))
                                    vn.critical(
                                        'The string "'.concat(
                                            e,
                                            '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'
                                        )
                                    )
                                else if (this._requirePersonProcessing('posthog.identify')) {
                                    var r = this.get_distinct_id()
                                    if ((this.register({ $user_id: e }), !this.get_property('$device_id'))) {
                                        var i = r
                                        this.register_once({ $had_persisted_distinct_id: !0, $device_id: i }, '')
                                    }
                                    e !== r &&
                                        e !== this.get_property(Ts) &&
                                        (this.unregister(Ts), this.register({ distinct_id: e }))
                                    var o = 'anonymous' === (this.persistence.get_property(Ys) || 'anonymous')
                                    e !== r && o
                                        ? (this.persistence.set_property(Ys, 'identified'),
                                          this.setPersonPropertiesForFlags(t || {}, !1),
                                          this.capture(
                                              '$identify',
                                              { distinct_id: e, $anon_distinct_id: r },
                                              { $set: t || {}, $set_once: n || {} }
                                          ),
                                          this.featureFlags.setAnonymousDistinctId(r))
                                        : (t || n) && this.setPersonProperties(t, n)
                                    var a = this.config.advanced_disable_decide
                                    e === r || a || (this.reloadFeatureFlags(), this.unregister(Ks))
                                }
                            } else vn.error('Unique user id has not been set in posthog.identify')
                        },
                    },
                    {
                        key: 'setPersonProperties',
                        value: function (e, t) {
                            ;(e || t) &&
                                this._requirePersonProcessing('posthog.setPersonProperties') &&
                                (this.setPersonPropertiesForFlags(e || {}),
                                this.capture('$set', { $set: e || {}, $set_once: t || {} }))
                        },
                    },
                    {
                        key: 'group',
                        value: function (e, n, r) {
                            if (e && n) {
                                if (this._requirePersonProcessing('posthog.group')) {
                                    var i = this.getGroups()
                                    i[e] !== n && this.resetGroupPropertiesForFlags(e),
                                        this.register({ $groups: t(t({}, i), {}, l({}, e, n)) }),
                                        r &&
                                            (this.capture('$groupidentify', {
                                                $group_type: e,
                                                $group_key: n,
                                                $group_set: r,
                                            }),
                                            this.setGroupPropertiesForFlags(l({}, e, r))),
                                        i[e] === n || r || this.reloadFeatureFlags()
                                }
                            } else vn.error('posthog.group requires a group type and group key')
                        },
                    },
                    {
                        key: 'resetGroups',
                        value: function () {
                            this.register({ $groups: {} }),
                                this.resetGroupPropertiesForFlags(),
                                this.reloadFeatureFlags()
                        },
                    },
                    {
                        key: 'setPersonPropertiesForFlags',
                        value: function (e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                            this._requirePersonProcessing('posthog.setPersonPropertiesForFlags') &&
                                this.featureFlags.setPersonPropertiesForFlags(e, t)
                        },
                    },
                    {
                        key: 'resetPersonPropertiesForFlags',
                        value: function () {
                            this.featureFlags.resetPersonPropertiesForFlags()
                        },
                    },
                    {
                        key: 'setGroupPropertiesForFlags',
                        value: function (e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                            this._requirePersonProcessing('posthog.setGroupPropertiesForFlags') &&
                                this.featureFlags.setGroupPropertiesForFlags(e, t)
                        },
                    },
                    {
                        key: 'resetGroupPropertiesForFlags',
                        value: function (e) {
                            this.featureFlags.resetGroupPropertiesForFlags(e)
                        },
                    },
                    {
                        key: 'reset',
                        value: function (e) {
                            var t, n, r, i
                            if ((vn.info('reset'), !this.__loaded)) return vn.uninitializedWarning('posthog.reset')
                            var o = this.get_property('$device_id')
                            this.consent.reset(),
                                null === (t = this.persistence) || void 0 === t || t.clear(),
                                null === (n = this.sessionPersistence) || void 0 === n || n.clear(),
                                null === (r = this.persistence) || void 0 === r || r.set_property(Ys, 'anonymous'),
                                null === (i = this.sessionManager) || void 0 === i || i.resetSessionId()
                            var a = this.config.get_device_id(mu())
                            this.register_once({ distinct_id: a, $device_id: e ? a : o }, '')
                        },
                    },
                    {
                        key: 'get_distinct_id',
                        value: function () {
                            return this.get_property('distinct_id')
                        },
                    },
                    {
                        key: 'getGroups',
                        value: function () {
                            return this.get_property('$groups') || {}
                        },
                    },
                    {
                        key: 'get_session_id',
                        value: function () {
                            var e, t
                            return null !==
                                (e =
                                    null === (t = this.sessionManager) || void 0 === t
                                        ? void 0
                                        : t.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== e
                                ? e
                                : ''
                        },
                    },
                    {
                        key: 'get_session_replay_url',
                        value: function (e) {
                            if (!this.sessionManager) return ''
                            var t = this.sessionManager.checkAndGetSessionAndWindowId(!0),
                                n = t.sessionId,
                                r = t.sessionStartTimestamp,
                                i = this.requestRouter.endpointFor(
                                    'ui',
                                    '/project/'.concat(this.config.token, '/replay/').concat(n)
                                )
                            if (null != e && e.withTimestamp && r) {
                                var o,
                                    a = null !== (o = e.timestampLookBack) && void 0 !== o ? o : 10
                                if (!r) return i
                                var s = Math.max(Math.floor((new Date().getTime() - r) / 1e3) - a, 0)
                                i += '?t='.concat(s)
                            }
                            return i
                        },
                    },
                    {
                        key: 'alias',
                        value: function (e, t) {
                            return e === this.get_property(Es)
                                ? (vn.critical('Attempting to create alias for existing People user - aborting.'), -2)
                                : this._requirePersonProcessing('posthog.alias')
                                ? (Ut(t) && (t = this.get_distinct_id()),
                                  e !== t
                                      ? (this._register_single(Ts, e),
                                        this.capture('$create_alias', { alias: e, distinct_id: t }))
                                      : (vn.warn('alias matches current distinct_id - skipping api call.'),
                                        this.identify(e),
                                        -1))
                                : void 0
                        },
                    },
                    {
                        key: 'set_config',
                        value: function (e) {
                            var n,
                                r,
                                i,
                                o,
                                a = t({}, this.config)
                            Wt(e) &&
                                (bn(this.config, Fd(e)),
                                null === (n = this.persistence) || void 0 === n || n.update_config(this.config, a),
                                (this.sessionPersistence =
                                    'sessionStorage' === this.config.persistence
                                        ? this.persistence
                                        : new Fl(t(t({}, this.config), {}, { persistence: 'sessionStorage' }))),
                                xu.is_supported() && 'true' === xu.get('ph_debug') && (this.config.debug = !0),
                                this.config.debug &&
                                    ((Xt.DEBUG = !0),
                                    vn.info('set_config', { config: e, oldConfig: a, newConfig: t({}, this.config) })),
                                null === (r = this.sessionRecording) || void 0 === r || r.startIfEnabledOrStop(),
                                null === (i = this.autocapture) || void 0 === i || i.startIfEnabled(),
                                null === (o = this.heatmaps) || void 0 === o || o.startIfEnabled(),
                                this.surveys.loadIfEnabled(),
                                this._sync_opt_out_with_persistence())
                        },
                    },
                    {
                        key: 'startSessionRecording',
                        value: function (e) {
                            var t,
                                n = Kt(e) && e
                            if (n || (null != e && e.sampling)) {
                                var r,
                                    i,
                                    o =
                                        null === (r = this.sessionManager) || void 0 === r
                                            ? void 0
                                            : r.checkAndGetSessionAndWindowId()
                                null === (i = this.persistence) || void 0 === i || i.register(l({}, Vs, !0)),
                                    vn.info(
                                        'Session recording started with sampling override for session: ',
                                        null == o ? void 0 : o.sessionId
                                    )
                            }
                            ;(n || (null != e && e.linked_flag)) &&
                                (null === (t = this.sessionRecording) || void 0 === t || t.overrideLinkedFlag(),
                                vn.info('Session recording started with linked_flags override'))
                            this.set_config({ disable_session_recording: !1 })
                        },
                    },
                    {
                        key: 'stopSessionRecording',
                        value: function () {
                            this.set_config({ disable_session_recording: !0 })
                        },
                    },
                    {
                        key: 'sessionRecordingStarted',
                        value: function () {
                            var e
                            return !(null === (e = this.sessionRecording) || void 0 === e || !e.started)
                        },
                    },
                    {
                        key: 'captureException',
                        value: function (e, n) {
                            var r = $t(pn.parseErrorAsProperties)
                                ? pn.parseErrorAsProperties([e.message, void 0, void 0, void 0, e])
                                : t(
                                      {
                                          $exception_type: e.name,
                                          $exception_message: e.message,
                                          $exception_level: 'error',
                                      },
                                      n
                                  )
                            this.exceptions.sendExceptionEvent(r)
                        },
                    },
                    {
                        key: 'loadToolbar',
                        value: function (e) {
                            return this.toolbar.loadToolbar(e)
                        },
                    },
                    {
                        key: 'get_property',
                        value: function (e) {
                            var t
                            return null === (t = this.persistence) || void 0 === t ? void 0 : t.props[e]
                        },
                    },
                    {
                        key: 'get_properties',
                        value: function () {
                            var e
                            return null === (e = this.persistence) || void 0 === e ? void 0 : e.props
                        },
                    },
                    {
                        key: 'getSessionProperty',
                        value: function (e) {
                            var t
                            return null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.props[e]
                        },
                    },
                    {
                        key: 'toString',
                        value: function () {
                            var e,
                                t = null !== (e = this.config.name) && void 0 !== e ? e : Ad
                            return t !== Ad && (t = Ad + '.' + t), t
                        },
                    },
                    {
                        key: '_isIdentified',
                        value: function () {
                            var e, t
                            return (
                                'identified' ===
                                    (null === (e = this.persistence) || void 0 === e ? void 0 : e.get_property(Ys)) ||
                                'identified' ===
                                    (null === (t = this.sessionPersistence) || void 0 === t
                                        ? void 0
                                        : t.get_property(Ys))
                            )
                        },
                    },
                    {
                        key: '_hasPersonProcessing',
                        value: function () {
                            var e, t, n, r
                            return !(
                                'never' === this.config.person_profiles ||
                                ('identified_only' === this.config.person_profiles &&
                                    !this._isIdentified() &&
                                    Vt(this.getGroups()) &&
                                    (null === (e = this.persistence) ||
                                        void 0 === e ||
                                        null === (t = e.props) ||
                                        void 0 === t ||
                                        !t[Ts]) &&
                                    (null === (n = this.persistence) ||
                                        void 0 === n ||
                                        null === (r = n.props) ||
                                        void 0 === r ||
                                        !r[ru]))
                            )
                        },
                    },
                    {
                        key: '_shouldCapturePageleave',
                        value: function () {
                            return (
                                !0 === this.config.capture_pageleave ||
                                ('if_capture_pageview' === this.config.capture_pageleave &&
                                    this.config.capture_pageview)
                            )
                        },
                    },
                    {
                        key: 'createPersonProfile',
                        value: function () {
                            this._hasPersonProcessing() ||
                                (this._requirePersonProcessing('posthog.createPersonProfile') &&
                                    this.setPersonProperties({}, {}))
                        },
                    },
                    {
                        key: '_requirePersonProcessing',
                        value: function (e) {
                            return 'never' === this.config.person_profiles
                                ? (vn.error(
                                      e +
                                          ' was called, but process_person is set to "never". This call will be ignored.'
                                  ),
                                  !1)
                                : (this._register_single(ru, !0), !0)
                        },
                    },
                    {
                        key: '_sync_opt_out_with_persistence',
                        value: function () {
                            var e,
                                t,
                                n,
                                r,
                                i = this.consent.isOptedOut(),
                                o = this.config.opt_out_persistence_by_default,
                                a = this.config.disable_persistence || (i && !!o)
                            ;(null === (e = this.persistence) || void 0 === e ? void 0 : e.disabled) !== a &&
                                (null === (n = this.persistence) || void 0 === n || n.set_disabled(a))
                            ;(null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.disabled) !== a &&
                                (null === (r = this.sessionPersistence) || void 0 === r || r.set_disabled(a))
                        },
                    },
                    {
                        key: 'opt_in_capturing',
                        value: function (e) {
                            var t
                            ;(this.consent.optInOut(!0),
                            this._sync_opt_out_with_persistence(),
                            Ut(null == e ? void 0 : e.captureEventName) || (null != e && e.captureEventName)) &&
                                this.capture(
                                    null !== (t = null == e ? void 0 : e.captureEventName) && void 0 !== t
                                        ? t
                                        : '$opt_in',
                                    null == e ? void 0 : e.captureProperties,
                                    { send_instantly: !0 }
                                )
                            this.config.capture_pageview && this._captureInitialPageview()
                        },
                    },
                    {
                        key: 'opt_out_capturing',
                        value: function () {
                            this.consent.optInOut(!1), this._sync_opt_out_with_persistence()
                        },
                    },
                    {
                        key: 'has_opted_in_capturing',
                        value: function () {
                            return this.consent.isOptedIn()
                        },
                    },
                    {
                        key: 'has_opted_out_capturing',
                        value: function () {
                            return this.consent.isOptedOut()
                        },
                    },
                    {
                        key: 'clear_opt_in_out_capturing',
                        value: function () {
                            this.consent.reset(), this._sync_opt_out_with_persistence()
                        },
                    },
                    {
                        key: '_is_bot',
                        value: function () {
                            return an
                                ? (function (e, t) {
                                      if (!e) return !1
                                      var n = e.userAgent
                                      if (n && sd(n, t)) return !0
                                      try {
                                          var r = null == e ? void 0 : e.userAgentData
                                          if (
                                              null != r &&
                                              r.brands &&
                                              r.brands.some(function (e) {
                                                  return sd(null == e ? void 0 : e.brand, t)
                                              })
                                          )
                                              return !0
                                      } catch (e) {}
                                      return !!e.webdriver
                                  })(an, this.config.custom_blocked_useragents)
                                : void 0
                        },
                    },
                    {
                        key: '_captureInitialPageview',
                        value: function () {
                            sn &&
                                !this._initialPageviewCaptured &&
                                ((this._initialPageviewCaptured = !0),
                                this.capture('$pageview', { title: sn.title }, { send_instantly: !0 }))
                        },
                    },
                    {
                        key: 'debug',
                        value: function (e) {
                            !1 === e
                                ? (null == en || en.console.log("You've disabled debug mode."),
                                  localStorage && localStorage.removeItem('ph_debug'),
                                  this.set_config({ debug: !1 }))
                                : (null == en ||
                                      en.console.log(
                                          "You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."
                                      ),
                                  localStorage && localStorage.setItem('ph_debug', 'true'),
                                  this.set_config({ debug: !0 }))
                        },
                    },
                ]),
                e
            )
        })()
    !(function (e, t) {
        for (var n = 0; n < t.length; n++) e.prototype[t[n]] = Sn(e.prototype[t[n]])
    })(Nd, ['identify'])
    var Ld, Pd
    ;(Ld = Ed[Ad] = new Nd()),
        (Pd = pn.posthog) &&
            yn(Pd._i, function (e) {
                if (e && Ht(e)) {
                    var t = Ld.init(e[0], e[1], e[2]),
                        n = Pd[e[2]] || Pd
                    t && (t._execute_array.call(t.people, n.people), t._execute_array(n))
                }
            }),
        (pn.posthog = Ld),
        (function () {
            function e() {
                e.done ||
                    ((e.done = !0),
                    (Md = !1),
                    yn(Ed, function (e) {
                        e._dom_loaded()
                    }))
            }
            null != sn &&
                sn.addEventListener &&
                ('complete' === sn.readyState ? e() : sn.addEventListener('DOMContentLoaded', e, !1)),
                en && Mn(en, 'load', e, !0)
        })()
})()
//# sourceMappingURL=array.full.js.map
