(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const P={},Ke=(e,t)=>e===t,p=Symbol("solid-proxy"),te=Symbol("solid-track"),H={equals:Ke};let Re=Oe;const T=1,V=2,we={owned:null,cleanups:null,context:null,owner:null};var y=null;let k=null,a=null,b=null,L=null,J=0;function W(e,t){const n=a,i=y,s=e.length===0,l=s?we:{owned:null,cleanups:null,context:null,owner:t===void 0?i:t},r=s?e:()=>e(()=>B(()=>Y(l)));y=l,a=null;try{return M(r,!0)}finally{a=n,y=i}}function me(e,t){t=t?Object.assign({},H,t):H;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=s=>(typeof s=="function"&&(s=s(n.value)),Se(n,s));return[$e.bind(n),i]}function j(e,t,n){const i=Ce(e,t,!1,T);Q(i)}function K(e,t,n){n=n?Object.assign({},H,n):H;const i=Ce(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,Q(i),$e.bind(i)}function Ae(e){return M(e,!1)}function B(e){if(a===null)return e();const t=a;a=null;try{return e()}finally{a=t}}function qe(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function xe(){return a}function $e(){const e=k;if(this.sources&&(this.state||e))if(this.state===T||e)Q(this);else{const t=b;b=null,M(()=>X(this),!1),b=t}if(a){const t=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(t)):(a.sources=[this],a.sourceSlots=[t]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function Se(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&M(()=>{for(let s=0;s<e.observers.length;s+=1){const l=e.observers[s],r=k&&k.running;r&&k.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?b.push(l):L.push(l),l.observers&&_e(l)),r||(l.state=T)}if(b.length>1e6)throw b=[],new Error},!1)),t}function Q(e){if(!e.fn)return;Y(e);const t=y,n=a,i=J;a=y=e,Ue(e,e.value,i),a=n,y=t}function Ue(e,t,n){let i;try{i=e.fn(t)}catch(s){return e.pure&&(e.state=T,e.owned&&e.owned.forEach(Y),e.owned=null),e.updatedAt=n+1,Ne(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Se(e,i):e.value=i,e.updatedAt=n)}function Ce(e,t,n,i=T,s){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:n};return y===null||y!==we&&(y.owned?y.owned.push(l):y.owned=[l]),l}function pe(e){const t=k;if(e.state===0||t)return;if(e.state===V||t)return X(e);if(e.suspense&&B(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<J);)(e.state||t)&&n.push(e);for(let i=n.length-1;i>=0;i--)if(e=n[i],e.state===T||t)Q(e);else if(e.state===V||t){const s=b;b=null,M(()=>X(e,n[0]),!1),b=s}}function M(e,t){if(b)return e();let n=!1;t||(b=[]),L?n=!0:L=[],J++;try{const i=e();return We(n),i}catch(i){n||(L=null),b=null,Ne(i)}}function We(e){if(b&&(Oe(b),b=null),e)return;const t=L;L=null,t.length&&M(()=>Re(t),!1)}function Oe(e){for(let t=0;t<e.length;t++)pe(e[t])}function X(e,t){const n=k;e.state=0;for(let i=0;i<e.sources.length;i+=1){const s=e.sources[i];s.sources&&(s.state===T||n?s!==t&&(!s.updatedAt||s.updatedAt<J)&&pe(s):(s.state===V||n)&&X(s,t))}}function _e(e){const t=k;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(!i.state||t)&&(i.state=V,i.pure?b.push(i):L.push(i),i.observers&&_e(i))}}function Y(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const l=s.pop(),r=n.observerSlots.pop();i<s.length&&(l.sourceSlots[r]=i,s[i]=l,n.observerSlots[i]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)Y(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function He(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Ne(e){throw e=He(e),e}const Ve=Symbol("fallback");function ae(e){for(let t=0;t<e.length;t++)e[t]()}function Xe(e,t,n={}){let i=[],s=[],l=[],r=0,o=t.length>1?[]:null;return qe(()=>ae(l)),()=>{let f=e()||[],u,c;return f[te],B(()=>{let d=f.length,w,$,O,_,N,x,m,A,S;if(d===0)r!==0&&(ae(l),l=[],i=[],s=[],r=0,o&&(o=[])),n.fallback&&(i=[Ve],s[0]=W(I=>(l[0]=I,n.fallback())),r=1);else if(r===0){for(s=new Array(d),c=0;c<d;c++)i[c]=f[c],s[c]=W(g);r=d}else{for(O=new Array(d),_=new Array(d),o&&(N=new Array(d)),x=0,m=Math.min(r,d);x<m&&i[x]===f[x];x++);for(m=r-1,A=d-1;m>=x&&A>=x&&i[m]===f[A];m--,A--)O[A]=s[m],_[A]=l[m],o&&(N[A]=o[m]);for(w=new Map,$=new Array(A+1),c=A;c>=x;c--)S=f[c],u=w.get(S),$[c]=u===void 0?-1:u,w.set(S,c);for(u=x;u<=m;u++)S=i[u],c=w.get(S),c!==void 0&&c!==-1?(O[c]=s[u],_[c]=l[u],o&&(N[c]=o[u]),c=$[c],w.set(S,c)):l[u]();for(c=x;c<d;c++)c in O?(s[c]=O[c],l[c]=_[c],o&&(o[c]=N[c],o[c](c))):s[c]=W(g);s=s.slice(0,r=d),i=f.slice(0)}return s});function g(d){if(l[c]=d,o){const[w,$]=me(c);return o[c]=$,t(f[c],w)}return t(f[c])}}}function C(e,t){return B(()=>e(t||{}))}function U(){return!0}const ne={get(e,t,n){return t===p?n:e.get(t)},has(e,t){return t===p?!0:e.has(t)},set:U,deleteProperty:U,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:U,deleteProperty:U}},ownKeys(e){return e.keys()}};function ee(e){return(e=typeof e=="function"?e():e)?e:{}}function F(...e){let t=!1;for(let i=0;i<e.length;i++){const s=e[i];t=t||!!s&&p in s,e[i]=typeof s=="function"?(t=!0,K(s)):s}if(t)return new Proxy({get(i){for(let s=e.length-1;s>=0;s--){const l=ee(e[s])[i];if(l!==void 0)return l}},has(i){for(let s=e.length-1;s>=0;s--)if(i in ee(e[s]))return!0;return!1},keys(){const i=[];for(let s=0;s<e.length;s++)i.push(...Object.keys(ee(e[s])));return[...new Set(i)]}},ne);const n={};for(let i=e.length-1;i>=0;i--)if(e[i]){const s=Object.getOwnPropertyDescriptors(e[i]);for(const l in s)l in n||Object.defineProperty(n,l,{enumerable:!0,get(){for(let r=e.length-1;r>=0;r--){const o=(e[r]||{})[l];if(o!==void 0)return o}}})}return n}function Ze(e,...t){const n=new Set(t.flat());if(p in e){const s=t.map(l=>new Proxy({get(r){return l.includes(r)?e[r]:void 0},has(r){return l.includes(r)&&r in e},keys(){return l.filter(r=>r in e)}},ne));return s.push(new Proxy({get(l){return n.has(l)?void 0:e[l]},has(l){return n.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!n.has(l))}},ne)),s}const i=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(i).filter(s=>!n.has(s))),t.map(s=>{const l={};for(let r=0;r<s.length;r++){const o=s[r];o in e&&Object.defineProperty(l,o,i[o]?i[o]:{get(){return e[o]},set(){return!0},enumerable:!0})}return l})}function Pe(e){const t="fallback"in e&&{fallback:()=>e.fallback};return K(Xe(()=>e.each,e.children,t||void 0))}const Ge=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Je=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ge]),Qe=new Set(["innerHTML","textContent","innerText","children"]),Ye=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),de=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),et=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),tt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function nt(e,t,n){let i=n.length,s=t.length,l=i,r=0,o=0,f=t[s-1].nextSibling,u=null;for(;r<s||o<l;){if(t[r]===n[o]){r++,o++;continue}for(;t[s-1]===n[l-1];)s--,l--;if(s===r){const c=l<i?o?n[o-1].nextSibling:n[l-o]:f;for(;o<l;)e.insertBefore(n[o++],c)}else if(l===o)for(;r<s;)(!u||!u.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[o]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--l],c),t[s]=n[l]}else{if(!u){u=new Map;let g=o;for(;g<l;)u.set(n[g],g++)}const c=u.get(t[r]);if(c!=null)if(o<c&&c<l){let g=r,d=1,w;for(;++g<s&&g<l&&!((w=u.get(t[g]))==null||w!==c+d);)d++;if(d>c-o){const $=t[r];for(;o<c;)e.insertBefore(n[o++],$)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}const ge="_$DX_DELEGATE";function it(e,t,n,i={}){let s;return W(l=>{s=l,t===document?e():h(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{s(),t.textContent=""}}function E(e,t,n){const i=document.createElement("template");if(i.innerHTML=e,t&&i.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${i.innerHTML}

${e}. Is your HTML properly formed?`;let s=i.content.firstChild;return n&&(s=s.firstChild),s}function Ee(e,t=window.document){const n=t[ge]||(t[ge]=new Set);for(let i=0,s=e.length;i<s;i++){const l=e[i];n.has(l)||(n.add(l),t.addEventListener(l,ut))}}function ke(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function st(e,t,n,i){i==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,i)}function lt(e,t){t==null?e.removeAttribute("class"):e.className=t}function rt(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=l=>s.call(e,n[1],l))}else e.addEventListener(t,n)}function ot(e,t,n={}){const i=Object.keys(t||{}),s=Object.keys(n);let l,r;for(l=0,r=s.length;l<r;l++){const o=s[l];!o||o==="undefined"||t[o]||(he(e,o,!1),delete n[o])}for(l=0,r=i.length;l<r;l++){const o=i[l],f=!!t[o];!o||o==="undefined"||n[o]===f||!f||(he(e,o,!0),n[o]=f)}return n}function Le(e,t,n){if(!t)return n?ke(e,"style"):t;const i=e.style;if(typeof t=="string")return i.cssText=t;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),t||(t={});let s,l;for(l in n)t[l]==null&&i.removeProperty(l),delete n[l];for(l in t)s=t[l],s!==n[l]&&(i.setProperty(l,s),n[l]=s);return n}function re(e,t={},n,i){const s={};return i||j(()=>s.children=D(e,t.children,s.children)),j(()=>t.ref&&t.ref(e)),j(()=>ct(e,t,n,!0,s,!0)),s}function h(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return D(e,t,i,n);j(s=>D(e,t(),s,n),i)}function ct(e,t,n,i,s={},l=!1){t||(t={});for(const r in s)if(!(r in t)){if(r==="children")continue;s[r]=ye(e,r,null,s[r],n,l)}for(const r in t){if(r==="children"){i||D(e,t.children);continue}const o=t[r];s[r]=ye(e,r,o,s[r],n,l)}}function ft(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function he(e,t,n){const i=t.trim().split(/\s+/);for(let s=0,l=i.length;s<l;s++)e.classList.toggle(i[s],n)}function ye(e,t,n,i,s,l){let r,o,f;if(t==="style")return Le(e,n,i);if(t==="classList")return ot(e,n,i);if(n===i)return i;if(t==="ref")l||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);i&&e.removeEventListener(u,i),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);i&&e.removeEventListener(u,i,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),c=et.has(u);if(!c&&i){const g=Array.isArray(i)?i[0]:i;e.removeEventListener(u,g)}(c||n)&&(rt(e,u,n,c),c&&Ee([u]))}else if((f=Qe.has(t))||!s&&(de[t]||(o=Je.has(t)))||(r=e.nodeName.includes("-")))t==="class"||t==="className"?lt(e,n):r&&!o&&!f?e[ft(t)]=n:e[de[t]||t]=n;else{const u=s&&t.indexOf(":")>-1&&tt[t.split(":")[0]];u?st(e,u,t,n):ke(e,Ye[t]||t,n)}return n}function ut(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),P.registry&&!P.done&&(P.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>{for(;i&&i.nodeType!==8&&i.nodeValue!=="pl-"+e;){let s=i.nextSibling;i.remove(),i=s}i&&i.remove()}));n;){const i=n[t];if(i&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?i.call(n,s,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function D(e,t,n,i,s){for(P.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=i!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(P.context)return n;if(l==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=v(e,n,i,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(P.context)return n;n=v(e,n,i)}else{if(l==="function")return j(()=>{let o=t();for(;typeof o=="function";)o=o();n=D(e,o,n,i)}),()=>n;if(Array.isArray(t)){const o=[],f=n&&Array.isArray(n);if(ie(o,t,n,s))return j(()=>n=D(e,o,n,i,!0)),()=>n;if(P.context){if(!o.length)return n;for(let u=0;u<o.length;u++)if(o[u].parentNode)return n=o}if(o.length===0){if(n=v(e,n,i),r)return n}else f?n.length===0?be(e,o,i):nt(e,n,o):(n&&v(e),be(e,o));n=o}else if(t instanceof Node){if(P.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=v(e,n,i,t);v(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function ie(e,t,n,i){let s=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],f=n&&n[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=ie(e,o,f)||s;else if(typeof o=="function")if(i){for(;typeof o=="function";)o=o();s=ie(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||s}else e.push(o),s=!0;else{const u=String(o);u==="<!>"?f&&f.nodeType===8&&e.push(f):f&&f.nodeType===3?(f.data=u,e.push(f)):e.push(document.createTextNode(u))}}return s}function be(e,t,n=null){for(let i=0,s=t.length;i<s;i++)e.insertBefore(t[i],n)}function v(e,t,n,i){if(n===void 0)return e.textContent="";const s=i||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(s!==o){const f=o.parentNode===e;!l&&!r?f?e.replaceChild(s,o):e.insertBefore(s,n):f&&o.remove()}else l=!0}}else e.insertBefore(s,n);return[s]}const se=Symbol("store-raw"),R=Symbol("store-node"),at=Symbol("store-name");function je(e,t){let n=e[p];if(!n&&(Object.defineProperty(e,p,{value:n=new Proxy(e,ht)}),!Array.isArray(e))){const i=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let l=0,r=i.length;l<r;l++){const o=i[l];s[o].get&&Object.defineProperty(e,o,{enumerable:s[o].enumerable,get:s[o].get.bind(n)})}}return n}function Z(e){let t;return e!=null&&typeof e=="object"&&(e[p]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function q(e,t=new Set){let n,i,s,l;if(n=e!=null&&e[se])return n;if(!Z(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let r=0,o=e.length;r<o;r++)s=e[r],(i=q(s,t))!==s&&(e[r]=i)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const r=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let f=0,u=r.length;f<u;f++)l=r[f],!o[l].get&&(s=e[l],(i=q(s,t))!==s&&(e[l]=i))}return e}function oe(e){let t=e[R];return t||Object.defineProperty(e,R,{value:t={}}),t}function le(e,t,n){return e[t]||(e[t]=ve(n))}function dt(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===p||t===R||t===at||(delete n.value,delete n.writable,n.get=()=>e[p][t]),n}function Te(e){if(xe()){const t=oe(e);(t._||(t._=ve()))()}}function gt(e){return Te(e),Reflect.ownKeys(e)}function ve(e){const[t,n]=me(e,{equals:!1,internal:!0});return t.$=n,t}const ht={get(e,t,n){if(t===se)return e;if(t===p)return n;if(t===te)return Te(e),n;const i=oe(e),s=i.hasOwnProperty(t);let l=s?i[t]():e[t];if(t===R||t==="__proto__")return l;if(!s){const r=Object.getOwnPropertyDescriptor(e,t);xe()&&(typeof l!="function"||e.hasOwnProperty(t))&&!(r&&r.get)&&(l=le(i,t,l)())}return Z(l)?je(l):l},has(e,t){return t===se||t===p||t===te||t===R||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:gt,getOwnPropertyDescriptor:dt};function G(e,t,n,i=!1){if(!i&&e[t]===n)return;const s=e[t],l=e.length;n===void 0?delete e[t]:e[t]=n;let r=oe(e),o;(o=le(r,t,s))&&o.$(()=>n),Array.isArray(e)&&e.length!==l&&(o=le(r,"length",l))&&o.$(e.length),(o=r._)&&o.$()}function De(e,t){const n=Object.keys(t);for(let i=0;i<n.length;i+=1){const s=n[i];G(e,s,t[s])}}function yt(e,t){if(typeof t=="function"&&(t=t(e)),t=q(t),Array.isArray(t)){if(e===t)return;let n=0,i=t.length;for(;n<i;n++){const s=t[n];e[n]!==s&&G(e,n,s)}G(e,"length",i)}else De(e,t)}function z(e,t,n=[]){let i,s=e;if(t.length>1){i=t.shift();const r=typeof i,o=Array.isArray(e);if(Array.isArray(i)){for(let f=0;f<i.length;f++)z(e,[i[f]].concat(t),n);return}else if(o&&r==="function"){for(let f=0;f<e.length;f++)i(e[f],f)&&z(e,[f].concat(t),n);return}else if(o&&r==="object"){const{from:f=0,to:u=e.length-1,by:c=1}=i;for(let g=f;g<=u;g+=c)z(e,[g].concat(t),n);return}else if(t.length>1){z(e[i],t,[i].concat(n));return}s=e[i],n=[i].concat(n)}let l=t[0];typeof l=="function"&&(l=l(s,n),l===s)||i===void 0&&l==null||(l=q(l),i===void 0||Z(s)&&Z(l)&&!Array.isArray(l)?De(s,l):G(e,i,l))}function bt(...[e,t]){const n=q(e||{}),i=Array.isArray(n),s=je(n);function l(...r){Ae(()=>{i&&r.length===1?yt(n,r[0]):z(n,r)})}return[s,l]}function wt(e){return(...t)=>Ae(()=>B(()=>e(...t)))}function mt(e){const t={...e};for(const[n,i]of Object.entries(e))t[n]=wt(i);return t}function Be(e,t){const[n,i]=bt(e);return{state:n,getters:t.getters?t.getters(n):{},actions:mt(t.actions(i,n))}}function At(e,t){return n=>Be(n?typeof n=="function"?B(()=>n({...e})):{...n}:{...e},t)}const Me=Be({value:0,initialValue:0},{getters:e=>({toString:()=>`${e.id&&"-"}(${e.value})`,isZero:()=>e.value===0,isNegative:()=>e.value<0,isPositive:()=>e.value>=0,get:()=>e.value}),actions:e=>({setState:e,updateId:t=>e("id",t),resetCount:t=>e(n=>({...n,value:t??n.initialValue}))})}),ce=At({age:0,mana:100,name:"unknown"},{getters:e=>({days:()=>e.age*365,yearsOld:()=>`${e.age} years old`,isWizard:()=>e.mana>100||e.age>=50}),actions:(e,t)=>({birthday:()=>e("age",t.age+1)})}),xt=ce(e=>({...e,age:45,name:"Alice"})),$t=ce({age:40,mana:200,name:"Bob"}),St=ce(e=>({...e,age:35,name:"Tom"})),Fe=()=>[xt,$t,St],Ct=()=>Fe().filter(e=>e.getters.isWizard()),pt=E("<div></div>",2),Ot=E("<div>No Items</div>",2),_t=E('<div class="flex items-center justify-center"></div>',2),Nt=()=>{const e="0123456789ABCDEF";let t="#";return[...Array(6)].forEach(()=>t+=e[Math.floor(Math.random()*16)]),t},Pt=e=>{const t=K(()=>[...Array(e.boxes).keys()],[0]);return(()=>{const n=pt.cloneNode(!0);return re(n,F(e,{class:"flex flex-row flex-wrap justify-around gap-3 min-h-80 w-80",get style(){return{...e.style||[]}}}),!1,!0),h(n,C(Pe,{get each(){return t()},get fallback(){return Ot.cloneNode(!0)},children:(i,s)=>(()=>{const l=_t.cloneNode(!0);return h(l,()=>s()+1),j(r=>{const o=!e?.boxSize,f=!e?.boxSize,u={...e?.boxSize?{width:e.boxSize,height:e.boxSize}:{},"background-color":Nt()};return o!==r._v$&&l.classList.toggle("w-[50px]",r._v$=o),f!==r._v$2&&l.classList.toggle("h-[50px]",r._v$2=f),r._v$3=Le(l,u,r._v$3),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),l})()})),n})()},Et=E("<button></button>",2),fe=e=>{const{state:t,actions:n}=Me,[i,s]=Ze(e,["onClick","text"]),l=()=>i.onClick(t,n);return(()=>{const r=Et.cloneNode(!0);return re(r,F(s,{onClick:l}),!1,!0),h(r,()=>e.text?e.text:e.children),r})()},kt=e=>C(fe,F(e,{onClick:(t,n)=>{n.resetCount(t.value+1)},text:"+"})),Lt=e=>C(fe,F(e,{onClick:(t,n)=>{n.resetCount(t.value-1)},text:"-"})),jt=e=>C(fe,F(e,{onClick:(t,n)=>{n.resetCount()},text:"Reset",get style(){return{border:"1px solid red",color:"red",...typeof e.style=="object"?e.style:{}}}})),Tt=E("<div></div>",2),vt=e=>(()=>{const t=Tt.cloneNode(!0);return re(t,F(e,{get style(){return{display:"flex","flex-direction":"row",...typeof e.style=="object"?e.style:{}}}}),!1,!0),h(t,C(kt,{}),null),h(t,C(Lt,{style:{"margin-right":"12px","margin-left":"3px"}}),null),h(t,C(jt,{style:{"background-color":"black"}}),null),t})();const Dt=E('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"><div class="wrapper-v select-none"><h4>Ages</h4><ul></ul><footer>Wizards: </footer></div><div class="wrapper-v"><h4>Counter Information </h4><ul><li>isZero: </li><li>isNegative: </li><li>isPositive: </li></ul><button type="button" class="btn"></button></div></div>',24),Bt=E('<li><span class="hover:text-green-400"></span>: <!> </li>',5),Mt=E('<i class="text-green-200"> wizard</i>',2),Ft=()=>{const{state:e,getters:{get:t,isNegative:n,isPositive:i,isZero:s},actions:{setState:l}}=Me,r=()=>l({value:t()+1}),o=K(()=>i()?t():25,0);return(()=>{const f=Dt.cloneNode(!0),u=f.firstChild,c=u.firstChild,g=c.nextSibling,d=g.nextSibling;d.firstChild;const w=u.nextSibling,$=w.firstChild;$.firstChild;const O=$.nextSibling,_=O.firstChild;_.firstChild;const N=_.nextSibling;N.firstChild;const x=N.nextSibling;x.firstChild;const m=O.nextSibling;return h(g,C(Pe,{get each(){return Fe()},children:A=>(()=>{const S=Bt.cloneNode(!0),I=S.firstChild,Ie=I.nextSibling,ue=Ie.nextSibling;return ue.nextSibling,I.$$click=()=>A.actions.birthday(),h(I,()=>A.state.name),h(S,()=>A.getters.yearsOld(),ue),h(S,(()=>{const ze=K(()=>!!A.getters.isWizard());return()=>ze()&&Mt.cloneNode(!0)})(),null),S})()})),h(d,()=>Ct().length,null),h($,()=>e.value,null),h(_,()=>s().toString(),null),h(N,()=>n().toString(),null),h(x,()=>i().toString(),null),h(w,C(vt,{}),m),m.$$click=r,h(m,t),h(w,C(Pt,{get boxes(){return o()}}),null),f})()};it(()=>C(Ft,{}),document.getElementById("root"));Ee(["click"]);
