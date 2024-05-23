import{g as J,B as O,C as Y,D as Q,E as W,F as X,G as Z,H as ee,J as ne,K as te,L as se,M as oe}from"../modules/unplugin-icons-BDWBachz.js";import{d as S,t as $,S as le,aC as ae,o as g,b as L,f as re,h as B,A as e,c as x,k as o,l as n,i as l,e as i,x as ie,aa as m,ab as ue,F as ce,ad as de,an as b,g as _e}from"../modules/vue-C0T5wuS6.js";import{L as pe}from"../modules/shiki-CJhU-78l.js";import{c as me}from"./DrawingPreview-B58IhXZA.js";import{V as D}from"./ContextMenu-DS5sMRo-.js";import{_ as M}from"../index-DTEfJucE.js";import{I as a}from"./IconButton-Cp9Y5W59.js";import"./title-renderer-DVvlbPdZ.js";import"./context-CCdBa_Iy.js";const ge=S({__name:"Draggable",props:{storageKey:{type:String,required:!1},initial:{type:Object,required:!1}},setup(h){const u=h,w=$(null),f=u.initial??{x:0,y:0},k=u.storageKey?le(u.storageKey,f):$(f),{style:y}=ae(w,{initialValue:k});return(v,d)=>(g(),L("div",{ref_key:"el",ref:w,class:"fixed",style:B(e(y))},[re(v.$slots,"default")],4))}}),we=M(ge,[["__file","/workspaces/9SST706/node_modules/@slidev/client/internals/Draggable.vue"]]),fe=i("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[i("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1),ve=i("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[i("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),i("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),i("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1),be={class:"flex bg-main p-2"},ke={class:"inline-block w-7 text-center"},ye={class:"pt-.5"},Ce=S({__name:"DrawingControls",setup(h){const{brush:u,canClear:w,canRedo:f,canUndo:k,clear:y,drauu:v,drawingEnabled:d,drawingMode:r,drawingPinned:c,brushColors:z}=me();function V(){v.undo()}function E(){v.redo()}let C="stylus";function _(p){r.value=p,d.value=!0,p!=="eraseLine"&&(C=p)}function K(p){u.color=p,d.value=!0,r.value=C}return(p,t)=>{const U=J,A=O,F=Y,N=Q,R=W,T=X,j=Z,q=ee,I=ne,P=te,G=se,H=oe;return g(),x(we,{class:l(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-20 border border-main",e(d)?"":e(c)?"opacity-40 hover:opacity-90":"opacity-0 pointer-events-none"]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:o(()=>[n(a,{title:"Draw with stylus",class:l({shallow:e(r)!=="stylus"}),onClick:t[0]||(t[0]=s=>_("stylus"))},{default:o(()=>[n(U)]),_:1},8,["class"]),n(a,{title:"Draw a line",class:l({shallow:e(r)!=="line"}),onClick:t[1]||(t[1]=s=>_("line"))},{default:o(()=>[fe]),_:1},8,["class"]),n(a,{title:"Draw an arrow",class:l({shallow:e(r)!=="arrow"}),onClick:t[2]||(t[2]=s=>_("arrow"))},{default:o(()=>[n(A)]),_:1},8,["class"]),n(a,{title:"Draw an ellipse",class:l({shallow:e(r)!=="ellipse"}),onClick:t[3]||(t[3]=s=>_("ellipse"))},{default:o(()=>[n(F)]),_:1},8,["class"]),n(a,{title:"Draw a rectangle",class:l({shallow:e(r)!=="rectangle"}),onClick:t[4]||(t[4]=s=>_("rectangle"))},{default:o(()=>[n(N)]),_:1},8,["class"]),n(a,{title:"Erase",class:l({shallow:e(r)!=="eraseLine"}),onClick:t[5]||(t[5]=s=>_("eraseLine"))},{default:o(()=>[n(R)]),_:1},8,["class"]),n(D),n(e(pe),null,{popper:o(()=>[i("div",be,[i("div",ke,ie(e(u).size),1),i("div",ye,[m(i("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>e(u).size=s),type:"range",min:"1",max:"15",onChange:t[7]||(t[7]=s=>r.value=e(C))},null,544),[[ue,e(u).size]])])])]),default:o(()=>[n(a,{title:"Adjust stroke width",class:l({shallow:e(r)==="eraseLine"})},{default:o(()=>[ve]),_:1},8,["class"])]),_:1}),(g(!0),L(ce,null,de(e(z),s=>(g(),x(a,{key:s,title:"Set brush color",class:l(e(u).color===s&&e(r)!=="eraseLine"?"active":"shallow"),onClick:xe=>K(s)},{default:o(()=>[i("div",{class:l(["w-6 h-6 transition-all transform border",e(u).color!==s?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:B(e(d)?{background:s}:{borderColor:s})},null,6)]),_:2},1032,["class","onClick"]))),128)),n(D),n(a,{title:"Undo",class:l({disabled:!e(k)}),onClick:t[8]||(t[8]=s=>V())},{default:o(()=>[n(T)]),_:1},8,["class"]),n(a,{title:"Redo",class:l({disabled:!e(f)}),onClick:t[9]||(t[9]=s=>E())},{default:o(()=>[n(j)]),_:1},8,["class"]),n(a,{title:"Delete",class:l({disabled:!e(w)}),onClick:t[10]||(t[10]=s=>e(y)())},{default:o(()=>[n(q)]),_:1},8,["class"]),n(D),n(a,{title:e(c)?"Unpin drawing":"Pin drawing",class:l({shallow:!e(c)}),onClick:t[11]||(t[11]=s=>c.value=!e(c))},{default:o(()=>[m(n(I,{class:"transform -rotate-45"},null,512),[[b,e(c)]]),m(n(P,null,null,512),[[b,!e(c)]])]),_:1},8,["title","class"]),e(d)?(g(),x(a,{key:0,title:e(c)?"Drawing pinned":"Drawing unpinned",class:l({shallow:!e(d)}),onClick:t[12]||(t[12]=s=>d.value=!e(d))},{default:o(()=>[m(n(G,null,null,512),[[b,e(c)]]),m(n(H,null,null,512),[[b,!e(c)]])]),_:1},8,["title","class"])):_e("v-if",!0)]),_:1},8,["class"])}}}),Ee=M(Ce,[["__file","/workspaces/9SST706/node_modules/@slidev/client/internals/DrawingControls.vue"]]);export{Ee as default};
