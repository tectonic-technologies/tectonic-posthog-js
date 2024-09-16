!(function () {
    'use strict'
    function e(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            n &&
                (o = o.filter(function (n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                })),
                t.push.apply(t, o)
        }
        return t
    }
    function n(n) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {}
            t % 2
                ? e(Object(r), !0).forEach(function (e) {
                      o(n, e, r[e])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                : e(Object(r)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                  })
        }
        return n
    }
    function t(e, n) {
        for (var t = 0; t < n.length; t++) {
            var o = n[t]
            ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
        }
    }
    function o(e, n, t) {
        return (
            n in e
                ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 })
                : (e[n] = t),
            e
        )
    }
    function r(e, n) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e
            })(e) ||
            (function (e, n) {
                var t = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
                if (null == t) return
                var o,
                    r,
                    i = [],
                    a = !0,
                    l = !1
                try {
                    for (t = t.call(e); !(a = (o = t.next()).done) && (i.push(o.value), !n || i.length !== n); a = !0);
                } catch (e) {
                    ;(l = !0), (r = e)
                } finally {
                    try {
                        a || null == t.return || t.return()
                    } finally {
                        if (l) throw r
                    }
                }
                return i
            })(e, n) ||
            a(e, n) ||
            (function () {
                throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
            })()
        )
    }
    function i(e) {
        return (
            (function (e) {
                if (Array.isArray(e)) return l(e)
            })(e) ||
            (function (e) {
                if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
                    return Array.from(e)
            })(e) ||
            a(e) ||
            (function () {
                throw new TypeError(
                    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
            })()
        )
    }
    function a(e, n) {
        if (e) {
            if ('string' == typeof e) return l(e, n)
            var t = Object.prototype.toString.call(e).slice(8, -1)
            return (
                'Object' === t && e.constructor && (t = e.constructor.name),
                'Map' === t || 'Set' === t
                    ? Array.from(e)
                    : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? l(e, n)
                    : void 0
            )
        }
    }
    function l(e, n) {
        ;(null == n || n > e.length) && (n = e.length)
        for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t]
        return o
    }
    var c, u, s
    !(function (e) {
        ;(e.Popover = 'popover'), (e.API = 'api'), (e.Widget = 'widget')
    })(c || (c = {})),
        (function (e) {
            ;(e.Open = 'open'),
                (e.MultipleChoice = 'multiple_choice'),
                (e.SingleChoice = 'single_choice'),
                (e.Rating = 'rating'),
                (e.Link = 'link')
        })(u || (u = {})),
        (function (e) {
            ;(e.NextQuestion = 'next_question'),
                (e.End = 'end'),
                (e.ResponseBased = 'response_based'),
                (e.SpecificQuestion = 'specific_question')
        })(s || (s = {}))
    var d = 'undefined' != typeof window ? window : void 0,
        p = 'undefined' != typeof globalThis ? globalThis : d,
        f = null == p ? void 0 : p.navigator,
        _ = null == p ? void 0 : p.document
    null == p || p.location,
        null == p || p.fetch,
        null != p && p.XMLHttpRequest && 'withCredentials' in new p.XMLHttpRequest() && p.XMLHttpRequest,
        null == p || p.AbortController,
        null == f || f.userAgent
    var v,
        h,
        g,
        y,
        m,
        b,
        C,
        x,
        k = null != d ? d : {},
        w = {},
        S = [],
        q = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        T = Array.isArray
    function H(e, n) {
        for (var t in n) e[t] = n[t]
        return e
    }
    function P(e) {
        var n = e.parentNode
        n && n.removeChild(e)
    }
    function L(e, n, t) {
        var o,
            r,
            i,
            a = {}
        for (i in n) 'key' == i ? (o = n[i]) : 'ref' == i ? (r = n[i]) : (a[i] = n[i])
        if (
            (arguments.length > 2 && (a.children = arguments.length > 3 ? v.call(arguments, 2) : t),
            'function' == typeof e && null != e.defaultProps)
        )
            for (i in e.defaultProps) void 0 === a[i] && (a[i] = e.defaultProps[i])
        return M(e, a, o, r, null)
    }
    function M(e, n, t, o, r) {
        var i = {
            type: e,
            props: n,
            key: t,
            ref: o,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: null == r ? ++g : r,
            __i: -1,
            __u: 0,
        }
        return null == r && null != h.vnode && h.vnode(i), i
    }
    function I(e) {
        return e.children
    }
    function E(e, n) {
        ;(this.props = e), (this.context = n)
    }
    function D(e, n) {
        if (null == n) return e.__ ? D(e.__, e.__i + 1) : null
        for (var t; n < e.__k.length; n++) if (null != (t = e.__k[n]) && null != t.__e) return t.__e
        return 'function' == typeof e.type ? D(e) : null
    }
    function F(e) {
        var n, t
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
                if (null != (t = e.__k[n]) && null != t.__e) {
                    e.__e = e.__c.base = t.__e
                    break
                }
            return F(e)
        }
    }
    function A(e) {
        ;((!e.__d && (e.__d = !0) && y.push(e) && !Z.__r++) || m !== h.debounceRendering) &&
            ((m = h.debounceRendering) || b)(Z)
    }
    function Z() {
        var e, n, t, o, r, i, a, l, c
        for (y.sort(C); (e = y.shift()); )
            e.__d &&
                ((n = y.length),
                (o = void 0),
                (i = (r = (t = e).__v).__e),
                (l = []),
                (c = []),
                (a = t.__P) &&
                    (((o = H({}, r)).__v = r.__v + 1),
                    h.vnode && h.vnode(o),
                    U(
                        a,
                        o,
                        r,
                        t.__n,
                        void 0 !== a.ownerSVGElement,
                        32 & r.__u ? [i] : null,
                        l,
                        null == i ? D(r) : i,
                        !!(32 & r.__u),
                        c
                    ),
                    (o.__.__k[o.__i] = o),
                    R(l, o, c),
                    o.__e != i && F(o)),
                y.length > n && y.sort(C))
        Z.__r = 0
    }
    function N(e, n, t, o, r, i, a, l, c, u, s) {
        var d,
            p,
            f,
            _,
            v,
            h = (o && o.__k) || S,
            g = n.length
        for (
            t.__d = c,
                (function (e, n, t) {
                    var o,
                        r,
                        i,
                        a,
                        l,
                        c = n.length,
                        u = t.length,
                        s = u,
                        d = 0
                    for (e.__k = [], o = 0; o < c; o++)
                        null !=
                        (r = e.__k[o] =
                            null == (r = n[o]) || 'boolean' == typeof r || 'function' == typeof r
                                ? null
                                : 'string' == typeof r ||
                                  'number' == typeof r ||
                                  'bigint' == typeof r ||
                                  r.constructor == String
                                ? M(null, r, null, null, r)
                                : T(r)
                                ? M(I, { children: r }, null, null, null)
                                : void 0 === r.constructor && r.__b > 0
                                ? M(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v)
                                : r)
                            ? ((r.__ = e),
                              (r.__b = e.__b + 1),
                              (l = j(r, t, (a = o + d), s)),
                              (r.__i = l),
                              (i = null),
                              -1 !== l && (s--, (i = t[l]) && (i.__u |= 131072)),
                              null == i || null === i.__v
                                  ? (-1 == l && d--, 'function' != typeof r.type && (r.__u |= 65536))
                                  : l !== a &&
                                    (l === a + 1
                                        ? d++
                                        : l > a
                                        ? s > c - a
                                            ? (d += l - a)
                                            : d--
                                        : (d = l < a && l == a - 1 ? l - a : 0),
                                    l !== o + d && (r.__u |= 65536)))
                            : (i = t[o]) &&
                              null == i.key &&
                              i.__e &&
                              (i.__e == e.__d && (e.__d = D(i)), Y(i, i, !1), (t[o] = null), s--)
                    if (s)
                        for (o = 0; o < u; o++)
                            null != (i = t[o]) && 0 == (131072 & i.__u) && (i.__e == e.__d && (e.__d = D(i)), Y(i, i))
                })(t, n, h),
                c = t.__d,
                d = 0;
            d < g;
            d++
        )
            null != (f = t.__k[d]) &&
                'boolean' != typeof f &&
                'function' != typeof f &&
                ((p = -1 === f.__i ? w : h[f.__i] || w),
                (f.__i = d),
                U(e, f, p, r, i, a, l, c, u, s),
                (_ = f.__e),
                f.ref && p.ref != f.ref && (p.ref && z(p.ref, null, f), s.push(f.ref, f.__c || _, f)),
                null == v && null != _ && (v = _),
                65536 & f.__u || p.__k === f.__k
                    ? (c = V(f, c, e))
                    : 'function' == typeof f.type && void 0 !== f.__d
                    ? (c = f.__d)
                    : _ && (c = _.nextSibling),
                (f.__d = void 0),
                (f.__u &= -196609))
        ;(t.__d = c), (t.__e = v)
    }
    function V(e, n, t) {
        var o, r
        if ('function' == typeof e.type) {
            for (o = e.__k, r = 0; o && r < o.length; r++) o[r] && ((o[r].__ = e), (n = V(o[r], n, t)))
            return n
        }
        return e.__e != n && (t.insertBefore(e.__e, n || null), (n = e.__e)), n && n.nextSibling
    }
    function j(e, n, t, o) {
        var r = e.key,
            i = e.type,
            a = t - 1,
            l = t + 1,
            c = n[t]
        if (null === c || (c && r == c.key && i === c.type)) return t
        if (o > (null != c && 0 == (131072 & c.__u) ? 1 : 0))
            for (; a >= 0 || l < n.length; ) {
                if (a >= 0) {
                    if ((c = n[a]) && 0 == (131072 & c.__u) && r == c.key && i === c.type) return a
                    a--
                }
                if (l < n.length) {
                    if ((c = n[l]) && 0 == (131072 & c.__u) && r == c.key && i === c.type) return l
                    l++
                }
            }
        return -1
    }
    function O(e, n, t) {
        '-' === n[0]
            ? e.setProperty(n, null == t ? '' : t)
            : (e[n] = null == t ? '' : 'number' != typeof t || q.test(n) ? t : t + 'px')
    }
    function B(e, n, t, o, r) {
        var i
        e: if ('style' === n)
            if ('string' == typeof t) e.style.cssText = t
            else {
                if (('string' == typeof o && (e.style.cssText = o = ''), o))
                    for (n in o) (t && n in t) || O(e.style, n, '')
                if (t) for (n in t) (o && t[n] === o[n]) || O(e.style, n, t[n])
            }
        else if ('o' === n[0] && 'n' === n[1])
            (i = n !== (n = n.replace(/(PointerCapture)$|Capture$/, '$1'))),
                (n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2)),
                e.l || (e.l = {}),
                (e.l[n + i] = t),
                t
                    ? o
                        ? (t.u = o.u)
                        : ((t.u = Date.now()), e.addEventListener(n, i ? W : Q, i))
                    : e.removeEventListener(n, i ? W : Q, i)
        else {
            if (r) n = n.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's')
            else if (
                'width' !== n &&
                'height' !== n &&
                'href' !== n &&
                'list' !== n &&
                'form' !== n &&
                'tabIndex' !== n &&
                'download' !== n &&
                'rowSpan' !== n &&
                'colSpan' !== n &&
                'role' !== n &&
                n in e
            )
                try {
                    e[n] = null == t ? '' : t
                    break e
                } catch (e) {}
            'function' == typeof t ||
                (null == t || (!1 === t && '-' !== n[4]) ? e.removeAttribute(n) : e.setAttribute(n, t))
        }
    }
    function Q(e) {
        var n = this.l[e.type + !1]
        if (e.t) {
            if (e.t <= n.u) return
        } else e.t = Date.now()
        return n(h.event ? h.event(e) : e)
    }
    function W(e) {
        return this.l[e.type + !0](h.event ? h.event(e) : e)
    }
    function U(e, n, t, o, r, i, a, l, c, u) {
        var s,
            d,
            p,
            f,
            _,
            v,
            g,
            y,
            m,
            b,
            C,
            x,
            k,
            w,
            S,
            q = n.type
        if (void 0 !== n.constructor) return null
        128 & t.__u && ((c = !!(32 & t.__u)), (i = [(l = n.__e = t.__e)])), (s = h.__b) && s(n)
        e: if ('function' == typeof q)
            try {
                if (
                    ((y = n.props),
                    (m = (s = q.contextType) && o[s.__c]),
                    (b = s ? (m ? m.props.value : s.__) : o),
                    t.__c
                        ? (g = (d = n.__c = t.__c).__ = d.__E)
                        : ('prototype' in q && q.prototype.render
                              ? (n.__c = d = new q(y, b))
                              : ((n.__c = d = new E(y, b)), (d.constructor = q), (d.render = G)),
                          m && m.sub(d),
                          (d.props = y),
                          d.state || (d.state = {}),
                          (d.context = b),
                          (d.__n = o),
                          (p = d.__d = !0),
                          (d.__h = []),
                          (d._sb = [])),
                    null == d.__s && (d.__s = d.state),
                    null != q.getDerivedStateFromProps &&
                        (d.__s == d.state && (d.__s = H({}, d.__s)), H(d.__s, q.getDerivedStateFromProps(y, d.__s))),
                    (f = d.props),
                    (_ = d.state),
                    (d.__v = n),
                    p)
                )
                    null == q.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(),
                        null != d.componentDidMount && d.__h.push(d.componentDidMount)
                else {
                    if (
                        (null == q.getDerivedStateFromProps &&
                            y !== f &&
                            null != d.componentWillReceiveProps &&
                            d.componentWillReceiveProps(y, b),
                        !d.__e &&
                            ((null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(y, d.__s, b)) ||
                                n.__v === t.__v))
                    ) {
                        for (
                            n.__v !== t.__v && ((d.props = y), (d.state = d.__s), (d.__d = !1)),
                                n.__e = t.__e,
                                n.__k = t.__k,
                                n.__k.forEach(function (e) {
                                    e && (e.__ = n)
                                }),
                                C = 0;
                            C < d._sb.length;
                            C++
                        )
                            d.__h.push(d._sb[C])
                        ;(d._sb = []), d.__h.length && a.push(d)
                        break e
                    }
                    null != d.componentWillUpdate && d.componentWillUpdate(y, d.__s, b),
                        null != d.componentDidUpdate &&
                            d.__h.push(function () {
                                d.componentDidUpdate(f, _, v)
                            })
                }
                if (
                    ((d.context = b),
                    (d.props = y),
                    (d.__P = e),
                    (d.__e = !1),
                    (x = h.__r),
                    (k = 0),
                    'prototype' in q && q.prototype.render)
                ) {
                    for (
                        d.state = d.__s, d.__d = !1, x && x(n), s = d.render(d.props, d.state, d.context), w = 0;
                        w < d._sb.length;
                        w++
                    )
                        d.__h.push(d._sb[w])
                    d._sb = []
                } else
                    do {
                        ;(d.__d = !1), x && x(n), (s = d.render(d.props, d.state, d.context)), (d.state = d.__s)
                    } while (d.__d && ++k < 25)
                ;(d.state = d.__s),
                    null != d.getChildContext && (o = H(H({}, o), d.getChildContext())),
                    p || null == d.getSnapshotBeforeUpdate || (v = d.getSnapshotBeforeUpdate(f, _)),
                    N(
                        e,
                        T((S = null != s && s.type === I && null == s.key ? s.props.children : s)) ? S : [S],
                        n,
                        t,
                        o,
                        r,
                        i,
                        a,
                        l,
                        c,
                        u
                    ),
                    (d.base = n.__e),
                    (n.__u &= -161),
                    d.__h.length && a.push(d),
                    g && (d.__E = d.__ = null)
            } catch (e) {
                ;(n.__v = null),
                    c || null != i
                        ? ((n.__e = l), (n.__u |= c ? 160 : 32), (i[i.indexOf(l)] = null))
                        : ((n.__e = t.__e), (n.__k = t.__k)),
                    h.__e(e, n, t)
            }
        else
            null == i && n.__v === t.__v
                ? ((n.__k = t.__k), (n.__e = t.__e))
                : (n.__e = $(t.__e, n, t, o, r, i, a, c, u))
        ;(s = h.diffed) && s(n)
    }
    function R(e, n, t) {
        n.__d = void 0
        for (var o = 0; o < t.length; o++) z(t[o], t[++o], t[++o])
        h.__c && h.__c(n, e),
            e.some(function (n) {
                try {
                    ;(e = n.__h),
                        (n.__h = []),
                        e.some(function (e) {
                            e.call(n)
                        })
                } catch (e) {
                    h.__e(e, n.__v)
                }
            })
    }
    function $(e, n, t, o, r, i, a, l, c) {
        var u,
            s,
            d,
            p,
            f,
            _,
            h,
            g = t.props,
            y = n.props,
            m = n.type
        if (('svg' === m && (r = !0), null != i))
            for (u = 0; u < i.length; u++)
                if ((f = i[u]) && 'setAttribute' in f == !!m && (m ? f.localName === m : 3 === f.nodeType)) {
                    ;(e = f), (i[u] = null)
                    break
                }
        if (null == e) {
            if (null === m) return document.createTextNode(y)
            ;(e = r ? document.createElementNS('http://www.w3.org/2000/svg', m) : document.createElement(m, y.is && y)),
                (i = null),
                (l = !1)
        }
        if (null === m) g === y || (l && e.data === y) || (e.data = y)
        else {
            if (((i = i && v.call(e.childNodes)), (g = t.props || w), !l && null != i))
                for (g = {}, u = 0; u < e.attributes.length; u++) g[(f = e.attributes[u]).name] = f.value
            for (u in g)
                (f = g[u]),
                    'children' == u ||
                        ('dangerouslySetInnerHTML' == u ? (d = f) : 'key' === u || u in y || B(e, u, null, f, r))
            for (u in y)
                (f = y[u]),
                    'children' == u
                        ? (p = f)
                        : 'dangerouslySetInnerHTML' == u
                        ? (s = f)
                        : 'value' == u
                        ? (_ = f)
                        : 'checked' == u
                        ? (h = f)
                        : 'key' === u || (l && 'function' != typeof f) || g[u] === f || B(e, u, f, g[u], r)
            if (s)
                l || (d && (s.__html === d.__html || s.__html === e.innerHTML)) || (e.innerHTML = s.__html),
                    (n.__k = [])
            else if (
                (d && (e.innerHTML = ''),
                N(e, T(p) ? p : [p], n, t, o, r && 'foreignObject' !== m, i, a, i ? i[0] : t.__k && D(t, 0), l, c),
                null != i)
            )
                for (u = i.length; u--; ) null != i[u] && P(i[u])
            l ||
                ((u = 'value'),
                void 0 !== _ &&
                    (_ !== e[u] || ('progress' === m && !_) || ('option' === m && _ !== g[u])) &&
                    B(e, u, _, g[u], !1),
                (u = 'checked'),
                void 0 !== h && h !== e[u] && B(e, u, h, g[u], !1))
        }
        return e
    }
    function z(e, n, t) {
        try {
            'function' == typeof e ? e(n) : (e.current = n)
        } catch (e) {
            h.__e(e, t)
        }
    }
    function Y(e, n, t) {
        var o, r
        if (
            (h.unmount && h.unmount(e),
            (o = e.ref) && ((o.current && o.current !== e.__e) || z(o, null, n)),
            null != (o = e.__c))
        ) {
            if (o.componentWillUnmount)
                try {
                    o.componentWillUnmount()
                } catch (e) {
                    h.__e(e, n)
                }
            ;(o.base = o.__P = null), (e.__c = void 0)
        }
        if ((o = e.__k)) for (r = 0; r < o.length; r++) o[r] && Y(o[r], n, t || 'function' != typeof e.type)
        t || null == e.__e || P(e.__e), (e.__ = e.__e = e.__d = void 0)
    }
    function G(e, n, t) {
        return this.constructor(e, t)
    }
    function X(e, n, t) {
        var o, r, i, a
        h.__ && h.__(e, n),
            (r = (o = 'function' == typeof t) ? null : (t && t.__k) || n.__k),
            (i = []),
            (a = []),
            U(
                n,
                (e = ((!o && t) || n).__k = L(I, null, [e])),
                r || w,
                w,
                void 0 !== n.ownerSVGElement,
                !o && t ? [t] : r ? null : n.firstChild ? v.call(n.childNodes) : null,
                i,
                !o && t ? t : r ? r.__e : n.firstChild,
                o,
                a
            ),
            R(i, e, a)
    }
    function J(e, n, t) {
        var o,
            r,
            i,
            a,
            l = H({}, e.props)
        for (i in (e.type && e.type.defaultProps && (a = e.type.defaultProps), n))
            'key' == i ? (o = n[i]) : 'ref' == i ? (r = n[i]) : (l[i] = void 0 === n[i] && void 0 !== a ? a[i] : n[i])
        return (
            arguments.length > 2 && (l.children = arguments.length > 3 ? v.call(arguments, 2) : t),
            M(e.type, l, o || e.key, r || e.ref, null)
        )
    }
    ;(v = S.slice),
        (h = {
            __e: function (e, n, t, o) {
                for (var r, i, a; (n = n.__); )
                    if ((r = n.__c) && !r.__)
                        try {
                            if (
                                ((i = r.constructor) &&
                                    null != i.getDerivedStateFromError &&
                                    (r.setState(i.getDerivedStateFromError(e)), (a = r.__d)),
                                null != r.componentDidCatch && (r.componentDidCatch(e, o || {}), (a = r.__d)),
                                a)
                            )
                                return (r.__E = r)
                        } catch (n) {
                            e = n
                        }
                throw e
            },
        }),
        (g = 0),
        (E.prototype.setState = function (e, n) {
            var t
            ;(t = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = H({}, this.state))),
                'function' == typeof e && (e = e(H({}, t), this.props)),
                e && H(t, e),
                null != e && this.__v && (n && this._sb.push(n), A(this))
        }),
        (E.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), A(this))
        }),
        (E.prototype.render = I),
        (y = []),
        (b = 'function' == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
        (C = function (e, n) {
            return e.__v.__b - n.__v.__b
        }),
        (Z.__r = 0),
        (x = 0)
    var K = d,
        ee = _,
        ne = function (e) {
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
                    oe((null == e ? void 0 : e.backgroundColor) || '#eeeded'),
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
    function te(e) {
        if ('#' === e[0]) {
            var n = e.replace(/^#/, '')
            return (
                'rgb(' +
                parseInt(n.slice(0, 2), 16) +
                ',' +
                parseInt(n.slice(2, 4), 16) +
                ',' +
                parseInt(n.slice(4, 6), 16) +
                ')'
            )
        }
        return 'rgb(255, 255, 255)'
    }
    function oe() {
        var e,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie
        '#' === n[0] && (e = te(n)), n.startsWith('rgb') && (e = n)
        var t = {
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
        }[n.toLowerCase()]
        if ((t && (e = te(t)), !e)) return 'black'
        var o = e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)
        if (o) {
            var r = parseInt(o[1]),
                i = parseInt(o[2]),
                a = parseInt(o[3])
            return Math.sqrt(r * r * 0.299 + i * i * 0.587 + a * a * 0.114) > 127.5 ? 'black' : 'white'
        }
        return 'black'
    }
    var re = {
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
        ie = '#eeeded',
        ae = function () {
            var e,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 ? arguments[2] : void 0
            i &&
                (localStorage.setItem(pe(r), 'true'),
                i.capture(
                    'survey sent',
                    n(
                        n(
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
                            t
                        ),
                        {},
                        { $set: o({}, fe(r, 'responded'), !0) }
                    )
                ),
                K.dispatchEvent(new Event('PHSurveySent')))
        },
        le = function (e, n, t) {
            var r
            !t &&
                n &&
                (n.capture('survey dismissed', {
                    $survey_name: e.name,
                    $survey_id: e.id,
                    $survey_iteration: e.current_iteration,
                    $survey_iteration_start_date: e.current_iteration_start_date,
                    sessionRecordingUrl: null === (r = n.get_session_replay_url) || void 0 === r ? void 0 : r.call(n),
                    $set: o({}, fe(e, 'dismissed'), !0),
                }),
                localStorage.setItem(pe(e), 'true'),
                K.dispatchEvent(new Event('PHSurveyClosed')))
        },
        ce = function (e) {
            return e
                .map(function (e) {
                    return { sort: Math.floor(10 * Math.random()), value: e }
                })
                .sort(function (e, n) {
                    return e.sort - n.sort
                })
                .map(function (e) {
                    return e.value
                })
        },
        ue = function (e, n) {
            return e.length === n.length &&
                e.every(function (e, t) {
                    return e === n[t]
                })
                ? n.reverse()
                : n
        },
        se = function (e) {
            return (
                e.questions.forEach(function (e, n) {
                    e.originalQuestionIndex = n
                }),
                e.appearance && e.appearance.shuffleQuestions ? ue(e.questions, ce(e.questions)) : e.questions
            )
        },
        de = function (e) {
            var n, t
            return !(
                null === (n = e.conditions) ||
                void 0 === n ||
                null === (t = n.events) ||
                void 0 === t ||
                !t.repeatedActivation ||
                !(function (e) {
                    var n, t, o, r, i, a
                    return (
                        null !=
                            (null === (n = e.conditions) ||
                            void 0 === n ||
                            null === (t = n.events) ||
                            void 0 === t ||
                            null === (o = t.values) ||
                            void 0 === o
                                ? void 0
                                : o.length) &&
                        (null === (r = e.conditions) ||
                        void 0 === r ||
                        null === (i = r.events) ||
                        void 0 === i ||
                        null === (a = i.values) ||
                        void 0 === a
                            ? void 0
                            : a.length) > 0
                    )
                })(e)
            )
        },
        pe = function (e) {
            var n = 'seenSurvey_'.concat(e.id)
            return (
                e.current_iteration &&
                    e.current_iteration > 0 &&
                    (n = 'seenSurvey_'.concat(e.id, '_').concat(e.current_iteration)),
                n
            )
        },
        fe = function (e, n) {
            var t = '$survey_'.concat(n, '/').concat(e.id)
            return (
                e.current_iteration &&
                    e.current_iteration > 0 &&
                    (t = '$survey_'.concat(n, '/').concat(e.id, '/').concat(e.current_iteration)),
                t
            )
        },
        _e = (function (e, n) {
            var t = {
                __c: (n = '__cC' + x++),
                __: e,
                Consumer: function (e, n) {
                    return e.children(n)
                },
                Provider: function (e) {
                    var t, o
                    return (
                        this.getChildContext ||
                            ((t = []),
                            ((o = {})[n] = this),
                            (this.getChildContext = function () {
                                return o
                            }),
                            (this.shouldComponentUpdate = function (e) {
                                this.props.value !== e.value &&
                                    t.some(function (e) {
                                        ;(e.__e = !0), A(e)
                                    })
                            }),
                            (this.sub = function (e) {
                                t.push(e)
                                var n = e.componentWillUnmount
                                e.componentWillUnmount = function () {
                                    t.splice(t.indexOf(e), 1), n && n.call(e)
                                }
                            })),
                        e.children
                    )
                },
            }
            return (t.Provider.__ = t.Consumer.contextType = t)
        })({ isPreviewMode: !1, previewPageIndex: 0, handleCloseSurveyPopup: function () {}, isPopup: !0 }),
        ve = function (e) {
            var n = e.component,
                t = e.children,
                o = e.renderAsHtml,
                r = e.style
            return J(n, o ? { dangerouslySetInnerHTML: { __html: t }, style: r } : { children: t, style: r })
        },
        he = _
    var ge,
        ye,
        me,
        be,
        Ce = 0,
        xe = [],
        ke = [],
        we = h.__b,
        Se = h.__r,
        qe = h.diffed,
        Te = h.__c,
        He = h.unmount
    function Pe(e, n) {
        h.__h && h.__h(ye, e, Ce || n), (Ce = 0)
        var t = ye.__H || (ye.__H = { __: [], __h: [] })
        return e >= t.__.length && t.__.push({ __V: ke }), t.__[e]
    }
    function Le(e) {
        return (
            (Ce = 1),
            (function (e, n, t) {
                var o = Pe(ge++, 2)
                if (
                    ((o.t = e),
                    !o.__c &&
                        ((o.__ = [
                            t ? t(n) : Oe(void 0, n),
                            function (e) {
                                var n = o.__N ? o.__N[0] : o.__[0],
                                    t = o.t(n, e)
                                n !== t && ((o.__N = [t, o.__[1]]), o.__c.setState({}))
                            },
                        ]),
                        (o.__c = ye),
                        !ye.u))
                ) {
                    var r = function (e, n, t) {
                        if (!o.__c.__H) return !0
                        var r = o.__c.__H.__.filter(function (e) {
                            return e.__c
                        })
                        if (
                            r.every(function (e) {
                                return !e.__N
                            })
                        )
                            return !i || i.call(this, e, n, t)
                        var a = !1
                        return (
                            r.forEach(function (e) {
                                if (e.__N) {
                                    var n = e.__[0]
                                    ;(e.__ = e.__N), (e.__N = void 0), n !== e.__[0] && (a = !0)
                                }
                            }),
                            !(!a && o.__c.props === e) && (!i || i.call(this, e, n, t))
                        )
                    }
                    ye.u = !0
                    var i = ye.shouldComponentUpdate,
                        a = ye.componentWillUpdate
                    ;(ye.componentWillUpdate = function (e, n, t) {
                        if (this.__e) {
                            var o = i
                            ;(i = void 0), r(e, n, t), (i = o)
                        }
                        a && a.call(this, e, n, t)
                    }),
                        (ye.shouldComponentUpdate = r)
                }
                return o.__N || o.__
            })(Oe, e)
        )
    }
    function Me(e, n) {
        var t = Pe(ge++, 3)
        !h.__s && je(t.__H, n) && ((t.__ = e), (t.i = n), ye.__H.__h.push(t))
    }
    function Ie(e) {
        return (
            (Ce = 5),
            Ee(function () {
                return { current: e }
            }, [])
        )
    }
    function Ee(e, n) {
        var t = Pe(ge++, 7)
        return je(t.__H, n) ? ((t.__V = e()), (t.i = n), (t.__h = e), t.__V) : t.__
    }
    function De(e) {
        var n = ye.context[e.__c],
            t = Pe(ge++, 9)
        return (t.c = e), n ? (null == t.__ && ((t.__ = !0), n.sub(ye)), n.props.value) : e.__
    }
    function Fe() {
        for (var e; (e = xe.shift()); )
            if (e.__P && e.__H)
                try {
                    e.__H.__h.forEach(Ne), e.__H.__h.forEach(Ve), (e.__H.__h = [])
                } catch (n) {
                    ;(e.__H.__h = []), h.__e(n, e.__v)
                }
    }
    ;(h.__b = function (e) {
        ;(ye = null), we && we(e)
    }),
        (h.__r = function (e) {
            Se && Se(e), (ge = 0)
            var n = (ye = e.__c).__H
            n &&
                (me === ye
                    ? ((n.__h = []),
                      (ye.__h = []),
                      n.__.forEach(function (e) {
                          e.__N && (e.__ = e.__N), (e.__V = ke), (e.__N = e.i = void 0)
                      }))
                    : (n.__h.forEach(Ne), n.__h.forEach(Ve), (n.__h = []), (ge = 0))),
                (me = ye)
        }),
        (h.diffed = function (e) {
            qe && qe(e)
            var n = e.__c
            n &&
                n.__H &&
                (n.__H.__h.length &&
                    ((1 !== xe.push(n) && be === h.requestAnimationFrame) ||
                        ((be = h.requestAnimationFrame) || Ze)(Fe)),
                n.__H.__.forEach(function (e) {
                    e.i && (e.__H = e.i), e.__V !== ke && (e.__ = e.__V), (e.i = void 0), (e.__V = ke)
                })),
                (me = ye = null)
        }),
        (h.__c = function (e, n) {
            n.some(function (e) {
                try {
                    e.__h.forEach(Ne),
                        (e.__h = e.__h.filter(function (e) {
                            return !e.__ || Ve(e)
                        }))
                } catch (t) {
                    n.some(function (e) {
                        e.__h && (e.__h = [])
                    }),
                        (n = []),
                        h.__e(t, e.__v)
                }
            }),
                Te && Te(e, n)
        }),
        (h.unmount = function (e) {
            He && He(e)
            var n,
                t = e.__c
            t &&
                t.__H &&
                (t.__H.__.forEach(function (e) {
                    try {
                        Ne(e)
                    } catch (e) {
                        n = e
                    }
                }),
                (t.__H = void 0),
                n && h.__e(n, t.__v))
        })
    var Ae = 'function' == typeof requestAnimationFrame
    function Ze(e) {
        var n,
            t = function () {
                clearTimeout(o), Ae && cancelAnimationFrame(n), setTimeout(e)
            },
            o = setTimeout(t, 100)
        Ae && (n = requestAnimationFrame(t))
    }
    function Ne(e) {
        var n = ye,
            t = e.__c
        'function' == typeof t && ((e.__c = void 0), t()), (ye = n)
    }
    function Ve(e) {
        var n = ye
        ;(e.__c = e.__()), (ye = n)
    }
    function je(e, n) {
        return (
            !e ||
            e.length !== n.length ||
            n.some(function (n, t) {
                return n !== e[t]
            })
        )
    }
    function Oe(e, n) {
        return 'function' == typeof n ? n(e) : n
    }
    var Be = Array.isArray,
        Qe = Object.prototype.toString,
        We =
            Be ||
            function (e) {
                return '[object Array]' === Qe.call(e)
            },
        Ue = function (e) {
            return null === e
        },
        Re = function (e) {
            return '[object Number]' == Qe.call(e)
        },
        $e = 0
    function ze(e, n, t, o, r, i) {
        var a,
            l,
            c = {}
        for (l in n) 'ref' == l ? (a = n[l]) : (c[l] = n[l])
        var u = {
            type: e,
            props: c,
            key: t,
            ref: a,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: --$e,
            __i: -1,
            __u: 0,
            __source: r,
            __self: i,
        }
        if ('function' == typeof e && (a = e.defaultProps)) for (l in a) void 0 === c[l] && (c[l] = a[l])
        return h.vnode && h.vnode(u), u
    }
    var Ye = ze('svg', {
            className: 'emoji-svg',
            xmlns: 'http://www.w3.org/2000/svg',
            height: '48',
            viewBox: '0 -960 960 960',
            width: '48',
            children: ze('path', {
                d: 'M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm146 272q66 0 121.5-35.5T682-393h-52q-23 40-63 61.5T480.5-310q-46.5 0-87-21T331-393h-53q26 61 81 96.5T480-261Zm0 181q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z',
            }),
        }),
        Ge = ze('svg', {
            className: 'emoji-svg',
            xmlns: 'http://www.w3.org/2000/svg',
            height: '48',
            viewBox: '0 -960 960 960',
            width: '48',
            children: ze('path', {
                d: 'M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm20 194h253v-49H354v49ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z',
            }),
        }),
        Xe = ze('svg', {
            className: 'emoji-svg',
            xmlns: 'http://www.w3.org/2000/svg',
            height: '48',
            viewBox: '0 -960 960 960',
            width: '48',
            children: ze('path', {
                d: 'M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm146.174 116Q413-417 358.5-379.5T278-280h53q22-42 62.173-65t87.5-23Q528-368 567.5-344.5T630-280h52q-25-63-79.826-100-54.826-37-122-37ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z',
            }),
        }),
        Je = ze('svg', {
            className: 'emoji-svg',
            xmlns: 'http://www.w3.org/2000/svg',
            height: '48',
            viewBox: '0 -960 960 960',
            width: '48',
            children: ze('path', {
                d: 'M480-417q-67 0-121.5 37.5T278-280h404q-25-63-80-100t-122-37Zm-183-72 50-45 45 45 31-36-45-45 45-45-31-36-45 45-50-45-31 36 45 45-45 45 31 36Zm272 0 44-45 51 45 31-36-45-45 45-45-31-36-51 45-44-45-31 36 44 45-44 45 31 36ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142 0 241-99t99-241q0-142-99-241t-241-99q-142 0-241 99t-99 241q0 142 99 241t241 99Z',
            }),
        }),
        Ke = ze('svg', {
            className: 'emoji-svg',
            xmlns: 'http://www.w3.org/2000/svg',
            height: '48',
            viewBox: '0 -960 960 960',
            width: '48',
            children: ze('path', {
                d: 'M479.504-261Q537-261 585.5-287q48.5-26 78.5-72.4 6-11.6-.75-22.6-6.75-11-20.25-11H316.918Q303-393 296.5-382t-.5 22.6q30 46.4 78.5 72.4 48.5 26 105.004 26ZM347-578l27 27q7.636 8 17.818 8Q402-543 410-551q8-8 8-18t-8-18l-42-42q-8.8-9-20.9-9-12.1 0-21.1 9l-42 42q-8 7.636-8 17.818Q276-559 284-551q8 8 18 8t18-8l27-27Zm267 0 27 27q7.714 8 18 8t18-8q8-7.636 8-17.818Q685-579 677-587l-42-42q-8.8-9-20.9-9-12.1 0-21.1 9l-42 42q-8 7.714-8 18t8 18q7.636 8 17.818 8Q579-543 587-551l27-27ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z',
            }),
        }),
        en = ze('svg', {
            width: '12',
            height: '12',
            viewBox: '0 0 12 12',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: ze('path', {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M0.164752 0.164752C0.384422 -0.0549175 0.740578 -0.0549175 0.960248 0.164752L6 5.20451L11.0398 0.164752C11.2594 -0.0549175 11.6156 -0.0549175 11.8352 0.164752C12.0549 0.384422 12.0549 0.740578 11.8352 0.960248L6.79549 6L11.8352 11.0398C12.0549 11.2594 12.0549 11.6156 11.8352 11.8352C11.6156 12.0549 11.2594 12.0549 11.0398 11.8352L6 6.79549L0.960248 11.8352C0.740578 12.0549 0.384422 12.0549 0.164752 11.8352C-0.0549175 11.6156 -0.0549175 11.2594 0.164752 11.0398L5.20451 6L0.164752 0.960248C-0.0549175 0.740578 -0.0549175 0.384422 0.164752 0.164752Z',
                fill: 'black',
            }),
        }),
        nn = ze('svg', {
            width: '77',
            height: '14',
            viewBox: '0 0 77 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
                ze('g', {
                    'clip-path': 'url(#clip0_2415_6911)',
                    children: [
                        ze('mask', {
                            id: 'mask0_2415_6911',
                            style: { maskType: 'luminance' },
                            maskUnits: 'userSpaceOnUse',
                            x: '0',
                            y: '0',
                            width: '77',
                            height: '14',
                            children: ze('path', { d: 'M0.5 0H76.5V14H0.5V0Z', fill: 'white' }),
                        }),
                        ze('g', {
                            mask: 'url(#mask0_2415_6911)',
                            children: [
                                ze('path', {
                                    d: 'M5.77226 8.02931C5.59388 8.37329 5.08474 8.37329 4.90634 8.02931L4.4797 7.20672C4.41155 7.07535 4.41155 6.9207 4.4797 6.78933L4.90634 5.96669C5.08474 5.62276 5.59388 5.62276 5.77226 5.96669L6.19893 6.78933C6.26709 6.9207 6.26709 7.07535 6.19893 7.20672L5.77226 8.02931ZM5.77226 12.6946C5.59388 13.0386 5.08474 13.0386 4.90634 12.6946L4.4797 11.872C4.41155 11.7406 4.41155 11.586 4.4797 11.4546L4.90634 10.632C5.08474 10.288 5.59388 10.288 5.77226 10.632L6.19893 11.4546C6.26709 11.586 6.26709 11.7406 6.19893 11.872L5.77226 12.6946Z',
                                    fill: '#1D4AFF',
                                }),
                                ze('path', {
                                    d: 'M0.5 10.9238C0.5 10.508 1.02142 10.2998 1.32637 10.5938L3.54508 12.7327C3.85003 13.0267 3.63405 13.5294 3.20279 13.5294H0.984076C0.716728 13.5294 0.5 13.3205 0.5 13.0627V10.9238ZM0.5 8.67083C0.5 8.79459 0.551001 8.91331 0.641783 9.00081L5.19753 13.3927C5.28831 13.4802 5.41144 13.5294 5.53982 13.5294H8.0421C8.47337 13.5294 8.68936 13.0267 8.3844 12.7327L1.32637 5.92856C1.02142 5.63456 0.5 5.84278 0.5 6.25854V8.67083ZM0.5 4.00556C0.5 4.12932 0.551001 4.24802 0.641783 4.33554L10.0368 13.3927C10.1276 13.4802 10.2508 13.5294 10.3791 13.5294H12.8814C13.3127 13.5294 13.5287 13.0267 13.2237 12.7327L1.32637 1.26329C1.02142 0.969312 0.5 1.17752 0.5 1.59327V4.00556ZM5.33931 4.00556C5.33931 4.12932 5.39033 4.24802 5.4811 4.33554L14.1916 12.7327C14.4965 13.0267 15.0179 12.8185 15.0179 12.4028V9.99047C15.0179 9.86671 14.9669 9.74799 14.8762 9.66049L6.16568 1.26329C5.86071 0.969307 5.33931 1.17752 5.33931 1.59327V4.00556ZM11.005 1.26329C10.7 0.969307 10.1786 1.17752 10.1786 1.59327V4.00556C10.1786 4.12932 10.2296 4.24802 10.3204 4.33554L14.1916 8.06748C14.4965 8.36148 15.0179 8.15325 15.0179 7.7375V5.3252C15.0179 5.20144 14.9669 5.08272 14.8762 4.99522L11.005 1.26329Z',
                                    fill: '#F9BD2B',
                                }),
                                ze('path', {
                                    d: 'M21.0852 10.981L16.5288 6.58843C16.2238 6.29443 15.7024 6.50266 15.7024 6.91841V13.0627C15.7024 13.3205 15.9191 13.5294 16.1865 13.5294H23.2446C23.5119 13.5294 23.7287 13.3205 23.7287 13.0627V12.5032C23.7287 12.2455 23.511 12.0396 23.2459 12.0063C22.4323 11.9042 21.6713 11.546 21.0852 10.981ZM18.0252 12.0365C17.5978 12.0365 17.251 11.7021 17.251 11.2901C17.251 10.878 17.5978 10.5436 18.0252 10.5436C18.4527 10.5436 18.7996 10.878 18.7996 11.2901C18.7996 11.7021 18.4527 12.0365 18.0252 12.0365Z',
                                    fill: 'currentColor',
                                }),
                                ze('path', {
                                    d: 'M0.5 13.0627C0.5 13.3205 0.716728 13.5294 0.984076 13.5294H3.20279C3.63405 13.5294 3.85003 13.0267 3.54508 12.7327L1.32637 10.5938C1.02142 10.2998 0.5 10.508 0.5 10.9238V13.0627ZM5.33931 5.13191L1.32637 1.26329C1.02142 0.969306 0.5 1.17752 0.5 1.59327V4.00556C0.5 4.12932 0.551001 4.24802 0.641783 4.33554L5.33931 8.86412V5.13191ZM1.32637 5.92855C1.02142 5.63455 0.5 5.84278 0.5 6.25853V8.67083C0.5 8.79459 0.551001 8.91331 0.641783 9.00081L5.33931 13.5294V9.79717L1.32637 5.92855Z',
                                    fill: '#1D4AFF',
                                }),
                                ze('path', {
                                    d: 'M10.1787 5.3252C10.1787 5.20144 10.1277 5.08272 10.0369 4.99522L6.16572 1.26329C5.8608 0.969306 5.33936 1.17752 5.33936 1.59327V4.00556C5.33936 4.12932 5.39037 4.24802 5.48114 4.33554L10.1787 8.86412V5.3252ZM5.33936 13.5294H8.04214C8.47341 13.5294 8.6894 13.0267 8.38443 12.7327L5.33936 9.79717V13.5294ZM5.33936 5.13191V8.67083C5.33936 8.79459 5.39037 8.91331 5.48114 9.00081L10.1787 13.5294V9.99047C10.1787 9.86671 10.1277 9.74803 10.0369 9.66049L5.33936 5.13191Z',
                                    fill: '#F54E00',
                                }),
                                ze('path', {
                                    d: 'M29.375 11.6667H31.3636V8.48772H33.0249C34.8499 8.48772 36.0204 7.4443 36.0204 5.83052C36.0204 4.21681 34.8499 3.17334 33.0249 3.17334H29.375V11.6667ZM31.3636 6.84972V4.81136H32.8236C33.5787 4.81136 34.0318 5.19958 34.0318 5.83052C34.0318 6.4615 33.5787 6.84972 32.8236 6.84972H31.3636ZM39.618 11.7637C41.5563 11.7637 42.9659 10.429 42.9659 8.60905C42.9659 6.78905 41.5563 5.45438 39.618 5.45438C37.6546 5.45438 36.2701 6.78905 36.2701 8.60905C36.2701 10.429 37.6546 11.7637 39.618 11.7637ZM38.1077 8.60905C38.1077 7.63838 38.7118 6.97105 39.618 6.97105C40.5116 6.97105 41.1157 7.63838 41.1157 8.60905C41.1157 9.57972 40.5116 10.2471 39.618 10.2471C38.7118 10.2471 38.1077 9.57972 38.1077 8.60905ZM46.1482 11.7637C47.6333 11.7637 48.6402 10.8658 48.6402 9.81025C48.6402 7.33505 45.2294 8.13585 45.2294 7.16518C45.2294 6.8983 45.5189 6.72843 45.9342 6.72843C46.3622 6.72843 46.8782 6.98318 47.0418 7.54132L48.527 6.94678C48.2375 6.06105 47.1677 5.45438 45.8713 5.45438C44.4743 5.45438 43.6058 6.25518 43.6058 7.21372C43.6058 9.53118 46.9663 8.88812 46.9663 9.84665C46.9663 10.1864 46.6391 10.417 46.1482 10.417C45.4434 10.417 44.9525 9.94376 44.8015 9.3735L43.3164 9.93158C43.6436 10.8537 44.6001 11.7637 46.1482 11.7637ZM53.4241 11.606L53.2982 10.0651C53.0843 10.1743 52.8074 10.2106 52.5808 10.2106C52.1278 10.2106 51.8257 9.89523 51.8257 9.34918V7.03172H53.3612V5.55145H51.8257V3.78001H49.9755V5.55145H48.9687V7.03172H49.9755V9.57972C49.9755 11.06 51.0202 11.7637 52.3921 11.7637C52.7696 11.7637 53.122 11.7031 53.4241 11.606ZM59.8749 3.17334V6.47358H56.376V3.17334H54.3874V11.6667H56.376V8.11158H59.8749V11.6667H61.8761V3.17334H59.8749ZM66.2899 11.7637C68.2281 11.7637 69.6378 10.429 69.6378 8.60905C69.6378 6.78905 68.2281 5.45438 66.2899 5.45438C64.3265 5.45438 62.942 6.78905 62.942 8.60905C62.942 10.429 64.3265 11.7637 66.2899 11.7637ZM64.7796 8.60905C64.7796 7.63838 65.3837 6.97105 66.2899 6.97105C67.1835 6.97105 67.7876 7.63838 67.7876 8.60905C67.7876 9.57972 67.1835 10.2471 66.2899 10.2471C65.3837 10.2471 64.7796 9.57972 64.7796 8.60905ZM73.2088 11.4725C73.901 11.4725 74.5177 11.242 74.845 10.8416V11.424C74.845 12.1034 74.2786 12.5767 73.4102 12.5767C72.7935 12.5767 72.2523 12.2854 72.1642 11.788L70.4776 12.0428C70.7042 13.1955 71.925 13.972 73.4102 13.972C75.361 13.972 76.6574 12.8679 76.6574 11.2298V5.55145H74.8324V6.07318C74.4926 5.69705 73.9136 5.45438 73.171 5.45438C71.409 5.45438 70.3014 6.61918 70.3014 8.46345C70.3014 10.3077 71.409 11.4725 73.2088 11.4725ZM72.1012 8.46345C72.1012 7.55345 72.655 6.97105 73.5109 6.97105C74.3793 6.97105 74.9331 7.55345 74.9331 8.46345C74.9331 9.37345 74.3793 9.95585 73.5109 9.95585C72.655 9.95585 72.1012 9.37345 72.1012 8.46345Z',
                                    fill: 'currentColor',
                                }),
                            ],
                        }),
                    ],
                }),
                ze('defs', {
                    children: ze('clipPath', {
                        id: 'clip0_2415_6911',
                        children: ze('rect', { width: '76', height: '14', fill: 'white', transform: 'translate(0.5)' }),
                    }),
                }),
            ],
        }),
        tn = ze('svg', {
            width: '16',
            height: '12',
            viewBox: '0 0 16 12',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: ze('path', {
                d: 'M5.30769 10.6923L4.77736 11.2226C4.91801 11.3633 5.10878 11.4423 5.30769 11.4423C5.5066 11.4423 5.69737 11.3633 5.83802 11.2226L5.30769 10.6923ZM15.5303 1.53033C15.8232 1.23744 15.8232 0.762563 15.5303 0.46967C15.2374 0.176777 14.7626 0.176777 14.4697 0.46967L15.5303 1.53033ZM1.53033 5.85429C1.23744 5.56139 0.762563 5.56139 0.46967 5.85429C0.176777 6.14718 0.176777 6.62205 0.46967 6.91495L1.53033 5.85429ZM5.83802 11.2226L15.5303 1.53033L14.4697 0.46967L4.77736 10.162L5.83802 11.2226ZM0.46967 6.91495L4.77736 11.2226L5.83802 10.162L1.53033 5.85429L0.46967 6.91495Z',
                fill: 'currentColor',
            }),
        })
    function on() {
        return ze('a', {
            href: 'https://posthog.com',
            target: '_blank',
            rel: 'noopener',
            className: 'footer-branding',
            children: ['Survey by ', nn],
        })
    }
    function rn(e) {
        var n = e.text,
            t = e.submitDisabled,
            o = e.appearance,
            r = e.onSubmit,
            i = e.link,
            a = De(_e),
            l = a.isPreviewMode,
            c = a.isPopup,
            u = o.submitButtonTextColor || oe(o.submitButtonColor || re.submitButtonColor)
        return ze('div', {
            className: 'bottom-section',
            children: [
                ze('div', {
                    className: 'buttons',
                    children: ze('button', {
                        className: 'form-submit',
                        disabled: t && !l,
                        type: 'button',
                        style: c ? { color: u } : {},
                        onClick: function () {
                            l || (i && (null == d || d.open(i)), r())
                        },
                        children: n,
                    }),
                }),
                !o.whiteLabel && ze(on, {}),
            ],
        })
    }
    function an(e) {
        var n = e.question,
            t = e.description,
            o = e.descriptionContentType,
            r = e.backgroundColor,
            i = e.forceDisableHtml
        return ze('div', {
            style: De(_e).isPopup ? { backgroundColor: r || re.backgroundColor } : {},
            children: [
                ze('div', { className: 'survey-question', children: n }),
                t &&
                    ve({
                        component: L('div', { className: 'survey-question-description' }),
                        children: t,
                        renderAsHtml: !i && 'text' !== o,
                    }),
            ],
        })
    }
    function ln(e) {
        return ze('div', {
            className: 'cancel-btn-wrapper',
            children: ze('button', {
                className: 'form-cancel',
                onClick: e.onClick,
                disabled: De(_e).isPreviewMode,
                children: en,
            }),
        })
    }
    function cn(e) {
        var t = e.header,
            o = e.description,
            r = e.contentType,
            i = e.forceDisableHtml,
            a = e.appearance,
            l = e.onClose,
            c = e.styleOverrides,
            u = oe(a.backgroundColor || re.backgroundColor),
            s = De(_e).isPopup
        return ze(I, {
            children: ze('div', {
                className: 'thank-you-message',
                style: n({}, c),
                children: ze('div', {
                    className: 'thank-you-message-container',
                    children: [
                        s &&
                            ze(ln, {
                                onClick: function () {
                                    return l()
                                },
                            }),
                        ze('h3', { className: 'thank-you-message-header', style: { color: u }, children: t }),
                        o &&
                            ve({
                                component: L('div', { className: 'thank-you-message-body' }),
                                children: o,
                                renderAsHtml: !i && 'text' !== r,
                                style: { color: u },
                            }),
                        s &&
                            ze(rn, {
                                text: a.thankYouMessageCloseButtonText || 'Close',
                                submitDisabled: !1,
                                appearance: a,
                                onSubmit: function () {
                                    return l()
                                },
                            }),
                    ],
                }),
            }),
        })
    }
    function un(e) {
        var n,
            t = Ie(null),
            o = r(Le(null !== (n = e.defaultTextColor) && void 0 !== n ? n : 'black'), 2),
            i = o[0],
            a = o[1]
        return (
            Me(
                function () {
                    if (t.current) {
                        var e = (function (e) {
                            var n = K.getComputedStyle(e).backgroundColor
                            if ('rgba(0, 0, 0, 0)' === n) return 'black'
                            var t = n.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)
                            if (!t) return 'black'
                            var o = parseInt(t[1]),
                                r = parseInt(t[2]),
                                i = parseInt(t[3])
                            return Math.sqrt(o * o * 0.299 + r * r * 0.587 + i * i * 0.114) > 127.5 ? 'black' : 'white'
                        })(t.current)
                        a(e)
                    }
                },
                [e.appearance, e.forceUpdate]
            ),
            { ref: t, textColor: i }
        )
    }
    function sn(e) {
        var n = e.question,
            t = e.forceDisableHtml,
            o = e.appearance,
            i = e.onSubmit,
            a = Ie(null),
            l = r(Le(''), 2),
            c = l[0],
            u = l[1]
        return ze('div', {
            ref: a,
            children: [
                ze(an, {
                    question: n.question,
                    description: n.description,
                    descriptionContentType: n.descriptionContentType,
                    backgroundColor: o.backgroundColor,
                    forceDisableHtml: t,
                }),
                ze('textarea', {
                    rows: 4,
                    placeholder: null == o ? void 0 : o.placeholder,
                    onInput: function (e) {
                        return u(e.currentTarget.value)
                    },
                }),
                ze(rn, {
                    text: n.buttonText || 'Submit',
                    submitDisabled: !c && !n.optional,
                    appearance: o,
                    onSubmit: function () {
                        return i(c)
                    },
                }),
            ],
        })
    }
    function dn(e) {
        var n = e.question,
            t = e.forceDisableHtml,
            o = e.appearance,
            r = e.onSubmit
        return ze(I, {
            children: [
                ze(an, {
                    question: n.question,
                    description: n.description,
                    descriptionContentType: n.descriptionContentType,
                    forceDisableHtml: t,
                }),
                ze(rn, {
                    text: n.buttonText || 'Submit',
                    submitDisabled: !1,
                    link: n.link,
                    appearance: o,
                    onSubmit: function () {
                        return r('link clicked')
                    },
                }),
            ],
        })
    }
    function pn(e) {
        var n = e.question,
            t = e.forceDisableHtml,
            o = e.displayQuestionIndex,
            i = e.appearance,
            a = e.onSubmit,
            l = n.scale,
            c = 10 === n.scale ? 0 : 1,
            u = r(Le(null), 2),
            s = u[0],
            d = u[1]
        return ze(I, {
            children: [
                ze(an, {
                    question: n.question,
                    description: n.description,
                    descriptionContentType: n.descriptionContentType,
                    forceDisableHtml: t,
                    backgroundColor: i.backgroundColor,
                }),
                ze('div', {
                    className: 'rating-section',
                    children: [
                        ze('div', {
                            className: 'rating-options',
                            children: [
                                'emoji' === n.display &&
                                    ze('div', {
                                        className: 'rating-options-emoji',
                                        children: (3 === n.scale ? vn : hn).map(function (e, n) {
                                            var t = n + 1 === s
                                            return ze(
                                                'button',
                                                {
                                                    className: 'ratings-emoji question-'
                                                        .concat(o, '-rating-')
                                                        .concat(n, ' ')
                                                        .concat(t ? 'rating-active' : null),
                                                    value: n + 1,
                                                    type: 'button',
                                                    onClick: function () {
                                                        d(n + 1)
                                                    },
                                                    style: {
                                                        fill: t ? i.ratingButtonActiveColor : i.ratingButtonColor,
                                                        borderColor: i.borderColor,
                                                    },
                                                    children: e,
                                                },
                                                n
                                            )
                                        }),
                                    }),
                                'number' === n.display &&
                                    ze('div', {
                                        className: 'rating-options-number',
                                        style: {
                                            gridTemplateColumns: 'repeat('.concat(l - c + 1, ', minmax(0, 1fr))'),
                                        },
                                        children: bn(n.scale).map(function (e, n) {
                                            return ze(
                                                fn,
                                                {
                                                    displayQuestionIndex: o,
                                                    active: s === e,
                                                    appearance: i,
                                                    num: e,
                                                    setActiveNumber: function (e) {
                                                        d(e)
                                                    },
                                                },
                                                n
                                            )
                                        }),
                                    }),
                            ],
                        }),
                        ze('div', {
                            className: 'rating-text',
                            children: [
                                ze('div', { children: n.lowerBoundLabel }),
                                ze('div', { children: n.upperBoundLabel }),
                            ],
                        }),
                    ],
                }),
                ze(rn, {
                    text: n.buttonText || (null == i ? void 0 : i.submitButtonText) || 'Submit',
                    submitDisabled: Ue(s) && !n.optional,
                    appearance: i,
                    onSubmit: function () {
                        return a(s)
                    },
                }),
            ],
        })
    }
    function fn(e) {
        var n = e.num,
            t = e.active,
            o = e.displayQuestionIndex,
            r = e.appearance,
            i = e.setActiveNumber,
            a = un({ appearance: r, defaultTextColor: 'black', forceUpdate: t }),
            l = a.textColor
        return ze('button', {
            ref: a.ref,
            className: 'ratings-number question-'
                .concat(o, '-rating-')
                .concat(n, ' ')
                .concat(t ? 'rating-active' : null),
            type: 'button',
            onClick: function () {
                i(n)
            },
            style: {
                color: l,
                backgroundColor: t ? r.ratingButtonActiveColor : r.ratingButtonColor,
                borderColor: r.borderColor,
            },
            children: n,
        })
    }
    function _n(e) {
        var n = e.question,
            t = e.forceDisableHtml,
            o = e.displayQuestionIndex,
            a = e.appearance,
            l = e.onSubmit,
            c = Ie(null),
            s = Ee(
                function () {
                    return (function (e) {
                        if (!e.shuffleOptions) return e.choices
                        var n = e.choices,
                            t = ''
                        e.hasOpenChoice && (t = n.pop())
                        var o = ue(n, ce(n))
                        return e.hasOpenChoice && (e.choices.push(t), o.push(t)), o
                    })(n)
                },
                [n]
            ),
            d = r(Le(n.type === u.MultipleChoice ? [] : null), 2),
            p = d[0],
            f = d[1],
            _ = r(Le(!1), 2),
            v = _[0],
            h = _[1],
            g = r(Le(''), 2),
            y = g[0],
            m = g[1],
            b = n.type === u.SingleChoice ? 'radio' : 'checkbox'
        return ze('div', {
            ref: c,
            children: [
                ze(an, {
                    question: n.question,
                    description: n.description,
                    descriptionContentType: n.descriptionContentType,
                    forceDisableHtml: t,
                    backgroundColor: a.backgroundColor,
                }),
                ze('div', {
                    className: 'multiple-choice-options',
                    children: s.map(function (e, t) {
                        var r = 'choice-option',
                            a = e,
                            l = e
                        return (
                            n.hasOpenChoice && t === n.choices.length - 1 && (r += ' choice-option-open'),
                            ze('div', {
                                className: r,
                                children: [
                                    ze('input', {
                                        type: b,
                                        id: 'surveyQuestion'.concat(o, 'Choice').concat(t),
                                        name: 'question'.concat(o),
                                        value: a,
                                        disabled: !a,
                                        onInput: function () {
                                            return n.hasOpenChoice && t === n.choices.length - 1
                                                ? h(!v)
                                                : n.type === u.SingleChoice
                                                ? f(a)
                                                : n.type === u.MultipleChoice && We(p)
                                                ? p.includes(a)
                                                    ? f(
                                                          p.filter(function (e) {
                                                              return e !== a
                                                          })
                                                      )
                                                    : f([].concat(i(p), [a]))
                                                : void 0
                                        },
                                    }),
                                    ze('label', {
                                        htmlFor: 'surveyQuestion'.concat(o, 'Choice').concat(t),
                                        style: { color: 'black' },
                                        children:
                                            n.hasOpenChoice && t === n.choices.length - 1
                                                ? ze(I, {
                                                      children: [
                                                          ze('span', { children: [l, ':'] }),
                                                          ze('input', {
                                                              type: 'text',
                                                              id: 'surveyQuestion'
                                                                  .concat(o, 'Choice')
                                                                  .concat(t, 'Open'),
                                                              name: 'question'.concat(o),
                                                              onInput: function (e) {
                                                                  var t = e.currentTarget.value
                                                                  return n.type === u.SingleChoice
                                                                      ? f(t)
                                                                      : n.type === u.MultipleChoice && We(p)
                                                                      ? m(t)
                                                                      : void 0
                                                              },
                                                          }),
                                                      ],
                                                  })
                                                : l,
                                    }),
                                    ze('span', { className: 'choice-check', style: { color: 'black' }, children: tn }),
                                ],
                            })
                        )
                    }),
                }),
                ze(rn, {
                    text: n.buttonText || 'Submit',
                    submitDisabled:
                        (Ue(p) ||
                            (We(p) && !v && 0 === p.length) ||
                            (We(p) && v && !y && 0 === p.length && !n.optional)) &&
                        !n.optional,
                    appearance: a,
                    onSubmit: function () {
                        v && n.type === u.MultipleChoice ? We(p) && l([].concat(i(p), [y])) : l(p)
                    },
                }),
            ],
        })
    }
    var vn = [Xe, Ge, Ye],
        hn = [Je, Xe, Ge, Ye, Ke],
        gn = [1, 2, 3, 4, 5],
        yn = [1, 2, 3, 4, 5, 6, 7],
        mn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    function bn(e) {
        switch (e) {
            case 5:
            default:
                return gn
            case 7:
                return yn
            case 10:
                return mn
        }
    }
    var Cn = '[PostHog.js]',
        xn = {
            _log: function (e) {
                if (
                    d &&
                    k.POSTHOG_DEBUG &&
                    !(function (e) {
                        return void 0 === e
                    })(d.console) &&
                    d.console
                ) {
                    for (
                        var n = ('__rrweb_original__' in d.console[e]) ? d.console[e].__rrweb_original__ : d.console[e],
                            t = arguments.length,
                            o = new Array(t > 1 ? t - 1 : 0),
                            r = 1;
                        r < t;
                        r++
                    )
                        o[r - 1] = arguments[r]
                    n.apply(void 0, [Cn].concat(o))
                }
            },
            info: function () {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t]
                xn._log.apply(xn, ['log'].concat(n))
            },
            warn: function () {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t]
                xn._log.apply(xn, ['warn'].concat(n))
            },
            error: function () {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t]
                xn._log.apply(xn, ['error'].concat(n))
            },
            critical: function () {
                for (var e, n = arguments.length, t = new Array(n), o = 0; o < n; o++) t[o] = arguments[o]
                ;(e = console).error.apply(e, [Cn].concat(t))
            },
            uninitializedWarning: function (e) {
                xn.error('You must initialize PostHog before calling '.concat(e))
            },
        },
        kn = d,
        wn = _,
        Sn = (function () {
            function e(n) {
                var t = this
                !(function (e, n) {
                    if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function')
                })(this, e),
                    o(this, 'canShowNextEventBasedSurvey', function () {
                        var e,
                            n = wn.querySelectorAll('div[class^=PostHogSurvey]')
                        return (
                            !(n.length > 0) ||
                            1 ===
                                (null === (e = n[n.length - 1].shadowRoot) || void 0 === e
                                    ? void 0
                                    : e.childElementCount)
                        )
                    }),
                    o(this, 'handlePopoverSurvey', function (e) {
                        var n,
                            o = null === (n = e.conditions) || void 0 === n ? void 0 : n.seenSurveyWaitPeriodInDays,
                            r = localStorage.getItem('lastSeenSurveyDate')
                        if (o && r) {
                            var i = new Date(),
                                a = Math.abs(i.getTime() - new Date(r).getTime())
                            if (Math.ceil(a / 864e5) < o) return
                        }
                        var l = (function (e) {
                            return !!localStorage.getItem(pe(e)) && !de(e)
                        })(e)
                        if (!l) {
                            t.addSurveyToFocus(e.id)
                            var c = (function (e, n, t) {
                                var o = ee.createElement('div')
                                o.className = 'PostHogSurvey'.concat(n)
                                var r = o.attachShadow({ mode: 'open' })
                                if (e) {
                                    var i = Object.assign(ee.createElement('style'), { innerText: e })
                                    r.appendChild(i)
                                }
                                return (t || ee.body).appendChild(o), r
                            })(ne(null == e ? void 0 : e.appearance), e.id)
                            X(
                                ze(
                                    Tn,
                                    {
                                        posthog: t.posthog,
                                        survey: e,
                                        removeSurveyFromFocus: t.removeSurveyFromFocus,
                                        isPopup: !0,
                                    },
                                    'popover-survey'
                                ),
                                c
                            )
                        }
                    }),
                    o(this, 'handleWidget', function (e) {
                        var n = (function (e) {
                                var n,
                                    t = he.createElement('div')
                                t.className = 'PostHogWidget'.concat(e.id)
                                var o,
                                    r = t.attachShadow({ mode: 'open' }),
                                    i =
                                        ((o = null === (n = e.appearance) || void 0 === n ? void 0 : n.widgetColor),
                                        '\n        .ph-survey-widget-tab {\n            position: fixed;\n            top: 50%;\n            right: 0;\n            background: '.concat(
                                            o || '#e0a045',
                                            ';\n            color: white;\n            transform: rotate(-90deg) translate(0, -100%);\n            transform-origin: right top;\n            min-width: 40px;\n            padding: 8px 12px;\n            font-weight: 500;\n            border-radius: 3px 3px 0 0;\n            text-align: center;\n            cursor: pointer;\n            z-index: 9999999;\n        }\n        .ph-survey-widget-tab:hover {\n            padding-bottom: 13px;\n        }\n        .ph-survey-widget-button {\n            position: fixed;\n        }\n    '
                                        ))
                                return (
                                    r.append(Object.assign(he.createElement('style'), { innerText: i })),
                                    he.body.appendChild(t),
                                    r
                                )
                            })(e),
                            o = ne(e.appearance)
                        n.appendChild(Object.assign(wn.createElement('style'), { innerText: o })),
                            X(
                                ze(
                                    Pn,
                                    { posthog: t.posthog, survey: e, removeSurveyFromFocus: t.removeSurveyFromFocus },
                                    'feedback-survey'
                                ),
                                n
                            )
                    }),
                    o(this, 'handleWidgetSelector', function (e) {
                        var n,
                            o =
                                (null === (n = e.appearance) || void 0 === n ? void 0 : n.widgetSelector) &&
                                wn.querySelector(e.appearance.widgetSelector)
                        if (o)
                            if (0 === wn.querySelectorAll('.PostHogWidget'.concat(e.id)).length) t.handleWidget(e)
                            else if (
                                1 === wn.querySelectorAll('.PostHogWidget'.concat(e.id)).length &&
                                !o.getAttribute('PHWidgetSurveyClickListener')
                            ) {
                                var r,
                                    i,
                                    a =
                                        null === (r = wn.querySelector('.PostHogWidget'.concat(e.id))) ||
                                        void 0 === r ||
                                        null === (i = r.shadowRoot) ||
                                        void 0 === i
                                            ? void 0
                                            : i.querySelector('.survey-form')
                                o.addEventListener('click', function () {
                                    a &&
                                        ((a.style.display = 'none' === a.style.display ? 'block' : 'none'),
                                        a.addEventListener('PHSurveyClosed', function () {
                                            t.removeSurveyFromFocus(e.id), (a.style.display = 'none')
                                        }))
                                }),
                                    o.setAttribute('PHWidgetSurveyClickListener', 'true')
                            }
                    }),
                    o(this, 'canRenderSurvey', function (e) {
                        var n = { visible: !1 }
                        return e.end_date
                            ? ((n.disabledReason = 'survey was completed on '.concat(e.end_date)), n)
                            : e.type != c.Popover
                            ? ((n.disabledReason = 'Only Popover survey types can be rendered'), n)
                            : !e.linked_flag_key || t.posthog.featureFlags.isFeatureEnabled(e.linked_flag_key)
                            ? !e.targeting_flag_key || t.posthog.featureFlags.isFeatureEnabled(e.targeting_flag_key)
                                ? !e.internal_targeting_flag_key ||
                                  t.posthog.featureFlags.isFeatureEnabled(e.internal_targeting_flag_key)
                                    ? ((n.visible = !0), n)
                                    : ((n.disabledReason = 'internal targeting feature flag '.concat(
                                          e.internal_targeting_flag_key,
                                          ' is false'
                                      )),
                                      n)
                                : ((n.disabledReason = 'targeting feature flag '.concat(
                                      e.targeting_flag_key,
                                      ' is false'
                                  )),
                                  n)
                            : ((n.disabledReason = 'linked feature flag '.concat(e.linked_flag_key, ' is false')), n)
                    }),
                    o(this, 'renderSurvey', function (e, n) {
                        X(
                            ze(
                                Tn,
                                {
                                    posthog: t.posthog,
                                    survey: e,
                                    removeSurveyFromFocus: t.removeSurveyFromFocus,
                                    isPopup: !1,
                                },
                                'popover-survey'
                            ),
                            n
                        )
                    }),
                    o(this, 'callSurveysAndEvaluateDisplayLogic', function () {
                        var e,
                            n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                        null === (e = t.posthog) ||
                            void 0 === e ||
                            e.getActiveMatchingSurveys(function (e) {
                                var n = e.filter(function (e) {
                                    return 'api' !== e.type
                                })
                                t.sortSurveysByAppearanceDelay(n).forEach(function (e) {
                                    if (Ue(t.surveyInFocus)) {
                                        var n, o, r
                                        if (e.type === c.Widget)
                                            'tab' ===
                                                (null === (n = e.appearance) || void 0 === n ? void 0 : n.widgetType) &&
                                                0 === wn.querySelectorAll('.PostHogWidget'.concat(e.id)).length &&
                                                t.handleWidget(e),
                                                'selector' ===
                                                    (null === (o = e.appearance) || void 0 === o
                                                        ? void 0
                                                        : o.widgetType) &&
                                                    null !== (r = e.appearance) &&
                                                    void 0 !== r &&
                                                    r.widgetSelector &&
                                                    t.handleWidgetSelector(e)
                                        e.type === c.Popover &&
                                            t.canShowNextEventBasedSurvey() &&
                                            t.handlePopoverSurvey(e)
                                    }
                                })
                            }, n)
                    }),
                    o(this, 'addSurveyToFocus', function (e) {
                        Ue(t.surveyInFocus) ||
                            xn.error(
                                'Survey '
                                    .concat(i(t.surveyInFocus), ' already in focus. Cannot add survey ')
                                    .concat(e, '.')
                            ),
                            (t.surveyInFocus = e)
                    }),
                    o(this, 'removeSurveyFromFocus', function (e) {
                        t.surveyInFocus !== e &&
                            xn.error('Survey '.concat(e, ' is not in focus. Cannot remove survey ').concat(e, '.')),
                            (t.surveyInFocus = null)
                    }),
                    (this.posthog = n),
                    (this.surveyInFocus = null)
            }
            var n, r, a
            return (
                (n = e),
                (r = [
                    {
                        key: 'sortSurveysByAppearanceDelay',
                        value: function (e) {
                            return e.sort(function (e, n) {
                                var t, o
                                return (
                                    ((null === (t = e.appearance) || void 0 === t
                                        ? void 0
                                        : t.surveyPopupDelaySeconds) || 0) -
                                    ((null === (o = n.appearance) || void 0 === o
                                        ? void 0
                                        : o.surveyPopupDelaySeconds) || 0)
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
                r && t(n.prototype, r),
                a && t(n, a),
                Object.defineProperty(n, 'prototype', { writable: !1 }),
                e
            )
        })()
    function qn(e) {
        if (wn && kn) {
            var n = new Sn(e)
            return (
                n.callSurveysAndEvaluateDisplayLogic(!0),
                setInterval(function () {
                    n.callSurveysAndEvaluateDisplayLogic(!1)
                }, 1e3),
                n
            )
        }
    }
    function Tn(e) {
        var t,
            o,
            i,
            a,
            l,
            c,
            u = e.survey,
            s = e.forceDisableHtml,
            d = e.posthog,
            p = e.style,
            f = e.previewPageIndex,
            _ = e.removeSurveyFromFocus,
            v = e.isPopup,
            h = Number.isInteger(f),
            g =
                null !== (t = u.appearance) && void 0 !== t && t.surveyPopupDelaySeconds
                    ? 1e3 * u.appearance.surveyPopupDelaySeconds
                    : 0,
            y = (function (e, n, t, o, i) {
                var a = r(Le(o || 0 === t), 2),
                    l = a[0],
                    c = a[1],
                    u = r(Le(!1), 2),
                    s = u[0],
                    d = u[1]
                return (
                    Me(function () {
                        if (!o && n) {
                            var r,
                                a = function () {
                                    i(e.id), c(!1)
                                },
                                l = function () {
                                    var n, t
                                    null !== (n = e.appearance) && void 0 !== n && n.displayThankYouMessage
                                        ? (d(!0),
                                          i(e.id),
                                          null !== (t = e.appearance) &&
                                              void 0 !== t &&
                                              t.autoDisappear &&
                                              setTimeout(function () {
                                                  c(!1)
                                              }, 5e3))
                                        : (i(e.id), c(!1))
                                },
                                u = function () {
                                    var t
                                    c(!0),
                                        kn.dispatchEvent(new Event('PHSurveyShown')),
                                        n.capture('survey shown', {
                                            $survey_name: e.name,
                                            $survey_id: e.id,
                                            $survey_iteration: e.current_iteration,
                                            $survey_iteration_start_date: e.current_iteration_start_date,
                                            sessionRecordingUrl:
                                                null === (t = n.get_session_replay_url) || void 0 === t
                                                    ? void 0
                                                    : t.call(n),
                                        }),
                                        localStorage.setItem('lastSeenSurveyDate', new Date().toISOString())
                                }
                            return (
                                kn.addEventListener('PHSurveyClosed', a),
                                kn.addEventListener('PHSurveySent', l),
                                t > 0
                                    ? ((r = setTimeout(function () {
                                          u()
                                      }, t)),
                                      function () {
                                          clearTimeout(r),
                                              kn.removeEventListener('PHSurveyClosed', a),
                                              kn.removeEventListener('PHSurveySent', l)
                                      })
                                    : (u(),
                                      function () {
                                          kn.removeEventListener('PHSurveyClosed', a),
                                              kn.removeEventListener('PHSurveySent', l)
                                      })
                            )
                        }
                    }, []),
                    { isPopupVisible: l, isSurveySent: s, setIsPopupVisible: c }
                )
            })(u, d, g, h, _),
            m = y.isPopupVisible,
            b = y.isSurveySent,
            C = y.setIsPopupVisible,
            x = b || f === u.questions.length,
            k =
                null !== (o = p) && void 0 !== o && o.left && Re(null === (i = p) || void 0 === i ? void 0 : i.left)
                    ? { left: p.left - 40 }
                    : {}
        return (
            h && (((p = p || {}).left = 'unset'), (p.right = 'unset'), (p.transform = 'unset')),
            m
                ? ze(_e.Provider, {
                      value: {
                          isPreviewMode: h,
                          previewPageIndex: f,
                          handleCloseSurveyPopup: function () {
                              return le(u, d, h)
                          },
                          isPopup: v || !1,
                      },
                      children: x
                          ? ze(cn, {
                                header:
                                    (null === (a = u.appearance) || void 0 === a ? void 0 : a.thankYouMessageHeader) ||
                                    'Thank you!',
                                description:
                                    (null === (l = u.appearance) || void 0 === l
                                        ? void 0
                                        : l.thankYouMessageDescription) || '',
                                forceDisableHtml: !!s,
                                contentType:
                                    null === (c = u.appearance) || void 0 === c
                                        ? void 0
                                        : c.thankYouMessageDescriptionContentType,
                                appearance: u.appearance || re,
                                styleOverrides: n(n({}, p), k),
                                onClose: function () {
                                    return C(!1)
                                },
                            })
                          : ze(Hn, { survey: u, forceDisableHtml: !!s, posthog: d, styleOverrides: p }),
                  })
                : ze(I, {})
        )
    }
    function Hn(e) {
        var t,
            i,
            a = e.survey,
            l = e.forceDisableHtml,
            c = e.posthog,
            u = e.styleOverrides,
            d = oe((null === (t = a.appearance) || void 0 === t ? void 0 : t.backgroundColor) || re.backgroundColor),
            p = r(Le({}), 2),
            f = p[0],
            _ = p[1],
            v = De(_e),
            h = v.isPreviewMode,
            g = v.previewPageIndex,
            y = v.handleCloseSurveyPopup,
            m = v.isPopup,
            b = r(Le(g || 0), 2),
            C = b[0],
            x = b[1],
            k = Ee(
                function () {
                    return se(a)
                },
                [a]
            )
        Me(
            function () {
                x(null != g ? g : 0)
            },
            [g]
        )
        return ze('form', {
            className: 'survey-form',
            style: m
                ? n({ color: d, borderColor: null === (i = a.appearance) || void 0 === i ? void 0 : i.borderColor }, u)
                : {},
            children: k.map(function (e, t) {
                var r,
                    i = e.originalQuestionIndex
                return (
                    (h ? C === i : C === t) &&
                    ze('div', {
                        className: 'survey-box',
                        style: m
                            ? {
                                  backgroundColor:
                                      (null === (r = a.appearance) || void 0 === r ? void 0 : r.backgroundColor) ||
                                      re.backgroundColor,
                              }
                            : {},
                        children: [
                            m &&
                                ze(ln, {
                                    onClick: function () {
                                        return y()
                                    },
                                }),
                            Ln({
                                question: e,
                                forceDisableHtml: l,
                                displayQuestionIndex: t,
                                appearance: a.appearance || re,
                                onSubmit: function (e) {
                                    return (function (e) {
                                        var t = e.res,
                                            r = e.originalQuestionIndex,
                                            i = e.displayQuestionIndex
                                        if (c) {
                                            var l = 0 === r ? '$survey_response' : '$survey_response_'.concat(r)
                                            if ((_(n(n({}, f), {}, o({}, l, t))), c.getNextSurveyStep)) {
                                                var u = c.getNextSurveyStep(a, i, t)
                                                u === s.End ? ae(n(n({}, f), {}, o({}, l, t)), a, c) : x(u)
                                            } else
                                                i === a.questions.length - 1
                                                    ? ae(n(n({}, f), {}, o({}, l, t)), a, c)
                                                    : x(i + 1)
                                        }
                                    })({ res: e, originalQuestionIndex: i, displayQuestionIndex: t })
                                },
                            }),
                        ],
                    })
                )
            }),
        })
    }
    function Pn(e) {
        var n,
            t,
            o = e.survey,
            i = e.forceDisableHtml,
            a = e.posthog,
            l = e.readOnly,
            c = e.removeSurveyFromFocus,
            u = r(Le(!1), 2),
            s = u[0],
            d = u[1],
            p = r(Le({}), 2),
            f = p[0],
            _ = p[1],
            v = Ie(null)
        return (
            Me(function () {
                var e, n
                if (!l && a) {
                    if ('tab' === (null === (e = o.appearance) || void 0 === e ? void 0 : e.widgetType) && v.current) {
                        var t,
                            r = v.current.getBoundingClientRect(),
                            i = {
                                top: '50%',
                                left: parseInt(''.concat(r.right - 360)),
                                bottom: 'auto',
                                borderRadius: 10,
                                borderBottom: '1.5px solid '.concat(
                                    (null === (t = o.appearance) || void 0 === t ? void 0 : t.borderColor) || '#c9c6c6'
                                ),
                            }
                        _(i)
                    }
                    if ('selector' === (null === (n = o.appearance) || void 0 === n ? void 0 : n.widgetType)) {
                        var c = wn.querySelector(o.appearance.widgetSelector || '')
                        null == c ||
                            c.addEventListener('click', function () {
                                d(!s)
                            }),
                            null == c || c.setAttribute('PHWidgetSurveyClickListener', 'true')
                    }
                }
            }, []),
            ze(I, {
                children: [
                    'tab' === (null === (n = o.appearance) || void 0 === n ? void 0 : n.widgetType) &&
                        ze('div', {
                            className: 'ph-survey-widget-tab',
                            ref: v,
                            onClick: function () {
                                return !l && d(!s)
                            },
                            style: { color: oe(o.appearance.widgetColor) },
                            children: [
                                ze('div', { className: 'ph-survey-widget-tab-icon' }),
                                (null === (t = o.appearance) || void 0 === t ? void 0 : t.widgetLabel) || '',
                            ],
                        }),
                    s &&
                        ze(
                            Tn,
                            {
                                posthog: a,
                                survey: o,
                                forceDisableHtml: i,
                                style: f,
                                removeSurveyFromFocus: c,
                                isPopup: !0,
                            },
                            'feedback-widget-survey'
                        ),
                ],
            })
        )
    }
    var Ln = function (e) {
        var t,
            r,
            i = e.question,
            a = e.forceDisableHtml,
            l = e.displayQuestionIndex,
            c = e.appearance,
            s = e.onSubmit,
            d =
                (o((t = {}), u.Open, sn),
                o(t, u.Link, dn),
                o(t, u.Rating, pn),
                o(t, u.SingleChoice, _n),
                o(t, u.MultipleChoice, _n),
                t),
            p = { question: i, forceDisableHtml: a, appearance: c, onSubmit: s },
            f =
                (o((r = {}), u.Open, {}),
                o(r, u.Link, {}),
                o(r, u.Rating, { displayQuestionIndex: l }),
                o(r, u.SingleChoice, { displayQuestionIndex: l }),
                o(r, u.MultipleChoice, { displayQuestionIndex: l }),
                r),
            _ = d[i.type],
            v = n(n({}, p), f[i.type])
        return ze(_, n({}, v))
    }
    d &&
        ((d.__PosthogExtensions__ = d.__PosthogExtensions__ || {}),
        (d.__PosthogExtensions__.canActivateRepeatedly = de),
        (d.extendPostHogWithSurveys = qn))
})()
//# sourceMappingURL=surveys.js.map
