import{S as w,i as y,s as x,q as H,r as O,b as _,u as q,H as p,h as c,o as A,k as f,a as b,y as k,J as G,l as m,c as T,m as h,z as C,n as d,G as g,A as I,g as $,d as E,B as z,C as J,D as L,E as M,F as j,K as N}from"../chunks/index.9b364cbc.js";/* empty css                       */import{w as P}from"../chunks/index.3616f893.js";const U=!0,lt=Object.freeze(Object.defineProperty({__proto__:null,prerender:U},Symbol.toStringTag,{value:"Module"}));let v=[];const u=P([]);function V(s){u.update(t=>[...t,s])}function B(s){u.update(t=>t.filter(e=>e.id!==s.id))}function F(){u.update(s=>{const t=[];return s.forEach(e=>{e.start_date===null&&(e.start_date=new Date),t.push(e)}),t})}function K(){u.update(s=>{const t=[],e=new Date().getTime();return s.forEach(a=>{(a.start_date===null||a.start_date.getTime()+a.duration*6e4>e)&&t.push(a)}),t})}function R(s){u.update(t=>{const e=[];return t.forEach(a=>{if(a.id===s.id){e.push(s);return}e.push(a)}),e})}function Q(s){let t=null;return v.forEach(e=>{e.id===s&&(t=e)}),t}{const s=window.localStorage.getItem("exams");if(s!==null){const t=JSON.parse(s);t.forEach(e=>{e.start_date&&(e.start_date=new Date(e.start_date))}),v=t,u.set(t)}u.subscribe(t=>{v=t,window.localStorage.setItem("exams",JSON.stringify(t))})}const W={exams_store:u,addExam:V,getExam:Q,deleteExam:B,startPendingExams:F,clearExpiredExams:K,updateExam:R};function X(s){let t=s[0].toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"})+"",e;return{c(){e=H(t)},l(a){e=O(a,t)},m(a,r){_(a,e,r)},p(a,[r]){r&1&&t!==(t=a[0].toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"})+"")&&q(e,t)},i:p,o:p,d(a){a&&c(e)}}}function Y(s,t,e){let a=new Date;return A(()=>{const r=setInterval(()=>{e(0,a=new Date)},1e3);return()=>{clearInterval(r)}}),[a]}class Z extends w{constructor(t){super(),y(this,t,Y,X,x,{})}}function tt(s){let t,e,a,r,i,o;return i=new Z({}),{c(){t=f("meta"),e=b(),a=f("header"),r=f("div"),k(i.$$.fragment),this.h()},l(n){const l=G("svelte-1qawkld",document.head);t=m(l,"META",{name:!0,content:!0}),l.forEach(c),e=T(n),a=m(n,"HEADER",{class:!0});var S=h(a);r=m(S,"DIV",{class:!0});var D=h(r);C(i.$$.fragment,D),D.forEach(c),S.forEach(c),this.h()},h(){document.title="Exams timer - Good luck!",d(t,"name","description"),d(t,"content","Exams timer - Good luck!"),d(r,"class","clock svelte-13zf8i7"),d(a,"class","svelte-13zf8i7")},m(n,l){g(document.head,t),_(n,e,l),_(n,a,l),g(a,r),I(i,r,null),o=!0},p,i(n){o||($(i.$$.fragment,n),o=!0)},o(n){E(i.$$.fragment,n),o=!1},d(n){c(t),n&&c(e),n&&c(a),z(i)}}}class et extends w{constructor(t){super(),y(this,t,null,tt,x,{})}}function at(s){let t,e,a,r;e=new et({});const i=s[1].default,o=J(i,s,s[0],null);return{c(){t=f("div"),k(e.$$.fragment),a=b(),o&&o.c(),this.h()},l(n){t=m(n,"DIV",{class:!0});var l=h(t);C(e.$$.fragment,l),a=T(l),o&&o.l(l),l.forEach(c),this.h()},h(){d(t,"class","app svelte-1rcwp06")},m(n,l){_(n,t,l),I(e,t,null),g(t,a),o&&o.m(t,null),r=!0},p(n,[l]){o&&o.p&&(!r||l&1)&&L(o,i,n,n[0],r?j(i,n[0],l,null):M(n[0]),null)},i(n){r||($(e.$$.fragment,n),$(o,n),r=!0)},o(n){E(e.$$.fragment,n),E(o,n),r=!1},d(n){n&&c(t),z(e),o&&o.d(n)}}}function nt(s,t,e){let{$$slots:a={},$$scope:r}=t;return N("exam_state",W),s.$$set=i=>{"$$scope"in i&&e(0,r=i.$$scope)},[r,a]}class it extends w{constructor(t){super(),y(this,t,nt,at,x,{})}}export{it as component,lt as universal};
