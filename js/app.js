!function(e) {
    var t = {};
    function i(n) {
        if (t[n])
            return t[n].exports;
        var s = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(s.exports, s, s.exports, i),
        s.l = !0,
        s.exports
    }
    i.m = e,
    i.c = t,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var s in e)
                i.d(n, s, function(t) {
                    return e[t]
                }
                .bind(null, s));
        return n
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "assets",
    i(i.s = 5)
}([function(e, t, i) {
    var n;
    /*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
    !function(t, i) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? i(t, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return i(e)
        }
        : i(t)
    }("undefined" != typeof window ? window : this, (function(i, s) {
        "use strict";
        var r = []
          , a = i.document
          , o = Object.getPrototypeOf
          , l = r.slice
          , d = r.concat
          , c = r.push
          , u = r.indexOf
          , p = {}
          , h = p.toString
          , f = p.hasOwnProperty
          , m = f.toString
          , g = m.call(Object)
          , v = {}
          , T = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }
          , b = function(e) {
            return null != e && e === e.window
        }
          , y = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };
        function S(e, t, i) {
            var n, s, r = (i = i || a).createElement("script");
            if (r.text = e,
            t)
                for (n in y)
                    (s = t[n] || t.getAttribute && t.getAttribute(n)) && r.setAttribute(n, s);
            i.head.appendChild(r).parentNode.removeChild(r)
        }
        function w(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[h.call(e)] || "object" : typeof e
        }
        var C = function(e, t) {
            return new C.fn.init(e,t)
        }
          , x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function E(e) {
            var t = !!e && "length"in e && e.length
              , i = w(e);
            return !T(e) && !b(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        C.fn = C.prototype = {
            jquery: "3.4.1",
            constructor: C,
            length: 0,
            toArray: function() {
                return l.call(this)
            },
            get: function(e) {
                return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = C.merge(this.constructor(), e);
                return t.prevObject = this,
                t
            },
            each: function(e) {
                return C.each(this, e)
            },
            map: function(e) {
                return this.pushStack(C.map(this, (function(t, i) {
                    return e.call(t, i, t)
                }
                )))
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length
                  , i = +e + (e < 0 ? t : 0);
                return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: c,
            sort: r.sort,
            splice: r.splice
        },
        C.extend = C.fn.extend = function() {
            var e, t, i, n, s, r, a = arguments[0] || {}, o = 1, l = arguments.length, d = !1;
            for ("boolean" == typeof a && (d = a,
            a = arguments[o] || {},
            o++),
            "object" == typeof a || T(a) || (a = {}),
            o === l && (a = this,
            o--); o < l; o++)
                if (null != (e = arguments[o]))
                    for (t in e)
                        n = e[t],
                        "__proto__" !== t && a !== n && (d && n && (C.isPlainObject(n) || (s = Array.isArray(n))) ? (i = a[t],
                        r = s && !Array.isArray(i) ? [] : s || C.isPlainObject(i) ? i : {},
                        s = !1,
                        a[t] = C.extend(d, r, n)) : void 0 !== n && (a[t] = n));
            return a
        }
        ,
        C.extend({
            expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, i;
                return !(!e || "[object Object]" !== h.call(e)) && (!(t = o(e)) || "function" == typeof (i = f.call(t, "constructor") && t.constructor) && m.call(i) === g)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            globalEval: function(e, t) {
                S(e, {
                    nonce: t && t.nonce
                })
            },
            each: function(e, t) {
                var i, n = 0;
                if (E(e))
                    for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++)
                        ;
                else
                    for (n in e)
                        if (!1 === t.call(e[n], n, e[n]))
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(x, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (E(Object(e)) ? C.merge(i, "string" == typeof e ? [e] : e) : c.call(i, e)),
                i
            },
            inArray: function(e, t, i) {
                return null == t ? -1 : u.call(t, e, i)
            },
            merge: function(e, t) {
                for (var i = +t.length, n = 0, s = e.length; n < i; n++)
                    e[s++] = t[n];
                return e.length = s,
                e
            },
            grep: function(e, t, i) {
                for (var n = [], s = 0, r = e.length, a = !i; s < r; s++)
                    !t(e[s], s) !== a && n.push(e[s]);
                return n
            },
            map: function(e, t, i) {
                var n, s, r = 0, a = [];
                if (E(e))
                    for (n = e.length; r < n; r++)
                        null != (s = t(e[r], r, i)) && a.push(s);
                else
                    for (r in e)
                        null != (s = t(e[r], r, i)) && a.push(s);
                return d.apply([], a)
            },
            guid: 1,
            support: v
        }),
        "function" == typeof Symbol && (C.fn[Symbol.iterator] = r[Symbol.iterator]),
        C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
            p["[object " + t + "]"] = t.toLowerCase()
        }
        ));
        var M = /*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
        function(e) {
            var t, i, n, s, r, a, o, l, d, c, u, p, h, f, m, g, v, T, b, y = "sizzle" + 1 * new Date, S = e.document, w = 0, C = 0, x = le(), E = le(), M = le(), P = le(), A = function(e, t) {
                return e === t && (u = !0),
                0
            }, G = {}.hasOwnProperty, H = [], D = H.pop, B = H.push, I = H.push, k = H.slice, L = function(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t)
                        return i;
                return -1
            }, N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", $ = "[\\x20\\t\\r\\n\\f]", O = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", z = "\\[" + $ + "*(" + O + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + $ + "*\\]", R = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)", V = new RegExp($ + "+","g"), X = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$","g"), F = new RegExp("^" + $ + "*," + $ + "*"), W = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"), j = new RegExp($ + "|>"), Y = new RegExp(R), _ = new RegExp("^" + O + "$"), q = {
                ID: new RegExp("^#(" + O + ")"),
                CLASS: new RegExp("^\\.(" + O + ")"),
                TAG: new RegExp("^(" + O + "|[*])"),
                ATTR: new RegExp("^" + z),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)","i"),
                bool: new RegExp("^(?:" + N + ")$","i"),
                needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)","i")
            }, U = /HTML$/i, K = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + $ + "?|(" + $ + ")|.)","ig"), ie = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, se = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, re = function() {
                p()
            }, ae = ye((function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }
            ), {
                dir: "parentNode",
                next: "legend"
            });
            try {
                I.apply(H = k.call(S.childNodes), S.childNodes),
                H[S.childNodes.length].nodeType
            } catch (e) {
                I = {
                    apply: H.length ? function(e, t) {
                        B.apply(e, k.call(t))
                    }
                    : function(e, t) {
                        for (var i = e.length, n = 0; e[i++] = t[n++]; )
                            ;
                        e.length = i - 1
                    }
                }
            }
            function oe(e, t, n, s) {
                var r, o, d, c, u, f, v, T = t && t.ownerDocument, w = t ? t.nodeType : 9;
                if (n = n || [],
                "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w)
                    return n;
                if (!s && ((t ? t.ownerDocument || t : S) !== h && p(t),
                t = t || h,
                m)) {
                    if (11 !== w && (u = J.exec(e)))
                        if (r = u[1]) {
                            if (9 === w) {
                                if (!(d = t.getElementById(r)))
                                    return n;
                                if (d.id === r)
                                    return n.push(d),
                                    n
                            } else if (T && (d = T.getElementById(r)) && b(t, d) && d.id === r)
                                return n.push(d),
                                n
                        } else {
                            if (u[2])
                                return I.apply(n, t.getElementsByTagName(e)),
                                n;
                            if ((r = u[3]) && i.getElementsByClassName && t.getElementsByClassName)
                                return I.apply(n, t.getElementsByClassName(r)),
                                n
                        }
                    if (i.qsa && !P[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                        if (v = e,
                        T = t,
                        1 === w && j.test(e)) {
                            for ((c = t.getAttribute("id")) ? c = c.replace(ne, se) : t.setAttribute("id", c = y),
                            o = (f = a(e)).length; o--; )
                                f[o] = "#" + c + " " + be(f[o]);
                            v = f.join(","),
                            T = ee.test(e) && ve(t.parentNode) || t
                        }
                        try {
                            return I.apply(n, T.querySelectorAll(v)),
                            n
                        } catch (t) {
                            P(e, !0)
                        } finally {
                            c === y && t.removeAttribute("id")
                        }
                    }
                }
                return l(e.replace(X, "$1"), t, n, s)
            }
            function le() {
                var e = [];
                return function t(i, s) {
                    return e.push(i + " ") > n.cacheLength && delete t[e.shift()],
                    t[i + " "] = s
                }
            }
            function de(e) {
                return e[y] = !0,
                e
            }
            function ce(e) {
                var t = h.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function ue(e, t) {
                for (var i = e.split("|"), s = i.length; s--; )
                    n.attrHandle[i[s]] = t
            }
            function pe(e, t) {
                var i = t && e
                  , n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (n)
                    return n;
                if (i)
                    for (; i = i.nextSibling; )
                        if (i === t)
                            return -1;
                return e ? 1 : -1
            }
            function he(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }
            function fe(e) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && t.type === e
                }
            }
            function me(e) {
                return function(t) {
                    return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label"in t && t.disabled === e
                }
            }
            function ge(e) {
                return de((function(t) {
                    return t = +t,
                    de((function(i, n) {
                        for (var s, r = e([], i.length, t), a = r.length; a--; )
                            i[s = r[a]] && (i[s] = !(n[s] = i[s]))
                    }
                    ))
                }
                ))
            }
            function ve(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in i = oe.support = {},
            r = oe.isXML = function(e) {
                var t = e.namespaceURI
                  , i = (e.ownerDocument || e).documentElement;
                return !U.test(t || i && i.nodeName || "HTML")
            }
            ,
            p = oe.setDocument = function(e) {
                var t, s, a = e ? e.ownerDocument || e : S;
                return a !== h && 9 === a.nodeType && a.documentElement ? (f = (h = a).documentElement,
                m = !r(h),
                S !== h && (s = h.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", re, !1) : s.attachEvent && s.attachEvent("onunload", re)),
                i.attributes = ce((function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }
                )),
                i.getElementsByTagName = ce((function(e) {
                    return e.appendChild(h.createComment("")),
                    !e.getElementsByTagName("*").length
                }
                )),
                i.getElementsByClassName = Z.test(h.getElementsByClassName),
                i.getById = ce((function(e) {
                    return f.appendChild(e).id = y,
                    !h.getElementsByName || !h.getElementsByName(y).length
                }
                )),
                i.getById ? (n.filter.ID = function(e) {
                    var t = e.replace(te, ie);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                ,
                n.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var i = t.getElementById(e);
                        return i ? [i] : []
                    }
                }
                ) : (n.filter.ID = function(e) {
                    var t = e.replace(te, ie);
                    return function(e) {
                        var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return i && i.value === t
                    }
                }
                ,
                n.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var i, n, s, r = t.getElementById(e);
                        if (r) {
                            if ((i = r.getAttributeNode("id")) && i.value === e)
                                return [r];
                            for (s = t.getElementsByName(e),
                            n = 0; r = s[n++]; )
                                if ((i = r.getAttributeNode("id")) && i.value === e)
                                    return [r]
                        }
                        return []
                    }
                }
                ),
                n.find.TAG = i.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
                }
                : function(e, t) {
                    var i, n = [], s = 0, r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; i = r[s++]; )
                            1 === i.nodeType && n.push(i);
                        return n
                    }
                    return r
                }
                ,
                n.find.CLASS = i.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && m)
                        return t.getElementsByClassName(e)
                }
                ,
                v = [],
                g = [],
                (i.qsa = Z.test(h.querySelectorAll)) && (ce((function(e) {
                    f.appendChild(e).innerHTML = "<a id='" + y + "'></a><select id='" + y + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + $ + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || g.push("\\[" + $ + "*(?:value|" + N + ")"),
                    e.querySelectorAll("[id~=" + y + "-]").length || g.push("~="),
                    e.querySelectorAll(":checked").length || g.push(":checked"),
                    e.querySelectorAll("a#" + y + "+*").length || g.push(".#.+[+~]")
                }
                )),
                ce((function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && g.push("name" + $ + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                    f.appendChild(e).disabled = !0,
                    2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    g.push(",.*:")
                }
                ))),
                (i.matchesSelector = Z.test(T = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ce((function(e) {
                    i.disconnectedMatch = T.call(e, "*"),
                    T.call(e, "[s!='']:x"),
                    v.push("!=", R)
                }
                )),
                g = g.length && new RegExp(g.join("|")),
                v = v.length && new RegExp(v.join("|")),
                t = Z.test(f.compareDocumentPosition),
                b = t || Z.test(f.contains) ? function(e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e
                      , n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                }
                : function(e, t) {
                    if (t)
                        for (; t = t.parentNode; )
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                A = t ? function(e, t) {
                    if (e === t)
                        return u = !0,
                        0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === h || e.ownerDocument === S && b(S, e) ? -1 : t === h || t.ownerDocument === S && b(S, t) ? 1 : c ? L(c, e) - L(c, t) : 0 : 4 & n ? -1 : 1)
                }
                : function(e, t) {
                    if (e === t)
                        return u = !0,
                        0;
                    var i, n = 0, s = e.parentNode, r = t.parentNode, a = [e], o = [t];
                    if (!s || !r)
                        return e === h ? -1 : t === h ? 1 : s ? -1 : r ? 1 : c ? L(c, e) - L(c, t) : 0;
                    if (s === r)
                        return pe(e, t);
                    for (i = e; i = i.parentNode; )
                        a.unshift(i);
                    for (i = t; i = i.parentNode; )
                        o.unshift(i);
                    for (; a[n] === o[n]; )
                        n++;
                    return n ? pe(a[n], o[n]) : a[n] === S ? -1 : o[n] === S ? 1 : 0
                }
                ,
                h) : h
            }
            ,
            oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }
            ,
            oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== h && p(e),
                i.matchesSelector && m && !P[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t)))
                    try {
                        var n = T.call(e, t);
                        if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return n
                    } catch (e) {
                        P(t, !0)
                    }
                return oe(t, h, null, [e]).length > 0
            }
            ,
            oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== h && p(e),
                b(e, t)
            }
            ,
            oe.attr = function(e, t) {
                (e.ownerDocument || e) !== h && p(e);
                var s = n.attrHandle[t.toLowerCase()]
                  , r = s && G.call(n.attrHandle, t.toLowerCase()) ? s(e, t, !m) : void 0;
                return void 0 !== r ? r : i.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            ,
            oe.escape = function(e) {
                return (e + "").replace(ne, se)
            }
            ,
            oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            oe.uniqueSort = function(e) {
                var t, n = [], s = 0, r = 0;
                if (u = !i.detectDuplicates,
                c = !i.sortStable && e.slice(0),
                e.sort(A),
                u) {
                    for (; t = e[r++]; )
                        t === e[r] && (s = n.push(r));
                    for (; s--; )
                        e.splice(n[s], 1)
                }
                return c = null,
                e
            }
            ,
            s = oe.getText = function(e) {
                var t, i = "", n = 0, r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            i += s(e)
                    } else if (3 === r || 4 === r)
                        return e.nodeValue
                } else
                    for (; t = e[n++]; )
                        i += s(t);
                return i
            }
            ,
            (n = oe.selectors = {
                cacheLength: 50,
                createPseudo: de,
                match: q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ie),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, i = !e[6] && e[2];
                        return q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && Y.test(i) && (t = a(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t),
                        e[2] = i.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ie).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                        : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = x[e + " "];
                        return t || (t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && x(e, (function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }
                        ))
                    },
                    ATTR: function(e, t, i) {
                        return function(n) {
                            var s = oe.attr(n, e);
                            return null == s ? "!=" === t : !t || (s += "",
                            "=" === t ? s === i : "!=" === t ? s !== i : "^=" === t ? i && 0 === s.indexOf(i) : "*=" === t ? i && s.indexOf(i) > -1 : "$=" === t ? i && s.slice(-i.length) === i : "~=" === t ? (" " + s.replace(V, " ") + " ").indexOf(i) > -1 : "|=" === t && (s === i || s.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, i, n, s) {
                        var r = "nth" !== e.slice(0, 3)
                          , a = "last" !== e.slice(-4)
                          , o = "of-type" === t;
                        return 1 === n && 0 === s ? function(e) {
                            return !!e.parentNode
                        }
                        : function(t, i, l) {
                            var d, c, u, p, h, f, m = r !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = o && t.nodeName.toLowerCase(), T = !l && !o, b = !1;
                            if (g) {
                                if (r) {
                                    for (; m; ) {
                                        for (p = t; p = p[m]; )
                                            if (o ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                                return !1;
                                        f = m = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? g.firstChild : g.lastChild],
                                a && T) {
                                    for (b = (h = (d = (c = (u = (p = g)[y] || (p[y] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === w && d[1]) && d[2],
                                    p = h && g.childNodes[h]; p = ++h && p && p[m] || (b = h = 0) || f.pop(); )
                                        if (1 === p.nodeType && ++b && p === t) {
                                            c[e] = [w, h, b];
                                            break
                                        }
                                } else if (T && (b = h = (d = (c = (u = (p = t)[y] || (p[y] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === w && d[1]),
                                !1 === b)
                                    for (; (p = ++h && p && p[m] || (b = h = 0) || f.pop()) && ((o ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (T && ((c = (u = p[y] || (p[y] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [w, b]),
                                    p !== t)); )
                                        ;
                                return (b -= s) === n || b % n == 0 && b / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var i, s = n.pseudos[e] || n.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return s[y] ? s(t) : s.length > 1 ? (i = [e, e, "", t],
                        n.setFilters.hasOwnProperty(e.toLowerCase()) ? de((function(e, i) {
                            for (var n, r = s(e, t), a = r.length; a--; )
                                e[n = L(e, r[a])] = !(i[n] = r[a])
                        }
                        )) : function(e) {
                            return s(e, 0, i)
                        }
                        ) : s
                    }
                },
                pseudos: {
                    not: de((function(e) {
                        var t = []
                          , i = []
                          , n = o(e.replace(X, "$1"));
                        return n[y] ? de((function(e, t, i, s) {
                            for (var r, a = n(e, null, s, []), o = e.length; o--; )
                                (r = a[o]) && (e[o] = !(t[o] = r))
                        }
                        )) : function(e, s, r) {
                            return t[0] = e,
                            n(t, null, r, i),
                            t[0] = null,
                            !i.pop()
                        }
                    }
                    )),
                    has: de((function(e) {
                        return function(t) {
                            return oe(e, t).length > 0
                        }
                    }
                    )),
                    contains: de((function(e) {
                        return e = e.replace(te, ie),
                        function(t) {
                            return (t.textContent || s(t)).indexOf(e) > -1
                        }
                    }
                    )),
                    lang: de((function(e) {
                        return _.test(e || "") || oe.error("unsupported lang: " + e),
                        e = e.replace(te, ie).toLowerCase(),
                        function(t) {
                            var i;
                            do {
                                if (i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }
                    )),
                    target: function(t) {
                        var i = e.location && e.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === f
                    },
                    focus: function(e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: me(!1),
                    disabled: me(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !n.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Q.test(e.nodeName)
                    },
                    input: function(e) {
                        return K.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ge((function() {
                        return [0]
                    }
                    )),
                    last: ge((function(e, t) {
                        return [t - 1]
                    }
                    )),
                    eq: ge((function(e, t, i) {
                        return [i < 0 ? i + t : i]
                    }
                    )),
                    even: ge((function(e, t) {
                        for (var i = 0; i < t; i += 2)
                            e.push(i);
                        return e
                    }
                    )),
                    odd: ge((function(e, t) {
                        for (var i = 1; i < t; i += 2)
                            e.push(i);
                        return e
                    }
                    )),
                    lt: ge((function(e, t, i) {
                        for (var n = i < 0 ? i + t : i > t ? t : i; --n >= 0; )
                            e.push(n);
                        return e
                    }
                    )),
                    gt: ge((function(e, t, i) {
                        for (var n = i < 0 ? i + t : i; ++n < t; )
                            e.push(n);
                        return e
                    }
                    ))
                }
            }).pseudos.nth = n.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                n.pseudos[t] = he(t);
            for (t in {
                submit: !0,
                reset: !0
            })
                n.pseudos[t] = fe(t);
            function Te() {}
            function be(e) {
                for (var t = 0, i = e.length, n = ""; t < i; t++)
                    n += e[t].value;
                return n
            }
            function ye(e, t, i) {
                var n = t.dir
                  , s = t.next
                  , r = s || n
                  , a = i && "parentNode" === r
                  , o = C++;
                return t.first ? function(t, i, s) {
                    for (; t = t[n]; )
                        if (1 === t.nodeType || a)
                            return e(t, i, s);
                    return !1
                }
                : function(t, i, l) {
                    var d, c, u, p = [w, o];
                    if (l) {
                        for (; t = t[n]; )
                            if ((1 === t.nodeType || a) && e(t, i, l))
                                return !0
                    } else
                        for (; t = t[n]; )
                            if (1 === t.nodeType || a)
                                if (c = (u = t[y] || (t[y] = {}))[t.uniqueID] || (u[t.uniqueID] = {}),
                                s && s === t.nodeName.toLowerCase())
                                    t = t[n] || t;
                                else {
                                    if ((d = c[r]) && d[0] === w && d[1] === o)
                                        return p[2] = d[2];
                                    if (c[r] = p,
                                    p[2] = e(t, i, l))
                                        return !0
                                }
                    return !1
                }
            }
            function Se(e) {
                return e.length > 1 ? function(t, i, n) {
                    for (var s = e.length; s--; )
                        if (!e[s](t, i, n))
                            return !1;
                    return !0
                }
                : e[0]
            }
            function we(e, t, i, n, s) {
                for (var r, a = [], o = 0, l = e.length, d = null != t; o < l; o++)
                    (r = e[o]) && (i && !i(r, n, s) || (a.push(r),
                    d && t.push(o)));
                return a
            }
            function Ce(e, t, i, n, s, r) {
                return n && !n[y] && (n = Ce(n)),
                s && !s[y] && (s = Ce(s, r)),
                de((function(r, a, o, l) {
                    var d, c, u, p = [], h = [], f = a.length, m = r || function(e, t, i) {
                        for (var n = 0, s = t.length; n < s; n++)
                            oe(e, t[n], i);
                        return i
                    }(t || "*", o.nodeType ? [o] : o, []), g = !e || !r && t ? m : we(m, p, e, o, l), v = i ? s || (r ? e : f || n) ? [] : a : g;
                    if (i && i(g, v, o, l),
                    n)
                        for (d = we(v, h),
                        n(d, [], o, l),
                        c = d.length; c--; )
                            (u = d[c]) && (v[h[c]] = !(g[h[c]] = u));
                    if (r) {
                        if (s || e) {
                            if (s) {
                                for (d = [],
                                c = v.length; c--; )
                                    (u = v[c]) && d.push(g[c] = u);
                                s(null, v = [], d, l)
                            }
                            for (c = v.length; c--; )
                                (u = v[c]) && (d = s ? L(r, u) : p[c]) > -1 && (r[d] = !(a[d] = u))
                        }
                    } else
                        v = we(v === a ? v.splice(f, v.length) : v),
                        s ? s(null, a, v, l) : I.apply(a, v)
                }
                ))
            }
            function xe(e) {
                for (var t, i, s, r = e.length, a = n.relative[e[0].type], o = a || n.relative[" "], l = a ? 1 : 0, c = ye((function(e) {
                    return e === t
                }
                ), o, !0), u = ye((function(e) {
                    return L(t, e) > -1
                }
                ), o, !0), p = [function(e, i, n) {
                    var s = !a && (n || i !== d) || ((t = i).nodeType ? c(e, i, n) : u(e, i, n));
                    return t = null,
                    s
                }
                ]; l < r; l++)
                    if (i = n.relative[e[l].type])
                        p = [ye(Se(p), i)];
                    else {
                        if ((i = n.filter[e[l].type].apply(null, e[l].matches))[y]) {
                            for (s = ++l; s < r && !n.relative[e[s].type]; s++)
                                ;
                            return Ce(l > 1 && Se(p), l > 1 && be(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*" : ""
                            })).replace(X, "$1"), i, l < s && xe(e.slice(l, s)), s < r && xe(e = e.slice(s)), s < r && be(e))
                        }
                        p.push(i)
                    }
                return Se(p)
            }
            return Te.prototype = n.filters = n.pseudos,
            n.setFilters = new Te,
            a = oe.tokenize = function(e, t) {
                var i, s, r, a, o, l, d, c = E[e + " "];
                if (c)
                    return t ? 0 : c.slice(0);
                for (o = e,
                l = [],
                d = n.preFilter; o; ) {
                    for (a in i && !(s = F.exec(o)) || (s && (o = o.slice(s[0].length) || o),
                    l.push(r = [])),
                    i = !1,
                    (s = W.exec(o)) && (i = s.shift(),
                    r.push({
                        value: i,
                        type: s[0].replace(X, " ")
                    }),
                    o = o.slice(i.length)),
                    n.filter)
                        !(s = q[a].exec(o)) || d[a] && !(s = d[a](s)) || (i = s.shift(),
                        r.push({
                            value: i,
                            type: a,
                            matches: s
                        }),
                        o = o.slice(i.length));
                    if (!i)
                        break
                }
                return t ? o.length : o ? oe.error(e) : E(e, l).slice(0)
            }
            ,
            o = oe.compile = function(e, t) {
                var i, s = [], r = [], o = M[e + " "];
                if (!o) {
                    for (t || (t = a(e)),
                    i = t.length; i--; )
                        (o = xe(t[i]))[y] ? s.push(o) : r.push(o);
                    (o = M(e, function(e, t) {
                        var i = t.length > 0
                          , s = e.length > 0
                          , r = function(r, a, o, l, c) {
                            var u, f, g, v = 0, T = "0", b = r && [], y = [], S = d, C = r || s && n.find.TAG("*", c), x = w += null == S ? 1 : Math.random() || .1, E = C.length;
                            for (c && (d = a === h || a || c); T !== E && null != (u = C[T]); T++) {
                                if (s && u) {
                                    for (f = 0,
                                    a || u.ownerDocument === h || (p(u),
                                    o = !m); g = e[f++]; )
                                        if (g(u, a || h, o)) {
                                            l.push(u);
                                            break
                                        }
                                    c && (w = x)
                                }
                                i && ((u = !g && u) && v--,
                                r && b.push(u))
                            }
                            if (v += T,
                            i && T !== v) {
                                for (f = 0; g = t[f++]; )
                                    g(b, y, a, o);
                                if (r) {
                                    if (v > 0)
                                        for (; T--; )
                                            b[T] || y[T] || (y[T] = D.call(l));
                                    y = we(y)
                                }
                                I.apply(l, y),
                                c && !r && y.length > 0 && v + t.length > 1 && oe.uniqueSort(l)
                            }
                            return c && (w = x,
                            d = S),
                            b
                        };
                        return i ? de(r) : r
                    }(r, s))).selector = e
                }
                return o
            }
            ,
            l = oe.select = function(e, t, i, s) {
                var r, l, d, c, u, p = "function" == typeof e && e, h = !s && a(e = p.selector || e);
                if (i = i || [],
                1 === h.length) {
                    if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (d = l[0]).type && 9 === t.nodeType && m && n.relative[l[1].type]) {
                        if (!(t = (n.find.ID(d.matches[0].replace(te, ie), t) || [])[0]))
                            return i;
                        p && (t = t.parentNode),
                        e = e.slice(l.shift().value.length)
                    }
                    for (r = q.needsContext.test(e) ? 0 : l.length; r-- && (d = l[r],
                    !n.relative[c = d.type]); )
                        if ((u = n.find[c]) && (s = u(d.matches[0].replace(te, ie), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                            if (l.splice(r, 1),
                            !(e = s.length && be(l)))
                                return I.apply(i, s),
                                i;
                            break
                        }
                }
                return (p || o(e, h))(s, t, !m, i, !t || ee.test(e) && ve(t.parentNode) || t),
                i
            }
            ,
            i.sortStable = y.split("").sort(A).join("") === y,
            i.detectDuplicates = !!u,
            p(),
            i.sortDetached = ce((function(e) {
                return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
            }
            )),
            ce((function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }
            )) || ue("type|href|height|width", (function(e, t, i) {
                if (!i)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }
            )),
            i.attributes && ce((function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }
            )) || ue("value", (function(e, t, i) {
                if (!i && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }
            )),
            ce((function(e) {
                return null == e.getAttribute("disabled")
            }
            )) || ue(N, (function(e, t, i) {
                var n;
                if (!i)
                    return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }
            )),
            oe
        }(i);
        C.find = M,
        C.expr = M.selectors,
        C.expr[":"] = C.expr.pseudos,
        C.uniqueSort = C.unique = M.uniqueSort,
        C.text = M.getText,
        C.isXMLDoc = M.isXML,
        C.contains = M.contains,
        C.escapeSelector = M.escape;
        var P = function(e, t, i) {
            for (var n = [], s = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (s && C(e).is(i))
                        break;
                    n.push(e)
                }
            return n
        }
          , A = function(e, t) {
            for (var i = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && i.push(e);
            return i
        }
          , G = C.expr.match.needsContext;
        function H(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function B(e, t, i) {
            return T(t) ? C.grep(e, (function(e, n) {
                return !!t.call(e, n, e) !== i
            }
            )) : t.nodeType ? C.grep(e, (function(e) {
                return e === t !== i
            }
            )) : "string" != typeof t ? C.grep(e, (function(e) {
                return u.call(t, e) > -1 !== i
            }
            )) : C.filter(t, e, i)
        }
        C.filter = function(e, t, i) {
            var n = t[0];
            return i && (e = ":not(" + e + ")"),
            1 === t.length && 1 === n.nodeType ? C.find.matchesSelector(n, e) ? [n] : [] : C.find.matches(e, C.grep(t, (function(e) {
                return 1 === e.nodeType
            }
            )))
        }
        ,
        C.fn.extend({
            find: function(e) {
                var t, i, n = this.length, s = this;
                if ("string" != typeof e)
                    return this.pushStack(C(e).filter((function() {
                        for (t = 0; t < n; t++)
                            if (C.contains(s[t], this))
                                return !0
                    }
                    )));
                for (i = this.pushStack([]),
                t = 0; t < n; t++)
                    C.find(e, s[t], i);
                return n > 1 ? C.uniqueSort(i) : i
            },
            filter: function(e) {
                return this.pushStack(B(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(B(this, e || [], !0))
            },
            is: function(e) {
                return !!B(this, "string" == typeof e && G.test(e) ? C(e) : e || [], !1).length
            }
        });
        var I, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function(e, t, i) {
            var n, s;
            if (!e)
                return this;
            if (i = i || I,
            "string" == typeof e) {
                if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : k.exec(e)) || !n[1] && t)
                    return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof C ? t[0] : t,
                    C.merge(this, C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : a, !0)),
                    D.test(n[1]) && C.isPlainObject(t))
                        for (n in t)
                            T(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return (s = a.getElementById(n[2])) && (this[0] = s,
                this.length = 1),
                this
            }
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : T(e) ? void 0 !== i.ready ? i.ready(e) : e(C) : C.makeArray(e, this)
        }
        ).prototype = C.fn,
        I = C(a);
        var L = /^(?:parents|prev(?:Until|All))/
          , N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function $(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; )
                ;
            return e
        }
        C.fn.extend({
            has: function(e) {
                var t = C(e, this)
                  , i = t.length;
                return this.filter((function() {
                    for (var e = 0; e < i; e++)
                        if (C.contains(this, t[e]))
                            return !0
                }
                ))
            },
            closest: function(e, t) {
                var i, n = 0, s = this.length, r = [], a = "string" != typeof e && C(e);
                if (!G.test(e))
                    for (; n < s; n++)
                        for (i = this[n]; i && i !== t; i = i.parentNode)
                            if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && C.find.matchesSelector(i, e))) {
                                r.push(i);
                                break
                            }
                return this.pushStack(r.length > 1 ? C.uniqueSort(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? u.call(C(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        C.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return P(e, "parentNode")
            },
            parentsUntil: function(e, t, i) {
                return P(e, "parentNode", i)
            },
            next: function(e) {
                return $(e, "nextSibling")
            },
            prev: function(e) {
                return $(e, "previousSibling")
            },
            nextAll: function(e) {
                return P(e, "nextSibling")
            },
            prevAll: function(e) {
                return P(e, "previousSibling")
            },
            nextUntil: function(e, t, i) {
                return P(e, "nextSibling", i)
            },
            prevUntil: function(e, t, i) {
                return P(e, "previousSibling", i)
            },
            siblings: function(e) {
                return A((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return A(e.firstChild)
            },
            contents: function(e) {
                return void 0 !== e.contentDocument ? e.contentDocument : (H(e, "template") && (e = e.content || e),
                C.merge([], e.childNodes))
            }
        }, (function(e, t) {
            C.fn[e] = function(i, n) {
                var s = C.map(this, t, i);
                return "Until" !== e.slice(-5) && (n = i),
                n && "string" == typeof n && (s = C.filter(n, s)),
                this.length > 1 && (N[e] || C.uniqueSort(s),
                L.test(e) && s.reverse()),
                this.pushStack(s)
            }
        }
        ));
        var O = /[^\x20\t\r\n\f]+/g;
        function z(e) {
            return e
        }
        function R(e) {
            throw e
        }
        function V(e, t, i, n) {
            var s;
            try {
                e && T(s = e.promise) ? s.call(e).done(t).fail(i) : e && T(s = e.then) ? s.call(e, t, i) : t.apply(void 0, [e].slice(n))
            } catch (e) {
                i.apply(void 0, [e])
            }
        }
        C.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return C.each(e.match(O) || [], (function(e, i) {
                    t[i] = !0
                }
                )),
                t
            }(e) : C.extend({}, e);
            var t, i, n, s, r = [], a = [], o = -1, l = function() {
                for (s = s || e.once,
                n = t = !0; a.length; o = -1)
                    for (i = a.shift(); ++o < r.length; )
                        !1 === r[o].apply(i[0], i[1]) && e.stopOnFalse && (o = r.length,
                        i = !1);
                e.memory || (i = !1),
                t = !1,
                s && (r = i ? [] : "")
            }, d = {
                add: function() {
                    return r && (i && !t && (o = r.length - 1,
                    a.push(i)),
                    function t(i) {
                        C.each(i, (function(i, n) {
                            T(n) ? e.unique && d.has(n) || r.push(n) : n && n.length && "string" !== w(n) && t(n)
                        }
                        ))
                    }(arguments),
                    i && !t && l()),
                    this
                },
                remove: function() {
                    return C.each(arguments, (function(e, t) {
                        for (var i; (i = C.inArray(t, r, i)) > -1; )
                            r.splice(i, 1),
                            i <= o && o--
                    }
                    )),
                    this
                },
                has: function(e) {
                    return e ? C.inArray(e, r) > -1 : r.length > 0
                },
                empty: function() {
                    return r && (r = []),
                    this
                },
                disable: function() {
                    return s = a = [],
                    r = i = "",
                    this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return s = a = [],
                    i || t || (r = i = ""),
                    this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, i) {
                    return s || (i = [e, (i = i || []).slice ? i.slice() : i],
                    a.push(i),
                    t || l()),
                    this
                },
                fire: function() {
                    return d.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!n
                }
            };
            return d
        }
        ,
        C.extend({
            Deferred: function(e) {
                var t = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]]
                  , n = "pending"
                  , s = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return C.Deferred((function(i) {
                            C.each(t, (function(t, n) {
                                var s = T(e[n[4]]) && e[n[4]];
                                r[n[1]]((function() {
                                    var e = s && s.apply(this, arguments);
                                    e && T(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, s ? [e] : arguments)
                                }
                                ))
                            }
                            )),
                            e = null
                        }
                        )).promise()
                    },
                    then: function(e, n, s) {
                        var r = 0;
                        function a(e, t, n, s) {
                            return function() {
                                var o = this
                                  , l = arguments
                                  , d = function() {
                                    var i, d;
                                    if (!(e < r)) {
                                        if ((i = n.apply(o, l)) === t.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        d = i && ("object" == typeof i || "function" == typeof i) && i.then,
                                        T(d) ? s ? d.call(i, a(r, t, z, s), a(r, t, R, s)) : (r++,
                                        d.call(i, a(r, t, z, s), a(r, t, R, s), a(r, t, z, t.notifyWith))) : (n !== z && (o = void 0,
                                        l = [i]),
                                        (s || t.resolveWith)(o, l))
                                    }
                                }
                                  , c = s ? d : function() {
                                    try {
                                        d()
                                    } catch (i) {
                                        C.Deferred.exceptionHook && C.Deferred.exceptionHook(i, c.stackTrace),
                                        e + 1 >= r && (n !== R && (o = void 0,
                                        l = [i]),
                                        t.rejectWith(o, l))
                                    }
                                }
                                ;
                                e ? c() : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()),
                                i.setTimeout(c))
                            }
                        }
                        return C.Deferred((function(i) {
                            t[0][3].add(a(0, i, T(s) ? s : z, i.notifyWith)),
                            t[1][3].add(a(0, i, T(e) ? e : z)),
                            t[2][3].add(a(0, i, T(n) ? n : R))
                        }
                        )).promise()
                    },
                    promise: function(e) {
                        return null != e ? C.extend(e, s) : s
                    }
                }
                  , r = {};
                return C.each(t, (function(e, i) {
                    var a = i[2]
                      , o = i[5];
                    s[i[1]] = a.add,
                    o && a.add((function() {
                        n = o
                    }
                    ), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                    a.add(i[3].fire),
                    r[i[0]] = function() {
                        return r[i[0] + "With"](this === r ? void 0 : this, arguments),
                        this
                    }
                    ,
                    r[i[0] + "With"] = a.fireWith
                }
                )),
                s.promise(r),
                e && e.call(r, r),
                r
            },
            when: function(e) {
                var t = arguments.length
                  , i = t
                  , n = Array(i)
                  , s = l.call(arguments)
                  , r = C.Deferred()
                  , a = function(e) {
                    return function(i) {
                        n[e] = this,
                        s[e] = arguments.length > 1 ? l.call(arguments) : i,
                        --t || r.resolveWith(n, s)
                    }
                };
                if (t <= 1 && (V(e, r.done(a(i)).resolve, r.reject, !t),
                "pending" === r.state() || T(s[i] && s[i].then)))
                    return r.then();
                for (; i--; )
                    V(s[i], a(i), r.reject);
                return r.promise()
            }
        });
        var X = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function(e, t) {
            i.console && i.console.warn && e && X.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }
        ,
        C.readyException = function(e) {
            i.setTimeout((function() {
                throw e
            }
            ))
        }
        ;
        var F = C.Deferred();
        function W() {
            a.removeEventListener("DOMContentLoaded", W),
            i.removeEventListener("load", W),
            C.ready()
        }
        C.fn.ready = function(e) {
            return F.then(e).catch((function(e) {
                C.readyException(e)
            }
            )),
            this
        }
        ,
        C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0,
                !0 !== e && --C.readyWait > 0 || F.resolveWith(a, [C]))
            }
        }),
        C.ready.then = F.then,
        "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? i.setTimeout(C.ready) : (a.addEventListener("DOMContentLoaded", W),
        i.addEventListener("load", W));
        var j = function(e, t, i, n, s, r, a) {
            var o = 0
              , l = e.length
              , d = null == i;
            if ("object" === w(i))
                for (o in s = !0,
                i)
                    j(e, t, o, i[o], !0, r, a);
            else if (void 0 !== n && (s = !0,
            T(n) || (a = !0),
            d && (a ? (t.call(e, n),
            t = null) : (d = t,
            t = function(e, t, i) {
                return d.call(C(e), i)
            }
            )),
            t))
                for (; o < l; o++)
                    t(e[o], i, a ? n : n.call(e[o], o, t(e[o], i)));
            return s ? e : d ? t.call(e) : l ? t(e[0], i) : r
        }
          , Y = /^-ms-/
          , _ = /-([a-z])/g;
        function q(e, t) {
            return t.toUpperCase()
        }
        function U(e) {
            return e.replace(Y, "ms-").replace(_, q)
        }
        var K = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        function Q() {
            this.expando = C.expando + Q.uid++
        }
        Q.uid = 1,
        Q.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                t
            },
            set: function(e, t, i) {
                var n, s = this.cache(e);
                if ("string" == typeof t)
                    s[U(t)] = i;
                else
                    for (n in t)
                        s[U(n)] = t[n];
                return s
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
            },
            access: function(e, t, i) {
                return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i),
                void 0 !== i ? i : t)
            },
            remove: function(e, t) {
                var i, n = e[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== t) {
                        i = (t = Array.isArray(t) ? t.map(U) : (t = U(t))in n ? [t] : t.match(O) || []).length;
                        for (; i--; )
                            delete n[t[i]]
                    }
                    (void 0 === t || C.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t)
            }
        };
        var Z = new Q
          , J = new Q
          , ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , te = /[A-Z]/g;
        function ie(e, t, i) {
            var n;
            if (void 0 === i && 1 === e.nodeType)
                if (n = "data-" + t.replace(te, "-$&").toLowerCase(),
                "string" == typeof (i = e.getAttribute(n))) {
                    try {
                        i = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                        }(i)
                    } catch (e) {}
                    J.set(e, t, i)
                } else
                    i = void 0;
            return i
        }
        C.extend({
            hasData: function(e) {
                return J.hasData(e) || Z.hasData(e)
            },
            data: function(e, t, i) {
                return J.access(e, t, i)
            },
            removeData: function(e, t) {
                J.remove(e, t)
            },
            _data: function(e, t, i) {
                return Z.access(e, t, i)
            },
            _removeData: function(e, t) {
                Z.remove(e, t)
            }
        }),
        C.fn.extend({
            data: function(e, t) {
                var i, n, s, r = this[0], a = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (s = J.get(r),
                    1 === r.nodeType && !Z.get(r, "hasDataAttrs"))) {
                        for (i = a.length; i--; )
                            a[i] && 0 === (n = a[i].name).indexOf("data-") && (n = U(n.slice(5)),
                            ie(r, n, s[n]));
                        Z.set(r, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof e ? this.each((function() {
                    J.set(this, e)
                }
                )) : j(this, (function(t) {
                    var i;
                    if (r && void 0 === t)
                        return void 0 !== (i = J.get(r, e)) ? i : void 0 !== (i = ie(r, e)) ? i : void 0;
                    this.each((function() {
                        J.set(this, e, t)
                    }
                    ))
                }
                ), null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each((function() {
                    J.remove(this, e)
                }
                ))
            }
        }),
        C.extend({
            queue: function(e, t, i) {
                var n;
                if (e)
                    return t = (t || "fx") + "queue",
                    n = Z.get(e, t),
                    i && (!n || Array.isArray(i) ? n = Z.access(e, t, C.makeArray(i)) : n.push(i)),
                    n || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var i = C.queue(e, t)
                  , n = i.length
                  , s = i.shift()
                  , r = C._queueHooks(e, t);
                "inprogress" === s && (s = i.shift(),
                n--),
                s && ("fx" === t && i.unshift("inprogress"),
                delete r.stop,
                s.call(e, (function() {
                    C.dequeue(e, t)
                }
                ), r)),
                !n && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var i = t + "queueHooks";
                return Z.get(e, i) || Z.access(e, i, {
                    empty: C.Callbacks("once memory").add((function() {
                        Z.remove(e, [t + "queue", i])
                    }
                    ))
                })
            }
        }),
        C.fn.extend({
            queue: function(e, t) {
                var i = 2;
                return "string" != typeof e && (t = e,
                e = "fx",
                i--),
                arguments.length < i ? C.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                    var i = C.queue(this, e, t);
                    C._queueHooks(this, e),
                    "fx" === e && "inprogress" !== i[0] && C.dequeue(this, e)
                }
                ))
            },
            dequeue: function(e) {
                return this.each((function() {
                    C.dequeue(this, e)
                }
                ))
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var i, n = 1, s = C.Deferred(), r = this, a = this.length, o = function() {
                    --n || s.resolveWith(r, [r])
                };
                for ("string" != typeof e && (t = e,
                e = void 0),
                e = e || "fx"; a--; )
                    (i = Z.get(r[a], e + "queueHooks")) && i.empty && (n++,
                    i.empty.add(o));
                return o(),
                s.promise(t)
            }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , se = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$","i")
          , re = ["Top", "Right", "Bottom", "Left"]
          , ae = a.documentElement
          , oe = function(e) {
            return C.contains(e.ownerDocument, e)
        }
          , le = {
            composed: !0
        };
        ae.getRootNode && (oe = function(e) {
            return C.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument
        }
        );
        var de = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === C.css(e, "display")
        }
          , ce = function(e, t, i, n) {
            var s, r, a = {};
            for (r in t)
                a[r] = e.style[r],
                e.style[r] = t[r];
            for (r in s = i.apply(e, n || []),
            t)
                e.style[r] = a[r];
            return s
        };
        function ue(e, t, i, n) {
            var s, r, a = 20, o = n ? function() {
                return n.cur()
            }
            : function() {
                return C.css(e, t, "")
            }
            , l = o(), d = i && i[3] || (C.cssNumber[t] ? "" : "px"), c = e.nodeType && (C.cssNumber[t] || "px" !== d && +l) && se.exec(C.css(e, t));
            if (c && c[3] !== d) {
                for (l /= 2,
                d = d || c[3],
                c = +l || 1; a--; )
                    C.style(e, t, c + d),
                    (1 - r) * (1 - (r = o() / l || .5)) <= 0 && (a = 0),
                    c /= r;
                c *= 2,
                C.style(e, t, c + d),
                i = i || []
            }
            return i && (c = +c || +l || 0,
            s = i[1] ? c + (i[1] + 1) * i[2] : +i[2],
            n && (n.unit = d,
            n.start = c,
            n.end = s)),
            s
        }
        var pe = {};
        function he(e) {
            var t, i = e.ownerDocument, n = e.nodeName, s = pe[n];
            return s || (t = i.body.appendChild(i.createElement(n)),
            s = C.css(t, "display"),
            t.parentNode.removeChild(t),
            "none" === s && (s = "block"),
            pe[n] = s,
            s)
        }
        function fe(e, t) {
            for (var i, n, s = [], r = 0, a = e.length; r < a; r++)
                (n = e[r]).style && (i = n.style.display,
                t ? ("none" === i && (s[r] = Z.get(n, "display") || null,
                s[r] || (n.style.display = "")),
                "" === n.style.display && de(n) && (s[r] = he(n))) : "none" !== i && (s[r] = "none",
                Z.set(n, "display", i)));
            for (r = 0; r < a; r++)
                null != s[r] && (e[r].style.display = s[r]);
            return e
        }
        C.fn.extend({
            show: function() {
                return fe(this, !0)
            },
            hide: function() {
                return fe(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                    de(this) ? C(this).show() : C(this).hide()
                }
                ))
            }
        });
        var me = /^(?:checkbox|radio)$/i
          , ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
          , ve = /^$|^module$|\/(?:java|ecma)script/i
          , Te = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        function be(e, t) {
            var i;
            return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && H(e, t) ? C.merge([e], i) : i
        }
        function ye(e, t) {
            for (var i = 0, n = e.length; i < n; i++)
                Z.set(e[i], "globalEval", !t || Z.get(t[i], "globalEval"))
        }
        Te.optgroup = Te.option,
        Te.tbody = Te.tfoot = Te.colgroup = Te.caption = Te.thead,
        Te.th = Te.td;
        var Se, we, Ce = /<|&#?\w+;/;
        function xe(e, t, i, n, s) {
            for (var r, a, o, l, d, c, u = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++)
                if ((r = e[h]) || 0 === r)
                    if ("object" === w(r))
                        C.merge(p, r.nodeType ? [r] : r);
                    else if (Ce.test(r)) {
                        for (a = a || u.appendChild(t.createElement("div")),
                        o = (ge.exec(r) || ["", ""])[1].toLowerCase(),
                        l = Te[o] || Te._default,
                        a.innerHTML = l[1] + C.htmlPrefilter(r) + l[2],
                        c = l[0]; c--; )
                            a = a.lastChild;
                        C.merge(p, a.childNodes),
                        (a = u.firstChild).textContent = ""
                    } else
                        p.push(t.createTextNode(r));
            for (u.textContent = "",
            h = 0; r = p[h++]; )
                if (n && C.inArray(r, n) > -1)
                    s && s.push(r);
                else if (d = oe(r),
                a = be(u.appendChild(r), "script"),
                d && ye(a),
                i)
                    for (c = 0; r = a[c++]; )
                        ve.test(r.type || "") && i.push(r);
            return u
        }
        Se = a.createDocumentFragment().appendChild(a.createElement("div")),
        (we = a.createElement("input")).setAttribute("type", "radio"),
        we.setAttribute("checked", "checked"),
        we.setAttribute("name", "t"),
        Se.appendChild(we),
        v.checkClone = Se.cloneNode(!0).cloneNode(!0).lastChild.checked,
        Se.innerHTML = "<textarea>x</textarea>",
        v.noCloneChecked = !!Se.cloneNode(!0).lastChild.defaultValue;
        var Ee = /^key/
          , Me = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , Pe = /^([^.]*)(?:\.(.+)|)/;
        function Ae() {
            return !0
        }
        function Ge() {
            return !1
        }
        function He(e, t) {
            return e === function() {
                try {
                    return a.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }
        function De(e, t, i, n, s, r) {
            var a, o;
            if ("object" == typeof t) {
                for (o in "string" != typeof i && (n = n || i,
                i = void 0),
                t)
                    De(e, o, i, n, t[o], r);
                return e
            }
            if (null == n && null == s ? (s = i,
            n = i = void 0) : null == s && ("string" == typeof i ? (s = n,
            n = void 0) : (s = n,
            n = i,
            i = void 0)),
            !1 === s)
                s = Ge;
            else if (!s)
                return e;
            return 1 === r && (a = s,
            (s = function(e) {
                return C().off(e),
                a.apply(this, arguments)
            }
            ).guid = a.guid || (a.guid = C.guid++)),
            e.each((function() {
                C.event.add(this, t, s, n, i)
            }
            ))
        }
        function Be(e, t, i) {
            i ? (Z.set(e, t, !1),
            C.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var n, s, r = Z.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (r.length)
                            (C.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (r = l.call(arguments),
                        Z.set(this, t, r),
                        n = i(this, t),
                        this[t](),
                        r !== (s = Z.get(this, t)) || n ? Z.set(this, t, !1) : s = {},
                        r !== s)
                            return e.stopImmediatePropagation(),
                            e.preventDefault(),
                            s.value
                    } else
                        r.length && (Z.set(this, t, {
                            value: C.event.trigger(C.extend(r[0], C.Event.prototype), r.slice(1), this)
                        }),
                        e.stopImmediatePropagation())
                }
            })) : void 0 === Z.get(e, t) && C.event.add(e, t, Ae)
        }
        C.event = {
            global: {},
            add: function(e, t, i, n, s) {
                var r, a, o, l, d, c, u, p, h, f, m, g = Z.get(e);
                if (g)
                    for (i.handler && (i = (r = i).handler,
                    s = r.selector),
                    s && C.find.matchesSelector(ae, s),
                    i.guid || (i.guid = C.guid++),
                    (l = g.events) || (l = g.events = {}),
                    (a = g.handle) || (a = g.handle = function(t) {
                        return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                    }
                    ),
                    d = (t = (t || "").match(O) || [""]).length; d--; )
                        h = m = (o = Pe.exec(t[d]) || [])[1],
                        f = (o[2] || "").split(".").sort(),
                        h && (u = C.event.special[h] || {},
                        h = (s ? u.delegateType : u.bindType) || h,
                        u = C.event.special[h] || {},
                        c = C.extend({
                            type: h,
                            origType: m,
                            data: n,
                            handler: i,
                            guid: i.guid,
                            selector: s,
                            needsContext: s && C.expr.match.needsContext.test(s),
                            namespace: f.join(".")
                        }, r),
                        (p = l[h]) || ((p = l[h] = []).delegateCount = 0,
                        u.setup && !1 !== u.setup.call(e, n, f, a) || e.addEventListener && e.addEventListener(h, a)),
                        u.add && (u.add.call(e, c),
                        c.handler.guid || (c.handler.guid = i.guid)),
                        s ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                        C.event.global[h] = !0)
            },
            remove: function(e, t, i, n, s) {
                var r, a, o, l, d, c, u, p, h, f, m, g = Z.hasData(e) && Z.get(e);
                if (g && (l = g.events)) {
                    for (d = (t = (t || "").match(O) || [""]).length; d--; )
                        if (h = m = (o = Pe.exec(t[d]) || [])[1],
                        f = (o[2] || "").split(".").sort(),
                        h) {
                            for (u = C.event.special[h] || {},
                            p = l[h = (n ? u.delegateType : u.bindType) || h] || [],
                            o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            a = r = p.length; r--; )
                                c = p[r],
                                !s && m !== c.origType || i && i.guid !== c.guid || o && !o.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (p.splice(r, 1),
                                c.selector && p.delegateCount--,
                                u.remove && u.remove.call(e, c));
                            a && !p.length && (u.teardown && !1 !== u.teardown.call(e, f, g.handle) || C.removeEvent(e, h, g.handle),
                            delete l[h])
                        } else
                            for (h in l)
                                C.event.remove(e, h + t[d], i, n, !0);
                    C.isEmptyObject(l) && Z.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, i, n, s, r, a, o = C.event.fix(e), l = new Array(arguments.length), d = (Z.get(this, "events") || {})[o.type] || [], c = C.event.special[o.type] || {};
                for (l[0] = o,
                t = 1; t < arguments.length; t++)
                    l[t] = arguments[t];
                if (o.delegateTarget = this,
                !c.preDispatch || !1 !== c.preDispatch.call(this, o)) {
                    for (a = C.event.handlers.call(this, o, d),
                    t = 0; (s = a[t++]) && !o.isPropagationStopped(); )
                        for (o.currentTarget = s.elem,
                        i = 0; (r = s.handlers[i++]) && !o.isImmediatePropagationStopped(); )
                            o.rnamespace && !1 !== r.namespace && !o.rnamespace.test(r.namespace) || (o.handleObj = r,
                            o.data = r.data,
                            void 0 !== (n = ((C.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, l)) && !1 === (o.result = n) && (o.preventDefault(),
                            o.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, o),
                    o.result
                }
            },
            handlers: function(e, t) {
                var i, n, s, r, a, o = [], l = t.delegateCount, d = e.target;
                if (l && d.nodeType && !("click" === e.type && e.button >= 1))
                    for (; d !== this; d = d.parentNode || this)
                        if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                            for (r = [],
                            a = {},
                            i = 0; i < l; i++)
                                void 0 === a[s = (n = t[i]).selector + " "] && (a[s] = n.needsContext ? C(s, this).index(d) > -1 : C.find(s, this, null, [d]).length),
                                a[s] && r.push(n);
                            r.length && o.push({
                                elem: d,
                                handlers: r
                            })
                        }
                return d = this,
                l < t.length && o.push({
                    elem: d,
                    handlers: t.slice(l)
                }),
                o
            },
            addProp: function(e, t) {
                Object.defineProperty(C.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: T(t) ? function() {
                        if (this.originalEvent)
                            return t(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[e]
                    }
                    ,
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[C.expando] ? e : new C.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && H(t, "input") && Be(t, "click", Ae),
                        !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && H(t, "input") && Be(t, "click"),
                        !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return me.test(t.type) && t.click && H(t, "input") && Z.get(t, "click") || H(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        C.removeEvent = function(e, t, i) {
            e.removeEventListener && e.removeEventListener(t, i)
        }
        ,
        C.Event = function(e, t) {
            if (!(this instanceof C.Event))
                return new C.Event(e,t);
            e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : Ge,
            this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
            this.currentTarget = e.currentTarget,
            this.relatedTarget = e.relatedTarget) : this.type = e,
            t && C.extend(this, t),
            this.timeStamp = e && e.timeStamp || Date.now(),
            this[C.expando] = !0
        }
        ,
        C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: Ge,
            isPropagationStopped: Ge,
            isImmediatePropagationStopped: Ge,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Ae,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Ae,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Ae,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        C.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Me.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, C.event.addProp),
        C.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            C.event.special[e] = {
                setup: function() {
                    return Be(this, e, He),
                    !1
                },
                trigger: function() {
                    return Be(this, e),
                    !0
                },
                delegateType: t
            }
        }
        )),
        C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(e, t) {
            C.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var i, n = this, s = e.relatedTarget, r = e.handleObj;
                    return s && (s === n || C.contains(n, s)) || (e.type = r.origType,
                    i = r.handler.apply(this, arguments),
                    e.type = t),
                    i
                }
            }
        }
        )),
        C.fn.extend({
            on: function(e, t, i, n) {
                return De(this, e, t, i, n)
            },
            one: function(e, t, i, n) {
                return De(this, e, t, i, n, 1)
            },
            off: function(e, t, i) {
                var n, s;
                if (e && e.preventDefault && e.handleObj)
                    return n = e.handleObj,
                    C(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                    this;
                if ("object" == typeof e) {
                    for (s in e)
                        this.off(s, t, e[s]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (i = t,
                t = void 0),
                !1 === i && (i = Ge),
                this.each((function() {
                    C.event.remove(this, e, i, t)
                }
                ))
            }
        });
        var Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , ke = /<script|<style|<link/i
          , Le = /checked\s*(?:[^=]|=\s*.checked.)/i
          , Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function $e(e, t) {
            return H(e, "table") && H(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
        }
        function Oe(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function ze(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
        }
        function Re(e, t) {
            var i, n, s, r, a, o, l, d;
            if (1 === t.nodeType) {
                if (Z.hasData(e) && (r = Z.access(e),
                a = Z.set(t, r),
                d = r.events))
                    for (s in delete a.handle,
                    a.events = {},
                    d)
                        for (i = 0,
                        n = d[s].length; i < n; i++)
                            C.event.add(t, s, d[s][i]);
                J.hasData(e) && (o = J.access(e),
                l = C.extend({}, o),
                J.set(t, l))
            }
        }
        function Ve(e, t) {
            var i = t.nodeName.toLowerCase();
            "input" === i && me.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
        }
        function Xe(e, t, i, n) {
            t = d.apply([], t);
            var s, r, a, o, l, c, u = 0, p = e.length, h = p - 1, f = t[0], m = T(f);
            if (m || p > 1 && "string" == typeof f && !v.checkClone && Le.test(f))
                return e.each((function(s) {
                    var r = e.eq(s);
                    m && (t[0] = f.call(this, s, r.html())),
                    Xe(r, t, i, n)
                }
                ));
            if (p && (r = (s = xe(t, e[0].ownerDocument, !1, e, n)).firstChild,
            1 === s.childNodes.length && (s = r),
            r || n)) {
                for (o = (a = C.map(be(s, "script"), Oe)).length; u < p; u++)
                    l = s,
                    u !== h && (l = C.clone(l, !0, !0),
                    o && C.merge(a, be(l, "script"))),
                    i.call(e[u], l, u);
                if (o)
                    for (c = a[a.length - 1].ownerDocument,
                    C.map(a, ze),
                    u = 0; u < o; u++)
                        l = a[u],
                        ve.test(l.type || "") && !Z.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
                            nonce: l.nonce || l.getAttribute("nonce")
                        }) : S(l.textContent.replace(Ne, ""), l, c))
            }
            return e
        }
        function Fe(e, t, i) {
            for (var n, s = t ? C.filter(t, e) : e, r = 0; null != (n = s[r]); r++)
                i || 1 !== n.nodeType || C.cleanData(be(n)),
                n.parentNode && (i && oe(n) && ye(be(n, "script")),
                n.parentNode.removeChild(n));
            return e
        }
        C.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ie, "<$1></$2>")
            },
            clone: function(e, t, i) {
                var n, s, r, a, o = e.cloneNode(!0), l = oe(e);
                if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                    for (a = be(o),
                    n = 0,
                    s = (r = be(e)).length; n < s; n++)
                        Ve(r[n], a[n]);
                if (t)
                    if (i)
                        for (r = r || be(e),
                        a = a || be(o),
                        n = 0,
                        s = r.length; n < s; n++)
                            Re(r[n], a[n]);
                    else
                        Re(e, o);
                return (a = be(o, "script")).length > 0 && ye(a, !l && be(e, "script")),
                o
            },
            cleanData: function(e) {
                for (var t, i, n, s = C.event.special, r = 0; void 0 !== (i = e[r]); r++)
                    if (K(i)) {
                        if (t = i[Z.expando]) {
                            if (t.events)
                                for (n in t.events)
                                    s[n] ? C.event.remove(i, n) : C.removeEvent(i, n, t.handle);
                            i[Z.expando] = void 0
                        }
                        i[J.expando] && (i[J.expando] = void 0)
                    }
            }
        }),
        C.fn.extend({
            detach: function(e) {
                return Fe(this, e, !0)
            },
            remove: function(e) {
                return Fe(this, e)
            },
            text: function(e) {
                return j(this, (function(e) {
                    return void 0 === e ? C.text(this) : this.empty().each((function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    }
                    ))
                }
                ), null, e, arguments.length)
            },
            append: function() {
                return Xe(this, arguments, (function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $e(this, e).appendChild(e)
                }
                ))
            },
            prepend: function() {
                return Xe(this, arguments, (function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = $e(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                }
                ))
            },
            before: function() {
                return Xe(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                }
                ))
            },
            after: function() {
                return Xe(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                }
                ))
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (C.cleanData(be(e, !1)),
                    e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map((function() {
                    return C.clone(this, e, t)
                }
                ))
            },
            html: function(e) {
                return j(this, (function(e) {
                    var t = this[0] || {}
                      , i = 0
                      , n = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !ke.test(e) && !Te[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; i < n; i++)
                                1 === (t = this[i] || {}).nodeType && (C.cleanData(be(t, !1)),
                                t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }
                ), null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return Xe(this, arguments, (function(t) {
                    var i = this.parentNode;
                    C.inArray(this, e) < 0 && (C.cleanData(be(this)),
                    i && i.replaceChild(t, this))
                }
                ), e)
            }
        }),
        C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function(e, t) {
            C.fn[e] = function(e) {
                for (var i, n = [], s = C(e), r = s.length - 1, a = 0; a <= r; a++)
                    i = a === r ? this : this.clone(!0),
                    C(s[a])[t](i),
                    c.apply(n, i.get());
                return this.pushStack(n)
            }
        }
        ));
        var We = new RegExp("^(" + ne + ")(?!px)[a-z%]+$","i")
          , je = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = i),
            t.getComputedStyle(e)
        }
          , Ye = new RegExp(re.join("|"),"i");
        function _e(e, t, i) {
            var n, s, r, a, o = e.style;
            return (i = i || je(e)) && ("" !== (a = i.getPropertyValue(t) || i[t]) || oe(e) || (a = C.style(e, t)),
            !v.pixelBoxStyles() && We.test(a) && Ye.test(t) && (n = o.width,
            s = o.minWidth,
            r = o.maxWidth,
            o.minWidth = o.maxWidth = o.width = a,
            a = i.width,
            o.width = n,
            o.minWidth = s,
            o.maxWidth = r)),
            void 0 !== a ? a + "" : a
        }
        function qe(e, t) {
            return {
                get: function() {
                    if (!e())
                        return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }
        !function() {
            function e() {
                if (c) {
                    d.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    ae.appendChild(d).appendChild(c);
                    var e = i.getComputedStyle(c);
                    n = "1%" !== e.top,
                    l = 12 === t(e.marginLeft),
                    c.style.right = "60%",
                    o = 36 === t(e.right),
                    s = 36 === t(e.width),
                    c.style.position = "absolute",
                    r = 12 === t(c.offsetWidth / 3),
                    ae.removeChild(d),
                    c = null
                }
            }
            function t(e) {
                return Math.round(parseFloat(e))
            }
            var n, s, r, o, l, d = a.createElement("div"), c = a.createElement("div");
            c.style && (c.style.backgroundClip = "content-box",
            c.cloneNode(!0).style.backgroundClip = "",
            v.clearCloneStyle = "content-box" === c.style.backgroundClip,
            C.extend(v, {
                boxSizingReliable: function() {
                    return e(),
                    s
                },
                pixelBoxStyles: function() {
                    return e(),
                    o
                },
                pixelPosition: function() {
                    return e(),
                    n
                },
                reliableMarginLeft: function() {
                    return e(),
                    l
                },
                scrollboxSize: function() {
                    return e(),
                    r
                }
            }))
        }();
        var Ue = ["Webkit", "Moz", "ms"]
          , Ke = a.createElement("div").style
          , Qe = {};
        function Ze(e) {
            var t = C.cssProps[e] || Qe[e];
            return t || (e in Ke ? e : Qe[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), i = Ue.length; i--; )
                    if ((e = Ue[i] + t)in Ke)
                        return e
            }(e) || e)
        }
        var Je = /^(none|table(?!-c[ea]).+)/
          , et = /^--/
          , tt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , it = {
            letterSpacing: "0",
            fontWeight: "400"
        };
        function nt(e, t, i) {
            var n = se.exec(t);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
        }
        function st(e, t, i, n, s, r) {
            var a = "width" === t ? 1 : 0
              , o = 0
              , l = 0;
            if (i === (n ? "border" : "content"))
                return 0;
            for (; a < 4; a += 2)
                "margin" === i && (l += C.css(e, i + re[a], !0, s)),
                n ? ("content" === i && (l -= C.css(e, "padding" + re[a], !0, s)),
                "margin" !== i && (l -= C.css(e, "border" + re[a] + "Width", !0, s))) : (l += C.css(e, "padding" + re[a], !0, s),
                "padding" !== i ? l += C.css(e, "border" + re[a] + "Width", !0, s) : o += C.css(e, "border" + re[a] + "Width", !0, s));
            return !n && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - o - .5)) || 0),
            l
        }
        function rt(e, t, i) {
            var n = je(e)
              , s = (!v.boxSizingReliable() || i) && "border-box" === C.css(e, "boxSizing", !1, n)
              , r = s
              , a = _e(e, t, n)
              , o = "offset" + t[0].toUpperCase() + t.slice(1);
            if (We.test(a)) {
                if (!i)
                    return a;
                a = "auto"
            }
            return (!v.boxSizingReliable() && s || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, n)) && e.getClientRects().length && (s = "border-box" === C.css(e, "boxSizing", !1, n),
            (r = o in e) && (a = e[o])),
            (a = parseFloat(a) || 0) + st(e, t, i || (s ? "border" : "content"), r, n, a) + "px"
        }
        function at(e, t, i, n, s) {
            return new at.prototype.init(e,t,i,n,s)
        }
        C.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var i = _e(e, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, i, n) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var s, r, a, o = U(t), l = et.test(t), d = e.style;
                    if (l || (t = Ze(o)),
                    a = C.cssHooks[t] || C.cssHooks[o],
                    void 0 === i)
                        return a && "get"in a && void 0 !== (s = a.get(e, !1, n)) ? s : d[t];
                    "string" === (r = typeof i) && (s = se.exec(i)) && s[1] && (i = ue(e, t, s),
                    r = "number"),
                    null != i && i == i && ("number" !== r || l || (i += s && s[3] || (C.cssNumber[o] ? "" : "px")),
                    v.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (d[t] = "inherit"),
                    a && "set"in a && void 0 === (i = a.set(e, i, n)) || (l ? d.setProperty(t, i) : d[t] = i))
                }
            },
            css: function(e, t, i, n) {
                var s, r, a, o = U(t);
                return et.test(t) || (t = Ze(o)),
                (a = C.cssHooks[t] || C.cssHooks[o]) && "get"in a && (s = a.get(e, !0, i)),
                void 0 === s && (s = _e(e, t, n)),
                "normal" === s && t in it && (s = it[t]),
                "" === i || i ? (r = parseFloat(s),
                !0 === i || isFinite(r) ? r || 0 : s) : s
            }
        }),
        C.each(["height", "width"], (function(e, t) {
            C.cssHooks[t] = {
                get: function(e, i, n) {
                    if (i)
                        return !Je.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, t, n) : ce(e, tt, (function() {
                            return rt(e, t, n)
                        }
                        ))
                },
                set: function(e, i, n) {
                    var s, r = je(e), a = !v.scrollboxSize() && "absolute" === r.position, o = (a || n) && "border-box" === C.css(e, "boxSizing", !1, r), l = n ? st(e, t, n, o, r) : 0;
                    return o && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - st(e, t, "border", !1, r) - .5)),
                    l && (s = se.exec(i)) && "px" !== (s[3] || "px") && (e.style[t] = i,
                    i = C.css(e, t)),
                    nt(0, i, l)
                }
            }
        }
        )),
        C.cssHooks.marginLeft = qe(v.reliableMarginLeft, (function(e, t) {
            if (t)
                return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ce(e, {
                    marginLeft: 0
                }, (function() {
                    return e.getBoundingClientRect().left
                }
                ))) + "px"
        }
        )),
        C.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function(e, t) {
            C.cssHooks[e + t] = {
                expand: function(i) {
                    for (var n = 0, s = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
                        s[e + re[n] + t] = r[n] || r[n - 2] || r[0];
                    return s
                }
            },
            "margin" !== e && (C.cssHooks[e + t].set = nt)
        }
        )),
        C.fn.extend({
            css: function(e, t) {
                return j(this, (function(e, t, i) {
                    var n, s, r = {}, a = 0;
                    if (Array.isArray(t)) {
                        for (n = je(e),
                        s = t.length; a < s; a++)
                            r[t[a]] = C.css(e, t[a], !1, n);
                        return r
                    }
                    return void 0 !== i ? C.style(e, t, i) : C.css(e, t)
                }
                ), e, t, arguments.length > 1)
            }
        }),
        C.Tween = at,
        at.prototype = {
            constructor: at,
            init: function(e, t, i, n, s, r) {
                this.elem = e,
                this.prop = i,
                this.easing = s || C.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = n,
                this.unit = r || (C.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var e = at.propHooks[this.prop];
                return e && e.get ? e.get(this) : at.propHooks._default.get(this)
            },
            run: function(e) {
                var t, i = at.propHooks[this.prop];
                return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                i && i.set ? i.set(this) : at.propHooks._default.set(this),
                this
            }
        },
        at.prototype.init.prototype = at.prototype,
        at.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        at.propHooks.scrollTop = at.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        C.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        C.fx = at.prototype.init,
        C.fx.step = {};
        var ot, lt, dt = /^(?:toggle|show|hide)$/, ct = /queueHooks$/;
        function ut() {
            lt && (!1 === a.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(ut) : i.setTimeout(ut, C.fx.interval),
            C.fx.tick())
        }
        function pt() {
            return i.setTimeout((function() {
                ot = void 0
            }
            )),
            ot = Date.now()
        }
        function ht(e, t) {
            var i, n = 0, s = {
                height: e
            };
            for (t = t ? 1 : 0; n < 4; n += 2 - t)
                s["margin" + (i = re[n])] = s["padding" + i] = e;
            return t && (s.opacity = s.width = e),
            s
        }
        function ft(e, t, i) {
            for (var n, s = (mt.tweeners[t] || []).concat(mt.tweeners["*"]), r = 0, a = s.length; r < a; r++)
                if (n = s[r].call(i, t, e))
                    return n
        }
        function mt(e, t, i) {
            var n, s, r = 0, a = mt.prefilters.length, o = C.Deferred().always((function() {
                delete l.elem
            }
            )), l = function() {
                if (s)
                    return !1;
                for (var t = ot || pt(), i = Math.max(0, d.startTime + d.duration - t), n = 1 - (i / d.duration || 0), r = 0, a = d.tweens.length; r < a; r++)
                    d.tweens[r].run(n);
                return o.notifyWith(e, [d, n, i]),
                n < 1 && a ? i : (a || o.notifyWith(e, [d, 1, 0]),
                o.resolveWith(e, [d]),
                !1)
            }, d = o.promise({
                elem: e,
                props: C.extend({}, t),
                opts: C.extend(!0, {
                    specialEasing: {},
                    easing: C.easing._default
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: ot || pt(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = C.Tween(e, d.opts, t, i, d.opts.specialEasing[t] || d.opts.easing);
                    return d.tweens.push(n),
                    n
                },
                stop: function(t) {
                    var i = 0
                      , n = t ? d.tweens.length : 0;
                    if (s)
                        return this;
                    for (s = !0; i < n; i++)
                        d.tweens[i].run(1);
                    return t ? (o.notifyWith(e, [d, 1, 0]),
                    o.resolveWith(e, [d, t])) : o.rejectWith(e, [d, t]),
                    this
                }
            }), c = d.props;
            for (!function(e, t) {
                var i, n, s, r, a;
                for (i in e)
                    if (s = t[n = U(i)],
                    r = e[i],
                    Array.isArray(r) && (s = r[1],
                    r = e[i] = r[0]),
                    i !== n && (e[n] = r,
                    delete e[i]),
                    (a = C.cssHooks[n]) && "expand"in a)
                        for (i in r = a.expand(r),
                        delete e[n],
                        r)
                            i in e || (e[i] = r[i],
                            t[i] = s);
                    else
                        t[n] = s
            }(c, d.opts.specialEasing); r < a; r++)
                if (n = mt.prefilters[r].call(d, e, c, d.opts))
                    return T(n.stop) && (C._queueHooks(d.elem, d.opts.queue).stop = n.stop.bind(n)),
                    n;
            return C.map(c, ft, d),
            T(d.opts.start) && d.opts.start.call(e, d),
            d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always),
            C.fx.timer(C.extend(l, {
                elem: e,
                anim: d,
                queue: d.opts.queue
            })),
            d
        }
        C.Animation = C.extend(mt, {
            tweeners: {
                "*": [function(e, t) {
                    var i = this.createTween(e, t);
                    return ue(i.elem, e, se.exec(t), i),
                    i
                }
                ]
            },
            tweener: function(e, t) {
                T(e) ? (t = e,
                e = ["*"]) : e = e.match(O);
                for (var i, n = 0, s = e.length; n < s; n++)
                    i = e[n],
                    mt.tweeners[i] = mt.tweeners[i] || [],
                    mt.tweeners[i].unshift(t)
            },
            prefilters: [function(e, t, i) {
                var n, s, r, a, o, l, d, c, u = "width"in t || "height"in t, p = this, h = {}, f = e.style, m = e.nodeType && de(e), g = Z.get(e, "fxshow");
                for (n in i.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
                o = a.empty.fire,
                a.empty.fire = function() {
                    a.unqueued || o()
                }
                ),
                a.unqueued++,
                p.always((function() {
                    p.always((function() {
                        a.unqueued--,
                        C.queue(e, "fx").length || a.empty.fire()
                    }
                    ))
                }
                ))),
                t)
                    if (s = t[n],
                    dt.test(s)) {
                        if (delete t[n],
                        r = r || "toggle" === s,
                        s === (m ? "hide" : "show")) {
                            if ("show" !== s || !g || void 0 === g[n])
                                continue;
                            m = !0
                        }
                        h[n] = g && g[n] || C.style(e, n)
                    }
                if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(h))
                    for (n in u && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY],
                    null == (d = g && g.display) && (d = Z.get(e, "display")),
                    "none" === (c = C.css(e, "display")) && (d ? c = d : (fe([e], !0),
                    d = e.style.display || d,
                    c = C.css(e, "display"),
                    fe([e]))),
                    ("inline" === c || "inline-block" === c && null != d) && "none" === C.css(e, "float") && (l || (p.done((function() {
                        f.display = d
                    }
                    )),
                    null == d && (c = f.display,
                    d = "none" === c ? "" : c)),
                    f.display = "inline-block")),
                    i.overflow && (f.overflow = "hidden",
                    p.always((function() {
                        f.overflow = i.overflow[0],
                        f.overflowX = i.overflow[1],
                        f.overflowY = i.overflow[2]
                    }
                    ))),
                    l = !1,
                    h)
                        l || (g ? "hidden"in g && (m = g.hidden) : g = Z.access(e, "fxshow", {
                            display: d
                        }),
                        r && (g.hidden = !m),
                        m && fe([e], !0),
                        p.done((function() {
                            for (n in m || fe([e]),
                            Z.remove(e, "fxshow"),
                            h)
                                C.style(e, n, h[n])
                        }
                        ))),
                        l = ft(m ? g[n] : 0, n, p),
                        n in g || (g[n] = l.start,
                        m && (l.end = l.start,
                        l.start = 0))
            }
            ],
            prefilter: function(e, t) {
                t ? mt.prefilters.unshift(e) : mt.prefilters.push(e)
            }
        }),
        C.speed = function(e, t, i) {
            var n = e && "object" == typeof e ? C.extend({}, e) : {
                complete: i || !i && t || T(e) && e,
                duration: e,
                easing: i && t || t && !T(t) && t
            };
            return C.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in C.fx.speeds ? n.duration = C.fx.speeds[n.duration] : n.duration = C.fx.speeds._default),
            null != n.queue && !0 !== n.queue || (n.queue = "fx"),
            n.old = n.complete,
            n.complete = function() {
                T(n.old) && n.old.call(this),
                n.queue && C.dequeue(this, n.queue)
            }
            ,
            n
        }
        ,
        C.fn.extend({
            fadeTo: function(e, t, i, n) {
                return this.filter(de).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function(e, t, i, n) {
                var s = C.isEmptyObject(e)
                  , r = C.speed(t, i, n)
                  , a = function() {
                    var t = mt(this, C.extend({}, e), r);
                    (s || Z.get(this, "finish")) && t.stop(!0)
                };
                return a.finish = a,
                s || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function(e, t, i) {
                var n = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(i)
                };
                return "string" != typeof e && (i = t,
                t = e,
                e = void 0),
                t && !1 !== e && this.queue(e || "fx", []),
                this.each((function() {
                    var t = !0
                      , s = null != e && e + "queueHooks"
                      , r = C.timers
                      , a = Z.get(this);
                    if (s)
                        a[s] && a[s].stop && n(a[s]);
                    else
                        for (s in a)
                            a[s] && a[s].stop && ct.test(s) && n(a[s]);
                    for (s = r.length; s--; )
                        r[s].elem !== this || null != e && r[s].queue !== e || (r[s].anim.stop(i),
                        t = !1,
                        r.splice(s, 1));
                    !t && i || C.dequeue(this, e)
                }
                ))
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"),
                this.each((function() {
                    var t, i = Z.get(this), n = i[e + "queue"], s = i[e + "queueHooks"], r = C.timers, a = n ? n.length : 0;
                    for (i.finish = !0,
                    C.queue(this, e, []),
                    s && s.stop && s.stop.call(this, !0),
                    t = r.length; t--; )
                        r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                        r.splice(t, 1));
                    for (t = 0; t < a; t++)
                        n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish
                }
                ))
            }
        }),
        C.each(["toggle", "show", "hide"], (function(e, t) {
            var i = C.fn[t];
            C.fn[t] = function(e, n, s) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ht(t, !0), e, n, s)
            }
        }
        )),
        C.each({
            slideDown: ht("show"),
            slideUp: ht("hide"),
            slideToggle: ht("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(e, t) {
            C.fn[e] = function(e, i, n) {
                return this.animate(t, e, i, n)
            }
        }
        )),
        C.timers = [],
        C.fx.tick = function() {
            var e, t = 0, i = C.timers;
            for (ot = Date.now(); t < i.length; t++)
                (e = i[t])() || i[t] !== e || i.splice(t--, 1);
            i.length || C.fx.stop(),
            ot = void 0
        }
        ,
        C.fx.timer = function(e) {
            C.timers.push(e),
            C.fx.start()
        }
        ,
        C.fx.interval = 13,
        C.fx.start = function() {
            lt || (lt = !0,
            ut())
        }
        ,
        C.fx.stop = function() {
            lt = null
        }
        ,
        C.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        C.fn.delay = function(e, t) {
            return e = C.fx && C.fx.speeds[e] || e,
            t = t || "fx",
            this.queue(t, (function(t, n) {
                var s = i.setTimeout(t, e);
                n.stop = function() {
                    i.clearTimeout(s)
                }
            }
            ))
        }
        ,
        function() {
            var e = a.createElement("input")
              , t = a.createElement("select").appendChild(a.createElement("option"));
            e.type = "checkbox",
            v.checkOn = "" !== e.value,
            v.optSelected = t.selected,
            (e = a.createElement("input")).value = "t",
            e.type = "radio",
            v.radioValue = "t" === e.value
        }();
        var gt, vt = C.expr.attrHandle;
        C.fn.extend({
            attr: function(e, t) {
                return j(this, C.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each((function() {
                    C.removeAttr(this, e)
                }
                ))
            }
        }),
        C.extend({
            attr: function(e, t, i) {
                var n, s, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return void 0 === e.getAttribute ? C.prop(e, t, i) : (1 === r && C.isXMLDoc(e) || (s = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? gt : void 0)),
                    void 0 !== i ? null === i ? void C.removeAttr(e, t) : s && "set"in s && void 0 !== (n = s.set(e, i, t)) ? n : (e.setAttribute(t, i + ""),
                    i) : s && "get"in s && null !== (n = s.get(e, t)) ? n : null == (n = C.find.attr(e, t)) ? void 0 : n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!v.radioValue && "radio" === t && H(e, "input")) {
                            var i = e.value;
                            return e.setAttribute("type", t),
                            i && (e.value = i),
                            t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var i, n = 0, s = t && t.match(O);
                if (s && 1 === e.nodeType)
                    for (; i = s[n++]; )
                        e.removeAttribute(i)
            }
        }),
        gt = {
            set: function(e, t, i) {
                return !1 === t ? C.removeAttr(e, i) : e.setAttribute(i, i),
                i
            }
        },
        C.each(C.expr.match.bool.source.match(/\w+/g), (function(e, t) {
            var i = vt[t] || C.find.attr;
            vt[t] = function(e, t, n) {
                var s, r, a = t.toLowerCase();
                return n || (r = vt[a],
                vt[a] = s,
                s = null != i(e, t, n) ? a : null,
                vt[a] = r),
                s
            }
        }
        ));
        var Tt = /^(?:input|select|textarea|button)$/i
          , bt = /^(?:a|area)$/i;
        function yt(e) {
            return (e.match(O) || []).join(" ")
        }
        function St(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        function wt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(O) || []
        }
        C.fn.extend({
            prop: function(e, t) {
                return j(this, C.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each((function() {
                    delete this[C.propFix[e] || e]
                }
                ))
            }
        }),
        C.extend({
            prop: function(e, t, i) {
                var n, s, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return 1 === r && C.isXMLDoc(e) || (t = C.propFix[t] || t,
                    s = C.propHooks[t]),
                    void 0 !== i ? s && "set"in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get"in s && null !== (n = s.get(e, t)) ? n : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Tt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        v.optSelected || (C.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
            C.propFix[this.toLowerCase()] = this
        }
        )),
        C.fn.extend({
            addClass: function(e) {
                var t, i, n, s, r, a, o, l = 0;
                if (T(e))
                    return this.each((function(t) {
                        C(this).addClass(e.call(this, t, St(this)))
                    }
                    ));
                if ((t = wt(e)).length)
                    for (; i = this[l++]; )
                        if (s = St(i),
                        n = 1 === i.nodeType && " " + yt(s) + " ") {
                            for (a = 0; r = t[a++]; )
                                n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                            s !== (o = yt(n)) && i.setAttribute("class", o)
                        }
                return this
            },
            removeClass: function(e) {
                var t, i, n, s, r, a, o, l = 0;
                if (T(e))
                    return this.each((function(t) {
                        C(this).removeClass(e.call(this, t, St(this)))
                    }
                    ));
                if (!arguments.length)
                    return this.attr("class", "");
                if ((t = wt(e)).length)
                    for (; i = this[l++]; )
                        if (s = St(i),
                        n = 1 === i.nodeType && " " + yt(s) + " ") {
                            for (a = 0; r = t[a++]; )
                                for (; n.indexOf(" " + r + " ") > -1; )
                                    n = n.replace(" " + r + " ", " ");
                            s !== (o = yt(n)) && i.setAttribute("class", o)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var i = typeof e
                  , n = "string" === i || Array.isArray(e);
                return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : T(e) ? this.each((function(i) {
                    C(this).toggleClass(e.call(this, i, St(this), t), t)
                }
                )) : this.each((function() {
                    var t, s, r, a;
                    if (n)
                        for (s = 0,
                        r = C(this),
                        a = wt(e); t = a[s++]; )
                            r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else
                        void 0 !== e && "boolean" !== i || ((t = St(this)) && Z.set(this, "__className__", t),
                        this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""))
                }
                ))
            },
            hasClass: function(e) {
                var t, i, n = 0;
                for (t = " " + e + " "; i = this[n++]; )
                    if (1 === i.nodeType && (" " + yt(St(i)) + " ").indexOf(t) > -1)
                        return !0;
                return !1
            }
        });
        var Ct = /\r/g;
        C.fn.extend({
            val: function(e) {
                var t, i, n, s = this[0];
                return arguments.length ? (n = T(e),
                this.each((function(i) {
                    var s;
                    1 === this.nodeType && (null == (s = n ? e.call(this, i, C(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = C.map(s, (function(e) {
                        return null == e ? "" : e + ""
                    }
                    ))),
                    (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, s, "value") || (this.value = s))
                }
                ))) : s ? (t = C.valHooks[s.type] || C.valHooks[s.nodeName.toLowerCase()]) && "get"in t && void 0 !== (i = t.get(s, "value")) ? i : "string" == typeof (i = s.value) ? i.replace(Ct, "") : null == i ? "" : i : void 0
            }
        }),
        C.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : yt(C.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, i, n, s = e.options, r = e.selectedIndex, a = "select-one" === e.type, o = a ? null : [], l = a ? r + 1 : s.length;
                        for (n = r < 0 ? l : a ? r : 0; n < l; n++)
                            if (((i = s[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !H(i.parentNode, "optgroup"))) {
                                if (t = C(i).val(),
                                a)
                                    return t;
                                o.push(t)
                            }
                        return o
                    },
                    set: function(e, t) {
                        for (var i, n, s = e.options, r = C.makeArray(t), a = s.length; a--; )
                            ((n = s[a]).selected = C.inArray(C.valHooks.option.get(n), r) > -1) && (i = !0);
                        return i || (e.selectedIndex = -1),
                        r
                    }
                }
            }
        }),
        C.each(["radio", "checkbox"], (function() {
            C.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t))
                        return e.checked = C.inArray(C(e).val(), t) > -1
                }
            },
            v.checkOn || (C.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
            )
        }
        )),
        v.focusin = "onfocusin"in i;
        var xt = /^(?:focusinfocus|focusoutblur)$/
          , Et = function(e) {
            e.stopPropagation()
        };
        C.extend(C.event, {
            trigger: function(e, t, n, s) {
                var r, o, l, d, c, u, p, h, m = [n || a], g = f.call(e, "type") ? e.type : e, v = f.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = h = l = n = n || a,
                3 !== n.nodeType && 8 !== n.nodeType && !xt.test(g + C.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."),
                g = v.shift(),
                v.sort()),
                c = g.indexOf(":") < 0 && "on" + g,
                (e = e[C.expando] ? e : new C.Event(g,"object" == typeof e && e)).isTrigger = s ? 2 : 3,
                e.namespace = v.join("."),
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = void 0,
                e.target || (e.target = n),
                t = null == t ? [e] : C.makeArray(t, [e]),
                p = C.event.special[g] || {},
                s || !p.trigger || !1 !== p.trigger.apply(n, t))) {
                    if (!s && !p.noBubble && !b(n)) {
                        for (d = p.delegateType || g,
                        xt.test(d + g) || (o = o.parentNode); o; o = o.parentNode)
                            m.push(o),
                            l = o;
                        l === (n.ownerDocument || a) && m.push(l.defaultView || l.parentWindow || i)
                    }
                    for (r = 0; (o = m[r++]) && !e.isPropagationStopped(); )
                        h = o,
                        e.type = r > 1 ? d : p.bindType || g,
                        (u = (Z.get(o, "events") || {})[e.type] && Z.get(o, "handle")) && u.apply(o, t),
                        (u = c && o[c]) && u.apply && K(o) && (e.result = u.apply(o, t),
                        !1 === e.result && e.preventDefault());
                    return e.type = g,
                    s || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(m.pop(), t) || !K(n) || c && T(n[g]) && !b(n) && ((l = n[c]) && (n[c] = null),
                    C.event.triggered = g,
                    e.isPropagationStopped() && h.addEventListener(g, Et),
                    n[g](),
                    e.isPropagationStopped() && h.removeEventListener(g, Et),
                    C.event.triggered = void 0,
                    l && (n[c] = l)),
                    e.result
                }
            },
            simulate: function(e, t, i) {
                var n = C.extend(new C.Event, i, {
                    type: e,
                    isSimulated: !0
                });
                C.event.trigger(n, null, t)
            }
        }),
        C.fn.extend({
            trigger: function(e, t) {
                return this.each((function() {
                    C.event.trigger(e, t, this)
                }
                ))
            },
            triggerHandler: function(e, t) {
                var i = this[0];
                if (i)
                    return C.event.trigger(e, t, i, !0)
            }
        }),
        v.focusin || C.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            var i = function(e) {
                C.event.simulate(t, e.target, C.event.fix(e))
            };
            C.event.special[t] = {
                setup: function() {
                    var n = this.ownerDocument || this
                      , s = Z.access(n, t);
                    s || n.addEventListener(e, i, !0),
                    Z.access(n, t, (s || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this
                      , s = Z.access(n, t) - 1;
                    s ? Z.access(n, t, s) : (n.removeEventListener(e, i, !0),
                    Z.remove(n, t))
                }
            }
        }
        ));
        var Mt = i.location
          , Pt = Date.now()
          , At = /\?/;
        C.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e)
                return null;
            try {
                t = (new i.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e),
            t
        }
        ;
        var Gt = /\[\]$/
          , Ht = /\r?\n/g
          , Dt = /^(?:submit|button|image|reset|file)$/i
          , Bt = /^(?:input|select|textarea|keygen)/i;
        function It(e, t, i, n) {
            var s;
            if (Array.isArray(t))
                C.each(t, (function(t, s) {
                    i || Gt.test(e) ? n(e, s) : It(e + "[" + ("object" == typeof s && null != s ? t : "") + "]", s, i, n)
                }
                ));
            else if (i || "object" !== w(t))
                n(e, t);
            else
                for (s in t)
                    It(e + "[" + s + "]", t[s], i, n)
        }
        C.param = function(e, t) {
            var i, n = [], s = function(e, t) {
                var i = T(t) ? t() : t;
                n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
            };
            if (null == e)
                return "";
            if (Array.isArray(e) || e.jquery && !C.isPlainObject(e))
                C.each(e, (function() {
                    s(this.name, this.value)
                }
                ));
            else
                for (i in e)
                    It(i, e[i], t, s);
            return n.join("&")
        }
        ,
        C.fn.extend({
            serialize: function() {
                return C.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map((function() {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this
                }
                )).filter((function() {
                    var e = this.type;
                    return this.name && !C(this).is(":disabled") && Bt.test(this.nodeName) && !Dt.test(e) && (this.checked || !me.test(e))
                }
                )).map((function(e, t) {
                    var i = C(this).val();
                    return null == i ? null : Array.isArray(i) ? C.map(i, (function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Ht, "\r\n")
                        }
                    }
                    )) : {
                        name: t.name,
                        value: i.replace(Ht, "\r\n")
                    }
                }
                )).get()
            }
        });
        var kt = /%20/g
          , Lt = /#.*$/
          , Nt = /([?&])_=[^&]*/
          , $t = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , Ot = /^(?:GET|HEAD)$/
          , zt = /^\/\//
          , Rt = {}
          , Vt = {}
          , Xt = "*/".concat("*")
          , Ft = a.createElement("a");
        function Wt(e) {
            return function(t, i) {
                "string" != typeof t && (i = t,
                t = "*");
                var n, s = 0, r = t.toLowerCase().match(O) || [];
                if (T(i))
                    for (; n = r[s++]; )
                        "+" === n[0] ? (n = n.slice(1) || "*",
                        (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
            }
        }
        function jt(e, t, i, n) {
            var s = {}
              , r = e === Vt;
            function a(o) {
                var l;
                return s[o] = !0,
                C.each(e[o] || [], (function(e, o) {
                    var d = o(t, i, n);
                    return "string" != typeof d || r || s[d] ? r ? !(l = d) : void 0 : (t.dataTypes.unshift(d),
                    a(d),
                    !1)
                }
                )),
                l
            }
            return a(t.dataTypes[0]) || !s["*"] && a("*")
        }
        function Yt(e, t) {
            var i, n, s = C.ajaxSettings.flatOptions || {};
            for (i in t)
                void 0 !== t[i] && ((s[i] ? e : n || (n = {}))[i] = t[i]);
            return n && C.extend(!0, e, n),
            e
        }
        Ft.href = Mt.href,
        C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Mt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Mt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Xt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": C.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Yt(Yt(e, C.ajaxSettings), t) : Yt(C.ajaxSettings, e)
            },
            ajaxPrefilter: Wt(Rt),
            ajaxTransport: Wt(Vt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e,
                e = void 0),
                t = t || {};
                var n, s, r, o, l, d, c, u, p, h, f = C.ajaxSetup({}, t), m = f.context || f, g = f.context && (m.nodeType || m.jquery) ? C(m) : C.event, v = C.Deferred(), T = C.Callbacks("once memory"), b = f.statusCode || {}, y = {}, S = {}, w = "canceled", x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!o)
                                for (o = {}; t = $t.exec(r); )
                                    o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = o[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return c ? r : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = S[e.toLowerCase()] = S[e.toLowerCase()] || e,
                        y[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (f.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c)
                                x.always(e[x.status]);
                            else
                                for (t in e)
                                    b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return n && n.abort(t),
                        E(0, t),
                        this
                    }
                };
                if (v.promise(x),
                f.url = ((e || f.url || Mt.href) + "").replace(zt, Mt.protocol + "//"),
                f.type = t.method || t.type || f.method || f.type,
                f.dataTypes = (f.dataType || "*").toLowerCase().match(O) || [""],
                null == f.crossDomain) {
                    d = a.createElement("a");
                    try {
                        d.href = f.url,
                        d.href = d.href,
                        f.crossDomain = Ft.protocol + "//" + Ft.host != d.protocol + "//" + d.host
                    } catch (e) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = C.param(f.data, f.traditional)),
                jt(Rt, f, t, x),
                c)
                    return x;
                for (p in (u = C.event && f.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
                f.type = f.type.toUpperCase(),
                f.hasContent = !Ot.test(f.type),
                s = f.url.replace(Lt, ""),
                f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(kt, "+")) : (h = f.url.slice(s.length),
                f.data && (f.processData || "string" == typeof f.data) && (s += (At.test(s) ? "&" : "?") + f.data,
                delete f.data),
                !1 === f.cache && (s = s.replace(Nt, "$1"),
                h = (At.test(s) ? "&" : "?") + "_=" + Pt++ + h),
                f.url = s + h),
                f.ifModified && (C.lastModified[s] && x.setRequestHeader("If-Modified-Since", C.lastModified[s]),
                C.etag[s] && x.setRequestHeader("If-None-Match", C.etag[s])),
                (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && x.setRequestHeader("Content-Type", f.contentType),
                x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : f.accepts["*"]),
                f.headers)
                    x.setRequestHeader(p, f.headers[p]);
                if (f.beforeSend && (!1 === f.beforeSend.call(m, x, f) || c))
                    return x.abort();
                if (w = "abort",
                T.add(f.complete),
                x.done(f.success),
                x.fail(f.error),
                n = jt(Vt, f, t, x)) {
                    if (x.readyState = 1,
                    u && g.trigger("ajaxSend", [x, f]),
                    c)
                        return x;
                    f.async && f.timeout > 0 && (l = i.setTimeout((function() {
                        x.abort("timeout")
                    }
                    ), f.timeout));
                    try {
                        c = !1,
                        n.send(y, E)
                    } catch (e) {
                        if (c)
                            throw e;
                        E(-1, e)
                    }
                } else
                    E(-1, "No Transport");
                function E(e, t, a, o) {
                    var d, p, h, y, S, w = t;
                    c || (c = !0,
                    l && i.clearTimeout(l),
                    n = void 0,
                    r = o || "",
                    x.readyState = e > 0 ? 4 : 0,
                    d = e >= 200 && e < 300 || 304 === e,
                    a && (y = function(e, t, i) {
                        for (var n, s, r, a, o = e.contents, l = e.dataTypes; "*" === l[0]; )
                            l.shift(),
                            void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (n)
                            for (s in o)
                                if (o[s] && o[s].test(n)) {
                                    l.unshift(s);
                                    break
                                }
                        if (l[0]in i)
                            r = l[0];
                        else {
                            for (s in i) {
                                if (!l[0] || e.converters[s + " " + l[0]]) {
                                    r = s;
                                    break
                                }
                                a || (a = s)
                            }
                            r = r || a
                        }
                        if (r)
                            return r !== l[0] && l.unshift(r),
                            i[r]
                    }(f, x, a)),
                    y = function(e, t, i, n) {
                        var s, r, a, o, l, d = {}, c = e.dataTypes.slice();
                        if (c[1])
                            for (a in e.converters)
                                d[a.toLowerCase()] = e.converters[a];
                        for (r = c.shift(); r; )
                            if (e.responseFields[r] && (i[e.responseFields[r]] = t),
                            !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                            l = r,
                            r = c.shift())
                                if ("*" === r)
                                    r = l;
                                else if ("*" !== l && l !== r) {
                                    if (!(a = d[l + " " + r] || d["* " + r]))
                                        for (s in d)
                                            if ((o = s.split(" "))[1] === r && (a = d[l + " " + o[0]] || d["* " + o[0]])) {
                                                !0 === a ? a = d[s] : !0 !== d[s] && (r = o[0],
                                                c.unshift(o[1]));
                                                break
                                            }
                                    if (!0 !== a)
                                        if (a && e.throws)
                                            t = a(t);
                                        else
                                            try {
                                                t = a(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: a ? e : "No conversion from " + l + " to " + r
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: t
                        }
                    }(f, y, x, d),
                    d ? (f.ifModified && ((S = x.getResponseHeader("Last-Modified")) && (C.lastModified[s] = S),
                    (S = x.getResponseHeader("etag")) && (C.etag[s] = S)),
                    204 === e || "HEAD" === f.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = y.state,
                    p = y.data,
                    d = !(h = y.error))) : (h = w,
                    !e && w || (w = "error",
                    e < 0 && (e = 0))),
                    x.status = e,
                    x.statusText = (t || w) + "",
                    d ? v.resolveWith(m, [p, w, x]) : v.rejectWith(m, [x, w, h]),
                    x.statusCode(b),
                    b = void 0,
                    u && g.trigger(d ? "ajaxSuccess" : "ajaxError", [x, f, d ? p : h]),
                    T.fireWith(m, [x, w]),
                    u && (g.trigger("ajaxComplete", [x, f]),
                    --C.active || C.event.trigger("ajaxStop")))
                }
                return x
            },
            getJSON: function(e, t, i) {
                return C.get(e, t, i, "json")
            },
            getScript: function(e, t) {
                return C.get(e, void 0, t, "script")
            }
        }),
        C.each(["get", "post"], (function(e, t) {
            C[t] = function(e, i, n, s) {
                return T(i) && (s = s || n,
                n = i,
                i = void 0),
                C.ajax(C.extend({
                    url: e,
                    type: t,
                    dataType: s,
                    data: i,
                    success: n
                }, C.isPlainObject(e) && e))
            }
        }
        )),
        C._evalUrl = function(e, t) {
            return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    C.globalEval(e, t)
                }
            })
        }
        ,
        C.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (T(e) && (e = e.call(this[0])),
                t = C(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                t.map((function() {
                    for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                    return e
                }
                )).append(this)),
                this
            },
            wrapInner: function(e) {
                return T(e) ? this.each((function(t) {
                    C(this).wrapInner(e.call(this, t))
                }
                )) : this.each((function() {
                    var t = C(this)
                      , i = t.contents();
                    i.length ? i.wrapAll(e) : t.append(e)
                }
                ))
            },
            wrap: function(e) {
                var t = T(e);
                return this.each((function(i) {
                    C(this).wrapAll(t ? e.call(this, i) : e)
                }
                ))
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each((function() {
                    C(this).replaceWith(this.childNodes)
                }
                )),
                this
            }
        }),
        C.expr.pseudos.hidden = function(e) {
            return !C.expr.pseudos.visible(e)
        }
        ,
        C.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        C.ajaxSettings.xhr = function() {
            try {
                return new i.XMLHttpRequest
            } catch (e) {}
        }
        ;
        var _t = {
            0: 200,
            1223: 204
        }
          , qt = C.ajaxSettings.xhr();
        v.cors = !!qt && "withCredentials"in qt,
        v.ajax = qt = !!qt,
        C.ajaxTransport((function(e) {
            var t, n;
            if (v.cors || qt && !e.crossDomain)
                return {
                    send: function(s, r) {
                        var a, o = e.xhr();
                        if (o.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                            for (a in e.xhrFields)
                                o[a] = e.xhrFields[a];
                        for (a in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                        e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"),
                        s)
                            o.setRequestHeader(a, s[a]);
                        t = function(e) {
                            return function() {
                                t && (t = n = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null,
                                "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? r(0, "error") : r(o.status, o.statusText) : r(_t[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                                    binary: o.response
                                } : {
                                    text: o.responseText
                                }, o.getAllResponseHeaders()))
                            }
                        }
                        ,
                        o.onload = t(),
                        n = o.onerror = o.ontimeout = t("error"),
                        void 0 !== o.onabort ? o.onabort = n : o.onreadystatechange = function() {
                            4 === o.readyState && i.setTimeout((function() {
                                t && n()
                            }
                            ))
                        }
                        ,
                        t = t("abort");
                        try {
                            o.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t)
                                throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
        }
        )),
        C.ajaxPrefilter((function(e) {
            e.crossDomain && (e.contents.script = !1)
        }
        )),
        C.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return C.globalEval(e),
                    e
                }
            }
        }),
        C.ajaxPrefilter("script", (function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }
        )),
        C.ajaxTransport("script", (function(e) {
            var t, i;
            if (e.crossDomain || e.scriptAttrs)
                return {
                    send: function(n, s) {
                        t = C("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", i = function(e) {
                            t.remove(),
                            i = null,
                            e && s("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                        a.head.appendChild(t[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
        }
        ));
        var Ut, Kt = [], Qt = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Kt.pop() || C.expando + "_" + Pt++;
                return this[e] = !0,
                e
            }
        }),
        C.ajaxPrefilter("json jsonp", (function(e, t, n) {
            var s, r, a, o = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
            if (o || "jsonp" === e.dataTypes[0])
                return s = e.jsonpCallback = T(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                o ? e[o] = e[o].replace(Qt, "$1" + s) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
                e.converters["script json"] = function() {
                    return a || C.error(s + " was not called"),
                    a[0]
                }
                ,
                e.dataTypes[0] = "json",
                r = i[s],
                i[s] = function() {
                    a = arguments
                }
                ,
                n.always((function() {
                    void 0 === r ? C(i).removeProp(s) : i[s] = r,
                    e[s] && (e.jsonpCallback = t.jsonpCallback,
                    Kt.push(s)),
                    a && T(r) && r(a[0]),
                    a = r = void 0
                }
                )),
                "script"
        }
        )),
        v.createHTMLDocument = ((Ut = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
        2 === Ut.childNodes.length),
        C.parseHTML = function(e, t, i) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t,
            t = !1),
            t || (v.createHTMLDocument ? ((n = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href,
            t.head.appendChild(n)) : t = a),
            r = !i && [],
            (s = D.exec(e)) ? [t.createElement(s[1])] : (s = xe([e], t, r),
            r && r.length && C(r).remove(),
            C.merge([], s.childNodes)));
            var n, s, r
        }
        ,
        C.fn.load = function(e, t, i) {
            var n, s, r, a = this, o = e.indexOf(" ");
            return o > -1 && (n = yt(e.slice(o)),
            e = e.slice(0, o)),
            T(t) ? (i = t,
            t = void 0) : t && "object" == typeof t && (s = "POST"),
            a.length > 0 && C.ajax({
                url: e,
                type: s || "GET",
                dataType: "html",
                data: t
            }).done((function(e) {
                r = arguments,
                a.html(n ? C("<div>").append(C.parseHTML(e)).find(n) : e)
            }
            )).always(i && function(e, t) {
                a.each((function() {
                    i.apply(this, r || [e.responseText, t, e])
                }
                ))
            }
            ),
            this
        }
        ,
        C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
            C.fn[t] = function(e) {
                return this.on(t, e)
            }
        }
        )),
        C.expr.pseudos.animated = function(e) {
            return C.grep(C.timers, (function(t) {
                return e === t.elem
            }
            )).length
        }
        ,
        C.offset = {
            setOffset: function(e, t, i) {
                var n, s, r, a, o, l, d = C.css(e, "position"), c = C(e), u = {};
                "static" === d && (e.style.position = "relative"),
                o = c.offset(),
                r = C.css(e, "top"),
                l = C.css(e, "left"),
                ("absolute" === d || "fixed" === d) && (r + l).indexOf("auto") > -1 ? (a = (n = c.position()).top,
                s = n.left) : (a = parseFloat(r) || 0,
                s = parseFloat(l) || 0),
                T(t) && (t = t.call(e, i, C.extend({}, o))),
                null != t.top && (u.top = t.top - o.top + a),
                null != t.left && (u.left = t.left - o.left + s),
                "using"in t ? t.using.call(e, u) : c.css(u)
            }
        },
        C.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each((function(t) {
                        C.offset.setOffset(this, e, t)
                    }
                    ));
                var t, i, n = this[0];
                return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(),
                i = n.ownerDocument.defaultView,
                {
                    top: t.top + i.pageYOffset,
                    left: t.left + i.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, i, n = this[0], s = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === C.css(n, "position"))
                        t = n.getBoundingClientRect();
                    else {
                        for (t = this.offset(),
                        i = n.ownerDocument,
                        e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === C.css(e, "position"); )
                            e = e.parentNode;
                        e && e !== n && 1 === e.nodeType && ((s = C(e).offset()).top += C.css(e, "borderTopWidth", !0),
                        s.left += C.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - s.top - C.css(n, "marginTop", !0),
                        left: t.left - s.left - C.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map((function() {
                    for (var e = this.offsetParent; e && "static" === C.css(e, "position"); )
                        e = e.offsetParent;
                    return e || ae
                }
                ))
            }
        }),
        C.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(e, t) {
            var i = "pageYOffset" === t;
            C.fn[e] = function(n) {
                return j(this, (function(e, n, s) {
                    var r;
                    if (b(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                    void 0 === s)
                        return r ? r[t] : e[n];
                    r ? r.scrollTo(i ? r.pageXOffset : s, i ? s : r.pageYOffset) : e[n] = s
                }
                ), e, n, arguments.length)
            }
        }
        )),
        C.each(["top", "left"], (function(e, t) {
            C.cssHooks[t] = qe(v.pixelPosition, (function(e, i) {
                if (i)
                    return i = _e(e, t),
                    We.test(i) ? C(e).position()[t] + "px" : i
            }
            ))
        }
        )),
        C.each({
            Height: "height",
            Width: "width"
        }, (function(e, t) {
            C.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, (function(i, n) {
                C.fn[n] = function(s, r) {
                    var a = arguments.length && (i || "boolean" != typeof s)
                      , o = i || (!0 === s || !0 === r ? "margin" : "border");
                    return j(this, (function(t, i, s) {
                        var r;
                        return b(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                        Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === s ? C.css(t, i, o) : C.style(t, i, s, o)
                    }
                    ), t, a ? s : void 0, a)
                }
            }
            ))
        }
        )),
        C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
            C.fn[t] = function(e, i) {
                return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
            }
        }
        )),
        C.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        C.fn.extend({
            bind: function(e, t, i) {
                return this.on(e, null, t, i)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, i, n) {
                return this.on(t, e, i, n)
            },
            undelegate: function(e, t, i) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
            }
        }),
        C.proxy = function(e, t) {
            var i, n, s;
            if ("string" == typeof t && (i = e[t],
            t = e,
            e = i),
            T(e))
                return n = l.call(arguments, 2),
                (s = function() {
                    return e.apply(t || this, n.concat(l.call(arguments)))
                }
                ).guid = e.guid = e.guid || C.guid++,
                s
        }
        ,
        C.holdReady = function(e) {
            e ? C.readyWait++ : C.ready(!0)
        }
        ,
        C.isArray = Array.isArray,
        C.parseJSON = JSON.parse,
        C.nodeName = H,
        C.isFunction = T,
        C.isWindow = b,
        C.camelCase = U,
        C.type = w,
        C.now = Date.now,
        C.isNumeric = function(e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ,
        void 0 === (n = function() {
            return C
        }
        .apply(t, [])) || (e.exports = n);
        var Zt = i.jQuery
          , Jt = i.$;
        return C.noConflict = function(e) {
            return i.$ === C && (i.$ = Jt),
            e && i.jQuery === C && (i.jQuery = Zt),
            C
        }
        ,
        s || (i.jQuery = i.$ = C),
        C
    }
    ))
}
, function(e, t, i) {
    (function(t) {
        var i;
        e.exports = function e(t, n, s) {
            function r(o, l) {
                if (!n[o]) {
                    if (!t[o]) {
                        if (!l && "function" == typeof i && i)
                            return i(o, !0);
                        if (a)
                            return a(o, !0);
                        var d = new Error("Cannot find module '" + o + "'");
                        throw d.code = "MODULE_NOT_FOUND",
                        d
                    }
                    var c = n[o] = {
                        exports: {}
                    };
                    t[o][0].call(c.exports, (function(e) {
                        var i = t[o][1][e];
                        return r(i || e)
                    }
                    ), c, c.exports, e, t, n, s)
                }
                return n[o].exports
            }
            for (var a = "function" == typeof i && i, o = 0; o < s.length; o++)
                r(s[o]);
            return r
        }({
            1: [function(e, t, i) {
                /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
                "use strict";
                var n = Object.getOwnPropertySymbols
                  , s = Object.prototype.hasOwnProperty
                  , r = Object.prototype.propertyIsEnumerable;
                function a(e) {
                    if (null == e)
                        throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e)
                }
                t.exports = function() {
                    try {
                        if (!Object.assign)
                            return !1;
                        var e = new String("abc");
                        if (e[5] = "de",
                        "5" === Object.getOwnPropertyNames(e)[0])
                            return !1;
                        for (var t = {}, i = 0; i < 10; i++)
                            t["_" + String.fromCharCode(i)] = i;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                            return t[e]
                        }
                        )).join(""))
                            return !1;
                        var n = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                            n[e] = e
                        }
                        )),
                        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                    } catch (e) {
                        return !1
                    }
                }() ? Object.assign : function(e, t) {
                    for (var i, o, l = a(e), d = 1; d < arguments.length; d++) {
                        for (var c in i = Object(arguments[d]))
                            s.call(i, c) && (l[c] = i[c]);
                        if (n) {
                            o = n(i);
                            for (var u = 0; u < o.length; u++)
                                r.call(i, o[u]) && (l[o[u]] = i[o[u]])
                        }
                    }
                    return l
                }
            }
            , {}],
            2: [function(e, t, i) {
                (function(e) {
                    (function() {
                        var i, n, s, r, a, o;
                        "undefined" != typeof performance && null !== performance && performance.now ? t.exports = function() {
                            return performance.now()
                        }
                        : null != e && e.hrtime ? (t.exports = function() {
                            return (i() - a) / 1e6
                        }
                        ,
                        n = e.hrtime,
                        r = (i = function() {
                            var e;
                            return 1e9 * (e = n())[0] + e[1]
                        }
                        )(),
                        o = 1e9 * e.uptime(),
                        a = r - o) : Date.now ? (t.exports = function() {
                            return Date.now() - s
                        }
                        ,
                        s = Date.now()) : (t.exports = function() {
                            return (new Date).getTime() - s
                        }
                        ,
                        s = (new Date).getTime())
                    }
                    ).call(this)
                }
                ).call(this, e("_process"))
            }
            , {
                _process: 3
            }],
            3: [function(e, t, i) {
                var n, s, r = t.exports = {};
                function a() {
                    throw new Error("setTimeout has not been defined")
                }
                function o() {
                    throw new Error("clearTimeout has not been defined")
                }
                function l(e) {
                    if (n === setTimeout)
                        return setTimeout(e, 0);
                    if ((n === a || !n) && setTimeout)
                        return n = setTimeout,
                        setTimeout(e, 0);
                    try {
                        return n(e, 0)
                    } catch (t) {
                        try {
                            return n.call(null, e, 0)
                        } catch (t) {
                            return n.call(this, e, 0)
                        }
                    }
                }
                !function() {
                    try {
                        n = "function" == typeof setTimeout ? setTimeout : a
                    } catch (e) {
                        n = a
                    }
                    try {
                        s = "function" == typeof clearTimeout ? clearTimeout : o
                    } catch (e) {
                        s = o
                    }
                }();
                var d, c = [], u = !1, p = -1;
                function h() {
                    u && d && (u = !1,
                    d.length ? c = d.concat(c) : p = -1,
                    c.length && f())
                }
                function f() {
                    if (!u) {
                        var e = l(h);
                        u = !0;
                        for (var t = c.length; t; ) {
                            for (d = c,
                            c = []; ++p < t; )
                                d && d[p].run();
                            p = -1,
                            t = c.length
                        }
                        d = null,
                        u = !1,
                        function(e) {
                            if (s === clearTimeout)
                                return clearTimeout(e);
                            if ((s === o || !s) && clearTimeout)
                                return s = clearTimeout,
                                clearTimeout(e);
                            try {
                                s(e)
                            } catch (t) {
                                try {
                                    return s.call(null, e)
                                } catch (t) {
                                    return s.call(this, e)
                                }
                            }
                        }(e)
                    }
                }
                function m(e, t) {
                    this.fun = e,
                    this.array = t
                }
                function g() {}
                r.nextTick = function(e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var i = 1; i < arguments.length; i++)
                            t[i - 1] = arguments[i];
                    c.push(new m(e,t)),
                    1 !== c.length || u || l(f)
                }
                ,
                m.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }
                ,
                r.title = "browser",
                r.browser = !0,
                r.env = {},
                r.argv = [],
                r.version = "",
                r.versions = {},
                r.on = g,
                r.addListener = g,
                r.once = g,
                r.off = g,
                r.removeListener = g,
                r.removeAllListeners = g,
                r.emit = g,
                r.prependListener = g,
                r.prependOnceListener = g,
                r.listeners = function(e) {
                    return []
                }
                ,
                r.binding = function(e) {
                    throw new Error("process.binding is not supported")
                }
                ,
                r.cwd = function() {
                    return "/"
                }
                ,
                r.chdir = function(e) {
                    throw new Error("process.chdir is not supported")
                }
                ,
                r.umask = function() {
                    return 0
                }
            }
            , {}],
            4: [function(e, i, n) {
                (function(t) {
                    for (var n = e("performance-now"), s = "undefined" == typeof window ? t : window, r = ["moz", "webkit"], a = "AnimationFrame", o = s["request" + a], l = s["cancel" + a] || s["cancelRequest" + a], d = 0; !o && d < r.length; d++)
                        o = s[r[d] + "Request" + a],
                        l = s[r[d] + "Cancel" + a] || s[r[d] + "CancelRequest" + a];
                    if (!o || !l) {
                        var c = 0
                          , u = 0
                          , p = [];
                        o = function(e) {
                            if (0 === p.length) {
                                var t = n()
                                  , i = Math.max(0, 1e3 / 60 - (t - c));
                                c = i + t,
                                setTimeout((function() {
                                    var e = p.slice(0);
                                    p.length = 0;
                                    for (var t = 0; t < e.length; t++)
                                        if (!e[t].cancelled)
                                            try {
                                                e[t].callback(c)
                                            } catch (e) {
                                                setTimeout((function() {
                                                    throw e
                                                }
                                                ), 0)
                                            }
                                }
                                ), Math.round(i))
                            }
                            return p.push({
                                handle: ++u,
                                callback: e,
                                cancelled: !1
                            }),
                            u
                        }
                        ,
                        l = function(e) {
                            for (var t = 0; t < p.length; t++)
                                p[t].handle === e && (p[t].cancelled = !0)
                        }
                    }
                    i.exports = function(e) {
                        return o.call(s, e)
                    }
                    ,
                    i.exports.cancel = function() {
                        l.apply(s, arguments)
                    }
                    ,
                    i.exports.polyfill = function() {
                        s.requestAnimationFrame = o,
                        s.cancelAnimationFrame = l
                    }
                }
                ).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }
            , {
                "performance-now": 2
            }],
            5: [function(e, t, i) {
                "use strict";
                var n = function() {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value"in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, i, n) {
                        return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                    }
                }()
                  , s = e("raf")
                  , r = e("object-assign")
                  , a = {
                    propertyCache: {},
                    vendors: [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]],
                    clamp: function(e, t, i) {
                        return t < i ? e < t ? t : e > i ? i : e : e < i ? i : e > t ? t : e
                    },
                    data: function(e, t) {
                        return a.deserialize(e.getAttribute("data-" + t))
                    },
                    deserialize: function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : !isNaN(parseFloat(e)) && isFinite(e) ? parseFloat(e) : e)
                    },
                    camelCase: function(e) {
                        return e.replace(/-+(.)?/g, (function(e, t) {
                            return t ? t.toUpperCase() : ""
                        }
                        ))
                    },
                    accelerate: function(e) {
                        a.css(e, "transform", "translate3d(0,0,0) rotate(0.0001deg)"),
                        a.css(e, "transform-style", "preserve-3d"),
                        a.css(e, "backface-visibility", "hidden")
                    },
                    transformSupport: function(e) {
                        for (var t = document.createElement("div"), i = !1, n = null, s = !1, r = null, o = null, l = 0, d = a.vendors.length; l < d; l++)
                            if (null !== a.vendors[l] ? (r = a.vendors[l][0] + "transform",
                            o = a.vendors[l][1] + "Transform") : (r = "transform",
                            o = "transform"),
                            void 0 !== t.style[o]) {
                                i = !0;
                                break
                            }
                        switch (e) {
                        case "2D":
                            s = i;
                            break;
                        case "3D":
                            if (i) {
                                var c = document.body || document.createElement("body")
                                  , u = document.documentElement
                                  , p = u.style.overflow
                                  , h = !1;
                                document.body || (h = !0,
                                u.style.overflow = "hidden",
                                u.appendChild(c),
                                c.style.overflow = "hidden",
                                c.style.background = ""),
                                c.appendChild(t),
                                t.style[o] = "translate3d(1px,1px,1px)",
                                s = void 0 !== (n = window.getComputedStyle(t).getPropertyValue(r)) && n.length > 0 && "none" !== n,
                                u.style.overflow = p,
                                c.removeChild(t),
                                h && (c.removeAttribute("style"),
                                c.parentNode.removeChild(c))
                            }
                        }
                        return s
                    },
                    css: function(e, t, i) {
                        var n = a.propertyCache[t];
                        if (!n)
                            for (var s = 0, r = a.vendors.length; s < r; s++)
                                if (n = null !== a.vendors[s] ? a.camelCase(a.vendors[s][1] + "-" + t) : t,
                                void 0 !== e.style[n]) {
                                    a.propertyCache[t] = n;
                                    break
                                }
                        e.style[n] = i
                    }
                }
                  , o = {
                    relativeInput: !1,
                    clipRelativeInput: !1,
                    inputElement: null,
                    hoverOnly: !1,
                    calibrationThreshold: 100,
                    calibrationDelay: 500,
                    supportDelay: 500,
                    calibrateX: !1,
                    calibrateY: !0,
                    invertX: !0,
                    invertY: !0,
                    limitX: !1,
                    limitY: !1,
                    scalarX: 10,
                    scalarY: 10,
                    frictionX: .1,
                    frictionY: .1,
                    originX: .5,
                    originY: .5,
                    pointerEvents: !1,
                    precision: 1,
                    onReady: null,
                    selector: null
                }
                  , l = function() {
                    function e(t, i) {
                        !function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, e),
                        this.element = t;
                        var n = {
                            calibrateX: a.data(this.element, "calibrate-x"),
                            calibrateY: a.data(this.element, "calibrate-y"),
                            invertX: a.data(this.element, "invert-x"),
                            invertY: a.data(this.element, "invert-y"),
                            limitX: a.data(this.element, "limit-x"),
                            limitY: a.data(this.element, "limit-y"),
                            scalarX: a.data(this.element, "scalar-x"),
                            scalarY: a.data(this.element, "scalar-y"),
                            frictionX: a.data(this.element, "friction-x"),
                            frictionY: a.data(this.element, "friction-y"),
                            originX: a.data(this.element, "origin-x"),
                            originY: a.data(this.element, "origin-y"),
                            pointerEvents: a.data(this.element, "pointer-events"),
                            precision: a.data(this.element, "precision"),
                            relativeInput: a.data(this.element, "relative-input"),
                            clipRelativeInput: a.data(this.element, "clip-relative-input"),
                            hoverOnly: a.data(this.element, "hover-only"),
                            inputElement: document.querySelector(a.data(this.element, "input-element")),
                            selector: a.data(this.element, "selector")
                        };
                        for (var s in n)
                            null === n[s] && delete n[s];
                        r(this, o, n, i),
                        this.inputElement || (this.inputElement = this.element),
                        this.calibrationTimer = null,
                        this.calibrationFlag = !0,
                        this.enabled = !1,
                        this.depthsX = [],
                        this.depthsY = [],
                        this.raf = null,
                        this.bounds = null,
                        this.elementPositionX = 0,
                        this.elementPositionY = 0,
                        this.elementWidth = 0,
                        this.elementHeight = 0,
                        this.elementCenterX = 0,
                        this.elementCenterY = 0,
                        this.elementRangeX = 0,
                        this.elementRangeY = 0,
                        this.calibrationX = 0,
                        this.calibrationY = 0,
                        this.inputX = 0,
                        this.inputY = 0,
                        this.motionX = 0,
                        this.motionY = 0,
                        this.velocityX = 0,
                        this.velocityY = 0,
                        this.onMouseMove = this.onMouseMove.bind(this),
                        this.onDeviceOrientation = this.onDeviceOrientation.bind(this),
                        this.onDeviceMotion = this.onDeviceMotion.bind(this),
                        this.onOrientationTimer = this.onOrientationTimer.bind(this),
                        this.onMotionTimer = this.onMotionTimer.bind(this),
                        this.onCalibrationTimer = this.onCalibrationTimer.bind(this),
                        this.onAnimationFrame = this.onAnimationFrame.bind(this),
                        this.onWindowResize = this.onWindowResize.bind(this),
                        this.windowWidth = null,
                        this.windowHeight = null,
                        this.windowCenterX = null,
                        this.windowCenterY = null,
                        this.windowRadiusX = null,
                        this.windowRadiusY = null,
                        this.portrait = !1,
                        this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
                        this.motionSupport = !!window.DeviceMotionEvent && !this.desktop,
                        this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop,
                        this.orientationStatus = 0,
                        this.motionStatus = 0,
                        this.initialise()
                    }
                    return n(e, [{
                        key: "initialise",
                        value: function() {
                            void 0 === this.transform2DSupport && (this.transform2DSupport = a.transformSupport("2D"),
                            this.transform3DSupport = a.transformSupport("3D")),
                            this.transform3DSupport && a.accelerate(this.element),
                            "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"),
                            this.pointerEvents || (this.element.style.pointerEvents = "none"),
                            this.updateLayers(),
                            this.updateDimensions(),
                            this.enable(),
                            this.queueCalibration(this.calibrationDelay)
                        }
                    }, {
                        key: "doReadyCallback",
                        value: function() {
                            this.onReady && this.onReady()
                        }
                    }, {
                        key: "updateLayers",
                        value: function() {
                            this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children,
                            this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."),
                            this.depthsX = [],
                            this.depthsY = [];
                            for (var e = 0; e < this.layers.length; e++) {
                                var t = this.layers[e];
                                this.transform3DSupport && a.accelerate(t),
                                t.style.position = e ? "absolute" : "relative",
                                t.style.display = "block",
                                t.style.left = 0,
                                t.style.top = 0;
                                var i = a.data(t, "depth") || 0;
                                this.depthsX.push(a.data(t, "depth-x") || i),
                                this.depthsY.push(a.data(t, "depth-y") || i)
                            }
                        }
                    }, {
                        key: "updateDimensions",
                        value: function() {
                            this.windowWidth = window.innerWidth,
                            this.windowHeight = window.innerHeight,
                            this.windowCenterX = this.windowWidth * this.originX,
                            this.windowCenterY = this.windowHeight * this.originY,
                            this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX),
                            this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY)
                        }
                    }, {
                        key: "updateBounds",
                        value: function() {
                            this.bounds = this.inputElement.getBoundingClientRect(),
                            this.elementPositionX = this.bounds.left,
                            this.elementPositionY = this.bounds.top,
                            this.elementWidth = this.bounds.width,
                            this.elementHeight = this.bounds.height,
                            this.elementCenterX = this.elementWidth * this.originX,
                            this.elementCenterY = this.elementHeight * this.originY,
                            this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX),
                            this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY)
                        }
                    }, {
                        key: "queueCalibration",
                        value: function(e) {
                            clearTimeout(this.calibrationTimer),
                            this.calibrationTimer = setTimeout(this.onCalibrationTimer, e)
                        }
                    }, {
                        key: "enable",
                        value: function() {
                            this.enabled || (this.enabled = !0,
                            this.orientationSupport ? (this.portrait = !1,
                            window.addEventListener("deviceorientation", this.onDeviceOrientation),
                            this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1,
                            window.addEventListener("devicemotion", this.onDeviceMotion),
                            this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0,
                            this.calibrationY = 0,
                            this.portrait = !1,
                            window.addEventListener("mousemove", this.onMouseMove),
                            this.doReadyCallback()),
                            window.addEventListener("resize", this.onWindowResize),
                            this.raf = s(this.onAnimationFrame))
                        }
                    }, {
                        key: "disable",
                        value: function() {
                            this.enabled && (this.enabled = !1,
                            this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove),
                            window.removeEventListener("resize", this.onWindowResize),
                            s.cancel(this.raf))
                        }
                    }, {
                        key: "calibrate",
                        value: function(e, t) {
                            this.calibrateX = void 0 === e ? this.calibrateX : e,
                            this.calibrateY = void 0 === t ? this.calibrateY : t
                        }
                    }, {
                        key: "invert",
                        value: function(e, t) {
                            this.invertX = void 0 === e ? this.invertX : e,
                            this.invertY = void 0 === t ? this.invertY : t
                        }
                    }, {
                        key: "friction",
                        value: function(e, t) {
                            this.frictionX = void 0 === e ? this.frictionX : e,
                            this.frictionY = void 0 === t ? this.frictionY : t
                        }
                    }, {
                        key: "scalar",
                        value: function(e, t) {
                            this.scalarX = void 0 === e ? this.scalarX : e,
                            this.scalarY = void 0 === t ? this.scalarY : t
                        }
                    }, {
                        key: "limit",
                        value: function(e, t) {
                            this.limitX = void 0 === e ? this.limitX : e,
                            this.limitY = void 0 === t ? this.limitY : t
                        }
                    }, {
                        key: "origin",
                        value: function(e, t) {
                            this.originX = void 0 === e ? this.originX : e,
                            this.originY = void 0 === t ? this.originY : t
                        }
                    }, {
                        key: "setInputElement",
                        value: function(e) {
                            this.inputElement = e,
                            this.updateDimensions()
                        }
                    }, {
                        key: "setPosition",
                        value: function(e, t, i) {
                            t = t.toFixed(this.precision) + "px",
                            i = i.toFixed(this.precision) + "px",
                            this.transform3DSupport ? a.css(e, "transform", "translate3d(" + t + "," + i + ",0)") : this.transform2DSupport ? a.css(e, "transform", "translate(" + t + "," + i + ")") : (e.style.left = t,
                            e.style.top = i)
                        }
                    }, {
                        key: "onOrientationTimer",
                        value: function() {
                            this.orientationSupport && 0 === this.orientationStatus ? (this.disable(),
                            this.orientationSupport = !1,
                            this.enable()) : this.doReadyCallback()
                        }
                    }, {
                        key: "onMotionTimer",
                        value: function() {
                            this.motionSupport && 0 === this.motionStatus ? (this.disable(),
                            this.motionSupport = !1,
                            this.enable()) : this.doReadyCallback()
                        }
                    }, {
                        key: "onCalibrationTimer",
                        value: function() {
                            this.calibrationFlag = !0
                        }
                    }, {
                        key: "onWindowResize",
                        value: function() {
                            this.updateDimensions()
                        }
                    }, {
                        key: "onAnimationFrame",
                        value: function() {
                            this.updateBounds();
                            var e = this.inputX - this.calibrationX
                              , t = this.inputY - this.calibrationY;
                            (Math.abs(e) > this.calibrationThreshold || Math.abs(t) > this.calibrationThreshold) && this.queueCalibration(0),
                            this.portrait ? (this.motionX = this.calibrateX ? t : this.inputY,
                            this.motionY = this.calibrateY ? e : this.inputX) : (this.motionX = this.calibrateX ? e : this.inputX,
                            this.motionY = this.calibrateY ? t : this.inputY),
                            this.motionX *= this.elementWidth * (this.scalarX / 100),
                            this.motionY *= this.elementHeight * (this.scalarY / 100),
                            isNaN(parseFloat(this.limitX)) || (this.motionX = a.clamp(this.motionX, -this.limitX, this.limitX)),
                            isNaN(parseFloat(this.limitY)) || (this.motionY = a.clamp(this.motionY, -this.limitY, this.limitY)),
                            this.velocityX += (this.motionX - this.velocityX) * this.frictionX,
                            this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
                            for (var i = 0; i < this.layers.length; i++) {
                                var n = this.layers[i]
                                  , r = this.depthsX[i]
                                  , o = this.depthsY[i]
                                  , l = this.velocityX * (r * (this.invertX ? -1 : 1))
                                  , d = this.velocityY * (o * (this.invertY ? -1 : 1));
                                this.setPosition(n, l, d)
                            }
                            this.raf = s(this.onAnimationFrame)
                        }
                    }, {
                        key: "rotate",
                        value: function(e, t) {
                            var i = (e || 0) / 30
                              , n = (t || 0) / 30
                              , s = this.windowHeight > this.windowWidth;
                            this.portrait !== s && (this.portrait = s,
                            this.calibrationFlag = !0),
                            this.calibrationFlag && (this.calibrationFlag = !1,
                            this.calibrationX = i,
                            this.calibrationY = n),
                            this.inputX = i,
                            this.inputY = n
                        }
                    }, {
                        key: "onDeviceOrientation",
                        value: function(e) {
                            var t = e.beta
                              , i = e.gamma;
                            null !== t && null !== i && (this.orientationStatus = 1,
                            this.rotate(t, i))
                        }
                    }, {
                        key: "onDeviceMotion",
                        value: function(e) {
                            var t = e.rotationRate.beta
                              , i = e.rotationRate.gamma;
                            null !== t && null !== i && (this.motionStatus = 1,
                            this.rotate(t, i))
                        }
                    }, {
                        key: "onMouseMove",
                        value: function(e) {
                            var t = e.clientX
                              , i = e.clientY;
                            if (this.hoverOnly && (t < this.elementPositionX || t > this.elementPositionX + this.elementWidth || i < this.elementPositionY || i > this.elementPositionY + this.elementHeight))
                                return this.inputX = 0,
                                void (this.inputY = 0);
                            this.relativeInput ? (this.clipRelativeInput && (t = Math.max(t, this.elementPositionX),
                            t = Math.min(t, this.elementPositionX + this.elementWidth),
                            i = Math.max(i, this.elementPositionY),
                            i = Math.min(i, this.elementPositionY + this.elementHeight)),
                            this.elementRangeX && this.elementRangeY && (this.inputX = (t - this.elementPositionX - this.elementCenterX) / this.elementRangeX,
                            this.inputY = (i - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (t - this.windowCenterX) / this.windowRadiusX,
                            this.inputY = (i - this.windowCenterY) / this.windowRadiusY)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.disable(),
                            clearTimeout(this.calibrationTimer),
                            clearTimeout(this.detectionTimer),
                            this.element.removeAttribute("style");
                            for (var e = 0; e < this.layers.length; e++)
                                this.layers[e].removeAttribute("style");
                            delete this.element,
                            delete this.layers
                        }
                    }, {
                        key: "version",
                        value: function() {
                            return "3.1.0"
                        }
                    }]),
                    e
                }();
                t.exports = l
            }
            , {
                "object-assign": 1,
                raf: 4
            }]
        }, {}, [5])(5)
    }
    ).call(this, i(15))
}
, function(e, t, i) {
    (e.exports ? function(t) {
        e.exports = t()
    }
    : i(16))((function() {
        "use strict";
        var e, t = {
            mobileDetectRules: {
                phones: {
                    iPhone: "\\biPhone\\b|\\biPod\\b",
                    BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
                    HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                    Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                    Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                    Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
                    Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
                    LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
                    Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                    Asus: "Asus.*Galaxy|PadFone.*Mobile",
                    NokiaLumia: "Lumia [0-9]{3,4}",
                    Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                    Palm: "PalmSource|Palm",
                    Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                    Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                    Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                    Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                    iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                    SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                    Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                    Alcatel: "Alcatel",
                    Nintendo: "Nintendo (3DS|Switch)",
                    Amoi: "Amoi",
                    INQ: "INQ",
                    OnePlus: "ONEPLUS",
                    GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                },
                tablets: {
                    iPad: "iPad|iPad.*Mobile",
                    NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                    GoogleTablet: "Android.*Pixel C",
                    SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
                    Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                    SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                    HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                    AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
                    BlackBerryTablet: "PlayBook|RIM Tablet",
                    HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                    MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                    NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                    AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
                    ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                    LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                    FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                    PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                    LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
                    DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                    YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                    MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                    ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                    IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                    IRUTablet: "M702pro",
                    MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                    EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                    AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                    ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                    AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                    NokiaLumiaTablet: "Lumia 2520",
                    SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
                    PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                    CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                    CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                    MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                    MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                    SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                    RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                    FlyTablet: "IQ310|Fly Vision",
                    bqTablet: "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
                    HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
                    NecTablet: "\\bN-06D|\\bN-08D",
                    PantechTablet: "Pantech.*P4100",
                    BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                    VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                    ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
                    PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                    NabiTablet: "Android.*\\bNabi",
                    KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                    DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                    TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                    PlaystationTablet: "Playstation.*(Portable|Vita)",
                    TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                    PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                    AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                    DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                    GalapadTablet: "Android.*\\bG1\\b(?!\\))",
                    MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                    KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                    AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                    PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                    YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                    ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                    GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                    PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                    OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                    HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                    DPSTablet: "DPS Dream 9|DPS Dual 7",
                    VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                    CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                    MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                    ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                    GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                    ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                    VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                    ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                    StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                    VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
                    EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                    RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                    iMobileTablet: "i-mobile i-note",
                    TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                    AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                    AMPETablet: "Android.* A78 ",
                    SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                    TecnoTablet: "TECNO P9|TECNO DP8D",
                    JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                    iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                    FX2Tablet: "FX2 PAD7|FX2 PAD10",
                    XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                    ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                    VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                    OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                    CaptivaTablet: "CAPTIVA PAD",
                    IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                    TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                    OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
                    JaytechTablet: "TPC-PA762",
                    BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                    DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                    EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                    LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                    AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                    MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                    CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                    WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                    MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
                    MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                    NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                    NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                    LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                    UbislateTablet: "UbiSlate[\\s]?7C",
                    PocketBookTablet: "Pocketbook",
                    KocasoTablet: "\\b(TB-1207)\\b",
                    HisenseTablet: "\\b(F5281|E2371)\\b",
                    Hudl: "Hudl HT7S3|Hudl 2",
                    TelstraTablet: "T-Hub2",
                    GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
                },
                oss: {
                    AndroidOS: "Android",
                    BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                    PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                    SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                    WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
                    WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                    iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                    iPadOS: "CPU OS 13",
                    MeeGoOS: "MeeGo",
                    MaemoOS: "Maemo",
                    JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                    webOS: "webOS|hpwOS",
                    badaOS: "\\bBada\\b",
                    BREWOS: "BREW"
                },
                uas: {
                    Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                    Dolfin: "\\bDolfin\\b",
                    Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
                    Skyfire: "Skyfire",
                    Edge: "Mobile Safari/[.0-9]* Edge",
                    IE: "IEMobile|MSIEMobile",
                    Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                    Bolt: "bolt",
                    TeaShark: "teashark",
                    Blazer: "Blazer",
                    Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                    WeChat: "\\bMicroMessenger\\b",
                    UCBrowser: "UC.*Browser|UCWEB",
                    baiduboxapp: "baiduboxapp",
                    baidubrowser: "baidubrowser",
                    DiigoBrowser: "DiigoBrowser",
                    Mercury: "\\bMercury\\b",
                    ObigoBrowser: "Obigo",
                    NetFront: "NF-Browser",
                    GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                    PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
                },
                props: {
                    Mobile: "Mobile/[VER]",
                    Build: "Build/[VER]",
                    Version: "Version/[VER]",
                    VendorID: "VendorID/[VER]",
                    iPad: "iPad.*CPU[a-z ]+[VER]",
                    iPhone: "iPhone.*CPU[a-z ]+[VER]",
                    iPod: "iPod.*CPU[a-z ]+[VER]",
                    Kindle: "Kindle/[VER]",
                    Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                    Coast: ["Coast/[VER]"],
                    Dolfin: "Dolfin/[VER]",
                    Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                    Fennec: "Fennec/[VER]",
                    Edge: "Edge/[VER]",
                    IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                    NetFront: "NetFront/[VER]",
                    NokiaBrowser: "NokiaBrowser/[VER]",
                    Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                    "Opera Mini": "Opera Mini/[VER]",
                    "Opera Mobi": "Version/[VER]",
                    UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
                    MQQBrowser: "MQQBrowser/[VER]",
                    MicroMessenger: "MicroMessenger/[VER]",
                    baiduboxapp: "baiduboxapp/[VER]",
                    baidubrowser: "baidubrowser/[VER]",
                    SamsungBrowser: "SamsungBrowser/[VER]",
                    Iron: "Iron/[VER]",
                    Safari: ["Version/[VER]", "Safari/[VER]"],
                    Skyfire: "Skyfire/[VER]",
                    Tizen: "Tizen/[VER]",
                    Webkit: "webkit[ /][VER]",
                    PaleMoon: "PaleMoon/[VER]",
                    Gecko: "Gecko/[VER]",
                    Trident: "Trident/[VER]",
                    Presto: "Presto/[VER]",
                    Goanna: "Goanna/[VER]",
                    iOS: " \\bi?OS\\b [VER][ ;]{1}",
                    Android: "Android [VER]",
                    BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                    BREW: "BREW [VER]",
                    Java: "Java/[VER]",
                    "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                    "Windows Phone": "Windows Phone [VER]",
                    "Windows CE": "Windows CE/[VER]",
                    "Windows NT": "Windows NT [VER]",
                    Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                    webOS: ["webOS/[VER]", "hpwOS/[VER];"]
                },
                utils: {
                    Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
                    MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                    DesktopMode: "WPDesktop",
                    TV: "SonyDTV|HbbTV",
                    WebKit: "(webkit)[ /]([\\w.]+)",
                    Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
                    Watch: "SM-V700"
                }
            },
            detectMobileBrowsers: {
                fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                tabletPattern: /android|ipad|playbook|silk/i
            }
        }, i = Object.prototype.hasOwnProperty;
        function n(e, t) {
            return null != e && null != t && e.toLowerCase() === t.toLowerCase()
        }
        function s(e, t) {
            var i, n, s = e.length;
            if (!s || !t)
                return !1;
            for (i = t.toLowerCase(),
            n = 0; n < s; ++n)
                if (i === e[n].toLowerCase())
                    return !0;
            return !1
        }
        function r(e) {
            for (var t in e)
                i.call(e, t) && (e[t] = new RegExp(e[t],"i"))
        }
        function a(e, t) {
            this.ua = function(e) {
                return (e || "").substr(0, 500)
            }(e),
            this._cache = {},
            this.maxPhoneWidth = t || 600
        }
        return t.FALLBACK_PHONE = "UnknownPhone",
        t.FALLBACK_TABLET = "UnknownTablet",
        t.FALLBACK_MOBILE = "UnknownMobile",
        e = "isArray"in Array ? Array.isArray : function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        ,
        function() {
            var n, s, a, o, l, d, c = t.mobileDetectRules;
            for (n in c.props)
                if (i.call(c.props, n)) {
                    for (s = c.props[n],
                    e(s) || (s = [s]),
                    l = s.length,
                    o = 0; o < l; ++o)
                        (d = (a = s[o]).indexOf("[VER]")) >= 0 && (a = a.substring(0, d) + "([\\w._\\+]+)" + a.substring(d + 5)),
                        s[o] = new RegExp(a,"i");
                    c.props[n] = s
                }
            r(c.oss),
            r(c.phones),
            r(c.tablets),
            r(c.uas),
            r(c.utils),
            c.oss0 = {
                WindowsPhoneOS: c.oss.WindowsPhoneOS,
                WindowsMobileOS: c.oss.WindowsMobileOS
            }
        }(),
        t.findMatch = function(e, t) {
            for (var n in e)
                if (i.call(e, n) && e[n].test(t))
                    return n;
            return null
        }
        ,
        t.findMatches = function(e, t) {
            var n = [];
            for (var s in e)
                i.call(e, s) && e[s].test(t) && n.push(s);
            return n
        }
        ,
        t.getVersionStr = function(e, n) {
            var s, r, a, o, l = t.mobileDetectRules.props;
            if (i.call(l, e))
                for (a = (s = l[e]).length,
                r = 0; r < a; ++r)
                    if (null !== (o = s[r].exec(n)))
                        return o[1];
            return null
        }
        ,
        t.getVersion = function(e, i) {
            var n = t.getVersionStr(e, i);
            return n ? t.prepareVersionNo(n) : NaN
        }
        ,
        t.prepareVersionNo = function(e) {
            var t;
            return 1 === (t = e.split(/[a-z._ \/\-]/i)).length && (e = t[0]),
            t.length > 1 && (e = t[0] + ".",
            t.shift(),
            e += t.join("")),
            Number(e)
        }
        ,
        t.isMobileFallback = function(e) {
            return t.detectMobileBrowsers.fullPattern.test(e) || t.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
        }
        ,
        t.isTabletFallback = function(e) {
            return t.detectMobileBrowsers.tabletPattern.test(e)
        }
        ,
        t.prepareDetectionCache = function(e, i, n) {
            if (/*!mobile-detect v1.4.4 2019-09-21*/
            /*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
            void 0 === e.mobile) {
                var s, r, o;
                if (r = t.findMatch(t.mobileDetectRules.tablets, i))
                    return e.mobile = e.tablet = r,
                    void (e.phone = null);
                if (s = t.findMatch(t.mobileDetectRules.phones, i))
                    return e.mobile = e.phone = s,
                    void (e.tablet = null);
                t.isMobileFallback(i) ? void 0 === (o = a.isPhoneSized(n)) ? (e.mobile = t.FALLBACK_MOBILE,
                e.tablet = e.phone = null) : o ? (e.mobile = e.phone = t.FALLBACK_PHONE,
                e.tablet = null) : (e.mobile = e.tablet = t.FALLBACK_TABLET,
                e.phone = null) : t.isTabletFallback(i) ? (e.mobile = e.tablet = t.FALLBACK_TABLET,
                e.phone = null) : e.mobile = e.tablet = e.phone = null
            }
        }
        ,
        t.mobileGrade = function(e) {
            var t = null !== e.mobile();
            return e.os("iOS") && e.version("iPad") >= 4.3 || e.os("iOS") && e.version("iPhone") >= 3.1 || e.os("iOS") && e.version("iPod") >= 3.1 || e.version("Android") > 2.1 && e.is("Webkit") || e.version("Windows Phone OS") >= 7 || e.is("BlackBerry") && e.version("BlackBerry") >= 6 || e.match("Playbook.*Tablet") || e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && e.version("Firefox") >= 12 || e.is("Chrome") && e.is("AndroidOS") && e.version("Android") >= 4 || e.is("Skyfire") && e.version("Skyfire") >= 4.1 && e.is("AndroidOS") && e.version("Android") >= 2.3 || e.is("Opera") && e.version("Opera Mobi") > 11 && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && e.version("Bada") >= 2 || (e.is("UC Browser") || e.is("Dolfin")) && e.version("Android") >= 2.3 || e.match("Kindle Fire") || e.is("Kindle") && e.version("Kindle") >= 3 || e.is("AndroidOS") && e.is("NookTablet") || e.version("Chrome") >= 11 && !t || e.version("Safari") >= 5 && !t || e.version("Firefox") >= 4 && !t || e.version("MSIE") >= 7 && !t || e.version("Opera") >= 10 && !t ? "A" : e.os("iOS") && e.version("iPad") < 4.3 || e.os("iOS") && e.version("iPhone") < 3.1 || e.os("iOS") && e.version("iPod") < 3.1 || e.is("Blackberry") && e.version("BlackBerry") >= 5 && e.version("BlackBerry") < 6 || e.version("Opera Mini") >= 5 && e.version("Opera Mini") <= 6.5 && (e.version("Android") >= 2.3 || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || e.version("Opera Mobi") >= 11 && e.is("SymbianOS") ? "B" : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile"),
            "C")
        }
        ,
        t.detectOS = function(e) {
            return t.findMatch(t.mobileDetectRules.oss0, e) || t.findMatch(t.mobileDetectRules.oss, e)
        }
        ,
        t.getDeviceSmallerSide = function() {
            return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
        }
        ,
        a.prototype = {
            constructor: a,
            mobile: function() {
                return t.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                this._cache.mobile
            },
            phone: function() {
                return t.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                this._cache.phone
            },
            tablet: function() {
                return t.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                this._cache.tablet
            },
            userAgent: function() {
                return void 0 === this._cache.userAgent && (this._cache.userAgent = t.findMatch(t.mobileDetectRules.uas, this.ua)),
                this._cache.userAgent
            },
            userAgents: function() {
                return void 0 === this._cache.userAgents && (this._cache.userAgents = t.findMatches(t.mobileDetectRules.uas, this.ua)),
                this._cache.userAgents
            },
            os: function() {
                return void 0 === this._cache.os && (this._cache.os = t.detectOS(this.ua)),
                this._cache.os
            },
            version: function(e) {
                return t.getVersion(e, this.ua)
            },
            versionStr: function(e) {
                return t.getVersionStr(e, this.ua)
            },
            is: function(e) {
                return s(this.userAgents(), e) || n(e, this.os()) || n(e, this.phone()) || n(e, this.tablet()) || s(t.findMatches(t.mobileDetectRules.utils, this.ua), e)
            },
            match: function(e) {
                return e instanceof RegExp || (e = new RegExp(e,"i")),
                e.test(this.ua)
            },
            isPhoneSized: function(e) {
                return a.isPhoneSized(e || this.maxPhoneWidth)
            },
            mobileGrade: function() {
                return void 0 === this._cache.grade && (this._cache.grade = t.mobileGrade(this)),
                this._cache.grade
            }
        },
        "undefined" != typeof window && window.screen ? a.isPhoneSized = function(e) {
            return e < 0 ? void 0 : t.getDeviceSmallerSide() <= e
        }
        : a.isPhoneSized = function() {}
        ,
        a._impl = t,
        a.version = "1.4.4 2019-09-21",
        a
    }
    ))
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , s = o(i(19))
      , r = o(i(20))
      , a = o(i(22));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = void 0;
    t.default = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          , o = (0,
        s.default)();
        if (l || (l = (0,
        r.default)(o)),
        t.events)
            throw new Error("Event handlers cannot be overwritten.");
        if ("string" == typeof e && !document.getElementById(e))
            throw new Error('Element "' + e + '" does not exist.');
        t.events = a.default.proxyEvents(o);
        var d = new Promise((function(i) {
            "object" === (void 0 === e ? "undefined" : n(e)) && e.playVideo instanceof Function ? i(e) : l.then((function(n) {
                var s = new n.Player(e,t);
                return o.on("ready", (function() {
                    i(s)
                }
                )),
                null
            }
            ))
        }
        ))
          , c = a.default.promisifyPlayer(d, i);
        return c.on = o.on,
        c.off = o.off,
        c
    }
    ,
    e.exports = t.default
}
, function(e, t, i) {
    "use strict";
    var n = "undefined" == typeof document ? {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        location: {
            hash: ""
        }
    } : document
      , s = "undefined" == typeof window ? {
        document: n,
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {}
    } : window;
    class r {
        constructor(e) {
            const t = this;
            for (let i = 0; i < e.length; i += 1)
                t[i] = e[i];
            return t.length = e.length,
            this
        }
    }
    function a(e, t) {
        const i = [];
        let a = 0;
        if (e && !t && e instanceof r)
            return e;
        if (e)
            if ("string" == typeof e) {
                let s, r;
                const o = e.trim();
                if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                    let e = "div";
                    for (0 === o.indexOf("<li") && (e = "ul"),
                    0 === o.indexOf("<tr") && (e = "tbody"),
                    0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (e = "tr"),
                    0 === o.indexOf("<tbody") && (e = "table"),
                    0 === o.indexOf("<option") && (e = "select"),
                    (r = n.createElement(e)).innerHTML = o,
                    a = 0; a < r.childNodes.length; a += 1)
                        i.push(r.childNodes[a])
                } else
                    for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || n).querySelectorAll(e.trim()) : [n.getElementById(e.trim().split("#")[1])],
                    a = 0; a < s.length; a += 1)
                        s[a] && i.push(s[a])
            } else if (e.nodeType || e === s || e === n)
                i.push(e);
            else if (e.length > 0 && e[0].nodeType)
                for (a = 0; a < e.length; a += 1)
                    i.push(e[a]);
        return new r(i)
    }
    function o(e) {
        const t = [];
        for (let i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    a.fn = r.prototype,
    a.Class = r,
    a.Dom7 = r;
    "resize scroll".split(" ");
    const l = {
        addClass: function(e) {
            if (void 0 === e)
                return this;
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
                for (let i = 0; i < this.length; i += 1)
                    void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[e]);
            return this
        },
        removeClass: function(e) {
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
                for (let i = 0; i < this.length; i += 1)
                    void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[e]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
                for (let i = 0; i < this.length; i += 1)
                    void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[e]);
            return this
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (let i = 0; i < this.length; i += 1)
                if (2 === arguments.length)
                    this[i].setAttribute(e, t);
                else
                    for (const t in e)
                        this[i][t] = e[t],
                        this[i].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            let i;
            if (void 0 !== t) {
                for (let n = 0; n < this.length; n += 1)
                    (i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
                    i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
                    return i.dom7ElementDataStorage[e];
                const t = i.getAttribute(`data-${e}`);
                return t || void 0
            }
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1) {
                const i = this[t].style;
                i.webkitTransform = e,
                i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e = `${e}ms`);
            for (let t = 0; t < this.length; t += 1) {
                const i = this[t].style;
                i.webkitTransitionDuration = e,
                i.transitionDuration = e
            }
            return this
        },
        on: function(...e) {
            let[t,i,n,s] = e;
            function r(e) {
                const t = e.target;
                if (!t)
                    return;
                const s = e.target.dom7EventData || [];
                if (s.indexOf(e) < 0 && s.unshift(e),
                a(t).is(i))
                    n.apply(t, s);
                else {
                    const e = a(t).parents();
                    for (let t = 0; t < e.length; t += 1)
                        a(e[t]).is(i) && n.apply(e[t], s)
                }
            }
            function o(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                n.apply(this, t)
            }
            "function" == typeof e[1] && ([t,n,s] = e,
            i = void 0),
            s || (s = !1);
            const l = t.split(" ");
            let d;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (i)
                    for (d = 0; d < l.length; d += 1) {
                        const e = l[d];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                        t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                        t.dom7LiveListeners[e].push({
                            listener: n,
                            proxyListener: r
                        }),
                        t.addEventListener(e, r, s)
                    }
                else
                    for (d = 0; d < l.length; d += 1) {
                        const e = l[d];
                        t.dom7Listeners || (t.dom7Listeners = {}),
                        t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                        t.dom7Listeners[e].push({
                            listener: n,
                            proxyListener: o
                        }),
                        t.addEventListener(e, o, s)
                    }
            }
            return this
        },
        off: function(...e) {
            let[t,i,n,s] = e;
            "function" == typeof e[1] && ([t,n,s] = e,
            i = void 0),
            s || (s = !1);
            const r = t.split(" ");
            for (let e = 0; e < r.length; e += 1) {
                const t = r[e];
                for (let e = 0; e < this.length; e += 1) {
                    const r = this[e];
                    let a;
                    if (!i && r.dom7Listeners ? a = r.dom7Listeners[t] : i && r.dom7LiveListeners && (a = r.dom7LiveListeners[t]),
                    a && a.length)
                        for (let e = a.length - 1; e >= 0; e -= 1) {
                            const i = a[e];
                            n && i.listener === n ? (r.removeEventListener(t, i.proxyListener, s),
                            a.splice(e, 1)) : n && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === n ? (r.removeEventListener(t, i.proxyListener, s),
                            a.splice(e, 1)) : n || (r.removeEventListener(t, i.proxyListener, s),
                            a.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function(...e) {
            const t = e[0].split(" ")
              , i = e[1];
            for (let r = 0; r < t.length; r += 1) {
                const a = t[r];
                for (let t = 0; t < this.length; t += 1) {
                    const r = this[t];
                    let o;
                    try {
                        o = new s.CustomEvent(a,{
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (o = n.createEvent("Event")).initEvent(a, !0, !0),
                        o.detail = i
                    }
                    r.dom7EventData = e.filter( (e, t) => t > 0),
                    r.dispatchEvent(o),
                    r.dom7EventData = [],
                    delete r.dom7EventData
                }
            }
            return this
        },
        transitionEnd: function(e) {
            const t = ["webkitTransitionEnd", "transitionend"]
              , i = this;
            let n;
            function s(r) {
                if (r.target === this)
                    for (e.call(this, r),
                    n = 0; n < t.length; n += 1)
                        i.off(t[n], s)
            }
            if (e)
                for (n = 0; n < t.length; n += 1)
                    i.on(t[n], s);
            return this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (this.length > 0) {
                const e = this[0]
                  , t = e.getBoundingClientRect()
                  , i = n.body
                  , r = e.clientTop || i.clientTop || 0
                  , a = e.clientLeft || i.clientLeft || 0
                  , o = e === s ? s.scrollY : e.scrollTop
                  , l = e === s ? s.scrollX : e.scrollLeft;
                return {
                    top: t.top + o - r,
                    left: t.left + l - a
                }
            }
            return null
        },
        css: function(e, t) {
            let i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1)
                        for (let t in e)
                            this[i].style[t] = e[t];
                    return this
                }
                if (this[0])
                    return s.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1)
                    this[i].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e)
                return this;
            for (let t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t]))
                    return this;
            return this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : void 0;
            for (let t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            const t = this[0];
            let i, o;
            if (!t || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (t.matches)
                    return t.matches(e);
                if (t.webkitMatchesSelector)
                    return t.webkitMatchesSelector(e);
                if (t.msMatchesSelector)
                    return t.msMatchesSelector(e);
                for (i = a(e),
                o = 0; o < i.length; o += 1)
                    if (i[o] === t)
                        return !0;
                return !1
            }
            if (e === n)
                return t === n;
            if (e === s)
                return t === s;
            if (e.nodeType || e instanceof r) {
                for (i = e.nodeType ? [e] : e,
                o = 0; o < i.length; o += 1)
                    if (i[o] === t)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            const t = this.length;
            let i;
            return new r(e > t - 1 ? [] : e < 0 ? (i = t + e) < 0 ? [] : [this[i]] : [this[e]])
        },
        append: function(...e) {
            let t;
            for (let i = 0; i < e.length; i += 1) {
                t = e[i];
                for (let e = 0; e < this.length; e += 1)
                    if ("string" == typeof t) {
                        const i = n.createElement("div");
                        for (i.innerHTML = t; i.firstChild; )
                            this[e].appendChild(i.firstChild)
                    } else if (t instanceof r)
                        for (let i = 0; i < t.length; i += 1)
                            this[e].appendChild(t[i]);
                    else
                        this[e].appendChild(t)
            }
            return this
        },
        prepend: function(e) {
            let t, i;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    const s = n.createElement("div");
                    for (s.innerHTML = e,
                    i = s.childNodes.length - 1; i >= 0; i -= 1)
                        this[t].insertBefore(s.childNodes[i], this[t].childNodes[0])
                } else if (e instanceof r)
                    for (i = 0; i < e.length; i += 1)
                        this[t].insertBefore(e[i], this[t].childNodes[0]);
                else
                    this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(e) ? new r([this[0].nextElementSibling]) : new r([]) : this[0].nextElementSibling ? new r([this[0].nextElementSibling]) : new r([]) : new r([])
        },
        nextAll: function(e) {
            const t = [];
            let i = this[0];
            if (!i)
                return new r([]);
            for (; i.nextElementSibling; ) {
                const n = i.nextElementSibling;
                e ? a(n).is(e) && t.push(n) : t.push(n),
                i = n
            }
            return new r(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && a(t.previousElementSibling).is(e) ? new r([t.previousElementSibling]) : new r([]) : t.previousElementSibling ? new r([t.previousElementSibling]) : new r([])
            }
            return new r([])
        },
        prevAll: function(e) {
            const t = [];
            let i = this[0];
            if (!i)
                return new r([]);
            for (; i.previousElementSibling; ) {
                const n = i.previousElementSibling;
                e ? a(n).is(e) && t.push(n) : t.push(n),
                i = n
            }
            return new r(t)
        },
        parent: function(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1)
                null !== this[i].parentNode && (e ? a(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return a(o(t))
        },
        parents: function(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                let n = this[i].parentNode;
                for (; n; )
                    e ? a(n).is(e) && t.push(n) : t.push(n),
                    n = n.parentNode
            }
            return a(o(t))
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                const n = this[i].querySelectorAll(e);
                for (let e = 0; e < n.length; e += 1)
                    t.push(n[e])
            }
            return new r(t)
        },
        children: function(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                const n = this[i].childNodes;
                for (let i = 0; i < n.length; i += 1)
                    e ? 1 === n[i].nodeType && a(n[i]).is(e) && t.push(n[i]) : 1 === n[i].nodeType && t.push(n[i])
            }
            return new r(o(t))
        },
        filter: function(e) {
            const t = []
              , i = this;
            for (let n = 0; n < i.length; n += 1)
                e.call(i[n], n, i[n]) && t.push(i[n]);
            return new r(t)
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function(...e) {
            const t = this;
            let i, n;
            for (i = 0; i < e.length; i += 1) {
                const s = a(e[i]);
                for (n = 0; n < s.length; n += 1)
                    t[t.length] = s[n],
                    t.length += 1
            }
            return t
        },
        styles: function() {
            return this[0] ? s.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(l).forEach(e => {
        a.fn[e] = a.fn[e] || l[e]
    }
    );
    const d = {
        deleteProps(e) {
            const t = e;
            Object.keys(t).forEach(e => {
                try {
                    t[e] = null
                } catch (e) {}
                try {
                    delete t[e]
                } catch (e) {}
            }
            )
        },
        nextTick: (e, t=0) => setTimeout(e, t),
        now: () => Date.now(),
        getTranslate(e, t="x") {
            let i, n, r;
            const a = s.getComputedStyle(e, null);
            return s.WebKitCSSMatrix ? ((n = a.transform || a.webkitTransform).split(",").length > 6 && (n = n.split(", ").map(e => e.replace(",", ".")).join(", ")),
            r = new s.WebKitCSSMatrix("none" === n ? "" : n)) : i = (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === t && (n = s.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
            "y" === t && (n = s.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
            n || 0
        },
        parseUrlQuery(e) {
            const t = {};
            let i, n, r, a, o = e || s.location.href;
            if ("string" == typeof o && o.length)
                for (a = (n = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(e => "" !== e)).length,
                i = 0; i < a; i += 1)
                    r = n[i].replace(/#\S+/g, "").split("="),
                    t[decodeURIComponent(r[0])] = void 0 === r[1] ? void 0 : decodeURIComponent(r[1]) || "";
            return t
        },
        isObject: e => "object" == typeof e && null !== e && e.constructor && e.constructor === Object,
        extend(...e) {
            const t = Object(e[0]);
            for (let i = 1; i < e.length; i += 1) {
                const n = e[i];
                if (null != n) {
                    const e = Object.keys(Object(n));
                    for (let i = 0, s = e.length; i < s; i += 1) {
                        const s = e[i]
                          , r = Object.getOwnPropertyDescriptor(n, s);
                        void 0 !== r && r.enumerable && (d.isObject(t[s]) && d.isObject(n[s]) ? d.extend(t[s], n[s]) : !d.isObject(t[s]) && d.isObject(n[s]) ? (t[s] = {},
                        d.extend(t[s], n[s])) : t[s] = n[s])
                    }
                }
            }
            return t
        }
    }
      , c = {
        touch: s.Modernizr && !0 === s.Modernizr.touch || !!(s.navigator.maxTouchPoints > 0 || "ontouchstart"in s || s.DocumentTouch && n instanceof s.DocumentTouch),
        pointerEvents: !!s.PointerEvent && "maxTouchPoints"in s.navigator && s.navigator.maxTouchPoints > 0,
        observer: "MutationObserver"in s || "WebkitMutationObserver"in s,
        passiveListener: function() {
            let e = !1;
            try {
                const t = Object.defineProperty({}, "passive", {
                    get() {
                        e = !0
                    }
                });
                s.addEventListener("testPassiveListener", null, t)
            } catch (e) {}
            return e
        }(),
        gestures: "ongesturestart"in s
    };
    class u {
        constructor(e={}) {
            const t = this;
            t.params = e,
            t.eventsListeners = {},
            t.params && t.params.on && Object.keys(t.params.on).forEach(e => {
                t.on(e, t.params.on[e])
            }
            )
        }
        on(e, t, i) {
            const n = this;
            if ("function" != typeof t)
                return n;
            const s = i ? "unshift" : "push";
            return e.split(" ").forEach(e => {
                n.eventsListeners[e] || (n.eventsListeners[e] = []),
                n.eventsListeners[e][s](t)
            }
            ),
            n
        }
        once(e, t, i) {
            const n = this;
            if ("function" != typeof t)
                return n;
            function s(...i) {
                n.off(e, s),
                s.f7proxy && delete s.f7proxy,
                t.apply(n, i)
            }
            return s.f7proxy = t,
            n.on(e, s, i)
        }
        off(e, t) {
            const i = this;
            return i.eventsListeners ? (e.split(" ").forEach(e => {
                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach( (n, s) => {
                    (n === t || n.f7proxy && n.f7proxy === t) && i.eventsListeners[e].splice(s, 1)
                }
                )
            }
            ),
            i) : i
        }
        emit(...e) {
            const t = this;
            if (!t.eventsListeners)
                return t;
            let i, n, s;
            return "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0],
            n = e.slice(1, e.length),
            s = t) : (i = e[0].events,
            n = e[0].data,
            s = e[0].context || t),
            (Array.isArray(i) ? i : i.split(" ")).forEach(e => {
                if (t.eventsListeners && t.eventsListeners[e]) {
                    const i = [];
                    t.eventsListeners[e].forEach(e => {
                        i.push(e)
                    }
                    ),
                    i.forEach(e => {
                        e.apply(s, n)
                    }
                    )
                }
            }
            ),
            t
        }
        useModulesParams(e) {
            const t = this;
            t.modules && Object.keys(t.modules).forEach(i => {
                const n = t.modules[i];
                n.params && d.extend(e, n.params)
            }
            )
        }
        useModules(e={}) {
            const t = this;
            t.modules && Object.keys(t.modules).forEach(i => {
                const n = t.modules[i]
                  , s = e[i] || {};
                n.instance && Object.keys(n.instance).forEach(e => {
                    const i = n.instance[e];
                    t[e] = "function" == typeof i ? i.bind(t) : i
                }
                ),
                n.on && t.on && Object.keys(n.on).forEach(e => {
                    t.on(e, n.on[e])
                }
                ),
                n.create && n.create.bind(t)(s)
            }
            )
        }
        static set components(e) {
            this.use && this.use(e)
        }
        static installModule(e, ...t) {
            const i = this;
            i.prototype.modules || (i.prototype.modules = {});
            const n = e.name || `${Object.keys(i.prototype.modules).length}_${d.now()}`;
            return i.prototype.modules[n] = e,
            e.proto && Object.keys(e.proto).forEach(t => {
                i.prototype[t] = e.proto[t]
            }
            ),
            e.static && Object.keys(e.static).forEach(t => {
                i[t] = e.static[t]
            }
            ),
            e.install && e.install.apply(i, t),
            i
        }
        static use(e, ...t) {
            const i = this;
            return Array.isArray(e) ? (e.forEach(e => i.installModule(e)),
            i) : i.installModule(e, ...t)
        }
    }
    var p = {
        updateSize: function() {
            const e = this;
            let t, i;
            const n = e.$el;
            t = void 0 !== e.params.width ? e.params.width : n[0].clientWidth,
            i = void 0 !== e.params.height ? e.params.height : n[0].clientHeight,
            0 === t && e.isHorizontal() || 0 === i && e.isVertical() || (t = t - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10),
            i = i - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10),
            d.extend(e, {
                width: t,
                height: i,
                size: e.isHorizontal() ? t : i
            }))
        },
        updateSlides: function() {
            const e = this
              , t = e.params
              , {$wrapperEl: i, size: n, rtlTranslate: r, wrongRTL: a} = e
              , o = e.virtual && t.virtual.enabled
              , l = o ? e.virtual.slides.length : e.slides.length
              , c = i.children(`.${e.params.slideClass}`)
              , u = o ? e.virtual.slides.length : c.length;
            let p = [];
            const h = []
              , f = [];
            function m(e) {
                return !t.cssMode || e !== c.length - 1
            }
            let g = t.slidesOffsetBefore;
            "function" == typeof g && (g = t.slidesOffsetBefore.call(e));
            let v = t.slidesOffsetAfter;
            "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
            const T = e.snapGrid.length
              , b = e.snapGrid.length;
            let y, S, w = t.spaceBetween, C = -g, x = 0, E = 0;
            if (void 0 === n)
                return;
            "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * n),
            e.virtualSize = -w,
            r ? c.css({
                marginLeft: "",
                marginTop: ""
            }) : c.css({
                marginRight: "",
                marginBottom: ""
            }),
            t.slidesPerColumn > 1 && (y = Math.floor(u / t.slidesPerColumn) === u / e.params.slidesPerColumn ? u : Math.ceil(u / t.slidesPerColumn) * t.slidesPerColumn,
            "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (y = Math.max(y, t.slidesPerView * t.slidesPerColumn)));
            const M = t.slidesPerColumn
              , P = y / M
              , A = Math.floor(u / t.slidesPerColumn);
            for (let i = 0; i < u; i += 1) {
                S = 0;
                const r = c.eq(i);
                if (t.slidesPerColumn > 1) {
                    let n, s, a;
                    if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                        const e = Math.floor(i / (t.slidesPerGroup * t.slidesPerColumn))
                          , o = i - t.slidesPerColumn * t.slidesPerGroup * e
                          , l = 0 === e ? t.slidesPerGroup : Math.min(Math.ceil((u - e * M * t.slidesPerGroup) / M), t.slidesPerGroup);
                        n = (s = o - (a = Math.floor(o / l)) * l + e * t.slidesPerGroup) + a * y / M,
                        r.css({
                            "-webkit-box-ordinal-group": n,
                            "-moz-box-ordinal-group": n,
                            "-ms-flex-order": n,
                            "-webkit-order": n,
                            order: n
                        })
                    } else
                        "column" === t.slidesPerColumnFill ? (a = i - (s = Math.floor(i / M)) * M,
                        (s > A || s === A && a === M - 1) && (a += 1) >= M && (a = 0,
                        s += 1)) : s = i - (a = Math.floor(i / P)) * P;
                    r.css(`margin-${e.isHorizontal() ? "top" : "left"}`, 0 !== a && t.spaceBetween && `${t.spaceBetween}px`)
                }
                if ("none" !== r.css("display")) {
                    if ("auto" === t.slidesPerView) {
                        const i = s.getComputedStyle(r[0], null)
                          , n = r[0].style.transform
                          , a = r[0].style.webkitTransform;
                        if (n && (r[0].style.transform = "none"),
                        a && (r[0].style.webkitTransform = "none"),
                        t.roundLengths)
                            S = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
                        else if (e.isHorizontal()) {
                            const e = parseFloat(i.getPropertyValue("width"))
                              , t = parseFloat(i.getPropertyValue("padding-left"))
                              , n = parseFloat(i.getPropertyValue("padding-right"))
                              , s = parseFloat(i.getPropertyValue("margin-left"))
                              , r = parseFloat(i.getPropertyValue("margin-right"))
                              , a = i.getPropertyValue("box-sizing");
                            S = a && "border-box" === a ? e + s + r : e + t + n + s + r
                        } else {
                            const e = parseFloat(i.getPropertyValue("height"))
                              , t = parseFloat(i.getPropertyValue("padding-top"))
                              , n = parseFloat(i.getPropertyValue("padding-bottom"))
                              , s = parseFloat(i.getPropertyValue("margin-top"))
                              , r = parseFloat(i.getPropertyValue("margin-bottom"))
                              , a = i.getPropertyValue("box-sizing");
                            S = a && "border-box" === a ? e + s + r : e + t + n + s + r
                        }
                        n && (r[0].style.transform = n),
                        a && (r[0].style.webkitTransform = a),
                        t.roundLengths && (S = Math.floor(S))
                    } else
                        S = (n - (t.slidesPerView - 1) * w) / t.slidesPerView,
                        t.roundLengths && (S = Math.floor(S)),
                        c[i] && (e.isHorizontal() ? c[i].style.width = `${S}px` : c[i].style.height = `${S}px`);
                    c[i] && (c[i].swiperSlideSize = S),
                    f.push(S),
                    t.centeredSlides ? (C = C + S / 2 + x / 2 + w,
                    0 === x && 0 !== i && (C = C - n / 2 - w),
                    0 === i && (C = C - n / 2 - w),
                    Math.abs(C) < .001 && (C = 0),
                    t.roundLengths && (C = Math.floor(C)),
                    E % t.slidesPerGroup == 0 && p.push(C),
                    h.push(C)) : (t.roundLengths && (C = Math.floor(C)),
                    E % t.slidesPerGroup == 0 && p.push(C),
                    h.push(C),
                    C = C + S + w),
                    e.virtualSize += S + w,
                    x = S,
                    E += 1
                }
            }
            let G;
            if (e.virtualSize = Math.max(e.virtualSize, n) + v,
            r && a && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
                width: `${e.virtualSize + t.spaceBetween}px`
            }),
            t.setWrapperSize && (e.isHorizontal() ? i.css({
                width: `${e.virtualSize + t.spaceBetween}px`
            }) : i.css({
                height: `${e.virtualSize + t.spaceBetween}px`
            })),
            t.slidesPerColumn > 1 && (e.virtualSize = (S + t.spaceBetween) * y,
            e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween,
            e.isHorizontal() ? i.css({
                width: `${e.virtualSize + t.spaceBetween}px`
            }) : i.css({
                height: `${e.virtualSize + t.spaceBetween}px`
            }),
            t.centeredSlides)) {
                G = [];
                for (let i = 0; i < p.length; i += 1) {
                    let n = p[i];
                    t.roundLengths && (n = Math.floor(n)),
                    p[i] < e.virtualSize + p[0] && G.push(n)
                }
                p = G
            }
            if (!t.centeredSlides) {
                G = [];
                for (let i = 0; i < p.length; i += 1) {
                    let s = p[i];
                    t.roundLengths && (s = Math.floor(s)),
                    p[i] <= e.virtualSize - n && G.push(s)
                }
                p = G,
                Math.floor(e.virtualSize - n) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - n)
            }
            if (0 === p.length && (p = [0]),
            0 !== t.spaceBetween && (e.isHorizontal() ? r ? c.filter(m).css({
                marginLeft: `${w}px`
            }) : c.filter(m).css({
                marginRight: `${w}px`
            }) : c.filter(m).css({
                marginBottom: `${w}px`
            })),
            t.centeredSlides && t.centeredSlidesBounds) {
                let e = 0;
                f.forEach(i => {
                    e += i + (t.spaceBetween ? t.spaceBetween : 0)
                }
                );
                const i = (e -= t.spaceBetween) - n;
                p = p.map(e => e < 0 ? -g : e > i ? i + v : e)
            }
            if (t.centerInsufficientSlides) {
                let e = 0;
                if (f.forEach(i => {
                    e += i + (t.spaceBetween ? t.spaceBetween : 0)
                }
                ),
                (e -= t.spaceBetween) < n) {
                    const t = (n - e) / 2;
                    p.forEach( (e, i) => {
                        p[i] = e - t
                    }
                    ),
                    h.forEach( (e, i) => {
                        h[i] = e + t
                    }
                    )
                }
            }
            d.extend(e, {
                slides: c,
                snapGrid: p,
                slidesGrid: h,
                slidesSizesGrid: f
            }),
            u !== l && e.emit("slidesLengthChange"),
            p.length !== T && (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
            h.length !== b && e.emit("slidesGridLengthChange"),
            (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
        },
        updateAutoHeight: function(e) {
            const t = this
              , i = [];
            let n, s = 0;
            if ("number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed),
            "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                    const e = t.activeIndex + n;
                    if (e > t.slides.length)
                        break;
                    i.push(t.slides.eq(e)[0])
                }
            else
                i.push(t.slides.eq(t.activeIndex)[0]);
            for (n = 0; n < i.length; n += 1)
                if (void 0 !== i[n]) {
                    const e = i[n].offsetHeight;
                    s = e > s ? e : s
                }
            s && t.$wrapperEl.css("height", `${s}px`)
        },
        updateSlidesOffset: function() {
            const e = this
              , t = e.slides;
            for (let i = 0; i < t.length; i += 1)
                t[i].swiperSlideOffset = e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop
        },
        updateSlidesProgress: function(e=this && this.translate || 0) {
            const t = this
              , i = t.params
              , {slides: n, rtlTranslate: s} = t;
            if (0 === n.length)
                return;
            void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
            let r = -e;
            s && (r = e),
            n.removeClass(i.slideVisibleClass),
            t.visibleSlidesIndexes = [],
            t.visibleSlides = [];
            for (let e = 0; e < n.length; e += 1) {
                const a = n[e]
                  , o = (r + (i.centeredSlides ? t.minTranslate() : 0) - a.swiperSlideOffset) / (a.swiperSlideSize + i.spaceBetween);
                if (i.watchSlidesVisibility) {
                    const s = -(r - a.swiperSlideOffset)
                      , o = s + t.slidesSizesGrid[e];
                    (s >= 0 && s < t.size - 1 || o > 1 && o <= t.size || s <= 0 && o >= t.size) && (t.visibleSlides.push(a),
                    t.visibleSlidesIndexes.push(e),
                    n.eq(e).addClass(i.slideVisibleClass))
                }
                a.progress = s ? -o : o
            }
            t.visibleSlides = a(t.visibleSlides)
        },
        updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
                const i = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * i || 0
            }
            const i = t.params
              , n = t.maxTranslate() - t.minTranslate();
            let {progress: s, isBeginning: r, isEnd: a} = t;
            const o = r
              , l = a;
            0 === n ? (s = 0,
            r = !0,
            a = !0) : (r = (s = (e - t.minTranslate()) / n) <= 0,
            a = s >= 1),
            d.extend(t, {
                progress: s,
                isBeginning: r,
                isEnd: a
            }),
            (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e),
            r && !o && t.emit("reachBeginning toEdge"),
            a && !l && t.emit("reachEnd toEdge"),
            (o && !r || l && !a) && t.emit("fromEdge"),
            t.emit("progress", s)
        },
        updateSlidesClasses: function() {
            const e = this
              , {slides: t, params: i, $wrapperEl: n, activeIndex: s, realIndex: r} = e
              , a = e.virtual && i.virtual.enabled;
            let o;
            t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`),
            (o = a ? e.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${s}"]`) : t.eq(s)).addClass(i.slideActiveClass),
            i.loop && (o.hasClass(i.slideDuplicateClass) ? n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(i.slideDuplicateActiveClass) : n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(i.slideDuplicateActiveClass));
            let l = o.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
            let d = o.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === d.length && (d = t.eq(-1)).addClass(i.slidePrevClass),
            i.loop && (l.hasClass(i.slideDuplicateClass) ? n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass) : n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass),
            d.hasClass(i.slideDuplicateClass) ? n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass) : n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            const t = this
              , i = t.rtlTranslate ? t.translate : -t.translate
              , {slidesGrid: n, snapGrid: s, params: r, activeIndex: a, realIndex: o, snapIndex: l} = t;
            let c, u = e;
            if (void 0 === u) {
                for (let e = 0; e < n.length; e += 1)
                    void 0 !== n[e + 1] ? i >= n[e] && i < n[e + 1] - (n[e + 1] - n[e]) / 2 ? u = e : i >= n[e] && i < n[e + 1] && (u = e + 1) : i >= n[e] && (u = e);
                r.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
            }
            if ((c = s.indexOf(i) >= 0 ? s.indexOf(i) : Math.floor(u / r.slidesPerGroup)) >= s.length && (c = s.length - 1),
            u === a)
                return void (c !== l && (t.snapIndex = c,
                t.emit("snapIndexChange")));
            const p = parseInt(t.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
            d.extend(t, {
                snapIndex: c,
                realIndex: p,
                previousIndex: a,
                activeIndex: u
            }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            o !== p && t.emit("realIndexChange"),
            (t.initialized || t.runCallbacksOnInit) && t.emit("slideChange")
        },
        updateClickedSlide: function(e) {
            const t = this
              , i = t.params
              , n = a(e.target).closest(`.${i.slideClass}`)[0];
            let s = !1;
            if (n)
                for (let e = 0; e < t.slides.length; e += 1)
                    t.slides[e] === n && (s = !0);
            if (!n || !s)
                return t.clickedSlide = void 0,
                void (t.clickedIndex = void 0);
            t.clickedSlide = n,
            t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(a(n).attr("data-swiper-slide-index"), 10) : t.clickedIndex = a(n).index(),
            i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var h = {
        getTranslate: function(e=(this.isHorizontal() ? "x" : "y")) {
            const {params: t, rtlTranslate: i, translate: n, $wrapperEl: s} = this;
            if (t.virtualTranslate)
                return i ? -n : n;
            if (t.cssMode)
                return n;
            let r = d.getTranslate(s[0], e);
            return i && (r = -r),
            r || 0
        },
        setTranslate: function(e, t) {
            const i = this
              , {rtlTranslate: n, params: s, $wrapperEl: r, wrapperEl: a, progress: o} = i;
            let l, d = 0, c = 0;
            i.isHorizontal() ? d = n ? -e : e : c = e,
            s.roundLengths && (d = Math.floor(d),
            c = Math.floor(c)),
            s.cssMode ? a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -d : -c : s.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`),
            i.previousTranslate = i.translate,
            i.translate = i.isHorizontal() ? d : c;
            const u = i.maxTranslate() - i.minTranslate();
            (l = 0 === u ? 0 : (e - i.minTranslate()) / u) !== o && i.updateProgress(e),
            i.emit("setTranslate", i.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e=0, t=this.params.speed, i=!0, n=!0, s) {
            const r = this
              , {params: a, wrapperEl: o} = r;
            if (r.animating && a.preventInteractionOnTransition)
                return !1;
            const l = r.minTranslate()
              , d = r.maxTranslate();
            let c;
            if (c = n && e > l ? l : n && e < d ? d : e,
            r.updateProgress(c),
            a.cssMode) {
                const e = r.isHorizontal();
                return 0 === t ? o[e ? "scrollLeft" : "scrollTop"] = -c : o.scrollTo ? o.scrollTo({
                    [e ? "left" : "top"]: -c,
                    behavior: "smooth"
                }) : o[e ? "scrollLeft" : "scrollTop"] = -c,
                !0
            }
            return 0 === t ? (r.setTransition(0),
            r.setTranslate(c),
            i && (r.emit("beforeTransitionStart", t, s),
            r.emit("transitionEnd"))) : (r.setTransition(t),
            r.setTranslate(c),
            i && (r.emit("beforeTransitionStart", t, s),
            r.emit("transitionStart")),
            r.animating || (r.animating = !0,
            r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd),
                r.onTranslateToWrapperTransitionEnd = null,
                delete r.onTranslateToWrapperTransitionEnd,
                i && r.emit("transitionEnd"))
            }
            ),
            r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
            r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))),
            !0
        }
    };
    var f = {
        setTransition: function(e, t) {
            const i = this;
            i.params.cssMode || i.$wrapperEl.transition(e),
            i.emit("setTransition", e, t)
        },
        transitionStart: function(e=!0, t) {
            const i = this
              , {activeIndex: n, params: s, previousIndex: r} = i;
            if (s.cssMode)
                return;
            s.autoHeight && i.updateAutoHeight();
            let a = t;
            if (a || (a = n > r ? "next" : n < r ? "prev" : "reset"),
            i.emit("transitionStart"),
            e && n !== r) {
                if ("reset" === a)
                    return void i.emit("slideResetTransitionStart");
                i.emit("slideChangeTransitionStart"),
                "next" === a ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function(e=!0, t) {
            const i = this
              , {activeIndex: n, previousIndex: s, params: r} = i;
            if (i.animating = !1,
            r.cssMode)
                return;
            i.setTransition(0);
            let a = t;
            if (a || (a = n > s ? "next" : n < s ? "prev" : "reset"),
            i.emit("transitionEnd"),
            e && n !== s) {
                if ("reset" === a)
                    return void i.emit("slideResetTransitionEnd");
                i.emit("slideChangeTransitionEnd"),
                "next" === a ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
            }
        }
    };
    var m = {
        slideTo: function(e=0, t=this.params.speed, i=!0, n) {
            const s = this;
            let r = e;
            r < 0 && (r = 0);
            const {params: a, snapGrid: o, slidesGrid: l, previousIndex: d, activeIndex: c, rtlTranslate: u, wrapperEl: p} = s;
            if (s.animating && a.preventInteractionOnTransition)
                return !1;
            let h = Math.floor(r / a.slidesPerGroup);
            h >= o.length && (h = o.length - 1),
            (c || a.initialSlide || 0) === (d || 0) && i && s.emit("beforeSlideChangeStart");
            const f = -o[h];
            if (s.updateProgress(f),
            a.normalizeSlideIndex)
                for (let e = 0; e < l.length; e += 1)
                    -Math.floor(100 * f) >= Math.floor(100 * l[e]) && (r = e);
            if (s.initialized && r !== c) {
                if (!s.allowSlideNext && f < s.translate && f < s.minTranslate())
                    return !1;
                if (!s.allowSlidePrev && f > s.translate && f > s.maxTranslate() && (c || 0) !== r)
                    return !1
            }
            let m;
            if (m = r > c ? "next" : r < c ? "prev" : "reset",
            u && -f === s.translate || !u && f === s.translate)
                return s.updateActiveIndex(r),
                a.autoHeight && s.updateAutoHeight(),
                s.updateSlidesClasses(),
                "slide" !== a.effect && s.setTranslate(f),
                "reset" !== m && (s.transitionStart(i, m),
                s.transitionEnd(i, m)),
                !1;
            if (a.cssMode) {
                const e = s.isHorizontal();
                return 0 === t ? p[e ? "scrollLeft" : "scrollTop"] = -f : p.scrollTo ? p.scrollTo({
                    [e ? "left" : "top"]: -f,
                    behavior: "smooth"
                }) : p[e ? "scrollLeft" : "scrollTop"] = -f,
                !0
            }
            return 0 === t ? (s.setTransition(0),
            s.setTranslate(f),
            s.updateActiveIndex(r),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, n),
            s.transitionStart(i, m),
            s.transitionEnd(i, m)) : (s.setTransition(t),
            s.setTranslate(f),
            s.updateActiveIndex(r),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, n),
            s.transitionStart(i, m),
            s.animating || (s.animating = !0,
            s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
                s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd),
                s.onSlideToWrapperTransitionEnd = null,
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(i, m))
            }
            ),
            s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
            s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))),
            !0
        },
        slideToLoop: function(e=0, t=this.params.speed, i=!0, n) {
            const s = this;
            let r = e;
            return s.params.loop && (r += s.loopedSlides),
            s.slideTo(r, t, i, n)
        },
        slideNext: function(e=this.params.speed, t=!0, i) {
            const n = this
              , {params: s, animating: r} = n;
            return s.loop ? !r && (n.loopFix(),
            n._clientLeft = n.$wrapperEl[0].clientLeft,
            n.slideTo(n.activeIndex + s.slidesPerGroup, e, t, i)) : n.slideTo(n.activeIndex + s.slidesPerGroup, e, t, i)
        },
        slidePrev: function(e=this.params.speed, t=!0, i) {
            const n = this
              , {params: s, animating: r, snapGrid: a, slidesGrid: o, rtlTranslate: l} = n;
            if (s.loop) {
                if (r)
                    return !1;
                n.loopFix(),
                n._clientLeft = n.$wrapperEl[0].clientLeft
            }
            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const c = d(l ? n.translate : -n.translate)
              , u = a.map(e => d(e));
            o.map(e => d(e)),
            a[u.indexOf(c)];
            let p, h = a[u.indexOf(c) - 1];
            return void 0 === h && s.cssMode && a.forEach(e => {
                !h && c >= e && (h = e)
            }
            ),
            void 0 !== h && (p = o.indexOf(h)) < 0 && (p = n.activeIndex - 1),
            n.slideTo(p, e, t, i)
        },
        slideReset: function(e=this.params.speed, t=!0, i) {
            return this.slideTo(this.activeIndex, e, t, i)
        },
        slideToClosest: function(e=this.params.speed, t=!0, i, n=.5) {
            const s = this;
            let r = s.activeIndex;
            const a = Math.floor(r / s.params.slidesPerGroup)
              , o = s.rtlTranslate ? s.translate : -s.translate;
            if (o >= s.snapGrid[a]) {
                const e = s.snapGrid[a];
                o - e > (s.snapGrid[a + 1] - e) * n && (r += s.params.slidesPerGroup)
            } else {
                const e = s.snapGrid[a - 1];
                o - e <= (s.snapGrid[a] - e) * n && (r -= s.params.slidesPerGroup)
            }
            return r = Math.max(r, 0),
            r = Math.min(r, s.snapGrid.length - 1),
            s.slideTo(r, e, t, i)
        },
        slideToClickedSlide: function() {
            const e = this
              , {params: t, $wrapperEl: i} = e
              , n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let s, r = e.clickedIndex;
            if (t.loop) {
                if (e.animating)
                    return;
                s = parseInt(a(e.clickedSlide).attr("data-swiper-slide-index"), 10),
                t.centeredSlides ? r < e.loopedSlides - n / 2 || r > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(),
                r = i.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                d.nextTick( () => {
                    e.slideTo(r)
                }
                )) : e.slideTo(r) : r > e.slides.length - n ? (e.loopFix(),
                r = i.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                d.nextTick( () => {
                    e.slideTo(r)
                }
                )) : e.slideTo(r)
            } else
                e.slideTo(r)
        }
    };
    var g = {
        loopCreate: function() {
            const e = this
              , {params: t, $wrapperEl: i} = e;
            i.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
            let s = i.children(`.${t.slideClass}`);
            if (t.loopFillGroupWithBlank) {
                const e = t.slidesPerGroup - s.length % t.slidesPerGroup;
                if (e !== t.slidesPerGroup) {
                    for (let s = 0; s < e; s += 1) {
                        const e = a(n.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                        i.append(e)
                    }
                    s = i.children(`.${t.slideClass}`)
                }
            }
            "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = s.length),
            e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)),
            e.loopedSlides += t.loopAdditionalSlides,
            e.loopedSlides > s.length && (e.loopedSlides = s.length);
            const r = []
              , o = [];
            s.each( (t, i) => {
                const n = a(i);
                t < e.loopedSlides && o.push(i),
                t < s.length && t >= s.length - e.loopedSlides && r.push(i),
                n.attr("data-swiper-slide-index", t)
            }
            );
            for (let e = 0; e < o.length; e += 1)
                i.append(a(o[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
            for (let e = r.length - 1; e >= 0; e -= 1)
                i.prepend(a(r[e].cloneNode(!0)).addClass(t.slideDuplicateClass))
        },
        loopFix: function() {
            const e = this;
            e.emit("beforeLoopFix");
            const {activeIndex: t, slides: i, loopedSlides: n, allowSlidePrev: s, allowSlideNext: r, snapGrid: a, rtlTranslate: o} = e;
            let l;
            e.allowSlidePrev = !0,
            e.allowSlideNext = !0;
            const d = -a[t] - e.getTranslate();
            if (t < n) {
                l = i.length - 3 * n + t,
                l += n,
                e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)
            } else if (t >= i.length - n) {
                l = -i.length + t + n,
                l += n,
                e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)
            }
            e.allowSlidePrev = s,
            e.allowSlideNext = r,
            e.emit("loopFix")
        },
        loopDestroy: function() {
            const {$wrapperEl: e, params: t, slides: i} = this;
            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
            i.removeAttr("data-swiper-slide-index")
        }
    };
    var v = {
        setGrabCursor: function(e) {
            if (c.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)
                return;
            const t = this.el;
            t.style.cursor = "move",
            t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
            t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
            t.style.cursor = e ? "grabbing" : "grab"
        },
        unsetGrabCursor: function() {
            c.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
        }
    };
    var T = {
        appendSlide: function(e) {
            const t = this
              , {$wrapperEl: i, params: n} = t;
            if (n.loop && t.loopDestroy(),
            "object" == typeof e && "length"in e)
                for (let t = 0; t < e.length; t += 1)
                    e[t] && i.append(e[t]);
            else
                i.append(e);
            n.loop && t.loopCreate(),
            n.observer && c.observer || t.update()
        },
        prependSlide: function(e) {
            const t = this
              , {params: i, $wrapperEl: n, activeIndex: s} = t;
            i.loop && t.loopDestroy();
            let r = s + 1;
            if ("object" == typeof e && "length"in e) {
                for (let t = 0; t < e.length; t += 1)
                    e[t] && n.prepend(e[t]);
                r = s + e.length
            } else
                n.prepend(e);
            i.loop && t.loopCreate(),
            i.observer && c.observer || t.update(),
            t.slideTo(r, 0, !1)
        },
        addSlide: function(e, t) {
            const i = this
              , {$wrapperEl: n, params: s, activeIndex: r} = i;
            let a = r;
            s.loop && (a -= i.loopedSlides,
            i.loopDestroy(),
            i.slides = n.children(`.${s.slideClass}`));
            const o = i.slides.length;
            if (e <= 0)
                return void i.prependSlide(t);
            if (e >= o)
                return void i.appendSlide(t);
            let l = a > e ? a + 1 : a;
            const d = [];
            for (let t = o - 1; t >= e; t -= 1) {
                const e = i.slides.eq(t);
                e.remove(),
                d.unshift(e)
            }
            if ("object" == typeof t && "length"in t) {
                for (let e = 0; e < t.length; e += 1)
                    t[e] && n.append(t[e]);
                l = a > e ? a + t.length : a
            } else
                n.append(t);
            for (let e = 0; e < d.length; e += 1)
                n.append(d[e]);
            s.loop && i.loopCreate(),
            s.observer && c.observer || i.update(),
            s.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1)
        },
        removeSlide: function(e) {
            const t = this
              , {params: i, $wrapperEl: n, activeIndex: s} = t;
            let r = s;
            i.loop && (r -= t.loopedSlides,
            t.loopDestroy(),
            t.slides = n.children(`.${i.slideClass}`));
            let a, o = r;
            if ("object" == typeof e && "length"in e) {
                for (let i = 0; i < e.length; i += 1)
                    a = e[i],
                    t.slides[a] && t.slides.eq(a).remove(),
                    a < o && (o -= 1);
                o = Math.max(o, 0)
            } else
                a = e,
                t.slides[a] && t.slides.eq(a).remove(),
                a < o && (o -= 1),
                o = Math.max(o, 0);
            i.loop && t.loopCreate(),
            i.observer && c.observer || t.update(),
            i.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
        },
        removeAllSlides: function() {
            const e = this
              , t = [];
            for (let i = 0; i < e.slides.length; i += 1)
                t.push(i);
            e.removeSlide(t)
        }
    };
    const b = function() {
        const e = s.navigator.platform
          , t = s.navigator.userAgent
          , i = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            edge: !1,
            ie: !1,
            firefox: !1,
            macos: !1,
            windows: !1,
            cordova: !(!s.cordova && !s.phonegap),
            phonegap: !(!s.cordova && !s.phonegap),
            electron: !1
        }
          , n = s.screen.width
          , r = s.screen.height
          , a = t.match(/(Android);?[\s\/]+([\d.]+)?/);
        let o = t.match(/(iPad).*OS\s([\d_]+)/);
        const l = t.match(/(iPod)(.*OS\s([\d_]+))?/)
          , d = !o && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
          , u = t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0
          , p = t.indexOf("Edge/") >= 0
          , h = t.indexOf("Gecko/") >= 0 && t.indexOf("Firefox/") >= 0
          , f = "Win32" === e
          , m = t.toLowerCase().indexOf("electron") >= 0;
        let g = "MacIntel" === e;
        return !o && g && c.touch && (1024 === n && 1366 === r || 834 === n && 1194 === r || 834 === n && 1112 === r || 768 === n && 1024 === r) && (o = t.match(/(Version)\/([\d.]+)/),
        g = !1),
        i.ie = u,
        i.edge = p,
        i.firefox = h,
        a && !f && (i.os = "android",
        i.osVersion = a[2],
        i.android = !0,
        i.androidChrome = t.toLowerCase().indexOf("chrome") >= 0),
        (o || d || l) && (i.os = "ios",
        i.ios = !0),
        d && !l && (i.osVersion = d[2].replace(/_/g, "."),
        i.iphone = !0),
        o && (i.osVersion = o[2].replace(/_/g, "."),
        i.ipad = !0),
        l && (i.osVersion = l[3] ? l[3].replace(/_/g, ".") : null,
        i.ipod = !0),
        i.ios && i.osVersion && t.indexOf("Version/") >= 0 && "10" === i.osVersion.split(".")[0] && (i.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]),
        i.webView = !(!(d || o || l) || !t.match(/.*AppleWebKit(?!.*Safari)/i) && !s.navigator.standalone) || s.matchMedia && s.matchMedia("(display-mode: standalone)").matches,
        i.webview = i.webView,
        i.standalone = i.webView,
        i.desktop = !(i.ios || i.android) || m,
        i.desktop && (i.electron = m,
        i.macos = g,
        i.windows = f,
        i.macos && (i.os = "macos"),
        i.windows && (i.os = "windows")),
        i.pixelRatio = s.devicePixelRatio || 1,
        i
    }();
    function y(e) {
        const t = this
          , i = t.touchEventsData
          , {params: r, touches: o} = t;
        if (t.animating && r.preventInteractionOnTransition)
            return;
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        const c = a(l.target);
        if ("wrapper" === r.touchEventsTarget && !c.closest(t.wrapperEl).length)
            return;
        if (i.isTouchEvent = "touchstart" === l.type,
        !i.isTouchEvent && "which"in l && 3 === l.which)
            return;
        if (!i.isTouchEvent && "button"in l && l.button > 0)
            return;
        if (i.isTouched && i.isMoved)
            return;
        if (r.noSwiping && c.closest(r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`)[0])
            return void (t.allowClick = !0);
        if (r.swipeHandler && !c.closest(r.swipeHandler)[0])
            return;
        o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX,
        o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
        const u = o.currentX
          , p = o.currentY
          , h = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection
          , f = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (!h || !(u <= f || u >= s.screen.width - f)) {
            if (d.extend(i, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }),
            o.startX = u,
            o.startY = p,
            i.touchStartTime = d.now(),
            t.allowClick = !0,
            t.updateSize(),
            t.swipeDirection = void 0,
            r.threshold > 0 && (i.allowThresholdMove = !1),
            "touchstart" !== l.type) {
                let e = !0;
                c.is(i.formElements) && (e = !1),
                n.activeElement && a(n.activeElement).is(i.formElements) && n.activeElement !== c[0] && n.activeElement.blur();
                const s = e && t.allowTouchMove && r.touchStartPreventDefault;
                (r.touchStartForcePreventDefault || s) && l.preventDefault()
            }
            t.emit("touchStart", l)
        }
    }
    function S(e) {
        const t = this
          , i = t.touchEventsData
          , {params: s, touches: r, rtlTranslate: o} = t;
        let l = e;
        if (l.originalEvent && (l = l.originalEvent),
        !i.isTouched)
            return void (i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l));
        if (i.isTouchEvent && "mousemove" === l.type)
            return;
        const c = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0])
          , u = "touchmove" === l.type ? c.pageX : l.pageX
          , p = "touchmove" === l.type ? c.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
            return r.startX = u,
            void (r.startY = p);
        if (!t.allowTouchMove)
            return t.allowClick = !1,
            void (i.isTouched && (d.extend(r, {
                startX: u,
                startY: p,
                currentX: u,
                currentY: p
            }),
            i.touchStartTime = d.now()));
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
            if (t.isVertical()) {
                if (p < r.startY && t.translate <= t.maxTranslate() || p > r.startY && t.translate >= t.minTranslate())
                    return i.isTouched = !1,
                    void (i.isMoved = !1)
            } else if (u < r.startX && t.translate <= t.maxTranslate() || u > r.startX && t.translate >= t.minTranslate())
                return;
        if (i.isTouchEvent && n.activeElement && l.target === n.activeElement && a(l.target).is(i.formElements))
            return i.isMoved = !0,
            void (t.allowClick = !1);
        if (i.allowTouchCallbacks && t.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
            return;
        r.currentX = u,
        r.currentY = p;
        const h = r.currentX - r.startX
          , f = r.currentY - r.startY;
        if (t.params.threshold && Math.sqrt(h ** 2 + f ** 2) < t.params.threshold)
            return;
        if (void 0 === i.isScrolling) {
            let e;
            t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI,
            i.isScrolling = t.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
        }
        if (i.isScrolling && t.emit("touchMoveOpposite", l),
        void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)),
        i.isScrolling)
            return void (i.isTouched = !1);
        if (!i.startMoving)
            return;
        t.allowClick = !1,
        s.cssMode || l.preventDefault(),
        s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
        i.isMoved || (s.loop && t.loopFix(),
        i.startTranslate = t.getTranslate(),
        t.setTransition(0),
        t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        i.allowMomentumBounce = !1,
        !s.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0),
        t.emit("sliderFirstMove", l)),
        t.emit("sliderMove", l),
        i.isMoved = !0;
        let m = t.isHorizontal() ? h : f;
        r.diff = m,
        m *= s.touchRatio,
        o && (m = -m),
        t.swipeDirection = m > 0 ? "prev" : "next",
        i.currentTranslate = m + i.startTranslate;
        let g = !0
          , v = s.resistanceRatio;
        if (s.touchReleaseOnEdges && (v = 0),
        m > 0 && i.currentTranslate > t.minTranslate() ? (g = !1,
        s.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + m) ** v)) : m < 0 && i.currentTranslate < t.maxTranslate() && (g = !1,
        s.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - m) ** v)),
        g && (l.preventedByNestedSwiper = !0),
        !t.allowSlideNext && "next" === t.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
        !t.allowSlidePrev && "prev" === t.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
        s.threshold > 0) {
            if (!(Math.abs(m) > s.threshold || i.allowThresholdMove))
                return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove)
                return i.allowThresholdMove = !0,
                r.startX = r.currentX,
                r.startY = r.currentY,
                i.currentTranslate = i.startTranslate,
                void (r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
        }
        s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (t.updateActiveIndex(),
        t.updateSlidesClasses()),
        s.freeMode && (0 === i.velocities.length && i.velocities.push({
            position: r[t.isHorizontal() ? "startX" : "startY"],
            time: i.touchStartTime
        }),
        i.velocities.push({
            position: r[t.isHorizontal() ? "currentX" : "currentY"],
            time: d.now()
        })),
        t.updateProgress(i.currentTranslate),
        t.setTranslate(i.currentTranslate))
    }
    function w(e) {
        const t = this
          , i = t.touchEventsData
          , {params: n, touches: s, rtlTranslate: r, $wrapperEl: a, slidesGrid: o, snapGrid: l} = t;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", c),
        i.allowTouchCallbacks = !1,
        !i.isTouched)
            return i.isMoved && n.grabCursor && t.setGrabCursor(!1),
            i.isMoved = !1,
            void (i.startMoving = !1);
        n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const u = d.now()
          , p = u - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(c),
        t.emit("tap click", c),
        p < 300 && u - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", c)),
        i.lastClickTime = d.now(),
        d.nextTick( () => {
            t.destroyed || (t.allowClick = !0)
        }
        ),
        !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate)
            return i.isTouched = !1,
            i.isMoved = !1,
            void (i.startMoving = !1);
        let h;
        if (i.isTouched = !1,
        i.isMoved = !1,
        i.startMoving = !1,
        h = n.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate,
        n.cssMode)
            return;
        if (n.freeMode) {
            if (h < -t.minTranslate())
                return void t.slideTo(t.activeIndex);
            if (h > -t.maxTranslate())
                return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
            if (n.freeModeMomentum) {
                if (i.velocities.length > 1) {
                    const e = i.velocities.pop()
                      , s = i.velocities.pop()
                      , r = e.position - s.position
                      , a = e.time - s.time;
                    t.velocity = r / a,
                    t.velocity /= 2,
                    Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0),
                    (a > 150 || d.now() - e.time > 300) && (t.velocity = 0)
                } else
                    t.velocity = 0;
                t.velocity *= n.freeModeMomentumVelocityRatio,
                i.velocities.length = 0;
                let e = 1e3 * n.freeModeMomentumRatio;
                const s = t.velocity * e;
                let o = t.translate + s;
                r && (o = -o);
                let c, u = !1;
                const p = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                let h;
                if (o < t.maxTranslate())
                    n.freeModeMomentumBounce ? (o + t.maxTranslate() < -p && (o = t.maxTranslate() - p),
                    c = t.maxTranslate(),
                    u = !0,
                    i.allowMomentumBounce = !0) : o = t.maxTranslate(),
                    n.loop && n.centeredSlides && (h = !0);
                else if (o > t.minTranslate())
                    n.freeModeMomentumBounce ? (o - t.minTranslate() > p && (o = t.minTranslate() + p),
                    c = t.minTranslate(),
                    u = !0,
                    i.allowMomentumBounce = !0) : o = t.minTranslate(),
                    n.loop && n.centeredSlides && (h = !0);
                else if (n.freeModeSticky) {
                    let e;
                    for (let t = 0; t < l.length; t += 1)
                        if (l[t] > -o) {
                            e = t;
                            break
                        }
                    o = -(o = Math.abs(l[e] - o) < Math.abs(l[e - 1] - o) || "next" === t.swipeDirection ? l[e] : l[e - 1])
                }
                if (h && t.once("transitionEnd", () => {
                    t.loopFix()
                }
                ),
                0 !== t.velocity) {
                    if (e = r ? Math.abs((-o - t.translate) / t.velocity) : Math.abs((o - t.translate) / t.velocity),
                    n.freeModeSticky) {
                        const i = Math.abs((r ? -o : o) - t.translate)
                          , s = t.slidesSizesGrid[t.activeIndex];
                        e = i < s ? n.speed : i < 2 * s ? 1.5 * n.speed : 2.5 * n.speed
                    }
                } else if (n.freeModeSticky)
                    return void t.slideToClosest();
                n.freeModeMomentumBounce && u ? (t.updateProgress(c),
                t.setTransition(e),
                t.setTranslate(o),
                t.transitionStart(!0, t.swipeDirection),
                t.animating = !0,
                a.transitionEnd( () => {
                    t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"),
                    t.setTransition(n.speed),
                    t.setTranslate(c),
                    a.transitionEnd( () => {
                        t && !t.destroyed && t.transitionEnd()
                    }
                    ))
                }
                )) : t.velocity ? (t.updateProgress(o),
                t.setTransition(e),
                t.setTranslate(o),
                t.transitionStart(!0, t.swipeDirection),
                t.animating || (t.animating = !0,
                a.transitionEnd( () => {
                    t && !t.destroyed && t.transitionEnd()
                }
                ))) : t.updateProgress(o),
                t.updateActiveIndex(),
                t.updateSlidesClasses()
            } else if (n.freeModeSticky)
                return void t.slideToClosest();
            return void ((!n.freeModeMomentum || p >= n.longSwipesMs) && (t.updateProgress(),
            t.updateActiveIndex(),
            t.updateSlidesClasses()))
        }
        let f = 0
          , m = t.slidesSizesGrid[0];
        for (let e = 0; e < o.length; e += n.slidesPerGroup)
            void 0 !== o[e + n.slidesPerGroup] ? h >= o[e] && h < o[e + n.slidesPerGroup] && (f = e,
            m = o[e + n.slidesPerGroup] - o[e]) : h >= o[e] && (f = e,
            m = o[o.length - 1] - o[o.length - 2]);
        const g = (h - o[f]) / m;
        if (p > n.longSwipesMs) {
            if (!n.longSwipes)
                return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (g >= n.longSwipesRatio ? t.slideTo(f + n.slidesPerGroup) : t.slideTo(f)),
            "prev" === t.swipeDirection && (g > 1 - n.longSwipesRatio ? t.slideTo(f + n.slidesPerGroup) : t.slideTo(f))
        } else {
            if (!n.shortSwipes)
                return void t.slideTo(t.activeIndex);
            t.navigation && (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl) ? c.target === t.navigation.nextEl ? t.slideTo(f + n.slidesPerGroup) : t.slideTo(f) : ("next" === t.swipeDirection && t.slideTo(f + n.slidesPerGroup),
            "prev" === t.swipeDirection && t.slideTo(f))
        }
    }
    function C() {
        const e = this
          , {params: t, el: i} = e;
        if (i && 0 === i.offsetWidth)
            return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: n, allowSlidePrev: s, snapGrid: r} = e;
        e.allowSlideNext = !0,
        e.allowSlidePrev = !0,
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
        e.allowSlidePrev = s,
        e.allowSlideNext = n,
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }
    function x(e) {
        const t = this;
        t.allowClick || (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
        e.stopImmediatePropagation()))
    }
    function E() {
        const e = this
          , {wrapperEl: t} = e;
        let i;
        e.previousTranslate = e.translate,
        e.translate = e.isHorizontal() ? -t.scrollLeft : -t.scrollTop,
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
        const n = e.maxTranslate() - e.minTranslate();
        (i = 0 === n ? 0 : (e.translate - e.minTranslate()) / n) !== e.progress && e.updateProgress(e.translate),
        e.emit("setTranslate", e.translate, !1)
    }
    let M = !1;
    function P() {}
    var A = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    };
    const G = {
        update: p,
        translate: h,
        transition: f,
        slide: m,
        loop: g,
        grabCursor: v,
        manipulation: T,
        events: {
            attachEvents: function() {
                const e = this
                  , {params: t, touchEvents: i, el: s, wrapperEl: r} = e;
                e.onTouchStart = y.bind(e),
                e.onTouchMove = S.bind(e),
                e.onTouchEnd = w.bind(e),
                t.cssMode && (e.onScroll = E.bind(e)),
                e.onClick = x.bind(e);
                const a = !!t.nested;
                if (!c.touch && c.pointerEvents)
                    s.addEventListener(i.start, e.onTouchStart, !1),
                    n.addEventListener(i.move, e.onTouchMove, a),
                    n.addEventListener(i.end, e.onTouchEnd, !1);
                else {
                    if (c.touch) {
                        const r = !("touchstart" !== i.start || !c.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.addEventListener(i.start, e.onTouchStart, r),
                        s.addEventListener(i.move, e.onTouchMove, c.passiveListener ? {
                            passive: !1,
                            capture: a
                        } : a),
                        s.addEventListener(i.end, e.onTouchEnd, r),
                        i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, r),
                        M || (n.addEventListener("touchstart", P),
                        M = !0)
                    }
                    (t.simulateTouch && !b.ios && !b.android || t.simulateTouch && !c.touch && b.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1),
                    n.addEventListener("mousemove", e.onTouchMove, a),
                    n.addEventListener("mouseup", e.onTouchEnd, !1))
                }
                (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0),
                t.cssMode && r.addEventListener("scroll", e.onScroll),
                t.updateOnWindowResize ? e.on(b.ios || b.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", C, !0) : e.on("observerUpdate", C, !0)
            },
            detachEvents: function() {
                const e = this
                  , {params: t, touchEvents: i, el: s, wrapperEl: r} = e
                  , a = !!t.nested;
                if (!c.touch && c.pointerEvents)
                    s.removeEventListener(i.start, e.onTouchStart, !1),
                    n.removeEventListener(i.move, e.onTouchMove, a),
                    n.removeEventListener(i.end, e.onTouchEnd, !1);
                else {
                    if (c.touch) {
                        const n = !("onTouchStart" !== i.start || !c.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.removeEventListener(i.start, e.onTouchStart, n),
                        s.removeEventListener(i.move, e.onTouchMove, a),
                        s.removeEventListener(i.end, e.onTouchEnd, n),
                        i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, n)
                    }
                    (t.simulateTouch && !b.ios && !b.android || t.simulateTouch && !c.touch && b.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1),
                    n.removeEventListener("mousemove", e.onTouchMove, a),
                    n.removeEventListener("mouseup", e.onTouchEnd, !1))
                }
                (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0),
                t.cssMode && r.removeEventListener("scroll", e.onScroll),
                e.off(b.ios || b.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", C)
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                const e = this
                  , {activeIndex: t, initialized: i, loopedSlides: n=0, params: s, $el: r} = e
                  , a = s.breakpoints;
                if (!a || a && 0 === Object.keys(a).length)
                    return;
                const o = e.getBreakpoint(a);
                if (o && e.currentBreakpoint !== o) {
                    const l = o in a ? a[o] : void 0;
                    l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerColumn"].forEach(e => {
                        const t = l[e];
                        void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                    }
                    );
                    const c = l || e.originalParams
                      , u = s.slidesPerColumn > 1
                      , p = c.slidesPerColumn > 1;
                    u && !p ? r.removeClass(`${s.containerModifierClass}multirow ${s.containerModifierClass}multirow-column`) : !u && p && (r.addClass(`${s.containerModifierClass}multirow`),
                    "column" === c.slidesPerColumnFill && r.addClass(`${s.containerModifierClass}multirow-column`));
                    const h = c.direction && c.direction !== s.direction
                      , f = s.loop && (c.slidesPerView !== s.slidesPerView || h);
                    h && i && e.changeDirection(),
                    d.extend(e.params, c),
                    d.extend(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                    e.currentBreakpoint = o,
                    f && i && (e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t - n + e.loopedSlides, 0, !1)),
                    e.emit("breakpoint", c)
                }
            },
            getBreakpoint: function(e) {
                if (!e)
                    return;
                let t = !1;
                const i = [];
                Object.keys(e).forEach(e => {
                    i.push(e)
                }
                ),
                i.sort( (e, t) => parseInt(e, 10) - parseInt(t, 10));
                for (let e = 0; e < i.length; e += 1) {
                    const n = i[e];
                    n <= s.innerWidth && (t = n)
                }
                return t || "max"
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                const e = this
                  , t = e.params
                  , i = e.isLocked
                  , n = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                t.slidesOffsetBefore && t.slidesOffsetAfter && n ? e.isLocked = n <= e.size : e.isLocked = 1 === e.snapGrid.length,
                e.allowSlideNext = !e.isLocked,
                e.allowSlidePrev = !e.isLocked,
                i !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                i && i !== e.isLocked && (e.isEnd = !1,
                e.navigation.update())
            }
        },
        classes: {
            addClasses: function() {
                const {classNames: e, params: t, rtl: i, $el: n} = this
                  , s = [];
                s.push("initialized"),
                s.push(t.direction),
                t.freeMode && s.push("free-mode"),
                t.autoHeight && s.push("autoheight"),
                i && s.push("rtl"),
                t.slidesPerColumn > 1 && (s.push("multirow"),
                "column" === t.slidesPerColumnFill && s.push("multirow-column")),
                b.android && s.push("android"),
                b.ios && s.push("ios"),
                t.cssMode && s.push("css-mode"),
                s.forEach(i => {
                    e.push(t.containerModifierClass + i)
                }
                ),
                n.addClass(e.join(" "))
            },
            removeClasses: function() {
                const {$el: e, classNames: t} = this;
                e.removeClass(t.join(" "))
            }
        },
        images: {
            loadImage: function(e, t, i, n, r, a) {
                let o;
                function l() {
                    a && a()
                }
                e.complete && r ? l() : t ? ((o = new s.Image).onload = l,
                o.onerror = l,
                n && (o.sizes = n),
                i && (o.srcset = i),
                t && (o.src = t)) : l()
            },
            preloadImages: function() {
                const e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                    const n = e.imagesToLoad[i];
                    e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
      , H = {};
    class D extends u {
        constructor(...e) {
            let t, i;
            1 === e.length && e[0].constructor && e[0].constructor === Object ? i = e[0] : [t,i] = e,
            i || (i = {}),
            i = d.extend({}, i),
            t && !i.el && (i.el = t),
            super(i),
            Object.keys(G).forEach(e => {
                Object.keys(G[e]).forEach(t => {
                    D.prototype[t] || (D.prototype[t] = G[e][t])
                }
                )
            }
            );
            const n = this;
            void 0 === n.modules && (n.modules = {}),
            Object.keys(n.modules).forEach(e => {
                const t = n.modules[e];
                if (t.params) {
                    const e = Object.keys(t.params)[0]
                      , n = t.params[e];
                    if ("object" != typeof n || null === n)
                        return;
                    if (!(e in i && "enabled"in n))
                        return;
                    !0 === i[e] && (i[e] = {
                        enabled: !0
                    }),
                    "object" != typeof i[e] || "enabled"in i[e] || (i[e].enabled = !0),
                    i[e] || (i[e] = {
                        enabled: !1
                    })
                }
            }
            );
            const s = d.extend({}, A);
            n.useModulesParams(s),
            n.params = d.extend({}, s, H, i),
            n.originalParams = d.extend({}, n.params),
            n.passedParams = d.extend({}, i),
            n.$ = a;
            const r = a(n.params.el);
            if (!(t = r[0]))
                return;
            if (r.length > 1) {
                const e = [];
                return r.each( (t, n) => {
                    const s = d.extend({}, i, {
                        el: n
                    });
                    e.push(new D(s))
                }
                ),
                e
            }
            let o;
            return t.swiper = n,
            r.data("swiper", n),
            t && t.shadowRoot && t.shadowRoot.querySelector ? (o = a(t.shadowRoot.querySelector(`.${n.params.wrapperClass}`))).children = e => r.children(e) : o = r.children(`.${n.params.wrapperClass}`),
            d.extend(n, {
                $el: r,
                el: t,
                $wrapperEl: o,
                wrapperEl: o[0],
                classNames: [],
                slides: a(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === n.params.direction,
                isVertical: () => "vertical" === n.params.direction,
                rtl: "rtl" === t.dir.toLowerCase() || "rtl" === r.css("direction"),
                rtlTranslate: "horizontal" === n.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === r.css("direction")),
                wrongRTL: "-webkit-box" === o.css("display"),
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: n.params.allowSlideNext,
                allowSlidePrev: n.params.allowSlidePrev,
                touchEvents: function() {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"];
                    let t = ["mousedown", "mousemove", "mouseup"];
                    return c.pointerEvents && (t = ["pointerdown", "pointermove", "pointerup"]),
                    n.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    },
                    n.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    },
                    c.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    formElements: "input, select, option, textarea, button, video",
                    lastClickTime: d.now(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: n.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }),
            n.useModules(),
            n.params.init && n.init(),
            n
        }
        slidesPerViewDynamic() {
            const {params: e, slides: t, slidesGrid: i, size: n, activeIndex: s} = this;
            let r = 1;
            if (e.centeredSlides) {
                let e, i = t[s].swiperSlideSize;
                for (let a = s + 1; a < t.length; a += 1)
                    t[a] && !e && (r += 1,
                    (i += t[a].swiperSlideSize) > n && (e = !0));
                for (let a = s - 1; a >= 0; a -= 1)
                    t[a] && !e && (r += 1,
                    (i += t[a].swiperSlideSize) > n && (e = !0))
            } else
                for (let e = s + 1; e < t.length; e += 1)
                    i[e] - i[s] < n && (r += 1);
            return r
        }
        update() {
            const e = this;
            if (!e || e.destroyed)
                return;
            const {snapGrid: t, params: i} = e;
            function n() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate
                  , i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            let s;
            i.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode ? (n(),
            e.params.autoHeight && e.updateAutoHeight()) : (s = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || n(),
            i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update")
        }
        changeDirection(e, t=!0) {
            const i = this
              , n = i.params.direction;
            return e || (e = "horizontal" === n ? "vertical" : "horizontal"),
            e === n || "horizontal" !== e && "vertical" !== e ? i : (i.$el.removeClass(`${i.params.containerModifierClass}${n}`).addClass(`${i.params.containerModifierClass}${e}`),
            i.params.direction = e,
            i.slides.each( (t, i) => {
                "vertical" === e ? i.style.width = "" : i.style.height = ""
            }
            ),
            i.emit("changeDirection"),
            t && i.update(),
            i)
        }
        init() {
            const e = this;
            e.initialized || (e.emit("beforeInit"),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.watchOverflow && e.checkOverflow(),
            e.params.grabCursor && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
            e.attachEvents(),
            e.initialized = !0,
            e.emit("init"))
        }
        destroy(e=!0, t=!0) {
            const i = this
              , {params: n, $el: s, $wrapperEl: r, slides: a} = i;
            return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"),
            i.initialized = !1,
            i.detachEvents(),
            n.loop && i.loopDestroy(),
            t && (i.removeClasses(),
            s.removeAttr("style"),
            r.removeAttr("style"),
            a && a.length && a.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach(e => {
                i.off(e)
            }
            ),
            !1 !== e && (i.$el[0].swiper = null,
            i.$el.data("swiper", null),
            d.deleteProps(i)),
            i.destroyed = !0,
            null)
        }
        static extendDefaults(e) {
            d.extend(H, e)
        }
        static get extendedDefaults() {
            return H
        }
        static get defaults() {
            return A
        }
        static get Class() {
            return u
        }
        static get $() {
            return a
        }
    }
    var B = {
        name: "device",
        proto: {
            device: b
        },
        static: {
            device: b
        }
    }
      , I = {
        name: "support",
        proto: {
            support: c
        },
        static: {
            support: c
        }
    };
    const k = {
        isEdge: !!s.navigator.userAgent.match(/Edge/g),
        isSafari: function() {
            const e = s.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent)
    };
    var L = {
        name: "browser",
        proto: {
            browser: k
        },
        static: {
            browser: k
        }
    }
      , N = {
        name: "resize",
        create() {
            const e = this;
            d.extend(e, {
                resize: {
                    resizeHandler() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                        e.emit("resize"))
                    },
                    orientationChangeHandler() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init() {
                s.addEventListener("resize", this.resize.resizeHandler),
                s.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            },
            destroy() {
                s.removeEventListener("resize", this.resize.resizeHandler),
                s.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
        }
    };
    const $ = {
        func: s.MutationObserver || s.WebkitMutationObserver,
        attach(e, t={}) {
            const i = this
              , n = new (0,
            $.func)(e => {
                if (1 === e.length)
                    return void i.emit("observerUpdate", e[0]);
                const t = function() {
                    i.emit("observerUpdate", e[0])
                };
                s.requestAnimationFrame ? s.requestAnimationFrame(t) : s.setTimeout(t, 0)
            }
            );
            n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            i.observer.observers.push(n)
        },
        init() {
            const e = this;
            if (c.observer && e.params.observer) {
                if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let i = 0; i < t.length; i += 1)
                        e.observer.attach(t[i])
                }
                e.observer.attach(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }),
                e.observer.attach(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy() {
            this.observer.observers.forEach(e => {
                e.disconnect()
            }
            ),
            this.observer.observers = []
        }
    };
    var O = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create() {
            d.extend(this, {
                observer: {
                    init: $.init.bind(this),
                    attach: $.attach.bind(this),
                    destroy: $.destroy.bind(this),
                    observers: []
                }
            })
        },
        on: {
            init() {
                this.observer.init()
            },
            destroy() {
                this.observer.destroy()
            }
        }
    };
    const z = {
        update(e) {
            const t = this
              , {slidesPerView: i, slidesPerGroup: n, centeredSlides: s} = t.params
              , {addSlidesBefore: r, addSlidesAfter: a} = t.params.virtual
              , {from: o, to: l, slides: c, slidesGrid: u, renderSlide: p, offset: h} = t.virtual;
            t.updateActiveIndex();
            const f = t.activeIndex || 0;
            let m, g, v;
            m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
            s ? (g = Math.floor(i / 2) + n + r,
            v = Math.floor(i / 2) + n + a) : (g = i + (n - 1) + r,
            v = n + a);
            const T = Math.max((f || 0) - v, 0)
              , b = Math.min((f || 0) + g, c.length - 1)
              , y = (t.slidesGrid[T] || 0) - (t.slidesGrid[0] || 0);
            function S() {
                t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (d.extend(t.virtual, {
                from: T,
                to: b,
                offset: y,
                slidesGrid: t.slidesGrid
            }),
            o === T && l === b && !e)
                return t.slidesGrid !== u && y !== h && t.slides.css(m, `${y}px`),
                void t.updateProgress();
            if (t.params.virtual.renderExternal)
                return t.params.virtual.renderExternal.call(t, {
                    offset: y,
                    from: T,
                    to: b,
                    slides: function() {
                        const e = [];
                        for (let t = T; t <= b; t += 1)
                            e.push(c[t]);
                        return e
                    }()
                }),
                void S();
            const w = []
              , C = [];
            if (e)
                t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
            else
                for (let e = o; e <= l; e += 1)
                    (e < T || e > b) && t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
            for (let t = 0; t < c.length; t += 1)
                t >= T && t <= b && (void 0 === l || e ? C.push(t) : (t > l && C.push(t),
                t < o && w.push(t)));
            C.forEach(e => {
                t.$wrapperEl.append(p(c[e], e))
            }
            ),
            w.sort( (e, t) => t - e).forEach(e => {
                t.$wrapperEl.prepend(p(c[e], e))
            }
            ),
            t.$wrapperEl.children(".swiper-slide").css(m, `${y}px`),
            S()
        },
        renderSlide(e, t) {
            const i = this
              , n = i.params.virtual;
            if (n.cache && i.virtual.cache[t])
                return i.virtual.cache[t];
            const s = n.renderSlide ? a(n.renderSlide.call(i, e, t)) : a(`<div class="${i.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
            return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t),
            n.cache && (i.virtual.cache[t] = s),
            s
        },
        appendSlide(e) {
            const t = this;
            if ("object" == typeof e && "length"in e)
                for (let i = 0; i < e.length; i += 1)
                    e[i] && t.virtual.slides.push(e[i]);
            else
                t.virtual.slides.push(e);
            t.virtual.update(!0)
        },
        prependSlide(e) {
            const t = this
              , i = t.activeIndex;
            let n = i + 1
              , s = 1;
            if (Array.isArray(e)) {
                for (let i = 0; i < e.length; i += 1)
                    e[i] && t.virtual.slides.unshift(e[i]);
                n = i + e.length,
                s = e.length
            } else
                t.virtual.slides.unshift(e);
            if (t.params.virtual.cache) {
                const e = t.virtual.cache
                  , i = {};
                Object.keys(e).forEach(t => {
                    const n = e[t]
                      , r = n.attr("data-swiper-slide-index");
                    r && n.attr("data-swiper-slide-index", parseInt(r, 10) + 1),
                    i[parseInt(t, 10) + s] = n
                }
                ),
                t.virtual.cache = i
            }
            t.virtual.update(!0),
            t.slideTo(n, 0)
        },
        removeSlide(e) {
            const t = this;
            if (null == e)
                return;
            let i = t.activeIndex;
            if (Array.isArray(e))
                for (let n = e.length - 1; n >= 0; n -= 1)
                    t.virtual.slides.splice(e[n], 1),
                    t.params.virtual.cache && delete t.virtual.cache[e[n]],
                    e[n] < i && (i -= 1),
                    i = Math.max(i, 0);
            else
                t.virtual.slides.splice(e, 1),
                t.params.virtual.cache && delete t.virtual.cache[e],
                e < i && (i -= 1),
                i = Math.max(i, 0);
            t.virtual.update(!0),
            t.slideTo(i, 0)
        },
        removeAllSlides() {
            const e = this;
            e.virtual.slides = [],
            e.params.virtual.cache && (e.virtual.cache = {}),
            e.virtual.update(!0),
            e.slideTo(0, 0)
        }
    };
    var R = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create() {
            d.extend(this, {
                virtual: {
                    update: z.update.bind(this),
                    appendSlide: z.appendSlide.bind(this),
                    prependSlide: z.prependSlide.bind(this),
                    removeSlide: z.removeSlide.bind(this),
                    removeAllSlides: z.removeAllSlides.bind(this),
                    renderSlide: z.renderSlide.bind(this),
                    slides: this.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit() {
                const e = this;
                if (!e.params.virtual.enabled)
                    return;
                e.classNames.push(`${e.params.containerModifierClass}virtual`);
                const t = {
                    watchSlidesProgress: !0
                };
                d.extend(e.params, t),
                d.extend(e.originalParams, t),
                e.params.initialSlide || e.virtual.update()
            },
            setTranslate() {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    };
    const V = {
        handle(e) {
            const t = this
              , {rtlTranslate: i} = t;
            let r = e;
            r.originalEvent && (r = r.originalEvent);
            const a = r.keyCode || r.charCode;
            if (!t.allowSlideNext && (t.isHorizontal() && 39 === a || t.isVertical() && 40 === a || 34 === a))
                return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && 37 === a || t.isVertical() && 38 === a || 33 === a))
                return !1;
            if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || n.activeElement && n.activeElement.nodeName && ("input" === n.activeElement.nodeName.toLowerCase() || "textarea" === n.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (33 === a || 34 === a || 37 === a || 39 === a || 38 === a || 40 === a)) {
                    let e = !1;
                    if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length)
                        return;
                    const n = s.innerWidth
                      , r = s.innerHeight
                      , a = t.$el.offset();
                    i && (a.left -= t.$el[0].scrollLeft);
                    const o = [[a.left, a.top], [a.left + t.width, a.top], [a.left, a.top + t.height], [a.left + t.width, a.top + t.height]];
                    for (let t = 0; t < o.length; t += 1) {
                        const i = o[t];
                        i[0] >= 0 && i[0] <= n && i[1] >= 0 && i[1] <= r && (e = !0)
                    }
                    if (!e)
                        return
                }
                t.isHorizontal() ? (33 !== a && 34 !== a && 37 !== a && 39 !== a || (r.preventDefault ? r.preventDefault() : r.returnValue = !1),
                (34 !== a && 39 !== a || i) && (33 !== a && 37 !== a || !i) || t.slideNext(),
                (33 !== a && 37 !== a || i) && (34 !== a && 39 !== a || !i) || t.slidePrev()) : (33 !== a && 34 !== a && 38 !== a && 40 !== a || (r.preventDefault ? r.preventDefault() : r.returnValue = !1),
                34 !== a && 40 !== a || t.slideNext(),
                33 !== a && 38 !== a || t.slidePrev()),
                t.emit("keyPress", a)
            }
        },
        enable() {
            this.keyboard.enabled || (a(n).on("keydown", this.keyboard.handle),
            this.keyboard.enabled = !0)
        },
        disable() {
            this.keyboard.enabled && (a(n).off("keydown", this.keyboard.handle),
            this.keyboard.enabled = !1)
        }
    };
    var X = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0
            }
        },
        create() {
            d.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: V.enable.bind(this),
                    disable: V.disable.bind(this),
                    handle: V.handle.bind(this)
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.params.keyboard.enabled && e.keyboard.enable()
            },
            destroy() {
                const e = this;
                e.keyboard.enabled && e.keyboard.disable()
            }
        }
    };
    const F = {
        lastScrollTime: d.now(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: () => s.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
            let e = "onwheel"in n;
            if (!e) {
                const t = n.createElement("div");
                t.setAttribute("onwheel", "return;"),
                e = "function" == typeof t.onwheel
            }
            return !e && n.implementation && n.implementation.hasFeature && !0 !== n.implementation.hasFeature("", "") && (e = n.implementation.hasFeature("Events.wheel", "3.0")),
            e
        }() ? "wheel" : "mousewheel",
        normalize(e) {
            let t = 0
              , i = 0
              , n = 0
              , s = 0;
            return "detail"in e && (i = e.detail),
            "wheelDelta"in e && (i = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (i = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = i,
            i = 0),
            n = 10 * t,
            s = 10 * i,
            "deltaY"in e && (s = e.deltaY),
            "deltaX"in e && (n = e.deltaX),
            e.shiftKey && !n && (n = s,
            s = 0),
            (n || s) && e.deltaMode && (1 === e.deltaMode ? (n *= 40,
            s *= 40) : (n *= 800,
            s *= 800)),
            n && !t && (t = n < 1 ? -1 : 1),
            s && !i && (i = s < 1 ? -1 : 1),
            {
                spinX: t,
                spinY: i,
                pixelX: n,
                pixelY: s
            }
        },
        handleMouseEnter() {
            this.mouseEntered = !0
        },
        handleMouseLeave() {
            this.mouseEntered = !1
        },
        handle(e) {
            let t = e;
            const i = this
              , n = i.params.mousewheel;
            if (i.params.cssMode && t.preventDefault(),
            !i.mouseEntered && !n.releaseOnEdges)
                return !0;
            t.originalEvent && (t = t.originalEvent);
            let s = 0;
            const r = i.rtlTranslate ? -1 : 1
              , a = F.normalize(t);
            if (n.forceToAxis)
                if (i.isHorizontal()) {
                    if (!(Math.abs(a.pixelX) > Math.abs(a.pixelY)))
                        return !0;
                    s = a.pixelX * r
                } else {
                    if (!(Math.abs(a.pixelY) > Math.abs(a.pixelX)))
                        return !0;
                    s = a.pixelY
                }
            else
                s = Math.abs(a.pixelX) > Math.abs(a.pixelY) ? -a.pixelX * r : -a.pixelY;
            if (0 === s)
                return !0;
            if (n.invert && (s = -s),
            i.params.freeMode) {
                const e = {
                    time: d.now(),
                    delta: Math.abs(s),
                    direction: Math.sign(s)
                }
                  , {lastEventBeforeSnap: r} = i.mousewheel
                  , a = r && e.time < r.time + 500 && e.delta <= r.delta && e.direction === r.direction;
                if (!a) {
                    i.mousewheel.lastEventBeforeSnap = void 0,
                    i.params.loop && i.loopFix();
                    let r = i.getTranslate() + s * n.sensitivity;
                    const o = i.isBeginning
                      , l = i.isEnd;
                    if (r >= i.minTranslate() && (r = i.minTranslate()),
                    r <= i.maxTranslate() && (r = i.maxTranslate()),
                    i.setTransition(0),
                    i.setTranslate(r),
                    i.updateProgress(),
                    i.updateActiveIndex(),
                    i.updateSlidesClasses(),
                    (!o && i.isBeginning || !l && i.isEnd) && i.updateSlidesClasses(),
                    i.params.freeModeSticky) {
                        clearTimeout(i.mousewheel.timeout),
                        i.mousewheel.timeout = void 0;
                        const t = i.mousewheel.recentWheelEvents;
                        t.length >= 15 && t.shift();
                        const n = t.length ? t[t.length - 1] : void 0
                          , r = t[0];
                        if (t.push(e),
                        n && (e.delta > n.delta || e.direction !== n.direction))
                            t.splice(0);
                        else if (t.length >= 15 && e.time - r.time < 500 && r.delta - e.delta >= 1 && e.delta <= 6) {
                            const n = s > 0 ? .8 : .2;
                            i.mousewheel.lastEventBeforeSnap = e,
                            t.splice(0),
                            i.mousewheel.timeout = d.nextTick( () => {
                                i.slideToClosest(i.params.speed, !0, void 0, n)
                            }
                            , 0)
                        }
                        i.mousewheel.timeout || (i.mousewheel.timeout = d.nextTick( () => {
                            i.mousewheel.lastEventBeforeSnap = e,
                            t.splice(0),
                            i.slideToClosest(i.params.speed, !0, void 0, .5)
                        }
                        , 500))
                    }
                    if (a || i.emit("scroll", t),
                    i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(),
                    r === i.minTranslate() || r === i.maxTranslate())
                        return !0
                }
            } else {
                const t = {
                    time: d.now(),
                    delta: Math.abs(s),
                    direction: Math.sign(s),
                    raw: e
                }
                  , n = i.mousewheel.recentWheelEvents;
                n.length >= 2 && n.shift();
                const r = n.length ? n[n.length - 1] : void 0;
                if (n.push(t),
                r ? (t.direction !== r.direction || t.delta > r.delta) && i.mousewheel.animateSlider(t) : i.mousewheel.animateSlider(t),
                i.mousewheel.releaseScroll(t))
                    return !0
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            !1
        },
        animateSlider(e) {
            const t = this;
            return e.delta >= 6 && d.now() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(),
            t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(),
            t.emit("scroll", e.raw)),
            t.mousewheel.lastScrollTime = (new s.Date).getTime(),
            !1)
        },
        releaseScroll(e) {
            const t = this
              , i = t.params.mousewheel;
            if (e.direction < 0) {
                if (t.isEnd && !t.params.loop && i.releaseOnEdges)
                    return !0
            } else if (t.isBeginning && !t.params.loop && i.releaseOnEdges)
                return !0;
            return !1
        },
        enable() {
            const e = this
              , t = F.event();
            if (e.params.cssMode)
                return e.wrapperEl.removeEventListener(t, e.mousewheel.handle),
                !0;
            if (!t)
                return !1;
            if (e.mousewheel.enabled)
                return !1;
            let i = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (i = a(e.params.mousewheel.eventsTarged)),
            i.on("mouseenter", e.mousewheel.handleMouseEnter),
            i.on("mouseleave", e.mousewheel.handleMouseLeave),
            i.on(t, e.mousewheel.handle),
            e.mousewheel.enabled = !0,
            !0
        },
        disable() {
            const e = this
              , t = F.event();
            if (e.params.cssMode)
                return e.wrapperEl.addEventListener(t, e.mousewheel.handle),
                !0;
            if (!t)
                return !1;
            if (!e.mousewheel.enabled)
                return !1;
            let i = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (i = a(e.params.mousewheel.eventsTarged)),
            i.off(t, e.mousewheel.handle),
            e.mousewheel.enabled = !1,
            !0
        }
    };
    const W = {
        update() {
            const e = this
              , t = e.params.navigation;
            if (e.params.loop)
                return;
            const {$nextEl: i, $prevEl: n} = e.navigation;
            n && n.length > 0 && (e.isBeginning ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass),
            n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
            i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass),
            i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
        },
        onPrevClick(e) {
            e.preventDefault(),
            this.isBeginning && !this.params.loop || this.slidePrev()
        },
        onNextClick(e) {
            e.preventDefault(),
            this.isEnd && !this.params.loop || this.slideNext()
        },
        init() {
            const e = this
              , t = e.params.navigation;
            if (!t.nextEl && !t.prevEl)
                return;
            let i, n;
            t.nextEl && (i = a(t.nextEl),
            e.params.uniqueNavElements && "string" == typeof t.nextEl && i.length > 1 && 1 === e.$el.find(t.nextEl).length && (i = e.$el.find(t.nextEl))),
            t.prevEl && (n = a(t.prevEl),
            e.params.uniqueNavElements && "string" == typeof t.prevEl && n.length > 1 && 1 === e.$el.find(t.prevEl).length && (n = e.$el.find(t.prevEl))),
            i && i.length > 0 && i.on("click", e.navigation.onNextClick),
            n && n.length > 0 && n.on("click", e.navigation.onPrevClick),
            d.extend(e.navigation, {
                $nextEl: i,
                nextEl: i && i[0],
                $prevEl: n,
                prevEl: n && n[0]
            })
        },
        destroy() {
            const e = this
              , {$nextEl: t, $prevEl: i} = e.navigation;
            t && t.length && (t.off("click", e.navigation.onNextClick),
            t.removeClass(e.params.navigation.disabledClass)),
            i && i.length && (i.off("click", e.navigation.onPrevClick),
            i.removeClass(e.params.navigation.disabledClass))
        }
    };
    const j = {
        update() {
            const e = this
              , t = e.rtl
              , i = e.params.pagination;
            if (!i.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length)
                return;
            const n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
              , s = e.pagination.$el;
            let r;
            const o = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > n - 1 - 2 * e.loopedSlides && (r -= n - 2 * e.loopedSlides),
            r > o - 1 && (r -= o),
            r < 0 && "bullets" !== e.params.paginationType && (r = o + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0,
            "bullets" === i.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const n = e.pagination.bullets;
                let o, l, d;
                if (i.dynamicBullets && (e.pagination.bulletSize = n.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                s.css(e.isHorizontal() ? "width" : "height", `${e.pagination.bulletSize * (i.dynamicMainBullets + 4)}px`),
                i.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex,
                e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                o = r - e.pagination.dynamicBulletIndex,
                d = ((l = o + (Math.min(n.length, i.dynamicMainBullets) - 1)) + o) / 2),
                n.removeClass(`${i.bulletActiveClass} ${i.bulletActiveClass}-next ${i.bulletActiveClass}-next-next ${i.bulletActiveClass}-prev ${i.bulletActiveClass}-prev-prev ${i.bulletActiveClass}-main`),
                s.length > 1)
                    n.each( (e, t) => {
                        const n = a(t)
                          , s = n.index();
                        s === r && n.addClass(i.bulletActiveClass),
                        i.dynamicBullets && (s >= o && s <= l && n.addClass(`${i.bulletActiveClass}-main`),
                        s === o && n.prev().addClass(`${i.bulletActiveClass}-prev`).prev().addClass(`${i.bulletActiveClass}-prev-prev`),
                        s === l && n.next().addClass(`${i.bulletActiveClass}-next`).next().addClass(`${i.bulletActiveClass}-next-next`))
                    }
                    );
                else {
                    const t = n.eq(r)
                      , s = t.index();
                    if (t.addClass(i.bulletActiveClass),
                    i.dynamicBullets) {
                        const t = n.eq(o)
                          , r = n.eq(l);
                        for (let e = o; e <= l; e += 1)
                            n.eq(e).addClass(`${i.bulletActiveClass}-main`);
                        if (e.params.loop)
                            if (s >= n.length - i.dynamicMainBullets) {
                                for (let e = i.dynamicMainBullets; e >= 0; e -= 1)
                                    n.eq(n.length - e).addClass(`${i.bulletActiveClass}-main`);
                                n.eq(n.length - i.dynamicMainBullets - 1).addClass(`${i.bulletActiveClass}-prev`)
                            } else
                                t.prev().addClass(`${i.bulletActiveClass}-prev`).prev().addClass(`${i.bulletActiveClass}-prev-prev`),
                                r.next().addClass(`${i.bulletActiveClass}-next`).next().addClass(`${i.bulletActiveClass}-next-next`);
                        else
                            t.prev().addClass(`${i.bulletActiveClass}-prev`).prev().addClass(`${i.bulletActiveClass}-prev-prev`),
                            r.next().addClass(`${i.bulletActiveClass}-next`).next().addClass(`${i.bulletActiveClass}-next-next`)
                    }
                }
                if (i.dynamicBullets) {
                    const s = Math.min(n.length, i.dynamicMainBullets + 4)
                      , r = (e.pagination.bulletSize * s - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize
                      , a = t ? "right" : "left";
                    n.css(e.isHorizontal() ? a : "top", `${r}px`)
                }
            }
            if ("fraction" === i.type && (s.find(`.${i.currentClass}`).text(i.formatFractionCurrent(r + 1)),
            s.find(`.${i.totalClass}`).text(i.formatFractionTotal(o))),
            "progressbar" === i.type) {
                let t;
                t = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                const n = (r + 1) / o;
                let a = 1
                  , l = 1;
                "horizontal" === t ? a = n : l = n,
                s.find(`.${i.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${a}) scaleY(${l})`).transition(e.params.speed)
            }
            "custom" === i.type && i.renderCustom ? (s.html(i.renderCustom(e, r + 1, o)),
            e.emit("paginationRender", e, s[0])) : e.emit("paginationUpdate", e, s[0]),
            s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](i.lockClass)
        },
        render() {
            const e = this
              , t = e.params.pagination;
            if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length)
                return;
            const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
              , n = e.pagination.$el;
            let s = "";
            if ("bullets" === t.type) {
                const r = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                for (let i = 0; i < r; i += 1)
                    t.renderBullet ? s += t.renderBullet.call(e, i, t.bulletClass) : s += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                n.html(s),
                e.pagination.bullets = n.find(`.${t.bulletClass}`)
            }
            "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span>` + " / " + `<span class="${t.totalClass}"></span>`,
            n.html(s)),
            "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`,
            n.html(s)),
            "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
        },
        init() {
            const e = this
              , t = e.params.pagination;
            if (!t.el)
                return;
            let i = a(t.el);
            0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)),
            "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
            i.addClass(t.modifierClass + t.type),
            "bullets" === t.type && t.dynamicBullets && (i.addClass(`${t.modifierClass}${t.type}-dynamic`),
            e.pagination.dynamicBulletIndex = 0,
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
            t.clickable && i.on("click", `.${t.bulletClass}`, (function(t) {
                t.preventDefault();
                let i = a(this).index() * e.params.slidesPerGroup;
                e.params.loop && (i += e.loopedSlides),
                e.slideTo(i)
            }
            )),
            d.extend(e.pagination, {
                $el: i,
                el: i[0]
            }))
        },
        destroy() {
            const e = this.params.pagination;
            if (!e.el || !this.pagination.el || !this.pagination.$el || 0 === this.pagination.$el.length)
                return;
            const t = this.pagination.$el;
            t.removeClass(e.hiddenClass),
            t.removeClass(e.modifierClass + e.type),
            this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && t.off("click", `.${e.bulletClass}`)
        }
    };
    const Y = {
        setTranslate() {
            const e = this;
            if (!e.params.scrollbar.el || !e.scrollbar.el)
                return;
            const {scrollbar: t, rtlTranslate: i, progress: n} = e
              , {dragSize: s, trackSize: r, $dragEl: a, $el: o} = t
              , l = e.params.scrollbar;
            let d = s
              , c = (r - s) * n;
            i ? (c = -c) > 0 ? (d = s - c,
            c = 0) : -c + s > r && (d = r + c) : c < 0 ? (d = s + c,
            c = 0) : c + s > r && (d = r - c),
            e.isHorizontal() ? (a.transform(`translate3d(${c}px, 0, 0)`),
            a[0].style.width = `${d}px`) : (a.transform(`translate3d(0px, ${c}px, 0)`),
            a[0].style.height = `${d}px`),
            l.hide && (clearTimeout(e.scrollbar.timeout),
            o[0].style.opacity = 1,
            e.scrollbar.timeout = setTimeout( () => {
                o[0].style.opacity = 0,
                o.transition(400)
            }
            , 1e3))
        },
        setTransition(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize() {
            const e = this;
            if (!e.params.scrollbar.el || !e.scrollbar.el)
                return;
            const {scrollbar: t} = e
              , {$dragEl: i, $el: n} = t;
            i[0].style.width = "",
            i[0].style.height = "";
            const s = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight
              , r = e.size / e.virtualSize
              , a = r * (s / e.size);
            let o;
            o = "auto" === e.params.scrollbar.dragSize ? s * r : parseInt(e.params.scrollbar.dragSize, 10),
            e.isHorizontal() ? i[0].style.width = `${o}px` : i[0].style.height = `${o}px`,
            n[0].style.display = r >= 1 ? "none" : "",
            e.params.scrollbar.hide && (n[0].style.opacity = 0),
            d.extend(t, {
                trackSize: s,
                divider: r,
                moveDivider: a,
                dragSize: o
            }),
            t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
        },
        getPointerPosition(e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        },
        setDragPosition(e) {
            const {scrollbar: t, rtlTranslate: i} = this
              , {$el: n, dragSize: s, trackSize: r, dragStartPos: a} = t;
            let o;
            o = (t.getPointerPosition(e) - n.offset()[this.isHorizontal() ? "left" : "top"] - (null !== a ? a : s / 2)) / (r - s),
            o = Math.max(Math.min(o, 1), 0),
            i && (o = 1 - o);
            const l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * o;
            this.updateProgress(l),
            this.setTranslate(l),
            this.updateActiveIndex(),
            this.updateSlidesClasses()
        },
        onDragStart(e) {
            const t = this
              , i = t.params.scrollbar
              , {scrollbar: n, $wrapperEl: s} = t
              , {$el: r, $dragEl: a} = n;
            t.scrollbar.isTouched = !0,
            t.scrollbar.dragStartPos = e.target === a[0] || e.target === a ? n.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null,
            e.preventDefault(),
            e.stopPropagation(),
            s.transition(100),
            a.transition(100),
            n.setDragPosition(e),
            clearTimeout(t.scrollbar.dragTimeout),
            r.transition(0),
            i.hide && r.css("opacity", 1),
            t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
            t.emit("scrollbarDragStart", e)
        },
        onDragMove(e) {
            const {scrollbar: t, $wrapperEl: i} = this
              , {$el: n, $dragEl: s} = t;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            t.setDragPosition(e),
            i.transition(0),
            n.transition(0),
            s.transition(0),
            this.emit("scrollbarDragMove", e))
        },
        onDragEnd(e) {
            const t = this
              , i = t.params.scrollbar
              , {scrollbar: n, $wrapperEl: s} = t
              , {$el: r} = n;
            t.scrollbar.isTouched && (t.scrollbar.isTouched = !1,
            t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""),
            s.transition("")),
            i.hide && (clearTimeout(t.scrollbar.dragTimeout),
            t.scrollbar.dragTimeout = d.nextTick( () => {
                r.css("opacity", 0),
                r.transition(400)
            }
            , 1e3)),
            t.emit("scrollbarDragEnd", e),
            i.snapOnRelease && t.slideToClosest())
        },
        enableDraggable() {
            const e = this;
            if (!e.params.scrollbar.el)
                return;
            const {scrollbar: t, touchEventsTouch: i, touchEventsDesktop: s, params: r} = e
              , a = t.$el[0]
              , o = !(!c.passiveListener || !r.passiveListeners) && {
                passive: !1,
                capture: !1
            }
              , l = !(!c.passiveListener || !r.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            c.touch ? (a.addEventListener(i.start, e.scrollbar.onDragStart, o),
            a.addEventListener(i.move, e.scrollbar.onDragMove, o),
            a.addEventListener(i.end, e.scrollbar.onDragEnd, l)) : (a.addEventListener(s.start, e.scrollbar.onDragStart, o),
            n.addEventListener(s.move, e.scrollbar.onDragMove, o),
            n.addEventListener(s.end, e.scrollbar.onDragEnd, l))
        },
        disableDraggable() {
            const e = this;
            if (!e.params.scrollbar.el)
                return;
            const {scrollbar: t, touchEventsTouch: i, touchEventsDesktop: s, params: r} = e
              , a = t.$el[0]
              , o = !(!c.passiveListener || !r.passiveListeners) && {
                passive: !1,
                capture: !1
            }
              , l = !(!c.passiveListener || !r.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            c.touch ? (a.removeEventListener(i.start, e.scrollbar.onDragStart, o),
            a.removeEventListener(i.move, e.scrollbar.onDragMove, o),
            a.removeEventListener(i.end, e.scrollbar.onDragEnd, l)) : (a.removeEventListener(s.start, e.scrollbar.onDragStart, o),
            n.removeEventListener(s.move, e.scrollbar.onDragMove, o),
            n.removeEventListener(s.end, e.scrollbar.onDragEnd, l))
        },
        init() {
            const e = this;
            if (!e.params.scrollbar.el)
                return;
            const {scrollbar: t, $el: i} = e
              , n = e.params.scrollbar;
            let s = a(n.el);
            e.params.uniqueNavElements && "string" == typeof n.el && s.length > 1 && 1 === i.find(n.el).length && (s = i.find(n.el));
            let r = s.find(`.${e.params.scrollbar.dragClass}`);
            0 === r.length && (r = a(`<div class="${e.params.scrollbar.dragClass}"></div>`),
            s.append(r)),
            d.extend(t, {
                $el: s,
                el: s[0],
                $dragEl: r,
                dragEl: r[0]
            }),
            n.draggable && t.enableDraggable()
        },
        destroy() {
            this.scrollbar.disableDraggable()
        }
    };
    const _ = {
        setTransform(e, t) {
            const {rtl: i} = this
              , n = a(e)
              , s = i ? -1 : 1
              , r = n.attr("data-swiper-parallax") || "0";
            let o = n.attr("data-swiper-parallax-x")
              , l = n.attr("data-swiper-parallax-y");
            const d = n.attr("data-swiper-parallax-scale")
              , c = n.attr("data-swiper-parallax-opacity");
            if (o || l ? (o = o || "0",
            l = l || "0") : this.isHorizontal() ? (o = r,
            l = "0") : (l = r,
            o = "0"),
            o = o.indexOf("%") >= 0 ? `${parseInt(o, 10) * t * s}%` : `${o * t * s}px`,
            l = l.indexOf("%") >= 0 ? `${parseInt(l, 10) * t}%` : `${l * t}px`,
            null != c) {
                const e = c - (c - 1) * (1 - Math.abs(t));
                n[0].style.opacity = e
            }
            if (null == d)
                n.transform(`translate3d(${o}, ${l}, 0px)`);
            else {
                const e = d - (d - 1) * (1 - Math.abs(t));
                n.transform(`translate3d(${o}, ${l}, 0px) scale(${e})`)
            }
        },
        setTranslate() {
            const e = this
              , {$el: t, slides: i, progress: n, snapGrid: s} = e;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each( (t, i) => {
                e.parallax.setTransform(i, n)
            }
            ),
            i.each( (t, i) => {
                let r = i.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(t / 2) - n * (s.length - 1)),
                r = Math.min(Math.max(r, -1), 1),
                a(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each( (t, i) => {
                    e.parallax.setTransform(i, r)
                }
                )
            }
            )
        },
        setTransition(e=this.params.speed) {
            const {$el: t} = this;
            t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each( (t, i) => {
                const n = a(i);
                let s = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (s = 0),
                n.transition(s)
            }
            )
        }
    };
    const q = {
        getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2)
                return 1;
            const t = e.targetTouches[0].pageX
              , i = e.targetTouches[0].pageY
              , n = e.targetTouches[1].pageX
              , s = e.targetTouches[1].pageY;
            return Math.sqrt((n - t) ** 2 + (s - i) ** 2)
        },
        onGestureStart(e) {
            const t = this
              , i = t.params.zoom
              , n = t.zoom
              , {gesture: s} = n;
            if (n.fakeGestureTouched = !1,
            n.fakeGestureMoved = !1,
            !c.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                n.fakeGestureTouched = !0,
                s.scaleStart = q.getDistanceBetweenTouches(e)
            }
            s.$slideEl && s.$slideEl.length || (s.$slideEl = a(e.target).closest(".swiper-slide"),
            0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)),
            s.$imageEl = s.$slideEl.find("img, svg, canvas"),
            s.$imageWrapEl = s.$imageEl.parent(`.${i.containerClass}`),
            s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio,
            0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0),
            t.zoom.isScaling = !0) : s.$imageEl = void 0
        },
        onGestureChange(e) {
            const t = this.params.zoom
              , i = this.zoom
              , {gesture: n} = i;
            if (!c.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureMoved = !0,
                n.scaleMove = q.getDistanceBetweenTouches(e)
            }
            n.$imageEl && 0 !== n.$imageEl.length && (c.gestures ? i.scale = e.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale,
            i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + (i.scale - n.maxRatio + 1) ** .5),
            i.scale < t.minRatio && (i.scale = t.minRatio + 1 - (t.minRatio - i.scale + 1) ** .5),
            n.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`))
        },
        onGestureEnd(e) {
            const t = this.params.zoom
              , i = this.zoom
              , {gesture: n} = i;
            if (!c.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !b.android)
                    return;
                i.fakeGestureTouched = !1,
                i.fakeGestureMoved = !1
            }
            n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio),
            n.$imageEl.transition(this.params.speed).transform(`translate3d(0,0,0) scale(${i.scale})`),
            i.currentScale = i.scale,
            i.isScaling = !1,
            1 === i.scale && (n.$slideEl = void 0))
        },
        onTouchStart(e) {
            const t = this.zoom
              , {gesture: i, image: n} = t;
            i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (b.android && e.preventDefault(),
            n.isTouched = !0,
            n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
            n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove(e) {
            const t = this
              , i = t.zoom
              , {gesture: n, image: s, velocity: r} = i;
            if (!n.$imageEl || 0 === n.$imageEl.length)
                return;
            if (t.allowClick = !1,
            !s.isTouched || !n.$slideEl)
                return;
            s.isMoved || (s.width = n.$imageEl[0].offsetWidth,
            s.height = n.$imageEl[0].offsetHeight,
            s.startX = d.getTranslate(n.$imageWrapEl[0], "x") || 0,
            s.startY = d.getTranslate(n.$imageWrapEl[0], "y") || 0,
            n.slideWidth = n.$slideEl[0].offsetWidth,
            n.slideHeight = n.$slideEl[0].offsetHeight,
            n.$imageWrapEl.transition(0),
            t.rtl && (s.startX = -s.startX,
            s.startY = -s.startY));
            const a = s.width * i.scale
              , o = s.height * i.scale;
            if (!(a < n.slideWidth && o < n.slideHeight)) {
                if (s.minX = Math.min(n.slideWidth / 2 - a / 2, 0),
                s.maxX = -s.minX,
                s.minY = Math.min(n.slideHeight / 2 - o / 2, 0),
                s.maxY = -s.minY,
                s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                !s.isMoved && !i.isScaling) {
                    if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                        return void (s.isTouched = !1);
                    if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                        return void (s.isTouched = !1)
                }
                e.preventDefault(),
                e.stopPropagation(),
                s.isMoved = !0,
                s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                s.currentX < s.minX && (s.currentX = s.minX + 1 - (s.minX - s.currentX + 1) ** .8),
                s.currentX > s.maxX && (s.currentX = s.maxX - 1 + (s.currentX - s.maxX + 1) ** .8),
                s.currentY < s.minY && (s.currentY = s.minY + 1 - (s.minY - s.currentY + 1) ** .8),
                s.currentY > s.maxY && (s.currentY = s.maxY - 1 + (s.currentY - s.maxY + 1) ** .8),
                r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
                r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
                r.prevTime || (r.prevTime = Date.now()),
                r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2,
                r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2,
                Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                r.prevPositionX = s.touchesCurrent.x,
                r.prevPositionY = s.touchesCurrent.y,
                r.prevTime = Date.now(),
                n.$imageWrapEl.transform(`translate3d(${s.currentX}px, ${s.currentY}px,0)`)
            }
        },
        onTouchEnd() {
            const e = this.zoom
              , {gesture: t, image: i, velocity: n} = e;
            if (!t.$imageEl || 0 === t.$imageEl.length)
                return;
            if (!i.isTouched || !i.isMoved)
                return i.isTouched = !1,
                void (i.isMoved = !1);
            i.isTouched = !1,
            i.isMoved = !1;
            let s = 300
              , r = 300;
            const a = n.x * s
              , o = i.currentX + a
              , l = n.y * r
              , d = i.currentY + l;
            0 !== n.x && (s = Math.abs((o - i.currentX) / n.x)),
            0 !== n.y && (r = Math.abs((d - i.currentY) / n.y));
            const c = Math.max(s, r);
            i.currentX = o,
            i.currentY = d;
            const u = i.width * e.scale
              , p = i.height * e.scale;
            i.minX = Math.min(t.slideWidth / 2 - u / 2, 0),
            i.maxX = -i.minX,
            i.minY = Math.min(t.slideHeight / 2 - p / 2, 0),
            i.maxY = -i.minY,
            i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX),
            i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY),
            t.$imageWrapEl.transition(c).transform(`translate3d(${i.currentX}px, ${i.currentY}px,0)`)
        },
        onTransitionEnd() {
            const e = this.zoom
              , {gesture: t} = e;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            t.$imageWrapEl.transform("translate3d(0,0,0)"),
            e.scale = 1,
            e.currentScale = 1,
            t.$slideEl = void 0,
            t.$imageEl = void 0,
            t.$imageWrapEl = void 0)
        },
        toggle(e) {
            const t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in(e) {
            const t = this
              , i = t.zoom
              , n = t.params.zoom
              , {gesture: s, image: r} = i;
            if (s.$slideEl || (s.$slideEl = t.clickedSlide ? a(t.clickedSlide) : t.slides.eq(t.activeIndex),
            s.$imageEl = s.$slideEl.find("img, svg, canvas"),
            s.$imageWrapEl = s.$imageEl.parent(`.${n.containerClass}`)),
            !s.$imageEl || 0 === s.$imageEl.length)
                return;
            let o, l, d, c, u, p, h, f, m, g, v, T, b, y, S, w, C, x;
            s.$slideEl.addClass(`${n.zoomedSlideClass}`),
            void 0 === r.touchesStart.x && e ? (o = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
            l = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (o = r.touchesStart.x,
            l = r.touchesStart.y),
            i.scale = s.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio,
            i.currentScale = s.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio,
            e ? (C = s.$slideEl[0].offsetWidth,
            x = s.$slideEl[0].offsetHeight,
            u = (d = s.$slideEl.offset().left) + C / 2 - o,
            p = (c = s.$slideEl.offset().top) + x / 2 - l,
            m = s.$imageEl[0].offsetWidth,
            g = s.$imageEl[0].offsetHeight,
            v = m * i.scale,
            T = g * i.scale,
            S = -(b = Math.min(C / 2 - v / 2, 0)),
            w = -(y = Math.min(x / 2 - T / 2, 0)),
            (h = u * i.scale) < b && (h = b),
            h > S && (h = S),
            (f = p * i.scale) < y && (f = y),
            f > w && (f = w)) : (h = 0,
            f = 0),
            s.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${f}px,0)`),
            s.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${i.scale})`)
        },
        out() {
            const e = this
              , t = e.zoom
              , i = e.params.zoom
              , {gesture: n} = t;
            n.$slideEl || (n.$slideEl = e.clickedSlide ? a(e.clickedSlide) : e.slides.eq(e.activeIndex),
            n.$imageEl = n.$slideEl.find("img, svg, canvas"),
            n.$imageWrapEl = n.$imageEl.parent(`.${i.containerClass}`)),
            n.$imageEl && 0 !== n.$imageEl.length && (t.scale = 1,
            t.currentScale = 1,
            n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            n.$slideEl.removeClass(`${i.zoomedSlideClass}`),
            n.$slideEl = void 0)
        },
        enable() {
            const e = this
              , t = e.zoom;
            if (t.enabled)
                return;
            t.enabled = !0;
            const i = !("touchstart" !== e.touchEvents.start || !c.passiveListener || !e.params.passiveListeners) && {
                passive: !0,
                capture: !1
            }
              , n = !c.passiveListener || {
                passive: !1,
                capture: !0
            };
            c.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i),
            e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i),
            e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i),
            e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, n),
            e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i),
            e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, ".swiper-slide", t.onGestureEnd, i)),
            e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, n)
        },
        disable() {
            const e = this
              , t = e.zoom;
            if (!t.enabled)
                return;
            e.zoom.enabled = !1;
            const i = !("touchstart" !== e.touchEvents.start || !c.passiveListener || !e.params.passiveListeners) && {
                passive: !0,
                capture: !1
            }
              , n = !c.passiveListener || {
                passive: !1,
                capture: !0
            };
            c.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i),
            e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i),
            e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i),
            e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, n),
            e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i),
            e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, ".swiper-slide", t.onGestureEnd, i)),
            e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, n)
        }
    };
    const U = {
        loadInSlide(e, t=!0) {
            const i = this
              , n = i.params.lazy;
            if (void 0 === e)
                return;
            if (0 === i.slides.length)
                return;
            const s = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children(`.${i.params.slideClass}[data-swiper-slide-index="${e}"]`) : i.slides.eq(e);
            let r = s.find(`.${n.elementClass}:not(.${n.loadedClass}):not(.${n.loadingClass})`);
            !s.hasClass(n.elementClass) || s.hasClass(n.loadedClass) || s.hasClass(n.loadingClass) || (r = r.add(s[0])),
            0 !== r.length && r.each( (e, r) => {
                const o = a(r);
                o.addClass(n.loadingClass);
                const l = o.attr("data-background")
                  , d = o.attr("data-src")
                  , c = o.attr("data-srcset")
                  , u = o.attr("data-sizes");
                i.loadImage(o[0], d || l, c, u, !1, () => {
                    if (null != i && i && (!i || i.params) && !i.destroyed) {
                        if (l ? (o.css("background-image", `url("${l}")`),
                        o.removeAttr("data-background")) : (c && (o.attr("srcset", c),
                        o.removeAttr("data-srcset")),
                        u && (o.attr("sizes", u),
                        o.removeAttr("data-sizes")),
                        d && (o.attr("src", d),
                        o.removeAttr("data-src"))),
                        o.addClass(n.loadedClass).removeClass(n.loadingClass),
                        s.find(`.${n.preloaderClass}`).remove(),
                        i.params.loop && t) {
                            const e = s.attr("data-swiper-slide-index");
                            if (s.hasClass(i.params.slideDuplicateClass)) {
                                const t = i.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${i.params.slideDuplicateClass})`);
                                i.lazy.loadInSlide(t.index(), !1)
                            } else {
                                const t = i.$wrapperEl.children(`.${i.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`);
                                i.lazy.loadInSlide(t.index(), !1)
                            }
                        }
                        i.emit("lazyImageReady", s[0], o[0])
                    }
                }
                ),
                i.emit("lazyImageLoad", s[0], o[0])
            }
            )
        },
        load() {
            const e = this
              , {$wrapperEl: t, params: i, slides: n, activeIndex: s} = e
              , r = e.virtual && i.virtual.enabled
              , o = i.lazy;
            let l = i.slidesPerView;
            function d(e) {
                if (r) {
                    if (t.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]`).length)
                        return !0
                } else if (n[e])
                    return !0;
                return !1
            }
            function c(e) {
                return r ? a(e).attr("data-swiper-slide-index") : a(e).index()
            }
            if ("auto" === l && (l = 0),
            e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
            e.params.watchSlidesVisibility)
                t.children(`.${i.slideVisibleClass}`).each( (t, i) => {
                    const n = r ? a(i).attr("data-swiper-slide-index") : a(i).index();
                    e.lazy.loadInSlide(n)
                }
                );
            else if (l > 1)
                for (let t = s; t < s + l; t += 1)
                    d(t) && e.lazy.loadInSlide(t);
            else
                e.lazy.loadInSlide(s);
            if (o.loadPrevNext)
                if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                    const t = o.loadPrevNextAmount
                      , i = l
                      , r = Math.min(s + i + Math.max(t, i), n.length)
                      , a = Math.max(s - Math.max(i, t), 0);
                    for (let t = s + l; t < r; t += 1)
                        d(t) && e.lazy.loadInSlide(t);
                    for (let t = a; t < s; t += 1)
                        d(t) && e.lazy.loadInSlide(t)
                } else {
                    const n = t.children(`.${i.slideNextClass}`);
                    n.length > 0 && e.lazy.loadInSlide(c(n));
                    const s = t.children(`.${i.slidePrevClass}`);
                    s.length > 0 && e.lazy.loadInSlide(c(s))
                }
        }
    };
    const K = {
        LinearSpline: function(e, t) {
            const i = function() {
                let e, t, i;
                return (n, s) => {
                    for (t = -1,
                    e = n.length; e - t > 1; )
                        n[i = e + t >> 1] <= s ? t = i : e = i;
                    return e
                }
            }();
            let n, s;
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (s = i(this.x, e),
                n = s - 1,
                (e - this.x[n]) * (this.y[s] - this.y[n]) / (this.x[s] - this.x[n]) + this.y[n]) : 0
            }
            ,
            this
        },
        getInterpolateFunction(e) {
            const t = this;
            t.controller.spline || (t.controller.spline = t.params.loop ? new K.LinearSpline(t.slidesGrid,e.slidesGrid) : new K.LinearSpline(t.snapGrid,e.snapGrid))
        },
        setTranslate(e, t) {
            const i = this
              , n = i.controller.control;
            let s, r;
            function a(e) {
                const t = i.rtlTranslate ? -i.translate : i.translate;
                "slide" === i.params.controller.by && (i.controller.getInterpolateFunction(e),
                r = -i.controller.spline.interpolate(-t)),
                r && "container" !== i.params.controller.by || (s = (e.maxTranslate() - e.minTranslate()) / (i.maxTranslate() - i.minTranslate()),
                r = (t - i.minTranslate()) * s + e.minTranslate()),
                i.params.controller.inverse && (r = e.maxTranslate() - r),
                e.updateProgress(r),
                e.setTranslate(r, i),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            if (Array.isArray(n))
                for (let e = 0; e < n.length; e += 1)
                    n[e] !== t && n[e]instanceof D && a(n[e]);
            else
                n instanceof D && t !== n && a(n)
        },
        setTransition(e, t) {
            const i = this
              , n = i.controller.control;
            let s;
            function r(t) {
                t.setTransition(e, i),
                0 !== e && (t.transitionStart(),
                t.params.autoHeight && d.nextTick( () => {
                    t.updateAutoHeight()
                }
                ),
                t.$wrapperEl.transitionEnd( () => {
                    n && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(),
                    t.transitionEnd())
                }
                ))
            }
            if (Array.isArray(n))
                for (s = 0; s < n.length; s += 1)
                    n[s] !== t && n[s]instanceof D && r(n[s]);
            else
                n instanceof D && t !== n && r(n)
        }
    };
    const Q = {
        makeElFocusable: e => (e.attr("tabIndex", "0"),
        e),
        addElRole: (e, t) => (e.attr("role", t),
        e),
        addElLabel: (e, t) => (e.attr("aria-label", t),
        e),
        disableEl: e => (e.attr("aria-disabled", !0),
        e),
        enableEl: e => (e.attr("aria-disabled", !1),
        e),
        onEnterKey(e) {
            const t = this
              , i = t.params.a11y;
            if (13 !== e.keyCode)
                return;
            const n = a(e.target);
            t.navigation && t.navigation.$nextEl && n.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
            t.isEnd ? t.a11y.notify(i.lastSlideMessage) : t.a11y.notify(i.nextSlideMessage)),
            t.navigation && t.navigation.$prevEl && n.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(),
            t.isBeginning ? t.a11y.notify(i.firstSlideMessage) : t.a11y.notify(i.prevSlideMessage)),
            t.pagination && n.is(`.${t.params.pagination.bulletClass}`) && n[0].click()
        },
        notify(e) {
            const t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""),
            t.html(e))
        },
        updateNavigation() {
            const e = this;
            if (e.params.loop || !e.navigation)
                return;
            const {$nextEl: t, $prevEl: i} = e.navigation;
            i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)),
            t && t.length > 0 && (e.isEnd ? e.a11y.disableEl(t) : e.a11y.enableEl(t))
        },
        updatePagination() {
            const e = this
              , t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each( (i, n) => {
                const s = a(n);
                e.a11y.makeElFocusable(s),
                e.a11y.addElRole(s, "button"),
                e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/{{index}}/, s.index() + 1))
            }
            )
        },
        init() {
            const e = this;
            e.$el.append(e.a11y.liveRegion);
            const t = e.params.a11y;
            let i, n;
            e.navigation && e.navigation.$nextEl && (i = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl),
            i && (e.a11y.makeElFocusable(i),
            e.a11y.addElRole(i, "button"),
            e.a11y.addElLabel(i, t.nextSlideMessage),
            i.on("keydown", e.a11y.onEnterKey)),
            n && (e.a11y.makeElFocusable(n),
            e.a11y.addElRole(n, "button"),
            e.a11y.addElLabel(n, t.prevSlideMessage),
            n.on("keydown", e.a11y.onEnterKey)),
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
        },
        destroy() {
            const e = this;
            let t, i;
            e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove(),
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl),
            t && t.off("keydown", e.a11y.onEnterKey),
            i && i.off("keydown", e.a11y.onEnterKey),
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
        }
    };
    const Z = {
        init() {
            const e = this;
            if (!e.params.history)
                return;
            if (!s.history || !s.history.pushState)
                return e.params.history.enabled = !1,
                void (e.params.hashNavigation.enabled = !0);
            const t = e.history;
            t.initialized = !0,
            t.paths = Z.getPathValues(),
            (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
            e.params.history.replaceState || s.addEventListener("popstate", e.history.setHistoryPopState))
        },
        destroy() {
            const e = this;
            e.params.history.replaceState || s.removeEventListener("popstate", e.history.setHistoryPopState)
        },
        setHistoryPopState() {
            this.history.paths = Z.getPathValues(),
            this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues() {
            const e = s.location.pathname.slice(1).split("/").filter(e => "" !== e)
              , t = e.length;
            return {
                key: e[t - 2],
                value: e[t - 1]
            }
        },
        setHistory(e, t) {
            if (!this.history.initialized || !this.params.history.enabled)
                return;
            const i = this.slides.eq(t);
            let n = Z.slugify(i.attr("data-history"));
            s.location.pathname.includes(e) || (n = `${e}/${n}`);
            const r = s.history.state;
            r && r.value === n || (this.params.history.replaceState ? s.history.replaceState({
                value: n
            }, null, n) : s.history.pushState({
                value: n
            }, null, n))
        },
        slugify: e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
        scrollToSlide(e, t, i) {
            const n = this;
            if (t)
                for (let s = 0, r = n.slides.length; s < r; s += 1) {
                    const r = n.slides.eq(s);
                    if (Z.slugify(r.attr("data-history")) === t && !r.hasClass(n.params.slideDuplicateClass)) {
                        const t = r.index();
                        n.slideTo(t, e, i)
                    }
                }
            else
                n.slideTo(0, e, i)
        }
    };
    const J = {
        onHashCange() {
            const e = this
              , t = n.location.hash.replace("#", "");
            if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                const i = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                if (void 0 === i)
                    return;
                e.slideTo(i)
            }
        },
        setHash() {
            const e = this;
            if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                if (e.params.hashNavigation.replaceState && s.history && s.history.replaceState)
                    s.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || "");
                else {
                    const t = e.slides.eq(e.activeIndex)
                      , i = t.attr("data-hash") || t.attr("data-history");
                    n.location.hash = i || ""
                }
        },
        init() {
            const e = this;
            if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)
                return;
            e.hashNavigation.initialized = !0;
            const t = n.location.hash.replace("#", "");
            if (t) {
                const i = 0;
                for (let n = 0, s = e.slides.length; n < s; n += 1) {
                    const s = e.slides.eq(n);
                    if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
                        const t = s.index();
                        e.slideTo(t, i, e.params.runCallbacksOnInit, !0)
                    }
                }
            }
            e.params.hashNavigation.watchState && a(s).on("hashchange", e.hashNavigation.onHashCange)
        },
        destroy() {
            const e = this;
            e.params.hashNavigation.watchState && a(s).off("hashchange", e.hashNavigation.onHashCange)
        }
    };
    const ee = {
        run() {
            const e = this
              , t = e.slides.eq(e.activeIndex);
            let i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            e.autoplay.timeout = d.nextTick( () => {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")),
                e.params.cssMode && e.autoplay.running && e.autoplay.run()
            }
            , i)
        },
        start() {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0,
            this.emit("autoplayStart"),
            this.autoplay.run(),
            !0))
        },
        stop() {
            const e = this;
            return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout),
            e.autoplay.timeout = void 0),
            e.autoplay.running = !1,
            e.emit("autoplayStop"),
            !0))
        },
        pause(e) {
            const t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            t.autoplay.paused = !0,
            0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd),
            t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1,
            t.autoplay.run())))
        }
    };
    const te = {
        setTranslate() {
            const e = this
              , {slides: t} = e;
            for (let i = 0; i < t.length; i += 1) {
                const t = e.slides.eq(i);
                let n = -t[0].swiperSlideOffset;
                e.params.virtualTranslate || (n -= e.translate);
                let s = 0;
                e.isHorizontal() || (s = n,
                n = 0);
                const r = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                t.css({
                    opacity: r
                }).transform(`translate3d(${n}px, ${s}px, 0px)`)
            }
        },
        setTransition(e) {
            const t = this
              , {slides: i, $wrapperEl: n} = t;
            if (i.transition(e),
            t.params.virtualTranslate && 0 !== e) {
                let e = !1;
                i.transitionEnd( () => {
                    if (e)
                        return;
                    if (!t || t.destroyed)
                        return;
                    e = !0,
                    t.animating = !1;
                    const i = ["webkitTransitionEnd", "transitionend"];
                    for (let e = 0; e < i.length; e += 1)
                        n.trigger(i[e])
                }
                )
            }
        }
    };
    const ie = {
        setTranslate() {
            const {$el: e, $wrapperEl: t, slides: i, width: n, height: s, rtlTranslate: r, size: o} = this
              , l = this.params.cubeEffect
              , d = this.isHorizontal()
              , c = this.virtual && this.params.virtual.enabled;
            let u, p = 0;
            l.shadow && (d ? (0 === (u = t.find(".swiper-cube-shadow")).length && (u = a('<div class="swiper-cube-shadow"></div>'),
            t.append(u)),
            u.css({
                height: `${n}px`
            })) : 0 === (u = e.find(".swiper-cube-shadow")).length && (u = a('<div class="swiper-cube-shadow"></div>'),
            e.append(u)));
            for (let e = 0; e < i.length; e += 1) {
                const t = i.eq(e);
                let n = e;
                c && (n = parseInt(t.attr("data-swiper-slide-index"), 10));
                let s = 90 * n
                  , u = Math.floor(s / 360);
                r && (s = -s,
                u = Math.floor(-s / 360));
                const h = Math.max(Math.min(t[0].progress, 1), -1);
                let f = 0
                  , m = 0
                  , g = 0;
                n % 4 == 0 ? (f = 4 * -u * o,
                g = 0) : (n - 1) % 4 == 0 ? (f = 0,
                g = 4 * -u * o) : (n - 2) % 4 == 0 ? (f = o + 4 * u * o,
                g = o) : (n - 3) % 4 == 0 && (f = -o,
                g = 3 * o + 4 * o * u),
                r && (f = -f),
                d || (m = f,
                f = 0);
                const v = `rotateX(${d ? 0 : -s}deg) rotateY(${d ? s : 0}deg) translate3d(${f}px, ${m}px, ${g}px)`;
                if (h <= 1 && h > -1 && (p = 90 * n + 90 * h,
                r && (p = 90 * -n - 90 * h)),
                t.transform(v),
                l.slideShadows) {
                    let e = d ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                      , i = d ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                    0 === e.length && (e = a(`<div class="swiper-slide-shadow-${d ? "left" : "top"}"></div>`),
                    t.append(e)),
                    0 === i.length && (i = a(`<div class="swiper-slide-shadow-${d ? "right" : "bottom"}"></div>`),
                    t.append(i)),
                    e.length && (e[0].style.opacity = Math.max(-h, 0)),
                    i.length && (i[0].style.opacity = Math.max(h, 0))
                }
            }
            if (t.css({
                "-webkit-transform-origin": `50% 50% -${o / 2}px`,
                "-moz-transform-origin": `50% 50% -${o / 2}px`,
                "-ms-transform-origin": `50% 50% -${o / 2}px`,
                "transform-origin": `50% 50% -${o / 2}px`
            }),
            l.shadow)
                if (d)
                    u.transform(`translate3d(0px, ${n / 2 + l.shadowOffset}px, ${-n / 2}px) rotateX(90deg) rotateZ(0deg) scale(${l.shadowScale})`);
                else {
                    const e = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90)
                      , t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2)
                      , i = l.shadowScale
                      , n = l.shadowScale / t
                      , r = l.shadowOffset;
                    u.transform(`scale3d(${i}, 1, ${n}) translate3d(0px, ${s / 2 + r}px, ${-s / 2 / n}px) rotateX(-90deg)`)
                }
            const h = k.isSafari || k.isUiWebView ? -o / 2 : 0;
            t.transform(`translate3d(0px,0,${h}px) rotateX(${this.isHorizontal() ? 0 : p}deg) rotateY(${this.isHorizontal() ? -p : 0}deg)`)
        },
        setTransition(e) {
            const {$el: t, slides: i} = this;
            i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    };
    const ne = {
        setTranslate() {
            const e = this
              , {slides: t, rtlTranslate: i} = e;
            for (let n = 0; n < t.length; n += 1) {
                const s = t.eq(n);
                let r = s[0].progress;
                e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                let o = -180 * r
                  , l = 0
                  , d = -s[0].swiperSlideOffset
                  , c = 0;
                if (e.isHorizontal() ? i && (o = -o) : (c = d,
                d = 0,
                l = -o,
                o = 0),
                s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length,
                e.params.flipEffect.slideShadows) {
                    let t = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top")
                      , i = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                    0 === t.length && (t = a(`<div class="swiper-slide-shadow-${e.isHorizontal() ? "left" : "top"}"></div>`),
                    s.append(t)),
                    0 === i.length && (i = a(`<div class="swiper-slide-shadow-${e.isHorizontal() ? "right" : "bottom"}"></div>`),
                    s.append(i)),
                    t.length && (t[0].style.opacity = Math.max(-r, 0)),
                    i.length && (i[0].style.opacity = Math.max(r, 0))
                }
                s.transform(`translate3d(${d}px, ${c}px, 0px) rotateX(${l}deg) rotateY(${o}deg)`)
            }
        },
        setTransition(e) {
            const t = this
              , {slides: i, activeIndex: n, $wrapperEl: s} = t;
            if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            t.params.virtualTranslate && 0 !== e) {
                let e = !1;
                i.eq(n).transitionEnd((function() {
                    if (e)
                        return;
                    if (!t || t.destroyed)
                        return;
                    e = !0,
                    t.animating = !1;
                    const i = ["webkitTransitionEnd", "transitionend"];
                    for (let e = 0; e < i.length; e += 1)
                        s.trigger(i[e])
                }
                ))
            }
        }
    };
    const se = {
        setTranslate() {
            const {width: e, height: t, slides: i, $wrapperEl: n, slidesSizesGrid: s} = this
              , r = this.params.coverflowEffect
              , o = this.isHorizontal()
              , l = this.translate
              , d = o ? e / 2 - l : t / 2 - l
              , u = o ? r.rotate : -r.rotate
              , p = r.depth;
            for (let e = 0, t = i.length; e < t; e += 1) {
                const t = i.eq(e)
                  , n = s[e]
                  , l = (d - t[0].swiperSlideOffset - n / 2) / n * r.modifier;
                let c = o ? u * l : 0
                  , h = o ? 0 : u * l
                  , f = -p * Math.abs(l)
                  , m = o ? 0 : r.stretch * l
                  , g = o ? r.stretch * l : 0;
                Math.abs(g) < .001 && (g = 0),
                Math.abs(m) < .001 && (m = 0),
                Math.abs(f) < .001 && (f = 0),
                Math.abs(c) < .001 && (c = 0),
                Math.abs(h) < .001 && (h = 0);
                const v = `translate3d(${g}px,${m}px,${f}px)  rotateX(${h}deg) rotateY(${c}deg)`;
                if (t.transform(v),
                t[0].style.zIndex = 1 - Math.abs(Math.round(l)),
                r.slideShadows) {
                    let e = o ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                      , i = o ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                    0 === e.length && (e = a(`<div class="swiper-slide-shadow-${o ? "left" : "top"}"></div>`),
                    t.append(e)),
                    0 === i.length && (i = a(`<div class="swiper-slide-shadow-${o ? "right" : "bottom"}"></div>`),
                    t.append(i)),
                    e.length && (e[0].style.opacity = l > 0 ? l : 0),
                    i.length && (i[0].style.opacity = -l > 0 ? -l : 0)
                }
            }
            if (c.pointerEvents || c.prefixedPointerEvents) {
                n[0].style.perspectiveOrigin = `${d}px 50%`
            }
        },
        setTransition(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    };
    const re = {
        init() {
            const e = this
              , {thumbs: t} = e.params
              , i = e.constructor;
            t.swiper instanceof i ? (e.thumbs.swiper = t.swiper,
            d.extend(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            d.extend(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : d.isObject(t.swiper) && (e.thumbs.swiper = new i(d.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })),
            e.thumbs.swiperCreated = !0),
            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
        },
        onThumbClick() {
            const e = this
              , t = e.thumbs.swiper;
            if (!t)
                return;
            const i = t.clickedIndex
              , n = t.clickedSlide;
            if (n && a(n).hasClass(e.params.thumbs.slideThumbActiveClass))
                return;
            if (null == i)
                return;
            let s;
            if (s = t.params.loop ? parseInt(a(t.clickedSlide).attr("data-swiper-slide-index"), 10) : i,
            e.params.loop) {
                let t = e.activeIndex;
                e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(),
                e._clientLeft = e.$wrapperEl[0].clientLeft,
                t = e.activeIndex);
                const i = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${s}"]`).eq(0).index()
                  , n = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${s}"]`).eq(0).index();
                s = void 0 === i ? n : void 0 === n ? i : n - t < t - i ? n : i
            }
            e.slideTo(s)
        },
        update(e) {
            const t = this
              , i = t.thumbs.swiper;
            if (!i)
                return;
            const n = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
            if (t.realIndex !== i.realIndex) {
                let s, r = i.activeIndex;
                if (i.params.loop) {
                    i.slides.eq(r).hasClass(i.params.slideDuplicateClass) && (i.loopFix(),
                    i._clientLeft = i.$wrapperEl[0].clientLeft,
                    r = i.activeIndex);
                    const e = i.slides.eq(r).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index()
                      , n = i.slides.eq(r).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                    s = void 0 === e ? n : void 0 === n ? e : n - r == r - e ? r : n - r < r - e ? n : e
                } else
                    s = t.realIndex;
                i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(s) < 0 && (i.params.centeredSlides ? s = s > r ? s - Math.floor(n / 2) + 1 : s + Math.floor(n / 2) - 1 : s > r && (s = s - n + 1),
                i.slideTo(s, e ? 0 : void 0))
            }
            let s = 1;
            const r = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (s = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (s = 1),
            s = Math.floor(s),
            i.slides.removeClass(r),
            i.params.loop || i.params.virtual && i.params.virtual.enabled)
                for (let e = 0; e < s; e += 1)
                    i.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(r);
            else
                for (let e = 0; e < s; e += 1)
                    i.slides.eq(t.realIndex + e).addClass(r)
        }
    };
    const ae = [B, I, L, N, O, R, X, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create() {
            d.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: F.enable.bind(this),
                    disable: F.disable.bind(this),
                    handle: F.handle.bind(this),
                    handleMouseEnter: F.handleMouseEnter.bind(this),
                    handleMouseLeave: F.handleMouseLeave.bind(this),
                    animateSlider: F.animateSlider.bind(this),
                    releaseScroll: F.releaseScroll.bind(this),
                    lastScrollTime: d.now(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: []
                }
            })
        },
        on: {
            init() {
                const e = this;
                !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(),
                e.params.mousewheel.enabled && e.mousewheel.enable()
            },
            destroy() {
                const e = this;
                e.params.cssMode && e.mousewheel.enable(),
                e.mousewheel.enabled && e.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create() {
            d.extend(this, {
                navigation: {
                    init: W.init.bind(this),
                    update: W.update.bind(this),
                    destroy: W.destroy.bind(this),
                    onNextClick: W.onNextClick.bind(this),
                    onPrevClick: W.onPrevClick.bind(this)
                }
            })
        },
        on: {
            init() {
                this.navigation.init(),
                this.navigation.update()
            },
            toEdge() {
                this.navigation.update()
            },
            fromEdge() {
                this.navigation.update()
            },
            destroy() {
                this.navigation.destroy()
            },
            click(e) {
                const t = this
                  , {$nextEl: i, $prevEl: n} = t.navigation;
                if (t.params.navigation.hideOnClick && !a(e.target).is(n) && !a(e.target).is(i)) {
                    let e;
                    i ? e = i.hasClass(t.params.navigation.hiddenClass) : n && (e = n.hasClass(t.params.navigation.hiddenClass)),
                    !0 === e ? t.emit("navigationShow", t) : t.emit("navigationHide", t),
                    i && i.toggleClass(t.params.navigation.hiddenClass),
                    n && n.toggleClass(t.params.navigation.hiddenClass)
                }
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create() {
            d.extend(this, {
                pagination: {
                    init: j.init.bind(this),
                    render: j.render.bind(this),
                    update: j.update.bind(this),
                    destroy: j.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init() {
                this.pagination.init(),
                this.pagination.render(),
                this.pagination.update()
            },
            activeIndexChange() {
                const e = this;
                e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update()
            },
            snapIndexChange() {
                const e = this;
                e.params.loop || e.pagination.update()
            },
            slidesLengthChange() {
                const e = this;
                e.params.loop && (e.pagination.render(),
                e.pagination.update())
            },
            snapGridLengthChange() {
                const e = this;
                e.params.loop || (e.pagination.render(),
                e.pagination.update())
            },
            destroy() {
                this.pagination.destroy()
            },
            click(e) {
                const t = this;
                if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !a(e.target).hasClass(t.params.pagination.bulletClass)) {
                    !0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t),
                    t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
                }
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create() {
            d.extend(this, {
                scrollbar: {
                    init: Y.init.bind(this),
                    destroy: Y.destroy.bind(this),
                    updateSize: Y.updateSize.bind(this),
                    setTranslate: Y.setTranslate.bind(this),
                    setTransition: Y.setTransition.bind(this),
                    enableDraggable: Y.enableDraggable.bind(this),
                    disableDraggable: Y.disableDraggable.bind(this),
                    setDragPosition: Y.setDragPosition.bind(this),
                    getPointerPosition: Y.getPointerPosition.bind(this),
                    onDragStart: Y.onDragStart.bind(this),
                    onDragMove: Y.onDragMove.bind(this),
                    onDragEnd: Y.onDragEnd.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init() {
                this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate()
            },
            update() {
                this.scrollbar.updateSize()
            },
            resize() {
                this.scrollbar.updateSize()
            },
            observerUpdate() {
                this.scrollbar.updateSize()
            },
            setTranslate() {
                this.scrollbar.setTranslate()
            },
            setTransition(e) {
                this.scrollbar.setTransition(e)
            },
            destroy() {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create() {
            d.extend(this, {
                parallax: {
                    setTransform: _.setTransform.bind(this),
                    setTranslate: _.setTranslate.bind(this),
                    setTransition: _.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            init() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTranslate() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTransition(e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create() {
            const e = this
              , t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(i => {
                t[i] = q[i].bind(e)
            }
            ),
            d.extend(e, {
                zoom: t
            });
            let i = 1;
            Object.defineProperty(e.zoom, "scale", {
                get: () => i,
                set(t) {
                    if (i !== t) {
                        const i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0
                          , n = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                        e.emit("zoomChange", t, i, n)
                    }
                    i = t
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.params.zoom.enabled && e.zoom.enable()
            },
            destroy() {
                this.zoom.disable()
            },
            touchStart(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            },
            touchEnd(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            },
            doubleTap(e) {
                const t = this;
                t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
            },
            transitionEnd() {
                const e = this;
                e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
            },
            slideChange() {
                const e = this;
                e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create() {
            d.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: U.load.bind(this),
                    loadInSlide: U.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                const e = this;
                e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
            },
            init() {
                const e = this;
                e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
            },
            scroll() {
                const e = this;
                e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
            },
            resize() {
                const e = this;
                e.params.lazy.enabled && e.lazy.load()
            },
            scrollbarDragMove() {
                const e = this;
                e.params.lazy.enabled && e.lazy.load()
            },
            transitionStart() {
                const e = this;
                e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
            },
            transitionEnd() {
                const e = this;
                e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
            },
            slideChange() {
                const e = this;
                e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create() {
            d.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: K.getInterpolateFunction.bind(this),
                    setTranslate: K.setTranslate.bind(this),
                    setTransition: K.setTransition.bind(this)
                }
            })
        },
        on: {
            update() {
                const e = this;
                e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                delete e.controller.spline)
            },
            resize() {
                const e = this;
                e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                delete e.controller.spline)
            },
            observerUpdate() {
                const e = this;
                e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                delete e.controller.spline)
            },
            setTranslate(e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            },
            setTransition(e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create() {
            const e = this;
            d.extend(e, {
                a11y: {
                    liveRegion: a(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
                }
            }),
            Object.keys(Q).forEach(t => {
                e.a11y[t] = Q[t].bind(e)
            }
            )
        },
        on: {
            init() {
                this.params.a11y.enabled && (this.a11y.init(),
                this.a11y.updateNavigation())
            },
            toEdge() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate() {
                this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy() {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create() {
            d.extend(this, {
                history: {
                    init: Z.init.bind(this),
                    setHistory: Z.setHistory.bind(this),
                    setHistoryPopState: Z.setHistoryPopState.bind(this),
                    scrollToSlide: Z.scrollToSlide.bind(this),
                    destroy: Z.destroy.bind(this)
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.params.history.enabled && e.history.init()
            },
            destroy() {
                const e = this;
                e.params.history.enabled && e.history.destroy()
            },
            transitionEnd() {
                const e = this;
                e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
            },
            slideChange() {
                const e = this;
                e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create() {
            d.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: J.init.bind(this),
                    destroy: J.destroy.bind(this),
                    setHash: J.setHash.bind(this),
                    onHashCange: J.onHashCange.bind(this)
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.params.hashNavigation.enabled && e.hashNavigation.init()
            },
            destroy() {
                const e = this;
                e.params.hashNavigation.enabled && e.hashNavigation.destroy()
            },
            transitionEnd() {
                const e = this;
                e.hashNavigation.initialized && e.hashNavigation.setHash()
            },
            slideChange() {
                const e = this;
                e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create() {
            const e = this;
            d.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: ee.run.bind(e),
                    start: ee.start.bind(e),
                    stop: ee.stop.bind(e),
                    pause: ee.pause.bind(e),
                    onVisibilityChange() {
                        "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(),
                        "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(),
                        e.autoplay.paused = !1)
                    },
                    onTransitionEnd(t) {
                        e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd),
                        e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd),
                        e.autoplay.paused = !1,
                        e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.params.autoplay.enabled && (e.autoplay.start(),
                document.addEventListener("visibilitychange", e.autoplay.onVisibilityChange))
            },
            beforeTransitionStart(e, t) {
                const i = this;
                i.autoplay.running && (t || !i.params.autoplay.disableOnInteraction ? i.autoplay.pause(e) : i.autoplay.stop())
            },
            sliderFirstMove() {
                const e = this;
                e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
            },
            touchEnd() {
                const e = this;
                e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
            },
            destroy() {
                const e = this;
                e.autoplay.running && e.autoplay.stop(),
                document.removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create() {
            d.extend(this, {
                fadeEffect: {
                    setTranslate: te.setTranslate.bind(this),
                    setTransition: te.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                if ("fade" !== this.params.effect)
                    return;
                this.classNames.push(`${this.params.containerModifierClass}fade`);
                const e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                };
                d.extend(this.params, e),
                d.extend(this.originalParams, e)
            },
            setTranslate() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create() {
            d.extend(this, {
                cubeEffect: {
                    setTranslate: ie.setTranslate.bind(this),
                    setTransition: ie.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                if ("cube" !== this.params.effect)
                    return;
                this.classNames.push(`${this.params.containerModifierClass}cube`),
                this.classNames.push(`${this.params.containerModifierClass}3d`);
                const e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0
                };
                d.extend(this.params, e),
                d.extend(this.originalParams, e)
            },
            setTranslate() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition(e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create() {
            d.extend(this, {
                flipEffect: {
                    setTranslate: ne.setTranslate.bind(this),
                    setTransition: ne.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                if ("flip" !== this.params.effect)
                    return;
                this.classNames.push(`${this.params.containerModifierClass}flip`),
                this.classNames.push(`${this.params.containerModifierClass}3d`);
                const e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                };
                d.extend(this.params, e),
                d.extend(this.originalParams, e)
            },
            setTranslate() {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition(e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create() {
            d.extend(this, {
                coverflowEffect: {
                    setTranslate: se.setTranslate.bind(this),
                    setTransition: se.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                "coverflow" === this.params.effect && (this.classNames.push(`${this.params.containerModifierClass}coverflow`),
                this.classNames.push(`${this.params.containerModifierClass}3d`),
                this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            setTranslate() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition(e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                multipleActiveThumbs: !0,
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create() {
            d.extend(this, {
                thumbs: {
                    swiper: null,
                    init: re.init.bind(this),
                    update: re.update.bind(this),
                    onThumbClick: re.onThumbClick.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                const {thumbs: e} = this.params;
                e && e.swiper && (this.thumbs.init(),
                this.thumbs.update(!0))
            },
            slideChange() {
                this.thumbs.swiper && this.thumbs.update()
            },
            update() {
                this.thumbs.swiper && this.thumbs.update()
            },
            resize() {
                this.thumbs.swiper && this.thumbs.update()
            },
            observerUpdate() {
                this.thumbs.swiper && this.thumbs.update()
            },
            setTransition(e) {
                const t = this.thumbs.swiper;
                t && t.setTransition(e)
            },
            beforeDestroy() {
                const e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    void 0 === D.use && (D.use = D.Class.use,
    D.installModule = D.Class.installModule),
    D.use(ae);
    t.a = D
}
, function(e, t, i) {
    "use strict";
    i.r(t);
    i(6),
    i(7),
    i(12),
    i(17)
}
, function(e, t, i) {}
, function(e, t, i) {
    (function(e) {
        var t = [];
        t.push("to-top"),
        t.push("register-fail", "register-success"),
        t.forEach((function(t) {
            e('.icon[data-icon="' + t + '"]').html(i(8)("./" + t + ".svg"))
        }
        ))
    }
    ).call(this, i(0))
}
, function(e, t, i) {
    var n = {
        "./register-fail.svg": 9,
        "./register-success.svg": 10,
        "./to-top.svg": 11
    };
    function s(e) {
        var t = r(e);
        return i(t)
    }
    function r(e) {
        if (!i.o(n, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND",
            t
        }
        return n[e]
    }
    s.keys = function() {
        return Object.keys(n)
    }
    ,
    s.resolve = r,
    e.exports = s,
    s.id = 8
}
, function(e, t) {
    e.exports = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2"><circle class="path circle" fill="none" stroke="#ff3419" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"></circle><line class="path line" fill="none" stroke="#ff3419" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"></line><line class="path line" fill="none" stroke="#ff3419" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"></line></svg>'
}
, function(e, t) {
    e.exports = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2"><circle class="path circle" fill="none" stroke="#ffd900" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"></circle><polyline class="path check" fill="none" stroke="#ffd900" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "></polyline></svg>'
}
, function(e, t) {
    e.exports = '<svg viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 11.5L9.5 5.5L3 11.5L0.5 8.59061L9.5 0.5L18.5 8.59061L16 11.5Z" fill="white"></path></svg>'
}
, function(e, t, i) {
    "use strict";
    (function(e) {
        i(13);
        var t = i(4)
          , n = (i(14),
        i(1))
          , s = i.n(n)
          , r = i(2)
          , a = i.n(r);
        if (e((function() {
            if (e(".features__carousel").length > 0)
                new t.a(".features__carousel > .swiper-container",{
                    effect: "coverflow",
                    grabCursor: !0,
                    centeredSlides: !0,
                    slidesPerView: "auto",
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        slideShadows: !1
                    },
                    pagination: {
                        el: ".swiper-pagination"
                    },
                    loopedSlides: 2,
                    loop: !0,
                    autoplay: {
                        delay: 5e3
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                })
        }
        )),
        e("body").outerWidth() > 768) {
            var o = e(".parallax__wrapper")[0]
              , l = (new s.a(o,{
                relativeInput: !0
            }),
            e(".parallax__wrapper")[1]);
            new s.a(l,{
                relativeInput: !0
            })
        }
        switch (new a.a(window.navigator.userAgent).os()) {
        case "AndroidOS":
            e(".actionRegister").each((function() {
                e(this).attr("href", "#popupRegister-googleplay")
            }
            ));
            break;
        case "iOS":
            e(".actionRegister").each((function() {
                e(this).attr("href", "#popupRegister")
            }
            ));
            break;
        default:
            e(".actionRegister").attr("href", "#popupChooseOS")
        }
    }
    ).call(this, i(0))
}
, function(e, t, i) {
    !function(t, i) {
        var n = function(e, t) {
            "use strict";
            var i, n;
            if (function() {
                var t, i = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: .8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125
                };
                for (t in n = e.lazySizesConfig || e.lazysizesConfig || {},
                i)
                    t in n || (n[t] = i[t])
            }(),
            !t || !t.getElementsByClassName)
                return {
                    init: function() {},
                    cfg: n,
                    noSupport: !0
                };
            var s = t.documentElement
              , r = e.Date
              , a = e.HTMLPictureElement
              , o = e.addEventListener
              , l = e.setTimeout
              , d = e.requestAnimationFrame || l
              , c = e.requestIdleCallback
              , u = /^picture$/i
              , p = ["load", "error", "lazyincluded", "_lazyloaded"]
              , h = {}
              , f = Array.prototype.forEach
              , m = function(e, t) {
                return h[t] || (h[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
                h[t].test(e.getAttribute("class") || "") && h[t]
            }
              , g = function(e, t) {
                m(e, t) || e.setAttribute("class", (e.getAttribute("class") || "").trim() + " " + t)
            }
              , v = function(e, t) {
                var i;
                (i = m(e, t)) && e.setAttribute("class", (e.getAttribute("class") || "").replace(i, " "))
            }
              , T = function(e, t, i) {
                var n = i ? "addEventListener" : "removeEventListener";
                i && T(e, t),
                p.forEach((function(i) {
                    e[n](i, t)
                }
                ))
            }
              , b = function(e, n, s, r, a) {
                var o = t.createEvent("Event");
                return s || (s = {}),
                s.instance = i,
                o.initEvent(n, !r, !a),
                o.detail = s,
                e.dispatchEvent(o),
                o
            }
              , y = function(t, i) {
                var s;
                !a && (s = e.picturefill || n.pf) ? (i && i.src && !t.getAttribute("srcset") && t.setAttribute("srcset", i.src),
                s({
                    reevaluate: !0,
                    elements: [t]
                })) : i && i.src && (t.src = i.src)
            }
              , S = function(e, t) {
                return (getComputedStyle(e, null) || {})[t]
            }
              , w = function(e, t, i) {
                for (i = i || e.offsetWidth; i < n.minSize && t && !e._lazysizesWidth; )
                    i = t.offsetWidth,
                    t = t.parentNode;
                return i
            }
              , C = (he = [],
            fe = [],
            me = he,
            ge = function() {
                var e = me;
                for (me = he.length ? fe : he,
                ue = !0,
                pe = !1; e.length; )
                    e.shift()();
                ue = !1
            }
            ,
            ve = function(e, i) {
                ue && !i ? e.apply(this, arguments) : (me.push(e),
                pe || (pe = !0,
                (t.hidden ? l : d)(ge)))
            }
            ,
            ve._lsFlush = ge,
            ve)
              , x = function(e, t) {
                return t ? function() {
                    C(e)
                }
                : function() {
                    var t = this
                      , i = arguments;
                    C((function() {
                        e.apply(t, i)
                    }
                    ))
                }
            }
              , E = function(e) {
                var t, i, n = function() {
                    t = null,
                    e()
                }, s = function() {
                    var e = r.now() - i;
                    e < 99 ? l(s, 99 - e) : (c || n)(n)
                };
                return function() {
                    i = r.now(),
                    t || (t = l(s, 99))
                }
            }
              , M = (j = /^img$/i,
            Y = /^iframe$/i,
            _ = "onscroll"in e && !/(gle|ing)bot/.test(navigator.userAgent),
            q = 0,
            U = 0,
            K = -1,
            Q = function(e) {
                U--,
                (!e || U < 0 || !e.target) && (U = 0)
            }
            ,
            Z = function(e) {
                return null == W && (W = "hidden" == S(t.body, "visibility")),
                W || !("hidden" == S(e.parentNode, "visibility") && "hidden" == S(e, "visibility"))
            }
            ,
            J = function(e, i) {
                var n, r = e, a = Z(e);
                for (R -= i,
                F += i,
                V -= i,
                X += i; a && (r = r.offsetParent) && r != t.body && r != s; )
                    (a = (S(r, "opacity") || 1) > 0) && "visible" != S(r, "overflow") && (n = r.getBoundingClientRect(),
                    a = X > n.left && V < n.right && F > n.top - 1 && R < n.bottom + 1);
                return a
            }
            ,
            ee = function() {
                var e, r, a, o, l, d, c, u, p, h, f, m, g = i.elements;
                if ((N = n.loadMode) && U < 8 && (e = g.length)) {
                    for (r = 0,
                    K++; r < e; r++)
                        if (g[r] && !g[r]._lazyRace)
                            if (!_ || i.prematureUnveil && i.prematureUnveil(g[r]))
                                oe(g[r]);
                            else if ((u = g[r].getAttribute("data-expand")) && (d = 1 * u) || (d = q),
                            h || (h = !n.expand || n.expand < 1 ? s.clientHeight > 500 && s.clientWidth > 500 ? 500 : 370 : n.expand,
                            i._defEx = h,
                            f = h * n.expFactor,
                            m = n.hFac,
                            W = null,
                            q < f && U < 1 && K > 2 && N > 2 && !t.hidden ? (q = f,
                            K = 0) : q = N > 1 && K > 1 && U < 6 ? h : 0),
                            p !== d && (O = innerWidth + d * m,
                            z = innerHeight + d,
                            c = -1 * d,
                            p = d),
                            a = g[r].getBoundingClientRect(),
                            (F = a.bottom) >= c && (R = a.top) <= z && (X = a.right) >= c * m && (V = a.left) <= O && (F || X || V || R) && (n.loadHidden || Z(g[r])) && (k && U < 3 && !u && (N < 3 || K < 4) || J(g[r], d))) {
                                if (oe(g[r]),
                                l = !0,
                                U > 9)
                                    break
                            } else
                                !l && k && !o && U < 4 && K < 4 && N > 2 && (I[0] || n.preloadAfterLoad) && (I[0] || !u && (F || X || V || R || "auto" != g[r].getAttribute(n.sizesAttr))) && (o = I[0] || g[r]);
                    o && !l && oe(o)
                }
            }
            ,
            te = function(e) {
                var t, i = 0, s = n.throttleDelay, a = n.ricTimeout, o = function() {
                    t = !1,
                    i = r.now(),
                    e()
                }, d = c && a > 49 ? function() {
                    c(o, {
                        timeout: a
                    }),
                    a !== n.ricTimeout && (a = n.ricTimeout)
                }
                : x((function() {
                    l(o)
                }
                ), !0);
                return function(e) {
                    var n;
                    (e = !0 === e) && (a = 33),
                    t || (t = !0,
                    (n = s - (r.now() - i)) < 0 && (n = 0),
                    e || n < 9 ? d() : l(d, n))
                }
            }(ee),
            ie = function(e) {
                var t = e.target;
                t._lazyCache ? delete t._lazyCache : (Q(e),
                g(t, n.loadedClass),
                v(t, n.loadingClass),
                T(t, se),
                b(t, "lazyloaded"))
            }
            ,
            ne = x(ie),
            se = function(e) {
                ne({
                    target: e.target
                })
            }
            ,
            re = function(e) {
                var t, i = e.getAttribute(n.srcsetAttr);
                (t = n.customMedia[e.getAttribute("data-media") || e.getAttribute("media")]) && e.setAttribute("media", t),
                i && e.setAttribute("srcset", i)
            }
            ,
            ae = x((function(e, t, i, s, r) {
                var a, o, d, c, p, h;
                (p = b(e, "lazybeforeunveil", t)).defaultPrevented || (s && (i ? g(e, n.autosizesClass) : e.setAttribute("sizes", s)),
                o = e.getAttribute(n.srcsetAttr),
                a = e.getAttribute(n.srcAttr),
                r && (c = (d = e.parentNode) && u.test(d.nodeName || "")),
                h = t.firesLoad || "src"in e && (o || a || c),
                p = {
                    target: e
                },
                g(e, n.loadingClass),
                h && (clearTimeout(L),
                L = l(Q, 2500),
                T(e, se, !0)),
                c && f.call(d.getElementsByTagName("source"), re),
                o ? e.setAttribute("srcset", o) : a && !c && (Y.test(e.nodeName) ? function(e, t) {
                    try {
                        e.contentWindow.location.replace(t)
                    } catch (i) {
                        e.src = t
                    }
                }(e, a) : e.src = a),
                r && (o || c) && y(e, {
                    src: a
                })),
                e._lazyRace && delete e._lazyRace,
                v(e, n.lazyClass),
                C((function() {
                    var t = e.complete && e.naturalWidth > 1;
                    h && !t || (t && g(e, "ls-is-cached"),
                    ie(p),
                    e._lazyCache = !0,
                    l((function() {
                        "_lazyCache"in e && delete e._lazyCache
                    }
                    ), 9)),
                    "lazy" == e.loading && U--
                }
                ), !0)
            }
            )),
            oe = function(e) {
                if (!e._lazyRace) {
                    var t, i = j.test(e.nodeName), s = i && (e.getAttribute(n.sizesAttr) || e.getAttribute("sizes")), r = "auto" == s;
                    (!r && k || !i || !e.getAttribute("src") && !e.srcset || e.complete || m(e, n.errorClass) || !m(e, n.lazyClass)) && (t = b(e, "lazyunveilread").detail,
                    r && P.updateElem(e, !0, e.offsetWidth),
                    e._lazyRace = !0,
                    U++,
                    ae(e, t, r, s, i))
                }
            }
            ,
            le = E((function() {
                n.loadMode = 3,
                te()
            }
            )),
            de = function() {
                3 == n.loadMode && (n.loadMode = 2),
                le()
            }
            ,
            ce = function() {
                k || (r.now() - $ < 999 ? l(ce, 999) : (k = !0,
                n.loadMode = 3,
                te(),
                o("scroll", de, !0)))
            }
            ,
            {
                _: function() {
                    $ = r.now(),
                    i.elements = t.getElementsByClassName(n.lazyClass),
                    I = t.getElementsByClassName(n.lazyClass + " " + n.preloadClass),
                    o("scroll", te, !0),
                    o("resize", te, !0),
                    e.MutationObserver ? new MutationObserver(te).observe(s, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }) : (s.addEventListener("DOMNodeInserted", te, !0),
                    s.addEventListener("DOMAttrModified", te, !0),
                    setInterval(te, 999)),
                    o("hashchange", te, !0),
                    ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function(e) {
                        t.addEventListener(e, te, !0)
                    }
                    )),
                    /d$|^c/.test(t.readyState) ? ce() : (o("load", ce),
                    t.addEventListener("DOMContentLoaded", te),
                    l(ce, 2e4)),
                    i.elements.length ? (ee(),
                    C._lsFlush()) : te()
                },
                checkElems: te,
                unveil: oe,
                _aLSL: de
            })
              , P = (H = x((function(e, t, i, n) {
                var s, r, a;
                if (e._lazysizesWidth = n,
                n += "px",
                e.setAttribute("sizes", n),
                u.test(t.nodeName || ""))
                    for (r = 0,
                    a = (s = t.getElementsByTagName("source")).length; r < a; r++)
                        s[r].setAttribute("sizes", n);
                i.detail.dataAttr || y(e, i.detail)
            }
            )),
            D = function(e, t, i) {
                var n, s = e.parentNode;
                s && (i = w(e, s, i),
                (n = b(e, "lazybeforesizes", {
                    width: i,
                    dataAttr: !!t
                })).defaultPrevented || (i = n.detail.width) && i !== e._lazysizesWidth && H(e, s, n, i))
            }
            ,
            B = E((function() {
                var e, t = G.length;
                if (t)
                    for (e = 0; e < t; e++)
                        D(G[e])
            }
            )),
            {
                _: function() {
                    G = t.getElementsByClassName(n.autosizesClass),
                    o("resize", B)
                },
                checkElems: B,
                updateElem: D
            })
              , A = function() {
                !A.i && t.getElementsByClassName && (A.i = !0,
                P._(),
                M._())
            };
            var G, H, D, B;
            var I, k, L, N, $, O, z, R, V, X, F, W, j, Y, _, q, U, K, Q, Z, J, ee, te, ie, ne, se, re, ae, oe, le, de, ce;
            var ue, pe, he, fe, me, ge, ve;
            return l((function() {
                n.init && A()
            }
            )),
            i = {
                cfg: n,
                autoSizer: P,
                loader: M,
                init: A,
                uP: y,
                aC: g,
                rC: v,
                hC: m,
                fire: b,
                gW: w,
                rAF: C
            }
        }(t, t.document);
        t.lazySizes = n,
        e.exports && (e.exports = n)
    }("undefined" != typeof window ? window : {})
}
, function(e, t, i) {}
, function(e, t) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (i = window)
    }
    e.exports = i
}
, function(e, t) {
    e.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}
, function(e, t, i) {
    "use strict";
    (function(e) {
        i(18),
        i(31),
        i(32);
        e(".navigation").scaleRoot(),
        e(".followPopup").scaleRoot(),
        e(".inner").scaleRoot(),
        e((function() {
            let t = 1 * e("body").outerHeight() / e(".inner").data("scale-ratio");
            e(".outer").css({
                height: t + "px"
            }),
            e("[data-lightbox]").length > 0 && e("[data-lightbox]").each((function() {
                e(this).lightBox({
                    objLightBox: e(this).attr("href"),
                    type: e(this).data("lightbox-type")
                })
            }
            )),
            e("#popupRegister").length > 0 && e("#popupRegister").preregister(),
            e(".scrollDown").on("click touch", () => {
                e("html").animate({
                    scrollTop: 789
                }, 200)
            }
            );
            let i = window.location.href;
            if (i.includes("?")) {
                let t = i.split("?")[1].split("&");
                for (let i = 0, n = t.length; i < n; i++) {
                    let n = t[i].split("=")[0]
                      , s = t[i].split("=")[1];
                    if ("pm_source" == n) {
                        let t = e("#mainIframe")
                          , i = t.attr("src");
                        t.attr("src", i + "?pm_source=" + s)
                    }
                }
            }
            if (window.location.hash)
                switch (window.location.hash.substring(1)) {
                case "giai-thuong":
                    e(".articlebtn-btn-1").trigger("click");
                    break;
                case "the-le":
                    e(".articlebtn-btn-2").trigger("click")
                }
        }
        ))
    }
    ).call(this, i(0))
}
, function(e, t, i) {
    "use strict";
    (function(e) {
        var t = i(3)
          , n = i.n(t);
        function s() {
            return Math.random().toString(36).substring(2, 8)
        }
        e.fn.lightBox = function(t) {
            var i = {
                obj: e(this),
                type: "",
                objLightBox: "",
                animate: {},
                animateToggle: {},
                backgroundClickToClose: !0,
                objClose: e("[data-lightbox-close]")
            }
              , r = e.extend(i, t);
            let a, o, l = {};
            switch (r.type) {
            case "youtube":
                a = s();
                var d = r.obj.attr("href").split("=")[1];
                r.obj.attr("href", "#" + a),
                o = `\n                <div id="${a}" class="popup popup--open-video">\n                    <div class="popup__background"></div>\n                    <div class="popup__content">\n                        <a href="javascript:;" class="popup__close" data-lightbox-close>\n                            <span class="button-img">\n                                <span class="label">Close popup</span>\n                                <span class="popup__close-img"></span>\n                            </span>\n                        </a>\n                    <div class="embed"><div id="${a}_embed" data-youtube-id="${d}"></div></div>\n                    </div>\n                </div>\n            `,
                e(".outer--popup").append(o);
                break;
            case "image":
                a = s();
                let t = r.obj.attr("href");
                r.obj.attr("href", "#" + a),
                o = `\n                <div id="${a}" class="popup popup--open-image">\n                    <div class="popup__background"></div>\n                    <div class="popup__content">\n                        <div class="image"><img src="${t}" /></div>\n                    </div>\n                </div>\n            `,
                e("#renderedPopup").append(o)
            }
            r.obj.on("click", t => {
                if (t.preventDefault(),
                e("body").addClass("open-popup"),
                e(".popup").removeClass("active"),
                "#popupRegister-googleplay" == e(this).attr("href")) {
                    var i = 8
                      , s = setInterval((function() {
                        i--,
                        e("#counter").html(i),
                        0 == i && clearInterval(s)
                    }
                    ), 1e3);
                    setTimeout((function() {
                        e("#dktGP").submit()
                    }
                    ), 9e3)
                }
                "youtube" == e(this).data("lightbox-type") && null == l[e(this).attr("href")] && (l[e(this).attr("href")] = n()(e(this).attr("href").substring(1) + "_embed", {
                    videoId: e(e(this).attr("href") + "_embed").data("youtube-id"),
                    playerVars: {
                        rel: 0,
                        autoplay: 1,
                        color: "white"
                    }
                })),
                "none" != e(this).data("lightbox-type") && (e(e(this).attr("href")).addClass("active"),
                e(e(this).attr("href")).animate(r.animate)),
                "youtube" == e(this).data("lightbox-type") && l[e(this).attr("href")].playVideo()
            }
            ),
            e(".popup__background").length > 0 && e(".popup__background").each((function() {
                e(this).on("click", (function() {
                    e("body").removeClass("open-popup"),
                    e(this).parent().removeClass("active"),
                    e(this).parent().hasClass("popup--open-video") && null != l["#" + e(this).parent().attr("id")] && l["#" + e(this).parent().attr("id")].pauseVideo()
                }
                ))
            }
            )),
            r.objClose.on("click", (function() {
                e("body").removeClass("open-popup"),
                e(".popup").removeClass("active"),
                e(this).parent().parent().hasClass("popup--open-video") && l["#" + e(this).parent().attr("id")].pauseVideo()
            }
            ))
        }
    }
    ).call(this, i(0))
}
, function(e, t, i) {
    "use strict";
    var n;
    /**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/
    n = function() {
        var e = {}
          , t = {};
        return e.on = function(e, i) {
            var n = {
                name: e,
                handler: i
            };
            return t[e] = t[e] || [],
            t[e].unshift(n),
            n
        }
        ,
        e.off = function(e) {
            var i = t[e.name].indexOf(e);
            -1 !== i && t[e.name].splice(i, 1)
        }
        ,
        e.trigger = function(e, i) {
            var n, s = t[e];
            if (s)
                for (n = s.length; n--; )
                    s[n].handler(i)
        }
        ,
        e
    }
    ,
    e.exports = n
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, s = i(21), r = (n = s) && n.__esModule ? n : {
        default: n
    };
    t.default = function(e) {
        return new Promise((function(t) {
            if (window.YT && window.YT.Player && window.YT.Player instanceof Function)
                t(window.YT);
            else {
                var i = "http:" === window.location.protocol ? "http:" : "https:";
                (0,
                r.default)(i + "//www.youtube.com/iframe_api", (function(t) {
                    t && e.trigger("error", t)
                }
                ));
                var n = window.onYouTubeIframeAPIReady;
                window.onYouTubeIframeAPIReady = function() {
                    n && n(),
                    t(window.YT)
                }
            }
        }
        ))
    }
    ,
    e.exports = t.default
}
, function(e, t) {
    function i(e, t) {
        e.onload = function() {
            this.onerror = this.onload = null,
            t(null, e)
        }
        ,
        e.onerror = function() {
            this.onerror = this.onload = null,
            t(new Error("Failed to load " + this.src), e)
        }
    }
    function n(e, t) {
        e.onreadystatechange = function() {
            "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null,
            t(null, e))
        }
    }
    e.exports = function(e, t, s) {
        var r = document.head || document.getElementsByTagName("head")[0]
          , a = document.createElement("script");
        "function" == typeof t && (s = t,
        t = {}),
        t = t || {},
        s = s || function() {}
        ,
        a.type = t.type || "text/javascript",
        a.charset = t.charset || "utf8",
        a.async = !("async"in t) || !!t.async,
        a.src = e,
        t.attrs && function(e, t) {
            for (var i in t)
                e.setAttribute(i, t[i])
        }(a, t.attrs),
        t.text && (a.text = "" + t.text),
        ("onload"in a ? i : n)(a, s),
        a.onload || i(a, s),
        r.appendChild(a)
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = o(i(23))
      , s = o(i(27))
      , r = o(i(28))
      , a = o(i(29));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = (0,
    n.default)("youtube-player")
      , d = {
        proxyEvents: function(e) {
            var t = {}
              , i = function(i) {
                var n = "on" + i.slice(0, 1).toUpperCase() + i.slice(1);
                t[n] = function(t) {
                    l('event "%s"', n, t),
                    e.trigger(i, t)
                }
            }
              , n = !0
              , s = !1
              , a = void 0;
            try {
                for (var o, d = r.default[Symbol.iterator](); !(n = (o = d.next()).done); n = !0) {
                    i(o.value)
                }
            } catch (e) {
                s = !0,
                a = e
            } finally {
                try {
                    !n && d.return && d.return()
                } finally {
                    if (s)
                        throw a
                }
            }
            return t
        },
        promisifyPlayer: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , i = {}
              , n = function(n) {
                t && a.default[n] ? i[n] = function() {
                    for (var t = arguments.length, i = Array(t), s = 0; s < t; s++)
                        i[s] = arguments[s];
                    return e.then((function(e) {
                        var t = a.default[n]
                          , s = e.getPlayerState()
                          , r = e[n].apply(e, i);
                        return t.stateChangeRequired || Array.isArray(t.acceptableStates) && -1 === t.acceptableStates.indexOf(s) ? new Promise((function(i) {
                            e.addEventListener("onStateChange", (function n() {
                                var s = e.getPlayerState()
                                  , r = void 0;
                                "number" == typeof t.timeout && (r = setTimeout((function() {
                                    e.removeEventListener("onStateChange", n),
                                    i()
                                }
                                ), t.timeout)),
                                Array.isArray(t.acceptableStates) && -1 !== t.acceptableStates.indexOf(s) && (e.removeEventListener("onStateChange", n),
                                clearTimeout(r),
                                i())
                            }
                            ))
                        }
                        )).then((function() {
                            return r
                        }
                        )) : r
                    }
                    ))
                }
                : i[n] = function() {
                    for (var t = arguments.length, i = Array(t), s = 0; s < t; s++)
                        i[s] = arguments[s];
                    return e.then((function(e) {
                        return e[n].apply(e, i)
                    }
                    ))
                }
            }
              , r = !0
              , o = !1
              , l = void 0;
            try {
                for (var d, c = s.default[Symbol.iterator](); !(r = (d = c.next()).done); r = !0) {
                    var u = d.value;
                    n(u)
                }
            } catch (e) {
                o = !0,
                l = e
            } finally {
                try {
                    !r && c.return && c.return()
                } finally {
                    if (o)
                        throw l
                }
            }
            return i
        }
    };
    t.default = d,
    e.exports = t.default
}
, function(e, t, i) {
    (function(n) {
        function s() {
            var e;
            try {
                e = t.storage.debug
            } catch (e) {}
            return !e && void 0 !== n && "env"in n && (e = n.env.DEBUG),
            e
        }
        (t = e.exports = i(25)).log = function() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }
        ,
        t.formatArgs = function(e) {
            var i = this.useColors;
            if (e[0] = (i ? "%c" : "") + this.namespace + (i ? " %c" : " ") + e[0] + (i ? "%c " : " ") + "+" + t.humanize(this.diff),
            !i)
                return;
            var n = "color: " + this.color;
            e.splice(1, 0, n, "color: inherit");
            var s = 0
              , r = 0;
            e[0].replace(/%[a-zA-Z%]/g, (function(e) {
                "%%" !== e && (s++,
                "%c" === e && (r = s))
            }
            )),
            e.splice(r, 0, n)
        }
        ,
        t.save = function(e) {
            try {
                null == e ? t.storage.removeItem("debug") : t.storage.debug = e
            } catch (e) {}
        }
        ,
        t.load = s,
        t.useColors = function() {
            if ("undefined" != typeof window && window.process && "renderer" === window.process.type)
                return !0;
            return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }
        ,
        t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
            try {
                return window.localStorage
            } catch (e) {}
        }(),
        t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
        t.formatters.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }
        ,
        t.enable(s())
    }
    ).call(this, i(24))
}
, function(e, t) {
    var i, n, s = e.exports = {};
    function r() {
        throw new Error("setTimeout has not been defined")
    }
    function a() {
        throw new Error("clearTimeout has not been defined")
    }
    function o(e) {
        if (i === setTimeout)
            return setTimeout(e, 0);
        if ((i === r || !i) && setTimeout)
            return i = setTimeout,
            setTimeout(e, 0);
        try {
            return i(e, 0)
        } catch (t) {
            try {
                return i.call(null, e, 0)
            } catch (t) {
                return i.call(this, e, 0)
            }
        }
    }
    !function() {
        try {
            i = "function" == typeof setTimeout ? setTimeout : r
        } catch (e) {
            i = r
        }
        try {
            n = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            n = a
        }
    }();
    var l, d = [], c = !1, u = -1;
    function p() {
        c && l && (c = !1,
        l.length ? d = l.concat(d) : u = -1,
        d.length && h())
    }
    function h() {
        if (!c) {
            var e = o(p);
            c = !0;
            for (var t = d.length; t; ) {
                for (l = d,
                d = []; ++u < t; )
                    l && l[u].run();
                u = -1,
                t = d.length
            }
            l = null,
            c = !1,
            function(e) {
                if (n === clearTimeout)
                    return clearTimeout(e);
                if ((n === a || !n) && clearTimeout)
                    return n = clearTimeout,
                    clearTimeout(e);
                try {
                    n(e)
                } catch (t) {
                    try {
                        return n.call(null, e)
                    } catch (t) {
                        return n.call(this, e)
                    }
                }
            }(e)
        }
    }
    function f(e, t) {
        this.fun = e,
        this.array = t
    }
    function m() {}
    s.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++)
                t[i - 1] = arguments[i];
        d.push(new f(e,t)),
        1 !== d.length || c || o(h)
    }
    ,
    f.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    s.title = "browser",
    s.browser = !0,
    s.env = {},
    s.argv = [],
    s.version = "",
    s.versions = {},
    s.on = m,
    s.addListener = m,
    s.once = m,
    s.off = m,
    s.removeListener = m,
    s.removeAllListeners = m,
    s.emit = m,
    s.prependListener = m,
    s.prependOnceListener = m,
    s.listeners = function(e) {
        return []
    }
    ,
    s.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    s.cwd = function() {
        return "/"
    }
    ,
    s.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    s.umask = function() {
        return 0
    }
}
, function(e, t, i) {
    var n;
    function s(e) {
        function i() {
            if (i.enabled) {
                var e = i
                  , s = +new Date
                  , r = s - (n || s);
                e.diff = r,
                e.prev = n,
                e.curr = s,
                n = s;
                for (var a = new Array(arguments.length), o = 0; o < a.length; o++)
                    a[o] = arguments[o];
                a[0] = t.coerce(a[0]),
                "string" != typeof a[0] && a.unshift("%O");
                var l = 0;
                a[0] = a[0].replace(/%([a-zA-Z%])/g, (function(i, n) {
                    if ("%%" === i)
                        return i;
                    l++;
                    var s = t.formatters[n];
                    if ("function" == typeof s) {
                        var r = a[l];
                        i = s.call(e, r),
                        a.splice(l, 1),
                        l--
                    }
                    return i
                }
                )),
                t.formatArgs.call(e, a),
                (i.log || t.log || console.log.bind(console)).apply(e, a)
            }
        }
        return i.namespace = e,
        i.enabled = t.enabled(e),
        i.useColors = t.useColors(),
        i.color = function(e) {
            var i, n = 0;
            for (i in e)
                n = (n << 5) - n + e.charCodeAt(i),
                n |= 0;
            return t.colors[Math.abs(n) % t.colors.length]
        }(e),
        "function" == typeof t.init && t.init(i),
        i
    }
    (t = e.exports = s.debug = s.default = s).coerce = function(e) {
        return e instanceof Error ? e.stack || e.message : e
    }
    ,
    t.disable = function() {
        t.enable("")
    }
    ,
    t.enable = function(e) {
        t.save(e),
        t.names = [],
        t.skips = [];
        for (var i = ("string" == typeof e ? e : "").split(/[\s,]+/), n = i.length, s = 0; s < n; s++)
            i[s] && ("-" === (e = i[s].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
    }
    ,
    t.enabled = function(e) {
        var i, n;
        for (i = 0,
        n = t.skips.length; i < n; i++)
            if (t.skips[i].test(e))
                return !1;
        for (i = 0,
        n = t.names.length; i < n; i++)
            if (t.names[i].test(e))
                return !0;
        return !1
    }
    ,
    t.humanize = i(26),
    t.names = [],
    t.skips = [],
    t.formatters = {}
}
, function(e, t) {
    var i = 1e3
      , n = 60 * i
      , s = 60 * n
      , r = 24 * s
      , a = 365.25 * r;
    function o(e, t, i) {
        if (!(e < t))
            return e < 1.5 * t ? Math.floor(e / t) + " " + i : Math.ceil(e / t) + " " + i + "s"
    }
    e.exports = function(e, t) {
        t = t || {};
        var l, d = typeof e;
        if ("string" === d && e.length > 0)
            return function(e) {
                if ((e = String(e)).length > 100)
                    return;
                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                if (!t)
                    return;
                var o = parseFloat(t[1]);
                switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return o * a;
                case "days":
                case "day":
                case "d":
                    return o * r;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return o * s;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return o * n;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return o * i;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return o;
                default:
                    return
                }
            }(e);
        if ("number" === d && !1 === isNaN(e))
            return t.long ? o(l = e, r, "day") || o(l, s, "hour") || o(l, n, "minute") || o(l, i, "second") || l + " ms" : function(e) {
                if (e >= r)
                    return Math.round(e / r) + "d";
                if (e >= s)
                    return Math.round(e / s) + "h";
                if (e >= n)
                    return Math.round(e / n) + "m";
                if (e >= i)
                    return Math.round(e / i) + "s";
                return e + "ms"
            }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"],
    e.exports = t.default
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"],
    e.exports = t.default
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, s = i(30), r = (n = s) && n.__esModule ? n : {
        default: n
    };
    t.default = {
        pauseVideo: {
            acceptableStates: [r.default.ENDED, r.default.PAUSED],
            stateChangeRequired: !1
        },
        playVideo: {
            acceptableStates: [r.default.ENDED, r.default.PLAYING],
            stateChangeRequired: !1
        },
        seekTo: {
            acceptableStates: [r.default.ENDED, r.default.PLAYING, r.default.PAUSED],
            stateChangeRequired: !0,
            timeout: 3e3
        }
    },
    e.exports = t.default
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        BUFFERING: 3,
        ENDED: 0,
        PAUSED: 2,
        PLAYING: 1,
        UNSTARTED: -1,
        VIDEO_CUED: 5
    },
    e.exports = t.default
}
, function(e, t, i) {
    (function(e) {
        e.fn.scaleRoot = function(t) {
            var i = {
                obj: e(this),
                designWidth: {
                    desktop: 1920,
                    mobile: 768
                },
                popup: {
                    el: ".popup",
                    elBackground: ".popup__background"
                }
            }
              , n = e.extend(i, t);
            e(window).on("resize", (function() {
                var t = {
                    width: e("body").outerWidth(),
                    height: e("body").outerHeight()
                }
                  , i = n.obj.outerHeight();
                if (t.width > 841) {
                    var s = i * (a = t.width / n.designWidth.desktop)
                      , r = 1 * t.height / a;
                    n.obj.hasClass("mobile"),
                    n.obj.css({
                        transform: "scale(" + a + ")"
                    }),
                    n.obj.parent().css({
                        height: s + "px"
                    }),
                    n.obj.attr("data-scale-ratio", a)
                } else {
                    var a;
                    s = i * (a = t.width / n.designWidth.mobile),
                    r = 1 * t.height / a;
                    console.log(r),
                    n.obj.hasClass("mobile"),
                    n.obj.css({
                        transform: "scale(" + a + ")"
                    }),
                    n.obj.parent().css({
                        height: s + "px"
                    }),
                    console.log(t.height),
                    n.obj.attr("data-scale-ratio", a)
                }
            }
            )).resize()
        }
    }
    ).call(this, i(0))
}
, function(e, t, i) {
    (function(e) {
        function t(e) {
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(e) && e.length > 4
        }
        function i(e) {
            return /^\d*$/.test(e) && 10 == e.length
        }
        function n(t) {
            let i = e.extend({
                el: "",
                content: ""
            }, t);
            e(i.el).parent(".form-control").addClass("form-control--error");
            try {
                e(i.el).siblings(".error").html(i.content)
            } catch (e) {
                console.log(e)
            }
        }
        e.fn.preregister = function(s) {
            var r = {
                obj: e(this),
                elStage: {
                    form: ".form",
                    success: ".success",
                    fail: ".fail"
                },
                elSubmit: "#submit",
                elRetry: "#retry",
                elTotal: "#total",
                elCheat: "#preregisterCheat",
                elMileStones: ".milestones__bar__active",
                elMileStonesPoint: ".milestones__bar__active--point",
                elRewards: ".milestones__rewards",
                percentage: {
                    milestones: [1e4, 5e4, 1e5, 3e5, 5e5, 1e6],
                    ajustDesktop: [7.5, 18, 30, 41, 53, 65],
                    ajustDesktopPoint: [6, 17, 28.5, 40, 51, 63],
                    ajustMobile: [153, 338, 507, 676, 847, 1e3],
                    ajustMobilePoint: [103, 272, 441, 612, 783, 954]
                }
            }
              , a = e.extend(r, s);
            if (a.obj.find(a.elSubmit).bind("click", (function(s) {
                if (e(".form-control").removeClass("form-control--error"),
                s.preventDefault(),
                t(a.obj.find("#email").val()) && i(a.obj.find("#phone").val())) {
                    var r = a.obj.find(a.elStage.form).serialize()
                      , o = domain + "/pre-register.json";
                    e.ajax({
                        url: o,
                        dataType: "json",
                        method: "POST",
                        data: r,
                        success: function(e) {
                            1 != e.regSuccess ? (a.obj.find(a.elStage.form).css({
                                display: "none"
                            }),
                            a.obj.find(a.elStage.fail).addClass("active")) : (a.obj.find(a.elStage.form).css({
                                display: "none"
                            }),
                            a.obj.find(a.elStage.success).addClass("active"),
                            a.obj.find("#registeredEmail").text(a.obj.find("#email").val()))
                        }
                    })
                } else
                    t(a.obj.find("#email").val()) || n({
                        el: "#email",
                        content: "Email không hợp lệ"
                    }),
                    i(a.obj.find("#phone").val()) || n({
                        el: "#phone",
                        content: "Số điện thoại không hợp lệ"
                    }),
                    a.obj.find(a.elStage.form).css({
                        display: "none"
                    }),
                    a.obj.find(a.elStage.fail).addClass("active")
            }
            )),
            a.obj.find(a.elRetry).bind("click", (function(e) {
                a.obj.find(a.elStage.form).css({
                    display: "block"
                }),
                a.obj.find(a.elStage.success).removeClass("active"),
                a.obj.find(a.elStage.fail).removeClass("active")
            }
            )),
            "" != e(a.elTotal).length) {
                var o = domain + "/count-pre-register/" + a.obj.find('input[name="data[event]"]').val() + ".json";
                e.ajax({
                    url: o,
                    dataType: "json",
                    method: "POST",
                    data: {},
                    success: function(t) {
                        var i = parseInt(t.total);
                        if (e(a.elCheat).length > 0) {
                            switch (e(a.elCheat).data("preregister-type")) {
                            case "multiple":
                                i *= parseInt(e(a.elCheat).val());
                                break;
                            case "add":
                                i += parseInt(e(a.elCheat).val())
                            }
                            if (e(a.elTotal).text(i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")),
                            e(a.elMileStones).length > 0)
                                if ({
                                    width: e("body").outerWidth(),
                                    height: e("body").outerHeight()
                                }.width > 841) {
                                    e(a.elMileStones).css({
                                        width: "0%"
                                    }),
                                    e(a.elMileStonesPoint).css({
                                        width: "0%"
                                    });
                                    for (var n = 0, s = a.percentage.milestones.length; n < s; n++)
                                        i >= a.percentage.milestones[n] && (e(a.elMileStones).css({
                                            width: a.percentage.ajustDesktop[n] + "%"
                                        }),
                                        e(a.elRewards).find("li").eq(n).addClass("active"));
                                    for (n = 0,
                                    s = a.percentage.milestones.length; n < s; n++)
                                        i >= a.percentage.milestones[n] && e(a.elMileStonesPoint).css({
                                            width: a.percentage.ajustDesktopPoint[n] + "%"
                                        })
                                } else {
                                    e(a.elMileStones).css({
                                        height: "0px"
                                    }),
                                    e(a.elMileStonesPoint).css({
                                        height: "0px"
                                    });
                                    for (n = 0,
                                    s = a.percentage.milestones.length; n < s; n++)
                                        i >= a.percentage.milestones[n] && (e(a.elMileStones).css({
                                            height: a.percentage.ajustMobile[n] + "px"
                                        }),
                                        e(a.elRewards).find("li").eq(n).addClass("active"));
                                    for (n = 0,
                                    s = a.percentage.milestones.length; n < s; n++)
                                        i >= a.percentage.milestones[n] && e(a.elMileStonesPoint).css({
                                            height: a.percentage.ajustMobilePoint[n] + "px"
                                        })
                                }
                        }
                    }
                })
            }
        }
    }
    ).call(this, i(0))
}
]);
//# sourceMappingURL=app.js.map
