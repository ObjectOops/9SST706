import{d as l,t as u,ac as c,D as i,E as m,o as p,b as f,i as _,A as s}from"../modules/vue-C0T5wuS6.js";import{u as d}from"./context-CCdBa_Iy.js";import{c as v}from"./DrawingPreview-B58IhXZA.js";import{_ as g}from"../index-DTEfJucE.js";import"../modules/shiki-CJhU-78l.js";const w=l({__name:"DrawingLayer",setup(D){const{drauu:e,drawingEnabled:n,loadCanvas:t}=v(),r=d().$scale,a=u();return c(()=>{e.mount(a.value,a.value.parentElement),i(r,o=>e.options.coordinateScale=1/o,{immediate:!0}),t()}),m(()=>{e.unmount()}),(o,h)=>(p(),f("svg",{ref_key:"svg",ref:a,class:_(["w-full h-full absolute top-0",{"pointer-events-none":!s(n),"touch-none":s(n)}])},null,2))}}),S=g(w,[["__file","/workspaces/9SST706/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{S as default};
