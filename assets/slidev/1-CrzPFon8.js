import{d as p,y as f,o as d,b as m,e as s,f as v,h,c as y,k as x,q as k,s as S,A as n,a6 as c}from"../modules/vue-C0T5wuS6.js";import{u,p as b,f as g}from"./context-C2gG_ffJ.js";import{_,a6 as l}from"../index-Crn5damh.js";import"../modules/shiki-CJhU-78l.js";function i(e){return e.startsWith("/")?"/9SST706/"+e.slice(1):e}function w(e,r=!1){const t=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),o={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?r?`linear-gradient(#0005, #0008), url(${i(e)})`:`url("${i(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const B={class:"my-auto w-full"},C=p({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){u();const r=e,t=f(()=>w(r.background,!0));return(o,a)=>(d(),m("div",{class:"slidev-layout cover text-center",style:h(t.value)},[s("div",B,[v(o.$slots,"default")])],4))}}),P=_(C,[["__file","/workspaces/9SST706/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),$=s("h1",null,"U.S. Policy on Cybersecurity",-1),A=s("h2",null,"A brief overview",-1),T=s("p",null,[c("Alex Y."),s("br"),c(" 2024")],-1),z={__name:"1",setup(e){return b(l),u(),(r,t)=>(d(),y(P,k(S(n(g)(n(l),0))),{default:x(()=>[$,A,T]),_:1},16))}},V=_(z,[["__file","/@slidev/slides/1.md"]]);export{V as default};