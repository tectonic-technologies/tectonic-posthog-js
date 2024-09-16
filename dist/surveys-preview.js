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
    for (var o = 1; o < arguments.length; o++) {
        var r = null != arguments[o] ? arguments[o] : {}
        o % 2
            ? e(Object(r), !0).forEach(function (e) {
                  t(n, e, r[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
            : e(Object(r)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
              })
    }
    return n
}
function t(e, n, t) {
    return (
        n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t),
        e
    )
}
function o(e, n) {
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
                l = !0,
                a = !1
            try {
                for (t = t.call(e); !(l = (o = t.next()).done) && (i.push(o.value), !n || i.length !== n); l = !0);
            } catch (e) {
                ;(a = !0), (r = e)
            } finally {
                try {
                    l || null == t.return || t.return()
                } finally {
                    if (a) throw r
                }
            }
            return i
        })(e, n) ||
        i(e, n) ||
        (function () {
            throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
        })()
    )
}
function r(e) {
    return (
        (function (e) {
            if (Array.isArray(e)) return l(e)
        })(e) ||
        (function (e) {
            if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
                return Array.from(e)
        })(e) ||
        i(e) ||
        (function () {
            throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
        })()
    )
}
function i(e, n) {
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
var a, c, u
!(function (e) {
    ;(e.Popover = 'popover'), (e.API = 'api'), (e.Widget = 'widget')
})(a || (a = {})),
    (function (e) {
        ;(e.Open = 'open'),
            (e.MultipleChoice = 'multiple_choice'),
            (e.SingleChoice = 'single_choice'),
            (e.Rating = 'rating'),
            (e.Link = 'link')
    })(c || (c = {})),
    (function (e) {
        ;(e.NextQuestion = 'next_question'),
            (e.End = 'end'),
            (e.ResponseBased = 'response_based'),
            (e.SpecificQuestion = 'specific_question')
    })(u || (u = {}))
var s = 'undefined' != typeof window ? window : void 0,
    d = 'undefined' != typeof globalThis ? globalThis : s,
    p = null == d ? void 0 : d.navigator,
    _ = null == d ? void 0 : d.document
null == d || d.location,
    null == d || d.fetch,
    null != d && d.XMLHttpRequest && 'withCredentials' in new d.XMLHttpRequest() && d.XMLHttpRequest,
    null == d || d.AbortController,
    null == p || p.userAgent
var f,
    h,
    v,
    m,
    b,
    g,
    y,
    C,
    x = {},
    k = [],
    w = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    q = Array.isArray
function T(e, n) {
    for (var t in n) e[t] = n[t]
    return e
}
function S(e) {
    var n = e.parentNode
    n && n.removeChild(e)
}
function H(e, n, t) {
    var o,
        r,
        i,
        l = {}
    for (i in n) 'key' == i ? (o = n[i]) : 'ref' == i ? (r = n[i]) : (l[i] = n[i])
    if (
        (arguments.length > 2 && (l.children = arguments.length > 3 ? f.call(arguments, 2) : t),
        'function' == typeof e && null != e.defaultProps)
    )
        for (i in e.defaultProps) void 0 === l[i] && (l[i] = e.defaultProps[i])
    return L(e, l, o, r, null)
}
function L(e, n, t, o, r) {
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
        __v: null == r ? ++v : r,
        __i: -1,
        __u: 0,
    }
    return null == r && null != h.vnode && h.vnode(i), i
}
function M(e) {
    return e.children
}
function P(e, n) {
    ;(this.props = e), (this.context = n)
}
function Z(e, n) {
    if (null == n) return e.__ ? Z(e.__, e.__i + 1) : null
    for (var t; n < e.__k.length; n++) if (null != (t = e.__k[n]) && null != t.__e) return t.__e
    return 'function' == typeof e.type ? Z(e) : null
}
function I(e) {
    var n, t
    if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
            if (null != (t = e.__k[n]) && null != t.__e) {
                e.__e = e.__c.base = t.__e
                break
            }
        return I(e)
    }
}
function D(e) {
    ;((!e.__d && (e.__d = !0) && m.push(e) && !N.__r++) || b !== h.debounceRendering) &&
        ((b = h.debounceRendering) || g)(N)
}
function N() {
    var e, n, t, o, r, i, l, a, c
    for (m.sort(y); (e = m.shift()); )
        e.__d &&
            ((n = m.length),
            (o = void 0),
            (i = (r = (t = e).__v).__e),
            (a = []),
            (c = []),
            (l = t.__P) &&
                (((o = T({}, r)).__v = r.__v + 1),
                h.vnode && h.vnode(o),
                U(
                    l,
                    o,
                    r,
                    t.__n,
                    void 0 !== l.ownerSVGElement,
                    32 & r.__u ? [i] : null,
                    a,
                    null == i ? Z(r) : i,
                    !!(32 & r.__u),
                    c
                ),
                (o.__.__k[o.__i] = o),
                F(a, o, c),
                o.__e != i && I(o)),
            m.length > n && m.sort(y))
    N.__r = 0
}
function V(e, n, t, o, r, i, l, a, c, u, s) {
    var d,
        p,
        _,
        f,
        h,
        v = (o && o.__k) || k,
        m = n.length
    for (
        t.__d = c,
            (function (e, n, t) {
                var o,
                    r,
                    i,
                    l,
                    a,
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
                            ? L(null, r, null, null, r)
                            : q(r)
                            ? L(M, { children: r }, null, null, null)
                            : void 0 === r.constructor && r.__b > 0
                            ? L(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v)
                            : r)
                        ? ((r.__ = e),
                          (r.__b = e.__b + 1),
                          (a = j(r, t, (l = o + d), s)),
                          (r.__i = a),
                          (i = null),
                          -1 !== a && (s--, (i = t[a]) && (i.__u |= 131072)),
                          null == i || null === i.__v
                              ? (-1 == a && d--, 'function' != typeof r.type && (r.__u |= 65536))
                              : a !== l &&
                                (a === l + 1
                                    ? d++
                                    : a > l
                                    ? s > c - l
                                        ? (d += a - l)
                                        : d--
                                    : (d = a < l && a == l - 1 ? a - l : 0),
                                a !== o + d && (r.__u |= 65536)))
                        : (i = t[o]) &&
                          null == i.key &&
                          i.__e &&
                          (i.__e == e.__d && (e.__d = Z(i)), z(i, i, !1), (t[o] = null), s--)
                if (s)
                    for (o = 0; o < u; o++)
                        null != (i = t[o]) && 0 == (131072 & i.__u) && (i.__e == e.__d && (e.__d = Z(i)), z(i, i))
            })(t, n, v),
            c = t.__d,
            d = 0;
        d < m;
        d++
    )
        null != (_ = t.__k[d]) &&
            'boolean' != typeof _ &&
            'function' != typeof _ &&
            ((p = -1 === _.__i ? x : v[_.__i] || x),
            (_.__i = d),
            U(e, _, p, r, i, l, a, c, u, s),
            (f = _.__e),
            _.ref && p.ref != _.ref && (p.ref && R(p.ref, null, _), s.push(_.ref, _.__c || f, _)),
            null == h && null != f && (h = f),
            65536 & _.__u || p.__k === _.__k
                ? (c = E(_, c, e))
                : 'function' == typeof _.type && void 0 !== _.__d
                ? (c = _.__d)
                : f && (c = f.nextSibling),
            (_.__d = void 0),
            (_.__u &= -196609))
    ;(t.__d = c), (t.__e = h)
}
function E(e, n, t) {
    var o, r
    if ('function' == typeof e.type) {
        for (o = e.__k, r = 0; o && r < o.length; r++) o[r] && ((o[r].__ = e), (n = E(o[r], n, t)))
        return n
    }
    return e.__e != n && (t.insertBefore(e.__e, n || null), (n = e.__e)), n && n.nextSibling
}
function j(e, n, t, o) {
    var r = e.key,
        i = e.type,
        l = t - 1,
        a = t + 1,
        c = n[t]
    if (null === c || (c && r == c.key && i === c.type)) return t
    if (o > (null != c && 0 == (131072 & c.__u) ? 1 : 0))
        for (; l >= 0 || a < n.length; ) {
            if (l >= 0) {
                if ((c = n[l]) && 0 == (131072 & c.__u) && r == c.key && i === c.type) return l
                l--
            }
            if (a < n.length) {
                if ((c = n[a]) && 0 == (131072 & c.__u) && r == c.key && i === c.type) return a
                a++
            }
        }
    return -1
}
function Q(e, n, t) {
    '-' === n[0]
        ? e.setProperty(n, null == t ? '' : t)
        : (e[n] = null == t ? '' : 'number' != typeof t || w.test(n) ? t : t + 'px')
}
function O(e, n, t, o, r) {
    var i
    e: if ('style' === n)
        if ('string' == typeof t) e.style.cssText = t
        else {
            if (('string' == typeof o && (e.style.cssText = o = ''), o)) for (n in o) (t && n in t) || Q(e.style, n, '')
            if (t) for (n in t) (o && t[n] === o[n]) || Q(e.style, n, t[n])
        }
    else if ('o' === n[0] && 'n' === n[1])
        (i = n !== (n = n.replace(/(PointerCapture)$|Capture$/, '$1'))),
            (n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2)),
            e.l || (e.l = {}),
            (e.l[n + i] = t),
            t
                ? o
                    ? (t.u = o.u)
                    : ((t.u = Date.now()), e.addEventListener(n, i ? B : A, i))
                : e.removeEventListener(n, i ? B : A, i)
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
function A(e) {
    var n = this.l[e.type + !1]
    if (e.t) {
        if (e.t <= n.u) return
    } else e.t = Date.now()
    return n(h.event ? h.event(e) : e)
}
function B(e) {
    return this.l[e.type + !0](h.event ? h.event(e) : e)
}
function U(e, n, t, o, r, i, l, a, c, u) {
    var s,
        d,
        p,
        _,
        f,
        v,
        m,
        b,
        g,
        y,
        C,
        x,
        k,
        w,
        S,
        H = n.type
    if (void 0 !== n.constructor) return null
    128 & t.__u && ((c = !!(32 & t.__u)), (i = [(a = n.__e = t.__e)])), (s = h.__b) && s(n)
    e: if ('function' == typeof H)
        try {
            if (
                ((b = n.props),
                (g = (s = H.contextType) && o[s.__c]),
                (y = s ? (g ? g.props.value : s.__) : o),
                t.__c
                    ? (m = (d = n.__c = t.__c).__ = d.__E)
                    : ('prototype' in H && H.prototype.render
                          ? (n.__c = d = new H(b, y))
                          : ((n.__c = d = new P(b, y)), (d.constructor = H), (d.render = W)),
                      g && g.sub(d),
                      (d.props = b),
                      d.state || (d.state = {}),
                      (d.context = y),
                      (d.__n = o),
                      (p = d.__d = !0),
                      (d.__h = []),
                      (d._sb = [])),
                null == d.__s && (d.__s = d.state),
                null != H.getDerivedStateFromProps &&
                    (d.__s == d.state && (d.__s = T({}, d.__s)), T(d.__s, H.getDerivedStateFromProps(b, d.__s))),
                (_ = d.props),
                (f = d.state),
                (d.__v = n),
                p)
            )
                null == H.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(),
                    null != d.componentDidMount && d.__h.push(d.componentDidMount)
            else {
                if (
                    (null == H.getDerivedStateFromProps &&
                        b !== _ &&
                        null != d.componentWillReceiveProps &&
                        d.componentWillReceiveProps(b, y),
                    !d.__e &&
                        ((null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(b, d.__s, y)) ||
                            n.__v === t.__v))
                ) {
                    for (
                        n.__v !== t.__v && ((d.props = b), (d.state = d.__s), (d.__d = !1)),
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
                    ;(d._sb = []), d.__h.length && l.push(d)
                    break e
                }
                null != d.componentWillUpdate && d.componentWillUpdate(b, d.__s, y),
                    null != d.componentDidUpdate &&
                        d.__h.push(function () {
                            d.componentDidUpdate(_, f, v)
                        })
            }
            if (
                ((d.context = y),
                (d.props = b),
                (d.__P = e),
                (d.__e = !1),
                (x = h.__r),
                (k = 0),
                'prototype' in H && H.prototype.render)
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
                null != d.getChildContext && (o = T(T({}, o), d.getChildContext())),
                p || null == d.getSnapshotBeforeUpdate || (v = d.getSnapshotBeforeUpdate(_, f)),
                V(
                    e,
                    q((S = null != s && s.type === M && null == s.key ? s.props.children : s)) ? S : [S],
                    n,
                    t,
                    o,
                    r,
                    i,
                    l,
                    a,
                    c,
                    u
                ),
                (d.base = n.__e),
                (n.__u &= -161),
                d.__h.length && l.push(d),
                m && (d.__E = d.__ = null)
        } catch (e) {
            ;(n.__v = null),
                c || null != i
                    ? ((n.__e = a), (n.__u |= c ? 160 : 32), (i[i.indexOf(a)] = null))
                    : ((n.__e = t.__e), (n.__k = t.__k)),
                h.__e(e, n, t)
        }
    else null == i && n.__v === t.__v ? ((n.__k = t.__k), (n.__e = t.__e)) : (n.__e = $(t.__e, n, t, o, r, i, l, c, u))
    ;(s = h.diffed) && s(n)
}
function F(e, n, t) {
    n.__d = void 0
    for (var o = 0; o < t.length; o++) R(t[o], t[++o], t[++o])
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
function $(e, n, t, o, r, i, l, a, c) {
    var u,
        s,
        d,
        p,
        _,
        h,
        v,
        m = t.props,
        b = n.props,
        g = n.type
    if (('svg' === g && (r = !0), null != i))
        for (u = 0; u < i.length; u++)
            if ((_ = i[u]) && 'setAttribute' in _ == !!g && (g ? _.localName === g : 3 === _.nodeType)) {
                ;(e = _), (i[u] = null)
                break
            }
    if (null == e) {
        if (null === g) return document.createTextNode(b)
        ;(e = r ? document.createElementNS('http://www.w3.org/2000/svg', g) : document.createElement(g, b.is && b)),
            (i = null),
            (a = !1)
    }
    if (null === g) m === b || (a && e.data === b) || (e.data = b)
    else {
        if (((i = i && f.call(e.childNodes)), (m = t.props || x), !a && null != i))
            for (m = {}, u = 0; u < e.attributes.length; u++) m[(_ = e.attributes[u]).name] = _.value
        for (u in m)
            (_ = m[u]),
                'children' == u ||
                    ('dangerouslySetInnerHTML' == u ? (d = _) : 'key' === u || u in b || O(e, u, null, _, r))
        for (u in b)
            (_ = b[u]),
                'children' == u
                    ? (p = _)
                    : 'dangerouslySetInnerHTML' == u
                    ? (s = _)
                    : 'value' == u
                    ? (h = _)
                    : 'checked' == u
                    ? (v = _)
                    : 'key' === u || (a && 'function' != typeof _) || m[u] === _ || O(e, u, _, m[u], r)
        if (s) a || (d && (s.__html === d.__html || s.__html === e.innerHTML)) || (e.innerHTML = s.__html), (n.__k = [])
        else if (
            (d && (e.innerHTML = ''),
            V(e, q(p) ? p : [p], n, t, o, r && 'foreignObject' !== g, i, l, i ? i[0] : t.__k && Z(t, 0), a, c),
            null != i)
        )
            for (u = i.length; u--; ) null != i[u] && S(i[u])
        a ||
            ((u = 'value'),
            void 0 !== h &&
                (h !== e[u] || ('progress' === g && !h) || ('option' === g && h !== m[u])) &&
                O(e, u, h, m[u], !1),
            (u = 'checked'),
            void 0 !== v && v !== e[u] && O(e, u, v, m[u], !1))
    }
    return e
}
function R(e, n, t) {
    try {
        'function' == typeof e ? e(n) : (e.current = n)
    } catch (e) {
        h.__e(e, t)
    }
}
function z(e, n, t) {
    var o, r
    if (
        (h.unmount && h.unmount(e),
        (o = e.ref) && ((o.current && o.current !== e.__e) || R(o, null, n)),
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
    if ((o = e.__k)) for (r = 0; r < o.length; r++) o[r] && z(o[r], n, t || 'function' != typeof e.type)
    t || null == e.__e || S(e.__e), (e.__ = e.__e = e.__d = void 0)
}
function W(e, n, t) {
    return this.constructor(e, t)
}
function Y(e, n, t) {
    var o, r, i, l
    h.__ && h.__(e, n),
        (r = (o = 'function' == typeof t) ? null : (t && t.__k) || n.__k),
        (i = []),
        (l = []),
        U(
            n,
            (e = ((!o && t) || n).__k = H(M, null, [e])),
            r || x,
            x,
            void 0 !== n.ownerSVGElement,
            !o && t ? [t] : r ? null : n.firstChild ? f.call(n.childNodes) : null,
            i,
            !o && t ? t : r ? r.__e : n.firstChild,
            o,
            l
        ),
        F(i, e, l)
}
function X(e, n, t) {
    var o,
        r,
        i,
        l,
        a = T({}, e.props)
    for (i in (e.type && e.type.defaultProps && (l = e.type.defaultProps), n))
        'key' == i ? (o = n[i]) : 'ref' == i ? (r = n[i]) : (a[i] = void 0 === n[i] && void 0 !== l ? l[i] : n[i])
    return (
        arguments.length > 2 && (a.children = arguments.length > 3 ? f.call(arguments, 2) : t),
        L(e.type, a, o || e.key, r || e.ref, null)
    )
}
;(f = k.slice),
    (h = {
        __e: function (e, n, t, o) {
            for (var r, i, l; (n = n.__); )
                if ((r = n.__c) && !r.__)
                    try {
                        if (
                            ((i = r.constructor) &&
                                null != i.getDerivedStateFromError &&
                                (r.setState(i.getDerivedStateFromError(e)), (l = r.__d)),
                            null != r.componentDidCatch && (r.componentDidCatch(e, o || {}), (l = r.__d)),
                            l)
                        )
                            return (r.__E = r)
                    } catch (n) {
                        e = n
                    }
            throw e
        },
    }),
    (v = 0),
    (P.prototype.setState = function (e, n) {
        var t
        ;(t = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = T({}, this.state))),
            'function' == typeof e && (e = e(T({}, t), this.props)),
            e && T(t, e),
            null != e && this.__v && (n && this._sb.push(n), D(this))
    }),
    (P.prototype.forceUpdate = function (e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), D(this))
    }),
    (P.prototype.render = M),
    (m = []),
    (g = 'function' == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
    (y = function (e, n) {
        return e.__v.__b - n.__v.__b
    }),
    (N.__r = 0),
    (C = 0)
var G = s
function J(e) {
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
function K() {
    var e,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne
    '#' === n[0] && (e = J(n)), n.startsWith('rgb') && (e = n)
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
    if ((t && (e = J(t)), !e)) return 'black'
    var o = e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)
    if (o) {
        var r = parseInt(o[1]),
            i = parseInt(o[2]),
            l = parseInt(o[3])
        return Math.sqrt(r * r * 0.299 + i * i * 0.587 + l * l * 0.114) > 127.5 ? 'black' : 'white'
    }
    return 'black'
}
var ee = {
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
    ne = '#eeeded',
    te = function () {
        var e,
            o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments.length > 1 ? arguments[1] : void 0,
            i = arguments.length > 2 ? arguments[2] : void 0
        i &&
            (localStorage.setItem(ae(r), 'true'),
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
                        o
                    ),
                    {},
                    { $set: t({}, ce(r, 'responded'), !0) }
                )
            ),
            G.dispatchEvent(new Event('PHSurveySent')))
    },
    oe = function (e, n, o) {
        var r
        !o &&
            n &&
            (n.capture('survey dismissed', {
                $survey_name: e.name,
                $survey_id: e.id,
                $survey_iteration: e.current_iteration,
                $survey_iteration_start_date: e.current_iteration_start_date,
                sessionRecordingUrl: null === (r = n.get_session_replay_url) || void 0 === r ? void 0 : r.call(n),
                $set: t({}, ce(e, 'dismissed'), !0),
            }),
            localStorage.setItem(ae(e), 'true'),
            G.dispatchEvent(new Event('PHSurveyClosed')))
    },
    re = function (e) {
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
    ie = function (e, n) {
        return e.length === n.length &&
            e.every(function (e, t) {
                return e === n[t]
            })
            ? n.reverse()
            : n
    },
    le = function (e) {
        return (
            e.questions.forEach(function (e, n) {
                e.originalQuestionIndex = n
            }),
            e.appearance && e.appearance.shuffleQuestions ? ie(e.questions, re(e.questions)) : e.questions
        )
    },
    ae = function (e) {
        var n = 'seenSurvey_'.concat(e.id)
        return (
            e.current_iteration &&
                e.current_iteration > 0 &&
                (n = 'seenSurvey_'.concat(e.id, '_').concat(e.current_iteration)),
            n
        )
    },
    ce = function (e, n) {
        var t = '$survey_'.concat(n, '/').concat(e.id)
        return (
            e.current_iteration &&
                e.current_iteration > 0 &&
                (t = '$survey_'.concat(n, '/').concat(e.id, '/').concat(e.current_iteration)),
            t
        )
    },
    ue = (function (e, n) {
        var t = {
            __c: (n = '__cC' + C++),
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
                                    ;(e.__e = !0), D(e)
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
    se = function (e) {
        var n = e.component,
            t = e.children,
            o = e.renderAsHtml,
            r = e.style
        return X(n, o ? { dangerouslySetInnerHTML: { __html: t }, style: r } : { children: t, style: r })
    }
var de,
    pe,
    _e,
    fe,
    he = 0,
    ve = [],
    me = [],
    be = h.__b,
    ge = h.__r,
    ye = h.diffed,
    Ce = h.__c,
    xe = h.unmount
function ke(e, n) {
    h.__h && h.__h(pe, e, he || n), (he = 0)
    var t = pe.__H || (pe.__H = { __: [], __h: [] })
    return e >= t.__.length && t.__.push({ __V: me }), t.__[e]
}
function we(e) {
    return (
        (he = 1),
        (function (e, n, t) {
            var o = ke(de++, 2)
            if (
                ((o.t = e),
                !o.__c &&
                    ((o.__ = [
                        t ? t(n) : Ne(void 0, n),
                        function (e) {
                            var n = o.__N ? o.__N[0] : o.__[0],
                                t = o.t(n, e)
                            n !== t && ((o.__N = [t, o.__[1]]), o.__c.setState({}))
                        },
                    ]),
                    (o.__c = pe),
                    !pe.u))
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
                    var l = !1
                    return (
                        r.forEach(function (e) {
                            if (e.__N) {
                                var n = e.__[0]
                                ;(e.__ = e.__N), (e.__N = void 0), n !== e.__[0] && (l = !0)
                            }
                        }),
                        !(!l && o.__c.props === e) && (!i || i.call(this, e, n, t))
                    )
                }
                pe.u = !0
                var i = pe.shouldComponentUpdate,
                    l = pe.componentWillUpdate
                ;(pe.componentWillUpdate = function (e, n, t) {
                    if (this.__e) {
                        var o = i
                        ;(i = void 0), r(e, n, t), (i = o)
                    }
                    l && l.call(this, e, n, t)
                }),
                    (pe.shouldComponentUpdate = r)
            }
            return o.__N || o.__
        })(Ne, e)
    )
}
function qe(e, n) {
    var t = ke(de++, 3)
    !h.__s && De(t.__H, n) && ((t.__ = e), (t.i = n), pe.__H.__h.push(t))
}
function Te(e) {
    return (
        (he = 5),
        Se(function () {
            return { current: e }
        }, [])
    )
}
function Se(e, n) {
    var t = ke(de++, 7)
    return De(t.__H, n) ? ((t.__V = e()), (t.i = n), (t.__h = e), t.__V) : t.__
}
function He(e) {
    var n = pe.context[e.__c],
        t = ke(de++, 9)
    return (t.c = e), n ? (null == t.__ && ((t.__ = !0), n.sub(pe)), n.props.value) : e.__
}
function Le() {
    for (var e; (e = ve.shift()); )
        if (e.__P && e.__H)
            try {
                e.__H.__h.forEach(Ze), e.__H.__h.forEach(Ie), (e.__H.__h = [])
            } catch (n) {
                ;(e.__H.__h = []), h.__e(n, e.__v)
            }
}
;(h.__b = function (e) {
    ;(pe = null), be && be(e)
}),
    (h.__r = function (e) {
        ge && ge(e), (de = 0)
        var n = (pe = e.__c).__H
        n &&
            (_e === pe
                ? ((n.__h = []),
                  (pe.__h = []),
                  n.__.forEach(function (e) {
                      e.__N && (e.__ = e.__N), (e.__V = me), (e.__N = e.i = void 0)
                  }))
                : (n.__h.forEach(Ze), n.__h.forEach(Ie), (n.__h = []), (de = 0))),
            (_e = pe)
    }),
    (h.diffed = function (e) {
        ye && ye(e)
        var n = e.__c
        n &&
            n.__H &&
            (n.__H.__h.length &&
                ((1 !== ve.push(n) && fe === h.requestAnimationFrame) || ((fe = h.requestAnimationFrame) || Pe)(Le)),
            n.__H.__.forEach(function (e) {
                e.i && (e.__H = e.i), e.__V !== me && (e.__ = e.__V), (e.i = void 0), (e.__V = me)
            })),
            (_e = pe = null)
    }),
    (h.__c = function (e, n) {
        n.some(function (e) {
            try {
                e.__h.forEach(Ze),
                    (e.__h = e.__h.filter(function (e) {
                        return !e.__ || Ie(e)
                    }))
            } catch (t) {
                n.some(function (e) {
                    e.__h && (e.__h = [])
                }),
                    (n = []),
                    h.__e(t, e.__v)
            }
        }),
            Ce && Ce(e, n)
    }),
    (h.unmount = function (e) {
        xe && xe(e)
        var n,
            t = e.__c
        t &&
            t.__H &&
            (t.__H.__.forEach(function (e) {
                try {
                    Ze(e)
                } catch (e) {
                    n = e
                }
            }),
            (t.__H = void 0),
            n && h.__e(n, t.__v))
    })
var Me = 'function' == typeof requestAnimationFrame
function Pe(e) {
    var n,
        t = function () {
            clearTimeout(o), Me && cancelAnimationFrame(n), setTimeout(e)
        },
        o = setTimeout(t, 100)
    Me && (n = requestAnimationFrame(t))
}
function Ze(e) {
    var n = pe,
        t = e.__c
    'function' == typeof t && ((e.__c = void 0), t()), (pe = n)
}
function Ie(e) {
    var n = pe
    ;(e.__c = e.__()), (pe = n)
}
function De(e, n) {
    return (
        !e ||
        e.length !== n.length ||
        n.some(function (n, t) {
            return n !== e[t]
        })
    )
}
function Ne(e, n) {
    return 'function' == typeof n ? n(e) : n
}
var Ve = Array.isArray,
    Ee = Object.prototype.toString,
    je =
        Ve ||
        function (e) {
            return '[object Array]' === Ee.call(e)
        },
    Qe = function (e) {
        return null === e
    },
    Oe = function (e) {
        return '[object Number]' == Ee.call(e)
    },
    Ae = 0
function Be(e, n, t, o, r, i) {
    var l,
        a,
        c = {}
    for (a in n) 'ref' == a ? (l = n[a]) : (c[a] = n[a])
    var u = {
        type: e,
        props: c,
        key: t,
        ref: l,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: --Ae,
        __i: -1,
        __u: 0,
        __source: r,
        __self: i,
    }
    if ('function' == typeof e && (l = e.defaultProps)) for (a in l) void 0 === c[a] && (c[a] = l[a])
    return h.vnode && h.vnode(u), u
}
var Ue = Be('svg', {
        className: 'emoji-svg',
        xmlns: 'http://www.w3.org/2000/svg',
        height: '48',
        viewBox: '0 -960 960 960',
        width: '48',
        children: Be('path', {
            d: 'M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm146 272q66 0 121.5-35.5T682-393h-52q-23 40-63 61.5T480.5-310q-46.5 0-87-21T331-393h-53q26 61 81 96.5T480-261Zm0 181q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z',
        }),
    }),
    Fe = Be('svg', {
        className: 'emoji-svg',
        xmlns: 'http://www.w3.org/2000/svg',
        height: '48',
        viewBox: '0 -960 960 960',
        width: '48',
        children: Be('path', {
            d: 'M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm20 194h253v-49H354v49ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z',
        }),
    }),
    $e = Be('svg', {
        className: 'emoji-svg',
        xmlns: 'http://www.w3.org/2000/svg',
        height: '48',
        viewBox: '0 -960 960 960',
        width: '48',
        children: Be('path', {
            d: 'M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm146.174 116Q413-417 358.5-379.5T278-280h53q22-42 62.173-65t87.5-23Q528-368 567.5-344.5T630-280h52q-25-63-79.826-100-54.826-37-122-37ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z',
        }),
    }),
    Re = Be('svg', {
        className: 'emoji-svg',
        xmlns: 'http://www.w3.org/2000/svg',
        height: '48',
        viewBox: '0 -960 960 960',
        width: '48',
        children: Be('path', {
            d: 'M480-417q-67 0-121.5 37.5T278-280h404q-25-63-80-100t-122-37Zm-183-72 50-45 45 45 31-36-45-45 45-45-31-36-45 45-50-45-31 36 45 45-45 45 31 36Zm272 0 44-45 51 45 31-36-45-45 45-45-31-36-51 45-44-45-31 36 44 45-44 45 31 36ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142 0 241-99t99-241q0-142-99-241t-241-99q-142 0-241 99t-99 241q0 142 99 241t241 99Z',
        }),
    }),
    ze = Be('svg', {
        className: 'emoji-svg',
        xmlns: 'http://www.w3.org/2000/svg',
        height: '48',
        viewBox: '0 -960 960 960',
        width: '48',
        children: Be('path', {
            d: 'M479.504-261Q537-261 585.5-287q48.5-26 78.5-72.4 6-11.6-.75-22.6-6.75-11-20.25-11H316.918Q303-393 296.5-382t-.5 22.6q30 46.4 78.5 72.4 48.5 26 105.004 26ZM347-578l27 27q7.636 8 17.818 8Q402-543 410-551q8-8 8-18t-8-18l-42-42q-8.8-9-20.9-9-12.1 0-21.1 9l-42 42q-8 7.636-8 17.818Q276-559 284-551q8 8 18 8t18-8l27-27Zm267 0 27 27q7.714 8 18 8t18-8q8-7.636 8-17.818Q685-579 677-587l-42-42q-8.8-9-20.9-9-12.1 0-21.1 9l-42 42q-8 7.714-8 18t8 18q7.636 8 17.818 8Q579-543 587-551l27-27ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z',
        }),
    }),
    We = Be('svg', {
        width: '12',
        height: '12',
        viewBox: '0 0 12 12',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: Be('path', {
            'fill-rule': 'evenodd',
            'clip-rule': 'evenodd',
            d: 'M0.164752 0.164752C0.384422 -0.0549175 0.740578 -0.0549175 0.960248 0.164752L6 5.20451L11.0398 0.164752C11.2594 -0.0549175 11.6156 -0.0549175 11.8352 0.164752C12.0549 0.384422 12.0549 0.740578 11.8352 0.960248L6.79549 6L11.8352 11.0398C12.0549 11.2594 12.0549 11.6156 11.8352 11.8352C11.6156 12.0549 11.2594 12.0549 11.0398 11.8352L6 6.79549L0.960248 11.8352C0.740578 12.0549 0.384422 12.0549 0.164752 11.8352C-0.0549175 11.6156 -0.0549175 11.2594 0.164752 11.0398L5.20451 6L0.164752 0.960248C-0.0549175 0.740578 -0.0549175 0.384422 0.164752 0.164752Z',
            fill: 'black',
        }),
    }),
    Ye = Be('svg', {
        width: '77',
        height: '14',
        viewBox: '0 0 77 14',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            Be('g', {
                'clip-path': 'url(#clip0_2415_6911)',
                children: [
                    Be('mask', {
                        id: 'mask0_2415_6911',
                        style: { maskType: 'luminance' },
                        maskUnits: 'userSpaceOnUse',
                        x: '0',
                        y: '0',
                        width: '77',
                        height: '14',
                        children: Be('path', { d: 'M0.5 0H76.5V14H0.5V0Z', fill: 'white' }),
                    }),
                    Be('g', {
                        mask: 'url(#mask0_2415_6911)',
                        children: [
                            Be('path', {
                                d: 'M5.77226 8.02931C5.59388 8.37329 5.08474 8.37329 4.90634 8.02931L4.4797 7.20672C4.41155 7.07535 4.41155 6.9207 4.4797 6.78933L4.90634 5.96669C5.08474 5.62276 5.59388 5.62276 5.77226 5.96669L6.19893 6.78933C6.26709 6.9207 6.26709 7.07535 6.19893 7.20672L5.77226 8.02931ZM5.77226 12.6946C5.59388 13.0386 5.08474 13.0386 4.90634 12.6946L4.4797 11.872C4.41155 11.7406 4.41155 11.586 4.4797 11.4546L4.90634 10.632C5.08474 10.288 5.59388 10.288 5.77226 10.632L6.19893 11.4546C6.26709 11.586 6.26709 11.7406 6.19893 11.872L5.77226 12.6946Z',
                                fill: '#1D4AFF',
                            }),
                            Be('path', {
                                d: 'M0.5 10.9238C0.5 10.508 1.02142 10.2998 1.32637 10.5938L3.54508 12.7327C3.85003 13.0267 3.63405 13.5294 3.20279 13.5294H0.984076C0.716728 13.5294 0.5 13.3205 0.5 13.0627V10.9238ZM0.5 8.67083C0.5 8.79459 0.551001 8.91331 0.641783 9.00081L5.19753 13.3927C5.28831 13.4802 5.41144 13.5294 5.53982 13.5294H8.0421C8.47337 13.5294 8.68936 13.0267 8.3844 12.7327L1.32637 5.92856C1.02142 5.63456 0.5 5.84278 0.5 6.25854V8.67083ZM0.5 4.00556C0.5 4.12932 0.551001 4.24802 0.641783 4.33554L10.0368 13.3927C10.1276 13.4802 10.2508 13.5294 10.3791 13.5294H12.8814C13.3127 13.5294 13.5287 13.0267 13.2237 12.7327L1.32637 1.26329C1.02142 0.969312 0.5 1.17752 0.5 1.59327V4.00556ZM5.33931 4.00556C5.33931 4.12932 5.39033 4.24802 5.4811 4.33554L14.1916 12.7327C14.4965 13.0267 15.0179 12.8185 15.0179 12.4028V9.99047C15.0179 9.86671 14.9669 9.74799 14.8762 9.66049L6.16568 1.26329C5.86071 0.969307 5.33931 1.17752 5.33931 1.59327V4.00556ZM11.005 1.26329C10.7 0.969307 10.1786 1.17752 10.1786 1.59327V4.00556C10.1786 4.12932 10.2296 4.24802 10.3204 4.33554L14.1916 8.06748C14.4965 8.36148 15.0179 8.15325 15.0179 7.7375V5.3252C15.0179 5.20144 14.9669 5.08272 14.8762 4.99522L11.005 1.26329Z',
                                fill: '#F9BD2B',
                            }),
                            Be('path', {
                                d: 'M21.0852 10.981L16.5288 6.58843C16.2238 6.29443 15.7024 6.50266 15.7024 6.91841V13.0627C15.7024 13.3205 15.9191 13.5294 16.1865 13.5294H23.2446C23.5119 13.5294 23.7287 13.3205 23.7287 13.0627V12.5032C23.7287 12.2455 23.511 12.0396 23.2459 12.0063C22.4323 11.9042 21.6713 11.546 21.0852 10.981ZM18.0252 12.0365C17.5978 12.0365 17.251 11.7021 17.251 11.2901C17.251 10.878 17.5978 10.5436 18.0252 10.5436C18.4527 10.5436 18.7996 10.878 18.7996 11.2901C18.7996 11.7021 18.4527 12.0365 18.0252 12.0365Z',
                                fill: 'currentColor',
                            }),
                            Be('path', {
                                d: 'M0.5 13.0627C0.5 13.3205 0.716728 13.5294 0.984076 13.5294H3.20279C3.63405 13.5294 3.85003 13.0267 3.54508 12.7327L1.32637 10.5938C1.02142 10.2998 0.5 10.508 0.5 10.9238V13.0627ZM5.33931 5.13191L1.32637 1.26329C1.02142 0.969306 0.5 1.17752 0.5 1.59327V4.00556C0.5 4.12932 0.551001 4.24802 0.641783 4.33554L5.33931 8.86412V5.13191ZM1.32637 5.92855C1.02142 5.63455 0.5 5.84278 0.5 6.25853V8.67083C0.5 8.79459 0.551001 8.91331 0.641783 9.00081L5.33931 13.5294V9.79717L1.32637 5.92855Z',
                                fill: '#1D4AFF',
                            }),
                            Be('path', {
                                d: 'M10.1787 5.3252C10.1787 5.20144 10.1277 5.08272 10.0369 4.99522L6.16572 1.26329C5.8608 0.969306 5.33936 1.17752 5.33936 1.59327V4.00556C5.33936 4.12932 5.39037 4.24802 5.48114 4.33554L10.1787 8.86412V5.3252ZM5.33936 13.5294H8.04214C8.47341 13.5294 8.6894 13.0267 8.38443 12.7327L5.33936 9.79717V13.5294ZM5.33936 5.13191V8.67083C5.33936 8.79459 5.39037 8.91331 5.48114 9.00081L10.1787 13.5294V9.99047C10.1787 9.86671 10.1277 9.74803 10.0369 9.66049L5.33936 5.13191Z',
                                fill: '#F54E00',
                            }),
                            Be('path', {
                                d: 'M29.375 11.6667H31.3636V8.48772H33.0249C34.8499 8.48772 36.0204 7.4443 36.0204 5.83052C36.0204 4.21681 34.8499 3.17334 33.0249 3.17334H29.375V11.6667ZM31.3636 6.84972V4.81136H32.8236C33.5787 4.81136 34.0318 5.19958 34.0318 5.83052C34.0318 6.4615 33.5787 6.84972 32.8236 6.84972H31.3636ZM39.618 11.7637C41.5563 11.7637 42.9659 10.429 42.9659 8.60905C42.9659 6.78905 41.5563 5.45438 39.618 5.45438C37.6546 5.45438 36.2701 6.78905 36.2701 8.60905C36.2701 10.429 37.6546 11.7637 39.618 11.7637ZM38.1077 8.60905C38.1077 7.63838 38.7118 6.97105 39.618 6.97105C40.5116 6.97105 41.1157 7.63838 41.1157 8.60905C41.1157 9.57972 40.5116 10.2471 39.618 10.2471C38.7118 10.2471 38.1077 9.57972 38.1077 8.60905ZM46.1482 11.7637C47.6333 11.7637 48.6402 10.8658 48.6402 9.81025C48.6402 7.33505 45.2294 8.13585 45.2294 7.16518C45.2294 6.8983 45.5189 6.72843 45.9342 6.72843C46.3622 6.72843 46.8782 6.98318 47.0418 7.54132L48.527 6.94678C48.2375 6.06105 47.1677 5.45438 45.8713 5.45438C44.4743 5.45438 43.6058 6.25518 43.6058 7.21372C43.6058 9.53118 46.9663 8.88812 46.9663 9.84665C46.9663 10.1864 46.6391 10.417 46.1482 10.417C45.4434 10.417 44.9525 9.94376 44.8015 9.3735L43.3164 9.93158C43.6436 10.8537 44.6001 11.7637 46.1482 11.7637ZM53.4241 11.606L53.2982 10.0651C53.0843 10.1743 52.8074 10.2106 52.5808 10.2106C52.1278 10.2106 51.8257 9.89523 51.8257 9.34918V7.03172H53.3612V5.55145H51.8257V3.78001H49.9755V5.55145H48.9687V7.03172H49.9755V9.57972C49.9755 11.06 51.0202 11.7637 52.3921 11.7637C52.7696 11.7637 53.122 11.7031 53.4241 11.606ZM59.8749 3.17334V6.47358H56.376V3.17334H54.3874V11.6667H56.376V8.11158H59.8749V11.6667H61.8761V3.17334H59.8749ZM66.2899 11.7637C68.2281 11.7637 69.6378 10.429 69.6378 8.60905C69.6378 6.78905 68.2281 5.45438 66.2899 5.45438C64.3265 5.45438 62.942 6.78905 62.942 8.60905C62.942 10.429 64.3265 11.7637 66.2899 11.7637ZM64.7796 8.60905C64.7796 7.63838 65.3837 6.97105 66.2899 6.97105C67.1835 6.97105 67.7876 7.63838 67.7876 8.60905C67.7876 9.57972 67.1835 10.2471 66.2899 10.2471C65.3837 10.2471 64.7796 9.57972 64.7796 8.60905ZM73.2088 11.4725C73.901 11.4725 74.5177 11.242 74.845 10.8416V11.424C74.845 12.1034 74.2786 12.5767 73.4102 12.5767C72.7935 12.5767 72.2523 12.2854 72.1642 11.788L70.4776 12.0428C70.7042 13.1955 71.925 13.972 73.4102 13.972C75.361 13.972 76.6574 12.8679 76.6574 11.2298V5.55145H74.8324V6.07318C74.4926 5.69705 73.9136 5.45438 73.171 5.45438C71.409 5.45438 70.3014 6.61918 70.3014 8.46345C70.3014 10.3077 71.409 11.4725 73.2088 11.4725ZM72.1012 8.46345C72.1012 7.55345 72.655 6.97105 73.5109 6.97105C74.3793 6.97105 74.9331 7.55345 74.9331 8.46345C74.9331 9.37345 74.3793 9.95585 73.5109 9.95585C72.655 9.95585 72.1012 9.37345 72.1012 8.46345Z',
                                fill: 'currentColor',
                            }),
                        ],
                    }),
                ],
            }),
            Be('defs', {
                children: Be('clipPath', {
                    id: 'clip0_2415_6911',
                    children: Be('rect', { width: '76', height: '14', fill: 'white', transform: 'translate(0.5)' }),
                }),
            }),
        ],
    }),
    Xe = Be('svg', {
        width: '16',
        height: '12',
        viewBox: '0 0 16 12',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: Be('path', {
            d: 'M5.30769 10.6923L4.77736 11.2226C4.91801 11.3633 5.10878 11.4423 5.30769 11.4423C5.5066 11.4423 5.69737 11.3633 5.83802 11.2226L5.30769 10.6923ZM15.5303 1.53033C15.8232 1.23744 15.8232 0.762563 15.5303 0.46967C15.2374 0.176777 14.7626 0.176777 14.4697 0.46967L15.5303 1.53033ZM1.53033 5.85429C1.23744 5.56139 0.762563 5.56139 0.46967 5.85429C0.176777 6.14718 0.176777 6.62205 0.46967 6.91495L1.53033 5.85429ZM5.83802 11.2226L15.5303 1.53033L14.4697 0.46967L4.77736 10.162L5.83802 11.2226ZM0.46967 6.91495L4.77736 11.2226L5.83802 10.162L1.53033 5.85429L0.46967 6.91495Z',
            fill: 'currentColor',
        }),
    })
function Ge() {
    return Be('a', {
        href: 'https://posthog.com',
        target: '_blank',
        rel: 'noopener',
        className: 'footer-branding',
        children: ['Survey by ', Ye],
    })
}
function Je(e) {
    var n = e.text,
        t = e.submitDisabled,
        o = e.appearance,
        r = e.onSubmit,
        i = e.link,
        l = He(ue),
        a = l.isPreviewMode,
        c = l.isPopup,
        u = o.submitButtonTextColor || K(o.submitButtonColor || ee.submitButtonColor)
    return Be('div', {
        className: 'bottom-section',
        children: [
            Be('div', {
                className: 'buttons',
                children: Be('button', {
                    className: 'form-submit',
                    disabled: t && !a,
                    type: 'button',
                    style: c ? { color: u } : {},
                    onClick: function () {
                        a || (i && (null == s || s.open(i)), r())
                    },
                    children: n,
                }),
            }),
            !o.whiteLabel && Be(Ge, {}),
        ],
    })
}
function Ke(e) {
    var n = e.question,
        t = e.description,
        o = e.descriptionContentType,
        r = e.backgroundColor,
        i = e.forceDisableHtml
    return Be('div', {
        style: He(ue).isPopup ? { backgroundColor: r || ee.backgroundColor } : {},
        children: [
            Be('div', { className: 'survey-question', children: n }),
            t &&
                se({
                    component: H('div', { className: 'survey-question-description' }),
                    children: t,
                    renderAsHtml: !i && 'text' !== o,
                }),
        ],
    })
}
function en(e) {
    return Be('div', {
        className: 'cancel-btn-wrapper',
        children: Be('button', {
            className: 'form-cancel',
            onClick: e.onClick,
            disabled: He(ue).isPreviewMode,
            children: We,
        }),
    })
}
function nn(e) {
    var t = e.header,
        o = e.description,
        r = e.contentType,
        i = e.forceDisableHtml,
        l = e.appearance,
        a = e.onClose,
        c = e.styleOverrides,
        u = K(l.backgroundColor || ee.backgroundColor),
        s = He(ue).isPopup
    return Be(M, {
        children: Be('div', {
            className: 'thank-you-message',
            style: n({}, c),
            children: Be('div', {
                className: 'thank-you-message-container',
                children: [
                    s &&
                        Be(en, {
                            onClick: function () {
                                return a()
                            },
                        }),
                    Be('h3', { className: 'thank-you-message-header', style: { color: u }, children: t }),
                    o &&
                        se({
                            component: H('div', { className: 'thank-you-message-body' }),
                            children: o,
                            renderAsHtml: !i && 'text' !== r,
                            style: { color: u },
                        }),
                    s &&
                        Be(Je, {
                            text: l.thankYouMessageCloseButtonText || 'Close',
                            submitDisabled: !1,
                            appearance: l,
                            onSubmit: function () {
                                return a()
                            },
                        }),
                ],
            }),
        }),
    })
}
function tn(e) {
    var n,
        t = Te(null),
        r = o(we(null !== (n = e.defaultTextColor) && void 0 !== n ? n : 'black'), 2),
        i = r[0],
        l = r[1]
    return (
        qe(
            function () {
                if (t.current) {
                    var e = (function (e) {
                        var n = G.getComputedStyle(e).backgroundColor
                        if ('rgba(0, 0, 0, 0)' === n) return 'black'
                        var t = n.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)
                        if (!t) return 'black'
                        var o = parseInt(t[1]),
                            r = parseInt(t[2]),
                            i = parseInt(t[3])
                        return Math.sqrt(o * o * 0.299 + r * r * 0.587 + i * i * 0.114) > 127.5 ? 'black' : 'white'
                    })(t.current)
                    l(e)
                }
            },
            [e.appearance, e.forceUpdate]
        ),
        { ref: t, textColor: i }
    )
}
function on(e) {
    var n = e.question,
        t = e.forceDisableHtml,
        r = e.appearance,
        i = e.onSubmit,
        l = Te(null),
        a = o(we(''), 2),
        c = a[0],
        u = a[1]
    return Be('div', {
        ref: l,
        children: [
            Be(Ke, {
                question: n.question,
                description: n.description,
                descriptionContentType: n.descriptionContentType,
                backgroundColor: r.backgroundColor,
                forceDisableHtml: t,
            }),
            Be('textarea', {
                rows: 4,
                placeholder: null == r ? void 0 : r.placeholder,
                onInput: function (e) {
                    return u(e.currentTarget.value)
                },
            }),
            Be(Je, {
                text: n.buttonText || 'Submit',
                submitDisabled: !c && !n.optional,
                appearance: r,
                onSubmit: function () {
                    return i(c)
                },
            }),
        ],
    })
}
function rn(e) {
    var n = e.question,
        t = e.forceDisableHtml,
        o = e.appearance,
        r = e.onSubmit
    return Be(M, {
        children: [
            Be(Ke, {
                question: n.question,
                description: n.description,
                descriptionContentType: n.descriptionContentType,
                forceDisableHtml: t,
            }),
            Be(Je, {
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
function ln(e) {
    var n = e.question,
        t = e.forceDisableHtml,
        r = e.displayQuestionIndex,
        i = e.appearance,
        l = e.onSubmit,
        a = n.scale,
        c = 10 === n.scale ? 0 : 1,
        u = o(we(null), 2),
        s = u[0],
        d = u[1]
    return Be(M, {
        children: [
            Be(Ke, {
                question: n.question,
                description: n.description,
                descriptionContentType: n.descriptionContentType,
                forceDisableHtml: t,
                backgroundColor: i.backgroundColor,
            }),
            Be('div', {
                className: 'rating-section',
                children: [
                    Be('div', {
                        className: 'rating-options',
                        children: [
                            'emoji' === n.display &&
                                Be('div', {
                                    className: 'rating-options-emoji',
                                    children: (3 === n.scale ? un : sn).map(function (e, n) {
                                        var t = n + 1 === s
                                        return Be(
                                            'button',
                                            {
                                                className: 'ratings-emoji question-'
                                                    .concat(r, '-rating-')
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
                                Be('div', {
                                    className: 'rating-options-number',
                                    style: { gridTemplateColumns: 'repeat('.concat(a - c + 1, ', minmax(0, 1fr))') },
                                    children: fn(n.scale).map(function (e, n) {
                                        return Be(
                                            an,
                                            {
                                                displayQuestionIndex: r,
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
                    Be('div', {
                        className: 'rating-text',
                        children: [
                            Be('div', { children: n.lowerBoundLabel }),
                            Be('div', { children: n.upperBoundLabel }),
                        ],
                    }),
                ],
            }),
            Be(Je, {
                text: n.buttonText || (null == i ? void 0 : i.submitButtonText) || 'Submit',
                submitDisabled: Qe(s) && !n.optional,
                appearance: i,
                onSubmit: function () {
                    return l(s)
                },
            }),
        ],
    })
}
function an(e) {
    var n = e.num,
        t = e.active,
        o = e.displayQuestionIndex,
        r = e.appearance,
        i = e.setActiveNumber,
        l = tn({ appearance: r, defaultTextColor: 'black', forceUpdate: t }),
        a = l.textColor
    return Be('button', {
        ref: l.ref,
        className: 'ratings-number question-'
            .concat(o, '-rating-')
            .concat(n, ' ')
            .concat(t ? 'rating-active' : null),
        type: 'button',
        onClick: function () {
            i(n)
        },
        style: {
            color: a,
            backgroundColor: t ? r.ratingButtonActiveColor : r.ratingButtonColor,
            borderColor: r.borderColor,
        },
        children: n,
    })
}
function cn(e) {
    var n = e.question,
        t = e.forceDisableHtml,
        i = e.displayQuestionIndex,
        l = e.appearance,
        a = e.onSubmit,
        u = Te(null),
        s = Se(
            function () {
                return (function (e) {
                    if (!e.shuffleOptions) return e.choices
                    var n = e.choices,
                        t = ''
                    e.hasOpenChoice && (t = n.pop())
                    var o = ie(n, re(n))
                    return e.hasOpenChoice && (e.choices.push(t), o.push(t)), o
                })(n)
            },
            [n]
        ),
        d = o(we(n.type === c.MultipleChoice ? [] : null), 2),
        p = d[0],
        _ = d[1],
        f = o(we(!1), 2),
        h = f[0],
        v = f[1],
        m = o(we(''), 2),
        b = m[0],
        g = m[1],
        y = n.type === c.SingleChoice ? 'radio' : 'checkbox'
    return Be('div', {
        ref: u,
        children: [
            Be(Ke, {
                question: n.question,
                description: n.description,
                descriptionContentType: n.descriptionContentType,
                forceDisableHtml: t,
                backgroundColor: l.backgroundColor,
            }),
            Be('div', {
                className: 'multiple-choice-options',
                children: s.map(function (e, t) {
                    var o = 'choice-option',
                        l = e,
                        a = e
                    return (
                        n.hasOpenChoice && t === n.choices.length - 1 && (o += ' choice-option-open'),
                        Be('div', {
                            className: o,
                            children: [
                                Be('input', {
                                    type: y,
                                    id: 'surveyQuestion'.concat(i, 'Choice').concat(t),
                                    name: 'question'.concat(i),
                                    value: l,
                                    disabled: !l,
                                    onInput: function () {
                                        return n.hasOpenChoice && t === n.choices.length - 1
                                            ? v(!h)
                                            : n.type === c.SingleChoice
                                            ? _(l)
                                            : n.type === c.MultipleChoice && je(p)
                                            ? p.includes(l)
                                                ? _(
                                                      p.filter(function (e) {
                                                          return e !== l
                                                      })
                                                  )
                                                : _([].concat(r(p), [l]))
                                            : void 0
                                    },
                                }),
                                Be('label', {
                                    htmlFor: 'surveyQuestion'.concat(i, 'Choice').concat(t),
                                    style: { color: 'black' },
                                    children:
                                        n.hasOpenChoice && t === n.choices.length - 1
                                            ? Be(M, {
                                                  children: [
                                                      Be('span', { children: [a, ':'] }),
                                                      Be('input', {
                                                          type: 'text',
                                                          id: 'surveyQuestion'.concat(i, 'Choice').concat(t, 'Open'),
                                                          name: 'question'.concat(i),
                                                          onInput: function (e) {
                                                              var t = e.currentTarget.value
                                                              return n.type === c.SingleChoice
                                                                  ? _(t)
                                                                  : n.type === c.MultipleChoice && je(p)
                                                                  ? g(t)
                                                                  : void 0
                                                          },
                                                      }),
                                                  ],
                                              })
                                            : a,
                                }),
                                Be('span', { className: 'choice-check', style: { color: 'black' }, children: Xe }),
                            ],
                        })
                    )
                }),
            }),
            Be(Je, {
                text: n.buttonText || 'Submit',
                submitDisabled:
                    (Qe(p) || (je(p) && !h && 0 === p.length) || (je(p) && h && !b && 0 === p.length && !n.optional)) &&
                    !n.optional,
                appearance: l,
                onSubmit: function () {
                    h && n.type === c.MultipleChoice ? je(p) && a([].concat(r(p), [b])) : a(p)
                },
            }),
        ],
    })
}
var un = [$e, Fe, Ue],
    sn = [Re, $e, Fe, Ue, ze],
    dn = [1, 2, 3, 4, 5],
    pn = [1, 2, 3, 4, 5, 6, 7],
    _n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function fn(e) {
    switch (e) {
        case 5:
        default:
            return dn
        case 7:
            return pn
        case 10:
            return _n
    }
}
var hn = s,
    vn = _,
    mn = function (e) {
        var n,
            t,
            o,
            r = e.survey,
            i = e.parentElement,
            l = e.previewPageIndex,
            a = e.forceDisableHtml,
            c =
                ((o = r.appearance),
                '\n          .survey-form, .thank-you-message {\n              position: fixed;\n              margin: 0px;\n              bottom: 0px;\n              color: black;\n              font-weight: normal;\n              font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n              text-align: left;\n              max-width: '
                    .concat(
                        parseInt((null == o ? void 0 : o.maxWidth) || '300'),
                        'px;\n              width: 100%;\n              z-index: '
                    )
                    .concat(
                        parseInt((null == o ? void 0 : o.zIndex) || '99999'),
                        ';\n              border: 1.5px solid '
                    )
                    .concat(
                        (null == o ? void 0 : o.borderColor) || '#c9c6c6',
                        ';\n              border-bottom: 0px;\n              '
                    )
                    .concat(
                        {
                            left: 'left: 30px;',
                            right: 'right: 30px;',
                            center: '\n            left: 50%;\n            transform: translateX(-50%);\n          ',
                        }[(null == o ? void 0 : o.position) || 'right'] || 'right: 30px;',
                        '\n              flex-direction: column;\n              background: '
                    )
                    .concat(
                        (null == o ? void 0 : o.backgroundColor) || '#eeeded',
                        ';\n              border-top-left-radius: 10px;\n              border-top-right-radius: 10px;\n              box-shadow: -6px 0 16px -8px rgb(0 0 0 / 8%), -9px 0 28px 0 rgb(0 0 0 / 5%), -12px 0 48px 16px rgb(0 0 0 / 3%);\n          }\n          \n          .survey-box, .thank-you-message-container {\n              padding: 20px 25px 10px;\n              display: flex;\n              flex-direction: column;\n              border-radius: 10px;\n          }\n\n          .thank-you-message {\n              text-align: center;\n          }\n\n          .form-submit[disabled] {\n              opacity: 0.6;\n              filter: grayscale(50%);\n              cursor: not-allowed;\n          }\n          .survey-form textarea {\n              color: #2d2d2d;\n              font-size: 14px;\n              font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n              background: white;\n              color: black;\n              outline: none;\n              padding-left: 10px;\n              padding-right: 10px;\n              padding-top: 10px;\n              border-radius: 6px;\n              border-color: '
                    )
                    .concat(
                        (null == o ? void 0 : o.borderColor) || '#c9c6c6',
                        ';\n              margin-top: 14px;\n              width: 100%;\n              box-sizing: border-box;\n          }\n          .survey-box:has(.survey-question:empty):not(:has(.survey-question-description)) textarea {\n              margin-top: 0;\n          }\n          .form-submit {\n              box-sizing: border-box;\n              margin: 0;\n              font-family: inherit;\n              overflow: visible;\n              text-transform: none;\n              position: relative;\n              display: inline-block;\n              font-weight: 700;\n              white-space: nowrap;\n              text-align: center;\n              border: 1.5px solid transparent;\n              cursor: pointer;\n              user-select: none;\n              touch-action: manipulation;\n              padding: 12px;\n              font-size: 14px;\n              border-radius: 6px;\n              outline: 0;\n              background: '
                    )
                    .concat(
                        (null == o ? void 0 : o.submitButtonColor) || 'black',
                        ' !important;\n              text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);\n              box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);\n              width: 100%;\n          }\n          .form-cancel {\n              display: flex;\n              float: right;\n              border: none;\n              background: none;\n              cursor: pointer;\n          }\n          .cancel-btn-wrapper {\n              position: absolute;\n              width: 35px;\n              height: 35px;\n              border-radius: 100%;\n              top: 0;\n              right: 0;\n              transform: translate(50%, -50%);\n              background: white;\n              border: 1.5px solid '
                    )
                    .concat(
                        (null == o ? void 0 : o.borderColor) || '#c9c6c6',
                        ';\n              display: flex;\n              justify-content: center;\n              align-items: center;\n          }\n          .bolded { font-weight: 600; }\n          .buttons {\n              display: flex;\n              justify-content: center;\n          }\n          .footer-branding {\n              font-size: 11px;\n              margin-top: 10px;\n              text-align: center;\n              display: flex;\n              justify-content: center;\n              gap: 4px;\n              align-items: center;\n              font-weight: 500;\n              background: '
                    )
                    .concat(
                        (null == o ? void 0 : o.backgroundColor) || '#eeeded',
                        ';\n              text-decoration: none;\n              backgroundColor: '
                    )
                    .concat((null == o ? void 0 : o.backgroundColor) || '#eeeded', ';\n              color: ')
                    .concat(
                        K((null == o ? void 0 : o.backgroundColor) || '#eeeded'),
                        ';\n          }\n          .survey-question {\n              font-weight: 500;\n              font-size: 14px;\n              background: '
                    )
                    .concat(
                        (null == o ? void 0 : o.backgroundColor) || '#eeeded',
                        ';\n          }\n          .question-textarea-wrapper {\n              display: flex;\n              flex-direction: column;\n          }\n          .survey-question-description {\n              font-size: 13px;\n              padding-top: 5px;\n              background: '
                    )
                    .concat(
                        (null == o ? void 0 : o.backgroundColor) || '#eeeded',
                        ';\n          }\n          .ratings-number {\n              font-size: 16px;\n              font-weight: 600;\n              padding: 8px 0px;\n              border: none;\n          }\n          .ratings-number:hover {\n              cursor: pointer;\n          }\n          .rating-options {\n              margin-top: 14px;\n          }\n          .rating-options-number {\n              display: grid;\n              border-radius: 6px;\n              overflow: hidden;\n              border: 1.5px solid '
                    )
                    .concat(
                        (null == o ? void 0 : o.borderColor) || '#c9c6c6',
                        ';\n          }\n          .rating-options-number > .ratings-number {\n              border-right: 1px solid '
                    )
                    .concat(
                        (null == o ? void 0 : o.borderColor) || '#c9c6c6',
                        ';\n          }\n          .rating-options-number > .ratings-number:last-of-type {\n              border-right: 0px;\n          }\n          .rating-options-number .rating-active {\n              background: '
                    )
                    .concat(
                        (null == o ? void 0 : o.ratingButtonActiveColor) || 'black',
                        ';\n          }\n          .rating-options-emoji {\n              display: flex;\n              justify-content: space-between;\n          }\n          .ratings-emoji {\n              font-size: 16px;\n              background-color: transparent;\n              border: none;\n              padding: 0px;\n          }\n          .ratings-emoji:hover {\n              cursor: pointer;\n          }\n          .ratings-emoji.rating-active svg {\n              fill: '
                    )
                    .concat(
                        (null == o ? void 0 : o.ratingButtonActiveColor) || 'black',
                        ";\n          }\n          .emoji-svg {\n              fill: '#939393';\n          }\n          .rating-text {\n              display: flex;\n              flex-direction: row;\n              font-size: 11px;\n              justify-content: space-between;\n              margin-top: 6px;\n              background: "
                    )
                    .concat(
                        (null == o ? void 0 : o.backgroundColor) || '#eeeded',
                        ';\n              opacity: .60;\n          }\n          .multiple-choice-options {\n              margin-top: 13px;\n              font-size: 14px;\n          }\n          .survey-box:has(.survey-question:empty):not(:has(.survey-question-description)) .multiple-choice-options {\n              margin-top: 0;\n          }\n          .multiple-choice-options .choice-option {\n              display: flex;\n              align-items: center;\n              gap: 4px;\n              font-size: 13px;\n              cursor: pointer;\n              margin-bottom: 5px;\n              position: relative;\n          }\n          .multiple-choice-options > .choice-option:last-of-type {\n              margin-bottom: 0px;\n          }\n          .multiple-choice-options input {\n              cursor: pointer;\n              position: absolute;\n              opacity: 0;\n          }\n          .choice-check {\n              position: absolute;\n              right: 10px;\n              background: white;\n          }\n          .choice-check svg {\n              display: none;\n          }\n          .multiple-choice-options .choice-option:hover .choice-check svg {\n              display: inline-block;\n              opacity: .25;\n          }\n          .multiple-choice-options input:checked + label + .choice-check svg {\n              display: inline-block;\n              opacity: 100% !important;\n          }\n          .multiple-choice-options input:checked + label {\n              font-weight: bold;\n              border: 1.5px solid rgba(0,0,0);\n          }\n          .multiple-choice-options input:checked + label input {\n              font-weight: bold;\n          }\n          .multiple-choice-options label {\n              width: 100%;\n              cursor: pointer;\n              padding: 10px;\n              border: 1.5px solid rgba(0,0,0,.25);\n              border-radius: 4px;\n              background: white;\n          }\n          .multiple-choice-options .choice-option-open label {\n              padding-right: 30px;\n              display: flex;\n              flex-wrap: wrap;\n              gap: 8px;\n              max-width: 100%;\n          }\n          .multiple-choice-options .choice-option-open label span {\n              width: 100%;\n          }\n          .multiple-choice-options .choice-option-open input:disabled + label {\n              opacity: 0.6;\n          }\n          .multiple-choice-options .choice-option-open label input {\n              position: relative;\n              opacity: 1;\n              flex-grow: 1;\n              border: 0;\n              outline: 0;\n          }\n          .thank-you-message-body {\n              margin-top: 6px;\n              font-size: 14px;\n              background: '
                    )
                    .concat(
                        (null == o ? void 0 : o.backgroundColor) || '#eeeded',
                        ';\n          }\n          .thank-you-message-header {\n              margin: 10px 0px 0px;\n              background: '
                    )
                    .concat(
                        (null == o ? void 0 : o.backgroundColor) || '#eeeded',
                        ';\n          }\n          .thank-you-message-container .form-submit {\n              margin-top: 20px;\n              margin-bottom: 10px;\n          }\n          .thank-you-message-countdown {\n              margin-left: 6px;\n          }\n          .bottom-section {\n              margin-top: 14px;\n          }\n          '
                    )),
            u = Object.assign(vn.createElement('style'), { innerText: c })
        Array.from(i.children).forEach(function (e) {
            e instanceof HTMLStyleElement && i.removeChild(e)
        }),
            i.appendChild(u)
        var s = K(
            (null === (n = r.appearance) || void 0 === n ? void 0 : n.backgroundColor) || ee.backgroundColor || 'white'
        )
        Y(
            Be(
                gn,
                {
                    survey: r,
                    forceDisableHtml: a,
                    style: {
                        position: 'relative',
                        right: 0,
                        borderBottom: '1px solid '.concat(
                            null === (t = r.appearance) || void 0 === t ? void 0 : t.borderColor
                        ),
                        borderRadius: 10,
                        color: s,
                    },
                    previewPageIndex: l,
                    removeSurveyFromFocus: function () {},
                    isPopup: !0,
                },
                'surveys-render-preview'
            ),
            i
        )
    },
    bn = function (e) {
        var n,
            t,
            o = e.survey,
            r = e.root,
            i = e.forceDisableHtml,
            l =
                ((t = null === (n = o.appearance) || void 0 === n ? void 0 : n.widgetColor),
                '\n        .ph-survey-widget-tab {\n            position: fixed;\n            top: 50%;\n            right: 0;\n            background: '.concat(
                    t || '#e0a045',
                    ';\n            color: white;\n            transform: rotate(-90deg) translate(0, -100%);\n            transform-origin: right top;\n            min-width: 40px;\n            padding: 8px 12px;\n            font-weight: 500;\n            border-radius: 3px 3px 0 0;\n            text-align: center;\n            cursor: pointer;\n            z-index: 9999999;\n        }\n        .ph-survey-widget-tab:hover {\n            padding-bottom: 13px;\n        }\n        .ph-survey-widget-button {\n            position: fixed;\n        }\n    '
                )),
            a = Object.assign(vn.createElement('style'), { innerText: l })
        r.appendChild(a),
            Y(
                Be(
                    Cn,
                    { forceDisableHtml: i, survey: o, readOnly: !0, removeSurveyFromFocus: function () {} },
                    'feedback-render-preview'
                ),
                r
            )
    }
function gn(e) {
    var t,
        r,
        i,
        l,
        a,
        c,
        u = e.survey,
        s = e.forceDisableHtml,
        d = e.posthog,
        p = e.style,
        _ = e.previewPageIndex,
        f = e.removeSurveyFromFocus,
        h = e.isPopup,
        v = Number.isInteger(_),
        m =
            null !== (t = u.appearance) && void 0 !== t && t.surveyPopupDelaySeconds
                ? 1e3 * u.appearance.surveyPopupDelaySeconds
                : 0,
        b = (function (e, n, t, r, i) {
            var l = o(we(r || 0 === t), 2),
                a = l[0],
                c = l[1],
                u = o(we(!1), 2),
                s = u[0],
                d = u[1]
            return (
                qe(function () {
                    if (!r && n) {
                        var o,
                            l = function () {
                                i(e.id), c(!1)
                            },
                            a = function () {
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
                                    hn.dispatchEvent(new Event('PHSurveyShown')),
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
                            hn.addEventListener('PHSurveyClosed', l),
                            hn.addEventListener('PHSurveySent', a),
                            t > 0
                                ? ((o = setTimeout(function () {
                                      u()
                                  }, t)),
                                  function () {
                                      clearTimeout(o),
                                          hn.removeEventListener('PHSurveyClosed', l),
                                          hn.removeEventListener('PHSurveySent', a)
                                  })
                                : (u(),
                                  function () {
                                      hn.removeEventListener('PHSurveyClosed', l),
                                          hn.removeEventListener('PHSurveySent', a)
                                  })
                        )
                    }
                }, []),
                { isPopupVisible: a, isSurveySent: s, setIsPopupVisible: c }
            )
        })(u, d, m, v, f),
        g = b.isPopupVisible,
        y = b.isSurveySent,
        C = b.setIsPopupVisible,
        x = y || _ === u.questions.length,
        k =
            null !== (r = p) && void 0 !== r && r.left && Oe(null === (i = p) || void 0 === i ? void 0 : i.left)
                ? { left: p.left - 40 }
                : {}
    return (
        v && (((p = p || {}).left = 'unset'), (p.right = 'unset'), (p.transform = 'unset')),
        g
            ? Be(ue.Provider, {
                  value: {
                      isPreviewMode: v,
                      previewPageIndex: _,
                      handleCloseSurveyPopup: function () {
                          return oe(u, d, v)
                      },
                      isPopup: h || !1,
                  },
                  children: x
                      ? Be(nn, {
                            header:
                                (null === (l = u.appearance) || void 0 === l ? void 0 : l.thankYouMessageHeader) ||
                                'Thank you!',
                            description:
                                (null === (a = u.appearance) || void 0 === a ? void 0 : a.thankYouMessageDescription) ||
                                '',
                            forceDisableHtml: !!s,
                            contentType:
                                null === (c = u.appearance) || void 0 === c
                                    ? void 0
                                    : c.thankYouMessageDescriptionContentType,
                            appearance: u.appearance || ee,
                            styleOverrides: n(n({}, p), k),
                            onClose: function () {
                                return C(!1)
                            },
                        })
                      : Be(yn, { survey: u, forceDisableHtml: !!s, posthog: d, styleOverrides: p }),
              })
            : Be(M, {})
    )
}
function yn(e) {
    var r,
        i,
        l = e.survey,
        a = e.forceDisableHtml,
        c = e.posthog,
        s = e.styleOverrides,
        d = K((null === (r = l.appearance) || void 0 === r ? void 0 : r.backgroundColor) || ee.backgroundColor),
        p = o(we({}), 2),
        _ = p[0],
        f = p[1],
        h = He(ue),
        v = h.isPreviewMode,
        m = h.previewPageIndex,
        b = h.handleCloseSurveyPopup,
        g = h.isPopup,
        y = o(we(m || 0), 2),
        C = y[0],
        x = y[1],
        k = Se(
            function () {
                return le(l)
            },
            [l]
        )
    qe(
        function () {
            x(null != m ? m : 0)
        },
        [m]
    )
    return Be('form', {
        className: 'survey-form',
        style: g
            ? n({ color: d, borderColor: null === (i = l.appearance) || void 0 === i ? void 0 : i.borderColor }, s)
            : {},
        children: k.map(function (e, o) {
            var r,
                i = e.originalQuestionIndex
            return (
                (v ? C === i : C === o) &&
                Be('div', {
                    className: 'survey-box',
                    style: g
                        ? {
                              backgroundColor:
                                  (null === (r = l.appearance) || void 0 === r ? void 0 : r.backgroundColor) ||
                                  ee.backgroundColor,
                          }
                        : {},
                    children: [
                        g &&
                            Be(en, {
                                onClick: function () {
                                    return b()
                                },
                            }),
                        xn({
                            question: e,
                            forceDisableHtml: a,
                            displayQuestionIndex: o,
                            appearance: l.appearance || ee,
                            onSubmit: function (e) {
                                return (function (e) {
                                    var o = e.res,
                                        r = e.originalQuestionIndex,
                                        i = e.displayQuestionIndex
                                    if (c) {
                                        var a = 0 === r ? '$survey_response' : '$survey_response_'.concat(r)
                                        if ((f(n(n({}, _), {}, t({}, a, o))), c.getNextSurveyStep)) {
                                            var s = c.getNextSurveyStep(l, i, o)
                                            s === u.End ? te(n(n({}, _), {}, t({}, a, o)), l, c) : x(s)
                                        } else
                                            i === l.questions.length - 1
                                                ? te(n(n({}, _), {}, t({}, a, o)), l, c)
                                                : x(i + 1)
                                    }
                                })({ res: e, originalQuestionIndex: i, displayQuestionIndex: o })
                            },
                        }),
                    ],
                })
            )
        }),
    })
}
function Cn(e) {
    var n,
        t,
        r = e.survey,
        i = e.forceDisableHtml,
        l = e.posthog,
        a = e.readOnly,
        c = e.removeSurveyFromFocus,
        u = o(we(!1), 2),
        s = u[0],
        d = u[1],
        p = o(we({}), 2),
        _ = p[0],
        f = p[1],
        h = Te(null)
    return (
        qe(function () {
            var e, n
            if (!a && l) {
                if ('tab' === (null === (e = r.appearance) || void 0 === e ? void 0 : e.widgetType) && h.current) {
                    var t,
                        o = h.current.getBoundingClientRect(),
                        i = {
                            top: '50%',
                            left: parseInt(''.concat(o.right - 360)),
                            bottom: 'auto',
                            borderRadius: 10,
                            borderBottom: '1.5px solid '.concat(
                                (null === (t = r.appearance) || void 0 === t ? void 0 : t.borderColor) || '#c9c6c6'
                            ),
                        }
                    f(i)
                }
                if ('selector' === (null === (n = r.appearance) || void 0 === n ? void 0 : n.widgetType)) {
                    var c = vn.querySelector(r.appearance.widgetSelector || '')
                    null == c ||
                        c.addEventListener('click', function () {
                            d(!s)
                        }),
                        null == c || c.setAttribute('PHWidgetSurveyClickListener', 'true')
                }
            }
        }, []),
        Be(M, {
            children: [
                'tab' === (null === (n = r.appearance) || void 0 === n ? void 0 : n.widgetType) &&
                    Be('div', {
                        className: 'ph-survey-widget-tab',
                        ref: h,
                        onClick: function () {
                            return !a && d(!s)
                        },
                        style: { color: K(r.appearance.widgetColor) },
                        children: [
                            Be('div', { className: 'ph-survey-widget-tab-icon' }),
                            (null === (t = r.appearance) || void 0 === t ? void 0 : t.widgetLabel) || '',
                        ],
                    }),
                s &&
                    Be(
                        gn,
                        { posthog: l, survey: r, forceDisableHtml: i, style: _, removeSurveyFromFocus: c, isPopup: !0 },
                        'feedback-widget-survey'
                    ),
            ],
        })
    )
}
var xn = function (e) {
    var o,
        r,
        i = e.question,
        l = e.forceDisableHtml,
        a = e.displayQuestionIndex,
        u = e.appearance,
        s = e.onSubmit,
        d =
            (t((o = {}), c.Open, on),
            t(o, c.Link, rn),
            t(o, c.Rating, ln),
            t(o, c.SingleChoice, cn),
            t(o, c.MultipleChoice, cn),
            o),
        p = { question: i, forceDisableHtml: l, appearance: u, onSubmit: s },
        _ =
            (t((r = {}), c.Open, {}),
            t(r, c.Link, {}),
            t(r, c.Rating, { displayQuestionIndex: a }),
            t(r, c.SingleChoice, { displayQuestionIndex: a }),
            t(r, c.MultipleChoice, { displayQuestionIndex: a }),
            r),
        f = d[i.type],
        h = n(n({}, p), _[i.type])
    return Be(f, n({}, h))
}
export { bn as renderFeedbackWidgetPreview, mn as renderSurveysPreview }
//# sourceMappingURL=surveys-preview.js.map
