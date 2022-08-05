import C from "react";
var ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Wt = Array.isArray, I = Wt, zt = I;
function Yt() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return zt(e) ? e : [e];
}
var qt = Yt, Vt = typeof ue == "object" && ue && ue.Object === Object && ue, Wr = Vt, Jt = Wr, Xt = typeof self == "object" && self && self.Object === Object && self, Zt = Jt || Xt || Function("return this")(), F = Zt, Qt = F, ea = Qt.Symbol, ve = ea, pr = ve, zr = Object.prototype, ra = zr.hasOwnProperty, ta = zr.toString, Q = pr ? pr.toStringTag : void 0;
function aa(e) {
  var r = ra.call(e, Q), a = e[Q];
  try {
    e[Q] = void 0;
    var n = !0;
  } catch {
  }
  var o = ta.call(e);
  return n && (r ? e[Q] = a : delete e[Q]), o;
}
var na = aa, ia = Object.prototype, sa = ia.toString;
function oa(e) {
  return sa.call(e);
}
var ua = oa, dr = ve, fa = na, ca = ua, la = "[object Null]", va = "[object Undefined]", hr = dr ? dr.toStringTag : void 0;
function pa(e) {
  return e == null ? e === void 0 ? va : la : hr && hr in Object(e) ? fa(e) : ca(e);
}
var B = pa;
function da(e, r) {
  return function(a) {
    return e(r(a));
  };
}
var Yr = da, ha = Yr, _a = ha(Object.getPrototypeOf, Object), ga = _a;
function ya(e) {
  return e != null && typeof e == "object";
}
var K = ya, ba = B, $a = ga, ma = K, Ta = "[object Object]", Oa = Function.prototype, Ea = Object.prototype, qr = Oa.toString, Sa = Ea.hasOwnProperty, Aa = qr.call(Object);
function Ca(e) {
  if (!ma(e) || ba(e) != Ta)
    return !1;
  var r = $a(e);
  if (r === null)
    return !0;
  var a = Sa.call(r, "constructor") && r.constructor;
  return typeof a == "function" && a instanceof a && qr.call(a) == Aa;
}
var Pa = Ca;
function wa(e, r, a, n) {
  var o = -1, s = e == null ? 0 : e.length;
  for (n && s && (a = e[++o]); ++o < s; )
    a = r(a, e[o], o, e);
  return a;
}
var Ra = wa;
function ja(e) {
  return function(r, a, n) {
    for (var o = -1, s = Object(r), c = n(r), l = c.length; l--; ) {
      var f = c[e ? l : ++o];
      if (a(s[f], f, s) === !1)
        break;
    }
    return r;
  };
}
var xa = ja, Ia = xa, Da = Ia(), Ma = Da;
function Fa(e, r) {
  for (var a = -1, n = Array(e); ++a < e; )
    n[a] = r(a);
  return n;
}
var La = Fa, ka = B, Na = K, Ga = "[object Arguments]";
function Ua(e) {
  return Na(e) && ka(e) == Ga;
}
var Ha = Ua, _r = Ha, Ba = K, Vr = Object.prototype, Ka = Vr.hasOwnProperty, Wa = Vr.propertyIsEnumerable, za = _r(function() {
  return arguments;
}()) ? _r : function(e) {
  return Ba(e) && Ka.call(e, "callee") && !Wa.call(e, "callee");
}, Jr = za, ce = { exports: {} };
function Ya() {
  return !1;
}
var qa = Ya;
(function(e, r) {
  var a = F, n = qa, o = r && !r.nodeType && r, s = o && !0 && e && !e.nodeType && e, c = s && s.exports === o, l = c ? a.Buffer : void 0, f = l ? l.isBuffer : void 0, p = f || n;
  e.exports = p;
})(ce, ce.exports);
var Va = 9007199254740991, Ja = /^(?:0|[1-9]\d*)$/;
function Xa(e, r) {
  var a = typeof e;
  return r = r == null ? Va : r, !!r && (a == "number" || a != "symbol" && Ja.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var Xr = Xa, Za = 9007199254740991;
function Qa(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Za;
}
var Me = Qa, en = B, rn = Me, tn = K, an = "[object Arguments]", nn = "[object Array]", sn = "[object Boolean]", on = "[object Date]", un = "[object Error]", fn = "[object Function]", cn = "[object Map]", ln = "[object Number]", vn = "[object Object]", pn = "[object RegExp]", dn = "[object Set]", hn = "[object String]", _n = "[object WeakMap]", gn = "[object ArrayBuffer]", yn = "[object DataView]", bn = "[object Float32Array]", $n = "[object Float64Array]", mn = "[object Int8Array]", Tn = "[object Int16Array]", On = "[object Int32Array]", En = "[object Uint8Array]", Sn = "[object Uint8ClampedArray]", An = "[object Uint16Array]", Cn = "[object Uint32Array]", m = {};
m[bn] = m[$n] = m[mn] = m[Tn] = m[On] = m[En] = m[Sn] = m[An] = m[Cn] = !0;
m[an] = m[nn] = m[gn] = m[sn] = m[yn] = m[on] = m[un] = m[fn] = m[cn] = m[ln] = m[vn] = m[pn] = m[dn] = m[hn] = m[_n] = !1;
function Pn(e) {
  return tn(e) && rn(e.length) && !!m[en(e)];
}
var wn = Pn;
function Rn(e) {
  return function(r) {
    return e(r);
  };
}
var jn = Rn, we = { exports: {} };
(function(e, r) {
  var a = Wr, n = r && !r.nodeType && r, o = n && !0 && e && !e.nodeType && e, s = o && o.exports === n, c = s && a.process, l = function() {
    try {
      var f = o && o.require && o.require("util").types;
      return f || c && c.binding && c.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(we, we.exports);
var xn = wn, In = jn, gr = we.exports, yr = gr && gr.isTypedArray, Dn = yr ? In(yr) : xn, Zr = Dn, Mn = La, Fn = Jr, Ln = I, kn = ce.exports, Nn = Xr, Gn = Zr, Un = Object.prototype, Hn = Un.hasOwnProperty;
function Bn(e, r) {
  var a = Ln(e), n = !a && Fn(e), o = !a && !n && kn(e), s = !a && !n && !o && Gn(e), c = a || n || o || s, l = c ? Mn(e.length, String) : [], f = l.length;
  for (var p in e)
    (r || Hn.call(e, p)) && !(c && (p == "length" || o && (p == "offset" || p == "parent") || s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || Nn(p, f))) && l.push(p);
  return l;
}
var Kn = Bn, Wn = Object.prototype;
function zn(e) {
  var r = e && e.constructor, a = typeof r == "function" && r.prototype || Wn;
  return e === a;
}
var Yn = zn, qn = Yr, Vn = qn(Object.keys, Object), Jn = Vn, Xn = Yn, Zn = Jn, Qn = Object.prototype, ei = Qn.hasOwnProperty;
function ri(e) {
  if (!Xn(e))
    return Zn(e);
  var r = [];
  for (var a in Object(e))
    ei.call(e, a) && a != "constructor" && r.push(a);
  return r;
}
var ti = ri;
function ai(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var Fe = ai, ni = B, ii = Fe, si = "[object AsyncFunction]", oi = "[object Function]", ui = "[object GeneratorFunction]", fi = "[object Proxy]";
function ci(e) {
  if (!ii(e))
    return !1;
  var r = ni(e);
  return r == oi || r == ui || r == si || r == fi;
}
var Qr = ci, li = Qr, vi = Me;
function pi(e) {
  return e != null && vi(e.length) && !li(e);
}
var et = pi, di = Kn, hi = ti, _i = et;
function gi(e) {
  return _i(e) ? di(e) : hi(e);
}
var Le = gi, yi = Ma, bi = Le;
function $i(e, r) {
  return e && yi(e, r, bi);
}
var mi = $i, Ti = et;
function Oi(e, r) {
  return function(a, n) {
    if (a == null)
      return a;
    if (!Ti(a))
      return e(a, n);
    for (var o = a.length, s = r ? o : -1, c = Object(a); (r ? s-- : ++s < o) && n(c[s], s, c) !== !1; )
      ;
    return a;
  };
}
var Ei = Oi, Si = mi, Ai = Ei, Ci = Ai(Si), Pi = Ci;
function wi() {
  this.__data__ = [], this.size = 0;
}
var Ri = wi;
function ji(e, r) {
  return e === r || e !== e && r !== r;
}
var rt = ji, xi = rt;
function Ii(e, r) {
  for (var a = e.length; a--; )
    if (xi(e[a][0], r))
      return a;
  return -1;
}
var pe = Ii, Di = pe, Mi = Array.prototype, Fi = Mi.splice;
function Li(e) {
  var r = this.__data__, a = Di(r, e);
  if (a < 0)
    return !1;
  var n = r.length - 1;
  return a == n ? r.pop() : Fi.call(r, a, 1), --this.size, !0;
}
var ki = Li, Ni = pe;
function Gi(e) {
  var r = this.__data__, a = Ni(r, e);
  return a < 0 ? void 0 : r[a][1];
}
var Ui = Gi, Hi = pe;
function Bi(e) {
  return Hi(this.__data__, e) > -1;
}
var Ki = Bi, Wi = pe;
function zi(e, r) {
  var a = this.__data__, n = Wi(a, e);
  return n < 0 ? (++this.size, a.push([e, r])) : a[n][1] = r, this;
}
var Yi = zi, qi = Ri, Vi = ki, Ji = Ui, Xi = Ki, Zi = Yi;
function W(e) {
  var r = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++r < a; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
W.prototype.clear = qi;
W.prototype.delete = Vi;
W.prototype.get = Ji;
W.prototype.has = Xi;
W.prototype.set = Zi;
var de = W, Qi = de;
function es() {
  this.__data__ = new Qi(), this.size = 0;
}
var rs = es;
function ts(e) {
  var r = this.__data__, a = r.delete(e);
  return this.size = r.size, a;
}
var as = ts;
function ns(e) {
  return this.__data__.get(e);
}
var is = ns;
function ss(e) {
  return this.__data__.has(e);
}
var os = ss, us = F, fs = us["__core-js_shared__"], cs = fs, Ae = cs, br = function() {
  var e = /[^.]+$/.exec(Ae && Ae.keys && Ae.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ls(e) {
  return !!br && br in e;
}
var vs = ls, ps = Function.prototype, ds = ps.toString;
function hs(e) {
  if (e != null) {
    try {
      return ds.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var tt = hs, _s = Qr, gs = vs, ys = Fe, bs = tt, $s = /[\\^$.*+?()[\]{}|]/g, ms = /^\[object .+?Constructor\]$/, Ts = Function.prototype, Os = Object.prototype, Es = Ts.toString, Ss = Os.hasOwnProperty, As = RegExp(
  "^" + Es.call(Ss).replace($s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Cs(e) {
  if (!ys(e) || gs(e))
    return !1;
  var r = _s(e) ? As : ms;
  return r.test(bs(e));
}
var Ps = Cs;
function ws(e, r) {
  return e == null ? void 0 : e[r];
}
var Rs = ws, js = Ps, xs = Rs;
function Is(e, r) {
  var a = xs(e, r);
  return js(a) ? a : void 0;
}
var z = Is, Ds = z, Ms = F, Fs = Ds(Ms, "Map"), ke = Fs, Ls = z, ks = Ls(Object, "create"), he = ks, $r = he;
function Ns() {
  this.__data__ = $r ? $r(null) : {}, this.size = 0;
}
var Gs = Ns;
function Us(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var Hs = Us, Bs = he, Ks = "__lodash_hash_undefined__", Ws = Object.prototype, zs = Ws.hasOwnProperty;
function Ys(e) {
  var r = this.__data__;
  if (Bs) {
    var a = r[e];
    return a === Ks ? void 0 : a;
  }
  return zs.call(r, e) ? r[e] : void 0;
}
var qs = Ys, Vs = he, Js = Object.prototype, Xs = Js.hasOwnProperty;
function Zs(e) {
  var r = this.__data__;
  return Vs ? r[e] !== void 0 : Xs.call(r, e);
}
var Qs = Zs, eo = he, ro = "__lodash_hash_undefined__";
function to(e, r) {
  var a = this.__data__;
  return this.size += this.has(e) ? 0 : 1, a[e] = eo && r === void 0 ? ro : r, this;
}
var ao = to, no = Gs, io = Hs, so = qs, oo = Qs, uo = ao;
function Y(e) {
  var r = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++r < a; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
Y.prototype.clear = no;
Y.prototype.delete = io;
Y.prototype.get = so;
Y.prototype.has = oo;
Y.prototype.set = uo;
var fo = Y, mr = fo, co = de, lo = ke;
function vo() {
  this.size = 0, this.__data__ = {
    hash: new mr(),
    map: new (lo || co)(),
    string: new mr()
  };
}
var po = vo;
function ho(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var _o = ho, go = _o;
function yo(e, r) {
  var a = e.__data__;
  return go(r) ? a[typeof r == "string" ? "string" : "hash"] : a.map;
}
var _e = yo, bo = _e;
function $o(e) {
  var r = bo(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var mo = $o, To = _e;
function Oo(e) {
  return To(this, e).get(e);
}
var Eo = Oo, So = _e;
function Ao(e) {
  return So(this, e).has(e);
}
var Co = Ao, Po = _e;
function wo(e, r) {
  var a = Po(this, e), n = a.size;
  return a.set(e, r), this.size += a.size == n ? 0 : 1, this;
}
var Ro = wo, jo = po, xo = mo, Io = Eo, Do = Co, Mo = Ro;
function q(e) {
  var r = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++r < a; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
q.prototype.clear = jo;
q.prototype.delete = xo;
q.prototype.get = Io;
q.prototype.has = Do;
q.prototype.set = Mo;
var Ne = q, Fo = de, Lo = ke, ko = Ne, No = 200;
function Go(e, r) {
  var a = this.__data__;
  if (a instanceof Fo) {
    var n = a.__data__;
    if (!Lo || n.length < No - 1)
      return n.push([e, r]), this.size = ++a.size, this;
    a = this.__data__ = new ko(n);
  }
  return a.set(e, r), this.size = a.size, this;
}
var Uo = Go, Ho = de, Bo = rs, Ko = as, Wo = is, zo = os, Yo = Uo;
function V(e) {
  var r = this.__data__ = new Ho(e);
  this.size = r.size;
}
V.prototype.clear = Bo;
V.prototype.delete = Ko;
V.prototype.get = Wo;
V.prototype.has = zo;
V.prototype.set = Yo;
var at = V, qo = "__lodash_hash_undefined__";
function Vo(e) {
  return this.__data__.set(e, qo), this;
}
var Jo = Vo;
function Xo(e) {
  return this.__data__.has(e);
}
var Zo = Xo, Qo = Ne, eu = Jo, ru = Zo;
function le(e) {
  var r = -1, a = e == null ? 0 : e.length;
  for (this.__data__ = new Qo(); ++r < a; )
    this.add(e[r]);
}
le.prototype.add = le.prototype.push = eu;
le.prototype.has = ru;
var tu = le;
function au(e, r) {
  for (var a = -1, n = e == null ? 0 : e.length; ++a < n; )
    if (r(e[a], a, e))
      return !0;
  return !1;
}
var nu = au;
function iu(e, r) {
  return e.has(r);
}
var su = iu, ou = tu, uu = nu, fu = su, cu = 1, lu = 2;
function vu(e, r, a, n, o, s) {
  var c = a & cu, l = e.length, f = r.length;
  if (l != f && !(c && f > l))
    return !1;
  var p = s.get(e), g = s.get(r);
  if (p && g)
    return p == r && g == e;
  var b = -1, y = !0, P = a & lu ? new ou() : void 0;
  for (s.set(e, r), s.set(r, e); ++b < l; ) {
    var S = e[b], R = r[b];
    if (n)
      var x = c ? n(R, S, b, r, e, s) : n(S, R, b, e, r, s);
    if (x !== void 0) {
      if (x)
        continue;
      y = !1;
      break;
    }
    if (P) {
      if (!uu(r, function(w, T) {
        if (!fu(P, T) && (S === w || o(S, w, a, n, s)))
          return P.push(T);
      })) {
        y = !1;
        break;
      }
    } else if (!(S === R || o(S, R, a, n, s))) {
      y = !1;
      break;
    }
  }
  return s.delete(e), s.delete(r), y;
}
var nt = vu, pu = F, du = pu.Uint8Array, hu = du;
function _u(e) {
  var r = -1, a = Array(e.size);
  return e.forEach(function(n, o) {
    a[++r] = [o, n];
  }), a;
}
var gu = _u;
function yu(e) {
  var r = -1, a = Array(e.size);
  return e.forEach(function(n) {
    a[++r] = n;
  }), a;
}
var bu = yu, Tr = ve, Or = hu, $u = rt, mu = nt, Tu = gu, Ou = bu, Eu = 1, Su = 2, Au = "[object Boolean]", Cu = "[object Date]", Pu = "[object Error]", wu = "[object Map]", Ru = "[object Number]", ju = "[object RegExp]", xu = "[object Set]", Iu = "[object String]", Du = "[object Symbol]", Mu = "[object ArrayBuffer]", Fu = "[object DataView]", Er = Tr ? Tr.prototype : void 0, Ce = Er ? Er.valueOf : void 0;
function Lu(e, r, a, n, o, s, c) {
  switch (a) {
    case Fu:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      e = e.buffer, r = r.buffer;
    case Mu:
      return !(e.byteLength != r.byteLength || !s(new Or(e), new Or(r)));
    case Au:
    case Cu:
    case Ru:
      return $u(+e, +r);
    case Pu:
      return e.name == r.name && e.message == r.message;
    case ju:
    case Iu:
      return e == r + "";
    case wu:
      var l = Tu;
    case xu:
      var f = n & Eu;
      if (l || (l = Ou), e.size != r.size && !f)
        return !1;
      var p = c.get(e);
      if (p)
        return p == r;
      n |= Su, c.set(e, r);
      var g = mu(l(e), l(r), n, o, s, c);
      return c.delete(e), g;
    case Du:
      if (Ce)
        return Ce.call(e) == Ce.call(r);
  }
  return !1;
}
var ku = Lu;
function Nu(e, r) {
  for (var a = -1, n = r.length, o = e.length; ++a < n; )
    e[o + a] = r[a];
  return e;
}
var Gu = Nu, Uu = Gu, Hu = I;
function Bu(e, r, a) {
  var n = r(e);
  return Hu(e) ? n : Uu(n, a(e));
}
var Ku = Bu;
function Wu(e, r) {
  for (var a = -1, n = e == null ? 0 : e.length, o = 0, s = []; ++a < n; ) {
    var c = e[a];
    r(c, a, e) && (s[o++] = c);
  }
  return s;
}
var zu = Wu;
function Yu() {
  return [];
}
var qu = Yu, Vu = zu, Ju = qu, Xu = Object.prototype, Zu = Xu.propertyIsEnumerable, Sr = Object.getOwnPropertySymbols, Qu = Sr ? function(e) {
  return e == null ? [] : (e = Object(e), Vu(Sr(e), function(r) {
    return Zu.call(e, r);
  }));
} : Ju, ef = Qu, rf = Ku, tf = ef, af = Le;
function nf(e) {
  return rf(e, af, tf);
}
var sf = nf, Ar = sf, of = 1, uf = Object.prototype, ff = uf.hasOwnProperty;
function cf(e, r, a, n, o, s) {
  var c = a & of, l = Ar(e), f = l.length, p = Ar(r), g = p.length;
  if (f != g && !c)
    return !1;
  for (var b = f; b--; ) {
    var y = l[b];
    if (!(c ? y in r : ff.call(r, y)))
      return !1;
  }
  var P = s.get(e), S = s.get(r);
  if (P && S)
    return P == r && S == e;
  var R = !0;
  s.set(e, r), s.set(r, e);
  for (var x = c; ++b < f; ) {
    y = l[b];
    var w = e[y], T = r[y];
    if (n)
      var te = c ? n(T, w, y, r, e, s) : n(w, T, y, e, r, s);
    if (!(te === void 0 ? w === T || o(w, T, a, n, s) : te)) {
      R = !1;
      break;
    }
    x || (x = y == "constructor");
  }
  if (R && !x) {
    var N = e.constructor, G = r.constructor;
    N != G && "constructor" in e && "constructor" in r && !(typeof N == "function" && N instanceof N && typeof G == "function" && G instanceof G) && (R = !1);
  }
  return s.delete(e), s.delete(r), R;
}
var lf = cf, vf = z, pf = F, df = vf(pf, "DataView"), hf = df, _f = z, gf = F, yf = _f(gf, "Promise"), bf = yf, $f = z, mf = F, Tf = $f(mf, "Set"), Of = Tf, Ef = z, Sf = F, Af = Ef(Sf, "WeakMap"), Cf = Af, Re = hf, je = ke, xe = bf, Ie = Of, De = Cf, it = B, J = tt, Cr = "[object Map]", Pf = "[object Object]", Pr = "[object Promise]", wr = "[object Set]", Rr = "[object WeakMap]", jr = "[object DataView]", wf = J(Re), Rf = J(je), jf = J(xe), xf = J(Ie), If = J(De), k = it;
(Re && k(new Re(new ArrayBuffer(1))) != jr || je && k(new je()) != Cr || xe && k(xe.resolve()) != Pr || Ie && k(new Ie()) != wr || De && k(new De()) != Rr) && (k = function(e) {
  var r = it(e), a = r == Pf ? e.constructor : void 0, n = a ? J(a) : "";
  if (n)
    switch (n) {
      case wf:
        return jr;
      case Rf:
        return Cr;
      case jf:
        return Pr;
      case xf:
        return wr;
      case If:
        return Rr;
    }
  return r;
});
var Df = k, Pe = at, Mf = nt, Ff = ku, Lf = lf, xr = Df, Ir = I, Dr = ce.exports, kf = Zr, Nf = 1, Mr = "[object Arguments]", Fr = "[object Array]", fe = "[object Object]", Gf = Object.prototype, Lr = Gf.hasOwnProperty;
function Uf(e, r, a, n, o, s) {
  var c = Ir(e), l = Ir(r), f = c ? Fr : xr(e), p = l ? Fr : xr(r);
  f = f == Mr ? fe : f, p = p == Mr ? fe : p;
  var g = f == fe, b = p == fe, y = f == p;
  if (y && Dr(e)) {
    if (!Dr(r))
      return !1;
    c = !0, g = !1;
  }
  if (y && !g)
    return s || (s = new Pe()), c || kf(e) ? Mf(e, r, a, n, o, s) : Ff(e, r, f, a, n, o, s);
  if (!(a & Nf)) {
    var P = g && Lr.call(e, "__wrapped__"), S = b && Lr.call(r, "__wrapped__");
    if (P || S) {
      var R = P ? e.value() : e, x = S ? r.value() : r;
      return s || (s = new Pe()), o(R, x, a, n, s);
    }
  }
  return y ? (s || (s = new Pe()), Lf(e, r, a, n, o, s)) : !1;
}
var Hf = Uf, Bf = Hf, kr = K;
function st(e, r, a, n, o) {
  return e === r ? !0 : e == null || r == null || !kr(e) && !kr(r) ? e !== e && r !== r : Bf(e, r, a, n, st, o);
}
var ot = st, Kf = at, Wf = ot, zf = 1, Yf = 2;
function qf(e, r, a, n) {
  var o = a.length, s = o, c = !n;
  if (e == null)
    return !s;
  for (e = Object(e); o--; ) {
    var l = a[o];
    if (c && l[2] ? l[1] !== e[l[0]] : !(l[0] in e))
      return !1;
  }
  for (; ++o < s; ) {
    l = a[o];
    var f = l[0], p = e[f], g = l[1];
    if (c && l[2]) {
      if (p === void 0 && !(f in e))
        return !1;
    } else {
      var b = new Kf();
      if (n)
        var y = n(p, g, f, e, r, b);
      if (!(y === void 0 ? Wf(g, p, zf | Yf, n, b) : y))
        return !1;
    }
  }
  return !0;
}
var Vf = qf, Jf = Fe;
function Xf(e) {
  return e === e && !Jf(e);
}
var ut = Xf, Zf = ut, Qf = Le;
function ec(e) {
  for (var r = Qf(e), a = r.length; a--; ) {
    var n = r[a], o = e[n];
    r[a] = [n, o, Zf(o)];
  }
  return r;
}
var rc = ec;
function tc(e, r) {
  return function(a) {
    return a == null ? !1 : a[e] === r && (r !== void 0 || e in Object(a));
  };
}
var ft = tc, ac = Vf, nc = rc, ic = ft;
function sc(e) {
  var r = nc(e);
  return r.length == 1 && r[0][2] ? ic(r[0][0], r[0][1]) : function(a) {
    return a === e || ac(a, e, r);
  };
}
var oc = sc, uc = B, fc = K, cc = "[object Symbol]";
function lc(e) {
  return typeof e == "symbol" || fc(e) && uc(e) == cc;
}
var Ge = lc, vc = I, pc = Ge, dc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, hc = /^\w*$/;
function _c(e, r) {
  if (vc(e))
    return !1;
  var a = typeof e;
  return a == "number" || a == "symbol" || a == "boolean" || e == null || pc(e) ? !0 : hc.test(e) || !dc.test(e) || r != null && e in Object(r);
}
var Ue = _c, ct = Ne, gc = "Expected a function";
function He(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(gc);
  var a = function() {
    var n = arguments, o = r ? r.apply(this, n) : n[0], s = a.cache;
    if (s.has(o))
      return s.get(o);
    var c = e.apply(this, n);
    return a.cache = s.set(o, c) || s, c;
  };
  return a.cache = new (He.Cache || ct)(), a;
}
He.Cache = ct;
var yc = He, bc = yc, $c = 500;
function mc(e) {
  var r = bc(e, function(n) {
    return a.size === $c && a.clear(), n;
  }), a = r.cache;
  return r;
}
var Tc = mc, Oc = Tc, Ec = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Sc = /\\(\\)?/g, Ac = Oc(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(Ec, function(a, n, o, s) {
    r.push(o ? s.replace(Sc, "$1") : n || a);
  }), r;
}), Cc = Ac;
function Pc(e, r) {
  for (var a = -1, n = e == null ? 0 : e.length, o = Array(n); ++a < n; )
    o[a] = r(e[a], a, e);
  return o;
}
var wc = Pc, Nr = ve, Rc = wc, jc = I, xc = Ge, Ic = 1 / 0, Gr = Nr ? Nr.prototype : void 0, Ur = Gr ? Gr.toString : void 0;
function lt(e) {
  if (typeof e == "string")
    return e;
  if (jc(e))
    return Rc(e, lt) + "";
  if (xc(e))
    return Ur ? Ur.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -Ic ? "-0" : r;
}
var Dc = lt, Mc = Dc;
function Fc(e) {
  return e == null ? "" : Mc(e);
}
var Lc = Fc, kc = I, Nc = Ue, Gc = Cc, Uc = Lc;
function Hc(e, r) {
  return kc(e) ? e : Nc(e, r) ? [e] : Gc(Uc(e));
}
var vt = Hc, Bc = Ge, Kc = 1 / 0;
function Wc(e) {
  if (typeof e == "string" || Bc(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -Kc ? "-0" : r;
}
var ge = Wc, zc = vt, Yc = ge;
function qc(e, r) {
  r = zc(r, e);
  for (var a = 0, n = r.length; e != null && a < n; )
    e = e[Yc(r[a++])];
  return a && a == n ? e : void 0;
}
var pt = qc, Vc = pt;
function Jc(e, r, a) {
  var n = e == null ? void 0 : Vc(e, r);
  return n === void 0 ? a : n;
}
var Xc = Jc;
function Zc(e, r) {
  return e != null && r in Object(e);
}
var Qc = Zc, el = vt, rl = Jr, tl = I, al = Xr, nl = Me, il = ge;
function sl(e, r, a) {
  r = el(r, e);
  for (var n = -1, o = r.length, s = !1; ++n < o; ) {
    var c = il(r[n]);
    if (!(s = e != null && a(e, c)))
      break;
    e = e[c];
  }
  return s || ++n != o ? s : (o = e == null ? 0 : e.length, !!o && nl(o) && al(c, o) && (tl(e) || rl(e)));
}
var ol = sl, ul = Qc, fl = ol;
function cl(e, r) {
  return e != null && fl(e, r, ul);
}
var ll = cl, vl = ot, pl = Xc, dl = ll, hl = Ue, _l = ut, gl = ft, yl = ge, bl = 1, $l = 2;
function ml(e, r) {
  return hl(e) && _l(r) ? gl(yl(e), r) : function(a) {
    var n = pl(a, e);
    return n === void 0 && n === r ? dl(a, e) : vl(r, n, bl | $l);
  };
}
var Tl = ml;
function Ol(e) {
  return e;
}
var El = Ol;
function Sl(e) {
  return function(r) {
    return r == null ? void 0 : r[e];
  };
}
var Al = Sl, Cl = pt;
function Pl(e) {
  return function(r) {
    return Cl(r, e);
  };
}
var wl = Pl, Rl = Al, jl = wl, xl = Ue, Il = ge;
function Dl(e) {
  return xl(e) ? Rl(Il(e)) : jl(e);
}
var Ml = Dl, Fl = oc, Ll = Tl, kl = El, Nl = I, Gl = Ml;
function Ul(e) {
  return typeof e == "function" ? e : e == null ? kl : typeof e == "object" ? Nl(e) ? Ll(e[0], e[1]) : Fl(e) : Gl(e);
}
var Hl = Ul;
function Bl(e, r, a, n, o) {
  return o(e, function(s, c, l) {
    a = n ? (n = !1, s) : r(a, s, c, l);
  }), a;
}
var Kl = Bl, Wl = Ra, zl = Pi, Yl = Hl, ql = Kl, Vl = I;
function Jl(e, r, a) {
  var n = Vl(e) ? Wl : ql, o = arguments.length < 3;
  return n(e, Yl(r), a, o, zl);
}
var Xl = Jl;
const Hr = (e) => e.displayName || e.name || void 0;
var dt = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Br;
function Zl() {
  if (Br)
    return ee;
  Br = 1;
  var e = C, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, f, p) {
    var g, b = {}, y = null, P = null;
    p !== void 0 && (y = "" + p), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (P = f.ref);
    for (g in f)
      n.call(f, g) && !s.hasOwnProperty(g) && (b[g] = f[g]);
    if (l && l.defaultProps)
      for (g in f = l.defaultProps, f)
        b[g] === void 0 && (b[g] = f[g]);
    return { $$typeof: r, type: l, key: y, ref: P, props: b, _owner: o.current };
  }
  return ee.Fragment = a, ee.jsx = c, ee.jsxs = c, ee;
}
var re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function Ql() {
  return Kr || (Kr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = C, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), S = Symbol.iterator, R = "@@iterator";
    function x(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = S && t[S] || t[R];
      return typeof i == "function" ? i : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(t) {
      {
        for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), v = 1; v < i; v++)
          u[v - 1] = arguments[v];
        te("error", t, u);
      }
    }
    function te(t, i, u) {
      {
        var v = w.ReactDebugCurrentFrame, _ = v.getStackAddendum();
        _ !== "" && (i += "%s", u = u.concat([_]));
        var $ = u.map(function(h) {
          return String(h);
        });
        $.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, $);
      }
    }
    var N = !1, G = !1, ht = !1, _t = !1, gt = !1, Be;
    Be = Symbol.for("react.module.reference");
    function yt(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === n || t === s || gt || t === o || t === p || t === g || _t || t === P || N || G || ht || typeof t == "object" && t !== null && (t.$$typeof === y || t.$$typeof === b || t.$$typeof === c || t.$$typeof === l || t.$$typeof === f || t.$$typeof === Be || t.getModuleId !== void 0));
    }
    function bt(t, i, u) {
      var v = t.displayName;
      if (v)
        return v;
      var _ = i.displayName || i.name || "";
      return _ !== "" ? u + "(" + _ + ")" : u;
    }
    function Ke(t) {
      return t.displayName || "Context";
    }
    function D(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case n:
          return "Fragment";
        case a:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            var i = t;
            return Ke(i) + ".Consumer";
          case c:
            var u = t;
            return Ke(u._context) + ".Provider";
          case f:
            return bt(t, t.render, "ForwardRef");
          case b:
            var v = t.displayName || null;
            return v !== null ? v : D(t.type) || "Memo";
          case y: {
            var _ = t, $ = _._payload, h = _._init;
            try {
              return D(h($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, X = 0, We, ze, Ye, qe, Ve, Je, Xe;
    function Ze() {
    }
    Ze.__reactDisabledLog = !0;
    function $t() {
      {
        if (X === 0) {
          We = console.log, ze = console.info, Ye = console.warn, qe = console.error, Ve = console.group, Je = console.groupCollapsed, Xe = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Ze,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        X++;
      }
    }
    function mt() {
      {
        if (X--, X === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, t, {
              value: We
            }),
            info: L({}, t, {
              value: ze
            }),
            warn: L({}, t, {
              value: Ye
            }),
            error: L({}, t, {
              value: qe
            }),
            group: L({}, t, {
              value: Ve
            }),
            groupCollapsed: L({}, t, {
              value: Je
            }),
            groupEnd: L({}, t, {
              value: Xe
            })
          });
        }
        X < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ye = w.ReactCurrentDispatcher, be;
    function ae(t, i, u) {
      {
        if (be === void 0)
          try {
            throw Error();
          } catch (_) {
            var v = _.stack.trim().match(/\n( *(at )?)/);
            be = v && v[1] || "";
          }
        return `
` + be + t;
      }
    }
    var $e = !1, ne;
    {
      var Tt = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new Tt();
    }
    function Qe(t, i) {
      if (!t || $e)
        return "";
      {
        var u = ne.get(t);
        if (u !== void 0)
          return u;
      }
      var v;
      $e = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = ye.current, ye.current = null, $t();
      try {
        if (i) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (M) {
              v = M;
            }
            Reflect.construct(t, [], h);
          } else {
            try {
              h.call();
            } catch (M) {
              v = M;
            }
            t.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            v = M;
          }
          t();
        }
      } catch (M) {
        if (M && v && typeof M.stack == "string") {
          for (var d = M.stack.split(`
`), A = v.stack.split(`
`), O = d.length - 1, E = A.length - 1; O >= 1 && E >= 0 && d[O] !== A[E]; )
            E--;
          for (; O >= 1 && E >= 0; O--, E--)
            if (d[O] !== A[E]) {
              if (O !== 1 || E !== 1)
                do
                  if (O--, E--, E < 0 || d[O] !== A[E]) {
                    var j = `
` + d[O].replace(" at new ", " at ");
                    return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), typeof t == "function" && ne.set(t, j), j;
                  }
                while (O >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        $e = !1, ye.current = $, mt(), Error.prepareStackTrace = _;
      }
      var H = t ? t.displayName || t.name : "", vr = H ? ae(H) : "";
      return typeof t == "function" && ne.set(t, vr), vr;
    }
    function Ot(t, i, u) {
      return Qe(t, !1);
    }
    function Et(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function ie(t, i, u) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Qe(t, Et(t));
      if (typeof t == "string")
        return ae(t);
      switch (t) {
        case p:
          return ae("Suspense");
        case g:
          return ae("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            return Ot(t.render);
          case b:
            return ie(t.type, i, u);
          case y: {
            var v = t, _ = v._payload, $ = v._init;
            try {
              return ie($(_), i, u);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, er = {}, rr = w.ReactDebugCurrentFrame;
    function oe(t) {
      if (t) {
        var i = t._owner, u = ie(t.type, t._source, i ? i.type : null);
        rr.setExtraStackFrame(u);
      } else
        rr.setExtraStackFrame(null);
    }
    function St(t, i, u, v, _) {
      {
        var $ = Function.call.bind(se);
        for (var h in t)
          if ($(t, h)) {
            var d = void 0;
            try {
              if (typeof t[h] != "function") {
                var A = Error((v || "React class") + ": " + u + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              d = t[h](i, h, v, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              d = O;
            }
            d && !(d instanceof Error) && (oe(_), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", u, h, typeof d), oe(null)), d instanceof Error && !(d.message in er) && (er[d.message] = !0, oe(_), T("Failed %s type: %s", u, d.message), oe(null));
          }
      }
    }
    var At = Array.isArray;
    function me(t) {
      return At(t);
    }
    function Ct(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, u = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return u;
      }
    }
    function Pt(t) {
      try {
        return tr(t), !1;
      } catch {
        return !0;
      }
    }
    function tr(t) {
      return "" + t;
    }
    function ar(t) {
      if (Pt(t))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ct(t)), tr(t);
    }
    var Z = w.ReactCurrentOwner, wt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, nr, ir, Te;
    Te = {};
    function Rt(t) {
      if (se.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function jt(t) {
      if (se.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function xt(t, i) {
      if (typeof t.ref == "string" && Z.current && i && Z.current.stateNode !== i) {
        var u = D(Z.current.type);
        Te[u] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(Z.current.type), t.ref), Te[u] = !0);
      }
    }
    function It(t, i) {
      {
        var u = function() {
          nr || (nr = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Dt(t, i) {
      {
        var u = function() {
          ir || (ir = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Mt = function(t, i, u, v, _, $, h) {
      var d = {
        $$typeof: r,
        type: t,
        key: i,
        ref: u,
        props: h,
        _owner: $
      };
      return d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(d, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(d, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    };
    function Ft(t, i, u, v, _) {
      {
        var $, h = {}, d = null, A = null;
        u !== void 0 && (ar(u), d = "" + u), jt(i) && (ar(i.key), d = "" + i.key), Rt(i) && (A = i.ref, xt(i, _));
        for ($ in i)
          se.call(i, $) && !wt.hasOwnProperty($) && (h[$] = i[$]);
        if (t && t.defaultProps) {
          var O = t.defaultProps;
          for ($ in O)
            h[$] === void 0 && (h[$] = O[$]);
        }
        if (d || A) {
          var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          d && It(h, E), A && Dt(h, E);
        }
        return Mt(t, d, A, _, v, Z.current, h);
      }
    }
    var Oe = w.ReactCurrentOwner, sr = w.ReactDebugCurrentFrame;
    function U(t) {
      if (t) {
        var i = t._owner, u = ie(t.type, t._source, i ? i.type : null);
        sr.setExtraStackFrame(u);
      } else
        sr.setExtraStackFrame(null);
    }
    var Ee;
    Ee = !1;
    function Se(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function or() {
      {
        if (Oe.current) {
          var t = D(Oe.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Lt(t) {
      {
        if (t !== void 0) {
          var i = t.fileName.replace(/^.*[\\\/]/, ""), u = t.lineNumber;
          return `

Check your code at ` + i + ":" + u + ".";
        }
        return "";
      }
    }
    var ur = {};
    function kt(t) {
      {
        var i = or();
        if (!i) {
          var u = typeof t == "string" ? t : t.displayName || t.name;
          u && (i = `

Check the top-level render call using <` + u + ">.");
        }
        return i;
      }
    }
    function fr(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var u = kt(i);
        if (ur[u])
          return;
        ur[u] = !0;
        var v = "";
        t && t._owner && t._owner !== Oe.current && (v = " It was passed a child from " + D(t._owner.type) + "."), U(t), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, v), U(null);
      }
    }
    function cr(t, i) {
      {
        if (typeof t != "object")
          return;
        if (me(t))
          for (var u = 0; u < t.length; u++) {
            var v = t[u];
            Se(v) && fr(v, i);
          }
        else if (Se(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = x(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var $ = _.call(t), h; !(h = $.next()).done; )
              Se(h.value) && fr(h.value, i);
        }
      }
    }
    function Nt(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var u;
        if (typeof i == "function")
          u = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === f || i.$$typeof === b))
          u = i.propTypes;
        else
          return;
        if (u) {
          var v = D(i);
          St(u, t.props, "prop", v, t);
        } else if (i.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var _ = D(i);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gt(t) {
      {
        for (var i = Object.keys(t.props), u = 0; u < i.length; u++) {
          var v = i[u];
          if (v !== "children" && v !== "key") {
            U(t), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), U(null);
            break;
          }
        }
        t.ref !== null && (U(t), T("Invalid attribute `ref` supplied to `React.Fragment`."), U(null));
      }
    }
    function lr(t, i, u, v, _, $) {
      {
        var h = yt(t);
        if (!h) {
          var d = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = Lt(_);
          A ? d += A : d += or();
          var O;
          t === null ? O = "null" : me(t) ? O = "array" : t !== void 0 && t.$$typeof === r ? (O = "<" + (D(t.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : O = typeof t, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, d);
        }
        var E = Ft(t, i, u, _, $);
        if (E == null)
          return E;
        if (h) {
          var j = i.children;
          if (j !== void 0)
            if (v)
              if (me(j)) {
                for (var H = 0; H < j.length; H++)
                  cr(j[H], t);
                Object.freeze && Object.freeze(j);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              cr(j, t);
        }
        return t === n ? Gt(E) : Nt(E), E;
      }
    }
    function Ut(t, i, u) {
      return lr(t, i, u, !0);
    }
    function Ht(t, i, u) {
      return lr(t, i, u, !1);
    }
    var Bt = Ht, Kt = Ut;
    re.Fragment = n, re.jsx = Bt, re.jsxs = Kt;
  }()), re;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Zl() : e.exports = Ql();
})(dt);
const ev = dt.exports.jsx, nv = (e) => (r) => {
  const a = (n) => {
    const o = Xl(e, (s, c, l) => {
      const f = c, p = f && (Array.isArray(f) ? "array" : Pa(f) && "object") || null, g = p === "array" ? f[0] : p === "object" && "hook" in f ? f.hook : f;
      if (typeof g != "function")
        throw new Error(`The hook is not a function. Happened in ${Hr(r) || "undefined"}`);
      const b = p === "array" ? f.slice(1) : p === "object" ? "parameters" in f ? f.parameters : "invoke" in f && typeof f.invoke == "function" ? f.invoke(n) : "invokeParameters" in f && typeof f.invokeParameters == "function" ? f.invokeParameters(n) : void 0 : void 0;
      return s[l] = g(...qt(b)), s;
    }, {});
    return /* @__PURE__ */ ev(r, {
      ...n,
      ...o
    });
  };
  return a.displayName = Hr(r), a;
}, rv = () => {
  const e = C.useRef(!1);
  return C.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}, iv = (e) => {
  const r = C.useRef(e);
  C.useEffect(() => {
    r.current();
  }, []);
}, tv = (e) => {
  const r = C.useRef(e);
  r.current = e, C.useEffect(() => () => {
    r.current();
  }, []);
}, sv = (e) => {
  const r = rv(), [a, n] = C.useState(e), o = C.useCallback(
    (s) => {
      r.current && n(s);
    },
    [r]
  );
  return [a, o];
}, ov = () => {
  const e = C.useRef(), r = C.useCallback((o, s) => {
    e.current = setTimeout(o, s);
  }, []), a = C.useCallback(() => {
    e.current && clearTimeout(e.current);
  }, []), n = C.useCallback(
    (o, s) => {
      a(), r(o, s);
    },
    [a, r]
  );
  return tv(() => {
    a();
  }), C.useMemo(
    () => ({
      set: r,
      reset: n,
      clear: a
    }),
    [a, n, r]
  );
};
export {
  Hr as getComponentName,
  rv as useIsMounted,
  iv as useOnMount,
  tv as useOnUnmount,
  sv as useStateSafe,
  ov as useTimeout,
  nv as withHooks
};
