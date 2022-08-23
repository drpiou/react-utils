import Yr, { memo as Bt, useRef as re, useCallback as ee, useEffect as Fe, useState as Ht, useMemo as Kt } from "react";
var ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qt = Array.isArray, D = qt, Yt = D;
function Wt() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Yt(e) ? e : [e];
}
var zt = Wt;
function Vt(e, r, a, n) {
  var o = -1, i = e == null ? 0 : e.length;
  for (n && i && (a = e[++o]); ++o < i; )
    a = r(a, e[o], o, e);
  return a;
}
var Jt = Vt;
function Xt(e) {
  return function(r, a, n) {
    for (var o = -1, i = Object(r), c = n(r), f = c.length; f--; ) {
      var v = c[e ? f : ++o];
      if (a(i[v], v, i) === !1)
        break;
    }
    return r;
  };
}
var Zt = Xt, Qt = Zt, ea = Qt(), ra = ea;
function ta(e, r) {
  for (var a = -1, n = Array(e); ++a < e; )
    n[a] = r(a);
  return n;
}
var aa = ta, na = typeof ue == "object" && ue && ue.Object === Object && ue, Wr = na, ia = Wr, sa = typeof self == "object" && self && self.Object === Object && self, oa = ia || sa || Function("return this")(), F = oa, ua = F, fa = ua.Symbol, ve = fa, pr = ve, zr = Object.prototype, ca = zr.hasOwnProperty, la = zr.toString, Q = pr ? pr.toStringTag : void 0;
function va(e) {
  var r = ca.call(e, Q), a = e[Q];
  try {
    e[Q] = void 0;
    var n = !0;
  } catch {
  }
  var o = la.call(e);
  return n && (r ? e[Q] = a : delete e[Q]), o;
}
var da = va, pa = Object.prototype, _a = pa.toString;
function ga(e) {
  return _a.call(e);
}
var ha = ga, _r = ve, ya = da, ba = ha, $a = "[object Null]", Ta = "[object Undefined]", gr = _r ? _r.toStringTag : void 0;
function ma(e) {
  return e == null ? e === void 0 ? Ta : $a : gr && gr in Object(e) ? ya(e) : ba(e);
}
var te = ma;
function Oa(e) {
  return e != null && typeof e == "object";
}
var ae = Oa, Ea = te, Aa = ae, Ca = "[object Arguments]";
function wa(e) {
  return Aa(e) && Ea(e) == Ca;
}
var Pa = wa, hr = Pa, Sa = ae, Vr = Object.prototype, Ra = Vr.hasOwnProperty, ja = Vr.propertyIsEnumerable, xa = hr(function() {
  return arguments;
}()) ? hr : function(e) {
  return Sa(e) && Ra.call(e, "callee") && !ja.call(e, "callee");
}, Jr = xa, ce = { exports: {} };
function Ia() {
  return !1;
}
var Da = Ia;
(function(e, r) {
  var a = F, n = Da, o = r && !r.nodeType && r, i = o && !0 && e && !e.nodeType && e, c = i && i.exports === o, f = c ? a.Buffer : void 0, v = f ? f.isBuffer : void 0, l = v || n;
  e.exports = l;
})(ce, ce.exports);
var Ma = 9007199254740991, La = /^(?:0|[1-9]\d*)$/;
function Fa(e, r) {
  var a = typeof e;
  return r = r == null ? Ma : r, !!r && (a == "number" || a != "symbol" && La.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var Xr = Fa, Na = 9007199254740991;
function Ga(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Na;
}
var Ne = Ga, Ua = te, ka = Ne, Ba = ae, Ha = "[object Arguments]", Ka = "[object Array]", qa = "[object Boolean]", Ya = "[object Date]", Wa = "[object Error]", za = "[object Function]", Va = "[object Map]", Ja = "[object Number]", Xa = "[object Object]", Za = "[object RegExp]", Qa = "[object Set]", en = "[object String]", rn = "[object WeakMap]", tn = "[object ArrayBuffer]", an = "[object DataView]", nn = "[object Float32Array]", sn = "[object Float64Array]", on = "[object Int8Array]", un = "[object Int16Array]", fn = "[object Int32Array]", cn = "[object Uint8Array]", ln = "[object Uint8ClampedArray]", vn = "[object Uint16Array]", dn = "[object Uint32Array]", T = {};
T[nn] = T[sn] = T[on] = T[un] = T[fn] = T[cn] = T[ln] = T[vn] = T[dn] = !0;
T[Ha] = T[Ka] = T[tn] = T[qa] = T[an] = T[Ya] = T[Wa] = T[za] = T[Va] = T[Ja] = T[Xa] = T[Za] = T[Qa] = T[en] = T[rn] = !1;
function pn(e) {
  return Ba(e) && ka(e.length) && !!T[Ua(e)];
}
var _n = pn;
function gn(e) {
  return function(r) {
    return e(r);
  };
}
var hn = gn, je = { exports: {} };
(function(e, r) {
  var a = Wr, n = r && !r.nodeType && r, o = n && !0 && e && !e.nodeType && e, i = o && o.exports === n, c = i && a.process, f = function() {
    try {
      var v = o && o.require && o.require("util").types;
      return v || c && c.binding && c.binding("util");
    } catch {
    }
  }();
  e.exports = f;
})(je, je.exports);
var yn = _n, bn = hn, yr = je.exports, br = yr && yr.isTypedArray, $n = br ? bn(br) : yn, Zr = $n, Tn = aa, mn = Jr, On = D, En = ce.exports, An = Xr, Cn = Zr, wn = Object.prototype, Pn = wn.hasOwnProperty;
function Sn(e, r) {
  var a = On(e), n = !a && mn(e), o = !a && !n && En(e), i = !a && !n && !o && Cn(e), c = a || n || o || i, f = c ? Tn(e.length, String) : [], v = f.length;
  for (var l in e)
    (r || Pn.call(e, l)) && !(c && (l == "length" || o && (l == "offset" || l == "parent") || i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || An(l, v))) && f.push(l);
  return f;
}
var Rn = Sn, jn = Object.prototype;
function xn(e) {
  var r = e && e.constructor, a = typeof r == "function" && r.prototype || jn;
  return e === a;
}
var In = xn;
function Dn(e, r) {
  return function(a) {
    return e(r(a));
  };
}
var Mn = Dn, Ln = Mn, Fn = Ln(Object.keys, Object), Nn = Fn, Gn = In, Un = Nn, kn = Object.prototype, Bn = kn.hasOwnProperty;
function Hn(e) {
  if (!Gn(e))
    return Un(e);
  var r = [];
  for (var a in Object(e))
    Bn.call(e, a) && a != "constructor" && r.push(a);
  return r;
}
var Kn = Hn;
function qn(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var Ge = qn, Yn = te, Wn = Ge, zn = "[object AsyncFunction]", Vn = "[object Function]", Jn = "[object GeneratorFunction]", Xn = "[object Proxy]";
function Zn(e) {
  if (!Wn(e))
    return !1;
  var r = Yn(e);
  return r == Vn || r == Jn || r == zn || r == Xn;
}
var Qr = Zn, Qn = Qr, ei = Ne;
function ri(e) {
  return e != null && ei(e.length) && !Qn(e);
}
var et = ri, ti = Rn, ai = Kn, ni = et;
function ii(e) {
  return ni(e) ? ti(e) : ai(e);
}
var Ue = ii, si = ra, oi = Ue;
function ui(e, r) {
  return e && si(e, r, oi);
}
var fi = ui, ci = et;
function li(e, r) {
  return function(a, n) {
    if (a == null)
      return a;
    if (!ci(a))
      return e(a, n);
    for (var o = a.length, i = r ? o : -1, c = Object(a); (r ? i-- : ++i < o) && n(c[i], i, c) !== !1; )
      ;
    return a;
  };
}
var vi = li, di = fi, pi = vi, _i = pi(di), gi = _i;
function hi() {
  this.__data__ = [], this.size = 0;
}
var yi = hi;
function bi(e, r) {
  return e === r || e !== e && r !== r;
}
var rt = bi, $i = rt;
function Ti(e, r) {
  for (var a = e.length; a--; )
    if ($i(e[a][0], r))
      return a;
  return -1;
}
var de = Ti, mi = de, Oi = Array.prototype, Ei = Oi.splice;
function Ai(e) {
  var r = this.__data__, a = mi(r, e);
  if (a < 0)
    return !1;
  var n = r.length - 1;
  return a == n ? r.pop() : Ei.call(r, a, 1), --this.size, !0;
}
var Ci = Ai, wi = de;
function Pi(e) {
  var r = this.__data__, a = wi(r, e);
  return a < 0 ? void 0 : r[a][1];
}
var Si = Pi, Ri = de;
function ji(e) {
  return Ri(this.__data__, e) > -1;
}
var xi = ji, Ii = de;
function Di(e, r) {
  var a = this.__data__, n = Ii(a, e);
  return n < 0 ? (++this.size, a.push([e, r])) : a[n][1] = r, this;
}
var Mi = Di, Li = yi, Fi = Ci, Ni = Si, Gi = xi, Ui = Mi;
function q(e) {
  var r = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++r < a; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
q.prototype.clear = Li;
q.prototype.delete = Fi;
q.prototype.get = Ni;
q.prototype.has = Gi;
q.prototype.set = Ui;
var pe = q, ki = pe;
function Bi() {
  this.__data__ = new ki(), this.size = 0;
}
var Hi = Bi;
function Ki(e) {
  var r = this.__data__, a = r.delete(e);
  return this.size = r.size, a;
}
var qi = Ki;
function Yi(e) {
  return this.__data__.get(e);
}
var Wi = Yi;
function zi(e) {
  return this.__data__.has(e);
}
var Vi = zi, Ji = F, Xi = Ji["__core-js_shared__"], Zi = Xi, Ce = Zi, $r = function() {
  var e = /[^.]+$/.exec(Ce && Ce.keys && Ce.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Qi(e) {
  return !!$r && $r in e;
}
var es = Qi, rs = Function.prototype, ts = rs.toString;
function as(e) {
  if (e != null) {
    try {
      return ts.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var tt = as, ns = Qr, is = es, ss = Ge, os = tt, us = /[\\^$.*+?()[\]{}|]/g, fs = /^\[object .+?Constructor\]$/, cs = Function.prototype, ls = Object.prototype, vs = cs.toString, ds = ls.hasOwnProperty, ps = RegExp(
  "^" + vs.call(ds).replace(us, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _s(e) {
  if (!ss(e) || is(e))
    return !1;
  var r = ns(e) ? ps : fs;
  return r.test(os(e));
}
var gs = _s;
function hs(e, r) {
  return e == null ? void 0 : e[r];
}
var ys = hs, bs = gs, $s = ys;
function Ts(e, r) {
  var a = $s(e, r);
  return bs(a) ? a : void 0;
}
var Y = Ts, ms = Y, Os = F, Es = ms(Os, "Map"), ke = Es, As = Y, Cs = As(Object, "create"), _e = Cs, Tr = _e;
function ws() {
  this.__data__ = Tr ? Tr(null) : {}, this.size = 0;
}
var Ps = ws;
function Ss(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var Rs = Ss, js = _e, xs = "__lodash_hash_undefined__", Is = Object.prototype, Ds = Is.hasOwnProperty;
function Ms(e) {
  var r = this.__data__;
  if (js) {
    var a = r[e];
    return a === xs ? void 0 : a;
  }
  return Ds.call(r, e) ? r[e] : void 0;
}
var Ls = Ms, Fs = _e, Ns = Object.prototype, Gs = Ns.hasOwnProperty;
function Us(e) {
  var r = this.__data__;
  return Fs ? r[e] !== void 0 : Gs.call(r, e);
}
var ks = Us, Bs = _e, Hs = "__lodash_hash_undefined__";
function Ks(e, r) {
  var a = this.__data__;
  return this.size += this.has(e) ? 0 : 1, a[e] = Bs && r === void 0 ? Hs : r, this;
}
var qs = Ks, Ys = Ps, Ws = Rs, zs = Ls, Vs = ks, Js = qs;
function W(e) {
  var r = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++r < a; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
W.prototype.clear = Ys;
W.prototype.delete = Ws;
W.prototype.get = zs;
W.prototype.has = Vs;
W.prototype.set = Js;
var Xs = W, mr = Xs, Zs = pe, Qs = ke;
function eo() {
  this.size = 0, this.__data__ = {
    hash: new mr(),
    map: new (Qs || Zs)(),
    string: new mr()
  };
}
var ro = eo;
function to(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var ao = to, no = ao;
function io(e, r) {
  var a = e.__data__;
  return no(r) ? a[typeof r == "string" ? "string" : "hash"] : a.map;
}
var ge = io, so = ge;
function oo(e) {
  var r = so(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var uo = oo, fo = ge;
function co(e) {
  return fo(this, e).get(e);
}
var lo = co, vo = ge;
function po(e) {
  return vo(this, e).has(e);
}
var _o = po, go = ge;
function ho(e, r) {
  var a = go(this, e), n = a.size;
  return a.set(e, r), this.size += a.size == n ? 0 : 1, this;
}
var yo = ho, bo = ro, $o = uo, To = lo, mo = _o, Oo = yo;
function z(e) {
  var r = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++r < a; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
z.prototype.clear = bo;
z.prototype.delete = $o;
z.prototype.get = To;
z.prototype.has = mo;
z.prototype.set = Oo;
var Be = z, Eo = pe, Ao = ke, Co = Be, wo = 200;
function Po(e, r) {
  var a = this.__data__;
  if (a instanceof Eo) {
    var n = a.__data__;
    if (!Ao || n.length < wo - 1)
      return n.push([e, r]), this.size = ++a.size, this;
    a = this.__data__ = new Co(n);
  }
  return a.set(e, r), this.size = a.size, this;
}
var So = Po, Ro = pe, jo = Hi, xo = qi, Io = Wi, Do = Vi, Mo = So;
function V(e) {
  var r = this.__data__ = new Ro(e);
  this.size = r.size;
}
V.prototype.clear = jo;
V.prototype.delete = xo;
V.prototype.get = Io;
V.prototype.has = Do;
V.prototype.set = Mo;
var at = V, Lo = "__lodash_hash_undefined__";
function Fo(e) {
  return this.__data__.set(e, Lo), this;
}
var No = Fo;
function Go(e) {
  return this.__data__.has(e);
}
var Uo = Go, ko = Be, Bo = No, Ho = Uo;
function le(e) {
  var r = -1, a = e == null ? 0 : e.length;
  for (this.__data__ = new ko(); ++r < a; )
    this.add(e[r]);
}
le.prototype.add = le.prototype.push = Bo;
le.prototype.has = Ho;
var Ko = le;
function qo(e, r) {
  for (var a = -1, n = e == null ? 0 : e.length; ++a < n; )
    if (r(e[a], a, e))
      return !0;
  return !1;
}
var Yo = qo;
function Wo(e, r) {
  return e.has(r);
}
var zo = Wo, Vo = Ko, Jo = Yo, Xo = zo, Zo = 1, Qo = 2;
function eu(e, r, a, n, o, i) {
  var c = a & Zo, f = e.length, v = r.length;
  if (f != v && !(c && v > f))
    return !1;
  var l = i.get(e), p = i.get(r);
  if (l && p)
    return l == r && p == e;
  var y = -1, _ = !0, A = a & Qo ? new Vo() : void 0;
  for (i.set(e, r), i.set(r, e); ++y < f; ) {
    var C = e[y], P = r[y];
    if (n)
      var R = c ? n(P, C, y, r, e, i) : n(C, P, y, e, r, i);
    if (R !== void 0) {
      if (R)
        continue;
      _ = !1;
      break;
    }
    if (A) {
      if (!Jo(r, function(j, x) {
        if (!Xo(A, x) && (C === j || o(C, j, a, n, i)))
          return A.push(x);
      })) {
        _ = !1;
        break;
      }
    } else if (!(C === P || o(C, P, a, n, i))) {
      _ = !1;
      break;
    }
  }
  return i.delete(e), i.delete(r), _;
}
var nt = eu, ru = F, tu = ru.Uint8Array, au = tu;
function nu(e) {
  var r = -1, a = Array(e.size);
  return e.forEach(function(n, o) {
    a[++r] = [o, n];
  }), a;
}
var iu = nu;
function su(e) {
  var r = -1, a = Array(e.size);
  return e.forEach(function(n) {
    a[++r] = n;
  }), a;
}
var ou = su, Or = ve, Er = au, uu = rt, fu = nt, cu = iu, lu = ou, vu = 1, du = 2, pu = "[object Boolean]", _u = "[object Date]", gu = "[object Error]", hu = "[object Map]", yu = "[object Number]", bu = "[object RegExp]", $u = "[object Set]", Tu = "[object String]", mu = "[object Symbol]", Ou = "[object ArrayBuffer]", Eu = "[object DataView]", Ar = Or ? Or.prototype : void 0, we = Ar ? Ar.valueOf : void 0;
function Au(e, r, a, n, o, i, c) {
  switch (a) {
    case Eu:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      e = e.buffer, r = r.buffer;
    case Ou:
      return !(e.byteLength != r.byteLength || !i(new Er(e), new Er(r)));
    case pu:
    case _u:
    case yu:
      return uu(+e, +r);
    case gu:
      return e.name == r.name && e.message == r.message;
    case bu:
    case Tu:
      return e == r + "";
    case hu:
      var f = cu;
    case $u:
      var v = n & vu;
      if (f || (f = lu), e.size != r.size && !v)
        return !1;
      var l = c.get(e);
      if (l)
        return l == r;
      n |= du, c.set(e, r);
      var p = fu(f(e), f(r), n, o, i, c);
      return c.delete(e), p;
    case mu:
      if (we)
        return we.call(e) == we.call(r);
  }
  return !1;
}
var Cu = Au;
function wu(e, r) {
  for (var a = -1, n = r.length, o = e.length; ++a < n; )
    e[o + a] = r[a];
  return e;
}
var Pu = wu, Su = Pu, Ru = D;
function ju(e, r, a) {
  var n = r(e);
  return Ru(e) ? n : Su(n, a(e));
}
var xu = ju;
function Iu(e, r) {
  for (var a = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++a < n; ) {
    var c = e[a];
    r(c, a, e) && (i[o++] = c);
  }
  return i;
}
var Du = Iu;
function Mu() {
  return [];
}
var Lu = Mu, Fu = Du, Nu = Lu, Gu = Object.prototype, Uu = Gu.propertyIsEnumerable, Cr = Object.getOwnPropertySymbols, ku = Cr ? function(e) {
  return e == null ? [] : (e = Object(e), Fu(Cr(e), function(r) {
    return Uu.call(e, r);
  }));
} : Nu, Bu = ku, Hu = xu, Ku = Bu, qu = Ue;
function Yu(e) {
  return Hu(e, qu, Ku);
}
var Wu = Yu, wr = Wu, zu = 1, Vu = Object.prototype, Ju = Vu.hasOwnProperty;
function Xu(e, r, a, n, o, i) {
  var c = a & zu, f = wr(e), v = f.length, l = wr(r), p = l.length;
  if (v != p && !c)
    return !1;
  for (var y = v; y--; ) {
    var _ = f[y];
    if (!(c ? _ in r : Ju.call(r, _)))
      return !1;
  }
  var A = i.get(e), C = i.get(r);
  if (A && C)
    return A == r && C == e;
  var P = !0;
  i.set(e, r), i.set(r, e);
  for (var R = c; ++y < v; ) {
    _ = f[y];
    var j = e[_], x = r[_];
    if (n)
      var m = c ? n(x, j, _, r, e, i) : n(j, x, _, e, r, i);
    if (!(m === void 0 ? j === x || o(j, x, a, n, i) : m)) {
      P = !1;
      break;
    }
    R || (R = _ == "constructor");
  }
  if (P && !R) {
    var N = e.constructor, U = r.constructor;
    N != U && "constructor" in e && "constructor" in r && !(typeof N == "function" && N instanceof N && typeof U == "function" && U instanceof U) && (P = !1);
  }
  return i.delete(e), i.delete(r), P;
}
var Zu = Xu, Qu = Y, ef = F, rf = Qu(ef, "DataView"), tf = rf, af = Y, nf = F, sf = af(nf, "Promise"), of = sf, uf = Y, ff = F, cf = uf(ff, "Set"), lf = cf, vf = Y, df = F, pf = vf(df, "WeakMap"), _f = pf, xe = tf, Ie = ke, De = of, Me = lf, Le = _f, it = te, J = tt, Pr = "[object Map]", gf = "[object Object]", Sr = "[object Promise]", Rr = "[object Set]", jr = "[object WeakMap]", xr = "[object DataView]", hf = J(xe), yf = J(Ie), bf = J(De), $f = J(Me), Tf = J(Le), G = it;
(xe && G(new xe(new ArrayBuffer(1))) != xr || Ie && G(new Ie()) != Pr || De && G(De.resolve()) != Sr || Me && G(new Me()) != Rr || Le && G(new Le()) != jr) && (G = function(e) {
  var r = it(e), a = r == gf ? e.constructor : void 0, n = a ? J(a) : "";
  if (n)
    switch (n) {
      case hf:
        return xr;
      case yf:
        return Pr;
      case bf:
        return Sr;
      case $f:
        return Rr;
      case Tf:
        return jr;
    }
  return r;
});
var mf = G, Pe = at, Of = nt, Ef = Cu, Af = Zu, Ir = mf, Dr = D, Mr = ce.exports, Cf = Zr, wf = 1, Lr = "[object Arguments]", Fr = "[object Array]", fe = "[object Object]", Pf = Object.prototype, Nr = Pf.hasOwnProperty;
function Sf(e, r, a, n, o, i) {
  var c = Dr(e), f = Dr(r), v = c ? Fr : Ir(e), l = f ? Fr : Ir(r);
  v = v == Lr ? fe : v, l = l == Lr ? fe : l;
  var p = v == fe, y = l == fe, _ = v == l;
  if (_ && Mr(e)) {
    if (!Mr(r))
      return !1;
    c = !0, p = !1;
  }
  if (_ && !p)
    return i || (i = new Pe()), c || Cf(e) ? Of(e, r, a, n, o, i) : Ef(e, r, v, a, n, o, i);
  if (!(a & wf)) {
    var A = p && Nr.call(e, "__wrapped__"), C = y && Nr.call(r, "__wrapped__");
    if (A || C) {
      var P = A ? e.value() : e, R = C ? r.value() : r;
      return i || (i = new Pe()), o(P, R, a, n, i);
    }
  }
  return _ ? (i || (i = new Pe()), Af(e, r, a, n, o, i)) : !1;
}
var Rf = Sf, jf = Rf, Gr = ae;
function st(e, r, a, n, o) {
  return e === r ? !0 : e == null || r == null || !Gr(e) && !Gr(r) ? e !== e && r !== r : jf(e, r, a, n, st, o);
}
var ot = st, xf = at, If = ot, Df = 1, Mf = 2;
function Lf(e, r, a, n) {
  var o = a.length, i = o, c = !n;
  if (e == null)
    return !i;
  for (e = Object(e); o--; ) {
    var f = a[o];
    if (c && f[2] ? f[1] !== e[f[0]] : !(f[0] in e))
      return !1;
  }
  for (; ++o < i; ) {
    f = a[o];
    var v = f[0], l = e[v], p = f[1];
    if (c && f[2]) {
      if (l === void 0 && !(v in e))
        return !1;
    } else {
      var y = new xf();
      if (n)
        var _ = n(l, p, v, e, r, y);
      if (!(_ === void 0 ? If(p, l, Df | Mf, n, y) : _))
        return !1;
    }
  }
  return !0;
}
var Ff = Lf, Nf = Ge;
function Gf(e) {
  return e === e && !Nf(e);
}
var ut = Gf, Uf = ut, kf = Ue;
function Bf(e) {
  for (var r = kf(e), a = r.length; a--; ) {
    var n = r[a], o = e[n];
    r[a] = [n, o, Uf(o)];
  }
  return r;
}
var Hf = Bf;
function Kf(e, r) {
  return function(a) {
    return a == null ? !1 : a[e] === r && (r !== void 0 || e in Object(a));
  };
}
var ft = Kf, qf = Ff, Yf = Hf, Wf = ft;
function zf(e) {
  var r = Yf(e);
  return r.length == 1 && r[0][2] ? Wf(r[0][0], r[0][1]) : function(a) {
    return a === e || qf(a, e, r);
  };
}
var Vf = zf, Jf = te, Xf = ae, Zf = "[object Symbol]";
function Qf(e) {
  return typeof e == "symbol" || Xf(e) && Jf(e) == Zf;
}
var He = Qf, ec = D, rc = He, tc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ac = /^\w*$/;
function nc(e, r) {
  if (ec(e))
    return !1;
  var a = typeof e;
  return a == "number" || a == "symbol" || a == "boolean" || e == null || rc(e) ? !0 : ac.test(e) || !tc.test(e) || r != null && e in Object(r);
}
var Ke = nc, ct = Be, ic = "Expected a function";
function qe(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(ic);
  var a = function() {
    var n = arguments, o = r ? r.apply(this, n) : n[0], i = a.cache;
    if (i.has(o))
      return i.get(o);
    var c = e.apply(this, n);
    return a.cache = i.set(o, c) || i, c;
  };
  return a.cache = new (qe.Cache || ct)(), a;
}
qe.Cache = ct;
var sc = qe, oc = sc, uc = 500;
function fc(e) {
  var r = oc(e, function(n) {
    return a.size === uc && a.clear(), n;
  }), a = r.cache;
  return r;
}
var cc = fc, lc = cc, vc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, dc = /\\(\\)?/g, pc = lc(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(vc, function(a, n, o, i) {
    r.push(o ? i.replace(dc, "$1") : n || a);
  }), r;
}), _c = pc;
function gc(e, r) {
  for (var a = -1, n = e == null ? 0 : e.length, o = Array(n); ++a < n; )
    o[a] = r(e[a], a, e);
  return o;
}
var hc = gc, Ur = ve, yc = hc, bc = D, $c = He, Tc = 1 / 0, kr = Ur ? Ur.prototype : void 0, Br = kr ? kr.toString : void 0;
function lt(e) {
  if (typeof e == "string")
    return e;
  if (bc(e))
    return yc(e, lt) + "";
  if ($c(e))
    return Br ? Br.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -Tc ? "-0" : r;
}
var mc = lt, Oc = mc;
function Ec(e) {
  return e == null ? "" : Oc(e);
}
var Ac = Ec, Cc = D, wc = Ke, Pc = _c, Sc = Ac;
function Rc(e, r) {
  return Cc(e) ? e : wc(e, r) ? [e] : Pc(Sc(e));
}
var vt = Rc, jc = He, xc = 1 / 0;
function Ic(e) {
  if (typeof e == "string" || jc(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -xc ? "-0" : r;
}
var he = Ic, Dc = vt, Mc = he;
function Lc(e, r) {
  r = Dc(r, e);
  for (var a = 0, n = r.length; e != null && a < n; )
    e = e[Mc(r[a++])];
  return a && a == n ? e : void 0;
}
var dt = Lc, Fc = dt;
function Nc(e, r, a) {
  var n = e == null ? void 0 : Fc(e, r);
  return n === void 0 ? a : n;
}
var Gc = Nc;
function Uc(e, r) {
  return e != null && r in Object(e);
}
var kc = Uc, Bc = vt, Hc = Jr, Kc = D, qc = Xr, Yc = Ne, Wc = he;
function zc(e, r, a) {
  r = Bc(r, e);
  for (var n = -1, o = r.length, i = !1; ++n < o; ) {
    var c = Wc(r[n]);
    if (!(i = e != null && a(e, c)))
      break;
    e = e[c];
  }
  return i || ++n != o ? i : (o = e == null ? 0 : e.length, !!o && Yc(o) && qc(c, o) && (Kc(e) || Hc(e)));
}
var Vc = zc, Jc = kc, Xc = Vc;
function Zc(e, r) {
  return e != null && Xc(e, r, Jc);
}
var Qc = Zc, el = ot, rl = Gc, tl = Qc, al = Ke, nl = ut, il = ft, sl = he, ol = 1, ul = 2;
function fl(e, r) {
  return al(e) && nl(r) ? il(sl(e), r) : function(a) {
    var n = rl(a, e);
    return n === void 0 && n === r ? tl(a, e) : el(r, n, ol | ul);
  };
}
var cl = fl;
function ll(e) {
  return e;
}
var vl = ll;
function dl(e) {
  return function(r) {
    return r == null ? void 0 : r[e];
  };
}
var pl = dl, _l = dt;
function gl(e) {
  return function(r) {
    return _l(r, e);
  };
}
var hl = gl, yl = pl, bl = hl, $l = Ke, Tl = he;
function ml(e) {
  return $l(e) ? yl(Tl(e)) : bl(e);
}
var Ol = ml, El = Vf, Al = cl, Cl = vl, wl = D, Pl = Ol;
function Sl(e) {
  return typeof e == "function" ? e : e == null ? Cl : typeof e == "object" ? wl(e) ? Al(e[0], e[1]) : El(e) : Pl(e);
}
var Rl = Sl;
function jl(e, r, a, n, o) {
  return o(e, function(i, c, f) {
    a = n ? (n = !1, i) : r(a, i, c, f);
  }), a;
}
var xl = jl, Il = Jt, Dl = gi, Ml = Rl, Ll = xl, Fl = D;
function Nl(e, r, a) {
  var n = Fl(e) ? Il : Ll, o = arguments.length < 3;
  return n(e, Ml(r), a, o, Dl);
}
var Gl = Nl;
const Ul = (e) => e.displayName || e.name || void 0;
var pt = { exports: {} }, K = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Se, Hr;
function _t() {
  if (Hr)
    return Se;
  Hr = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var c = {}, f = 0; f < 10; f++)
        c["_" + String.fromCharCode(f)] = f;
      var v = Object.getOwnPropertyNames(c).map(function(p) {
        return c[p];
      });
      if (v.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        l[p] = p;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Se = o() ? Object.assign : function(i, c) {
    for (var f, v = n(i), l, p = 1; p < arguments.length; p++) {
      f = Object(arguments[p]);
      for (var y in f)
        r.call(f, y) && (v[y] = f[y]);
      if (e) {
        l = e(f);
        for (var _ = 0; _ < l.length; _++)
          a.call(f, l[_]) && (v[l[_]] = f[l[_]]);
      }
    }
    return v;
  }, Se;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function kl() {
  if (Kr)
    return K;
  Kr = 1, _t();
  var e = Yr, r = 60103;
  if (K.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var a = Symbol.for;
    r = a("react.element"), K.Fragment = a("react.fragment");
  }
  var n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = Object.prototype.hasOwnProperty, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, v, l) {
    var p, y = {}, _ = null, A = null;
    l !== void 0 && (_ = "" + l), v.key !== void 0 && (_ = "" + v.key), v.ref !== void 0 && (A = v.ref);
    for (p in v)
      o.call(v, p) && !i.hasOwnProperty(p) && (y[p] = v[p]);
    if (f && f.defaultProps)
      for (p in v = f.defaultProps, v)
        y[p] === void 0 && (y[p] = v[p]);
    return { $$typeof: r, type: f, key: _, ref: A, props: y, _owner: n.current };
  }
  return K.jsx = c, K.jsxs = c, K;
}
var Re = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function Bl() {
  return qr || (qr = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var r = Yr, a = _t(), n = 60103, o = 60106;
      e.Fragment = 60107;
      var i = 60108, c = 60114, f = 60109, v = 60110, l = 60112, p = 60113, y = 60120, _ = 60115, A = 60116, C = 60121, P = 60122, R = 60117, j = 60129, x = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var m = Symbol.for;
        n = m("react.element"), o = m("react.portal"), e.Fragment = m("react.fragment"), i = m("react.strict_mode"), c = m("react.profiler"), f = m("react.provider"), v = m("react.context"), l = m("react.forward_ref"), p = m("react.suspense"), y = m("react.suspense_list"), _ = m("react.memo"), A = m("react.lazy"), C = m("react.block"), P = m("react.server.block"), R = m("react.fundamental"), m("react.scope"), m("react.opaque.id"), j = m("react.debug_trace_mode"), m("react.offscreen"), x = m("react.legacy_hidden");
      }
      var N = typeof Symbol == "function" && Symbol.iterator, U = "@@iterator";
      function gt(t) {
        if (t === null || typeof t != "object")
          return null;
        var s = N && t[N] || t[U];
        return typeof s == "function" ? s : null;
      }
      var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function S(t) {
        {
          for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), d = 1; d < s; d++)
            u[d - 1] = arguments[d];
          ht("error", t, u);
        }
      }
      function ht(t, s, u) {
        {
          var d = k.ReactDebugCurrentFrame, b = d.getStackAddendum();
          b !== "" && (s += "%s", u = u.concat([b]));
          var $ = u.map(function(h) {
            return "" + h;
          });
          $.unshift("Warning: " + s), Function.prototype.apply.call(console[t], console, $);
        }
      }
      var yt = !1;
      function bt(t) {
        return !!(typeof t == "string" || typeof t == "function" || t === e.Fragment || t === c || t === j || t === i || t === p || t === y || t === x || yt || typeof t == "object" && t !== null && (t.$$typeof === A || t.$$typeof === _ || t.$$typeof === f || t.$$typeof === v || t.$$typeof === l || t.$$typeof === R || t.$$typeof === C || t[0] === P));
      }
      function $t(t, s, u) {
        var d = s.displayName || s.name || "";
        return t.displayName || (d !== "" ? u + "(" + d + ")" : u);
      }
      function Ye(t) {
        return t.displayName || "Context";
      }
      function I(t) {
        if (t == null)
          return null;
        if (typeof t.tag == "number" && S("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof t == "function")
          return t.displayName || t.name || null;
        if (typeof t == "string")
          return t;
        switch (t) {
          case e.Fragment:
            return "Fragment";
          case o:
            return "Portal";
          case c:
            return "Profiler";
          case i:
            return "StrictMode";
          case p:
            return "Suspense";
          case y:
            return "SuspenseList";
        }
        if (typeof t == "object")
          switch (t.$$typeof) {
            case v:
              var s = t;
              return Ye(s) + ".Consumer";
            case f:
              var u = t;
              return Ye(u._context) + ".Provider";
            case l:
              return $t(t, t.render, "ForwardRef");
            case _:
              return I(t.type);
            case C:
              return I(t._render);
            case A: {
              var d = t, b = d._payload, $ = d._init;
              try {
                return I($(b));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var X = 0, We, ze, Ve, Je, Xe, Ze, Qe;
      function er() {
      }
      er.__reactDisabledLog = !0;
      function Tt() {
        {
          if (X === 0) {
            We = console.log, ze = console.info, Ve = console.warn, Je = console.error, Xe = console.group, Ze = console.groupCollapsed, Qe = console.groupEnd;
            var t = {
              configurable: !0,
              enumerable: !0,
              value: er,
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
              log: a({}, t, {
                value: We
              }),
              info: a({}, t, {
                value: ze
              }),
              warn: a({}, t, {
                value: Ve
              }),
              error: a({}, t, {
                value: Je
              }),
              group: a({}, t, {
                value: Xe
              }),
              groupCollapsed: a({}, t, {
                value: Ze
              }),
              groupEnd: a({}, t, {
                value: Qe
              })
            });
          }
          X < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ye = k.ReactCurrentDispatcher, be;
      function ne(t, s, u) {
        {
          if (be === void 0)
            try {
              throw Error();
            } catch (b) {
              var d = b.stack.trim().match(/\n( *(at )?)/);
              be = d && d[1] || "";
            }
          return `
` + be + t;
        }
      }
      var $e = !1, ie;
      {
        var Ot = typeof WeakMap == "function" ? WeakMap : Map;
        ie = new Ot();
      }
      function rr(t, s) {
        if (!t || $e)
          return "";
        {
          var u = ie.get(t);
          if (u !== void 0)
            return u;
        }
        var d;
        $e = !0;
        var b = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var $;
        $ = ye.current, ye.current = null, Tt();
        try {
          if (s) {
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
              } catch (L) {
                d = L;
              }
              Reflect.construct(t, [], h);
            } else {
              try {
                h.call();
              } catch (L) {
                d = L;
              }
              t.call(h.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (L) {
              d = L;
            }
            t();
          }
        } catch (L) {
          if (L && d && typeof L.stack == "string") {
            for (var g = L.stack.split(`
`), w = d.stack.split(`
`), O = g.length - 1, E = w.length - 1; O >= 1 && E >= 0 && g[O] !== w[E]; )
              E--;
            for (; O >= 1 && E >= 0; O--, E--)
              if (g[O] !== w[E]) {
                if (O !== 1 || E !== 1)
                  do
                    if (O--, E--, E < 0 || g[O] !== w[E]) {
                      var M = `
` + g[O].replace(" at new ", " at ");
                      return typeof t == "function" && ie.set(t, M), M;
                    }
                  while (O >= 1 && E >= 0);
                break;
              }
          }
        } finally {
          $e = !1, ye.current = $, mt(), Error.prepareStackTrace = b;
        }
        var H = t ? t.displayName || t.name : "", dr = H ? ne(H) : "";
        return typeof t == "function" && ie.set(t, dr), dr;
      }
      function tr(t, s, u) {
        return rr(t, !1);
      }
      function Et(t) {
        var s = t.prototype;
        return !!(s && s.isReactComponent);
      }
      function se(t, s, u) {
        if (t == null)
          return "";
        if (typeof t == "function")
          return rr(t, Et(t));
        if (typeof t == "string")
          return ne(t);
        switch (t) {
          case p:
            return ne("Suspense");
          case y:
            return ne("SuspenseList");
        }
        if (typeof t == "object")
          switch (t.$$typeof) {
            case l:
              return tr(t.render);
            case _:
              return se(t.type, s, u);
            case C:
              return tr(t._render);
            case A: {
              var d = t, b = d._payload, $ = d._init;
              try {
                return se($(b), s, u);
              } catch {
              }
            }
          }
        return "";
      }
      var ar = {}, nr = k.ReactDebugCurrentFrame;
      function oe(t) {
        if (t) {
          var s = t._owner, u = se(t.type, t._source, s ? s.type : null);
          nr.setExtraStackFrame(u);
        } else
          nr.setExtraStackFrame(null);
      }
      function At(t, s, u, d, b) {
        {
          var $ = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var h in t)
            if ($(t, h)) {
              var g = void 0;
              try {
                if (typeof t[h] != "function") {
                  var w = Error((d || "React class") + ": " + u + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw w.name = "Invariant Violation", w;
                }
                g = t[h](s, h, d, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (O) {
                g = O;
              }
              g && !(g instanceof Error) && (oe(b), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", u, h, typeof g), oe(null)), g instanceof Error && !(g.message in ar) && (ar[g.message] = !0, oe(b), S("Failed %s type: %s", u, g.message), oe(null));
            }
        }
      }
      var Z = k.ReactCurrentOwner, Te = Object.prototype.hasOwnProperty, Ct = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ir, sr, me;
      me = {};
      function wt(t) {
        if (Te.call(t, "ref")) {
          var s = Object.getOwnPropertyDescriptor(t, "ref").get;
          if (s && s.isReactWarning)
            return !1;
        }
        return t.ref !== void 0;
      }
      function Pt(t) {
        if (Te.call(t, "key")) {
          var s = Object.getOwnPropertyDescriptor(t, "key").get;
          if (s && s.isReactWarning)
            return !1;
        }
        return t.key !== void 0;
      }
      function St(t, s) {
        if (typeof t.ref == "string" && Z.current && s && Z.current.stateNode !== s) {
          var u = I(Z.current.type);
          me[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(Z.current.type), t.ref), me[u] = !0);
        }
      }
      function Rt(t, s) {
        {
          var u = function() {
            ir || (ir = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
          };
          u.isReactWarning = !0, Object.defineProperty(t, "key", {
            get: u,
            configurable: !0
          });
        }
      }
      function jt(t, s) {
        {
          var u = function() {
            sr || (sr = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
          };
          u.isReactWarning = !0, Object.defineProperty(t, "ref", {
            get: u,
            configurable: !0
          });
        }
      }
      var xt = function(t, s, u, d, b, $, h) {
        var g = {
          $$typeof: n,
          type: t,
          key: s,
          ref: u,
          props: h,
          _owner: $
        };
        return g._store = {}, Object.defineProperty(g._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(g, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: d
        }), Object.defineProperty(g, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: b
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      };
      function It(t, s, u, d, b) {
        {
          var $, h = {}, g = null, w = null;
          u !== void 0 && (g = "" + u), Pt(s) && (g = "" + s.key), wt(s) && (w = s.ref, St(s, b));
          for ($ in s)
            Te.call(s, $) && !Ct.hasOwnProperty($) && (h[$] = s[$]);
          if (t && t.defaultProps) {
            var O = t.defaultProps;
            for ($ in O)
              h[$] === void 0 && (h[$] = O[$]);
          }
          if (g || w) {
            var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
            g && Rt(h, E), w && jt(h, E);
          }
          return xt(t, g, w, b, d, Z.current, h);
        }
      }
      var Oe = k.ReactCurrentOwner, or = k.ReactDebugCurrentFrame;
      function B(t) {
        if (t) {
          var s = t._owner, u = se(t.type, t._source, s ? s.type : null);
          or.setExtraStackFrame(u);
        } else
          or.setExtraStackFrame(null);
      }
      var Ee;
      Ee = !1;
      function Ae(t) {
        return typeof t == "object" && t !== null && t.$$typeof === n;
      }
      function ur() {
        {
          if (Oe.current) {
            var t = I(Oe.current.type);
            if (t)
              return `

Check the render method of \`` + t + "`.";
          }
          return "";
        }
      }
      function Dt(t) {
        {
          if (t !== void 0) {
            var s = t.fileName.replace(/^.*[\\\/]/, ""), u = t.lineNumber;
            return `

Check your code at ` + s + ":" + u + ".";
          }
          return "";
        }
      }
      var fr = {};
      function Mt(t) {
        {
          var s = ur();
          if (!s) {
            var u = typeof t == "string" ? t : t.displayName || t.name;
            u && (s = `

Check the top-level render call using <` + u + ">.");
          }
          return s;
        }
      }
      function cr(t, s) {
        {
          if (!t._store || t._store.validated || t.key != null)
            return;
          t._store.validated = !0;
          var u = Mt(s);
          if (fr[u])
            return;
          fr[u] = !0;
          var d = "";
          t && t._owner && t._owner !== Oe.current && (d = " It was passed a child from " + I(t._owner.type) + "."), B(t), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, d), B(null);
        }
      }
      function lr(t, s) {
        {
          if (typeof t != "object")
            return;
          if (Array.isArray(t))
            for (var u = 0; u < t.length; u++) {
              var d = t[u];
              Ae(d) && cr(d, s);
            }
          else if (Ae(t))
            t._store && (t._store.validated = !0);
          else if (t) {
            var b = gt(t);
            if (typeof b == "function" && b !== t.entries)
              for (var $ = b.call(t), h; !(h = $.next()).done; )
                Ae(h.value) && cr(h.value, s);
          }
        }
      }
      function Lt(t) {
        {
          var s = t.type;
          if (s == null || typeof s == "string")
            return;
          var u;
          if (typeof s == "function")
            u = s.propTypes;
          else if (typeof s == "object" && (s.$$typeof === l || s.$$typeof === _))
            u = s.propTypes;
          else
            return;
          if (u) {
            var d = I(s);
            At(u, t.props, "prop", d, t);
          } else if (s.PropTypes !== void 0 && !Ee) {
            Ee = !0;
            var b = I(s);
            S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
          }
          typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ft(t) {
        {
          for (var s = Object.keys(t.props), u = 0; u < s.length; u++) {
            var d = s[u];
            if (d !== "children" && d !== "key") {
              B(t), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), B(null);
              break;
            }
          }
          t.ref !== null && (B(t), S("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
        }
      }
      function vr(t, s, u, d, b, $) {
        {
          var h = bt(t);
          if (!h) {
            var g = "";
            (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var w = Dt(b);
            w ? g += w : g += ur();
            var O;
            t === null ? O = "null" : Array.isArray(t) ? O = "array" : t !== void 0 && t.$$typeof === n ? (O = "<" + (I(t.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : O = typeof t, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, g);
          }
          var E = It(t, s, u, b, $);
          if (E == null)
            return E;
          if (h) {
            var M = s.children;
            if (M !== void 0)
              if (d)
                if (Array.isArray(M)) {
                  for (var H = 0; H < M.length; H++)
                    lr(M[H], t);
                  Object.freeze && Object.freeze(M);
                } else
                  S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                lr(M, t);
          }
          return t === e.Fragment ? Ft(E) : Lt(E), E;
        }
      }
      function Nt(t, s, u) {
        return vr(t, s, u, !0);
      }
      function Gt(t, s, u) {
        return vr(t, s, u, !1);
      }
      var Ut = Gt, kt = Nt;
      e.jsx = Ut, e.jsxs = kt;
    }();
  }(Re)), Re;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = kl() : e.exports = Bl();
})(pt);
const Hl = pt.exports.jsx, Wl = (e) => (r) => {
  const a = Bt(r), n = (o) => {
    const i = Gl(e, (c, f, v) => {
      let l, p;
      if (f && (Array.isArray(f) ? (l = f[0], Array.isArray(f[1]) ? p = f[1] : typeof f[1] == "function" && (p = f[1](o))) : l = f), typeof l != "function")
        throw new Error(`The hook is not a function. Happened in ${n.displayName || "undefined"}`);
      return c[v] = l(...zt(p)), c;
    }, {});
    return /* @__PURE__ */ Hl(a, {
      ...o,
      ...i
    });
  };
  return n.displayName = Ul(r), n;
}, zl = (e) => {
  const r = re(e);
  return r.current = e, ee((...a) => r.current(...a), []);
}, Kl = () => {
  const e = re(!1);
  return Fe(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}, Vl = (e) => {
  const r = re(e);
  Fe(() => {
    r.current();
  }, []);
}, ql = (e) => {
  const r = re(e);
  r.current = e, Fe(() => () => {
    r.current();
  }, []);
}, Jl = (e) => {
  const r = Kl(), [a, n] = Ht(e), o = ee(
    (i) => {
      r.current && n(i);
    },
    [r]
  );
  return [a, o];
}, Xl = () => {
  const e = re(), r = ee((o, i) => {
    e.current = setTimeout(o, i);
  }, []), a = ee(() => {
    e.current && clearTimeout(e.current);
  }, []), n = ee(
    (o, i) => {
      a(), r(o, i);
    },
    [a, r]
  );
  return ql(() => {
    a();
  }), Kt(
    () => ({
      set: r,
      reset: n,
      clear: a
    }),
    [a, n, r]
  );
};
export {
  Ul as getComponentName,
  zl as useCallbackEvent,
  Kl as useIsMounted,
  Vl as useOnMount,
  ql as useOnUnmount,
  Jl as useStateSafe,
  Xl as useTimeout,
  Wl as withHooks
};
