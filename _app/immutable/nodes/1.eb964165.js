import{S as z,i as A,s as B,y as d,a as M,z as y,c as S,A as E,b as k,g as b,d as j,B as H,h as c,G as C,k as f,q,l as _,m as $,r as w,n as g,H as u,u as L}from"../chunks/index.bf96ed41.js";import{p as D}from"../chunks/stores.477f2813.js";import{M as G}from"../chunks/MetaTags.a36e03d9.js";import{L as I}from"../chunks/_layout.ba3e98ff.js";function T(n){let s,r,t=n[0].status+"",o,e,a,l=n[0].error.message+"",p;return{c(){s=f("div"),r=f("h1"),o=q(t),e=M(),a=f("h3"),p=q(l),this.h()},l(i){s=_(i,"DIV",{class:!0});var m=$(s);r=_(m,"H1",{class:!0});var h=$(r);o=w(h,t),h.forEach(c),e=S(m),a=_(m,"H3",{class:!0});var v=$(a);p=w(v,l),v.forEach(c),m.forEach(c),this.h()},h(){g(r,"class","svelte-1nnj8o8"),g(a,"class","svelte-1nnj8o8"),g(s,"class","svelte-1nnj8o8")},m(i,m){k(i,s,m),u(s,r),u(r,o),u(s,e),u(s,a),u(a,p)},p(i,m){m&1&&t!==(t=i[0].status+"")&&L(o,t),m&1&&l!==(l=i[0].error.message+"")&&L(p,l)},d(i){i&&c(s)}}}function V(n){let s,r,t,o;return s=new G({props:{title:n[0].status+" - "+n[0].error.message,description:n[0].status+" - "+n[0].error.message}}),t=new I({props:{$$slots:{default:[T]},$$scope:{ctx:n}}}),{c(){d(s.$$.fragment),r=M(),d(t.$$.fragment)},l(e){y(s.$$.fragment,e),r=S(e),y(t.$$.fragment,e)},m(e,a){E(s,e,a),k(e,r,a),E(t,e,a),o=!0},p(e,[a]){const l={};a&1&&(l.title=e[0].status+" - "+e[0].error.message),a&1&&(l.description=e[0].status+" - "+e[0].error.message),s.$set(l);const p={};a&3&&(p.$$scope={dirty:a,ctx:e}),t.$set(p)},i(e){o||(b(s.$$.fragment,e),b(t.$$.fragment,e),o=!0)},o(e){j(s.$$.fragment,e),j(t.$$.fragment,e),o=!1},d(e){H(s,e),e&&c(r),H(t,e)}}}function F(n,s,r){let t;return C(n,D,o=>r(0,t=o)),[t]}class P extends z{constructor(s){super(),A(this,s,F,V,B,{})}}export{P as component};
