!(function () {
    'use strict'
    var e,
        t,
        n,
        r = -1,
        i = function (e) {
            addEventListener(
                'pageshow',
                function (t) {
                    t.persisted && ((r = t.timeStamp), e(t))
                },
                !0
            )
        },
        a = function () {
            var e = self.performance && performance.getEntriesByType && performance.getEntriesByType('navigation')[0]
            if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
        },
        o = function () {
            var e = a()
            return (e && e.activationStart) || 0
        },
        c = function (e, t) {
            var n = a(),
                i = 'navigate'
            return (
                r >= 0
                    ? (i = 'back-forward-cache')
                    : n &&
                      (document.prerendering || o() > 0
                          ? (i = 'prerender')
                          : document.wasDiscarded
                          ? (i = 'restore')
                          : n.type && (i = n.type.replace(/_/g, '-'))),
                {
                    name: e,
                    value: void 0 === t ? -1 : t,
                    rating: 'good',
                    delta: 0,
                    entries: [],
                    id: 'v4-'.concat(Date.now(), '-').concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                    navigationType: i,
                }
            )
        },
        s = function (e, t, n) {
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
        u = function (e, t, n, r) {
            var i, a
            return function (o) {
                t.value >= 0 &&
                    (o || r) &&
                    ((a = t.value - (i || 0)) || void 0 === i) &&
                    ((i = t.value),
                    (t.delta = a),
                    (t.rating = (function (e, t) {
                        return e > t[1] ? 'poor' : e > t[0] ? 'needs-improvement' : 'good'
                    })(t.value, n)),
                    e(t))
            }
        },
        d = function (e) {
            requestAnimationFrame(function () {
                return requestAnimationFrame(function () {
                    return e()
                })
            })
        },
        f = function (e) {
            document.addEventListener('visibilitychange', function () {
                'hidden' === document.visibilityState && e()
            })
        },
        l = function (e) {
            var t = !1
            return function () {
                t || (e(), (t = !0))
            }
        },
        p = -1,
        m = function () {
            return 'hidden' !== document.visibilityState || document.prerendering ? 1 / 0 : 0
        },
        v = function (e) {
            'hidden' === document.visibilityState &&
                p > -1 &&
                ((p = 'visibilitychange' === e.type ? e.timeStamp : 0), h())
        },
        g = function () {
            addEventListener('visibilitychange', v, !0), addEventListener('prerenderingchange', v, !0)
        },
        h = function () {
            removeEventListener('visibilitychange', v, !0), removeEventListener('prerenderingchange', v, !0)
        },
        y = function () {
            return (
                p < 0 &&
                    ((p = m()),
                    g(),
                    i(function () {
                        setTimeout(function () {
                            ;(p = m()), g()
                        }, 0)
                    })),
                {
                    get firstHiddenTime() {
                        return p
                    },
                }
            )
        },
        T = function (e) {
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
        E = [1800, 3e3],
        b = function (e, t) {
            ;(t = t || {}),
                T(function () {
                    var n,
                        r = y(),
                        a = c('FCP'),
                        f = s('paint', function (e) {
                            e.forEach(function (e) {
                                'first-contentful-paint' === e.name &&
                                    (f.disconnect(),
                                    e.startTime < r.firstHiddenTime &&
                                        ((a.value = Math.max(e.startTime - o(), 0)), a.entries.push(e), n(!0)))
                            })
                        })
                    f &&
                        ((n = u(e, a, E, t.reportAllChanges)),
                        i(function (r) {
                            ;(a = c('FCP')),
                                (n = u(e, a, E, t.reportAllChanges)),
                                d(function () {
                                    ;(a.value = performance.now() - r.timeStamp), n(!0)
                                })
                        }))
                })
        },
        S = [0.1, 0.25],
        C = [2500, 4e3],
        L = {},
        w = function () {
            var e = self.performance && performance.getEntriesByType && performance.getEntriesByType('navigation')[0]
            if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
        },
        M = function (e) {
            if ('loading' === document.readyState) return 'loading'
            var t = w()
            if (t) {
                if (e < t.domInteractive) return 'loading'
                if (0 === t.domContentLoadedEventStart || e < t.domContentLoadedEventStart) return 'dom-interactive'
                if (0 === t.domComplete || e < t.domComplete) return 'dom-content-loaded'
            }
            return 'complete'
        },
        P = function (e) {
            var t = e.nodeName
            return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, '')
        },
        I = function (e, t) {
            var n = ''
            try {
                for (; e && 9 !== e.nodeType; ) {
                    var r = e,
                        i = r.id
                            ? '#' + r.id
                            : P(r) +
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
        k = -1,
        A = function (e, t) {
            var n = w(),
                r = 'navigate'
            return (
                k >= 0
                    ? (r = 'back-forward-cache')
                    : n &&
                      (document.prerendering ||
                      (function () {
                          var e = w()
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
        _ = function (e, t, n) {
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
        x = function (e, t, n, r) {
            var i, a
            return function (o) {
                t.value >= 0 &&
                    (o || r) &&
                    ((a = t.value - (i || 0)) || void 0 === i) &&
                    ((i = t.value),
                    (t.delta = a),
                    (t.rating = (function (e, t) {
                        return e > t[1] ? 'poor' : e > t[0] ? 'needs-improvement' : 'good'
                    })(t.value, n)),
                    e(t))
            }
        },
        H = function (e) {
            document.addEventListener('visibilitychange', function () {
                'hidden' === document.visibilityState && e()
            })
        },
        q = 0,
        D = 1 / 0,
        O = 0,
        R = function (e) {
            e.forEach(function (e) {
                e.interactionId &&
                    ((D = Math.min(D, e.interactionId)),
                    (O = Math.max(O, e.interactionId)),
                    (q = O ? (O - D) / 7 + 1 : 0))
            })
        },
        F = function () {
            'interactionCount' in performance ||
                e ||
                (e = _('event', R, { type: 'event', buffered: !0, durationThreshold: 0 }))
        },
        N = [],
        B = new Map(),
        W = 0,
        j = function () {
            return (e ? q : performance.interactionCount || 0) - W
        },
        X = [],
        V = function (e) {
            if (
                (X.forEach(function (t) {
                    return t(e)
                }),
                e.interactionId || 'first-input' === e.entryType)
            ) {
                var t = N[N.length - 1],
                    n = B.get(e.interactionId)
                if (n || N.length < 10 || e.duration > t.latency) {
                    if (n)
                        e.duration > n.latency
                            ? ((n.entries = [e]), (n.latency = e.duration))
                            : e.duration === n.latency && e.startTime === n.entries[0].startTime && n.entries.push(e)
                    else {
                        var r = { id: e.interactionId, latency: e.duration, entries: [e] }
                        B.set(r.id, r), N.push(r)
                    }
                    N.sort(function (e, t) {
                        return t.latency - e.latency
                    }),
                        N.length > 10 &&
                            N.splice(10).forEach(function (e) {
                                return B.delete(e.id)
                            })
                }
            }
        },
        z = function (e) {
            var t = self.requestIdleCallback || self.setTimeout,
                n = -1
            return (
                (e = (function (e) {
                    var t = !1
                    return function () {
                        t || (e(), (t = !0))
                    }
                })(e)),
                'hidden' === document.visibilityState ? e() : ((n = t(e)), H(e)),
                n
            )
        },
        U = [200, 500],
        G = function (e, t) {
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
                    F()
                    var r,
                        i = A('INP'),
                        a = function (e) {
                            z(function () {
                                e.forEach(V)
                                var t,
                                    n = ((t = Math.min(N.length - 1, Math.floor(j() / 50))), N[t])
                                n && n.latency !== i.value && ((i.value = n.latency), (i.entries = n.entries), r())
                            })
                        },
                        o = _('event', a, {
                            durationThreshold: null !== (n = t.durationThreshold) && void 0 !== n ? n : 40,
                        })
                    ;(r = x(e, i, U, t.reportAllChanges)),
                        o &&
                            (o.observe({ type: 'first-input', buffered: !0 }),
                            H(function () {
                                a(o.takeRecords()), r(!0)
                            }),
                            (function (e) {
                                addEventListener(
                                    'pageshow',
                                    function (t) {
                                        t.persisted && ((k = t.timeStamp), e(t))
                                    },
                                    !0
                                )
                            })(function () {
                                ;(W = 0),
                                    (N.length = 0),
                                    B.clear(),
                                    (i = A('INP')),
                                    (r = x(e, i, U, t.reportAllChanges))
                            }))
                }))
        },
        J = [],
        K = [],
        Q = new WeakMap(),
        Y = new Map(),
        Z = -1,
        $ = function (e) {
            ;(J = J.concat(e)), ee()
        },
        ee = function () {
            Z < 0 && (Z = z(te))
        },
        te = function () {
            Y.size > 10 &&
                Y.forEach(function (e, t) {
                    B.has(t) || Y.delete(t)
                })
            var e = N.map(function (e) {
                    return Q.get(e.entries[0])
                }),
                t = K.length - 50
            K = K.filter(function (n, r) {
                return r >= t || e.includes(n)
            })
            for (var r = new Set(), i = 0; i < K.length; i++) {
                var a = K[i]
                ne(a.startTime, a.processingEnd).forEach(function (e) {
                    r.add(e)
                })
            }
            for (var o = 0; o < 50; o++) {
                var c = J[J.length - 1 - o]
                if (!c || c.startTime < n) break
                r.add(c)
            }
            ;(J = Array.from(r)), (Z = -1)
        }
    X.push(
        function (e) {
            e.interactionId && e.target && !Y.has(e.interactionId) && Y.set(e.interactionId, e.target)
        },
        function (e) {
            var t,
                r = e.startTime + e.duration
            n = Math.max(n, e.processingEnd)
            for (var i = K.length - 1; i >= 0; i--) {
                var a = K[i]
                if (Math.abs(r - a.renderTime) <= 8) {
                    ;((t = a).startTime = Math.min(e.startTime, t.startTime)),
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
                    renderTime: r,
                    entries: [e],
                }),
                K.push(t)),
                (e.interactionId || 'first-input' === e.entryType) && Q.set(e, t),
                ee()
        }
    )
    var ne = function (e, t) {
            for (var n, r = [], i = 0; (n = J[i]); i++)
                if (!(n.startTime + n.duration < e)) {
                    if (n.startTime > t) break
                    r.push(n)
                }
            return r
        },
        re = 'undefined' != typeof window ? window : void 0,
        ie = 'undefined' != typeof globalThis ? globalThis : re,
        ae = null == ie ? void 0 : ie.navigator
    null == ie || ie.document,
        null == ie || ie.location,
        null == ie || ie.fetch,
        null != ie && ie.XMLHttpRequest && 'withCredentials' in new ie.XMLHttpRequest() && ie.XMLHttpRequest,
        null == ie || ie.AbortController,
        null == ae || ae.userAgent
    var oe = null != re ? re : {},
        ce = {
            onLCP: function (e, t) {
                ;(t = t || {}),
                    T(function () {
                        var n,
                            r = y(),
                            a = c('LCP'),
                            p = function (e) {
                                t.reportAllChanges || (e = e.slice(-1)),
                                    e.forEach(function (e) {
                                        e.startTime < r.firstHiddenTime &&
                                            ((a.value = Math.max(e.startTime - o(), 0)), (a.entries = [e]), n())
                                    })
                            },
                            m = s('largest-contentful-paint', p)
                        if (m) {
                            n = u(e, a, C, t.reportAllChanges)
                            var v = l(function () {
                                L[a.id] || (p(m.takeRecords()), m.disconnect(), (L[a.id] = !0), n(!0))
                            })
                            ;['keydown', 'click'].forEach(function (e) {
                                addEventListener(
                                    e,
                                    function () {
                                        return (function (e) {
                                            var t = self.requestIdleCallback || self.setTimeout,
                                                n = -1
                                            return (
                                                (e = l(e)),
                                                'hidden' === document.visibilityState ? e() : ((n = t(e)), f(e)),
                                                n
                                            )
                                        })(v)
                                    },
                                    !0
                                )
                            }),
                                f(v),
                                i(function (r) {
                                    ;(a = c('LCP')),
                                        (n = u(e, a, C, t.reportAllChanges)),
                                        d(function () {
                                            ;(a.value = performance.now() - r.timeStamp), (L[a.id] = !0), n(!0)
                                        })
                                })
                        }
                    })
            },
            onCLS: function (e, t) {
                ;(t = t || {}),
                    b(
                        l(function () {
                            var n,
                                r = c('CLS', 0),
                                a = 0,
                                o = [],
                                l = function (e) {
                                    e.forEach(function (e) {
                                        if (!e.hadRecentInput) {
                                            var t = o[0],
                                                n = o[o.length - 1]
                                            a && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3
                                                ? ((a += e.value), o.push(e))
                                                : ((a = e.value), (o = [e]))
                                        }
                                    }),
                                        a > r.value && ((r.value = a), (r.entries = o), n())
                                },
                                p = s('layout-shift', l)
                            p &&
                                ((n = u(e, r, S, t.reportAllChanges)),
                                f(function () {
                                    l(p.takeRecords()), n(!0)
                                }),
                                i(function () {
                                    ;(a = 0),
                                        (r = c('CLS', 0)),
                                        (n = u(e, r, S, t.reportAllChanges)),
                                        d(function () {
                                            return n()
                                        })
                                }),
                                setTimeout(n, 0))
                        })
                    )
            },
            onFCP: b,
            onINP: function (e, n) {
                t || (t = _('long-animation-frame', $)),
                    G(function (t) {
                        var n = (function (e) {
                            var t = e.entries[0],
                                n = Q.get(t),
                                r = t.processingStart,
                                i = n.processingEnd,
                                a = n.entries.sort(function (e, t) {
                                    return e.processingStart - t.processingStart
                                }),
                                o = ne(t.startTime, i),
                                c = e.entries.find(function (e) {
                                    return e.target
                                }),
                                s = (c && c.target) || Y.get(t.interactionId),
                                u = [t.startTime + t.duration, i].concat(
                                    o.map(function (e) {
                                        return e.startTime + e.duration
                                    })
                                ),
                                d = Math.max.apply(Math, u),
                                f = {
                                    interactionTarget: I(s),
                                    interactionTargetElement: s,
                                    interactionType: t.name.startsWith('key') ? 'keyboard' : 'pointer',
                                    interactionTime: t.startTime,
                                    nextPaintTime: d,
                                    processedEventEntries: a,
                                    longAnimationFrameEntries: o,
                                    inputDelay: r - t.startTime,
                                    processingDuration: i - r,
                                    presentationDelay: Math.max(d - i, 0),
                                    loadState: M(t.startTime),
                                }
                            return Object.assign(e, { attribution: f })
                        })(t)
                        e(n)
                    }, n)
            },
        }
    ;(oe.__PosthogExtensions__ = oe.__PosthogExtensions__ || {}),
        (oe.__PosthogExtensions__.postHogWebVitalsCallbacks = ce),
        (oe.postHogWebVitalsCallbacks = ce)
})()
//# sourceMappingURL=web-vitals.js.map
