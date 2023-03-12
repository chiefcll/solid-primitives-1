(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();const w={},he=(e,n)=>e===n,_={equals:he};let de=ne;const x=1,N=2,Z={owned:null,cleanups:null,context:null,owner:null};var d=null;let A=null,c=null,g=null,$=null,O=0;function ge(e,n){const t=c,s=d,i=e.length===0,l=i?Z:{owned:null,cleanups:null,context:null,owner:n===void 0?s:n},r=i?e:()=>e(()=>R(()=>B(l)));d=l,c=null;try{return P(r,!0)}finally{c=t,d=s}}function F(e,n){n=n?Object.assign({},_,n):_;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.value)),z(t,i));return[k.bind(t),s]}function I(e,n,t){const s=ee(e,n,!1,x);q(s)}function U(e,n,t){t=t?Object.assign({},_,t):_;const s=ee(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,q(s),k.bind(s)}function R(e){if(c===null)return e();const n=c;c=null;try{return e()}finally{c=n}}function pe(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function k(){const e=A;if(this.sources&&(this.state||e))if(this.state===x||e)q(this);else{const n=g;g=null,P(()=>L(this),!1),g=n}if(c){const n=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(n)):(c.sources=[this],c.sourceSlots=[n]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function z(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&P(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=A&&A.running;r&&A.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?g.push(l):$.push(l),l.observers&&se(l)),r||(l.state=x)}if(g.length>1e6)throw g=[],new Error},!1)),n}function q(e){if(!e.fn)return;B(e);const n=d,t=c,s=O;c=d=e,Se(e,e.value,s),c=t,d=n}function Se(e,n,t){let s;try{s=e.fn(n)}catch(i){return e.pure&&(e.state=x,e.owned&&e.owned.forEach(B),e.owned=null),e.updatedAt=t+1,ie(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?z(e,s):e.value=s,e.updatedAt=t)}function ee(e,n,t,s=x,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:d,context:null,pure:t};return d===null||d!==Z&&(d.owned?d.owned.push(l):d.owned=[l]),l}function te(e){const n=A;if(e.state===0||n)return;if(e.state===N||n)return L(e);if(e.suspense&&R(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<O);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===x||n)q(e);else if(e.state===N||n){const i=g;g=null,P(()=>L(e,t[0]),!1),g=i}}function P(e,n){if(g)return e();let t=!1;n||(g=[]),$?t=!0:$=[],O++;try{const s=e();return ye(t),s}catch(s){t||($=null),g=null,ie(s)}}function ye(e){if(g&&(ne(g),g=null),e)return;const n=$;$=null,n.length&&P(()=>de(n),!1)}function ne(e){for(let n=0;n<e.length;n++)te(e[n])}function L(e,n){const t=A;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===x||t?i!==n&&(!i.updatedAt||i.updatedAt<O)&&te(i):(i.state===N||t)&&L(i,n))}}function se(e){const n=A;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=N,s.pure?g.push(s):$.push(s),s.observers&&se(s))}}function B(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const l=i.pop(),r=t.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,t.observerSlots[s]=r)}}if(e.owned){for(n=0;n<e.owned.length;n++)B(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function we(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ie(e){throw e=we(e),e}function h(e,n){return R(()=>e(n||{}))}function be(e){let n=!1;const t=e.keyed,s=U(()=>e.when,void 0,{equals:(i,l)=>n?i===l:!i==!l});return U(()=>{const i=s();if(i){const l=e.children,r=typeof l=="function"&&l.length>0;return n=t||r,r?R(()=>l(i)):l}return e.fallback},void 0,void 0)}function Ae(e,n,t){let s=t.length,i=n.length,l=s,r=0,o=0,f=n[i-1].nextSibling,a=null;for(;r<i||o<l;){if(n[r]===t[o]){r++,o++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===r){const S=l<s?o?t[o-1].nextSibling:t[l-o]:f;for(;o<l;)e.insertBefore(t[o++],S)}else if(l===o)for(;r<i;)(!a||!a.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[l-1]&&t[o]===n[i-1]){const S=n[--i].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--l],S),n[i]=t[l]}else{if(!a){a=new Map;let y=o;for(;y<l;)a.set(t[y],y++)}const S=a.get(n[r]);if(S!=null)if(o<S&&S<l){let y=r,v=1,E;for(;++y<i&&y<l&&!((E=a.get(n[y]))==null||E!==S+v);)v++;if(v>S-o){const D=n[r];for(;o<S;)e.insertBefore(t[o++],D)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const W="_$DX_DELEGATE";function $e(e,n,t,s={}){let i;return ge(l=>{i=l,n===document?e():u(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function le(e,n,t){const s=document.createElement("template");if(s.innerHTML=e,n&&s.innerHTML.split("<").length-1!==n)throw`The browser resolved template HTML does not match JSX input:
${s.innerHTML}

${e}. Is your HTML properly formed?`;let i=s.content.firstChild;return t&&(i=i.firstChild),i}function xe(e,n=window.document){const t=n[W]||(n[W]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];t.has(l)||(t.add(l),n.addEventListener(l,ve))}}function me(e,n,t,s){if(s)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const i=t[0];e.addEventListener(n,t[0]=l=>i.call(e,t[1],l))}else e.addEventListener(n,t)}function u(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return M(e,n,s,t);I(i=>M(e,n(),i,t),s)}function ve(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),w.registry&&!w.done&&(w.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));t;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function M(e,n,t,s,i){for(w.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(w.context)return t;if(l==="number"&&(n=n.toString()),r){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=m(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||l==="boolean"){if(w.context)return t;t=m(e,t,s)}else{if(l==="function")return I(()=>{let o=n();for(;typeof o=="function";)o=o();t=M(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],f=t&&Array.isArray(t);if(H(o,n,t,i))return I(()=>t=M(e,o,t,s,!0)),()=>t;if(w.context){if(!o.length)return t;for(let a=0;a<o.length;a++)if(o[a].parentNode)return t=o}if(o.length===0){if(t=m(e,t,s),r)return t}else f?t.length===0?Y(e,o,s):Ae(e,t,o):(t&&m(e),Y(e,o));t=o}else if(n instanceof Node){if(w.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=m(e,t,s,n);m(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}else console.warn("Unrecognized value. Skipped inserting",n)}return t}function H(e,n,t,s){let i=!1;for(let l=0,r=n.length;l<r;l++){let o=n[l],f=t&&t[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=H(e,o,f)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=H(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||i}else e.push(o),i=!0;else{const a=String(o);a==="<!>"?f&&f.nodeType===8&&e.push(f):f&&f.nodeType===3?(f.data=a,e.push(f)):e.push(document.createTextNode(a))}}return i}function Y(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function m(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(i!==o){const f=o.parentNode===e;!l&&!r?f?e.replaceChild(i,o):e.insertBefore(i,t):f&&o.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}function Fe(e){const[n,t]=F(!1);let s=0;const i=o=>{s=requestAnimationFrame(i),e(o)},l=()=>{n()||(t(!0),s=requestAnimationFrame(i))},r=()=>{t(!1),cancelAnimationFrame(s)};return pe(r),[n,l,r]}function Pe(e,n){const t=typeof n=="function"?U(()=>Math.floor(1e3/n())):(()=>{const r=Math.floor(1e3/n);return()=>r})();let s=0,i=0,l=0;return r=>{s=r-i,Math.ceil(s+l)>=t()&&(i=r,l=Math.max(s-t(),0),e(r))}}const Ee=le("<div><span><button>Start</button> <button>Stop</button> </span><span><span>| Target FPS: <!>| Runs: <!>| AVG Ms: <!>| AVG FPS <!>| Current FPS: </span></span></div>",16),Ce=500,p=e=>{const[n,t]=F(0);let s=-1,i=0;const l=()=>{if(s++,s){const C=performance.now()-i;t(T=>T+C)}i=performance.now(),s===Ce&&V()},[r,o,f]=Fe(e.targetFPS?Pe(l,e.targetFPS):l),[a,S]=F(0),[y,v]=F(0),[E,D]=F(0),V=()=>{S(n()/s),v(1e3/(n()/s)),t(0),D(s),s=-1,i=0,f()};return(()=>{const C=Ee.cloneNode(!0),T=C.firstChild,j=T.firstChild,oe=j.nextSibling,re=oe.nextSibling,G=T.nextSibling,b=G.firstChild,ue=b.firstChild,X=ue.nextSibling,fe=X.nextSibling,J=fe.nextSibling,ce=J.nextSibling,K=ce.nextSibling,ae=K.nextSibling,Q=ae.nextSibling;return Q.nextSibling,me(j,"click",o,!0),re.$$click=V,u(G,h(be,{get when(){return r()},fallback:" | Stopped ",get children(){return["| Running"," "]}}),b),u(b,()=>e.targetFPS||"UNCAPPED",X),u(b,E,J),u(b,a,K),u(b,y,Q),u(b,()=>1e3/(n()/s),null),C})()};xe(["click"]);const Te=le("<div><h1>Target FPS Dev Test</h1><hr></div>",5),_e=()=>(()=>{const e=Te.cloneNode(!0);return e.firstChild.nextSibling,u(e,h(p,{targetFPS:1}),null),u(e,h(p,{targetFPS:15}),null),u(e,h(p,{targetFPS:24}),null),u(e,h(p,{targetFPS:30}),null),u(e,h(p,{targetFPS:44}),null),u(e,h(p,{targetFPS:60}),null),u(e,h(p,{targetFPS:90}),null),u(e,h(p,{targetFPS:120}),null),u(e,h(p,{targetFPS:130}),null),u(e,h(p,{targetFPS:140}),null),u(e,h(p,{targetFPS:240}),null),u(e,h(p,{targetFPS:300}),null),u(e,h(p,{targetFPS:1/0}),null),u(e,h(p,{}),null),e})();$e(()=>h(_e,{}),document.getElementById("root"));
