(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();const A={};function Le(e){A.context=e}const Se=(e,t)=>e===t,$e=Symbol("solid-track"),U={equals:Se};let de=be;const S=1,q=2,pe={owned:null,cleanups:null,context:null,owner:null};var y=null;let _=null,m=null,b=null,L=null,J=0;function Y(e,t){const n=m,s=y,o=e.length===0,l=o?pe:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},r=o?e:()=>e(()=>I(()=>Q(l)));y=l,m=null;try{return M(r,!0)}finally{m=n,y=s}}function F(e,t){t=t?Object.assign({},U,t):U;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=o=>(typeof o=="function"&&(o=o(n.value)),ye(n,o));return[me.bind(n),s]}function he(e,t,n){const s=X(e,t,!0,S);O(s)}function Z(e,t,n){const s=X(e,t,!1,S);O(s)}function Te(e,t,n){de=Pe;const s=X(e,t,!1,S);s.user=!0,L?L.push(s):O(s)}function K(e,t,n){n=n?Object.assign({},U,n):U;const s=X(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,O(s),me.bind(s)}function I(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function ge(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function ve(e){const t=K(e),n=K(()=>z(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function me(){const e=_;if(this.sources&&(this.state||e))if(this.state===S||e)O(this);else{const t=b;b=null,M(()=>j(this),!1),b=t}if(m){const t=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(t)):(m.sources=[this],m.sourceSlots=[t]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function ye(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&M(()=>{for(let o=0;o<e.observers.length;o+=1){const l=e.observers[o],r=_&&_.running;r&&_.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?b.push(l):L.push(l),l.observers&&we(l)),r||(l.state=S)}if(b.length>1e6)throw b=[],new Error},!1)),t}function O(e){if(!e.fn)return;Q(e);const t=y,n=m,s=J;m=y=e,Ne(e,e.value,s),m=n,y=t}function Ne(e,t,n){let s;try{s=e.fn(t)}catch(o){return e.pure&&(e.state=S,e.owned&&e.owned.forEach(Q),e.owned=null),e.updatedAt=n+1,Ce(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ye(e,s):e.value=s,e.updatedAt=n)}function X(e,t,n,s=S,o){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:n};return y===null||y!==pe&&(y.owned?y.owned.push(l):y.owned=[l]),l}function V(e){const t=_;if(e.state===0||t)return;if(e.state===q||t)return j(e);if(e.suspense&&I(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<J);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===S||t)O(e);else if(e.state===q||t){const o=b;b=null,M(()=>j(e,n[0]),!1),b=o}}function M(e,t){if(b)return e();let n=!1;t||(b=[]),L?n=!0:L=[],J++;try{const s=e();return _e(n),s}catch(s){n||(L=null),b=null,Ce(s)}}function _e(e){if(b&&(be(b),b=null),e)return;const t=L;L=null,t.length&&M(()=>de(t),!1)}function be(e){for(let t=0;t<e.length;t++)V(e[t])}function Pe(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:V(s)}for(A.context&&Le(),t=0;t<n;t++)V(e[t])}function j(e,t){const n=_;e.state=0;for(let s=0;s<e.sources.length;s+=1){const o=e.sources[s];o.sources&&(o.state===S||n?o!==t&&(!o.updatedAt||o.updatedAt<J)&&V(o):(o.state===q||n)&&j(o,t))}}function we(e){const t=_;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=q,s.pure?b.push(s):L.push(s),s.observers&&we(s))}}function Q(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const l=o.pop(),r=n.observerSlots.pop();s<o.length&&(l.sourceSlots[r]=s,o[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)Q(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ke(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Ce(e){throw e=ke(e),e}function z(e){if(typeof e=="function"&&!e.length)return z(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=z(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function B(e,t){return I(()=>e(t||{}))}function Oe(e,t,n){let s=n.length,o=t.length,l=s,r=0,i=0,f=t[o-1].nextSibling,u=null;for(;r<o||i<l;){if(t[r]===n[i]){r++,i++;continue}for(;t[o-1]===n[l-1];)o--,l--;if(o===r){const c=l<s?i?n[i-1].nextSibling:n[l-i]:f;for(;i<l;)e.insertBefore(n[i++],c)}else if(l===i)for(;r<o;)(!u||!u.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[i]===t[o-1]){const c=t[--o].nextSibling;e.insertBefore(n[i++],t[r++].nextSibling),e.insertBefore(n[--l],c),t[o]=n[l]}else{if(!u){u=new Map;let d=i;for(;d<l;)u.set(n[d],d++)}const c=u.get(t[r]);if(c!=null)if(i<c&&c<l){let d=r,g=1,p;for(;++d<o&&d<l&&!((p=u.get(t[d]))==null||p!==c+g);)g++;if(g>c-i){const C=t[r];for(;i<c;)e.insertBefore(n[i++],C)}else e.replaceChild(n[i++],t[r++])}else r++;else t[r++].remove()}}}const ie="_$DX_DELEGATE";function Re(e,t,n,s={}){let o;return Y(l=>{o=l,t===document?e():k(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{o(),t.textContent=""}}function D(e,t,n){const s=document.createElement("template");if(s.innerHTML=e,t&&s.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${s.innerHTML}

${e}. Is your HTML properly formed?`;let o=s.content.firstChild;return n&&(o=o.firstChild),o}function Be(e,t=window.document){const n=t[ie]||(t[ie]=new Set);for(let s=0,o=e.length;s<o;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,Ie))}}function k(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return G(e,t,s,n);Z(o=>G(e,t(),o,n),s)}function Ie(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),A.registry&&!A.done&&(A.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let o=s.nextSibling;s.remove(),s=o}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?s.call(n,o,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function G(e,t,n,s,o){for(A.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(A.context)return n;if(l==="number"&&(t=t.toString()),r){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=P(e,n,s,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(A.context)return n;n=P(e,n,s)}else{if(l==="function")return Z(()=>{let i=t();for(;typeof i=="function";)i=i();n=G(e,i,n,s)}),()=>n;if(Array.isArray(t)){const i=[],f=n&&Array.isArray(n);if(ee(i,t,n,o))return Z(()=>n=G(e,i,n,s,!0)),()=>n;if(A.context){if(!i.length)return n;for(let u=0;u<i.length;u++)if(i[u].parentNode)return n=i}if(i.length===0){if(n=P(e,n,s),r)return n}else f?n.length===0?le(e,i,s):Oe(e,n,i):(n&&P(e),le(e,i));n=i}else if(t instanceof Node){if(A.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=P(e,n,s,t);P(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function ee(e,t,n,s){let o=!1;for(let l=0,r=t.length;l<r;l++){let i=t[l],f=n&&n[l];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))o=ee(e,i,f)||o;else if(typeof i=="function")if(s){for(;typeof i=="function";)i=i();o=ee(e,Array.isArray(i)?i:[i],Array.isArray(f)?f:[f])||o}else e.push(i),o=!0;else{const u=String(i);u==="<!>"?f&&f.nodeType===8&&e.push(f):f&&f.nodeType===3?(f.data=u,e.push(f)):e.push(document.createTextNode(u))}}return o}function le(e,t,n=null){for(let s=0,o=t.length;s<o;s++)e.insertBefore(t[s],n)}function P(e,t,n,s){if(n===void 0)return e.textContent="";const o=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const i=t[r];if(o!==i){const f=i.parentNode===e;!l&&!r?f?e.replaceChild(o,i):e.insertBefore(o,n):f&&i.remove()}else l=!0}}else e.insertBefore(o,n);return[o]}var Me=(e,t)=>e===t||e.length===t.length&&e.every((n,s)=>n===t[s]),De=e=>e instanceof Element;function He(e){const t=e.ref,n=ve(()=>e.children);let s=[];return he(()=>{const o=n.toArray().filter(De);Me(s,o)||I(()=>t(o)),s=o},[]),ge(()=>s.length&&t([])),n}var Ue=e=>e.slice(),qe=e=>Object.assign({},e),xe=(e,t)=>{const n=Ue(e);return t(n),n},Fe=(e,t)=>{const n=qe(e);return t(n),n},Ke=(e,t)=>Array.isArray(e)?xe(e,t):Fe(e,t),Ae=(...e)=>Ke(e[0],t=>{e.length>3?t[e[1]]=Ae(t[e[1]],...e.slice(2)):typeof e[2]=="function"?t[e[1]]=e[2](t[e[1]]):t[e[1]]=e[2]}),re=(e,t,n=0,...s)=>xe(e,o=>o.splice(t,n,...s));const W=Symbol("fallback");function ce(e){for(const t of e)t.dispose()}function Ve(e,t,n,s={}){const o=new Map;return ge(()=>ce(o.values())),()=>{const r=e()||[];return r[$e],I(()=>{if(!r.length)return ce(o.values()),o.clear(),s.fallback?[Y(d=>(o.set(W,{dispose:d}),s.fallback()))]:[];const i=new Array(r.length),f=o.get(W);if(!o.size||f){f?.dispose(),o.delete(W);for(let c=0;c<r.length;c++){const d=r[c],g=t(d);l(i,d,c,g)}return i}const u=new Set(o.keys());for(let c=0;c<r.length;c++){const d=r[c],g=t(d);u.delete(g);const p=o.get(g);p?(i[c]=p.mapped,p.setIndex?.(c),p.setItem(()=>d)):l(i,d,c,g)}for(const c of u)o.get(c)?.dispose(),o.delete(c);return i})};function l(r,i,f,u){Y(c=>{const[d,g]=F(i),p={setItem:g,dispose:c};if(n.length>1){const[C,h]=F(f);p.setIndex=h,p.mapped=n(d,C)}else p.mapped=n(d);o.set(u,p),r[f]=p.mapped})}}function je(e){const{by:t}=e;return K(Ve(()=>e.each,typeof t=="function"?t:n=>n[t],e.children,"fallback"in e?{fallback:()=>e.fallback}:void 0))}function fe(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}function H(e){const{top:t,bottom:n,left:s,right:o,width:l,height:r}=e.getBoundingClientRect(),i=e.parentNode.getBoundingClientRect();return{top:t-i.top,bottom:n,left:s-i.left,right:o,width:l,height:r}}const Ge=e=>{const t=ve(()=>e.children),n=K(()=>{const p=e.name||"s";return{enterActiveClass:e.enterActiveClass||p+"-enter-active",enterClass:e.enterClass||p+"-enter",enterToClass:e.enterToClass||p+"-enter-to",exitActiveClass:e.exitActiveClass||p+"-exit-active",exitClass:e.exitClass||p+"-exit",exitToClass:e.exitToClass||p+"-exit-to",moveClass:e.moveClass||p+"-move"}}),{onBeforeEnter:s,onEnter:o,onAfterEnter:l,onBeforeExit:r,onExit:i,onAfterExit:f}=e,[u,c]=F();let d=[],g=!0;return he(()=>{const p=t.toArray(),C=[...p],h=new Set(p),v=new Set(d),R=n().enterClass.split(" "),$=n().enterActiveClass.split(" "),T=n().enterToClass.split(" "),E=n().exitClass.split(" "),x=n().exitActiveClass.split(" "),ne=n().exitToClass.split(" ");for(let N=0;N<p.length;N++){const a=p[N];if(!g&&!v.has(a)){let w=function(se){a&&(!se||se.target===a)&&(a.removeEventListener("transitionend",w),a.removeEventListener("animationend",w),a.classList.remove(...$),a.classList.remove(...T),l&&l(a))};var et=w;s&&s(a),a.classList.add(...R),a.classList.add(...$),fe(()=>{a.classList.remove(...R),a.classList.add(...T),o&&o(a,()=>w()),(!o||o.length<2)&&(a.addEventListener("transitionend",w),a.addEventListener("animationend",w))})}}for(let N=0;N<d.length;N++){const a=d[N];if(!h.has(a)&&a.parentNode){let w=function(oe){(!oe||oe.target===a)&&(a.removeEventListener("transitionend",w),a.removeEventListener("animationend",w),a.classList.remove(...x),a.classList.remove(...ne),f&&f(a),d=d.filter(Ee=>Ee!==a),c(d))};var et=w;C.splice(N,0,a),r&&r(a),a.classList.add(...E),a.classList.add(...x),fe(()=>{a.classList.remove(...E),a.classList.add(...ne)}),i&&i(a,()=>w()),(!i||i.length<2)&&(a.addEventListener("transitionend",w),a.addEventListener("animationend",w))}}d=C,c(C)}),Te(p=>{const C=u();return C.forEach(h=>{let v;(v=p.get(h))?v.new&&(v.new=!1,v.newPos=H(h)):p.set(h,v={pos:H(h),new:!g}),v.new&&h.addEventListener("transitionend",()=>{v.new=!1,h.parentNode&&(v.newPos=H(h))},{once:!0}),v.newPos&&(v.pos=v.newPos),v.newPos=H(h)}),g?(g=!1,p):(C.forEach(h=>{const v=p.get(h),R=v.pos,$=v.newPos,T=R.left-$.left,E=R.top-$.top;if(T||E){v.moved=!0;const x=h.style;x.transform=`translate(${T}px,${E}px)`,x.transitionDuration="0s"}}),document.body.offsetHeight,C.forEach(h=>{const v=p.get(h);if(v.moved){let E=function(x){x&&x.target!==h||!h.parentNode||(!x||/transform$/.test(x.propertyName))&&(h.removeEventListener("transitionend",E),h.classList.remove(...T))};var R=E;v.moved=!1;const $=h.style,T=n().moveClass.split(" ");h.classList.add(...T),$.transform=$.transitionDuration="",h.addEventListener("transitionend",E)}}),p)},new Map),u},Je=D('<div class="wrapper-h"><button class="btn">Add</button><button class="btn">Remove</button><button class="btn">Change value</button><button class="btn">Shuffle</button><button class="btn">Clone list</button></div>',12),Xe=D('<div class="wrapper-h flex-wrap"></div>',2),Qe=D('<p class="bg-yellow-500 transition-all p-1">No items in the list.</p>',2),We=D('<div class="node relative transition-all duration-500">. <div class="absolute -bottom-2 left-2 px-1 bg-dark-500 text-light-900">ID: </div></div>',4),ae=["oatmeal","plantains","cranberries","chickpeas","tofu","Parmesan cheese","amaretto","sunflower seeds","grapes","vegemite","pasta","cider","chicken","pinto beans","bok choy","sweet peppers","Cappuccino Latte","corn","broccoli","brussels sprouts","bread","milk","honey","chips","cookie"],te=e=>Math.floor(Math.random()*e.length),ue=()=>ae[te(ae)];function Ye(){const[e,t]=F([{id:1,value:"bread"},{id:2,value:"milk"},{id:3,value:"honey"},{id:4,value:"chips"},{id:5,value:"cookie"}]),n=()=>{for(let i=0;i<=e().length;i++)if(!e().find(u=>i===u.id)){t(u=>re(u,i,0,{id:i,value:ue()}));return}},s=()=>t(i=>re(i,te(i),1)),o=()=>t(i=>i.slice().sort(()=>Math.random()-.5)),l=()=>t(i=>JSON.parse(JSON.stringify(i))),r=()=>t(i=>Ae(i,te(i),"value",ue()));return[(()=>{const i=Je.cloneNode(!0),f=i.firstChild,u=f.nextSibling,c=u.nextSibling,d=c.nextSibling,g=d.nextSibling;return f.$$click=n,u.$$click=s,c.$$click=r,d.$$click=o,g.$$click=l,i})(),(()=>{const i=Xe.cloneNode(!0);return k(i,B(Ge,{name:"fade",get children(){return B(He,{onChange:({added:f,removed:u})=>console.log("Added:",f.length,"| Removed:",u.length),get children(){return B(je,{get each(){return e()},by:"id",get fallback(){return Qe.cloneNode(!0)},children:(f,u)=>(()=>{const c=We.cloneNode(!0),d=c.firstChild,g=d.nextSibling;return g.firstChild,k(c,u,d),k(c,()=>f().value,g),k(g,()=>f().id,null),c})()})}})}})),i})()]}Be(["click"]);const Ze=D('<div class="p-24 box-border w-full min-h-screen space-y-4 bg-gray-800 text-white overflow-hidden"></div>',2),ze=()=>(()=>{const e=Ze.cloneNode(!0);return k(e,B(Ye,{})),e})();Re(()=>B(ze,{}),document.getElementById("root"));
