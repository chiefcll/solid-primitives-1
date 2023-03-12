(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}})();const b={};let k=R;const x=1,C=2,U={owned:null,cleanups:null,context:null,owner:null};var a=null;let A=null,h=null,p=null,y=null,E=0;function ee(e,t){const s=h,i=a,n=e.length===0,l=n?U:{owned:null,cleanups:null,context:null,owner:t===void 0?i:t},r=n?e:()=>e(()=>_(()=>N(l)));a=l,h=null;try{return T(r,!0)}finally{h=s,a=i}}function P(e,t,s){const i=ne(e,t,!1,x);j(i)}function _(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function te(e,t,s){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&T(()=>{for(let n=0;n<e.observers.length;n+=1){const l=e.observers[n],r=A&&A.running;r&&A.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?p.push(l):y.push(l),l.observers&&D(l)),r||(l.state=x)}if(p.length>1e6)throw p=[],new Error},!1)),t}function j(e){if(!e.fn)return;N(e);const t=a,s=h,i=E;h=a=e,se(e,e.value,i),h=s,a=t}function se(e,t,s){let i;try{i=e.fn(t)}catch(n){return e.pure&&(e.state=x,e.owned&&e.owned.forEach(N),e.owned=null),e.updatedAt=s+1,G(n)}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?te(e,i):e.value=i,e.updatedAt=s)}function ne(e,t,s,i=x,n){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:null,pure:s};return a===null||a!==U&&(a.owned?a.owned.push(l):a.owned=[l]),l}function F(e){const t=A;if(e.state===0||t)return;if(e.state===C||t)return v(e);if(e.suspense&&_(e.suspense.inFallback))return e.suspense.effects.push(e);const s=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<E);)(e.state||t)&&s.push(e);for(let i=s.length-1;i>=0;i--)if(e=s[i],e.state===x||t)j(e);else if(e.state===C||t){const n=p;p=null,T(()=>v(e,s[0]),!1),p=n}}function T(e,t){if(p)return e();let s=!1;t||(p=[]),y?s=!0:y=[],E++;try{const i=e();return ie(s),i}catch(i){s||(y=null),p=null,G(i)}}function ie(e){if(p&&(R(p),p=null),e)return;const t=y;y=null,t.length&&T(()=>k(t),!1)}function R(e){for(let t=0;t<e.length;t++)F(e[t])}function v(e,t){const s=A;e.state=0;for(let i=0;i<e.sources.length;i+=1){const n=e.sources[i];n.sources&&(n.state===x||s?n!==t&&(!n.updatedAt||n.updatedAt<E)&&F(n):(n.state===C||s)&&v(n,t))}}function D(e){const t=A;for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s];(!i.state||t)&&(i.state=C,i.pure?p.push(i):y.push(i),i.observers&&D(i))}}function N(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),i=e.sourceSlots.pop(),n=s.observers;if(n&&n.length){const l=n.pop(),r=s.observerSlots.pop();i<n.length&&(l.sourceSlots[r]=i,n[i]=l,s.observerSlots[i]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)N(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function oe(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function G(e){throw e=oe(e),e}function le(e,t){return _(()=>e(t||{}))}function re(e,t,s){let i=s.length,n=t.length,l=i,r=0,o=0,f=t[n-1].nextSibling,u=null;for(;r<n||o<l;){if(t[r]===s[o]){r++,o++;continue}for(;t[n-1]===s[l-1];)n--,l--;if(n===r){const d=l<i?o?s[o-1].nextSibling:s[l-o]:f;for(;o<l;)e.insertBefore(s[o++],d)}else if(l===o)for(;r<n;)(!u||!u.has(t[r]))&&t[r].remove(),r++;else if(t[r]===s[l-1]&&s[o]===t[n-1]){const d=t[--n].nextSibling;e.insertBefore(s[o++],t[r++].nextSibling),e.insertBefore(s[--l],d),t[n]=s[l]}else{if(!u){u=new Map;let w=o;for(;w<l;)u.set(s[w],w++)}const d=u.get(t[r]);if(d!=null)if(o<d&&d<l){let w=r,L=1,B;for(;++w<n&&w<l&&!((B=u.get(t[w]))==null||B!==d+L);)L++;if(L>d-o){const z=t[r];for(;o<d;)e.insertBefore(s[o++],z)}else e.replaceChild(s[o++],t[r++])}else r++;else t[r++].remove()}}}function fe(e,t,s,i={}){let n;return ee(l=>{n=l,t===document?e():M(t,e(),t.firstChild?null:void 0,s)},i.owner),()=>{n(),t.textContent=""}}function W(e,t,s){const i=document.createElement("template");if(i.innerHTML=e,t&&i.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${i.innerHTML}

${e}. Is your HTML properly formed?`;let n=i.content.firstChild;return s&&(n=n.firstChild),n}function M(e,t,s,i){if(s!==void 0&&!i&&(i=[]),typeof t!="function")return S(e,t,i,s);P(n=>S(e,t(),n,s),i)}function S(e,t,s,i,n){for(b.context&&!s&&(s=[...e.childNodes]);typeof s=="function";)s=s();if(t===s)return s;const l=typeof t,r=i!==void 0;if(e=r&&s[0]&&s[0].parentNode||e,l==="string"||l==="number"){if(b.context)return s;if(l==="number"&&(t=t.toString()),r){let o=s[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),s=m(e,s,i,o)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t}else if(t==null||l==="boolean"){if(b.context)return s;s=m(e,s,i)}else{if(l==="function")return P(()=>{let o=t();for(;typeof o=="function";)o=o();s=S(e,o,s,i)}),()=>s;if(Array.isArray(t)){const o=[],f=s&&Array.isArray(s);if(O(o,t,s,n))return P(()=>s=S(e,o,s,i,!0)),()=>s;if(b.context){if(!o.length)return s;for(let u=0;u<o.length;u++)if(o[u].parentNode)return s=o}if(o.length===0){if(s=m(e,s,i),r)return s}else f?s.length===0?H(e,o,i):re(e,s,o):(s&&m(e),H(e,o));s=o}else if(t instanceof Node){if(b.context&&t.parentNode)return s=r?[t]:t;if(Array.isArray(s)){if(r)return s=m(e,s,i,t);m(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}else console.warn("Unrecognized value. Skipped inserting",t)}return s}function O(e,t,s,i){let n=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],f=s&&s[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))n=O(e,o,f)||n;else if(typeof o=="function")if(i){for(;typeof o=="function";)o=o();n=O(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||n}else e.push(o),n=!0;else{const u=String(o);u==="<!>"?f&&f.nodeType===8&&e.push(f):f&&f.nodeType===3?(f.data=u,e.push(f)):e.push(document.createTextNode(u))}}return n}function H(e,t,s=null){for(let i=0,n=t.length;i<n;i++)e.insertBefore(t[i],s)}function m(e,t,s,i){if(s===void 0)return e.textContent="";const n=i||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(n!==o){const f=o.parentNode===e;!l&&!r?f?e.replaceChild(n,o):e.insertBefore(n,s):f&&o.remove()}else l=!0}}else e.insertBefore(n,s);return[n]}const g=window,I=g.navigator,c=I.userAgent,ce=/Android/.test(c),ue=/(win32|win64|windows|wince)/i.test(c),K=/(macintosh|macintel|macppc|mac68k|macos)/i.test(c),q=/iphone/i.test(c),J=/ipad/i.test(c)&&I.maxTouchPoints>1,Q=/ipod/i.test(c),V=q||J||Q,pe=V||K,ae=/Mobi/.test(c),de=/^(?!.*Seamonkey)(?=.*Firefox).*/i.test(c),X=!!g.opr&&!!g.opr.addons||!!g.opera||/ OPR\//.test(c),he=/constructor/i.test(g.HTMLElement)||g.safari?.pushNotification+""=="[object SafariRemoteNotification]",ge=!!g.document.documentMode,$=!!g.chrome,Y=/Edg/.test(c)&&$,we=$&&I.vendor==="Google Inc."&&!X&&!Y,ye=/Gecko\/[0-9.]+/.test(c),Z=/Chrome\/[0-9.]+/.test(c),me=/AppleWebKit\/[0-9.]+/.test(c)&&!Z,Ae=/Opera\/[0-9.]+/.test(c),xe=/Trident\/[0-9.]+/.test(c),be=/Edge\/[0-9.]+/.test(c),Ce=Object.freeze(Object.defineProperty({__proto__:null,isAndroid:ce,isAppleDevice:pe,isBlink:Z,isChrome:we,isChromium:$,isEdge:Y,isEdgeHTML:be,isFirefox:de,isGecko:ye,isIE:ge,isIOS:V,isIPad:J,isIPhone:q,isIPod:Q,isMac:K,isMobile:ae,isOpera:X,isPresto:Ae,isSafari:he,isTrident:xe,isWebKit:me,isWindows:ue},Symbol.toStringTag,{value:"Module"})),Se=W('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"><div class="wrapper-v"><h4>Platform:</h4><ul></ul></div></div>',8),Ee=W("<li><h5></h5></li>",4),Te=()=>(()=>{const e=Se.cloneNode(!0),t=e.firstChild,s=t.firstChild,i=s.nextSibling;return M(i,()=>Object.entries(Ce).map(([n,l])=>(()=>{const r=Ee.cloneNode(!0),o=r.firstChild;return o.style.setProperty("color",l?"green":"red"),M(o,()=>n.substring(2)),r})())),e})();fe(()=>le(Te,{}),document.getElementById("root"));
