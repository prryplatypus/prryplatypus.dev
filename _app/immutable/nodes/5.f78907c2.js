import{S as J,i as W,s as Y,C as ae,k as g,q as I,a as V,l as v,m as D,r as S,h as d,c as H,n as m,b as M,G as f,u as G,D as se,E as re,F as le,g as P,d as F,H as U,L as x,v as oe,f as ce,M as fe,y as L,z as B,A as N,B as O,J as ue}from"../chunks/index.9b364cbc.js";function de(r){let e,n,t,a,o,s,l,i;const w=r[3].default,u=ae(w,r,r[2],null);return{c(){e=g("div"),n=g("div"),t=g("h2"),a=I(r[0]),o=V(),s=g("hr"),l=V(),u&&u.c(),this.h()},l(h){e=v(h,"DIV",{class:!0,id:!0});var p=D(e);n=v(p,"DIV",{class:!0});var j=D(n);t=v(j,"H2",{});var y=D(t);a=S(y,r[0]),y.forEach(d),o=H(j),s=v(j,"HR",{class:!0}),j.forEach(d),l=H(p),u&&u.l(p),p.forEach(d),this.h()},h(){m(s,"class","divider svelte-1946q4i"),m(n,"class","title svelte-1946q4i"),m(e,"class","article svelte-1946q4i"),m(e,"id",r[1])},m(h,p){M(h,e,p),f(e,n),f(n,t),f(t,a),f(n,o),f(n,s),f(e,l),u&&u.m(e,null),i=!0},p(h,[p]){(!i||p&1)&&G(a,h[0]),u&&u.p&&(!i||p&4)&&se(u,w,h,h[2],i?le(w,h[2],p,null):re(h[2]),null),(!i||p&2)&&m(e,"id",h[1])},i(h){i||(P(u,h),i=!0)},o(h){F(u,h),i=!1},d(h){h&&d(e),u&&u.d(h)}}}function he(r,e,n){let{$$slots:t={},$$scope:a}=e,{title:o=""}=e,{id:s=""}=e;return r.$$set=l=>{"title"in l&&n(0,o=l.title),"id"in l&&n(1,s=l.id),"$$scope"in l&&n(2,a=l.$$scope)},[o,s,a,t]}class ee extends J{constructor(e){super(),W(this,e,he,de,Y,{title:0,id:1})}}function me(r){let e,n;return{c(){e=g("a"),n=I("←"),this.h()},l(t){e=v(t,"A",{href:!0,class:!0});var a=D(e);n=S(a,"←"),a.forEach(d),this.h()},h(){m(e,"href",r[0]),m(e,"class","svelte-7x080u")},m(t,a){M(t,e,a),f(e,n)},p(t,[a]){a&1&&m(e,"href",t[0])},i:U,o:U,d(t){t&&d(e)}}}function pe(r,e,n){let{href:t=""}=e;return r.$$set=a=>{"href"in a&&n(0,t=a.href)},[t]}class _e extends J{constructor(e){super(),W(this,e,pe,me,Y,{href:0})}}function ge(r){let e;return{c(){e=g("hr"),this.h()},l(n){e=v(n,"HR",{class:!0}),this.h()},h(){m(e,"class","svelte-1jv4z2b")},m(n,t){M(n,e,t)},p:U,i:U,o:U,d(n){n&&d(e)}}}class ve extends J{constructor(e){super(),W(this,e,null,ge,Y,{})}}function we(r){let e,n,t;const a=r[3].default,o=ae(a,r,r[2],null);return{c(){e=g("a"),o&&o.c(),this.h()},l(s){e=v(s,"A",{href:!0,class:!0,target:!0});var l=D(e);o&&o.l(l),l.forEach(d),this.h()},h(){m(e,"href",r[0]),m(e,"class",n=x(r[1]?"inline":"")+" svelte-ej64jw"),m(e,"target","_blank")},m(s,l){M(s,e,l),o&&o.m(e,null),t=!0},p(s,[l]){o&&o.p&&(!t||l&4)&&se(o,a,s,s[2],t?le(a,s[2],l,null):re(s[2]),null),(!t||l&1)&&m(e,"href",s[0]),(!t||l&2&&n!==(n=x(s[1]?"inline":"")+" svelte-ej64jw"))&&m(e,"class",n)},i(s){t||(P(o,s),t=!0)},o(s){F(o,s),t=!1},d(s){s&&d(e),o&&o.d(s)}}}function $e(r,e,n){let{$$slots:t={},$$scope:a}=e,{href:o}=e,{inline:s=!1}=e;return r.$$set=l=>{"href"in l&&n(0,o=l.href),"inline"in l&&n(1,s=l.inline),"$$scope"in l&&n(2,a=l.$$scope)},[o,s,a,t]}class be extends J{constructor(e){super(),W(this,e,$e,we,Y,{href:0,inline:1})}}function te(r,e,n){const t=r.slice();return t[1]=e[n],t}function De(r){let e=r[1].place+"",n;return{c(){n=I(e)},l(t){n=S(t,e)},m(t,a){M(t,n,a)},p(t,a){a&1&&e!==(e=t[1].place+"")&&G(n,e)},d(t){t&&d(n)}}}function ne(r){let e,n,t=X(r[1].start_date)+"",a,o,s=X(r[1].end_date)+"",l,i,w,u,h=r[1].role+"",p,j,y,q,C,k=r[1].description+"",E,z,b;return y=new be({props:{href:r[1].place_website,inline:!0,$$slots:{default:[De]},$$scope:{ctx:r}}}),{c(){e=g("li"),n=g("span"),a=I(t),o=I(` -\r
                `),l=I(s),i=V(),w=g("div"),u=g("h3"),p=I(h),j=I(` @\r
                    `),L(y.$$.fragment),q=V(),C=g("p"),E=I(k),z=V(),this.h()},l(_){e=v(_,"LI",{class:!0});var c=D(e);n=v(c,"SPAN",{class:!0});var $=D(n);a=S($,t),o=S($,` -\r
                `),l=S($,s),$.forEach(d),i=H(c),w=v(c,"DIV",{class:!0});var A=D(w);u=v(A,"H3",{});var T=D(u);p=S(T,h),j=S(T,` @\r
                    `),B(y.$$.fragment,T),T.forEach(d),q=H(A),C=v(A,"P",{class:!0});var R=D(C);E=S(R,k),R.forEach(d),A.forEach(d),z=H(c),c.forEach(d),this.h()},h(){m(n,"class","svelte-1dlwv61"),m(C,"class","svelte-1dlwv61"),m(w,"class","content"),m(e,"class","svelte-1dlwv61")},m(_,c){M(_,e,c),f(e,n),f(n,a),f(n,o),f(n,l),f(e,i),f(e,w),f(w,u),f(u,p),f(u,j),N(y,u,null),f(w,q),f(w,C),f(C,E),f(e,z),b=!0},p(_,c){(!b||c&1)&&t!==(t=X(_[1].start_date)+"")&&G(a,t),(!b||c&1)&&s!==(s=X(_[1].end_date)+"")&&G(l,s),(!b||c&1)&&h!==(h=_[1].role+"")&&G(p,h);const $={};c&1&&($.href=_[1].place_website),c&17&&($.$$scope={dirty:c,ctx:_}),y.$set($),(!b||c&1)&&k!==(k=_[1].description+"")&&G(E,k)},i(_){b||(P(y.$$.fragment,_),b=!0)},o(_){F(y.$$.fragment,_),b=!1},d(_){_&&d(e),O(y)}}}function ye(r){let e,n,t=r[0],a=[];for(let s=0;s<t.length;s+=1)a[s]=ne(te(r,t,s));const o=s=>F(a[s],1,1,()=>{a[s]=null});return{c(){e=g("ul");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=v(s,"UL",{class:!0});var l=D(e);for(let i=0;i<a.length;i+=1)a[i].l(l);l.forEach(d),this.h()},h(){m(e,"class","svelte-1dlwv61")},m(s,l){M(s,e,l);for(let i=0;i<a.length;i+=1)a[i]&&a[i].m(e,null);n=!0},p(s,[l]){if(l&1){t=s[0];let i;for(i=0;i<t.length;i+=1){const w=te(s,t,i);a[i]?(a[i].p(w,l),P(a[i],1)):(a[i]=ne(w),a[i].c(),P(a[i],1),a[i].m(e,null))}for(oe(),i=t.length;i<a.length;i+=1)o(i);ce()}},i(s){if(!n){for(let l=0;l<t.length;l+=1)P(a[l]);n=!0}},o(s){a=a.filter(Boolean);for(let l=0;l<a.length;l+=1)F(a[l]);n=!1},d(s){s&&d(e),fe(a,s)}}}function X(r){if(r===null)return"Present";const e={month:"long",year:"numeric"};return r.toLocaleString("en-US",e)}function ke(r,e,n){let{items:t=[]}=e;return t.sort((a,o)=>o.start_date-a.start_date),r.$$set=a=>{"items"in a&&n(0,t=a.items)},[t]}class ie extends J{constructor(e){super(),W(this,e,ke,ye,Y,{items:0})}}function Ee(r){let e,n;return e=new ie({props:{items:r[1]}}),{c(){L(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,a){N(e,t,a),n=!0},p:U,i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Ie(r){let e,n;return e=new ie({props:{items:r[2]}}),{c(){L(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,a){N(e,t,a),n=!0},p:U,i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Se(r){let e,n,t,a,o,s,l,i,w,u,h,p,j,y,q,C,k,E,z,b,_;return l=new _e({props:{href:"/"}}),u=new ve({}),E=new ee({props:{title:"Experience",id:"experience",$$slots:{default:[Ee]},$$scope:{ctx:r}}}),b=new ee({props:{title:"Education",id:"education",$$slots:{default:[Ie]},$$scope:{ctx:r}}}),{c(){e=g("meta"),n=V(),t=g("section"),a=g("div"),o=g("div"),s=g("h1"),L(l.$$.fragment),i=I(`\r
                Resume`),w=V(),L(u.$$.fragment),h=V(),p=g("p"),j=I("My name is Néstor Pérez and I'm a "),y=I(r[0]),q=I(` year old software engineer from\r
            Spain. Throughout the past years I've developed software for different\r
            places; ranging from volunteer-run organizations to others which provide\r
            services to large international companies. Thanks to the experience I've\r
            gained at these places, I'm able to write maintainable, future proof\r
            and easily-testable code; things that I always set as personal goals\r
            when working on any project.`),C=V(),k=g("div"),L(E.$$.fragment),z=V(),L(b.$$.fragment),this.h()},l(c){const $=ue("svelte-6zjxed",document.head);e=v($,"META",{name:!0,content:!0}),$.forEach(d),n=H(c),t=v(c,"SECTION",{class:!0});var A=D(t);a=v(A,"DIV",{class:!0});var T=D(a);o=v(T,"DIV",{class:!0});var R=D(o);s=v(R,"H1",{});var Z=D(s);B(l.$$.fragment,Z),i=S(Z,`\r
                Resume`),Z.forEach(d),w=H(R),B(u.$$.fragment,R),R.forEach(d),h=H(T),p=v(T,"P",{});var K=D(p);j=S(K,"My name is Néstor Pérez and I'm a "),y=S(K,r[0]),q=S(K,` year old software engineer from\r
            Spain. Throughout the past years I've developed software for different\r
            places; ranging from volunteer-run organizations to others which provide\r
            services to large international companies. Thanks to the experience I've\r
            gained at these places, I'm able to write maintainable, future proof\r
            and easily-testable code; things that I always set as personal goals\r
            when working on any project.`),K.forEach(d),T.forEach(d),C=H(A),k=v(A,"DIV",{class:!0});var Q=D(k);B(E.$$.fragment,Q),z=H(Q),B(b.$$.fragment,Q),Q.forEach(d),A.forEach(d),this.h()},h(){document.title="My Resume",m(e,"name","description"),m(e,"content","Néstor Pérez - Resume"),m(o,"class","title svelte-14nao22"),m(a,"class","home svelte-14nao22"),m(k,"class","articles svelte-14nao22"),m(t,"class","svelte-14nao22")},m(c,$){f(document.head,e),M(c,n,$),M(c,t,$),f(t,a),f(a,o),f(o,s),N(l,s,null),f(s,i),f(o,w),N(u,o,null),f(a,h),f(a,p),f(p,j),f(p,y),f(p,q),f(t,C),f(t,k),N(E,k,null),f(k,z),N(b,k,null),_=!0},p(c,[$]){const A={};$&8&&(A.$$scope={dirty:$,ctx:c}),E.$set(A);const T={};$&8&&(T.$$scope={dirty:$,ctx:c}),b.$set(T)},i(c){_||(P(l.$$.fragment,c),P(u.$$.fragment,c),P(E.$$.fragment,c),P(b.$$.fragment,c),_=!0)},o(c){F(l.$$.fragment,c),F(u.$$.fragment,c),F(E.$$.fragment,c),F(b.$$.fragment,c),_=!1},d(c){d(e),c&&d(n),c&&d(t),O(l),O(u),O(E),O(b)}}}function je(r){var e=Date.now()-r.getTime(),n=new Date(e);return Math.abs(n.getUTCFullYear()-1970)}function Ae(r){const e=je(new Date(Date.parse("2000-06-16"))),n=[{start_date:new Date(Date.parse("2022-10-01")),end_date:null,place:"Sanic Framework (OSS project)",place_website:"https://sanicframework.org/",role:"Steering Council",description:["After being a core developer for a year, I was nominated to join the steering council of the project. The steering council ","is responsible for accepting, remanding, and rejecting RFCs, enforcing the community code of conduct, administering ","community assets (such as repositories), and adopting or removing projects from under the community umbrella."].join("")},{start_date:new Date(Date.parse("2022-09-01")),end_date:new Date(Date.parse("2023-05-01")),place:"PacketFabric",place_website:"https://packetfabric.com/",role:"Junior Software Engineer",description:["Part of the core development team. Worked on network-oriented APIs and all the shenanigans that make it work, like asynchronous ","tasks, message queues, and data storage. Additionally, I reworked the CI flows and the image build and deployment processes. ","Provided customer-centric support with any development-related issues."].join("")},{start_date:new Date(Date.parse("2021-12-01")),end_date:new Date(Date.parse("2022-06-01")),place:"SilentForce",place_website:"https://silentforce.io/",role:"Security Engineering Intern",description:["Performed offensive security testing of web and mobile applications. Helped with the development of a tool that allowed ","continuous monitoring, discovery and testing of customer assets in an automated fashion. Other notable projects are the ","development of an API that exposed all gathered data to the customers and an asynchronous web spider that crawled customer ","web services in search of sensitive data that could be used by attackers."].join("")},{start_date:new Date(Date.parse("2021-10-01")),end_date:new Date(Date.parse("2022-10-01")),place:"Sanic Framework (OSS project)",place_website:"https://sanicframework.org/",role:"Core Developer",description:["Was invited to join the core developers team after having made several contributions to the project and offering frequent ","help to other users in the Sanic Discord server. The main contribution I made to this project while being core developer ","was making the usage of uvloop at runtime optional, which until then could only be opted out of during the installation step."].join("")},{start_date:new Date(Date.parse("2019-03-01")),end_date:new Date(Date.parse("2021-09-01")),place:"VATSIM (non-profit)",place_website:"https://www.vatsim.net/",role:"Software Developer",description:["Contributed to the development of several of services; most notably to their proprietary audio simulation codec known as ",'"Audio For VATSIM (AFV)". This codec is used by all of their clients and simulates real-life VHF and HF radio transmissions, ',"decreasing audio quality as distance between transmitter and receiver increases in the simulation."].join("")}],t=[{start_date:new Date(Date.parse("2018-09-01")),end_date:new Date(Date.parse("2022-06-01")),place:"U-TAD",place_website:"https://u-tad.com",role:"Software Engineering",description:"Graduated with a Bachelor's Degree in Software Engineering with mention/specialisation in Cybersecurity."}];return[e,n,t]}class Pe extends J{constructor(e){super(),W(this,e,Ae,Se,Y,{})}}export{Pe as component};
