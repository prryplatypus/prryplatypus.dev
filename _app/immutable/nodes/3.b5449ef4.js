import{S,i as D,s as b,q as M,r as O,b as p,u as A,H as $,h as c,o as J,k as h,y as I,l as g,m as v,z as k,n as m,G as E,A as z,g as w,d as y,B as H,C as L,a as T,J as j,c as C,D as q,E as N,F as P,K as U}from"../chunks/index.9b364cbc.js";/* empty css                       */import{w as V}from"../chunks/index.3616f893.js";const B=!0,it=Object.freeze(Object.defineProperty({__proto__:null,prerender:B},Symbol.toStringTag,{value:"Module"}));let x=[];const d=V([]);function F(n){d.update(t=>[...t,n])}function G(n){d.update(t=>t.filter(e=>e.id!==n.id))}function K(){d.update(n=>{const t=[];return n.forEach(e=>{e.start_date===null&&(e.start_date=new Date),t.push(e)}),t})}function R(){d.update(n=>{const t=[],e=new Date().getTime();return n.forEach(a=>{(a.start_date===null||a.start_date.getTime()+a.duration*6e4>e)&&t.push(a)}),t})}function Q(n){d.update(t=>{const e=[];return t.forEach(a=>{if(a.id===n.id){e.push(n);return}e.push(a)}),e})}function W(n){let t=null;return x.forEach(e=>{e.id===n&&(t=e)}),t}{const n=window.localStorage.getItem("exams");if(n!==null){const t=JSON.parse(n);t.forEach(e=>{e.start_date&&(e.start_date=new Date(e.start_date))}),x=t,d.set(t)}d.subscribe(t=>{x=t,window.localStorage.setItem("exams",JSON.stringify(t))})}const X={exams_store:d,addExam:F,getExam:W,deleteExam:G,startPendingExams:K,clearExpiredExams:R,updateExam:Q};function Y(n){let t=n[0].toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"})+"",e;return{c(){e=M(t)},l(a){e=O(a,t)},m(a,s){p(a,e,s)},p(a,[s]){s&1&&t!==(t=a[0].toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"})+"")&&A(e,t)},i:$,o:$,d(a){a&&c(e)}}}function Z(n,t,e){let a=new Date;return J(()=>{const s=setInterval(()=>{e(0,a=new Date)},1e3);return()=>{clearInterval(s)}}),[a]}class tt extends S{constructor(t){super(),D(this,t,Z,Y,b,{})}}function et(n){let t,e,a,s;return a=new tt({}),{c(){t=h("header"),e=h("div"),I(a.$$.fragment),this.h()},l(o){t=g(o,"HEADER",{class:!0});var i=v(t);e=g(i,"DIV",{class:!0});var f=v(e);k(a.$$.fragment,f),f.forEach(c),i.forEach(c),this.h()},h(){m(e,"class","clock svelte-13zf8i7"),m(t,"class","svelte-13zf8i7")},m(o,i){p(o,t,i),E(t,e),z(a,e,null),s=!0},p:$,i(o){s||(w(a.$$.fragment,o),s=!0)},o(o){y(a.$$.fragment,o),s=!1},d(o){o&&c(t),H(a)}}}class at extends S{constructor(t){super(),D(this,t,null,et,b,{})}}function nt(n){let t,e,a,s,o,i;s=new at({});const f=n[1].default,l=L(f,n,n[0],null);return{c(){t=h("meta"),e=T(),a=h("div"),I(s.$$.fragment),o=T(),l&&l.c(),this.h()},l(r){const u=j("svelte-1i6wn38",document.head);t=g(u,"META",{name:!0,content:!0}),u.forEach(c),e=C(r),a=g(r,"DIV",{class:!0});var _=v(a);k(s.$$.fragment,_),o=C(_),l&&l.l(_),_.forEach(c),this.h()},h(){m(t,"name","description"),m(t,"content","Manage multiple overlapping exams at once"),m(a,"class","app svelte-1rcwp06")},m(r,u){E(document.head,t),p(r,e,u),p(r,a,u),z(s,a,null),E(a,o),l&&l.m(a,null),i=!0},p(r,[u]){l&&l.p&&(!i||u&1)&&q(l,f,r,r[0],i?P(f,r[0],u,null):N(r[0]),null)},i(r){i||(w(s.$$.fragment,r),w(l,r),i=!0)},o(r){y(s.$$.fragment,r),y(l,r),i=!1},d(r){c(t),r&&c(e),r&&c(a),H(s),l&&l.d(r)}}}function st(n,t,e){let{$$slots:a={},$$scope:s}=t;return U("exam_state",X),n.$$set=o=>{"$$scope"in o&&e(0,s=o.$$scope)},[s,a]}class ct extends S{constructor(t){super(),D(this,t,st,nt,b,{})}}export{ct as component,it as universal};
