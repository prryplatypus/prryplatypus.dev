import{S as U,i as V,s as G,a as x,k as B,y as g,J,h as u,c as w,l as C,m as O,z as d,n as A,b as c,A as v,g as h,d as b,B as E,I as T,O as W,G as q,q as D,r as I}from"../chunks/index.9b364cbc.js";import{F as H,g as y,L as M,I as R}from"../chunks/Label.7dad4e37.js";import{p as K}from"../chunks/stores.01d18e8c.js";import{I as Q}from"../chunks/InternalLink.c3c01a59.js";import{B as N}from"../chunks/Button.349ce5de.js";const X=!0,Y=X,Z=!1,ce=Object.freeze(Object.defineProperty({__proto__:null,ssr:Z},Symbol.toStringTag,{value:"Module"}));function ee(m){let n,e,s;return e=new R({props:{type:"text",name:"name",placeholder:"Name",value:m[0]?m[0].name:"",required:!0}}),{c(){n=D(`Exam name
            `),g(e.$$.fragment)},l(t){n=I(t,`Exam name
            `),d(e.$$.fragment,t)},m(t,a){c(t,n,a),v(e,t,a),s=!0},p(t,a){const l={};a&1&&(l.value=t[0]?t[0].name:""),e.$set(l)},i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){t&&u(n),E(e,t)}}}function te(m){let n,e,s;return e=new R({props:{type:"number",name:"duration",placeholder:"45",min:"0",step:"1",value:m[0]?m[0].duration:"",required:!0}}),{c(){n=D(`Exam duration (minutes)
            `),g(e.$$.fragment)},l(t){n=I(t,`Exam duration (minutes)
            `),d(e.$$.fragment,t)},m(t,a){c(t,n,a),v(e,t,a),s=!0},p(t,a){const l={};a&1&&(l.value=t[0]?t[0].duration:""),e.$set(l)},i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){t&&u(n),E(e,t)}}}function ne(m){let n;return{c(){n=D("Delete")},l(e){n=I(e,"Delete")},m(e,s){c(e,n,s)},d(e){e&&u(n)}}}function ae(m){let n;return{c(){n=D("Cancel")},l(e){n=I(e,"Cancel")},m(e,s){c(e,n,s)},d(e){e&&u(n)}}}function se(m){let n;return{c(){n=D("Save")},l(e){n=I(e,"Save")},m(e,s){c(e,n,s)},d(e){e&&u(n)}}}function re(m){let n,e,s,t,a,l,f,$,k,p,_,i,S;return n=new M({props:{$$slots:{default:[ee]},$$scope:{ctx:m}}}),s=new M({props:{$$slots:{default:[te]},$$scope:{ctx:m}}}),l=new N({props:{type:"button",$$slots:{default:[ne]},$$scope:{ctx:m}}}),l.$on("click",m[2]),p=new Q({props:{href:"/timer",$$slots:{default:[ae]},$$scope:{ctx:m}}}),i=new N({props:{type:"submit",$$slots:{default:[se]},$$scope:{ctx:m}}}),i.$on("click",m[1]),{c(){g(n.$$.fragment),e=x(),g(s.$$.fragment),t=x(),a=B("div"),g(l.$$.fragment),f=x(),$=B("div"),k=x(),g(p.$$.fragment),_=x(),g(i.$$.fragment),this.h()},l(r){d(n.$$.fragment,r),e=w(r),d(s.$$.fragment,r),t=w(r),a=C(r,"DIV",{class:!0});var o=O(a);d(l.$$.fragment,o),f=w(o),$=C(o,"DIV",{class:!0}),O($).forEach(u),k=w(o),d(p.$$.fragment,o),_=w(o),d(i.$$.fragment,o),o.forEach(u),this.h()},h(){A($,"class","spacer svelte-10n8v6n"),A(a,"class","buttons svelte-10n8v6n")},m(r,o){v(n,r,o),c(r,e,o),v(s,r,o),c(r,t,o),c(r,a,o),v(l,a,null),q(a,f),q(a,$),q(a,k),v(p,a,null),q(a,_),v(i,a,null),S=!0},p(r,o){const F={};o&257&&(F.$$scope={dirty:o,ctx:r}),n.$set(F);const L={};o&257&&(L.$$scope={dirty:o,ctx:r}),s.$set(L);const P={};o&256&&(P.$$scope={dirty:o,ctx:r}),l.$set(P);const j={};o&256&&(j.$$scope={dirty:o,ctx:r}),p.$set(j);const z={};o&256&&(z.$$scope={dirty:o,ctx:r}),i.$set(z)},i(r){S||(h(n.$$.fragment,r),h(s.$$.fragment,r),h(l.$$.fragment,r),h(p.$$.fragment,r),h(i.$$.fragment,r),S=!0)},o(r){b(n.$$.fragment,r),b(s.$$.fragment,r),b(l.$$.fragment,r),b(p.$$.fragment,r),b(i.$$.fragment,r),S=!1},d(r){E(n,r),r&&u(e),E(s,r),r&&u(t),r&&u(a),E(l),E(p),E(i)}}}function oe(m){let n,e,s,t;return s=new H({props:{title:"Edit exam",$$slots:{default:[re]},$$scope:{ctx:m}}}),s.$on("submit",m[1]),{c(){n=x(),e=B("main"),g(s.$$.fragment),this.h()},l(a){J("svelte-7kvdpk",document.head).forEach(u),n=w(a),e=C(a,"MAIN",{class:!0});var f=O(e);d(s.$$.fragment,f),f.forEach(u),this.h()},h(){document.title="Exams timer - Edit exam",A(e,"class","svelte-10n8v6n")},m(a,l){c(a,n,l),c(a,e,l),v(s,e,null),t=!0},p(a,[l]){const f={};l&257&&(f.$$scope={dirty:l,ctx:a}),s.$set(f)},i(a){t||(h(s.$$.fragment,a),t=!0)},o(a){b(s.$$.fragment,a),t=!1},d(a){a&&u(n),a&&u(e),E(s)}}}function le(m,n,e){let s;T(m,K,_=>e(3,s=_));const{getExam:t,updateExam:a,deleteExam:l}=W("exam_state"),f=s.url.searchParams.get("id");f===null&&y("/timer");const $=t(f);return $===null&&Y&&y("/timer"),[$,_=>{const i=new FormData(_.target);e(0,$.name=i.get("name"),$),e(0,$.duration=parseInt(i.get("duration")),$),a($),y("/timer")},_=>{_.preventDefault(),confirm("Are you sure you want to delete this exam?")&&(l($),y("/timer"))}]}class pe extends U{constructor(n){super(),V(this,n,le,oe,G,{})}}export{pe as component,ce as universal};