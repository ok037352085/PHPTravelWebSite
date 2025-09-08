(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _c(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},Zr=[],on=()=>{},iy=()=>!1,ha=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),yc=t=>t.startsWith("onUpdate:"),yt=Object.assign,vc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},oy=Object.prototype.hasOwnProperty,Ce=(t,e)=>oy.call(t,e),ae=Array.isArray,es=t=>ki(t)==="[object Map]",fa=t=>ki(t)==="[object Set]",Ah=t=>ki(t)==="[object Date]",he=t=>typeof t=="function",Ge=t=>typeof t=="string",pn=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",Wd=t=>(Oe(t)||he(t))&&he(t.then)&&he(t.catch),zd=Object.prototype.toString,ki=t=>zd.call(t),ay=t=>ki(t).slice(8,-1),Kd=t=>ki(t)==="[object Object]",Ec=t=>Ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xs=_c(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),da=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ly=/-(\w)/g,Ht=da(t=>t.replace(ly,(e,n)=>n?n.toUpperCase():"")),cy=/\B([A-Z])/g,Or=da(t=>t.replace(cy,"-$1").toLowerCase()),pa=da(t=>t.charAt(0).toUpperCase()+t.slice(1)),al=da(t=>t?`on${pa(t)}`:""),Zn=(t,e)=>!Object.is(t,e),_o=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Vl=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},No=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let bh;const ma=()=>bh||(bh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ga(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ge(r)?dy(r):ga(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ge(t)||Oe(t))return t}const uy=/;(?![^(]*\))/g,hy=/:([^]+)/,fy=/\/\*[^]*?\*\//g;function dy(t){const e={};return t.replace(fy,"").split(uy).forEach(n=>{if(n){const r=n.split(hy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function _a(t){let e="";if(Ge(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=_a(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const py="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",my=_c(py);function Gd(t){return!!t||t===""}function gy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ya(t[r],e[r]);return n}function ya(t,e){if(t===e)return!0;let n=Ah(t),r=Ah(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=pn(t),r=pn(e),n||r)return t===e;if(n=ae(t),r=ae(e),n||r)return n&&r?gy(t,e):!1;if(n=Oe(t),r=Oe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const l=t.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!ya(t[a],e[a]))return!1}}return String(t)===String(e)}function _y(t,e){return t.findIndex(n=>ya(n,e))}const Qd=t=>!!(t&&t.__v_isRef===!0),Ct=t=>Ge(t)?t:t==null?"":ae(t)||Oe(t)&&(t.toString===zd||!he(t.toString))?Qd(t)?Ct(t.value):JSON.stringify(t,Yd,2):String(t),Yd=(t,e)=>Qd(e)?Yd(t,e.value):es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ll(r,i)+" =>"]=s,n),{})}:fa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ll(n))}:pn(e)?ll(e):Oe(e)&&!ae(e)&&!Kd(e)?String(e):e,ll=(t,e="")=>{var n;return pn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rt;class yy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Rt,!e&&Rt&&(this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Rt;try{return Rt=this,e()}finally{Rt=n}}}on(){++this._on===1&&(this.prevScope=Rt,Rt=this)}off(){this._on>0&&--this._on===0&&(Rt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function vy(){return Rt}let Ne;const cl=new WeakSet;class Jd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Rt&&Rt.active&&Rt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,cl.has(this)&&(cl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sh(this),ep(this);const e=Ne,n=Yt;Ne=this,Yt=!0;try{return this.fn()}finally{tp(this),Ne=e,Yt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)wc(e);this.deps=this.depsTail=void 0,Sh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?cl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Dl(this)&&this.run()}get dirty(){return Dl(this)}}let Xd=0,Zs,ei;function Zd(t,e=!1){if(t.flags|=8,e){t.next=ei,ei=t;return}t.next=Zs,Zs=t}function Tc(){Xd++}function Ic(){if(--Xd>0)return;if(ei){let e=ei;for(ei=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Zs;){let e=Zs;for(Zs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ep(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function tp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),wc(r),Ey(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Dl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(np(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function np(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===pi)||(t.globalVersion=pi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Dl(t))))return;t.flags|=2;const e=t.dep,n=Ne,r=Yt;Ne=t,Yt=!0;try{ep(t);const s=t.fn(t._value);(e.version===0||Zn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=n,Yt=r,tp(t),t.flags&=-3}}function wc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)wc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ey(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Yt=!0;const rp=[];function Cn(){rp.push(Yt),Yt=!1}function kn(){const t=rp.pop();Yt=t===void 0?!0:t}function Sh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let pi=0;class Ty{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ac{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ne||!Yt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new Ty(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,sp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(e){this.version++,pi++,this.notify(e)}notify(e){Tc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ic()}}}function sp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)sp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Nl=new WeakMap,Sr=Symbol(""),Ol=Symbol(""),mi=Symbol("");function pt(t,e,n){if(Yt&&Ne){let r=Nl.get(t);r||Nl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ac),s.map=r,s.key=n),s.track()}}function An(t,e,n,r,s,i){const a=Nl.get(t);if(!a){pi++;return}const l=c=>{c&&c.trigger()};if(Tc(),e==="clear")a.forEach(l);else{const c=ae(t),h=c&&Ec(n);if(c&&n==="length"){const f=Number(r);a.forEach((p,m)=>{(m==="length"||m===mi||!pn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(mi)),e){case"add":c?h&&l(a.get("length")):(l(a.get(Sr)),es(t)&&l(a.get(Ol)));break;case"delete":c||(l(a.get(Sr)),es(t)&&l(a.get(Ol)));break;case"set":es(t)&&l(a.get(Sr));break}}Ic()}function Wr(t){const e=Pe(t);return e===t?e:(pt(e,"iterate",mi),$t(t)?e:e.map(it))}function va(t){return pt(t=Pe(t),"iterate",mi),t}const Iy={__proto__:null,[Symbol.iterator](){return ul(this,Symbol.iterator,it)},concat(...t){return Wr(this).concat(...t.map(e=>ae(e)?Wr(e):e))},entries(){return ul(this,"entries",t=>(t[1]=it(t[1]),t))},every(t,e){return Tn(this,"every",t,e,void 0,arguments)},filter(t,e){return Tn(this,"filter",t,e,n=>n.map(it),arguments)},find(t,e){return Tn(this,"find",t,e,it,arguments)},findIndex(t,e){return Tn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Tn(this,"findLast",t,e,it,arguments)},findLastIndex(t,e){return Tn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Tn(this,"forEach",t,e,void 0,arguments)},includes(...t){return hl(this,"includes",t)},indexOf(...t){return hl(this,"indexOf",t)},join(t){return Wr(this).join(t)},lastIndexOf(...t){return hl(this,"lastIndexOf",t)},map(t,e){return Tn(this,"map",t,e,void 0,arguments)},pop(){return Bs(this,"pop")},push(...t){return Bs(this,"push",t)},reduce(t,...e){return Rh(this,"reduce",t,e)},reduceRight(t,...e){return Rh(this,"reduceRight",t,e)},shift(){return Bs(this,"shift")},some(t,e){return Tn(this,"some",t,e,void 0,arguments)},splice(...t){return Bs(this,"splice",t)},toReversed(){return Wr(this).toReversed()},toSorted(t){return Wr(this).toSorted(t)},toSpliced(...t){return Wr(this).toSpliced(...t)},unshift(...t){return Bs(this,"unshift",t)},values(){return ul(this,"values",it)}};function ul(t,e,n){const r=va(t),s=r[e]();return r!==t&&!$t(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const wy=Array.prototype;function Tn(t,e,n,r,s,i){const a=va(t),l=a!==t&&!$t(t),c=a[e];if(c!==wy[e]){const p=c.apply(t,i);return l?it(p):p}let h=n;a!==t&&(l?h=function(p,m){return n.call(this,it(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const f=c.call(a,h,r);return l&&s?s(f):f}function Rh(t,e,n,r){const s=va(t);let i=n;return s!==t&&($t(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,it(l),c,t)}),s[e](i,...r)}function hl(t,e,n){const r=Pe(t);pt(r,"iterate",mi);const s=r[e](...n);return(s===-1||s===!1)&&Rc(n[0])?(n[0]=Pe(n[0]),r[e](...n)):s}function Bs(t,e,n=[]){Cn(),Tc();const r=Pe(t)[e].apply(t,n);return Ic(),kn(),r}const Ay=_c("__proto__,__v_isRef,__isVue"),ip=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pn));function by(t){pn(t)||(t=String(t));const e=Pe(this);return pt(e,"has",t),e.hasOwnProperty(t)}class op{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?xy:up:i?cp:lp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ae(e);if(!s){let c;if(a&&(c=Iy[n]))return c;if(n==="hasOwnProperty")return by}const l=Reflect.get(e,n,_t(e)?e:r);return(pn(n)?ip.has(n):Ay(n))||(s||pt(e,"get",n),i)?l:_t(l)?a&&Ec(n)?l:l.value:Oe(l)?s?fp(l):Ea(l):l}}class ap extends op{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=or(i);if(!$t(r)&&!or(r)&&(i=Pe(i),r=Pe(r)),!ae(e)&&_t(i)&&!_t(r))return c?!1:(i.value=r,!0)}const a=ae(e)&&Ec(n)?Number(n)<e.length:Ce(e,n),l=Reflect.set(e,n,r,_t(e)?e:s);return e===Pe(s)&&(a?Zn(r,i)&&An(e,"set",n,r):An(e,"add",n,r)),l}deleteProperty(e,n){const r=Ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&An(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!pn(n)||!ip.has(n))&&pt(e,"has",n),r}ownKeys(e){return pt(e,"iterate",ae(e)?"length":Sr),Reflect.ownKeys(e)}}class Sy extends op{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ry=new ap,Py=new Sy,Cy=new ap(!0);const xl=t=>t,ao=t=>Reflect.getPrototypeOf(t);function ky(t,e,n){return function(...r){const s=this.__v_raw,i=Pe(s),a=es(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),f=n?xl:e?Oo:it;return!e&&pt(i,"iterate",c?Ol:Sr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function lo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Vy(t,e){const n={get(s){const i=this.__v_raw,a=Pe(i),l=Pe(s);t||(Zn(s,l)&&pt(a,"get",s),pt(a,"get",l));const{has:c}=ao(a),h=e?xl:t?Oo:it;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&pt(Pe(s),"iterate",Sr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Pe(i),l=Pe(s);return t||(Zn(s,l)&&pt(a,"has",s),pt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Pe(l),h=e?xl:t?Oo:it;return!t&&pt(c,"iterate",Sr),l.forEach((f,p)=>s.call(i,h(f),h(p),a))}};return yt(n,t?{add:lo("add"),set:lo("set"),delete:lo("delete"),clear:lo("clear")}:{add(s){!e&&!$t(s)&&!or(s)&&(s=Pe(s));const i=Pe(this);return ao(i).has.call(i,s)||(i.add(s),An(i,"add",s,s)),this},set(s,i){!e&&!$t(i)&&!or(i)&&(i=Pe(i));const a=Pe(this),{has:l,get:c}=ao(a);let h=l.call(a,s);h||(s=Pe(s),h=l.call(a,s));const f=c.call(a,s);return a.set(s,i),h?Zn(i,f)&&An(a,"set",s,i):An(a,"add",s,i),this},delete(s){const i=Pe(this),{has:a,get:l}=ao(i);let c=a.call(i,s);c||(s=Pe(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&An(i,"delete",s,void 0),h},clear(){const s=Pe(this),i=s.size!==0,a=s.clear();return i&&An(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ky(s,t,e)}),n}function bc(t,e){const n=Vy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ce(n,s)&&s in r?n:r,s,i)}const Dy={get:bc(!1,!1)},Ny={get:bc(!1,!0)},Oy={get:bc(!0,!1)};const lp=new WeakMap,cp=new WeakMap,up=new WeakMap,xy=new WeakMap;function My(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ly(t){return t.__v_skip||!Object.isExtensible(t)?0:My(ay(t))}function Ea(t){return or(t)?t:Sc(t,!1,Ry,Dy,lp)}function hp(t){return Sc(t,!1,Cy,Ny,cp)}function fp(t){return Sc(t,!0,Py,Oy,up)}function Sc(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Ly(t);if(i===0)return t;const a=s.get(t);if(a)return a;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function ts(t){return or(t)?ts(t.__v_raw):!!(t&&t.__v_isReactive)}function or(t){return!!(t&&t.__v_isReadonly)}function $t(t){return!!(t&&t.__v_isShallow)}function Rc(t){return t?!!t.__v_raw:!1}function Pe(t){const e=t&&t.__v_raw;return e?Pe(e):t}function Fy(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&Vl(t,"__v_skip",!0),t}const it=t=>Oe(t)?Ea(t):t,Oo=t=>Oe(t)?fp(t):t;function _t(t){return t?t.__v_isRef===!0:!1}function je(t){return dp(t,!1)}function Uy(t){return dp(t,!0)}function dp(t,e){return _t(t)?t:new jy(t,e)}class jy{constructor(e,n){this.dep=new Ac,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Pe(e),this._value=n?e:it(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||$t(e)||or(e);e=r?e:Pe(e),Zn(e,n)&&(this._rawValue=e,this._value=r?e:it(e),this.dep.trigger())}}function ot(t){return _t(t)?t.value:t}const By={get:(t,e,n)=>e==="__v_raw"?t:ot(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return _t(s)&&!_t(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function pp(t){return ts(t)?t:new Proxy(t,By)}class $y{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ac(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=pi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return Zd(this,!0),!0}get value(){const e=this.dep.track();return np(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Hy(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new $y(r,s,n)}const co={},xo=new WeakMap;let Ir;function qy(t,e=!1,n=Ir){if(n){let r=xo.get(n);r||xo.set(n,r=[]),r.push(t)}}function Wy(t,e,n=De){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=G=>s?G:$t(G)||s===!1||s===0?bn(G,1):bn(G);let f,p,m,_,C=!1,D=!1;if(_t(t)?(p=()=>t.value,C=$t(t)):ts(t)?(p=()=>h(t),C=!0):ae(t)?(D=!0,C=t.some(G=>ts(G)||$t(G)),p=()=>t.map(G=>{if(_t(G))return G.value;if(ts(G))return h(G);if(he(G))return c?c(G,2):G()})):he(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Cn();try{m()}finally{kn()}}const G=Ir;Ir=f;try{return c?c(t,3,[_]):t(_)}finally{Ir=G}}:p=on,e&&s){const G=p,de=s===!0?1/0:s;p=()=>bn(G(),de)}const x=vy(),$=()=>{f.stop(),x&&x.active&&vc(x.effects,f)};if(i&&e){const G=e;e=(...de)=>{G(...de),$()}}let B=D?new Array(t.length).fill(co):co;const H=G=>{if(!(!(f.flags&1)||!f.dirty&&!G))if(e){const de=f.run();if(s||C||(D?de.some((ve,w)=>Zn(ve,B[w])):Zn(de,B))){m&&m();const ve=Ir;Ir=f;try{const w=[de,B===co?void 0:D&&B[0]===co?[]:B,_];B=de,c?c(e,3,w):e(...w)}finally{Ir=ve}}}else f.run()};return l&&l(H),f=new Jd(p),f.scheduler=a?()=>a(H,!1):H,_=G=>qy(G,!1,f),m=f.onStop=()=>{const G=xo.get(f);if(G){if(c)c(G,4);else for(const de of G)de();xo.delete(f)}},e?r?H(!0):B=f.run():a?a(H.bind(null,!0),!0):f.run(),$.pause=f.pause.bind(f),$.resume=f.resume.bind(f),$.stop=$,$}function bn(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,_t(t))bn(t.value,e,n);else if(ae(t))for(let r=0;r<t.length;r++)bn(t[r],e,n);else if(fa(t)||es(t))t.forEach(r=>{bn(r,e,n)});else if(Kd(t)){for(const r in t)bn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&bn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vi(t,e,n,r){try{return r?t(...r):t()}catch(s){Ta(s,e,n)}}function mn(t,e,n,r){if(he(t)){const s=Vi(t,e,n,r);return s&&Wd(s)&&s.catch(i=>{Ta(i,e,n)}),s}if(ae(t)){const s=[];for(let i=0;i<t.length;i++)s.push(mn(t[i],e,n,r));return s}}function Ta(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||De;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,h)===!1)return}l=l.parent}if(i){Cn(),Vi(i,null,10,[t,c,h]),kn();return}}zy(t,n,s,r,a)}function zy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const At=[];let nn=-1;const ns=[];let qn=null,zr=0;const mp=Promise.resolve();let Mo=null;function Pc(t){const e=Mo||mp;return t?e.then(this?t.bind(this):t):e}function Ky(t){let e=nn+1,n=At.length;for(;e<n;){const r=e+n>>>1,s=At[r],i=gi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Cc(t){if(!(t.flags&1)){const e=gi(t),n=At[At.length-1];!n||!(t.flags&2)&&e>=gi(n)?At.push(t):At.splice(Ky(e),0,t),t.flags|=1,gp()}}function gp(){Mo||(Mo=mp.then(yp))}function Gy(t){ae(t)?ns.push(...t):qn&&t.id===-1?qn.splice(zr+1,0,t):t.flags&1||(ns.push(t),t.flags|=1),gp()}function Ph(t,e,n=nn+1){for(;n<At.length;n++){const r=At[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;At.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function _p(t){if(ns.length){const e=[...new Set(ns)].sort((n,r)=>gi(n)-gi(r));if(ns.length=0,qn){qn.push(...e);return}for(qn=e,zr=0;zr<qn.length;zr++){const n=qn[zr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}qn=null,zr=0}}const gi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function yp(t){try{for(nn=0;nn<At.length;nn++){const e=At[nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;nn<At.length;nn++){const e=At[nn];e&&(e.flags&=-2)}nn=-1,At.length=0,_p(),Mo=null,(At.length||ns.length)&&yp()}}let Nt=null,vp=null;function Lo(t){const e=Nt;return Nt=t,vp=t&&t.type.__scopeId||null,e}function wt(t,e=Nt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Fh(-1);const i=Lo(e);let a;try{a=t(...s)}finally{Lo(i),r._d&&Fh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Kt(t,e){if(Nt===null)return t;const n=Sa(Nt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=De]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&bn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Er(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(Cn(),mn(c,n,8,[t.el,l,t,e]),kn())}}const Qy=Symbol("_vte"),Yy=t=>t.__isTeleport;function kc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,kc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ep(t,e){return he(t)?yt({name:t.name},e,{setup:t}):t}function Tp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ti(t,e,n,r,s=!1){if(ae(t)){t.forEach((C,D)=>ti(C,e&&(ae(e)?e[D]:e),n,r,s));return}if(ni(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ti(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Sa(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===De?l.refs={}:l.refs,p=l.setupState,m=Pe(p),_=p===De?()=>!1:C=>Ce(m,C);if(h!=null&&h!==c&&(Ge(h)?(f[h]=null,_(h)&&(p[h]=null)):_t(h)&&(h.value=null)),he(c))Vi(c,l,12,[a,f]);else{const C=Ge(c),D=_t(c);if(C||D){const x=()=>{if(t.f){const $=C?_(c)?p[c]:f[c]:c.value;s?ae($)&&vc($,i):ae($)?$.includes(i)||$.push(i):C?(f[c]=[i],_(c)&&(p[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else C?(f[c]=a,_(c)&&(p[c]=a)):D&&(c.value=a,t.k&&(f[t.k]=a))};a?(x.id=-1,Dt(x,n)):x()}}}ma().requestIdleCallback;ma().cancelIdleCallback;const ni=t=>!!t.type.__asyncLoader,Ip=t=>t.type.__isKeepAlive;function Jy(t,e){wp(t,"a",e)}function Xy(t,e){wp(t,"da",e)}function wp(t,e,n=gt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ia(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ip(s.parent.vnode)&&Zy(r,e,n,s),s=s.parent}}function Zy(t,e,n,r){const s=Ia(e,t,r,!0);wa(()=>{vc(r[e],s)},n)}function Ia(t,e,n=gt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{Cn();const l=Ni(n),c=mn(e,n,t,a);return l(),kn(),c});return r?s.unshift(i):s.push(i),i}}const xn=t=>(e,n=gt)=>{(!yi||t==="sp")&&Ia(t,(...r)=>e(...r),n)},ev=xn("bm"),Di=xn("m"),tv=xn("bu"),nv=xn("u"),rv=xn("bum"),wa=xn("um"),sv=xn("sp"),iv=xn("rtg"),ov=xn("rtc");function av(t,e=gt){Ia("ec",t,e)}const lv="components";function Vc(t,e){return uv(lv,t,!0,e)||t}const cv=Symbol.for("v-ndc");function uv(t,e,n=!0,r=!1){const s=Nt||gt;if(s){const i=s.type;{const l=Xv(i,!1);if(l&&(l===e||l===Ht(e)||l===pa(Ht(e))))return i}const a=Ch(s[t]||i[t],e)||Ch(s.appContext[t],e);return!a&&r?i:a}}function Ch(t,e){return t&&(t[e]||t[Ht(e)]||t[pa(Ht(e))])}function cs(t,e,n,r){let s;const i=n,a=ae(t);if(a||Ge(t)){const l=a&&ts(t);let c=!1,h=!1;l&&(c=!$t(t),h=or(t),t=va(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?h?Oo(it(t[f])):it(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const Ml=t=>t?qp(t)?Sa(t):Ml(t.parent):null,ri=yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ml(t.parent),$root:t=>Ml(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>bp(t),$forceUpdate:t=>t.f||(t.f=()=>{Cc(t.update)}),$nextTick:t=>t.n||(t.n=Pc.bind(t.proxy)),$watch:t=>Vv.bind(t)}),fl=(t,e)=>t!==De&&!t.__isScriptSetup&&Ce(t,e),hv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(fl(r,e))return a[e]=1,r[e];if(s!==De&&Ce(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Ce(h,e))return a[e]=3,i[e];if(n!==De&&Ce(n,e))return a[e]=4,n[e];Ll&&(a[e]=0)}}const f=ri[e];let p,m;if(f)return e==="$attrs"&&pt(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==De&&Ce(n,e))return a[e]=4,n[e];if(m=c.config.globalProperties,Ce(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return fl(s,e)?(s[e]=n,!0):r!==De&&Ce(r,e)?(r[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==De&&Ce(t,a)||fl(e,a)||(l=i[0])&&Ce(l,a)||Ce(r,a)||Ce(ri,a)||Ce(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function kh(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ll=!0;function fv(t){const e=bp(t),n=t.proxy,r=t.ctx;Ll=!1,e.beforeCreate&&Vh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:C,activated:D,deactivated:x,beforeDestroy:$,beforeUnmount:B,destroyed:H,unmounted:G,render:de,renderTracked:ve,renderTriggered:w,errorCaptured:v,serverPrefetch:I,expose:A,inheritAttrs:b,components:R,directives:T,filters:Et}=e;if(h&&dv(h,r,null),a)for(const Ee in a){const pe=a[Ee];he(pe)&&(r[Ee]=pe.bind(n))}if(s){const Ee=s.call(n,n);Oe(Ee)&&(t.data=Ea(Ee))}if(Ll=!0,i)for(const Ee in i){const pe=i[Ee],kt=he(pe)?pe.bind(n,n):he(pe.get)?pe.get.bind(n,n):on,Wt=!he(pe)&&he(pe.set)?pe.set.bind(n):on,Mt=bt({get:kt,set:Wt});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Fe=>Mt.value=Fe})}if(l)for(const Ee in l)Ap(l[Ee],r,n,Ee);if(c){const Ee=he(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(pe=>{yo(pe,Ee[pe])})}f&&Vh(f,t,"c");function We(Ee,pe){ae(pe)?pe.forEach(kt=>Ee(kt.bind(n))):pe&&Ee(pe.bind(n))}if(We(ev,p),We(Di,m),We(tv,_),We(nv,C),We(Jy,D),We(Xy,x),We(av,v),We(ov,ve),We(iv,w),We(rv,B),We(wa,G),We(sv,I),ae(A))if(A.length){const Ee=t.exposed||(t.exposed={});A.forEach(pe=>{Object.defineProperty(Ee,pe,{get:()=>n[pe],set:kt=>n[pe]=kt,enumerable:!0})})}else t.exposed||(t.exposed={});de&&t.render===on&&(t.render=de),b!=null&&(t.inheritAttrs=b),R&&(t.components=R),T&&(t.directives=T),I&&Tp(t)}function dv(t,e,n=on){ae(t)&&(t=Fl(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=Jt(s.from||r,s.default,!0):i=Jt(s.from||r):i=Jt(s),_t(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Vh(t,e,n){mn(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ap(t,e,n,r){let s=r.includes(".")?Fp(n,r):()=>n[r];if(Ge(t)){const i=e[t];he(i)&&vo(s,i)}else if(he(t))vo(s,t.bind(n));else if(Oe(t))if(ae(t))t.forEach(i=>Ap(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&vo(s,i,t)}}function bp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Fo(c,h,a,!0)),Fo(c,e,a)),Oe(e)&&i.set(e,c),c}function Fo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Fo(t,i,n,!0),s&&s.forEach(a=>Fo(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=pv[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const pv={data:Dh,props:Nh,emits:Nh,methods:Ws,computed:Ws,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Ws,directives:Ws,watch:gv,provide:Dh,inject:mv};function Dh(t,e){return e?t?function(){return yt(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function mv(t,e){return Ws(Fl(t),Fl(e))}function Fl(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function Ws(t,e){return t?yt(Object.create(null),t,e):e}function Nh(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:yt(Object.create(null),kh(t),kh(e??{})):e}function gv(t,e){if(!t)return e;if(!e)return t;const n=yt(Object.create(null),t);for(const r in e)n[r]=It(t[r],e[r]);return n}function Sp(){return{app:null,config:{isNativeTag:iy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _v=0;function yv(t,e){return function(r,s=null){he(r)||(r=yt({},r)),s!=null&&!Oe(s)&&(s=null);const i=Sp(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:_v++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:eE,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&he(f.install)?(a.add(f),f.install(h,...p)):he(f)&&(a.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,m){if(!c){const _=h._ceVNode||Se(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),c=!0,h._container=f,f.__vue_app__=h,Sa(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(mn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=rs;rs=h;try{return f()}finally{rs=p}}};return h}}let rs=null;function yo(t,e){if(gt){let n=gt.provides;const r=gt.parent&&gt.parent.provides;r===n&&(n=gt.provides=Object.create(r)),n[t]=e}}function Jt(t,e,n=!1){const r=Kv();if(r||rs){let s=rs?rs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}const Rp={},Pp=()=>Object.create(Rp),Cp=t=>Object.getPrototypeOf(t)===Rp;function vv(t,e,n,r=!1){const s={},i=Pp();t.propsDefaults=Object.create(null),kp(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:hp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ev(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Pe(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Aa(t.emitsOptions,m))continue;const _=e[m];if(c)if(Ce(i,m))_!==i[m]&&(i[m]=_,h=!0);else{const C=Ht(m);s[C]=Ul(c,l,C,_,t,!1)}else _!==i[m]&&(i[m]=_,h=!0)}}}else{kp(t,e,s,i)&&(h=!0);let f;for(const p in l)(!e||!Ce(e,p)&&((f=Or(p))===p||!Ce(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Ul(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ce(e,p))&&(delete i[p],h=!0)}h&&An(t.attrs,"set","")}function kp(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(Xs(c))continue;const h=e[c];let f;s&&Ce(s,f=Ht(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:Aa(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Pe(n),h=l||De;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Ul(s,c,p,h[p],t,!Ce(h,p))}}return a}function Ul(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Ce(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&he(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Ni(s);r=h[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Or(n))&&(r=!0))}return r}const Tv=new WeakMap;function Vp(t,e,n=!1){const r=n?Tv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!he(t)){const f=p=>{c=!0;const[m,_]=Vp(p,e,!0);yt(a,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Oe(t)&&r.set(t,Zr),Zr;if(ae(i))for(let f=0;f<i.length;f++){const p=Ht(i[f]);Oh(p)&&(a[p]=De)}else if(i)for(const f in i){const p=Ht(f);if(Oh(p)){const m=i[f],_=a[p]=ae(m)||he(m)?{type:m}:yt({},m),C=_.type;let D=!1,x=!0;if(ae(C))for(let $=0;$<C.length;++$){const B=C[$],H=he(B)&&B.name;if(H==="Boolean"){D=!0;break}else H==="String"&&(x=!1)}else D=he(C)&&C.name==="Boolean";_[0]=D,_[1]=x,(D||Ce(_,"default"))&&l.push(p)}}const h=[a,l];return Oe(t)&&r.set(t,h),h}function Oh(t){return t[0]!=="$"&&!Xs(t)}const Dc=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",Nc=t=>ae(t)?t.map(sn):[sn(t)],Iv=(t,e,n)=>{if(e._n)return e;const r=wt((...s)=>Nc(e(...s)),n);return r._c=!1,r},Dp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Dc(s))continue;const i=t[s];if(he(i))e[s]=Iv(s,i,r);else if(i!=null){const a=Nc(i);e[s]=()=>a}}},Np=(t,e)=>{const n=Nc(e);t.slots.default=()=>n},Op=(t,e,n)=>{for(const r in e)(n||!Dc(r))&&(t[r]=e[r])},wv=(t,e,n)=>{const r=t.slots=Pp();if(t.vnode.shapeFlag&32){const s=e.__;s&&Vl(r,"__",s,!0);const i=e._;i?(Op(r,e,n),n&&Vl(r,"_",i,!0)):Dp(e,r)}else e&&Np(t,e)},Av=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=De;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Op(s,e,n):(i=!e.$stable,Dp(e,s)),a=e}else e&&(Np(t,e),a={default:1});if(i)for(const l in s)!Dc(l)&&a[l]==null&&delete s[l]},Dt=Fv;function bv(t){return Sv(t)}function Sv(t,e){const n=ma();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=on,insertStaticContent:C}=t,D=(y,E,S,O=null,F=null,M=null,Q=void 0,W=null,q=!!E.dynamicChildren)=>{if(y===E)return;y&&!$s(y,E)&&(O=N(y),Fe(y,F,M,!0),y=null),E.patchFlag===-2&&(q=!1,E.dynamicChildren=null);const{type:j,ref:ne,shapeFlag:K}=E;switch(j){case ba:x(y,E,S,O);break;case ar:$(y,E,S,O);break;case Eo:y==null&&B(E,S,O,Q);break;case qe:R(y,E,S,O,F,M,Q,W,q);break;default:K&1?de(y,E,S,O,F,M,Q,W,q):K&6?T(y,E,S,O,F,M,Q,W,q):(K&64||K&128)&&j.process(y,E,S,O,F,M,Q,W,q,Z)}ne!=null&&F?ti(ne,y&&y.ref,M,E||y,!E):ne==null&&y&&y.ref!=null&&ti(y.ref,null,M,y,!0)},x=(y,E,S,O)=>{if(y==null)r(E.el=l(E.children),S,O);else{const F=E.el=y.el;E.children!==y.children&&h(F,E.children)}},$=(y,E,S,O)=>{y==null?r(E.el=c(E.children||""),S,O):E.el=y.el},B=(y,E,S,O)=>{[y.el,y.anchor]=C(y.children,E,S,O,y.el,y.anchor)},H=({el:y,anchor:E},S,O)=>{let F;for(;y&&y!==E;)F=m(y),r(y,S,O),y=F;r(E,S,O)},G=({el:y,anchor:E})=>{let S;for(;y&&y!==E;)S=m(y),s(y),y=S;s(E)},de=(y,E,S,O,F,M,Q,W,q)=>{E.type==="svg"?Q="svg":E.type==="math"&&(Q="mathml"),y==null?ve(E,S,O,F,M,Q,W,q):I(y,E,F,M,Q,W,q)},ve=(y,E,S,O,F,M,Q,W)=>{let q,j;const{props:ne,shapeFlag:K,transition:te,dirs:le}=y;if(q=y.el=a(y.type,M,ne&&ne.is,ne),K&8?f(q,y.children):K&16&&v(y.children,q,null,O,F,dl(y,M),Q,W),le&&Er(y,null,O,"created"),w(q,y,y.scopeId,Q,O),ne){for(const fe in ne)fe!=="value"&&!Xs(fe)&&i(q,fe,null,ne[fe],M,O);"value"in ne&&i(q,"value",null,ne.value,M),(j=ne.onVnodeBeforeMount)&&tn(j,O,y)}le&&Er(y,null,O,"beforeMount");const se=Rv(F,te);se&&te.beforeEnter(q),r(q,E,S),((j=ne&&ne.onVnodeMounted)||se||le)&&Dt(()=>{j&&tn(j,O,y),se&&te.enter(q),le&&Er(y,null,O,"mounted")},F)},w=(y,E,S,O,F)=>{if(S&&_(y,S),O)for(let M=0;M<O.length;M++)_(y,O[M]);if(F){let M=F.subTree;if(E===M||jp(M.type)&&(M.ssContent===E||M.ssFallback===E)){const Q=F.vnode;w(y,Q,Q.scopeId,Q.slotScopeIds,F.parent)}}},v=(y,E,S,O,F,M,Q,W,q=0)=>{for(let j=q;j<y.length;j++){const ne=y[j]=W?Wn(y[j]):sn(y[j]);D(null,ne,E,S,O,F,M,Q,W)}},I=(y,E,S,O,F,M,Q)=>{const W=E.el=y.el;let{patchFlag:q,dynamicChildren:j,dirs:ne}=E;q|=y.patchFlag&16;const K=y.props||De,te=E.props||De;let le;if(S&&Tr(S,!1),(le=te.onVnodeBeforeUpdate)&&tn(le,S,E,y),ne&&Er(E,y,S,"beforeUpdate"),S&&Tr(S,!0),(K.innerHTML&&te.innerHTML==null||K.textContent&&te.textContent==null)&&f(W,""),j?A(y.dynamicChildren,j,W,S,O,dl(E,F),M):Q||pe(y,E,W,null,S,O,dl(E,F),M,!1),q>0){if(q&16)b(W,K,te,S,F);else if(q&2&&K.class!==te.class&&i(W,"class",null,te.class,F),q&4&&i(W,"style",K.style,te.style,F),q&8){const se=E.dynamicProps;for(let fe=0;fe<se.length;fe++){const Te=se[fe],et=K[Te],tt=te[Te];(tt!==et||Te==="value")&&i(W,Te,et,tt,F,S)}}q&1&&y.children!==E.children&&f(W,E.children)}else!Q&&j==null&&b(W,K,te,S,F);((le=te.onVnodeUpdated)||ne)&&Dt(()=>{le&&tn(le,S,E,y),ne&&Er(E,y,S,"updated")},O)},A=(y,E,S,O,F,M,Q)=>{for(let W=0;W<E.length;W++){const q=y[W],j=E[W],ne=q.el&&(q.type===qe||!$s(q,j)||q.shapeFlag&198)?p(q.el):S;D(q,j,ne,null,O,F,M,Q,!0)}},b=(y,E,S,O,F)=>{if(E!==S){if(E!==De)for(const M in E)!Xs(M)&&!(M in S)&&i(y,M,E[M],null,F,O);for(const M in S){if(Xs(M))continue;const Q=S[M],W=E[M];Q!==W&&M!=="value"&&i(y,M,W,Q,F,O)}"value"in S&&i(y,"value",E.value,S.value,F)}},R=(y,E,S,O,F,M,Q,W,q)=>{const j=E.el=y?y.el:l(""),ne=E.anchor=y?y.anchor:l("");let{patchFlag:K,dynamicChildren:te,slotScopeIds:le}=E;le&&(W=W?W.concat(le):le),y==null?(r(j,S,O),r(ne,S,O),v(E.children||[],S,ne,F,M,Q,W,q)):K>0&&K&64&&te&&y.dynamicChildren?(A(y.dynamicChildren,te,S,F,M,Q,W),(E.key!=null||F&&E===F.subTree)&&xp(y,E,!0)):pe(y,E,S,ne,F,M,Q,W,q)},T=(y,E,S,O,F,M,Q,W,q)=>{E.slotScopeIds=W,y==null?E.shapeFlag&512?F.ctx.activate(E,S,O,Q,q):Et(E,S,O,F,M,Q,q):xt(y,E,q)},Et=(y,E,S,O,F,M,Q)=>{const W=y.component=zv(y,O,F);if(Ip(y)&&(W.ctx.renderer=Z),Gv(W,!1,Q),W.asyncDep){if(F&&F.registerDep(W,We,Q),!y.el){const q=W.subTree=Se(ar);$(null,q,E,S),y.placeholder=q.el}}else We(W,y,E,S,F,M,Q)},xt=(y,E,S)=>{const O=E.component=y.component;if(Mv(y,E,S))if(O.asyncDep&&!O.asyncResolved){Ee(O,E,S);return}else O.next=E,O.update();else E.el=y.el,O.vnode=E},We=(y,E,S,O,F,M,Q)=>{const W=()=>{if(y.isMounted){let{next:K,bu:te,u:le,parent:se,vnode:fe}=y;{const ct=Mp(y);if(ct){K&&(K.el=fe.el,Ee(y,K,Q)),ct.asyncDep.then(()=>{y.isUnmounted||W()});return}}let Te=K,et;Tr(y,!1),K?(K.el=fe.el,Ee(y,K,Q)):K=fe,te&&_o(te),(et=K.props&&K.props.onVnodeBeforeUpdate)&&tn(et,se,K,fe),Tr(y,!0);const tt=Mh(y),Lt=y.subTree;y.subTree=tt,D(Lt,tt,p(Lt.el),N(Lt),y,F,M),K.el=tt.el,Te===null&&Lv(y,tt.el),le&&Dt(le,F),(et=K.props&&K.props.onVnodeUpdated)&&Dt(()=>tn(et,se,K,fe),F)}else{let K;const{el:te,props:le}=E,{bm:se,m:fe,parent:Te,root:et,type:tt}=y,Lt=ni(E);Tr(y,!1),se&&_o(se),!Lt&&(K=le&&le.onVnodeBeforeMount)&&tn(K,Te,E),Tr(y,!0);{et.ce&&et.ce._def.shadowRoot!==!1&&et.ce._injectChildStyle(tt);const ct=y.subTree=Mh(y);D(null,ct,S,O,y,F,M),E.el=ct.el}if(fe&&Dt(fe,F),!Lt&&(K=le&&le.onVnodeMounted)){const ct=E;Dt(()=>tn(K,Te,ct),F)}(E.shapeFlag&256||Te&&ni(Te.vnode)&&Te.vnode.shapeFlag&256)&&y.a&&Dt(y.a,F),y.isMounted=!0,E=S=O=null}};y.scope.on();const q=y.effect=new Jd(W);y.scope.off();const j=y.update=q.run.bind(q),ne=y.job=q.runIfDirty.bind(q);ne.i=y,ne.id=y.uid,q.scheduler=()=>Cc(ne),Tr(y,!0),j()},Ee=(y,E,S)=>{E.component=y;const O=y.vnode.props;y.vnode=E,y.next=null,Ev(y,E.props,O,S),Av(y,E.children,S),Cn(),Ph(y),kn()},pe=(y,E,S,O,F,M,Q,W,q=!1)=>{const j=y&&y.children,ne=y?y.shapeFlag:0,K=E.children,{patchFlag:te,shapeFlag:le}=E;if(te>0){if(te&128){Wt(j,K,S,O,F,M,Q,W,q);return}else if(te&256){kt(j,K,S,O,F,M,Q,W,q);return}}le&8?(ne&16&&St(j,F,M),K!==j&&f(S,K)):ne&16?le&16?Wt(j,K,S,O,F,M,Q,W,q):St(j,F,M,!0):(ne&8&&f(S,""),le&16&&v(K,S,O,F,M,Q,W,q))},kt=(y,E,S,O,F,M,Q,W,q)=>{y=y||Zr,E=E||Zr;const j=y.length,ne=E.length,K=Math.min(j,ne);let te;for(te=0;te<K;te++){const le=E[te]=q?Wn(E[te]):sn(E[te]);D(y[te],le,S,null,F,M,Q,W,q)}j>ne?St(y,F,M,!0,!1,K):v(E,S,O,F,M,Q,W,q,K)},Wt=(y,E,S,O,F,M,Q,W,q)=>{let j=0;const ne=E.length;let K=y.length-1,te=ne-1;for(;j<=K&&j<=te;){const le=y[j],se=E[j]=q?Wn(E[j]):sn(E[j]);if($s(le,se))D(le,se,S,null,F,M,Q,W,q);else break;j++}for(;j<=K&&j<=te;){const le=y[K],se=E[te]=q?Wn(E[te]):sn(E[te]);if($s(le,se))D(le,se,S,null,F,M,Q,W,q);else break;K--,te--}if(j>K){if(j<=te){const le=te+1,se=le<ne?E[le].el:O;for(;j<=te;)D(null,E[j]=q?Wn(E[j]):sn(E[j]),S,se,F,M,Q,W,q),j++}}else if(j>te)for(;j<=K;)Fe(y[j],F,M,!0),j++;else{const le=j,se=j,fe=new Map;for(j=se;j<=te;j++){const nt=E[j]=q?Wn(E[j]):sn(E[j]);nt.key!=null&&fe.set(nt.key,j)}let Te,et=0;const tt=te-se+1;let Lt=!1,ct=0;const Fn=new Array(tt);for(j=0;j<tt;j++)Fn[j]=0;for(j=le;j<=K;j++){const nt=y[j];if(et>=tt){Fe(nt,F,M,!0);continue}let Ft;if(nt.key!=null)Ft=fe.get(nt.key);else for(Te=se;Te<=te;Te++)if(Fn[Te-se]===0&&$s(nt,E[Te])){Ft=Te;break}Ft===void 0?Fe(nt,F,M,!0):(Fn[Ft-se]=j+1,Ft>=ct?ct=Ft:Lt=!0,D(nt,E[Ft],S,null,F,M,Q,W,q),et++)}const Ps=Lt?Pv(Fn):Zr;for(Te=Ps.length-1,j=tt-1;j>=0;j--){const nt=se+j,Ft=E[nt],Wi=E[nt+1],jr=nt+1<ne?Wi.el||Wi.placeholder:O;Fn[j]===0?D(null,Ft,S,jr,F,M,Q,W,q):Lt&&(Te<0||j!==Ps[Te]?Mt(Ft,S,jr,2):Te--)}}},Mt=(y,E,S,O,F=null)=>{const{el:M,type:Q,transition:W,children:q,shapeFlag:j}=y;if(j&6){Mt(y.component.subTree,E,S,O);return}if(j&128){y.suspense.move(E,S,O);return}if(j&64){Q.move(y,E,S,Z);return}if(Q===qe){r(M,E,S);for(let K=0;K<q.length;K++)Mt(q[K],E,S,O);r(y.anchor,E,S);return}if(Q===Eo){H(y,E,S);return}if(O!==2&&j&1&&W)if(O===0)W.beforeEnter(M),r(M,E,S),Dt(()=>W.enter(M),F);else{const{leave:K,delayLeave:te,afterLeave:le}=W,se=()=>{y.ctx.isUnmounted?s(M):r(M,E,S)},fe=()=>{K(M,()=>{se(),le&&le()})};te?te(M,se,fe):fe()}else r(M,E,S)},Fe=(y,E,S,O=!1,F=!1)=>{const{type:M,props:Q,ref:W,children:q,dynamicChildren:j,shapeFlag:ne,patchFlag:K,dirs:te,cacheIndex:le}=y;if(K===-2&&(F=!1),W!=null&&(Cn(),ti(W,null,S,y,!0),kn()),le!=null&&(E.renderCache[le]=void 0),ne&256){E.ctx.deactivate(y);return}const se=ne&1&&te,fe=!ni(y);let Te;if(fe&&(Te=Q&&Q.onVnodeBeforeUnmount)&&tn(Te,E,y),ne&6)en(y.component,S,O);else{if(ne&128){y.suspense.unmount(S,O);return}se&&Er(y,null,E,"beforeUnmount"),ne&64?y.type.remove(y,E,S,Z,O):j&&!j.hasOnce&&(M!==qe||K>0&&K&64)?St(j,E,S,!1,!0):(M===qe&&K&384||!F&&ne&16)&&St(q,E,S),O&&Ue(y)}(fe&&(Te=Q&&Q.onVnodeUnmounted)||se)&&Dt(()=>{Te&&tn(Te,E,y),se&&Er(y,null,E,"unmounted")},S)},Ue=y=>{const{type:E,el:S,anchor:O,transition:F}=y;if(E===qe){Ln(S,O);return}if(E===Eo){G(y);return}const M=()=>{s(S),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(y.shapeFlag&1&&F&&!F.persisted){const{leave:Q,delayLeave:W}=F,q=()=>Q(S,M);W?W(y.el,M,q):q()}else M()},Ln=(y,E)=>{let S;for(;y!==E;)S=m(y),s(y),y=S;s(E)},en=(y,E,S)=>{const{bum:O,scope:F,job:M,subTree:Q,um:W,m:q,a:j,parent:ne,slots:{__:K}}=y;xh(q),xh(j),O&&_o(O),ne&&ae(K)&&K.forEach(te=>{ne.renderCache[te]=void 0}),F.stop(),M&&(M.flags|=8,Fe(Q,y,E,S)),W&&Dt(W,E),Dt(()=>{y.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},St=(y,E,S,O=!1,F=!1,M=0)=>{for(let Q=M;Q<y.length;Q++)Fe(y[Q],E,S,O,F)},N=y=>{if(y.shapeFlag&6)return N(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const E=m(y.anchor||y.el),S=E&&E[Qy];return S?m(S):E};let J=!1;const Y=(y,E,S)=>{y==null?E._vnode&&Fe(E._vnode,null,null,!0):D(E._vnode||null,y,E,null,null,null,S),E._vnode=y,J||(J=!0,Ph(),_p(),J=!1)},Z={p:D,um:Fe,m:Mt,r:Ue,mt:Et,mc:v,pc:pe,pbc:A,n:N,o:t};return{render:Y,hydrate:void 0,createApp:yv(Y)}}function dl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Tr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Rv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xp(t,e,n=!1){const r=t.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Wn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&xp(a,l)),l.type===ba&&(l.el=a.el),l.type===ar&&!l.el&&(l.el=a.el)}}function Pv(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Mp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Mp(e)}function xh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Cv=Symbol.for("v-scx"),kv=()=>Jt(Cv);function vo(t,e,n){return Lp(t,e,n)}function Lp(t,e,n=De){const{immediate:r,deep:s,flush:i,once:a}=n,l=yt({},n),c=e&&r||!e&&i!=="post";let h;if(yi){if(i==="sync"){const _=kv();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=on,_.resume=on,_.pause=on,_}}const f=gt;l.call=(_,C,D)=>mn(_,f,C,D);let p=!1;i==="post"?l.scheduler=_=>{Dt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,C)=>{C?_():Cc(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=Wy(t,e,l);return yi&&(h?h.push(m):c&&m()),m}function Vv(t,e,n){const r=this.proxy,s=Ge(t)?t.includes(".")?Fp(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const a=Ni(this),l=Lp(s,i.bind(r),n);return a(),l}function Fp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Dv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ht(e)}Modifiers`]||t[`${Or(e)}Modifiers`];function Nv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),a=i&&Dv(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>Ge(f)?f.trim():f)),a.number&&(s=n.map(No)));let l,c=r[l=al(e)]||r[l=al(Ht(e))];!c&&i&&(c=r[l=al(Or(e))]),c&&mn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,mn(h,t,6,s)}}function Up(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!he(t)){const c=h=>{const f=Up(h,e,!0);f&&(l=!0,yt(a,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Oe(t)&&r.set(t,null),null):(ae(i)?i.forEach(c=>a[c]=null):yt(a,i),Oe(t)&&r.set(t,a),a)}function Aa(t,e){return!t||!ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,Or(e))||Ce(t,e))}function Mh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:p,data:m,setupState:_,ctx:C,inheritAttrs:D}=t,x=Lo(t);let $,B;try{if(n.shapeFlag&4){const G=s||r,de=G;$=sn(h.call(de,G,f,p,_,m,C)),B=l}else{const G=e;$=sn(G.length>1?G(p,{attrs:l,slots:a,emit:c}):G(p,null)),B=e.props?l:Ov(l)}}catch(G){si.length=0,Ta(G,t,1),$=Se(ar)}let H=$;if(B&&D!==!1){const G=Object.keys(B),{shapeFlag:de}=H;G.length&&de&7&&(i&&G.some(yc)&&(B=xv(B,i)),H=us(H,B,!1,!0))}return n.dirs&&(H=us(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&kc(H,n.transition),$=H,Lo(x),$}const Ov=t=>{let e;for(const n in t)(n==="class"||n==="style"||ha(n))&&((e||(e={}))[n]=t[n]);return e},xv=(t,e)=>{const n={};for(const r in t)(!yc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Mv(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Lh(r,a,h):!!a;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(a[m]!==r[m]&&!Aa(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Lh(r,a,h):!0:!!a;return!1}function Lh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Aa(n,i))return!0}return!1}function Lv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const jp=t=>t.__isSuspense;function Fv(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):Gy(t)}const qe=Symbol.for("v-fgt"),ba=Symbol.for("v-txt"),ar=Symbol.for("v-cmt"),Eo=Symbol.for("v-stc"),si=[];let Ot=null;function ye(t=!1){si.push(Ot=t?null:[])}function Uv(){si.pop(),Ot=si[si.length-1]||null}let _i=1;function Fh(t,e=!1){_i+=t,t<0&&Ot&&e&&(Ot.hasOnce=!0)}function Bp(t){return t.dynamicChildren=_i>0?Ot||Zr:null,Uv(),_i>0&&Ot&&Ot.push(t),t}function we(t,e,n,r,s,i){return Bp(V(t,e,n,r,s,i,!0))}function jv(t,e,n,r,s){return Bp(Se(t,e,n,r,s,!0))}function Uo(t){return t?t.__v_isVNode===!0:!1}function $s(t,e){return t.type===e.type&&t.key===e.key}const $p=({key:t})=>t??null,To=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ge(t)||_t(t)||he(t)?{i:Nt,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,r=0,s=null,i=t===qe?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$p(e),ref:e&&To(e),scopeId:vp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Nt};return l?(Oc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ge(n)?8:16),_i>0&&!a&&Ot&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ot.push(c),c}const Se=Bv;function Bv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===cv)&&(t=ar),Uo(t)){const l=us(t,e,!0);return n&&Oc(l,n),_i>0&&!i&&Ot&&(l.shapeFlag&6?Ot[Ot.indexOf(t)]=l:Ot.push(l)),l.patchFlag=-2,l}if(Zv(t)&&(t=t.__vccOpts),e){e=$v(e);let{class:l,style:c}=e;l&&!Ge(l)&&(e.class=_a(l)),Oe(c)&&(Rc(c)&&!ae(c)&&(c=yt({},c)),e.style=ga(c))}const a=Ge(t)?1:jp(t)?128:Yy(t)?64:Oe(t)?4:he(t)?2:0;return V(t,e,n,r,s,a,i,!0)}function $v(t){return t?Rc(t)||Cp(t)?yt({},t):t:null}function us(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?Hv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&$p(h),ref:e&&e.ref?n&&i?ae(i)?i.concat(To(e)):[i,To(e)]:To(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&us(t.ssContent),ssFallback:t.ssFallback&&us(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&kc(f,c.clone(f)),f}function Xe(t=" ",e=0){return Se(ba,null,t,e)}function Hp(t,e){const n=Se(Eo,null,t);return n.staticCount=e,n}function jl(t="",e=!1){return e?(ye(),jv(ar,null,t)):Se(ar,null,t)}function sn(t){return t==null||typeof t=="boolean"?Se(ar):ae(t)?Se(qe,null,t.slice()):Uo(t)?Wn(t):Se(ba,null,String(t))}function Wn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:us(t)}function Oc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Oc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Cp(e)?e._ctx=Nt:s===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Nt},n=32):(e=String(e),r&64?(n=16,e=[Xe(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=_a([e.class,r.class]));else if(s==="style")e.style=ga([e.style,r.style]);else if(ha(s)){const i=e[s],a=r[s];a&&i!==a&&!(ae(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function tn(t,e,n,r=null){mn(t,e,7,[n,r])}const qv=Sp();let Wv=0;function zv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||qv,i={uid:Wv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vp(r,s),emitsOptions:Up(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Nv.bind(null,i),t.ce&&t.ce(i),i}let gt=null;const Kv=()=>gt||Nt;let jo,Bl;{const t=ma(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};jo=e("__VUE_INSTANCE_SETTERS__",n=>gt=n),Bl=e("__VUE_SSR_SETTERS__",n=>yi=n)}const Ni=t=>{const e=gt;return jo(t),t.scope.on(),()=>{t.scope.off(),jo(e)}},Uh=()=>{gt&&gt.scope.off(),jo(null)};function qp(t){return t.vnode.shapeFlag&4}let yi=!1;function Gv(t,e=!1,n=!1){e&&Bl(e);const{props:r,children:s}=t.vnode,i=qp(t);vv(t,r,i,e),wv(t,s,n||e);const a=i?Qv(t,e):void 0;return e&&Bl(!1),a}function Qv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,hv);const{setup:r}=n;if(r){Cn();const s=t.setupContext=r.length>1?Jv(t):null,i=Ni(t),a=Vi(r,t,0,[t.props,s]),l=Wd(a);if(kn(),i(),(l||t.sp)&&!ni(t)&&Tp(t),l){if(a.then(Uh,Uh),e)return a.then(c=>{jh(t,c)}).catch(c=>{Ta(c,t,0)});t.asyncDep=a}else jh(t,a)}else Wp(t)}function jh(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=pp(e)),Wp(t)}function Wp(t,e,n){const r=t.type;t.render||(t.render=r.render||on);{const s=Ni(t);Cn();try{fv(t)}finally{kn(),s()}}}const Yv={get(t,e){return pt(t,"get",""),t[e]}};function Jv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Yv),slots:t.slots,emit:t.emit,expose:e}}function Sa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(pp(Fy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ri)return ri[n](t)},has(e,n){return n in e||n in ri}})):t.proxy}function Xv(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function Zv(t){return he(t)&&"__vccOpts"in t}const bt=(t,e)=>Hy(t,e,yi);function zp(t,e,n){const r=arguments.length;return r===2?Oe(e)&&!ae(e)?Uo(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Uo(n)&&(n=[n]),Se(t,e,n))}const eE="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $l;const Bh=typeof window<"u"&&window.trustedTypes;if(Bh)try{$l=Bh.createPolicy("vue",{createHTML:t=>t})}catch{}const Kp=$l?t=>$l.createHTML(t):t=>t,tE="http://www.w3.org/2000/svg",nE="http://www.w3.org/1998/Math/MathML",wn=typeof document<"u"?document:null,$h=wn&&wn.createElement("template"),rE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?wn.createElementNS(tE,t):e==="mathml"?wn.createElementNS(nE,t):n?wn.createElement(t,{is:n}):wn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>wn.createTextNode(t),createComment:t=>wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{$h.innerHTML=Kp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=$h.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},sE=Symbol("_vtc");function iE(t,e,n){const r=t[sE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Bo=Symbol("_vod"),Gp=Symbol("_vsh"),Hh={beforeMount(t,{value:e},{transition:n}){t[Bo]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Hs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Hs(t,!0),r.enter(t)):r.leave(t,()=>{Hs(t,!1)}):Hs(t,e))},beforeUnmount(t,{value:e}){Hs(t,e)}};function Hs(t,e){t.style.display=e?t[Bo]:"none",t[Gp]=!e}const oE=Symbol(""),aE=/(^|;)\s*display\s*:/;function lE(t,e,n){const r=t.style,s=Ge(n);let i=!1;if(n&&!s){if(e)if(Ge(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Io(r,l,"")}else for(const a in e)n[a]==null&&Io(r,a,"");for(const a in n)a==="display"&&(i=!0),Io(r,a,n[a])}else if(s){if(e!==n){const a=r[oE];a&&(n+=";"+a),r.cssText=n,i=aE.test(n)}}else e&&t.removeAttribute("style");Bo in t&&(t[Bo]=i?r.display:"",t[Gp]&&(r.display="none"))}const qh=/\s*!important$/;function Io(t,e,n){if(ae(n))n.forEach(r=>Io(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=cE(t,e);qh.test(n)?t.setProperty(Or(r),n.replace(qh,""),"important"):t[r]=n}}const Wh=["Webkit","Moz","ms"],pl={};function cE(t,e){const n=pl[e];if(n)return n;let r=Ht(e);if(r!=="filter"&&r in t)return pl[e]=r;r=pa(r);for(let s=0;s<Wh.length;s++){const i=Wh[s]+r;if(i in t)return pl[e]=i}return e}const zh="http://www.w3.org/1999/xlink";function Kh(t,e,n,r,s,i=my(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(zh,e.slice(6,e.length)):t.setAttributeNS(zh,e,n):n==null||i&&!Gd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":pn(n)?String(n):n)}function Gh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Kp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Gd(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Ar(t,e,n,r){t.addEventListener(e,n,r)}function uE(t,e,n,r){t.removeEventListener(e,n,r)}const Qh=Symbol("_vei");function hE(t,e,n,r,s=null){const i=t[Qh]||(t[Qh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=fE(e);if(r){const h=i[e]=mE(r,s);Ar(t,l,h,c)}else a&&(uE(t,l,a,c),i[e]=void 0)}}const Yh=/(?:Once|Passive|Capture)$/;function fE(t){let e;if(Yh.test(t)){e={};let r;for(;r=t.match(Yh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Or(t.slice(2)),e]}let ml=0;const dE=Promise.resolve(),pE=()=>ml||(dE.then(()=>ml=0),ml=Date.now());function mE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;mn(gE(r,n.value),e,5,[r])};return n.value=t,n.attached=pE(),n}function gE(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Jh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,_E=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?iE(t,r,a):e==="style"?lE(t,n,r):ha(e)?yc(e)||hE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yE(t,e,r,a))?(Gh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ge(r))?Gh(t,Ht(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Kh(t,e,r,a))};function yE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Jh(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Jh(e)&&Ge(n)?!1:e in t}const $o=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>_o(e,n):e};function vE(t){t.target.composing=!0}function Xh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ss=Symbol("_assign"),Jn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ss]=$o(s);const i=r||s.props&&s.props.type==="number";Ar(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=No(l)),t[ss](l)}),n&&Ar(t,"change",()=>{t.value=t.value.trim()}),e||(Ar(t,"compositionstart",vE),Ar(t,"compositionend",Xh),Ar(t,"change",Xh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[ss]=$o(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?No(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},EE={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=fa(e);Ar(t,"change",()=>{const i=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?No(Ho(a)):Ho(a));t[ss](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Pc(()=>{t._assigning=!1})}),t[ss]=$o(r)},mounted(t,{value:e}){Zh(t,e)},beforeUpdate(t,e,n){t[ss]=$o(n)},updated(t,{value:e}){t._assigning||Zh(t,e)}};function Zh(t,e){const n=t.multiple,r=ae(e);if(!(n&&!r&&!fa(e))){for(let s=0,i=t.options.length;s<i;s++){const a=t.options[s],l=Ho(a);if(n)if(r){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(h=>String(h)===String(l)):a.selected=_y(e,l)>-1}else a.selected=e.has(l);else if(ya(Ho(a),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ho(t){return"_value"in t?t._value:t.value}const TE=["ctrl","shift","alt","meta"],IE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>TE.some(n=>t[`${n}Key`]&&!e.includes(n))},xc=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=IE[e[a]];if(l&&l(s,e))return}return t(s,...i)})},wE=yt({patchProp:_E},rE);let ef;function AE(){return ef||(ef=bv(wE))}const bE=(...t)=>{const e=AE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=RE(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,SE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function SE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function RE(t){return Ge(t)?document.querySelector(t):t}const PE="/PHPTravelWebSite/assets/smileface-9zMN8yZY.png";/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Kr=typeof document<"u";function Qp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function CE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Qp(t.default)}const Re=Object.assign;function gl(t,e){const n={};for(const r in e){const s=e[r];n[r]=Xt(s)?s.map(t):t(s)}return n}const ii=()=>{},Xt=Array.isArray,Yp=/#/g,kE=/&/g,VE=/\//g,DE=/=/g,NE=/\?/g,Jp=/\+/g,OE=/%5B/g,xE=/%5D/g,Xp=/%5E/g,ME=/%60/g,Zp=/%7B/g,LE=/%7C/g,em=/%7D/g,FE=/%20/g;function Mc(t){return encodeURI(""+t).replace(LE,"|").replace(OE,"[").replace(xE,"]")}function UE(t){return Mc(t).replace(Zp,"{").replace(em,"}").replace(Xp,"^")}function Hl(t){return Mc(t).replace(Jp,"%2B").replace(FE,"+").replace(Yp,"%23").replace(kE,"%26").replace(ME,"`").replace(Zp,"{").replace(em,"}").replace(Xp,"^")}function jE(t){return Hl(t).replace(DE,"%3D")}function BE(t){return Mc(t).replace(Yp,"%23").replace(NE,"%3F")}function $E(t){return t==null?"":BE(t).replace(VE,"%2F")}function vi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const HE=/\/$/,qE=t=>t.replace(HE,"");function _l(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=GE(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:vi(a)}}function WE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function tf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&hs(e.matched[r],n.matched[s])&&tm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function tm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!KE(t[n],e[n]))return!1;return!0}function KE(t,e){return Xt(t)?nf(t,e):Xt(e)?nf(e,t):t===e}function nf(t,e){return Xt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function GE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const $n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ei;(function(t){t.pop="pop",t.push="push"})(Ei||(Ei={}));var oi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(oi||(oi={}));function QE(t){if(!t)if(Kr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qE(t)}const YE=/^[^#]+#/;function JE(t,e){return t.replace(YE,"#")+e}function XE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ra=()=>({left:window.scrollX,top:window.scrollY});function ZE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=XE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function rf(t,e){return(history.state?history.state.position-e:-1)+t}const ql=new Map;function eT(t,e){ql.set(t,e)}function tT(t){const e=ql.get(t);return ql.delete(t),e}let nT=()=>location.protocol+"//"+location.host;function nm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),tf(c,"")}return tf(n,t)+r+s}function rT(t,e,n,r){let s=[],i=[],a=null;const l=({state:m})=>{const _=nm(t,location),C=n.value,D=e.value;let x=0;if(m){if(n.value=_,e.value=m,a&&a===C){a=null;return}x=D?m.position-D.position:0}else r(_);s.forEach($=>{$(n.value,C,{delta:x,type:Ei.pop,direction:x?x>0?oi.forward:oi.back:oi.unknown})})};function c(){a=n.value}function h(m){s.push(m);const _=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(Re({},m.state,{scroll:Ra()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function sf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ra():null}}function sT(t){const{history:e,location:n}=window,r={value:nm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:nT()+t+c;try{e[f?"replaceState":"pushState"](h,"",m),s.value=h}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function a(c,h){const f=Re({},e.state,sf(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,h){const f=Re({},s.value,e.state,{forward:c,scroll:Ra()});i(f.current,f,!0);const p=Re({},sf(r.value,c,null),{position:f.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function iT(t){t=QE(t);const e=sT(t),n=rT(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:JE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function oT(t){return typeof t=="string"||t&&typeof t=="object"}function rm(t){return typeof t=="string"||typeof t=="symbol"}const sm=Symbol("");var of;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(of||(of={}));function fs(t,e){return Re(new Error,{type:t,[sm]:!0},e)}function In(t,e){return t instanceof Error&&sm in t&&(e==null||!!(t.type&e))}const af="[^/]+?",aT={sensitive:!1,strict:!1,start:!0,end:!0},lT=/[.+*?^${}()[\]/\\]/g;function cT(t,e){const n=Re({},aT,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(lT,"\\$&"),_+=40;else if(m.type===1){const{value:C,repeatable:D,optional:x,regexp:$}=m;i.push({name:C,repeatable:D,optional:x});const B=$||af;if(B!==af){_+=10;try{new RegExp(`(${B})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${C}" (${B}): `+G.message)}}let H=D?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(H=x&&h.length<2?`(?:/${H})`:"/"+H),x&&(H+="?"),s+=H,_+=20,x&&(_+=-8),D&&(_+=-20),B===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const f=h.match(a),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",C=i[m-1];p[C.name]=_&&C.repeatable?_.split("/"):_}return p}function c(h){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:C,repeatable:D,optional:x}=_,$=C in h?h[C]:"";if(Xt($)&&!D)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const B=Xt($)?$.join("/"):$;if(!B)if(x)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=B}}return f||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function uT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function im(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=uT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(lf(r))return 1;if(lf(s))return-1}return s.length-r.length}function lf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const hT={type:0,value:""},fT=/[a-zA-Z0-9_]/;function dT(t){if(!t)return[[]];if(t==="/")return[[hT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:fT.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function pT(t,e,n){const r=cT(dT(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function mT(t,e){const n=[],r=new Map;e=ff({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const C=!_,D=uf(p);D.aliasOf=_&&_.record;const x=ff(e,p),$=[D];if("alias"in p){const G=typeof p.alias=="string"?[p.alias]:p.alias;for(const de of G)$.push(uf(Re({},D,{components:_?_.record.components:D.components,path:de,aliasOf:_?_.record:D})))}let B,H;for(const G of $){const{path:de}=G;if(m&&de[0]!=="/"){const ve=m.record.path,w=ve[ve.length-1]==="/"?"":"/";G.path=m.record.path+(de&&w+de)}if(B=pT(G,m,x),_?_.alias.push(B):(H=H||B,H!==B&&H.alias.push(B),C&&p.name&&!hf(B)&&a(p.name)),om(B)&&c(B),D.children){const ve=D.children;for(let w=0;w<ve.length;w++)i(ve[w],B,_&&_.children[w])}_=_||B}return H?()=>{a(H)}:ii}function a(p){if(rm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const m=yT(p,n);n.splice(m,0,p),p.record.name&&!hf(p)&&r.set(p.record.name,p)}function h(p,m){let _,C={},D,x;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw fs(1,{location:p});x=_.record.name,C=Re(cf(m.params,_.keys.filter(H=>!H.optional).concat(_.parent?_.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&cf(p.params,_.keys.map(H=>H.name))),D=_.stringify(C)}else if(p.path!=null)D=p.path,_=n.find(H=>H.re.test(D)),_&&(C=_.parse(D),x=_.record.name);else{if(_=m.name?r.get(m.name):n.find(H=>H.re.test(m.path)),!_)throw fs(1,{location:p,currentLocation:m});x=_.record.name,C=Re({},m.params,p.params),D=_.stringify(C)}const $=[];let B=_;for(;B;)$.unshift(B.record),B=B.parent;return{name:x,path:D,params:C,matched:$,meta:_T($)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function cf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function uf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:gT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function gT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function hf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function _T(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function ff(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function yT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;im(t,e[i])<0?r=i:n=i+1}const s=vT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function vT(t){let e=t;for(;e=e.parent;)if(om(e)&&im(t,e)===0)return e}function om({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ET(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Jp," "),a=i.indexOf("="),l=vi(a<0?i:i.slice(0,a)),c=a<0?null:vi(i.slice(a+1));if(l in e){let h=e[l];Xt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function df(t){let e="";for(let n in t){const r=t[n];if(n=jE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xt(r)?r.map(i=>i&&Hl(i)):[r&&Hl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function TT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Xt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const IT=Symbol(""),pf=Symbol(""),Pa=Symbol(""),Lc=Symbol(""),Wl=Symbol("");function qs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function zn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(fs(4,{from:n,to:e})):m instanceof Error?c(m):oT(m)?c(fs(2,{from:e,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function yl(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(Qp(c)){const f=(c.__vccOpts||c)[e];f&&i.push(zn(f,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=CE(f)?f.default:f;a.mods[l]=f,a.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&zn(_,n,r,a,l,s)()}))}}return i}function mf(t){const e=Jt(Pa),n=Jt(Lc),r=bt(()=>{const c=ot(t.to);return e.resolve(c)}),s=bt(()=>{const{matched:c}=r.value,{length:h}=c,f=c[h-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(hs.bind(null,f));if(m>-1)return m;const _=gf(c[h-2]);return h>1&&gf(f)===_&&p[p.length-1].path!==_?p.findIndex(hs.bind(null,c[h-2])):m}),i=bt(()=>s.value>-1&&RT(n.params,r.value.params)),a=bt(()=>s.value>-1&&s.value===n.matched.length-1&&tm(n.params,r.value.params));function l(c={}){if(ST(c)){const h=e[ot(t.replace)?"replace":"push"](ot(t.to)).catch(ii);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:bt(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function wT(t){return t.length===1?t[0]:t}const AT=Ep({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:mf,setup(t,{slots:e}){const n=Ea(mf(t)),{options:r}=Jt(Pa),s=bt(()=>({[_f(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_f(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&wT(e.default(n));return t.custom?i:zp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),bT=AT;function ST(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function RT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Xt(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function gf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _f=(t,e,n)=>t??e??n,PT=Ep({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Jt(Wl),s=bt(()=>t.route||r.value),i=Jt(pf,0),a=bt(()=>{let h=ot(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),l=bt(()=>s.value.matched[a.value]);yo(pf,bt(()=>a.value+1)),yo(IT,l),yo(Wl,s);const c=je();return vo(()=>[c.value,l.value,t.name],([h,f,p],[m,_,C])=>{f&&(f.instances[p]=h,_&&_!==f&&h&&h===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),h&&f&&(!_||!hs(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(D=>D(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return yf(n.default,{Component:m,route:h});const _=p.props[f],C=_?_===!0?h.params:typeof _=="function"?_(h):_:null,x=zp(m,Re({},C,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return yf(n.default,{Component:x,route:h})||x}}});function yf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const am=PT;function CT(t){const e=mT(t.routes,t),n=t.parseQuery||ET,r=t.stringifyQuery||df,s=t.history,i=qs(),a=qs(),l=qs(),c=Uy($n);let h=$n;Kr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=gl.bind(null,N=>""+N),p=gl.bind(null,$E),m=gl.bind(null,vi);function _(N,J){let Y,Z;return rm(N)?(Y=e.getRecordMatcher(N),Z=J):Z=N,e.addRoute(Z,Y)}function C(N){const J=e.getRecordMatcher(N);J&&e.removeRoute(J)}function D(){return e.getRoutes().map(N=>N.record)}function x(N){return!!e.getRecordMatcher(N)}function $(N,J){if(J=Re({},J||c.value),typeof N=="string"){const S=_l(n,N,J.path),O=e.resolve({path:S.path},J),F=s.createHref(S.fullPath);return Re(S,O,{params:m(O.params),hash:vi(S.hash),redirectedFrom:void 0,href:F})}let Y;if(N.path!=null)Y=Re({},N,{path:_l(n,N.path,J.path).path});else{const S=Re({},N.params);for(const O in S)S[O]==null&&delete S[O];Y=Re({},N,{params:p(S)}),J.params=p(J.params)}const Z=e.resolve(Y,J),Ae=N.hash||"";Z.params=f(m(Z.params));const y=WE(r,Re({},N,{hash:UE(Ae),path:Z.path})),E=s.createHref(y);return Re({fullPath:y,hash:Ae,query:r===df?TT(N.query):N.query||{}},Z,{redirectedFrom:void 0,href:E})}function B(N){return typeof N=="string"?_l(n,N,c.value.path):Re({},N)}function H(N,J){if(h!==N)return fs(8,{from:J,to:N})}function G(N){return w(N)}function de(N){return G(Re(B(N),{replace:!0}))}function ve(N){const J=N.matched[N.matched.length-1];if(J&&J.redirect){const{redirect:Y}=J;let Z=typeof Y=="function"?Y(N):Y;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=B(Z):{path:Z},Z.params={}),Re({query:N.query,hash:N.hash,params:Z.path!=null?{}:N.params},Z)}}function w(N,J){const Y=h=$(N),Z=c.value,Ae=N.state,y=N.force,E=N.replace===!0,S=ve(Y);if(S)return w(Re(B(S),{state:typeof S=="object"?Re({},Ae,S.state):Ae,force:y,replace:E}),J||Y);const O=Y;O.redirectedFrom=J;let F;return!y&&zE(r,Z,Y)&&(F=fs(16,{to:O,from:Z}),Mt(Z,Z,!0,!1)),(F?Promise.resolve(F):A(O,Z)).catch(M=>In(M)?In(M,2)?M:Wt(M):pe(M,O,Z)).then(M=>{if(M){if(In(M,2))return w(Re({replace:E},B(M.to),{state:typeof M.to=="object"?Re({},Ae,M.to.state):Ae,force:y}),J||O)}else M=R(O,Z,!0,E,Ae);return b(O,Z,M),M})}function v(N,J){const Y=H(N,J);return Y?Promise.reject(Y):Promise.resolve()}function I(N){const J=Ln.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(N):N()}function A(N,J){let Y;const[Z,Ae,y]=kT(N,J);Y=yl(Z.reverse(),"beforeRouteLeave",N,J);for(const S of Z)S.leaveGuards.forEach(O=>{Y.push(zn(O,N,J))});const E=v.bind(null,N,J);return Y.push(E),St(Y).then(()=>{Y=[];for(const S of i.list())Y.push(zn(S,N,J));return Y.push(E),St(Y)}).then(()=>{Y=yl(Ae,"beforeRouteUpdate",N,J);for(const S of Ae)S.updateGuards.forEach(O=>{Y.push(zn(O,N,J))});return Y.push(E),St(Y)}).then(()=>{Y=[];for(const S of y)if(S.beforeEnter)if(Xt(S.beforeEnter))for(const O of S.beforeEnter)Y.push(zn(O,N,J));else Y.push(zn(S.beforeEnter,N,J));return Y.push(E),St(Y)}).then(()=>(N.matched.forEach(S=>S.enterCallbacks={}),Y=yl(y,"beforeRouteEnter",N,J,I),Y.push(E),St(Y))).then(()=>{Y=[];for(const S of a.list())Y.push(zn(S,N,J));return Y.push(E),St(Y)}).catch(S=>In(S,8)?S:Promise.reject(S))}function b(N,J,Y){l.list().forEach(Z=>I(()=>Z(N,J,Y)))}function R(N,J,Y,Z,Ae){const y=H(N,J);if(y)return y;const E=J===$n,S=Kr?history.state:{};Y&&(Z||E?s.replace(N.fullPath,Re({scroll:E&&S&&S.scroll},Ae)):s.push(N.fullPath,Ae)),c.value=N,Mt(N,J,Y,E),Wt()}let T;function Et(){T||(T=s.listen((N,J,Y)=>{if(!en.listening)return;const Z=$(N),Ae=ve(Z);if(Ae){w(Re(Ae,{replace:!0,force:!0}),Z).catch(ii);return}h=Z;const y=c.value;Kr&&eT(rf(y.fullPath,Y.delta),Ra()),A(Z,y).catch(E=>In(E,12)?E:In(E,2)?(w(Re(B(E.to),{force:!0}),Z).then(S=>{In(S,20)&&!Y.delta&&Y.type===Ei.pop&&s.go(-1,!1)}).catch(ii),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),pe(E,Z,y))).then(E=>{E=E||R(Z,y,!1),E&&(Y.delta&&!In(E,8)?s.go(-Y.delta,!1):Y.type===Ei.pop&&In(E,20)&&s.go(-1,!1)),b(Z,y,E)}).catch(ii)}))}let xt=qs(),We=qs(),Ee;function pe(N,J,Y){Wt(N);const Z=We.list();return Z.length?Z.forEach(Ae=>Ae(N,J,Y)):console.error(N),Promise.reject(N)}function kt(){return Ee&&c.value!==$n?Promise.resolve():new Promise((N,J)=>{xt.add([N,J])})}function Wt(N){return Ee||(Ee=!N,Et(),xt.list().forEach(([J,Y])=>N?Y(N):J()),xt.reset()),N}function Mt(N,J,Y,Z){const{scrollBehavior:Ae}=t;if(!Kr||!Ae)return Promise.resolve();const y=!Y&&tT(rf(N.fullPath,0))||(Z||!Y)&&history.state&&history.state.scroll||null;return Pc().then(()=>Ae(N,J,y)).then(E=>E&&ZE(E)).catch(E=>pe(E,N,J))}const Fe=N=>s.go(N);let Ue;const Ln=new Set,en={currentRoute:c,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:D,resolve:$,options:t,push:G,replace:de,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:We.add,isReady:kt,install(N){const J=this;N.component("RouterLink",bT),N.component("RouterView",am),N.config.globalProperties.$router=J,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>ot(c)}),Kr&&!Ue&&c.value===$n&&(Ue=!0,G(s.location).catch(Ae=>{}));const Y={};for(const Ae in $n)Object.defineProperty(Y,Ae,{get:()=>c.value[Ae],enumerable:!0});N.provide(Pa,J),N.provide(Lc,hp(Y)),N.provide(Wl,c);const Z=N.unmount;Ln.add(N),N.unmount=function(){Ln.delete(N),Ln.size<1&&(h=$n,T&&T(),T=null,c.value=$n,Ue=!1,Ee=!1),Z()}}};function St(N){return N.reduce((J,Y)=>J.then(()=>I(Y)),Promise.resolve())}return en}function kT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(h=>hs(h,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(h=>hs(h,c))||s.push(c))}return[n,r,s]}function Fc(){return Jt(Pa)}function lm(t){return Jt(Lc)}const yn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},VT={class:"header-right desktop"},DT={key:0},NT={key:1},OT={key:2},xT={key:0,class:"header-right mobile"},MT={key:1},LT={key:2},FT={__name:"Header",setup(t){const e=Fc(),n=lm(),r=je(""),s=je(""),i=je(!1);Di(()=>{r.value=localStorage.getItem("username"),s.value=localStorage.getItem("userId")});const a=()=>{localStorage.removeItem("username"),localStorage.removeItem("userId"),localStorage.removeItem("token"),r.value="",e.push("/Login")};return(l,c)=>{const h=Vc("router-link");return ye(),we("header",null,[c[22]||(c[22]=V("div",{class:"header-left"},[V("img",{src:PE,alt:"#",class:"logo"})],-1)),V("div",VT,[V("ul",null,[c[12]||(c[12]=V("span",null,null,-1)),V("li",null,[Se(h,{to:"/",class:"link"},{default:wt(()=>c[7]||(c[7]=[Xe("首頁",-1)])),_:1,__:[7]})]),c[13]||(c[13]=V("span",null,null,-1)),V("li",null,[Se(h,{to:"/attraction",class:"link"},{default:wt(()=>c[8]||(c[8]=[Xe("景點介紹",-1)])),_:1,__:[8]})]),c[14]||(c[14]=V("span",null,null,-1)),V("li",null,[Se(h,{to:"/schedule",class:"link"},{default:wt(()=>c[9]||(c[9]=[Xe("行程規劃",-1)])),_:1,__:[9]})]),c[15]||(c[15]=V("span",null,null,-1)),r.value&&ot(n).name==="Member"?(ye(),we("li",DT,[Se(h,{to:"/",class:"link",onClick:a},{default:wt(()=>[Xe("登出("+Ct(r.value)+")",1)]),_:1})])):r.value?(ye(),we("li",OT,[Se(h,{to:"/member",class:"link"},{default:wt(()=>c[11]||(c[11]=[Xe("會員專區",-1)])),_:1,__:[11]})])):(ye(),we("li",NT,[Se(h,{to:"/login",class:"link"},{default:wt(()=>c[10]||(c[10]=[Xe("會員功能",-1)])),_:1,__:[10]})]))])]),i.value?(ye(),we("div",xT,[V("ul",null,[V("li",null,[Se(h,{to:"/",class:"link",onClick:c[0]||(c[0]=f=>i.value=!1)},{default:wt(()=>c[16]||(c[16]=[Xe("首頁",-1)])),_:1,__:[16]})]),V("li",null,[Se(h,{to:"/attraction",class:"link",onClick:c[1]||(c[1]=f=>i.value=!1)},{default:wt(()=>c[17]||(c[17]=[Xe("景點介紹",-1)])),_:1,__:[17]})]),V("li",null,[Se(h,{to:"/schedule",class:"link",onClick:c[2]||(c[2]=f=>i.value=!1)},{default:wt(()=>c[18]||(c[18]=[Xe("行程規劃",-1)])),_:1,__:[18]})]),r.value&&ot(n).name==="Member"?(ye(),we("li",{key:0,onClick:c[3]||(c[3]=f=>i.value=!1)},[Se(h,{to:"/",class:"link",onClick:a},{default:wt(()=>[Xe("登出("+Ct(r.value)+")",1)]),_:1})])):r.value?(ye(),we("li",LT,[Se(h,{to:"/member",class:"link",onClick:c[5]||(c[5]=f=>i.value=!1)},{default:wt(()=>c[20]||(c[20]=[Xe("會員專區",-1)])),_:1,__:[20]})])):(ye(),we("li",MT,[Se(h,{to:"/login",class:"link",onClick:c[4]||(c[4]=f=>i.value=!1)},{default:wt(()=>c[19]||(c[19]=[Xe("會員功能",-1)])),_:1,__:[19]})]))])])):jl("",!0),V("div",{class:"hamburger",onClick:c[6]||(c[6]=f=>i.value=!i.value)},c[21]||(c[21]=[V("span",null,null,-1),V("span",null,null,-1),V("span",null,null,-1)]))])}}},UT=yn(FT,[["__scopeId","data-v-dee8e10b"]]),jT={};function BT(t,e){return ye(),we("footer",null,e[0]||(e[0]=[Hp('<div class="footer-container" data-v-87b2b315><div class="footer-top" data-v-87b2b315><div class="follow" data-v-87b2b315><div data-v-87b2b315><p data-v-87b2b315>FOLLOW</p></div><div class="icon" data-v-87b2b315><a class="line" href="https://lin.ee/3I8FR3n" data-v-87b2b315><i class="fa-brands fa-line" data-v-87b2b315></i></a><a class="instagram" href="https://www.instagram.com" data-v-87b2b315><i class="fa-brands fa-square-instagram" data-v-87b2b315></i></a><a class="github" href="https://github.com/ok037352085" data-v-87b2b315><i class="fa-brands fa-square-github" data-v-87b2b315></i></a></div></div></div><div class="footer-middle" data-v-87b2b315><ul data-v-87b2b315><span data-v-87b2b315></span><li data-v-87b2b315>Home</li><span data-v-87b2b315></span><li data-v-87b2b315>News</li><span data-v-87b2b315></span><li data-v-87b2b315>About</li><span data-v-87b2b315></span><li data-v-87b2b315>Contact Us</li><span data-v-87b2b315></span><li data-v-87b2b315>Our Team</li><span data-v-87b2b315></span></ul></div><div class="footer-bottom" data-v-87b2b315><p data-v-87b2b315>1234567890</p></div></div>',1)]))}const $T=yn(jT,[["render",BT],["__scopeId","data-v-87b2b315"]]),HT={class:"layout"},qT={class:"content"},WT={__name:"App",setup(t){const e=je(!0);let n=0;const r=()=>{const s=window.scrollY;s>n&&s>50?e.value=!1:e.value=!0,n=s};return Di(()=>{window.addEventListener("scroll",r)}),wa(()=>{window.removeEventListener("scroll",r)}),(s,i)=>(ye(),we("div",HT,[Se(UT,{class:_a({hidden:!e.value})},null,8,["class"]),V("main",qT,[Se(ot(am))]),Se($T)]))}},zT=yn(WT,[["__scopeId","data-v-5bacf6a0"]]),KT="/PHPTravelWebSite/assets/beach01-B-yii-5K.jpg",GT="/PHPTravelWebSite/assets/beach02-CE2y-Ecp.jpg",QT="/PHPTravelWebSite/assets/beach03-CkHP5_j8.jpg",YT="/PHPTravelWebSite/assets/beach04-B8YAYnVr.jpg",JT="/PHPTravelWebSite/assets/grass01-BOgG3Noi.jpg",XT="/PHPTravelWebSite/assets/grass02-ew6kjxQP.jpg",ZT="/PHPTravelWebSite/assets/grass03-C36FTqm_.jpg",eI="/PHPTravelWebSite/assets/grass04-B5slsGXu.jpg",tI="/PHPTravelWebSite/assets/oldtown01-JqmUCRpK.jpg",nI="/PHPTravelWebSite/assets/oldtown02-DcKu_UhV.jpg",rI="/PHPTravelWebSite/assets/oldtown03-cBEQIhuv.jpg",sI="/PHPTravelWebSite/assets/oldtown04-CAgT2aRC.jpg",iI="/PHPTravelWebSite/assets/treebeach01-B0CjN4l-.jpg",oI="/PHPTravelWebSite/assets/treebeach02-CgyZcu1c.jpg",aI="/PHPTravelWebSite/assets/treebeach03-Dp2NzOVv.jpg",lI="/PHPTravelWebSite/assets/treebeach04-DNXsgPtq.jpg",cI={class:"container"},uI={id:"image-wheel"},hI={class:"carousel-slide"},fI=["src"],dI=["src"],pI={class:"carousel-slide"},mI=["src"],gI={__name:"Home",setup(t){const e=[KT,GT,QT,YT,JT,XT,ZT,eI,tI,nI,rI,sI,iI,oI,aI,lI],n=je(1),r=je(!0);let s=null;const i=()=>{r.value&&(n.value++,f())},a=()=>{r&&(n.value--,f())},l=()=>{n.value===e.length+1&&(r.value=!1,n.value=1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{r.value=!0})})),n.value===0&&(r.value=!1,n.value=e.length,requestAnimationFrame(()=>{requestAnimationFrame(()=>{r.value=!0})}))},c=()=>{s&&clearInterval(s),s=setInterval(i,3e3)},h=()=>{s&&(clearInterval(s),s=null)},f=()=>{h(),c()};return Di(()=>{c(),document.addEventListener("visibilitychange",()=>{document.hidden?h():c()})}),wa(()=>{h(),document.removeEventListener("visibilitychange",()=>{})}),(p,m)=>(ye(),we("div",cI,[m[0]||(m[0]=V("div",{class:"head"},null,-1)),m[1]||(m[1]=V("div",{class:"homepage-title"},[V("h1",null,"XXOO旅遊網站"),V("p",null,"~xxootravel~")],-1)),V("div",uI,[V("div",{class:"carousel-container",onMouseleave:c,onMouseenter:h},[V("div",{class:"carousel-track",style:ga({transform:`translateX(-${n.value*100}%)`,transition:r.value?"transform 0.8s ease-in-out":"none"}),onTransitionend:l},[V("div",hI,[V("img",{src:e[e.length-1],alt:"clone-last"},null,8,fI)]),(ye(),we(qe,null,cs(e,(_,C)=>V("div",{class:"carousel-slide",key:C},[V("img",{src:_,alt:"slide"},null,8,dI)])),64)),V("div",pI,[V("img",{src:e[0],alt:"clone-first"},null,8,mI)])],36),V("button",{class:"carousel-btn prev",onClick:a},"‹"),V("button",{class:"carousel-btn next",onClick:i},"›")],32)]),m[2]||(m[2]=Hp('<div class="info" data-v-c2abfcb0><div class="info-news" data-v-c2abfcb0><h1 data-v-c2abfcb0>最新消息</h1><ul data-v-c2abfcb0><li data-v-c2abfcb0><a href="https://news.ltn.com.tw/news/Miaoli/breakingnews/5147655" data-v-c2abfcb0>國道一號造橋交流道開工!</a></li><li data-v-c2abfcb0><a href="https://miaolitravel.net/Article.aspx?sNo=04008396" data-v-c2abfcb0>「夏趴一下」2025苗栗海洋觀光季搖滾之夜 星光閃耀通霄海水浴場</a></li><li data-v-c2abfcb0><a href="https://www.chinatimes.com/realtimenews/20250816002180-260421?chdtv" data-v-c2abfcb0>苗栗攜手觀光業者征戰新加坡旅展　山城秘境魅力行銷國際</a></li><li data-v-c2abfcb0><a href="https://news.ltn.com.tw/news/Miaoli/breakingnews/5140346" data-v-c2abfcb0>避免塞車！苗栗海洋觀光季16日登場 免費接駁、停車資訊一次看</a></li></ul></div></div>',1))]))}},_I=yn(gI,[["__scopeId","data-v-c2abfcb0"]]),Uc="/PHPTravelWebSite/assets/flower-fram-C9t2rLts.jpg",jc="/PHPTravelWebSite/assets/happyworld-DyKW58L7.jpg",Bc="/PHPTravelWebSite/assets/longteng-bridge-CrUJ9YVv.jpg",$c="/PHPTravelWebSite/assets/shengxing-station-BBnzk8b4.jpg",Hc="/PHPTravelWebSite/assets/sueweila-farm-BLWKSFHc.jpg",qc="/PHPTravelWebSite/assets/tongxiao-sand-CXY4Eq_F.jpg",qo=[{id:1,name:"沙雕藝術節",image:"tongxiao-sand.jpg",location:"苗栗縣通宵海水浴場",mapUrl:"https://maps.app.goo.gl/tfSJgkDsdWdGEkFU9",description:"2025苗栗通霄沙雕藝術節於7月12日至9月14日在通霄海水浴場登場，帶來巨型沙雕作品，還有沙雕體驗、美食市集、夜間光雕展演，目前為止已吸引超過30萬人朝聖。8月23日更將舉辦「2025逐浪季・魚你漫遊」，帶來DIY手作、桌遊互動體驗、薩克斯風演奏、舞蹈表演等免費活動。"},{id:2,name:"勝興車站",image:"shengxing-station.jpg",location:"367苗栗縣三義鄉83號",mapUrl:"https://maps.app.goo.gl/1Ny29ED1tphk2pMY6",description:"勝興車站位於苗栗縣三義鄉，是台灣西部縱貫鐵路的最高點，海拔402.326公尺。該車站於1907年啟用，至今已有百年以上的歷史，外觀保留著濃厚的日據時代風味，且整棟建築不使用釘子，展現出獨特的木造建築技術。勝興車站曾是重要的交通樞紐，雖然現在不再停靠莒光號和自強號列車，但仍然是旅遊的熱門景點，附近有許多自然景觀和文化景點可供遊客參觀。"},{id:3,name:"龍騰斷橋",image:"longteng-bridge.jpg",location:"367苗栗縣三義鄉",mapUrl:"https://maps.app.goo.gl/JrR73d52bcuEEkWC8",description:"魚籐坪斷橋 位於苗栗縣三義鄉龍騰村，又稱為 龍騰斷橋 或糯米橋，處於山線鐵路泰安火車站到勝興火車站之間，橋長約200尺跨越魚藤坪溪，和苗栗縣三義鄉 勝興車站 一樣建立於日據時代，以糯米砌磚、呈現每層磚頭寬度不一的特色，並有標示記號，橋面距地面有50公，是山線鐵路中最高的橋樑；龍騰斷橋因為在西元1935年歷經關刀山大地震，因此只剩下橋墩供遊客欣賞，雖然無法看到龍騰斷橋昔日的完整風貌，但遺留下來的橋墩也具有別種風情，成為龍騰斷橋的最大特色所在。"},{id:4,name:"花露農場",image:"flower-fram.jpg",location:"苗栗縣卓蘭鎮西坪里西坪43-3號",mapUrl:"https://maps.app.goo.gl/Y8kz3xWWnmEbP218A",description:"花露農場位於苗栗縣卓蘭鎮，是一個結合休閒農業與香草精油產業的農場。這裡有大片的薰衣草花田，每年吸引大量遊客前來賞花，特別是在每年的一到四月間。此外，農場內還設有香草能量花園和精油故事館，讓遊客能夠體驗香草的芬芳和了解精油的歷史與文化。農場的特色還包括四季主題花季，如蘭花館、薰衣草季、聖誕紅花季等，提供遊客多樣的賞花體驗。每年5至6月，農場的繡球花季吸引了眾多遊客，讓人流連忘返。"},{id:5,name:"尚順育樂世界",image:"happyworld.jpg",location:"351苗栗縣頭份市育樂街6-6號",mapUrl:"https://maps.app.goo.gl/zH71vNzCV2yDbz7R8",description:"尚順育樂世界位於苗栗縣頭份市，距離交流道僅五分鐘車程，是一個結合了遊樂園、購物中心和飯店的綜合娛樂空間。這裡擁有18項不同風格的遊樂設施，並且與尚順君樂飯店和尚順購物中心相連，方便遊客在雨天也能享受樂趣。"},{id:6,name:"蘇維拉莊園",image:"sueweila-farm.jpg",location:"353苗栗縣南庄鄉四灣15鄰92號",mapUrl:"https://maps.app.goo.gl/7wD9zprrJC1AyBjTA",description:"苗栗南庄鄉最佳戶外景點蘇維拉莊園介紹給你，不但門票便宜，更是暢遊小孩最愛的森林親子樂園，從溜滑梯、大恐龍再到沙坑通通有得玩，玩完如果覺得肚子餓也沒關係，這邊的餐廳有賣餐點跟飲料，吃飽還可以到景觀平台賞風景拍照，或是安排住宿露營車一晚都是不錯的選項。"}],yI={class:"container"},vI={class:"card-container"},EI=["onClick"],TI=["src","alt"],II={__name:"Attraction",setup(t){const e=Fc(),n=s=>{e.push(`/attraction/${s}`)},r=s=>new URL(Object.assign({"./assets/images/cardsImg/flower-fram.jpg":Uc,"./assets/images/cardsImg/happyworld.jpg":jc,"./assets/images/cardsImg/longteng-bridge.jpg":Bc,"./assets/images/cardsImg/shengxing-station.jpg":$c,"./assets/images/cardsImg/sueweila-farm.jpg":Hc,"./assets/images/cardsImg/tongxiao-sand.jpg":qc})[`./assets/images/cardsImg/${s}`],import.meta.url).href;return(s,i)=>(ye(),we(qe,null,[i[1]||(i[1]=V("div",{class:"head"},null,-1)),V("div",yI,[i[0]||(i[0]=V("div",{class:"title"},[V("h1",null,"景點介紹"),V("p",null,"---探索苗栗的自然與人文之美---")],-1)),V("div",vI,[(ye(!0),we(qe,null,cs(ot(qo),a=>(ye(),we("div",{class:"card",key:a.id,onClick:l=>n(a.id)},[V("img",{src:r(a.image),alt:a.name},null,8,TI),V("h2",null,Ct(a.name),1)],8,EI))),128))])])],64))}},wI=yn(II,[["__scopeId","data-v-1c0615bb"]]),AI={key:0,class:"container"},bI={class:"img"},SI=["src","alt"],RI={class:"attraction-content"},PI={class:"location-text"},CI=["href"],kI={key:1},VI={__name:"AttractionDetail",setup(t){const e=lm(),n=qo.find(i=>i.id===Number(e.params.id)),r=bt(()=>n?new URL(Object.assign({"./assets/images/cardsImg/flower-fram.jpg":Uc,"./assets/images/cardsImg/happyworld.jpg":jc,"./assets/images/cardsImg/longteng-bridge.jpg":Bc,"./assets/images/cardsImg/shengxing-station.jpg":$c,"./assets/images/cardsImg/sueweila-farm.jpg":Hc,"./assets/images/cardsImg/tongxiao-sand.jpg":qc})[`./assets/images/cardsImg/${n.image}`],import.meta.url).href:""),s=()=>{window.history.back()};return(i,a)=>(ye(),we(qe,null,[a[5]||(a[5]=V("div",{class:"head"},null,-1)),ot(n)?(ye(),we("div",AI,[V("div",{class:"previous",onClick:s},a[0]||(a[0]=[V("i",{class:"fa-solid fa-angle-left"},null,-1),V("p",null,"回上一頁",-1)])),V("h1",null,Ct(ot(n).name),1),V("div",bI,[V("img",{src:r.value,alt:ot(n).name},null,8,SI)]),V("div",RI,[a[2]||(a[2]=V("h2",null,"地點：",-1)),V("p",PI,[V("a",{href:ot(n).mapUrl,target:"_blank"},Ct(ot(n).location),9,CI),a[1]||(a[1]=V("i",{class:"fa-solid fa-location-dot"},null,-1))]),a[3]||(a[3]=V("h2",null,"簡介：",-1)),V("p",null,Ct(ot(n).description),1)])])):(ye(),we("div",kI,a[4]||(a[4]=[V("p",null,"找不到該景點資料",-1)])))],64))}},DI=yn(VI,[["__scopeId","data-v-a883fa80"]]),NI=()=>{};var vf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},OI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},um={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,_=h&63;c||(_=64,a||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new xI;const m=i<<2|l>>4;if(r.push(m),h!==64){const _=l<<4&240|h>>2;if(r.push(_),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MI=function(t){const e=cm(t);return um.encodeByteArray(e,!0)},Wo=function(t){return MI(t).replace(/\./g,"")},hm=function(t){try{return um.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=()=>LI().__FIREBASE_DEFAULTS__,UI=()=>{if(typeof process>"u"||typeof vf>"u")return;const t=vf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hm(t[1]);return e&&JSON.parse(e)},Ca=()=>{try{return NI()||FI()||UI()||jI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fm=t=>Ca()?.emulatorHosts?.[t],BI=t=>{const e=fm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dm=()=>Ca()?.config,pm=t=>Ca()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mm(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Wo(JSON.stringify(n)),Wo(JSON.stringify(a)),""].join(".")}const ai={};function qI(){const t={prod:[],emulator:[]};for(const e of Object.keys(ai))ai[e]?t.emulator.push(e):t.prod.push(e);return t}function WI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ef=!1;function gm(t,e){if(typeof window>"u"||typeof document>"u"||!Ts(window.location.host)||ai[t]===e||ai[t]||Ef)return;ai[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=qI().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Ef=!0,a()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=WI(r),_=n("text"),C=document.getElementById(_)||document.createElement("span"),D=n("learnmore"),x=document.getElementById(D)||document.createElement("a"),$=n("preprendIcon"),B=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const H=m.element;l(H),f(x,D);const G=h();c(B,$),H.append(B,C,x,G),document.body.appendChild(H)}i?(C.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function KI(){const t=Ca()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function YI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JI(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XI(){return!KI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ZI(){try{return typeof indexedDB=="object"}catch{return!1}}function ew(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tw,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oi.prototype.create)}}class Oi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?nw(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Mn(s,l,r)}}function nw(t,e){return t.replace(rw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const rw=/\{\$([^}]+)}/g;function sw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Tf(i)&&Tf(a)){if(!Pr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Tf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function iw(t,e){const n=new ow(t,e);return n.subscribe.bind(n)}class ow{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=vl),s.error===void 0&&(s.error=vl),s.complete===void 0&&(s.complete=vl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t){return t&&t._delegate?t._delegate:t}class Cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $I;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uw(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cw(t){return t===wr?void 0:t}function uw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const fw={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},dw=me.INFO,pw={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},mw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=pw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wc{constructor(e){this.name=e,this._logLevel=dw,this._logHandler=mw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const gw=(t,e)=>e.some(n=>t instanceof n);let If,wf;function _w(){return If||(If=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yw(){return wf||(wf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _m=new WeakMap,zl=new WeakMap,ym=new WeakMap,El=new WeakMap,zc=new WeakMap;function vw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(er(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&_m.set(n,t)}).catch(()=>{}),zc.set(e,t),e}function Ew(t){if(zl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});zl.set(t,e)}let Kl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ym.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Tw(t){Kl=t(Kl)}function Iw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tl(this),e,...n);return ym.set(r,e.sort?e.sort():[e]),er(r)}:yw().includes(t)?function(...e){return t.apply(Tl(this),e),er(_m.get(this))}:function(...e){return er(t.apply(Tl(this),e))}}function ww(t){return typeof t=="function"?Iw(t):(t instanceof IDBTransaction&&Ew(t),gw(t,_w())?new Proxy(t,Kl):t)}function er(t){if(t instanceof IDBRequest)return vw(t);if(El.has(t))return El.get(t);const e=ww(t);return e!==t&&(El.set(t,e),zc.set(e,t)),e}const Tl=t=>zc.get(t);function Aw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=er(a);return r&&a.addEventListener("upgradeneeded",c=>{r(er(a.result),c.oldVersion,c.newVersion,er(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const bw=["get","getKey","getAll","getAllKeys","count"],Sw=["put","add","delete","clear"],Il=new Map;function Af(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Il.get(e))return Il.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Sw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bw.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Il.set(e,i),i}Tw(t=>({...t,get:(e,n,r)=>Af(e,n)||t.get(e,n,r),has:(e,n)=>!!Af(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Pw(t){return t.getComponent()?.type==="VERSION"}const Gl="@firebase/app",bf="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Wc("@firebase/app"),Cw="@firebase/app-compat",kw="@firebase/analytics-compat",Vw="@firebase/analytics",Dw="@firebase/app-check-compat",Nw="@firebase/app-check",Ow="@firebase/auth",xw="@firebase/auth-compat",Mw="@firebase/database",Lw="@firebase/data-connect",Fw="@firebase/database-compat",Uw="@firebase/functions",jw="@firebase/functions-compat",Bw="@firebase/installations",$w="@firebase/installations-compat",Hw="@firebase/messaging",qw="@firebase/messaging-compat",Ww="@firebase/performance",zw="@firebase/performance-compat",Kw="@firebase/remote-config",Gw="@firebase/remote-config-compat",Qw="@firebase/storage",Yw="@firebase/storage-compat",Jw="@firebase/firestore",Xw="@firebase/ai",Zw="@firebase/firestore-compat",eA="firebase",tA="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="[DEFAULT]",nA={[Gl]:"fire-core",[Cw]:"fire-core-compat",[Vw]:"fire-analytics",[kw]:"fire-analytics-compat",[Nw]:"fire-app-check",[Dw]:"fire-app-check-compat",[Ow]:"fire-auth",[xw]:"fire-auth-compat",[Mw]:"fire-rtdb",[Lw]:"fire-data-connect",[Fw]:"fire-rtdb-compat",[Uw]:"fire-fn",[jw]:"fire-fn-compat",[Bw]:"fire-iid",[$w]:"fire-iid-compat",[Hw]:"fire-fcm",[qw]:"fire-fcm-compat",[Ww]:"fire-perf",[zw]:"fire-perf-compat",[Kw]:"fire-rc",[Gw]:"fire-rc-compat",[Qw]:"fire-gcs",[Yw]:"fire-gcs-compat",[Jw]:"fire-fst",[Zw]:"fire-fst-compat",[Xw]:"fire-vertex","fire-js":"fire-js",[eA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Map,rA=new Map,Yl=new Map;function Sf(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ds(t){const e=t.name;if(Yl.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;Yl.set(e,t);for(const n of zo.values())Sf(n,t);for(const n of rA.values())Sf(n,t);return!0}function Kc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ut(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new Oi("app","Firebase",sA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=tA;function vm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ql,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw tr.create("bad-app-name",{appName:String(s)});if(n||(n=dm()),!n)throw tr.create("no-options");const i=zo.get(s);if(i){if(Pr(n,i.options)&&Pr(r,i.config))return i;throw tr.create("duplicate-app",{appName:s})}const a=new hw(s);for(const c of Yl.values())a.addComponent(c);const l=new iA(n,r,a);return zo.set(s,l),l}function Em(t=Ql){const e=zo.get(t);if(!e&&t===Ql&&dm())return vm();if(!e)throw tr.create("no-app",{appName:t});return e}function nr(t,e,n){let r=nA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(a.join(" "));return}ds(new Cr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA="firebase-heartbeat-database",aA=1,Ti="firebase-heartbeat-store";let wl=null;function Tm(){return wl||(wl=Aw(oA,aA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ti)}catch(n){console.warn(n)}}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),wl}async function lA(t){try{const n=(await Tm()).transaction(Ti),r=await n.objectStore(Ti).get(Im(t));return await n.done,r}catch(e){if(e instanceof Mn)Vn.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e?.message});Vn.warn(n.message)}}}async function Rf(t,e){try{const r=(await Tm()).transaction(Ti,"readwrite");await r.objectStore(Ti).put(e,Im(t)),await r.done}catch(n){if(n instanceof Mn)Vn.warn(n.message);else{const r=tr.create("idb-set",{originalErrorMessage:n?.message});Vn.warn(r.message)}}}function Im(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=1024,uA=30;class hA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Pf();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>uA){const s=pA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Vn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Pf(),{heartbeatsToSend:n,unsentEntries:r}=fA(this._heartbeatsCache.heartbeats),s=Wo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Vn.warn(e),""}}}function Pf(){return new Date().toISOString().substring(0,10)}function fA(t,e=cA){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Cf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Cf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ZI()?ew().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lA(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Rf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Rf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Cf(t){return Wo(JSON.stringify({version:2,heartbeats:t})).length}function pA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t){ds(new Cr("platform-logger",e=>new Rw(e),"PRIVATE")),ds(new Cr("heartbeat",e=>new hA(e),"PRIVATE")),nr(Gl,bf,t),nr(Gl,bf,"esm2020"),nr("fire-js","")}mA("");var gA="firebase",_A="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr(gA,_A,"app");function wm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yA=wm,Am=new Oi("auth","Firebase",wm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new Wc("@firebase/auth");function vA(t,...e){Ko.logLevel<=me.WARN&&Ko.warn(`Auth (${Is}): ${t}`,...e)}function wo(t,...e){Ko.logLevel<=me.ERROR&&Ko.error(`Auth (${Is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,...e){throw Gc(t,...e)}function an(t,...e){return Gc(t,...e)}function bm(t,e,n){const r={...yA(),[e]:n};return new Oi("auth","Firebase",r).create(e,{appName:t.name})}function Pn(t){return bm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Am.create(t,...e)}function ie(t,e,...n){if(!t)throw Gc(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wo(e),new Error(e)}function Dn(t,e){t||Sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(){return typeof self<"u"&&self.location?.href||""}function EA(){return kf()==="http:"||kf()==="https:"}function kf(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EA()||QI()||"connection"in navigator)?navigator.onLine:!0}function IA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=zI()||YI()}get(){return TA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bA=new Mi(3e4,6e4);function pr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function mr(t,e,n,r,s={}){return Rm(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=xi({key:t.config.apiKey,...a}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:c,...i};return GI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Ts(t.emulatorConfig.host)&&(h.credentials="include"),Sm.fetch()(await Pm(t,t.config.apiHost,n,l),h)})}async function Rm(t,e,n){t._canInitEmulator=!1;const r={...wA,...e};try{const s=new RA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw uo(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw uo(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw uo(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw uo(t,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw bm(t,f,h);Zt(t,f)}}catch(s){if(s instanceof Mn)throw s;Zt(t,"network-request-failed",{message:String(s)})}}async function Li(t,e,n,r,s={}){const i=await mr(t,e,n,r,s);return"mfaPendingCredential"in i&&Zt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Pm(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?Qc(t.config,s):`${t.config.apiScheme}://${s}`;return AA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function SA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class RA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),bA.get())})}}function uo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}function Vf(t){return t!==void 0&&t.enterprise!==void 0}class PA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return SA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function CA(t,e){return mr(t,"GET","/v2/recaptchaConfig",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kA(t,e){return mr(t,"POST","/v1/accounts:delete",e)}async function Go(t,e){return mr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VA(t,e=!1){const n=qt(t),r=await n.getIdToken(e),s=Yc(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:li(Al(s.auth_time)),issuedAtTime:li(Al(s.iat)),expirationTime:li(Al(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Al(t){return Number(t)*1e3}function Yc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wo("JWT malformed, contained fewer than 3 sections"),null;try{const s=hm(n);return s?JSON.parse(s):(wo("Failed to decode base64 JWT payload"),null)}catch(s){return wo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Df(t){const e=Yc(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&DA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=li(this.lastLoginAt),this.creationTime=li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(t){const e=t.auth,n=await t.getIdToken(),r=await Ii(t,Go(e,{idToken:n}));ie(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?Cm(s.providerUserInfo):[],a=xA(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!a?.length,h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Xl(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function OA(t){const e=qt(t);await Qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Cm(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MA(t,e){const n=await Rm(t,{},async()=>{const r=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await Pm(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ts(t.emulatorConfig.host)&&(c.credentials="include"),Sm.fetch()(a,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function LA(t,e){return mr(t,"POST","/v2/accounts:revokeToken",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Df(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=Df(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await MA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new is;return r&&(ie(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new NA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ii(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VA(this,e)}reload(){return OA(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await Ii(this,kA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:C,stsTokenManager:D}=n;ie(p&&D,e,"internal-error");const x=is.fromJSON(this.name,D);ie(typeof p=="string",e,"internal-error"),Hn(r,e.name),Hn(s,e.name),ie(typeof m=="boolean",e,"internal-error"),ie(typeof _=="boolean",e,"internal-error"),Hn(i,e.name),Hn(a,e.name),Hn(l,e.name),Hn(c,e.name),Hn(h,e.name),Hn(f,e.name);const $=new Gt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:x,createdAt:h,lastLoginAt:f});return C&&Array.isArray(C)&&($.providerData=C.map(B=>({...B}))),c&&($._redirectEventId=c),$}static async _fromIdTokenResponse(e,n,r=!1){const s=new is;s.updateFromServerResponse(n);const i=new Gt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Qo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Cm(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,l=new is;l.updateFromIdToken(r);const c=new Gt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=new Map;function Rn(t){Dn(t instanceof Function,"Expected a class definition");let e=Nf.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}km.type="NONE";const Of=km;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ao(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ao("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Go(this.auth,{idToken:e}).catch(()=>{});return n?Gt._fromGetAccountInfoResponse(this.auth,n,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(Rn(Of),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Rn(Of);const a=Ao(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const m=await Go(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Gt._fromGetAccountInfoResponse(e,m,f)}else p=Gt._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new os(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new os(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Om(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mm(e))return"Blackberry";if(Lm(e))return"Webos";if(Dm(e))return"Safari";if((e.includes("chrome/")||Nm(e))&&!e.includes("edge/"))return"Chrome";if(xm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Vm(t=vt()){return/firefox\//i.test(t)}function Dm(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nm(t=vt()){return/crios\//i.test(t)}function Om(t=vt()){return/iemobile/i.test(t)}function xm(t=vt()){return/android/i.test(t)}function Mm(t=vt()){return/blackberry/i.test(t)}function Lm(t=vt()){return/webos/i.test(t)}function Jc(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function FA(t=vt()){return Jc(t)&&!!window.navigator?.standalone}function UA(){return JI()&&document.documentMode===10}function Fm(t=vt()){return Jc(t)||xm(t)||Lm(t)||Mm(t)||/windows phone/i.test(t)||Om(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t,e=[]){let n;switch(t){case"Browser":n=xf(vt());break;case"Worker":n=`${xf(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(t,e={}){return mr(t,"GET","/v2/passwordPolicy",pr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=6;class HA{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??$A,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mf(this),this.idTokenSubscription=new Mf(this),this.beforeStateQueue=new jA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Am,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await os.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Go(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ut(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qo(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(Pn(this));const n=e?qt(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BA(this),n=new HA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Oi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await LA(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Um(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&vA(`Error while retrieving App Check token: ${e.error}`),e?.token}}function xr(t){return qt(t)}class Mf{constructor(e){this.auth=e,this.observer=null,this.addObserver=iw(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WA(t){ka=t}function jm(t){return ka.loadJS(t)}function zA(){return ka.recaptchaEnterpriseScript}function KA(){return ka.gapiScript}function GA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class QA{constructor(){this.enterprise=new YA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class YA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const JA="recaptcha-enterprise",Bm="NO_RECAPTCHA";class XA{constructor(e){this.type=JA,this.auth=xr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{CA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new PA(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,a,l){const c=window.grecaptcha;Vf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(Bm)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new QA().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!n&&Vf(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=zA();c.length!==0&&(c+=l),jm(c).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function Lf(t,e,n,r=!1,s=!1){const i=new XA(t);let a;if(s)a=Bm;else try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Zl(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Lf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Lf(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t,e){const n=Kc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Pr(i,e??{}))return s;Zt(s,"already-initialized")}return n.initialize({options:e})}function eb(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Rn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function tb(t,e,n){const r=xr(t);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=$m(e),{host:a,port:l}=nb(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(Pr(h,r.config.emulator)&&Pr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ts(a)?(mm(`${i}//${a}${c}`),gm("Auth",!0)):rb()}function $m(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nb(t){const e=$m(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ff(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Ff(a)}}}function Ff(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}async function sb(t,e){return mr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ib(t,e){return Li(t,"POST","/v1/accounts:signInWithPassword",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ob(t,e){return Li(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}async function ab(t,e){return Li(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Xc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new wi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new wi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zl(e,n,"signInWithPassword",ib);case"emailLink":return ob(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zl(e,r,"signUpPassword",sb);case"emailLink":return ab(e,{idToken:n,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e){return Li(t,"POST","/v1/accounts:signInWithIdp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="http://localhost";class kr extends Xc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const a=new kr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:lb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ub(t){const e=zs(Ks(t)).link,n=e?zs(Ks(e)).deep_link_id:null,r=zs(Ks(t)).deep_link_id;return(r?zs(Ks(r)).link:null)||r||n||e||t}class Zc{constructor(e){const n=zs(Ks(e)),r=n.apiKey??null,s=n.oobCode??null,i=cb(n.mode??null);ie(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=ub(e);try{return new Zc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.providerId=ws.PROVIDER_ID}static credential(e,n){return wi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zc.parseLink(n);return ie(r,"argument-error"),wi._fromEmailAndCode(e,r.code,r.tenantId)}}ws.PROVIDER_ID="password";ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends Hm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Fi{constructor(){super("facebook.com")}static credential(e){return kr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Fi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Fi{constructor(){super("github.com")}static credential(e){return kr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Fi{constructor(){super("twitter.com")}static credential(e,n){return kr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hb(t,e){return Li(t,"POST","/v1/accounts:signUp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Gt._fromIdTokenResponse(e,r,s),a=Uf(r);return new Vr({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Uf(r);return new Vr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Uf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends Mn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Yo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Yo(e,n,r,s)}}function qm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yo._fromErrorAndOperation(t,i,e,r):i})}async function fb(t,e,n=!1){const r=await Ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function db(t,e,n=!1){const{auth:r}=t;if(Ut(r.app))return Promise.reject(Pn(r));const s="reauthenticate";try{const i=await Ii(t,qm(r,s,e,t),n);ie(i.idToken,r,"internal-error");const a=Yc(i.idToken);ie(a,r,"internal-error");const{sub:l}=a;return ie(t.uid===l,r,"user-mismatch"),Vr._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Zt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wm(t,e,n=!1){if(Ut(t.app))return Promise.reject(Pn(t));const r="signIn",s=await qm(t,r,e),i=await Vr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function pb(t,e){return Wm(xr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zm(t){const e=xr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function mb(t,e,n){if(Ut(t.app))return Promise.reject(Pn(t));const r=xr(t),a=await Zl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hb).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&zm(t),c}),l=await Vr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function gb(t,e,n){return Ut(t.app)?Promise.reject(Pn(t)):pb(qt(t),ws.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zm(t),r})}function _b(t,e,n,r){return qt(t).onIdTokenChanged(e,n,r)}function yb(t,e,n){return qt(t).beforeAuthStateChanged(e,n)}const Jo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jo,"1"),this.storage.removeItem(Jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=1e3,Eb=10;class Gm extends Km{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);UA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Eb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gm.type="LOCAL";const Tb=Gm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm extends Km{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qm.type="SESSION";const Ym=Qm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await Ib(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Va.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=eu("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function Ab(t){ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function bb(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sb(){return navigator?.serviceWorker?.controller||null}function Rb(){return Jm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="firebaseLocalStorageDb",Pb=1,Xo="firebaseLocalStorage",Zm="fbase_key";class Ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Da(t,e){return t.transaction([Xo],e?"readwrite":"readonly").objectStore(Xo)}function Cb(){const t=indexedDB.deleteDatabase(Xm);return new Ui(t).toPromise()}function ec(){const t=indexedDB.open(Xm,Pb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xo,{keyPath:Zm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xo)?e(r):(r.close(),await Cb(),e(await ec()))})})}async function jf(t,e,n){const r=Da(t,!0).put({[Zm]:e,value:n});return new Ui(r).toPromise()}async function kb(t,e){const n=Da(t,!1).get(e),r=await new Ui(n).toPromise();return r===void 0?null:r.value}function Bf(t,e){const n=Da(t,!0).delete(e);return new Ui(n).toPromise()}const Vb=800,Db=3;class eg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ec(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Db)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Va._getInstance(Rb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await bb(),!this.activeServiceWorker)return;this.sender=new wb(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ec();return await jf(e,Jo,"1"),await Bf(e,Jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Da(s,!1).getAll();return new Ui(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eg.type="LOCAL";const Nb=eg;new Mi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(t,e){return e?Rn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends Xc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xb(t){return Wm(t.auth,new tu(t),t.bypassAuthState)}function Mb(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),db(n,new tu(t),t.bypassAuthState)}async function Lb(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),fb(n,new tu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xb;case"linkViaPopup":case"linkViaRedirect":return Lb;case"reauthViaPopup":case"reauthViaRedirect":return Mb;default:Zt(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=new Mi(2e3,1e4);class Xr extends tg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Fb.get())};e()}}Xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="pendingRedirect",bo=new Map;class jb extends tg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bo.get(this.auth._key());if(!e){try{const r=await Bb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bo.set(this.auth._key(),e)}return this.bypassAuthState||bo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bb(t,e){const n=qb(e),r=Hb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $b(t,e){bo.set(t._key(),e)}function Hb(t){return Rn(t._redirectPersistence)}function qb(t){return Ao(Ub,t.config.apiKey,t.name)}async function Wb(t,e,n=!1){if(Ut(t.app))return Promise.reject(Pn(t));const r=xr(t),s=Ob(r,e),a=await new jb(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=600*1e3;class Kb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!ng(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(an(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zb&&this.cachedEventUids.clear(),this.cachedEventUids.has($f(e))}saveEventToCache(e){this.cachedEventUids.add($f(e)),this.lastProcessedEventTime=Date.now()}}function $f(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ng({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Gb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ng(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qb(t,e={}){return mr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jb=/^https?/;async function Xb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qb(t);for(const n of e)try{if(Zb(n))return}catch{}Zt(t,"unauthorized-domain")}function Zb(t){const e=Jl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Jb.test(n))return!1;if(Yb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=new Mi(3e4,6e4);function Hf(){const t=ln().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tS(t){return new Promise((e,n)=>{function r(){Hf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hf(),n(an(t,"network-request-failed"))},timeout:eS.get()})}if(ln().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ln().gapi?.load)r();else{const s=GA("iframefcb");return ln()[s]=()=>{gapi.load?r():n(an(t,"network-request-failed"))},jm(`${KA()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw So=null,e})}let So=null;function nS(t){return So=So||tS(t),So}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=new Mi(5e3,15e3),sS="__/auth/iframe",iS="emulator/auth/iframe",oS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lS(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qc(e,iS):`https://${t.config.authDomain}/${sS}`,r={apiKey:e.apiKey,appName:t.name,v:Is},s=aS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xi(r).slice(1)}`}async function cS(t){const e=await nS(t),n=ln().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:lS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=an(t,"network-request-failed"),l=ln().setTimeout(()=>{i(a)},rS.get());function c(){ln().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hS=500,fS=600,dS="_blank",pS="http://localhost";class qf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mS(t,e,n,r=hS,s=fS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...uS,width:r.toString(),height:s.toString(),top:i,left:a},h=vt().toLowerCase();n&&(l=Nm(h)?dS:n),Vm(h)&&(e=e||pS,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[_,C])=>`${m}${_}=${C},`,"");if(FA(h)&&l!=="_self")return gS(e||"",l),new qf(null);const p=window.open(e||"",l,f);ie(p,t,"popup-blocked");try{p.focus()}catch{}return new qf(p)}function gS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="__/auth/handler",yS="emulator/auth/handler",vS=encodeURIComponent("fac");async function Wf(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Is,eventId:s};if(e instanceof Hm){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",sw(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Fi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${vS}=${encodeURIComponent(c)}`:"";return`${ES(t)}?${xi(l).slice(1)}${h}`}function ES({config:t}){return t.emulator?Qc(t,yS):`https://${t.authDomain}/${_S}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="webStorageSupport";class TS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ym,this._completeRedirectFn=Wb,this._overrideRedirectResult=$b}async _openPopup(e,n,r,s){Dn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Wf(e,n,r,Jl(),s);return mS(e,i,eu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Wf(e,n,r,Jl(),s);return Ab(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cS(e),r=new Kb(e);return n.register("authEvent",s=>(ie(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bl,{type:bl},s=>{const i=s?.[0]?.[bl];i!==void 0&&n(!!i),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Xb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fm()||Dm()||Jc()}}const IS=TS;var zf="@firebase/auth",Kf="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bS(t){ds(new Cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ie(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Um(t)},h=new qA(r,s,i,c);return eb(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ds(new Cr("auth-internal",e=>{const n=xr(e.getProvider("auth").getImmediate());return(r=>new wS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nr(zf,Kf,AS(t)),nr(zf,Kf,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=300,RS=pm("authIdTokenMaxAge")||SS;let Gf=null;const PS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RS)return;const s=n?.token;Gf!==s&&(Gf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function CS(t=Em()){const e=Kc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZA(t,{popupRedirectResolver:IS,persistence:[Nb,Tb,Ym]}),r=pm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=PS(i.toString());yb(n,a,()=>a(n.currentUser)),_b(n,l=>a(l))}}const s=fm("auth");return s&&tb(n,`http://${s}`),n}function kS(){return document.getElementsByTagName("head")?.[0]??document}WA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",kS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bS("Browser");var Qf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rr,rg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function I(){}I.prototype=v.prototype,w.D=v.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(A,b,R){for(var T=Array(arguments.length-2),Et=2;Et<arguments.length;Et++)T[Et-2]=arguments[Et];return v.prototype[b].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,v,I){I||(I=0);var A=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)A[b]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(b=0;16>b;++b)A[b]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=w.g[0],I=w.g[1],b=w.g[2];var R=w.g[3],T=v+(R^I&(b^R))+A[0]+3614090360&4294967295;v=I+(T<<7&4294967295|T>>>25),T=R+(b^v&(I^b))+A[1]+3905402710&4294967295,R=v+(T<<12&4294967295|T>>>20),T=b+(I^R&(v^I))+A[2]+606105819&4294967295,b=R+(T<<17&4294967295|T>>>15),T=I+(v^b&(R^v))+A[3]+3250441966&4294967295,I=b+(T<<22&4294967295|T>>>10),T=v+(R^I&(b^R))+A[4]+4118548399&4294967295,v=I+(T<<7&4294967295|T>>>25),T=R+(b^v&(I^b))+A[5]+1200080426&4294967295,R=v+(T<<12&4294967295|T>>>20),T=b+(I^R&(v^I))+A[6]+2821735955&4294967295,b=R+(T<<17&4294967295|T>>>15),T=I+(v^b&(R^v))+A[7]+4249261313&4294967295,I=b+(T<<22&4294967295|T>>>10),T=v+(R^I&(b^R))+A[8]+1770035416&4294967295,v=I+(T<<7&4294967295|T>>>25),T=R+(b^v&(I^b))+A[9]+2336552879&4294967295,R=v+(T<<12&4294967295|T>>>20),T=b+(I^R&(v^I))+A[10]+4294925233&4294967295,b=R+(T<<17&4294967295|T>>>15),T=I+(v^b&(R^v))+A[11]+2304563134&4294967295,I=b+(T<<22&4294967295|T>>>10),T=v+(R^I&(b^R))+A[12]+1804603682&4294967295,v=I+(T<<7&4294967295|T>>>25),T=R+(b^v&(I^b))+A[13]+4254626195&4294967295,R=v+(T<<12&4294967295|T>>>20),T=b+(I^R&(v^I))+A[14]+2792965006&4294967295,b=R+(T<<17&4294967295|T>>>15),T=I+(v^b&(R^v))+A[15]+1236535329&4294967295,I=b+(T<<22&4294967295|T>>>10),T=v+(b^R&(I^b))+A[1]+4129170786&4294967295,v=I+(T<<5&4294967295|T>>>27),T=R+(I^b&(v^I))+A[6]+3225465664&4294967295,R=v+(T<<9&4294967295|T>>>23),T=b+(v^I&(R^v))+A[11]+643717713&4294967295,b=R+(T<<14&4294967295|T>>>18),T=I+(R^v&(b^R))+A[0]+3921069994&4294967295,I=b+(T<<20&4294967295|T>>>12),T=v+(b^R&(I^b))+A[5]+3593408605&4294967295,v=I+(T<<5&4294967295|T>>>27),T=R+(I^b&(v^I))+A[10]+38016083&4294967295,R=v+(T<<9&4294967295|T>>>23),T=b+(v^I&(R^v))+A[15]+3634488961&4294967295,b=R+(T<<14&4294967295|T>>>18),T=I+(R^v&(b^R))+A[4]+3889429448&4294967295,I=b+(T<<20&4294967295|T>>>12),T=v+(b^R&(I^b))+A[9]+568446438&4294967295,v=I+(T<<5&4294967295|T>>>27),T=R+(I^b&(v^I))+A[14]+3275163606&4294967295,R=v+(T<<9&4294967295|T>>>23),T=b+(v^I&(R^v))+A[3]+4107603335&4294967295,b=R+(T<<14&4294967295|T>>>18),T=I+(R^v&(b^R))+A[8]+1163531501&4294967295,I=b+(T<<20&4294967295|T>>>12),T=v+(b^R&(I^b))+A[13]+2850285829&4294967295,v=I+(T<<5&4294967295|T>>>27),T=R+(I^b&(v^I))+A[2]+4243563512&4294967295,R=v+(T<<9&4294967295|T>>>23),T=b+(v^I&(R^v))+A[7]+1735328473&4294967295,b=R+(T<<14&4294967295|T>>>18),T=I+(R^v&(b^R))+A[12]+2368359562&4294967295,I=b+(T<<20&4294967295|T>>>12),T=v+(I^b^R)+A[5]+4294588738&4294967295,v=I+(T<<4&4294967295|T>>>28),T=R+(v^I^b)+A[8]+2272392833&4294967295,R=v+(T<<11&4294967295|T>>>21),T=b+(R^v^I)+A[11]+1839030562&4294967295,b=R+(T<<16&4294967295|T>>>16),T=I+(b^R^v)+A[14]+4259657740&4294967295,I=b+(T<<23&4294967295|T>>>9),T=v+(I^b^R)+A[1]+2763975236&4294967295,v=I+(T<<4&4294967295|T>>>28),T=R+(v^I^b)+A[4]+1272893353&4294967295,R=v+(T<<11&4294967295|T>>>21),T=b+(R^v^I)+A[7]+4139469664&4294967295,b=R+(T<<16&4294967295|T>>>16),T=I+(b^R^v)+A[10]+3200236656&4294967295,I=b+(T<<23&4294967295|T>>>9),T=v+(I^b^R)+A[13]+681279174&4294967295,v=I+(T<<4&4294967295|T>>>28),T=R+(v^I^b)+A[0]+3936430074&4294967295,R=v+(T<<11&4294967295|T>>>21),T=b+(R^v^I)+A[3]+3572445317&4294967295,b=R+(T<<16&4294967295|T>>>16),T=I+(b^R^v)+A[6]+76029189&4294967295,I=b+(T<<23&4294967295|T>>>9),T=v+(I^b^R)+A[9]+3654602809&4294967295,v=I+(T<<4&4294967295|T>>>28),T=R+(v^I^b)+A[12]+3873151461&4294967295,R=v+(T<<11&4294967295|T>>>21),T=b+(R^v^I)+A[15]+530742520&4294967295,b=R+(T<<16&4294967295|T>>>16),T=I+(b^R^v)+A[2]+3299628645&4294967295,I=b+(T<<23&4294967295|T>>>9),T=v+(b^(I|~R))+A[0]+4096336452&4294967295,v=I+(T<<6&4294967295|T>>>26),T=R+(I^(v|~b))+A[7]+1126891415&4294967295,R=v+(T<<10&4294967295|T>>>22),T=b+(v^(R|~I))+A[14]+2878612391&4294967295,b=R+(T<<15&4294967295|T>>>17),T=I+(R^(b|~v))+A[5]+4237533241&4294967295,I=b+(T<<21&4294967295|T>>>11),T=v+(b^(I|~R))+A[12]+1700485571&4294967295,v=I+(T<<6&4294967295|T>>>26),T=R+(I^(v|~b))+A[3]+2399980690&4294967295,R=v+(T<<10&4294967295|T>>>22),T=b+(v^(R|~I))+A[10]+4293915773&4294967295,b=R+(T<<15&4294967295|T>>>17),T=I+(R^(b|~v))+A[1]+2240044497&4294967295,I=b+(T<<21&4294967295|T>>>11),T=v+(b^(I|~R))+A[8]+1873313359&4294967295,v=I+(T<<6&4294967295|T>>>26),T=R+(I^(v|~b))+A[15]+4264355552&4294967295,R=v+(T<<10&4294967295|T>>>22),T=b+(v^(R|~I))+A[6]+2734768916&4294967295,b=R+(T<<15&4294967295|T>>>17),T=I+(R^(b|~v))+A[13]+1309151649&4294967295,I=b+(T<<21&4294967295|T>>>11),T=v+(b^(I|~R))+A[4]+4149444226&4294967295,v=I+(T<<6&4294967295|T>>>26),T=R+(I^(v|~b))+A[11]+3174756917&4294967295,R=v+(T<<10&4294967295|T>>>22),T=b+(v^(R|~I))+A[2]+718787259&4294967295,b=R+(T<<15&4294967295|T>>>17),T=I+(R^(b|~v))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var I=v-this.blockSize,A=this.B,b=this.h,R=0;R<v;){if(b==0)for(;R<=I;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<v;)if(A[b++]=w.charCodeAt(R++),b==this.blockSize){s(this,A),b=0;break}}else for(;R<v;)if(A[b++]=w[R++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var I=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=I&255,I/=256;for(this.u(w),w=Array(16),v=I=0;4>v;++v)for(var A=0;32>A;A+=8)w[I++]=this.g[v]>>>A&255;return w};function i(w,v){var I=l;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=v(w)}function a(w,v){this.h=v;for(var I=[],A=!0,b=w.length-1;0<=b;b--){var R=w[b]|0;A&&R==v||(I[b]=R,A=!1)}this.g=I}var l={};function c(w){return-128<=w&&128>w?i(w,function(v){return new a([v|0],0>v?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return x(h(-w));for(var v=[],I=1,A=0;w>=I;A++)v[A]=w/I|0,I*=4294967296;return new a(v,0)}function f(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return x(f(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(v,8)),A=p,b=0;b<w.length;b+=8){var R=Math.min(8,w.length-b),T=parseInt(w.substring(b,b+R),v);8>R?(R=h(Math.pow(v,R)),A=A.j(R).add(h(T))):(A=A.j(I),A=A.add(h(T)))}return A}var p=c(0),m=c(1),_=c(16777216);t=a.prototype,t.m=function(){if(D(this))return-x(this).m();for(var w=0,v=1,I=0;I<this.g.length;I++){var A=this.i(I);w+=(0<=A?A:4294967296+A)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(D(this))return"-"+x(this).toString(w);for(var v=h(Math.pow(w,6)),I=this,A="";;){var b=G(I,v).g;I=$(I,b.j(v));var R=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=b,C(I))return R+A;for(;6>R.length;)R="0"+R;A=R+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function D(w){return w.h==-1}t.l=function(w){return w=$(this,w),D(w)?-1:C(w)?0:1};function x(w){for(var v=w.g.length,I=[],A=0;A<v;A++)I[A]=~w.g[A];return new a(I,~w.h).add(m)}t.abs=function(){return D(this)?x(this):this},t.add=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0,b=0;b<=v;b++){var R=A+(this.i(b)&65535)+(w.i(b)&65535),T=(R>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);A=T>>>16,R&=65535,T&=65535,I[b]=T<<16|R}return new a(I,I[I.length-1]&-2147483648?-1:0)};function $(w,v){return w.add(x(v))}t.j=function(w){if(C(this)||C(w))return p;if(D(this))return D(w)?x(this).j(x(w)):x(x(this).j(w));if(D(w))return x(this.j(x(w)));if(0>this.l(_)&&0>w.l(_))return h(this.m()*w.m());for(var v=this.g.length+w.g.length,I=[],A=0;A<2*v;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<w.g.length;b++){var R=this.i(A)>>>16,T=this.i(A)&65535,Et=w.i(b)>>>16,xt=w.i(b)&65535;I[2*A+2*b]+=T*xt,B(I,2*A+2*b),I[2*A+2*b+1]+=R*xt,B(I,2*A+2*b+1),I[2*A+2*b+1]+=T*Et,B(I,2*A+2*b+1),I[2*A+2*b+2]+=R*Et,B(I,2*A+2*b+2)}for(A=0;A<v;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=v;A<2*v;A++)I[A]=0;return new a(I,0)};function B(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function H(w,v){this.g=w,this.h=v}function G(w,v){if(C(v))throw Error("division by zero");if(C(w))return new H(p,p);if(D(w))return v=G(x(w),v),new H(x(v.g),x(v.h));if(D(v))return v=G(w,x(v)),new H(x(v.g),v.h);if(30<w.g.length){if(D(w)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=v;0>=A.l(w);)I=de(I),A=de(A);var b=ve(I,1),R=ve(A,1);for(A=ve(A,2),I=ve(I,2);!C(A);){var T=R.add(A);0>=T.l(w)&&(b=b.add(I),R=T),A=ve(A,1),I=ve(I,1)}return v=$(w,b.j(v)),new H(b,v)}for(b=p;0<=w.l(v);){for(I=Math.max(1,Math.floor(w.m()/v.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),R=h(I),T=R.j(v);D(T)||0<T.l(w);)I-=A,R=h(I),T=R.j(v);C(R)&&(R=m),b=b.add(R),w=$(w,T)}return new H(b,w)}t.A=function(w){return G(this,w).h},t.and=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)&w.i(A);return new a(I,this.h&w.h)},t.or=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)|w.i(A);return new a(I,this.h|w.h)},t.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)^w.i(A);return new a(I,this.h^w.h)};function de(w){for(var v=w.g.length+1,I=[],A=0;A<v;A++)I[A]=w.i(A)<<1|w.i(A-1)>>>31;return new a(I,w.h)}function ve(w,v){var I=v>>5;v%=32;for(var A=w.g.length-I,b=[],R=0;R<A;R++)b[R]=0<v?w.i(R+I)>>>v|w.i(R+I+1)<<32-v:w.i(R+I);return new a(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,rg=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,rr=a}).apply(typeof Qf<"u"?Qf:typeof self<"u"?self:typeof window<"u"?window:{});var ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sg,Gs,ig,Ro,tc,og,ag,lg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ho=="object"&&ho];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var P=o[g];if(!(P in d))break e;d=d[P]}o=o[o.length-1],g=d[o],u=u(g),u!=g&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,g=!1,P={next:function(){if(!g&&d<o.length){var k=d++;return{value:u(k,o[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function p(o,u,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function m(o,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function _(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function C(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,P,k){for(var z=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)z[Ve-2]=arguments[Ve];return u.prototype[P].apply(g,z)}}function D(o){const u=o.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=o[g];return d}return[]}function x(o,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const P=o.length||0,k=g.length||0;o.length=P+k;for(let z=0;z<k;z++)o[P+z]=g[z]}else o.push(g)}}class ${constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(o){return/^[\s\xa0]*$/.test(o)}function H(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function G(o){return G[" "](o),o}G[" "]=function(){};var de=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function ve(o,u,d){for(const g in o)u.call(d,o[g],g,o)}function w(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function v(o){const u={};for(const d in o)u[d]=o[d];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)o[d]=g[d];for(let k=0;k<I.length;k++)d=I[k],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function b(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function R(o){l.setTimeout(()=>{throw o},0)}function T(){var o=kt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Et{constructor(){this.h=this.g=null}add(u,d){const g=xt.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var xt=new $(()=>new We,o=>o.reset());class We{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,pe=!1,kt=new Et,Wt=()=>{const o=l.Promise.resolve(void 0);Ee=()=>{o.then(Mt)}};var Mt=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(d){R(d)}var u=xt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}pe=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Ln=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o})();function en(o,u){if(Ue.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(de){e:{try{G(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:St[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&en.aa.h.call(this)}}C(en,Ue);var St={2:"touch",3:"pen",4:"mouse"};en.prototype.h=function(){en.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var N="closure_listenable_"+(1e6*Math.random()|0),J=0;function Y(o,u,d,g,P){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=P,this.key=++J,this.da=this.fa=!1}function Z(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ae(o){this.src=o,this.g={},this.h=0}Ae.prototype.add=function(o,u,d,g,P){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var z=E(o,u,g,P);return-1<z?(u=o[z],d||(u.fa=!1)):(u=new Y(u,this.src,k,!!g,P),u.fa=d,o.push(u)),u};function y(o,u){var d=u.type;if(d in o.g){var g=o.g[d],P=Array.prototype.indexOf.call(g,u,void 0),k;(k=0<=P)&&Array.prototype.splice.call(g,P,1),k&&(Z(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function E(o,u,d,g){for(var P=0;P<o.length;++P){var k=o[P];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==g)return P}return-1}var S="closure_lm_"+(1e6*Math.random()|0),O={};function F(o,u,d,g,P){if(Array.isArray(u)){for(var k=0;k<u.length;k++)F(o,u[k],d,g,P);return null}return d=le(d),o&&o[N]?o.K(u,d,h(g)?!!g.capture:!1,P):M(o,u,d,!1,g,P)}function M(o,u,d,g,P,k){if(!u)throw Error("Invalid event type");var z=h(P)?!!P.capture:!!P,Ve=K(o);if(Ve||(o[S]=Ve=new Ae(o)),d=Ve.add(u,d,g,z,k),d.proxy)return d;if(g=Q(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)Ln||(P=z),P===void 0&&(P=!1),o.addEventListener(u.toString(),g,P);else if(o.attachEvent)o.attachEvent(j(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function o(d){return u.call(o.src,o.listener,d)}const u=ne;return o}function W(o,u,d,g,P){if(Array.isArray(u))for(var k=0;k<u.length;k++)W(o,u[k],d,g,P);else g=h(g)?!!g.capture:!!g,d=le(d),o&&o[N]?(o=o.i,u=String(u).toString(),u in o.g&&(k=o.g[u],d=E(k,d,g,P),-1<d&&(Z(k[d]),Array.prototype.splice.call(k,d,1),k.length==0&&(delete o.g[u],o.h--)))):o&&(o=K(o))&&(u=o.g[u.toString()],o=-1,u&&(o=E(u,d,g,P)),(d=-1<o?u[o]:null)&&q(d))}function q(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[N])y(u.i,o);else{var d=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(d,g,o.capture):u.detachEvent?u.detachEvent(j(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=K(u))?(y(d,o),d.h==0&&(d.src=null,u[S]=null)):Z(o)}}}function j(o){return o in O?O[o]:O[o]="on"+o}function ne(o,u){if(o.da)o=!0;else{u=new en(u,this);var d=o.listener,g=o.ha||o.src;o.fa&&q(o),o=d.call(g,u)}return o}function K(o){return o=o[S],o instanceof Ae?o:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(o){return typeof o=="function"?o:(o[te]||(o[te]=function(u){return o.handleEvent(u)}),o[te])}function se(){Fe.call(this),this.i=new Ae(this),this.M=this,this.F=null}C(se,Fe),se.prototype[N]=!0,se.prototype.removeEventListener=function(o,u,d,g){W(this,o,u,d,g)};function fe(o,u){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Ue(u,o);else if(u instanceof Ue)u.target=u.target||o;else{var P=u;u=new Ue(g,o),A(u,P)}if(P=!0,d)for(var k=d.length-1;0<=k;k--){var z=u.g=d[k];P=Te(z,g,!0,u)&&P}if(z=u.g=o,P=Te(z,g,!0,u)&&P,P=Te(z,g,!1,u)&&P,d)for(k=0;k<d.length;k++)z=u.g=d[k],P=Te(z,g,!1,u)&&P}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],g=0;g<d.length;g++)Z(d[g]);delete o.g[u],o.h--}}this.F=null},se.prototype.K=function(o,u,d,g){return this.i.add(String(o),u,!1,d,g)},se.prototype.L=function(o,u,d,g){return this.i.add(String(o),u,!0,d,g)};function Te(o,u,d,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,k=0;k<u.length;++k){var z=u[k];if(z&&!z.da&&z.capture==d){var Ve=z.listener,rt=z.ha||z.src;z.fa&&y(o.i,z),P=Ve.call(rt,g)!==!1&&P}}return P&&!g.defaultPrevented}function et(o,u,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function tt(o){o.g=et(()=>{o.g=null,o.i&&(o.i=!1,tt(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Lt extends Fe{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:tt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ct(o){Fe.call(this),this.h=o,this.g={}}C(ct,Fe);var Fn=[];function Ps(o){ve(o.g,function(u,d){this.g.hasOwnProperty(d)&&q(u)},o),o.g={}}ct.prototype.N=function(){ct.aa.N.call(this),Ps(this)},ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nt=l.JSON.stringify,Ft=l.JSON.parse,Wi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function jr(){}jr.prototype.h=null;function Nu(o){return o.h||(o.h=o.i())}function Ou(){}var Cs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ka(){Ue.call(this,"d")}C(Ka,Ue);function Ga(){Ue.call(this,"c")}C(Ga,Ue);var gr={},xu=null;function zi(){return xu=xu||new se}gr.La="serverreachability";function Mu(o){Ue.call(this,gr.La,o)}C(Mu,Ue);function ks(o){const u=zi();fe(u,new Mu(u))}gr.STAT_EVENT="statevent";function Lu(o,u){Ue.call(this,gr.STAT_EVENT,o),this.stat=u}C(Lu,Ue);function Tt(o){const u=zi();fe(u,new Lu(u,o))}gr.Ma="timingevent";function Fu(o,u){Ue.call(this,gr.Ma,o),this.size=u}C(Fu,Ue);function Vs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Ds(){this.g=!0}Ds.prototype.xa=function(){this.g=!1};function M_(o,u,d,g,P,k){o.info(function(){if(o.g)if(k)for(var z="",Ve=k.split("&"),rt=0;rt<Ve.length;rt++){var be=Ve[rt].split("=");if(1<be.length){var ut=be[0];be=be[1];var ht=ut.split("_");z=2<=ht.length&&ht[1]=="type"?z+(ut+"="+be+"&"):z+(ut+"=redacted&")}}else z=null;else z=k;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+d+`
`+z})}function L_(o,u,d,g,P,k,z){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+d+`
`+k+" "+z})}function Br(o,u,d,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+U_(o,d)+(g?" "+g:"")})}function F_(o,u){o.info(function(){return"TIMEOUT: "+u})}Ds.prototype.info=function(){};function U_(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var k=P[0];if(k!="noop"&&k!="stop"&&k!="close")for(var z=1;z<P.length;z++)P[z]=""}}}}return nt(d)}catch{return u}}var Ki={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Uu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qa;function Gi(){}C(Gi,jr),Gi.prototype.g=function(){return new XMLHttpRequest},Gi.prototype.i=function(){return{}},Qa=new Gi;function Un(o,u,d,g){this.j=o,this.i=u,this.l=d,this.R=g||1,this.U=new ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ju}function ju(){this.i=null,this.g="",this.h=!1}var Bu={},Ya={};function Ja(o,u,d){o.L=1,o.v=Xi(vn(u)),o.m=d,o.P=!0,$u(o,null)}function $u(o,u){o.F=Date.now(),Qi(o),o.A=vn(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),nh(d.i,"t",g),o.C=0,d=o.j.J,o.h=new ju,o.g=Eh(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Lt(m(o.Y,o,o.g),o.O)),u=o.U,d=o.g,g=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Fn[0]=P.toString()),P=Fn);for(var k=0;k<P.length;k++){var z=F(d,P[k],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ks(),M_(o.i,o.u,o.A,o.l,o.R,o.m)}Un.prototype.ca=function(o){o=o.target;const u=this.M;u&&En(o)==3?u.j():this.Y(o)},Un.prototype.Y=function(o){try{if(o==this.g)e:{const ht=En(this.g);var u=this.g.Ba();const qr=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||ch(this.g)))){this.J||ht!=4||u==7||(u==8||0>=qr?ks(3):ks(2)),Xa(this);var d=this.g.Z();this.X=d;t:if(Hu(this)){var g=ch(this.g);o="";var P=g.length,k=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_r(this),Ns(this);var z="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(k&&u==P-1)});g.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,L_(this.i,this.u,this.A,this.l,this.R,ht,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,rt=this.g;if((Ve=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Ve)){var be=Ve;break t}}be=null}if(d=be)Br(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Za(this,d);else{this.o=!1,this.s=3,Tt(12),_r(this),Ns(this);break e}}if(this.P){d=!0;let zt;for(;!this.J&&this.C<z.length;)if(zt=j_(this,z),zt==Ya){ht==4&&(this.s=4,Tt(14),d=!1),Br(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Bu){this.s=4,Tt(15),Br(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else Br(this.i,this.l,zt,null),Za(this,zt);if(Hu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||z.length!=0||this.h.h||(this.s=1,Tt(16),d=!1),this.o=this.o&&d,!d)Br(this.i,this.l,z,"[Invalid Chunked Response]"),_r(this),Ns(this);else if(0<z.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),il(ut),ut.M=!0,Tt(11))}}else Br(this.i,this.l,z,null),Za(this,z);ht==4&&_r(this),this.o&&!this.J&&(ht==4?gh(this.j,this):(this.o=!1,Qi(this)))}else ry(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),_r(this),Ns(this)}}}catch{}finally{}};function Hu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function j_(o,u){var d=o.C,g=u.indexOf(`
`,d);return g==-1?Ya:(d=Number(u.substring(d,g)),isNaN(d)?Bu:(g+=1,g+d>u.length?Ya:(u=u.slice(g,g+d),o.C=g+d,u)))}Un.prototype.cancel=function(){this.J=!0,_r(this)};function Qi(o){o.S=Date.now()+o.I,qu(o,o.I)}function qu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Vs(m(o.ba,o),u)}function Xa(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Un.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(F_(this.i,this.A),this.L!=2&&(ks(),Tt(17)),_r(this),this.s=2,Ns(this)):qu(this,this.S-o)};function Ns(o){o.j.G==0||o.J||gh(o.j,o)}function _r(o){Xa(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Ps(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Za(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||el(d.h,o))){if(!o.K&&el(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)so(d),no(d);else break e;sl(d),Tt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=Vs(m(d.Za,d),6e3));if(1>=Ku(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else vr(d,11)}else if((o.K||d.g==o)&&so(d),!B(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let be=P[u];if(d.T=be[0],be=be[1],d.G==2)if(be[0]=="c"){d.K=be[1],d.ia=be[2];const ut=be[3];ut!=null&&(d.la=ut,d.j.info("VER="+d.la));const ht=be[4];ht!=null&&(d.Aa=ht,d.j.info("SVER="+d.Aa));const qr=be[5];qr!=null&&typeof qr=="number"&&0<qr&&(g=1.5*qr,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const zt=o.g;if(zt){const oo=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oo){var k=g.h;k.g||oo.indexOf("spdy")==-1&&oo.indexOf("quic")==-1&&oo.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(tl(k,k.h),k.h=null))}if(g.D){const ol=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;ol&&(g.ya=ol,xe(g.I,g.D,ol))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var z=o;if(g.qa=vh(g,g.J?g.ia:null,g.W),z.K){Gu(g.h,z);var Ve=z,rt=g.L;rt&&(Ve.I=rt),Ve.B&&(Xa(Ve),Qi(Ve)),g.g=z}else ph(g);0<d.i.length&&ro(d)}else be[0]!="stop"&&be[0]!="close"||vr(d,7);else d.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?vr(d,7):rl(d):be[0]!="noop"&&d.l&&d.l.ta(be),d.v=0)}}ks(4)}catch{}}var B_=class{constructor(o,u){this.g=o,this.map=u}};function Wu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ku(o){return o.h?1:o.g?o.g.size:0}function el(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function tl(o,u){o.g?o.g.add(u):o.h=u}function Gu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Wu.prototype.cancel=function(){if(this.i=Qu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Qu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return D(o.i)}function $_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,g=0;g<d;g++)u.push(o[g]);return u}u=[],d=0;for(g in o)u[d++]=o[g];return u}function H_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const g in o)u[d++]=g;return u}}}function Yu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=H_(o),g=$_(o),P=g.length,k=0;k<P;k++)u.call(void 0,g[k],d&&d[k],o)}var Ju=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function q_(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),P=null;if(0<=g){var k=o[d].substring(0,g);P=o[d].substring(g+1)}else k=o[d];u(k,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function yr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof yr){this.h=o.h,Yi(this,o.j),this.o=o.o,this.g=o.g,Ji(this,o.s),this.l=o.l;var u=o.i,d=new Ms;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Xu(this,d),this.m=o.m}else o&&(u=String(o).match(Ju))?(this.h=!1,Yi(this,u[1]||"",!0),this.o=Os(u[2]||""),this.g=Os(u[3]||"",!0),Ji(this,u[4]),this.l=Os(u[5]||"",!0),Xu(this,u[6]||"",!0),this.m=Os(u[7]||"")):(this.h=!1,this.i=new Ms(null,this.h))}yr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(xs(u,Zu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(xs(u,Zu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(xs(d,d.charAt(0)=="/"?K_:z_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",xs(d,Q_)),o.join("")};function vn(o){return new yr(o)}function Yi(o,u,d){o.j=d?Os(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ji(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Xu(o,u,d){u instanceof Ms?(o.i=u,Y_(o.i,o.h)):(d||(u=xs(u,G_)),o.i=new Ms(u,o.h))}function xe(o,u,d){o.i.set(u,d)}function Xi(o){return xe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Os(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function xs(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,W_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function W_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Zu=/[#\/\?@]/g,z_=/[#\?:]/g,K_=/[#\?]/g,G_=/[#\?@]/g,Q_=/#/g;function Ms(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function jn(o){o.g||(o.g=new Map,o.h=0,o.i&&q_(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Ms.prototype,t.add=function(o,u){jn(this),this.i=null,o=$r(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function eh(o,u){jn(o),u=$r(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function th(o,u){return jn(o),u=$r(o,u),o.g.has(u)}t.forEach=function(o,u){jn(this),this.g.forEach(function(d,g){d.forEach(function(P){o.call(u,P,g,this)},this)},this)},t.na=function(){jn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const P=o[g];for(let k=0;k<P.length;k++)d.push(u[g])}return d},t.V=function(o){jn(this);let u=[];if(typeof o=="string")th(this,o)&&(u=u.concat(this.g.get($r(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},t.set=function(o,u){return jn(this),this.i=null,o=$r(this,o),th(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function nh(o,u,d){eh(o,u),0<d.length&&(o.i=null,o.g.set($r(o,u),D(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const k=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var P=k;z[g]!==""&&(P+="="+encodeURIComponent(String(z[g]))),o.push(P)}}return this.i=o.join("&")};function $r(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Y_(o,u){u&&!o.j&&(jn(o),o.i=null,o.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(eh(this,g),nh(this,P,d))},o)),o.j=u}function J_(o,u){const d=new Ds;if(l.Image){const g=new Image;g.onload=_(Bn,d,"TestLoadImage: loaded",!0,u,g),g.onerror=_(Bn,d,"TestLoadImage: error",!1,u,g),g.onabort=_(Bn,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=_(Bn,d,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function X_(o,u){const d=new Ds,g=new AbortController,P=setTimeout(()=>{g.abort(),Bn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(k=>{clearTimeout(P),k.ok?Bn(d,"TestPingServer: ok",!0,u):Bn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Bn(d,"TestPingServer: error",!1,u)})}function Bn(o,u,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function Z_(){this.g=new Wi}function ey(o,u,d){const g=d||"";try{Yu(o,function(P,k){let z=P;h(P)&&(z=nt(P)),u.push(g+k+"="+encodeURIComponent(z))})}catch(P){throw u.push(g+"type="+encodeURIComponent("_badmap")),P}}function Zi(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Zi,jr),Zi.prototype.g=function(){return new eo(this.l,this.j)},Zi.prototype.i=(function(o){return function(){return o}})({});function eo(o,u){se.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(eo,se),t=eo.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Fs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ls(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Fs(this)),this.g&&(this.readyState=3,Fs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rh(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function rh(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ls(this):Fs(this),this.readyState==3&&rh(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Ls(this))},t.Qa=function(o){this.g&&(this.response=o,Ls(this))},t.ga=function(){this.g&&Ls(this)};function Ls(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Fs(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Fs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(eo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function sh(o){let u="";return ve(o,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function nl(o,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=sh(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):xe(o,u,d))}function $e(o){se.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C($e,se);var ty=/^https?$/i,ny=["POST","PUT"];t=$e.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qa.g(),this.v=this.o?Nu(this.o):Nu(Qa),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){ih(this,k);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())d.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ny,u,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,z]of d)this.g.setRequestHeader(k,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lh(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){ih(this,k)}};function ih(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,oh(o),to(o)}function oh(o){o.A||(o.A=!0,fe(o,"complete"),fe(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,fe(this,"complete"),fe(this,"abort"),to(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),to(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ah(this):this.bb())},t.bb=function(){ah(this)};function ah(o){if(o.h&&typeof a<"u"&&(!o.v[1]||En(o)!=4||o.Z()!=2)){if(o.u&&En(o)==4)et(o.Ea,0,o);else if(fe(o,"readystatechange"),En(o)==4){o.h=!1;try{const z=o.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=z===0){var P=String(o.D).match(Ju)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!ty.test(P?P.toLowerCase():"")}d=g}if(d)fe(o,"complete"),fe(o,"success");else{o.m=6;try{var k=2<En(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",oh(o)}}finally{to(o)}}}}function to(o,u){if(o.g){lh(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||fe(o,"ready");try{d.onreadystatechange=g}catch{}}}function lh(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function En(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Ft(u)}};function ch(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function ry(o){const u={};o=(o.g&&2<=En(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(B(o[g]))continue;var d=b(o[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[P]||[];u[P]=k,k.push(d)}w(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Us(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function uh(o){this.Aa=0,this.i=[],this.j=new Ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Us("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Us("baseRetryDelayMs",5e3,o),this.cb=Us("retryDelaySeedMs",1e4,o),this.Wa=Us("forwardChannelMaxRetries",2,o),this.wa=Us("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Wu(o&&o.concurrentRequestLimit),this.Da=new Z_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=uh.prototype,t.la=8,t.G=1,t.connect=function(o,u,d,g){Tt(0),this.W=o,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=vh(this,null,this.W),ro(this)};function rl(o){if(hh(o),o.G==3){var u=o.U++,d=vn(o.I);if(xe(d,"SID",o.K),xe(d,"RID",u),xe(d,"TYPE","terminate"),js(o,d),u=new Un(o,o.j,u),u.L=2,u.v=Xi(vn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Eh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Qi(u)}yh(o)}function no(o){o.g&&(il(o),o.g.cancel(),o.g=null)}function hh(o){no(o),o.u&&(l.clearTimeout(o.u),o.u=null),so(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ro(o){if(!zu(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ee||Wt(),pe||(Ee(),pe=!0),kt.add(u,o),o.B=0}}function sy(o,u){return Ku(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Vs(m(o.Ga,o,u),_h(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new Un(this,this.j,o);let k=this.o;if(this.S&&(k?(k=v(k),A(k,this.S)):k=this.S),this.m!==null||this.O||(P.H=k,k=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=dh(this,P,u),d=vn(this.I),xe(d,"RID",o),xe(d,"CVER",22),this.D&&xe(d,"X-HTTP-Session-Id",this.D),js(this,d),k&&(this.O?u="headers="+encodeURIComponent(String(sh(k)))+"&"+u:this.m&&nl(d,this.m,k)),tl(this.h,P),this.Ua&&xe(d,"TYPE","init"),this.P?(xe(d,"$req",u),xe(d,"SID","null"),P.T=!0,Ja(P,d,null)):Ja(P,d,u),this.G=2}}else this.G==3&&(o?fh(this,o):this.i.length==0||zu(this.h)||fh(this))};function fh(o,u){var d;u?d=u.l:d=o.U++;const g=vn(o.I);xe(g,"SID",o.K),xe(g,"RID",d),xe(g,"AID",o.T),js(o,g),o.m&&o.o&&nl(g,o.m,o.o),d=new Un(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=dh(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),tl(o.h,d),Ja(d,g,u)}function js(o,u){o.H&&ve(o.H,function(d,g){xe(u,g,d)}),o.l&&Yu({},function(d,g){xe(u,g,d)})}function dh(o,u,d){d=Math.min(o.i.length,d);var g=o.l?m(o.l.Na,o.l,o):null;e:{var P=o.i;let k=-1;for(;;){const z=["count="+d];k==-1?0<d?(k=P[0].g,z.push("ofs="+k)):k=0:z.push("ofs="+k);let Ve=!0;for(let rt=0;rt<d;rt++){let be=P[rt].g;const ut=P[rt].map;if(be-=k,0>be)k=Math.max(0,P[rt].g-100),Ve=!1;else try{ey(ut,z,"req"+be+"_")}catch{g&&g(ut)}}if(Ve){g=z.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,g}function ph(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ee||Wt(),pe||(Ee(),pe=!0),kt.add(u,o),o.v=0}}function sl(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Vs(m(o.Fa,o),_h(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,mh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Vs(m(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),no(this),mh(this))};function il(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function mh(o){o.g=new Un(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=vn(o.qa);xe(u,"RID","rpc"),xe(u,"SID",o.K),xe(u,"AID",o.T),xe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&xe(u,"TO",o.ja),xe(u,"TYPE","xmlhttp"),js(o,u),o.m&&o.o&&nl(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Xi(vn(u)),d.m=null,d.P=!0,$u(d,o)}t.Za=function(){this.C!=null&&(this.C=null,no(this),sl(this),Tt(19))};function so(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function gh(o,u){var d=null;if(o.g==u){so(o),il(o),o.g=null;var g=2}else if(el(o.h,u))d=u.D,Gu(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;g=zi(),fe(g,new Fu(g,d)),ro(o)}else ph(o);else if(P=u.s,P==3||P==0&&0<u.X||!(g==1&&sy(o,u)||g==2&&sl(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),P){case 1:vr(o,5);break;case 4:vr(o,10);break;case 3:vr(o,6);break;default:vr(o,2)}}}function _h(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function vr(o,u){if(o.j.info("Error code "+u),u==2){var d=m(o.fb,o),g=o.Xa;const P=!g;g=new yr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Yi(g,"https"),Xi(g),P?J_(g.toString(),d):X_(g.toString(),d)}else Tt(2);o.G=0,o.l&&o.l.sa(u),yh(o),hh(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function yh(o){if(o.G=0,o.ka=[],o.l){const u=Qu(o.h);(u.length!=0||o.i.length!=0)&&(x(o.ka,u),x(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function vh(o,u,d){var g=d instanceof yr?vn(d):new yr(d);if(g.g!="")u&&(g.g=u+"."+g.g),Ji(g,g.s);else{var P=l.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var k=new yr(null);g&&Yi(k,g),u&&(k.g=u),P&&Ji(k,P),d&&(k.l=d),g=k}return d=o.D,u=o.ya,d&&u&&xe(g,d,u),xe(g,"VER",o.la),js(o,g),g}function Eh(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new $e(new Zi({eb:d})):new $e(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Th(){}t=Th.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function io(){}io.prototype.g=function(o,u){return new Vt(o,u)};function Vt(o,u){se.call(this),this.g=new uh(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!B(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Hr(this)}C(Vt,se),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){rl(this.g)},Vt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=nt(o),o=d);u.i.push(new B_(u.Ya++,o)),u.G==3&&ro(u)},Vt.prototype.N=function(){this.g.l=null,delete this.j,rl(this.g),delete this.g,Vt.aa.N.call(this)};function Ih(o){Ka.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}C(Ih,Ka);function wh(){Ga.call(this),this.status=1}C(wh,Ga);function Hr(o){this.g=o}C(Hr,Th),Hr.prototype.ua=function(){fe(this.g,"a")},Hr.prototype.ta=function(o){fe(this.g,new Ih(o))},Hr.prototype.sa=function(o){fe(this.g,new wh)},Hr.prototype.ra=function(){fe(this.g,"b")},io.prototype.createWebChannel=io.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,lg=function(){return new io},ag=function(){return zi()},og=gr,tc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ki.NO_ERROR=0,Ki.TIMEOUT=8,Ki.HTTP_ERROR=6,Ro=Ki,Uu.COMPLETE="complete",ig=Uu,Ou.EventType=Cs,Cs.OPEN="a",Cs.CLOSE="b",Cs.ERROR="c",Cs.MESSAGE="d",se.prototype.listen=se.prototype.K,Gs=Ou,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,sg=$e}).apply(typeof ho<"u"?ho:typeof self<"u"?self:typeof window<"u"?window:{});const Yf="@firebase/firestore",Jf="4.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As="12.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Wc("@firebase/firestore");function Gr(){return Dr.logLevel}function X(t,...e){if(Dr.logLevel<=me.DEBUG){const n=e.map(nu);Dr.debug(`Firestore (${As}): ${t}`,...n)}}function Nn(t,...e){if(Dr.logLevel<=me.ERROR){const n=e.map(nu);Dr.error(`Firestore (${As}): ${t}`,...n)}}function ps(t,...e){if(Dr.logLevel<=me.WARN){const n=e.map(nu);Dr.warn(`Firestore (${As}): ${t}`,...n)}}function nu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,cg(t,r,n)}function cg(t,e,n){let r=`FIRESTORE (${As}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Nn(r),new Error(r)}function ke(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||cg(e,s,r)}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class VS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(dt.UNAUTHENTICATED)))}shutdown(){}}class DS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class NS{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ke(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new sr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sr,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sr)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string",31837,{l:r}),new ug(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class OS{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class xS{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new OS(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(dt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Xf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MS{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ut(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ke(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Xf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(ke(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Xf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=LS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function nc(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Sl(s)===Sl(i)?ge(s,i):Sl(s)?1:-1}return ge(t.length,e.length)}const FS=55296,US=57343;function Sl(t){const e=t.charCodeAt(0);return e>=FS&&e<=US}function ms(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="__name__";class rn{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&oe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=rn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=rn.isNumericId(e),s=rn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?rn.extractNumericId(e).compare(rn.extractNumericId(n)):nc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rr.fromString(e.substring(4,e.length-2))}}class Me extends rn{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Me(n)}static emptyPath(){return new Me([])}}const jS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends rn{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return jS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zf}static keyField(){return new at([Zf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ee(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ee(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ee(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new ee(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Me.fromString(e))}static fromName(e){return new re(Me.fromString(e).popFirst(5))}static empty(){return new re(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Me(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t,e,n){if(!n)throw new ee(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function BS(t,e,n,r){if(e===!0&&r===!0)throw new ee(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ed(t){if(!re.isDocumentKey(t))throw new ee(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function td(t){if(re.isDocumentKey(t))throw new ee(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function su(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe(12329,{type:typeof t})}function gs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=su(t);throw new ee(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,e){const n={typeString:t};return e&&(n.value=e),n}function ji(t,e){if(!fg(t))throw new ee(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ee(U.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd=-62135596800,rd=1e6;class Le{static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*rd);return new Le(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<nd)throw new ee(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/rd}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ji(e,Le._jsonSchema))return new Le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-nd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Le._jsonSchemaVersion="firestore/timestamp/1.0",Le._jsonSchema={type:Ke("string",Le._jsonSchemaVersion),seconds:Ke("number"),nanoseconds:Ke("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new Le(0,0))}static max(){return new ce(new Le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=-1;function $S(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new lr(s,re.empty(),e)}function HS(t){return new lr(t.readTime,t.key,Ai)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(ce.min(),re.empty(),Ai)}static max(){return new lr(ce.max(),re.empty(),Ai)}}function qS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==WS)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):L.reject(n)}static resolve(e){return new L(((n,r)=>{n(e)}))}static reject(e){return new L(((n,r)=>{r(e)}))}static waitFor(e){return new L(((n,r)=>{let s=0,i=0,a=!1;e.forEach((l=>{++s,l.next((()=>{++i,a&&i===s&&n()}),(c=>r(c)))})),a=!0,i===s&&n()}))}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next((s=>s?L.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new L(((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next((f=>{a[h]=f,++l,l===i&&r(a)}),(f=>s(f)))}}))}static doWhile(e,n){return new L(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function KS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ss(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Na.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=-1;function Oa(t){return t==null}function Zo(t){return t===0&&1/t==-1/0}function GS(t){return typeof t=="number"&&Number.isInteger(t)&&!Zo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="";function QS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=sd(e)),e=YS(t.get(n),e);return sd(e)}function YS(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case dg:n+="";break;default:n+=i}}return n}function sd(t){return t+dg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fo(this.root,e,this.comparator,!0)}}class fo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??st.RED,this.left=s??st.EMPTY,this.right=i??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new st(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw oe(27949);return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw oe(57766)}get value(){throw oe(16141)}get color(){throw oe(16727)}get left(){throw oe(29726)}get right(){throw oe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new od(this.data.getIterator())}getIteratorFrom(e){return new od(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class od{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new Je(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new mg("Invalid base64 string: "+i):i}})(e);return new lt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const JS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(t){if(ke(!!t,39018),typeof t=="string"){let e=0;const n=JS.exec(t);if(ke(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ur(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="server_timestamp",_g="__type__",yg="__previous_value__",vg="__local_write_time__";function ou(t){return(t?.mapValue?.fields||{})[_g]?.stringValue===gg}function xa(t){const e=t.mapValue.fields[yg];return ou(e)?xa(e):e}function bi(t){const e=cr(t.mapValue.fields[vg].timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n,r,s,i,a,l,c,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const ea="(default)";class Si{constructor(e,n){this.projectId=e,this.database=n||ea}static empty(){return new Si("","")}get isDefaultDatabase(){return this.database===ea}isEqual(e){return e instanceof Si&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="__type__",ZS="__max__",po={mapValue:{}},Tg="__vector__",ta="value";function hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ou(t)?4:tR(t)?9007199254740991:eR(t)?10:11:oe(28295,{value:t})}function gn(t,e){if(t===e)return!0;const n=hr(t);if(n!==hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bi(t).isEqual(bi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=cr(s.timestampValue),l=cr(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return ur(s.bytesValue).isEqual(ur(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=He(s.doubleValue),l=He(i.doubleValue);return a===l?Zo(a)===Zo(l):isNaN(a)&&isNaN(l)}return!1})(t,e);case 9:return ms(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(id(a)!==id(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!gn(a[c],l[c])))return!1;return!0})(t,e);default:return oe(52216,{left:t})}}function Ri(t,e){return(t.values||[]).find((n=>gn(n,e)))!==void 0}function _s(t,e){if(t===e)return 0;const n=hr(t),r=hr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=He(i.integerValue||i.doubleValue),c=He(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return ad(t.timestampValue,e.timestampValue);case 4:return ad(bi(t),bi(e));case 5:return nc(t.stringValue,e.stringValue);case 6:return(function(i,a){const l=ur(i),c=ur(a);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=ge(l[h],c[h]);if(f!==0)return f}return ge(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=ge(He(i.latitude),He(a.latitude));return l!==0?l:ge(He(i.longitude),He(a.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return ld(t.arrayValue,e.arrayValue);case 10:return(function(i,a){const l=i.fields||{},c=a.fields||{},h=l[ta]?.arrayValue,f=c[ta]?.arrayValue,p=ge(h?.values?.length||0,f?.values?.length||0);return p!==0?p:ld(h,f)})(t.mapValue,e.mapValue);case 11:return(function(i,a){if(i===po.mapValue&&a===po.mapValue)return 0;if(i===po.mapValue)return 1;if(a===po.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=nc(c[p],f[p]);if(m!==0)return m;const _=_s(l[c[p]],h[f[p]]);if(_!==0)return _}return ge(c.length,f.length)})(t.mapValue,e.mapValue);default:throw oe(23264,{he:n})}}function ad(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=cr(t),r=cr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function ld(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=_s(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function ys(t){return rc(t)}function rc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=cr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return ur(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return re.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=rc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${rc(n.fields[a])}`;return s+"}"})(t.mapValue):oe(61005,{value:t})}function Po(t){switch(hr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xa(t);return e?16+Po(e):16;case 5:return 2*t.stringValue.length;case 6:return ur(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Po(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Mr(r.fields,((i,a)=>{s+=i.length+Po(a)})),s})(t.mapValue);default:throw oe(13486,{value:t})}}function sc(t){return!!t&&"integerValue"in t}function au(t){return!!t&&"arrayValue"in t}function cd(t){return!!t&&"nullValue"in t}function ud(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Co(t){return!!t&&"mapValue"in t}function eR(t){return(t?.mapValue?.fields||{})[Eg]?.stringValue===Tg}function ci(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Mr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=ci(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ci(t.arrayValue.values[n]);return e}return{...t}}function tR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ZS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Co(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ci(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach(((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=ci(a):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Co(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Co(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Mr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new jt(ci(this.value))}}function Ig(t){const e=[];return Mr(t.fields,((n,r)=>{const s=new at([n]);if(Co(r)){const i=Ig(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new mt(e,0,ce.min(),ce.min(),ce.min(),jt.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,ce.min(),ce.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,ce.min(),ce.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n){this.position=e,this.inclusive=n}}function hd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(a.referenceValue),n.key):r=_s(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function fd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n="asc"){this.field=e,this.dir=n}}function nR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{}class Qe extends wg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sR(e,n,r):n==="array-contains"?new aR(e,r):n==="in"?new lR(e,r):n==="not-in"?new cR(e,r):n==="array-contains-any"?new uR(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new iR(e,r):new oR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(_s(n,this.value)):n!==null&&hr(this.value)===hr(n)&&this.matchesComparison(_s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _n extends wg{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new _n(e,n)}matches(e){return Ag(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ag(t){return t.op==="and"}function bg(t){return rR(t)&&Ag(t)}function rR(t){for(const e of t.filters)if(e instanceof _n)return!1;return!0}function ic(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(bg(t))return t.filters.map((e=>ic(e))).join(",");{const e=t.filters.map((n=>ic(n))).join(",");return`${t.op}(${e})`}}function Sg(t,e){return t instanceof Qe?(function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&gn(r.value,s.value)})(t,e):t instanceof _n?(function(r,s){return s instanceof _n&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,l)=>i&&Sg(a,s.filters[l])),!0):!1})(t,e):void oe(19439)}function Rg(t){return t instanceof Qe?(function(n){return`${n.field.canonicalString()} ${n.op} ${ys(n.value)}`})(t):t instanceof _n?(function(n){return n.op.toString()+" {"+n.getFilters().map(Rg).join(" ,")+"}"})(t):"Filter"}class sR extends Qe{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class iR extends Qe{constructor(e,n){super(e,"in",n),this.keys=Pg("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class oR extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=Pg("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Pg(t,e){return(e.arrayValue?.values||[]).map((n=>re.fromName(n.referenceValue)))}class aR extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return au(n)&&Ri(n.arrayValue,this.value)}}class lR extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ri(this.value.arrayValue,n)}}class cR extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ri(this.value.arrayValue,n)}}class uR extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!au(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Ri(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function dd(t,e=null,n=[],r=[],s=null,i=null,a=null){return new hR(t,e,n,r,s,i,a)}function lu(t){const e=ue(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>ic(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Oa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>ys(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>ys(r))).join(",")),e.Te=n}return e.Te}function cu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Sg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fd(t.startAt,e.startAt)&&fd(t.endAt,e.endAt)}function oc(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function fR(t,e,n,r,s,i,a,l){return new Ma(t,e,n,r,s,i,a,l)}function uu(t){return new Ma(t)}function pd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dR(t){return t.collectionGroup!==null}function ui(t){const e=ue(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Je(at.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ra(i,r))})),n.has(at.keyField().canonicalString())||e.Ie.push(new ra(at.keyField(),r))}return e.Ie}function cn(t){const e=ue(t);return e.Ee||(e.Ee=pR(e,ui(t))),e.Ee}function pR(t,e){if(t.limitType==="F")return dd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ra(s.field,i)}));const n=t.endAt?new na(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new na(t.startAt.position,t.startAt.inclusive):null;return dd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ac(t,e,n){return new Ma(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function La(t,e){return cu(cn(t),cn(e))&&t.limitType===e.limitType}function Cg(t){return`${lu(cn(t))}|lt:${t.limitType}`}function Qr(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Rg(s))).join(", ")}]`),Oa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>ys(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>ys(s))).join(",")),`Target(${r})`})(cn(t))}; limitType=${t.limitType})`}function Fa(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of ui(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(a,l,c){const h=hd(a,l,c);return a.inclusive?h<=0:h<0})(r.startAt,ui(r),s)||r.endAt&&!(function(a,l,c){const h=hd(a,l,c);return a.inclusive?h>=0:h>0})(r.endAt,ui(r),s))})(t,e)}function mR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function kg(t){return(e,n)=>{let r=!1;for(const s of ui(t)){const i=gR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function gR(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):(function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?_s(c,h):oe(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Mr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return pg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=new Be(re.comparator);function On(){return _R}const Vg=new Be(re.comparator);function Qs(...t){let e=Vg;for(const n of t)e=e.insert(n.key,n);return e}function Dg(t){let e=Vg;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function br(){return hi()}function Ng(){return hi()}function hi(){return new Lr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const yR=new Be(re.comparator),vR=new Je(re.comparator);function _e(...t){let e=vR;for(const n of t)e=e.add(n);return e}const ER=new Je(ge);function TR(){return ER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zo(e)?"-0":e}}function Og(t){return{integerValue:""+t}}function IR(t,e){return GS(e)?Og(e):hu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this._=void 0}}function wR(t,e,n){return t instanceof sa?(function(s,i){const a={fields:{[_g]:{stringValue:gg},[vg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ou(i)&&(i=xa(i)),i&&(a.fields[yg]=i),{mapValue:a}})(n,e):t instanceof Pi?Mg(t,e):t instanceof Ci?Lg(t,e):(function(s,i){const a=xg(s,i),l=md(a)+md(s.Ae);return sc(a)&&sc(s.Ae)?Og(l):hu(s.serializer,l)})(t,e)}function AR(t,e,n){return t instanceof Pi?Mg(t,e):t instanceof Ci?Lg(t,e):n}function xg(t,e){return t instanceof ia?(function(r){return sc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class sa extends Ua{}class Pi extends Ua{constructor(e){super(),this.elements=e}}function Mg(t,e){const n=Fg(e);for(const r of t.elements)n.some((s=>gn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Ci extends Ua{constructor(e){super(),this.elements=e}}function Lg(t,e){let n=Fg(e);for(const r of t.elements)n=n.filter((s=>!gn(s,r)));return{arrayValue:{values:n}}}class ia extends Ua{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function md(t){return He(t.integerValue||t.doubleValue)}function Fg(t){return au(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function bR(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Pi&&s instanceof Pi||r instanceof Ci&&s instanceof Ci?ms(r.elements,s.elements,gn):r instanceof ia&&s instanceof ia?gn(r.Ae,s.Ae):r instanceof sa&&s instanceof sa})(t.transform,e.transform)}class SR{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ko(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ja{}function Ug(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bg(t.key,un.none()):new Bi(t.key,t.data,un.none());{const n=t.data,r=jt.empty();let s=new Je(at.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Fr(t.key,r,new Qt(s.toArray()),un.none())}}function RR(t,e,n){t instanceof Bi?(function(s,i,a){const l=s.value.clone(),c=_d(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(t,e,n):t instanceof Fr?(function(s,i,a){if(!ko(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=_d(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(jg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,n)}function fi(t,e,n,r){return t instanceof Bi?(function(i,a,l,c){if(!ko(i.precondition,a))return l;const h=i.value.clone(),f=yd(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(t,e,n,r):t instanceof Fr?(function(i,a,l,c){if(!ko(i.precondition,a))return l;const h=yd(i.fieldTransforms,c,a),f=a.data;return f.setAll(jg(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,a,l){return ko(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(t,e,n)}function PR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=xg(r.transform,s||null);i!=null&&(n===null&&(n=jt.empty()),n.set(r.field,i))}return n||null}function gd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ms(r,s,((i,a)=>bR(i,a)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bi extends ja{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fr extends ja{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function _d(t,e,n){const r=new Map;ke(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,AR(a,l,n[s]))}return r}function yd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,wR(i,a,e))}return r}class Bg extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class CR extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&RR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=fi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=fi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ng();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Ug(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ce.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),_e())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,((n,r)=>gd(n,r)))&&ms(this.baseMutations,e.baseMutations,((n,r)=>gd(n,r)))}}class fu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return yR})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new fu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,Ie;function NR(t){switch(t){case U.OK:return oe(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return oe(15467,{code:t})}}function $g(t){if(t===void 0)return Nn("GRPC error has no .code"),U.UNKNOWN;switch(t){case ze.OK:return U.OK;case ze.CANCELLED:return U.CANCELLED;case ze.UNKNOWN:return U.UNKNOWN;case ze.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case ze.INTERNAL:return U.INTERNAL;case ze.UNAVAILABLE:return U.UNAVAILABLE;case ze.UNAUTHENTICATED:return U.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case ze.NOT_FOUND:return U.NOT_FOUND;case ze.ALREADY_EXISTS:return U.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return U.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case ze.ABORTED:return U.ABORTED;case ze.OUT_OF_RANGE:return U.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return U.UNIMPLEMENTED;case ze.DATA_LOSS:return U.DATA_LOSS;default:return oe(39323,{code:t})}}(Ie=ze||(ze={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=new rr([4294967295,4294967295],0);function vd(t){const e=OR().encode(t),n=new rg;return n.update(e),new Uint8Array(n.digest())}function Ed(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new rr([n,r],0),new rr([s,i],0)]}class du{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ys(`Invalid padding: ${n}`);if(r<0)throw new Ys(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ys(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ys(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=rr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(rr.fromNumber(r)));return s.compare(xR)===1&&(s=new rr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=vd(e),[r,s]=Ed(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new du(i,s,n);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.ge===0)return;const n=vd(e),[r,s]=Ed(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ys extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,$i.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ba(ce.min(),s,new Be(ge),On(),_e())}}class $i{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $i(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Hg{constructor(e,n){this.targetId=e,this.Ce=n}}class qg{constructor(e,n,r=lt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Td{constructor(){this.ve=0,this.Fe=Id(),this.Me=lt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=_e(),n=_e(),r=_e();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:oe(38017,{changeType:i})}})),new $i(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Id()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ke(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class MR{constructor(e){this.Ge=e,this.ze=new Map,this.je=On(),this.Je=mo(),this.He=mo(),this.Ye=new Be(ge)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:oe(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(oc(i))if(r===0){const a=new re(i.path);this.et(n,a,mt.newNoDocument(a,ce.min()))}else ke(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const l=this.ut(e),c=l?this.ct(l,e,a):1;if(c!==0){this.it(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=ur(r).toUint8Array()}catch(c){if(c instanceof mg)return ps("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new du(a,s,i)}catch(c){return ps(c instanceof Ys?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,a)=>{const l=this.ot(a);if(l){if(i.current&&oc(l.target)){const c=new re(l.target.path);this.It(c).has(a)||this.Et(a,c)||this.et(a,c,mt.newNoDocument(c,e))}i.Be&&(n.set(a,i.ke()),i.qe())}}));let r=_e();this.He.forEach(((i,a)=>{let l=!0;a.forEachWhile((c=>{const h=this.ot(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const s=new Ba(e,n,this.Ye,this.je,r);return this.je=On(),this.Je=mo(),this.He=mo(),this.Ye=new Be(ge),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Td,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Je(ge),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Je(ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Td),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function mo(){return new Be(re.comparator)}function Id(){return new Be(re.comparator)}const LR={asc:"ASCENDING",desc:"DESCENDING"},FR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},UR={and:"AND",or:"OR"};class jR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function lc(t,e){return t.useProto3Json||Oa(e)?e:{value:e}}function oa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function BR(t,e){return oa(t,e.toTimestamp())}function hn(t){return ke(!!t,49232),ce.fromTimestamp((function(n){const r=cr(n);return new Le(r.seconds,r.nanos)})(t))}function pu(t,e){return cc(t,e).canonicalString()}function cc(t,e){const n=(function(s){return new Me(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function zg(t){const e=Me.fromString(t);return ke(Jg(e),10190,{key:e.toString()}),e}function uc(t,e){return pu(t.databaseId,e.path)}function Rl(t,e){const n=zg(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(Gg(n))}function Kg(t,e){return pu(t.databaseId,e)}function $R(t){const e=zg(t);return e.length===4?Me.emptyPath():Gg(e)}function hc(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gg(t){return ke(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function wd(t,e,n){return{name:uc(t,e),fields:n.value.mapValue.fields}}function HR(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:oe(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(ke(f===void 0||typeof f=="string",58123),lt.fromBase64String(f||"")):(ke(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),lt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(h){const f=h.code===void 0?U.UNKNOWN:$g(h.code);return new ee(f,h.message||"")})(a);n=new qg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Rl(t,r.document.name),i=hn(r.document.updateTime),a=r.document.createTime?hn(r.document.createTime):ce.min(),l=new jt({mapValue:{fields:r.document.fields}}),c=mt.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Vo(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Rl(t,r.document),i=r.readTime?hn(r.readTime):ce.min(),a=mt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Vo([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Rl(t,r.document),i=r.removedTargetIds||[];n=new Vo([],i,s,null)}else{if(!("filter"in e))return oe(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new DR(s,i),l=r.targetId;n=new Hg(l,a)}}return n}function qR(t,e){let n;if(e instanceof Bi)n={update:wd(t,e.key,e.value)};else if(e instanceof Bg)n={delete:uc(t,e.key)};else if(e instanceof Fr)n={update:wd(t,e.key,e.data),updateMask:ZR(e.fieldMask)};else{if(!(e instanceof CR))return oe(16599,{Vt:e.type});n={verify:uc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const l=a.transform;if(l instanceof sa)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Pi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ci)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ia)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw oe(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:BR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe(27497)})(t,e.precondition)),n}function WR(t,e){return t&&t.length>0?(ke(e!==void 0,14353),t.map((n=>(function(s,i){let a=s.updateTime?hn(s.updateTime):hn(i);return a.isEqual(ce.min())&&(a=hn(i)),new SR(a,s.transformResults||[])})(n,e)))):[]}function zR(t,e){return{documents:[Kg(t,e.path)]}}function KR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Kg(t,s);const i=(function(h){if(h.length!==0)return Yg(_n.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((f=>(function(m){return{field:Yr(m.field),direction:YR(m.dir)}})(f)))})(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=lc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:n,parent:s}}function GR(t){let e=$R(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=Qg(p);return m instanceof _n&&bg(m)?m.getFilters():[m]})(n.where));let a=[];n.orderBy&&(a=(function(p){return p.map((m=>(function(C){return new ra(Jr(C.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,Oa(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,_=p.values||[];return new na(_,m)})(n.startAt));let h=null;return n.endAt&&(h=(function(p){const m=!p.before,_=p.values||[];return new na(_,m)})(n.endAt)),fR(e,s,a,i,l,"F",c,h)}function QR(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Qg(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Jr(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Jr(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jr(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Jr(n.unaryFilter.field);return Qe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return oe(61313);default:return oe(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Qe.create(Jr(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return oe(58110);default:return oe(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return _n.create(n.compositeFilter.filters.map((r=>Qg(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe(1026)}})(n.compositeFilter.op))})(t):oe(30097,{filter:t})}function YR(t){return LR[t]}function JR(t){return FR[t]}function XR(t){return UR[t]}function Yr(t){return{fieldPath:t.canonicalString()}}function Jr(t){return at.fromServerFormat(t.fieldPath)}function Yg(t){return t instanceof Qe?(function(n){if(n.op==="=="){if(ud(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NAN"}};if(cd(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ud(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NAN"}};if(cd(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yr(n.field),op:JR(n.op),value:n.value}}})(t):t instanceof _n?(function(n){const r=n.getFilters().map((s=>Yg(s)));return r.length===1?r[0]:{compositeFilter:{op:XR(n.op),filters:r}}})(t):oe(54877,{filter:t})}function ZR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Jg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,r,s,i=ce.min(),a=ce.min(),l=lt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e){this.yt=e}}function tP(t){const e=GR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ac(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(){this.Cn=new rP}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(lr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class rP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Je(Me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Je(Me.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xg=41943040;class Pt{static withCacheSize(e){return new Pt(e,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(Xg,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new vs(0)}static cr(){return new vs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="LruGarbageCollector",sP=1048576;function Sd([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class iP{constructor(e){this.Ir=e,this.buffer=new Je(Sd),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Sd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class oP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){X(bd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ss(n)?X(bd,"Ignoring IndexedDB error during garbage collection: ",n):await bs(n)}await this.Vr(3e5)}))}}class aP{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Na.ce);const r=new iP(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Ad)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ad):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,a,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),Gr()<=me.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function lP(t,e){return new aP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(){this.changes=new Lr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&fi(r.mutation,s,Qt.empty(),Le.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,_e()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=_e()){const s=br();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let a=Qs();return i.forEach(((l,c)=>{a=a.insert(l,c.overlayedDocument)})),a}))))}getOverlayedDocuments(e,n){const r=br();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,_e())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,l)=>{n.set(a,l)}))}))}computeViews(e,n,r,s){let i=On();const a=hi(),l=(function(){return hi()})();return n.forEach(((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Fr)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),fi(f.mutation,h,f.mutation.getFieldMask(),Le.now())):a.set(h.key,Qt.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((h,f)=>a.set(h,f))),n.forEach(((h,f)=>l.set(h,new uP(f,a.get(h)??null)))),l)))}recalculateAndSaveOverlays(e,n){const r=hi();let s=new Be(((a,l)=>a-l)),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((a=>{for(const l of a)l.keys().forEach((c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||Qt.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||_e()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=Ng();f.forEach((m=>{if(!i.has(m)){const _=Ug(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(a){return re.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(br());let l=Ai,c=i;return a.next((h=>L.forEach(h,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,c,h,_e()))).next((f=>({batchId:l,changes:Dg(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next((r=>{let s=Qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Qs();return this.indexManager.getCollectionParents(e,i).next((l=>L.forEach(l,(c=>{const h=(function(p,m){return new Ma(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((f=>{f.forEach(((p,m)=>{a=a.insert(p,m)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((a=>{i.forEach(((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,mt.newInvalidDocument(f)))}));let l=Qs();return a.forEach(((c,h)=>{const f=i.get(c);f!==void 0&&fi(f.mutation,h,Qt.empty(),Le.now()),Fa(n,h)&&(l=l.insert(c,h))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return L.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:hn(s.createTime)}})(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:tP(s.bundledQuery),readTime:hn(s.readTime)}})(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(){this.overlays=new Be(re.comparator),this.qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=br();return L.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=br(),i=n.length+1,a=new re(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be(((h,f)=>h-f));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=br(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=br(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((h,f)=>l.set(h,f))),!(l.size()>=s)););return L.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new VR(n,r));let i=this.qr.get(n);i===void 0&&(i=_e(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this.Qr=new Je(Ze.$r),this.Ur=new Je(Ze.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new Ze(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new re(new Me([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new re(new Me([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=_e();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const n=new Ze(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return re.comparator(e.key,n.key)||ge(e.Yr,n.Yr)}static Kr(e,n){return ge(e.Yr,n.Yr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Je(Ze.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new kR(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new Ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,n){return L.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?iu:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const l=this.Xr(a.Yr);i.push(l)})),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(ge);return n.forEach((s=>{const i=new Ze(s,0),a=new Ze(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(l=>{r=r.add(l.Yr)}))})),L.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const a=new Ze(new re(i),0);let l=new Je(ge);return this.Zr.forEachWhile((c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Yr)),!0)}),a),L.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){ke(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return L.forEach(n.mutations,(s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new Ze(n,0),s=this.Zr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e){this.ri=e,this.docs=(function(){return new Be(re.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))})),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=On();const a=n.path,l=new re(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||qS(HS(f),r)<=0||(s.has(f.key)||Fa(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){oe(9500)}ii(e,n){return L.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new _P(this)}getSize(e){return L.resolve(this.size)}}class _P extends cP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),L.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e){this.persistence=e,this.si=new Lr((n=>lu(n)),cu),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.oi=0,this._i=new mu,this.targetCount=0,this.ai=vs.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),L.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Pr(n),L.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),L.waitFor(i).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n){this.ui={},this.overlays={},this.ci=new Na(0),this.li=!1,this.li=!0,this.hi=new pP,this.referenceDelegate=e(this),this.Pi=new yP(this),this.indexManager=new nP,this.remoteDocumentCache=(function(s){return new gP(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new eP(n),this.Ii=new fP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new mP(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new vP(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return L.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class vP extends zS{constructor(e){super(),this.currentSequenceNumber=e}}class gu{constructor(e){this.persistence=e,this.Ri=new mu,this.Vi=null}static mi(e){return new gu(e)}get fi(){if(this.Vi)return this.Vi;throw oe(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,(r=>{const s=re.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,ce.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class aa{constructor(e,n){this.persistence=e,this.pi=new Lr((r=>QS(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=lP(this,n)}static mi(e,n){return new aa(e,n)}Ei(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return L.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?L.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,n).next((l=>{l||(r++,i.removeEntry(a,ce.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Po(e.data.value)),n}br(e,n,r){return L.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _u(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return XI()?8:KS(vt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new EP;return this.Ss(e,n,a).next((l=>{if(i.result=l,this.Vs)return this.bs(e,n,a,l.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(Gr()<=me.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Qr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(Gr()<=me.DEBUG&&X("QueryEngine","Query:",Qr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Gr()<=me.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Qr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):L.resolve())}ys(e,n){if(pd(n))return L.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=ac(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=_e(...i);return this.ps.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const h=this.Ds(n,l);return this.Cs(n,h,a,c.readTime)?this.ys(e,ac(n,null,"F")):this.vs(e,h,n,c)}))))})))))}ws(e,n,r,s){return pd(n)||s.isEqual(ce.min())?L.resolve(null):this.ps.getDocuments(e,r).next((i=>{const a=this.Ds(n,i);return this.Cs(n,a,r,s)?L.resolve(null):(Gr()<=me.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qr(n)),this.vs(e,a,n,$S(s,Ai)).next((l=>l)))}))}Ds(e,n){let r=new Je(kg(e));return n.forEach(((s,i)=>{Fa(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Gr()<=me.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Qr(n)),this.ps.getDocumentsMatchingQuery(e,n,lr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="LocalStore",IP=3e8;class wP{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Be(ge),this.xs=new Lr((i=>lu(i)),cu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function AP(t,e,n,r){return new wP(t,e,n,r)}async function e_(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],l=[];let c=_e();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((h=>({Ls:h,removedBatchIds:a,addedBatchIds:l})))}))}))}function bP(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,h,f){const p=h.batch,m=p.keys();let _=L.resolve();return m.forEach((C=>{_=_.next((()=>f.getEntry(c,C))).next((D=>{const x=h.docVersions.get(C);ke(x!==null,48541),D.version.compareTo(x)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))}))})),_.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=_e();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function t_(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function SP(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(lt.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),(function(D,x,$){return D.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=IP?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(m,_,f)&&l.push(n.Pi.updateTargetData(i,_))}));let c=On(),h=_e();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(RP(i,a,e.documentUpdates).next((f=>{c=f.ks,h=f.qs}))),!r.isEqual(ce.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return L.waitFor(l).next((()=>a.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,h))).next((()=>c))})).then((i=>(n.Ms=s,i)))}function RP(t,e,n){let r=_e(),s=_e();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let a=On();return n.forEach(((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ce.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):X(yu,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)})),{ks:a,qs:s}}))}function PP(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=iu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function CP(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,L.resolve(s)):n.Pi.allocateTargetId(r).next((a=>(s=new Xn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function fc(t,e,n){const r=ue(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Ss(a))throw a;X(yu,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Rd(t,e,n){const r=ue(t);let s=ce.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,h,f){const p=ue(c),m=p.xs.get(f);return m!==void 0?L.resolve(p.Ms.get(m)):p.Pi.getTargetData(h,f)})(r,a,cn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((c=>{i=c}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,n?s:ce.min(),n?i:_e()))).next((l=>(kP(r,mR(e),l),{documents:l,Qs:i})))))}function kP(t,e,n){let r=t.Os.get(e)||ce.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Pd{constructor(){this.activeTargetIds=TR()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VP{constructor(){this.Mo=new Pd,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Pd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="ConnectivityMonitor";class kd{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){X(Cd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){X(Cd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let go=null;function dc(){return go===null?go=(function(){return 268435456+Math.round(2147483648*Math.random())})():go++,"0x"+go.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="RestConnection",NP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class OP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ea?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const a=dc(),l=this.zo(e,n.toUriEncodedString());X(Pl,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:h}=new URL(l),f=Ts(h);return this.Jo(e,l,c,r,f).then((p=>(X(Pl,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw ps(Pl,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p}))}Ho(e,n,r,s,i,a){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+As})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=NP[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class MP extends OP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const a=dc();return new Promise(((l,c)=>{const h=new sg;h.setWithCredentials(!0),h.listenOnce(ig.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Ro.NO_ERROR:const p=h.getResponseJson();X(ft,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case Ro.TIMEOUT:X(ft,`RPC '${e}' ${a} timed out`),c(new ee(U.DEADLINE_EXCEEDED,"Request time out"));break;case Ro.HTTP_ERROR:const m=h.getStatus();if(X(ft,`RPC '${e}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let _=h.getResponseJson();Array.isArray(_)&&(_=_[0]);const C=_?.error;if(C&&C.status&&C.message){const D=(function($){const B=$.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(B)>=0?B:U.UNKNOWN})(C.status);c(new ee(D,C.message))}else c(new ee(U.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new ee(U.UNAVAILABLE,"Connection failed."));break;default:oe(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{X(ft,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(s);X(ft,`RPC '${e}' ${a} sending request:`,s),h.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=dc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=lg(),l=ag(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");X(ft,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=a.createWebChannel(f,c);this.I_(p);let m=!1,_=!1;const C=new xP({Yo:x=>{_?X(ft,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(m||(X(ft,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(ft,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},Zo:()=>p.close()}),D=(x,$,B)=>{x.listen($,(H=>{try{B(H)}catch(G){setTimeout((()=>{throw G}),0)}}))};return D(p,Gs.EventType.OPEN,(()=>{_||(X(ft,`RPC '${e}' stream ${s} transport opened.`),C.o_())})),D(p,Gs.EventType.CLOSE,(()=>{_||(_=!0,X(ft,`RPC '${e}' stream ${s} transport closed`),C.a_(),this.E_(p))})),D(p,Gs.EventType.ERROR,(x=>{_||(_=!0,ps(ft,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),C.a_(new ee(U.UNAVAILABLE,"The operation could not be completed")))})),D(p,Gs.EventType.MESSAGE,(x=>{if(!_){const $=x.data[0];ke(!!$,16349);const B=$,H=B?.error||B[0]?.error;if(H){X(ft,`RPC '${e}' stream ${s} received error:`,H);const G=H.status;let de=(function(v){const I=ze[v];if(I!==void 0)return $g(I)})(G),ve=H.message;de===void 0&&(de=U.INTERNAL,ve="Unknown error status: "+G+" with message "+H.message),_=!0,C.a_(new ee(de,ve)),p.close()}else X(ft,`RPC '${e}' stream ${s} received:`,$),C.u_($)}})),D(l,og.STAT_EVENT,(x=>{x.stat===tc.PROXY?X(ft,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===tc.NOPROXY&&X(ft,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.__()}),0),C}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Cl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(t){return new jR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="PersistentStream";class r_{constructor(e,n,r,s,i,a,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new n_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new ee(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return X(Vd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(X(Vd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class LP extends r_{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=HR(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ce.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ce.min():a.readTime?hn(a.readTime):ce.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=hc(this.serializer),n.addTarget=(function(i,a){let l;const c=a.target;if(l=oc(c)?{documents:zR(i,c)}:{query:KR(i,c).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Wg(i,a.resumeToken);const h=lc(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ce.min())>0){l.readTime=oa(i,a.snapshotVersion.toTimestamp());const h=lc(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const r=QR(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=hc(this.serializer),n.removeTarget=e,this.q_(n)}}class FP extends r_{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=WR(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=hc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>qR(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{}class jP extends UP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new ee(U.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,cc(n,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee(U.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(e,cc(n,r),s,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ee(U.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class BP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Nn(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="RemoteStore";class $P{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{Ur(this)&&(X(Nr,"Restarting streams for network reachability change."),await(async function(c){const h=ue(c);h.Ea.add(4),await Hi(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Ha(h)})(this))}))})),this.Ra=new BP(r,s)}}async function Ha(t){if(Ur(t))for(const e of t.da)await e(!0)}async function Hi(t){for(const e of t.da)await e(!1)}function s_(t,e){const n=ue(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Iu(n)?Tu(n):Rs(n).O_()&&Eu(n,e))}function vu(t,e){const n=ue(t),r=Rs(n);n.Ia.delete(e),r.O_()&&i_(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ur(n)&&n.Ra.set("Unknown"))}function Eu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Rs(t).Y_(e)}function i_(t,e){t.Va.Ue(e),Rs(t).Z_(e)}function Tu(t){t.Va=new MR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Rs(t).start(),t.Ra.ua()}function Iu(t){return Ur(t)&&!Rs(t).x_()&&t.Ia.size>0}function Ur(t){return ue(t).Ea.size===0}function o_(t){t.Va=void 0}async function HP(t){t.Ra.set("Online")}async function qP(t){t.Ia.forEach(((e,n)=>{Eu(t,e)}))}async function WP(t,e){o_(t),Iu(t)?(t.Ra.ha(e),Tu(t)):t.Ra.set("Unknown")}async function zP(t,e,n){if(t.Ra.set("Online"),e instanceof qg&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))})(t,e)}catch(r){X(Nr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await la(t,r)}else if(e instanceof Vo?t.Va.Ze(e):e instanceof Hg?t.Va.st(e):t.Va.tt(e),!n.isEqual(ce.min()))try{const r=await t_(t.localStore);n.compareTo(r)>=0&&await(function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach(((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(c.resumeToken,a))}})),l.targetMismatches.forEach(((c,h)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(lt.EMPTY_BYTE_STRING,f.snapshotVersion)),i_(i,c);const p=new Xn(f.target,c,h,f.sequenceNumber);Eu(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){X(Nr,"Failed to raise snapshot:",r),await la(t,r)}}async function la(t,e,n){if(!Ss(e))throw e;t.Ea.add(1),await Hi(t),t.Ra.set("Offline"),n||(n=()=>t_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{X(Nr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Ha(t)}))}function a_(t,e){return e().catch((n=>la(t,n,e)))}async function qa(t){const e=ue(t),n=fr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:iu;for(;KP(e);)try{const s=await PP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,GP(e,s)}catch(s){await la(e,s)}l_(e)&&c_(e)}function KP(t){return Ur(t)&&t.Ta.length<10}function GP(t,e){t.Ta.push(e);const n=fr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function l_(t){return Ur(t)&&!fr(t).x_()&&t.Ta.length>0}function c_(t){fr(t).start()}async function QP(t){fr(t).ra()}async function YP(t){const e=fr(t);for(const n of t.Ta)e.ea(n.mutations)}async function JP(t,e,n){const r=t.Ta.shift(),s=fu.from(r,e,n);await a_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await qa(t)}async function XP(t,e){e&&fr(t).X_&&await(async function(r,s){if((function(a){return NR(a)&&a!==U.ABORTED})(s.code)){const i=r.Ta.shift();fr(r).B_(),await a_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await qa(r)}})(t,e),l_(t)&&c_(t)}async function Dd(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),X(Nr,"RemoteStore received new credentials");const r=Ur(n);n.Ea.add(3),await Hi(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Ha(n)}async function ZP(t,e){const n=ue(t);e?(n.Ea.delete(2),await Ha(n)):e||(n.Ea.add(2),await Hi(n),n.Ra.set("Unknown"))}function Rs(t){return t.ma||(t.ma=(function(n,r,s){const i=ue(n);return i.sa(),new LP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:HP.bind(null,t),t_:qP.bind(null,t),r_:WP.bind(null,t),H_:zP.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Iu(t)?Tu(t):t.Ra.set("Unknown")):(await t.ma.stop(),o_(t))}))),t.ma}function fr(t){return t.fa||(t.fa=(function(n,r,s){const i=ue(n);return i.sa(),new FP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:QP.bind(null,t),r_:XP.bind(null,t),ta:YP.bind(null,t),na:JP.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await qa(t)):(await t.fa.stop(),t.Ta.length>0&&(X(Nr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new wu(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Au(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),Ss(t))return new ee(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{static emptySet(e){return new ls(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Qs(),this.sortedSet=new Be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.ga=new Be(re.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):oe(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Es{constructor(e,n,r,s,i,a,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach((l=>{a.push({type:0,doc:l})})),new Es(e,n,ls.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&La(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class t0{constructor(){this.queries=Od(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ue(n),i=s.queries;s.queries=Od(),i.forEach(((a,l)=>{for(const c of l.Sa)c.onError(r)}))})(this,new ee(U.ABORTED,"Firestore shutting down"))}}function Od(){return new Lr((t=>Cg(t)),La)}async function n0(t,e){const n=ue(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new e0,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Au(a,`Initialization of query '${Qr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&bu(n)}async function r0(t,e){const n=ue(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function s0(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&bu(n)}function i0(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function bu(t){t.Ca.forEach((e=>{e.next()}))}var pc,xd;(xd=pc||(pc={})).Ma="default",xd.Cache="cache";class o0{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==pc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.key=e}}class h_{constructor(e){this.key=e}}class a0{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=_e(),this.mutatedKeys=_e(),this.eu=kg(e),this.tu=new ls(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Nd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),_=Fa(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),D=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let x=!1;m&&_?m.data.isEqual(_.data)?C!==D&&(r.track({type:3,doc:_}),x=!0):this.su(m,_)||(r.track({type:2,doc:_}),x=!0,(c&&this.eu(_,c)>0||h&&this.eu(_,h)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),x=!0):m&&!_&&(r.track({type:1,doc:m}),x=!0,(c||h)&&(l=!0)),x&&(_?(a=a.add(_),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((f,p)=>(function(_,C){const D=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe(20277,{Rt:x})}};return D(_)-D(C)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,h=c!==this.Za;return this.Za=c,a.length!==0||h?{snapshot:new Es(this.query,e.tu,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Nd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=_e(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new h_(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new u_(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=_e();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Es.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Su="SyncEngine";class l0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class c0{constructor(e){this.key=e,this.hu=!1}}class u0{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Lr((l=>Cg(l)),La),this.Iu=new Map,this.Eu=new Set,this.du=new Be(re.comparator),this.Au=new Map,this.Ru=new mu,this.Vu={},this.mu=new Map,this.fu=vs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function h0(t,e,n=!0){const r=__(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await f_(r,e,n,!0),s}async function f0(t,e){const n=__(t);await f_(n,e,!0,!1)}async function f_(t,e,n,r){const s=await CP(t.localStore,cn(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await d0(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&s_(t.remoteStore,s),l}async function d0(t,e,n,r,s){t.pu=(p,m,_)=>(async function(D,x,$,B){let H=x.view.ru($);H.Cs&&(H=await Rd(D.localStore,x.query,!1).then((({documents:w})=>x.view.ru(w,H))));const G=B&&B.targetChanges.get(x.targetId),de=B&&B.targetMismatches.get(x.targetId)!=null,ve=x.view.applyChanges(H,D.isPrimaryClient,G,de);return Ld(D,x.targetId,ve.au),ve.snapshot})(t,p,m,_);const i=await Rd(t.localStore,e,!0),a=new a0(e,i.Qs),l=a.ru(i.documents),c=$i.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(l,t.isPrimaryClient,c);Ld(t,n,h.au);const f=new l0(e,n,a);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function p0(t,e,n){const r=ue(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!La(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&vu(r.remoteStore,s.targetId),mc(r,s.targetId)})).catch(bs)):(mc(r,s.targetId),await fc(r.localStore,s.targetId,!0))}async function m0(t,e){const n=ue(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),vu(n.remoteStore,r.targetId))}async function g0(t,e,n){const r=w0(t);try{const s=await(function(a,l){const c=ue(a),h=Le.now(),f=l.reduce(((_,C)=>_.add(C.key)),_e());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let C=On(),D=_e();return c.Ns.getEntries(_,f).next((x=>{C=x,C.forEach((($,B)=>{B.isValidDocument()||(D=D.add($))}))})).next((()=>c.localDocuments.getOverlayedDocuments(_,C))).next((x=>{p=x;const $=[];for(const B of l){const H=PR(B,p.get(B.key).overlayedDocument);H!=null&&$.push(new Fr(B.key,H,Ig(H.value.mapValue),un.exists(!0)))}return c.mutationQueue.addMutationBatch(_,h,$,l)})).next((x=>{m=x;const $=x.applyToLocalDocumentSet(p,D);return c.documentOverlayCache.saveOverlays(_,x.batchId,$)}))})).then((()=>({batchId:m.batchId,changes:Dg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,c){let h=a.Vu[a.currentUser.toKey()];h||(h=new Be(ge)),h=h.insert(l,c),a.Vu[a.currentUser.toKey()]=h})(r,s.batchId,n),await qi(r,s.changes),await qa(r.remoteStore)}catch(s){const i=Au(s,"Failed to persist write");n.reject(i)}}async function d_(t,e){const n=ue(t);try{const r=await SP(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=n.Au.get(i);a&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?ke(a.hu,14607):s.removedDocuments.size>0&&(ke(a.hu,42227),a.hu=!1))})),await qi(n,r,e)}catch(r){await bs(r)}}function Md(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const c=ue(a);c.onlineState=l;let h=!1;c.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(l)&&(h=!0)})),h&&bu(c)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _0(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new Be(re.comparator);a=a.insert(i,mt.newNoDocument(i,ce.min()));const l=_e().add(i),c=new Ba(ce.min(),new Map,new Be(ge),a,l);await d_(r,c),r.du=r.du.remove(i),r.Au.delete(e),Ru(r)}else await fc(r.localStore,e,!1).then((()=>mc(r,e,n))).catch(bs)}async function y0(t,e){const n=ue(t),r=e.batch.batchId;try{const s=await bP(n.localStore,e);m_(n,r,null),p_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qi(n,s)}catch(s){await bs(s)}}async function v0(t,e,n){const r=ue(t);try{const s=await(function(a,l){const c=ue(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next((p=>(ke(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p)))).next((()=>c.mutationQueue.performConsistencyCheck(h))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>c.localDocuments.getDocuments(h,f)))}))})(r.localStore,e);m_(r,e,n),p_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qi(r,s)}catch(s){await bs(s)}}function p_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function m_(t,e,n){const r=ue(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function mc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||g_(t,r)}))}function g_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(vu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Ru(t))}function Ld(t,e,n){for(const r of n)r instanceof u_?(t.Ru.addReference(r.key,e),E0(t,r)):r instanceof h_?(X(Su,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||g_(t,r.key)):oe(19791,{wu:r})}function E0(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(X(Su,"New document in limbo: "+n),t.Eu.add(r),Ru(t))}function Ru(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new re(Me.fromString(e)),r=t.fu.next();t.Au.set(r,new c0(n)),t.du=t.du.insert(n,r),s_(t.remoteStore,new Xn(cn(uu(n.path)),r,"TargetPurposeLimboResolution",Na.ce))}}async function qi(t,e,n){const r=ue(t),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,c)=>{a.push(r.pu(c,e,n).then((h=>{if((h||n)&&r.isPrimaryClient){const f=h?!h.fromCache:n?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(h){s.push(h);const f=_u.As(c.targetId,h);i.push(f)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(c,h){const f=ue(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>L.forEach(h,(m=>L.forEach(m.Es,(_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>L.forEach(m.ds,(_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!Ss(p))throw p;X(yu,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const _=f.Ms.get(m),C=_.snapshotVersion,D=_.withLastLimboFreeSnapshotVersion(C);f.Ms=f.Ms.insert(m,D)}}})(r.localStore,i))}async function T0(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){X(Su,"User change. New user:",e.toKey());const r=await e_(n.localStore,e);n.currentUser=e,(function(i,a){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new ee(U.CANCELLED,a))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qi(n,r.Ls)}}function I0(t,e){const n=ue(t),r=n.Au.get(e);if(r&&r.hu)return _e().add(r.key);{let s=_e();const i=n.Iu.get(e);if(!i)return s;for(const a of i){const l=n.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function __(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=d_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=I0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_0.bind(null,e),e.Pu.H_=s0.bind(null,e.eventManager),e.Pu.yu=i0.bind(null,e.eventManager),e}function w0(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=y0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=v0.bind(null,e),e}class ca{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$a(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return AP(this.persistence,new TP,e.initialUser,this.serializer)}Cu(e){return new Zg(gu.mi,this.serializer)}Du(e){return new VP}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ca.provider={build:()=>new ca};class A0 extends ca{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ke(this.persistence.referenceDelegate instanceof aa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new oP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new Zg((r=>aa.mi(r,n)),this.serializer)}}class gc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Md(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=T0.bind(null,this.syncEngine),await ZP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new t0})()}createDatastore(e){const n=$a(e.databaseInfo.databaseId),r=(function(i){return new MP(i)})(e.databaseInfo);return(function(i,a,l,c){return new jP(i,a,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,a,l){return new $P(r,s,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>Md(this.syncEngine,n,0)),(function(){return kd.v()?new kd:new DP})())}createSyncEngine(e,n){return(function(s,i,a,l,c,h,f){const p=new u0(s,i,a,l,c,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=ue(n);X(Nr,"RemoteStore shutting down."),r.Ea.add(5),await Hi(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}gc.provider={build:()=>new gc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="FirestoreClient";class S0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=ru.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{X(dr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(X(dr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Au(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function kl(t,e){t.asyncQueue.verifyOperationInProgress(),X(dr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await e_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Fd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await R0(t);X(dr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Dd(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Dd(e.remoteStore,s))),t._onlineComponents=e}async function R0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(dr,"Using user provided OfflineComponentProvider");try{await kl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;ps("Error using user provided cache. Falling back to memory cache: "+n),await kl(t,new ca)}}else X(dr,"Using default OfflineComponentProvider"),await kl(t,new A0(void 0));return t._offlineComponents}async function y_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(dr,"Using user provided OnlineComponentProvider"),await Fd(t,t._uninitializedComponentsProvider._online)):(X(dr,"Using default OnlineComponentProvider"),await Fd(t,new gc))),t._onlineComponents}function P0(t){return y_(t).then((e=>e.syncEngine))}async function C0(t){const e=await y_(t),n=e.eventManager;return n.onListen=h0.bind(null,e.syncEngine),n.onUnlisten=p0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=f0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=m0.bind(null,e.syncEngine),n}function k0(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,c,h){const f=new b0({next:m=>{f.Nu(),a.enqueueAndForget((()=>r0(i,p)));const _=m.docs.has(l);!_&&m.fromCache?h.reject(new ee(U.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?h.reject(new ee(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new o0(uu(l.path),f,{includeMetadataChanges:!0,qa:!0});return n0(i,p)})(await C0(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="firestore.googleapis.com",jd=!0;class Bd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=E_,this.ssl=jd}else this.host=e.host,this.ssl=e.ssl??jd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sP)throw new ee(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=v_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new VS;switch(r.type){case"firstParty":return new xS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Ud.get(n);r&&(X("ComponentProvider","Removing Datastore"),Ud.delete(n),r.terminate())})(this),Promise.resolve()}}function V0(t,e,n,r={}){t=gs(t,Wa);const s=Ts(e),i=t._getSettings(),a={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(mm(`https://${l}`),gm("Firestore",!0)),i.host!==E_&&i.host!==l&&ps("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!Pr(c,a)&&(t._setSettings(c),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=dt.MOCK_USER;else{h=HI(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ee(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new dt(p)}t._authCredentials=new DS(new ug(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pu(this.firestore,e,this._query)}}class Ye{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ye(this.firestore,e,this._key)}toJSON(){return{type:Ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ji(n,Ye._jsonSchema))return new Ye(e,r||null,new re(Me.fromString(n.referencePath)))}}Ye._jsonSchemaVersion="firestore/documentReference/1.0",Ye._jsonSchema={type:Ke("string",Ye._jsonSchemaVersion),referencePath:Ke("string")};class ir extends Pu{constructor(e,n,r){super(e,n,uu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ye(this.firestore,null,new re(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function D0(t,e,...n){if(t=qt(t),hg("collection","path",e),t instanceof Wa){const r=Me.fromString(e,...n);return td(r),new ir(t,null,r)}{if(!(t instanceof Ye||t instanceof ir))throw new ee(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return td(r),new ir(t.firestore,null,r)}}function Cu(t,e,...n){if(t=qt(t),arguments.length===1&&(e=ru.newId()),hg("doc","path",e),t instanceof Wa){const r=Me.fromString(e,...n);return ed(r),new Ye(t,null,new re(r))}{if(!(t instanceof Ye||t instanceof ir))throw new ee(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return ed(r),new Ye(t.firestore,t instanceof ir?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="AsyncQueue";class Hd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new n_(this,"async_queue_retry"),this._c=()=>{const r=Cl();r&&X($d,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Cl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Cl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new sr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ss(e))throw e;X($d,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Nn("INTERNAL UNHANDLED ERROR: ",qd(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=wu.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&oe(47125,{Pc:qd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function qd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class za extends Wa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Hd,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hd(e),this._firestoreClient=void 0,await e}}}function N0(t,e){const n=typeof t=="object"?t:Em(),r=typeof t=="string"?t:ea,s=Kc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=BI("firestore");i&&V0(s,...i)}return s}function T_(t){if(t._terminated)throw new ee(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||O0(t),t._firestoreClient}function O0(t){const e=t._freezeSettings(),n=(function(s,i,a,l){return new XS(s,i,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,v_(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new S0(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bt(lt.fromBase64String(e))}catch(n){throw new ee(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bt(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ji(e,Bt._jsonSchema))return Bt.fromBase64String(e.bytes)}}Bt._jsonSchemaVersion="firestore/bytes/1.0",Bt._jsonSchema={type:Ke("string",Bt._jsonSchemaVersion),bytes:Ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:fn._jsonSchemaVersion}}static fromJSON(e){if(ji(e,fn._jsonSchema))return new fn(e.latitude,e.longitude)}}fn._jsonSchemaVersion="firestore/geoPoint/1.0",fn._jsonSchema={type:Ke("string",fn._jsonSchemaVersion),latitude:Ke("number"),longitude:Ke("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ji(e,dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new dn(e.vectorValues);throw new ee(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dn._jsonSchemaVersion="firestore/vectorValue/1.0",dn._jsonSchema={type:Ke("string",dn._jsonSchemaVersion),vectorValues:Ke("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=/^__.*__$/;class M0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bi(e,this.data,n,this.fieldTransforms)}}function w_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe(40011,{Ac:t})}}class Vu{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Vu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ua(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(w_(this.Ac)&&x0.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class L0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||$a(e)}Cc(e,n,r,s=!1){return new Vu({Ac:e,methodName:n,Dc:r,path:at.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function A_(t){const e=t._freezeSettings(),n=$a(t._databaseId);return new L0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function b_(t,e,n,r,s,i={}){const a=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);C_("Data must be an object, but it was:",a,r);const l=R_(r,a);let c,h;if(i.merge)c=new Qt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=F0(e,p,n);if(!a.contains(m))throw new ee(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);j0(f,m)||f.push(m)}c=new Qt(f),h=a.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,h=a.fieldTransforms;return new M0(new jt(l),c,h)}function S_(t,e){if(P_(t=qt(t)))return C_("Unsupported field value:",e,t),R_(t,e);if(t instanceof I_)return(function(r,s){if(!w_(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const l of r){let c=S_(l,s.wc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=qt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return IR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:oa(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:oa(s.serializer,i)}}if(r instanceof fn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Bt)return{bytesValue:Wg(s.serializer,r._byteString)};if(r instanceof Ye){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:pu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof dn)return(function(a,l){return{mapValue:{fields:{[Eg]:{stringValue:Tg},[ta]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return hu(l.serializer,h)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${su(r)}`)})(t,e)}function R_(t,e){const n={};return pg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mr(t,((r,s)=>{const i=S_(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function P_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof fn||t instanceof Bt||t instanceof Ye||t instanceof I_||t instanceof dn)}function C_(t,e,n){if(!P_(n)||!fg(n)){const r=su(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function F0(t,e,n){if((e=qt(e))instanceof ku)return e._internalPath;if(typeof e=="string")return k_(t,e);throw ua("Field path arguments must be of type string or ",t,!1,void 0,n)}const U0=new RegExp("[~\\*/\\[\\]]");function k_(t,e,n){if(e.search(U0)>=0)throw ua(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ku(...e.split("."))._internalPath}catch{throw ua(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ua(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new ee(U.INVALID_ARGUMENT,l+t+c)}function j0(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new B0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(D_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class B0 extends V_{data(){return super.data()}}function D_(t,e){return typeof e=="string"?k_(t,e):e instanceof ku?e._internalPath:e._delegate._internalPath}class $0{convertValue(e,n="none"){switch(hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Mr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[ta].arrayValue?.values?.map((r=>He(r.doubleValue)));return new dn(n)}convertGeoPoint(e){return new fn(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bi(e));default:return null}}convertTimestamp(e){const n=cr(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);ke(Jg(r),9688,{name:e});const s=new Si(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Nn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Js{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rr extends V_{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Do(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(D_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Rr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Rr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Rr._jsonSchema={type:Ke("string",Rr._jsonSchemaVersion),bundleSource:Ke("string","DocumentSnapshot"),bundleName:Ke("string"),bundle:Ke("string")};class Do extends Rr{data(e={}){return super.data(e)}}class di{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Js(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Do(this._firestore,this._userDataWriter,r.key,r,new Js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const c=new Do(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Js(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Do(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Js(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:H0(l.type),doc:c,oldIndex:h,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=di._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ru.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function H0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(t){t=gs(t,Ye);const e=gs(t.firestore,za);return k0(T_(e),t._key).then((n=>G0(e,t,n)))}di._jsonSchemaVersion="firestore/querySnapshot/1.0",di._jsonSchema={type:Ke("string",di._jsonSchemaVersion),bundleSource:Ke("string","QuerySnapshot"),bundleName:Ke("string"),bundle:Ke("string")};class W0 extends $0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ye(this.firestore,null,n)}}function z0(t,e,n){t=gs(t,Ye);const r=gs(t.firestore,za),s=N_(t.converter,e);return O_(r,[b_(A_(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,un.none())])}function K0(t,e){const n=gs(t.firestore,za),r=Cu(t),s=N_(t.converter,e);return O_(n,[b_(A_(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,un.exists(!1))]).then((()=>r))}function O_(t,e){return(function(r,s){const i=new sr;return r.asyncQueue.enqueueAndForget((async()=>g0(await P0(r),s,i))),i.promise})(T_(t),e)}function G0(t,e,n){const r=n.docs.get(e._key),s=new W0(t);return new Rr(t,s,e._key,r,new Js(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){As=s})(Is),ds(new Cr("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new za(new NS(r.getProvider("auth-internal")),new MS(a,r.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ee(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Si(h.options.projectId,f)})(a,s),a);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),nr(Yf,Jf,e),nr(Yf,Jf,"esm2020")})();const Q0={apiKey:"YOUR_API_KEY",authDomain:"YOUR_AUTH_DOMAIN",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_STORAGE_BUCKET",messagingSenderId:"YOUR_MESSAGING_SENDER_ID",appId:"YOUR_APP_ID"},x_=vm(Q0),Y0=CS(x_),Du=N0(x_),J0={class:"container"},X0={class:"input-box"},Z0={class:"input-box"},eC={class:"register-link"},tC={__name:"Login",setup(t){je("");const e=je(""),n=je("");je(!1);const r=je(""),s=Fc(),i=async()=>{try{const a=Cu(Du,"users",e.value),l=await q0(a);if(!l.exists()){r.value="帳號不存在";return}const c=l.data();await gb(Y0,c.email,n.value),localStorage.setItem("username",e.value),localStorage.setItem("userId",c.userId),r.value="登入成功",setTimeout(()=>s.push("/Member"),1e3)}catch(a){r.value=`伺服器錯誤： + ${a.message}`}};return(a,l)=>{const c=Vc("router-link");return ye(),we(qe,null,[l[9]||(l[9]=V("div",{class:"head"},null,-1)),V("div",J0,[V("form",{onSubmit:xc(i,["prevent"])},[l[6]||(l[6]=V("h1",null,"會員登入",-1)),V("div",X0,[Kt(V("input",{"onUpdate:modelValue":l[0]||(l[0]=h=>e.value=h),type:"text",name:"username",placeholder:"輸入帳號",required:""},null,512),[[Jn,e.value]]),l[2]||(l[2]=V("i",{class:"fa-solid fa-user"},null,-1))]),V("div",Z0,[Kt(V("input",{"onUpdate:modelValue":l[1]||(l[1]=h=>n.value=h),type:"password",name:"password",placeholder:"輸入密碼",required:""},null,512),[[Jn,n.value]]),l[3]||(l[3]=V("i",{class:"fa-solid fa-lock"},null,-1))]),l[7]||(l[7]=V("div",{class:"remember-forgot"},[V("label",null,[V("input",{type:"checkbox"}),Xe("記住帳號")]),V("a",{href:"#"},"忘記密碼了嗎?")],-1)),l[8]||(l[8]=V("button",{class:"btn",type:"submit"},"登入",-1)),V("p",null,Ct(r.value),1),V("div",eC,[V("p",null,[l[5]||(l[5]=Xe("還沒註冊嗎? ",-1)),Se(c,{to:"/register"},{default:wt(()=>l[4]||(l[4]=[Xe("註冊",-1)])),_:1,__:[4]})])])],32)])],64)}}},nC=yn(tC,[["__scopeId","data-v-b07f3e93"]]),rC={class:"container"},sC={class:"left-panel"},iC=["value"],oC={key:0,class:"left-container"},aC={class:"image-wrapper"},lC=["src","alt"],cC={class:"right-panel"},uC={class:"placeholder"},hC=["onClick"],fC={class:"modal"},dC={__name:"Schedule",setup(t){const e=je(""),n=je([]),r=je(!1),s=je(""),i=bt(()=>qo.find(m=>m.id===Number(e.value))),a=bt(()=>i.value?new URL(Object.assign({"./assets/images/cardsImg/flower-fram.jpg":Uc,"./assets/images/cardsImg/happyworld.jpg":jc,"./assets/images/cardsImg/longteng-bridge.jpg":Bc,"./assets/images/cardsImg/shengxing-station.jpg":$c,"./assets/images/cardsImg/sueweila-farm.jpg":Hc,"./assets/images/cardsImg/tongxiao-sand.jpg":qc})[`./assets/images/cardsImg/${i.value.image}`],import.meta.url).href:""),l=()=>{if(i.value){if(n.value.length>=3){alert("最多三個");return}n.value.find(m=>m.id===i.value.id)||n.value.push(i.value)}},c=m=>{n.value=n.value.filter(_=>_.id!==m)},h=bt(()=>n.value.length==3),f=()=>{if(n.value.length<3){alert("請先安排完整的行程");return}if(!localStorage.getItem("userId")){alert("error");return}r.value=!0},p=()=>{if(!s.value.trim()){alert("輸入行程名稱");return}const m=localStorage.getItem("userId"),_=JSON.parse(localStorage.getItem("savedTrips"))||{};_[m]||(_[m]=[]),_[m].push({tripName:s.value,spots:n.value}),localStorage.setItem("savedTrips",JSON.stringify(_)),s.value="",n.value=[],r.value=!1,alert("添加成功")};return(m,_)=>(ye(),we(qe,null,[_[7]||(_[7]=V("div",{class:"head"},null,-1)),V("div",rC,[V("div",sC,[_[4]||(_[4]=V("h2",null,"自訂遊覽順序",-1)),Kt(V("select",{"onUpdate:modelValue":_[0]||(_[0]=C=>e.value=C)},[_[3]||(_[3]=V("option",{value:"",disabled:""},"請選擇景點",-1)),(ye(!0),we(qe,null,cs(ot(qo),C=>(ye(),we("option",{key:C.id,value:C.id},Ct(C.name),9,iC))),128))],512),[[EE,e.value]]),i.value?(ye(),we("div",oC,[V("div",aC,[V("img",{src:a.value,alt:i.value.name,style:{"max-width":"100%"}},null,8,lC)]),V("button",{onClick:l},"加入行程")])):jl("",!0)]),V("div",cC,[_[5]||(_[5]=V("h2",null,"我的行程",-1)),Kt(V("h3",uC,"尚無行程",512),[[Hh,n.value.length===0]]),(ye(!0),we(qe,null,cs(n.value,C=>(ye(),we("div",{class:"spot-item",key:C.id},[V("h3",null,Ct(C.name),1),V("button",{onClick:D=>c(C.id)},"移除",8,hC)]))),128)),Kt(V("button",{class:"saveBtn",onClick:f},"保存",512),[[Hh,h.value]])]),r.value?(ye(),we("div",{key:0,class:"modal-overlay",onClick:_[2]||(_[2]=xc(C=>r.value=!1,["self"]))},[V("div",fC,[_[6]||(_[6]=V("p",null,"幫行程命名吧",-1)),Kt(V("input",{"onUpdate:modelValue":_[1]||(_[1]=C=>s.value=C),placeholder:"輸入行程名稱",maxlength:"8"},null,512),[[Jn,s.value]]),V("button",{onClick:p},"儲存")])])):jl("",!0)])],64))}},pC=yn(dC,[["__scopeId","data-v-1b6e3f2d"]]),mC={class:"container"},gC={class:"input-box"},_C={class:"input-box"},yC={class:"input-box"},vC={class:"input-box"},EC={class:"register-link"},TC={__name:"Register",setup(t){const e=je(""),n=je(""),r=je(""),s=je(""),i=je(""),a=async()=>{if(!e.value||!n.value||!r.value||!s.value){i.value="資料不可空白";return}try{const l=await mb(auth,s.value,r.value);await z0(Cu(Du,"users",l.user.uid),{userId:e.value,username:n.value,email:s.value}),localStorage.setItem("userId",e.value),localStorage.setItem("username",n.value),i.value="註冊成功",setTimeout(()=>routerKey.push("/Login"),1e3)}catch(l){i.value=`註冊失敗: ${l.message}`}};return(l,c)=>{const h=Vc("router-link");return ye(),we(qe,null,[c[12]||(c[12]=V("div",{class:"head"},null,-1)),V("div",mC,[V("form",{onSubmit:xc(a,["prevent"])},[c[10]||(c[10]=V("h1",null,"會員註冊",-1)),V("div",gC,[Kt(V("input",{"onUpdate:modelValue":c[0]||(c[0]=f=>e.value=f),type:"text",name:"userId",placeholder:"輸入暱稱",required:""},null,512),[[Jn,e.value]]),c[4]||(c[4]=V("i",{class:"fa-solid fa-person"},null,-1))]),V("div",_C,[Kt(V("input",{"onUpdate:modelValue":c[1]||(c[1]=f=>n.value=f),type:"text",name:"username",placeholder:"輸入帳號",required:""},null,512),[[Jn,n.value]]),c[5]||(c[5]=V("i",{class:"fa-solid fa-user"},null,-1))]),V("div",yC,[Kt(V("input",{"onUpdate:modelValue":c[2]||(c[2]=f=>s.value=f),type:"email",name:"email",placeholder:"輸入信箱",required:""},null,512),[[Jn,s.value]]),c[6]||(c[6]=V("i",{class:"fa-solid fa-envelope"},null,-1))]),V("div",vC,[Kt(V("input",{"onUpdate:modelValue":c[3]||(c[3]=f=>r.value=f),type:"password",name:"password",placeholder:"輸入密碼",required:""},null,512),[[Jn,r.value]]),c[7]||(c[7]=V("i",{class:"fa-solid fa-lock"},null,-1))]),c[11]||(c[11]=V("button",{type:"submit",class:"btn"},"註冊",-1)),V("p",null,Ct(i.value),1),V("div",EC,[V("p",null,[c[9]||(c[9]=Xe("已經有帳號了? ",-1)),Se(h,{to:"/login"},{default:wt(()=>c[8]||(c[8]=[Xe("去登入",-1)])),_:1,__:[8]})])])],32)])],64)}}},IC=yn(TC,[["__scopeId","data-v-6804832a"]]),wC={class:"container"},AC={class:"member"},bC={class:"member-left"},SC={key:0,class:"trip-container"},RC={class:"trip-title"},PC=["onClick"],CC={key:1},kC={class:"member-right"},VC={__name:"Member",setup(t){const e=je([]),n=je("");Di(()=>{const i=localStorage.getItem("userId");if(i){const a=JSON.parse(localStorage.getItem("savedTrips")||"{}")[i]||[];e.value=a}});const r=i=>{const a=localStorage.getItem("userId");e.value.splice(i,1);const l=JSON.parse(localStorage.getItem("savedTrips")||"{}");l[a]=e.value,localStorage.setItem("savedTrips",JSON.stringify(l))},s=async()=>{if(!n.value.trim()){alert("請輸入留言");return}try{await K0(D0(Du,"message"),{userId:localStorage.getItem("userId"),username:localStorage.getItem("username"),message:n.value,Timestamp:new Date}),alert("留言成功"),n.value=""}catch(i){alert("留言失敗，請稍後再試"),console.error(i)}};return(i,a)=>(ye(),we(qe,null,[a[5]||(a[5]=V("div",{class:"head"},null,-1)),V("div",wC,[V("h1",null,"歡迎回來，"+Ct(i.userId),1),V("div",AC,[V("div",bC,[a[3]||(a[3]=V("h2",null,"我的收藏景點",-1)),e.value.length>0?(ye(),we("div",SC,[(ye(!0),we(qe,null,cs(e.value,(l,c)=>(ye(),we("div",{class:"savedItinerary",key:c},[V("div",RC,[V("h3",null,Ct(l.tripName),1),V("button",{class:"delBtn",onClick:h=>r(c)},a[1]||(a[1]=[V("i",{class:"fa-solid fa-xmark"},null,-1)]),8,PC),a[2]||(a[2]=V("div",{class:"underline"},null,-1))]),V("ul",null,[(ye(!0),we(qe,null,cs(l.spots,h=>(ye(),we("li",{key:h.id},Ct(h.name),1))),128))])]))),128))])):(ye(),we("p",CC,"尚未儲存任何行程"))]),V("div",kC,[a[4]||(a[4]=V("h2",null,"留言板",-1)),Kt(V("textarea",{"onUpdate:modelValue":a[0]||(a[0]=l=>n.value=l)},null,512),[[Jn,n.value]]),V("button",{class:"saveMsg",onClick:s},"發送")])])])],64))}},DC=yn(VC,[["__scopeId","data-v-df686176"]]),NC=[{path:"/",name:"Home",component:_I},{path:"/attraction",name:"Attraction",component:wI},{path:"/attraction/:id",name:"AttractionDetail",component:DI,props:!0},{path:"/login",name:"Login",component:nC},{path:"/schedule",name:"Schedule",component:pC},{path:"/register",name:"Register",component:IC},{path:"/member",name:"Member",component:DC}],OC=CT({history:iT("/PHPTravelWebSite/"),routes:NC});bE(zT).use(OC).mount("#app");
