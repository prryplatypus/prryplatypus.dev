import{S as T,i as B,s as q,k as g,q as k,a as w,l as v,m as x,r as y,h as f,c as C,n as h,b as p,G as $,u as O,H as S,g as b,v as P,f as V,d as E,M as J,y as A,z as D,A as G,B as I,N as K,J as L,O as Q}from"../chunks/index.9b364cbc.js";import{B as z}from"../chunks/Button.349ce5de.js";function R(l){let e;return{c(){e=k("​")},l(a){e=y(a,"​")},m(a,t){p(a,e,t)},p:S,d(a){a&&f(e)}}}function U(l){let e=l[1].format(new Date(l[0].start_date.getTime()+l[0].duration*6e4))+"",a;return{c(){a=k(e)},l(t){a=y(t,e)},m(t,o){p(t,a,o)},p(t,o){o&1&&e!==(e=t[1].format(new Date(t[0].start_date.getTime()+t[0].duration*6e4))+"")&&O(a,e)},d(t){t&&f(a)}}}function W(l){let e,a,t,o=l[0].name+"",u,m,r,_;function i(c,d){return c[0].start_date?U:R}let s=i(l),n=s(l);return{c(){e=g("div"),a=g("a"),t=g("h2"),u=k(o),r=w(),_=g("div"),n.c(),this.h()},l(c){e=v(c,"DIV",{class:!0});var d=x(e);a=v(d,"A",{href:!0,class:!0});var M=x(a);t=v(M,"H2",{class:!0});var N=x(t);u=y(N,o),N.forEach(f),M.forEach(f),r=C(d),_=v(d,"DIV",{class:!0});var j=x(_);n.l(j),j.forEach(f),d.forEach(f),this.h()},h(){h(t,"class","exam-name svelte-1xk5ayv"),h(a,"href",m="/timer/exams/edit?id="+l[0].id),h(a,"class","svelte-1xk5ayv"),h(_,"class","exam-time svelte-1xk5ayv"),h(e,"class","exam-card svelte-1xk5ayv")},m(c,d){p(c,e,d),$(e,a),$(a,t),$(t,u),$(e,r),$(e,_),n.m(_,null)},p(c,[d]){d&1&&o!==(o=c[0].name+"")&&O(u,o),d&1&&m!==(m="/timer/exams/edit?id="+c[0].id)&&h(a,"href",m),s===(s=i(c))&&n?n.p(c,d):(n.d(1),n=s(c),n&&(n.c(),n.m(_,null)))},i:S,o:S,d(c){c&&f(e),n.d()}}}function X(l,e,a){let{exam:t}=e;const o=new Intl.DateTimeFormat(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});return l.$$set=u=>{"exam"in u&&a(0,t=u.exam)},[t,o]}class Y extends T{constructor(e){super(),B(this,e,X,W,q,{exam:0})}}function F(l,e,a){const t=l.slice();return t[2]=e[a],t}function H(l){let e,a;return e=new Y({props:{exam:l[2],class:"exam"}}),{c(){A(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,o){G(e,t,o),a=!0},p(t,o){const u={};o&2&&(u.exam=t[2]),e.$set(u)},i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){E(e.$$.fragment,t),a=!1},d(t){I(e,t)}}}function Z(l){let e,a,t,o,u,m=l[1],r=[];for(let i=0;i<m.length;i+=1)r[i]=H(F(l,m,i));const _=i=>E(r[i],1,1,()=>{r[i]=null});return{c(){e=g("main");for(let i=0;i<r.length;i+=1)r[i].c();a=w(),t=g("a"),o=k("+"),this.h()},l(i){e=v(i,"MAIN",{class:!0});var s=x(e);for(let c=0;c<r.length;c+=1)r[c].l(s);a=C(s),t=v(s,"A",{class:!0,href:!0});var n=x(t);o=y(n,"+"),n.forEach(f),s.forEach(f),this.h()},h(){h(t,"class","exam add svelte-1liioju"),h(t,"href","/timer/exams/create"),h(e,"class","svelte-1liioju")},m(i,s){p(i,e,s);for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(e,null);$(e,a),$(e,t),$(t,o),u=!0},p(i,[s]){if(s&2){m=i[1];let n;for(n=0;n<m.length;n+=1){const c=F(i,m,n);r[n]?(r[n].p(c,s),b(r[n],1)):(r[n]=H(c),r[n].c(),b(r[n],1),r[n].m(e,a))}for(P(),n=m.length;n<r.length;n+=1)_(n);V()}},i(i){if(!u){for(let s=0;s<m.length;s+=1)b(r[s]);u=!0}},o(i){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)E(r[s]);u=!1},d(i){i&&f(e),J(r,i)}}}function ee(l,e,a){let t,o=S,u=()=>(o(),o=K(m,r=>a(1,t=r)),m);l.$$.on_destroy.push(()=>o());let{exams:m}=e;return u(),l.$$set=r=>{"exams"in r&&u(a(0,m=r.exams))},[m,t]}class te extends T{constructor(e){super(),B(this,e,ee,Z,q,{exams:0})}}function ae(l){let e;return{c(){e=k("Clear expired")},l(a){e=y(a,"Clear expired")},m(a,t){p(a,e,t)},d(a){a&&f(e)}}}function se(l){let e;return{c(){e=k("Start pending")},l(a){e=y(a,"Start pending")},m(a,t){p(a,e,t)},d(a){a&&f(e)}}}function ne(l){let e,a,t,o,u,m,r,_,i;return o=new z({props:{$$slots:{default:[ae]},$$scope:{ctx:l}}}),o.$on("click",l[1]),m=new z({props:{$$slots:{default:[se]},$$scope:{ctx:l}}}),m.$on("click",l[2]),_=new te({props:{exams:l[0]}}),{c(){e=g("meta"),a=w(),t=g("section"),A(o.$$.fragment),u=w(),A(m.$$.fragment),r=w(),A(_.$$.fragment),this.h()},l(s){const n=L("svelte-1qawkld",document.head);e=v(n,"META",{name:!0,content:!0}),n.forEach(f),a=C(s),t=v(s,"SECTION",{class:!0});var c=x(t);D(o.$$.fragment,c),u=C(c),D(m.$$.fragment,c),c.forEach(f),r=C(s),D(_.$$.fragment,s),this.h()},h(){document.title="Exams timer - Good luck!",h(e,"name","description"),h(e,"content","Exams timer - Good luck!"),h(t,"class","buttons svelte-1m1zcdh")},m(s,n){$(document.head,e),p(s,a,n),p(s,t,n),G(o,t,null),$(t,u),G(m,t,null),p(s,r,n),G(_,s,n),i=!0},p(s,[n]){const c={};n&8&&(c.$$scope={dirty:n,ctx:s}),o.$set(c);const d={};n&8&&(d.$$scope={dirty:n,ctx:s}),m.$set(d)},i(s){i||(b(o.$$.fragment,s),b(m.$$.fragment,s),b(_.$$.fragment,s),i=!0)},o(s){E(o.$$.fragment,s),E(m.$$.fragment,s),E(_.$$.fragment,s),i=!1},d(s){f(e),s&&f(a),s&&f(t),I(o),I(m),s&&f(r),I(_,s)}}}function re(l){const{exams_store:e,clearExpiredExams:a,startPendingExams:t}=Q("exam_state");return[e,a,t]}class ie extends T{constructor(e){super(),B(this,e,re,ne,q,{})}}export{ie as component};
