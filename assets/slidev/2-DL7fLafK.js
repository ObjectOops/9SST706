import{d as y,r as L,A as u,o,c as p,k as h,f as g,b as c,y as v,F as $,ad as P,i as T,l as f,g as k,h as N,q as A,s as I,e as D}from"../modules/vue-C0T5wuS6.js";import{a as M,_ as m,a7 as b,a8 as C}from"../index-Crn5damh.js";import{T as w}from"./title-renderer-CLknm0Cn.js";import{u as q,p as B,f as F}from"./context-C2gG_ffJ.js";import{I as H}from"./default-FsmVusaZ.js";import"../modules/shiki-CJhU-78l.js";const R=["href","innerHTML"],V=["href"],z=y({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(d){const{isPrintMode:n}=M();return(t,i)=>{const r=L("RouterLink");return!u(n)&&t.title?(o(),p(r,{key:0,to:String(t.to),onClick:i[0]||(i[0]=a=>a.target.blur()),innerHTML:t.title},null,8,["to","innerHTML"])):!u(n)&&!t.title?(o(),p(r,{key:1,to:String(t.to),onClick:i[1]||(i[1]=a=>a.target.blur())},{default:h(()=>[g(t.$slots,"default")]),_:3},8,["to"])):u(n)&&t.title?(o(),c("a",{key:2,href:`#${t.to}`,innerHTML:t.title},null,8,R)):(o(),c("a",{key:3,href:`#${t.to}`},[g(t.$slots,"default")],8,V))}}}),O=m(z,[["__file","/workspaces/9SST706/node_modules/@slidev/client/builtin/Link.vue"]]),E=["start"],j=y({__name:"TocList",props:{level:{type:Number,required:!0,default:1},start:{type:Number,required:!1},listStyle:{type:[String,Array],required:!1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(d){const n=d,t=v(()=>[...b(n.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${n.level}`]),i=v(()=>[...b(n.listStyle||[])]);return(r,a)=>{const _=O,s=L("TocList",!0);return r.list&&r.list.length>0?(o(),c("ol",{key:0,class:T(t.value),start:r.level===1?r.start:void 0,style:N(i.value.length>=r.level?`list-style:${i.value[r.level-1]}`:void 0)},[(o(!0),c($,null,P(r.list,e=>(o(),c("li",{key:e.path,class:T(["slidev-toc-item",[{"slidev-toc-item-active":e.active},{"slidev-toc-item-parent-active":e.activeParent}]])},[f(_,{to:e.path},{default:h(()=>[f(u(w),{no:e.no},null,8,["no"])]),_:2},1032,["to"]),e.children.length>0?(o(),p(s,{key:0,level:r.level+1,"list-style":r.listStyle,list:e.children,"list-class":r.listClass},null,8,["level","list-style","list","list-class"])):k("v-if",!0)],2))),128))],14,E)):k("v-if",!0)}}}),Y=m(j,[["__file","/workspaces/9SST706/node_modules/@slidev/client/builtin/TocList.vue"]]),G=y({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},start:{type:[String,Number],required:!1,default:1},listStyle:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:Number.POSITIVE_INFINITY},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(d){const n=d,{$slidev:t}=q();function i(s,e=1){if(e>Number(n.maxDepth))return[];if(e<Number(n.minDepth)){const l=s.find(S=>S.active||S.activeParent);return l?i(l.children,e+1):[]}return s.map(l=>({...l,children:i(l.children,e+1)}))}function r(s){return s.filter(e=>e.active||e.activeParent||e.hasActiveParent).map(e=>({...e,children:r(e.children)}))}function a(s){const e=s.some(l=>l.active||l.activeParent||l.hasActiveParent);return s.filter(()=>e).map(l=>({...l,children:a(l.children)}))}const _=v(()=>{const s=t==null?void 0:t.nav.tocTree;if(!s)return[];let e=i(s);return n.mode==="onlyCurrentTree"?e=r(e):n.mode==="onlySiblings"&&(e=a(e)),e});return(s,e)=>{const l=Y;return o(),c("div",{class:"slidev-toc",style:N(`column-count:${s.columns}`)},[f(l,{level:1,start:s.start,"list-style":s.listStyle,list:_.value,"list-class":s.listClass},null,8,["start","list-style","list","list-class"])],4)}}}),J=m(G,[["__file","/workspaces/9SST706/node_modules/@slidev/client/builtin/Toc.vue"]]),K=D("h1",null,"Table of Contents",-1),Q={__name:"2",setup(d){return B(C),q(),(n,t)=>{const i=J;return o(),p(H,A(I(u(F)(u(C),1))),{default:h(()=>[K,f(i,{minDepth:"1",maxDepth:"2"})]),_:1},16)}}},te=m(Q,[["__file","/@slidev/slides/2.md"]]);export{te as default};