import{c,i as s,t as i,d as m}from"./index-93d111ba.js";import{g as _}from"./index-d773cba7.js";const f=i('<div class="row"><p>number = </p><button class="btn">+1</button><button class="btn">-1</button></div>',8),h=i('<div class="row"><p>divisor = </p><button class="btn">+1</button><button class="btn">-1</button></div>',8),v=i("<p>result = </p>",2),C=i("<p>calc ran times = </p>",2);function x(){const[o,u]=c(1),[a,$]=c(1),[b,d]=c(0),p=_(o,t=>(d(e=>++e),t/a()));return[(()=>{const t=f.cloneNode(!0),e=t.firstChild;e.firstChild;const l=e.nextSibling,r=l.nextSibling;return s(e,o,null),l.$$click=()=>u(n=>++n),r.$$click=()=>u(n=>--n),t})(),(()=>{const t=h.cloneNode(!0),e=t.firstChild;e.firstChild;const l=e.nextSibling,r=l.nextSibling;return s(e,a,null),l.$$click=()=>$(n=>++n),r.$$click=()=>$(n=>--n),t})(),(()=>{const t=v.cloneNode(!0);return t.firstChild,s(t,p,null),t})(),(()=>{const t=C.cloneNode(!0);return t.firstChild,s(t,b,null),t})()]}m(["click"]);export{x as default};
