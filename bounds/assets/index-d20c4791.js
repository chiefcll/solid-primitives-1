(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const y={};function re(e){y.context=e}const le=(e,t)=>e===t,fe=Symbol("solid-proxy"),ue=Symbol("solid-track"),W={equals:le};let Y=ne;const w=1,_=2,Z={owned:null,cleanups:null,context:null,owner:null};var h=null;let A=null,a=null,p=null,b=null,B=0;function ce(e,t){const n=a,s=h,i=e.length===0,r=i?Z:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},l=i?e:()=>e(()=>x(()=>M(r)));h=r,a=null;try{return $(l,!0)}finally{a=n,h=s}}function j(e,t){t=t?Object.assign({},W,t):W;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),te(n,i));return[pe.bind(n),s]}function ae(e,t,n){const s=I(e,t,!0,w);T(s)}function S(e,t,n){const s=I(e,t,!1,w);T(s)}function z(e,t,n){Y=be;const s=I(e,t,!1,w);s.user=!0,b?b.push(s):T(s)}function de(e){return $(e,!1)}function x(e){if(a===null)return e();const t=a;a=null;try{return e()}finally{a=t}}function k(e,t,n){const s=Array.isArray(e);let i,r=n&&n.defer;return l=>{let o;if(s){o=Array(e.length);for(let u=0;u<e.length;u++)o[u]=e[u]()}else o=e();if(r){r=!1;return}const f=x(()=>t(o,i,l));return i=o,f}}function he(e){z(()=>x(e))}function P(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function ee(){return h}function pe(){const e=A;if(this.sources&&(this.state||e))if(this.state===w||e)T(this);else{const t=p;p=null,$(()=>L(this),!1),p=t}if(a){const t=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(t)):(a.sources=[this],a.sourceSlots=[t]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function te(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&$(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],l=A&&A.running;l&&A.disposed.has(r),(l&&!r.tState||!l&&!r.state)&&(r.pure?p.push(r):b.push(r),r.observers&&se(r)),l||(r.state=w)}if(p.length>1e6)throw p=[],new Error},!1)),t}function T(e){if(!e.fn)return;M(e);const t=h,n=a,s=B;a=h=e,ge(e,e.value,s),a=n,h=t}function ge(e,t,n){let s;try{s=e.fn(t)}catch(i){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(M),e.owned=null),e.updatedAt=n+1,ie(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?te(e,s):e.value=s,e.updatedAt=n)}function I(e,t,n,s=w,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:n};return h===null||h!==Z&&(h.owned?h.owned.push(r):h.owned=[r]),r}function O(e){const t=A;if(e.state===0||t)return;if(e.state===_||t)return L(e);if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<B);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===w||t)T(e);else if(e.state===_||t){const i=p;p=null,$(()=>L(e,n[0]),!1),p=i}}function $(e,t){if(p)return e();let n=!1;t||(p=[]),b?n=!0:b=[],B++;try{const s=e();return ye(n),s}catch(s){n||(b=null),p=null,ie(s)}}function ye(e){if(p&&(ne(p),p=null),e)return;const t=b;b=null,t.length&&$(()=>Y(t),!1)}function ne(e){for(let t=0;t<e.length;t++)O(e[t])}function be(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:O(s)}for(y.context&&re(),t=0;t<n;t++)O(e[t])}function L(e,t){const n=A;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===w||n?i!==t&&(!i.updatedAt||i.updatedAt<B)&&O(i):(i.state===_||n)&&L(i,t))}}function se(e){const t=A;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=_,s.pure?p.push(s):b.push(s),s.observers&&se(s))}}function M(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),l=n.observerSlots.pop();s<i.length&&(r.sourceSlots[l]=s,i[s]=r,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)M(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function we(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ie(e){throw e=we(e),e}function H(e,t){return x(()=>e(t||{}))}function ve(e,t,n){let s=n.length,i=t.length,r=s,l=0,o=0,f=t[i-1].nextSibling,u=null;for(;l<i||o<r;){if(t[l]===n[o]){l++,o++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===l){const c=r<s?o?n[o-1].nextSibling:n[r-o]:f;for(;o<r;)e.insertBefore(n[o++],c)}else if(r===o)for(;l<i;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[o]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--r],c),t[i]=n[r]}else{if(!u){u=new Map;let d=o;for(;d<r;)u.set(n[d],d++)}const c=u.get(t[l]);if(c!=null)if(o<c&&c<r){let d=l,v=1,m;for(;++d<i&&d<r&&!((m=u.get(t[d]))==null||m!==c+v);)v++;if(v>c-o){const g=t[l];for(;o<c;)e.insertBefore(n[o++],g)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const F="_$DX_DELEGATE";function me(e,t,n,s={}){let i;return ce(r=>{i=r,t===document?e():C(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function oe(e,t,n){const s=document.createElement("template");if(s.innerHTML=e,t&&s.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${s.innerHTML}

${e}. Is your HTML properly formed?`;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function Ae(e,t=window.document){const n=t[F]||(t[F]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,Ee))}}function X(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function xe(e,t,n){return x(()=>e(t,n))}function C(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return N(e,t,s,n);S(i=>N(e,t(),i,n),s)}function Ee(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),y.registry&&!y.done&&(y.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function N(e,t,n,s,i){for(y.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(y.context)return n;if(r==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=E(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean"){if(y.context)return n;n=E(e,n,s)}else{if(r==="function")return S(()=>{let o=t();for(;typeof o=="function";)o=o();n=N(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],f=n&&Array.isArray(n);if(D(o,t,n,i))return S(()=>n=N(e,o,n,s,!0)),()=>n;if(y.context){if(!o.length)return n;for(let u=0;u<o.length;u++)if(o[u].parentNode)return n=o}if(o.length===0){if(n=E(e,n,s),l)return n}else f?n.length===0?q(e,o,s):ve(e,n,o):(n&&E(e),q(e,o));n=o}else if(t instanceof Node){if(y.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=E(e,n,s,t);E(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function D(e,t,n,s){let i=!1;for(let r=0,l=t.length;r<l;r++){let o=t[r],f=n&&n[r];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=D(e,o,f)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=D(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||i}else e.push(o),i=!0;else{const u=String(o);u==="<!>"?f&&f.nodeType===8&&e.push(f):f&&f.nodeType===3?(f.data=u,e.push(f)):e.push(document.createTextNode(u))}}return i}function q(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function E(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(i!==o){const f=o.parentNode===e;!r&&!l?f?e.replaceChild(i,o):e.insertBefore(i,n):f&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}var Se=(e,t)=>{let n=!1,s,i;const r=(...o)=>{i=o,!n&&(n=!0,s=setTimeout(()=>{e(...i),n=!1},t))},l=()=>{clearTimeout(s),n=!1};return ee()&&P(l),Object.assign(r,{clear:l})};function $e(e){return e!==null&&(typeof e=="object"||typeof e=="function")}var G=e=>typeof e=="function"&&!e.length?e():e,J=e=>Array.isArray(e)?e:[e];function K(e,...t){return typeof e=="function"?e(...t):e}var Ce=e=>ee()?P(e):e;function Te(e){const t={...e},n={...e},s=new Map,i=o=>{const f=s.get(o);if(f)return f[0]();const u=j(t[o],{internal:!0});return s.set(o,u),delete t[o],u[0]()},r=(o,f)=>{const u=s.get(o);if(u)return u[1](f);o in t&&(t[o]=K(f,[t[o]]))};for(const o in e)Object.defineProperty(n,o,{get:i.bind(void 0,o)});return[n,(o,f)=>{if($e(o)){const u=x(()=>Object.entries(K(o,n)));de(()=>{for(const[c,d]of u)r(c,()=>d)})}else r(o,f);return n}]}function _e(e,t,n,s){const i=e.length,r=t.length;let l=0;if(!r){for(;l<i;l++)n(e[l]);return}if(!i){for(;l<r;l++)s(t[l]);return}for(;l<r&&t[l]===e[l];l++);let o,f;t=t.slice(l),e=e.slice(l);for(o of t)e.includes(o)||s(o);for(f of e)t.includes(f)||n(f)}function Oe(e,t,n,s){return e.addEventListener(t,n,s),Ce(e.removeEventListener.bind(e,t,n,s))}function Le(e,t){const n=new ResizeObserver(e);return P(n.disconnect.bind(n)),{observe:s=>n.observe(s,t),unobserve:n.unobserve.bind(n)}}function Ne(e,t,n){const s=new WeakMap,{observe:i,unobserve:r}=Le(l,n);function l(f){for(const u of f){const{contentRect:c,target:d}=u,v=Math.round(c.width),m=Math.round(c.height),g=s.get(d);(!g||g.width!==v||g.height!==m)&&(t(c,u.target,u),s.set(d,{width:v,height:m}))}}let o;if(typeof e=="function")o=()=>J(e()).slice();else if(Array.isArray(e)&&fe in e)o=()=>(e[ue],e.slice());else{J(e).forEach(i);return}z(k(o,(f,u=[])=>_e(f,u,i,r)))}const Be={top:null,left:null,bottom:null,right:null,width:null,height:null};function U(e){if(!e)return Object.assign({},Be);const t=e.getBoundingClientRect();return{top:t.top,left:t.left,bottom:t.bottom,right:t.right,width:t.width,height:t.height}}function Pe(e,{trackMutation:t=!0,trackResize:n=!0,trackScroll:s=!0}={}){const[i,r]=Te(U(G(e))),l=()=>r(U(G(e))),o=f=>r(U(f));if(typeof e=="function"&&(he(()=>o(e())),ae(k(e,o,{defer:!0}))),n){const f=(u,c)=>o(c);Ne(typeof e=="function"?()=>e()||[]:e,typeof n=="function"?n(f):f)}if(s){const f=typeof e=="function"?u=>{const c=e();c&&u.target instanceof Node&&u.target.contains(c)&&o(c)}:u=>{u.target instanceof Node&&u.target.contains(e)&&o(e)};Oe(window,"scroll",typeof s=="function"?s(f):f,{capture:!0})}if(t){const f=new MutationObserver(typeof t=="function"?t(l):l);f.observe(document.body,{attributeFilter:["style","class"],subtree:!0,childList:!0}),P(f.disconnect.bind(f))}return i}const Me=oe('<div class="flex flex-col"><label class="mb-1">:</label><input type="range" min="10" max="400" step="10"></div>',5),Ue=oe('<div class="p-24 box-border w-full h-150vh flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"><div class="w-60vw overflow-x-scroll p-8"><div class="w-80vw"><div class="center-child min-h-82"><div class="w-24 h-24 bg-orange-500 rounded-md shadow-bg-gray-900 shadow-lg center-child"><pre></pre></div></div><div class="wrapper-h"></div></div></div></div>',14),Q=e=>(()=>{const t=Me.cloneNode(!0),n=t.firstChild,s=n.firstChild,i=n.nextSibling;return C(n,()=>e.name,s),i.$$input=r=>e.setValue(+r.currentTarget.value),S(r=>{const l=e.name,o=e.name;return l!==r._v$&&X(n,"for",r._v$=l),o!==r._v$2&&X(i,"name",r._v$2=o),r},{_v$:void 0,_v$2:void 0}),S(()=>i.value=e.value),t})(),je=()=>{const[e,t]=j(200),[n,s]=j(200);let i;const r=o=>Se(o,500),l=Pe(()=>i,{trackMutation:r,trackScroll:r});return(()=>{const o=Ue.cloneNode(!0),f=o.firstChild,u=f.firstChild,c=u.firstChild,d=c.firstChild,v=d.firstChild,m=c.nextSibling;return xe(g=>i=g,d),C(v,()=>JSON.stringify(l,void 0,2)),C(m,H(Q,{name:"width",get value(){return e()},setValue:t}),null),C(m,H(Q,{name:"height",get value(){return n()},setValue:s}),null),S(g=>{const V=`${e()}px`,R=`${n()}px`;return V!==g._v$3&&d.style.setProperty("width",g._v$3=V),R!==g._v$4&&d.style.setProperty("height",g._v$4=R),g},{_v$3:void 0,_v$4:void 0}),o})()};me(()=>H(je,{}),document.getElementById("root"));Ae(["input"]);
