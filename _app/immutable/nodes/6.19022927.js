import{S as A,i as B,s as G,k as v,q as E,a as M,l as x,m as b,r as y,h as _,c as S,n as d,b as p,H as h,u as P,I as T,g,v as V,f as L,d as k,L as O,y as w,z as C,A as I,B as D,M as J,N as K}from"../chunks/index.bf96ed41.js";import{B as z}from"../chunks/Button.eb53bdf5.js";import{M as Q}from"../chunks/MetaTags.a36e03d9.js";function R(l){let e;return{c(){e=E("​")},l(a){e=y(a,"​")},m(a,t){p(a,e,t)},p:T,d(a){a&&_(e)}}}function U(l){let e=l[1].format(new Date(l[0].start_date.getTime()+l[0].duration*6e4))+"",a;return{c(){a=E(e)},l(t){a=y(t,e)},m(t,i){p(t,a,i)},p(t,i){i&1&&e!==(e=t[1].format(new Date(t[0].start_date.getTime()+t[0].duration*6e4))+"")&&P(a,e)},d(t){t&&_(a)}}}function W(l){let e,a,t,i=l[0].name+"",f,c,r,u;function o(m,$){return m[0].start_date?U:R}let s=o(l),n=s(l);return{c(){e=v("div"),a=v("a"),t=v("h2"),f=E(i),r=M(),u=v("div"),n.c(),this.h()},l(m){e=x(m,"DIV",{class:!0});var $=b(e);a=x($,"A",{href:!0,class:!0});var N=b(a);t=x(N,"H2",{class:!0});var j=b(t);f=y(j,i),j.forEach(_),N.forEach(_),r=S($),u=x($,"DIV",{class:!0});var q=b(u);n.l(q),q.forEach(_),$.forEach(_),this.h()},h(){d(t,"class","exam-name svelte-1xk5ayv"),d(a,"href",c="/timer/exams/edit?id="+l[0].id),d(a,"class","svelte-1xk5ayv"),d(u,"class","exam-time svelte-1xk5ayv"),d(e,"class","exam-card svelte-1xk5ayv")},m(m,$){p(m,e,$),h(e,a),h(a,t),h(t,f),h(e,r),h(e,u),n.m(u,null)},p(m,[$]){$&1&&i!==(i=m[0].name+"")&&P(f,i),$&1&&c!==(c="/timer/exams/edit?id="+m[0].id)&&d(a,"href",c),s===(s=o(m))&&n?n.p(m,$):(n.d(1),n=s(m),n&&(n.c(),n.m(u,null)))},i:T,o:T,d(m){m&&_(e),n.d()}}}function X(l,e,a){let{exam:t}=e;const i=new Intl.DateTimeFormat(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});return l.$$set=f=>{"exam"in f&&a(0,t=f.exam)},[t,i]}class Y extends A{constructor(e){super(),B(this,e,X,W,G,{exam:0})}}function F(l,e,a){const t=l.slice();return t[2]=e[a],t}function H(l){let e,a;return e=new Y({props:{exam:l[2],class:"exam"}}),{c(){w(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,i){I(e,t,i),a=!0},p(t,i){const f={};i&2&&(f.exam=t[2]),e.$set(f)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){D(e,t)}}}function Z(l){let e,a,t,i,f,c=l[1],r=[];for(let o=0;o<c.length;o+=1)r[o]=H(F(l,c,o));const u=o=>k(r[o],1,1,()=>{r[o]=null});return{c(){e=v("main");for(let o=0;o<r.length;o+=1)r[o].c();a=M(),t=v("a"),i=E("+"),this.h()},l(o){e=x(o,"MAIN",{class:!0});var s=b(e);for(let m=0;m<r.length;m+=1)r[m].l(s);a=S(s),t=x(s,"A",{class:!0,href:!0});var n=b(t);i=y(n,"+"),n.forEach(_),s.forEach(_),this.h()},h(){d(t,"class","exam add svelte-1liioju"),d(t,"href","/timer/exams/create"),d(e,"class","svelte-1liioju")},m(o,s){p(o,e,s);for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(e,null);h(e,a),h(e,t),h(t,i),f=!0},p(o,[s]){if(s&2){c=o[1];let n;for(n=0;n<c.length;n+=1){const m=F(o,c,n);r[n]?(r[n].p(m,s),g(r[n],1)):(r[n]=H(m),r[n].c(),g(r[n],1),r[n].m(e,a))}for(V(),n=c.length;n<r.length;n+=1)u(n);L()}},i(o){if(!f){for(let s=0;s<c.length;s+=1)g(r[s]);f=!0}},o(o){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)k(r[s]);f=!1},d(o){o&&_(e),O(r,o)}}}function ee(l,e,a){let t,i=T,f=()=>(i(),i=J(c,r=>a(1,t=r)),c);l.$$.on_destroy.push(()=>i());let{exams:c}=e;return f(),l.$$set=r=>{"exams"in r&&f(a(0,c=r.exams))},[c,t]}class te extends A{constructor(e){super(),B(this,e,ee,Z,G,{exams:0})}}function ae(l){let e;return{c(){e=E("Clear expired")},l(a){e=y(a,"Clear expired")},m(a,t){p(a,e,t)},d(a){a&&_(e)}}}function se(l){let e;return{c(){e=E("Start pending")},l(a){e=y(a,"Start pending")},m(a,t){p(a,e,t)},d(a){a&&_(e)}}}function ne(l){let e,a,t,i,f,c,r,u,o;return e=new Q({props:{title:"Exams timer - Good luck!",description:"Manage multiple overlapping exams at once"}}),i=new z({props:{$$slots:{default:[ae]},$$scope:{ctx:l}}}),i.$on("click",l[1]),c=new z({props:{$$slots:{default:[se]},$$scope:{ctx:l}}}),c.$on("click",l[2]),u=new te({props:{exams:l[0]}}),{c(){w(e.$$.fragment),a=M(),t=v("section"),w(i.$$.fragment),f=M(),w(c.$$.fragment),r=M(),w(u.$$.fragment),this.h()},l(s){C(e.$$.fragment,s),a=S(s),t=x(s,"SECTION",{class:!0});var n=b(t);C(i.$$.fragment,n),f=S(n),C(c.$$.fragment,n),n.forEach(_),r=S(s),C(u.$$.fragment,s),this.h()},h(){d(t,"class","buttons svelte-1m1zcdh")},m(s,n){I(e,s,n),p(s,a,n),p(s,t,n),I(i,t,null),h(t,f),I(c,t,null),p(s,r,n),I(u,s,n),o=!0},p(s,[n]){const m={};n&8&&(m.$$scope={dirty:n,ctx:s}),i.$set(m);const $={};n&8&&($.$$scope={dirty:n,ctx:s}),c.$set($)},i(s){o||(g(e.$$.fragment,s),g(i.$$.fragment,s),g(c.$$.fragment,s),g(u.$$.fragment,s),o=!0)},o(s){k(e.$$.fragment,s),k(i.$$.fragment,s),k(c.$$.fragment,s),k(u.$$.fragment,s),o=!1},d(s){D(e,s),s&&_(a),s&&_(t),D(i),D(c),s&&_(r),D(u,s)}}}function re(l){const{exams_store:e,clearExpiredExams:a,startPendingExams:t}=K("exam_state");return[e,a,t]}class ce extends A{constructor(e){super(),B(this,e,re,ne,G,{})}}export{ce as component};
