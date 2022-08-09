import Wr, { useRef as le, useEffect as Fe, useState as qt, useCallback as ue, useMemo as Yt } from "react";
var se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Wt = Array.isArray, D = Wt, zt = D;
function Vt() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return zt(e) ? e : [e];
}
var Jt = Vt, Xt = typeof se == "object" && se && se.Object === Object && se, zr = Xt, Zt = zr, Qt = typeof self == "object" && self && self.Object === Object && self, ea = Zt || Qt || Function("return this")(), F = ea, ra = F, ta = ra.Symbol, ve = ta, dr = ve, Vr = Object.prototype, aa = Vr.hasOwnProperty, na = Vr.toString, re = dr ? dr.toStringTag : void 0;
function ia(e) {
  var r = aa.call(e, re), t = e[re];
  try {
    e[re] = void 0;
    var n = !0;
  } catch {
  }
  var o = na.call(e);
  return n && (r ? e[re] = t : delete e[re]), o;
}
var sa = ia, oa = Object.prototype, ua = oa.toString;
function ca(e) {
  return ua.call(e);
}
var fa = ca, _r = ve, la = sa, va = fa, pa = "[object Null]", da = "[object Undefined]", gr = _r ? _r.toStringTag : void 0;
function _a(e) {
  return e == null ? e === void 0 ? da : pa : gr && gr in Object(e) ? la(e) : va(e);
}
var q = _a;
function ga(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var Jr = ga, ha = Jr, ya = ha(Object.getPrototypeOf, Object), ba = ya;
function $a(e) {
  return e != null && typeof e == "object";
}
var Y = $a, Ta = q, Oa = ba, ma = Y, Ea = "[object Object]", Aa = Function.prototype, Pa = Object.prototype, Xr = Aa.toString, Ca = Pa.hasOwnProperty, wa = Xr.call(Object);
function Sa(e) {
  if (!ma(e) || Ta(e) != Ea)
    return !1;
  var r = Oa(e);
  if (r === null)
    return !0;
  var t = Ca.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && Xr.call(t) == wa;
}
var Ra = Sa;
function ja(e, r, t, n) {
  var o = -1, i = e == null ? 0 : e.length;
  for (n && i && (t = e[++o]); ++o < i; )
    t = r(t, e[o], o, e);
  return t;
}
var xa = ja;
function Ia(e) {
  return function(r, t, n) {
    for (var o = -1, i = Object(r), c = n(r), f = c.length; f--; ) {
      var l = c[e ? f : ++o];
      if (t(i[l], l, i) === !1)
        break;
    }
    return r;
  };
}
var Da = Ia, Ma = Da, La = Ma(), Fa = La;
function Ga(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var Na = Ga, ka = q, Ua = Y, Ba = "[object Arguments]";
function Ha(e) {
  return Ua(e) && ka(e) == Ba;
}
var Ka = Ha, hr = Ka, qa = Y, Zr = Object.prototype, Ya = Zr.hasOwnProperty, Wa = Zr.propertyIsEnumerable, za = hr(function() {
  return arguments;
}()) ? hr : function(e) {
  return qa(e) && Ya.call(e, "callee") && !Wa.call(e, "callee");
}, Qr = za, ce = { exports: {} };
function Va() {
  return !1;
}
var Ja = Va;
(function(e, r) {
  var t = F, n = Ja, o = r && !r.nodeType && r, i = o && !0 && e && !e.nodeType && e, c = i && i.exports === o, f = c ? t.Buffer : void 0, l = f ? f.isBuffer : void 0, v = l || n;
  e.exports = v;
})(ce, ce.exports);
var Xa = 9007199254740991, Za = /^(?:0|[1-9]\d*)$/;
function Qa(e, r) {
  var t = typeof e;
  return r = r == null ? Xa : r, !!r && (t == "number" || t != "symbol" && Za.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var et = Qa, en = 9007199254740991;
function rn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= en;
}
var Ge = rn, tn = q, an = Ge, nn = Y, sn = "[object Arguments]", on = "[object Array]", un = "[object Boolean]", cn = "[object Date]", fn = "[object Error]", ln = "[object Function]", vn = "[object Map]", pn = "[object Number]", dn = "[object Object]", _n = "[object RegExp]", gn = "[object Set]", hn = "[object String]", yn = "[object WeakMap]", bn = "[object ArrayBuffer]", $n = "[object DataView]", Tn = "[object Float32Array]", On = "[object Float64Array]", mn = "[object Int8Array]", En = "[object Int16Array]", An = "[object Int32Array]", Pn = "[object Uint8Array]", Cn = "[object Uint8ClampedArray]", wn = "[object Uint16Array]", Sn = "[object Uint32Array]", T = {};
T[Tn] = T[On] = T[mn] = T[En] = T[An] = T[Pn] = T[Cn] = T[wn] = T[Sn] = !0;
T[sn] = T[on] = T[bn] = T[un] = T[$n] = T[cn] = T[fn] = T[ln] = T[vn] = T[pn] = T[dn] = T[_n] = T[gn] = T[hn] = T[yn] = !1;
function Rn(e) {
  return nn(e) && an(e.length) && !!T[tn(e)];
}
var jn = Rn;
function xn(e) {
  return function(r) {
    return e(r);
  };
}
var In = xn, je = { exports: {} };
(function(e, r) {
  var t = zr, n = r && !r.nodeType && r, o = n && !0 && e && !e.nodeType && e, i = o && o.exports === n, c = i && t.process, f = function() {
    try {
      var l = o && o.require && o.require("util").types;
      return l || c && c.binding && c.binding("util");
    } catch {
    }
  }();
  e.exports = f;
})(je, je.exports);
var Dn = jn, Mn = In, yr = je.exports, br = yr && yr.isTypedArray, Ln = br ? Mn(br) : Dn, rt = Ln, Fn = Na, Gn = Qr, Nn = D, kn = ce.exports, Un = et, Bn = rt, Hn = Object.prototype, Kn = Hn.hasOwnProperty;
function qn(e, r) {
  var t = Nn(e), n = !t && Gn(e), o = !t && !n && kn(e), i = !t && !n && !o && Bn(e), c = t || n || o || i, f = c ? Fn(e.length, String) : [], l = f.length;
  for (var v in e)
    (r || Kn.call(e, v)) && !(c && (v == "length" || o && (v == "offset" || v == "parent") || i && (v == "buffer" || v == "byteLength" || v == "byteOffset") || Un(v, l))) && f.push(v);
  return f;
}
var Yn = qn, Wn = Object.prototype;
function zn(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || Wn;
  return e === t;
}
var Vn = zn, Jn = Jr, Xn = Jn(Object.keys, Object), Zn = Xn, Qn = Vn, ei = Zn, ri = Object.prototype, ti = ri.hasOwnProperty;
function ai(e) {
  if (!Qn(e))
    return ei(e);
  var r = [];
  for (var t in Object(e))
    ti.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
var ni = ai;
function ii(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var Ne = ii, si = q, oi = Ne, ui = "[object AsyncFunction]", ci = "[object Function]", fi = "[object GeneratorFunction]", li = "[object Proxy]";
function vi(e) {
  if (!oi(e))
    return !1;
  var r = si(e);
  return r == ci || r == fi || r == ui || r == li;
}
var tt = vi, pi = tt, di = Ge;
function _i(e) {
  return e != null && di(e.length) && !pi(e);
}
var at = _i, gi = Yn, hi = ni, yi = at;
function bi(e) {
  return yi(e) ? gi(e) : hi(e);
}
var ke = bi, $i = Fa, Ti = ke;
function Oi(e, r) {
  return e && $i(e, r, Ti);
}
var mi = Oi, Ei = at;
function Ai(e, r) {
  return function(t, n) {
    if (t == null)
      return t;
    if (!Ei(t))
      return e(t, n);
    for (var o = t.length, i = r ? o : -1, c = Object(t); (r ? i-- : ++i < o) && n(c[i], i, c) !== !1; )
      ;
    return t;
  };
}
var Pi = Ai, Ci = mi, wi = Pi, Si = wi(Ci), Ri = Si;
function ji() {
  this.__data__ = [], this.size = 0;
}
var xi = ji;
function Ii(e, r) {
  return e === r || e !== e && r !== r;
}
var nt = Ii, Di = nt;
function Mi(e, r) {
  for (var t = e.length; t--; )
    if (Di(e[t][0], r))
      return t;
  return -1;
}
var pe = Mi, Li = pe, Fi = Array.prototype, Gi = Fi.splice;
function Ni(e) {
  var r = this.__data__, t = Li(r, e);
  if (t < 0)
    return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : Gi.call(r, t, 1), --this.size, !0;
}
var ki = Ni, Ui = pe;
function Bi(e) {
  var r = this.__data__, t = Ui(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var Hi = Bi, Ki = pe;
function qi(e) {
  return Ki(this.__data__, e) > -1;
}
var Yi = qi, Wi = pe;
function zi(e, r) {
  var t = this.__data__, n = Wi(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : t[n][1] = r, this;
}
var Vi = zi, Ji = xi, Xi = ki, Zi = Hi, Qi = Yi, es = Vi;
function W(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
W.prototype.clear = Ji;
W.prototype.delete = Xi;
W.prototype.get = Zi;
W.prototype.has = Qi;
W.prototype.set = es;
var de = W, rs = de;
function ts() {
  this.__data__ = new rs(), this.size = 0;
}
var as = ts;
function ns(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
var is = ns;
function ss(e) {
  return this.__data__.get(e);
}
var os = ss;
function us(e) {
  return this.__data__.has(e);
}
var cs = us, fs = F, ls = fs["__core-js_shared__"], vs = ls, Pe = vs, $r = function() {
  var e = /[^.]+$/.exec(Pe && Pe.keys && Pe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ps(e) {
  return !!$r && $r in e;
}
var ds = ps, _s = Function.prototype, gs = _s.toString;
function hs(e) {
  if (e != null) {
    try {
      return gs.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var it = hs, ys = tt, bs = ds, $s = Ne, Ts = it, Os = /[\\^$.*+?()[\]{}|]/g, ms = /^\[object .+?Constructor\]$/, Es = Function.prototype, As = Object.prototype, Ps = Es.toString, Cs = As.hasOwnProperty, ws = RegExp(
  "^" + Ps.call(Cs).replace(Os, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ss(e) {
  if (!$s(e) || bs(e))
    return !1;
  var r = ys(e) ? ws : ms;
  return r.test(Ts(e));
}
var Rs = Ss;
function js(e, r) {
  return e == null ? void 0 : e[r];
}
var xs = js, Is = Rs, Ds = xs;
function Ms(e, r) {
  var t = Ds(e, r);
  return Is(t) ? t : void 0;
}
var z = Ms, Ls = z, Fs = F, Gs = Ls(Fs, "Map"), Ue = Gs, Ns = z, ks = Ns(Object, "create"), _e = ks, Tr = _e;
function Us() {
  this.__data__ = Tr ? Tr(null) : {}, this.size = 0;
}
var Bs = Us;
function Hs(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var Ks = Hs, qs = _e, Ys = "__lodash_hash_undefined__", Ws = Object.prototype, zs = Ws.hasOwnProperty;
function Vs(e) {
  var r = this.__data__;
  if (qs) {
    var t = r[e];
    return t === Ys ? void 0 : t;
  }
  return zs.call(r, e) ? r[e] : void 0;
}
var Js = Vs, Xs = _e, Zs = Object.prototype, Qs = Zs.hasOwnProperty;
function eo(e) {
  var r = this.__data__;
  return Xs ? r[e] !== void 0 : Qs.call(r, e);
}
var ro = eo, to = _e, ao = "__lodash_hash_undefined__";
function no(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = to && r === void 0 ? ao : r, this;
}
var io = no, so = Bs, oo = Ks, uo = Js, co = ro, fo = io;
function V(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
V.prototype.clear = so;
V.prototype.delete = oo;
V.prototype.get = uo;
V.prototype.has = co;
V.prototype.set = fo;
var lo = V, Or = lo, vo = de, po = Ue;
function _o() {
  this.size = 0, this.__data__ = {
    hash: new Or(),
    map: new (po || vo)(),
    string: new Or()
  };
}
var go = _o;
function ho(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var yo = ho, bo = yo;
function $o(e, r) {
  var t = e.__data__;
  return bo(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
var ge = $o, To = ge;
function Oo(e) {
  var r = To(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var mo = Oo, Eo = ge;
function Ao(e) {
  return Eo(this, e).get(e);
}
var Po = Ao, Co = ge;
function wo(e) {
  return Co(this, e).has(e);
}
var So = wo, Ro = ge;
function jo(e, r) {
  var t = Ro(this, e), n = t.size;
  return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
}
var xo = jo, Io = go, Do = mo, Mo = Po, Lo = So, Fo = xo;
function J(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
J.prototype.clear = Io;
J.prototype.delete = Do;
J.prototype.get = Mo;
J.prototype.has = Lo;
J.prototype.set = Fo;
var Be = J, Go = de, No = Ue, ko = Be, Uo = 200;
function Bo(e, r) {
  var t = this.__data__;
  if (t instanceof Go) {
    var n = t.__data__;
    if (!No || n.length < Uo - 1)
      return n.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new ko(n);
  }
  return t.set(e, r), this.size = t.size, this;
}
var Ho = Bo, Ko = de, qo = as, Yo = is, Wo = os, zo = cs, Vo = Ho;
function X(e) {
  var r = this.__data__ = new Ko(e);
  this.size = r.size;
}
X.prototype.clear = qo;
X.prototype.delete = Yo;
X.prototype.get = Wo;
X.prototype.has = zo;
X.prototype.set = Vo;
var st = X, Jo = "__lodash_hash_undefined__";
function Xo(e) {
  return this.__data__.set(e, Jo), this;
}
var Zo = Xo;
function Qo(e) {
  return this.__data__.has(e);
}
var eu = Qo, ru = Be, tu = Zo, au = eu;
function fe(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new ru(); ++r < t; )
    this.add(e[r]);
}
fe.prototype.add = fe.prototype.push = tu;
fe.prototype.has = au;
var nu = fe;
function iu(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n; )
    if (r(e[t], t, e))
      return !0;
  return !1;
}
var su = iu;
function ou(e, r) {
  return e.has(r);
}
var uu = ou, cu = nu, fu = su, lu = uu, vu = 1, pu = 2;
function du(e, r, t, n, o, i) {
  var c = t & vu, f = e.length, l = r.length;
  if (f != l && !(c && l > f))
    return !1;
  var v = i.get(e), p = i.get(r);
  if (v && p)
    return v == r && p == e;
  var y = -1, _ = !0, A = t & pu ? new cu() : void 0;
  for (i.set(e, r), i.set(r, e); ++y < f; ) {
    var P = e[y], w = r[y];
    if (n)
      var R = c ? n(w, P, y, r, e, i) : n(P, w, y, e, r, i);
    if (R !== void 0) {
      if (R)
        continue;
      _ = !1;
      break;
    }
    if (A) {
      if (!fu(r, function(j, x) {
        if (!lu(A, x) && (P === j || o(P, j, t, n, i)))
          return A.push(x);
      })) {
        _ = !1;
        break;
      }
    } else if (!(P === w || o(P, w, t, n, i))) {
      _ = !1;
      break;
    }
  }
  return i.delete(e), i.delete(r), _;
}
var ot = du, _u = F, gu = _u.Uint8Array, hu = gu;
function yu(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(n, o) {
    t[++r] = [o, n];
  }), t;
}
var bu = yu;
function $u(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(n) {
    t[++r] = n;
  }), t;
}
var Tu = $u, mr = ve, Er = hu, Ou = nt, mu = ot, Eu = bu, Au = Tu, Pu = 1, Cu = 2, wu = "[object Boolean]", Su = "[object Date]", Ru = "[object Error]", ju = "[object Map]", xu = "[object Number]", Iu = "[object RegExp]", Du = "[object Set]", Mu = "[object String]", Lu = "[object Symbol]", Fu = "[object ArrayBuffer]", Gu = "[object DataView]", Ar = mr ? mr.prototype : void 0, Ce = Ar ? Ar.valueOf : void 0;
function Nu(e, r, t, n, o, i, c) {
  switch (t) {
    case Gu:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      e = e.buffer, r = r.buffer;
    case Fu:
      return !(e.byteLength != r.byteLength || !i(new Er(e), new Er(r)));
    case wu:
    case Su:
    case xu:
      return Ou(+e, +r);
    case Ru:
      return e.name == r.name && e.message == r.message;
    case Iu:
    case Mu:
      return e == r + "";
    case ju:
      var f = Eu;
    case Du:
      var l = n & Pu;
      if (f || (f = Au), e.size != r.size && !l)
        return !1;
      var v = c.get(e);
      if (v)
        return v == r;
      n |= Cu, c.set(e, r);
      var p = mu(f(e), f(r), n, o, i, c);
      return c.delete(e), p;
    case Lu:
      if (Ce)
        return Ce.call(e) == Ce.call(r);
  }
  return !1;
}
var ku = Nu;
function Uu(e, r) {
  for (var t = -1, n = r.length, o = e.length; ++t < n; )
    e[o + t] = r[t];
  return e;
}
var Bu = Uu, Hu = Bu, Ku = D;
function qu(e, r, t) {
  var n = r(e);
  return Ku(e) ? n : Hu(n, t(e));
}
var Yu = qu;
function Wu(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++t < n; ) {
    var c = e[t];
    r(c, t, e) && (i[o++] = c);
  }
  return i;
}
var zu = Wu;
function Vu() {
  return [];
}
var Ju = Vu, Xu = zu, Zu = Ju, Qu = Object.prototype, ec = Qu.propertyIsEnumerable, Pr = Object.getOwnPropertySymbols, rc = Pr ? function(e) {
  return e == null ? [] : (e = Object(e), Xu(Pr(e), function(r) {
    return ec.call(e, r);
  }));
} : Zu, tc = rc, ac = Yu, nc = tc, ic = ke;
function sc(e) {
  return ac(e, ic, nc);
}
var oc = sc, Cr = oc, uc = 1, cc = Object.prototype, fc = cc.hasOwnProperty;
function lc(e, r, t, n, o, i) {
  var c = t & uc, f = Cr(e), l = f.length, v = Cr(r), p = v.length;
  if (l != p && !c)
    return !1;
  for (var y = l; y--; ) {
    var _ = f[y];
    if (!(c ? _ in r : fc.call(r, _)))
      return !1;
  }
  var A = i.get(e), P = i.get(r);
  if (A && P)
    return A == r && P == e;
  var w = !0;
  i.set(e, r), i.set(r, e);
  for (var R = c; ++y < l; ) {
    _ = f[y];
    var j = e[_], x = r[_];
    if (n)
      var O = c ? n(x, j, _, r, e, i) : n(j, x, _, e, r, i);
    if (!(O === void 0 ? j === x || o(j, x, t, n, i) : O)) {
      w = !1;
      break;
    }
    R || (R = _ == "constructor");
  }
  if (w && !R) {
    var G = e.constructor, k = r.constructor;
    G != k && "constructor" in e && "constructor" in r && !(typeof G == "function" && G instanceof G && typeof k == "function" && k instanceof k) && (w = !1);
  }
  return i.delete(e), i.delete(r), w;
}
var vc = lc, pc = z, dc = F, _c = pc(dc, "DataView"), gc = _c, hc = z, yc = F, bc = hc(yc, "Promise"), $c = bc, Tc = z, Oc = F, mc = Tc(Oc, "Set"), Ec = mc, Ac = z, Pc = F, Cc = Ac(Pc, "WeakMap"), wc = Cc, xe = gc, Ie = Ue, De = $c, Me = Ec, Le = wc, ut = q, Z = it, wr = "[object Map]", Sc = "[object Object]", Sr = "[object Promise]", Rr = "[object Set]", jr = "[object WeakMap]", xr = "[object DataView]", Rc = Z(xe), jc = Z(Ie), xc = Z(De), Ic = Z(Me), Dc = Z(Le), N = ut;
(xe && N(new xe(new ArrayBuffer(1))) != xr || Ie && N(new Ie()) != wr || De && N(De.resolve()) != Sr || Me && N(new Me()) != Rr || Le && N(new Le()) != jr) && (N = function(e) {
  var r = ut(e), t = r == Sc ? e.constructor : void 0, n = t ? Z(t) : "";
  if (n)
    switch (n) {
      case Rc:
        return xr;
      case jc:
        return wr;
      case xc:
        return Sr;
      case Ic:
        return Rr;
      case Dc:
        return jr;
    }
  return r;
});
var Mc = N, we = st, Lc = ot, Fc = ku, Gc = vc, Ir = Mc, Dr = D, Mr = ce.exports, Nc = rt, kc = 1, Lr = "[object Arguments]", Fr = "[object Array]", oe = "[object Object]", Uc = Object.prototype, Gr = Uc.hasOwnProperty;
function Bc(e, r, t, n, o, i) {
  var c = Dr(e), f = Dr(r), l = c ? Fr : Ir(e), v = f ? Fr : Ir(r);
  l = l == Lr ? oe : l, v = v == Lr ? oe : v;
  var p = l == oe, y = v == oe, _ = l == v;
  if (_ && Mr(e)) {
    if (!Mr(r))
      return !1;
    c = !0, p = !1;
  }
  if (_ && !p)
    return i || (i = new we()), c || Nc(e) ? Lc(e, r, t, n, o, i) : Fc(e, r, l, t, n, o, i);
  if (!(t & kc)) {
    var A = p && Gr.call(e, "__wrapped__"), P = y && Gr.call(r, "__wrapped__");
    if (A || P) {
      var w = A ? e.value() : e, R = P ? r.value() : r;
      return i || (i = new we()), o(w, R, t, n, i);
    }
  }
  return _ ? (i || (i = new we()), Gc(e, r, t, n, o, i)) : !1;
}
var Hc = Bc, Kc = Hc, Nr = Y;
function ct(e, r, t, n, o) {
  return e === r ? !0 : e == null || r == null || !Nr(e) && !Nr(r) ? e !== e && r !== r : Kc(e, r, t, n, ct, o);
}
var ft = ct, qc = st, Yc = ft, Wc = 1, zc = 2;
function Vc(e, r, t, n) {
  var o = t.length, i = o, c = !n;
  if (e == null)
    return !i;
  for (e = Object(e); o--; ) {
    var f = t[o];
    if (c && f[2] ? f[1] !== e[f[0]] : !(f[0] in e))
      return !1;
  }
  for (; ++o < i; ) {
    f = t[o];
    var l = f[0], v = e[l], p = f[1];
    if (c && f[2]) {
      if (v === void 0 && !(l in e))
        return !1;
    } else {
      var y = new qc();
      if (n)
        var _ = n(v, p, l, e, r, y);
      if (!(_ === void 0 ? Yc(p, v, Wc | zc, n, y) : _))
        return !1;
    }
  }
  return !0;
}
var Jc = Vc, Xc = Ne;
function Zc(e) {
  return e === e && !Xc(e);
}
var lt = Zc, Qc = lt, ef = ke;
function rf(e) {
  for (var r = ef(e), t = r.length; t--; ) {
    var n = r[t], o = e[n];
    r[t] = [n, o, Qc(o)];
  }
  return r;
}
var tf = rf;
function af(e, r) {
  return function(t) {
    return t == null ? !1 : t[e] === r && (r !== void 0 || e in Object(t));
  };
}
var vt = af, nf = Jc, sf = tf, of = vt;
function uf(e) {
  var r = sf(e);
  return r.length == 1 && r[0][2] ? of(r[0][0], r[0][1]) : function(t) {
    return t === e || nf(t, e, r);
  };
}
var cf = uf, ff = q, lf = Y, vf = "[object Symbol]";
function pf(e) {
  return typeof e == "symbol" || lf(e) && ff(e) == vf;
}
var He = pf, df = D, _f = He, gf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, hf = /^\w*$/;
function yf(e, r) {
  if (df(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || _f(e) ? !0 : hf.test(e) || !gf.test(e) || r != null && e in Object(r);
}
var Ke = yf, pt = Be, bf = "Expected a function";
function qe(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(bf);
  var t = function() {
    var n = arguments, o = r ? r.apply(this, n) : n[0], i = t.cache;
    if (i.has(o))
      return i.get(o);
    var c = e.apply(this, n);
    return t.cache = i.set(o, c) || i, c;
  };
  return t.cache = new (qe.Cache || pt)(), t;
}
qe.Cache = pt;
var $f = qe, Tf = $f, Of = 500;
function mf(e) {
  var r = Tf(e, function(n) {
    return t.size === Of && t.clear(), n;
  }), t = r.cache;
  return r;
}
var Ef = mf, Af = Ef, Pf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Cf = /\\(\\)?/g, wf = Af(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(Pf, function(t, n, o, i) {
    r.push(o ? i.replace(Cf, "$1") : n || t);
  }), r;
}), Sf = wf;
function Rf(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, o = Array(n); ++t < n; )
    o[t] = r(e[t], t, e);
  return o;
}
var jf = Rf, kr = ve, xf = jf, If = D, Df = He, Mf = 1 / 0, Ur = kr ? kr.prototype : void 0, Br = Ur ? Ur.toString : void 0;
function dt(e) {
  if (typeof e == "string")
    return e;
  if (If(e))
    return xf(e, dt) + "";
  if (Df(e))
    return Br ? Br.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -Mf ? "-0" : r;
}
var Lf = dt, Ff = Lf;
function Gf(e) {
  return e == null ? "" : Ff(e);
}
var Nf = Gf, kf = D, Uf = Ke, Bf = Sf, Hf = Nf;
function Kf(e, r) {
  return kf(e) ? e : Uf(e, r) ? [e] : Bf(Hf(e));
}
var _t = Kf, qf = He, Yf = 1 / 0;
function Wf(e) {
  if (typeof e == "string" || qf(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -Yf ? "-0" : r;
}
var he = Wf, zf = _t, Vf = he;
function Jf(e, r) {
  r = zf(r, e);
  for (var t = 0, n = r.length; e != null && t < n; )
    e = e[Vf(r[t++])];
  return t && t == n ? e : void 0;
}
var gt = Jf, Xf = gt;
function Zf(e, r, t) {
  var n = e == null ? void 0 : Xf(e, r);
  return n === void 0 ? t : n;
}
var Qf = Zf;
function el(e, r) {
  return e != null && r in Object(e);
}
var rl = el, tl = _t, al = Qr, nl = D, il = et, sl = Ge, ol = he;
function ul(e, r, t) {
  r = tl(r, e);
  for (var n = -1, o = r.length, i = !1; ++n < o; ) {
    var c = ol(r[n]);
    if (!(i = e != null && t(e, c)))
      break;
    e = e[c];
  }
  return i || ++n != o ? i : (o = e == null ? 0 : e.length, !!o && sl(o) && il(c, o) && (nl(e) || al(e)));
}
var cl = ul, fl = rl, ll = cl;
function vl(e, r) {
  return e != null && ll(e, r, fl);
}
var pl = vl, dl = ft, _l = Qf, gl = pl, hl = Ke, yl = lt, bl = vt, $l = he, Tl = 1, Ol = 2;
function ml(e, r) {
  return hl(e) && yl(r) ? bl($l(e), r) : function(t) {
    var n = _l(t, e);
    return n === void 0 && n === r ? gl(t, e) : dl(r, n, Tl | Ol);
  };
}
var El = ml;
function Al(e) {
  return e;
}
var Pl = Al;
function Cl(e) {
  return function(r) {
    return r == null ? void 0 : r[e];
  };
}
var wl = Cl, Sl = gt;
function Rl(e) {
  return function(r) {
    return Sl(r, e);
  };
}
var jl = Rl, xl = wl, Il = jl, Dl = Ke, Ml = he;
function Ll(e) {
  return Dl(e) ? xl(Ml(e)) : Il(e);
}
var Fl = Ll, Gl = cf, Nl = El, kl = Pl, Ul = D, Bl = Fl;
function Hl(e) {
  return typeof e == "function" ? e : e == null ? kl : typeof e == "object" ? Ul(e) ? Nl(e[0], e[1]) : Gl(e) : Bl(e);
}
var Kl = Hl;
function ql(e, r, t, n, o) {
  return o(e, function(i, c, f) {
    t = n ? (n = !1, i) : r(t, i, c, f);
  }), t;
}
var Yl = ql, Wl = xa, zl = Ri, Vl = Kl, Jl = Yl, Xl = D;
function Zl(e, r, t) {
  var n = Xl(e) ? Wl : Jl, o = arguments.length < 3;
  return n(e, Vl(r), t, o, zl);
}
var Ql = Zl;
const Hr = (e) => e.displayName || e.name || void 0;
var ht = { exports: {} }, K = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Se, Kr;
function yt() {
  if (Kr)
    return Se;
  Kr = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
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
      var l = Object.getOwnPropertyNames(c).map(function(p) {
        return c[p];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var v = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        v[p] = p;
      }), Object.keys(Object.assign({}, v)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Se = o() ? Object.assign : function(i, c) {
    for (var f, l = n(i), v, p = 1; p < arguments.length; p++) {
      f = Object(arguments[p]);
      for (var y in f)
        r.call(f, y) && (l[y] = f[y]);
      if (e) {
        v = e(f);
        for (var _ = 0; _ < v.length; _++)
          t.call(f, v[_]) && (l[v[_]] = f[v[_]]);
      }
    }
    return l;
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
var qr;
function ev() {
  if (qr)
    return K;
  qr = 1, yt();
  var e = Wr, r = 60103;
  if (K.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var t = Symbol.for;
    r = t("react.element"), K.Fragment = t("react.fragment");
  }
  var n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = Object.prototype.hasOwnProperty, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, l, v) {
    var p, y = {}, _ = null, A = null;
    v !== void 0 && (_ = "" + v), l.key !== void 0 && (_ = "" + l.key), l.ref !== void 0 && (A = l.ref);
    for (p in l)
      o.call(l, p) && !i.hasOwnProperty(p) && (y[p] = l[p]);
    if (f && f.defaultProps)
      for (p in l = f.defaultProps, l)
        y[p] === void 0 && (y[p] = l[p]);
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
var Yr;
function rv() {
  return Yr || (Yr = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var r = Wr, t = yt(), n = 60103, o = 60106;
      e.Fragment = 60107;
      var i = 60108, c = 60114, f = 60109, l = 60110, v = 60112, p = 60113, y = 60120, _ = 60115, A = 60116, P = 60121, w = 60122, R = 60117, j = 60129, x = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var O = Symbol.for;
        n = O("react.element"), o = O("react.portal"), e.Fragment = O("react.fragment"), i = O("react.strict_mode"), c = O("react.profiler"), f = O("react.provider"), l = O("react.context"), v = O("react.forward_ref"), p = O("react.suspense"), y = O("react.suspense_list"), _ = O("react.memo"), A = O("react.lazy"), P = O("react.block"), w = O("react.server.block"), R = O("react.fundamental"), O("react.scope"), O("react.opaque.id"), j = O("react.debug_trace_mode"), O("react.offscreen"), x = O("react.legacy_hidden");
      }
      var G = typeof Symbol == "function" && Symbol.iterator, k = "@@iterator";
      function bt(a) {
        if (a === null || typeof a != "object")
          return null;
        var s = G && a[G] || a[k];
        return typeof s == "function" ? s : null;
      }
      var U = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function S(a) {
        {
          for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), d = 1; d < s; d++)
            u[d - 1] = arguments[d];
          $t("error", a, u);
        }
      }
      function $t(a, s, u) {
        {
          var d = U.ReactDebugCurrentFrame, b = d.getStackAddendum();
          b !== "" && (s += "%s", u = u.concat([b]));
          var $ = u.map(function(h) {
            return "" + h;
          });
          $.unshift("Warning: " + s), Function.prototype.apply.call(console[a], console, $);
        }
      }
      var Tt = !1;
      function Ot(a) {
        return !!(typeof a == "string" || typeof a == "function" || a === e.Fragment || a === c || a === j || a === i || a === p || a === y || a === x || Tt || typeof a == "object" && a !== null && (a.$$typeof === A || a.$$typeof === _ || a.$$typeof === f || a.$$typeof === l || a.$$typeof === v || a.$$typeof === R || a.$$typeof === P || a[0] === w));
      }
      function mt(a, s, u) {
        var d = s.displayName || s.name || "";
        return a.displayName || (d !== "" ? u + "(" + d + ")" : u);
      }
      function Ye(a) {
        return a.displayName || "Context";
      }
      function I(a) {
        if (a == null)
          return null;
        if (typeof a.tag == "number" && S("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof a == "function")
          return a.displayName || a.name || null;
        if (typeof a == "string")
          return a;
        switch (a) {
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
        if (typeof a == "object")
          switch (a.$$typeof) {
            case l:
              var s = a;
              return Ye(s) + ".Consumer";
            case f:
              var u = a;
              return Ye(u._context) + ".Provider";
            case v:
              return mt(a, a.render, "ForwardRef");
            case _:
              return I(a.type);
            case P:
              return I(a._render);
            case A: {
              var d = a, b = d._payload, $ = d._init;
              try {
                return I($(b));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Q = 0, We, ze, Ve, Je, Xe, Ze, Qe;
      function er() {
      }
      er.__reactDisabledLog = !0;
      function Et() {
        {
          if (Q === 0) {
            We = console.log, ze = console.info, Ve = console.warn, Je = console.error, Xe = console.group, Ze = console.groupCollapsed, Qe = console.groupEnd;
            var a = {
              configurable: !0,
              enumerable: !0,
              value: er,
              writable: !0
            };
            Object.defineProperties(console, {
              info: a,
              log: a,
              warn: a,
              error: a,
              group: a,
              groupCollapsed: a,
              groupEnd: a
            });
          }
          Q++;
        }
      }
      function At() {
        {
          if (Q--, Q === 0) {
            var a = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: t({}, a, {
                value: We
              }),
              info: t({}, a, {
                value: ze
              }),
              warn: t({}, a, {
                value: Ve
              }),
              error: t({}, a, {
                value: Je
              }),
              group: t({}, a, {
                value: Xe
              }),
              groupCollapsed: t({}, a, {
                value: Ze
              }),
              groupEnd: t({}, a, {
                value: Qe
              })
            });
          }
          Q < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ye = U.ReactCurrentDispatcher, be;
      function te(a, s, u) {
        {
          if (be === void 0)
            try {
              throw Error();
            } catch (b) {
              var d = b.stack.trim().match(/\n( *(at )?)/);
              be = d && d[1] || "";
            }
          return `
` + be + a;
        }
      }
      var $e = !1, ae;
      {
        var Pt = typeof WeakMap == "function" ? WeakMap : Map;
        ae = new Pt();
      }
      function rr(a, s) {
        if (!a || $e)
          return "";
        {
          var u = ae.get(a);
          if (u !== void 0)
            return u;
        }
        var d;
        $e = !0;
        var b = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var $;
        $ = ye.current, ye.current = null, Et();
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
              Reflect.construct(a, [], h);
            } else {
              try {
                h.call();
              } catch (L) {
                d = L;
              }
              a.call(h.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (L) {
              d = L;
            }
            a();
          }
        } catch (L) {
          if (L && d && typeof L.stack == "string") {
            for (var g = L.stack.split(`
`), C = d.stack.split(`
`), m = g.length - 1, E = C.length - 1; m >= 1 && E >= 0 && g[m] !== C[E]; )
              E--;
            for (; m >= 1 && E >= 0; m--, E--)
              if (g[m] !== C[E]) {
                if (m !== 1 || E !== 1)
                  do
                    if (m--, E--, E < 0 || g[m] !== C[E]) {
                      var M = `
` + g[m].replace(" at new ", " at ");
                      return typeof a == "function" && ae.set(a, M), M;
                    }
                  while (m >= 1 && E >= 0);
                break;
              }
          }
        } finally {
          $e = !1, ye.current = $, At(), Error.prepareStackTrace = b;
        }
        var H = a ? a.displayName || a.name : "", pr = H ? te(H) : "";
        return typeof a == "function" && ae.set(a, pr), pr;
      }
      function tr(a, s, u) {
        return rr(a, !1);
      }
      function Ct(a) {
        var s = a.prototype;
        return !!(s && s.isReactComponent);
      }
      function ne(a, s, u) {
        if (a == null)
          return "";
        if (typeof a == "function")
          return rr(a, Ct(a));
        if (typeof a == "string")
          return te(a);
        switch (a) {
          case p:
            return te("Suspense");
          case y:
            return te("SuspenseList");
        }
        if (typeof a == "object")
          switch (a.$$typeof) {
            case v:
              return tr(a.render);
            case _:
              return ne(a.type, s, u);
            case P:
              return tr(a._render);
            case A: {
              var d = a, b = d._payload, $ = d._init;
              try {
                return ne($(b), s, u);
              } catch {
              }
            }
          }
        return "";
      }
      var ar = {}, nr = U.ReactDebugCurrentFrame;
      function ie(a) {
        if (a) {
          var s = a._owner, u = ne(a.type, a._source, s ? s.type : null);
          nr.setExtraStackFrame(u);
        } else
          nr.setExtraStackFrame(null);
      }
      function wt(a, s, u, d, b) {
        {
          var $ = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var h in a)
            if ($(a, h)) {
              var g = void 0;
              try {
                if (typeof a[h] != "function") {
                  var C = Error((d || "React class") + ": " + u + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw C.name = "Invariant Violation", C;
                }
                g = a[h](s, h, d, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (m) {
                g = m;
              }
              g && !(g instanceof Error) && (ie(b), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", u, h, typeof g), ie(null)), g instanceof Error && !(g.message in ar) && (ar[g.message] = !0, ie(b), S("Failed %s type: %s", u, g.message), ie(null));
            }
        }
      }
      var ee = U.ReactCurrentOwner, Te = Object.prototype.hasOwnProperty, St = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ir, sr, Oe;
      Oe = {};
      function Rt(a) {
        if (Te.call(a, "ref")) {
          var s = Object.getOwnPropertyDescriptor(a, "ref").get;
          if (s && s.isReactWarning)
            return !1;
        }
        return a.ref !== void 0;
      }
      function jt(a) {
        if (Te.call(a, "key")) {
          var s = Object.getOwnPropertyDescriptor(a, "key").get;
          if (s && s.isReactWarning)
            return !1;
        }
        return a.key !== void 0;
      }
      function xt(a, s) {
        if (typeof a.ref == "string" && ee.current && s && ee.current.stateNode !== s) {
          var u = I(ee.current.type);
          Oe[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(ee.current.type), a.ref), Oe[u] = !0);
        }
      }
      function It(a, s) {
        {
          var u = function() {
            ir || (ir = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
          };
          u.isReactWarning = !0, Object.defineProperty(a, "key", {
            get: u,
            configurable: !0
          });
        }
      }
      function Dt(a, s) {
        {
          var u = function() {
            sr || (sr = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
          };
          u.isReactWarning = !0, Object.defineProperty(a, "ref", {
            get: u,
            configurable: !0
          });
        }
      }
      var Mt = function(a, s, u, d, b, $, h) {
        var g = {
          $$typeof: n,
          type: a,
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
      function Lt(a, s, u, d, b) {
        {
          var $, h = {}, g = null, C = null;
          u !== void 0 && (g = "" + u), jt(s) && (g = "" + s.key), Rt(s) && (C = s.ref, xt(s, b));
          for ($ in s)
            Te.call(s, $) && !St.hasOwnProperty($) && (h[$] = s[$]);
          if (a && a.defaultProps) {
            var m = a.defaultProps;
            for ($ in m)
              h[$] === void 0 && (h[$] = m[$]);
          }
          if (g || C) {
            var E = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
            g && It(h, E), C && Dt(h, E);
          }
          return Mt(a, g, C, b, d, ee.current, h);
        }
      }
      var me = U.ReactCurrentOwner, or = U.ReactDebugCurrentFrame;
      function B(a) {
        if (a) {
          var s = a._owner, u = ne(a.type, a._source, s ? s.type : null);
          or.setExtraStackFrame(u);
        } else
          or.setExtraStackFrame(null);
      }
      var Ee;
      Ee = !1;
      function Ae(a) {
        return typeof a == "object" && a !== null && a.$$typeof === n;
      }
      function ur() {
        {
          if (me.current) {
            var a = I(me.current.type);
            if (a)
              return `

Check the render method of \`` + a + "`.";
          }
          return "";
        }
      }
      function Ft(a) {
        {
          if (a !== void 0) {
            var s = a.fileName.replace(/^.*[\\\/]/, ""), u = a.lineNumber;
            return `

Check your code at ` + s + ":" + u + ".";
          }
          return "";
        }
      }
      var cr = {};
      function Gt(a) {
        {
          var s = ur();
          if (!s) {
            var u = typeof a == "string" ? a : a.displayName || a.name;
            u && (s = `

Check the top-level render call using <` + u + ">.");
          }
          return s;
        }
      }
      function fr(a, s) {
        {
          if (!a._store || a._store.validated || a.key != null)
            return;
          a._store.validated = !0;
          var u = Gt(s);
          if (cr[u])
            return;
          cr[u] = !0;
          var d = "";
          a && a._owner && a._owner !== me.current && (d = " It was passed a child from " + I(a._owner.type) + "."), B(a), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, d), B(null);
        }
      }
      function lr(a, s) {
        {
          if (typeof a != "object")
            return;
          if (Array.isArray(a))
            for (var u = 0; u < a.length; u++) {
              var d = a[u];
              Ae(d) && fr(d, s);
            }
          else if (Ae(a))
            a._store && (a._store.validated = !0);
          else if (a) {
            var b = bt(a);
            if (typeof b == "function" && b !== a.entries)
              for (var $ = b.call(a), h; !(h = $.next()).done; )
                Ae(h.value) && fr(h.value, s);
          }
        }
      }
      function Nt(a) {
        {
          var s = a.type;
          if (s == null || typeof s == "string")
            return;
          var u;
          if (typeof s == "function")
            u = s.propTypes;
          else if (typeof s == "object" && (s.$$typeof === v || s.$$typeof === _))
            u = s.propTypes;
          else
            return;
          if (u) {
            var d = I(s);
            wt(u, a.props, "prop", d, a);
          } else if (s.PropTypes !== void 0 && !Ee) {
            Ee = !0;
            var b = I(s);
            S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
          }
          typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function kt(a) {
        {
          for (var s = Object.keys(a.props), u = 0; u < s.length; u++) {
            var d = s[u];
            if (d !== "children" && d !== "key") {
              B(a), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), B(null);
              break;
            }
          }
          a.ref !== null && (B(a), S("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
        }
      }
      function vr(a, s, u, d, b, $) {
        {
          var h = Ot(a);
          if (!h) {
            var g = "";
            (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var C = Ft(b);
            C ? g += C : g += ur();
            var m;
            a === null ? m = "null" : Array.isArray(a) ? m = "array" : a !== void 0 && a.$$typeof === n ? (m = "<" + (I(a.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : m = typeof a, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, g);
          }
          var E = Lt(a, s, u, b, $);
          if (E == null)
            return E;
          if (h) {
            var M = s.children;
            if (M !== void 0)
              if (d)
                if (Array.isArray(M)) {
                  for (var H = 0; H < M.length; H++)
                    lr(M[H], a);
                  Object.freeze && Object.freeze(M);
                } else
                  S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                lr(M, a);
          }
          return a === e.Fragment ? kt(E) : Nt(E), E;
        }
      }
      function Ut(a, s, u) {
        return vr(a, s, u, !0);
      }
      function Bt(a, s, u) {
        return vr(a, s, u, !1);
      }
      var Ht = Bt, Kt = Ut;
      e.jsx = Ht, e.jsxs = Kt;
    }();
  }(Re)), Re;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = ev() : e.exports = rv();
})(ht);
const tv = ht.exports.jsx, sv = (e) => (r) => {
  const t = (n) => {
    const o = Ql(e, (i, c, f) => {
      let l, v;
      if (c)
        if (typeof c == "object") {
          if (Array.isArray(c))
            l = c[0], v = c.slice(1);
          else if (Ra(c)) {
            const p = e;
            "hook" in p && (l = p.hook), "parameters" in p ? v = p.parameters : "invoke" in p && typeof p.invoke == "function" && (v = p.invoke);
          }
        } else
          l = c;
      if (typeof l != "function")
        throw new Error(`The hook is not a function. Happened in ${Hr(r) || "undefined"}`);
      return i[f] = l(...Jt(v)), i;
    }, {});
    return /* @__PURE__ */ tv(r, {
      ...n,
      ...o
    });
  };
  return t.displayName = Hr(r), t;
}, av = () => {
  const e = le(!1);
  return Fe(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}, ov = (e) => {
  const r = le(e);
  Fe(() => {
    r.current();
  }, []);
}, nv = (e) => {
  const r = le(e);
  r.current = e, Fe(() => () => {
    r.current();
  }, []);
}, uv = (e) => {
  const r = av(), [t, n] = qt(e), o = ue(
    (i) => {
      r.current && n(i);
    },
    [r]
  );
  return [t, o];
}, cv = () => {
  const e = le(), r = ue((o, i) => {
    e.current = setTimeout(o, i);
  }, []), t = ue(() => {
    e.current && clearTimeout(e.current);
  }, []), n = ue(
    (o, i) => {
      t(), r(o, i);
    },
    [t, r]
  );
  return nv(() => {
    t();
  }), Yt(
    () => ({
      set: r,
      reset: n,
      clear: t
    }),
    [t, n, r]
  );
};
export {
  Hr as getComponentName,
  av as useIsMounted,
  ov as useOnMount,
  nv as useOnUnmount,
  uv as useStateSafe,
  cv as useTimeout,
  sv as withHooks
};
