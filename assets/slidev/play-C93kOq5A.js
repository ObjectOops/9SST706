const __vite__fileDeps=["assets/slidev/DrawingControls-Ct3WSJdZ.js","assets/modules/unplugin-icons-BDWBachz.js","assets/modules/vue-C0T5wuS6.js","assets/modules/shiki-CJhU-78l.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-B58IhXZA.js","assets/index-DTEfJucE.js","assets/index-ZSx4cTnX.css","assets/DrawingPreview-BB_gIMFu.css","assets/slidev/ContextMenu-DS5sMRo-.js","assets/slidev/IconButton-Cp9Y5W59.js","assets/slidev/title-renderer-DVvlbPdZ.js","assets/slidev/context-CCdBa_Iy.js","assets/ContextMenu-EZAKxWQn.css","assets/DrawingControls-C5T1oZL5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as v,a7 as P,o,c as u,A as e,b as f,e as n,f as B,i as M,g as i,af as I,y as T,k as h,ag as $,a6 as z,M as k,l as p,F as E,x as D,v as A,h as R,t as H}from"../modules/vue-C0T5wuS6.js";import{_ as g,o as w,a as N,q as O,v as S,w as b,x as W,y as L,d as V,z as U,j as C,A as j,B as F}from"../index-DTEfJucE.js";import{Q as G,G as Q,C as q,u as K,r as X,S as Y,N as J,o as Z}from"./ContextMenu-DS5sMRo-.js";import{c as ee,a as te}from"./DrawingPreview-B58IhXZA.js";import{o as oe}from"../modules/unplugin-icons-BDWBachz.js";import"../modules/shiki-CJhU-78l.js";import"./IconButton-Cp9Y5W59.js";import"./title-renderer-DVvlbPdZ.js";import"./context-CCdBa_Iy.js";const se="/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},le=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(_,{emit:r}){const a=_,l=P(a,"modelValue",r);function d(){l.value=!1}return(m,s)=>(o(),u(I,null,[e(l)?(o(),f("div",ae,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:s[0]||(s[0]=c=>d())}),n("div",{class:M(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[B(m.$slots,"default")],2)])):i("v-if",!0)],1024))}}),ne=g(le,[["__file","/workspaces/9SST706/node_modules/@slidev/client/internals/Modal.vue"]]),ie={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},re=["innerHTML"],ue=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:se,alt:"Slidev logo"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),z("dev ")])])],-1),de=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(_,{emit:r}){const l=P(_,"modelValue",r),d=T(()=>typeof w.info=="string");return(m,s)=>(o(),u(ne,{modelValue:e(l),"onUpdate:modelValue":s[0]||(s[0]=c=>$(l)?l.value=c:null),class:"px-6 py-4"},{default:h(()=>[n("div",ie,[d.value?(o(),f("div",{key:0,class:"mb-4",innerHTML:e(w).info},null,8,re)):i("v-if",!0),ue])]),_:1},8,["modelValue"]))}}),ce=g(de,[["__file","/workspaces/9SST706/node_modules/@slidev/client/internals/InfoDialog.vue"]]),pe=v({__name:"Controls",setup(_){const{isEmbedded:r}=N(),a=!w.drawings.presenterOnly&&!r.value,t=k();a&&O(()=>import("./DrawingControls-Ct3WSJdZ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(m=>t.value=m.default);const l=k(),d=k();return(m,s)=>(o(),f(E,null,[e(a)&&t.value?(o(),u(e(t),{key:0})):i("v-if",!0),p(G),p(Q),l.value?(o(),u(e(l),{key:1})):i("v-if",!0),d.value?(o(),u(e(d),{key:2,modelValue:e(S),"onUpdate:modelValue":s[0]||(s[0]=c=>$(S)?S.value=c:null)},null,8,["modelValue"])):i("v-if",!0),e(w).info?(o(),u(ce,{key:3,modelValue:e(b),"onUpdate:modelValue":s[1]||(s[1]=c=>$(b)?b.value=c:null)},null,8,["modelValue"])):i("v-if",!0),p(q)],64))}}),_e=g(pe,[["__file","/workspaces/9SST706/node_modules/@slidev/client/internals/Controls.vue"]]),me=v({__name:"PrintStyle",setup(_){function r(a,{slots:t}){if(t.default)return A("style",t.default())}return(a,t)=>(o(),u(r,null,{default:h(()=>[z(" @page { size: "+D(e(W))+"px "+D(e(L))+"px; margin: 0px; } ",1)]),_:1}))}}),fe=g(me,[["__file","/workspaces/9SST706/node_modules/@slidev/client/internals/PrintStyle.vue"]]),ve={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ge=v({__name:"PresenterMouse",setup(_){return(r,a)=>{const t=oe;return e(V).cursor?(o(),f("div",ve,[p(t,{class:"absolute stroke-white dark:stroke-black",style:R({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):i("v-if",!0)}}}),ye=g(ge,[["__file","/workspaces/9SST706/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),ke=n("div",{id:"twoslash-container"},null,-1),he=v({__name:"play",setup(_){const{next:r,prev:a,isPrintMode:t}=N(),{isDrawing:l}=ee(),d=H();function m(y){var x;C.value||y.button===0&&((x=y.target)==null?void 0:x.id)==="slide-container"&&(y.pageX/window.innerWidth>.5?r():a())}K(d),X();const s=T(()=>U.value||C.value),c=k();return(y,x)=>(o(),f(E,null,[e(t)?(o(),u(fe,{key:0})):i("v-if",!0),n("div",{id:"page-root",ref_key:"root",ref:d,class:M(["grid",e(F)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[p(te,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(t)?e(j).width.value:void 0,"is-main":"",onPointerdown:m,onContextmenu:e(Z)},{default:h(()=>[p(Y,{"render-context":"slide"}),p(ye)]),controls:h(()=>[e(t)?i("v-if",!0):(o(),f("div",{key:0,class:M(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[s.value?"!opacity-100 right-0":"opacity-0 p-2",e(l)?"pointer-events-none":""]])},[p(J,{persist:s.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e(C)?(o(),u(e(c),{key:0,resize:!0})):i("v-if",!0)],2),e(t)?i("v-if",!0):(o(),u(_e,{key:1})),ke],64))}}),Pe=g(he,[["__file","/workspaces/9SST706/node_modules/@slidev/client/pages/play.vue"]]);export{Pe as default};
