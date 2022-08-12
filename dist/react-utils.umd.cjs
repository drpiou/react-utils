(function(j,A){typeof exports=="object"&&typeof module<"u"?A(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],A):(j=typeof globalThis<"u"?globalThis:j||self,A(j["react-utils"]={},j.React))})(this,function(j,A){"use strict";const Ye=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(A);var ne=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},yt=Array.isArray,I=yt,bt=I;function $t(){if(!arguments.length)return[];var e=arguments[0];return bt(e)?e:[e]}var Tt=$t;function mt(e,r,a,n){var o=-1,i=e==null?0:e.length;for(n&&i&&(a=e[++o]);++o<i;)a=r(a,e[o],o,e);return a}var Ot=mt;function Et(e){return function(r,a,n){for(var o=-1,i=Object(r),c=n(r),f=c.length;f--;){var v=c[e?f:++o];if(a(i[v],v,i)===!1)break}return r}}var At=Et,Ct=At,wt=Ct(),Pt=wt;function St(e,r){for(var a=-1,n=Array(e);++a<e;)n[a]=r(a);return n}var Rt=St,jt=typeof ne=="object"&&ne&&ne.Object===Object&&ne,We=jt,xt=We,It=typeof self=="object"&&self&&self.Object===Object&&self,Dt=xt||It||Function("return this")(),F=Dt,Mt=F,Lt=Mt.Symbol,ie=Lt,ze=ie,qe=Object.prototype,Ft=qe.hasOwnProperty,Nt=qe.toString,Q=ze?ze.toStringTag:void 0;function Gt(e){var r=Ft.call(e,Q),a=e[Q];try{e[Q]=void 0;var n=!0}catch{}var o=Nt.call(e);return n&&(r?e[Q]=a:delete e[Q]),o}var kt=Gt,Ut=Object.prototype,Bt=Ut.toString;function Ht(e){return Bt.call(e)}var Kt=Ht,Ve=ie,Yt=kt,Wt=Kt,zt="[object Null]",qt="[object Undefined]",Je=Ve?Ve.toStringTag:void 0;function Vt(e){return e==null?e===void 0?qt:zt:Je&&Je in Object(e)?Yt(e):Wt(e)}var ee=Vt;function Jt(e){return e!=null&&typeof e=="object"}var re=Jt,Xt=ee,Zt=re,Qt="[object Arguments]";function ea(e){return Zt(e)&&Xt(e)==Qt}var ra=ea,Xe=ra,ta=re,Ze=Object.prototype,aa=Ze.hasOwnProperty,na=Ze.propertyIsEnumerable,ia=Xe(function(){return arguments}())?Xe:function(e){return ta(e)&&aa.call(e,"callee")&&!na.call(e,"callee")},Qe=ia,se={exports:{}};function sa(){return!1}var oa=sa;(function(e,r){var a=F,n=oa,o=r&&!r.nodeType&&r,i=o&&!0&&e&&!e.nodeType&&e,c=i&&i.exports===o,f=c?a.Buffer:void 0,v=f?f.isBuffer:void 0,l=v||n;e.exports=l})(se,se.exports);var ua=9007199254740991,fa=/^(?:0|[1-9]\d*)$/;function ca(e,r){var a=typeof e;return r=r==null?ua:r,!!r&&(a=="number"||a!="symbol"&&fa.test(e))&&e>-1&&e%1==0&&e<r}var er=ca,la=9007199254740991;function va(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=la}var ye=va,da=ee,pa=ye,_a=re,ga="[object Arguments]",ha="[object Array]",ya="[object Boolean]",ba="[object Date]",$a="[object Error]",Ta="[object Function]",ma="[object Map]",Oa="[object Number]",Ea="[object Object]",Aa="[object RegExp]",Ca="[object Set]",wa="[object String]",Pa="[object WeakMap]",Sa="[object ArrayBuffer]",Ra="[object DataView]",ja="[object Float32Array]",xa="[object Float64Array]",Ia="[object Int8Array]",Da="[object Int16Array]",Ma="[object Int32Array]",La="[object Uint8Array]",Fa="[object Uint8ClampedArray]",Na="[object Uint16Array]",Ga="[object Uint32Array]",T={};T[ja]=T[xa]=T[Ia]=T[Da]=T[Ma]=T[La]=T[Fa]=T[Na]=T[Ga]=!0,T[ga]=T[ha]=T[Sa]=T[ya]=T[Ra]=T[ba]=T[$a]=T[Ta]=T[ma]=T[Oa]=T[Ea]=T[Aa]=T[Ca]=T[wa]=T[Pa]=!1;function ka(e){return _a(e)&&pa(e.length)&&!!T[da(e)]}var Ua=ka;function Ba(e){return function(r){return e(r)}}var Ha=Ba,be={exports:{}};(function(e,r){var a=We,n=r&&!r.nodeType&&r,o=n&&!0&&e&&!e.nodeType&&e,i=o&&o.exports===n,c=i&&a.process,f=function(){try{var v=o&&o.require&&o.require("util").types;return v||c&&c.binding&&c.binding("util")}catch{}}();e.exports=f})(be,be.exports);var Ka=Ua,Ya=Ha,rr=be.exports,tr=rr&&rr.isTypedArray,Wa=tr?Ya(tr):Ka,ar=Wa,za=Rt,qa=Qe,Va=I,Ja=se.exports,Xa=er,Za=ar,Qa=Object.prototype,en=Qa.hasOwnProperty;function rn(e,r){var a=Va(e),n=!a&&qa(e),o=!a&&!n&&Ja(e),i=!a&&!n&&!o&&Za(e),c=a||n||o||i,f=c?za(e.length,String):[],v=f.length;for(var l in e)(r||en.call(e,l))&&!(c&&(l=="length"||o&&(l=="offset"||l=="parent")||i&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||Xa(l,v)))&&f.push(l);return f}var tn=rn,an=Object.prototype;function nn(e){var r=e&&e.constructor,a=typeof r=="function"&&r.prototype||an;return e===a}var sn=nn;function on(e,r){return function(a){return e(r(a))}}var un=on,fn=un,cn=fn(Object.keys,Object),ln=cn,vn=sn,dn=ln,pn=Object.prototype,_n=pn.hasOwnProperty;function gn(e){if(!vn(e))return dn(e);var r=[];for(var a in Object(e))_n.call(e,a)&&a!="constructor"&&r.push(a);return r}var hn=gn;function yn(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var $e=yn,bn=ee,$n=$e,Tn="[object AsyncFunction]",mn="[object Function]",On="[object GeneratorFunction]",En="[object Proxy]";function An(e){if(!$n(e))return!1;var r=bn(e);return r==mn||r==On||r==Tn||r==En}var nr=An,Cn=nr,wn=ye;function Pn(e){return e!=null&&wn(e.length)&&!Cn(e)}var ir=Pn,Sn=tn,Rn=hn,jn=ir;function xn(e){return jn(e)?Sn(e):Rn(e)}var Te=xn,In=Pt,Dn=Te;function Mn(e,r){return e&&In(e,r,Dn)}var Ln=Mn,Fn=ir;function Nn(e,r){return function(a,n){if(a==null)return a;if(!Fn(a))return e(a,n);for(var o=a.length,i=r?o:-1,c=Object(a);(r?i--:++i<o)&&n(c[i],i,c)!==!1;);return a}}var Gn=Nn,kn=Ln,Un=Gn,Bn=Un(kn),Hn=Bn;function Kn(){this.__data__=[],this.size=0}var Yn=Kn;function Wn(e,r){return e===r||e!==e&&r!==r}var sr=Wn,zn=sr;function qn(e,r){for(var a=e.length;a--;)if(zn(e[a][0],r))return a;return-1}var oe=qn,Vn=oe,Jn=Array.prototype,Xn=Jn.splice;function Zn(e){var r=this.__data__,a=Vn(r,e);if(a<0)return!1;var n=r.length-1;return a==n?r.pop():Xn.call(r,a,1),--this.size,!0}var Qn=Zn,ei=oe;function ri(e){var r=this.__data__,a=ei(r,e);return a<0?void 0:r[a][1]}var ti=ri,ai=oe;function ni(e){return ai(this.__data__,e)>-1}var ii=ni,si=oe;function oi(e,r){var a=this.__data__,n=si(a,e);return n<0?(++this.size,a.push([e,r])):a[n][1]=r,this}var ui=oi,fi=Yn,ci=Qn,li=ti,vi=ii,di=ui;function B(e){var r=-1,a=e==null?0:e.length;for(this.clear();++r<a;){var n=e[r];this.set(n[0],n[1])}}B.prototype.clear=fi,B.prototype.delete=ci,B.prototype.get=li,B.prototype.has=vi,B.prototype.set=di;var ue=B,pi=ue;function _i(){this.__data__=new pi,this.size=0}var gi=_i;function hi(e){var r=this.__data__,a=r.delete(e);return this.size=r.size,a}var yi=hi;function bi(e){return this.__data__.get(e)}var $i=bi;function Ti(e){return this.__data__.has(e)}var mi=Ti,Oi=F,Ei=Oi["__core-js_shared__"],Ai=Ei,me=Ai,or=function(){var e=/[^.]+$/.exec(me&&me.keys&&me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Ci(e){return!!or&&or in e}var wi=Ci,Pi=Function.prototype,Si=Pi.toString;function Ri(e){if(e!=null){try{return Si.call(e)}catch{}try{return e+""}catch{}}return""}var ur=Ri,ji=nr,xi=wi,Ii=$e,Di=ur,Mi=/[\\^$.*+?()[\]{}|]/g,Li=/^\[object .+?Constructor\]$/,Fi=Function.prototype,Ni=Object.prototype,Gi=Fi.toString,ki=Ni.hasOwnProperty,Ui=RegExp("^"+Gi.call(ki).replace(Mi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Bi(e){if(!Ii(e)||xi(e))return!1;var r=ji(e)?Ui:Li;return r.test(Di(e))}var Hi=Bi;function Ki(e,r){return e==null?void 0:e[r]}var Yi=Ki,Wi=Hi,zi=Yi;function qi(e,r){var a=zi(e,r);return Wi(a)?a:void 0}var H=qi,Vi=H,Ji=F,Xi=Vi(Ji,"Map"),Oe=Xi,Zi=H,Qi=Zi(Object,"create"),fe=Qi,fr=fe;function es(){this.__data__=fr?fr(null):{},this.size=0}var rs=es;function ts(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var as=ts,ns=fe,is="__lodash_hash_undefined__",ss=Object.prototype,os=ss.hasOwnProperty;function us(e){var r=this.__data__;if(ns){var a=r[e];return a===is?void 0:a}return os.call(r,e)?r[e]:void 0}var fs=us,cs=fe,ls=Object.prototype,vs=ls.hasOwnProperty;function ds(e){var r=this.__data__;return cs?r[e]!==void 0:vs.call(r,e)}var ps=ds,_s=fe,gs="__lodash_hash_undefined__";function hs(e,r){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=_s&&r===void 0?gs:r,this}var ys=hs,bs=rs,$s=as,Ts=fs,ms=ps,Os=ys;function K(e){var r=-1,a=e==null?0:e.length;for(this.clear();++r<a;){var n=e[r];this.set(n[0],n[1])}}K.prototype.clear=bs,K.prototype.delete=$s,K.prototype.get=Ts,K.prototype.has=ms,K.prototype.set=Os;var Es=K,cr=Es,As=ue,Cs=Oe;function ws(){this.size=0,this.__data__={hash:new cr,map:new(Cs||As),string:new cr}}var Ps=ws;function Ss(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}var Rs=Ss,js=Rs;function xs(e,r){var a=e.__data__;return js(r)?a[typeof r=="string"?"string":"hash"]:a.map}var ce=xs,Is=ce;function Ds(e){var r=Is(this,e).delete(e);return this.size-=r?1:0,r}var Ms=Ds,Ls=ce;function Fs(e){return Ls(this,e).get(e)}var Ns=Fs,Gs=ce;function ks(e){return Gs(this,e).has(e)}var Us=ks,Bs=ce;function Hs(e,r){var a=Bs(this,e),n=a.size;return a.set(e,r),this.size+=a.size==n?0:1,this}var Ks=Hs,Ys=Ps,Ws=Ms,zs=Ns,qs=Us,Vs=Ks;function Y(e){var r=-1,a=e==null?0:e.length;for(this.clear();++r<a;){var n=e[r];this.set(n[0],n[1])}}Y.prototype.clear=Ys,Y.prototype.delete=Ws,Y.prototype.get=zs,Y.prototype.has=qs,Y.prototype.set=Vs;var Ee=Y,Js=ue,Xs=Oe,Zs=Ee,Qs=200;function eo(e,r){var a=this.__data__;if(a instanceof Js){var n=a.__data__;if(!Xs||n.length<Qs-1)return n.push([e,r]),this.size=++a.size,this;a=this.__data__=new Zs(n)}return a.set(e,r),this.size=a.size,this}var ro=eo,to=ue,ao=gi,no=yi,io=$i,so=mi,oo=ro;function W(e){var r=this.__data__=new to(e);this.size=r.size}W.prototype.clear=ao,W.prototype.delete=no,W.prototype.get=io,W.prototype.has=so,W.prototype.set=oo;var lr=W,uo="__lodash_hash_undefined__";function fo(e){return this.__data__.set(e,uo),this}var co=fo;function lo(e){return this.__data__.has(e)}var vo=lo,po=Ee,_o=co,go=vo;function le(e){var r=-1,a=e==null?0:e.length;for(this.__data__=new po;++r<a;)this.add(e[r])}le.prototype.add=le.prototype.push=_o,le.prototype.has=go;var ho=le;function yo(e,r){for(var a=-1,n=e==null?0:e.length;++a<n;)if(r(e[a],a,e))return!0;return!1}var bo=yo;function $o(e,r){return e.has(r)}var To=$o,mo=ho,Oo=bo,Eo=To,Ao=1,Co=2;function wo(e,r,a,n,o,i){var c=a&Ao,f=e.length,v=r.length;if(f!=v&&!(c&&v>f))return!1;var l=i.get(e),p=i.get(r);if(l&&p)return l==r&&p==e;var y=-1,_=!0,C=a&Co?new mo:void 0;for(i.set(e,r),i.set(r,e);++y<f;){var w=e[y],S=r[y];if(n)var x=c?n(S,w,y,r,e,i):n(w,S,y,e,r,i);if(x!==void 0){if(x)continue;_=!1;break}if(C){if(!Oo(r,function(D,M){if(!Eo(C,M)&&(w===D||o(w,D,a,n,i)))return C.push(M)})){_=!1;break}}else if(!(w===S||o(w,S,a,n,i))){_=!1;break}}return i.delete(e),i.delete(r),_}var vr=wo,Po=F,So=Po.Uint8Array,Ro=So;function jo(e){var r=-1,a=Array(e.size);return e.forEach(function(n,o){a[++r]=[o,n]}),a}var xo=jo;function Io(e){var r=-1,a=Array(e.size);return e.forEach(function(n){a[++r]=n}),a}var Do=Io,dr=ie,pr=Ro,Mo=sr,Lo=vr,Fo=xo,No=Do,Go=1,ko=2,Uo="[object Boolean]",Bo="[object Date]",Ho="[object Error]",Ko="[object Map]",Yo="[object Number]",Wo="[object RegExp]",zo="[object Set]",qo="[object String]",Vo="[object Symbol]",Jo="[object ArrayBuffer]",Xo="[object DataView]",_r=dr?dr.prototype:void 0,Ae=_r?_r.valueOf:void 0;function Zo(e,r,a,n,o,i,c){switch(a){case Xo:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case Jo:return!(e.byteLength!=r.byteLength||!i(new pr(e),new pr(r)));case Uo:case Bo:case Yo:return Mo(+e,+r);case Ho:return e.name==r.name&&e.message==r.message;case Wo:case qo:return e==r+"";case Ko:var f=Fo;case zo:var v=n&Go;if(f||(f=No),e.size!=r.size&&!v)return!1;var l=c.get(e);if(l)return l==r;n|=ko,c.set(e,r);var p=Lo(f(e),f(r),n,o,i,c);return c.delete(e),p;case Vo:if(Ae)return Ae.call(e)==Ae.call(r)}return!1}var Qo=Zo;function eu(e,r){for(var a=-1,n=r.length,o=e.length;++a<n;)e[o+a]=r[a];return e}var ru=eu,tu=ru,au=I;function nu(e,r,a){var n=r(e);return au(e)?n:tu(n,a(e))}var iu=nu;function su(e,r){for(var a=-1,n=e==null?0:e.length,o=0,i=[];++a<n;){var c=e[a];r(c,a,e)&&(i[o++]=c)}return i}var ou=su;function uu(){return[]}var fu=uu,cu=ou,lu=fu,vu=Object.prototype,du=vu.propertyIsEnumerable,gr=Object.getOwnPropertySymbols,pu=gr?function(e){return e==null?[]:(e=Object(e),cu(gr(e),function(r){return du.call(e,r)}))}:lu,_u=pu,gu=iu,hu=_u,yu=Te;function bu(e){return gu(e,yu,hu)}var $u=bu,hr=$u,Tu=1,mu=Object.prototype,Ou=mu.hasOwnProperty;function Eu(e,r,a,n,o,i){var c=a&Tu,f=hr(e),v=f.length,l=hr(r),p=l.length;if(v!=p&&!c)return!1;for(var y=v;y--;){var _=f[y];if(!(c?_ in r:Ou.call(r,_)))return!1}var C=i.get(e),w=i.get(r);if(C&&w)return C==r&&w==e;var S=!0;i.set(e,r),i.set(r,e);for(var x=c;++y<v;){_=f[y];var D=e[_],M=r[_];if(n)var m=c?n(M,D,_,r,e,i):n(D,M,_,e,r,i);if(!(m===void 0?D===M||o(D,M,a,n,i):m)){S=!1;break}x||(x=_=="constructor")}if(S&&!x){var U=e.constructor,V=r.constructor;U!=V&&"constructor"in e&&"constructor"in r&&!(typeof U=="function"&&U instanceof U&&typeof V=="function"&&V instanceof V)&&(S=!1)}return i.delete(e),i.delete(r),S}var Au=Eu,Cu=H,wu=F,Pu=Cu(wu,"DataView"),Su=Pu,Ru=H,ju=F,xu=Ru(ju,"Promise"),Iu=xu,Du=H,Mu=F,Lu=Du(Mu,"Set"),Fu=Lu,Nu=H,Gu=F,ku=Nu(Gu,"WeakMap"),Uu=ku,Ce=Su,we=Oe,Pe=Iu,Se=Fu,Re=Uu,yr=ee,z=ur,br="[object Map]",Bu="[object Object]",$r="[object Promise]",Tr="[object Set]",mr="[object WeakMap]",Or="[object DataView]",Hu=z(Ce),Ku=z(we),Yu=z(Pe),Wu=z(Se),zu=z(Re),k=yr;(Ce&&k(new Ce(new ArrayBuffer(1)))!=Or||we&&k(new we)!=br||Pe&&k(Pe.resolve())!=$r||Se&&k(new Se)!=Tr||Re&&k(new Re)!=mr)&&(k=function(e){var r=yr(e),a=r==Bu?e.constructor:void 0,n=a?z(a):"";if(n)switch(n){case Hu:return Or;case Ku:return br;case Yu:return $r;case Wu:return Tr;case zu:return mr}return r});var qu=k,je=lr,Vu=vr,Ju=Qo,Xu=Au,Er=qu,Ar=I,Cr=se.exports,Zu=ar,Qu=1,wr="[object Arguments]",Pr="[object Array]",ve="[object Object]",ef=Object.prototype,Sr=ef.hasOwnProperty;function rf(e,r,a,n,o,i){var c=Ar(e),f=Ar(r),v=c?Pr:Er(e),l=f?Pr:Er(r);v=v==wr?ve:v,l=l==wr?ve:l;var p=v==ve,y=l==ve,_=v==l;if(_&&Cr(e)){if(!Cr(r))return!1;c=!0,p=!1}if(_&&!p)return i||(i=new je),c||Zu(e)?Vu(e,r,a,n,o,i):Ju(e,r,v,a,n,o,i);if(!(a&Qu)){var C=p&&Sr.call(e,"__wrapped__"),w=y&&Sr.call(r,"__wrapped__");if(C||w){var S=C?e.value():e,x=w?r.value():r;return i||(i=new je),o(S,x,a,n,i)}}return _?(i||(i=new je),Xu(e,r,a,n,o,i)):!1}var tf=rf,af=tf,Rr=re;function jr(e,r,a,n,o){return e===r?!0:e==null||r==null||!Rr(e)&&!Rr(r)?e!==e&&r!==r:af(e,r,a,n,jr,o)}var xr=jr,nf=lr,sf=xr,of=1,uf=2;function ff(e,r,a,n){var o=a.length,i=o,c=!n;if(e==null)return!i;for(e=Object(e);o--;){var f=a[o];if(c&&f[2]?f[1]!==e[f[0]]:!(f[0]in e))return!1}for(;++o<i;){f=a[o];var v=f[0],l=e[v],p=f[1];if(c&&f[2]){if(l===void 0&&!(v in e))return!1}else{var y=new nf;if(n)var _=n(l,p,v,e,r,y);if(!(_===void 0?sf(p,l,of|uf,n,y):_))return!1}}return!0}var cf=ff,lf=$e;function vf(e){return e===e&&!lf(e)}var Ir=vf,df=Ir,pf=Te;function _f(e){for(var r=pf(e),a=r.length;a--;){var n=r[a],o=e[n];r[a]=[n,o,df(o)]}return r}var gf=_f;function hf(e,r){return function(a){return a==null?!1:a[e]===r&&(r!==void 0||e in Object(a))}}var Dr=hf,yf=cf,bf=gf,$f=Dr;function Tf(e){var r=bf(e);return r.length==1&&r[0][2]?$f(r[0][0],r[0][1]):function(a){return a===e||yf(a,e,r)}}var mf=Tf,Of=ee,Ef=re,Af="[object Symbol]";function Cf(e){return typeof e=="symbol"||Ef(e)&&Of(e)==Af}var xe=Cf,wf=I,Pf=xe,Sf=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Rf=/^\w*$/;function jf(e,r){if(wf(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||Pf(e)?!0:Rf.test(e)||!Sf.test(e)||r!=null&&e in Object(r)}var Ie=jf,Mr=Ee,xf="Expected a function";function De(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(xf);var a=function(){var n=arguments,o=r?r.apply(this,n):n[0],i=a.cache;if(i.has(o))return i.get(o);var c=e.apply(this,n);return a.cache=i.set(o,c)||i,c};return a.cache=new(De.Cache||Mr),a}De.Cache=Mr;var If=De,Df=If,Mf=500;function Lf(e){var r=Df(e,function(n){return a.size===Mf&&a.clear(),n}),a=r.cache;return r}var Ff=Lf,Nf=Ff,Gf=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,kf=/\\(\\)?/g,Uf=Nf(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Gf,function(a,n,o,i){r.push(o?i.replace(kf,"$1"):n||a)}),r}),Bf=Uf;function Hf(e,r){for(var a=-1,n=e==null?0:e.length,o=Array(n);++a<n;)o[a]=r(e[a],a,e);return o}var Kf=Hf,Lr=ie,Yf=Kf,Wf=I,zf=xe,qf=1/0,Fr=Lr?Lr.prototype:void 0,Nr=Fr?Fr.toString:void 0;function Gr(e){if(typeof e=="string")return e;if(Wf(e))return Yf(e,Gr)+"";if(zf(e))return Nr?Nr.call(e):"";var r=e+"";return r=="0"&&1/e==-qf?"-0":r}var Vf=Gr,Jf=Vf;function Xf(e){return e==null?"":Jf(e)}var Zf=Xf,Qf=I,ec=Ie,rc=Bf,tc=Zf;function ac(e,r){return Qf(e)?e:ec(e,r)?[e]:rc(tc(e))}var kr=ac,nc=xe,ic=1/0;function sc(e){if(typeof e=="string"||nc(e))return e;var r=e+"";return r=="0"&&1/e==-ic?"-0":r}var de=sc,oc=kr,uc=de;function fc(e,r){r=oc(r,e);for(var a=0,n=r.length;e!=null&&a<n;)e=e[uc(r[a++])];return a&&a==n?e:void 0}var Ur=fc,cc=Ur;function lc(e,r,a){var n=e==null?void 0:cc(e,r);return n===void 0?a:n}var vc=lc;function dc(e,r){return e!=null&&r in Object(e)}var pc=dc,_c=kr,gc=Qe,hc=I,yc=er,bc=ye,$c=de;function Tc(e,r,a){r=_c(r,e);for(var n=-1,o=r.length,i=!1;++n<o;){var c=$c(r[n]);if(!(i=e!=null&&a(e,c)))break;e=e[c]}return i||++n!=o?i:(o=e==null?0:e.length,!!o&&bc(o)&&yc(c,o)&&(hc(e)||gc(e)))}var mc=Tc,Oc=pc,Ec=mc;function Ac(e,r){return e!=null&&Ec(e,r,Oc)}var Cc=Ac,wc=xr,Pc=vc,Sc=Cc,Rc=Ie,jc=Ir,xc=Dr,Ic=de,Dc=1,Mc=2;function Lc(e,r){return Rc(e)&&jc(r)?xc(Ic(e),r):function(a){var n=Pc(a,e);return n===void 0&&n===r?Sc(a,e):wc(r,n,Dc|Mc)}}var Fc=Lc;function Nc(e){return e}var Gc=Nc;function kc(e){return function(r){return r==null?void 0:r[e]}}var Uc=kc,Bc=Ur;function Hc(e){return function(r){return Bc(r,e)}}var Kc=Hc,Yc=Uc,Wc=Kc,zc=Ie,qc=de;function Vc(e){return zc(e)?Yc(qc(e)):Wc(e)}var Jc=Vc,Xc=mf,Zc=Fc,Qc=Gc,el=I,rl=Jc;function tl(e){return typeof e=="function"?e:e==null?Qc:typeof e=="object"?el(e)?Zc(e[0],e[1]):Xc(e):rl(e)}var al=tl;function nl(e,r,a,n,o){return o(e,function(i,c,f){a=n?(n=!1,i):r(a,i,c,f)}),a}var il=nl,sl=Ot,ol=Hn,ul=al,fl=il,cl=I;function ll(e,r,a){var n=cl(e)?sl:fl,o=arguments.length<3;return n(e,ul(r),a,o,ol)}var vl=ll;const Br=e=>e.displayName||e.name||void 0;var Hr={exports:{}},q={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Me,Kr;function Yr(){if(Kr)return Me;Kr=1;var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function n(i){if(i==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(i)}function o(){try{if(!Object.assign)return!1;var i=new String("abc");if(i[5]="de",Object.getOwnPropertyNames(i)[0]==="5")return!1;for(var c={},f=0;f<10;f++)c["_"+String.fromCharCode(f)]=f;var v=Object.getOwnPropertyNames(c).map(function(p){return c[p]});if(v.join("")!=="0123456789")return!1;var l={};return"abcdefghijklmnopqrst".split("").forEach(function(p){l[p]=p}),Object.keys(Object.assign({},l)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Me=o()?Object.assign:function(i,c){for(var f,v=n(i),l,p=1;p<arguments.length;p++){f=Object(arguments[p]);for(var y in f)r.call(f,y)&&(v[y]=f[y]);if(e){l=e(f);for(var _=0;_<l.length;_++)a.call(f,l[_])&&(v[l[_]]=f[l[_]])}}return v},Me}/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wr;function dl(){if(Wr)return q;Wr=1,Yr();var e=Ye.default,r=60103;if(q.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var a=Symbol.for;r=a("react.element"),q.Fragment=a("react.fragment")}var n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function c(f,v,l){var p,y={},_=null,C=null;l!==void 0&&(_=""+l),v.key!==void 0&&(_=""+v.key),v.ref!==void 0&&(C=v.ref);for(p in v)o.call(v,p)&&!i.hasOwnProperty(p)&&(y[p]=v[p]);if(f&&f.defaultProps)for(p in v=f.defaultProps,v)y[p]===void 0&&(y[p]=v[p]);return{$$typeof:r,type:f,key:_,ref:C,props:y,_owner:n.current}}return q.jsx=c,q.jsxs=c,q}var Le={};/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zr;function pl(){return zr||(zr=1,function(e){process.env.NODE_ENV!=="production"&&function(){var r=Ye.default,a=Yr(),n=60103,o=60106;e.Fragment=60107;var i=60108,c=60114,f=60109,v=60110,l=60112,p=60113,y=60120,_=60115,C=60116,w=60121,S=60122,x=60117,D=60129,M=60131;if(typeof Symbol=="function"&&Symbol.for){var m=Symbol.for;n=m("react.element"),o=m("react.portal"),e.Fragment=m("react.fragment"),i=m("react.strict_mode"),c=m("react.profiler"),f=m("react.provider"),v=m("react.context"),l=m("react.forward_ref"),p=m("react.suspense"),y=m("react.suspense_list"),_=m("react.memo"),C=m("react.lazy"),w=m("react.block"),S=m("react.server.block"),x=m("react.fundamental"),m("react.scope"),m("react.opaque.id"),D=m("react.debug_trace_mode"),m("react.offscreen"),M=m("react.legacy_hidden")}var U=typeof Symbol=="function"&&Symbol.iterator,V="@@iterator";function $l(t){if(t===null||typeof t!="object")return null;var s=U&&t[U]||t[V];return typeof s=="function"?s:null}var J=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function R(t){{for(var s=arguments.length,u=new Array(s>1?s-1:0),d=1;d<s;d++)u[d-1]=arguments[d];Tl("error",t,u)}}function Tl(t,s,u){{var d=J.ReactDebugCurrentFrame,b=d.getStackAddendum();b!==""&&(s+="%s",u=u.concat([b]));var $=u.map(function(h){return""+h});$.unshift("Warning: "+s),Function.prototype.apply.call(console[t],console,$)}}var ml=!1;function Ol(t){return!!(typeof t=="string"||typeof t=="function"||t===e.Fragment||t===c||t===D||t===i||t===p||t===y||t===M||ml||typeof t=="object"&&t!==null&&(t.$$typeof===C||t.$$typeof===_||t.$$typeof===f||t.$$typeof===v||t.$$typeof===l||t.$$typeof===x||t.$$typeof===w||t[0]===S))}function El(t,s,u){var d=s.displayName||s.name||"";return t.displayName||(d!==""?u+"("+d+")":u)}function Jr(t){return t.displayName||"Context"}function L(t){if(t==null)return null;if(typeof t.tag=="number"&&R("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case e.Fragment:return"Fragment";case o:return"Portal";case c:return"Profiler";case i:return"StrictMode";case p:return"Suspense";case y:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case v:var s=t;return Jr(s)+".Consumer";case f:var u=t;return Jr(u._context)+".Provider";case l:return El(t,t.render,"ForwardRef");case _:return L(t.type);case w:return L(t._render);case C:{var d=t,b=d._payload,$=d._init;try{return L($(b))}catch{return null}}}return null}var te=0,Xr,Zr,Qr,et,rt,tt,at;function nt(){}nt.__reactDisabledLog=!0;function Al(){{if(te===0){Xr=console.log,Zr=console.info,Qr=console.warn,et=console.error,rt=console.group,tt=console.groupCollapsed,at=console.groupEnd;var t={configurable:!0,enumerable:!0,value:nt,writable:!0};Object.defineProperties(console,{info:t,log:t,warn:t,error:t,group:t,groupCollapsed:t,groupEnd:t})}te++}}function Cl(){{if(te--,te===0){var t={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:a({},t,{value:Xr}),info:a({},t,{value:Zr}),warn:a({},t,{value:Qr}),error:a({},t,{value:et}),group:a({},t,{value:rt}),groupCollapsed:a({},t,{value:tt}),groupEnd:a({},t,{value:at})})}te<0&&R("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Fe=J.ReactCurrentDispatcher,Ne;function pe(t,s,u){{if(Ne===void 0)try{throw Error()}catch(b){var d=b.stack.trim().match(/\n( *(at )?)/);Ne=d&&d[1]||""}return`
`+Ne+t}}var Ge=!1,_e;{var wl=typeof WeakMap=="function"?WeakMap:Map;_e=new wl}function it(t,s){if(!t||Ge)return"";{var u=_e.get(t);if(u!==void 0)return u}var d;Ge=!0;var b=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var $;$=Fe.current,Fe.current=null,Al();try{if(s){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(G){d=G}Reflect.construct(t,[],h)}else{try{h.call()}catch(G){d=G}t.call(h.prototype)}}else{try{throw Error()}catch(G){d=G}t()}}catch(G){if(G&&d&&typeof G.stack=="string"){for(var g=G.stack.split(`
`),P=d.stack.split(`
`),O=g.length-1,E=P.length-1;O>=1&&E>=0&&g[O]!==P[E];)E--;for(;O>=1&&E>=0;O--,E--)if(g[O]!==P[E]){if(O!==1||E!==1)do if(O--,E--,E<0||g[O]!==P[E]){var N=`
`+g[O].replace(" at new "," at ");return typeof t=="function"&&_e.set(t,N),N}while(O>=1&&E>=0);break}}}finally{Ge=!1,Fe.current=$,Cl(),Error.prepareStackTrace=b}var Z=t?t.displayName||t.name:"",ht=Z?pe(Z):"";return typeof t=="function"&&_e.set(t,ht),ht}function st(t,s,u){return it(t,!1)}function Pl(t){var s=t.prototype;return!!(s&&s.isReactComponent)}function ge(t,s,u){if(t==null)return"";if(typeof t=="function")return it(t,Pl(t));if(typeof t=="string")return pe(t);switch(t){case p:return pe("Suspense");case y:return pe("SuspenseList")}if(typeof t=="object")switch(t.$$typeof){case l:return st(t.render);case _:return ge(t.type,s,u);case w:return st(t._render);case C:{var d=t,b=d._payload,$=d._init;try{return ge($(b),s,u)}catch{}}}return""}var ot={},ut=J.ReactDebugCurrentFrame;function he(t){if(t){var s=t._owner,u=ge(t.type,t._source,s?s.type:null);ut.setExtraStackFrame(u)}else ut.setExtraStackFrame(null)}function Sl(t,s,u,d,b){{var $=Function.call.bind(Object.prototype.hasOwnProperty);for(var h in t)if($(t,h)){var g=void 0;try{if(typeof t[h]!="function"){var P=Error((d||"React class")+": "+u+" type `"+h+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof t[h]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw P.name="Invariant Violation",P}g=t[h](s,h,d,u,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(O){g=O}g&&!(g instanceof Error)&&(he(b),R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",d||"React class",u,h,typeof g),he(null)),g instanceof Error&&!(g.message in ot)&&(ot[g.message]=!0,he(b),R("Failed %s type: %s",u,g.message),he(null))}}}var ae=J.ReactCurrentOwner,ke=Object.prototype.hasOwnProperty,Rl={key:!0,ref:!0,__self:!0,__source:!0},ft,ct,Ue;Ue={};function jl(t){if(ke.call(t,"ref")){var s=Object.getOwnPropertyDescriptor(t,"ref").get;if(s&&s.isReactWarning)return!1}return t.ref!==void 0}function xl(t){if(ke.call(t,"key")){var s=Object.getOwnPropertyDescriptor(t,"key").get;if(s&&s.isReactWarning)return!1}return t.key!==void 0}function Il(t,s){if(typeof t.ref=="string"&&ae.current&&s&&ae.current.stateNode!==s){var u=L(ae.current.type);Ue[u]||(R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',L(ae.current.type),t.ref),Ue[u]=!0)}}function Dl(t,s){{var u=function(){ft||(ft=!0,R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",s))};u.isReactWarning=!0,Object.defineProperty(t,"key",{get:u,configurable:!0})}}function Ml(t,s){{var u=function(){ct||(ct=!0,R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",s))};u.isReactWarning=!0,Object.defineProperty(t,"ref",{get:u,configurable:!0})}}var Ll=function(t,s,u,d,b,$,h){var g={$$typeof:n,type:t,key:s,ref:u,props:h,_owner:$};return g._store={},Object.defineProperty(g._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(g,"_self",{configurable:!1,enumerable:!1,writable:!1,value:d}),Object.defineProperty(g,"_source",{configurable:!1,enumerable:!1,writable:!1,value:b}),Object.freeze&&(Object.freeze(g.props),Object.freeze(g)),g};function Fl(t,s,u,d,b){{var $,h={},g=null,P=null;u!==void 0&&(g=""+u),xl(s)&&(g=""+s.key),jl(s)&&(P=s.ref,Il(s,b));for($ in s)ke.call(s,$)&&!Rl.hasOwnProperty($)&&(h[$]=s[$]);if(t&&t.defaultProps){var O=t.defaultProps;for($ in O)h[$]===void 0&&(h[$]=O[$])}if(g||P){var E=typeof t=="function"?t.displayName||t.name||"Unknown":t;g&&Dl(h,E),P&&Ml(h,E)}return Ll(t,g,P,b,d,ae.current,h)}}var Be=J.ReactCurrentOwner,lt=J.ReactDebugCurrentFrame;function X(t){if(t){var s=t._owner,u=ge(t.type,t._source,s?s.type:null);lt.setExtraStackFrame(u)}else lt.setExtraStackFrame(null)}var He;He=!1;function Ke(t){return typeof t=="object"&&t!==null&&t.$$typeof===n}function vt(){{if(Be.current){var t=L(Be.current.type);if(t)return`

Check the render method of \``+t+"`."}return""}}function Nl(t){{if(t!==void 0){var s=t.fileName.replace(/^.*[\\\/]/,""),u=t.lineNumber;return`

Check your code at `+s+":"+u+"."}return""}}var dt={};function Gl(t){{var s=vt();if(!s){var u=typeof t=="string"?t:t.displayName||t.name;u&&(s=`

Check the top-level render call using <`+u+">.")}return s}}function pt(t,s){{if(!t._store||t._store.validated||t.key!=null)return;t._store.validated=!0;var u=Gl(s);if(dt[u])return;dt[u]=!0;var d="";t&&t._owner&&t._owner!==Be.current&&(d=" It was passed a child from "+L(t._owner.type)+"."),X(t),R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',u,d),X(null)}}function _t(t,s){{if(typeof t!="object")return;if(Array.isArray(t))for(var u=0;u<t.length;u++){var d=t[u];Ke(d)&&pt(d,s)}else if(Ke(t))t._store&&(t._store.validated=!0);else if(t){var b=$l(t);if(typeof b=="function"&&b!==t.entries)for(var $=b.call(t),h;!(h=$.next()).done;)Ke(h.value)&&pt(h.value,s)}}}function kl(t){{var s=t.type;if(s==null||typeof s=="string")return;var u;if(typeof s=="function")u=s.propTypes;else if(typeof s=="object"&&(s.$$typeof===l||s.$$typeof===_))u=s.propTypes;else return;if(u){var d=L(s);Sl(u,t.props,"prop",d,t)}else if(s.PropTypes!==void 0&&!He){He=!0;var b=L(s);R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",b||"Unknown")}typeof s.getDefaultProps=="function"&&!s.getDefaultProps.isReactClassApproved&&R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ul(t){{for(var s=Object.keys(t.props),u=0;u<s.length;u++){var d=s[u];if(d!=="children"&&d!=="key"){X(t),R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",d),X(null);break}}t.ref!==null&&(X(t),R("Invalid attribute `ref` supplied to `React.Fragment`."),X(null))}}function gt(t,s,u,d,b,$){{var h=Ol(t);if(!h){var g="";(t===void 0||typeof t=="object"&&t!==null&&Object.keys(t).length===0)&&(g+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var P=Nl(b);P?g+=P:g+=vt();var O;t===null?O="null":Array.isArray(t)?O="array":t!==void 0&&t.$$typeof===n?(O="<"+(L(t.type)||"Unknown")+" />",g=" Did you accidentally export a JSX literal instead of a component?"):O=typeof t,R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",O,g)}var E=Fl(t,s,u,b,$);if(E==null)return E;if(h){var N=s.children;if(N!==void 0)if(d)if(Array.isArray(N)){for(var Z=0;Z<N.length;Z++)_t(N[Z],t);Object.freeze&&Object.freeze(N)}else R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else _t(N,t)}return t===e.Fragment?Ul(E):kl(E),E}}function Bl(t,s,u){return gt(t,s,u,!0)}function Hl(t,s,u){return gt(t,s,u,!1)}var Kl=Hl,Yl=Bl;e.jsx=Kl,e.jsxs=Yl}()}(Le)),Le}(function(e){process.env.NODE_ENV==="production"?e.exports=dl():e.exports=pl()})(Hr);const _l=Hr.exports.jsx,gl=e=>r=>{const a=A.memo(r),n=o=>{const i=vl(e,(c,f,v)=>{let l,p;if(f&&(Array.isArray(f)?(l=f[0],Array.isArray(f[1])?p=f[1]:typeof f[1]=="function"&&(p=f[1](o))):l=f),typeof l!="function")throw new Error(`The hook is not a function. Happened in ${n.displayName||"undefined"}`);return c[v]=l(...Tt(p)),c},{});return _l(a,{...o,...i})};return n.displayName=Br(r),n},qr=()=>{const e=A.useRef(!1);return A.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),e},hl=e=>{const r=A.useRef(e);A.useEffect(()=>{r.current()},[])},Vr=e=>{const r=A.useRef(e);r.current=e,A.useEffect(()=>()=>{r.current()},[])},yl=e=>{const r=qr(),[a,n]=A.useState(e),o=A.useCallback(i=>{r.current&&n(i)},[r]);return[a,o]},bl=()=>{const e=A.useRef(),r=A.useCallback((o,i)=>{e.current=setTimeout(o,i)},[]),a=A.useCallback(()=>{e.current&&clearTimeout(e.current)},[]),n=A.useCallback((o,i)=>{a(),r(o,i)},[a,r]);return Vr(()=>{a()}),A.useMemo(()=>({set:r,reset:n,clear:a}),[a,n,r])};j.getComponentName=Br,j.useIsMounted=qr,j.useOnMount=hl,j.useOnUnmount=Vr,j.useStateSafe=yl,j.useTimeout=bl,j.withHooks=gl,Object.defineProperties(j,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
