// ProgressBar.js 1.1.1
// https://kimmobrunfeldt.github.io/progressbar.js
// License: MIT

!(function (a) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = a();
  else if ("function" == typeof define && define.amd) define([], a);
  else {
    var b;
    (b =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this),
      (b.ProgressBar = a());
  }
})(function () {
  var a;
  return (function () {
    function a(b, c, d) {
      function e(g, h) {
        if (!c[g]) {
          if (!b[g]) {
            var i = "function" == typeof require && require;
            if (!h && i) return i(g, !0);
            if (f) return f(g, !0);
            var j = new Error("Cannot find module '" + g + "'");
            throw ((j.code = "MODULE_NOT_FOUND"), j);
          }
          var k = (c[g] = { exports: {} });
          b[g][0].call(
            k.exports,
            function (a) {
              return e(b[g][1][a] || a);
            },
            k,
            k.exports,
            a,
            b,
            c,
            d
          );
        }
        return c[g].exports;
      }
      for (
        var f = "function" == typeof require && require, g = 0;
        g < d.length;
        g++
      )
        e(d[g]);
      return e;
    }
    return a;
  })()(
    {
      1: [
        function (a, b, c) {
          (function (a) {
            (function () {
              function d(a, b, c) {
                switch (c.length) {
                  case 0:
                    return a.call(b);
                  case 1:
                    return a.call(b, c[0]);
                  case 2:
                    return a.call(b, c[0], c[1]);
                  case 3:
                    return a.call(b, c[0], c[1], c[2]);
                }
                return a.apply(b, c);
              }
              function e(a, b) {
                for (var c = -1, d = Array(a); ++c < a; ) d[c] = b(c);
                return d;
              }
              function f(a) {
                return function (b) {
                  return a(b);
                };
              }
              function g(a, b) {
                return null == a ? void 0 : a[b];
              }
              function h(a, b) {
                return function (c) {
                  return a(b(c));
                };
              }
              function i(a) {
                var b = -1,
                  c = null == a ? 0 : a.length;
                for (this.clear(); ++b < c; ) {
                  var d = a[b];
                  this.set(d[0], d[1]);
                }
              }
              function j() {
                (this.__data__ = wb ? wb(null) : {}), (this.size = 0);
              }
              function k(a) {
                var b = this.has(a) && delete this.__data__[a];
                return (this.size -= b ? 1 : 0), b;
              }
              function l(a) {
                var b = this.__data__;
                if (wb) {
                  var c = b[a];
                  return c === Ba ? void 0 : c;
                }
                return db.call(b, a) ? b[a] : void 0;
              }
              function m(a) {
                var b = this.__data__;
                return wb ? void 0 !== b[a] : db.call(b, a);
              }
              function n(a, b) {
                var c = this.__data__;
                return (
                  (this.size += this.has(a) ? 0 : 1),
                  (c[a] = wb && void 0 === b ? Ba : b),
                  this
                );
              }
              function o(a) {
                var b = -1,
                  c = null == a ? 0 : a.length;
                for (this.clear(); ++b < c; ) {
                  var d = a[b];
                  this.set(d[0], d[1]);
                }
              }
              function p() {
                (this.__data__ = []), (this.size = 0);
              }
              function q(a) {
                var b = this.__data__,
                  c = J(b, a);
                return (
                  !(c < 0) &&
                  (c == b.length - 1 ? b.pop() : pb.call(b, c, 1),
                  --this.size,
                  !0)
                );
              }
              function r(a) {
                var b = this.__data__,
                  c = J(b, a);
                return c < 0 ? void 0 : b[c][1];
              }
              function s(a) {
                return J(this.__data__, a) > -1;
              }
              function t(a, b) {
                var c = this.__data__,
                  d = J(c, a);
                return (
                  d < 0 ? (++this.size, c.push([a, b])) : (c[d][1] = b), this
                );
              }
              function u(a) {
                var b = -1,
                  c = null == a ? 0 : a.length;
                for (this.clear(); ++b < c; ) {
                  var d = a[b];
                  this.set(d[0], d[1]);
                }
              }
              function v() {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new i(),
                    map: new (vb || o)(),
                    string: new i(),
                  });
              }
              function w(a) {
                var b = $(this, a).delete(a);
                return (this.size -= b ? 1 : 0), b;
              }
              function x(a) {
                return $(this, a).get(a);
              }
              function y(a) {
                return $(this, a).has(a);
              }
              function z(a, b) {
                var c = $(this, a),
                  d = c.size;
                return c.set(a, b), (this.size += c.size == d ? 0 : 1), this;
              }
              function A(a) {
                var b = (this.__data__ = new o(a));
                this.size = b.size;
              }
              function B() {
                (this.__data__ = new o()), (this.size = 0);
              }
              function C(a) {
                var b = this.__data__,
                  c = b.delete(a);
                return (this.size = b.size), c;
              }
              function D(a) {
                return this.__data__.get(a);
              }
              function E(a) {
                return this.__data__.has(a);
              }
              function F(a, b) {
                var c = this.__data__;
                if (c instanceof o) {
                  var d = c.__data__;
                  if (!vb || d.length < Aa - 1)
                    return d.push([a, b]), (this.size = ++c.size), this;
                  c = this.__data__ = new u(d);
                }
                return c.set(a, b), (this.size = c.size), this;
              }
              function G(a, b) {
                var c = Cb(a),
                  d = !c && Bb(a),
                  f = !c && !d && Db(a),
                  g = !c && !d && !f && Eb(a),
                  h = c || d || f || g,
                  i = h ? e(a.length, String) : [],
                  j = i.length;
                for (var k in a)
                  (!b && !db.call(a, k)) ||
                    (h &&
                      ("length" == k ||
                        (f && ("offset" == k || "parent" == k)) ||
                        (g &&
                          ("buffer" == k ||
                            "byteLength" == k ||
                            "byteOffset" == k)) ||
                        ca(k, j))) ||
                    i.push(k);
                return i;
              }
              function H(a, b, c) {
                ((void 0 === c || na(a[b], c)) && (void 0 !== c || b in a)) ||
                  K(a, b, c);
              }
              function I(a, b, c) {
                var d = a[b];
                (db.call(a, b) && na(d, c) && (void 0 !== c || b in a)) ||
                  K(a, b, c);
              }
              function J(a, b) {
                for (var c = a.length; c--; ) if (na(a[c][0], b)) return c;
                return -1;
              }
              function K(a, b, c) {
                "__proto__" == b && rb
                  ? rb(a, b, {
                      configurable: !0,
                      enumerable: !0,
                      value: c,
                      writable: !0,
                    })
                  : (a[b] = c);
              }
              function L(a) {
                return null == a
                  ? void 0 === a
                    ? Ma
                    : Ja
                  : qb && qb in Object(a)
                  ? aa(a)
                  : ia(a);
              }
              function M(a) {
                return ta(a) && L(a) == Fa;
              }
              function N(a) {
                return !(!sa(a) || fa(a)) && (qa(a) ? hb : Oa).test(ma(a));
              }
              function O(a) {
                return ta(a) && ra(a.length) && !!Qa[L(a)];
              }
              function P(a) {
                if (!sa(a)) return ha(a);
                var b = ga(a),
                  c = [];
                for (var d in a)
                  ("constructor" != d || (!b && db.call(a, d))) && c.push(d);
                return c;
              }
              function Q(a, b, c, d, e) {
                a !== b &&
                  yb(
                    b,
                    function (f, g) {
                      if ((e || (e = new A()), sa(f))) R(a, b, g, c, Q, d, e);
                      else {
                        var h = d ? d(ka(a, g), f, g + "", a, b, e) : void 0;
                        void 0 === h && (h = f), H(a, g, h);
                      }
                    },
                    wa
                  );
              }
              function R(a, b, c, d, e, f, g) {
                var h = ka(a, c),
                  i = ka(b, c),
                  j = g.get(i);
                if (j) return void H(a, c, j);
                var k = f ? f(h, i, c + "", a, b, g) : void 0,
                  l = void 0 === k;
                if (l) {
                  var m = Cb(i),
                    n = !m && Db(i),
                    o = !m && !n && Eb(i);
                  (k = i),
                    m || n || o
                      ? Cb(h)
                        ? (k = h)
                        : pa(h)
                        ? (k = W(h))
                        : n
                        ? ((l = !1), (k = T(i, !0)))
                        : o
                        ? ((l = !1), (k = V(i, !0)))
                        : (k = [])
                      : ua(i) || Bb(i)
                      ? ((k = h),
                        Bb(h) ? (k = va(h)) : (sa(h) && !qa(h)) || (k = ba(i)))
                      : (l = !1);
                }
                l && (g.set(i, k), e(k, i, d, f, g), g.delete(i)), H(a, c, k);
              }
              function S(a, b) {
                return Ab(ja(a, b, ya), a + "");
              }
              function T(a, b) {
                if (b) return a.slice();
                var c = a.length,
                  d = lb ? lb(c) : new a.constructor(c);
                return a.copy(d), d;
              }
              function U(a) {
                var b = new a.constructor(a.byteLength);
                return new kb(b).set(new kb(a)), b;
              }
              function V(a, b) {
                var c = b ? U(a.buffer) : a.buffer;
                return new a.constructor(c, a.byteOffset, a.length);
              }
              function W(a, b) {
                var c = -1,
                  d = a.length;
                for (b || (b = Array(d)); ++c < d; ) b[c] = a[c];
                return b;
              }
              function X(a, b, c, d) {
                var e = !c;
                c || (c = {});
                for (var f = -1, g = b.length; ++f < g; ) {
                  var h = b[f],
                    i = d ? d(c[h], a[h], h, c, a) : void 0;
                  void 0 === i && (i = a[h]), e ? K(c, h, i) : I(c, h, i);
                }
                return c;
              }
              function Y(a) {
                return S(function (b, c) {
                  var d = -1,
                    e = c.length,
                    f = e > 1 ? c[e - 1] : void 0,
                    g = e > 2 ? c[2] : void 0;
                  for (
                    f =
                      a.length > 3 && "function" == typeof f
                        ? (e--, f)
                        : void 0,
                      g &&
                        da(c[0], c[1], g) &&
                        ((f = e < 3 ? void 0 : f), (e = 1)),
                      b = Object(b);
                    ++d < e;

                  ) {
                    var h = c[d];
                    h && a(b, h, d, f);
                  }
                  return b;
                });
              }
              function Z(a) {
                return function (b, c, d) {
                  for (
                    var e = -1, f = Object(b), g = d(b), h = g.length;
                    h--;

                  ) {
                    var i = g[a ? h : ++e];
                    if (!1 === c(f[i], i, f)) break;
                  }
                  return b;
                };
              }
              function $(a, b) {
                var c = a.__data__;
                return ea(b)
                  ? c["string" == typeof b ? "string" : "hash"]
                  : c.map;
              }
              function _(a, b) {
                var c = g(a, b);
                return N(c) ? c : void 0;
              }
              function aa(a) {
                var b = db.call(a, qb),
                  c = a[qb];
                try {
                  a[qb] = void 0;
                  var d = !0;
                } catch (a) {}
                var e = fb.call(a);
                return d && (b ? (a[qb] = c) : delete a[qb]), e;
              }
              function ba(a) {
                return "function" != typeof a.constructor || ga(a)
                  ? {}
                  : xb(mb(a));
              }
              function ca(a, b) {
                var c = typeof a;
                return (
                  !!(b = null == b ? Ea : b) &&
                  ("number" == c || ("symbol" != c && Pa.test(a))) &&
                  a > -1 &&
                  a % 1 == 0 &&
                  a < b
                );
              }
              function da(a, b, c) {
                if (!sa(c)) return !1;
                var d = typeof b;
                return (
                  !!("number" == d
                    ? oa(c) && ca(b, c.length)
                    : "string" == d && b in c) && na(c[b], a)
                );
              }
              function ea(a) {
                var b = typeof a;
                return "string" == b ||
                  "number" == b ||
                  "symbol" == b ||
                  "boolean" == b
                  ? "__proto__" !== a
                  : null === a;
              }
              function fa(a) {
                return !!eb && eb in a;
              }
              function ga(a) {
                var b = a && a.constructor;
                return a === (("function" == typeof b && b.prototype) || ab);
              }
              function ha(a) {
                var b = [];
                if (null != a) for (var c in Object(a)) b.push(c);
                return b;
              }
              function ia(a) {
                return fb.call(a);
              }
              function ja(a, b, c) {
                return (
                  (b = tb(void 0 === b ? a.length - 1 : b, 0)),
                  function () {
                    for (
                      var e = arguments,
                        f = -1,
                        g = tb(e.length - b, 0),
                        h = Array(g);
                      ++f < g;

                    )
                      h[f] = e[b + f];
                    f = -1;
                    for (var i = Array(b + 1); ++f < b; ) i[f] = e[f];
                    return (i[b] = c(h)), d(a, this, i);
                  }
                );
              }
              function ka(a, b) {
                if (
                  ("constructor" !== b || "function" != typeof a[b]) &&
                  "__proto__" != b
                )
                  return a[b];
              }
              function la(a) {
                var b = 0,
                  c = 0;
                return function () {
                  var d = ub(),
                    e = Da - (d - c);
                  if (((c = d), e > 0)) {
                    if (++b >= Ca) return arguments[0];
                  } else b = 0;
                  return a.apply(void 0, arguments);
                };
              }
              function ma(a) {
                if (null != a) {
                  try {
                    return cb.call(a);
                  } catch (a) {}
                  try {
                    return a + "";
                  } catch (a) {}
                }
                return "";
              }
              function na(a, b) {
                return a === b || (a !== a && b !== b);
              }
              function oa(a) {
                return null != a && ra(a.length) && !qa(a);
              }
              function pa(a) {
                return ta(a) && oa(a);
              }
              function qa(a) {
                if (!sa(a)) return !1;
                var b = L(a);
                return b == Ha || b == Ia || b == Ga || b == La;
              }
              function ra(a) {
                return "number" == typeof a && a > -1 && a % 1 == 0 && a <= Ea;
              }
              function sa(a) {
                var b = typeof a;
                return null != a && ("object" == b || "function" == b);
              }
              function ta(a) {
                return null != a && "object" == typeof a;
              }
              function ua(a) {
                if (!ta(a) || L(a) != Ka) return !1;
                var b = mb(a);
                if (null === b) return !0;
                var c = db.call(b, "constructor") && b.constructor;
                return (
                  "function" == typeof c && c instanceof c && cb.call(c) == gb
                );
              }
              function va(a) {
                return X(a, wa(a));
              }
              function wa(a) {
                return oa(a) ? G(a, !0) : P(a);
              }
              function xa(a) {
                return function () {
                  return a;
                };
              }
              function ya(a) {
                return a;
              }
              function za() {
                return !1;
              }
              var Aa = 200,
                Ba = "__lodash_hash_undefined__",
                Ca = 800,
                Da = 16,
                Ea = 9007199254740991,
                Fa = "[object Arguments]",
                Ga = "[object AsyncFunction]",
                Ha = "[object Function]",
                Ia = "[object GeneratorFunction]",
                Ja = "[object Null]",
                Ka = "[object Object]",
                La = "[object Proxy]",
                Ma = "[object Undefined]",
                Na = /[\\^$.*+?()[\]{}|]/g,
                Oa = /^\[object .+?Constructor\]$/,
                Pa = /^(?:0|[1-9]\d*)$/,
                Qa = {};
              (Qa["[object Float32Array]"] =
                Qa["[object Float64Array]"] =
                Qa["[object Int8Array]"] =
                Qa["[object Int16Array]"] =
                Qa["[object Int32Array]"] =
                Qa["[object Uint8Array]"] =
                Qa["[object Uint8ClampedArray]"] =
                Qa["[object Uint16Array]"] =
                Qa["[object Uint32Array]"] =
                  !0),
                (Qa[Fa] =
                  Qa["[object Array]"] =
                  Qa["[object ArrayBuffer]"] =
                  Qa["[object Boolean]"] =
                  Qa["[object DataView]"] =
                  Qa["[object Date]"] =
                  Qa["[object Error]"] =
                  Qa[Ha] =
                  Qa["[object Map]"] =
                  Qa["[object Number]"] =
                  Qa[Ka] =
                  Qa["[object RegExp]"] =
                  Qa["[object Set]"] =
                  Qa["[object String]"] =
                  Qa["[object WeakMap]"] =
                    !1);
              var Ra = "object" == typeof a && a && a.Object === Object && a,
                Sa =
                  "object" == typeof self &&
                  self &&
                  self.Object === Object &&
                  self,
                Ta = Ra || Sa || Function("return this")(),
                Ua = "object" == typeof c && c && !c.nodeType && c,
                Va = Ua && "object" == typeof b && b && !b.nodeType && b,
                Wa = Va && Va.exports === Ua,
                Xa = Wa && Ra.process,
                Ya = (function () {
                  try {
                    var a = Va && Va.require && Va.require("util").types;
                    return a || (Xa && Xa.binding && Xa.binding("util"));
                  } catch (a) {}
                })(),
                Za = Ya && Ya.isTypedArray,
                $a = Array.prototype,
                _a = Function.prototype,
                ab = Object.prototype,
                bb = Ta["__core-js_shared__"],
                cb = _a.toString,
                db = ab.hasOwnProperty,
                eb = (function () {
                  var a = /[^.]+$/.exec(
                    (bb && bb.keys && bb.keys.IE_PROTO) || ""
                  );
                  return a ? "Symbol(src)_1." + a : "";
                })(),
                fb = ab.toString,
                gb = cb.call(Object),
                hb = RegExp(
                  "^" +
                    cb
                      .call(db)
                      .replace(Na, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                ),
                ib = Wa ? Ta.Buffer : void 0,
                jb = Ta.Symbol,
                kb = Ta.Uint8Array,
                lb = ib ? ib.allocUnsafe : void 0,
                mb = h(Object.getPrototypeOf, Object),
                nb = Object.create,
                ob = ab.propertyIsEnumerable,
                pb = $a.splice,
                qb = jb ? jb.toStringTag : void 0,
                rb = (function () {
                  try {
                    var a = _(Object, "defineProperty");
                    return a({}, "", {}), a;
                  } catch (a) {}
                })(),
                sb = ib ? ib.isBuffer : void 0,
                tb = Math.max,
                ub = Date.now,
                vb = _(Ta, "Map"),
                wb = _(Object, "create"),
                xb = (function () {
                  function a() {}
                  return function (b) {
                    if (!sa(b)) return {};
                    if (nb) return nb(b);
                    a.prototype = b;
                    var c = new a();
                    return (a.prototype = void 0), c;
                  };
                })();
              (i.prototype.clear = j),
                (i.prototype.delete = k),
                (i.prototype.get = l),
                (i.prototype.has = m),
                (i.prototype.set = n),
                (o.prototype.clear = p),
                (o.prototype.delete = q),
                (o.prototype.get = r),
                (o.prototype.has = s),
                (o.prototype.set = t),
                (u.prototype.clear = v),
                (u.prototype.delete = w),
                (u.prototype.get = x),
                (u.prototype.has = y),
                (u.prototype.set = z),
                (A.prototype.clear = B),
                (A.prototype.delete = C),
                (A.prototype.get = D),
                (A.prototype.has = E),
                (A.prototype.set = F);
              var yb = Z(),
                zb = rb
                  ? function (a, b) {
                      return rb(a, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: xa(b),
                        writable: !0,
                      });
                    }
                  : ya,
                Ab = la(zb),
                Bb = M(
                  (function () {
                    return arguments;
                  })()
                )
                  ? M
                  : function (a) {
                      return (
                        ta(a) && db.call(a, "callee") && !ob.call(a, "callee")
                      );
                    },
                Cb = Array.isArray,
                Db = sb || za,
                Eb = Za ? f(Za) : O,
                Fb = Y(function (a, b, c) {
                  Q(a, b, c);
                });
              b.exports = Fb;
            }).call(this);
          }).call(
            this,
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {}
          );
        },
        {},
      ],
      2: [
        function (b, c, d) {
          !(function (b, e) {
            "object" == typeof d && "object" == typeof c
              ? (c.exports = e())
              : "function" == typeof a && a.amd
              ? a("shifty", [], e)
              : "object" == typeof d
              ? (d.shifty = e())
              : (b.shifty = e());
          })(self, function () {
            return (function () {
              "use strict";
              function a(d) {
                if (c[d]) return c[d].exports;
                var e = (c[d] = { exports: {} });
                return b[d](e, e.exports, a), e.exports;
              }
              var b = {
                  720: function (a, b, c) {
                    function d(a, b, c, d, e, f) {
                      var g,
                        h,
                        i,
                        j,
                        k,
                        l = 0,
                        m = 0,
                        n = 0,
                        o = function (a) {
                          return ((l * a + m) * a + n) * a;
                        },
                        p = function (a) {
                          return (3 * l * a + 2 * m) * a + n;
                        },
                        q = function (a) {
                          return a >= 0 ? a : 0 - a;
                        };
                      return (
                        (l = 1 - (n = 3 * b) - (m = 3 * (d - b) - n)),
                        (i = 1 - (k = 3 * c) - (j = 3 * (e - c) - k)),
                        (g = a),
                        (h = (function (a) {
                          return 1 / (200 * a);
                        })(f)),
                        (function (a) {
                          return ((i * a + j) * a + k) * a;
                        })(
                          (function (a, b) {
                            var c, d, e, f, g, h;
                            for (e = a, h = 0; h < 8; h++) {
                              if (((f = o(e) - a), q(f) < b)) return e;
                              if (((g = p(e)), q(g) < 1e-6)) break;
                              e -= f / g;
                            }
                            if ((e = a) < (c = 0)) return c;
                            if (e > (d = 1)) return d;
                            for (; c < d; ) {
                              if (((f = o(e)), q(f - a) < b)) return e;
                              a > f ? (c = e) : (d = e),
                                (e = 0.5 * (d - c) + c);
                            }
                            return e;
                          })(g, h)
                        )
                      );
                    }
                    function e(a, b) {
                      if (!(a instanceof b))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    }
                    function f(a, b) {
                      for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        (d.enumerable = d.enumerable || !1),
                          (d.configurable = !0),
                          "value" in d && (d.writable = !0),
                          Object.defineProperty(a, d.key, d);
                      }
                    }
                    function g(a) {
                      return (g =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                          ? function (a) {
                              return typeof a;
                            }
                          : function (a) {
                              return a &&
                                "function" == typeof Symbol &&
                                a.constructor === Symbol &&
                                a !== Symbol.prototype
                                ? "symbol"
                                : typeof a;
                            })(a);
                    }
                    function h(a) {
                      return (
                        (function (a) {
                          if (Array.isArray(a)) return i(a);
                        })(a) ||
                        (function (a) {
                          if (
                            "undefined" != typeof Symbol &&
                            Symbol.iterator in Object(a)
                          )
                            return Array.from(a);
                        })(a) ||
                        (function (a, b) {
                          if (a) {
                            if ("string" == typeof a) return i(a, b);
                            var c = Object.prototype.toString
                              .call(a)
                              .slice(8, -1);
                            return (
                              "Object" === c &&
                                a.constructor &&
                                (c = a.constructor.name),
                              "Map" === c || "Set" === c
                                ? Array.from(a)
                                : "Arguments" === c ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    c
                                  )
                                ? i(a, b)
                                : void 0
                            );
                          }
                        })(a) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })()
                      );
                    }
                    function i(a, b) {
                      (null == b || b > a.length) && (b = a.length);
                      for (var c = 0, d = new Array(b); c < b; c++) d[c] = a[c];
                      return d;
                    }
                    function j(a, b) {
                      var c = Object.keys(a);
                      if (Object.getOwnPropertySymbols) {
                        var d = Object.getOwnPropertySymbols(a);
                        b &&
                          (d = d.filter(function (b) {
                            return Object.getOwnPropertyDescriptor(
                              a,
                              b
                            ).enumerable;
                          })),
                          c.push.apply(c, d);
                      }
                      return c;
                    }
                    function k(a) {
                      for (var b = 1; b < arguments.length; b++) {
                        var c = null != arguments[b] ? arguments[b] : {};
                        b % 2
                          ? j(Object(c), !0).forEach(function (b) {
                              l(a, b, c[b]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              a,
                              Object.getOwnPropertyDescriptors(c)
                            )
                          : j(Object(c)).forEach(function (b) {
                              Object.defineProperty(
                                a,
                                b,
                                Object.getOwnPropertyDescriptor(c, b)
                              );
                            });
                      }
                      return a;
                    }
                    function l(a, b, c) {
                      return (
                        b in a
                          ? Object.defineProperty(a, b, {
                              value: c,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (a[b] = c),
                        a
                      );
                    }
                    function m() {
                      var a =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        b = new La();
                      return b.tween(a), (b.tweenable = b), b;
                    }
                    function n(a) {
                      return parseInt(a, 16);
                    }
                    function o(a) {
                      var b = a._currentState;
                      [b, a._originalState, a._targetState].forEach(Ya),
                        (a._tokenData = (function (a) {
                          var b,
                            c,
                            d = {};
                          for (var e in a) {
                            var f = a[e];
                            "string" == typeof f &&
                              (d[e] = {
                                formatString:
                                  ((b = f),
                                  (c = void 0),
                                  (c = b.match(Pa)),
                                  c
                                    ? (1 === c.length ||
                                        b.charAt(0).match(Oa)) &&
                                      c.unshift("")
                                    : (c = ["", ""]),
                                  c.join(Ua)),
                                chunkNames: Va($a(f), e),
                              });
                          }
                          return d;
                        })(b));
                    }
                    function p(a) {
                      var b = a._currentState,
                        c = a._originalState,
                        d = a._targetState,
                        e = a._easing,
                        f = a._tokenData;
                      !(function (a, b) {
                        var c = function (c) {
                          var d = b[c].chunkNames,
                            e = a[c];
                          if ("string" == typeof e) {
                            var f = e.split(" "),
                              g = f[f.length - 1];
                            d.forEach(function (b, c) {
                              return (a[b] = f[c] || g);
                            });
                          } else
                            d.forEach(function (b) {
                              return (a[b] = e);
                            });
                          delete a[c];
                        };
                        for (var d in b) c(d);
                      })(e, f),
                        [b, c, d].forEach(function (a) {
                          return (function (a, b) {
                            var c = function (c) {
                              $a(a[c]).forEach(function (d, e) {
                                return (a[b[c].chunkNames[e]] = +d);
                              }),
                                delete a[c];
                            };
                            for (var d in b) c(d);
                          })(a, f);
                        });
                    }
                    function q(a) {
                      var b = a._currentState,
                        c = a._originalState,
                        d = a._targetState,
                        e = a._easing,
                        f = a._tokenData;
                      [b, c, d].forEach(function (a) {
                        return (function (a, b) {
                          for (var c in b) {
                            var d = b[c],
                              e = d.chunkNames,
                              f = d.formatString,
                              g = bb(f, ab(_a(a, e), e));
                            a[c] = Xa(Ra, g, Za);
                          }
                        })(a, f);
                      }),
                        (function (a, b) {
                          for (var c in b) {
                            var d = b[c].chunkNames,
                              e = a[d[0]];
                            a[c] =
                              "string" == typeof e
                                ? d
                                    .map(function (b) {
                                      var c = a[b];
                                      return delete a[b], c;
                                    })
                                    .join(" ")
                                : e;
                          }
                        })(e, f);
                    }
                    function r(a, b) {
                      var c = Object.keys(a);
                      if (Object.getOwnPropertySymbols) {
                        var d = Object.getOwnPropertySymbols(a);
                        b &&
                          (d = d.filter(function (b) {
                            return Object.getOwnPropertyDescriptor(
                              a,
                              b
                            ).enumerable;
                          })),
                          c.push.apply(c, d);
                      }
                      return c;
                    }
                    function s(a) {
                      for (var b = 1; b < arguments.length; b++) {
                        var c = null != arguments[b] ? arguments[b] : {};
                        b % 2
                          ? r(Object(c), !0).forEach(function (b) {
                              t(a, b, c[b]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              a,
                              Object.getOwnPropertyDescriptors(c)
                            )
                          : r(Object(c)).forEach(function (b) {
                              Object.defineProperty(
                                a,
                                b,
                                Object.getOwnPropertyDescriptor(c, b)
                              );
                            });
                      }
                      return a;
                    }
                    function t(a, b, c) {
                      return (
                        b in a
                          ? Object.defineProperty(a, b, {
                              value: c,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (a[b] = c),
                        a
                      );
                    }
                    function u(a, b) {
                      (null == b || b > a.length) && (b = a.length);
                      for (var c = 0, d = new Array(b); c < b; c++) d[c] = a[c];
                      return d;
                    }
                    function v(a, b) {
                      if (!(a instanceof b))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    }
                    function w(a, b) {
                      for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        (d.enumerable = d.enumerable || !1),
                          (d.configurable = !0),
                          "value" in d && (d.writable = !0),
                          Object.defineProperty(a, d.key, d);
                      }
                    }
                    function x(a, b) {
                      var c = b.get(a);
                      if (!c)
                        throw new TypeError(
                          "attempted to get private field on non-instance"
                        );
                      return c.get ? c.get.call(a) : c.value;
                    }
                    c.r(b),
                      c.d(b, {
                        Scene: function () {
                          return hb;
                        },
                        Tweenable: function () {
                          return La;
                        },
                        interpolate: function () {
                          return fb;
                        },
                        processTweens: function () {
                          return Da;
                        },
                        setBezierFunction: function () {
                          return ma;
                        },
                        shouldScheduleUpdate: function () {
                          return Ga;
                        },
                        tween: function () {
                          return m;
                        },
                        unsetBezierFunction: function () {
                          return na;
                        },
                      });
                    var y = {};
                    c.r(y),
                      c.d(y, {
                        bounce: function () {
                          return ga;
                        },
                        bouncePast: function () {
                          return ha;
                        },
                        easeFrom: function () {
                          return ja;
                        },
                        easeFromTo: function () {
                          return ia;
                        },
                        easeInBack: function () {
                          return _;
                        },
                        easeInCirc: function () {
                          return X;
                        },
                        easeInCubic: function () {
                          return I;
                        },
                        easeInExpo: function () {
                          return U;
                        },
                        easeInOutBack: function () {
                          return ba;
                        },
                        easeInOutCirc: function () {
                          return Z;
                        },
                        easeInOutCubic: function () {
                          return K;
                        },
                        easeInOutExpo: function () {
                          return W;
                        },
                        easeInOutQuad: function () {
                          return H;
                        },
                        easeInOutQuart: function () {
                          return N;
                        },
                        easeInOutQuint: function () {
                          return Q;
                        },
                        easeInOutSine: function () {
                          return T;
                        },
                        easeInQuad: function () {
                          return F;
                        },
                        easeInQuart: function () {
                          return L;
                        },
                        easeInQuint: function () {
                          return O;
                        },
                        easeInSine: function () {
                          return R;
                        },
                        easeOutBack: function () {
                          return aa;
                        },
                        easeOutBounce: function () {
                          return $;
                        },
                        easeOutCirc: function () {
                          return Y;
                        },
                        easeOutCubic: function () {
                          return J;
                        },
                        easeOutExpo: function () {
                          return V;
                        },
                        easeOutQuad: function () {
                          return G;
                        },
                        easeOutQuart: function () {
                          return M;
                        },
                        easeOutQuint: function () {
                          return P;
                        },
                        easeOutSine: function () {
                          return S;
                        },
                        easeTo: function () {
                          return ka;
                        },
                        elastic: function () {
                          return ca;
                        },
                        linear: function () {
                          return E;
                        },
                        swingFrom: function () {
                          return ea;
                        },
                        swingFromTo: function () {
                          return da;
                        },
                        swingTo: function () {
                          return fa;
                        },
                      });
                    var z = {};
                    c.r(z),
                      c.d(z, {
                        afterTween: function () {
                          return q;
                        },
                        beforeTween: function () {
                          return p;
                        },
                        doesApply: function () {
                          return cb;
                        },
                        tweenCreated: function () {
                          return o;
                        },
                      });
                    var A,
                      B,
                      C,
                      D,
                      E = function (a) {
                        return a;
                      },
                      F = function (a) {
                        return Math.pow(a, 2);
                      },
                      G = function (a) {
                        return -(Math.pow(a - 1, 2) - 1);
                      },
                      H = function (a) {
                        return (a /= 0.5) < 1
                          ? 0.5 * Math.pow(a, 2)
                          : -0.5 * ((a -= 2) * a - 2);
                      },
                      I = function (a) {
                        return Math.pow(a, 3);
                      },
                      J = function (a) {
                        return Math.pow(a - 1, 3) + 1;
                      },
                      K = function (a) {
                        return (a /= 0.5) < 1
                          ? 0.5 * Math.pow(a, 3)
                          : 0.5 * (Math.pow(a - 2, 3) + 2);
                      },
                      L = function (a) {
                        return Math.pow(a, 4);
                      },
                      M = function (a) {
                        return -(Math.pow(a - 1, 4) - 1);
                      },
                      N = function (a) {
                        return (a /= 0.5) < 1
                          ? 0.5 * Math.pow(a, 4)
                          : -0.5 * ((a -= 2) * Math.pow(a, 3) - 2);
                      },
                      O = function (a) {
                        return Math.pow(a, 5);
                      },
                      P = function (a) {
                        return Math.pow(a - 1, 5) + 1;
                      },
                      Q = function (a) {
                        return (a /= 0.5) < 1
                          ? 0.5 * Math.pow(a, 5)
                          : 0.5 * (Math.pow(a - 2, 5) + 2);
                      },
                      R = function (a) {
                        return 1 - Math.cos(a * (Math.PI / 2));
                      },
                      S = function (a) {
                        return Math.sin(a * (Math.PI / 2));
                      },
                      T = function (a) {
                        return -0.5 * (Math.cos(Math.PI * a) - 1);
                      },
                      U = function (a) {
                        return 0 === a ? 0 : Math.pow(2, 10 * (a - 1));
                      },
                      V = function (a) {
                        return 1 === a ? 1 : 1 - Math.pow(2, -10 * a);
                      },
                      W = function (a) {
                        return 0 === a
                          ? 0
                          : 1 === a
                          ? 1
                          : (a /= 0.5) < 1
                          ? 0.5 * Math.pow(2, 10 * (a - 1))
                          : 0.5 * (2 - Math.pow(2, -10 * --a));
                      },
                      X = function (a) {
                        return -(Math.sqrt(1 - a * a) - 1);
                      },
                      Y = function (a) {
                        return Math.sqrt(1 - Math.pow(a - 1, 2));
                      },
                      Z = function (a) {
                        return (a /= 0.5) < 1
                          ? -0.5 * (Math.sqrt(1 - a * a) - 1)
                          : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
                      },
                      $ = function (a) {
                        return a < 1 / 2.75
                          ? 7.5625 * a * a
                          : a < 2 / 2.75
                          ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                          : a < 2.5 / 2.75
                          ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                          : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
                      },
                      _ = function (a) {
                        var b = 1.70158;
                        return a * a * ((b + 1) * a - b);
                      },
                      aa = function (a) {
                        var b = 1.70158;
                        return (a -= 1) * a * ((b + 1) * a + b) + 1;
                      },
                      ba = function (a) {
                        var b = 1.70158;
                        return (a /= 0.5) < 1
                          ? a * a * ((1 + (b *= 1.525)) * a - b) * 0.5
                          : 0.5 *
                              ((a -= 2) * a * ((1 + (b *= 1.525)) * a + b) + 2);
                      },
                      ca = function (a) {
                        return (
                          -1 *
                            Math.pow(4, -8 * a) *
                            Math.sin(((6 * a - 1) * (2 * Math.PI)) / 2) +
                          1
                        );
                      },
                      da = function (a) {
                        var b = 1.70158;
                        return (a /= 0.5) < 1
                          ? a * a * ((1 + (b *= 1.525)) * a - b) * 0.5
                          : 0.5 *
                              ((a -= 2) * a * ((1 + (b *= 1.525)) * a + b) + 2);
                      },
                      ea = function (a) {
                        var b = 1.70158;
                        return a * a * ((b + 1) * a - b);
                      },
                      fa = function (a) {
                        var b = 1.70158;
                        return (a -= 1) * a * ((b + 1) * a + b) + 1;
                      },
                      ga = function (a) {
                        return a < 1 / 2.75
                          ? 7.5625 * a * a
                          : a < 2 / 2.75
                          ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                          : a < 2.5 / 2.75
                          ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                          : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
                      },
                      ha = function (a) {
                        return a < 1 / 2.75
                          ? 7.5625 * a * a
                          : a < 2 / 2.75
                          ? 2 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75)
                          : a < 2.5 / 2.75
                          ? 2 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375)
                          : 2 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375);
                      },
                      ia = function (a) {
                        return (a /= 0.5) < 1
                          ? 0.5 * Math.pow(a, 4)
                          : -0.5 * ((a -= 2) * Math.pow(a, 3) - 2);
                      },
                      ja = function (a) {
                        return Math.pow(a, 4);
                      },
                      ka = function (a) {
                        return Math.pow(a, 0.25);
                      },
                      la = function () {
                        var a =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0.25,
                          b =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0.25,
                          c =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : 0.75,
                          e =
                            arguments.length > 3 && void 0 !== arguments[3]
                              ? arguments[3]
                              : 0.75;
                        return function (f) {
                          return d(f, a, b, c, e, 1);
                        };
                      },
                      ma = function (a, b, c, d, e) {
                        var f = la(b, c, d, e);
                        return (
                          (f.displayName = a),
                          (f.x1 = b),
                          (f.y1 = c),
                          (f.x2 = d),
                          (f.y2 = e),
                          (La.formulas[a] = f)
                        );
                      },
                      na = function (a) {
                        return delete La.formulas[a];
                      },
                      oa = "linear",
                      pa = "undefined" != typeof window ? window : c.g,
                      qa = "afterTween",
                      ra = "afterTweenEnd",
                      sa = "beforeTween",
                      ta = "tweenCreated",
                      ua = "function",
                      va = "string",
                      wa =
                        pa.requestAnimationFrame ||
                        pa.webkitRequestAnimationFrame ||
                        pa.oRequestAnimationFrame ||
                        pa.msRequestAnimationFrame ||
                        (pa.mozCancelRequestAnimationFrame &&
                          pa.mozRequestAnimationFrame) ||
                        setTimeout,
                      xa = function () {},
                      ya = null,
                      za = null,
                      Aa = k({}, y),
                      Ba = function (a, b, c, d, e, f, g) {
                        var h,
                          i,
                          j,
                          k = a < f ? 0 : (a - f) / e,
                          l = !1;
                        for (var m in (g && g.call && ((l = !0), (h = g(k))),
                        b))
                          l || (h = ((i = g[m]).call ? i : Aa[i])(k)),
                            (j = c[m]),
                            (b[m] = j + (d[m] - j) * h);
                        return b;
                      },
                      Ca = function (a, b) {
                        var c = a._timestamp,
                          d = a._currentState,
                          e = a._delay;
                        if (!(b < c + e)) {
                          var f = a._duration,
                            g = a._targetState,
                            h = c + e + f,
                            i = b > h ? h : b;
                          a._hasEnded = i >= h;
                          var j = f - (h - i),
                            k = a._filters.length > 0;
                          if (a._hasEnded)
                            return a._render(g, a._data, j), a.stop(!0);
                          k && a._applyFilter(sa),
                            i < c + e ? (c = f = i = 1) : (c += e),
                            Ba(i, d, a._originalState, g, f, c, a._easing),
                            k && a._applyFilter(qa),
                            a._render(d, a._data, j);
                        }
                      },
                      Da = function () {
                        for (var a, b = La.now(), c = ya; c; )
                          (a = c._next), Ca(c, b), (c = a);
                      },
                      Ea =
                        Date.now ||
                        function () {
                          return +new Date();
                        },
                      Fa = !1,
                      Ga = function (a) {
                        (a && Fa) || ((Fa = a), a && Ha());
                      },
                      Ha = function a() {
                        (B = Ea()),
                          Fa && wa.call(pa, a, 16.666666666666668),
                          Da();
                      },
                      Ia = function (a) {
                        var b =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : oa,
                          c =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {};
                        if (Array.isArray(b)) {
                          return la.apply(void 0, h(b));
                        }
                        var d = g(b);
                        if (Aa[b]) return Aa[b];
                        if (d === va || d === ua) for (var e in a) c[e] = b;
                        else for (var f in a) c[f] = b[f] || oa;
                        return c;
                      },
                      Ja = function (a) {
                        a === ya
                          ? (ya = a._next)
                            ? (ya._previous = null)
                            : (za = null)
                          : a === za
                          ? (za = a._previous)
                            ? (za._next = null)
                            : (ya = null)
                          : ((C = a._previous),
                            (D = a._next),
                            (C._next = D),
                            (D._previous = C)),
                          (a._previous = a._next = null);
                      },
                      Ka = "function" == typeof Promise ? Promise : null;
                    A = Symbol.toStringTag;
                    var La = (function () {
                      function a() {
                        var b =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          c =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : void 0;
                        e(this, a),
                          l(this, A, "Promise"),
                          (this._config = {}),
                          (this._data = {}),
                          (this._delay = 0),
                          (this._filters = []),
                          (this._next = null),
                          (this._previous = null),
                          (this._timestamp = null),
                          (this._hasEnded = !1),
                          (this._resolve = null),
                          (this._reject = null),
                          (this._currentState = b || {}),
                          (this._originalState = {}),
                          (this._targetState = {}),
                          (this._start = xa),
                          (this._render = xa),
                          (this._promiseCtor = Ka),
                          c && this.setConfig(c);
                      }
                      var b, c;
                      return (
                        (b = a),
                        (c = [
                          {
                            key: "_applyFilter",
                            value: function (a) {
                              for (var b = this._filters.length; b > 0; b--) {
                                var c = this._filters[b - b][a];
                                c && c(this);
                              }
                            },
                          },
                          {
                            key: "tween",
                            value: function () {
                              var b =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : void 0;
                              return (
                                this._isPlaying && this.stop(),
                                (!b && this._config) || this.setConfig(b),
                                (this._pausedAtTime = null),
                                (this._timestamp = a.now()),
                                this._start(this.get(), this._data),
                                this._delay &&
                                  this._render(
                                    this._currentState,
                                    this._data,
                                    0
                                  ),
                                this._resume(this._timestamp)
                              );
                            },
                          },
                          {
                            key: "setConfig",
                            value: function () {
                              var b =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {},
                                c = this._config;
                              for (var d in b) c[d] = b[d];
                              var e = c.promise,
                                f = void 0 === e ? this._promiseCtor : e,
                                h = c.start,
                                i = void 0 === h ? xa : h,
                                j = c.finish,
                                k = c.render,
                                l = void 0 === k ? this._config.step || xa : k,
                                m = c.step,
                                n = void 0 === m ? xa : m;
                              (this._data =
                                c.data || c.attachment || this._data),
                                (this._isPlaying = !1),
                                (this._pausedAtTime = null),
                                (this._scheduleId = null),
                                (this._delay = b.delay || 0),
                                (this._start = i),
                                (this._render = l || n),
                                (this._duration = c.duration || 500),
                                (this._promiseCtor = f),
                                j && (this._resolve = j);
                              var o = b.from,
                                p = b.to,
                                q = void 0 === p ? {} : p,
                                r = this._currentState,
                                s = this._originalState,
                                t = this._targetState;
                              for (var u in o) r[u] = o[u];
                              var v = !1;
                              for (var w in r) {
                                var x = r[w];
                                v || g(x) !== va || (v = !0),
                                  (s[w] = x),
                                  (t[w] = q.hasOwnProperty(w) ? q[w] : x);
                              }
                              if (
                                ((this._easing = Ia(
                                  this._currentState,
                                  c.easing,
                                  this._easing
                                )),
                                (this._filters.length = 0),
                                v)
                              ) {
                                for (var y in a.filters)
                                  a.filters[y].doesApply(this) &&
                                    this._filters.push(a.filters[y]);
                                this._applyFilter(ta);
                              }
                              return this;
                            },
                          },
                          {
                            key: "then",
                            value: function (a, b) {
                              var c = this;
                              return (
                                (this._promise = new this._promiseCtor(
                                  function (a, b) {
                                    (c._resolve = a), (c._reject = b);
                                  }
                                )),
                                this._promise.then(a, b)
                              );
                            },
                          },
                          {
                            key: "catch",
                            value: function (a) {
                              return this.then().catch(a);
                            },
                          },
                          {
                            key: "finally",
                            value: function (a) {
                              return this.then().finally(a);
                            },
                          },
                          {
                            key: "get",
                            value: function () {
                              return k({}, this._currentState);
                            },
                          },
                          {
                            key: "set",
                            value: function (a) {
                              this._currentState = a;
                            },
                          },
                          {
                            key: "pause",
                            value: function () {
                              if (this._isPlaying)
                                return (
                                  (this._pausedAtTime = a.now()),
                                  (this._isPlaying = !1),
                                  Ja(this),
                                  this
                                );
                            },
                          },
                          {
                            key: "resume",
                            value: function () {
                              return this._resume();
                            },
                          },
                          {
                            key: "_resume",
                            value: function () {
                              var b =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : a.now();
                              return null === this._timestamp
                                ? this.tween()
                                : this._isPlaying
                                ? this._promise
                                : (this._pausedAtTime &&
                                    ((this._timestamp +=
                                      b - this._pausedAtTime),
                                    (this._pausedAtTime = null)),
                                  (this._isPlaying = !0),
                                  null === ya
                                    ? ((ya = this), (za = this))
                                    : ((this._previous = za),
                                      (za._next = this),
                                      (za = this)),
                                  this);
                            },
                          },
                          {
                            key: "seek",
                            value: function (b) {
                              b = Math.max(b, 0);
                              var c = a.now();
                              return (
                                this._timestamp + b === 0 ||
                                  ((this._timestamp = c - b), Ca(this, c)),
                                this
                              );
                            },
                          },
                          {
                            key: "stop",
                            value: function () {
                              var a =
                                arguments.length > 0 &&
                                void 0 !== arguments[0] &&
                                arguments[0];
                              if (!this._isPlaying) return this;
                              (this._isPlaying = !1), Ja(this);
                              var b = this._filters.length > 0;
                              return (
                                a &&
                                  (b && this._applyFilter(sa),
                                  Ba(
                                    1,
                                    this._currentState,
                                    this._originalState,
                                    this._targetState,
                                    1,
                                    0,
                                    this._easing
                                  ),
                                  b &&
                                    (this._applyFilter(qa),
                                    this._applyFilter(ra))),
                                this._resolve &&
                                  this._resolve({
                                    data: this._data,
                                    state: this._currentState,
                                    tweenable: this,
                                  }),
                                (this._resolve = null),
                                (this._reject = null),
                                this
                              );
                            },
                          },
                          {
                            key: "cancel",
                            value: function () {
                              var a =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0] &&
                                  arguments[0],
                                b = this._currentState,
                                c = this._data;
                              return this._isPlaying
                                ? (this._reject &&
                                    this._reject({
                                      data: c,
                                      state: b,
                                      tweenable: this,
                                    }),
                                  (this._resolve = null),
                                  (this._reject = null),
                                  this.stop(a))
                                : this;
                            },
                          },
                          {
                            key: "isPlaying",
                            value: function () {
                              return this._isPlaying;
                            },
                          },
                          {
                            key: "hasEnded",
                            value: function () {
                              return this._hasEnded;
                            },
                          },
                          {
                            key: "setScheduleFunction",
                            value: function (b) {
                              a.setScheduleFunction(b);
                            },
                          },
                          {
                            key: "data",
                            value: function () {
                              var a =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : null;
                              return a && (this._data = k({}, a)), this._data;
                            },
                          },
                          {
                            key: "dispose",
                            value: function () {
                              for (var a in this) delete this[a];
                            },
                          },
                        ]),
                        c && f(b.prototype, c),
                        a
                      );
                    })();
                    l(La, "now", function () {
                      return B;
                    }),
                      l(La, "setScheduleFunction", function (a) {
                        return (wa = a);
                      }),
                      l(La, "filters", {}),
                      l(La, "formulas", Aa),
                      Ga(!0);
                    var Ma,
                      Na,
                      Oa = /(\d|-|\.)/,
                      Pa = /([^\-0-9.]+)/g,
                      Qa = /[0-9.-]+/g,
                      Ra =
                        ((Ma = Qa.source),
                        (Na = /,\s*/.source),
                        new RegExp(
                          "rgba?\\("
                            .concat(Ma)
                            .concat(Na)
                            .concat(Ma)
                            .concat(Na)
                            .concat(Ma, "(")
                            .concat(Na)
                            .concat(Ma, ")?\\)"),
                          "g"
                        )),
                      Sa = /^.*\(/,
                      Ta = /#([0-9]|[a-f]){3,6}/gi,
                      Ua = "VAL",
                      Va = function (a, b) {
                        return a.map(function (a, c) {
                          return "_".concat(b, "_").concat(c);
                        });
                      },
                      Wa = function (a) {
                        return "rgb(".concat(
                          ((b = a),
                          3 === (b = b.replace(/#/, "")).length &&
                            (b =
                              (b = b.split(""))[0] +
                              b[0] +
                              b[1] +
                              b[1] +
                              b[2] +
                              b[2]),
                          [
                            n(b.substr(0, 2)),
                            n(b.substr(2, 2)),
                            n(b.substr(4, 2)),
                          ]).join(","),
                          ")"
                        );
                        var b;
                      },
                      Xa = function (a, b, c) {
                        var d = b.match(a),
                          e = b.replace(a, Ua);
                        return (
                          d &&
                            d.forEach(function (a) {
                              return (e = e.replace(Ua, c(a)));
                            }),
                          e
                        );
                      },
                      Ya = function (a) {
                        for (var b in a) {
                          var c = a[b];
                          "string" == typeof c &&
                            c.match(Ta) &&
                            (a[b] = Xa(Ta, c, Wa));
                        }
                      },
                      Za = function (a) {
                        var b = a.match(Qa),
                          c = b.slice(0, 3).map(Math.floor),
                          d = a.match(Sa)[0];
                        if (3 === b.length)
                          return "".concat(d).concat(c.join(","), ")");
                        if (4 === b.length)
                          return ""
                            .concat(d)
                            .concat(c.join(","), ",")
                            .concat(b[3], ")");
                        throw new Error("Invalid rgbChunk: ".concat(a));
                      },
                      $a = function (a) {
                        return a.match(Qa);
                      },
                      _a = function (a, b) {
                        var c = {};
                        return (
                          b.forEach(function (b) {
                            (c[b] = a[b]), delete a[b];
                          }),
                          c
                        );
                      },
                      ab = function (a, b) {
                        return b.map(function (b) {
                          return a[b];
                        });
                      },
                      bb = function (a, b) {
                        return (
                          b.forEach(function (b) {
                            return (a = a.replace(Ua, +b.toFixed(4)));
                          }),
                          a
                        );
                      },
                      cb = function (a) {
                        for (var b in a._currentState)
                          if ("string" == typeof a._currentState[b]) return !0;
                        return !1;
                      },
                      db = new La(),
                      eb = La.filters,
                      fb = function (a, b, c, d) {
                        var e =
                            arguments.length > 4 && void 0 !== arguments[4]
                              ? arguments[4]
                              : 0,
                          f = s({}, a),
                          g = Ia(a, d);
                        for (var h in ((db._filters.length = 0),
                        db.set({}),
                        (db._currentState = f),
                        (db._originalState = a),
                        (db._targetState = b),
                        (db._easing = g),
                        eb))
                          eb[h].doesApply(db) && db._filters.push(eb[h]);
                        db._applyFilter("tweenCreated"),
                          db._applyFilter("beforeTween");
                        var i = Ba(c, f, a, b, 1, e, g);
                        return db._applyFilter("afterTween"), i;
                      },
                      gb = new WeakMap(),
                      hb = (function () {
                        function a() {
                          v(this, a), gb.set(this, { writable: !0, value: [] });
                          for (
                            var b = arguments.length, c = new Array(b), d = 0;
                            d < b;
                            d++
                          )
                            c[d] = arguments[d];
                          c.forEach(this.add.bind(this));
                        }
                        var b, c;
                        return (
                          (b = a),
                          (c = [
                            {
                              key: "add",
                              value: function (a) {
                                return x(this, gb).push(a), a;
                              },
                            },
                            {
                              key: "remove",
                              value: function (a) {
                                var b = x(this, gb).indexOf(a);
                                return ~b && x(this, gb).splice(b, 1), a;
                              },
                            },
                            {
                              key: "empty",
                              value: function () {
                                return this.tweenables.map(
                                  this.remove.bind(this)
                                );
                              },
                            },
                            {
                              key: "isPlaying",
                              value: function () {
                                return x(this, gb).some(function (a) {
                                  return a.isPlaying();
                                });
                              },
                            },
                            {
                              key: "play",
                              value: function () {
                                return (
                                  x(this, gb).forEach(function (a) {
                                    return a.tween();
                                  }),
                                  this
                                );
                              },
                            },
                            {
                              key: "pause",
                              value: function () {
                                return (
                                  x(this, gb).forEach(function (a) {
                                    return a.pause();
                                  }),
                                  this
                                );
                              },
                            },
                            {
                              key: "resume",
                              value: function () {
                                return (
                                  this.playingTweenables.forEach(function (a) {
                                    return a.resume();
                                  }),
                                  this
                                );
                              },
                            },
                            {
                              key: "stop",
                              value: function (a) {
                                return (
                                  x(this, gb).forEach(function (b) {
                                    return b.stop(a);
                                  }),
                                  this
                                );
                              },
                            },
                            {
                              key: "tweenables",
                              get: function () {
                                return (
                                  (function (a) {
                                    if (Array.isArray(a)) return u(a);
                                  })((a = x(this, gb))) ||
                                  (function (a) {
                                    if (
                                      "undefined" != typeof Symbol &&
                                      Symbol.iterator in Object(a)
                                    )
                                      return Array.from(a);
                                  })(a) ||
                                  (function (a, b) {
                                    if (a) {
                                      if ("string" == typeof a) return u(a, b);
                                      var c = Object.prototype.toString
                                        .call(a)
                                        .slice(8, -1);
                                      return (
                                        "Object" === c &&
                                          a.constructor &&
                                          (c = a.constructor.name),
                                        "Map" === c || "Set" === c
                                          ? Array.from(a)
                                          : "Arguments" === c ||
                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                              c
                                            )
                                          ? u(a, b)
                                          : void 0
                                      );
                                    }
                                  })(a) ||
                                  (function () {
                                    throw new TypeError(
                                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                    );
                                  })()
                                );
                                var a;
                              },
                            },
                            {
                              key: "playingTweenables",
                              get: function () {
                                return x(this, gb).filter(function (a) {
                                  return !a.hasEnded();
                                });
                              },
                            },
                            {
                              key: "promises",
                              get: function () {
                                return x(this, gb).map(function (a) {
                                  return a.then();
                                });
                              },
                            },
                          ]) && w(b.prototype, c),
                          a
                        );
                      })();
                    La.filters.token = z;
                  },
                },
                c = {};
              return (
                (a.d = function (b, c) {
                  for (var d in c)
                    a.o(c, d) &&
                      !a.o(b, d) &&
                      Object.defineProperty(b, d, {
                        enumerable: !0,
                        get: c[d],
                      });
                }),
                (a.g = (function () {
                  if ("object" == typeof globalThis) return globalThis;
                  try {
                    return this || new Function("return this")();
                  } catch (a) {
                    if ("object" == typeof window) return window;
                  }
                })()),
                (a.o = function (a, b) {
                  return Object.prototype.hasOwnProperty.call(a, b);
                }),
                (a.r = function (a) {
                  "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(a, Symbol.toStringTag, {
                      value: "Module",
                    }),
                    Object.defineProperty(a, "__esModule", { value: !0 });
                }),
                a(720)
              );
            })();
          });
        },
        {},
      ],
      3: [
        function (a, b, c) {
          var d = a("./shape"),
            e = a("./utils"),
            f = function (a, b) {
              (this._pathTemplate =
                "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}"),
                (this.containerAspectRatio = 1),
                d.apply(this, arguments);
            };
          (f.prototype = new d()),
            (f.prototype.constructor = f),
            (f.prototype._pathString = function (a) {
              var b = a.strokeWidth;
              a.trailWidth &&
                a.trailWidth > a.strokeWidth &&
                (b = a.trailWidth);
              var c = 50 - b / 2;
              return e.render(this._pathTemplate, {
                radius: c,
                "2radius": 2 * c,
              });
            }),
            (f.prototype._trailString = function (a) {
              return this._pathString(a);
            }),
            (b.exports = f);
        },
        { "./shape": 8, "./utils": 10 },
      ],
      4: [
        function (a, b, c) {
          var d = a("./shape"),
            e = a("./utils"),
            f = function (a, b) {
              (this._pathTemplate = b.vertical
                ? "M {center},100 L {center},0"
                : "M 0,{center} L 100,{center}"),
                d.apply(this, arguments);
            };
          (f.prototype = new d()),
            (f.prototype.constructor = f),
            (f.prototype._initializeSvg = function (a, b) {
              var c = b.vertical
                ? "0 0 " + b.strokeWidth + " 100"
                : "0 0 100 " + b.strokeWidth;
              a.setAttribute("viewBox", c),
                a.setAttribute("preserveAspectRatio", "none");
            }),
            (f.prototype._pathString = function (a) {
              return e.render(this._pathTemplate, {
                center: a.strokeWidth / 2,
              });
            }),
            (f.prototype._trailString = function (a) {
              return this._pathString(a);
            }),
            (b.exports = f);
        },
        { "./shape": 8, "./utils": 10 },
      ],
      5: [
        function (a, b, c) {
          b.exports = {
            Line: a("./line"),
            Circle: a("./circle"),
            SemiCircle: a("./semicircle"),
            Square: a("./square"),
            Path: a("./path"),
            Shape: a("./shape"),
            utils: a("./utils"),
          };
        },
        {
          "./circle": 3,
          "./line": 4,
          "./path": 6,
          "./semicircle": 7,
          "./shape": 8,
          "./square": 9,
          "./utils": 10,
        },
      ],
      6: [
        function (a, b, c) {
          var d = a("shifty"),
            e = a("./utils"),
            f = d.Tweenable,
            g = {
              easeIn: "easeInCubic",
              easeOut: "easeOutCubic",
              easeInOut: "easeInOutCubic",
            },
            h = function a(b, c) {
              if (!(this instanceof a))
                throw new Error("Constructor was called without new keyword");
              c = e.extend(
                {
                  delay: 0,
                  duration: 800,
                  easing: "linear",
                  from: {},
                  to: {},
                  step: function () {},
                },
                c
              );
              var d;
              (d = e.isString(b) ? document.querySelector(b) : b),
                (this.path = d),
                (this._opts = c),
                (this._tweenable = null);
              var f = this.path.getTotalLength();
              (this.path.style.strokeDasharray = f + " " + f), this.set(0);
            };
          (h.prototype.value = function () {
            var a = this._getComputedDashOffset(),
              b = this.path.getTotalLength(),
              c = 1 - a / b;
            return parseFloat(c.toFixed(6), 10);
          }),
            (h.prototype.set = function (a) {
              this.stop(),
                (this.path.style.strokeDashoffset = this._progressToOffset(a));
              var b = this._opts.step;
              if (e.isFunction(b)) {
                var c = this._easing(this._opts.easing);
                b(
                  this._calculateTo(a, c),
                  this._opts.shape || this,
                  this._opts.attachment
                );
              }
            }),
            (h.prototype.stop = function () {
              this._stopTween(),
                (this.path.style.strokeDashoffset =
                  this._getComputedDashOffset());
            }),
            (h.prototype.animate = function (a, b, c) {
              (b = b || {}), e.isFunction(b) && ((c = b), (b = {}));
              var d = e.extend({}, b),
                g = e.extend({}, this._opts);
              b = e.extend(g, b);
              var h = this._easing(b.easing),
                i = this._resolveFromAndTo(a, h, d);
              this.stop(), this.path.getBoundingClientRect();
              var j = this._getComputedDashOffset(),
                k = this._progressToOffset(a),
                l = this;
              (this._tweenable = new f()),
                this._tweenable
                  .tween({
                    from: e.extend({ offset: j }, i.from),
                    to: e.extend({ offset: k }, i.to),
                    duration: b.duration,
                    delay: b.delay,
                    easing: h,
                    step: function (a) {
                      l.path.style.strokeDashoffset = a.offset;
                      var c = b.shape || l;
                      b.step(a, c, b.attachment);
                    },
                  })
                  .then(function (a) {
                    e.isFunction(c) && c();
                  })
                  .catch(function (a) {
                    throw (console.error("Error in tweening:", a), a);
                  });
            }),
            (h.prototype._getComputedDashOffset = function () {
              var a = window.getComputedStyle(this.path, null);
              return parseFloat(a.getPropertyValue("stroke-dashoffset"), 10);
            }),
            (h.prototype._progressToOffset = function (a) {
              var b = this.path.getTotalLength();
              return b - a * b;
            }),
            (h.prototype._resolveFromAndTo = function (a, b, c) {
              return c.from && c.to
                ? { from: c.from, to: c.to }
                : { from: this._calculateFrom(b), to: this._calculateTo(a, b) };
            }),
            (h.prototype._calculateFrom = function (a) {
              return d.interpolate(
                this._opts.from,
                this._opts.to,
                this.value(),
                a
              );
            }),
            (h.prototype._calculateTo = function (a, b) {
              return d.interpolate(this._opts.from, this._opts.to, a, b);
            }),
            (h.prototype._stopTween = function () {
              null !== this._tweenable &&
                (this._tweenable.stop(!0), (this._tweenable = null));
            }),
            (h.prototype._easing = function (a) {
              return g.hasOwnProperty(a) ? g[a] : a;
            }),
            (b.exports = h);
        },
        { "./utils": 10, shifty: 2 },
      ],
      7: [
        function (a, b, c) {
          var d = a("./shape"),
            e = a("./circle"),
            f = a("./utils"),
            g = function (a, b) {
              (this._pathTemplate =
                "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0"),
                (this.containerAspectRatio = 2),
                d.apply(this, arguments);
            };
          (g.prototype = new d()),
            (g.prototype.constructor = g),
            (g.prototype._initializeSvg = function (a, b) {
              a.setAttribute("viewBox", "0 0 100 50");
            }),
            (g.prototype._initializeTextContainer = function (a, b, c) {
              a.text.style &&
                ((c.style.top = "auto"),
                (c.style.bottom = "0"),
                a.text.alignToBottom
                  ? f.setStyle(c, "transform", "translate(-50%, 0)")
                  : f.setStyle(c, "transform", "translate(-50%, 50%)"));
            }),
            (g.prototype._pathString = e.prototype._pathString),
            (g.prototype._trailString = e.prototype._trailString),
            (b.exports = g);
        },
        { "./circle": 3, "./shape": 8, "./utils": 10 },
      ],
      8: [
        function (a, b, c) {
          var d = a("./path"),
            e = a("./utils"),
            f = "Object is destroyed",
            g = function a(b, c) {
              if (!(this instanceof a))
                throw new Error("Constructor was called without new keyword");
              if (0 !== arguments.length) {
                (this._opts = e.extend(
                  {
                    color: "#555",
                    strokeWidth: 1,
                    trailColor: null,
                    trailWidth: null,
                    fill: null,
                    text: {
                      style: {
                        color: null,
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        padding: 0,
                        margin: 0,
                        transform: {
                          prefix: !0,
                          value: "translate(-50%, -50%)",
                        },
                      },
                      autoStyleContainer: !0,
                      alignToBottom: !0,
                      value: null,
                      className: "progressbar-text",
                    },
                    svgStyle: { display: "block", width: "100%" },
                    warnings: !1,
                  },
                  c,
                  !0
                )),
                  e.isObject(c) &&
                    void 0 !== c.svgStyle &&
                    (this._opts.svgStyle = c.svgStyle),
                  e.isObject(c) &&
                    e.isObject(c.text) &&
                    void 0 !== c.text.style &&
                    (this._opts.text.style = c.text.style);
                var f,
                  g = this._createSvgView(this._opts);
                if (!(f = e.isString(b) ? document.querySelector(b) : b))
                  throw new Error("Container does not exist: " + b);
                (this._container = f),
                  this._container.appendChild(g.svg),
                  this._opts.warnings &&
                    this._warnContainerAspectRatio(this._container),
                  this._opts.svgStyle &&
                    e.setStyles(g.svg, this._opts.svgStyle),
                  (this.svg = g.svg),
                  (this.path = g.path),
                  (this.trail = g.trail),
                  (this.text = null);
                var h = e.extend(
                  { attachment: void 0, shape: this },
                  this._opts
                );
                (this._progressPath = new d(g.path, h)),
                  e.isObject(this._opts.text) &&
                    null !== this._opts.text.value &&
                    this.setText(this._opts.text.value);
              }
            };
          (g.prototype.animate = function (a, b, c) {
            if (null === this._progressPath) throw new Error(f);
            this._progressPath.animate(a, b, c);
          }),
            (g.prototype.stop = function () {
              if (null === this._progressPath) throw new Error(f);
              void 0 !== this._progressPath && this._progressPath.stop();
            }),
            (g.prototype.pause = function () {
              if (null === this._progressPath) throw new Error(f);
              void 0 !== this._progressPath &&
                this._progressPath._tweenable &&
                this._progressPath._tweenable.pause();
            }),
            (g.prototype.resume = function () {
              if (null === this._progressPath) throw new Error(f);
              void 0 !== this._progressPath &&
                this._progressPath._tweenable &&
                this._progressPath._tweenable.resume();
            }),
            (g.prototype.destroy = function () {
              if (null === this._progressPath) throw new Error(f);
              this.stop(),
                this.svg.parentNode.removeChild(this.svg),
                (this.svg = null),
                (this.path = null),
                (this.trail = null),
                (this._progressPath = null),
                null !== this.text &&
                  (this.text.parentNode.removeChild(this.text),
                  (this.text = null));
            }),
            (g.prototype.set = function (a) {
              if (null === this._progressPath) throw new Error(f);
              this._progressPath.set(a);
            }),
            (g.prototype.value = function () {
              if (null === this._progressPath) throw new Error(f);
              return void 0 === this._progressPath
                ? 0
                : this._progressPath.value();
            }),
            (g.prototype.setText = function (a) {
              if (null === this._progressPath) throw new Error(f);
              null === this.text &&
                ((this.text = this._createTextContainer(
                  this._opts,
                  this._container
                )),
                this._container.appendChild(this.text)),
                e.isObject(a)
                  ? (e.removeChildren(this.text), this.text.appendChild(a))
                  : (this.text.innerHTML = a);
            }),
            (g.prototype._createSvgView = function (a) {
              var b = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
              );
              this._initializeSvg(b, a);
              var c = null;
              (a.trailColor || a.trailWidth) &&
                ((c = this._createTrail(a)), b.appendChild(c));
              var d = this._createPath(a);
              return b.appendChild(d), { svg: b, path: d, trail: c };
            }),
            (g.prototype._initializeSvg = function (a, b) {
              a.setAttribute("viewBox", "0 0 100 100");
            }),
            (g.prototype._createPath = function (a) {
              var b = this._pathString(a);
              return this._createPathElement(b, a);
            }),
            (g.prototype._createTrail = function (a) {
              var b = this._trailString(a),
                c = e.extend({}, a);
              return (
                c.trailColor || (c.trailColor = "#eee"),
                c.trailWidth || (c.trailWidth = c.strokeWidth),
                (c.color = c.trailColor),
                (c.strokeWidth = c.trailWidth),
                (c.fill = null),
                this._createPathElement(b, c)
              );
            }),
            (g.prototype._createPathElement = function (a, b) {
              var c = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              );
              return (
                c.setAttribute("d", a),
                c.setAttribute("stroke", b.color),
                c.setAttribute("stroke-width", b.strokeWidth),
                b.fill
                  ? c.setAttribute("fill", b.fill)
                  : c.setAttribute("fill-opacity", "0"),
                c
              );
            }),
            (g.prototype._createTextContainer = function (a, b) {
              var c = document.createElement("div");
              c.className = a.text.className;
              var d = a.text.style;
              return (
                d &&
                  (a.text.autoStyleContainer && (b.style.position = "relative"),
                  e.setStyles(c, d),
                  d.color || (c.style.color = a.color)),
                this._initializeTextContainer(a, b, c),
                c
              );
            }),
            (g.prototype._initializeTextContainer = function (a, b, c) {}),
            (g.prototype._pathString = function (a) {
              throw new Error("Override this function for each progress bar");
            }),
            (g.prototype._trailString = function (a) {
              throw new Error("Override this function for each progress bar");
            }),
            (g.prototype._warnContainerAspectRatio = function (a) {
              if (this.containerAspectRatio) {
                var b = window.getComputedStyle(a, null),
                  c = parseFloat(b.getPropertyValue("width"), 10),
                  d = parseFloat(b.getPropertyValue("height"), 10);
                e.floatEquals(this.containerAspectRatio, c / d) ||
                  (console.warn(
                    "Incorrect aspect ratio of container",
                    "#" + a.id,
                    "detected:",
                    b.getPropertyValue("width") + "(width)",
                    "/",
                    b.getPropertyValue("height") + "(height)",
                    "=",
                    c / d
                  ),
                  console.warn(
                    "Aspect ratio of should be",
                    this.containerAspectRatio
                  ));
              }
            }),
            (b.exports = g);
        },
        { "./path": 6, "./utils": 10 },
      ],
      9: [
        function (a, b, c) {
          var d = a("./shape"),
            e = a("./utils"),
            f = function (a, b) {
              (this._pathTemplate =
                "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}"),
                (this._trailTemplate =
                  "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}"),
                d.apply(this, arguments);
            };
          (f.prototype = new d()),
            (f.prototype.constructor = f),
            (f.prototype._pathString = function (a) {
              var b = 100 - a.strokeWidth / 2;
              return e.render(this._pathTemplate, {
                width: b,
                strokeWidth: a.strokeWidth,
                halfOfStrokeWidth: a.strokeWidth / 2,
              });
            }),
            (f.prototype._trailString = function (a) {
              var b = 100 - a.strokeWidth / 2;
              return e.render(this._trailTemplate, {
                width: b,
                strokeWidth: a.strokeWidth,
                halfOfStrokeWidth: a.strokeWidth / 2,
                startMargin: a.strokeWidth / 2 - a.trailWidth / 2,
              });
            }),
            (b.exports = f);
        },
        { "./shape": 8, "./utils": 10 },
      ],
      10: [
        function (a, b, c) {
          function d(a, b) {
            var c = a;
            for (var d in b)
              if (b.hasOwnProperty(d)) {
                var e = b[d],
                  f = "\\{" + d + "\\}",
                  g = new RegExp(f, "g");
                c = c.replace(g, e);
              }
            return c;
          }
          function e(a, b, c) {
            for (var d = a.style, e = 0; e < p.length; ++e) {
              d[p[e] + g(b)] = c;
            }
            d[b] = c;
          }
          function f(a, b) {
            l(b, function (b, c) {
              null !== b &&
                void 0 !== b &&
                (k(b) && !0 === b.prefix ? e(a, c, b.value) : (a.style[c] = b));
            });
          }
          function g(a) {
            return a.charAt(0).toUpperCase() + a.slice(1);
          }
          function h(a) {
            return "string" == typeof a || a instanceof String;
          }
          function i(a) {
            return "function" == typeof a;
          }
          function j(a) {
            return "[object Array]" === Object.prototype.toString.call(a);
          }
          function k(a) {
            return !j(a) && "object" == typeof a && !!a;
          }
          function l(a, b) {
            for (var c in a)
              if (a.hasOwnProperty(c)) {
                var d = a[c];
                b(d, c);
              }
          }
          function m(a, b) {
            return Math.abs(a - b) < q;
          }
          function n(a) {
            for (; a.firstChild; ) a.removeChild(a.firstChild);
          }
          var o = a("lodash.merge"),
            p = "Webkit Moz O ms".split(" "),
            q = 0.001;
          b.exports = {
            extend: o,
            render: d,
            setStyle: e,
            setStyles: f,
            capitalize: g,
            isString: h,
            isFunction: i,
            isObject: k,
            forEachObject: l,
            floatEquals: m,
            removeChildren: n,
          };
        },
        { "lodash.merge": 1 },
      ],
    },
    {},
    [5]
  )(5);
});
//# sourceMappingURL=progressbar.min.js.map
